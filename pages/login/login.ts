// login.ts
const api = getApp().globalData;  // 获取应用实例
let https  = require('../../utils/myRequest.js');  //获取ajax方法
let Toast = require('../../miniprogram_npm/@vant/weapp/toast/toast.js').default;

Page({
  //页面数据
  data: {
    // footerActive: 2,
    // icon: {
    //   normal: 'https://img.yzcdn.cn/vant/user-inactive.png',
    //   active: 'https://img.yzcdn.cn/vant/user-active.png',
    // }
    loginBtn: '',           //登录 / 退出按钮
  },

  //个人信息
  showPopup():void {
    
  },

  //底部菜单
  // onFooterChange(event:any):void {
  //   this.setData({ active: event.detail });
  //   if(event.detail == 1){
  //     wx.navigateTo({
  //       url:'../map/map'
  //     })
  //   }else if(event.detail == 2){
  //     wx.navigateTo({
  //       url:'../login/login'
  //     })
  //   }else{
  //     wx.navigateTo({
  //       url:'../index/index'
  //     })
  //   }
  // },

  //登录跳转或者退出登录
  loginFn():void{
    if(this.data.loginBtn == '退出登录'){
      wx.clearStorage();  //清除缓存
      Toast('已退出登录');
      this.setData({
        loginBtn: '登录'
      })
    }else{
      wx.navigateTo({
        url: '../loginForm/loginForm'
      })
    }
  },

  //页面初始化
  onLoad(options){
    console.log(options)
    wx.setNavigationBarTitle({     
      title: "我的"
    });
  },

  //页面渲染完成
  onReady(){},

  //页面显示
  onShow(){
    //判断是否登录
    try {
      let token:string = wx.getStorageSync('token');
      if (!!token) {
        https.successRequest(api.curUser, null, 'get')
        .then((res:any):void=>{
          if(res){
            console.log(res);
          }
        },(err:any)=>{
          Toast(err);
        });
        //---------
        this.setData({
          loginBtn: '退出登录'
        })
      }else{
        this.setData({
          loginBtn: '登录'
        })
      }
    } catch (e) {
      //console.log(e)
    }
  },

  //页面隐藏
  onHide(){},

  //页面关闭
  onUnload(){}
})
export {};
