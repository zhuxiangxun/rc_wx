// registered.ts
let Dialog = require('../../miniprogram_npm/@vant/weapp/dialog/dialog.js').default;
const api = getApp().globalData;  // 获取应用实例
let https  = require('../../utils/myRequest.js');     //获取ajax方法

Page({
  //页面数据
  data: {
    tabActive: 'jg',         //注册tab

    qydanweiList: [],        //单位类型

    //机构注册
    jgFileList: [],          //机构上传附件
    jgRepeatPassword: '',    //机构确认密码
    jgPasswordError: '',     //机构确认密码
    unitType: [              //单位类型
      { text: '选择类型', value: 0 },
      { text: '新款商品', value: 1 },
      { text: '活动商品', value: 2 },
    ],
    jgFormDate:{  //机构表单
      shxyCode: '',           //统一社会信用代码
      shxypics: [],           //统一社会信用代码扫描件上传
      password: '',           //密码
      trueword: '',           //确认密码
      qyName: '',             //单位名称
      qyNatureId: '',         //单位类型
    },
    jgFormRrror:{  //机构验证
      shxyCodeError: '',      //统一社会信用代码
      shxypicsError: '',      //统一社会信用代码扫描件上传
      passwordError: '',      //密码
      truewordError: '',      //确认密码
      qyNameError: '',        //单位名称
      qyNatureIdError: '',    //单位类型
    },
    jgVerification: false,    //验证判断


    //个人验证
    grFormDate:{  //机构表单
      
    },
    grFormRrror:{  //机构验证
      
    },
    grVerification: false,    //验证判断
  },

  getDanweiList():void{  //获取单位类型
    https.request(api.submenuDic + '?moid=14', null, 'GET')
    .then((res:any):void=>{
      let list:any = res.val.map((item:any):any=>{
        return {
          text: item.dicName,
          value: item.id
        }
      })
      this.setData({
        qydanweiList: list
      })
    },(err:any)=>{
      console.log(err);
    });
  },


  onTabChange():void{  //tab切换触发

  },


  //机构注册
  jgShxyCodeInput(value:any):void{  //统一社会信用代码
    let reg:any = /^[^_IOZSVa-z\W]{2}\d{6}[^_IOZSVa-z\W]{10}$/g;
    let str:Boolean = reg.test(value.detail);
    if(value.detail){
      if(str){
        this.setData({
          ["jgFormRrror.shxyCodeError"]: '',
          ["jgFormDate.shxyCode"]: value.detail,
          jgVerification: true
        })
      }else{
        this.setData({
          ["jgFormRrror.shxyCodeError"]: '请输入正确统一社会信用代码',
          ["jgFormDate.shxyCode"]: value.detail,
          jgVerification: false
        })
      }
    }else{
      this.setData({
        ["jgFormRrror.shxyCodeError"]: '',
        ["jgFormDate.shxyCode"]: value.detail,
        jgVerification: false
      })
    }
  },
  jgAfterRead(event:any):void {             //统一社会信用代码扫描件上传
    let _that:any = this;
    const { file }:any = event.detail;
    let token:string = wx.getStorageSync('token');
    wx.uploadFile({
      url: api.fileUrl + '?token=' + token,
      filePath: file.path,
      name: 'files',
      formData: { 
        filePath: file.path,
        fileName: ''
      },success(res:any) {
        let file:any = JSON.parse(res.data);
        let fileList:any = file.val.map((item:any):any=>{
          return {
            name: item.fileName,
            url: api.imgUrl + '?token=' + token + '&filePath=' + item.filePath,
          }
        })
        _that.setData({
          jgFileList: fileList,                      //显示
          ["jgFormDate.shxypics"]: file.val,         //提交
          ["jgFormRrror.shxypicsError"]: '',
          jgVerification: true
        })
      },
    });
  },
  jgDelete():void{  //统一社会信用代码扫描件上传删除
    this.setData({
      jgFileList: [],                   //清空上传显示列表
      ["jgFormDate.shxypics"]: [],      //清空上传列表
      ["jgFormRrror.shxypicsError"]: '请上传统一社会信用代码扫描件',
        jgVerification: false
    })
  },
  jgPasswordInput(value:any):void{  //密码
    let reg:any = /(?=.*([a-zA-Z].*))(?=.*[0-9].*)[a-zA-Z0-9-*/+.~!@#$%^&*()]{6,20}$/;
    let str:Boolean = reg.test(value.detail);
    if(value.detail){
      if(str){
        this.setData({
          ["jgFormRrror.passwordError"]: '',
          ["jgFormDate.password"]: value.detail,
          jgVerification: true
        })
      }else{
        this.setData({
          ["jgFormRrror.passwordError"]: '数字、英文、字符两种及以上6-20位',
          ["jgFormDate.password"]: value.detail,
          jgVerification: false
        })
      }
    }else{
      this.setData({
        ["jgFormRrror.passwordError"]: '',
        ["jgFormDate.password"]: value.detail,
        jgVerification: false
      })
    }
  },
  jgRepeatPasswordInput(value:any):void{  //确认密码
    if(value.detail){
      if(value.detail != this.data.jgFormDate.password){
        this.setData({
          ["jgFormRrror.truewordError"]: '两次输入的密码不一致',
          ["jgFormDate.trueword"]: value.detail,
          jgVerification: true
        })
      }else{
        this.setData({
          ["jgFormRrror.truewordError"]: '',
          ["jgFormDate.trueword"]: value.detail,
          jgVerification: false
        })
      }
    }else{
      this.setData({
        ["jgFormRrror.truewordError"]: '',
        ["jgFormDate.trueword"]: value.detail,
        jgVerification: false
      })
    }
  },
  jgQyNameInput(value:any):void{  //单位名称
    if(value.detail){
      this.setData({
        ["jgFormRrror.qyNameError"]: '',
        ["jgFormDate.qyName"]: value.detail,
        jgVerification: true
      })
    }
  },
  jgDanweiFn(value:any):void{  //单位类型
    this.setData({
      ["jgFormRrror.qyNatureIdError"]: '',
      ["jgFormDate.qyNatureId"]: value.detail,
      jgVerification: true
    })
  },

  jgSubmitFn():void{  //机构注册
    //请输入统一社会信用代码
    if(this.data.jgFormDate.shxyCode == ''){
      this.setData({
        ["jgFormRrror.shxyCodeError"]:'请输入统一社会信用代码',
        jgVerification: false
      })
    }
    //统一社会信用代码扫描件上传
    if(this.data.jgFormDate.shxypics.length == 0){
      this.setData({
        ["jgFormRrror.shxypicsError"]:'请上传统一社会信用代码扫描件',
        jgVerification: false
      })
    }
    //密码
    if(this.data.jgFormDate.password == ''){
      this.setData({
        ["jgFormRrror.passwordError"]:'请输入密码',
        jgVerification: false
      })
    }
    //确认密码
    if(this.data.jgFormDate.trueword == ''){
      this.setData({
        ["jgFormRrror.truewordError"]:'请再次确认密码',
        jgVerification: false
      })
    }
    //单位名称
    if(this.data.jgFormDate.qyName == ''){
      this.setData({
        ["jgFormRrror.qyNameError"]:'请输入单位名称',
        jgVerification: false
      })
    }
    //单位类型
    if(this.data.jgFormDate.qyNatureId == ''){
      this.setData({
        ["jgFormRrror.qyNatureIdError"]:'请选择单位类型',
        jgVerification: false
      })
    }
  },





  //个人注册






  //我已阅读并接受应用使用协议
  noticeFn():void{
    Dialog.alert({
      title: '注册须知',
      messageAlign: 'left',
      message: '1.本站采用实名认证，申请人须确保填写信息的真实、完整、有效。信息填写不真实、不完整等将导致注册无法审核通过。本站确保用户信息的安全性和保密性并为之负责。\n2.遵守中华人民共和国法律法令和其他相关法规，严禁发布破坏宪法和法律、法规的信息。\n3.遵守公安部关于《计算机信息网络国际联网安全保护管理办法》的规定，自觉维护计算机信息网络的安全。\n4.严禁在网上宣扬封建迷信、淫秽、色情、暴力、赌博、欺诈等不正当行为。\n5.单位或个人发布的信息要真实有效、准确完整，并不得有引人误解或者虚假的陈述。\n6.用户注册成功后，请妥善保管您的用户名和密码。',
    }).then(() => {
      // on close
    });
  },


  //页面初始化
  onLoad(){
    //页面标题
    wx.setNavigationBarTitle({     
      title: "注册"
    });
    //获取单位类型
    this.getDanweiList();
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
