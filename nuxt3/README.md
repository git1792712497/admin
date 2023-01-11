# **Nuxt3**
https://nuxt.com/docs/getting-started/introduction

静态站点生成(SSG)
构建SSG应用常见的库有vue(nuxt),react(next)
SSG访问速度非常快
缺点网站更新需要重新部署
SPA应用(CRS)
同构应用(SSR)


# 创建应用(node > 16.11)
pnpm dlx nuxi init nuxt3 (创建扁平化的node_modules目录结构)

[//]: # (打包正式版本 => nitro => .output)
"build": "nuxt build",

[//]: # (打包正式版本项目,但会提取预渲染每个路由 => nuxt build --prerender)
"generate": "nuxt generate",

[//]: # (npm生命周期钩子,当执行完npm install 之后会自动执行 nuxt prepare => 生成.nuxt和TS的类型文件)
"postinstall": "nuxt prepare"
