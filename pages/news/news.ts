// news.ts
const api = getApp().globalData;  // 获取应用实例
let https  = require('../../utils/myRequest.js');     //获取ajax方法

Page({
  //页面数据
  data: {
    tabFlag: 'dongtai',       //tab切换状态
    movindId: '',      //动态ID
    noticeId: '',      //公告ID
    activityId: '',    //活动ID
  },

  //页面上拉
  onReachBottom():void{
    // if(this.data.tabFlag == 'dongtai'){
    //   this.selectComponent("#moving").getList(this.data.movindId);  //平台动态
    // }else if(this.data.tabFlag == 'gonggao'){
    //   this.selectComponent("#notice").getList(this.data.noticeId);  //通知公告
    // }else{
    //   this.selectComponent("#activity").getList(this.data.activityId);  //活动信息
    // }
  },


  //tab标签切换时触发
  tabFn(res:any):void{
    if(res.detail.name == 'gonggao'){
      this.setData({
        tabFlag: 'gonggao'
      });
      this.selectComponent("#notice").getList(this.data.noticeId);  //通知公告
    }
    if(res.detail.name == 'huodong'){
      this.setData({
        tabFlag: 'huodong'
      });
      console.log(111)
      this.selectComponent("#activity").getList(this.data.activityId);  //活动信息
    }
    if(res.detail.name == 'dongtai'){
      this.setData({
        tabFlag: 'dongtai'
      });
      this.selectComponent("#moving").getList(this.data.movindId);  //平台动态
    }
  },
 
  //获取字典表
  getDic():void{
    https.request(api.submenuDic + '?moid=70', null, 'GET')
    .then((res:any):void=>{
      let arr:any[] = res.val;
      arr.forEach((item:any):void=>{
        if(item.dicName == "平台动态"){
          this.selectComponent("#moving").getList(item.id);   //平台动态
          this.setData({
            movindId: item.id
          })
        }else if(item.dicName == "通知公告"){
          this.setData({
            noticeId: item.id
          })
        }else if(item.dicName == "活动信息"){
          this.setData({
            activityId: item.id
          })
        }
      })
    },(err:any)=>{
      console.log(err);
    });
  },

  //页面初始化
  onLoad(){
    wx.setNavigationBarTitle({     
      title: "动态"
    });
  },

  //页面显示
  onShow(){
    this.getDic();  //获取字典表
  },

  //页面渲染完成
  onReady(){},

  //页面隐藏
  onHide(){},

  //页面关闭
  onUnload(){}
})

export {};
