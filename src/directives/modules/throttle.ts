import { App ,DirectiveBinding} from "vue";
import {_throttle} from "@/utils/throttle";

export function throttle(app:App){
	app.directive('throttle', {
			mounted(el, bindings: DirectiveBinding){
				if (typeof bindings.value !== 'function')return
				const {modifiers,arg} = bindings
				const start = Object.keys(modifiers).includes('start')
				const end = Object.keys(modifiers).includes('end')
				el.addEventListener('click', _throttle(bindings.value,Number(arg ?? 1000),start,end))
			}
		})
}
