<template>
  <svg aria-hidden="true">
    <use :fill="color" :xlink:href="symbolId"/>
  </svg>
</template>

<script lang="ts" name="svgIcon" setup>
const props = defineProps({
  prefix: {
    type: String,
    default: 'icon',
  },
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: '#333',
  },
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>

<style lang="less" scoped>

</style>