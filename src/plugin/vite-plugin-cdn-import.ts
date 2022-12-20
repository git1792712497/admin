import { Plugin as importToCDN } from 'vite-plugin-cdn-import'

export default function (){
  return importToCDN({
    modules: [
      {
        name: 'echarts',
        var: 'echarts',
        path: `https://cdn.bootcdn.net/ajax/libs/echarts/5.4.1/echarts.common.min.js`,
      },
    ],
  })
}