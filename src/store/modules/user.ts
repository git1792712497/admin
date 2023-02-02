import {defineStore} from 'pinia'
import router from "@/router";
import { getUserLoginApi } from "@/api/user";

interface User {
	token:string
	username:string
	avatar:string
}

export const userStore = defineStore({
	id: 'user',
	persist: true,
	state: (): User => {
		return {
			token:'',
			username:'',
			avatar:'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
		}
	},
	actions: {
		async setUser(payload){
			const {data} = await getUserLoginApi(toRaw(payload))
			const {token,username} = data
			this.token = token
			this.username = username
		},
		clearUser(){
			this.token = ''
			router.push('/login')
		}
	},
	getters: {
		getToken(){
			return this.token
		},
	}
})
