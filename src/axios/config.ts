import Axios from "./index";
import type {AxiosRequestConfig} from 'axios'
import {userStore} from "@/store/modules/user";
import {ElMessage} from 'element-plus'

export const ContentType = {
   // json
   JSON: 'application/json;charset=UTF-8',
   // form-data qs
   FORM_URLENCODED: 'application/x-www-form-urlencoded;charset=UTF-8',
   // form-data  upload
   FORM_DATA: 'multipart/form-data;charset=UTF-8',
}


export const koa = new Axios({
  baseURL: 'http://localhost:8000',
  timeout: 10000,
  interceptors: {
    requestInterceptor(config: AxiosRequestConfig) {
      const user = userStore()
      config.headers.Authorization = `Bearer ${user.token}`
      return config
    },
    responseInterceptorCatch(error) {
      ElMessage({ type: 'error', message: error.response?.data.message })
    },
  },
})



export const fastMock = new Axios({
  baseURL: 'https://www.fastmock.site/mock/957ffa30daa6a998277620d86656998b/mock',
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

export const music = new Axios({
   baseURL: 'https://music-api.heheda.top',
   timeout: 10000
})



