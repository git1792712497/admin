import {defineStore} from 'pinia'
import router from "@/router";

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
