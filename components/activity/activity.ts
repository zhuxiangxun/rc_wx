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
    newsInfo(e:any):void{
      wx.navigateTo({
        url:'../newsInfo/newsInfo?id=' + e.currentTarget.dataset.id
      })
    }
  }
})
export {};