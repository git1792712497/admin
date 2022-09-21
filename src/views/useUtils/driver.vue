<template>
  <el-card shadow="hover">
    <template #header>
      <div class="flex justify-between">
        <el-button type="primary" @click="handClick">开始引导</el-button>
        <el-link type="primary" target="_blank" href="https://github.com/kamranahmedse/driver.js">github地址</el-link>
      </div>
    </template>
    <el-button type="primary" id="a">步骤一</el-button>
    <el-button type="primary" id="b">步骤二</el-button>
    <el-button type="primary" id="c">步骤三</el-button>
  </el-card>
</template>

<script lang="ts" name="driver" setup>
import Driver from 'driver.js';
import 'driver.js/dist/driver.min.css';


let driver = new Driver({
  opacity: 0.5,
  animate: true,
  allowClose: false, //禁止点击外部关闭
  doneBtnText: '完成', // 完成按钮标题
  closeBtnText: '关闭', // 关闭按钮标题
  stageBackground: '#ffffff', // 引导对话的背景色
  nextBtnText: '下一步', // 下一步按钮标题
  prevBtnText: '上一步', // 上一步按钮标题
});

const handClick = () => {
  // Define the steps for introduction
  driver.defineSteps([
    {
      element: '#a',
      popover: {
        className: 'first-step-popover-class',
        title: 'Title on Popover',
        description: 'Body of the popover',
        position: 'right',
        
      }
    },
    {
      element: '#b',
      popover: {
        title: 'Title on Popover',
        description: 'Body of the popover',
        position: 'top'
      }
    },
    {
      element: '#c',
      popover: {
        title: 'Title on Popover',
        description: 'Body of the popover',
        position: 'right'
      }
    },
  ]);
  
  driver.start();
}
</script>

<style lang="less" scoped>

</style>