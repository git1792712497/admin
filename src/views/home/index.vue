<template>
  <div>
      {{data}}

    <el-button type="primary" @click="refresh">刷新</el-button>

  </div>
</template>

<script lang="ts" setup>
import {getMenuListApi} from "@/views/system/menu/api";
import { useRequest } from 'vue-request';

const { data, run,refresh } = useRequest(getMenuListApi, {
  manual:true
});

let icon = shallowRef()
</script>
