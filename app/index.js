// 引用各类依赖
const Koa = require("koa")
const koaBody = require("koa-body")
const koaStatic = require("koa-static")
const error = require("koa-json-error")
const parameter = require("koa-parameter")
const mongoose = require("mongoose")
mongoose.set("strictQuery", true)
const { connectionStr } = require("./config")
const path = require("path")
// 实例化koa
const app = new Koa()
// 引入自动注册路由函数
const routing = require("./routes")
// 定义端口
const port = 3000
// 自定义错误无处理
// app.use(async (ctx, next) => {
//   try {
//     await next()
//   } catch (error) {
//     ctx.status = error.status || error.statusCode || 500
//     ctx.body = {
//       message: error.message,
//     }
//   }
// })

mongoose.connect(connectionStr, { useNewUrlParser: true }, () => {
  console.log("MongoDB 连接成功")
})
mongoose.connection.on("error", console.error)

app.use(koaStatic(path.join(__dirname, "public")))
app.use(
  error({
    postFormat: (e, { stack, ...rest }) =>
      process.env.NODE_ENV === "production" ? rest : { stack, ...rest },
  })
)
app.use(
  koaBody({
    multipart: true,
    formidable: {
      uploadDir: path.join(__dirname, "/public/uploads"),
      keepExtensions: true,
    },
  })
)
app.use(parameter(app))
// 自动化注册路由
routing(app)

app.listen(port, () => {
  console.log(`应用启动在${port}端口上`)
})
