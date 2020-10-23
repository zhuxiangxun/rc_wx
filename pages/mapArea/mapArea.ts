// mapArea.ts
const api = getApp().globalData;  // 获取应用实例
let https  = require('../../utils/myRequest.js');  //获取ajax方法

Page({
  //页面数据
  data: {
    list: []  //区
  },


  //获取市区
  getArea():void{
    https.successRequest(api.tenants, null, 'GET')
    .then((res:any):void=>{
      if(res){
        console.log(res);
      }
    },(err:any)=>{
    console.log(err);
    });
  },


  //页面初始化
  onLoad(){
    //页面标题
    wx.setNavigationBarTitle({     
      title: "选择市区"
    });
    this.getArea();  //获取市区
  },

  //页面显示
  onShow(){},

  //页面渲染完成
  onReady(){},

  //页面隐藏
  onHide(){},

  //页面关闭
  onUnload(){}
})
export {};
