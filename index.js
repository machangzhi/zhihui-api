// 引用各类依赖
const Koa = require("koa")
const Router = require("koa-router")
// 实例化koa
const app = new Koa()
// 实例化路由
const router = new Router()
// 实例化user路由
const usersRouter = new Router({ prefix: "/users" })
// 定义端口
const port = 3000

router.get("/", (ctx) => {
  ctx.body = "主页"
})

usersRouter.get("/", (ctx) => {
  ctx.body = "用户列表"
})

usersRouter.post("/", (ctx) => {
  ctx.body = "创建用户"
})

usersRouter.get("/:id", (ctx) => {
  ctx.body = "用户" + ctx.params.id
})

app.use(router.routes())
app.use(usersRouter.routes())
app.use(usersRouter.allowedMethods())

app.listen(port)
