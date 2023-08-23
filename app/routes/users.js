// 引用各类依赖
const Router = require("koa-router")
const JWT = require("jsonwebtoken")
const { secret } = require("../config")
// 实例化路由
const router = new Router({ prefix: "/users" })
// 引入控制器
const {
  find,
  findById,
  create,
  update,
  delete: del,
  login,
} = require("../controllers/users")

const auth = async (ctx, next) => {
  const { authorization = "" } = ctx.request.header
  const token = authorization.replace("Bearer ", "")
  try {
    const user = JWT.verify(token, secret)
    ctx.state.user = user
  } catch (err) {
    ctx.throw(401, err.message)
  }
  await next()
}

router.get("/", find)

router.post("/", create)

router.get("/:id", findById)

router.patch("/:id", auth, update)

router.delete("/:id", auth, del)

router.post("/login", login)

module.exports = router
