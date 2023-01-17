import { koa } from "@/axios/config";

export function getMenuListApi(params?){
  return koa.get({
    url:`/menu/query`,
    params
  })
}

export function getAddMenuApi(data){
  return koa.post({
    url:`/menu/create`,
    data
  })
}
