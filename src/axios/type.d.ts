// types.ts
import type { AxiosRequestConfig, AxiosResponse } from 'axios'


export interface Interceptors {
  // 请求拦截
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsCatch?: (err: any) => any
  // 响应拦截
  responseInterceptor?: (config: AxiosResponse) => AxiosResponse
  responseInterceptorsCatch?: (err: any) => any
}


// 自定义传入的参数
export interface RequestConfig extends AxiosRequestConfig {
  interceptors?: Interceptors
}
