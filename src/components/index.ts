import { App } from "vue";
const components = import.meta.glob('./*/index.vue')

export default {
  install(app:App){
    Object.keys(components).forEach(async item => {
      const value = await import(item)
      app.component(value.default.name,value.default)
    })
  }
}