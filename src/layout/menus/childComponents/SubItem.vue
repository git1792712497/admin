<template>
	<template v-for="item in menuList" :key="item.path">
		<el-sub-menu :index="item.path" v-if="item.children">
			<template #title>
				<el-icon><component :is="item.icon"></component></el-icon>
				<span>{{item.title}}</span>
			</template>
			<SubItem :menuList="item.children"></SubItem>
		</el-sub-menu>
		<el-menu-item :index="item.path" v-else>
			<el-icon><component :is="item.icon"></component></el-icon>
			<span>{{item.title}}</span>
		</el-menu-item>
	</template>
</template>
<script lang="ts" name="SubItem" setup>
defineProps({
	menuList:{
		type:Array,
		default:[]
	}
})
</script>
<style lang="less" scoped></style>
