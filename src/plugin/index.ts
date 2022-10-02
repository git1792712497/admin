import autoImport from './autoImport'
import svgIcon from "./svgIcon";
import vue from "@vitejs/plugin-vue";
import jsx from "@vitejs/plugin-vue-jsx";
import vueSetupExtend from "vite-plugin-vue-setup-extend";
import viteCompression from "vite-plugin-compression";
import viteMockServe from './mock'

export const plugins = [
	vue(),
	jsx(),
	autoImport(),
	svgIcon(),
	vueSetupExtend(),
	viteCompression(),
	viteMockServe()
]


