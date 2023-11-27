// axiosInstance.ts
import axios, { AxiosInstance } from "axios";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const axiosInstance: AxiosInstance = axios.create({ baseURL });

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    console.log("Request Interceptor:", config);
    return config;
  },
  (error) => {
    // Do something with request error
    console.error("Request Error Interceptor:", error);
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Do something with the response data
    console.log("Response Interceptor:", response);
    return response;
  },
  (error) => {
    // Do something with response error
    console.error("Response Error Interceptor:", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
