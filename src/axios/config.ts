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
         console.log(config,'实例响应成功拦截')
         return config
      },
      requestInterceptorCatch(error: any) {
         console.log('实例请求失败',error)
         return Promise.reject(error)
      },
      responseInterceptorCatch(error: any) {
         ElMessage({type: 'error', message: error.response?.data.error_description || error.response?.data.msg})
         error.response?.data.code === 401 && user.clearUser()
         return Promise.reject(error)
      }
   }
})

export const koa = new Axios({
   baseURL: 'http://localhost:8000',
   timeout: 10000,
   interceptors:{
      requestInterceptor(config:AxiosRequestConfig){
         config.headers.Authorization = 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXNzd29yZCI6IjdjYmMzZTY2YThlZTQ3NDQ1YzE4NTU5YThlODhhMjQ4IiwibmFtZSI6IuWRqOm-meadgyIsInVzZXJJZCI6MTMsImlhdCI6MTY3MjQ2NDQ5NSwiZXhwIjoxNzA0MDAwNDk1fQ.ivKl91fn9MVKiZgKEdfttkownIWfpRwAd_K2Kh7IFKad8OvuAV41r0YUChv41OXCuDTS_Hn5MvRSscv4wNDdLCjrMHQspTrXihAzVJlhRhEWQ9bTWRxgK-NdUTduxWDaWlGuFrk87qdPrWzQxk1t_0cK9k5_bj-y0gZKS-MCaZA'
         return config
      }
   }
})

export const music = new Axios({
   baseURL: 'https://music-api.heheda.top',
   timeout: 10000
})

export const fastMock = new Axios({
   baseURL: 'https://www.fastmock.site/mock/957ffa30daa6a998277620d86656998b/mock',
   timeout: 10000,
})

export const easyMock = new Axios({
   baseURL: 'https://mock.mengxuegu.com/mock/63880da593a67b5f10668ec1',
   timeout: 10000,
})

export const mock = new Axios({
   baseURL: 'http://127.0.0.1:8888',
   timeout: 10000,
   interceptors: {
      requestInterceptor(config: AxiosRequestConfig) {
         return config
      }
   }
})

export const jsonServer = new Axios({
   baseURL: 'http://localhost:3004',
   timeout: 10000
})

export const image = new Axios({
   baseURL: 'https://unsplash.com',
   timeout: 10000
})

