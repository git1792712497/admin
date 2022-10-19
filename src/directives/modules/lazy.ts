import {App} from 'vue'

export function lazy(app:App){
	app.directive('lazy',{
		mounted(el:HTMLImageElement,bind,vNode,preVNode){
			const imageSrc = el.src
			el.src = ''
			const io = new IntersectionObserver(([{isIntersecting}])=> {
				if (isIntersecting){
					//bind.value能拿到指令赋的值,dom是指令绑定的元素
					el.src = imageSrc
				}
			})
			io.observe(el)
		}
	})
}