<template>
  <el-card>
    <template #header>
      watch使用
    </template>
    <el-button type="primary" @click="handleClick">按钮</el-button>
  </el-card>
 </template>
 <script setup lang="ts" name="watch">
 /*与 watchEffect()使我们可以：
懒执行副作用；
更加明确是应该由哪个状态触发侦听器重新执行；
可以访问所侦听状态的前一个值和当前值。*/
 interface WatchOptions{
   immediate?: boolean // 默认：false
   deep?: boolean // 默认：false
   flush?: 'pre' | 'post' | 'sync'
   /*
   默认：flush: 'pre' 组件更新之前调用,访问DOM将是更新之前的状态。
        flush: 'post' 访问被 Vue 更新之后的DOM
        flush: 'sync'：同步调用
   */
 }
 /*
 监听的内容必须是响应式数据
 watch 监听reactive对象时,无法获取旧值,解决,深拷贝对象 () => cloneDeep(object)
 ref的监听,复杂类型-要加上深度监听
 */
 let object = reactive({
  num:1,
 })
 watch(() => object,(newValue,oldValue,onCleanup) => {
   onCleanup(() => {
     console.log('副作用')
   })
   console.log(newValue)
   console.log(oldValue)
 })
 
 const handleClick = () => {
   object.num += 1
 }
 </script>