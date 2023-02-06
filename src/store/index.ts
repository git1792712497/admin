import {createPinia} from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import {menuStore} from './modules/menu'
import {globalConfigStore} from './modules/globalConfig'
import { tabsViewStore } from "./modules/tabsView";
import { userStore } from "./modules/user";


export function store(){
  return {
    menuStore:menuStore(),
    globalConfigStore:globalConfigStore(),
    tabsViewStore:tabsViewStore(),
    userStore:userStore()
  }
}


const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
export default pinia



/*const storage = context => {
	const {store} = context
	const data = JSON.parse(sessionStorage.getItem(store.$id))
	store.$subscribe(() => {
		if(store.$id.includes('$')){
			sessionStorage.setItem(store.$id,JSON.stringify(toRaw(store.$state)))
		}
	})
	return{
		...data
	}
}

pinia.use(storage)*/
