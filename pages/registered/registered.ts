// registered.ts

Page({
  //页面数据
  data: {
    tabActive: 'jg',         //注册tab
    jgFileList: [],          //机构上传附件
    unitType: [               //单位类型
      { text: '选择类型', value: 0 },
      { text: '新款商品', value: 1 },
      { text: '活动商品', value: 2 },
    ],
    formDate:{  //表单
      value: '',
      radio: '1',
    },
    formRrror:{  //验证
      
    },
    verification: false,    //验证判断
  },


  onTabChange():void{  //tab切换触发

  },

  jgAfterRead(event:any):void {
    const { file }:any = event.detail;
    // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
    wx.uploadFile({
      url: 'https://example.weixin.qq.com/upload', // 仅为示例，非真实的接口地址
      filePath: file.path,
      name: 'file',
      formData: { user: 'test' },
      success() {
        // 上传完成需要更新 fileList
        
      },
    });
  },


  //页面初始化
  onLoad(){
    //页面标题
    wx.setNavigationBarTitle({     
      title: "注册"
    });
  },

  //页面渲染完成
  onReady(){},

  //页面显示
  onShow(){},

  //页面隐藏
  onHide(){},

  //页面关闭
  onUnload(){}
})
export {};
