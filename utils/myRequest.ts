/**
 * 封装公共 HTTPS 网络请求
 */
const BASE_URL:string = "http://rc.qdcsdn.cn/sit-rencai-api/web/";

//不带token的ajax
function request(url:string, data?:any, method?:any){
  try {
    wx.showLoading({
      mask: true,
      title: '登陆中，请等待...'
    })
    return new Promise((resolve:any, reject:any)=>{
      wx.request({
        url: BASE_URL + url,      //接口地址
        data: data || {},         //数据
        method: method || 'GET',  //请求方式
        header: {
          'content-type': 'application/json',
        },success(res:any) {
          wx.hideLoading();
          if(res.data.code == 200){
            resolve(res.data);
          }else{
            reject(res.msg);
          }
        },fail(err:any){
          wx.hideLoading();
          console.log(err);
        }
      })
    })
  } catch (e) {
    console.log(e);
  }
}

//带token的ajax
function successRequest(url:string, method:any, data?:any){
  try {
    const token:string = wx.getStorageSync('token');
    if (token) {
      wx.request({
        url: BASE_URL + url,   //接口地址
        data: data || {},        //数据
        method: method || 'GET',  //请求方式
        header: {
          'content-type': 'application/json', // 默认值
          //'token': token  //请求token
        },
        success(res:any) {
          return res;
        },
        fail(err:any){
          return err;
        }
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