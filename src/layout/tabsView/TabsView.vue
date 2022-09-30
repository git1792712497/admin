<template>
  <nav class="tabs-view" v-if="globalConfig.themeConfig.tabs">
    <el-space>
      <el-tag v-for="(item,index) in tabsView.tabsViewList" :key="item.path"
              :type="$route.path === item.path ? '' : 'info'"
              closable @click="$router.push(item.path)" @close="close(index)">
        {{ item.title }}
      </el-tag>
    </el-space>
  </nav>
</template>

<script lang="ts" name="index" setup>
import {watch} from "vue";
import {useRoute} from 'vue-router'
import {tabsViewStore} from "@/store/modules/tabsView";
import {globalConfigStore} from "@/store/modules/globalConfig";

const route = useRoute()
const tabsView = tabsViewStore()
const globalConfig = globalConfigStore()

watch(() => route.path, () => {
  const {meta, path} = route
  if (meta.title && path) tabsView.addTabs({title: meta.title, path})
}, {immediate: true})

const close = index => tabsView.removeTabs(index)
</script>

<style lang="less" scoped>
.tabs-view {
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  padding: 5px 15px;
}
</style>