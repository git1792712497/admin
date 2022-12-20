import vue from "@vitejs/plugin-vue";
import jsx from "@vitejs/plugin-vue-jsx";
import autoImport from './unplugin-auto-import'
import svgIcon from "./vite-plugin-svg-icons";
import vueSetupExtend from "vite-plugin-vue-setup-extend";
import viteCompression from './vite-plugin-compression'
import viteMockServe from './vite-plugin-mock'
import Components from './unplugin-vue-components'
import visualizer from './rollup-plugin-visualizer'
import Icons from './unplugin-icons'
import importToCDN from './vite-plugin-cdn-import'

export default function (){
	 return [
			vue(),
			jsx(),// * vite 可以使用 jsx/tsx 语法
		 	vueSetupExtend(),// * name 可以写在 script 标签上
			autoImport(),
			svgIcon(),
			viteCompression(),
			viteMockServe(),
		  Components(), //按需导入组件库
		  visualizer(), //包体积分析
		  Icons(), //iconify
		 	importToCDN() //cdn优化
	]
}


