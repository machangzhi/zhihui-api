// 引用各类依赖
const Router = require("koa-router")
// 实例化路由
const router = new Router()

router.get("/", (ctx) => {
  ctx.body = "主页"
})

module.exports = router
