import {defineStore} from 'pinia'

export const tabsViewStore = defineStore({
    id: 'tabsView',
    persist: true,
    state: () => {
        return {
            tabsViewList: []
        }
    },
    actions: {
        addTabs(payload) {
            const findTabs = this.tabsViewList.find(item => item.path === payload.path)
            if (findTabs) return
            this.tabsViewList.push(payload)
        },
        removeTabs(index) {
            this.tabsViewList.splice(index, 1)
        }
    },
    getters: {}
})
