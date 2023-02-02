import {AddMenuForm} from '@/views/system/menu/types/addMenuForm'
import {views} from '@/router'
import router from '@/router'
import type {RouteRecordRaw} from 'vue-router'
import {cloneDeep} from "lodash-es";

interface MenuTree extends AddMenuForm{
  children?: AddMenuForm[]
}

export function getAuthorityButton(menuList: AddMenuForm[]){
  return menuList.filter((item: AddMenuForm) => {
    return !item.component && !item.path
  }).map(item => item.name)
}

export function getKeepAliveRouter(menuList: AddMenuForm[]){
  return menuList.filter(item => {
    return item.keepAlive
  }).map(item => item.name)
}

export function getFullscreenMenu(menuList: MenuTree[]){
  return menuList.filter(item => {
    return item.fullScreen
  })
}

export function generateMenuTree(source, id = 'id', parentId = 'parentId', children = 'children') {
  let cloneData = JSON.parse(JSON.stringify(source))
  return cloneData.filter(father => {
    let branchArr = cloneData.filter(child => father[id] === child[parentId])
    branchArr.length > 0 ? father[children] = branchArr : ''
    return father[parentId] === null // 如果不是第一层
  })
}


export function menuTreeToRouter(menuTree: MenuTree[]){
  return menuTree.map(item => {
    return {
      path: item.path,
      name: item.name,
      component: loadComponent(item.component),
      children: item.children && menuTreeToRouter(item.children),
      meta:{
        type:item.type,
        title:item.title,
        sort:item.sort,
        icon:item.icon,
        hidden:item.hidden,
        fullScreen:item.fullScreen,
        keepAlive:item.keepAlive
      }
    }
  })
}

function loadComponent(componentPath) {
  let value
  Object.keys(views).forEach(path => {
    if (path === `../views${componentPath}`){
      value = views[path]
    }
  })
  return value
}

export function handleRouterPath(routes){
  cloneDeep(routes).forEach(route => {
    route.children && route.children.forEach(item => {
      item.children && handleRouterPath(route.children)
      item.path = `${item.path.replace(`${route.path}/`,'')}`
    })
  })
  return routes
}


export function addRoute(routerList: RouteRecordRaw[]){
  routerList.forEach((route) => {
    router.addRoute('AppMain',route)
  })
}

