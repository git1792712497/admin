<template>
 <div>
   <el-menu default-active="1" router>
     <template v-for="item in list" :key="item.cid">
       <el-sub-menu :index="String(item.cid)" v-if="item.detail && item.detail.length">
         <template #title>
           <span>{{item.title}}</span>
         </template>
         <el-menu-item :index="String(value.id)" v-for="value in item.detail">
           <span>{{value.title}}</span>
         </el-menu-item>
       </el-sub-menu>
       <el-menu-item :index="String(item.cid)" v-else>
         <span>{{item.title}}</span>
       </el-menu-item>
     </template>
   </el-menu>

   <router-view/>
 </div>
</template>

<script lang="ts" setup>
let list = [
  {
    "title": "工商信息",
    "cid": 1,
    "detail": [
      {
        "id": 1,
        "category_id": 1,
        "category_title": "工商信息",
        "title": "企业基本信息",
        "node": "A001",
        "path": "/open/test/",
        "intro": "接口涵盖企业工商照面信息",
        "fee": 100,
        "rq_type": "1",
        "rtn_type": "0",
        "rq_content": "",
        "rtn_content": "",
        "content": ""
      }
    ]
  },
  {
    "title": "法律诉讼",
    "cid": 2
  },
  {
    "title": "经营风险",
    "cid": 3
  },
  {
    "title": "经营信息",
    "cid": 4
  }
]
</script>
