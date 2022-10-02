import Axios from "./index";
import type {AxiosRequestConfig, AxiosResponse} from 'axios'
import {Base64} from 'js-base64';
import {ElMessage} from "element-plus";
import {userStore} from "@/store/modules/user";
const user = userStore()


export const ContentType = {
   // json
   JSON: 'application/json;charset=UTF-8',
   // form-data qs
   FORM_URLENCODED: 'application/x-www-form-urlencoded;charset=UTF-8',
   // form-data  upload
   FORM_DATA: 'multipart/form-data;charset=UTF-8',
}


export const axios = new Axios({
   baseURL: '/api',
   timeout: 10000,
   headers: {
      'Content-Type': ContentType.JSON,
   },
   interceptors: {
      requestInterceptor(config: AxiosRequestConfig) {
         config.headers.Authorization = `Basic ${Base64.encode('saber:saber_secret')}`
         config.headers['Blade-Auth'] = user.getToken
         return config
      },
      responseInterceptor(config: AxiosResponse) {
         console.log(config,'响应拦截')
         return config
      },
      requestInterceptorsCatch(error: any) {
         console.log('请求失败')
      },
      responseInterceptorsCatch(error: any) {
         ElMessage({type: 'error', message: error.response?.data.error_description || error.response?.data.msg})
         console.log('响应错误1',error)
         if (error.response?.data.code === 401){
            console.log('useRouter')
            user.clearUser()
         }
         
      }
   }
})


export const bilibili = new Axios({
   baseURL: '/bilibili',
   timeout: 10000
})


export const fastMock = new Axios({
   baseURL: 'https://www.fastmock.site/mock/957ffa30daa6a998277620d86656998b/mock',
   timeout: 10000,
   interceptors: {
      requestInterceptor(config: AxiosRequestConfig) {
         if (user.profile) {
            config.headers.common['Authorization'] = `Bearer ${user.profile.token}`
         } else {
            user.clearUser()
         }
         return config
      }
   }
})


export const mock = new Axios({
   baseURL: 'http://127.0.0.1:5173',
   timeout: 10000,
   interceptors: {
      requestInterceptor(config: AxiosRequestConfig) {
         return config
      }
   }
})


