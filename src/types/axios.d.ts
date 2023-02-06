import type { AxiosRequestConfig, AxiosResponse } from 'axios'


export interface Interceptors<T = AxiosResponse> {
  // 请求拦截
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: any) => any
  // 响应拦截
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (err: any) => any
}


// 自定义传入的参数
export interface CustomRequestConfig extends AxiosRequestConfig {
  interceptors?: Interceptors<T>
  paramsToUrl?: boolean
}

