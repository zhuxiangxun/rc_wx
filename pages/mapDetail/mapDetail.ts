// mapDetail.ts
// 获取应用实例
//const app = getApp();

Page({
  //页面数据
  data: {
   url: '',
  },

 



  //页面初始化
  onLoad(option:any){
    let token:string = wx.getStorageSync('token');
    if(option.name == '创新'){
      console.log(option.name)
      this.setData({
        url: 'http://wangxu.eyunhan.com/cfy/index.html#/xcXcxPlatformDemo?token=' + token + '&id=' + option.id
      })
    }

    //页面标题
    wx.setNavigationBarTitle({     
      title: "地图标记详情"
    });
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
