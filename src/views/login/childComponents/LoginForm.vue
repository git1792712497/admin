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
import md5 from 'md5'
import { shallowReactive, shallowRef ,onMounted,toRaw} from "vue";
import { CircleClose, UserFilled } from "@element-plus/icons-vue";
import { ElMessage } from 'element-plus'
import {useRouter} from "vue-router";
import {userStore} from '@/store/modules/user'
const user = userStore()
const router = useRouter()


// 登录表单数据
let loading = shallowRef(false)
let loginFormRef = shallowRef();
let loginForm = shallowReactive({
	"username": "admin",
  "password": 123456,
});
let loginRules = {
	username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
	password: [{ required: true, message: "请输入密码", trigger: "blur" }]
}

const login = async () => {
	loginFormRef.value.validate(async (isValid) => {
			if(!isValid)return
			loading.value = true
			try{
				const {getLogin} = await import('@/api/login')
				const {data} = await getLogin(toRaw(loginForm)) as any
				if(data.status){
					user.setUser(data.userInfo)
					await router.push('/home')
					ElMessage({type:'success',message:'登录成功'})
				}else{
					ElMessage({type:'error',message:'账号或密码错误!'})
				}
			}catch(e){
				ElMessage({type:'error',message:'网络错误'})
			}finally{
				loading.value = false
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
