// home.ts
// 获取应用实例
const api = getApp().globalData;  // 获取应用实例
let Dialog = require('../../miniprogram_npm/@vant/weapp/dialog/dialog.js').default;
let https  = require('../../utils/myRequest.js');     //获取ajax方法
let globalFn  = require('../../utils/globalFn.js');   //获取公共封装方法
let expressFn = globalFn.throttle(function(){         //信息速递（函数防抖）
  wx.navigateTo({
    url:"../news/news"
  })
},1000);
let template:any = require('../../templates/template.js');   //获取indexHeader模板的方法

Page({
  //页面数据
  data: {
    scrollTop: '0',
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

  // scrollToLower():void {  //滚动到底部/右边时触发
  //   expressFn();  //跳转信息速递
  // },

  onReachBottom():void{  //监听上拉触底事件
    expressFn();  //跳转信息速递
  },

  //模板点击事件
  indexHeaderFn(event:any):void{
    template.indexHeaderFn(event);
  },

  //下拉刷新
  onPullDownRefresh():void{
    wx.showNavigationBarLoading();   //在标题栏中显示加载
    this.getData();                  //获取统计数据方法
  },

  //信息速递（函数防抖）
  newsClick():void {
    expressFn();  //跳转信息速递
  },

  //获取统计数据方法
  getData(){
    wx.showNavigationBarLoading() //在标题栏中显示加载
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
      wx.hideNavigationBarLoading();  //完成停止加载
      wx.stopPullDownRefresh();       //停止下拉刷新
    },(err:any)=>{
      console.log(err);
    });
  },

  //找平台
  ptFn():void{
    api.indexFlag = 'pt';
    wx.switchTab({
      url: '../map/map'
    })
  },

  zcFn():void{
    wx.navigateToMiniProgram({
      appId: 'wxf4083a5f8365a30a',
      path: '',
      success() {
        // 打开成功
        // wx.switchTab({
        //   url: '/pages/home/home'
        // })
      }
    })
  },

  //人才网外链
  linkFn():void{
    Dialog.alert({
      message: '“平台地图”正与全市人才相关部门办事服务实现互联互通，目前，请先使用“青岛人才”进行登录办理，后期将逐步完善各项功能板块，敬请期待！',
    }).then(() => {
      wx.navigateToMiniProgram({
        appId: 'wx2e070e33c6154515',
        path: '',
        success() {
          // 打开成功
          // wx.switchTab({
          //   url: '/pages/index/index'
          // })
        }
      })
    });
  },

  //找项目
  xmFn():void{
    api.indexFlag = 'xm';
      wx.switchTab({
        url: '../map/map'
      })
  },

  //找资金
  zjFn():void{
    api.indexFlag = 'zj';
    wx.switchTab({
      url: '../map/map'
    })
  },

  //找场地
  cdFn():void{
    api.indexFlag = 'cd';
    wx.switchTab({
      url: '../map/map'
    })
  },

  //找服务
  fwFn():void{
    api.indexFlag = 'fw';
    wx.switchTab({
      url: '../map/map'
    })
  },

  //地图
  mapFn():void{
    wx.switchTab({ 
      url:'../map/map'
    });
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


  //页面初始化
  onLoad(){
    this.getData();  //获取统计数据方法
  },

  //页面显示
  onShow(){},

  //页面渲染完成
  onReady(){},

  //页面隐藏
  onHide(){},

  //页面关闭
  onUnload(){},


})
export {};
