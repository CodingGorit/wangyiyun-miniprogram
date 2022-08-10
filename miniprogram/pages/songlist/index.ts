// pages/songlist/index.ts
import { Consts } from '../../Consts';
import { getBanners, getRecommendList } from '../../api/songList';

// const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [] as IBanner[],
    indicatorDots: true,
    indicatorColor: "rgba(255,255,255,0.5)",
    indicatorActiveColor: "rgba(194,12,12,1)",
    autoplay: true,
    interval: 3000,
    duration: 600,

    // swiper list data
    recommendList: [] as IRecommendList[],

    // 推荐歌单
    recommendSongList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.initData();
  },

  // 初始化数据
  initData () {
    this.getBanners();
    this.getRecommendlist();
  },
  
  // 获取 banners 数据
  async getBanners() {
    const list = await getBanners();
    this.data.banners = list;
    this.setData({
      banners: list
    });
  },

  getRecommendlist () {
    const list = getRecommendList();
    this.data.recommendList = list;
    this.setData({
      recommendList: list
    });
  },

  // 推荐列表数据处理
  handleRecommendList(e: any) {
    const id = e.currentTarget.dataset.id;
    let url = "";

    switch (id) {
      case 0:
        url = Consts.PATH.PageUri.DailyRecommend;
        break;
      default:
        url = Consts.PATH.PageUri.NotFoundPage;
        break;
    }

    wx.navigateTo({
      url: url
    });
  },

  /**
   * 更多页面跳转
   */
  hnadleNaviToMoreRecommendList() {
    wx.showToast({
      title: "该功能并未开发完成，试试其它的吧",
      duration: 2500,
      icon: "error"
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})