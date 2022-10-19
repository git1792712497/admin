import axios from 'axios'
import qs from 'qs'
import {ContentType} from './config'
import type {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios'
import type {RequestConfig, Interceptors,UploadFileParams} from './type'


class Axios {
   instance: AxiosInstance
   interceptors: Interceptors
   
   constructor(config: RequestConfig) {
      this.instance = axios.create(config)
      this.interceptors = config.interceptors
      
      this.instance.interceptors.request.use((config: AxiosRequestConfig) => {
             console.log('全局请求拦截器',config)
         
             return config
          }, (err: any) => {
             console.log(err, '全局请求错误')
          }
      )
      
      //每个实例自定义拦截器
      this.instance.interceptors.request.use(this.interceptors?.requestInterceptor, this.interceptors?.requestInterceptorsCatch)
      this.instance.interceptors.response.use(this.interceptors?.responseInterceptor, this.interceptors?.responseInterceptorsCatch)
      
      this.instance.interceptors.response.use((res: AxiosResponse) => {
             return res.data
          }, (err: any) => {
             console.error('全局响应错误',err)
          }
      )
   }
   
   request<T>(config: RequestConfig): Promise<T> {
      return new Promise((resolve: any, reject) => {
         //参数拼接到url
         if (config.paramsToUrl === true){
            config.url = `${config.url}?${qs.stringify(config.data)}`
         }
         // 1.单个请求的请求拦截
         if (config.interceptors?.requestInterceptor) {
            config = config.interceptors.requestInterceptor(config)
         }
         //axios实例上request
         this.instance.request(config).then(res => {
            //单独请求的响应拦截
            if (config.interceptors?.responseInterceptor) {
               res = config.interceptors.responseInterceptor(res)
            }
            resolve(res)
         }).catch(err => reject(err))
      })
   }
   
   get(params:RequestConfig) {
      return this.request({...params, method: 'get'})
   }
   
   post(data:RequestConfig) {
      return this.request({...data, method: 'post'})
   }
   
   patch(data:RequestConfig){
      return this.request({...data, method: 'patch'})
   }
   
   delete(data:RequestConfig){
      return this.request({...data, method: 'delete'})
   }
   
   uploadFile<T = any>(config: AxiosRequestConfig){
      const formData = new FormData();
      const customFilename = config.data.name || 'file';
      
      if(config.data.filename){
         formData.append(customFilename, config.data.file, config.data.filename);
      }else{
         formData.append(customFilename, config.data.file);
      }
      
      if(config.data.data){
         Object.keys(config.data.data).forEach((key) => {
            const value = config.data.data![key];
            if(Array.isArray(value)){
               value.forEach((item) => {
                  formData.append(`${key}[]`, item);
               });
               return;
            }
            
            formData.append(key, config.data.data![key]);
         });
      }
      console.log(formData)
      return this.request<T>({
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

