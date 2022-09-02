<template>
	<el-breadcrumb :separator-icon="ArrowRight">
			<transition-group name="breadcrumb" mode="out-in">
			<el-breadcrumb-item :to="{ path: '' }" key="/home">首页</el-breadcrumb-item>
			<el-breadcrumb-item v-for="item in matched" :key="item.path" :to="{ path: item.path }">
				{{ item.meta.title }}
			</el-breadcrumb-item>
		</transition-group>
	</el-breadcrumb>
</template>
<script lang="ts" name="Breadcrumb" setup>
import { ArrowRight } from "@element-plus/icons-vue";
import {computed} from "vue";
import {useRoute} from "vue-router";

const route = useRoute()
//route.matched 返回当然路由在路由表的记录数组
const matched = computed(() => route.matched.filter(item => item.meta && item.meta.title));
</script>
<style lang="less" scoped></style>
