// mapCxDetail.ts
// 获取应用实例
//const app = getApp();

Page({
  //页面数据
  data: {
    positionUrl: '../../images/address.png',    //图片
    active: 0
  },

  //线上恰谈
  smallTalk():void{
    wx.navigateTo({
      url:"../smallTalk/smallTalk"
    })
  },

  //路线导航
  navigation():void{
    let key:string = 'AWYBZ-C3IWO-5TIWD-SEPVW-KQMOF-RXBAV';  //使用在腾讯位置服务申请的key
    let endPoint:any = JSON.stringify({  //终点
      'name': '石老人花园',
      'latitude': 36.098101,
      'longitude': 120.497539
    });

    wx.navigateTo({
      url: 'plugin://routePlan/index?key=' + key + '&referer=才赋云' + '&endPoint=' + endPoint
    });
  },

  //附件下载
  download():void{
    
  },

  //页面初始化
  onLoad(){
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
