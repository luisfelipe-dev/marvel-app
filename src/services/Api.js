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

let timestamp = new Date().getTime();
let hashCode = md5(timestamp + PRIVATE_KEY + PUBLIC_KEY);

export const basicFetch = async (name = null, page = 0) => {
  const req = await api.get(
    `characters?${
      name ? `nameStartsWith=${name}&` : ""
    }orderBy=name&offset=${page}&limit=10&apikey=${PUBLIC_KEY}&ts=${timestamp}&hash=${hashCode}`
  );
  return req;
};

export const getCharacterById = async (param) => {
  try {
    const response = await api.get(
      `characters/${param}?&apikey=${PUBLIC_KEY}&ts=${timestamp}&hash=${hashCode}`
    );
    const { results } = response.data.data;
    return results;
  } catch (error) {
    console.log(error);
  }
};


export const getComicsById = async (param) => {
  try {
    const response = await api.get(
      `characters/${param}/comics?format=comic&formatType=comic&orderBy=focDate&limit=8&apikey=${PUBLIC_KEY}&ts=${timestamp}&hash=${hashCode}`
    );
    const { results } = response.data.data;
    return results;
  } catch (error) {
    console.log(error);
  }
}

export const getSeriesById = async (param) => {
  try {
    const response = await api.get(
      `characters/${param}/series?&limit=4&apikey=${PUBLIC_KEY}&ts=${timestamp}&hash=${hashCode}`
    );
    const { results } = response.data.data;
    return results;
  } catch (error) {
    console.log(error);
  }
}
