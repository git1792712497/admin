// https://www.nuxtjs.org.cn/directory-structure/nuxt-config.html#%E5%88%AB%E5%90%8D-alias
import ElementPlus from "unplugin-element-plus/vite";

export default defineNuxtConfig({
  //https://nuxt.com/modules
  modules:["@pinia/nuxt"],//
  build:{
    //使用babel进行语法转化
    transpile:['element-plus/es'],
  },
  sourcemap:{
    server: false,
    client: false
  },
  vite:{
    // 自动导入样式插件
    plugins:[ElementPlus()],
  },
  //混合渲染模式
  routeRules:{
    "/" : {ssr : true},
    "/home" :{ssr:false}, //spa 应用
    "/about" :{ssr:false}, //spa 应用
  },
  //运行时配置
  runtimeConfig:{
    appKey:'nuxt3', //服务的可读取
    //public 的值在服务端和客户端都可以访问
    public:{
      baseUrl:''
    }
  },
  //全局样式
  css:["@/assets/global.less","normalize.css"],
  // 3.配置app
  app: {
    head: {
      title: "我的权限非常高",
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no",
        },
        {
          charset: "utf-8",
        },
      ],
      link: [
        {
          type: "image/x-icon",
          rel: "shortcut icon",
          href: "/favicon.ico",
        },
      ],
      style: [
        {
          children: `body{ color: red }`,
        },
      ],
      script: [
        {
          src: "",
        },
        {
          children: 'console.log("hello nuxt");',
        },
      ],
      noscript: [
        {
          children: "当前浏览器器不支持脚本或已禁用",
        },
      ],
    },
  },
})
