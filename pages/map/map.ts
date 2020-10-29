// map.ts
const api = getApp().globalData;  // 获取应用实例
let https  = require('../../utils/myRequest.js');  //获取ajax方法
let Dialog = require('../../miniprogram_npm/@vant/weapp/dialog/dialog.js').default;

let QQMapWX = require('../../utils/qqmap-wx-jssdk.js');  // 引入SDK核心类

Page({
  //页面数据
  data: {
    moreTitle: '',            //加载更多
    //页码
    pageSize: 10,             //每页显示数量
    pageIndex: 1,             //当前页
    total: 0,                 //总条数
    //区市
    areaList: [],             //区列表
    areaName: '',             //切换的区名
    areaId: '',               //切换的区ID
    //搜索
    isListShow: true,         //默认显示6找内容
    isInfoShow: false,        //单条信息显示
    isSearchShow: false,      //搜索结果数据
    isSearchInfoShow: false,  //搜索列表数据

    //平台高级搜索
    typeList: [],             //类型
    industryList: [],         //平台产业行业
    ptZiZhiList:[             //平台资质
      { id: 1, title: '国家级' },
      { id: 2, title: '省级' },
      { id: 3, title: '市级' },
      { id: 4, title: '区（市）级' },
      { id: 5, title: '无资质' }
    ],
    //项目高级搜索
    xmStageList: [],             //所处阶段
    xmCategoryList: [],          //需求类别
    xmFinancingList: [],         //融资金额
    //场地高级搜索
    cdCarrierList: [],           //资源类型
    cdUserList: [                //场地用途
      { id: 1, dicName: '出租' },
      { id: 2, dicName: '出售' }
    ],
    //服务高级搜索
    fwCategoryList:[],            //服务类别
    fwTypeList: [],               //单位类型
    fwScaleList: [],              //单位规模
    //找投资
    tzAreaList: [],               //投资区域
    tzWayList: [],                //投资方式
    tzOtherList: [],              //投资金额
    tzTypeList: [],               //资金类型
    //找融资
    rzWayList: [],                //融资方式

    flg: '',                      //6找状态判断
    num: 0,                       //6找结果
    mumList: [],                  //6找列表

    searchKey: '',               //key关键字搜索
    tenantId: '',                //地区id

    //找平台
    ptSearchInfoShow: true,     //显示/隐藏
    ptBtnShow: false,           //全部时显示/隐藏
    ptBtnClass: 1,              //全部按钮状态切换
    ptIndex: 0,                 //当前索引
    ptIndustryId: null,         //选中的id
    
    ptTypeClass: null,          //类型按钮状态切换
    ptZiZhiClass: null,         //资质按钮状态切换

    ptTypeId: '',               //平台类型id
    ptZiZhi: '',                //平台资质id
    ptCyTypeId: '',             //产业id
    ptHyTypeId: '',             //行业id

  
    //找项目
    proSearchInfoShow: false,    //显示/隐藏
    xmIndex: 0,                 //当前索引
    xmIndustryId: null,         //选中的id

    xmStageClass: null,          //阶段按钮状态切换
    xmCategoryClass: null,       //类别按钮状态切换
    xmFinancingClass: null,      //金额按钮状态切换

    xmStageId: '',               //所处阶段
    xmTypeId: '',                //需求类别
    xmTzMoney: '',               //融资金额
    xmCyTypeId: '',              //产业id
    xmHyTypeId: '',              //行业id


    //找资金
    zjSearchInfoShow: false,    //显示/隐藏
    zjBtnClass: 1,              //全部按钮状态切换
    //找资金（金融服务）
    jrSearchInfoShow: false,    //显示/隐藏
    jrCategoryIndex: 0,         //当前索引（服务类别）
    jrCategoryId: null,         //选中的id（服务类别）
    jrIndustryIndex: 0,         //当前索引（行业产业）
    jrIndustryId: null,         //选中的id（行业产业）

    jrTypeClass: null,          //单位类型
    jrScaleClass: null,         //单位规模

    jrTypeOneId: '',            //服务类别一级菜单
    jrTypeTwoId: '',            //服务类别二级菜单
    jrDwStatusId: '',           //单位类型id
    jrDwScaleId: '',            //单位规模id
    jrCyTypeId: '',             //产业id
    jrHyTypeId: '',             //行业id

    //找资金（投资）
    tzSearchInfoShow: false,    //显示/隐藏
    tzIndex: 0,                 //当前索引
    tzIndustryId: null,         //选中的id

    tzAreaClass: null,          //投资区域
    tzWayClass: null,           //投资方式
    tzOtherClass: null,         //投资金额
    tzTypeClass: null,          //投资类型

    tzAreaId: '',               //投资区域
    tzWayId: '',                //投资方式
    tzOtherId: '',              //投资金额
    tzTypeId: '',               //投资类型
    tzCyTypeId: '',             //产业id
    tzHyTypeId: '',             //行业id



    //找资金（融资）
    rzSearchInfoShow: false,    //显示/隐藏
    rzIndex: 0,                 //当前索引
    rzIndustryId: null,         //选中的id

    rzCategoryClass: null,      //需求类别
    rzStageClass: null,         //所处阶段
    rzWayClass: null,           //融资方式
    rzFinancingClass: null,     //融资金额

    rzCategoryId: '',           //需求类别
    rzStageId: '',              //所处阶段
    rzWayId: '',                //融资方式
    rzFinancingId: '',          //融资金额
    rzCyTypeId: '',             //产业id
    rzHyTypeId: '',             //行业id

    //找场地
    cdSearchInfoShow: false,    //显示/隐藏
    cdIndex: 0,                 //当前索引
    cdIndustryId: null,         //选中的id
 
    cdTypeClass: null,          //资源类型
    cdUserClass: null,          //场地用途

    cdTypeId: '',               //载体空间类型
    cdChuZuId: '',              //是否出租
    cdSaleId: '',               //是否出售
    cdCyTypeId: '',             //产业id
    cdHyTypeId: '',             //行业id

    //找服务
    fwSearchInfoShow: false,    //显示/隐藏
    fwCategoryIndex: 0,         //当前索引（服务类别）
    fwCategoryId: null,         //选中的id（服务类别）
    fwIndustryIndex: 0,         //当前索引（行业产业）
    fwIndustryId: null,         //选中的id（行业产业）

    fwTypeClass: null,          //单位类型
    fwScaleClass: null,         //单位规模

    fwTypeOneId: '',            //服务类别一级菜单
    fwTypeTwoId: '',            //服务类别二级菜单
    fwDwStatusId: '',           //单位类型id
    fwDwScaleId: '',            //单位规模id
    fwCyTypeId: '',             //产业id
    fwHyTypeId: '',             //行业id


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

  ptTypes():void{  //类型
    https.successRequest(api.submenuDic + '?moid=2', null, 'GET')
    .then((res:any):void=>{
      if(res){
        this.setData({
          typeList: res.val
        })
      }
    },(err:any)=>{
      console.log(err);
    });
  },

  industry():void{  //产业/行业
    https.successRequest(api.submenuDic + '?moid=7', null, 'GET')
    .then((res:any):void=>{
      if(res){
        let arr:any = res.val.map((item:any):any=>{
          let children:any = item.children.map((item2:any):any=>{
            return {
              text: item2.dicName,
              id: item2.id,
              pId: item2.pId
            }
          })
          children.unshift({
            text: '全部',
            id: item.id,
            pId: item.id,
          });
          return {
            text: item.dicName,
            children: children
          }
        })
        this.setData({
          industryList: arr
        })
      }
    },(err:any)=>{
      console.log(err);
    });
  },

  xmStage():void{  //所处阶段
    https.successRequest(api.submenuDic + '?moid=40', null, 'GET')
    .then((res:any):void=>{
      if(res){
        this.setData({
          xmStageList: res.val
        })
      }
    },(err:any)=>{
      console.log(err);
    });
  },
  xmCategory():void{  //需求类别
    https.successRequest(api.submenuDic + '?moid=41', null, 'GET')
    .then((res:any):void=>{
      if(res){
        this.setData({
          xmCategoryList: res.val
        })
      }
    },(err:any)=>{
      console.log(err);
    });
  },
  xmFinancing():void{  //融资金额
    https.successRequest(api.submenuDic + '?moid=55', null, 'GET')
    .then((res:any):void=>{
      if(res){
        this.setData({
          xmFinancingList: res.val
        })
      }
    },(err:any)=>{
      console.log(err);
    });
  },

  cdCarrier():void{  //资源类型
    https.successRequest(api.submenuDic + '?moid=15', null, 'GET')
    .then((res:any):void=>{
      if(res){
        this.setData({
          cdCarrierList: res.val
        })
      }
    },(err:any)=>{
      console.log(err);
    });
  },
  fwCategory():void{  //服务类别
    https.successRequest(api.submenuDic + '?moid=13', null, 'GET')
    .then((res:any):void=>{
      if(res){
        let arr:any = res.val.map((item:any):any=>{
          let children:any = item.children.map((item2:any):any=>{
            return {
              text: item2.dicName,
              id: item2.id,
              pId: item2.pId
            }
          })
          children.unshift({
            text: '全部',
            id: item.id,
            pId: item.id,
          });
          return {
            text: item.dicName,
            children: children
          }
        })
        this.setData({
          fwCategoryList: arr
        })
      }
    },(err:any)=>{
      console.log(err);
    });
  },
  fwType():void{  //单位类型
    https.successRequest(api.submenuDic + '?moid=18', null, 'GET')
    .then((res:any):void=>{
      if(res){
        this.setData({
          fwTypeList: res.val
        })
      }
    },(err:any)=>{
      console.log(err);
    });
  },
  fwScale():void{  //单位规模
    https.successRequest(api.submenuDic + '?moid=21', null, 'GET')
    .then((res:any):void=>{
      if(res){
        this.setData({
          fwScaleList: res.val
        })
      }
    },(err:any)=>{
      console.log(err);
    });
  },

  rzWay():void{  //融资方式
    https.successRequest(api.submenuDic + '?moid=58', null, 'GET')
    .then((res:any):void=>{
      if(res){
        this.setData({
          rzWayList: res.val
        })
      }
    },(err:any)=>{
      console.log(err);
    });
  },

  tzArea():void{  //投资区域
    https.successRequest(api.tenants, null, 'GET')
    .then((res:any):void=>{
      if(res){
        let list:any = res.list.map((item:any):any=>{
          return {
            dicName: item.model.cname,
            id: item.model.id
          }
        })
        this.setData({
          tzAreaList: list
        })
      }
    },(err:any)=>{
    console.log(err);
    });
  },

  tzWay():void{  //投资方式
    https.successRequest(api.submenuDic + '?moid=56', null, 'GET')
    .then((res:any):void=>{
      if(res){
        this.setData({
          tzWayList: res.val
        })
      }
    },(err:any)=>{
      console.log(err);
    });
  },

  tzOther():void{  //投资金额
    https.successRequest(api.submenuDic + '?moid=55', null, 'GET')
    .then((res:any):void=>{
      if(res){
        this.setData({
          tzOtherList: res.val
        })
      }
    },(err:any)=>{
      console.log(err);
    });
  },

  tzType():void{  //资金类型
    https.successRequest(api.submenuDic + '?moid=42', null, 'GET')
    .then((res:any):void=>{
      if(res){
        this.setData({
          tzTypeList: res.val
        })
      }
    },(err:any)=>{
      console.log(err);
    });
  },


  //搜索按钮触发
  searchBlur(event:any):void{
    this.setData({
      searchKey: event.detail.value,     //普通搜索
      pageSize: 10,                      //每页显示数量
      pageIndex: 1,                      //当前页
      total: 0,                          //总条数
      markers: [],                       //标记总数
      num: 0,                             //6找结果
      mumList: [],                        //6找列表
    })
    this.getAllPro();                     //6找全部平台统计
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
      markers: [],               //清空
      num: 0,                    //6找结果
      mumList: [],               //6找列表
      isListShow: true,          //默认显示6找内容
      isInfoShow: false,         //单条信息显示
      isSearchShow: false,       //搜索结果数据
      isSearchInfoShow: false,   //搜索列表数据
    })
  },

  hideFn():void{       //需要隐藏的元素
    this.setData({
      pageSize: 10,             //每页显示数量
      pageIndex: 1,             //当前页
      total: 0,                 //总条数

      markers: [],              //标记总数
      
      num: 0,                    //6找结果
      mumList: [],               //6找列表
      searchKey: '',             //关键字搜索

      isListShow: false,         //默认显示6找内容
      isInfoShow: false,         //单条信息显示
      isSearchShow: false,       //搜索结果数据
      isSearchInfoShow: false,   //搜索列表数据

      ptSearchInfoShow: false,    //平台全部按钮
      ptBtnShow: false,           //平台高级搜索隐藏
      proSearchInfoShow: false,   //项目高级搜索

      zjSearchInfoShow: false,   //资金全部按钮
      jrSearchInfoShow: false,   //找资金（金融服务）
      tzSearchInfoShow: false,   //找资金（找投资）
      rzSearchInfoShow: false,   //找资金（找融资）
      
      cdSearchInfoShow: false,   //场地高级搜索
      fwSearchInfoShow: false,   //服务高级搜索
    })
  },


  //找平台
  ptFn():void{                   //6找平台触发
    this.hideFn();               //需要隐藏的元素
    this.setData({
      isSearchShow: true,        //搜索结果数据
      ptSearchInfoShow: true,    //平台全部按钮
    })
    this.getAllPro();              //6找全部平台统计
  },
  getAllPro():void{               //6找全部平台统计
    https.successRequest(api.allPlatform, {
      tenantId: api.areaId,             //地区id
      key: this.data.searchKey,         //关键字搜索
      pageSize: this.data.pageSize,     //每页显示数量
      pageIndex: this.data.pageIndex,   //页数
    }, 'GET').then((res:any):void=>{
      if(res){
        //创新平台
        let cxPlatformModelsList:any = res.val.cxPlatformModels.map((item:any):any=>{
          return {
            id: item.id,
            longitude: item.lng,   //经度
            latitude: item.lat,    //纬度
            iconPath: '../../images/cx.png',             //标记
            width: 27,
            height: 35,
            callout: {
              content: item.ptName?item.ptName:'未填报',
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
            iconPath: '../../images/cy.png',             //标记
            width: 27,
            height: 35,
            callout: {
              content: item.cyName?item.cyName:'未填报',
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
        let markersList:any  = this.data.markers.concat(cxPlatformModelsList,cyPlatformModelsList);
        let newMarkersList:any = markersList.map((item:any, index:number):any=>{
          return {
            id: index,                   //map用的自定义ID
            longitude: item.longitude,   //经度
            latitude: item.latitude,     //纬度
            iconPath: item.iconPath,     //标记
            width: 27,
            height: 35,
            callout: item.callout,
            oldId: item.id,                      //原始ID
            title: item.callout.content,         //标题
            provinceName: item.provinceName,     //省
            cityName: item.cityName,             //市
            districtName: item.districtName      //区
          }
        });
        if(this.data.total == 0){
          this.setData({
            markers: newMarkersList,               //标记
            total: res.val.total,                  //总数
            mumList: newMarkersList,                //列表
          })
        }else{
          this.setData({
            markers: newMarkersList,               //标记
            mumList: newMarkersList,                //列表
          })
        }
        
        // if(this.data.markers.length < res.val.total){
        //   this.setData({
        //     pageIndex: this.data.pageIndex += 1,             //当前页
        //   })
        //   this.getAllPro();                                  //6找全部平台统计
        // }
      }
    },(err:any)=>{
      console.log(err);
    });
  },
  getCxPro():void{               //6找创新平台统计
    https.successRequest(api.cxPlatformUser, {
      tenantId: api.areaId,             //地区id
      key: this.data.searchKey,         //关键字搜索
      pageSize: this.data.pageSize,     //每页显示数量
      pageIndex: this.data.pageIndex,   //页数
      typeId: this.data.ptTypeId,       //平台类型id
      ziZhi: this.data.ptZiZhi,         //平台资质id
      cyTypeId: this.data.ptCyTypeId,   //产业id
      hyTypeId: this.data.ptHyTypeId    //行业id
    }, 'GET').then((res:any):void=>{
      if(res){
        let newMarkersList:any = res.list.map((item:any, index:number):any=>{
          return {
            id: index,                                   //map用的自定义ID
            longitude: item.lng,                         //经度
            latitude: item.lat,                          //纬度
            iconPath: '../../images/cx.png',             //标记
            width: 27,
            height: 35,
            callout: {
              content: item.ptName?item.ptName:'未填报',
              color: '#000',
              fontSize: 18,
              bgColor: '#FFF',
              padding: 5,
              borderRadius: 4,
              borderColor: '#CCC',
              borderWidth: 1,
              display: 'BYCLICK'
            },
            oldId: item.id,                                          //原始ID
            title: item.ptName?item.ptName:'未填报',                  //标题
            provinceName: item.provinceName?item.provinceName:'',     //省
            cityName: item.cityName?item.cityName:'',                 //市
            districtName: item.districtName?item.districtName:''      //区
          }
        });
        if(this.data.total == 0){
          this.setData({
            markers: newMarkersList,               //标记
            total: res.total,                  //总数
            mumList: newMarkersList,                //列表
          })
        }else{
          this.setData({
            markers: newMarkersList,               //标记
            mumList: newMarkersList,                //列表
          })
        }
        
        // if(this.data.markers.length < res.val.total){
        //   this.setData({
        //     pageIndex: this.data.pageIndex += 1,             //当前页
        //   })
        //   this.getCxPro();                                  //6找创新平台统计
        // }
      }
    },(err:any)=>{
      console.log(err);
    });
  },
  getCyPro():void{               //6找创业平台统计
    https.successRequest(api.cyPlatUser, {
      tenantId: api.areaId,             //地区id
      key: this.data.searchKey,         //关键字搜索
      pageSize: this.data.pageSize,     //每页显示数量
      pageIndex: this.data.pageIndex,   //页数
      typeId: this.data.ptTypeId,       //平台类型id
      ziZhi: this.data.ptZiZhi,         //平台资质id
      cyTypeId: this.data.ptCyTypeId,   //产业id
      hyTypeId: this.data.ptHyTypeId    //行业id
    }, 'GET').then((res:any):void=>{
      if(res){
        let newMarkersList:any = res.list.map((item:any, index:number):any=>{
          return {
            id: index,                                   //map用的自定义ID
            longitude: item.lng,                         //经度
            latitude: item.lat,                          //纬度
            iconPath: '../../images/cy.png',             //标记
            width: 27,
            height: 35,
            callout: {
              content: item.ptName?item.ptName:'未填报',
              color: '#000',
              fontSize: 18,
              bgColor: '#FFF',
              padding: 5,
              borderRadius: 4,
              borderColor: '#CCC',
              borderWidth: 1,
              display: 'BYCLICK'
            },
            oldId: item.id,                                          //原始ID
            title: item.cyName?item.cyName:'未填报',                  //标题
            provinceName: item.provinceName?item.provinceName:'',     //省
            cityName: item.cityName?item.cityName:'',                 //市
            districtName: item.districtName?item.districtName:''      //区
          }
        })
        if(this.data.total == 0){
          this.setData({
            markers: newMarkersList,               //标记
            total: res.total,                  //总数
            mumList: newMarkersList,                //列表
          })
        }else{
          this.setData({
            markers: newMarkersList,               //标记
            mumList: newMarkersList,                //列表
          })
        }
        
        // if(this.data.markers.length < res.val.total){
        //   this.setData({
        //     pageIndex: this.data.pageIndex += 1,             //当前页
        //   })
        //   this.getCyPro();                                  //6找创业平台统计
        // }
      }
    },(err:any)=>{
      console.log(err);
    });
  },
  ptBtnToggle(e:any):void{  //全部按钮状态切换
    if(e.target.dataset.num == 1){
      this.setData({  //全部
        ptBtnClass: e.target.dataset.num,
        ptBtnShow: false,          //高级搜索
        pageSize: 10,             //每页显示数量
        pageIndex: 1,             //当前页
        total: 0,                 //总条数
        markers: [],              //标记总数
        num: 0,                   //6找结果
        mumList: [],              //6找列表
        searchKey: '',            //关键字搜索
      })
      this.getAllPro();             //6找全部平台统计
    }else if(e.target.dataset.num == 2){
      this.setData({
        ptBtnClass: e.target.dataset.num,
        ptBtnShow: true,           //高级搜索
        ptTypeClass: null,
        ptTypeId: '',
        ptZiZhiClass: null,
        ptZiZhi: '',
        ptIndex: 0,                 //当前索引
        ptIndustryId: null,         //选中的id
        ptCyTypeId: '',             //产业id
        ptHyTypeId: '',             //行业id

        pageSize: 10,             //每页显示数量
        pageIndex: 1,             //当前页
        total: 0,                 //总条数
        markers: [],              //标记总数
        num: 0,                   //6找结果
        mumList: [],              //6找列表
        searchKey: '',            //关键字搜索
      })
      this.getCxPro();             //6找创新平台统计
      this.ptTypes();              //类型
      this.industry();             //产业、行业
      this.selectComponent('#ptType').toggle(false);         //平台类型展开关闭状态
      this.selectComponent('#ptZiZhi').toggle(false);        //平台资质展开关闭状态
      this.selectComponent('#ptIndustry').toggle(false);     //产业、行业展开关闭状态
    }else{
      this.setData({
        ptBtnClass: e.target.dataset.num,
        ptBtnShow: true,           //高级搜索
        ptTypeClass: null,
        ptTypeId: '',
        ptZiZhiClass: null,
        ptZiZhi: '',
        ptIndex: 0,                 //当前索引
        ptIndustryId: null,         //选中的id
        ptCyTypeId: '',             //产业id
        ptHyTypeId: '',             //行业id

        pageSize: 10,             //每页显示数量
        pageIndex: 1,             //当前页
        total: 0,                 //总条数
        markers: [],              //标记总数
        num: 0,                   //6找结果
        mumList: [],              //6找列表
        searchKey: '',            //关键字搜索
      })
      this.getCyPro();             //6找创业平台统计
      this.ptTypes();              //类型
      this.industry();             //产业、行业
      this.selectComponent('#ptType').toggle(false);         //平台类型展开关闭状态
      this.selectComponent('#ptZiZhi').toggle(false);        //平台资质展开关闭状态
      this.selectComponent('#ptIndustry').toggle(false);     //产业、行业展开关闭状态
    }
  },
  ptNavItem(data:any):void{       //行业产业（左侧导航点击时，触发的事件）
    this.setData({
      ptIndex: data.detail.index || 0,
    });
  },
  ptIndustryItem(data:any):void {  //行业产业（右侧选择项被点击时，会触发的事件）
    const id = this.data.ptIndustryId === data.detail.id ? null : data.detail.id;
    const pId = this.data.ptIndustryId === data.detail.id ? null : data.detail.id;
    this.setData({
      ptIndustryId: id,
      ptCyTypeId: id ? id : '',               //产业id
      ptHyTypeId: pId ? pId : '',             //行业id
    })
  },

  ptTypeFn(e:any):void{  //平台类型触发
    this.setData({
      ptTypeClass: e.target.dataset.id,
      ptTypeId: e.target.dataset.id
    })
  },
  ptZiZhiFn(e:any):void{  //平台资质触发
    this.setData({
      ptZiZhiClass: e.target.dataset.id,
      ptZiZhi: e.target.dataset.title
    })
  },

  ptReset(e:any):void{  //重置
    let flag:number = e.currentTarget.dataset.flag;
    if(flag == 1){  //平台类型
      this.setData({
        ptTypeClass: null,
        ptTypeId: '',
        num: 0,                    //6找结果
        mumList: [],               //6找列表
      })
      this.selectComponent('#ptType').toggle(false);         //平台类型关闭
    }else if(flag == 2){  //平台资质
      this.setData({
        ptZiZhiClass: null,
        ptZiZhi: '',
        num: 0,                    //6找结果
        mumList: [],               //6找列表
      })
      this.selectComponent('#ptZiZhi').toggle(false);        //平台资质关闭
    }else{  //产业、行业
      this.setData({
        ptIndex: 0,                 //当前索引
        ptIndustryId: null,         //选中的id
        ptCyTypeId: '',             //产业id
        ptHyTypeId: '',               //行业id
        num: 0,                    //6找结果
        mumList: [],               //6找列表
      })
      this.selectComponent('#ptIndustry').toggle(false);     //产业、行业关闭
    }
    this.getCxPro();             //6找创新平台统计
  },
  ptSubmit(e:any):void{  //完成
    let flag:number = e.currentTarget.dataset.flag;
    if(flag == 1){
      this.selectComponent('#ptType').toggle(false);         //平台类型展开关闭状态
    }else if(flag == 2){
      this.selectComponent('#ptZiZhi').toggle(false);         //平台资质展开关闭状态
    }else{
      this.selectComponent('#ptIndustry').toggle(false);     //产业、行业展开关闭状态
    }
    this.setData({
      num: 0,                    //6找结果
      mumList: [],               //6找列表
    })
    this.getCxPro();             //6找创新平台统计
  },


  //找政策（外链）
  zcFn():void{ },


  //找项目
  xmFn():void{  //找项目
    this.hideFn();             //需要隐藏的元素
    this.setData({
      isSearchShow: true,        //搜索结果数据
      proSearchInfoShow: true,   //项目高级搜索
    })
    this.getProList();           //6找项目统计
    this.xmStage();              //所处阶段
    this.xmCategory();           //需求类别
    this.xmFinancing();          //融资金额
    this.industry();             //产业、行业
  },
  getProList():void{               //6找项目统计

    https.successRequest(api.findPro, {
      tenantId: api.areaId,                 //地区id
      key: this.data.searchKey,             //关键字搜索
      pageSize: this.data.pageSize,         //每页显示数量
      pageIndex: this.data.pageIndex,       //页数
      proNeedtype: this.data.xmStageId,     //所处阶段
      needTypes: this.data.xmTypeId,        //需求类别
      tzMoney: this.data.xmTzMoney,         //融资金额
      cyTypeId: this.data.xmCyTypeId,       //产业id
      hyTypeId: this.data.xmHyTypeId        //行业id
    }, 'GET').then((res:any):void=>{
      if(res){
        let newMarkersList:any = res.list.map((item:any, index:number):any=>{
          return {
            id: index,                                   //map用的自定义ID
            longitude: item.lng,                         //经度
            latitude: item.lat,                          //纬度
            iconPath: '../../images/xm.png',             //标记
            width: 27,
            height: 35,
            callout: {
              content: item.proName?item.proName:'未填报',
              color: '#000',
              fontSize: 18,
              bgColor: '#FFF',
              padding: 5,
              borderRadius: 4,
              borderColor: '#CCC',
              borderWidth: 1,
              display: 'BYCLICK'
            },
            oldId: item.id,                                          //原始ID
            title: item.proName?item.proName:'未填报',                  //标题
            provinceName: item.provinceName?item.provinceName:'',     //省
            cityName: item.cityName?item.cityName:'',                 //市
            districtName: item.districtName?item.districtName:''      //区
          }
        })
        if(this.data.total == 0){
          this.setData({
            markers: newMarkersList,               //标记
            total: res.total,                      //总数
            mumList: newMarkersList,                //列表
          })
        }else{
          this.setData({
            markers: newMarkersList,               //标记
            mumList: newMarkersList,                //列表
          })
        }
        
        // if(this.data.markers.length < res.val.total){
        //   this.setData({
        //     pageIndex: this.data.pageIndex += 1,             //当前页
        //   })
        //   this.getCyPro();                                  //6找创业平台统计
        // }
      }
    },(err:any)=>{
      console.log(err);
    });
  },
  xmStageFn(e:any):void{  //所处阶段触发
    this.setData({
      xmStageClass: e.target.dataset.id,
      xmStageId: e.target.dataset.id
    })
  },
  xmCategoryFn(e:any):void{  //需求类别触发
    this.setData({
      xmCategoryClass: e.target.dataset.id,
      xmTypeId: e.target.dataset.id
    })
  },
  xmFinancingFn(e:any):void{  //融资金额触发
    this.setData({
      xmFinancingClass: e.target.dataset.id,
      xmTzMoney: e.target.dataset.id
    })
  },
  xmReset(e:any):void{  //项目重置
    let flag:number = e.currentTarget.dataset.flag;
    if(flag == 1){  //所处阶段
      this.setData({
        xmStageClass: null,
        xmStageId: '',
        num: 0,                    //6找结果
        mumList: [],               //6找列表
      })
      this.selectComponent('#xmStage').toggle(false);         //所处阶段关闭
    }else if(flag == 2){  //需求类别
      this.setData({
        xmCategoryClass: null,
        xmTypeId: '',
        num: 0,                    //6找结果
        mumList: [],               //6找列表
      })
      this.selectComponent('#xmCategory').toggle(false);        //需求类别关闭
    }else if(flag == 3){  //融资金额
      this.setData({
        xmFinancingClass: null,
        xmTzMoney: '',
        num: 0,                    //6找结果
        mumList: [],               //6找列表
      })
      this.selectComponent('#xmFinancing').toggle(false);        //平台资质关闭
    }else{  //产业、行业
      this.setData({
        xmIndex: 0,                 //当前索引
        xmIndustryId: null,         //选中的id
        xmCyTypeId: '',             //产业id
        xmHyTypeId: '',             //行业id
        num: 0,                     //6找结果
        mumList: [],                //6找列表
      })
      this.selectComponent('#xmIndustry').toggle(false);     //产业、行业关闭
    }
    this.getProList();             //6找项目统计
  },
  xmSubmit(e:any):void{  //项目完成
    let flag:number = e.currentTarget.dataset.flag;
    if(flag == 1){
      this.selectComponent('#xmStage').toggle(false);         //所处阶段关闭
    }else if(flag == 2){
      this.selectComponent('#xmCategory').toggle(false);        //需求类别关闭
    }else if(flag == 3){
      this.selectComponent('#xmFinancing').toggle(false);        //平台资质关闭
    }else{
      this.selectComponent('#xmIndustry').toggle(false);     //产业、行业关闭
    }
    this.setData({
      num: 0,                    //6找结果
      mumList: [],               //6找列表
    })
    this.getProList();             //6找项目统计
  },
  xmNavItem(data:any):void{  //行业产业（左侧导航点击时，触发的事件）
    this.setData({
      xmIndex: data.detail.index || 0,
    });
  },
  xmIndustryItem(data:any):void {  //行业产业（右侧选择项被点击时，会触发的事件）
    const id = this.data.xmIndustryId === data.detail.id ? null : data.detail.id;
    const pId = this.data.xmIndustryId === data.detail.id ? null : data.detail.id;
    this.setData({
      xmIndustryId: id,
      xmCyTypeId: id ? id : '',               //产业id
      xmHyTypeId: pId ? pId : '',             //行业id
    })
  },



  //找场地
  cdFn():void{  //找场地
    this.hideFn();               //需要隐藏的元素
    this.setData({
      isSearchShow: true,          //搜索结果数据
      cdSearchInfoShow: true,      //场地高级搜索
    })
    this.getSiteList();            //6找场地统计

    this.cdCarrier();              //资源类型
    this.industry();               //产业、行业
  },
  getSiteList():void{               //6找场地统计
    https.successRequest(api.cyPlatform, {
      tenantId: api.areaId,                 //地区id
      key: this.data.searchKey,             //关键字搜索
      pageSize: this.data.pageSize,         //每页显示数量
      pageIndex: this.data.pageIndex,       //页数
      ztTypeId: this.data.cdTypeId,         //载体空间类型
      isChuZu: this.data.cdChuZuId,          //是否出租
      isSale: this.data.cdSaleId,           //是否出售
      cyTypeId: this.data.cdCyTypeId,       //产业id
      hyTypeId: this.data.cdHyTypeId        //行业id
    }, 'GET').then((res:any):void=>{
      if(res){
        let newMarkersList:any = res.list.map((item:any, index:number):any=>{
          return {
            id: index,                                   //map用的自定义ID
            longitude: item.lng,                         //经度
            latitude: item.lat,                          //纬度
            iconPath: '../../images/cd.png',             //标记
            width: 27,
            height: 35,
            callout: {
              content: item.cyztName?item.cyztName:'未填报',
              color: '#000',
              fontSize: 18,
              bgColor: '#FFF',
              padding: 5,
              borderRadius: 4,
              borderColor: '#CCC',
              borderWidth: 1,
              display: 'BYCLICK'
            },
            oldId: item.id,                                          //原始ID
            title: item.cyztName?item.cyztName:'未填报',                  //标题
            provinceName: item.provinceName?item.provinceName:'',     //省
            cityName: item.cityName?item.cityName:'',                 //市
            districtName: item.districtName?item.districtName:''      //区
          }
        })
        if(this.data.total == 0){
          this.setData({
            markers: newMarkersList,               //标记
            total: res.total,                      //总数
            mumList: newMarkersList,                //列表
          })
        }else{
          this.setData({
            markers: newMarkersList,               //标记
            mumList: newMarkersList,                //列表
          })
        }
        
        // if(this.data.markers.length < res.val.total){
        //   this.setData({
        //     pageIndex: this.data.pageIndex += 1,             //当前页
        //   })
        //   this.getCyPro();                                  //6找创业平台统计
        // }
      }
    },(err:any)=>{
      console.log(err);
    });
  },
  cdTypeFn(e:any):void{  //资源类型触发
    this.setData({
      cdTypeClass: e.target.dataset.id,
      cdTypeId: e.target.dataset.id
    })
  },
  cdUseFn(e:any):void{  //场地用途触发
    let id:any = e.target.dataset.id;
    if(id == 1){  //出租
      this.setData({
        cdUserClass: id,
        cdChuZuId: '1',        //出租
        cdSaleId: '',          //出售
      })
    }else{  //出售
      this.setData({
        cdUserClass: id,
        cdChuZuId: '',         //出租
        cdSaleId: '1',         //出售
      })
    }
  },
  cdNavItem(data:any):void{       //行业产业（左侧导航点击时，触发的事件）
    this.setData({
      cdIndex: data.detail.index || 0,
    });
  },
  cdIndustryItem(data:any):void {  //行业产业（右侧选择项被点击时，会触发的事件）
    const id = this.data.cdIndustryId === data.detail.id ? null : data.detail.id;
    const pId = this.data.cdIndustryId === data.detail.id ? null : data.detail.id;
    this.setData({
      cdIndustryId: id,
      cdCyTypeId: id ? id : '',               //产业id
      cdHyTypeId: pId ? pId : '',             //行业id
    })
  },
  cdReset(e:any):void{  //找场地重置
    let flag:number = e.currentTarget.dataset.flag;
    if(flag == 1){  //资源类型
      this.setData({
        cdTypeClass: null,
        cdTypeId: '',
        num: 0,                    //6找结果
        mumList: [],               //6找列表
      })
      this.selectComponent('#cdType').toggle(false);         //资源类型关闭
    }else if(flag == 2){  //场地用途
      this.setData({
        cdUserClass: null,
        cdChuZuId: '',             //出租
        cdSaleId: '',              //出售
        num: 0,                    //6找结果
        mumList: [],               //6找列表
      })
      this.selectComponent('#cdUser').toggle(false);        //场地用途关闭
    }else{  //产业、行业
      this.setData({
        cdIndex: 0,                 //当前索引
        cdIndustryId: null,         //选中的id
        cdCyTypeId: '',             //产业id
        cdHyTypeId: '',             //行业id
        num: 0,                    //6找结果
        mumList: [],               //6找列表
      })
      this.selectComponent('#cdIndustry').toggle(false);     //产业、行业关闭
    }
    this.getSiteList();            //6找场地统计
  },
  cdSubmit(e:any):void{  //找场地完成
    let flag:number = e.currentTarget.dataset.flag;
    if(flag == 1){
      this.selectComponent('#cdType').toggle(false);         //资源类型展开关闭状态
    }else if(flag == 2){
      this.selectComponent('#cdUser').toggle(false);         //场地用途展开关闭状态
    }else{
      this.selectComponent('#cdIndustry').toggle(false);     //产业、行业展开关闭状态
    }
    this.setData({
      num: 0,                    //6找结果
      mumList: [],               //6找列表
    })
    this.getSiteList();            //6找场地统计
  },


  //找服务
  fwFn():void{
    this.hideFn();               //需要隐藏的元素
    this.setData({
      isSearchShow: true,        //搜索结果数据
      fwSearchInfoShow: true,    //服务高级搜索
    })
    this.getServiceList();       //6找服务统计
    this.fwCategory();           //服务类别
    this.fwType();               //单位类型
    this.fwScale();              //单位规模
    this.industry();             //产业、行业
  },
  getServiceList():void{         //6找服务统计
    https.successRequest(api.findFw, {
      tenantId: api.areaId,                 //地区id
      key: this.data.searchKey,             //关键字搜索
      pageSize: this.data.pageSize,         //每页显示数量
      pageIndex: this.data.pageIndex,       //页数
      typeOneId: this.data.fwTypeOneId,     //服务类别一级菜单
      typeTwoId: this.data.fwTypeTwoId,     //服务类别二级菜单
      dwStatusId: this.data.fwDwStatusId,   //单位类型id
      dwScaleId: this.data.fwDwScaleId,     //单位规模id
      cyTypeId: this.data.fwCyTypeId,       //产业id
      hyTypeId: this.data.fwHyTypeId        //行业id
    }, 'GET').then((res:any):void=>{
      if(res){
        let newMarkersList:any = res.list.map((item:any, index:number):any=>{
          return {
            id: index,                                   //map用的自定义ID
            longitude: item.lng,                         //经度
            latitude: item.lat,                          //纬度
            iconPath: '../../images/fw.png',             //标记
            width: 27,
            height: 35,
            callout: {
              content: item.qyName?item.qyName:'未填报',
              color: '#000',
              fontSize: 18,
              bgColor: '#FFF',
              padding: 5,
              borderRadius: 4,
              borderColor: '#CCC',
              borderWidth: 1,
              display: 'BYCLICK'
            },
            oldId: item.id,                                          //原始ID
            title: item.qyName?item.qyName:'未填报',                  //标题
            provinceName: item.provinceName?item.provinceName:'',     //省
            cityName: item.cityName?item.cityName:'',                 //市
            districtName: item.districtName?item.districtName:''      //区
          }
        })
        if(this.data.total == 0){
          this.setData({
            markers: newMarkersList,               //标记
            total: res.total,                      //总数
            mumList: newMarkersList,                //列表
          })
        }else{
          this.setData({
            markers: newMarkersList,               //标记
            mumList: newMarkersList,                //列表
          })
        }
        
        // if(this.data.markers.length < res.val.total){
        //   this.setData({
        //     pageIndex: this.data.pageIndex += 1,             //当前页
        //   })
        //   this.getCyPro();                                  //6找创业平台统计
        // }
      }
    },(err:any)=>{
      console.log(err);
    });
  },
  fwCategoryNavItem(data:any):void{       //服务类别（左侧导航点击时，触发的事件）
    this.setData({
      fwCategoryIndex: data.detail.index || 0,
    });
  },
  fwCategoryItem(data:any):void {  //服务类别（左侧导航点击时，触发的事件）
    const id = this.data.fwCategoryId === data.detail.id ? null : data.detail.id;
    const pId = this.data.fwCategoryId === data.detail.id ? null : data.detail.id;
    this.setData({
      fwCategoryId: id,
      fwTypeOneId: id ? id : '',               //服务类别一级菜单
      fwTypeTwoId: pId ? pId : '',             //服务类别二级菜单 
    })
  },
  fwTypeFn(e:any):void{    //单位类型触发
    let id:any = e.target.dataset.id;
    this.setData({
      fwTypeClass: id,
      fwDwStatusId: id,        //单位类型
    })
  },
  fwScaleFn(e:any):void{    //单位规模触发
    let id:any = e.target.dataset.id;
    this.setData({
      fwScaleClass: id,
      fwDwScaleId: id,        //单位规模
    })
  },
  fwNavItem(data:any):void{       //找服务行业产业（左侧导航点击时，触发的事件）
    this.setData({
      fwIndustryIndex: data.detail.index || 0,
    });
  },
  fwIndustryItem(data:any):void {  //找服务行业产业（右侧选择项被点击时，会触发的事件）
    const id = this.data.fwIndustryId === data.detail.id ? null : data.detail.id;
    const pId = this.data.fwIndustryId === data.detail.id ? null : data.detail.id;
    this.setData({
      fwIndustryId: id,
      fwCyTypeId: id ? id : '',               //产业id
      fwHyTypeId: pId ? pId : '',             //行业id
    })
  },
  fwReset(e:any):void{  //找服务重置
    let flag:number = e.currentTarget.dataset.flag;
    if(flag == 1){  //服务类别
      this.setData({
        fwCategoryIndex: 0,         //当前索引
        fwCategoryId: null,         //选中的id
        fwTypeOneId: '',            //服务类别一级菜单
        fwTypeTwoId: '',            //服务类别二级菜单
        num: 0,                     //6找结果
        mumList: [],                //6找列表
      })
      this.selectComponent('#fwCategoryId').toggle(false);         //服务类别关闭
    }else if(flag == 2){  //单位类型
      this.setData({
        fwTypeClass: null,
        fwDwStatusId: '',          //单位类型
        num: 0,                    //6找结果
        mumList: [],               //6找列表
      })
      this.selectComponent('#fwTypeId').toggle(false);        //单位类型关闭
    }else if(flag == 3){  //单位规模
      this.setData({
        fwScaleClass: null,
        fwDwScaleId: '',           //单位规模
        num: 0,                    //6找结果
        mumList: [],               //6找列表
      })
      this.selectComponent('#fwScaleId').toggle(false);        //单位规模关闭
    }else{  //产业、行业
      this.setData({
        fwIndustryIndex: 0,         //当前索引
        fwIndustryId: null,         //选中的id
        fwCyTypeId: '',             //产业id
        fwHyTypeId: '',             //行业id
        num: 0,                    //6找结果
        mumList: [],               //6找列表
      })
      this.selectComponent('#fwIndustryId').toggle(false);     //产业、行业关闭
    }
    this.getSiteList();            //6找场地统计
  },
  fwSubmit(e:any):void{  //找服务完成
    let flag:number = e.currentTarget.dataset.flag;
    if(flag == 1){
      this.selectComponent('#fwCategoryId').toggle(false);         //服务类别关闭
    }else if(flag == 2){
      this.selectComponent('#fwType').toggle(false);        //单位类型关闭
    }else if(flag == 3){
      this.selectComponent('#fwScaleId').toggle(false);        //单位规模关闭
    }else{
      this.selectComponent('#fwIndustryId').toggle(false);     //产业、行业关闭
    }
    this.setData({
      num: 0,                    //6找结果
      mumList: [],               //6找列表
    })
    this.getServiceList();       //6找服务统计
  },




  //找资金
  zjFn():void{
    this.hideFn();               //需要隐藏的元素
    this.setData({
      isSearchShow: true,        //搜索结果数据
      zjSearchInfoShow: true,    //资金全部按钮
    })
    this.getAllFundsList();       //6找服务统计
  },
  getAllFundsList(){  //找资金（全部）
    https.successRequest(api.allFund, {
      tenantId: api.areaId,                 //地区id
      key: this.data.searchKey,             //关键字搜索
      pageSize: this.data.pageSize,         //每页显示数量
      pageIndex: this.data.pageIndex,       //页数
    }, 'GET').then((res:any):void=>{
      if(res){
        //金融
        let jrjgMdoelsList:any = res.val.jrjgMdoels.map((item:any):any=>{
          return {
            id: item.id,
            longitude: item.lng,   //经度
            latitude: item.lat,    //纬度
            iconPath: '../../images/zj.png',             //标记
            width: 27,
            height: 35,
            callout: {
              content: item.qyName?item.qyName:'未填报',
              color: '#000',
              fontSize: 14,
              bgColor: '#FFF',
              padding: 5,
              borderRadius: 4,
              borderColor: '#CCC',
              borderWidth: 1,
              display: 'BYCLICK'
            },
            title: item.qyName,                   //标题
            provinceName: item.provinceName?item.provinceName:'',     //省
            cityName: item.cityName?item.cityName:'',                 //市
            districtName: item.districtName?item.districtName:''      //区
          }
        });
        
        //投资
        let tzModelsList:any = res.val.tzModels.map((item:any):any=>{
          return {
            id: item.id,
            longitude: item.lng,   //经度
            latitude: item.lat,    //纬度
            iconPath: '../../images/tz.png',             //标记
            width: 27,
            height: 35,
            callout: {
              content: item.needName?item.needName:'未填报',
              color: '#000',
              fontSize: 14,
              bgColor: '#FFF',
              padding: 5,
              borderRadius: 4,
              borderColor: '#CCC',
              borderWidth: 1,
              display: 'BYCLICK'
            },
            title: item.needName,                   //标题
            provinceName: item.provinceName?item.provinceName:'',     //省
            cityName: item.cityName?item.cityName:'',                 //市
            districtName: item.districtName?item.districtName:''      //区
          }
        });

        //融资（需求）
        let rongziNeedsList:any = res.val.rongziNeeds.map((item:any):any=>{
          return {
            id: item.id,
            longitude: item.lng,   //经度
            latitude: item.lat,    //纬度
            iconPath: '../../images/rz.png',             //标记
            width: 27,
            height: 35,
            callout: {
              content: item.needName?item.needName:'未填报',
              color: '#000',
              fontSize: 14,
              bgColor: '#FFF',
              padding: 5,
              borderRadius: 4,
              borderColor: '#CCC',
              borderWidth: 1,
              display: 'BYCLICK'
            },
            title: item.needName,                   //标题
            provinceName: item.provinceName?item.provinceName:'',     //省
            cityName: item.cityName?item.cityName:'',                 //市
            districtName: item.districtName?item.districtName:''      //区
          }
        });
        //融资（项目）
        let rongziProsList:any = res.val.rongziPros.map((item:any):any=>{
          return {
            id: item.id,
            longitude: item.lng,   //经度
            latitude: item.lat,    //纬度
            iconPath: '../../images/xm.png',             //标记
            width: 27,
            height: 35,
            callout: {
              content: item.proName?item.proName:'未填报',
              color: '#000',
              fontSize: 14,
              bgColor: '#FFF',
              padding: 5,
              borderRadius: 4,
              borderColor: '#CCC',
              borderWidth: 1,
              display: 'BYCLICK'
            },
            title: item.proName,                   //标题
            provinceName: item.provinceName?item.provinceName:'',     //省
            cityName: item.cityName?item.cityName:'',                 //市
            districtName: item.districtName?item.districtName:''      //区
          }
        });
        //处理ID为数字
        let list:any  = this.data.markers.concat(jrjgMdoelsList, tzModelsList, rongziNeedsList, rongziProsList);
        let newMarkersList:any = list.map((item:any, index:number):any=>{
          return {
            id: index,                   //map用的自定义ID
            longitude: item.longitude,   //经度
            latitude: item.latitude,     //纬度
            iconPath: item.iconPath,     //标记
            width: 27,
            height: 35,
            callout: item.callout,
            oldId: item.id,                      //原始ID
            title: item.title,                   //标题
            provinceName: item.provinceName,     //省
            cityName: item.cityName,             //市
            districtName: item.districtName      //区
          }
        });
        if(this.data.total == 0){
          this.setData({
            markers: newMarkersList,               //标记
            total: res.val.total,                  //总数
            mumList: newMarkersList,                //列表
          })
        }else{
          this.setData({
            markers: newMarkersList,               //标记
            mumList: newMarkersList,                //列表
          })
        }
        
        // if(this.data.markers.length < res.val.total){
        //   this.setData({
        //     pageIndex: this.data.pageIndex += 1,             //当前页
        //   })
        //   this.getAllPro();                                  //6找全部平台统计
        // }
      }
    },(err:any)=>{
      console.log(err);
    });
  },

  zjBtnToggle(e:any):void{  //找资金（按钮状态切换）
    if(e.target.dataset.num == 1){
      this.setData({  //全部
        zjBtnClass: e.target.dataset.num,
        jrSearchInfoShow: false,          //高级搜索（金融服务）
        tzSearchInfoShow: false,          //高级搜索（找投资）
        rzSearchInfoShow: false,          //高级搜索（找融资）
        num: 0,                     //6找结果
        mumList: [],                //6找列表
      })
      this.getAllFundsList();       //6找服务统计
    }else if(e.target.dataset.num == 2){  //金融服务
      this.setData({
        zjBtnClass: e.target.dataset.num,
        jrSearchInfoShow: true,           //高级搜索（金融服务）
        tzSearchInfoShow: false,          //高级搜索（找投资）
        rzSearchInfoShow: false,          //高级搜索（找融资）
        num: 0,                           //6找结果
        mumList: [],                      //6找列表
      })
      this.getJrList();            //找资金（金融）
      this.fwCategory();           //服务类别
      this.fwType();               //单位类型
      this.fwScale();              //单位规模
      this.industry();             //产业、行业

    }else if(e.target.dataset.num == 3){  //找投资
      this.setData({
        zjBtnClass: e.target.dataset.num,
        jrSearchInfoShow: false,          //高级搜索（金融服务）
        tzSearchInfoShow: true,           //高级搜索（找投资）
        rzSearchInfoShow: false,          //高级搜索（找融资）
        num: 0,                           //6找结果
        mumList: [],                      //6找列表
      })
      this.getTzList();                   //找资金（投资）
      this.tzArea();                      //投资区域
      this.tzWay();                       //投资方式
      this.tzOther();                     //投资金额
      this.tzType();                      //投资类型
      this.industry();                    //产业、行业
    }else{  //找融资
      this.setData({
        zjBtnClass: e.target.dataset.num,
        jrSearchInfoShow: false,          //高级搜索（金融服务）
        tzSearchInfoShow: false,          //高级搜索（找投资）
        rzSearchInfoShow: true,           //高级搜索（找融资）
        num: 0,                           //6找结果
        mumList: [],                      //6找列表
      })
      this.getRzList();                   //找资金（融资）
      this.rzWay();                       //融资方式
      this.xmStage();                     //所处阶段
      this.xmCategory();                  //需求类别
      this.xmFinancing();                 //融资金额
      this.industry();                    //产业、行业
    }
  },


  //找资金（金融服务）
  getJrList(){  //找资金（金融）
    https.successRequest(api.jinrong, {
      tenantId: api.areaId,                 //地区id
      key: this.data.searchKey,             //关键字搜索
      pageSize: this.data.pageSize,         //每页显示数量
      pageIndex: this.data.pageIndex,       //页数
      typeOneId: this.data.jrTypeOneId,     //服务类别一级菜单
      typeTwoId: this.data.jrTypeTwoId,     //服务类别二级菜单
      dwStatusId: this.data.jrDwStatusId,   //单位类型id
      dwScaleId: this.data.jrDwScaleId,     //单位规模id
      cyTypeId: this.data.jrCyTypeId,       //产业id
      hyTypeId: this.data.jrHyTypeId        //行业id
    }, 'GET').then((res:any):void=>{
      if(res){
        //金融
        let list:any =  res.list.map((item:any):any=>{
          return {
            id: item.id,                          //ID
            longitude: item.longitude,            //中心经度
            latitude: item.latitude,              //中心纬度
            title: item.qyName,                   //标题
            provinceName: item.provinceName?item.provinceName:'',     //省
            cityName: item.cityName?item.cityName:'',                 //市
            districtName: item.districtName?item.districtName:'',     //区
            markers: item.markers                                     //坐标
          }
        });
      
        this.setData({
          num: res.list.total,
          mumList: list
        })
      }
    },(err:any)=>{
      console.log(err);
    });
  },
  jrCategoryNavItem(data:any):void{       //服务类别（左侧导航点击时，触发的事件）
    this.setData({
      jrCategoryIndex: data.detail.index || 0,
    });
  },
  jrCategoryItem(data:any):void {  //服务类别（左侧导航点击时，触发的事件）
    const id = this.data.jrCategoryId === data.detail.id ? null : data.detail.id;
    const pId = this.data.jrCategoryId === data.detail.id ? null : data.detail.id;
    this.setData({
      jrCategoryId: id,
      jrTypeOneId: id ? id : '',               //服务类别一级菜单
      jrTypeTwoId: pId ? pId : '',             //服务类别二级菜单 
    })
  },
  jrTypeFn(e:any):void{    //单位类型触发
    let id:any = e.target.dataset.id;
    this.setData({
      jrTypeClass: id,
      jrDwStatusId: id,        //单位类型
    })
  },
  jrScaleFn(e:any):void{    //单位规模触发
    let id:any = e.target.dataset.id;
    this.setData({
      jrScaleClass: id,
      jrDwScaleId: id,        //单位规模
    })
  },
  jrNavItem(data:any):void{       //找服务行业产业（左侧导航点击时，触发的事件）
    this.setData({
      jrIndustryIndex: data.detail.index || 0,
    });
  },
  jrIndustryItem(data:any):void {  //找服务行业产业（右侧选择项被点击时，会触发的事件）
    const id = this.data.jrIndustryId === data.detail.id ? null : data.detail.id;
    const pId = this.data.jrIndustryId === data.detail.id ? null : data.detail.id;
    this.setData({
      jrIndustryId: id,
      jrCyTypeId: id ? id : '',               //产业id
      jrHyTypeId: pId ? pId : '',             //行业id
    })
  },
  jrReset(e:any):void{  //找服务重置
    let flag:number = e.currentTarget.dataset.flag;
    if(flag == 1){  //服务类别
      this.setData({
        jrCategoryIndex: 0,         //当前索引
        jrCategoryId: null,         //选中的id
        jrTypeOneId: '',            //服务类别一级菜单
        jrTypeTwoId: '',            //服务类别二级菜单
        num: 0,                     //6找结果
        mumList: [],                //6找列表
      })
      this.selectComponent('#jrCategoryId').toggle(false);         //服务类别关闭
    }else if(flag == 2){  //单位类型
      this.setData({
        jrTypeClass: null,
        jrDwStatusId: '',          //单位类型
        num: 0,                    //6找结果
        mumList: [],               //6找列表
      })
      this.selectComponent('#jrType').toggle(false);        //单位类型关闭
    }else if(flag == 3){  //单位规模
      this.setData({
        jrScaleClass: null,
        jrDwScaleId: '',           //单位规模
        num: 0,                    //6找结果
        mumList: [],               //6找列表
      })
      this.selectComponent('#jrScaleId').toggle(false);        //单位规模关闭
    }else{  //产业、行业
      this.setData({
        jrIndustryIndex: 0,         //当前索引
        jrIndustryId: null,         //选中的id
        jrCyTypeId: '',             //产业id
        jrHyTypeId: '',             //行业id
        num: 0,                    //6找结果
        mumList: [],               //6找列表
      })
      this.selectComponent('#jrIndustryId').toggle(false);     //产业、行业关闭
    }
    this.getJrList();            //找资金（金融）
  },
  jrSubmit(e:any):void{  //找服务完成
    let flag:number = e.currentTarget.dataset.flag;
    if(flag == 1){
      this.selectComponent('#jrCategoryId').toggle(false);         //服务类别关闭
    }else if(flag == 2){
      this.selectComponent('#jrType').toggle(false);               //单位类型关闭
    }else if(flag == 3){
      this.selectComponent('#jrScaleId').toggle(false);            //单位规模关闭
    }else{
      this.selectComponent('#jrIndustryId').toggle(false);         //产业、行业关闭
    }
    this.setData({
      num: 0,                    //6找结果
      mumList: [],               //6找列表
    })
    this.getJrList();            //找资金（金融）
  },

 
  //找资金（投资）
  getTzList(){  //找资金（投资）
    https.successRequest(api.touzi, {
      tenantId: this.data.tenantId,         //地区id
      key: this.data.searchKey,             //关键字搜索

      typeOneId: this.data.jrTypeOneId,     //服务类别一级菜单
      typeTwoId: this.data.jrTypeTwoId,     //服务类别二级菜单
      dwStatusId: this.data.jrDwStatusId,   //单位类型id
      dwScaleId: this.data.jrDwScaleId,     //单位规模id
      cyTypeId: this.data.jrCyTypeId,       //产业id
      hyTypeId: this.data.jrHyTypeId        //行业id
    }, 'GET').then((res:any):void=>{
      if(res){
        //金融
        let list:any =  res.list.map((item:any):any=>{
          return {
            id: item.id,                          //ID
            longitude: item.longitude,            //中心经度
            latitude: item.latitude,              //中心纬度
            title: item.qyName,                   //标题
            provinceName: item.provinceName?item.provinceName:'',     //省
            cityName: item.cityName?item.cityName:'',                 //市
            districtName: item.districtName?item.districtName:'',     //区
            markers: item.markers                                     //坐标
          }
        });
      
        this.setData({
          num: res.list.total,
          mumList: list
        })
      }
    },(err:any)=>{
      console.log(err);
    });
  },
  tzAreaFn(e:any):void{    //投资区域触发
    let id:any = e.target.dataset.id;
    this.setData({
      tzAreaClass: id,
      tzAreaId: id,        //投资区域ID
    })
  },
  tzWayFn(e:any):void{     //投资方式触发
    let id:any = e.target.dataset.id;
    this.setData({
      tzWayClass: id,
      tzWayId: id,         //投资方式ID
    })
  },
  tzOtherFn(e:any):void{     //投资金额触发
    let id:any = e.target.dataset.id;
    this.setData({
      tzOtherClass: id,
      tzOtherId: id,         //投资金额ID
    })
  },
  tzTypeFn(e:any):void{      //投资类型触发
    let id:any = e.target.dataset.id;
    this.setData({
      tzTypeClass: id,
      tzTypeId: id,         //投资类型ID
    })
  },
  tzNavItem(data:any):void{       //找投资行业产业（左侧导航点击时，触发的事件）
    this.setData({
      tzIndex: data.detail.index || 0,
    });
  },
  tzIndustryItem(data:any):void {  //找投资行业产业（右侧选择项被点击时，会触发的事件）
    const id = this.data.tzIndustryId === data.detail.id ? null : data.detail.id;
    const pId = this.data.tzIndustryId === data.detail.id ? null : data.detail.id;
    this.setData({
      tzIndustryId: id,
      tzCyTypeId: id ? id : '',               //产业id
      tzHyTypeId: pId ? pId : '',             //行业id
    })
  },
  tzReset(e:any):void{  //找投资重置
    let flag:number = e.currentTarget.dataset.flag;
    if(flag == 1){  //投资区域
      this.setData({
        tzAreaClass: null,
        tzAreaId: '',               //投资区域ID
        num: 0,                     //6找结果
        mumList: [],                //6找列表
      })
      this.selectComponent('#tzAreaId').toggle(false);         //投资区域关闭
    }else if(flag == 2){  //投资方式
      this.setData({
        tzWayClass: null,
        tzWayId: '',              //投资方式ID
        num: 0,                    //6找结果
        mumList: [],               //6找列表
      })
      this.selectComponent('#tzWayId').toggle(false);        //投资方式关闭
    }else if(flag == 3){  //产业行业
      this.setData({
        tzIndex: 0,                //当前索引
        tzIndustryId: null,        //选中的id
        tzCyTypeId: '',            //产业id
        tzHyTypeId: '',            //行业id
        num: 0,                    //6找结果
        mumList: [],               //6找列表
      })
      this.selectComponent('#tzIndustryId').toggle(false);        //产业行业关闭
    }else{  //更多
      this.setData({
        tzOtherClass: null,
        tzOtherId: '',             //投资金额ID
        tzTypeClass: null,
        tzTypeId: '',              //投资类型ID
        num: 0,                    //6找结果
        mumList: [],               //6找列表
      })
      this.selectComponent('#tzMoreId').toggle(false);     ///更多关闭
    }
    this.getTzList();            //找资金（金融
  },
  tzSubmit(e:any):void{  //找投资完成
    let flag:number = e.currentTarget.dataset.flag;
    if(flag == 1){
      this.selectComponent('#tzAreaId').toggle(false);         //投资区域关闭
    }else if(flag == 2){
      this.selectComponent('#tzWayId').toggle(false);          //投资方式关闭
    }else if(flag == 3){
      this.selectComponent('#tzIndustryId').toggle(false);      //产业行业关闭
    }else{
      this.selectComponent('#tzMoreId').toggle(false);          ///更多关闭
    }
    this.setData({
      num: 0,                    //6找结果
      mumList: [],               //6找列表
    })
    this.getTzList();            //找资金（金融
  },



  //找资金（融资）
  getRzList(){  //找资金（融资）
    https.successRequest(api.rongzi, {
      tenantId: this.data.tenantId,         //地区id
      key: this.data.searchKey,             //关键字搜索

      needTypes: this.data.rzCategoryId,    //需求类别
      curStage: this.data.rzStageId,        //所处阶段
      rzWay: this.data.rzWayId,             //融资方式
      rzMoney: this.data.rzFinancingId,     //融资金额
      cyTypeId: this.data.rzCyTypeId,       //产业id
      hyTypeId: this.data.rzHyTypeId        //行业id
    }, 'GET').then((res:any):void=>{
      console.log(res)
      if(res){
        //金融
        let list:any =  res.list.map((item:any):any=>{
          return {
            id: item.id,                          //ID
            longitude: item.longitude,            //中心经度
            latitude: item.latitude,              //中心纬度
            title: item.qyName,                   //标题
            provinceName: item.provinceName?item.provinceName:'',     //省
            cityName: item.cityName?item.cityName:'',                 //市
            districtName: item.districtName?item.districtName:'',     //区
            markers: item.markers                                     //坐标
          }
        });
      
        this.setData({
          num: res.list.total,
          mumList: list
        })
      }
    },(err:any)=>{
      console.log(err);
    });
  },
  rzCategoryFn(e:any):void{     //需求类别触发
    let id:any = e.target.dataset.id;
    this.setData({
      rzCategoryClass: id,
      rzCategoryId: id,         //需求类别ID
    })
  },
  rzStageFn(e:any):void{     //所处阶段触发
    let id:any = e.target.dataset.id;
    this.setData({
      rzStageClass: id,
      rzStageId: id,         //所处阶段ID
    })
  },
  rzWayFn(e:any):void{      //融资方式触发
    let id:any = e.target.dataset.id;
    this.setData({
      rzWayClass: id,
      rzWayId: id,         //融资方式ID
    })
  },
  rzFinancingFn(e:any):void{     //融资金额触发
    let id:any = e.target.dataset.id;
    this.setData({
      rzFinancingClass: id,
      rzFinancingId: id,         //融资金额ID
    })
  },
  rzNavItem(data:any):void{       //找融资行业产业（左侧导航点击时，触发的事件）
    this.setData({
      rzIndex: data.detail.index || 0,
    });
  },
  rzIndustryItem(data:any):void {  //找融资行业产业（右侧选择项被点击时，会触发的事件）
    const id = this.data.rzIndustryId === data.detail.id ? null : data.detail.id;
    const pId = this.data.rzIndustryId === data.detail.id ? null : data.detail.id;
    this.setData({
      rzIndustryId: id,
      rzCyTypeId: id ? id : '',               //产业id
      rzHyTypeId: pId ? pId : '',             //行业id
    })
  },
  rzReset(e:any):void{  //找融资重置
    let flag:number = e.currentTarget.dataset.flag;
    if(flag == 1){  //找融资需求类别
      this.setData({
        rzCategoryClass: null,
        rzCategoryId: '',           //找融资需求类别ID
        num: 0,                     //6找结果
        mumList: [],                //6找列表
      })
      this.selectComponent('#rzCategoryId').toggle(false);         //找融资需求类别关闭
    }else if(flag == 2){  //找融资所处阶段
      this.setData({
        rzStageClass: null,
        rzStageId: '',             //找融资所处阶段ID
        num: 0,                    //6找结果
        mumList: [],               //6找列表
      })
      this.selectComponent('#rzStageId').toggle(false);        //找融资所处阶段关闭
    }else if(flag == 3){  //产业行业
      this.setData({
        rzIndex: 0,                //当前索引
        rzIndustryId: null,        //选中的id
        rzCyTypeId: '',            //产业id
        rzHyTypeId: '',            //行业id
        num: 0,                    //6找结果
        mumList: [],               //6找列表
      })
      this.selectComponent('#rzIndustryId').toggle(false);        //产业行业关闭
    }else{  //更多
      this.setData({
        rzWayClass: null,
        rzWayId: '',               //投资金额ID
        rzFinancingClass: null,
        rzFinancingId: '',         //投资类型ID
        num: 0,                    //6找结果
        mumList: [],               //6找列表
      })
      this.selectComponent('#rzMoreId').toggle(false);     ///更多关闭
    }
    this.getRzList();            //找资金（融资)
  },
  rzSubmit(e:any):void{  //找融资完成
    let flag:number = e.currentTarget.dataset.flag;
    if(flag == 1){
      this.selectComponent('#rzCategoryId').toggle(false);         //找融资需求类别关闭
    }else if(flag == 2){
      this.selectComponent('#rzStageId').toggle(false);        //找融资所处阶段关闭
    }else if(flag == 3){
      this.selectComponent('#rzIndustryId').toggle(false);        //产业行业关闭
    }else{
      this.selectComponent('#rzMoreId').toggle(false);          ///更多关闭
    }
    this.setData({
      num: 0,                    //6找结果
      mumList: [],               //6找列表
    })
    this.getRzList();            //找资金（融资)
  },

  

  //路线导航
  navigation(e:any):void{
    if(!!e.currentTarget.dataset.longitude){  //处理6找列表导航
      let title:string = e.currentTarget.dataset.title;
      let longitude:any = e.currentTarget.dataset.longitude;
      let latitude:any = e.currentTarget.dataset.latitude;
      this.setData({
        goName: title,
        goLongitude: longitude,
        goLatitude: latitude
     })
    }

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
      //切换区的操作
      if(api.areaName){
        this.setData({
          pageSize: 10,               //每页显示数量
          pageIndex: 1,               //当前页
          total: 0,                   //总条数
          markers: [],                //清空

          areaName: api.areaName,
          areaId: api.areaId,
          longitude: api.longitude,    //中心经度
          latitude: api.latitude       //中心纬度
        })
        //this.getMark();               //获取地图标点
      }else{
        //第一次进入获取当前位置
        wx.getLocation({
          type: 'wgs84',
          success:(res:any):void=>{
            this.setData({
              pageSize: 10,               //每页显示数量
              pageIndex: 1,               //当前页
              total: 0,                   //总条数
              markers: [],                //清空

              longitude: res.longitude,    //中心经度
              latitude: res.latitude       //中心纬度 
            })
            this.getAreaList();               //获取青岛所有区
          }
        });
      }
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
    https.successRequest(api.all,{
      tenantId: api.areaId,                     //区ID
      pageSize: this.data.pageSize,             //每页显示数量
      pageIndex: this.data.pageIndex,           //页数
    }, 'GET').then((res:any):void=>{
      if(res){
        //创新平台
        let cxPlatformModelsList:any = res.val.cxPlatformModels.map((item:any):any=>{
          return {
            id: item.id,
            longitude: item.lng,   //经度
            latitude: item.lat,    //纬度
            iconPath: '../../images/cx.png',             //标记
            width: 27,
            height: 35,
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
            iconPath: '../../images/cy.png',             //标记
            width: 27,
            height: 35,
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
            iconPath: '../../images/xm.png',             //标记
            width: 27,
            height: 35,
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
            iconPath: '../../images/fw.png',             //标记
            width: 27,
            height: 35,
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
            iconPath: '../../images/cd.png',             //标记
            width: 27,
            height: 35,
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
            iconPath: '../../images/zj.png',             //标记
            width: 27,
            height: 35,
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
            iconPath: '../../images/tz.png',             //标记
            width: 27,
            height: 35,
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
            iconPath: '../../images/rz.png',             //标记
            width: 27,
            height: 35,
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
            iconPath: '../../images/rz.png',             //标记
            width: 27,
            height: 35,
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
            iconPath: item.iconPath,     //标记
            width: 27,
            height: 35,
            callout: item.callout,
            oldId: item.id,                      //原始ID
            title: item.callout.content,         //标题
            provinceName: item.provinceName,     //省
            cityName: item.cityName,             //市
            districtName: item.districtName      //区
          }
        });
        if(this.data.total == 0){
          this.setData({
            markers: newMarkersList,
            total: res.val.total         //总数
          })
        }else{
          this.setData({
            markers: newMarkersList
          })
        }
        
        // if(this.data.markers.length < res.val.total){
        //   this.setData({
        //     pageIndex: this.data.pageIndex += 1,             //当前页
        //   })
        //   this.getMark();     //获取地图标点
        // }
      }
    },(err:any)=>{
      console.log(err);
    });
  },

  //获取市区
  getAreaList():void{
    https.successRequest(api.tenants, null, 'GET').then((res:any):void=>{
      if(res){
        let list:any = res.list.map((item:any):any=>{
          return {
            id: item.model.id,
            title: item.model.cname
          }
        })
        let newList:any = [];
        list.forEach((item:any):void=>{
          if(item.title == '李沧区'){
            newList.push({
              id: item.id,
              title: item.title,
              longitude: '120.439601',      //中心经度
              latitude: '36.151586',        //中心纬度
            })
          }
          if(item.title == '市北区'){
            newList.push({
              id: item.id,
              title: item.title,
              longitude: '120.380385',          //中心经度
              latitude: '36.093512',            //中心纬度
            })
          }
          if(item.title == '西海岸新区'){
            newList.push({
              id: item.id,
              title: item.title,
              longitude: '120.20446',          //中心经度
              latitude: '35.966251',           //中心纬度
            })
          }
          if(item.title == '市南区'){
            newList.push({
              id: item.id,
              title: item.title,
              longitude: '120.419487',         //中心经度
              latitude: '36.080924',           //中心纬度
            })
          }
          if(item.title == '崂山区'){
            newList.push({
              id: item.id,
              title: item.title,
              longitude: '120.475533',         //中心经度
              latitude: '36.113575',           //中心纬度
            })
          }
          if(item.title == '城阳区'){
            newList.push({
              id: item.id,
              title: item.title,
              longitude: '120.403094',         //中心经度
              latitude: '36.312985',           //中心纬度
            })
          }
          if(item.title == '即墨区'){
            newList.push({
              id: item.id,
              title: item.title,
              longitude: '120.453974',         //中心经度
              latitude: '36.395534',           //中心纬度
            })
          }
          if(item.title == '胶州市'){
            newList.push({
              id: item.id,
              title: item.title,
              longitude: '120.039172',          //中心经度
              latitude: '36.270863',            //中心纬度
            })
          }
          if(item.title == '平度市'){
            newList.push({
              id: item.id,
              title: item.title,
              longitude: '119.993754',          //中心经度
              latitude: '36.782908',           //中心纬度
            })
          }
          if(item.title == '莱西市'){
            newList.push({
              id: item.id,
              title: item.title,
              longitude: '120.526126',          //中心经度
              latitude: '36.894743',           //中心纬度
            })
          }
          if(item.title == '高新区'){
            newList.push({
              id: item.id,
              title: item.title,
              longitude: '120.284476',          //中心经度
              latitude: '36.272367',           //中心纬度
            })
          }
          if(item.title == '青岛蓝谷'){
            newList.push({
              id: item.id,
              title: item.title,
              longitude: '120.683445',          //中心经度
              latitude: '36.353411',           //中心纬度
            })
          }
        })
        this.setData({
          areaList: newList
        })
        this.getArea();         //获取当前位置所在区
      }
    },(err:any)=>{
    console.log(err);
    });
  },

  getArea():void{  //获取当前位置所在区
    let qqmapsdk:any = new QQMapWX({
      key: api.mapApiKey
    })
    qqmapsdk.reverseGeocoder({
      location: this.data.latitude + ',' + this.data.longitude,
      success:(res:any):void=>{
        let areaName:string = res.result.address_component.district;
        this.data.areaList.forEach((item:any)=>{
          if(item.title == areaName){
            //全局变量
            api.areaName = areaName;   //区名
            api.areaId = item.id;      //区ID
            api.longitude = item.longitude,    //中心经度
            api.latitude = item.latitude       //中心纬度
            //当前页变量（切换地图显示区域）
            this.setData({
              areaName: api.areaName,
              areaId: api.areaId,
              longitude: api.longitude,    //中心经度
              latitude: api.latitude       //中心纬度
            });
            if(api.indexFlag == 'pt'){         //首页找平台进入
              this.ptFn();
            }else if(api.indexFlag == 'xm'){   //首页找政策进入
              this.xmFn();
            }else if(api.indexFlag == 'zj'){   //首页找资金进入
              this.zjFn();
            }else if(api.indexFlag == 'cd'){   //首页找场地进入
              this.cdFn();
            }else if(api.indexFlag == 'fw'){   //首页找服务进入
              this.fwFn();
            }else{                      
              //this.getMark();  //获取地图标点
            }
          }
        })
      }
    })
  },


  //页面初始化
  onLoad(){
    //页面标题
    wx.setNavigationBarTitle({     
      title: "人才创新创业平台地图"
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
    api.indexFlag = '';     //首页6找判断

    api.areaName = '';      //清空全局位置名称
    api.areaId = '';        //清空全局位置ID
    api.longitude = '';     //中心经度
    api.latitude = '';      //中心纬度

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
