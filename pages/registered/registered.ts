// registered.ts
let Dialog = require('../../miniprogram_npm/@vant/weapp/dialog/dialog.js').default;
let Toast = require('../../miniprogram_npm/@vant/weapp/toast/toast.js').default;
const api = getApp().globalData;  // 获取应用实例
let https  = require('../../utils/myRequest.js');     //获取ajax方法

Page({
  //页面数据
  data: {
    jgOverlay: true,                 //机构所属创业平台是否显示遮罩
    grOverlay: true,                 //个人工作单位是否显示遮罩
    jgPlatformDisabled: false,       //所属创业平台

    jgFlag: false,                  //机构行业重复判断
    grFlag: false,                  //个人行业重复判断

    contentOverflow: 'scroll',      //内容高度
    tabActive: 'jg',                //注册tab

    qydanweiList: [],               //单位类型
    tenantList: [],                 //所在地区
    platformIdList: [],             //所属创业平台
    cardList: [],                   //证件类型
    grPlatformIdList: [],           //创业平台
    grEnterListList: [],            //工作单位
  
    jgVerifyCodeTime: '获取验证码',  //获取验证码
    jgDisabled: false,              //验证码按钮状态
    jgProtocolChecked: false,       //协议

    grVerifyCodeTime: '获取验证码',  //获取验证码
    grDisabled: false,              //验证码按钮状态
    grProtocolChecked: false,       //协议

    //机构注册
    jgRepeatPassword: '',    //机构确认密码
    jgPasswordError: '',     //机构确认密码
    jgFormDate:{  //机构表单
      shxyCode: '',                 //统一社会信用代码
      password: '',                 //密码
      trueword: '',                 //确认密码
      qyName: '',                   //单位名称
      tenantId: '',                 //所在地区
      linkTel: '',                  //联系人电话
      verifyCode: '',               //验证码
      isCxPlatform: '2',            //是否创新平台主体单位
      isCyPlatform: '2',            //是否创业平台主体单位
      platformId: ''                //所属创业平台
    },
    jgFormRrror:{  //机构验证
      shxyCodeError: '',            //统一社会信用代码
      passwordError: '',            //密码
      truewordError: '',            //确认密码
      qyNameError: '',              //单位名称
      tenantIdError: '',            //所在地区
      linkTelError: '',             //联系人电话
      verifyCodeError: '',          //验证码
      emailError: ''                //电子邮箱
    },
    jgVerification: false,    //验证判断


    //个人验证
    grFormDate:{  //机构表单
      cardTypeId: '',                //证件类型
      cardNum: '',                   //证件号码
      realName: '',                  //姓名
      xiaQuId: '',                   //所属地区
      danWeiId: '',                  // 工作单位
      phoneNum: '',                  //联系电话
      verifyCode: '',                //验证码
      isLiuXue: '2',                 //是否为留学回国人员
      password: '',                  //密码
      trueword: '',                  //确认密码
    },
    grFormRrror:{  //机构验证
      cardTypeIdRrror: '',           //证件类型
      cardNumRrror: '',              //证件号码
      realNameError: '',             //姓名
      xiaQuIdError: '',              //所属地区
      danWeiIdError: '',             // 工作单位
      phoneNumError: '',             //联系电话
      verifyCodeError: '',           //验证码
      passwordError: '',             //密码
      truewordError: '',             //确认密码
    },
    grVerification: false,    //验证判断
  },

  dropdownOpen():void{  //打开下拉菜单触发
    this.setData({
      contentOverflow: 'hidden'
    })
  },
  dropdownClose():void{  //关闭下拉菜单触发
    this.setData({
      contentOverflow: 'scroll'
    })
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

  getTenantList():void{  //获取所在地区
    https.request(api.tenantList, null, 'GET')
    .then((res:any):void=>{
      let list:any = res.list.map((item:any):any=>{
        return {
          text: item.cname,
          value: item.id
        }
      })
      this.setData({
        tenantList: list
      })
    },(err:any)=>{
      console.log(err);
    });
  },

  
  getPlatformIdList():void{  //获取所属创业平台
    https.request(api.cyPlatformApi + '?xiaQuId=' + this.data.jgFormDate.tenantId, null, 'GET')
    .then((res:any):void=>{
      let list:any = res.list.map((item:any):any=>{
        return {
          text: item.cyName,
          value: item.id
        }
      })
      this.setData({
        platformIdList: list
      })
    },(err:any)=>{
      console.log(err);
    });
  },
  jgProtocolCheckedFn(value:any):void{  //使用协议
    this.setData({
      jgProtocolChecked: value.detail
    })
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
  getGrPlatformIdList():void{  //获取创业平台
    https.request(api.cyPlatformApi + '?xiaQuId=' + this.data.grFormDate.xiaQuId, null, 'GET')
    .then((res:any):void=>{
      let list:any = res.list.map((item:any):any=>{
        return {
          text: item.cyName,
          value: item.id
        }
      })
      this.setData({
        grPlatformIdList: list
      })
    },(err:any)=>{
      console.log(err);
    });
  },
  getEnterListList():void{  //获取工作单位
    https.request(api.enterList + '?xiaQuId=' + this.data.grFormDate.xiaQuId, null, 'GET')
    .then((res:any):void=>{
      let list:any = res.list.map((item:any):any=>{
        return {
          text: item.qyName,
          value: item.id
        }
      })
      this.setData({
        grEnterListList: list
      })
    },(err:any)=>{
      console.log(err);
    });
  },



  onTabChange():void{  //tab切换触发
    this.setData({
      contentOverflow: 'scroll'
    })
    this.selectComponent('#jgTenant').toggle(false);          //机构所在地区
    this.selectComponent('#jgPlatform').toggle(false);        //机构所属创业平台
    this.selectComponent('#grCardType').toggle(false);        //个人证件类型
    this.selectComponent('#grxiaQu').toggle(false);           //个人所在区域
    this.selectComponent('#grPlatform').toggle(false);        //个人工作单位
  },

  cxRightIcon():void{  //是否创新平台主体单位
    Dialog.alert({
      title: '是否创新平台主体单位',
      messageAlign: 'left',
      message: '创新平台：实验室（研究中心）、重点实验室、企业技术中心、科技创新基地、国际科技合作基地、工程技术研究中心、技术创新中心、院士工作站、有关国家级人才工作站、专家工作站、博士后科研工作站、博士后创新实践基地、技能大师工作室（工作站）、高新技术企业、智库等新型研发机构、研究院。',
    }).then(() => {
      
    });
  },
  cyRightIcon():void{  //是否创业平台主体单位
    Dialog.alert({
      title: '是否创业平台主体单位',
      messageAlign: 'left',
      message: '创业平台：孵化器、孵化基地、众创空间、星创天地、产业园区等。',
    }).then(() => {
      
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
  jgQyNameInput(res:any):void{  //单位名称
    if(res.detail.value){
      this.setData({
        ["jgFormRrror.qyNameError"]: '',
        ["jgFormDate.qyName"]: res.detail.value,
        jgVerification: true
      })
    }
  },

  jgTenantFn(value:any):void{  //所在地区
    this.setData({
      ["jgFormRrror.tenantIdError"]: '',
      ["jgFormDate.tenantId"]: value.detail,
      jgVerification: true,
      ["jgFormDate.platformId "]: ''
    })
    this.getPlatformIdList();  //获取所属创业平台
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
          ["jgFormRrror.linkTelError"]: '请输入正确的联系电话',
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
  jgPlatformOpen():void{  //所属创业平台打开事件
    if(this.data.platformIdList.length == 0){
      Toast('请先选择所在地区！');
      this.setData({
        contentOverflow: 'scroll',
        jgOverlay: false
      })
    }else{
      this.setData({
        contentOverflow: 'hidden',
        jgOverlay: true
      })
    }
  },
  jgPlatformOpened():void{  //所属创业平台打开菜单栏且动画结束后触发
    if(this.data.platformIdList.length == 0){
      this.selectComponent('#jgPlatform').toggle(false);        //机构所属创业平台
    }
  },
  jgPlatformFn(value:any):void{  //所属创业平台
    this.setData({
      ["jgFormDate.platformId"]: value.detail
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
    //所在地区
    if(this.data.jgFormDate.tenantId == ''){
      this.setData({
        ["jgFormRrror.tenantIdError"]:'请选择所在地区',
        jgVerification: false
      })
    }
    //联系电话
    if(this.data.jgFormDate.linkTel == ''){
      this.setData({
        ["jgFormRrror.linkTelError"]:'请输入联系电话',
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
    //阅读协议
    if(this.data.jgVerification == false){
      Toast('请把必填信息填写完整！');
    }else if(this.data.jgProtocolChecked == false){
      Toast('请阅读并接受应用使用协议！');
    }else{
      https.request(api.enterReg, this.data.jgFormDate, 'POST')
      .then(():void=>{
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
  jgCxPlatform(event:any):void{  //是否创新平台主体单位
    this.setData({
      ["jgFormDate.isCxPlatform"]: event.detail,
    });
  },
  jgCyPlatform(event:any):void{  //是否创业平台主体单位
    if(event.detail == '1'){
      this.setData({
        ["jgFormDate.platformId"]: '',
        jgPlatformDisabled: true
      })
    }else{
      this.setData({
        jgPlatformDisabled: false
      })
    }
    this.setData({
      ["jgFormDate.isCyPlatform"]: event.detail,
    });
  },
  


  //个人注册
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
  grRealName(res:any):void{  //姓名
    if(res.detail.value){
      this.setData({
        ["grFormRrror.realNameRrror"]: '',
        ["grFormDate.realName"]: res.detail.value,
        grVerification: true
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
  grxiaQuFn(value:any):void{  //所在地区
    this.setData({
      ["grFormRrror.xiaQuIdError"]: '',
      ["grFormDate.xiaQuId"]: value.detail,
      grVerification: true,
      ["grFormDate.danWeiId"]: ''
    })
    this.getEnterListList();  //获取工作单位
  },
  grPlatformOpen():void{  //所属创业平台打开事件
    if(this.data.grEnterListList.length == 0){
      Toast('请先选择所在地区！');
      this.setData({
        contentOverflow: 'scroll',
        grOverlay: false
      })
    }else{
      this.setData({
        contentOverflow: 'hidden',
        grOverlay: true
      })
    }
  },
  grPlatformOpened():void{  //工作单位打开菜单栏且动画结束后触发
    if(this.data.grEnterListList.length == 0){
      this.selectComponent('#grPlatform').toggle(false);        //工作单位
    }
  },
  grPlatformFn(value:any):void{  //所属创业平台
    this.setData({
      ["grFormDate.danWeiId"]: value.detail
    })
  },
  grIsLiuXue(event:any):void{  //是否为留学回国人员
    this.setData({
      ["grFormDate.isLiuXue"]: event.detail,
    });
  },

  grProtocolCheckedFn(value:any):void{  //使用协议
    this.setData({
      grProtocolChecked: value.detail
    })
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
    //姓名
    if(this.data.grFormDate.realName == ''){
      this.setData({
        ["grFormRrror.realNameRrror"]: '请输入姓名',
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
    //所在地区
    if(this.data.grFormDate.xiaQuId == ''){
      this.setData({
        ["grFormRrror.xiaQuIdError"]:'请选择所在地区',
        grVerification: false
      })
    }
    //阅读协议
    if(this.data.grVerification == false){
      Toast('请把必填信息填写完整！');
    }else if(this.data.grProtocolChecked == false){
      Toast('请阅读并接受应用使用协议！');
    }else{
      https.request(api.userReg, this.data.grFormDate, 'POST')
      .then(():void=>{
        wx.navigateTo({
          url: '../loginForm/loginForm'
        })
      },(err:any)=>{
        Toast(err);
      });
    }
  },

  //我已阅读并接受应用使用协议
  noticeFn():void{
    this.setData({
      jgProtocolChecked: !this.data.jgProtocolChecked
    })
    Dialog.alert({
      title: '注册须知',
      messageAlign: 'left',
      message: '1.本站采用实名认证，申请人须确保填写信息的真实、完整、有效。信息填写不真实、不完整等将导致注册无法审核通过。本站确保用户信息的安全性和保密性并为之负责。\n2.遵守中华人民共和国法律法令和其他相关法规，严禁发布破坏宪法和法律、法规的信息。\n3.遵守公安部关于《计算机信息网络国际联网安全保护管理办法》的规定，自觉维护计算机信息网络的安全。\n4.严禁在网上宣扬封建迷信、淫秽、色情、暴力、赌博、欺诈等不正当行为。\n5.单位或个人发布的信息要真实有效、准确完整，并不得有引人误解或者虚假的陈述。\n6.用户注册成功后，请妥善保管您的用户名和密码。',
    }).then(() => {
      
    });
  },

  //我已阅读并接受应用使用协议（个人）
  grNoticeFn():void{
    this.setData({
      grProtocolChecked: !this.data.grProtocolChecked
    })
    Dialog.alert({
      title: '注册须知',
      messageAlign: 'left',
      message: '1.本站采用实名认证，申请人须确保填写信息的真实、完整、有效。信息填写不真实、不完整等将导致注册无法审核通过。本站确保用户信息的安全性和保密性并为之负责。\n2.遵守中华人民共和国法律法令和其他相关法规，严禁发布破坏宪法和法律、法规的信息。\n3.遵守公安部关于《计算机信息网络国际联网安全保护管理办法》的规定，自觉维护计算机信息网络的安全。\n4.严禁在网上宣扬封建迷信、淫秽、色情、暴力、赌博、欺诈等不正当行为。\n5.单位或个人发布的信息要真实有效、准确完整，并不得有引人误解或者虚假的陈述。\n6.用户注册成功后，请妥善保管您的用户名和密码。',
    }).then(() => {
      
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
    //获取所在地区
    this.getTenantList();
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
      ["jgFormDate.qyName"]:'',  //单位名称
      ["jgFormDate.tenantId"]:'',  //所在地区
      ["jgFormDate.linkTel"]:'',  //联系人电话
      ["jgFormDate.verifyCode"]:'',  //验证码
      ["jgFormDate.isCxPlatform"]:'2',  //是否创新平台主体单位
      ["jgFormDate.isCyPlatform"]:'2',  //是否创业平台主体单位
      ["jgFormDate.platformId"]:'',  //所属创业平台

      ["grFormDate.cardTypeId"]:'',  //证件类型
      ["grFormDate.cardNum"]:'',  //证件号码
      ["grFormDate.realName"]:'',  //姓名
      ["grFormDate.xiaQuId"]:'',  //所属地区
      ["grFormDate.danWeiId"]:'',  //工作单位
      ["grFormDate.phoneNum"]:'',  //联系电话
      ["grFormDate.verifyCode"]:'',  //验证码
      ["grFormDate.isLiuXue"]:'2',  //是否为留学回国人员
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
