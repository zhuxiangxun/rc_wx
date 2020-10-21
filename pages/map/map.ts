// map.ts
// 获取应用实例
//const app = getApp();

Page({
  //页面数据
  data: {
    longitude: 120.382215,  //中心经度
    latitude: 36.080419,    //中心纬度
    scale: 12,                //缩放级别，取值范围为3-20
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
          display: 'BYCLICK'
        }
      },
      {
        id: 1,
        longitude: 120.47607,   //经度
        latitude: 36.105034 ,   //纬度
        iconPath: '../../images/position.png',             //标记
        width: 30,
        height: 30,
      }
    ],


    active: 0,
    option1: [
      { text: '青岛市', value: 0 },
      { text: '市南区', value: 1 },
      { text: '市北区', value: 2 },
    ],
    value1: 0,


    show: true,
  },

  onChange(event:any):void {
    // event.detail 的值为当前选中项的索引
    this.setData({ active: event.detail });
  },




  //地图详情
  mapDetail():void {
    wx.navigateTo({
      url:"../mapDetail/mapDetail"
    })
  },


  //点击标记点气泡窗口触发
  markFn():void {
    //console.log(1111);
  },

  //页面初始化
  onLoad(){
    //页面标题
    wx.setNavigationBarTitle({     
      title: "地图"
    });
    //当前位置
    wx.getLocation({
      success:(res:any):void=>{
        this.setData({
          longitude: res.longitude,  //中心经度
          latitude: res.latitude    //中心纬度
        })
      }
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
