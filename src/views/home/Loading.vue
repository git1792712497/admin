<template>
  <div class="m-4">
    <p>{{value}}</p>
    <el-cascader @change="handleChange"  ref="cascader" label="name" value="code" v-model="value" :options="options" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { getAddressList } from "@/api/order";

const value = ref([])
let options = [
  {
    code: 'guide',
    name: 'Guide',
    children: [

    ],
  },
]
getAddressList().then(res => {
  console.log(res)
  options.value = res.data
})
const cascader = ref()

const handleChange = (value) => {
  console.log(cascader.value.getCheckedNodes());
}

</script>
