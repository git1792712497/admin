<template>
  <div>
    <el-table v-bind="$attrs">
      <template v-for="item in $attrs.columns" :key="item.prop">
        <el-table-column v-bind="item">
          <template #default="scope">
            <slot :name="item.slot" v-bind="scope"></slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>