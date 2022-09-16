import {fastMock} from "@/axios/config";

export function getLogin(data){
	return fastMock.post({
		url:'/login',
		data,
		interceptors:{
			requestInterceptor(config){
				return config
			}
		}
	})
}
