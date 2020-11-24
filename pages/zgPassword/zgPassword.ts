// registered.ts
let Toast = require('../../miniprogram_npm/@vant/weapp/toast/toast.js').default;
const api = getApp().globalData;  // 获取应用实例
let https  = require('../../utils/myRequest.js');     //获取ajax方法

Page({
  //页面数据
  data: {
    tabActive: 'jg',                //注册tab

    cardList: [],                   //证件类型
  
    jgLink: '',                      //机构联系电话*显示
    jgVerifyCodeTime: '获取验证码',  //获取验证码
    jgDisabled: false,              //验证码按钮状态
    jgProtocolChecked: false,       //协议

    grLink: '',                     //个人联系电话*显示
    grVerifyCodeTime: '获取验证码',  //获取验证码
    grDisabled: false,              //验证码按钮状态
    grProtocolChecked: false,       //协议

    //机构注册
    jgRepeatPassword: '',           //机构确认密码
    jgPasswordError: '',            //机构确认密码
    jgFormDate:{  //机构表单
      id: '',                       //用户id 
      shxyCode: '',                 //统一社会信用代码
      password: '',                 //密码
      trueword: '',                 //确认密码
      linkTel: '',                  //联系人电话
      verifyCode: '',               //验证码
    },
    jgFormRrror:{  //机构验证
      shxyCodeError: '',            //统一社会信用代码
      passwordError: '',            //密码
      truewordError: '',            //确认密码
      linkTelError: '',             //联系人电话
      verifyCodeError: '',          //验证码
    },
    jgVerification: false,    //验证判断


    //个人验证
    grFormDate:{  //机构表单
      id: '',                        //用户id
      cardTypeId: '',                //证件类型
      cardNum: '',                   //证件号码
      phoneNum: '',                  //联系电话
      verifyCode: '',                //验证码
      password: '',                  //密码
      trueword: '',                  //确认密码
    },
    grFormRrror:{  //机构验证
      cardTypeIdRrror: '',           //证件类型
      cardNumRrror: '',              //证件号码
      phoneNumError: '',             //联系电话
      verifyCodeError: '',           //验证码
      passwordError: '',             //密码
      truewordError: '',             //确认密码
    },
    grVerification: false,    //验证判断
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

  onTabChange():void{  //tab切换触发
    this.selectComponent('#grCardType').toggle(false);        //个人证件类型
  },

  getcardList():void{  //获取证件类型
    https.request(api.submenuDic + '?moid=3', null, 'GET')
    .then((res:any):void=>{
      let list:any = res.val.map((item:any):any=>{
        if(item.dicName == '居民身份证（户口簿）'){
          this.setData({
            ["grFormRrror.cardTypeIdRrror"]: '',
            ["grFormDate.cardTypeId"]: item.id,
            grVerification: true
          })
        }
        return {
          text: item.dicName,
          value: item.id
        }
      })
      this.setData({
        cardList: list
      })
    },(err:any)=>{
      console.log(err);
    });
  },

  //机构注册
  jgShxyCodeInput(res:any):void{  //统一社会信用代码
    let reg:any = /[1-9]\d{15}/;
    let str:Boolean = reg.test(res.detail.value);
    if(res.detail.value){
      if(str){
        this.setData({
          ["jgFormRrror.shxyCodeError"]: '',
          ["jgFormDate.shxyCode"]: res.detail.value,
          jgVerification: true
        })
        this.getJgLinkTel();  //获取机构联系电话
      }else{
        this.setData({
          ["jgFormRrror.shxyCodeError"]: '请输入正确统一社会信用代码',
          ["jgFormDate.shxyCode"]: res.detail.value,
          jgVerification: false
        })
      }
    }else{
      this.setData({
        ["jgFormRrror.shxyCodeError"]: '',
        ["jgFormDate.shxyCode"]: res.detail.value,
        jgVerification: false
      })
    }
  },

  getJgLinkTel():void{  //获取机构联系电话
    https.request(api.getUser + "?account=" + this.data.jgFormDate.shxyCode, null, 'get')
    .then((res:any):void=>{
        let linkTel:any = res.val.phoneNum.split('');
        linkTel.splice(3,4,"****");
        this.setData({
          ["jgFormDate.id"]: res.val.id,
          ["jgFormDate.linkTel"]: res.val.phoneNum,
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
  
  jgPasswordInput(res:any):void{  //密码
    let reg:any = /(?=.*([a-zA-Z].*))(?=.*[0-9].*)[a-zA-Z0-9-*/+.~!@#$%^&*()]{6,20}$/;
    let str:Boolean = reg.test(res.detail.value);
    if(res.detail.value){
      if(str){
        this.setData({
          ["jgFormRrror.passwordError"]: '',
          ["jgFormDate.password"]: res.detail.value,
          jgVerification: true
        })
      }else{
        this.setData({
          ["jgFormRrror.passwordError"]: '数字、英文、字符两种及以上6-20位',
          ["jgFormDate.password"]: res.detail.value,
          jgVerification: false
        })
      }
    }else{
      this.setData({
        ["jgFormRrror.passwordError"]: '',
        ["jgFormDate.password"]: res.detail.value,
        jgVerification: false
      })
    }
  },
  jgRepeatPasswordInput(res:any):void{  //确认密码
    if(res.detail.value){
      if(res.detail.value != this.data.jgFormDate.password){
        this.setData({
          ["jgFormRrror.truewordError"]: '两次输入的密码不一致',
          ["jgFormDate.trueword"]: res.detail.value,
          jgVerification: false
        })
      }else{
        this.setData({
          ["jgFormRrror.truewordError"]: '',
          ["jgFormDate.trueword"]: res.detail.value,
          jgVerification: true
        })
      }
    }else{
      this.setData({
        ["jgFormRrror.truewordError"]: '',
        ["jgFormDate.trueword"]: res.detail.value,
        jgVerification: false
      })
    }
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
    //请输入统一社会信用代码
    if(this.data.jgFormDate.shxyCode == ''){
      this.setData({
        ["jgFormRrror.shxyCodeError"]:'请输入统一社会信用代码',
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

    //联系电话
    if(this.data.jgFormDate.linkTel == ''){
      this.setData({
        ["jgFormRrror.linkTelError"]:'请填写统一社会信用代码获取',
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
      let url:string = api.updatePass + '?id=' + this.data.jgFormDate.id + '&shxyCode=' + this.data.jgFormDate.shxyCode + '&phoneNum=' + this.data.jgFormDate.linkTel + '&verifyCode=' + this.data.jgFormDate.verifyCode + '&password=' + this.data.jgFormDate.password;
      https.request(url, null, 'POST').then(():void=>{
        wx.navigateTo({
          url: '../loginForm/loginForm'
        })
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


  //个人注册
  getGrLinkTel():void{  //获取机构联系电话
    https.request(api.getUser + "?account=" + this.data.grFormDate.cardNum, null, 'get')
    .then((res:any):void=>{
        let linkTel:any = res.val.phoneNum.split('');
        linkTel.splice(3,4,"****");
        this.setData({
          ["grFormDate.id"]: res.val.id,
          ["grFormDate.phoneNum"]: res.val.phoneNum,
          grLink: linkTel.join("")
        })
    },(err:any)=>{
      this.setData({
        ["grFormDate.id"]: '',
        ["grFormDate.phoneNum"]: '',
        grLink: ''
      })
      Toast(err);
    });
  },

  grCardTypeFn(value:any):void{  //证件类型
    this.setData({
      ["grFormRrror.cardTypeIdRrror"]: '',
      ["grFormDate.cardTypeId"]: value.detail,
      grVerification: true
    })
  },
  grCardNum(res:any):void{  //证件号码
    if(res.detail.value){
      this.setData({
        ["grFormRrror.cardNumRrror"]: '',
        ["grFormDate.cardNum"]: res.detail.value,
        grVerification: true
      })
      this.getGrLinkTel();  //获取个人联系电话
    }
  },
  grPasswordInput(res:any):void{  //密码
    let reg:any = /(?=.*([a-zA-Z].*))(?=.*[0-9].*)[a-zA-Z0-9-*/+.~!@#$%^&*()]{6,20}$/;
    let str:Boolean = reg.test(res.detail.value);
    if(res.detail.value){
      if(str){
        this.setData({
          ["grFormRrror.passwordError"]: '',
          ["grFormDate.password"]: res.detail.value,
          grVerification: true
        })
      }else{
        this.setData({
          ["grFormRrror.passwordError"]: '数字、英文、字符两种及以上6-20位',
          ["grFormDate.password"]: res.detail.value,
          grVerification: false
        })
      }
    }else{
      this.setData({
        ["grFormRrror.passwordError"]: '',
        ["grFormDate.password"]: res.detail.value,
        grVerification: false
      })
    }
  },
  grRepeatPasswordInput(res:any):void{  //确认密码
    if(res.detail.value){
      if(res.detail.value != this.data.grFormDate.password){
        this.setData({
          ["grFormRrror.truewordError"]: '两次输入的密码不一致',
          ["grFormDate.trueword"]: res.detail.value,
          grVerification: false
        })
      }else{
        this.setData({
          ["grFormRrror.truewordError"]: '',
          ["grFormDate.trueword"]: res.detail.value,
          grVerification: true
        })
      }
    }else{
      this.setData({
        ["grFormRrror.truewordError"]: '',
        ["grFormDate.trueword"]: res.detail.value,
        grVerification: false
      })
    }
  },

  grPhoneNum(res:any):void{  //联系电话
    let reg:any = /^((1[0-9]{10})|(((([0-9]{3}-)?[0-9]{8})|(([0-9]{4}-)?[0-9]{7}))(-[0-9]{1,4})?))$/;
    let str:Boolean = reg.test(res.detail.value);
    if(res.detail.value){
      if(str){
        this.setData({
          ["grFormRrror.phoneNumError"]: '',
          ["grFormDate.phoneNum"]: res.detail.value,
          grVerification: true
        })
      }else{
        this.setData({
          ["grFormRrror.phoneNumError"]: '请输入正确的联系电话',
          ["grFormDate.phoneNum"]: res.detail.value,
          grVerification: false
        })
      }
    }else{
      this.setData({
        ["grFormRrror.phoneNumError"]: '',
        ["grFormDate.phoneNum"]: res.detail.value,
        grVerification: false
      })
    }
  },
  grVerifyCode(res:any):void{  //验证码
    if(res.detail.value){
      this.setData({
        ["grFormRrror.verifyCodeError"]: '',
        ["grFormDate.verifyCode"]: res.detail.value,
        grVerification: true
      })
    }
  },
  grVerifyCodeFn():void{  //获取验证码
    if(this.data.grFormDate.phoneNum != ''){
      https.request(api.getCode + "?telephone=" + this.data.grFormDate.phoneNum, null, 'GET')
      .then(():void=>{
        this.setData({
          grVerifyCodeTime: '60',
          grDisabled: true
        })
        let setTime:any = setInterval(():void=>{
          let str:any = parseInt(this.data.grVerifyCodeTime) - 1;
          if(str > 0){
            this.setData({
              grVerifyCodeTime: str
            })
          }else{
            clearInterval(setTime);
            this.setData({
              grVerifyCodeTime: '获取验证码',
              grDisabled: false
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

  
  grSubmitFn():void{  //个人注册
    //证件类型
    if(this.data.grFormDate.cardTypeId == ''){
      this.setData({
        ["grFormRrror.cardTypeIdRrror"]: '请选择单位类型',
        grVerification: false
      })
    }
    //证件号码
    if(this.data.grFormDate.cardNum == ''){
      this.setData({
        ["grFormRrror.cardNumRrror"]: '请选择证件号码',
        grVerification: false
      })
    }
    //密码
    if(this.data.grFormDate.password == ''){
      this.setData({
        ["grFormRrror.passwordError"]:'请输入密码',
        grVerification: false
      })
    }
    //确认密码
    if(this.data.grFormDate.trueword == ''){
      this.setData({
        ["grFormRrror.truewordError"]:'请再次确认密码',
        grVerification: false
      })
    }

    //联系电话
    if(this.data.grFormDate.phoneNum == ''){
      this.setData({
        ["grFormRrror.phoneNumError"]:'请输入联系电话',
        grVerification: false
      })
    }
     //验证码
    if(this.data.grFormDate.verifyCode == ''){
      this.setData({
        ["grFormRrror.verifyCodeError"]:'请输入验证码',
        grVerification: false
      })
    }
    //个人完成
    if(this.data.grVerification == false){
      Toast('请把必填信息填写完整！');
    }else{
      let url:string = api.updatePass + '?id=' + this.data.grFormDate.id + '&cardTypeId=' + this.data.grFormDate.cardTypeId + '&cardNum=' + this.data.grFormDate.cardNum + '&phoneNum=' + this.data.grFormDate.phoneNum + '&verifyCode=' + this.data.grFormDate.verifyCode + '&password=' + this.data.grFormDate.password;
      https.request(url, null, 'POST').then(():void=>{
        wx.navigateTo({
          url: '../loginForm/loginForm'
        })
      },(err:any)=>{
        Toast(err);
      });
    }
  },


  //页面初始化
  onLoad(){
    //页面标题
    wx.setNavigationBarTitle({     
      title: "找回密码"
    });
    //证件类型
    this.getcardList();
  },
  //页面渲染完成
  onReady(){},

  //页面显示
  onShow(){
    this.setData({
      ["jgFormDate.shxyCode"]:'',  //统一社会信用代码
      ["jgFormDate.password"]:'',  //密码
      ["jgFormDate.trueword"]:'',  //确认密码
      ["jgFormDate.linkTel"]:'',  //联系人电话
      ["jgFormDate.verifyCode"]:'',  //验证码

      ["grFormDate.cardTypeId"]:'',  //证件类型
      ["grFormDate.cardNum"]:'',  //证件号码
      ["grFormDate.phoneNum"]:'',  //联系电话
      ["grFormDate.verifyCode"]:'',  //验证码
      ["grFormDate.password"]:'',  //密码
      ["grFormDate.trueword"]:'',  //确认密码
    })
  },

  //页面隐藏
  onHide(){},

  //页面关闭
  onUnload(){}
})
export {};
