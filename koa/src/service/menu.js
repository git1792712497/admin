const connection = require('../app/database.js')
const generateMenuTree = require('../utils/generateMenuTree.js')

class MenuService {
	async save(menu) {
		console.log(menu)
		// 2.拼接statement,预处理语句
		const statement = 'INSERT INTO menu SET ?;'
		// 3.执行sql语句
		const [result] = await connection.query(statement, [menu])

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
		return generateMenuTree(menuList)
	}
	
	async query() {
		const statement = `SELECT * FROM menu`
		const [result] = await connection.execute(statement)
		return result
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
