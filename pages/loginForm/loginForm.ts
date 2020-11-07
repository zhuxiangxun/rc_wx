// loginForm.ts
const api = getApp().globalData;  // 获取应用实例
let https  = require('../../utils/myRequest.js');  //获取ajax方法
let Toast = require('../../miniprogram_npm/@vant/weapp/toast/toast.js').default;
let Dialog = require('../../miniprogram_npm/@vant/weapp/dialog/dialog.js').default;

Page({
  //页面数据
  data: {
    userIcon: 'http://www.eyunhan.cn/images/login_01.png',       //用户名图标
    passwordIcon: 'http://www.eyunhan.cn/images/login_02.png',   //密码图标
    formDate:{  //表单
      username: '',
      password: ''
    },
    formRrror:{  //验证
      usernameError: '', 
      passwordError: '',
    },
    verification: false,    //验证判断
    active: 'yh',
    zgFormDate:{  //主管表单
      username: '',
      password: ''
    },
    zgFormRrror:{  //主管验证
      usernameError: '', 
      passwordError: '',
    },
    zgVerification: false,    //验证判断
  },

  //tab切换触发
  tabChange(res:any):void{
    api.loginStatus = res.detail.name;  //登录判断
    this.setData({
      ["formDate.username"]: '',
      ["formDate.password"]: '',
      ["formRrror.usernameError"]: '',
      ["formRrror.passwordError"]: ''
    })
  },
  
  //用户名验证
  usernameBlur(value:any):void{
    //let reg:any = /^[-_a-zA-Z0-9]{1,255}$/;
    //let str:Boolean = reg.test(value.detail);
    if(value.detail.value){
      this.setData({
        ["formRrror.usernameError"]:'',
        ["formDate.username"]: value.detail.value,
        verification: true
      })
      // if(str){
       
      // }else{
      //   this.setData({
      //     ["formRrror.usernameError"]:'请输入正确用户名（可以为数字、字母、下划线）',
      //     ["formDate.username"]: value.detail,
      //     verification: false
      //   })
      // }
    }else{
      this.setData({
        ["formRrror.usernameError"]:'',
        ["formDate.username"]: value.detail.value,
        verification: false
      })
    }
  },
  usernameInput(value:any):void{
    //let reg:any = /^[-_a-zA-Z0-9]{1,255}$/;
    //let str:Boolean = reg.test(value.detail);
    if(value.detail){
      this.setData({
        ["formRrror.usernameError"]:'',
        ["formDate.username"]: value.detail,
        verification: true
      })
      // if(str){
       
      // }else{
      //   this.setData({
      //     ["formRrror.usernameError"]:'请输入正确用户名（可以为数字、字母、下划线）',
      //     ["formDate.username"]: value.detail,
      //     verification: false
      //   })
      // }
    }else{
      this.setData({
        ["formRrror.usernameError"]:'',
        ["formDate.username"]: value.detail,
        verification: false
      })
    }
  },
  //密码验证
  parsswordInput(value:any):void{
    //let reg:any = /^[-_a-zA-Z0-9]{1,255}$/;
    //let str:Boolean = reg.test(value.detail);
    if(value.detail){
      this.setData({
        ["formRrror.passwordError"]: '',
        ["formDate.password"]: value.detail,
        verification: true
      })
      // if(str){
        
      // }else{
      //   this.setData({
      //     ["formRrror.passwordError"]:'请输入正确密码（可以为数字、字母、下划线）',
      //     ["formDate.password"]: value.detail,
      //     verification: false
      //   })
      // }
    }else{
      this.setData({
        ["formRrror.passwordError"]:'',
        ["formDate.password"]: value.detail,
        verification: false
      })
    }
  },
  //主管用户名验证
  zgUsernameBlur(value:any):void{
    //let reg:any = /^[-_a-zA-Z0-9]{1,255}$/;
    //let str:Boolean = reg.test(value.detail);
    if(value.detail.value){
      this.setData({
        ["zgFormRrror.usernameError"]:'',
        ["zgFormDate.username"]: value.detail.value,
        zgVerification: true
      })
      // if(str){
        
      // }else{
      //   this.setData({
      //     ["zgFormRrror.usernameError"]:'请输入正确用户名（可以为数字、字母、下划线）',
      //     ["zgFormDate.username"]: value.detail,
      //     zgVerification: false
      //   })
      // }
    }else{
      this.setData({
        ["zgFormRrror.usernameError"]:'',
        ["zgFormDate.username"]: value.detail.value,
        zgVerification: false
      })
    }
  },
  zgUsernameInput(value:any):void{
    //let reg:any = /^[-_a-zA-Z0-9]{1,255}$/;
    //let str:Boolean = reg.test(value.detail);
    if(value.detail){
      this.setData({
        ["zgFormRrror.usernameError"]:'',
        ["zgFormDate.username"]: value.detail,
        zgVerification: true
      })
      // if(str){
        
      // }else{
      //   this.setData({
      //     ["zgFormRrror.usernameError"]:'请输入正确用户名（可以为数字、字母、下划线）',
      //     ["zgFormDate.username"]: value.detail,
      //     zgVerification: false
      //   })
      // }
    }else{
      this.setData({
        ["zgFormRrror.usernameError"]:'',
        ["zgFormDate.username"]: value.detail,
        zgVerification: false
      })
    }
  },
  //主管密码验证
  zgParsswordInput(value:any):void{
    //let reg:any = /^[-_a-zA-Z0-9]{1,255}$/;
    //let str:Boolean = reg.test(value.detail);
    if(value.detail){
      this.setData({
        ["zgFormRrror.passwordError"]: '',
        ["zgFormDate.password"]: value.detail,
        zgVerification: true
      })
      // if(str){
        
      // }else{
      //   this.setData({
      //     ["zgFormRrror.passwordError"]:'请输入正确密码（可以为数字、字母、下划线）',
      //     ["zgFormDate.password"]: value.detail,
      //     zgVerification: false
      //   })
      // }
    }else{
      this.setData({
        ["zgFormRrror.passwordError"]:'',
        ["zgFormDate.password"]: value.detail,
        zgVerification: false
      })
    }
  },

  //登录按钮
  loginFn():void{
    if(this.data.formDate.username == ''){  //用户名
      this.setData({
        ["formRrror.usernameError"]: '请输入用户名',
        verification: false
      })
    }

    if(this.data.formDate.password == ''){  //密码
      this.setData({
        ["formRrror.passwordError"]:'请输入密码',
        verification: false
      })
    }

    if(this.data.verification){  //验证通过
      //个人机构登录
      https.request(api.login + '?account=' + this.data.formDate.username + '&password=' + this.data.formDate.password, null, 'POST')
      .then((res:any):void=>{
        if(res.token){
          wx.setStorageSync('token', res.token);  //存储token
          //wx.navigateBack();  //后退
          wx.switchTab({ 
            url:'../home/home'
          });
        }
      },(err:any)=>{
        Toast(err);
      });
    }
  },

  //主管登录按钮
  zgLoginFn():void{
    if(this.data.zgFormDate.username == ''){  //用户名
      this.setData({
        ["zgFormRrror.usernameError"]: '请输入用户名',
        zgVerification: false
      })
    }

    if(this.data.zgFormDate.password == ''){  //密码
      this.setData({
        ["zgFormRrror.passwordError"]:'请输入密码',
        zgVerification: false
      })
    }

    if(this.data.zgVerification){  //验证通过
      //主管单位登录
      https.zgRequest(api.danweiLogin, {
        username: this.data.zgFormDate.username,
        password: this.data.zgFormDate.password
      }, 'POST')
      .then((res:any):void=>{
        if(res.token){
          wx.setStorageSync('token', res.token);  //存储token
          wx.switchTab({ 
            url:'../home/home'
          });
        }
      },(err:any)=>{
        Toast(err);
      });
    }
  },

  //注册
  registeredFn():void{
    wx.navigateTo({
      url: '../registered/registered'
    })
  },
  

  //注册弹框
  registered():void{
    Dialog.alert({
      title: '注册提示',
      messageAlign: 'center',
      message: '请用PC端打开网址进行注册http://www.talentelink.com',
    }).then(() => {
      
    });
  },
  



  //页面初始化
  onLoad(){
    api.loginStatus = 'yh';  //登录判断
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
