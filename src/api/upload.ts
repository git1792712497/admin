import {axios} from "@/axios/config";

export function getFileUpload(data){
   return axios.uploadFile({
      url:`/blade-resource/oss/endpoint/put-file`,
      data,
   })
}

export function getFileDownload(){
   return axios.post({
      url:'/wh-order/odmorder/exportAll',
      responseType:'blob',
      data:{
         type_equal:1,
         queryType:'seller'
      }
   })
}

export function getOrderList(){
   return axios.post({
      url:'wh-order/odmorder/getList',
      data:{
         type_equal:1,
         queryType:'seller'
      }
   })
}