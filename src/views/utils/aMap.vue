<template>
  <el-card :body-style="{height:'100%'}" shadow="hover" style="height: 100%;">
    <main id="container"></main>
  </el-card>
</template>

<script lang="ts" name="aMap" setup>
// pnpm i @amap/amap-jsapi-loader --save
import AMapLoader from '@amap/amap-jsapi-loader'


onMounted(() => {
  AMapLoader.load({
    key: "1f8d8bd40c29a54951b9d945092db42c",
    version: "2.0",      // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: ['AMap.Scale'],       // 需要使用的的插件列表，如比例尺'AMap.Scale'等
  }).then(AMap => {
    const map = new AMap.Map("container", {  //设置地图容器id
      viewMode: "3D",    //是否为3D地图模式
      zoom: 5,           //初始化地图级别
      center: [105.602725, 37.076636], //初始化地图中心点位置
    });
    map.plugin(['AMap.ToolBar', 'AMap.Scale',], () => {
      // 在图面添加工具条控件，工具条控件集成了缩放、平移、定位等功能按钮在内的组合控件
      map.addControl(new AMap.ToolBar());
      // 在图面添加比例尺控件，展示地图在当前层级和纬度下的比例尺
      map.addControl(new AMap.Scale());
    });
  }).catch(e => {
    console.log(e);
  })
})

</script>

<style lang="less" scoped>
#container {
  width: 100%;
  height: 100%;
}
</style>