import autoImport from './autoImport'
import svgIcon from "./svgIcon";
import vue from "@vitejs/plugin-vue";
import jsx from "@vitejs/plugin-vue-jsx";
import vueSetupExtend from "vite-plugin-vue-setup-extend";
import viteCompression from './viteCompression'
import viteMockServe from './mock'

export const plugins = [
	vue(),
	jsx(),// * vite 可以使用 jsx/tsx 语法
	autoImport(),
	svgIcon(),
	vueSetupExtend(),// * name 可以写在 script 标签上
	viteCompression(),
	viteMockServe()
]


