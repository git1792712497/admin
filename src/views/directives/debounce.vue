<template>
	<el-card>
    <template #header>
      防抖指令
    </template>
    <el-button type="primary" v-debounce:500.start="handClick">防抖指令(立即执行)</el-button>
    <el-button type="primary" v-debounce:500="handClick">防抖指令(延迟执行)</el-button>
  </el-card>
</template>

<script lang="ts" setup name="directives">
import { ElMessage } from 'element-plus'

const handClick = () => ElMessage({type:'success',message:'防抖指令'})

</script>

<style scoped lang="less">

</style>
