<template>
<el-button type="primary" v-throttle="handClick">节流指令</el-button>
</template>

<script lang="ts" setup name="directives">
import {ElMessage} from "element-plus";

const handClick = () => {
	ElMessage({type:'success',message:'节流指令'})
}
</script>

<style scoped lang="less">

</style>
