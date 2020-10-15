// animation.ts
// 获取应用实例
//const app = getApp();

Page({
  //页面数据
  data: {},

  //页面初始化
  onLoad(){
    setTimeout(():void=>{
      wx.navigateTo({
        url:"../index/index"
      })
    },1000);
  },

  //页面渲染完成
  onReady(){},

  //页面显示
  onShow(){},

  //页面隐藏
  onHide(){},

  //页面关闭
  onUnload(){}
})
