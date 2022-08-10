export const Consts = {

  // 网络请求相关
  HTTP_REQUEST_TIMEOUT: 10000,

  // API Config
  PATH: {
    ApiUri: {
      Banners: "/banner?type=2",
      RecommendSongList: "/recommend/resource",
    },
    // 和 app.json 一一对应
    PageUri: {
      // 二级页面
      DailyRecommend: "/pages/recommendList/daliyRecommend/index",
      // 公共页面
      NotFoundPage: "/pages/common/notFound/index"
    }
  },

  // page 跳转相关
  BasePageUrl: "/pages/songlist/index",
}