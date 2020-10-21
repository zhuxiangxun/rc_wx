// index.ts
// 获取应用实例
const api = getApp().globalData;  // 获取应用实例
let https  = require('../../utils/myRequest.js');  //获取ajax方法

Page({
  //页面数据
  data: {
    list:{  //统计12条信息
      cyModel: 0,             //创业平台
      cxModel: 0,             //创新平台
      cxcyCount: 0,           //双创机构
      fwCount: 0,             //双创服务机构
      talentCountModel: 0,    //重点人才
      zcCount: 0,             //政策服务
      fwTypeCount: 0,         //双创服务产品—统计服务类别的数量
      productCount: 0,        //双创技术成果
      vectorCount: 0,         //创业载体资源
      proCount: 0,            //创新创业项目
      equipCount: 0,          //仪器设备资源
      needCount: 0            //创新创业需求对接
    }
  },


  newsClick():void {  //信息速递（需要节流）
    wx.navigateTo({
      url:"../news/news"
    })
  },

  //页面初始化
  onLoad(){
    https.request(api.count, null, 'GET')
    .then((res:any):void=>{
      this.setData({
        list:{
          cyModel: res.val.cyModel.platformCount?res.val.cyModel.platformCount:0,             //创业平台
          cxModel: res.val.cxModel.platformCount?res.val.cxModel.platformCount:0,             //创新平台
          cxcyCount: res.val.cxcyCount?res.val.cxcyCount:0,           //双创机构
          fwCount: res.val.fwCount?res.val.fwCount:0,             //双创服务机构
          talentCountModel: res.val.talentCountModel.talentCount?res.val.talentCountModel.talentCount:0,    //重点人才
          zcCount: res.val.zcCount?res.val.zcCount:0,             //政策服务
          fwTypeCount: res.val.fwTypeCount?res.val.fwTypeCount:0,         //双创服务产品—统计服务类别的数量
          productCount: res.val.productCount?res.val.productCount:0,        //双创技术成果
          vectorCount: res.val.vectorCount?res.val.vectorCount:0,         //创业载体资源
          proCount: res.val.proCount?res.val.proCount:0,            //创新创业项目
          equipCount: res.val.equipCount?res.val.equipCount:0,          //仪器设备资源
          needCount: res.val.needCount?res.val.needCount:0            //创新创业需求对接
        }
      })
    },(err:any)=>{
      console.log(err);
    });
  },

  //找平台
  ptFn():void{
    let token:string = wx.getStorageSync('token');
    if(!!token){
      
    }else{
      wx.navigateTo({
        url: '../loginForm/loginForm'
      })
    }
  },

  //找政策
  zcFn():void{
    let token:string = wx.getStorageSync('token');
    if(!!token){
      
    }else{
      wx.navigateTo({
        url: '../loginForm/loginForm'
      })
    }
  },

  //找项目
  xmFn():void{
    let token:string = wx.getStorageSync('token');
    if(!!token){
      
    }else{
      wx.navigateTo({
        url: '../loginForm/loginForm'
      })
    }
  },

  //找资金
  zjFn():void{
    let token:string = wx.getStorageSync('token');
    if(!!token){
      
    }else{
      wx.navigateTo({
        url: '../loginForm/loginForm'
      })
    }
  },

  //找场地
  cdFn():void{
    let token:string = wx.getStorageSync('token');
    if(!!token){
      
    }else{
      wx.navigateTo({
        url: '../loginForm/loginForm'
      })
    }
  },

  //找服务
  fwFn():void{
    let token:string = wx.getStorageSync('token');
    if(!!token){
      
    }else{
      wx.navigateTo({
        url: '../loginForm/loginForm'
      })
    }
  },

  //地图
  mapFn():void{
    let token:string = wx.getStorageSync('token');
    if(!!token){
      
    }else{
      wx.navigateTo({
        url: '../loginForm/loginForm'
      })
    }
  },

  //我要交易
  jyFn():void{
    let token:string = wx.getStorageSync('token');
    if(!!token){
      wx.navigateTo({
        url:'../transaction/transaction'
      })
    }else{
      wx.navigateTo({
        url: '../loginForm/loginForm'
      })
    }
  },

  //我要仪器设备
  yqFn():void{
    let token:string = wx.getStorageSync('token');
    if(!!token){
      wx.navigateTo({
        url:'../device/device'
      })
    }else{
      wx.navigateTo({
        url: '../loginForm/loginForm'
      })
    }
  },



  //页面渲染完成
  onReady(){},

  //页面显示
  onShow(){},

  //页面隐藏
  onHide(){},

  //页面关闭
  onUnload(){},
})
export {};
