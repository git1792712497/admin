<template>
	<el-dropdown trigger="click" @command="handClick">
		<span>
			<el-tooltip content="组件大小" effect="dark" placement="bottom">
				<i :class="'iconfont icon-wenzidaxiao'" class="icon-style"></i>
			</el-tooltip>
		</span>
		<template #dropdown>
			<el-dropdown-menu>
				<el-dropdown-item v-for="item in sizeList" :key="item.value" :command="item.label" :disabled="globalConfig.componentSize === item.value">
					{{item.label}}
				</el-dropdown-item>
			</el-dropdown-menu>
		</template>
	</el-dropdown>
</template>
<script lang="ts" name="ComponentSize" setup>
import {globalConfigStore} from "@/store/modules/globalConfig";
const globalConfig = globalConfigStore()

let sizeList = [
	{value:'large', label: "大型" },
	{value:'default', label: "默认" },
	{value:'small', label: "小型" }
]
const handClick = value => globalConfig.componentSize = sizeList.find(item => value === item.label).value
</script>
<style lang="less" scoped>
.icon-style{
	font-size: 22px;
	color: rgb(0 0 0 / 75%);
	cursor: pointer;
}
</style>
