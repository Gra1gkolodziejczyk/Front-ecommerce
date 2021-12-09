import App from 'next/app';

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
  }
}


export default MyApp
