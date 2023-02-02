import {changePrimary} from "@/hooks/useTheme";
import {defineStore} from 'pinia'
import type {GlobalConfig} from '@/types/globalConfig'

export const globalConfigStore: any = defineStore('globalConfig', {
    persist: true,
    state:(): GlobalConfig => {
        return {
            componentSize: "default",
            primary: '#409eff',
            isDark: false,
            breadcrumb: true,
            tabs: true,
            footer: true
        }
    },
    actions: {
        async setTheme() {
            const {useDark, changePrimary} = await import('@/hooks/useTheme')
            this.isDark ? useDark() : ''
            changePrimary(this.primary)
        }
    },
})
