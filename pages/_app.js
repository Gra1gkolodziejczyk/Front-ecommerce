import { DefaultSeo } from 'next-seo';
import App from 'next/app';
import LayoutPage from '../container/Layout/Layout';
import { withData } from '../helpers/restriction';
import AuthProvider from '../context/AuthProvider';
import GlobalStyle from '../public/style/GlobalStyle.style';

// ne touche pas trop à ce fichier il est le centre névralgique de ton application c'est le app.js
// en React

class MyApp extends App {
  constructor(props) {
    super(props);
    this.state = {
      currentSelectedTheme: "defaultTheme",
    };
  }

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const { query, pathname, asPath, locale } = ctx;
    const { user, isLoggedIn, token } = withData(ctx);
    const tokenCookie = token;

    let isProtectedRoute = [
      `/dashboard`,
    ].includes(pathname);

    if (!isLoggedIn && isProtectedRoute && ctx.res) {
      ctx.res.writeHead(302, {Location: `${process.env.LOCAL_FRONT_SERVER}/login?next=${asPath}`});
      ctx.res.end();
    }
    return { pageProps, query, pathname, user, isLoggedIn, tokenCookie }
  }

  render() {

    const {
      Component,
      pageProps,
      query,
      user,
      isLoggedIn,
      locale,
      pathname,
      tokenCookie,
    } = this.props;

    const AuthUser = typeof user === 'string' ? JSON.parse(user) : user;

    return (
      <AuthProvider>
        <LayoutPage user={AuthUser} isLoggedIn={isLoggedIn}>
          <DefaultSeo 
            title='Mars High-Tech'
            description='Mars High-Tech website'
            openGraph={{
              type: "website",
              locale: locale,
              url: "https://www.mars-high-tech.com",
              site_name: "Mars High-Tech",
            }}
            twitter={{
              handle: "@handle",
              site: "@site",
              cardType: "summary_large_image"
            }}
          />
          <GlobalStyle />
          <Component 
            user={AuthUser}
            isLoggedIn={isLoggedIn}
            {...pageProps}
          />
        </LayoutPage>
      </AuthProvider>
    )
  }
}


export default MyApp
