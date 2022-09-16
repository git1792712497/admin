import Axios from "./index";
import type { AxiosRequestConfig } from 'axios'
import {userStore} from "@/store/modules/user";
const user = userStore()

export const fastMock = new Axios({
	baseURL: 'https://www.fastmock.site/mock/957ffa30daa6a998277620d86656998b/mock',
	timeout: 10000,
	interceptors: {
		requestInterceptor(config: AxiosRequestConfig){
			if(user.profile){
				config.headers.common['Authorization'] = `Bearer ${user.profile.token}`
			}else{
				user.clearUser()
			}
			return config
		}
	}
})

export const axios = new Axios({
	baseURL: 'https://music-api.heheda.top',
	timeout: 10000,
	interceptors: {
		requestInterceptor(config: AxiosRequestConfig){
			return config
		}
	}
})

export const mock = new Axios({
	baseURL: 'http://127.0.0.1:5173',
	timeout: 10000,
	interceptors: {
		requestInterceptor(config: AxiosRequestConfig){
			return config
		}
	}
})


