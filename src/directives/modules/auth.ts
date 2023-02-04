import { App, DirectiveBinding } from "vue";
import { menuStore } from "@/store/modules/menu";


export function auth(app: App){
  app.directive('auth',{
    mounted(el,bindings: DirectiveBinding){
      const menu = menuStore()
      const findValue = menu.authButton.find(item => bindings.value.includes(item))
      if (!findValue)el.remove()
    },
  })
}
