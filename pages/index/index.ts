// index.ts

Page({
  //页面数据
  data: {
    videoUrl: 'https://cim.qdcsdn.cn/rc_wx/video.mp4',
  },

  btnFn():void{  //进入主页
    wx.switchTab({ 
      url:'../home/home'
    });
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
  onUnload(){}
})
