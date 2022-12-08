import {axios} from "@/axios/config";
export function getOrderList(params?:object):any{
   return axios.get({
      url:`/wh-order/odmproduct/page`,
      params,
      interceptors:{
         requestInterceptor(config){

            return config
         },
      }
   })
}