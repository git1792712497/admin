<template>
  <section class="BigScreenScale" ref="scaleRef" :style="{ width: width + 'px', height: height + 'px'}">
    <slot></slot>
  </section>
</template>
<script lang="ts" setup name="BigScreenScale">
/*rem的方案对于1920及以上分辨率屏幕来说基本适用，
但当切换到1366*768等小分辨率时，由于浏览器默认最小字体为12px，
所以会导致文字比理想效果更多大，
而echarts生成的canvas图中单位是以固定px写死的，
也会出现超出画布的问题，因此衍生第二种方案： scale缩放*/
import { onMounted, ref } from 'vue'
import {debounce} from 'lodash-es'
type Props = {
  width?: number
  height?: number
  rootValue?: number
}
const props = withDefaults(defineProps<Props>(), {
  width: 1920,
  height: 1080,
  rootValue: 192
})
const scaleRef = ref()

const reRender = () => {
  const screenWidth: number = document.documentElement.clientWidth
  const screenHeight: number = document.documentElement.clientHeight
  if (!screenWidth || !screenHeight) return

  const widthScale = (screenWidth / props.width).toFixed(10)
  const heightScale = (screenHeight / props.height).toFixed(10)
  const scale = widthScale < heightScale ? widthScale : heightScale

  document.documentElement.style.fontSize = props.rootValue + 'px'
  scaleRef.value.style.transform = `scale(${scale})`
  scaleRef.value.style.transformOrigin = 'left top'

  if (widthScale > heightScale) {
    scaleRef.value.style.marginLeft = (screenWidth - Number.parseInt((props.width * Number(scale)).toFixed(2))) / 2 + 'px'
  } else {
    scaleRef.value.style.marginTop = (screenHeight - Number.parseInt((props.height * Number(scale)).toFixed(2))) / 2 + 'px'
  }
  scaleRef.value.style.marginLeft = (screenWidth - Number.parseInt((props.width * Number(scale)).toFixed(2))) / 2 + 'px'
}
onMounted(() => {
  reRender()
  window.addEventListener('resize', debounce(reRender, 100), false)
  document.addEventListener('DOMContentLoaded', debounce(reRender, 100), false)
})
</script>

<style scoped>
.BigScreenScale{
  position: relative;
}
</style>
