const connection = require('../app/database.js')

class MenuService {
	async save(menu) {
		const statement = 'INSERT INTO menu SET ?;'
		const [result] = await connection.query(statement, [menu])
		return result
	}
	
	async updateMenu(roleAndMenu){
		const {path,sort,activePath,isLink,title,component,icon,type,parentId,name,hidden, fullScreen ,keepAlive,id} = roleAndMenu
		let list = [path,sort,activePath,isLink,title,component,icon,type,parentId,name,hidden, fullScreen ,keepAlive,id]
		const statement = 'UPDATE menu SET path =? , sort = ?,activePath = ?,isLink = ?,title = ?,component = ?,icon = ?,type = ?,parentId =?,name =?,hidden=?, fullScreen=? ,keepAlive=? WHERE id = ?'
		connection.execute(statement, list)
	}
	
	async queryMenuByName(name,path) {
		const statement1 = `SELECT * FROM menu WHERE name = ?`
		const statement2 = `SELECT * FROM menu WHERE path = ?`
		const [[[names]],[[paths]]] = await Promise.all([connection.execute(statement1, [name]), connection.execute(statement2, [path])]);
		return [names,paths]
	}
	
	async roleAndMenu(roleId,menuId) {
		const statement = `INSERT INTO role_menu (roleId,menuId) VALUES (?,?)`
		const [result] = await connection.execute(statement, [roleId,menuId])
		return result
	}
	
	async deleteRoleById(id) {
		const statement = `DELETE role FROM WHERE id = ?`
		const [result] = await connection.execute(statement, [id])
		return result
	}
	
	async queryMenuById(id) {
		let menuList = []
		const statement = `SELECT menuId FROM role_menu WHERE roleId = ?`
		const [result] = await connection.execute(statement, [id])
		for (let {menuId} of result) {
			const statement = `SELECT * FROM menu WHERE id = ?`
			const [result] = await connection.execute(statement, [menuId])
			menuList.push(...result)
		}
		return menuList
	}

	
	async query(limit,offset) {
		console.log('offset',offset)
		console.log('limit',limit)
		const page = offset * limit
		
		const statement1 = `SELECT * FROM menu LIMIT ? OFFSET ?`
		const statement2 = `SELECT * FROM menu`
		const [[result1],[result2]] = await Promise.all([connection.query(statement1,[limit,page]), connection.query(statement2)])
		return {
			data:result1,
			total:result2.length
		}
	}
	
	async queryChildMenu(id) {
		const statement = `SELECT id FROM menu WHERE parentId = ?`
		const [result] = await connection.execute(statement,[id])
		return result
	}
	async remove(id) {
		const statement = `DELETE FROM menu WHERE id = ?`
		const [result] = await connection.execute(statement,[id])
		return result
	}
}



module.exports = new MenuService()
