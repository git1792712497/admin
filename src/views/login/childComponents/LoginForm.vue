<template>
  <el-form ref="loginFormRef" :model="loginForm" :rules="rules" size="large">
    <el-form-item prop="username">
      <el-input v-model="loginForm.username" placeholder="请输入用户名">
        <template #prefix>
          <el-icon><User /></el-icon>
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
    <el-button round size="large" @click="resetForm">
      重置
      <template #icon>
        <el-icon><CircleClose /></el-icon>
      </template>
    </el-button>
    <el-button :loading="loading" round size="large" type="primary" @click="login">
      登录
      <template #icon>
        <el-icon> <UserFilled/></el-icon>
      </template>
    </el-button>
  </div>
</template>
<script lang="ts" name="LoginForm" setup>
import {reactive, shallowRef, onMounted, toRaw} from "vue";
import {CircleClose, UserFilled} from "@element-plus/icons-vue";
import {rules} from '../options/rules'
import {useRouter} from "vue-router";
import {userStore} from '@/store/modules/user'
import {menuStore} from "@/store/modules/menu";
import { ElMessage } from "element-plus";
const router = useRouter()

const user = userStore()
const menu = menuStore()



// 登录表单数据
let loading = shallowRef(false)
let loginFormRef = shallowRef();
let loginForm = reactive({
  "username": "admin",
  "password": "admin",
});

const login = async () => {
  loginFormRef.value.validate(async (isValid) => {
    if (!isValid) return
    loading.value = true
    try {
      await user.setUser(loginForm)
      await menu.setMenuList()
      ElMessage({ type: 'success', message:'登录成功' })
      router.push('/home')
    } finally {
      loading.value = false
    }
  })
}
const resetForm = () => {

}
</script>
<style lang="less" scoped>
.el-form-item {
  margin-bottom: 40px;
}

.login-btn {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 40px;
  white-space: nowrap;

  .el-button {
    width: 185px;
  }
}
</style>
