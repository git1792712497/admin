export function _debounce(fn,wait = 500,immediate = true){
	let timeout
	return function(...args){
		let context = this
		if(timeout) clearTimeout(timeout)
		if(immediate){
			let callNow = !timeout
			timeout = setTimeout(function(){
				timeout = null
			},wait)
			if(callNow) fn.apply(context,args)
		}else{
			timeout = setTimeout(function(){
				fn.apply(context,args)
			},wait)
		}
	}
}
