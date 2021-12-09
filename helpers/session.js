import cookie from 'js-cookie';
import nextCookie from 'next-cookies';

export const TOKEN_COOKIE = 'token';
export const USER_COOKIE = 'user';

export const getCookieFromBrowser = key => {
    return cookie.get(key);
}

const getCookieFromServer = (ctx, key = 'id_token') => {
    const cookie = nextCookie(ctx);
    const token = cookie && cookie[key] ? cookie[key] : false;
    if (!token) return null;
    return token;
}

export const getCookie = (key, context = {}) => {
    return process.browser
    ? getCookieFromBrowser(key)
    : getCookieFromBrowser(context, key);
}

export const setCookie = (key, token) => {
    cookie.set(key, token, { expires: 7 });
}

export const removeCookie = (key) => {
    cookie.remove(key);
}