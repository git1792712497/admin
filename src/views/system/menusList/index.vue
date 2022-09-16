<template>
	<section>
		<el-row>
			<el-col :span="4">
				<el-input v-model="input" placeholder="请输入菜单名称" clearable/>
			</el-col>
			<el-col :span="2" :offset="16">
				<el-button type="primary"><el-icon><Search/></el-icon>&nbsp;查询</el-button>
			</el-col>
			<el-col :span="2"><el-button type="primary">新增菜单</el-button></el-col>
		</el-row>
		<br>
		<el-table size="large" border :data="routerArray" row-key="path">
			<el-table-column prop="meta.title" label="菜单名称" width="180"/>
	    <el-table-column prop="path" label="路由路径"/>
	    <el-table-column prop="component" label="组件路径"/>
	  </el-table>
	</section>
</template>

<script setup lang="ts" name="index">
import {routerArray} from '@/router'

import {computed,shallowRef} from "vue";

let input = shallowRef()



</script>

<style scoped lang="less">

</style>
