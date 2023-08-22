// 引用各类依赖
const Koa = require("koa")
const bodyparser = require("koa-bodyparser")
const Router = require("koa-router")
// 实例化koa
const app = new Koa()
// 实例化路由
const router = new Router()
// 实例化user路由
const usersRouter = new Router({ prefix: "/users" })
// 定义端口
const port = 3000
// 定义内存数据库
const db = [{ name: "李雷" }]

router.get("/", (ctx) => {
  ctx.body = "主页"
})

usersRouter.get("/", (ctx) => {
  ctx.body = db
})

usersRouter.post("/", (ctx) => {
  db.push(ctx.request.body)
  ctx.body = ctx.request.body
})

usersRouter.get("/:id", (ctx) => {
  ctx.body = db[ctx.params.id * 1]
})

usersRouter.put("/:id", (ctx) => {
  db[ctx.params.id * 1] = ctx.request.body
  ctx.body = ctx.request.body
})

usersRouter.delete("/:id", (ctx) => {
  db.splice(ctx.params.id * 1, 1)
  ctx.status = 204
})

app.use(bodyparser())
app.use(router.routes())
app.use(usersRouter.routes())
app.use(usersRouter.allowedMethods())

app.listen(port)
