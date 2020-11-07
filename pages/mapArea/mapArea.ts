// mapArea.ts
const api = getApp().globalData;  // 获取应用实例
let https  = require('../../utils/myRequest.js');  //获取ajax方法

Page({
  //页面数据
  data: {
    areaClass: null,     //选中状态
    areaList: []         //区
  },

  areaFn(e:any):void{  //点击区时触发
    api.areaId = e.target.dataset.id;               //区ID
    api.areaName = e.target.dataset.title;          //区名
    api.longitude = e.target.dataset.longitude;     //中心经度
    api.latitude = e.target.dataset.latitude;       //中心纬度
    wx.switchTab({ 
      url:'../map/map'
    });
  },

  //获取市区
  getArea():void{
    https.request(api.tenants, null, 'GET')
    .then((res:any):void=>{
      if(res){
        let list:any = res.list.map((item:any):any=>{
          return {
            id: item.id,
            title: item.cname
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
              latitude: '36.353411',            //中心纬度
            })
          }
          if(item.title == '青岛市'){
            newList.unshift({
              id: item.id,
              title: item.title,
              longitude: '120.389458',          //中心经度
              latitude: '36.07316',             //中心纬度
            })
          }
        })

        this.setData({
          areaList: newList
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
      title: "选择市区"
    });
    this.getArea();  //获取市区
  },

  //页面显示
  onShow(){},

  //页面渲染完成
  onReady(){},

  //页面隐藏
  onHide(){},

  //页面关闭
  onUnload(){}
})
export {};
