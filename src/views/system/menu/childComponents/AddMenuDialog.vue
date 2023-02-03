<template>
  <el-dialog v-model="dialogVisible" title="新增菜单" :width="550">
    <el-form ref="formRef" :model="basicForm" status-icon :rules="rules" label-width="80px">
      <el-form-item label="菜单类型" prop="type">
        <el-radio-group v-model="basicForm.type">
          <el-radio-button :label="1">目录</el-radio-button>
          <el-radio-button :label="2">菜单</el-radio-button>
          <el-radio-button :label="3">按钮</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-row :gutter="20">
       <el-col :span="basicForm.type === 1 ? 24 : 12">
         <el-form-item label="菜单名称" prop="title">
           <el-input v-model="basicForm.title" clearable autofocus placeholder="请输入菜单标题" />
         </el-form-item>
       </el-col>
       <el-col :span="12">
         <el-form-item v-if="basicForm.type !== 1" label="菜单标识" prop="name">
           <el-input v-model="basicForm.name" clearable autofocus placeholder="请输入菜单标识" />
         </el-form-item>
       </el-col>
      </el-row>
      <el-form-item label="父级菜单" prop="parentId">
        <el-tree-select @clear="currentPath = undefined" @current-change="({path}) => currentPath = path" v-model="basicForm.parentId" :data="menuData" check-strictly clearable :props="{ label: 'title', children: 'children', value: 'id' }" style="width: 100%;"/>
      </el-form-item>
      <el-form-item v-if="basicForm.type !== 3" label="菜单路由" prop="path">
        <el-input v-model="basicForm.path" clearable placeholder="请输入路由path或http外链地址">
          <template #prepend v-if="currentPath">{{currentPath}}</template>
        </el-input>
      </el-form-item>
      <el-form-item v-if="basicForm.type === 2 || basicForm.type === undefined" label="组件路径" prop="component">
        <el-input v-model="basicForm.component" clearable placeholder="请输入组件路径">
          <template #prepend>@/views</template>
        </el-input>
      </el-form-item>
      <el-form-item v-if="basicForm.type === 2 || basicForm.type === undefined" label="活跃菜单" prop="activePath">
        <el-input v-model="basicForm.activePath" clearable placeholder="请输入当前激活菜单路径"/>
      </el-form-item>
      <el-row :gutter="20">
       <el-col :span="12">
         <el-form-item v-if="basicForm.type !== 3" label="菜单图标" prop="icon">
           <IconSelect class="w-full" v-model="basicForm.icon"/>
         </el-form-item>
       </el-col>
        <el-col :span="basicForm.type === 3 ? 24 : 12">
          <el-form-item label="菜单排序" prop="sort">
            <el-input-number v-model="basicForm.sort" :min="0" placeholder="菜单序号" style="width: 100%;"/>
          </el-form-item>
       </el-col>
      </el-row>
      <el-row :gutter="20">
       <el-col :span="12">
         <el-form-item v-if="basicForm.type === 2 || basicForm.type === undefined" label="是否外链" prop="isLink">
           <el-radio-group v-model="basicForm.isLink">
             <el-radio-button :label="1">开启</el-radio-button>
             <el-radio-button :label="0">关闭</el-radio-button>
           </el-radio-group>
         </el-form-item>
       </el-col>
        <el-col :span="12">
          <el-form-item v-if="basicForm.type === 2 || basicForm.type === undefined" label="菜单状态" prop="hidden">
            <el-radio-group v-model="basicForm.hidden">
              <el-radio-button :label="1">显示</el-radio-button>
              <el-radio-button :label="0">隐藏</el-radio-button>
            </el-radio-group>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
       <el-col :span="12">
         <el-form-item v-if="basicForm.type === 2 || basicForm.type === undefined" label="开启全屏" prop="fullScreen">
           <el-radio-group v-model="basicForm.fullScreen">
             <el-radio-button :label="1">开启</el-radio-button>
             <el-radio-button :label="0">关闭</el-radio-button>
           </el-radio-group>
         </el-form-item>
       </el-col>
       <el-col :span="12">
         <el-form-item v-if="basicForm.type === 2 || basicForm.type === undefined" label="缓存菜单" prop="keepAlive">
           <el-radio-group v-model="basicForm.keepAlive">
             <el-radio-button :label="1">开启</el-radio-button>
             <el-radio-button :label="0">关闭</el-radio-button>
           </el-radio-group>
         </el-form-item>
       </el-col>
      </el-row>
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
import { ref ,reactive} from 'vue'
import type { FormInstance } from 'element-plus'
import {getAddMenuApi} from '../api'
import { ElMessage } from "element-plus";
import IconSelect from '@/components/iconSelect/index.vue'
import {AddMenuForm} from '../types/addMenuForm'

const props = defineProps({
  menuData:{
    type:Array,
    default:[]
  }
})
const emit = defineEmits(['refresh'])

const currentPath = ref('')
const formRef = ref<FormInstance>()
let basicForm = reactive<AddMenuForm>({
  hidden:1,
  fullScreen:0,
  keepAlive:0,
  name:'',
  icon: 'Menu',
  path: '',
  sort:0,
  component:'',
  type:undefined,
  title:'',
  isLink:0,
  activePath:''
})

const dialogVisible = ref(false)
let loading = ref(false)
const handleConfirm = () => {
  formRef.value.validate(async isValid => {
    if (!isValid)return
    loading.value = true
    const menuForm = toRaw(basicForm)
    menuForm.path = currentPath.value + menuForm.path
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

const openDialog = async row => {
  dialogVisible.value = true
  await nextTick()
  if (row){
    Object.keys(toRaw(basicForm)).forEach(key => basicForm[key] = row[key])
  }else {
    currentPath.value = ''
    formRef.value.resetFields()
  }
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
