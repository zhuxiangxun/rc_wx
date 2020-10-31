// newPassword.ts
const api = getApp().globalData;  // 获取应用实例
let https  = require('../../utils/myRequest.js');  //获取ajax方法
let Toast = require('../../miniprogram_npm/@vant/weapp/toast/toast.js').default;

Page({
  //页面数据
  data: {
    formDate:{  //表单
      oldPasswold: '',     //原密码
      newPasswold: '',     //新密码
      repeatPasswold: '',  //确认密码
    },
    formRrror:{  //验证
      oldError: '', 
      newError: '',
      repeatError: '',
    },
    verification: false,    //验证判断
  },

  oldInput(event:any):void {   //原密码
    if(event.detail){
      this.setData({
        ["formRrror.oldError"]: '',
        ["formDate.oldPasswold"]: event.detail,
        verification: false
      })
    }
  },


  newInput(event:any):void {   //新密码
    let reg:any = /^[-_a-zA-Z0-9]{1,255}$/;
    let str:Boolean = reg.test(event.detail);
    if(event.detail){
      if(str){
        this.setData({
          ["formRrror.newError"]: '',
          ["formDate.newPasswold"]: event.detail,
          verification: false
        })
      }else{
        this.setData({
          ["formRrror.newError"]:'请输入正确密码（可以为数字、字母、下划线）',
          ["formDate.newPasswold"]: event.detail,
          verification: true
        })
      }
    }else{
      this.setData({
        ["formRrror.newError"]:'',
        ["formDate.newPasswold"]: event.detail,
        verification: false
      })
    }
  },

  repeatInput(event:any):void {   //确认新密码
    if(event.detail){
      this.setData({
        ["formRrror.repeatError"]: '',
        ["formDate.repeatPasswold"]: event.detail,
        verification: false
      })
    }
  },


  loginFn():void{  //保存
    if(this.data.formDate.oldPasswold == ''){  //原密码
      this.setData({
        ["formRrror.oldError"]:'请输入原密码',
        verification: true
      })
    }else if(this.data.formDate.newPasswold == ''){  //新密码
      this.setData({
        ["formRrror.newError"]:'请输入新密码',
        verification: true
      })
    }else if(this.data.formDate.repeatPasswold == ''){  //确认信密码
      this.setData({
        ["formRrror.repeatError"]:'请确认新密码',
        verification: true
      })
    }else if(this.data.formDate.newPasswold != this.data.formDate.repeatPasswold){  //确认信密码
      this.setData({
        ["formRrror.repeatError"]:'两次输入密码不一致',
        verification: true
      })
    }else{
      https.successRequest(api.editPass + '?id=' + api.userId + '&password=' + this.data.formDate.newPasswold + '&oldPassword=' + this.data.formDate.oldPasswold, null, 'POST')
      .then((res:any):void=>{
        if(res.code == 200){
          Toast('密码修改成功！');
          wx.navigateTo({
            url: '../loginForm/loginForm'
          })
        }
      },(err:any)=>{
        Toast(err);
      });
    }
  },


  //页面初始化
  onLoad(){
    //页面标题
    wx.setNavigationBarTitle({     
      title: "修改密码"
    });
  },

  //页面渲染完成
  onReady(){},

  //页面显示
  onShow(){},

  //页面隐藏
  onHide(){
    this.setData({
      ["formDate.oldPasswold"]: '',
      ["formDate.newPasswold"]: '',
      ["formDate.repeatPasswold"]: ''
    })
  },

  //页面关闭
  onUnload(){}
})
export {};
