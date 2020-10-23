// loginForm.ts
const api = getApp().globalData;  // 获取应用实例
let https  = require('../../utils/myRequest.js');  //获取ajax方法
let Toast = require('../../miniprogram_npm/@vant/weapp/toast/toast.js').default;

Page({
  //页面数据
  data: {
    userIcon: 'http://frontfile.eyunhan.com/zmq/mobile/icon_fw.png',       //用户名图标
    passwordIcon: 'http://frontfile.eyunhan.com/zmq/mobile/icon_ln.png',   //密码图标
    formDate:{  //表单
      username: '',
      password: ''
    },
    formRrror:{  //验证
      usernameError: '', 
      passwordError: '',
    },
    verification: false,    //验证判断
  },

  //用户名验证
  usernameInput(value:any):void{
    let reg:any = /^[-_a-zA-Z0-9]{1,255}$/;
    let str:Boolean = reg.test(value.detail);
    if(value.detail){
      if(str){
        this.setData({
          ["formRrror.usernameError"]:'',
          ["formDate.username"]: value.detail,
          verification: true
        })
      }else{
        this.setData({
          ["formRrror.usernameError"]:'请输入正确用户名（可以为数字、字母、下划线）',
          ["formDate.username"]: value.detail,
          verification: false
        })
      }
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
    let reg:any = /^[-_a-zA-Z0-9]{1,255}$/;
    let str:Boolean = reg.test(value.detail);
    if(value.detail){
      if(str){
        this.setData({
          ["formRrror.passwordError"]: '',
          ["formDate.password"]: value.detail,
          verification: true
        })
      }else{
        this.setData({
          ["formRrror.passwordError"]:'请输入正确密码（可以为数字、字母、下划线）',
          ["formDate.password"]: value.detail,
          verification: false
        })
      }
    }else{
      this.setData({
        ["formRrror.passwordError"]:'',
        ["formDate.password"]: value.detail,
        verification: false
      })
    }
  },

  //登录按钮
  loginFn():void{
    if(this.data.formDate.username == ''){  //用户名
      this.setData({
        ["formRrror.usernameError"]:'请输入用户名',
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
      https.request(api.login + '?account=' + this.data.formDate.username + '&password=' + this.data.formDate.password, null, 'POST')
      .then((res:any):void=>{
        if(res.token){
          wx.setStorageSync('token', res.token);  //存储token
          wx.navigateBack();  //后退
        }
      },(err:any)=>{
        Toast(err);
      });
    }
    
  },

  //页面初始化
  onLoad(){},

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
