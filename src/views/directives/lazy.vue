<template>
  <el-card>
    <div class="waterfall" v-infinite-scroll="load" :infinite-scroll-immediate="false">
      <div style="width: 100%;">
        <img v-for="item in data" :src="item" v-lazy :key="item" :alt="item"/>
      </div>
    </div>
  </el-card>
</template>
<script lang="ts" setup>
import {getImageList} from '@/api/fastMock'

let data = ref([])
let number = 0
const load = () => {
  if (number >= 5)return
  number += 1
  loadImage()
}

const loadImage = async () => {
  const res = await getImageList(number)
  data.value.push(...res)
}
onMounted(() => loadImage())

</script>

<style scoped lang="less">
//多列布局
.waterfall{
  width: 100%;
  columns: 4;
  column-gap: 10px;
  img{
    width: 100%;
  }
}
</style>

