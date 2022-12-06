/*
pnpm i -D unplugin-icons
pnpm i -D @iconify/json

*/

import Icons from 'unplugin-icons/vite'

export default function (){
  return  Icons({
    scale: 1.5, // 缩放
    compiler: 'vue3', // 编译方式
    defaultClass: 'iconify', // 默认类名
    defaultStyle: "color:#292a2d", // 默认样式
    jsx: 'react' // jsx支持
  })
}