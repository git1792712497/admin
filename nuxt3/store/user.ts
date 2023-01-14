// pnpm add @pinia/nuxt pinia

import {defineStore} from "pinia";


export const useUserStore = defineStore('userStore', {
  state:() => {
    return {
      pinia:'pinia'
    }
  },
  actions:{

  },
  getters:{

  }
})
