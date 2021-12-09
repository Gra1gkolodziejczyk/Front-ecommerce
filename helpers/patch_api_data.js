import Cookies from 'js-cookie';
import fetch from 'isomorphic-unfetch';
import { TOKEN_COOKIE, USER_COOKIE } from './session';
import { message } from 'antd';

const PatchAPIData = async (endpoint, dataToSend = {}, stringify = true) => {

  const token = Cookies.get(TOKEN_COOKIE);
  const url = process.env.SERVER_API + endpoint;

  // const isNode = typeof (window) === "undefined";
  // const nodeOptions = !isNode ? {} : {
  //   agent: new (require("https").Agent)({
  //     rejectUnauthorized: false
  //   }),
  //   headers: {
  //     "Content-Type": "application/json",
  //     "Cookie": token
  //   }
  // };

  const settings = {
    method: 'PATCH',
    // mode: 'no-cors',
    headers: {
      Authorization: 'Bearer ' + token,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: stringify === true ? JSON.stringify(dataToSend) : dataToSend,
    // ...nodeOptions
  }

  if (token) {
    const response = await fetch(url, settings);
    // if (!response.ok) throw Error(response.message);
    if (!response.ok) {
      if (response.statusCode === 403) {
        message.error('Vous n\'avez pas les droits suffisants pour effectuer cette action');
      } else if (response.statusCode === 401) {
        message.error('Vous devez être connecté pour effectuer cette action');
      } else {
        message.error('Une erreur est survenue');
      }
      return response;
    } 

    const json = await response.json();
    return json;
  }
}

export default PatchAPIData;
