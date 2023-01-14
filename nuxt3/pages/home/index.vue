<template>
  <div>
    home
  </div>
</template>

<script setup lang="ts" name="home">
definePageMeta({
  middleware:[
    "home"
  ],
  //路由参数验证
  validate:route => {
    console.log(route)
    return true
    return {
      statusCode:200
    }
  },
  //自定义每个页面布局
  layout:'custom'
})
</script>

<style scoped lang="less">

</style>
