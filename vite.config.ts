import { defineConfig } from "vite";
import path from "path";
import {plugins} from './src/plugin'
import {proxy} from "./src/settings/proxy";

export default defineConfig(({ command, mode }) => {
	return {
		define: {
			'process.env': {}
		},
		server: {
			open: true,
			proxy
		},
		plugins,
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
