<template>
  <section>
    <el-card shadow="hover">
      <template #header>
        <nav class="flex justify-between">
          <el-button type="primary" @click="handleClick">裁切</el-button>
          <el-link type="primary" target="_blank" href="https://github.com/fengyuanchen/cropperjs">cropperjs</el-link>
        </nav>
      </template>
      <main class="flex justify-between">
        <img class="img" src="../../assets/images/login.png" alt="img">
      </main>
    </el-card>
    <br><el-dialog v-model="dialogVisible"><el-image :src="src"/></el-dialog>
    <el-card shadow="hover">
      <template #header>
        <nav class="flex justify-between">
          <el-button type="primary" @click="handleVueCropper">裁切</el-button>
          <el-link type="primary" target="_blank" href="https://github.com/xyxiao001/vue-cropper">vue-cropper</el-link>
        </nav>
      </template>
      <main class="vueCropper">
        <vueCropper ref="cropperRef" autoCrop img="http://127.0.0.1:5173/src/assets/images/login.png" outputType="png"></vueCropper>
      </main>
    </el-card>
  </section>
</template>

<script setup lang="ts" name="cropper">
//详细配置
// https://blog.csdn.net/weixin_42029374/article/details/111589663?ops_request_misc=&request_id=&biz_id=102&utm_term=cropperjs&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduweb~default-3-111589663.142^v51^control,201^v3^add_ask&spm=1018.2226.3001.4187
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.css'

let cropper
onMounted(() => {
  const el = document.querySelector('.img') as HTMLImageElement
  cropper = new Cropper(el, {
    viewMode: 1, //定义裁剪器的视图模式。如果将viewMode设置为0，则裁剪框可以延伸到画布外部，而值为1、2或3将限制裁剪框的大小为画布的大小。viewMode为2或3会将画布限制为容器。请注意，如果画布和容器的比例相同，则2和3之间没有差别。
    dragMode: 'move', //定义的拖动模式裁剪器.canvas和容器一样，2和3没有区别。move:移动画布 crop:创建新的裁剪框（默认） none:什么也不做
    aspectRatio: 3 / 2,//定义裁剪框的固定纵横比。默认情况下，裁剪框为自由比率。
    autoCropArea: 1,//定义0到1之间的fA编号。定义自动裁剪区域大小（百分比）。默认0.8
    cropBoxMovable: true,//允许通过拖动移动裁剪框。默认true
    cropBoxResizable: true,//以通过拖动来调整裁剪框的大小 默认true
    background: true,//显示容器的网格背景
    movable: true, //移动图像
    crop(event) {
      console.log(event.detail.x);
      console.log(event.detail.y);
      console.log(event.detail.width);
      console.log(event.detail.height);
      console.log(event.detail.rotate);
      console.log(event.detail.scaleX);
      console.log(event.detail.scaleY);
    },
  });
})

let dialogVisible = shallowRef(false)
let src = shallowRef()
const handleClick = () => {
  cropper.getCroppedCanvas().toBlob(blob => {
    let fileReader = new FileReader();
    fileReader.onloadend = e => {
      src.value = e.target.result
      dialogVisible.value = true
    };
    fileReader.readAsDataURL(blob);
  }, "image/jpeg")
}

/*
pnpm install vue-cropper@next
*/
import 'vue-cropper/dist/index.css'
import { VueCropper }  from "vue-cropper";

const cropperRef = shallowRef(null)
const handleVueCropper = () => {
  cropperRef.value.getCropData(data => {
    src.value = data
    dialogVisible.value = true
  })

  cropperRef.value.getCropBlob(data => {
    console.log(data)
  })
}
</script>

<style scoped lang="less">
/* 确保图像的大小完全适合容器 */
img {
  width: 600px;
  height: 380px;
  display: block;
  /* 这个规则很重要，请不要忽略这个 */
  max-width: 100%;
}

.vueCropper{
  width: 600px;
  height: 380px;
}
</style>