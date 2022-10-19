<template>
  <el-card shadow="hover">
    <template #header>
      <nav class="flex justify-between">
        <strong>gsap动画库</strong>
        <el-link type="primary" target="_blank" href="https://github.com/greensock/GSAP">gsap</el-link>
      </nav>
    </template>
    <main class="main">
      <div @click="handleClick(index)" ref="boxRef" class="box" :style="{background:randomHexColor()}" v-for="(item,index) in 12" :key="item">
        {{item}}
      </div>
    </main>
    <!--弹出层-->
    <transition :css="false" @before-enter="beforeEnter" @enter="enter" @leave="leave">
      <div v-if="isShow" class="fixed top-0 left-0 w-screen h-screen bg-amber-100 z-10">
        <svg-icon @click="isShow = false" name="close" class="absolute top-5 right-1"></svg-icon>
      </div>
    </transition>

  </el-card>
</template>

<script setup lang="ts" name="gsap">
import gsap from 'gsap'
import {randomHexColor} from '@/utils/theme'
const boxRef = shallowRef()

let isShow = shallowRef(false)

let centerX
let centerY
const handleClick = (index) => {
  isShow.value = true
  const el = boxRef.value[index] as HTMLHtmlElement
  //获取元素位置
  const {x,y,width,height} = el.getBoundingClientRect()
  centerX = width / 2 + x
  centerY = height / 2 + y
}

/**
 * 进入动画开始前
 */
const beforeEnter = (el) => {
  gsap.set(el, {
    scaleX: 0,
    scaleY: 0,
    transformOrigin: '0 0',
    translateX: centerX,
    translateY: centerY,
    opacity: 0
  })
}
/**
 * 进入动画执行中
 */
const enter = (el, done) => {
  gsap.to(el, {
    duration: 0.3,
    scaleX: 1,
    scaleY: 1,
    opacity: 1,
    translateX: 0,
    translateY: 0,
    onComplete: done //完成回调
  })
}
/**
 * 离开动画执行中
 */
const leave = (el, done) => {
  gsap.to(el, {
    duration: 0.6,
    scaleX: 0,
    scaleY: 0,
    x: centerX,
    y: centerY,
    opacity: 0
  })
}
</script>

<style scoped lang="less">
.main{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .box{
    width: 20%;
    margin: 10px;
    height: 200px;
    font-size: 20px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

</style>