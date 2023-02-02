<template>
  <div>
    <el-popover :width="315" v-model:visible="isPopover" placement="bottom" trigger="click" transition="el-zoom-in-top" popper-class="icon-selector-popper">
      <template #reference>
        <el-input type="text" @blur="isPopover = false" :modelValue="modelValue" placeholder="请选择图标">
          <template #prepend>
            <el-button size="small" :icon="modelValue"/>
          </template>
        </el-input>
      </template>
      <el-scrollbar height="210px">
        <nav class="flex justify-start flex-wrap items-center">
          <el-button @click="emit('update:modelValue',item)" v-for="item in Object.keys(Icons)" :key="item" :icon="item"/>
        </nav>
      </el-scrollbar>
    </el-popover>
  </div>
</template>

<script setup lang="ts" name="index">
import * as Icons from "@element-plus/icons-vue";

defineProps({
 modelValue:{
   type:String,
   default:''
 }
})

let isPopover = shallowRef(false)

const emit = defineEmits(['update:modelValue'])
</script>

<style scoped lang="less">
:deep(.el-button){
  margin: 5px;
}
</style>
