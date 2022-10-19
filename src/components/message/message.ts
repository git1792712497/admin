//1_导入组件
//2_把vue组件编译成虚拟DOM
//3_准备一个dom容器

import {render} from "vue";

//提示组件
import message from './message.vue'
//dom容器
let div = document.createElement('div')
div.setAttribute('class','message')
document.body.appendChild(div)

let timer = null

export default function ({type,text}){
	// createVNode(组件,参数对象)
	const vNode = h(message,{type,text})
	
	// render('节点','DOM容器')
	render(vNode,div)
	//销毁组件
	clearTimeout(timer)
	timer = setTimeout(() => {
		render(null,div)
	},2000)
}