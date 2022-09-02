<template>
	<el-config-provider :button="{autoInsertSpace:true}" :locale="zhCn" :size="globalConfigStore().assemblySize">
		<router-view/>
	</el-config-provider>
</template>
<script lang="ts" setup>
import {globalConfigStore} from "@/store/modules/globalConfig";
import zhCn from "element-plus/es/locale/lang/zh-cn";
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
