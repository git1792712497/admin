const {queryMenuByName} = require('../service/menu.js')

const verifyAddMenu = async (ctx, next) => {
	const menu = ctx.request.body
	const [names,paths] = await queryMenuByName(menu.name,menu.path)
	
	if (menu.type === 1) {
		if (paths?.path) {
			ctx.status = 400
			ctx.body = {
				message: '目录路由路径不能重复',
			}
			return
		}
	} else {
		if (names?.name && paths?.path) {
			ctx.status = 400
			ctx.body = {
				message: '菜单编号或路由路径不能重复',
			}
			return
		}
	}
	await next()
}

const verifyUpdateMenu = async (ctx, next) => {
	const menu = ctx.request.body
	const [names,paths] = await queryMenuByName(menu.name,menu.path)
	console.log('name',names)
	console.log('path',paths)
	console.log(menu.id)
	
	
	if (menu.type === 1) {
		if (paths?.path && menu.id !== paths.id) {
			ctx.status = 400
			ctx.body = {
				message: '目录路由路径不能重复',
			}
			return
		}
	} else {
		if (names?.name && paths?.path && menu.id !== paths.id) {
			ctx.status = 400
			ctx.body = {
				message: '菜单编号或路由路径不能重复',
			}
			return
		}
	}
	await next()
}

module.exports = {
	verifyAddMenu,
	verifyUpdateMenu
}
