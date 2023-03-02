<template>
	<el-config-provider :button="{autoInsertSpace:false}" :locale="zhCn" :size="globalConfig.componentSize">
    <router-view></router-view>
	</el-config-provider>
</template>
<script lang="ts" setup name="App">
import {globalConfigStore} from "@/store/modules/globalConfig";
import zhCn from "element-plus/es/locale/lang/zh-cn";
const globalConfig = globalConfigStore()
if (!import.meta.env.DEV){
  console.log(import.meta.env.VITE_TIME)
}
</script>

<style lang="less">
@import "./style/global.css";
</style>
