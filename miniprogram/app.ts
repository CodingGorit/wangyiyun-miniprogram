// app.ts
App<IAppOption>({
  globalData: {
    globalInfo: "aaa",
    baseUrl: "http://localhost:3000",
    useMockData: true
  },
  onLaunch() {

  },

  // 解决小程序引入文件不能使用绝对路径的问题
  require(path: string) {
    if (path.startsWith("../") || path.startsWith("./")) {
      console.warn("请输入绝对路径");
      return;
    }
    var data = require(path)
    return data;
  }

})