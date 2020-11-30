// zhUser.ts
let Dialog = require('../../miniprogram_npm/@vant/weapp/dialog/dialog.js').default;
let Toast = require('../../miniprogram_npm/@vant/weapp/toast/toast.js').default;
const api = getApp().globalData;  // 获取应用实例
let https  = require('../../utils/myRequest.js');     //获取ajax方法

Page({
  //页面数据
  data: {
    tabActive: 'jg',                //注册tab

    jgLink: '',                      //机构联系电话*显示
    jgVerifyCodeTime: '获取验证码',  //获取验证码
    jgDisabled: false,              //验证码按钮状态

    //机构注册
    jgFormDate:{  //机构表单
      id: '',                       //用户id 
      shxyCode: '',                 //统一社会信用代码
      linkTel: '',                  //联系人电话
      verifyCode: '',               //验证码
    },
    jgFormRrror:{  //机构验证
      shxyCodeError: '',            //统一社会信用代码
      linkTelError: '',             //联系人电话
      verifyCodeError: '',          //验证码
    },
    jgVerification: false,    //验证判断
  },
  
  onShareAppMessage:(res:any):any=> {  //发送给朋友
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target);
    }
    return {
      title: '青岛人才创新创业平台地图',
      path: '/pages/home/home',
      imageUrl: ''
    }
  },

  onShareTimeline:():any=> {  //分享
    return {
      title: '青岛人才创新创业平台地图',
      query: {},
      imageUrl: ''
    }
  },


  //机构注册
  linkFn():void{
    if(!!this.data.jgFormDate.shxyCode){
      this.getJgLinkTel();  //获取机构联系电话
    }else{
      //Toast('请填写单位名称获取！');
    }
  },

  jgShxyCodeInput(res:any):void{  //单位名称
    if(res.detail){
      this.setData({
        ["jgFormRrror.shxyCodeError"]: '',
        ["jgFormDate.shxyCode"]: res.detail,
        jgVerification: true
      })
    }
  },

  jgShxyCodeBlur(res:any):void{  //单位名称
    if(res.detail.value){
      this.setData({
        ["jgFormRrror.shxyCodeError"]: '',
        ["jgFormDate.shxyCode"]: res.detail.value,
        jgVerification: true
      })
      this.getJgLinkTel();  //获取机构联系电话
    }else{
      this.setData({
        ["jgFormRrror.shxyCodeError"]: '',
        ["jgFormDate.shxyCode"]: res.detail.value,
        jgVerification: false
      })
    }
  },

  getJgLinkTel():void{  //获取机构联系电话
    https.request(api.getUser + "?qyName=" + this.data.jgFormDate.shxyCode, null, 'get')
    .then((res:any):void=>{
        let linkTel:any = res.val.phoneNum.split('');
        linkTel.splice(3,4,"****");
        this.setData({
          ["jgFormDate.id"]: res.val.id,
          ["jgFormDate.linkTel"]: res.val.phoneNum,
          ["jgFormRrror.linkTelError"]: '',
          jgLink: linkTel.join("")
        })
    },(err:any)=>{
      this.setData({
        ["jgFormDate.id"]: '',
        ["jgFormDate.linkTel"]: '',
        jgLink: ''
      })
      Toast(err);
    });
  },
  
  jgLinkTel(res:any):void{  //联系电话
    let reg:any = /^((1[0-9]{10})|(((([0-9]{3}-)?[0-9]{8})|(([0-9]{4}-)?[0-9]{7}))(-[0-9]{1,4})?))$/;
    let str:Boolean = reg.test(res.detail.value);
    if(res.detail.value){
      if(str){
        this.setData({
          ["jgFormRrror.linkTelError"]: '',
          ["jgFormDate.linkTel"]: res.detail.value,
          jgVerification: true
        })
      }else{
        this.setData({
          ["jgFormRrror.linkTelError"]: '请获取正确的联系电话',
          ["jgFormDate.linkTel"]: res.detail.value,
          jgVerification: false
        })
      }
    }else{
      this.setData({
        ["jgFormRrror.linkTelError"]: '',
        ["jgFormDate.linkTel"]: res.detail.value,
        jgVerification: false
      })
    }
  },
  jgVerifyInput(res:any):void{  //验证码
    if(res.detail){
      this.setData({
        ["jgFormRrror.verifyCodeError"]: '',
        ["jgFormDate.verifyCode"]: res.detail,
        jgVerification: true
      })
    }
  },
  jgVerifyCode(res:any):void{  //验证码
    if(res.detail.value){
      this.setData({
        ["jgFormRrror.verifyCodeError"]: '',
        ["jgFormDate.verifyCode"]: res.detail.value,
        jgVerification: true
      })
    }
  },


  jgSubmitFn():void{  //机构注册
    //请输入单位名称
    if(this.data.jgFormDate.shxyCode == ''){
      this.setData({
        ["jgFormRrror.shxyCodeError"]:'请输入单位名称',
        jgVerification: false
      })
    }

    //联系电话
    if(this.data.jgFormDate.linkTel == ''){
      this.setData({
        ["jgFormRrror.linkTelError"]:'请填写单位名称获取',
        jgVerification: false
      })
    }
    //验证码
    if(this.data.jgFormDate.verifyCode == ''){
      this.setData({
        ["jgFormRrror.verifyCodeError"]:'请输入验证码',
        jgVerification: false
      })
    }

    //完成
    if(this.data.jgVerification == false){
      Toast('请把必填信息填写完整！');
    }else{
      let url:string = api.getAccount + '?id=' + this.data.jgFormDate.id + '&qyName=' + this.data.jgFormDate.shxyCode + '&phoneNum=' + this.data.jgFormDate.linkTel + '&verifyCode=' + this.data.jgFormDate.verifyCode;
      https.request(url, null, 'POST').then((res:any):void=>{
        Dialog.alert({
          title: this.data.jgFormDate.shxyCode,
          messageAlign: 'center',
          message: res.val.shxyCode,
          confirmButtonText: '去登录',
          closeOnClickOverlay: true
        }).then(() => {
          wx.navigateTo({
            url: '../loginForm/loginForm'
          })
        });
      },(err:any)=>{
        Toast(err);
      });
    }
  },

  jgVerifyCodeFn():void{  //获取验证码
    if(this.data.jgFormDate.linkTel != ''){
      https.request(api.getCode + "?telephone=" + this.data.jgFormDate.linkTel, null, 'GET')
      .then(():void=>{
        this.setData({
          jgVerifyCodeTime: '60',
          jgDisabled: true
        })
        let setTime:any = setInterval(():void=>{
          let str:any = parseInt(this.data.jgVerifyCodeTime) - 1;
          if(str > 0){
            this.setData({
              jgVerifyCodeTime: str
            })
          }else{
            clearInterval(setTime);
            this.setData({
              jgVerifyCodeTime: '获取验证码',
              jgDisabled: false
            })
          }
        },1000)
      },(err:any)=>{
        Toast(err);
      });
    }else{
      Toast('请先填写联系电话！');
    }
  },


  //页面初始化
  onLoad(){
    //页面标题
    wx.setNavigationBarTitle({     
      title: "找回账号"
    });
  },
  //页面渲染完成
  onReady(){},

  //页面显示
  onShow(){
    
  },

  //页面隐藏
  onHide(){
    
  },

  //页面关闭
  onUnload(){
    this.setData({
      ["jgFormDate.shxyCode"]:'',    //单位名称
      ["jgFormDate.linkTel"]:'',     //联系人电话
      jgLink:'',                     //联系人电话
      ["jgFormDate.verifyCode"]:'',  //验证码

      ["jgFormRrror.shxyCodeError"]: '',    //单位名称
      ["jgFormRrror.linkTelError"]:'',      //联系人电话
      ["jgFormRrror.verifyCodeError"]:'',   //验证码
    })
  }
})
export {};
