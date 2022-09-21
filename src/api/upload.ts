import {axios} from "@/axios/config";
export function getUpload(data){
   return axios.uploadFile({
      url:`/blade-resource/oss/endpoint/put-file`,
      data
   })
}