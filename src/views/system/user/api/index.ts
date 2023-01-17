import { koa } from "@/axios/config";

export function getRoleListApi(){
  return koa.get({
    url:`/role/query`
  })
}

export function getAddRoleApi(data){
  return koa.post({
    url:`/role/create`,
    data
  })
}
export function getDeleteRoleApi(id: string){
  return koa.delete({
    url:`/role/delete`,
    data:{
      id
    }
  })
}
