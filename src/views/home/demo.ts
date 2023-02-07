import { koa } from "@/axios/config";


export function update(data){
  return koa.patch({
    url:`/moments/update`,
    data
  })
}
