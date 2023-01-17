<template>
  <el-dialog v-model="dialogVisible" title="新增角色" width="30%">
    <el-form ref="formRef" :model="basicForm" status-icon :rules="rules" label-width="80px">
      <el-form-item label="角色名称" prop="name">
        <el-input v-model="basicForm.name" clearable autofocus placeholder="请输入角色名称" />
      </el-form-item>
      <el-form-item label="菜单权限" prop="menuId">
        <el-tree @check="(value,{checkedKeys,halfCheckedKeys}) => basicForm.menuId = [...checkedKeys,...halfCheckedKeys]" node-key="id" :data="menuSelectList" multiple show-checkbox clearable :props="{ label: 'name', children: 'children', value: 'id' }" style="width: 100%;"/>
      </el-form-item>
      <el-form-item label="角色描述" prop="description">
        <el-input v-model="basicForm.description" :max="255" :rows="3" type="textarea" placeholder="请输入角色描述" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" :loading="loading" @click="handleConfirm"> 确定 </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { rules } from '../options/rules'
import { ref } from 'vue'
import type { FormInstance } from 'element-plus'
import {getAddRoleApi} from '../api/index'
import {getMenuListApi} from '../../menu/api'
import { ElMessage } from "element-plus";

const emit = defineEmits(['refresh'])

const dialogVisible = ref(false)

const formRef = ref<FormInstance>()
let basicForm = reactive({
  menuId:[]
})

let loading = ref(false)
const handleConfirm = () => {
  formRef.value.validate(async isValid => {
    if (!isValid)return
    loading.value = true
    try {
      const {message} = await getAddRoleApi(toRaw(basicForm))
      ElMessage({
        message,
        type: 'success',
      })
      emit('refresh')
      closeDialog()
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

import {generateMenuTree} from '../../menu/utils/generateMenuTree'
let menuSelectList = shallowRef([])
const openDialog = async () => {
  dialogVisible.value = true
  const {data} = await getMenuListApi()
  menuSelectList.value = generateMenuTree(data)
}
const closeDialog = () => (dialogVisible.value = false)
defineExpose({
  openDialog,
  closeDialog,
})
</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
