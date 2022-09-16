<template>
	<el-breadcrumb :separator-icon="ArrowRight">
		<transition-group name="el-fade-in-linear" mode="out-in">
			<el-breadcrumb-item :to="{ path: '/home' }" key="/home"><strong>首页</strong></el-breadcrumb-item>
			<template v-for="item in matched" :key="item.path">
				<el-breadcrumb-item :to="{ path: item.path }">
					{{ item.meta.title }}
				</el-breadcrumb-item>
			</template>
		</transition-group>
	</el-breadcrumb>
</template>
<script lang="ts" name="Breadcrumb" setup>
import { ArrowRight } from "@element-plus/icons-vue";
import {computed} from "vue";
import {useRoute} from "vue-router";
const route = useRoute()
const matched = computed(() => route.matched.filter(item => item.meta.title && item.meta.title !== '首页'))
</script>
