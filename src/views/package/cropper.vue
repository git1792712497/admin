<template>
  <section>
    <el-card shadow="hover">
      <template #header>
        <nav class="flex justify-between">
          <el-button type="primary" @click="handleVueCropper">裁切</el-button>
          <el-link type="primary" target="_blank" href="https://github.com/xyxiao001/vue-cropper">vue-cropper</el-link>
        </nav>
      </template>
      <main class="vueCropper">
        <vueCropper ref="cropperRef" autoCrop img="https://cos-1304585490.cos.ap-nanjing.myqcloud.com/1675585510312_Snipaste_2021-03-22_11-16-23.png" outputType="png"></vueCropper>
        <img class="image" :src="src" alt="">
      </main>
    </el-card>
  </section>
</template>

<script setup lang="ts" name="cropper">
// pnpm install vue-cropper@next
import 'vue-cropper/dist/index.css'
import { VueCropper }  from "vue-cropper";


const cropperRef = shallowRef(null)
let src = shallowRef()
const handleVueCropper = () => {
  cropperRef.value.getCropData(data => {
    src.value = data
        // URL.createObjectURL()
  })
}
</script>

<style scoped lang="less">

.vueCropper{
  width: 80%;
  height: 580px;
  display: flex;
  justify-content: space-between;
  .image{
    width: 20%;
    height: 200px;
    text-align: right;
  }
}
</style>
