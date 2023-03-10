//类型声明

declare const global:string

/*格式化时间*/
declare function $formatTime(time:string):string

declare module "vue-virtual-scroller"

//声明接口
declare interface Window {
  _AMapSecurityConfig: object;
}

declare class Person{
  name:string
  age:number
  constructor(name:string,age:number){

  }
}

/*模块声明
declare module 'lodash-es'{
  export function join(args:any):any
}*/

declare module '@element-plus/icons-vue'

//声明文件模块
declare module '*png'


//CDN引入声明
declare namespace $ {
  export function ajax(options:any):any
}
