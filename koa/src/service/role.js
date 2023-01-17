const connection = require('../app/database.js')

class RoleService {
  async save({ name, description = '' }) {
    const statement = `INSERT INTO role (name,description) VALUES (?,?);`
    const [result] = await connection.execute(statement, [name,description])
    return result
  }
	
	async saveMenu({roleId,menuIds}){
		const statement = `INSERT INTO role_menu (roleId,menuId) VALUES (?,?)`
		for (let menuId of menuIds) {
			await connection.execute(statement, [roleId,menuId])
		}
	}

  async query() {
		let roleList = []
    const statement = `SELECT * FROM role`
    const [result] = await connection.execute(statement)
	  for (let role of result) {
		  //获取角色id
		  const queryRoleId = `SELECT roleId, JSON_ARRAYAGG(menuId) menuIds FROM role_menu WHERE roleId = ? GROUP BY roleId`
		  const [res] = await connection.execute(queryRoleId,[role.id])
		  if (res.length) {
			  role.menuId = res[0].menuIds
		  }else {
			  role.menuId = []
		  }
		  roleList.push(role)
	  }
    return roleList
  }

  async deleteById(id) {
    const statement1 = `DELETE FROM role WHERE id = ?`
    const [result] = await connection.execute(statement1, [id])
	  const statement2 = `DELETE FROM role_menu WHERE roleId = ?`
	  await connection.execute(statement2, [id])
    return result
  }
}



module.exports = new RoleService()
