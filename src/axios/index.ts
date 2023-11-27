// axiosInstance.ts
import axiosCommon from "./common/common";
import { AxiosInstance } from "axios";

// Create Axios instance without using await
const axiosInstance: AxiosInstance = axiosCommon;

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config: any) => {
    // Do something before request is sent
    console.log("Request Interceptor:", config);
    return config;
  },
  (error: any) => {
    // Do something with request error
    console.error("Request Error Interceptor:", error);
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response: any) => {
    // Do something with the response data
    console.log("ointercepeorjvneircbn", response);
    return response;
  },
  (error: any) => {
    // Do something with response error
    console.error("Response Error Interceptor:", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
