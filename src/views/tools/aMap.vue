<template>
  <el-card :body-style="{height:'100%'}" shadow="hover" style="height: 100%;">
    <template #header>
      <el-autocomplete
          v-model="searchKeyword"
          :fetch-suggestions="handleSearch"
          :trigger-on-focus="false" clearable
          placeholder="输入城市+关键字搜索"
          @select="handleSelect"/>
    </template>
    <main id="container"></main>
  </el-card>
</template>

<script lang="ts" name="aMap" setup>
// pnpm i @amap/amap-jsapi-loader @amap/amap-jsapi-types
import AMapLoader from '@amap/amap-jsapi-loader'
import "@amap/amap-jsapi-types";
window._AMapSecurityConfig = {
  securityJsCode: 'f86c6dbb0585f5df290482f25aee1ed7',
};

let searchKeyword = shallowRef() //搜索关键字
let placeSearch //位置搜索
let map //
onMounted(async () => {
  const AMap = await AMapLoader.load({
    key: "ca5fdff50eb80a3399c114cde9ebf1cc",
    version: "2.0",      // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: ['AMap.Scale'],       // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    Loca:{                // 是否加载 Loca， 缺省不加载
      "version": '2.0'  // Loca 版本
    },
  })

  map = new AMap.Map("container", {  //设置地图容器id
    viewMode: "3D",    //是否为3D地图模式
    zoom: 5,           //初始化地图级别
    center: [105.602725, 37.076636], //初始化地图中心点位置
  });
  //使用CSS默认样式定义地图上的鼠标样式
  map.setDefaultCursor("pointer");

  map.plugin(['AMap.ToolBar', 'AMap.Scale','AMap.Geocoder','AMap.Geolocation','AMap.PlaceSearch',], () => {
    // 在图面添加工具条控件，工具条控件集成了缩放、平移、定位等功能按钮在内的组合控件
    map.addControl(new AMap.ToolBar());
    // 在图面添加比例尺控件，展示地图在当前层级和纬度下的比例尺
    map.addControl(new AMap.Scale());
    //定位
    map.addControl( new AMap.Geolocation({
      enableHighAccuracy: true, //是否使用高精度定位，默认:true
      timeout: 10000, //超过10秒后停止定位，默认：5s
      position: 'RT', //定位按钮的停靠位置
      buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
      zoomToAccuracy: true, //定位成功后是否自动调整地图视野到定位点
    }))
  });


  //选点定位
  const geocoder = new AMap.Geocoder({
    city: '全国',
  });
  //地图上标点 标记当前位置 删除上一个标记点
  let markers = []; //创建一个空数组存储每次标记的marker
  map.on('click',e => {
    //经度
    const lat = e.lnglat.lat
    //维度
    const lng = e.lnglat.lng
    geocoder.getAddress([lng,lat],(status, result) => {
      if (status === 'complete' && result.info === 'OK') {
        const { addressComponent, formattedAddress } = result.regeocode;
        let { city, province, district } = addressComponent;
        console.log(addressComponent)
        console.log(formattedAddress)
        // 创建一个 Marker 实例：
        const marker = new AMap.Marker({
          position: new AMap.LngLat(lng, lat),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
          title: '北京'
        });
        map.remove(markers)
        map.add([marker]);
        markers.push(marker)
      }else {
        console.log(result)
      }
    })
  })

  //位置搜索
  placeSearch = new AMap.PlaceSearch({
    map,
    city: '',
    pageSize: 30, // 单页显示结果条数
    pageIndex: 1, // 页码
    citylimit: false, // 是否强制限制在设置的城市内搜索
    autoFitView: true,
  });
})

const handleSearch = (queryString, cb) => {
  console.log(queryString)
  console.log(cb)
  placeSearch.search(queryString, (status, result) => {
    if (result && typeof result === 'object' && result.poiList) {
      const list = result.poiList.pois;
      list.forEach(item => {
        item.value = item.name;
        item.label = item.name;
      });
      cb(list);
    } else {cb([])}
  });
}
// 点击搜索项
function handleSelect(item) {
  const { pname, cityname, adname, address, name } = item;
  const { lng, lat } = item.location;
  console.log({
    longitude: lng,
    latitude: lat,
    address,
    zone: [pname, cityname, adname],
    name,
  })
  map.setZoomAndCenter(16, [lng, lat]);
}
</script>

<style lang="less" scoped>
#container {
  width: 100%;
  height: 85%;
}
</style>
