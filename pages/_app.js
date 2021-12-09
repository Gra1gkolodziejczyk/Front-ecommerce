import App from 'next/app';
import AuthProvider from '../context/AuthProvider';
import GlobalStyles from '../static/style/GlobalStyle.style';

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
    const { user, isLoggedIn, token } = ctx;
    const tokenCookie = token;

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
        <GlobalStyles />
        <Component 
          user={AuthUser}
          isLoggedIn={isLoggedIn}
          {...pageProps}
        />
      </AuthProvider>
    )
  }
}


export default MyApp
