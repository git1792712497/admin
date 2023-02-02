import { defineStore } from 'pinia'
import {getUserMenuListApi} from '@/api/menu'
import { generateMenuTree, menuTreeToRouter, handleRouterPath, getAuthorityButton, getKeepAliveRouter, addRoute, getFullscreenMenu } from '@/utils/handleMenu'


export const menuStore = defineStore({
  id: 'menu',
  state: () => {
    return {
      isCollapse: false,
      menuList: [],
      authButton:[],
      keepAliveRouter:[]
    }
  },
  actions: {
    setCollapse() {
      this.isCollapse = !this.isCollapse
    },
    async setMenuList() {
      const { data } = await getUserMenuListApi()
      const sortMenu = data.sort((x,y) => x.sort - y.sort)
      this.authButton = getAuthorityButton(sortMenu)
      this.keepAliveRouter = getKeepAliveRouter(sortMenu)
      const menuTree = generateMenuTree(sortMenu)
      this.menuList = menuTreeToRouter(menuTree)
      const routerList = handleRouterPath(toRaw(this.menuList))
      addRoute(routerList)
    },
  },
})
