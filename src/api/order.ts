import {axios} from "@/axios/config";
export function getOrderList(data){
   return axios.post({
      url:`/wh-order/odmorder/getList`,
      data
   })
}