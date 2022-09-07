import Axios from "./index";


export const axios = new Axios({
	baseURL: 'https://music-api.heheda.top',
	timeout: 10000,
	interceptors: {
		requestInterceptor(config){
			console.log('每个实例的拦截')
			return config
		}
	}
})









