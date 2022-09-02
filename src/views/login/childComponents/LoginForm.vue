<template>
	<el-form ref="loginFormRef" :model="loginForm" :rules="loginRules" size="large">
		<el-form-item prop="username">
			<el-input v-model="loginForm.username" placeholder="请输入用户名">
				<template #prefix>
					<el-icon class="el-input__icon">
						<user/>
					</el-icon>
				</template>
			</el-input>
		</el-form-item>
		<el-form-item prop="password">
			<el-input v-model="loginForm.password" autocomplete="new-password" placeholder="请输入密码" show-password type="password">
				<template #prefix>
					<el-icon class="el-input__icon">
						<lock/>
					</el-icon>
				</template>
			</el-input>
		</el-form-item>
	</el-form>
	<div class="login-btn">
		<el-button :icon="CircleClose" round size="large" @click="resetForm">重置</el-button>
		<el-button :icon="UserFilled" :loading="loading" round size="large" type="primary" @click="login">
			登录
		</el-button>
	</div>
</template>
<script lang="ts" name="LoginForm" setup>
import { shallowReactive, shallowRef ,onMounted,toRaw} from "vue";
import { CircleClose, UserFilled } from "@element-plus/icons-vue";
import md5 from 'md5'

// 登录表单数据
let loading = shallowRef(false)
let loginFormRef = shallowRef();
let loginForm = shallowReactive({
  "password": "",
  "username": "",
});
let loginRules = {
	username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
	password: [{ required: true, message: "请输入密码", trigger: "blur" }]
}

const login = async () => {
	loginFormRef.value.validate((isValid) => {
		if(isValid){
		
		}
	})
}
const resetForm = () => {

}
onMounted(() => {
	// 监听enter事件（调用登录）
	document.onkeydown = (e: any) => {
		e = window.event || e;
		if (e.code === "Enter" || e.code === "enter" || e.code === "NumpadEnter") {
			if (loading.value) return;
			login();
		}
	};
});
</script>
<style lang="less" scoped>
.el-form-item{
	margin-bottom: 40px;
}

.login-btn{
	display: flex;
	justify-content: space-between;
	width: 100%;
	margin-top: 40px;
	white-space: nowrap;
	
	.el-button{
		width: 185px;
	}
}
</style>
