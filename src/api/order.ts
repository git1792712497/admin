import {axios} from "@/axios/config";
export function getOrderList(data?:object):any{
   return axios.post({
      url:`/wh-order/odmorder/getList`,
      data,
   })
}

export function getAddressList<T>():any{
   return axios.get({
      url:`/blade-system/region/lazy-list?notIncludeCode=00`,
      interceptors:{
         responseInterceptor(res){
            console.log('单次响应成功拦截',res)
            return res.data
         },
         responseInterceptorCatch(err){
            console.log('单次响应失败拦截',err)
            return Promise.reject(err)
         },
         requestInterceptor(config){
            console.log('单次请求拦截')
            return config
         }
      }
   })
}