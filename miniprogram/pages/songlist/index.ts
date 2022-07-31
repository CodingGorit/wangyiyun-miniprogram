// pages/songlist/index.ts
import Consts from '../../Consts';
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    background: [{"pic":'https://p1.music.126.net/s954zUZ6_LqGuG-pCoVI6Q==/109951167726093887.jpg?imageView&quality=89',
                  "typeTitle": "新歌首发"},
                 {"pic":'https://p1.music.126.net/-Q7-4JJnpx9h7lXAzEwLZQ==/109951167726072905.jpg?imageView&quality=89',
                "typeTitle": "热门推荐"}, 
                 {"pic": 'https://p1.music.126.net/ZKSlILlJmZlPAdtjQ4_kww==/109951167726095678.jpg?imageView&quality=89',
                "typeTitle": "歌单"},
                 {"pic":'https://p1.music.126.net/Srx6b0FP8S0kiOw1Zds3yQ==/109951167726062825.jpg?imageView&quality=89',
                "typeTitle": "独家策划"},
                 {"pic": 'https://p1.music.126.net/z4ojoJkXKAlPsBCGe1GN-g==/109951167726073664.jpg?imageView&quality=89',
                "typeTitle": "热门"}],
    indicatorDots: true,
    indicatorColor: "rgba(255,255,255,0.5)",
    indicatorActiveColor: "rgba(194,12,12,1)",
    autoplay: true,
    interval: 3000,
    duration: 600,

    recommendList: [{
      icon: "/images/recommend-01.png",
      text: "每日推荐"
    }, {
      icon: "/images/recommend-02.png",
      text: "私人FM"
    }, {
      icon: "/images/recommend-03.png",
      text: "歌单"
    }, {
      icon: "/images/recommend-04.png",
      text: "排行榜"
    }, {
      icon: "/images/recommend-05.png",
      text: "有声书"
    }, {
      icon: "/images/recommend-06.png",
      text: "数字专辑"
    }, {
      icon: "/images/recommend-07.png",
      text: "关注新歌"
    }, {
      icon: "/images/recommend-08.png",
      text: "歌房"
    }]
  },

  getBanners () {
    let that = this;
    wx.request({
      url: app.globalData.baseUrl + "/banner?type=2",
      dataType: "json",
      success: function(res: any) {
        const data = res.data.banners;
        that.setData({
          background: data
        })
      },
      fail: function(err: any) {
        // console.log(res);
        if (err) {
          that.setData({
            background: that.data.background
          })
        }
      }
    })
  },

  // 推荐列表数据处理
  handleRecommendList (e: any) {
    const id = e.currentTarget.dataset.id;
    let url = "";
    wx.showToast({
      title: `click is ${id}`
    });

    switch (id) {
      case 0:
        // url = "../recommendList/daliyRecommend/index"
        url = Consts.RecommendList.DailyRecommend.url;
        break;
      default:
        break;
    }

    wx.redirectTo({
      url: url
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.getBanners();
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