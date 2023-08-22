// 引用各类依赖
const Koa = require("koa")
const bodyparser = require("koa-bodyparser")
// 实例化koa
const app = new Koa()
// 引入自动注册路由函数
const routing = require("./routes")
// 定义端口
const port = 3000

app.use(bodyparser())
// 自动化注册路由
routing(app)

app.listen(port, () => {
  console.log(`应启动在${port}端口上`)
})
