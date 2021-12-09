import Cookies from "js-cookie";
import fetch from "isomorphic-unfetch";
import { TOKEN_COOKIE, USER_COOKIE } from "./session";

const DeleteAPIData = async (endpoint, dataToSend = null) => {
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
    method: "DELETE",
    // mode: 'no-cors',
    headers: {
      Authorization: "Bearer " + token,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    ...(dataToSend
      ? {
          body: JSON.stringify(dataToSend),
        }
      : null),
      // ...nodeOptions
  };

  if (token) {
    const response = await fetch(url, settings);

    return response;
  }
};

export default DeleteAPIData;
