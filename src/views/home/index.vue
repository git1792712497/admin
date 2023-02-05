<template>
  <div>
    <a-upload :maxCount="1" :showUploadList="false" :customRequest="handleUpload">
      <a-button ghost type="primary">上传</a-button>
    </a-upload>
  </div>
</template>

<script lang="ts" setup name="home">
import { getUpload } from "@/api/upload";


const handleUpload = ({file}) => {
  getUpload({file}).then(res => {
    console.log(res)
  })
}
</script>

<style scoped>

</style>
