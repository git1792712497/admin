<template>
  <el-dialog v-model="dialogVisible" :title="basicForm.id ? '编辑菜单' : '新增菜单'" :width="550">
    <el-form-item required label-width="80px" label="菜单类型">
      <el-radio-group v-model="basicForm.type">
        <el-radio-button :label="1">目录</el-radio-button>
        <el-radio-button :label="2">菜单</el-radio-button>
        <el-radio-button :label="3">按钮</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <transition name="el-fade-in" mode="out-in">
      <component ref="componentRef" :is="componentList[basicForm.type - 1]"></component>
    </transition>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" :loading="loading" @click="handleConfirm" v-auth="'addMenu'">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import Catalogue from "../childComponents/AddMenuDialogChild/Catalogue.vue";
import Menu from "../childComponents/AddMenuDialogChild/Menu.vue";
import Button from "../childComponents/AddMenuDialogChild/Button.vue";
const componentList = [Catalogue,Menu,Button]
import { ref} from 'vue'
import { getAddMenuApi, getMenuUpdateApi } from '../api'
import { ElMessage } from "element-plus";
import {basicForm,useResetForm} from '../hooks/useAddMenuForm'
import {menuStore} from '@/store/modules/menu'

const emit = defineEmits(['refresh'])
let componentRef = shallowRef()

const dialogVisible = ref(false)
let loading = ref(false)

const handleConfirm = async () => {
  await componentRef.value.validate()
  loading.value = true
  try {
    basicForm.id ? await getMenuUpdateApi(basicForm) : await getAddMenuApi(basicForm)
    ElMessage({
      message:'操作成功',
      type: 'success',
    })
    emit('refresh')
    dialogVisible.value = false
    await menuStore().setMenuList()
  }finally {
    loading.value = false
  }
}

const openDialog = async row => {
  dialogVisible.value = true
  await nextTick()
  row ? useResetForm(row) : useResetForm()
}

defineExpose({
  openDialog
})
</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}

.justify-between::after{
  content: '';
}
</style>
