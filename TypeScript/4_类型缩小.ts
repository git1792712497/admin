function foo(id: number | string){
	if (typeof id === 'string'){
		console.log(id.length)
	}else {
		console.log(id + 100)
	}
}


function time(time: string | Date){
	if (time instanceof Date){
		console.log(time.toUTCString())
	}
}

let arr:number[] = [1,2,3,4]

console.log(1 in arr)
