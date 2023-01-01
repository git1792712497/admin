//验证label是否存在数据库中
const {query,save} = require('../service/lable.js')

const verifyLabel = async (ctx, next) => {
	const {labels} = ctx.request.body
	let newLabels = []
	for (let name of labels) {
		const data = await query(name)
		if (data.length){
			newLabels.push(...data)
		}else {
			const data = await save(name)
			newLabels.push({name,id:data.insertId})
		}
	}
	//传到下一个中间件
	ctx.labels = newLabels
	await next()
}

module.exports = {
	verifyLabel
}
