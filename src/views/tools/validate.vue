<template>
  <el-card shadow="hover">
    <template #header>
      <h1>表单正则验证</h1>
    </template>
    <el-form :model="ruleForm" :rules="rules" label-position="top">
      <el-input v-model="ruleForm.A" @input="value => ruleForm.A = value" placeholder="请输入数字进行测试">
        <template #append> % </template>
      </el-input>
    </el-form>
{{message}}
    <input type="text" :value="message" @input="message = $event.target.value">
  </el-card>
</template>

<script lang="ts" name="validate" setup>
let ruleForm = shallowReactive({})




let message = shallowRef()

const rules = {
  A: [{required: true, message: '请输入小数或整数进行测试', trigger: 'change'}],
}
</script>

<style lang="less" scoped>

</style>