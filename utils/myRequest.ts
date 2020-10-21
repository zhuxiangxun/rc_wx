/**
 * 封装公共 HTTPS 网络请求
 */
//const BASE_URL:string = "http://rc.qdcsdn.cn/sit-rencai-api/";
const BASE_URL:string = "http://lu.eyunhan.com/sit-rencai-api/";


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
function successRequest(url:string, method:any, data?:any):any{
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

module.exports = {
  request: request,
  successRequest: successRequest
}