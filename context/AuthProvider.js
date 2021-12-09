import React, { useState, createContext } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { TOKEN_COOKIE, USER_COOKIE } from '../helpers/session';
import redirect from '../helpers/redirect';
import fetch from 'isomorphic-unfetch';


export const AuthContext = createContext();

const addItem = (key, value = '') => {
  /**
   *  Using the local storage code....
   */
  // if (key) localStorage.setItem(key, value);

  /**
   *  Using the Cookies code...
   */
  if (key) Cookies.set(key, value, { expires: 7 });
};

const clearItem = key => {
  /**
   *  Using the local storage code....
   */
  // localStorage.removeItem(key);

  /**
   *  Using the Cookies code...
   */
  Cookies.remove(key);
};

const isValidToken = () => {
  /**
   *  Using the local storage code....
   */
  // const token = localStorage.getItem(TOKEN_COOKIE);

  /**
   *  Using the Cookies code...
   */
  const token = Cookies.get(TOKEN_COOKIE);
  // JWT decode & check token validity & expiration.
  if (token) return true;
  return false;
};

const AuthProvider = props => {
  const router = useRouter(); 
  const { locale } = router;
  const [loggedIn, setLoggedIn] = useState(isValidToken());
  const [loggedOut, setLoggedOut] = useState(true);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [apiErrorMessage, setApiErrorMessage] = useState([]);

  ////console.log(loggedIn, 'loggedIn');

  
  const signIn = (params, redirectionDatas) => { 
    //console.log(params);
      return fetch(`${process.env.SERVER_API}/api/login`, 
        {
          method: 'POST',
          // Authorization: `Bearer ${token}`,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
          },
          body: JSON.stringify(params),
        },
        )
        .then(response => {
          if(!response.ok) {
            response.json()
            .then(json => {
              setApiErrorMessage(json.message);
            })
          }
          return response.json()  
        })
        .then(json => {
            if (json.token) {
              let user = json.user;
              let token = json.token;
              setUser(user);
              setToken(token);
              addItem(TOKEN_COOKIE, token);
              addItem(USER_COOKIE, user);
              setLoggedIn(true);
              setApiErrorMessage(null);

              if (redirectionDatas.next !== undefined) {
                const nextRoute = redirectionDatas.next;
                delete redirectionDatas.next;
                router.push({ pathname: decodeURIComponent(nextRoute), query: redirectionDatas, locale: locale }); 
              } else {
                router.push({ pathname: '/', locale: locale});
              }
            } 
        })
        .catch(error => {
          //console.log("error:"+ error.message);
        });
  };

  const signUp = (params, redirectionUrl, locale) => {

    //console.log('url',redirectionUrl)
    //console.log('locale',locale)

    return fetch(`${process.env.SERVER_API}/api/register`, 
        {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
          },
          body: JSON.stringify(params),
        },
        )
        .then(response => {
          if(response.status === 422) {
            setApiErrorMessage("User already exists");
          }
          return response.json()  
        })
        .then(json => {
            if (json.token) {
            let user = json.user;
            let token = json.token;
            setUser(user);
            setToken(token);
            addItem(TOKEN_COOKIE, token);
            addItem(USER_COOKIE, user);
            setLoggedIn(true);
            setApiErrorMessage(null);
            router.push({pathname: redirectionUrl, locale: locale});
          } 
        })
        .catch(error => {
          //console.log("error:"+ error.message);
        });
  };

  /**
   * For 3rd-party Authentication [e.g. Autho0, firebase, AWS etc]
   *
   */
  const tokenAuth = (token, user = {}) => {
    setUser(user);
    setToken(token);
    addItem(TOKEN_COOKIE, token);
    addItem(USER_COOKIE, user);
    setLoggedIn(true);
  };

  const forgetPass = params => {
    //console.log(params, 'forget password form Props');
  };
  const changePass = params => {
    //console.log(params, 'change password form Props');
  };

  const logOut = () => {
    setUser(null);
    setToken(null);
    clearItem(TOKEN_COOKIE);
    clearItem(USER_COOKIE);
    setLoggedIn(false);
    redirect({}, `/${locale}/`);
  };

  

  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        logOut,
        signIn,
        signUp,
        forgetPass,
        changePass,
        tokenAuth,
        user,
        token,
        apiErrorMessage,
      }}
    >
      <>{props.children}</>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
