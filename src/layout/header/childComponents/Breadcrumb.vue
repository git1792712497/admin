<template>
	<el-breadcrumb :separator-icon="ArrowRight">
		<transition-group name="el-fade-in-linear" mode="out-in">
			<el-breadcrumb-item :to="{ path: '/home' }" key="/home">首页</el-breadcrumb-item>
			<el-breadcrumb-item v-for="item in $route.matched.slice(1)" :key="item.path" :to="{ path: item.path }">
				{{ item?.meta?.menu?.title }}
			</el-breadcrumb-item>
		</transition-group>
	</el-breadcrumb>
</template>
<script lang="ts" name="Breadcrumb" setup>
import { ArrowRight } from "@element-plus/icons-vue";

</script>
<style lang="less" scoped></style>
