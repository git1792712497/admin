import { koa } from "@/axios/config";



export function getUserMenuListApi(roleId){
  return koa.get({
    url:`/menu/userMenuList`,
    params:{
      roleId
    }
  })
}

export function getUserLoginApi(data){
  return koa.post({
    url:`/user/login`,
    data
  })
}
