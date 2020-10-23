// map.ts
const api = getApp().globalData;  // 获取应用实例
let https  = require('../../utils/myRequest.js');  //获取ajax方法
let Dialog = require('../../miniprogram_npm/@vant/weapp/dialog/dialog.js').default;

Page({
  //页面数据
  data: {
    isListShow: true,        //默认显示6找内容
    isInfoShow: false,         //单条信息显示
    longitude: '',            //中心经度
    latitude: '',             //中心纬度
    scale: 12,                //缩放级别，取值范围为3-20
    markers:[],               //标记点处理后的数据（id、查询使用）
    markersObj:{},            //查询的单条数据
    cxPlatformModels: [],     //创业平台
    cyPlatformModels: [],     //创新平台
    proModels: [],            //找项目
    fwjgModels: [],           //找服务机构
    vectorModels: [],         //找场地
    jrjgMdoels: [],           //找金融机构
    tzModels: [],             //找投资需求
    rongziPros: [],           //找融资需求（项目库的融资7项）
    rongziNeeds: [],          //找融资需求（需求库的融资7项）
  },

  onChange(event:any):void {
    // event.detail 的值为当前选中项的索引
    this.setData({ active: event.detail });
  },


  //地图详情
  mapDetail():void {
    wx.navigateTo({
      url:"../mapDetail/mapDetail"
    })
  },


  //点击标记点气泡窗口触发
  markFn(e:any):void {
    console.log(e.detail.markerId);
    //查询单条数据
    let arr:any = this.data.markers.filter((item:any):any=>{
      return item.id == e.detail.markerId;
    });
    if(arr.length >= 1){
      //控制显示隐藏
      this.setData({
        markersObj: arr[0].info,
        isListShow: false,
        isInfoShow: true
      })
    }
  },

  //关闭单条信息回默认
  closeFn():void{
    this.setData({
      isListShow: true,
      isInfoShow: false
    })
  },

  //选择市区
  mapArea():void{
    wx.navigateTo({
      url:"../mapArea/mapArea"
    })
  },

  //验证用户登录状态
  verification():void{
    let token:string = wx.getStorageSync('token');
    if(!!token){
      this.getMark();  //获取地图标点
    }else{
      Dialog.alert({
        message: '登录后才能查看地图！',
      }).then(() => {
        wx.navigateTo({
          url: '../loginForm/loginForm'
        })
      });
    }
  },

  //获取地图标点
  getMark():void{
    https.successRequest(api.all, null, 'GET')
    .then((res:any):void=>{
      if(res){
        //创新平台
        let cxPlatformModelsList:any = res.val.cxPlatformModels.map((item:any):any=>{
          return {
            id: item.id,
            longitude: item.lng,   //经度
            latitude: item.lat,    //纬度
            iconPath: '../../images/address.png',             //标记
            width: 30,
            height: 30,
            callout: {
              content: item.ptName,
              color: '#000',
              fontSize: 14,
              bgColor: '#FFF',
              padding: 5,
              borderRadius: 4,
              borderColor: '#CCC',
              borderWidth: 1,
              display: 'BYCLICK'
            },
            info: item    //详情
          }
        });
        //创业平台
        let cyPlatformModelsList:any = res.val.cyPlatformModels.map((item:any):any=>{
          return {
            id: item.id,
            longitude: item.lng,   //经度
            latitude: item.lat,    //纬度
            iconPath: '../../images/address.png',             //标记
            width: 30,
            height: 30,
            callout: {
              content: item.cyName,
              color: '#000',
              fontSize: 18,
              bgColor: '#FFF',
              padding: 5,
              borderRadius: 4,
              borderColor: '#CCC',
              borderWidth: 1,
              display: 'BYCLICK'
            },
            info: item    //详情
          }
        });
        //找项目
        let proModelsList:any = res.val.proModels.map((item:any):any=>{
          return {
            id: item.id,
            longitude: item.lng,   //经度
            latitude: item.lat,    //纬度
            iconPath: '../../images/address.png',             //标记
            width: 30,
            height: 30,
            callout: {
              content: item.proName,
              color: '#000',
              fontSize: 18,
              bgColor: '#FFF',
              padding: 5,
              borderRadius: 4,
              borderColor: '#CCC',
              borderWidth: 1,
              display: 'BYCLICK'
            },
            info: item    //详情
          }
        });

        //找服务机构
        let fwjgModelsList:any = res.val.fwjgModels.map((item:any):any=>{
          return {
            id: item.id,
            longitude: item.lng,   //经度
            latitude: item.lat,    //纬度
            iconPath: '../../images/address.png',             //标记
            width: 30,
            height: 30,
            callout: {
              content: item.qyName ,
              color: '#000',
              fontSize: 18,
              bgColor: '#FFF',
              padding: 5,
              borderRadius: 4,
              borderColor: '#CCC',
              borderWidth: 1,
              display: 'BYCLICK'
            },
            info: item    //详情
          }
        });
        //找场地
        let vectorModelsList:any = res.val.vectorModels.map((item:any):any=>{
          return {
            id: item.id,
            longitude: item.lng,   //经度
            latitude: item.lat,    //纬度
            iconPath: '../../images/address.png',             //标记
            width: 30,
            height: 30,
            callout: {
              content: item.cyztName  ,
              color: '#000',
              fontSize: 18,
              bgColor: '#FFF',
              padding: 5,
              borderRadius: 4,
              borderColor: '#CCC',
              borderWidth: 1,
              display: 'BYCLICK'
            },
            info: item    //详情
          }
        });
        //找金融机构
        let jrjgMdoelsList:any = res.val.jrjgMdoels.map((item:any):any=>{
          return {
            id: item.id,
            longitude: item.lng,   //经度
            latitude: item.lat,    //纬度
            iconPath: '../../images/address.png',             //标记
            width: 30,
            height: 30,
            callout: {
              content: item.qyName,
              color: '#000',
              fontSize: 18,
              bgColor: '#FFF',
              padding: 5,
              borderRadius: 4,
              borderColor: '#CCC',
              borderWidth: 1,
              display: 'BYCLICK'
            },
            info: item    //详情
          }
        });
        //找投资需求
        let tzModelsList:any = res.val.tzModels.map((item:any):any=>{
          return {
            id: item.id,
            longitude: item.lng,   //经度
            latitude: item.lat,    //纬度
            iconPath: '../../images/address.png',             //标记
            width: 30,
            height: 30,
            callout: {
              content: item.needName   ,
              color: '#000',
              fontSize: 18,
              bgColor: '#FFF',
              padding: 5,
              borderRadius: 4,
              borderColor: '#CCC',
              borderWidth: 1,
              display: 'BYCLICK'
            },
            info: item    //详情
          }
        });
        //找融资需求（项目库的融资7项）
        let rongziProsList:any = res.val.rongziPros.map((item:any):any=>{
          return {
            id: item.id,
            longitude: item.lng,   //经度
            latitude: item.lat,    //纬度
            iconPath: '../../images/address.png',             //标记
            width: 30,
            height: 30,
            callout: {
              content: item.proName ,
              color: '#000',
              fontSize: 18,
              bgColor: '#FFF',
              padding: 5,
              borderRadius: 4,
              borderColor: '#CCC',
              borderWidth: 1,
              display: 'BYCLICK'
            },
            info: item    //详情
          }
        });
        //找融资需求（需求库的融资7项）
        let rongziNeedsList:any = res.val.rongziNeeds.map((item:any):any=>{
          return {
            id: item.id,
            longitude: item.lng,   //经度
            latitude: item.lat,    //纬度
            iconPath: '../../images/address.png',             //标记
            width: 30,
            height: 30,
            callout: {
              content: item.needName,
              color: '#000',
              fontSize: 18,
              bgColor: '#FFF',
              padding: 5,
              borderRadius: 4,
              borderColor: '#CCC',
              borderWidth: 1,
              display: 'BYCLICK'
            },
            info: item    //详情
          }
        });
        //处理ID为数字
        let markersList:any  = this.data.markers.concat(cxPlatformModelsList,cyPlatformModelsList,proModelsList,fwjgModelsList,vectorModelsList,jrjgMdoelsList,tzModelsList,rongziProsList,rongziNeedsList);
        let newMarkersList:any = markersList.map((item:any, index:number):any=>{
          return {
            id: index,
            longitude: item.longitude,   //经度
            latitude: item.latitude,    //纬度
            iconPath: '../../images/address.png',             //标记
            width: 30,
            height: 30,
            callout: item.callout,
            info: item.info    //详情
          }
        });
        this.setData({
          markers: newMarkersList
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
      title: "人才创新创业平台地图"
    });
    //当前位置
    wx.getLocation({
      type: 'wgs84',
      success:(res:any):void=>{
        this.setData({
          longitude: res.longitude,    //中心经度
          latitude: res.latitude       //中心纬度
        })
      }
    });
  },

  //页面显示
  onShow(){
    this.verification();  //验证用户登录状态
  },

  //页面渲染完成
  onReady(){},

  //页面隐藏
  onHide(){},

  //页面关闭
  onUnload(){}
})
export {};
