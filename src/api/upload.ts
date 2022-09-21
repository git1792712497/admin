import {axios} from "@/axios/config";
export function getUpload(file){
   return axios.post({
      url:`/blade-resource/oss/endpoint/put-file`,
      data:{
         file
      }
   })
}