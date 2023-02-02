<template>
  <div ref="zoomRef" class="bigScreenZoom" :style="{ width: width + 'px', height: height + 'px' }">
    <slot></slot>
  </div>
</template>
<script lang="ts" setup name="BigScreenZoom">
/*
scale是等比例缩放比较好，非等比例会出现上下 或者  左右留白的情况，
如果非要完全充满浏览器视口，则会有很明显的页面被压缩的情况。,
 scale 缩放还有一些问题到现在没找到完美解决方案。
虽然zoom的性能比scale差，但是对于B端来说这点性能微不足道，更何况还是大屏可视化平台。
rem适配它受浏览器字体最小12px的影响。
zoom缩放会将元素保持在左上角，而scale默认是中间位置，可以通过transform-origin来设置
*/
import { onMounted, ref } from 'vue'
import { debounce } from 'lodash-es'

type Props = {
  width?: number
  height?: number
  rootValue?: number
}
const props = withDefaults(defineProps<Props>(), {
  width: 1920,
  height: 1080
})
const zoomRef = ref()
const reRender = () => {
  const screenWidth: number = document.documentElement.clientWidth
  const screenHeight: number = document.documentElement.clientHeight

  const widthScale = (screenWidth / props.width).toFixed(10)
  const heightScale = (screenHeight / props.height).toFixed(10)

  zoomRef.value.style.zoom = widthScale < heightScale ? widthScale : heightScale
}
onMounted(() => {
  reRender()
  window.addEventListener('resize', debounce(reRender, 100), false)
  document.addEventListener('DOMContentLoaded', debounce(reRender, 100), false)
})
</script>

<style scoped>
.bigScreenZoom{
  position: relative;
}
</style>
