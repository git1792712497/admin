<template>
	<el-tooltip content="布局设置" effect="dark" placement="bottom">
		<i class="iconfont icon-clothes icon-style" @click="drawerVisible = true"></i>
	</el-tooltip>
	<el-drawer v-model="drawerVisible" size="300px" title="布局设置">
		<el-divider class="divider" content-position="center">
			<el-icon><ColdDrink/></el-icon>
			全局主题
		</el-divider>
		<div class="theme-item">
			<span>暗黑模式</span>
			<SwitchDark/>
		</div>
		<div class="theme-item">
			<span>主题颜色</span>
			<el-color-picker v-model="globalConfig.themeConfig.primary" :predefine="colorList" @change="changePrimary"/>
		</div>
    <el-divider class="divider" content-position="center">
      <el-icon><Setting /></el-icon>
      页面设置
    </el-divider>
    <div class="theme-item">
      <span>标签栏</span>
      <el-switch v-model="globalConfig.themeConfig.tabs" />
    </div>
	</el-drawer>
</template>
<script lang="ts" name="Theme" setup>
import {changePrimary} from '@/hooks/useTheme'
import SwitchDark from './themeChild/SwitchDark.vue'
import {shallowRef} from "vue";
import {globalConfigStore} from "@/store/modules/globalConfig";
import {colorList} from '@/config/theme'
let drawerVisible = shallowRef(false)
const globalConfig = globalConfigStore()
globalConfig.setTheme()

</script>
<style lang="less" scoped>
.icon-style{
	font-size: 20px;
	color: rgb(0 0 0 / 75%);
	cursor: pointer;
}

.theme-item{
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 15px 0;
	
	span{
		font-size: 14px;
	}
}
</style>
