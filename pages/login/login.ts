// login.ts
// 获取应用实例
//const app = getApp();

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
      console.log('退出登录');
    }else{
      wx.navigateTo({
        url: '../loginForm/loginForm'
      })
    }
  },

  //页面初始化
  onLoad(){
    wx.setNavigationBarTitle({     
      title: "我的"
    });
    //判断是否登录
    try {
      let token:string = wx.getStorageSync('token');
      if (token) {
        this.setData({
          loginBtn: '退出登录'
        })
      }else{
        this.setData({
          loginBtn: '登录'
        })
      }
    } catch (e) {
      console.log(e)
    }
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
