import { AxiosRequestConfig } from "axios";

/**
 * @description axios 默认配置
 */

export const defaultConfig: AxiosRequestConfig = {
  timeout: 10 * 1000,
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
};
