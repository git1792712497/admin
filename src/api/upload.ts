import { koa } from "@/axios/config";

export function getUploadApi(file:File){
  return koa.uploadFile({
    url:`/user/upload`,
    data:{
      file
    }
  })
}
