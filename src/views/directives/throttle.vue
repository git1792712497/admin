<template>
  <el-card>
    <template #header>
      节流指令
    </template>
    <el-button type="primary" v-throttle:1000.start.end="handClick">节流指令(首次立即执行)</el-button>
    <el-button type="primary" v-throttle:1000.end="handClick">节流指令(结束末尾执行)</el-button>
    <el-button type="primary" v-throttle:1000="handClick">节流指令(开始和末尾都不执行)</el-button>
  </el-card>
</template>
<script lang="ts" setup name="directives">
import {ElMessage} from "element-plus";

const handClick = () => {
	ElMessage({type:'success',message:'节流指令'})
}
</script>

<style scoped lang="less">

</style>
