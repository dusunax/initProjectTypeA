// custom axios interceptor
import axios from "axios";
const SERVER_BASE = import.meta.env.VITE_APP_API;

const client = axios.create({
  baseURL: SERVER_BASE,
});

client.interceptors.request.use(
  async (config) => {
    const noTokenPath: string[] = []; // 토큰이 없어도 되는 path
    const accessToken = "나토큰";

    if (accessToken && !noTokenPath.includes(config.url as string)) {
      config.headers = {
        "X-TOKEN": `${accessToken}`,
      };
    } else {
      config.headers = {};
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default client;
