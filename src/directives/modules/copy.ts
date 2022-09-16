import {App,DirectiveBinding} from "vue";
import {useClipboard} from '@vueuse/core'
import {ElMessage } from 'element-plus'


export function copy(app: App){
	let copyValue
	app.directive('copy',{
		mounted(el,bindings: DirectiveBinding){
			console.log(bindings.value)
			el.addEventListener('click',() => {
				const {copy} = useClipboard()
				copy(copyValue).then(() => ElMessage.success('复制成功'))
			})
		},
		updated(el, binding){
			copyValue = binding.value
		}
	})
}
