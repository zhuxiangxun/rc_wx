// index.ts
// 获取应用实例
//const app = getApp();

Page({
  //页面数据
  data: {
    footerActive: 0,
    icon: {
      normal: 'https://img.yzcdn.cn/vant/user-inactive.png',
      active: 'https://img.yzcdn.cn/vant/user-active.png',
    },
  },
  newsClick():void {
    wx.navigateTo({
      url:"../news/news"
    })
  },
  //信息咨询跳转
 

  //底部菜单时间
  onFooterChange(event:any):void {
    this.setData({ active: event.detail });
  },

  //页面初始化
  onLoad(){},

  //页面渲染完成
  onReady(){},

  //页面显示
  onShow(){},

  //页面隐藏
  onHide(){},

  //页面关闭
  onUnload(){},
})
