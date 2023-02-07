<template>
  <el-dialog v-model="dialogVisible" draggable title="新增用户" width="30%">
    <el-form ref="formRef" :model="basicForm" status-icon :rules="rules" label-width="80px">
      <el-form-item label="用户名称" prop="username">
        <el-input v-model="basicForm.username" clearable autofocus placeholder="请输入角色名称" />
      </el-form-item>
      <el-form-item label="用户密码" prop="password">
        <el-input v-model="basicForm.password" clearable autofocus placeholder="请输入密码" />
      </el-form-item>
      <el-form-item label="所属角色" prop="roleId">
        <el-select v-model="basicForm.roleId" clearable placeholder="请选择角色" style="width: 100%;">
          <el-option v-for="item in roleSelectList" :key="item.id" :label="item.name" :value="item.id"/>
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button v-auth="['addUser']" type="primary" :loading="loading" @click="handleConfirm"> 确定 </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { rules } from '../options/rules'
import { ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { getUserRegisterApi, getUserUpdateApi } from '../api/index'
import {getRoleListApi} from '../../role/api'
import { ElMessage } from "element-plus";

const emit = defineEmits(['refresh'])


const formRef = ref<FormInstance>()
let basicForm = reactive<any>({
  username:'',
  password:'',
  roleId:''
})

const dialogVisible = ref(false)
let loading = ref(false)
const handleConfirm = () => {
  formRef.value.validate(async isValid => {
    if (!isValid)return
    loading.value = true
    try {
      if (basicForm.id){
        const {message} = await getUserUpdateApi(toRaw(basicForm))
        ElMessage({
          message,
          type: 'success',
        })
      }else {
        const {message} = await getUserRegisterApi(toRaw(basicForm))
        ElMessage({
          message,
          type: 'success',
        })
      }
      emit('refresh')
      dialogVisible.value = false
    }catch (e) {
      ElMessage({
        message:'创建失败',
        type: 'error',
      })
    }finally {
      loading.value = false
    }
  })
}

let roleSelectList = shallowRef([])
const openDialog = async (row) => {
  dialogVisible.value = true
  if (row){
    basicForm.id = row.id
    Object.keys(toRaw(basicForm)).forEach(key => {
      basicForm[key] = row[key]
    })
  }else {
    await nextTick()
    formRef.value.resetFields()
  }
  const {data} = await getRoleListApi()
  roleSelectList.value = data
}
defineExpose({
  openDialog,
})
</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
