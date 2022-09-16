<template>
	<header class="header">
		<div class="header-left">
			<CollapseIcon/>
			<Breadcrumb/>
		</div>
		<div class="header-right">
			<el-space :size="15">
				<HeaderSearch/>
				<ComponentSize/>
				<Fullscreen/>
				<Theme/>
			</el-space>
			<Avatar/>
			<span class="username">Vue3</span>
		</div>
	</header>
</template>
<script lang="ts" name="Header" setup>
import {defineAsyncComponent} from "vue";
import Avatar from './childComponents/Avatar.vue'
import CollapseIcon from './childComponents/CollapseIcon.vue'
import Breadcrumb from './childComponents/Breadcrumb.vue'
import Fullscreen from './childComponents/Fullscreen.vue'
import ComponentSize from './childComponents/ComponentSize.vue'
import HeaderSearch from './childComponents/HeaderSearch.vue'

const Theme = defineAsyncComponent(() => import('./childComponents/Theme.vue'))
</script>
<style lang="less" scoped>
.header{
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 55px;
	padding: 0 15px;
	background-color: #ffffff;
	border-bottom: 1px solid #f6f6f6;
	
	.header-left{
		display: flex;
		align-items: center;
		justify-content: center;
		
		.collapse-icon{
			margin-right: 20px;
			font-size: 22px;
			cursor: pointer;
		}
	}
	
	.header-right{
		display: flex;
		align-items: center;
		.username{
			margin: 0 10px 0 0;
			font-size: 15px;
			color: rgb(0 0 0 / 75%);
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
		
		.divider{
			margin-top: 20px;
			
			.el-icon{
				position: relative;
				top: 2px;
				right: 5px;
				font-size: 15px;
			}
		}
	}
	
	.theme-switch{
		display: flex;
		justify-content: center;
		margin-top: 35px;
	}
}
</style>
