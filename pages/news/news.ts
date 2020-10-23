// news.ts
const api = getApp().globalData;  // 获取应用实例
let https  = require('../../utils/myRequest.js');     //获取ajax方法

Page({
  //页面数据
  data: {},

  //页面初始化
  onLoad(){
    wx.setNavigationBarTitle({     
      title: "动态"
    });
  },

  //获取字典表
  getDic():void{
    https.request(api.dic + '?moid=70', null, 'GET')
    .then((res:any):void=>{
      let arr:any[] = res.val;
      arr.forEach((item:any):void=>{
        if(item.dicName == "平台动态"){
          this.selectComponent("#moving").getList(item.id);  //平台动态
        }
      })
    },(err:any)=>{
      console.log(err);
    });
  },

  //页面显示
  onShow(){
    this.getDic();  //获取字典表
  },

  //页面渲染完成
  onReady(){},

  //页面隐藏
  onHide(){},

  //页面关闭
  onUnload(){}
})

export {};
