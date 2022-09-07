import {axios} from "@/api/axios/config";

export function getBanner(){
	return axios.request({
		url:'/banner',
		params:{
			type:2
		},
		interceptors:{
			requestInterceptor(config){
				console.log('每个请求的拦截')
				return config
			}
		}
	})
}
