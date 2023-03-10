import {AddMenuForm} from '@/views/system/menu/types/addMenuForm'
import router from '@/router'
import type {RouteRecordRaw} from 'vue-router'
import {cloneDeep} from "lodash-es";
const views: Record<string, any> = import.meta.glob("../views/**/*.vue");
const tsx: Record<string, any> = import.meta.glob("../views/**/*.tsx");
const componentsPath = Object.assign(views,tsx)

interface MenuTree extends AddMenuForm{
  children?: AddMenuForm[]
}

export function getAuthorityButton(menuList: AddMenuForm[]){
  return menuList.filter((item: AddMenuForm) => {
    return item.type === 3
  }).map(item => item.name)
}

export function getKeepAliveRouter(menuList: AddMenuForm[]){
  return menuList.filter(item => {
    return item.keepAlive
  }).map(item => item.name)
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
        keepAlive:item.keepAlive,
        isLink:item.isLink,
        activePath:item.activePath
      }
    }
  })
}

function loadComponent(componentPath) {
  let value
  Object.keys(componentsPath).forEach(path => {
    if (path === `../views${componentPath}`){
      value = componentsPath[path]
    }
  })
  return value
}

export function handleRouterPath(routes: RouteRecordRaw[]){
  let routerList = cloneDeep(routes)
  routerList.forEach(route => {
    route.children?.forEach(item => {
      item.path = `${item.path.replace(`${route.path}/`,'')}`
      if (item.children){
        item.children = item.children.filter(v => v.meta.type !== 3)
        handleRouterPath(item.children)
      }
    })
  })
  //过滤外链和按钮菜单不参与路由
  return routerList.filter(item => item.path && !item.meta.isLink)
}

export function addFullscreenMenu(menuList: MenuTree[]){
  const fullscreenMenu = menuList.filter(item => {
    return item.fullScreen
  })
  return menuTreeToRouter(fullscreenMenu)
}


export function addRoute(...args){
  if (Array.isArray(args.at(0))){
    args.at(0).forEach(route => router.addRoute(route))
  }else {
    args.at(1).forEach(route => router.addRoute(args.at(0),route))
  }
}

