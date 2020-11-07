// registered.ts
let Dialog = require('../../miniprogram_npm/@vant/weapp/dialog/dialog.js').default;
let Toast = require('../../miniprogram_npm/@vant/weapp/toast/toast.js').default;
const api = getApp().globalData;  // 获取应用实例
let https  = require('../../utils/myRequest.js');     //获取ajax方法

Page({
  //页面数据
  data: {
    contentOverflow: '',            //内容高度
    tabActive: 'jg',                //注册tab

    qydanweiList: [],               //单位类型
    tenantList: [],                 //所在地区
    industryBusinessesList: [],     //产业、行业类别列表
    platformIdList: [],             //所属创业平台
    cardList: [],                   //证件类型
    grPlatformIdList: [],           //个人工作单位
    typeIdList: [],                 //您属于
  
    jgIndex: 0,                     //当前索引（机构）
    jgIndustryId: null,             //选中的id（机构）
    jgIndustryBusinesses: '',       //产业、行业显示
    jgVerifyCodeTime: '获取验证码',  //获取验证码
    jgDisabled: false,              //验证码按钮状态
    jgProtocolChecked: false,       //协议


    grIndex: 0,                     //当前索引（机构）
    grIndustryId: null,             //选中的id（机构）
    grIndustryBusinesses: '',       //产业、行业显示
    grVerifyCodeTime: '获取验证码',  //获取验证码
    grDisabled: false,              //验证码按钮状态
    grProtocolChecked: false,       //协议

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
      shxyCode: '',                 //统一社会信用代码
      shxypics: [],                 //统一社会信用代码扫描件上传
      password: '',                 //密码
      trueword: '',                 //确认密码
      qyName: '',                   //单位名称
      qyNatureId: '',               //单位类型
      tenantId: '',                 //所在地区
      industryBusinesses: [],       //产业、行业
      qyAddress: '',                //单位详细地址
      legalName: '',                //法人姓名
      legalId: '',                  //法人身份证号
      linkPerson: '',               //联系人
      linkTel: '',                  //联系人电话
      verifyCode: '',               //验证码
      email: '',                    //电子邮箱
      isCxPlatform: '2',            //是否创新平台主体单位
      isCyPlatform: '2',            //是否创业平台主体单位
      platformId: ''                //所属创业平台
    },
    jgFormRrror:{  //机构验证
      shxyCodeError: '',            //统一社会信用代码
      shxypicsError: '',            //统一社会信用代码扫描件上传
      passwordError: '',            //密码
      truewordError: '',            //确认密码
      qyNameError: '',              //单位名称
      qyNatureIdError: '',          //单位类型
      tenantIdError: '',            //所在地区
      industryBusinessesError: '',  //产业、行业
      qyAddressError: '',           //单位详细地址
      legalIdError: '',             //法人身份证号
      linkPersonError: '',          //联系人
      linkTelError: '',             //联系人电话
      verifyCodeError: '',          //验证码
      emailError: ''                //电子邮箱
    },
    jgVerification: false,    //验证判断


    //个人验证
    grFileList: [],                  //机构上传附件
    grFormDate:{  //机构表单
      cardTypeId: '',                //证件类型
      cardNum: '',                   //证件号码
      cardPic: [],                   //证件扫描件上传
      password: '',                  //密码
      trueword: '',                  //确认密码
      realName: '',                  //姓名
      phoneNum: '',                  //联系电话
      verifyCode: '',                //验证码
      email: '',                     //电子邮箱
      xiaQuId: '',                   //所属地区
      danWeiId: '',                  // 所属单位
      danWeiAddress: '',             //工作单位详细地址
      curLocation: '',               //现居住地详细地址
      isLiuXue: '2',                 //是否为留学回国人员
      rcTypeId: '',                  //您属于
      industryBusinessModels: [],    //产业、行业
    },
    grFormRrror:{  //机构验证
      cardTypeIdRrror: '',           //证件类型
      cardNumRrror: '',              //证件号码
      cardPicError: '',              //证件扫描件上传
      passwordError: '',             //密码
      truewordError: '',             //确认密码
      realNameError: '',             //姓名
      phoneNumError: '',             //联系电话
      verifyCodeError: '',           //验证码
      emailError: '',                //电子邮箱
      xiaQuIdError: '',              //所属地区
      danWeiIdError: '',             // 所属单位
      curLocationError: '',          //现居住地详细地址
      rcTypeIdError: '',             //您属于
      industryBusinessModelsError: [],    //产业、行业
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

  getIndustryBusinesses():void{  //产业、行业类别
    https.request(api.submenuDic + '?moid=7', null, 'GET')
    .then((res:any):void=>{
      if(res){
        let arr:any = res.val.map((item:any):any=>{
          let children:any = item.children.map((item2:any):any=>{
            return {
              pText: item.dicName,
              text: item2.dicName,
              id: item2.id,
              pId: item2.pId
            }
          })
          return {
            text: item.dicName,
            children: children
          }
        })
        this.setData({
          industryBusinessesList: arr
        })
      }
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
  getGrPlatformIdList():void{  //获取工作单位
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
  getTypeIdList():void{  //您属于
    https.request(api.submenuDic + '?moid=8', null, 'GET')
    .then((res:any):void=>{
      let list:any = res.val.map((item:any):any=>{
        return {
          text: item.dicName,
          value: item.id
        }
      })
      this.setData({
        typeIdList: list
      })
    },(err:any)=>{
      console.log(err);
    });
  },


  onTabChange():void{  //tab切换触发

  },


  //机构注册
  jgShxyCodeInput(value:any):void{  //统一社会信用代码
    let reg:any = /[1-9]\d{15}/;
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
    wx.uploadFile({
      url: api.fileUrl,
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
            url: api.imgUrl + '?filePath=' + item.filePath,
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
  jgTenantFn(value:any):void{  //所在地区
    this.setData({
      ["jgFormRrror.tenantIdError"]: '',
      ["jgFormDate.tenantId"]: value.detail,
      jgVerification: true,
      ["jgFormDate.platformId "]: ''
    })
    this.getPlatformIdList();  //获取所属创业平台
  },
  jgNavItem(data:any):void{  //行业产业（左侧导航点击时，触发的事件）
    this.setData({
      jgIndex: data.detail.index || 0,
    });
  },
  jgIndustryItem(data:any):void {  //行业产业（右侧选择项被点击时，会触发的事件）
    let industryList:any = [
      {
        cyTypeId: data.detail.pId,
        hyTypeId: data.detail.id
      }
    ]
    this.setData({
      jgIndustryId: data.detail.id,
      ["jgFormDate.industryBusinesses"]: industryList,
      jgIndustryBusinesses: data.detail.pText + ' / ' + data.detail.text,
      ["jgFormRrror.industryBusinessesError"]: '',
      jgVerification: false
    })
  },
  jgQyAddress(value:any):void{  //单位详细地址
    if(value.detail){
      this.setData({
        ["jgFormRrror.qyAddressError"]: '',
        ["jgFormDate.qyAddress"]: value.detail,
        jgVerification: true
      })
    }
  },
  jgLegalName(value:any):void{  //法人姓名
    if(value.detail){
      this.setData({
        ["jgFormDate.legalName"]: value.detail
      })
    }
  },
  jgLegalId(value:any):void{  //法人身份证号
    //身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
    let reg:any = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    let str:Boolean = reg.test(value.detail);
    if(str){
      this.setData({
        ["jgFormRrror.legalIdError"]: '',
        ["jgFormDate.legalId"]: value.detail,
        jgVerification: true
      })
    }else{
      this.setData({
        ["jgFormRrror.legalIdError"]: '请输入正确的法人身份证号',
        ["jgFormDate.legalId"]: value.detail,
        jgVerification: false
      })
    }
  },
  jgLinkPerson(value:any):void{  //单位联系人
    if(value.detail){
      this.setData({
        ["jgFormRrror.linkPersonError"]: '',
        ["jgFormDate.linkPerson"]: value.detail,
        jgVerification: true
      })
    }
  },
  jgLinkTel(value:any):void{  //联系电话
    let reg:any = /^((1[0-9]{10})|(((([0-9]{3}-)?[0-9]{8})|(([0-9]{4}-)?[0-9]{7}))(-[0-9]{1,4})?))$/;
    let str:Boolean = reg.test(value.detail);
    if(value.detail){
      if(str){
        this.setData({
          ["jgFormRrror.linkTelError"]: '',
          ["jgFormDate.linkTel"]: value.detail,
          jgVerification: true
        })
      }else{
        this.setData({
          ["jgFormRrror.linkTelError"]: '请输入正确的联系电话',
          ["jgFormDate.linkTel"]: value.detail,
          jgVerification: false
        })
      }
    }else{
      this.setData({
        ["jgFormRrror.linkTelError"]: '',
        ["jgFormDate.linkTel"]: value.detail,
        jgVerification: false
      })
    }
  },
  jgVerifyCode(value:any):void{  //验证码
    if(value.detail){
      this.setData({
        ["jgFormRrror.verifyCodeError"]: '',
        ["jgFormDate.verifyCode"]: value.detail,
        jgVerification: true
      })
    }
  },
  jgEmail(value:any):void{  //电子邮箱
    let reg:any = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    let str:Boolean = reg.test(value.detail);
    if(value.detail){
      if(str){
        this.setData({
          ["jgFormRrror.emailError"]: '',
          ["jgFormDate.email"]: value.detail,
          jgVerification: true
        })
      }else{
        this.setData({
          ["jgFormRrror.emailError"]: '请输入正确的电子邮箱',
          ["jgFormDate.email"]: value.detail,
          jgVerification: false
        })
      }
    }else{
      this.setData({
        ["jgFormRrror.emailError"]: '',
        ["jgFormDate.email"]: value.detail,
        jgVerification: false
      })
    }
  },
  jgPlatformOpen():void{  //所属创业平台打开事件
    if(this.data.platformIdList.length == 0){
      Toast('请先选择所在地区！');
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
    //所在地区
    if(this.data.jgFormDate.tenantId == ''){
      this.setData({
        ["jgFormRrror.tenantIdError"]:'请选择所在地区',
        jgVerification: false
      })
    }
    //产业、行业
    if(this.data.jgFormDate.tenantId.length == 0){
      this.setData({
        ["jgFormRrror.industryBusinessesError"]:'请选择产业/行业',
        jgVerification: false
      })
    }
    //单位详细地址
    if(this.data.jgFormDate.qyAddress == ''){
      this.setData({
        ["jgFormRrror.qyAddressError"]:'请输入单位详细地址',
        jgVerification: false
      })
    }
    //单位联系人
    if(this.data.jgFormDate.linkPerson == ''){
      this.setData({
        ["jgFormRrror.qyAddressError"]:'请输入单位联系人',
        jgVerification: false
      })
    }
    //联系电话
    if(this.data.jgFormDate.linkPerson == ''){
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
    //电子邮箱
    if(this.data.jgFormDate.email == ''){
      this.setData({
        ["jgFormRrror.emailError"]:'请输入电子邮箱',
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
  grCardNum(value:any):void{  //证件号码
    if(value.detail){
      this.setData({
        ["grFormRrror.cardNumRrror"]: '',
        ["grFormDate.cardNum"]: value.detail,
        grVerification: true
      })
    }
  },
  grAfterRead(event:any):void {             //证件扫描件上传
    let _that:any = this;
    const { file }:any = event.detail;
    wx.uploadFile({
      url: api.fileUrl,
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
            url: api.imgUrl + '?filePath=' + item.filePath,
          }
        })
        _that.setData({
          grFileList: fileList,                      //显示
          ["grFormDate.cardPic"]: file.val,         //提交
          ["grFormRrror.cardPicError"]: '',
          grVerification: true
        })
      },
    });
  },
  grDelete():void{  //证件扫描件上传删除
    this.setData({
      grFileList: [],                   //清空上传显示列表
      ["grFormDate.cardPic"]: [],      //清空上传列表
      ["grFormRrror.cardPicError"]: '请上传证件扫描件',
        grVerification: false
    })
  },
  grPasswordInput(value:any):void{  //密码
    let reg:any = /(?=.*([a-zA-Z].*))(?=.*[0-9].*)[a-zA-Z0-9-*/+.~!@#$%^&*()]{6,20}$/;
    let str:Boolean = reg.test(value.detail);
    if(value.detail){
      if(str){
        this.setData({
          ["grFormRrror.passwordError"]: '',
          ["grFormDate.password"]: value.detail,
          grVerification: true
        })
      }else{
        this.setData({
          ["grFormRrror.passwordError"]: '数字、英文、字符两种及以上6-20位',
          ["grFormDate.password"]: value.detail,
          grVerification: false
        })
      }
    }else{
      this.setData({
        ["grFormRrror.passwordError"]: '',
        ["grFormDate.password"]: value.detail,
        grVerification: false
      })
    }
  },
  grRepeatPasswordInput(value:any):void{  //确认密码
    if(value.detail){
      if(value.detail != this.data.grFormDate.password){
        this.setData({
          ["grFormRrror.truewordError"]: '两次输入的密码不一致',
          ["grFormDate.trueword"]: value.detail,
          grVerification: true
        })
      }else{
        this.setData({
          ["grFormRrror.truewordError"]: '',
          ["grFormDate.trueword"]: value.detail,
          grVerification: false
        })
      }
    }else{
      this.setData({
        ["grFormRrror.truewordError"]: '',
        ["grFormDate.trueword"]: value.detail,
        grVerification: false
      })
    }
  },
  grRealName(value:any):void{  //姓名
    if(value.detail){
      this.setData({
        ["grFormRrror.realNameRrror"]: '',
        ["grFormDate.realName"]: value.detail,
        grVerification: true
      })
    }
  },
  grPhoneNum(value:any):void{  //联系电话
    let reg:any = /^((1[0-9]{10})|(((([0-9]{3}-)?[0-9]{8})|(([0-9]{4}-)?[0-9]{7}))(-[0-9]{1,4})?))$/;
    let str:Boolean = reg.test(value.detail);
    if(value.detail){
      if(str){
        this.setData({
          ["grFormRrror.phoneNumError"]: '',
          ["grFormDate.phoneNum"]: value.detail,
          grVerification: true
        })
      }else{
        this.setData({
          ["grFormRrror.phoneNumError"]: '请输入正确的联系电话',
          ["grFormDate.phoneNum"]: value.detail,
          grVerification: false
        })
      }
    }else{
      this.setData({
        ["grFormRrror.phoneNumError"]: '',
        ["grFormDate.phoneNum"]: value.detail,
        grVerification: false
      })
    }
  },
  grVerifyCode(value:any):void{  //验证码
    if(value.detail){
      this.setData({
        ["grFormRrror.verifyCodeError"]: '',
        ["grFormDate.verifyCode"]: value.detail,
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
  grEmail(value:any):void{  //电子邮箱
    let reg:any = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    let str:Boolean = reg.test(value.detail);
    if(value.detail){
      if(str){
        this.setData({
          ["grFormRrror.emailError"]: '',
          ["grFormDate.email"]: value.detail,
          grVerification: true
        })
      }else{
        this.setData({
          ["grFormRrror.emailError"]: '请输入正确的电子邮箱',
          ["grFormDate.email"]: value.detail,
          grVerification: false
        })
      }
    }else{
      this.setData({
        ["grFormRrror.emailError"]: '',
        ["grFormDate.email"]: value.detail,
        grVerification: false
      })
    }
  },
  grxiaQuFn(value:any):void{  //所在地区
    this.setData({
      ["grFormRrror.xiaQuIdError"]: '',
      ["grFormDate.xiaQuId"]: value.detail,
      grVerification: true,
      ["grFormDate.danWeiId"]: ''
    })
    this.getGrPlatformIdList();  //获取工作单位
  },
  grPlatformOpen():void{  //所属创业平台打开事件
    if(this.data.grPlatformIdList.length == 0){
      Toast('请先选择所在地区！');
    }
  },
  grPlatformFn(value:any):void{  //所属创业平台
    this.setData({
      ["grFormDate.danWeiId"]: value.detail
    })
  },
  grQyAddress(value:any):void{  //工作单位详细地址
    if(value.detail){
      this.setData({
        ["grFormDate.danWeiAddress"]: value.detail
      })
    }
  },
  grCurLocation(value:any):void{  //现居住地详细地址
    if(value.detail){
      this.setData({
        ["grFormRrror.curLocationError"]: '',
        ["grFormDate.curLocation"]: value.detail,
        grVerification: true
      })
    }
  },
  grIsLiuXue(event:any):void{  //是否为留学回国人员
    this.setData({
      ["grFormDate.isLiuXue"]: event.detail,
    });
  },
  grypeFn(value:any):void{  //您属于
    this.setData({
      ["grFormRrror.rcTypeIdError"]: '',
      ["grFormDate.rcTypeId"]: value.detail,
      grVerification: true
    })
  },
  grNavItem(data:any):void{  //行业产业（左侧导航点击时，触发的事件）
    this.setData({
      grIndex: data.detail.index || 0,
    });
  },
  grIndustryItem(data:any):void {  //行业产业（右侧选择项被点击时，会触发的事件）
    let industryList:any = [
      {
        cyTypeId: data.detail.pId,
        hyTypeId: data.detail.id
      }
    ]
    this.setData({
      grIndustryId: data.detail.id,
      ["grFormDate.industryBusinessModels"]: industryList,
      grIndustryBusinesses: data.detail.pText + ' / ' + data.detail.text,
      ["grFormRrror.industryBusinessModelsError"]: '',
      grVerification: true
    })
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
    //证件扫描件上传
    if(this.data.grFormDate.cardPic.length == 0){
      this.setData({
        ["grFormRrror.cardPicError"]: '请上传证件扫描件',
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
    //电子邮箱
    if(this.data.grFormDate.email == ''){
      this.setData({
        ["grFormRrror.emailError"]:'请输入电子邮箱',
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
    //现居住地详细地址
    if(this.data.grFormDate.curLocation == ''){
      this.setData({
        ["grFormRrror.curLocationError"]:'请输入现居住地详细地址',
        grVerification: false
      })
    }
    //您属于
    if(this.data.grFormDate.rcTypeId == ''){
      this.setData({
        ["grFormRrror.rcTypeIdError"]:'请选择您属于',
        grVerification: false
      })
    }
     //产业、行业
     if(this.data.grFormDate.industryBusinessModels.length == 0){
      this.setData({
        ["grFormRrror.industryBusinessModelsError"]:'请选择产业/行业',
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
    //产业、行业类别
    this.getIndustryBusinesses();
    //证件类型
    this.getcardList();
    //您属于
    this.getTypeIdList();
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
