<template>
  <header class="header"></header>
    <slot></slot>
  <footer class="footer"></footer>
</template>

<script setup lang="ts" name="default">

</script>

<style scoped lang="less">
.header{
  width: 100%;
  height: 50px;
  background: yellow;
}

.footer{
  position: fixed;
  width: 100%;
  height: 40px;
  bottom: 0;
  background: pink;
}
</style>
