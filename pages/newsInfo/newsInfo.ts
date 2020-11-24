// newsInfo.ts
const api = getApp().globalData;                      // 获取应用实例
let https  = require('../../utils/myRequest.js');     //获取ajax方法

Page({
  //页面数据
  data: {
    title:'',
    name: '',
    time: '',
    num: '',
    content: ''
  },

  onShareAppMessage:(res:any):any=> {  //发送给朋友
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target);
    }
    return {
      title: '青岛人才创新创业平台地图',
      path: '/pages/home/home',
      imageUrl: ''
    }
  },

  onShareTimeline:():any=> {  //分享
    return {
      title: '青岛人才创新创业平台地图',
      query: {},
      imageUrl: ''
    }
  },

  //页面初始化
  onLoad(option:any){
    let url:string = api.notice + '/' + option.id;
    https.request(url, null, 'GET').then((res:any):void=>{
        this.setData({
          title: res.val.ntitle,
          name: res.val.publishSubject,
          time: res.val.publishTime.split(' ')[0],
          num: res.val.clickCount,
          content: res.val.content
        })
    },(err:any)=>{
      console.log(err);
    });
    //页面标题
    wx.setNavigationBarTitle({     
      title: "详情"
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

export {};
