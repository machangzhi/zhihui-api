// 引用各类依赖
const Router = require("koa-router")
// 实例化路由
const router = new Router()
// 引入控制器
const { index, upload } = require("../controllers/home")

router.get("/", index)

router.post("/upload", upload)

module.exports = router
