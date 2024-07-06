import axios, { AxiosResponse } from "axios";

export type ResponseType<T> = Promise<AxiosResponse<T>>;

const BASE_URL = "http://localhost:3000/";

const Api = () => {
  const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    }
  });

  instance.interceptors.request.use(async function (config) {
    return config;
  });

  instance.interceptors.response.use(
    (config) => config,
    (error) => {
      alert(error);
      return Promise.reject(error);
    }
  );

  return instance;
};

export default Api();
