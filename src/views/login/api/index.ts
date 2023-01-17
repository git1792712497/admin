import { koa } from "@/axios/config";


export function getUserLoginApi(data){
  return koa.post({
    url:`/user/login`,
    data
  })
}
