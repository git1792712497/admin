<template>
  <el-card shadow="hover" style="height: 100%;" :body-style="{height:'100%'}">
    <template #header>
      <nav class="flex justify-between">
        <strong>营销抽奖</strong>
        <el-link type="primary" target="_blank" href="https://100px.net/">官网地址</el-link>
      </nav>
    </template>
    <LuckyWheel
        ref="myLucky"
        width="300px"
        height="300px"
        :prizes="prizes"
        :blocks="blocks"
        :buttons="buttons"
        @start="startCallback"
        @end="endCallback"
    />
  </el-card>
</template>

<script setup lang="ts">

let blocks = [{ padding: '13px', background: '#617df2' }]
let prizes = [
  { fonts: [{ text: '0', top: '10%' }], background: '#e9e8fe' },
  { fonts: [{ text: '1', top: '10%' }], background: '#b8c5f2' },
  { fonts: [{ text: '2', top: '10%' }], background: '#e9e8fe' },
  { fonts: [{ text: '3', top: '10%' }], background: '#b8c5f2' },
  { fonts: [{ text: '4', top: '10%' }], background: '#e9e8fe' },
  { fonts: [{ text: '5', top: '10%' }], background: '#b8c5f2' },
]
let buttons = [{
  radius: '35%',
  background: '#8a9bf3',
  pointer: true,
  fonts: [{ text: '开始', top: '-10px' }]
}]

let myLucky = shallowRef()
function startCallback () {
  // 调用抽奖组件的play方法开始游戏
  myLucky.value.play()
  // 模拟调用接口异步抽奖
  setTimeout(() => {
    // 假设后端返回的中奖索引是0
    const index = 0
    // 调用stop停止旋转并传递中奖索引
    myLucky.value.stop(index)
  }, 3000)
}
// 抽奖结束会触发end回调
function endCallback (prize) {
  console.log(prize)
}


</script>
