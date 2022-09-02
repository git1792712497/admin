<template>
	<el-icon class="collapse-icon" @click="menuStore().setCollapse()">
		<component :is="menuStore().isCollapse ? 'expand' : 'fold'"></component>
	</el-icon>
</template>
<script lang="ts" name="CollapseIcon" setup>
import {menuStore} from "@/store/modules/menu";
</script>
<style lang="less" scoped></style>
