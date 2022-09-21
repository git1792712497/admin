import {App,DirectiveBinding} from "vue";
import {_debounce} from '@/utils/debounce'

export function debounce(app: App){
	app.directive('debounce',{
		mounted(el,bindings: DirectiveBinding){
			if (typeof bindings.value !== 'function')return
			const {modifiers,arg} = bindings
			const start = Object.keys(modifiers).includes('start')
			el.addEventListener('click',_debounce(bindings.value,Number(arg ?? 1000),start))
		}
	})
}
