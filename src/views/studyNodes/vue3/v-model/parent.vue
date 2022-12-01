<template>
<div>
  <h1>父组件中的值{{dataList}}</h1>
  <Child v-model="dataList"/>
  <br>
  <el-button type="primary" @click="handelClick">父组件更新</el-button>
</div>
</template>

<script setup lang="ts" name="parent">
import Child from './Child.vue'

const dataList = ref([1,2,3,4,5])

const handelClick = () => {
  dataList.value = [Date.now()]
}
</script>

<style scoped lang="less">

</style>