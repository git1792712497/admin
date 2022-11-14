let activeEffect = null

class Dep{
	constructor() {
		//Set集合依赖收集
		this.subscribers = new Set()
	}
	
	depend(){
		if (activeEffect){
			this.subscribers.add(activeEffect)
		}
	}
	
	//通知依赖执行
	notify(){
		this.subscribers.forEach(effect => effect())
	}
}

const dep = new Dep()

function watchEffect(effect){
	activeEffect = effect
	dep.depend()
	effect()
	activeEffect = null
}


let obj = {
	age:10
}

watchEffect(() => {
	console.log(obj.age + 10);
})
watchEffect(() => {
	console.log(obj.age - 10);
})


dep.notify()
