// activity.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    listData:Array,
    imgUrl:String,
    moreTitle:String,
    moreShow:Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onMoreBtn():void{  //调用父组件方法
      console.log(111)
      this.triggerEvent('moreBtn');
    },
    newsInfo(e:any):void{  //详情
      wx.navigateTo({
        url:'../newsInfo/newsInfo?id=' + e.currentTarget.dataset.id
      })
    }
  }
})
export {};