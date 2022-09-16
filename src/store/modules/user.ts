import {defineStore} from 'pinia'

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
		}
	},
	getters: {}
})
