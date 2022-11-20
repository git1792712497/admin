<template>
  <el-card shadow="hover" style="height: 100%;" :body-style="{height:'100%'}">
    <div class="mapChart">

    </div>
  </el-card>
</template>

<script setup lang="ts" name="mapChart">
import {getChinaMapData,getYunNanMapData} from '@/api/mock'
import {options} from './options'
import {useEcharts} from "@/hooks/useEcharts";

onMounted(async () => {
  const {setOption,echartsInstance,echarts} = useEcharts('.mapChart')
  echarts.registerMap('china',await getChinaMapData())
  echartsInstance.showLoading()
  setOption(options)
  setTimeout(() => echartsInstance.hideLoading(),500)

  // 自动轮播图 bar
  setInterval(function () {
    autoToolTip();
  }, 1000);
  let index = 0; // 0-5
  function autoToolTip() {
    index++;
    if (index > 33) {
      index = 0;
    }
    // 1.显示提示框
    echartsInstance.dispatchAction({
      type: "showTip", // 触发的action type
      seriesIndex: 0, // 系列的 索引
      dataIndex: index,// 数据项的 索引
      position: "top", // top
    });
  }

  //下钻
  echartsInstance.on('click',({name}) => {
    if (Object.is(name,'云南')){
      getYunNanMapData().then(data => {
        console.log(data)
        if (!echarts.getMap(name)){
          echarts.registerMap(name,data)
        }
        options.series[0].map = name
        echartsInstance.setOption(options)
      })
    }
  })
})
</script>

<style scoped lang="less">
.mapChart{
  width: 100%;
  height:90%;
}
</style>