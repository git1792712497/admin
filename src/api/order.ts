import {axios} from "@/axios/config";
export function getOrderList(data?:object):any{
   return axios.post({
      url:`/wh-order/odmorder/getList`,
      data,
   })
}