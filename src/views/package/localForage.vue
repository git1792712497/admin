<template>
  <el-card shadow="hover" style="height: 100%;" :body-style="{height:'100%'}">
    <template #header>
      <nav class="flex justify-between">
        <span>数据库存储</span>
        <el-link type="primary" target="_blank" href="https://localforage.docschina.org/">localforage.js</el-link>
      </nav>
    </template>
    <div>
      <el-input v-model="input" placeholder="Please input" />
    </div>
    <br>
    <div>
      <el-button type="primary" @click="handleSet">增加</el-button>
      <el-button type="primary">删除</el-button>
      <el-button type="primary">修改</el-button>
      <el-button type="primary" @click="handleGet">查询</el-button>
    </div>
  </el-card>
</template>

<script setup lang="ts" name="localForage">
import localforage from "localforage";

let input = shallowRef()

const handleSet = () => {
  localforage.setItem('localforage', input.value).then((value) => {
    console.log(value);
  })
}

const handleGet = async () => {
  const data = await localforage.getItem('localforage')
  console.log(data)
}
</script>

<style scoped lang="less">

</style>
