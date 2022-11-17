<template>
  <el-card shadow="hover">
    <template #header>
      <nav class="flex justify-between">
        <strong>gsap动画库</strong>
        <el-link href="https://github.com/greensock/GSAP" target="_blank" type="primary">gsap</el-link>
      </nav>
    </template>
    <el-collapse model-value="2">
      <el-collapse-item name="1" title="动画弹层">
        <main class="main">
          <div v-for="(item,index) in 12" :key="item" ref="boxRef" :style="{background:randomHexColor()}" class="box" @click="handleClick(index)">
            {{item}}
          </div>
        </main>
        <!--弹出层-->
        <transition :css="false" @enter="enter" @leave="leave" @before-enter="beforeEnter">
          <div v-if="isShow" class="fixed top-0 left-0 w-screen h-screen bg-amber-100 z-10">
            <svg-icon class="absolute top-5 right-1" name="close" @click="isShow = false"></svg-icon>
          </div>
        </transition>
      </el-collapse-item>
      <el-collapse-item name="2" title="动画时间线">
        <div class="flex justify-center">
          <!-- 滑板车 -->
          <svg id="scooter" height="512" viewBox="0 0 512.004 512.004" width="512" xmlns="http://www.w3.org/2000/svg">
            <path id="footer-block" d="m175.669 463.803c-8.283 0-15-6.716-15-15 0-53.743-43.723-97.467-97.467-97.467-14.622 0-28.673 3.153-41.762 9.371-7.483 3.555-16.432.371-19.986-7.112-3.555-7.482-.37-16.431 7.113-19.985 17.143-8.143 35.525-12.273 54.635-12.273 70.286 0 127.467 57.182 127.467 127.467 0 8.283-6.714 14.999-15 14.999z" fill="#c5e1e6"/>
            <path id="footboard2" d="m442.768 321.476c-63.027 2.945-113.414 51.086-120.563 112.327h-210.801c-8.285 0-15 6.716-15 15s6.715 15 15 15h224.932c8.285 0 15-6.716 15-15 0-52.162 40.777-94.928 92.832-97.36 8.275-.387 14.67-7.408 14.283-15.684-.387-8.275-7.402-14.684-15.683-14.283z" fill="#008adf"/>
            <path id="footboard1" d="m442.768 321.476c-63.027 2.945-113.414 51.086-120.563 112.327h-66.204v30h80.335c8.285 0 15-6.716 15-15 0-52.162 40.777-94.928 92.832-97.36 8.275-.387 14.67-7.408 14.283-15.684-.387-8.275-7.402-14.684-15.683-14.283z" fill="#0065a3"/>
            <path id="scooter-head" d="m448.787 415.604c-7.721 0-14.279-5.923-14.932-13.755l-28.796-345.572c-1.291-15.484-11.852-26.275-20.521-26.275-8.283 0-15-6.716-15-15s6.717-15 15-15c12.9 0 25.295 5.971 34.9 16.811 8.852 9.99 14.361 23.12 15.518 36.972l28.797 345.573c.688 8.256-5.447 15.506-13.703 16.194-.425.035-.847.052-1.263.052z" fill="#8db9c4"/>
            <circle id="wheel4" cx="63.203" cy="448.803" fill="#c5e1e6" r="48.2"/>
            <path id="wheel3" d="m63.203 512.002c-34.848 0-63.199-28.351-63.199-63.199 0-34.849 28.352-63.199 63.199-63.199 34.85 0 63.201 28.35 63.201 63.199 0 34.848-28.352 63.199-63.201 63.199zm0-96.398c-18.306 0-33.199 14.893-33.199 33.199 0 18.307 14.894 33.199 33.199 33.199 18.307 0 33.201-14.893 33.201-33.199s-14.895-33.199-33.201-33.199z" fill="#1d4659"/>
            <circle id="wheel2" cx="448.803" cy="448.803" fill="#8db9c4" r="48.2"/>
            <g fill="#0e232c">
              <path id="wheel1" d="m448.803 512.002c-34.848 0-63.199-28.351-63.199-63.199 0-34.849 28.352-63.199 63.199-63.199 34.85 0 63.201 28.35 63.201 63.199 0 34.848-28.352 63.199-63.201 63.199zm0-96.398c-18.307 0-33.199 14.893-33.199 33.199 0 18.307 14.893 33.199 33.199 33.199 18.307 0 33.201-14.893 33.201-33.199s-14.895-33.199-33.201-33.199z"/>
              <path id="head-block" d="m352.402.002c-8.283 0-15 6.716-15 15s6.717 15 15 15h32.135v-30h-32.135z"/>
            </g>
          </svg>
        </div>
        <el-button type="primary" @click="handleStart">开始动画</el-button>
      </el-collapse-item>
    </el-collapse>
  </el-card>
</template>

<script lang="ts" name="gsap" setup>
import gsap from 'gsap'
import { randomHexColor } from '@/utils/theme'

/*1_弹出层*/
const boxRef = shallowRef()
let isShow = shallowRef(false)
let centerX
let centerY
const handleClick = (index) => {
  isShow.value = true
  const el = boxRef.value[index] as HTMLHtmlElement
  //获取元素位置
  const {x, y, width, height} = el.getBoundingClientRect()
  centerX = width / 2 + x
  centerY = height / 2 + y
}
//进入动画开始前
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
//进入动画执行中
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
//离开动画执行中
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

/*2_滑板车动画*/
const timeline = gsap.timeline({repeat:2,yoyo:true}); // 创建一个时间轴，在这个时间轴上顺序进行动画
const handleStart = () => {
  //from向后补间动画意从什么地方来
  timeline.from(['#wheel1', '#wheel2', '#wheel3', '#wheel4'], { //轮子动画
    scaleY: 0,
    scaleX: 0,
    transformOrigin: "center", // 相对于自身
    duration: 1,
    ease: "bounce.out", // 动画曲线
    stagger: 0.2, // 如果有多个目标元素需要动画, 没隔0.2s开始执行一个动画
  }).from(["#footboard1", "#footboard2"], { //踏板
    scaleX: 0,
    transformOrigin: "left",
    duration: 1,
    ease: "bounce.out",
    stagger: 0,
  }).from("#scooter-head", { //车头
    scaleY: 0,
    transformOrigin: "bottom",
    duration: 1,
    ease: "bounce.out",
    stagger: 0,
  }).from(["#head-block", "#footer-block"], { // 手把柄 和 挡板
    scaleX: 0,
    transformOrigin: "right",
    duration: 1,
    ease: "bounce.out",
    stagger: 0,
  });
}
</script>

<style lang="less" scoped>
.main {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .box {
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