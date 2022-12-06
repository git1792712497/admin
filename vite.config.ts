import { defineConfig } from "vite";
import path from "path";
import installPlugins from './src/plugin'
import {proxy} from "./src/settings/proxy";

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
				less: {}
			}
		},
		resolve: {
			alias: {
				'@': path.resolve(__dirname, './src')
			}
		},
		build: {
			assetsInlineLimit: 4096,// 消除打包大小超过500kb警告
			outDir: "dist",
			minify: "esbuild",
			target:'es2015',// 目标语言
			sourcemap: false,
			terserOptions: {
				compress: {
					drop_console: true,//打包后移除console
					drop_debugger: true, // 生产环境移除debugger
				},
			},
		}
	};
});
