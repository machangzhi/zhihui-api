// 引用各类依赖
const Koa = require("koa")
const Router = require("koa-router")
// 实例化koa
const app = new Koa()
// 实例化路由
const router = new Router()
// 定义端口
const port = 3000

router.get("/", (ctx) => {
  ctx.body = "主页"
})

router.get("/users", (ctx) => {
  ctx.body = "用户列表"
})

router.post("/users", (ctx) => {
  ctx.body = "创建用户"
})

router.get("/users/:id", (ctx) => {
  ctx.body = "用户" + ctx.params.id
})

app.use(router.routes())

app.listen(port)
