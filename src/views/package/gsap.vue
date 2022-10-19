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
  </el-card>
</template>

<script setup lang="ts" name="gsap">
import {randomHexColor} from '@/utils/theme'
const boxRef = shallowRef()

const handleClick = (index) => {
  const el = boxRef.value[index] as HTMLHtmlElement
  const { x, y, top, right, bottom, left, width, height } = useElementBounding(el)
  console.log(x.value)
  console.log(height.value)
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