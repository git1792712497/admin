import {koa} from "@/axios/config";
export function getLogin(data){
  return koa.post({
    url:`/user/login`,
    data
  })
}

export function getRegister(data){
  return koa.post({
    url:`/user/register`,
    data
  })
}

export function getPublish(data){
  return koa.post({
    url:`/moments/save`,
    data
  })
}

export function getList(params?){
  return koa.get({
    url:`/moments/list`,
    params
  })
}
