const connection = require('../app/database.js')

class MenuService {
	async save(menu) {
		// 2.拼接statement,预处理语句
		const statement = 'INSERT INTO menu SET ?;'
		// 3.执行sql语句
		const [result] = await connection.query(statement, [menu])

		return result
	}
	
	async queryMenuByName(name,path) {
		const statement = `SELECT name FROM menu WHERE name = ? && path = ?`
		const [result] = await connection.execute(statement, [name,path])
		return result
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
	
	
	async query(limit,offset = limit * offset) {
		const statement1 = `SELECT * FROM menu LIMIT ? OFFSET ?`
		const statement2 = `SELECT * FROM menu`
		const [[result1],[result2]] = await Promise.all([connection.query(statement1,[limit,offset]), connection.query(statement2)])
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
