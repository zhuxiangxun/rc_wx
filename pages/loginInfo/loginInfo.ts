// loginInfo.ts
const api = getApp().globalData;  // 获取应用实例
let https  = require('../../utils/myRequest.js');  //获取ajax方法
let Toast = require('../../miniprogram_npm/@vant/weapp/toast/toast.js').default;

Page({
  //页面数据
  data: {
    danWeiName: '',   //单位名
    phoneNum: '',     //电话
    realName: '',     //昵称
    username: '',     //用户名
    xiaQuName: '',    //辖区
  },


  //页面初始化
  onLoad(){
    https.successRequest(api.curUser, null, 'get')
    .then((res:any):void=>{
      if(res){
        this.setData({
          danWeiName: res.val.danWeiName,   //单位名
          phoneNum: res.val.phoneNum,       //电话
          realName: res.val.realName,       //昵称
          username: res.val.username,       //用户名
          xiaQuName: res.val.xiaQuName,     //辖区
        })
      }
    },(err:any)=>{
      Toast(err);
    });
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
export {};
