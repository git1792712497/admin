import axios from 'axios'
import qs from 'qs'
import {download} from './download'
import { ContentType } from './config'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import type { CustomRequestConfig, Interceptors } from './type'


class Axios {
  instance: AxiosInstance
  interceptors: Interceptors

  constructor(config: CustomRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    //全局请求拦截
    this.instance.interceptors.request.use((config: AxiosRequestConfig) => {
      //实例请求拦截
      return config
    }, (err: any) => {
      return Promise.reject(err)
    })
    //全局响应拦截
    this.instance.interceptors.response.use((result: AxiosResponse) => {
      result.request.responseType === "blob" && download(result)
      return result.data
    }, (err: any) => {
      return Promise.reject(err)
    })
    // 实例拦截器
    this.instance.interceptors.request.use(
        this.interceptors?.requestInterceptor,
        this.interceptors?.requestInterceptorCatch,
    )
    this.instance.interceptors.response.use(
        this.interceptors?.responseInterceptor,
        this.interceptors?.responseInterceptorCatch,
    )
  }

  request<T = any>(config: CustomRequestConfig){
    return new Promise<T>((resolve: any, reject) => {
      //参数拼接到url
      if (config.paramsToUrl === true) {
        config.url = `${config.url}?${qs.stringify(config.data)}`
      }
      // 单个请求的请求拦截
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      //axios实例上request
      this.instance.request<any,T>(config).then(res => {
        //单独请求的响应拦截
        if (config.interceptors?.responseInterceptor) {
          res = config.interceptors.responseInterceptor(res)
        }
        resolve(res)
      }).catch(err => reject(err))
    })
  }

  get(params: CustomRequestConfig) {
    return this.request({...params, method: 'get'})
  }

  post(data: CustomRequestConfig) {
    return this.request({...data, method: 'post'})
  }

  patch(data: CustomRequestConfig) {
    return this.request({...data, method: 'patch'})
  }

  delete(data: CustomRequestConfig) {
    return this.request({...data, method: 'delete'})
  }

  /*
  不考虑文件大小文件上传,调用后端提供的post请求接口
  FormData携带File对象或者Blob(二进制)对象
  */
  uploadFile(config: AxiosRequestConfig){
    const formData = new FormData();
    const customFilename = config.data.name || 'file';

    if (config.data.filename) {
      formData.append(customFilename, config.data.file, config.data.filename);
    } else {
      formData.append(customFilename, config.data.file);
    }

    if (config.data.data) {
      Object.keys(config.data.data).forEach(key => {
        const value = config.data.data![key];
        if (Array.isArray(value)) {
          value.forEach((item) => {
            formData.append(`${key}[]`, item);
          });
          return;
        }
        formData.append(key, config.data.data![key]);
      });
    }
    return this.request({
      ...config,
      method: 'POST',
      data: formData,
      headers: {
        'Content-type': ContentType.FORM_DATA
      }
    });
  }

}

export default Axios
