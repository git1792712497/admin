import {axios} from "@/axios/config";
export function getFileUpload(data){
   return axios.uploadFile({
      url:`/blade-resource/oss/endpoint/put-file`,
      data
   })
}