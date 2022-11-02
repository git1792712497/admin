<template>
  <div ref="remRef" :style="{ width: widthRem, height: heightRem }">
    <slot></slot>
  </div>
</template>
<script lang="ts" setup name="BigScreenRem">
/*rem的方案对于1920及以上分辨率屏幕来说基本适用，
但当切换到1366*768等小分辨率时，由于浏览器默认最小字体为12px，
所以会导致文字比理想效果更多大，
而echarts生成的canvas图中单位是以固定px写死的，
也会出现超出画布的问题，因此衍生第二种方案： scale缩放*/
import { computed, onMounted, ref } from 'vue'
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
const remRef = ref()
const fontSize = ref(192)
const widthRem = computed(() => {
  return (Number.parseFloat(props.width.toString()) / props.rootValue).toFixed(5) + 'rem'
})
const heightRem = computed(() => {
  return (Number.parseFloat(props.height.toString()) / props.rootValue).toFixed(5) + 'rem'
})
const reRender = () => {
  const docEl = document.documentElement as HTMLElement
  const screenWidth: number = docEl.clientWidth
  const screenHeight: number = docEl.clientHeight
  if (!screenWidth || !screenHeight) return

  const screenRatio: number = screenWidth / screenHeight
  const screenRatioDesign: number = props.width / props.height

  if (screenRatio > screenRatioDesign) {
    // screenRatio > screenRatioDesign 说明屏幕比较宽 则 高度撑满 左右居中
    // console.log('screenRatio > screenRatioDesign 说明屏幕比较宽 则 高度撑满 左右居中')
    // 这边之所以 * screenRatioDesign 是因为 postcss 默认的 rootValue 是 1920 / 10
    // 用高度计算 fontSize 则需要把之前的关系乘上去
    fontSize.value = (screenHeight / 10) * screenRatioDesign
  } else if (screenRatio < screenRatioDesign) {
    // screenRatio < screenRatioDesign 说明屏幕比较长 则宽度撑满 上下居中
    // console.log('screenRatio < screenRatioDesign 说明屏幕比较长 则宽度撑满 上下居中')
    fontSize.value = screenWidth / 10
  } else {
    fontSize.value = screenWidth / 10
  }
  document.documentElement.style.fontSize = fontSize.value.toFixed(5) + 'px'
}
onMounted(() => {
  reRender()
  window.addEventListener('resize',debounce(reRender, 500), false)
  document.addEventListener('DOMContentLoaded', debounce(reRender, 500), false)
})
</script>
