import { App ,DirectiveBinding} from "vue";
import {_throttle} from "@/utils/throttle";

export function throttle(app:App){
	app.directive('throttle', {
			mounted(el, bindings: DirectiveBinding){
				el.addEventListener('click', _throttle(() => {
					typeof bindings.value === 'function' && bindings.value()
				}))
			}
		})
}
