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
    wx.navigateTo({
      url:"../navigation/navigation"
    })
  },

  //附件下载
  download():void{
    console.log(1111)
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
