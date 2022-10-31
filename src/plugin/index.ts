import autoImport from './autoImport'
import svgIcon from "./svgIcon";
import vue from "@vitejs/plugin-vue";
import jsx from "@vitejs/plugin-vue-jsx";
import vueSetupExtend from "vite-plugin-vue-setup-extend";
import viteCompression from './viteCompression'
import viteMockServe from './mock'
import Components from './unpluginVueComponents'

export default function (){
	 return [
			vue(),
			jsx(),// * vite 可以使用 jsx/tsx 语法
		 	vueSetupExtend(),// * name 可以写在 script 标签上
			autoImport(),
			svgIcon(),
			viteCompression(),
			viteMockServe(),
		  Components() //按需导入组件库
	]
}


