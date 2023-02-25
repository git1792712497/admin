<template>
  <el-card shadow="hover" style="height: 100%;" :body-style="{height:'100%'}">
    <template #header>http长连接</template>
      {{data}}
  </el-card>
</template>

<script setup lang="ts" name="eventSource">
import { useEventSource } from '@vueuse/core'
const { status, data, error, close } = useEventSource('http://localhost:8081/EventSource')



/*EventSource的官方名称应该是 Server-sent events（缩写SSE）服务端派发事件



 */

// onMounted(() => {
//   const es = new EventSource("http://localhost:8081/EventSource");
//   const listener = function (event) {
//     const type = event.type;
//     console.log(event.data)
//   };
//   es.addEventListener("open", listener);
//   es.addEventListener("message", listener);
//   es.addEventListener("error", listener);
// })

</script>

<style scoped lang="less">

</style>
