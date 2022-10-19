<template>
  <el-card shadow="hover">
    <template #header>
      <nav class="flex justify-between">
        <strong>表单校验</strong>
        <el-link href="https://github.com/logaretm/vee-validate" target="_blank" type="primary">vee-validate</el-link>
      </nav>
    </template>
    <main>
      <Form @submit='onLoginHandler'>
        <field v-model='loginForm.username' :rules='validateUsername' autocomplete='on' name='username' placeholder='用户名' type='text' />
        <error-message class='text-sm text-red-600 block mt-0.5 text-left' name='username'></error-message>
        <field v-model='loginForm.password' :rules='validatePassword' autocomplete='on' name='password' placeholder='密码' type='password' />
        <error-message class='text-sm text-red-600 block mt-0.5 text-left' name='password'></error-message>

        <button>
          登录
        </button>
      </Form>
    </main>
  </el-card>
</template>

<script lang="ts" name="veeValidate" setup>
import { Form, Field, ErrorMessage } from 'vee-validate'

const loginForm = shallowReactive({})

const onLoginHandler = () => {
  alert('提交')
}

/**
 * 用户名的表单校验
 */
const validateUsername = (value) => {
  if (!value) {
    return '用户名为必填的'
  }

  if (value.length < 3 || value.length > 12) {
    return '用户名应该在 3-12 位之间'
  }
  return true
}

/**
 * 密码的表单校验
 */
const validatePassword = (value) => {
  if (!value) {
    return '密码为必填的'
  }

  if (value.length < 6 || value.length > 12) {
    return '密码应该在 6-12 位之间'
  }
  return true
}
</script>

<style lang="less" scoped>

</style>