<template>
  <el-card shadow="hover" style="height: 100%;" :body-style="{height:'100%'}">
    <template #header>

    </template>
    <el-button type="primary" @click="clickLogin">登录</el-button>
    <el-button type="primary" @click="clickRegister">注册</el-button>
    <el-button type="primary" @click="clickPublish">发布</el-button>
    <el-button type="primary" @click="clickQuery">查询</el-button>
  </el-card>
</template>

<script lang="ts" setup>
import { getList, getLogin, getPublish, getRegister } from "@/api/koa";
const clickLogin = () => {
  getLogin({name:'张飞',password:'252437'}).then(res => {
    console.log(res)
  })
}

const clickRegister = () => {
  getRegister({name:'张飞',password:'252437'}).then(res => {
    console.log(res)
  })
}

const clickPublish = () => {
  getPublish({content:'app'}).then(res => {
    console.log(res)
  })
}

const clickQuery = () => {
  getList().then(res => {
    console.log(res)
  })
}

</script>
