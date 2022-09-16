import axios from 'axios'
import type {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios'
import type {RequestConfig, Interceptors} from './type'



class Axios{
	instance: AxiosInstance
	interceptors: Interceptors
	
	constructor(config: RequestConfig){
		this.instance = axios.create(config)
		this.interceptors = config.interceptors
		
		this.instance.interceptors.request.use((config: AxiosRequestConfig) => {
				// console.log('全局请求拦截器',config)
				return config
			}, (err: any) => {
				console.log(err)
			}
		)
		
		this.instance.interceptors.response.use((res: AxiosResponse) => {
				// console.log('全局响应拦截器')
				return res.data
			}, (err: any) => {
				console.log(err)
			}
		)
		
		//每个实例自定义拦截器
		this.instance.interceptors.request.use(this.interceptors.requestInterceptor, this.interceptors.requestInterceptorsCatch)
		this.instance.interceptors.response.use(this.interceptors.responseInterceptor, this.interceptors.responseInterceptorsCatch)
		
	}
	
	request<T>(config: RequestConfig): Promise<T>{
		return new Promise((resolve:any, reject) => {
			// 1.单个请求的请求拦截
			if(config.interceptors?.requestInterceptor){
				config = config.interceptors.requestInterceptor(config)
			}
			//axios实例上request
			this.instance.request(config).then(res => {
				//单独请求的响应拦截
				if(config.interceptors?.responseInterceptor){
					res = config.interceptors.responseInterceptor(res)
				}
				resolve(res)
			}).catch(err => reject(err))
		})
	}
	
	get(config){
		return this.request({...config,method: 'get' })
	}
	
	post(config){
		return this.request({...config,method: 'post' })
	}
	
}

export default Axios

