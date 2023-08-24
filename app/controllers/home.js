class HomeCtl {
  index(ctx) {
    ctx.body = "主页"
  }
  upload(ctx) {
    console.log(ctx)
    const file = ctx.request.files.file
    ctx.body = { path: file.path }
  }
}

module.exports = new HomeCtl()
