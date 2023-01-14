import { AsyncData, UseFetchOptions } from "#app";

type Methods = 'GET' | 'POST'

class Service {
  request<T>(url:string,method:Methods,data?:any,options?:UseFetchOptions<T>): Promise<AsyncData<T, Error>>{
    return new Promise((resolve, reject) => {
      useFetch<T>(url,options as any).then(res => {
        let newOptions: UseFetchOptions<T> = {
          baseURL:'',
          method,
        }
        if (method === 'GET'){
          newOptions.query = data
        }
        if (method === 'POST'){
          newOptions.body = data
        }
        resolve(res as AsyncData<T,Error>)
      }).catch(err => reject(err))
    })
  }

  get<T = any>(url: string,params?:any,options?: UseFetchOptions<T>){
    return this.request(url,"GET",params,options)
  }

  post<T = any>(url: string,data?:any,options?: UseFetchOptions<T>){
    return this.request(url,"GET",data,options)
  }
}


export default new Service()
