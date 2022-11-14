//可选类型必须放在必选类型后
// 可选类型 => undefined | number
type objType = {
	x:number,
	y:number,
	z:boolean
}

function request(data: {x: number,y: number,z?: number}){

}
request({x:1,y:2})
