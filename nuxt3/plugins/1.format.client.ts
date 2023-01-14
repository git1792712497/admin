//vue 实例创建自动挂载
//客户端加载,数组控制注册顺序
export default defineNuxtPlugin(nuxtApp => {
  return {
    provide:{
      formatTime(){
        return '2023-1-13'
      }
    }
  }
})
