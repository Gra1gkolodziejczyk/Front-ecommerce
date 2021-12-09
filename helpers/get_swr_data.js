import Cookies from "js-cookie";
import fetch from "isomorphic-unfetch";
import { useRouter } from 'next/router';

const getSWRData = (API_URL, path) => {
  const router = useRouter(); 
  const { locale } = router;
  const token = Cookies.get("token");

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
    method: "GET",
    // mode: 'no-cors',
    headers: {
      Authorization: "Bearer " + token,
      Accept: "application/json",
      "Content-Type": "application/json",
      "Accept-Language": locale,
    },
    // ...nodeOptions
  };

  async function fetcher(path) {
    const res = await fetch(API_URL + path, settings);

    if (!res.ok) throw Error(res.status);

    const json = await res.json();

    return json;
  }

  return fetcher;
};

export default getSWRData;
