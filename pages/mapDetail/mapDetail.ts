// mapDetail.ts
// 获取应用实例
//const app = getApp();

Page({
  //页面数据
  data: {
    longitude: 120.484262,  //中心经度
    latitude: 36.107834,    //中心纬度
    scale: 15,                //缩放级别，取值范围为3-20
    markers:[                 //标记点
      {
        id: 0,
        longitude: 120.484262,   //经度
        latitude: 36.107834,   //纬度
        iconPath: '../../images/position.png',             //标记
        width: 30,
        height: 30,
        callout: {
          content: '位置1',
          color: 'red',
          fontSize: '24rpx',
          bgColor: '#FFF',
          padding: 5,
          borderRadius: 4,
          borderColor: '#CCC',
          borderWidth: 1,
          display: 'ALWAYS'
        }
      }
    ],
    positionUrl: '../../images/position.png',
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
