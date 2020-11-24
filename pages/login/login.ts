// login.ts
const api = getApp().globalData;  // 获取应用实例
let https  = require('../../utils/myRequest.js');  //获取ajax方法
let Toast = require('../../miniprogram_npm/@vant/weapp/toast/toast.js').default;

Page({
  //页面数据
  data: {
    loginInfo: '',          //登录名
    loginBtn: '',           //登录 / 退出按钮
    passwordShow: true,     //个人登录还是主管单位登录
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

  //个人信息
  loginInfoFn():void {
    let token:string = wx.getStorageSync('token');
    if(!!token){
      wx.navigateTo({
        url:'../loginInfo/loginInfo'
      })
    }else{
      Toast('请先登录！');
    }
  },

  //修改密码
  changePassword():void{
    let token:string = wx.getStorageSync('token');
    if(!!token){
      wx.navigateTo({
        url:'../newPassword/newPassword'
      })
    }else{
      Toast('请先登录！');
    }
  },


  //登录跳转或者退出登录
  loginFn():void{
    if(this.data.loginBtn == '退出登录'){
      wx.clearStorage();  //清除缓存
      api.userId = '';
      Toast('已退出登录');
      this.setData({
        loginBtn: '登录 / 注册',
        loginInfo: '未登录',
        passwordShow: true,
      })
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
  },

  //页面渲染完成
  onReady(){
    
  },

  //页面显示
  onShow(){
    //判断是否登录
    try {
      let token:string = wx.getStorageSync('token');
      if (!!token) {
        if(api.loginStatus == 'yh'){  //用户机构登录
          https.successRequest(api.curUser, null, 'get')
          .then((res:any):void=>{
            if(res){
              api.userId = res.val.id;        //用户ID
              this.setData({
                loginInfo: res.val.realName,
                loginBtn: '退出登录',
                passwordShow: true
              })
            }
          },(err:any)=>{
            Toast(err);
          });
        }
        if(api.loginStatus == 'zg'){  //主管单位登录
          if(api.userId == ''){
            https.zgSuccessRequest(api.loginuser, null, 'get')
            .then((res:any):void=>{
              if(res){
                api.userId = res.val.id;        //用户ID
                this.setData({
                  loginInfo: res.val.username,
                  loginBtn: '退出登录',
                  passwordShow: false
                })
              }
            },(err:any)=>{
              Toast(err);
            });
          }
        }
      }else{
        this.setData({
          loginInfo: '未登录',
          loginBtn: '登录 / 注册'
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
