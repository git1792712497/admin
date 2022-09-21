import {defineStore} from 'pinia'
import {useRouter} from "vue-router";
const router = useRouter()

export const userStore = defineStore({
	id: 'user',
	persist: true,
	state: () => {
		return {
			profile: null
		}
	},
	actions: {
		setUser(profile){
			this.profile = profile
		},
		clearUser(){
			this.profile = null
			router.push('/login')
		}
	},
	getters: {
		getToken(){
			return this.profile?.access_token
		},
		
	}
})
