// 引用各类依赖
const Router = require("koa-router")
// 实例化路由
const router = new Router()
// 引入控制器
const { index } = require("../controllers/home")

router.get("/", index)

module.exports = router
