import { visualizer } from "rollup-plugin-visualizer";

export default function (){
  return visualizer({
    gzipSize:true,
    brotliSize:true,
    open:true
  })
}

/*filename/file	string	生成分析的文件名
title	string	html标签页标题
open	boolean	以默认服务器代理打开文件
template	string	可选择的图表类型
gzipSize	boolean	搜集gzip压缩包的大小到图表
BrotliSize	boolearn	搜集brotli压缩包的大小到图表
emitFile	boolean	使用emitFile生成文件，简单说，这个属性为true,打包后的分析文件会出现在打包好的文件包下，否则就会在项目目录下
sourcemap	boolean	使用sourcemap计算大小
projectRoot	string， RegExp	文件的根目录，默认在打包好的目录下*/
