import {App,DirectiveBinding} from "vue";
import {_debounce} from '@/utils/debounce'

export function debounce(app: App){
	app.directive('debounce',{
		mounted(el,bindings: DirectiveBinding){
			el.addEventListener('click',_debounce(() => {
				console.log(bindings)
				typeof bindings.value === 'function' && bindings.value()
			},Number(bindings.arg ?? 300)))
		}
	})
}
