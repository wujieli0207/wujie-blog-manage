import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosResponseHeaders,
} from "axios";
import { ElMessage } from "element-plus";
import { IResponseData } from "./types";
import { EResponseCode, EhttpCode } from "../../enums/httpEnum";

let service: AxiosInstance;

if (import.meta.env.MODE === "development") {
  // 开发环境超时时间为 15 秒
  service = axios.create({
    baseURL: "/api",
    timeout: 15 * 1000,
  });
} else {
  // 发布环境超时时间为 10 秒
  service = axios.create({
    baseURL: "/api",
    timeout: 10 * 1000,
  });
}

// request 请求拦截配置
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (error: any) => {
    console.log("error: ", error);
    Promise.reject(error);
  }
);

// response 响应拦截配置
service.interceptors.response.use(
  (res: AxiosResponse) => {
    if (res.data === EhttpCode.ok) {
      const data: IResponseData = res.data;

      if (data.code === EResponseCode.success) {
        return data.data;
      } else {
        ElMessage({
          message: data.message,
          type: "error",
        });
      }
    } else {
      ElMessage({
        message: "网络错误！",
        type: "error",
      });
      return Promise.reject(new Error(res.data.message) || "Error");
    }
  },
  (error: any) => {
    Promise.reject(error);
  }
);

export default service;
