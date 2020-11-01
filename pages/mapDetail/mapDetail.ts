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
      this.setData({
        url: 'https://rcapp.qdcsdn.cn/#/xcXcxPlatformDemo?token=' + token + '&id=' + option.id
      })
    }
    if(option.name == '创业'){
      this.setData({
        url: 'https://rcapp.qdcsdn.cn/#/xcXcyPlatformDemo?token=' + token + '&id=' + option.id
      })
    }
    if(option.name == '项目'){
      this.setData({
        url: 'https://rcapp.qdcsdn.cn/#/xcXproject?token=' + token + '&id=' + option.id
      })
    }
    if(option.name == '场地'){
      this.setData({
        url: 'https://rcapp.qdcsdn.cn/#/xcXztSpace?token=' + token + '&id=' + option.id
      })
    }
    if(option.name == '服务'){
      this.setData({
        url: 'https://rcapp.qdcsdn.cn/#/xcXserverJg?token=' + token + '&id=' + option.id
      })
    }
    if(option.name == '金融'){
      this.setData({
        url: 'https://rcapp.qdcsdn.cn/#/xcXserverJg?token=' + token + '&id=' + option.id
      })
    }
    if(option.name == '资金'){
      this.setData({
        url: 'https://rcapp.qdcsdn.cn/#/xcXtzDemand?token=' + token + '&id=' + option.id
      })
    }
    if(option.name == '需求'){
      this.setData({
        url: 'https://rcapp.qdcsdn.cn/#/xcXtzDemand?token=' + token + '&id=' + option.id
      })
    }
    if(option.name == '融资'){
      this.setData({
        url: 'https://rcapp.qdcsdn.cn/#/xcXrzDemand?token=' + token + '&id=' + option.id
      })
    }
    if(option.name == '投资'){
      this.setData({
        url: 'https://rcapp.qdcsdn.cn/#/xcXcxPlatformDemo?token=' + token + '&id=' + option.id
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
