import axios from 'axios'
import qs from 'qs'
import {download} from './download'
import { ContentType } from './config'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import type { RequestConfig, Interceptors } from './type'


class Axios {
  instance: AxiosInstance
  interceptors: Interceptors

  constructor(config: RequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    //全局请求处理
    this.instance.interceptors.request.use((config: AxiosRequestConfig) => {
      //实例请求拦截
      this.interceptors?.requestInterceptor(config)
      return config
    }, (err: any) => {
      console.log(err, '全局请求错误拦截')
      //实例请求错误拦截
      this.interceptors?.requestInterceptorsCatch(err)
    })

    this.instance.interceptors.response.use((res: AxiosResponse) => {
      res.request.responseType === "blob" && download(res)
      this.interceptors?.responseInterceptor(res)
      return res
    }, (err: any) => {
      console.log('全局响应错误', err)
      //axios实例响应错误
      this.interceptors?.responseInterceptorsCatch(err)
    })
  }


  request<T>(config: RequestConfig): Promise<T> {
    return new Promise((resolve: any, reject) => {
      //参数拼接到url
      if (config.paramsToUrl === true) {
        config.url = `${config.url}?${qs.stringify(config.data)}`
      }
      //axios实例上request
      this.instance.request(config).then(res => {
        // 单个请求的请求拦截
        if (config.interceptors?.requestInterceptor) {
          config = config.interceptors.requestInterceptor(config)
        }
        //单独请求的响应拦截
        if (config.interceptors?.responseInterceptor) {
          res = config.interceptors.responseInterceptor(res)
        }
        resolve(res)
      }).catch(err => reject(err))
    })
  }

  get(params: RequestConfig) {
    return this.request({...params, method: 'get'})
  }

  post(data: RequestConfig) {
    return this.request({...data, method: 'post'})
  }

  patch(data: RequestConfig) {
    return this.request({...data, method: 'patch'})
  }

  delete(data: RequestConfig) {
    return this.request({...data, method: 'delete'})
  }

  /*
  不考虑文件大小文件上传,调用后端提供的post请求接口
  FormData携带File对象或者Blob(二进制)对象
  */
  uploadFile<T>(config: AxiosRequestConfig){
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
