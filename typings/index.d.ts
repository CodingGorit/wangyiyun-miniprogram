/// <reference path="./types/index.d.ts" />

interface IAppOption {
  globalData: {
    userInfo?: WechatMiniprogram.UserInfo,
    globalInfo: string,
    baseUrl: string,
    useMockData: boolean
  }
  require: Function,
  userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback,
}

interface IBanner {
  pic: string,
  targetId?: number,
  titleColor?: string,
  typeTitle: string,
  song?: object
}

interface IRecommendList {
  icon: string,
  text: string
}