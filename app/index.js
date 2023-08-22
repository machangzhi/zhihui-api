// 引用各类依赖
const Koa = require("koa")
const bodyparser = require("koa-bodyparser")
const error = require("koa-json-error")
// 实例化koa
const app = new Koa()
// 引入自动注册路由函数
const routing = require("./routes")
// 定义端口
const port = 3000

app.use(async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    ctx.status = error.status || error.statusCode || 500
    ctx.body = {
      message: error.message,
    }
  }
})

app.use(error())
app.use(bodyparser())
// 自动化注册路由
routing(app)

app.listen(port, () => {
  console.log(`应用启动在${port}端口上`)
})
