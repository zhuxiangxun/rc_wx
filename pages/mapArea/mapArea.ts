// mapArea.ts
const api = getApp().globalData;  // 获取应用实例
let https  = require('../../utils/myRequest.js');  //获取ajax方法

Page({
  //页面数据
  data: {
    areaClass: null,     //选中状态
    areaList: []         //区
  },

  areaFn(e:any):void{  //点击区时触发
    api.areaId = e.target.dataset.id;
    api.areaName = e.target.dataset.title;
    wx.switchTab({ 
      url:'../map/map'
    });
  },

  //获取市区
  getArea():void{
    https.successRequest(api.tenants, null, 'GET')
    .then((res:any):void=>{
      if(res){
        let arr:any = res.list.map((item:any):any=>{
          return {
            id: item.model.id,
            title: item.model.cname
          }
        })
        this.setData({
          areaList: arr
        })
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
