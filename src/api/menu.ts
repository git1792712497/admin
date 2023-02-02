import { koa } from "@/axios/config";

export function getUserMenuListApi(){
  return koa.get({
    url:`/menu/userMenuList`,
  })
}
