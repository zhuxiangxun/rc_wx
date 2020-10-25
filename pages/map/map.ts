// map.ts
const api = getApp().globalData;  // 获取应用实例
let https  = require('../../utils/myRequest.js');  //获取ajax方法
let Dialog = require('../../miniprogram_npm/@vant/weapp/dialog/dialog.js').default;

Page({
  //页面数据
  data: {
    //搜索
    isListShow: true,         //默认显示6找内容
    isInfoShow: false,        //单条信息显示
    isSearchShow: false,      //搜索结果数据
    isSearchInfoShow: false,  //搜索列表数据
    searchKey: '',            //key关键字搜索
    industryList: [           //平台产业行业
      {
        text: '现代海洋现代海洋现代海洋',
        children:[
          {
            text: '全部',
            id: 1,
            cyID: 11
          },
          {
            text: '温州',
            id: 2,
            cyID: 22
          },
        ]
      },
    ],


    flg: '',                   //6找状态判断
    num: 0,                    //6找结果
    mumList: [],               //6找列表


    //找平台
    ptSearchInfoShow: true,     //显示/隐藏
    ptBtnShow: false,           //全部时显示/隐藏
    ptBtnClass: 1,              //全部按钮状态切换
    ptIndex: 0,                 //当前索引
    ptIndustryId: null,         //选中的id
  
    //找项目
    proSearchInfoShow: false,    //显示/隐藏
    proIndex: 0,                //当前索引
    proIndustryId: null,        //选中的id


    //找资金
    zjSearchInfoShow: false,    //显示/隐藏
    //找资金（金融服务）
    jrSearchInfoShow: false,    //显示/隐藏
    jrIndex: 0,                //当前索引
    jrIndustryId: null,        //选中的id
    //找资金（投资）
    tzSearchInfoShow: false,    //显示/隐藏
    tzIndex: 0,                //当前索引
    tzIndustryId: null,        //选中的id
    //找资金（融资）
    rzSearchInfoShow: false,    //显示/隐藏
    rzIndex: 0,                //当前索引
    rzIndustryId: null,        //选中的id


    //找场地
    cdSearchInfoShow: false,    //显示/隐藏
    cdIndex: 0,                //当前索引
    cdIndustryId: null,        //选中的id

    //找服务
    fwSearchInfoShow: false,    //显示/隐藏
    fwIndex: 0,                 //当前索引
    fwIndustryId: null,         //选中的id


    //地图
    longitude: '',            //中心经度
    latitude: '',             //中心纬度
    scale: 12,                //缩放级别，取值范围为3-20
    markers:[],               //标记点处理后的数据（id、查询使用）
    markersObj:{},            //查询的单条数据
    //所以标点数据
    cxPlatformModels: [],     //创业平台
    cyPlatformModels: [],     //创新平台
    proModels: [],            //找项目
    fwjgModels: [],           //找服务机构
    vectorModels: [],         //找场地
    jrjgMdoels: [],           //找金融机构
    tzModels: [],             //找投资需求
    rongziPros: [],           //找融资需求（项目库的融资7项）
    rongziNeeds: [],          //找融资需求（需求库的融资7项）
    //导航
    goName:'',                //要去的地址
    goLongitude: '',          //中心经度(终点)
    goLatitude: '',           //中心纬度(终点)
  },


  //搜索列表显示
  searchInfoOpen():void{
    this.setData({
      isListShow: false,          //默认显示6找内容
      isInfoShow: false,         //单条信息显示
      isSearchShow: false,       //搜索结果数据
      isSearchInfoShow: true,   //搜索列表数据
    })
  },
   //搜索列表关闭
   searchInfoClose():void{
    this.setData({
      isListShow: false,          //默认显示6找内容
      isInfoShow: false,          //单条信息显示
      isSearchShow: true,         //搜索结果数据
      isSearchInfoShow: false,    //搜索列表数据
    })
  },


  //搜索结果关闭
  searchClose():void{
    this.setData({
      num: 0,                    //6找结果
      mumList: [],               //6找列表
      isListShow: true,          //默认显示6找内容
      isInfoShow: false,         //单条信息显示
      isSearchShow: false,       //搜索结果数据
      isSearchInfoShow: false,   //搜索列表数据
    })
  },


  //找平台
  ptFn():void{                   //6找平台触发
    this.setData({
      num: 0,                    //6找结果
      mumList: [],               //6找列表
      isListShow: false,         //默认显示6找内容
      isInfoShow: false,         //单条信息显示
      isSearchShow: true,        //搜索结果数据
      isSearchInfoShow: false,   //搜索列表数据
    })
    this.getCxPro();             //6找创新平台统计
    this.getCyPro();             //6找创业平台统计
  },
  getCxPro():void{               //6找创新平台统计
    https.successRequest(api.cxPlatformUser, {
      cyTypeId: '',   //产业id
      hyTypeId: '',   //行业id
      typeId: '',     //平台类型id
      ziZhi: '',      //平台资质id
      tenantId: '',   //地区id
    }, 'GET')
    .then((res:any):void=>{
      if(res){
        let list:any = res.list.map((item:any):any=>{
          return {
            id: item.id,                          //ID
            longitude: item.longitude,            //中心经度
            latitude: item.latitude,              //中心纬度
            title: item.cxName,                   //标题
            provinceName: item.provinceName?item.provinceName:'',     //省
            cityName: item.cityName?item.cityName:'',                 //市
            districtName: item.districtName?item.districtName:'',     //区
            markers: item.markers                                     //坐标
          }
        })
        this.setData({
          num: this.data.num += res.total,
          mumList: this.data.mumList.concat(list)
        })
      }
    },(err:any)=>{
      console.log(err);
    });
  },
  getCyPro():void{               //6找创业平台统计
    https.successRequest(api.cyPlatUser, {
      cyTypeId: '',   //产业id
      hyTypeId: '',   //行业id
      typeId: '',     //平台类型id
      ziZhi: '',      //平台资质id
      tenantId: '',   //地区id
    }, 'GET')
    .then((res:any):void=>{
      if(res){
        let list:any = res.list.map((item:any):any=>{
          return {
            id: item.id,                          //ID
            longitude: item.longitude,            //中心经度
            latitude: item.latitude,              //中心纬度
            title: item.cyName,                   //标题
            provinceName: item.provinceName?item.provinceName:'',     //省
            cityName: item.cityName?item.cityName:'',                 //市
            districtName: item.districtName?item.districtName:'',     //区
            markers: item.markers                                     //坐标
          }
        })
        this.setData({
          num: this.data.num += res.total,
          mumList: this.data.mumList.concat(list)
        })
      }
    },(err:any)=>{
      console.log(err);
    });
  },
  ptBtnToggle(e:any):void{  //全部按钮状态切换
    if(e.target.dataset.num == 1){
      this.setData({
        ptBtnClass: e.target.dataset.num,
        ptBtnShow: false,          //高级搜索
        num: 0,                    //6找结果
        mumList: [],               //6找列表
      })
      this.getCxPro();             //6找创新平台统计
      this.getCyPro();             //6找创业平台统计
    }else if(e.target.dataset.num == 2){
      this.setData({
        ptBtnClass: e.target.dataset.num,
        ptBtnShow: true,           //高级搜索
        num: 0,                    //6找结果
        mumList: [],               //6找列表
      })
      this.getCxPro();             //6找创新平台统计
    }else{
      this.setData({
        ptBtnClass: e.target.dataset.num,
        ptBtnShow: true,           //高级搜索
        num: 0,                    //6找结果
        mumList: [],               //6找列表
      })
      this.getCyPro();             //6找创业平台统计
    }
  },
  ptIndustryItem(data:any):void {  //行业产业
    this.setData({
      ptIndustryId: data.detail.id
    })
  },

  //找项目
  proIndustryItem(data:any):void {  //行业产业
    this.setData({
      proIndustryId: data.detail.id
    })
  },

  //找场地
  cdIndustryItem(data:any):void {  //行业产业
    this.setData({
      cdIndustryId: data.detail.id
    })
  },

  //找服务
  fwIndustryItem(data:any):void {  //行业产业
    this.setData({
      fwIndustryId: data.detail.id
    })
  },

  //找资金（金融服务）
  jrIndustryItem(data:any):void {  //行业产业
    this.setData({
      jrIndustryId: data.detail.id
    })
  },
  //找资金（投资）
  tzIndustryItem(data:any):void {  //行业产业
    this.setData({
      tzIndustryId: data.detail.id
    })
  },
  //找资金（融资）
  rzIndustryItem(data:any):void {  //行业产业
    this.setData({
      rzIndustryId: data.detail.id
    })
  },
  

  //路线导航
  navigation(e:any):void{
    // if(!!e.currentTarget.dataset.markers){
    //   let markers:any = JSON.parse(e.currentTarget.dataset.markers)[0].position;
    //   if(markers.length > 0){
    //     this.setData({
    //       goLongitude: markers[0].lng,
    //       goLatitude: markers[0].lat
    //    })
    //   }
    // }
    let endPoint:any = JSON.stringify({  //终点
      'name': this.data.goName,
      'longitude': parseFloat(this.data.goLongitude),
      'latitude': parseFloat(this.data.goLatitude)
    });

    wx.navigateTo({
      url: 'plugin://routePlan/index?key=' + api.mapApiKey + '&referer=才赋云' + '&endPoint=' + endPoint
    });
  },


  //选择市区
  mapArea():void{
    wx.navigateTo({
      url:"../mapArea/mapArea"
    })
  },


  //地图详情
  mapDetail():void {
    wx.navigateTo({
      url:"../mapDetail/mapDetail"
    })
  },


  //点击标记点气泡窗口触发
  markFn(e:any):void {
    //查询单条数据
    let arr:any = this.data.markers.filter((item:any):any=>{
      return item.id == e.detail.markerId;
    });
    if(arr.length >= 1){
      this.setData({
        goName: arr[0].callout.content,         //要去的地址
        goLongitude: arr[0].longitude,          //中心经度(终点)
        goLatitude: arr[0].latitude,            //中心纬度(终点)
        markersObj: arr[0],                     //单条列表数据
        isListShow: false,                      //默认显示6找内容
        isInfoShow: true,                       //单条信息显示
        isSearchShow: false,                    //搜索结果数据
        isSearchInfoShow: false,                //搜索列表数据
      })
    }
  },


  //关闭单条信息回默认
  closeFn():void{
    this.setData({
      isListShow: true,                       //默认显示6找内容
      isInfoShow: false,                      //单条信息显示
      isSearchShow: false,                    //搜索结果数据
      isSearchInfoShow: false,                //搜索列表数据
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
            provinceName: item.provinceName?item.provinceName:'',     //省
            cityName: item.cityName?item.cityName:'',                 //市
            districtName: item.districtName?item.districtName:''      //区
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
            provinceName: item.provinceName?item.provinceName:'',     //省
            cityName: item.cityName?item.cityName:'',                 //市
            districtName: item.districtName?item.districtName:''      //区
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
            provinceName: item.provinceName?item.provinceName:'',     //省
            cityName: item.cityName?item.cityName:'',                 //市
            districtName: item.districtName?item.districtName:''      //区
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
            provinceName: item.provinceName?item.provinceName:'',     //省
            cityName: item.cityName?item.cityName:'',                 //市
            districtName: item.districtName?item.districtName:''      //区
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
            provinceName: item.provinceName?item.provinceName:'',     //省
            cityName: item.cityName?item.cityName:'',                 //市
            districtName: item.districtName?item.districtName:''      //区
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
            provinceName: item.provinceName?item.provinceName:'',     //省
            cityName: item.cityName?item.cityName:'',                 //市
            districtName: item.districtName?item.districtName:''      //区
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
            provinceName: item.provinceName?item.provinceName:'',     //省
            cityName: item.cityName?item.cityName:'',                 //市
            districtName: item.districtName?item.districtName:''      //区
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
            provinceName: item.provinceName?item.provinceName:'',     //省
            cityName: item.cityName?item.cityName:'',                 //市
            districtName: item.districtName?item.districtName:''      //区
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
            provinceName: item.provinceName?item.provinceName:'',     //省
            cityName: item.cityName?item.cityName:'',                 //市
            districtName: item.districtName?item.districtName:''      //区
          }
        });
        //处理ID为数字
        let markersList:any  = this.data.markers.concat(cxPlatformModelsList,cyPlatformModelsList,proModelsList,fwjgModelsList,vectorModelsList,jrjgMdoelsList,tzModelsList,rongziProsList,rongziNeedsList);
        let newMarkersList:any = markersList.map((item:any, index:number):any=>{
          return {
            id: index,                   //map用的自定义ID
            longitude: item.longitude,   //经度
            latitude: item.latitude,     //纬度
            iconPath: '../../images/address.png',      //标记
            width: 30,
            height: 30,
            callout: item.callout,
            oldId: item.id,                      //原始ID
            title: item.callout.content,         //标题
            provinceName: item.provinceName,     //省
            cityName: item.cityName,             //市
            districtName: item.districtName      //区
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
  onHide(){
    this.setData({
      isListShow: true,          //默认显示6找内容
      isInfoShow: false,         //单条信息显示
      isSearchShow: false,       //搜索结果数据
      isSearchInfoShow: false,   //搜索列表数据
    });
  },

  //页面关闭
  onUnload(){}
})
export {};
