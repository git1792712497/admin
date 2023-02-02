import { RouteRecordRaw } from "vue-router";

const metaRouters: Record<string, any> = import.meta.glob("../modules/**/*.ts",{ eager: true });

let routerArray: RouteRecordRaw[] = [];
Object.values(metaRouters).forEach(modules => {
  const router = Object.values(modules).flat() as RouteRecordRaw[]
  routerArray.push(...router)
})


//路由转菜单列表
function routerToMenuPath(routes){
  routes.forEach(route => {
    route.children?.forEach(item => {
      item.path = `${route.path}/${item.path}`
      item.children && routerToMenuPath(route.children)
    })
  })
  return routes
}
export const menuList = routerToMenuPath(routerArray)


function getKeepAliveList(routers){
  let keepAliveList = new Set()
  routers.forEach(route => {
    if (route.name && route.component && route.meta.keepAlive === true){
      if (keepAliveList.has(route.name)){
        throw new Error(`${route.name}组件命名重复`)
      }else {
        keepAliveList.add(route.name)
      }
    }
    route.children?.forEach(item => item.children && getKeepAliveList(route.children))
  })
  return [...keepAliveList]
}
export const keepAliveList = getKeepAliveList(routerArray)


