import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import jsx from "@vitejs/plugin-vue-jsx";
import path from "path";
import viteCompression from "vite-plugin-compression";
import vueSetupExtend from "vite-plugin-vue-setup-extend";
export default defineConfig(({ command, mode }) => {
  return {
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
      
      }
    },
    build: {
      assetsInlineLimit: 4096
    }
  };
});
