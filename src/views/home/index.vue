<template>
    <main>
      <div id="divApp">

      </div>
      <el-button type="primary" @click="print">按钮</el-button>
    </main>
</template>

<script setup lang="ts">

import printJS from "print-js";
const print = () => {
  printJS({
    printable:'divApp',
    type: 'html',
    style:'background: red',
    targetStyles:['*'],
  })
}

</script>

<style>
#divApp{
  width: 200px;
  height: 200px;
  border: 1px solid red;
}
</style>
