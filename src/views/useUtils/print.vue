<template>
  <el-card shadow="hover" ref="dom">
    <template #header>
      <nav class="flex justify-between">
        <span>页面打印</span>
        <el-button type="primary" @click="onClickPrint">打印</el-button>
      </nav>
    </template>
    <el-descriptions id="descriptions" :column="1" border title="用户信息">
      <el-descriptions-item label="姓名">张三</el-descriptions-item>
      <el-descriptions-item label="年龄">22岁</el-descriptions-item>
      <el-descriptions-item label="性别">男</el-descriptions-item>
    </el-descriptions>
  </el-card>
</template>

<script lang="ts" name="print" setup>
import print from 'print-js'
import {onMounted, shallowRef} from "vue";

const onClickPrint = () => {
  print({
    printable: 'descriptions',	//打印区域id
    type: 'html',		//打印类型是html
    scanStyles: true,
    targetStyles: ['*'],
  })
}


const dom = shallowRef()

onMounted(() => {
  console.dir(dom.value.$el);
})
</script>

<style lang="less" scoped>

</style>