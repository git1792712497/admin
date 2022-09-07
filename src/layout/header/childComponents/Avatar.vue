<template>
	<el-dropdown trigger="hover">
		<div class="avatar">
			<img alt="avatar" src="../../../assets/images/logo.svg"/>
		</div>
		<template #dropdown>
			<el-dropdown-menu>
				<el-dropdown-item divided @click="logout">退出登录</el-dropdown-item>
			</el-dropdown-menu>
		</template>
	</el-dropdown>
</template>
<script lang="ts" name="Avatar" setup>
const logout = () => {

}
</script>
<style lang="less" scoped>
.avatar{
	width: 40px;
	height: 40px;
	overflow: hidden;
	cursor: pointer;
	border-radius: 50%;
	img{
		width: 100%;
		height: 100%;
	}
}
</style>
