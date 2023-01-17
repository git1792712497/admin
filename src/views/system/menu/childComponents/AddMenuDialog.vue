<template>
  <el-dialog v-model="dialogVisible" title="新增菜单" width="30%">
    <el-form ref="formRef" :model="basicForm" status-icon :rules="rules" label-width="80px">
      <el-form-item label="菜单名称" prop="name">
        <el-input v-model="basicForm.name" clearable autofocus placeholder="请输入角色名称" />
      </el-form-item>
      <el-form-item label="菜单图标" prop="icon">
        <el-input v-model="basicForm.icon" clearable placeholder="请输入菜单图标" />
      </el-form-item>
      <el-form-item label="菜单路径" prop="path">
        <el-input v-model="basicForm.path" clearable placeholder="请输入菜单路径" />
      </el-form-item>
      <el-form-item label="父级菜单" prop="parentId">
        <el-tree-select v-model="basicForm.parentId" :data="$attrs.menuData" check-strictly clearable :props="{ label: 'name', children: 'children', value: 'id' }" style="width: 100%;"/>
      </el-form-item>
      <el-form-item label="菜单排序" prop="sort">
        <el-input-number v-model="basicForm.sort" :min="0" placeholder="请输入菜单序号" style="width: 100%;"/>
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
import {getAddMenuApi} from '../api'
import { ElMessage } from "element-plus";

const emit = defineEmits(['refresh'])

const dialogVisible = ref(false)

const formRef = ref<FormInstance>()
let basicForm = reactive({})

let loading = ref(false)
const handleConfirm = () => {
  formRef.value.validate(async isValid => {
    if (!isValid)return
    loading.value = true
    try {
      const {message} = await getAddMenuApi(toRaw(basicForm))
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

const openDialog = () => (dialogVisible.value = true)
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
