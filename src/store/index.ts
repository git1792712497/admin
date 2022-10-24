import {createPinia} from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()

// const storage = context => {
// 	const {store} = context
// 	const data = JSON.parse(sessionStorage.getItem(store.$id))
// 	store.$subscribe(() => {
// 		if(store.$id.includes('$')){
// 			sessionStorage.setItem(store.$id,JSON.stringify(toRaw(store.$state)))
// 		}
// 	})
// 	return{
// 		...data
// 	}
// }
//
// pinia.use(storage)

pinia.use(piniaPluginPersistedstate)
export {
	pinia
}
