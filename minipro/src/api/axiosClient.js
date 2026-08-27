import axios from "axios"

const BASE_URL = "http://localhost:4000";

const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.message || error.message || "something wrong";
    return Promise.reject(new Error(message));
  }
);


export default axiosClient;