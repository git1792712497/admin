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
			// 消除打包大小超过500kb警告
			assetsInlineLimit: 4096,
			outDir: "dist",
			minify: "esbuild",
			sourcemap: false,
		}
	};
});
