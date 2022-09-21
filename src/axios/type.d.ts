// types.ts
import type { AxiosRequestConfig, AxiosResponse } from 'axios'


export interface Interceptors {
  // 请求拦截
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsCatch?: (err: any) => any
  // 响应拦截
  responseInterceptor?: (config: AxiosResponse) => AxiosResponse | any
  responseInterceptorsCatch?: (err: any) => any
}


// 自定义传入的参数
export interface RequestConfig extends AxiosRequestConfig {
  interceptors?: Interceptors
}

export interface UploadFileParams {
  // Other parameters
  data?: Recordable;
  // File parameter interface field name
  name?: string;
  // file name
  file: File | Blob;
  // file name
  filename?: string;
  [key: string]: any;
}
