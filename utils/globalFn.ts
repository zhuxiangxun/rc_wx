/**
 * 封装公共方法
 */

 //函数防抖
function throttle(fn:any, gapTime:number):any{
  if (gapTime == null || gapTime == undefined) {
    gapTime = 1500
  }
  let _lastTime:any = null;
  return function () {
    let _nowTime:any = Date.now();
    if (_nowTime - _lastTime > gapTime || !_lastTime) {
      fn();
      _lastTime = _nowTime
    }
  }
}


//导出方法
module.exports = {
  throttle: throttle
}