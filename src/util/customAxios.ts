import axios from "axios";

const { VITE_BASE_URL } = import.meta.env;

const customAxios = axios.create({
  baseURL: VITE_BASE_URL,
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
  },
});

customAxios.interceptors.request.use(
  (req) => {
    return req;
  },

  (error) => {
    throw new Error("error");
  }
);

customAxios.interceptors.response.use(
  (res) => {
    return res;
  },

  (error) => {
    throw new Error("error");
  }
);

export default customAxios;
