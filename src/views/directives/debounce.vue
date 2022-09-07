<template>
	<el-button type="primary" v-debounce="handClick">防抖指令</el-button>
</template>

<script lang="ts" setup name="directives">
import { ElMessage } from 'element-plus'

const handClick = () => ElMessage({type:'success',message:'防抖指令'})
</script>

<style scoped lang="less">

</style>
