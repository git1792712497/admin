<template>
	<el-config-provider :button="{autoInsertSpace:false}" :locale="zhCn" :size="globalConfig.componentSize">
		<router-view/>
	</el-config-provider>
</template>
<script lang="ts" setup>
import {globalConfigStore} from "@/store/modules/globalConfig";
import zhCn from "element-plus/es/locale/lang/zh-cn";
const globalConfig = globalConfigStore()
</script>
<style lang="less">
*{
	padding: 0;
	margin: 0;
}

html, body, #app{
	width: 100%;
	height: 100%;
	padding: 0;
	margin: 0;
}

</style>
