<template>
  <el-card>
    <template #header>
      h函数使用
    </template>
    <el-collapse v-model="activeNames">
      <el-collapse-item title="修改url" :name="1">
          <el-button type="primary" @click="handleChangeUrl">按钮</el-button>
      </el-collapse-item>
      <el-collapse-item title="可编辑元素" :name="1">
        <div contenteditable="true">点击编辑元素</div>
      </el-collapse-item>
    </el-collapse>
  </el-card>
</template>

<script setup lang="ts" name="methods">
let activeNames = shallowRef(0)
//修改url
const handleChangeUrl = () => history.pushState(null,null,'/修改url')
addEventListener('popstate',() => {}) //监听回退
//监听DOM变化API
const observe = new MutationObserver((mutationsList) => {
  console.log(mutationsList)
})

</script>

<style scoped lang="less">

</style>