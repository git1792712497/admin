<template>
  <el-card :body-style="{height:'100%'}" shadow="hover" style="height: 100%;">
    <div class="waterChart">

    </div>
  </el-card>
</template>

<script lang="ts" name="waterChart" setup>
import "echarts-liquidfill";
import { useEcharts } from "@/hooks/useEcharts";

onMounted(() => {
  const {setOption} = useEcharts('.waterChart')
  setOption(
      {
        series: [{
          type: 'liquidFill',
          radius: '75%',
          center: ['50%', '50%'],
          color: ['#2397f6'],
          data: [0.6868], // data个数代表波浪数
          backgroundStyle: {
            borderWidth: 1,
            color: '#ecf6ff'
          },
          label: {
            normal: {
              formatter: (0.6868 * 100).toFixed(2) + ' ' + '%',
              textStyle: {
                fontSize: 41,
                color: "#7AABFA",
              }
            }
          },
          outline: {
            show: false,
          },
        }
        ]
      }
  )
});
</script>

<style lang="less" scoped>
.waterChart {
  width: 100%;
  height: 80%;
}
</style>