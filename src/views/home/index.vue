<template>
  <el-card shadow="hover" style="height: 100%;" :body-style="{height:'100%'}">
    <template #header>

    </template>
    <el-button type="primary" :disabled="!disable" @click="handleSendCode">{{btnText}}</el-button>
  </el-card>
</template>

<script lang="ts" setup>
import {useSendCode} from '@/hooks/useSendCode'

const { btnText,sendCode,disable} = useSendCode()
const handleSendCode = () => sendCode
</script>
