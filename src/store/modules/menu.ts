import { defineStore } from 'pinia'

export const menuStore = defineStore({
	id:'menu',
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
		setMenuList() {
		
		},
		getMenuList(){
		
		}
	},
})
