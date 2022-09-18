import {changePrimary} from "@/hooks/useTheme";
import {defineStore} from 'pinia'


export const globalConfigStore: any = defineStore('globalConfig', {
    persist: true,
    state: () => {
        return {
            // element组件大小
            componentSize: "default",
            // themeConfig
            themeConfig: {
                // 默认 primary 主题颜色
                primary: '#009688',
                // 深色模式
                isDark: false,
                // 面包屑导航
                breadcrumb: true,
                // 标签页
                tabs: true,
                // 页脚
                footer: true
            }
        }
    },
    actions: {
        async setTheme() {
            const {useDark, changePrimary} = await import('@/hooks/useTheme')
            this.themeConfig.isDark ? useDark() : ''
            changePrimary(this.themeConfig.primary)
        }
    },
})
