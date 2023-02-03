import { defineStore } from 'pinia'
import {getUserMenuListApi} from '@/api/menu'
import { generateMenuTree, menuTreeToRouter, handleRouterPath, getAuthorityButton, getKeepAliveRouter, addRoute, addFullscreenMenu } from '@/utils/handleMenu'


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
      //获取平级菜单列表
      const { data } = await getUserMenuListApi()
      //菜单排序
      const sortMenu = data.sort((x,y) => x.sort - y.sort)
      //过滤按钮权限
      this.authButton = getAuthorityButton(sortMenu)
      //缓存菜单名称
      this.keepAliveRouter = getKeepAliveRouter(sortMenu)
      //转菜单树
      const menuTree = generateMenuTree(sortMenu)
      //转路由树
      this.menuList = menuTreeToRouter(menuTree)
      //路由路径处理
      const routerList = handleRouterPath(toRaw(this.menuList))
      //动态加一级路由(全屏)
      addRoute(addFullscreenMenu(sortMenu))
      //动态加二级路由
      addRoute(routerList,'AppMain')
    },
  },
})
