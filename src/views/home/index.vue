<template>
 <div>
   <a-auto-complete
       v-model:value="value"
       :dropdown-match-select-width="252"
       :options="dataSource"
       style="width: 400px;"
       @select="onSelect"
       @search="handleSearch"
   />
 </div>
</template>
<script lang="ts" setup>
let value = shallowRef()
let dataSource = ref([])

const handleSearch = (value) => {
  console.log(value)
  dataSource.value = [
    { value: 'light', label: 'Light' },
    { value: 'bamboo', label: 'Bamboo' },
  ];
}

const onSelect = (value, option) => {
  console.log(value)
}
</script>

