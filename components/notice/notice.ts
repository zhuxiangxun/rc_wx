// moving.ts
const api = getApp().globalData;  // 获取应用实例
let https  = require('../../utils/myRequest.js');     //获取ajax方法


Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    imgUrl: '',    //服务器
    listData:[],   //列表数据
    total: 0,      //总数
    pageIndex: 1,  //页数
    pageSize: 10,  //数量
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //获取数据
    getList(id:number):void{
      let url:string = api.notice + '?ncolumnId=' + id + '&pageIndex=' + this.data.pageIndex + '&pageSize=' + this.data.pageSize;
      https.request(url, null, 'GET')
      .then((res:any):void=>{
        this.setData({
          imgUrl: api.imgUrl,
          total: res.total,
          listData: res.list
        });
      },(err:any)=>{
        console.log(err);
      });
    }
  }
})
export {};
