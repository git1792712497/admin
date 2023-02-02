import { koa } from "@/axios/config";



export function getUserMenuListApi(roleId){
  return koa.get({
    url:`/menu/userMenuList`,
    params:{
      roleId
    }
  })
}