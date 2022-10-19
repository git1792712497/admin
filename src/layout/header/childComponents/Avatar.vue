<template>
	<el-dropdown trigger="hover">
		<div class="avatar">
			<img alt="avatar" :src="user.profile?.avatar"/>
		</div>
		<template #dropdown>
			<el-dropdown-menu>
        <el-dropdown-item divided>
          <el-link type="primary" target="_blank" href="https://support.qq.com/product/442929">立即反馈</el-link>
        </el-dropdown-item>
				<el-dropdown-item divided @click="logout">退出登录</el-dropdown-item>
			</el-dropdown-menu>
		</template>
	</el-dropdown>
  <span class="username">{{user.profile?.nick_name}}</span>
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
	width: 35px;
	height: 35px;
	overflow: hidden;
	cursor: pointer;
	border-radius: 50%;
	img{
		width: 100%;
		height: 100%;
	}
}
.username{
  margin: 0 5px 0 5px;
  font-size: 15px;
  color: rgb(0 0 0 / 75%);
}
</style>
