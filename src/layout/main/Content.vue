<template>
	<el-card class="content" shadow="hover">
   <router-view v-slot="{Component,route}">
	   <transition appear name="el-zoom-in-bottom" mode="out-in">
			<keep-alive>
				<component :is="Component"></component>
			</keep-alive>
	   </transition>
		</router-view>
  </el-card>
</template>

<script lang="ts" setup name="content">

</script>

<style scoped lang="less">
.content{
	width: 100%;
	height: 100%;
}
</style>
