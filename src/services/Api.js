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

export const basicFetch = async (name = null, page = 0) => {
  const timestamp = new Date().getTime();
  const hashCode = md5(timestamp + PRIVATE_KEY + PUBLIC_KEY);
  const startsWith = name ? `nameStartsWith=${name}&` : '';
  const req = await api.get(
    `characters?${startsWith}orderBy=name&offset=${page}&limit=10&apikey=${PUBLIC_KEY}&ts=${timestamp}&hash=${hashCode}`
  );
  return req;
};
