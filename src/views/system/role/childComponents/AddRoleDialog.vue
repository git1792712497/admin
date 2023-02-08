<template>
  <el-dialog v-model="dialogVisible" title="新增角色" width="30%">
    <el-form ref="formRef" :model="basicForm" status-icon :rules="rules" label-width="80px">
      <el-form-item label="角色名称" prop="name">
        <el-input v-model="basicForm.name" clearable autofocus placeholder="请输入角色名称" />
      </el-form-item>
      <el-form-item label="角色描述" prop="description">
        <el-input v-model="basicForm.description" :max="255" :rows="1" type="textarea" placeholder="请输入角色描述" />
      </el-form-item>
      <el-form-item label="菜单权限" prop="menuId">
        <el-tree ref="treeRef" @check="(value,{checkedKeys,halfCheckedKeys}) => basicForm.menuId = [...checkedKeys,...halfCheckedKeys]" node-key="id" :data="menuSelectList" multiple show-checkbox clearable :props="{ label: 'title', children: 'children', value: 'id' }" style="width: 100%;"/>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button v-auth="['addRole']" type="primary" :loading="loading" @click="handleConfirm"> 确定 </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { rules } from '../options/rules'
import { ref } from 'vue'
import type { FormInstance } from 'element-plus'
import {getAddRoleApi,getRoleUpdateApi} from '../api/index'
import {getMenuListApi} from '../../menu/api'
import {generateMenuTree} from '@/utils/handleMenu'
import { ElMessage } from "element-plus";
import {filterParentNodes} from '../utils/filterParentNodes'

const emit = defineEmits(['refresh'])

const formRef = ref<FormInstance>()
let basicForm = reactive<any>({
  name:'',
  description:'',
  menuId:[]
})

const dialogVisible = ref(false)
let loading = ref(false)
const handleConfirm = () => {
  formRef.value.validate(async isValid => {
    if (!isValid)return
    loading.value = true
    try {
      if (basicForm.id){
        await getRoleUpdateApi(basicForm)
      }else {
        await getAddRoleApi(toRaw(basicForm))
      }
      emit('refresh')
      dialogVisible.value = false
      ElMessage({
        message:'操作成功',
        type: 'success',
      })
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

const treeRef = shallowRef()
let menuSelectList = shallowRef([])
const openDialog = async ({name,description,menuId,id}) => {
  dialogVisible.value = true
  const {data} = await getMenuListApi()
  menuSelectList.value = generateMenuTree(data)
  if (id){
    basicForm.id = id
    basicForm.name = name
    basicForm.description = description
    basicForm.menuId = menuId
    treeRef.value.setCheckedKeys(filterParentNodes(menuId, menuSelectList.value))
  }else {
    formRef.value.resetFields()
  }
}

defineExpose({
  openDialog
})
</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
