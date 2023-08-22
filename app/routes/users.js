// 引用各类依赖
const Router = require("koa-router")
// 实例化路由
const router = new Router({ prefix: "/users" })
// 引入控制器
const {
  find,
  findById,
  create,
  update,
  delete: del,
} = require("../controllers/users")

router.get("/", find)

router.post("/", create)

router.get("/:id", findById)

router.put("/:id", update)

router.delete("/:id", del)

module.exports = router
