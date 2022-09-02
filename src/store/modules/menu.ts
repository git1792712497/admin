import { defineStore } from 'pinia'

export const menuStore:any = defineStore('menu', {
	persist: true,
  state: () => {
    return {
      isCollapse: false,
	    menuList: []
    }
  },
	actions:{
		setCollapse(){
			this.isCollapse = !this.isCollapse
		},
		setMenuList(menuList) {
			this.menuList = menuList;
		}
	},
})
