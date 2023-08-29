// 引用各类依赖
const Router = require("koa-router")
// const JWT = require("jsonwebtoken")
const JWT = require("koa-jwt")
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
  checkOwner,
  listFollowing,
  listFollowers,
  follow,
  unfollow,
} = require("../controllers/users")

// const auth = async (ctx, next) => {
//   const { authorization = "" } = ctx.request.header
//   const token = authorization.replace("Bearer ", "")
//   try {
//     const user = JWT.verify(token, secret)
//     ctx.state.user = user
//   } catch (err) {
//     ctx.throw(401, err.message)
//   }
//   await next()
// }
const auth = JWT({ secret })

router.get("/", find)

router.post("/", create)

router.get("/:id", findById)

router.patch("/:id", auth, checkOwner, update)

router.delete("/:id", auth, checkOwner, del)

router.post("/login", login)

router.get("/:id/following", listFollowing)

router.get("/:id/followers", listFollowers)

router.put("/following/:id", auth, follow)

router.delete("/following/:id", auth, unfollow)

module.exports = router
