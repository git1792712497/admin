<template>
  <el-card shadow="hover">
    <template #header>
      <el-upload ref="uploadRef" :auto-upload="false"
                 :on-change="uploadChange"
                 :http-request="upload"
                 :headers="{'Blade-Auth': ' eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5hbnRfaWQiOiIzMTcwNTAiLCJ1c2VyX25hbWUiOiJhZG1pbjMxNzA1MCIsInJlYWxfbmFtZSI6ImFkbWluIiwiYXZhdGFyIjoiIiwiYXV0aG9yaXRpZXMiOlsiYWRtaW4iXSwiY2xpZW50X2lkIjoic2FiZXIiLCJyb2xlX25hbWUiOiJhZG1pbiIsImxpY2Vuc2UiOiJwb3dlcmVkIGJ5IGJsYWRleCIsInBvc3RfaWQiOiIxNTE1OTQ0NDY3NTUwNTUyMDY1IiwidXNlcl9pZCI6IjE1MTU5NDQ0Njg5MTc4Nzg3ODYiLCJyb2xlX2lkIjoiMTUxNTk0NDQ2NTc3NjM2MTQ3MyIsInNjb3BlIjpbImFsbCJdLCJuaWNrX25hbWUiOiJhZG1pbiIsIm9hdXRoX2lkIjoiIiwiZGV0YWlsIjp7InR5cGUiOiLml7bkuLAifSwiZXhwIjoxNjYzNjk3NzIzLCJkZXB0X2lkIjoiMTUxNTk0NDQ2NzUxMjgwMzMzMCIsImp0aSI6IjQ2NDMxZWQ0LTc4NjctNGRlMS1iNWMxLWQ0NGQ4NmRjNDRjMyIsImFjY291bnQiOiJhZG1pbjMxNzA1MCJ9.-UuTOl0YA5mf3qYCHWWdIsioeNaRwMWJysrfSbSdiTI'}">
        <template #trigger>
          <el-button type="primary">上传</el-button>
        </template>
      </el-upload>
    </template>
  </el-card>
</template>

<script lang="ts" name="excel" setup>
import {ref} from 'vue'
import type {UploadInstance, UploadFile,UploadFiles,UploadRequestOptions} from 'element-plus'

const uploadRef = ref<UploadInstance>()

const uploadChange = (uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  uploadRef.value!.submit()
  console.log(uploadFile)
}

const upload = (options: UploadRequestOptions) => {
  console.log(options)
}
</script>

<style lang="less" scoped>

</style>