<template>
  <div ref="scaleRef" :style="{ width: width + 'px', height: height + 'px' }">
    <slot></slot>
  </div>
</template>
<script lang="ts" setup name="BigScreenScale">
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
  const docEl = document.documentElement as HTMLElement
  const screenWidth: number = docEl.clientWidth
  const screenHeight: number = docEl.clientHeight
  if (!screenWidth || !screenHeight) return

  const widthScale = (screenWidth / props.width).toFixed(10)
  const heightScale = (screenHeight / props.height).toFixed(10)
  const scale = widthScale < heightScale ? widthScale : heightScale

  document.documentElement.style.fontSize = props.rootValue + 'px'
  scaleRef.value.style.transform = `scale(${scale})`
  scaleRef.value.style.transformOrigin = 'left top'
  console.log(props.width * Number(scale))
  console.log(props.height * Number(scale))
  if (widthScale > heightScale) {
    scaleRef.value.style.marginLeft = (screenWidth - Number.parseInt((props.width * Number(scale)).toFixed(2))) / 2 + 'px'
  } else {
    scaleRef.value.style.marginTop = (screenHeight - Number.parseInt((props.height * Number(scale)).toFixed(2))) / 2 + 'px'
  }
  scaleRef.value.style.marginLeft = (screenWidth - Number.parseInt((props.width * Number(scale)).toFixed(2))) / 2 + 'px'
}
onMounted(() => {
  reRender()
  window.addEventListener('resize', debounce(reRender, 500), false)
  document.addEventListener('DOMContentLoaded', debounce(reRender, 500), false)
})
</script>
