import { koa } from "@/axios/config";

interface MenuParams{
  limit?:number,offset?:number
}

export function getMenuListApi(data?:MenuParams){
  return koa.post({
    url:`/menu/query`,
    data
  })
}

export function getAddMenuApi(data){
  return koa.post({
    url:`/menu/create`,
    data
  })
}

export function getMenuUpdateApi(data){
  return koa.patch({
    url:`/menu/update`,
    data
  })
}

export function getDeleteMenuApi(id:string){
  return koa.delete({
    url:`/menu/delete`,
    data:{
      id
    }
  })
}

export function getUserMenuListApi(){
  return koa.get({
    url:`/menu/userMenuList`,
  })
}
