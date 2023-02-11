const multer = require("@koa/multer");
const uploadAvatar = multer({
	storage: multer.diskStorage({
		destination(req, file, cb) {
			//和启动路径相关
			cb(null, './assets')
		},
		filename(req, file, cb) {
			cb(null, Date.now() + "_" + file.originalname)
		}
	})
})


module.exports = {
	uploadAvatar
}
