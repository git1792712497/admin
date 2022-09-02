import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import jsx from "@vitejs/plugin-vue-jsx";
import path from "path";
import viteCompression from "vite-plugin-compression";
import vueSetupExtend from "vite-plugin-vue-setup-extend";

export default defineConfig(({ command, mode }) => {
	return {
		
		define: {
			'process.env': {}
		},
		server: {
			open: true,
			proxy: {
				'/api': {
					target: 'https://183.224.70.135:8088/api',  //你要跨域访问的网址
					changeOrigin: true,   // 允许跨域
					rewrite: (path) => path.replace(/^\/api/, '') // 重写路径把路径变成空字符
				}
			}
		},
		plugins: [vue(), jsx(), viteCompression(), vueSetupExtend()],
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
			assetsInlineLimit: 4096
		}
	};
});
