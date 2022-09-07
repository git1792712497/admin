<template>
	<aside :style="{ width: menuStore().isCollapse ? '65px' : '220px' }" class="menu">
		<nav class="logo">
			<img alt="logo" src="@/assets/images/logo.svg"/> <span v-show="!menuStore().isCollapse">Vue3</span>
		</nav>
		<el-scrollbar>
			<el-menu :collapse="menuStore().isCollapse"
				:default-active="$route.meta.currentActive || $route.path"
				:unique-opened="true"
				:active-text-color="globalConfig.themeConfig.primary"
				background-color="#191a20"
				router text-color="#bdbdc0">
				<SubItem :menuList="useSort(routerArray)"/>
			</el-menu>
		</el-scrollbar>
	</aside>
</template>
<script lang="ts" name="Menus" setup>
import {routerArray} from '@/router'
import SubItem from './childComponents/SubItem.vue'
import {menuStore} from '@/store/modules/menu'
import {globalConfigStore} from "@/store/modules/globalConfig";
const globalConfig = globalConfigStore()
function useSort(arr){
	arr.forEach(item => item.meta.menu.index ||= Number.MAX_SAFE_INTEGER)
	return arr.sort((x,y) => x.meta.menu.index - y.meta.menu.index)
}
</script>
<style lang="less" scoped>
.menu{
	position: relative;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	height: 100%;
	background-color: #191a20;
	transition: all 0.3s ease;
	
	.logo{
		display: flex;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
		height: 55px;
		border-bottom: 1px solid #282a35;
		box-shadow: 2px 0 6px rgb(0 21 41 / 35%);
		
		span{
			font-size: 22px;
			font-weight: bold;
			color: #dadada;
			white-space: nowrap;
		}
		
		img{
			width: 30px;
			object-fit: contain;
			margin-right: 8px;
		}
	}
	
	.el-scrollbar{
		height: calc(100% - 55px);
		
		.el-menu{
			flex: 1;
			overflow: auto;
			overflow-x: hidden;
			border-right: none;
		}
	}
}


</style>
