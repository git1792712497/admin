<template>
	<el-dropdown trigger="hover">
		<div class="avatar">
			<img alt="avatar" src="@/assets/images/logo.svg"/>
		</div>
		<template #dropdown>
			<el-dropdown-menu>
				<el-dropdown-item divided @click="logout">退出登录</el-dropdown-item>
			</el-dropdown-menu>
		</template>
	</el-dropdown>
</template>
<script lang="ts" name="Avatar" setup>
import {userStore} from "@/store/modules/user";
import {useRouter} from 'vue-router'
const user = userStore()
const router = useRouter()
const logout = () => {
	user.clearUser()
	router.push('/login')
}
</script>
<style lang="less" scoped>
.avatar{
	margin-left: 20px;
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
