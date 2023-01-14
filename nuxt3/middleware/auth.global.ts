export default defineNuxtRouteMiddleware((to,form) => {
  console.log('全局中间件,优先级最高')
})
