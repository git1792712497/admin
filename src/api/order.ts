import {axios} from "@/axios/config";
export function getOrderList(params?:object):any{
   return axios.get({
      url:`/wh-order/odmproduct/page`,
      params,
      interceptors:{
         requestInterceptor(config){
            console.log('单个请求拦截',config)
            return config
         },
      }
   })
}