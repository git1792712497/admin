import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig} from 'axios'

export function request(config:AxiosRequestConfig){
    const instance = axios.create({
        baseURL:``,
        timeout:10000,
        withCredentials:true
    })
    
    instance.interceptors.request.use(config => {
      return config
    },error => {
    
    })
    
    instance.interceptors.response.use(response => {
    
        return response
    },error => {
    
    })
    
    return instance(config)
}



