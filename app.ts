// app.ts
App<any>({
  //全局变量
  globalData: {
    imgUrl: 'http://files.eyunhan.com/eweb_upload/download/getPic?filePath=',               //图片服务器
    url: 'http://lu.eyunhan.com/sit-rencai-api',      //服务器
    login: '/web/login',        //登录接口
    curUser: '/web/curUser',    //获取当前登录用户信息
    count: '/website/count',    //统计12条信息
    dic: '/dic/submenuDic',     //字典表
    circle: '/website/circle',  //平台动态
    all: '/web/cyPlat/all',     //全部数据（六找地图首页）
    tenants: '/web/platformMap/tenants',     //获取区
  },
  onLaunch() {
    // 展示本地存储能力
    //const logs = wx.getStorageSync('logs') || []
    //logs.unshift(Date.now())
    //wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      // success: res => {
      //   console.log(res.code)
      //   // 发送 res.code 到后台换取 openId, sessionKey, unionId
      // },
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res);
              }
            },
          })
        }
      },
    })
  },
})