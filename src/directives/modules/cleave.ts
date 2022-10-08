import {App,DirectiveBinding} from "vue";


export function cleave(app: App){
  app.directive('cleave',{
    updated: (el,binding:DirectiveBinding) => {
      const input = el.querySelector('input') as HTMLInputElement
      setTimeout(() => {
        if (input.value !== 'a'){
          input.value = ''
        }
      },100)
    }
  })
}
