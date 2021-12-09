import Cookies from "js-cookie";
import fetch from "isomorphic-unfetch";
import { TOKEN_COOKIE, USER_COOKIE, getCookie } from "./session";
import { message } from "antd";

const PostAPIData = async (endpoint, dataToSend = {}, socketId = null) => {
  const token = getCookie("token");
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
    method: "POST",
    // mode: 'no-cors',
    headers: {
      Authorization: "Bearer " + token,
      Accept: "application/json",
      "Content-Type": "application/json",
      'X-Socket-Id': socketId
    },
    body: JSON.stringify(dataToSend),
    // ...nodeOptions
  };

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
};

export default PostAPIData;
