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
   })
}