export default defineNuxtPlugin((nuxtApp) => {
  // Server & Client
  nuxtApp.hook("app:created", (vueApp) => {
    console.log("app:created");
  })
  // Client
  nuxtApp.hook("app:beforeMount", (vueApp) => {
    console.log("app:beforeMount");
  })
  // Server & Client
  nuxtApp.hook("vue:setup", () => {
    console.log("vue:setup");
  })
  // Server
  nuxtApp.hook("app:rendered", (renderContext) => {
    console.log("app:rendered");
  })
  // Client
  nuxtApp.hook("app:mounted", (vueApp) => {
    console.log("app:mounted");
  })
})
