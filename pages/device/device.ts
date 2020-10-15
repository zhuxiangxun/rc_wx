// device.ts
// 获取应用实例
//const app = getApp();

Page({
  //页面数据
  data: {
    option1: [
      { text: '所在地区', value: 0 },
      { text: '市南', value: 1 },
      { text: '市北', value: 2 },
    ],
    option2: [
      { text: '设备分类', value: 'a' },
      { text: '分类1', value: 'b' },
      { text: '分类2', value: 'c' },
    ],
    option3: [
      { text: '产业/行业', value: 'a1' },
      { text: '行业1', value: 'b2' },
      { text: '行业2', value: 'c3' },
    ],
    value1: 0,
    value2: 'a',
    value3: 'a1',
    itemTitle: '更多'
  },

  //普通搜索
  onSearch(event:any):void{
    console.log(event.detail);
  },

  //普通搜索取消
  onCancel():void{
    
  },

  //页面初始化
  onLoad(){
    wx.setNavigationBarTitle({     
      title: "我要仪器设备"
    })
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
