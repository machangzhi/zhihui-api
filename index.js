// 引用koa
const Koa = require("koa")
// 实例化koa
const app = new Koa()
// 定义端口
const port = 3000

app.use((ctx) => {
  ctx.body = "hello world"
})

app.listen(port)
