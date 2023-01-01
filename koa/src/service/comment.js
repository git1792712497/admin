const connection = require('../app/database.js')

class CommentService {
	async save({content,momentId,userId}){
		const statement = `INSERT INTO comment (content,moment_id,user_id) VALUES (?,?,?)`
		const [result] = await connection.execute(statement,[content,momentId,userId])
		return result
	}
	
	async reply({content,momentId,userId,commentId}){
		const statement = `INSERT INTO comment (content,moment_id,user_id,comment_id) VALUES (?,?,?,?)`
		const [result] = await connection.execute(statement,[content,momentId,userId,commentId])
		return result
	}
}


module.exports = new CommentService()
