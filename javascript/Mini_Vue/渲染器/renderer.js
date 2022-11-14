const h = (tag,props,children) => {
	//vNode -> javaScript对象 -> {}
	return{
		tag,
		props,
		children
	}
}

const mount = (vNode,container) => {
	//vNode转真是DOM
	const element = vNode.element = document.createElement(vNode.tag)
	//处理props
	if (vNode.props){
		for (let key in vNode.props){
			const value = vNode.props[key]
			element.setAttribute(key,value)
		}
	}
	//处理子节点
	if (vNode.children){
		if (typeof vNode.children === 'string'){
			element.textContent = vNode.children
		}else {
			vNode.children.forEach(item => {
				mount(item,element)
			})
		}
	}
	//将element挂载到container
	container.appendChild(element)
}

function patch(oldVNode,newVNode){
	//判断新旧标签
	if (oldVNode.tag === newVNode.tag) {
		const element = newVNode.element = oldVNode.element
		//处理props
		const oldProps = oldVNode.props ?? {}
		const newProps = newVNode.props ?? {}
		//处理children
	}
	else {
		oldVNode.element.parentElement
		const oldVNodeParent = oldVNode.element.parentElement
		oldVNodeParent.removeChild(oldVNode.element) //移除原来元素
		mount(newVNode, oldVNodeParent)
	}
}
