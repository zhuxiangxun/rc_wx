/**
 * 封装公共 HTTPS 网络请求
 */
const BASE_URL:string = getApp().globalData.url;       // 获取应用实例
const BASE_URL_DW:string = getApp().globalData.zgUrl;  // 获取应用实例(主管单位)

//不带token的ajax主管单位登录
function zgRequest(url:string, data?:any, method?:any):any{
  return new Promise((resolve:any, reject:any)=>{
    // wx.showLoading({
    //   mask: true,
    //   title: '登陆中，请等待...'
    // })
    wx.request({
      url: BASE_URL_DW + url,   //接口地址
      data: data || {},         //数据
      method: method || 'GET',  //请求方式
      header: {
        'content-type': 'application/json',
      },success(res:any) {
        //wx.hideLoading();
        if(res.data.code == 200){
          resolve(res.data);
        }else{
          reject(res.data.msg);
        }
      },fail(err:any){
        //wx.hideLoading();
        console.log(err);
      }
    })
  })
}
//带token的ajax主管单位登录
function zgSuccessRequest(url:string, data?:any, method?:any):any{
  try {
    const token:string = wx.getStorageSync('token');
    if (token) {
      return new Promise((resolve:any, reject:any)=>{
        wx.request({
          url: BASE_URL_DW + url,   //接口地址
          data: data || {},        //数据
          method: method || 'GET',  //请求方式
          header: {
            'content-type': 'application/json', // 默认值
            'Authorization': token  //请求token
          },success(res:any) {
            if(res.data.code == 200){
              resolve(res.data);
            }else{
              reject(res.data.msg);
              if(res.data.msg == '登陆信息已失效，请重新登陆'){
                wx.clearStorage();  //清除缓存
                wx.navigateTo({
                  url:'../loginForm/loginForm'
                })
              }
            }
          },fail(err:any){
            console.log(err);
          }
        })
      })
    }else{
      //没有token跳转登录
      wx.navigateTo({
        url:'../loginForm/loginForm'
      })
    }
  } catch (e) {
    console.log(e);
  }
}


//不带token的ajax
function request(url:string, data?:any, method?:any):any{
  return new Promise((resolve:any, reject:any)=>{
    // wx.showLoading({
    //   mask: true,
    //   title: '登陆中，请等待...'
    // })
    wx.request({
      url: BASE_URL + url,      //接口地址
      data: data || {},         //数据
      method: method || 'GET',  //请求方式
      header: {
        'content-type': 'application/json',
      },success(res:any) {
        //wx.hideLoading();
        if(res.data.code == 200){
          resolve(res.data);
        }else{
          reject(res.data.msg);
        }
      },fail(err:any){
        //wx.hideLoading();
        console.log(err);
      }
    })
  })
}

//带token的ajax
function successRequest(url:string, data?:any, method?:any):any{
  try {
    const token:string = wx.getStorageSync('token');
    if (token) {
      return new Promise((resolve:any, reject:any)=>{
        wx.request({
          url: BASE_URL + url,   //接口地址
          data: data || {},        //数据
          method: method || 'GET',  //请求方式
          header: {
            'content-type': 'application/json', // 默认值
            'Authorization': token  //请求token
          },success(res:any) {
            if(res.data.code == 200){
              resolve(res.data);
            }else{
              reject(res.data.msg);
              if(res.data.msg == '登陆信息已失效，请重新登陆'){
                wx.clearStorage();  //清除缓存
                wx.navigateTo({
                  url:'../loginForm/loginForm'
                })
              }
            }
          },fail(err:any){
            console.log(err);
          }
        })
      })
    }else{
      //没有token跳转登录
      wx.navigateTo({
        url:'../loginForm/loginForm'
      })
    }
  } catch (e) {
    console.log(e);
  }
}


//导出方法
module.exports = {
  zgRequest: zgRequest,
  zgSuccessRequest: zgSuccessRequest,
  request: request,
  successRequest: successRequest
}