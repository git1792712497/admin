<template>
<div>
  <h1 class="h1">子组件中的值{{modelValue}}</h1>
  <el-button type="primary" @click="handelClick">子组件更新</el-button>
  <el-button type="primary" @click="handelUseVModel">子组件useVModel更新</el-button>
</div>
</template>

<script setup lang="ts" name="child">
const props = defineProps({
  modelValue:{
    type:Array,
    default:[]
  }
})

const emit = defineEmits(['update:modelValue'])
const handelClick = () => {
  emit("update:modelValue",[Math.random()])
}

import { useVModel } from '@vueuse/core'
const data = useVModel(props, 'modelValue', emit)
const handelUseVModel = () => {
  data.value = [10,20,30,40,50]
}
</script>

<style scoped lang="less">

</style>