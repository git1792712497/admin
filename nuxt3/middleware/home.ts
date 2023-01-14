
//命名中间件(刷新浏览器会在服务的执行,客户端切换会执行)
export default defineNuxtRouteMiddleware((to,form) => {
  console.log('命名中间件')
})
