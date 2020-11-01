// news.ts
const api = getApp().globalData;                      // 获取应用实例
let https  = require('../../utils/myRequest.js');     //获取ajax方法

Page({
  //页面数据
  data: {
    total: 0,          //总数
    pageIndex: 1,      //条数
    pageSize: 10,       //页码

    imgUrl: '',        //获取图片服务器

    tabFlag: '',       //tab切换
    moreShow: false,    //加载更多状态
    listData: [],      //列表
    moreTitle: '暂无数据',     //加载更多

    movindId: '',      //动态ID
    noticeId: '',      //公告ID
    activityId: '',    //活动ID
  },

  //点击加载更多
  onMoreBtn():void{
    this.setData({
      moreShow: false
    })
    if(this.data.tabFlag == "gonggao"){   //公告
      if(this.data.listData.length < this.data.total){
        this.getTz();
      }else{
        this.setData({
          moreShow: true
        })
      }
    }else if(this.data.tabFlag == "huodong"){   //活动
      if(this.data.listData.length < this.data.total){
        this.getHd();
      }else{
        this.setData({
          moreShow: true,
          moreTitle: '已加载全部',     //加载更多
        })
      }
    }else{   //动态
      if(this.data.listData.length < this.data.total){
        this.getPt();
      }else{
        this.setData({
          moreShow: true,
          moreTitle: '已加载全部',     //加载更多
        })
      }
    } 
    
  },


  //获取平台动态
  getPt():void{
    let url:string = api.activity + '?ncolumnId=' + this.data.movindId + '&pageIndex=' + this.data.pageIndex + '&pageSize=' + this.data.pageSize;
    https.request(url, null, 'GET').then((res:any):void=>{
      this.setData({
        imgUrl: api.imgUrl + '?filePath=',
        total: res.total,
        listData: this.data.listData.concat(res.list)
      });
      if(this.data.listData.length < res.total){
        this.setData({
          moreShow: true,
          moreTitle: '点击加载更多',     //加载更多
        });
      }else{
        this.setData({
          moreShow: true,
          moreTitle: '已加载全部',     //加载更多
        });
      }
    },(err:any)=>{
      console.log(err);
    });
  },

  //获取通知公告
  getTz():void{
    let url:string = api.notice + '?ncolumnId=' + this.data.noticeId + '&pageIndex=' + this.data.pageIndex + '&pageSize=' + this.data.pageSize;
    https.request(url, null, 'GET').then((res:any):void=>{
      this.setData({
        imgUrl: api.imgUrl + '?filePath=',
        total: res.total,
        listData: this.data.listData.concat(res.list)
      });
      if(this.data.listData.length < res.total){
        this.setData({
          moreShow: true,
          moreTitle: '点击加载更多',     //加载更多
        });
      }else{
        this.setData({
          moreShow: true,
          moreTitle: '已加载全部',     //加载更多
        });
      }
    },(err:any)=>{
      console.log(err);
    });
  },
  
  //获取活动信息
  getHd():void{
    let url:string = api.activity + '?ncolumnId=' + this.data.activityId + '&pageIndex=' + this.data.pageIndex + '&pageSize=' + this.data.pageSize;
    https.request(url, null, 'GET').then((res:any):void=>{
      this.setData({
        imgUrl: api.imgUrl + '?filePath=',
        total: res.total,
        listData: this.data.listData.concat(res.list)
      });
      if(this.data.listData.length < res.total){
        this.setData({
          moreShow: true,
          moreTitle: '点击加载更多',     //加载更多
        });
      }else{
        this.setData({
          moreShow: true,
          moreTitle: '已加载全部',     //加载更多
        });
      }
    },(err:any)=>{
      console.log(err);
    });
  },


  //tab标签切换时触发
  tabFn(res:any):void{
    this.setData({
      tabFlag: res.detail.name,      //tab切换状态
      total: 0,          //总数
      pageIndex: 1,      //条数
      pageSize: 10,       //页码
      listData: [],      //列表
      moreTitle: '暂无数据',     //加载更多
    })

    if(res.detail.name == 'dongtai'){    //平台动态
      this.getPt();
    }
    if(res.detail.name == 'gonggao'){    //通知公告
      this.getTz();
    }
    if(res.detail.name == 'huodong'){    //活动信息
      this.getHd();
    }
  },
 
  //获取字典表
  getDic():void{
    https.request(api.submenuDic + '?moid=70', null, 'GET')
    .then((res:any):void=>{
      let arr:any[] = res.val;
      arr.forEach((item:any):void=>{
        if(item.dicName == "平台动态"){
          this.setData({
            tabFlag: '',      //tab切换状态
            movindId: item.id
          })
          this.getPt();
        }else if(item.dicName == "通知公告"){
          this.setData({
            tabFlag: '',      //tab切换状态
            noticeId: item.id
          })
        }else if(item.dicName == "活动信息"){
          this.setData({
            tabFlag: '',      //tab切换状态
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
    this.getDic();  //获取字典表
    wx.setNavigationBarTitle({     
      title: "动态"
    });
  },

  //页面显示
  onShow(){
    
  },

  //页面渲染完成
  onReady(){},

  //页面隐藏
  onHide(){},

  //页面关闭
  onUnload(){}
})

export {};
