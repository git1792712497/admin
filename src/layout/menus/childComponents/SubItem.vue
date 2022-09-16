<template>
	<template v-for="item in menuList" :key="item.path">
		<el-sub-menu v-if="item.children" :index="item.path">
			<template #title>
				<el-icon><component :is="item.meta?.icon"></component></el-icon>
				<span>{{item.meta?.title}}</span>
			</template>
			<SubItem :menuList="item.children"></SubItem>
		</el-sub-menu>
		<el-menu-item v-else :index="item.path">
			<el-icon><component :is="item.meta?.icon"></component></el-icon>
			<span>{{item.meta?.title}}</span>
		</el-menu-item>
	</template>
</template>
<script lang="ts" name="SubItem" setup>
defineProps({
	menuList: {
		type: Array,
		default: []
	}
})
</script>
<style lang="less" scoped>
.el-menu, .el-menu--popup{
	.el-menu-item{
		&.is-active{
			background-color: #060708;
			&::before{
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				width: 4px;
				content: "";
				background: var(--el-color-primary);
			}
		}
	}
}

.menu-href{
	display: inline-block;
	width: 100%;
	height: 100%;
	color: #bdbdc0;
	text-decoration: none;
}
</style>
