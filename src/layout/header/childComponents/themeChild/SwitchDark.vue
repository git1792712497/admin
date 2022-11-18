<template>
<el-switch
		v-model="globalConfig.themeConfig.isDark"
		@change="useDark"
		inline-prompt
		active-color="#0a0a0a"
		inactive-color="#dcdfe6"
		:active-icon="Sunny"
		:inactive-icon="Moon">
</el-switch>
</template>

<script lang="ts" setup name="SwitchDark">
import { Sunny, Moon } from "@element-plus/icons-vue";
import {globalConfigStore} from "@/store/modules/globalConfig";
const globalConfig = globalConfigStore()
import {useDark} from "@/hooks/useTheme";
</script>

<style scoped lang="less">

</style>
