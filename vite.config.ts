import { defineConfig } from "vite";
// @ts-ignore
import path from "path";
import installPlugins from './src/plugin'
import {proxy} from "./src/config/proxy";

export default defineConfig(({ command, mode }) => {
	return {
		define: {
			'process.env': {}
		},
		server: {
			host:'0.0.0.0',
			port:8888,
			open: true,
			proxy
		},
		plugins:installPlugins(),
		base: "./",
		css: {
			devSourcemap: true,
			modules: {
				localsConvention: "camelCaseOnly",
				scopeBehaviour: "global"
			},
			preprocessorOptions: {
				less: {},
				scss: {}
			}
		},
		resolve: {
			alias: {
				'@': path.resolve(__dirname, './src')
			}
		},
		build: {
			manifest: false,// 是否生成一个 manifest.json 的文件在assets目录下
			cssTarget: 'chrome100',
			assetsInlineLimit: 4096,// 默认4kb 配置图片编译base64时大小，大于以原文件引入，小于会直接编译
			outDir: "dist",
			chunkSizeWarningLimit: 500,// 打包文件超大小警告显示，默认500kbs
			minify: "esbuild", //terser 打包后可移除console
			target:'es2015',// 目标语言
			assetsDir: 'assets',// 指定打包生成静态资源的存放路径
			sourcemap:false,// 构建后是否生成 source map 文件
			cssCodeSplit:true,//css拆分
			terserOptions: {
				compress: {
					drop_console: true,//打包后移除console
					drop_debugger: true, // 生产环境移除debugger
				},
			},
			// 在这里配置打包时的rollup配置
			rollupOptions: {
				output: {
					manualChunks(id: string) {
						if (id.includes('node_modules')) {
						  return id.toString().split('node_modules/')[2].split('/')[0].toString();
						}
					}
				}
			}
		}
	};
});
