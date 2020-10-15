// transaction.ts
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
      { text: '产品类别', value: 'a' },
      { text: '类别1', value: 'b' },
      { text: '类别2', value: 'c' },
    ],
    option3: [
      { text: '挂牌价格', value: 'a1' },
      { text: '价格1', value: 'b2' },
      { text: '价格2', value: 'c3' },
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
      title: "我要交易"
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
