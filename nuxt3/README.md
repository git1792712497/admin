# **Nuxt3**

https://nuxt.com/docs/getting-started/introduction

静态站点生成(SSG)
构建SSG应用常见的库有vue(nuxt),react(next)
SSG访问速度非常快
缺点网站更新需要重新部署 
SPA应用(CRS)
同构应用(SSR)
定时渲染(SWR)

# 创建应用(node > 16.11)

pnpm dlx nuxi init nuxt3 (创建扁平化的node_modules目录结构)

打包正式版本 => nitro => .output
"build": "nuxt build",

打包正式版本项目,但会提取预渲染每个路由 => nuxt build --prerender
"generate": "nuxt generate",

npm生命周期钩子,当执行完npm install 之后会自动执行 nuxt prepare => 生成.nuxt和TS的类型文件
"postinstall": "nuxt prepare"

# 应用配置
runtimeConfig(定义环境变量,比如运行时公有token或似有token)
app.config(定义公共变量,在构建的时候确定)

# SEO配置
<!--https://nuxt.com/docs/getting-started/seo-meta#app-head-->
优先级最高
`<Title>hello nuxt3</Title>
<Head key="nuxt" content="nuxt内置组件"></Head>`
设置head (这里的优先级比配置的高)
https://nuxt.com/docs/api/composables/use-head
`useHead({
title: "useHead",
meta: [
{
name: "keywords",
content: "nuxt3",
},
],
});`


获取运行时配置
`const runtimeConfig = useRuntimeConfig()
console.log(runtimeConfig.public)
`
if (process.server){
console.log(runtimeConfig.appKey)
console.log('运行到服务端')
}

if (process.client){
console.log('运行到客户端')
}
const appConfig = useAppConfig()
console.log(appConfig.title)

//只会在客户端执行
onMounted(() => {

})


# 内置组件(组件导航),
https://nuxt.com/docs/api/components/nuxt-link
路由
`<NuxtPage/>`
仅在客户端渲染
`<ClientOnly>
<template #fallback>
只会在客户端渲染
</template>
</ClientOnly>`

组件方式导航
<NuxtLink to="/">
    <button>home</button>
</NuxtLink>
或者编程方式导航(不利于seo)
`function goToCategory() {`
`return navigateTo(`
`{`
`path: "/category",`
`query: {`
`id: 200,`
`},`
`},`
`{`
`replace: true, // 是否是替换当前的页面`
`}`
`);`
`}`
或者推荐navigateTo(不能返回)
// useRouter
let router = useRouter();
function goToCart() {
router.push("/cart"); // navigateTo
}
function goBack() {
router.go(-1);
}

// 路由的守卫
router.beforeEach((to, form) => {
console.log(to);
console.log(form);
});

# 布局layout

# 路由中间件

# 插件的使用(useNuxtApp())
推荐plugins文件夹里创建
服务的和客户端使用区别(判断环境)
# APP生命周期(https://nuxt.com/docs/api/advanced/hooks)
推荐插件方式
组件生命周期
那些在服务端那些在客户端

# 网络service
$fetch 客户端服务的都会发送请求(需要指定key)
useAsyncData(客户端刷新页面只会在服务的发请求,路由切换还是会发请求)
useFetch(会默认阻塞页面的导航)
useLazyFetch() 不确定什么时候返回数据 => watch
## useFetch VS axios
跨端请求,运行到服务器上,可以智能的处理对api调用
智能类型提升推断api响应类型
刷新页面会减去客户端重复请求 
 
# 全局状态共享
useState()只能用在setup函数和Lifecycle Hooks中
不支持classes functions 或 symbols类型
useState和pinia
都支持服务器端和客户端
插件扩展pinia,TS类型支持
开发工具支持

# 集成element-plus
pnpm add element-plus unplugin-element-plus
import ElementPlus from "unplugin-element-plus/vite";
build:{
//使用babel进行语法转化
transpile:['element-plus/es']
}, 
vite:{
plugins:[ElementPlus()]
},
