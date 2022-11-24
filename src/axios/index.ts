import axios from 'axios'
import qs from 'qs'
import { ContentType } from './config'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import type { RequestConfig, Interceptors, UploadFileParams } from './type'


class Axios {
	instance: AxiosInstance
	interceptors: Interceptors
	
	constructor(config: RequestConfig) {
		this.instance = axios.create(config)
		this.interceptors = config.interceptors
		//全局请求处理
		this.instance.interceptors.request.use((config: AxiosRequestConfig) => {
					return config
				}, (err: any) => {
					console.error(err, '全局请求错误')
				}
		)
		//全局响应处理
		this.instance.interceptors.response.use((res: AxiosResponse) => {
					if (res.request.responseType === "blob") {
						let filename = res.headers["content-disposition"];
						filename = decodeURI(filename.split(";")[1].split("filename=")[1]);
						let url = URL.createObjectURL(new Blob([res.data], {type: res.headers['content-type']}));
						let a = document.createElement('a');
						a.style.display = 'none';
						a.href = url;
						a.setAttribute('download', filename);
						document.body.appendChild(a);
						a.click(); //执行下载
						URL.revokeObjectURL(a.href); //释放url
						document.body.removeChild(a); //释放标签
					}
					return res.data
				}, (err: any) => {
					console.error('全局响应错误', err)
				}
		)
		
		//每个实例自定义请求响应拦截
		this.instance.interceptors.request.use(this.interceptors?.requestInterceptor, this.interceptors?.requestInterceptorsCatch)
		this.instance.interceptors.response.use(this.interceptors?.responseInterceptor, this.interceptors?.responseInterceptorsCatch)
		
	}
	
	request<T>(config: RequestConfig): Promise<T> {
		return new Promise((resolve: any, reject) => {
			//参数拼接到url
			if (config.paramsToUrl === true) {
				config.url = `${config.url}?${qs.stringify(config.data)}`
			}
			// 1.单个请求的请求拦截
			if (config.interceptors?.requestInterceptor) {
				config = config.interceptors.requestInterceptor(config)
			}
			//axios实例上request
			this.instance.request(config).then(res => {
				//单独请求的响应拦截
				if (config.interceptors?.responseInterceptor) {
					res = config.interceptors.responseInterceptor(res)
				}
				resolve(res)
			}).catch(err => reject(err))
		})
	}
	
	get(params: RequestConfig) {
		return this.request({...params, method: 'get'})
	}
	
	post(data: RequestConfig) {
		return this.request({...data, method: 'post'})
	}
	
	patch(data: RequestConfig) {
		return this.request({...data, method: 'patch'})
	}
	
	delete(data: RequestConfig) {
		return this.request({...data, method: 'delete'})
	}
	
	uploadFile<T = any>(config: AxiosRequestConfig) {
		const formData = new FormData();
		const customFilename = config.data.name || 'file';
		
		if (config.data.filename) {
			formData.append(customFilename, config.data.file, config.data.filename);
		} else {
			formData.append(customFilename, config.data.file);
		}
		
		if (config.data.data) {
			Object.keys(config.data.data).forEach(key => {
				const value = config.data.data![key];
				if (Array.isArray(value)) {
					value.forEach((item) => {
						formData.append(`${key}[]`, item);
					});
					return;
				}
				formData.append(key, config.data.data![key]);
			});
		}
		return this.request<T>({
			...config,
			method: 'POST',
			data: formData,
			headers: {
				'Content-type': ContentType.FORM_DATA
			}
		});
	}
	
}

export default Axios

