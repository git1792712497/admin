<template>
  <div class="m-4">
    <p>{{value}}</p>
    <el-cascader :props="props" @change="handleChange"  ref="cascader" v-model="value" :options="options">

    </el-cascader>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { getAddressList } from "@/api/order";
const props = {
  label:'name',
  value:'code'
}
const value = ref([])
let options = ref([])
getAddressList().then(res => {
  console.log(res)
  options.value = res.data
})
const cascader = ref()

const handleChange = (value) => {
  console.log(cascader.value.getCheckedNodes());
}

</script>
