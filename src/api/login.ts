import {axios} from "@/axios/config";
export function getLogin(data){
	return axios.post({
		url:`/blade-auth/oauth/token?username=${data.username}&password=${data.password}&grant_type=password`,
		data,
		interceptors:{
			requestInterceptor(config){
				return config
			}
		}
	})
}
