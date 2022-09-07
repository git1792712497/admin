import { App } from "vue";
import {_throttle} from "@/utils/throttle";

export function throttle(app:App){
	app.directive('throttle', {
			mounted(el, bindings){
				el.addEventListener('click', _throttle(() => {
					typeof bindings.value === 'function' && bindings.value()
				}))
			}
		})
}
