<template>
  <div>
    {{menuStore.menuList}}
  </div>
</template>

<script lang="ts" setup name="home">
import {store} from '@/store'
const {menuStore} = store()
</script>

<style scoped>

</style>
