// app.ts
App<any>({
  //全局变量
  globalData: {
    userId: '',                  //登录用户ID

    indexFlag: '',               //首页6找判断
    areaId: '',                  //位置区ID
    areaName: '',                //位置区名称
    longitude: '',               //中心经度(终点)
    latitude: '',                //中心纬度(终点)
    
    mapApiKey: '2L6BZ-6BWWS-RS6OI-6TPZT-ZRS4V-22BIF',                            //使用在腾讯位置服务申请的key
    imgUrl: 'https://rcapp.qdcsdn.cn/eweb_upload/download/getPic',     //图片服务器
    url: 'https://rcapp.qdcsdn.cn/sit-rencai-api',                               //服务器（发布）

    login: '/web/login',                           //登录接口
    editPass: '/web/editPass',                      //修改密码
    
    curUser: '/web/curUser',                       //获取当前登录用户信息
    count: '/website/count',                       //统计12条信息
    submenuDic: '/dic/submenuDic',                 //高级搜索字典表
    circle: '/website/circle',                     //平台动态
    notice: '/website/notice',                     //通知公告
    activity: '/website/activity',                 //活动信息
    
    all: '/web/cyPlat/all',                        //全部数据（六找地图首页）
    tenants: '/web/platformMap/tenants',           //获取区
    allDetail: '/web/cyPlat/allDetail',            //六找中通过id查看详情
    
    allPlatform: '/web/cyPlat/allPlatform',                  //六找所有平台统计
    cxPlatformUser: '/web/cxPlatform/findCxPlatform',        //六找创新平台统计
    cyPlatUser: '/web/cyPlat/findCyPlatform',                //六找创业平台统计
    findPro: '/web/project/findPro',                         //六找项目
    cyPlatform: '/web/cyVector/findVector',                  //六找场地
    findFw: '/web/enter/fw/findFw',                          //六找服务
    allFund: '/web/cyPlat/allFund',                          //六找资金全部
    jinrong: '/web/enter/fw/jinrong',                        //六找资金金融服务
    touzi: '/web/need/touzi',                                //六找资金找投资
    rongzi: '/web/project/rongzi',                           //六找资金找融资
    
  },

  onLaunch() {
    // 展示本地存储能力
    //const logs = wx.getStorageSync('logs') || []
    //logs.unshift(Date.now())
    //wx.setStorageSync('logs', logs)
    try {
      //wx.clearStorageSync();  //清空存储
    } catch(e) {
      // Do something when catch error
    }

    // 登录
    wx.login({
      //success: res => {
        //console.log(res.code)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      //},
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