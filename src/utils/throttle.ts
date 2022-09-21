// 参数3 开始是否立即执行,
// 参数4 是否执行最后一次
export function _throttle(fn, interval = 1000, start = false, end = false) {
   //1.记录上一次的开始时间
   let lastTime = 0
   let timer = null
   //2.事件触发时，真正的执行函数
   return function (...args) {
      
      //2.1 获取当前事件触发时的时间
      const nowTime = new Date().getTime()
      
      if (!lastTime && !start) lastTime = nowTime
      //2.2 使用当前触发的时间和之前的时间间隔以及上一次开始的时间, 计算出还剩余多长事件需要去触发函数
      const remainTime = interval - (nowTime - lastTime)
      if (remainTime <= 0) {
         if (timer) {
            clearTimeout(timer)
            timer = null
         }
         //2.3 真正触发函数
         fn.apply(this, args)
         //2.4 保留上次触发的时间
         lastTime = nowTime
         return
      }
      //2.3 最后一次是否执行
      if (end && !timer) {
         timer = setTimeout(() => {
            timer = null
            lastTime = start ? new Date().getTime() : 0
            fn.apply(this, args)
         }, remainTime)
      }
   }
}
