<template>
	<div class="fullscreen">
		<el-tooltip effect="dark" :content="isFullscreen ? '退出全屏' : '全屏'" placement="bottom">
			<i :class="['iconfont', isFullscreen ? 'icon-quxiaoquanping_o' : 'icon-quanping_o']" class="icon-style" @click="toggle"></i>
		</el-tooltip>
	</div>
</template>
<script lang="ts" name="Fullscreen" setup>
import { useFullscreen } from '@vueuse/core'
const { isFullscreen, toggle } = useFullscreen()


</script>
<style lang="less" scoped>
.icon-style{
	font-size: 23px;
	color: rgb(0 0 0 / 75%);
	cursor: pointer;
}
</style>
