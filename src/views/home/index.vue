<template>
  <el-row class="tac">
    <el-col :span="12">
      <h5 class="mb-2">Custom colors</h5>
      <el-menu
          active-text-color="#ffd04b"
          background-color="#545c64"
          class="el-menu-vertical-demo"
          default-active="2"
          text-color="#fff"
          unique-opened
          popper-effect="light"
          router
      >
        <el-menu-item index="/1">
          <el-icon><setting /></el-icon>
          <span>default</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
const handle = (key: string,) => {
  console.log(key)
}

</script>
