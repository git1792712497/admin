<template>
<div>

</div>
</template>

<script setup lang="ts">
import {getOrderList} from '@/api/order'
getOrderList({
  "type_equal": 1,
  "current": 1,
  "size": 10,
  "queryType": "seller"
}).then(res => {
  console.log(res)
})

import {userStore} from "@/store/modules/user";

console.log(userStore().profile)
</script>