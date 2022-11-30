<template>
  <el-card shadow="hover" :body-style="{height:'100%'}" style="height: 100%;">
    <template #header>
      <nav>
        <el-button type="primary" @click="handleAdd">增加数据</el-button>
        <el-button type="primary" @click="handleUpdate">更新数据</el-button>
        <el-button type="primary" @click="handleDelete">删除数据</el-button>
      </nav>
    </template>
    {{data}}
  </el-card>
</template>
<script lang="ts" setup name="jsonServer">
import { getAddData, getDelete, getList, getUpdate } from '@/api/jsonServe'


let data = ref([])
getList().then(res => {
  data.value = res
})

const handleAdd = () => {
  getAddData({name:'李白',age:10}).then(res => {
    console.log(res)
    getList().then(res => {
      data.value = res
    })
  })
}

const handleUpdate = () => {
  getUpdate({id:1,name:'更新数据'}).then(res => {
    getList().then(res => {
      data.value = res
    })
  })
}


const handleDelete = () => {
  getDelete({id:1}).then(res => {
    getList().then(res => {
      data.value = res
    })
  })
}
</script>


