import { PUBLIC_KEY, URL_API, PRIVATE_KEY } from "../util/Constants";
import Axios from "axios";
import md5 from "md5";

const api = Axios.create({ baseURL: URL_API });
api.interceptors.request.use(
  (config) => {
    config.headers = {
      Accept: "*/*",
    };
    return config;
  },
  (error) => Promise.reject(error)
);

export const basicFetch = async () => {
  const ts = new Date().getTime();
  const hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY);
  const req = await api.get(
    `characters?orderBy=name&offset=0&limit=10&apikey=${PUBLIC_KEY}&ts=${ts}&hash=${hash}`
  );
  return req;
};
