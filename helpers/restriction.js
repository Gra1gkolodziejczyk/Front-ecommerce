import Router from "next/router";
import { getCookie, TOKEN_COOKIE, USER_COOKIE } from "./session";

export function isAuthenticated(context) {
    const token = getCookie(TOKEN_COOKIE, context);
    const isLoggedIn = token ? true : false;

    return { isLoggedIn };
}

export function secretPage(context) {
    const token = getCookie(TOKEN_COOKIE, context);
    const isLoggedIn = token ? true : false;
    if (!isLoggedIn) {
        if (typeof window !== 'undefined') {
            Router.replace('/login');
        }
    }
    return { isLoggedIn };
}

export function withData(context) {
    const token = getCookie(TOKEN_COOKIE, context);
    const isLoggedIn = token ? true : false;
    const isUser = getCookie(USER_COOKIE, context);
    const userCookie = isUser ?? {};
    const user = userCookie ?? {};
    return { user, isLoggedIn, token };
}

export function isAuthorized(resourceOwnerId, locale) {
    const { user, isLoggedIn } = withData();
    const userObj = JSON.parse(user);
    let authorized = false;
  
    if (!isLoggedIn) {
      if (typeof window !== 'undefined') {
        Router.replace(`/login`);
      }
    } else {
      if (resourceOwnerId == userObj.id) {
        authorized = true;
      } else {
        authorized = false;
      }
    }
    return { authorized };
  }

  export function isLoggedInOrLogThenRedirect(resourceOwnerId = null, locale = 'fr') {
    const { user, isLoggedIn } = withData();
    const userObj = (user && (Object.keys(user).length !== 0) && (user.constructor === Object)) ? JSON.parse(user) : {};
    let authorized = false;
  
    if (!isLoggedIn) {
      if (typeof window !== 'undefined') {
        // Redirection a tester ??
        const nextLocation = window.location.pathname ?? '/';
        Router.replace(`${process.env.LOCAL_FRONT_SERVER}/login?next=${nextLocation}`);
      }
    } else {
      if (resourceOwnerId == userObj?.id) {
        authorized = true;
      } else {
        authorized = false;
      }
    }
    return { authorized };
  }