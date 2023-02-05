import { koa } from "@/axios/config";

export function getUpload(data){
  return koa.uploadFile({
    url:`/user/avatar`,
    data
  })
}
