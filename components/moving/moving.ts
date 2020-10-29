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
    moreName: '',  //加载更多字段
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
      let url:string = api.circle + '?ncolumnId=' + id + '&pageIndex=' + this.data.pageIndex + '&pageSize=' + this.data.pageSize;
      https.request(url, null, 'GET')
      .then((res:any):void=>{
        console.log(this.data.listData.length)
        if(this.data.listData.length < res.total){
          this.setData({
            moreName: '下拉加载更多',
            imgUrl: api.imgUrl,
            total: res.total,
            listData: this.data.listData.concat(res.list)
          });
        }else{
          this.setData({
            moreName: '已加载全部'
          });
        }
        
      },(err:any)=>{
        console.log(err);
      });
    }
  }
})
export {};