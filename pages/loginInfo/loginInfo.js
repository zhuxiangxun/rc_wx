"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api = getApp().globalData;
var https = require('../../utils/myRequest.js');
var Toast = require('../../miniprogram_npm/@vant/weapp/toast/toast.js').default;
Page({
    data: {
        danWeiName: '',
        phoneNum: '',
        realName: '',
        username: '',
        xiaQuName: '',
    },
    onLoad: function () {
        var _this = this;
        if (api.loginStatus == 'yh') {
            https.successRequest(api.curUser, null, 'get')
                .then(function (res) {
                if (res) {
                    _this.setData({
                        danWeiName: res.val.danWeiName,
                        phoneNum: res.val.phoneNum,
                        realName: res.val.realName,
                        username: res.val.username,
                        xiaQuName: res.val.xiaQuName,
                    });
                }
            }, function (err) {
                Toast(err);
            });
        }
        else {
            https.zgSuccessRequest(api.loginuser, null, 'get')
                .then(function (res) {
                if (res) {
                    https.zgSuccessRequest(api.loginuser, null, 'get')
                        .then(function (res) {
                        if (res) {
                            _this.setData({
                                danWeiName: res.val.danWeiName ? res.val.danWeiName : '',
                                phoneNum: res.val.phoneNum ? res.val.phoneNum : res.val.telephone,
                                realName: res.val.loginname,
                                username: res.val.username,
                                xiaQuName: res.val.xiaQuName ? res.val.xiaQuName : '',
                            });
                        }
                    }, function (err) {
                        Toast(err);
                    });
                }
            }, function (err) {
                Toast(err);
            });
        }
    },
    onReady: function () { },
    onShow: function () { },
    onHide: function () { },
    onUnload: function () { }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW5JbmZvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW5JbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFFLENBQUMsVUFBVSxDQUFDO0FBQ2hDLElBQUksS0FBSyxHQUFJLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0FBQ2pELElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxrREFBa0QsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUVoRixJQUFJLENBQUM7SUFFSCxJQUFJLEVBQUU7UUFDSixVQUFVLEVBQUUsRUFBRTtRQUNkLFFBQVEsRUFBRSxFQUFFO1FBQ1osUUFBUSxFQUFFLEVBQUU7UUFDWixRQUFRLEVBQUUsRUFBRTtRQUNaLFNBQVMsRUFBRSxFQUFFO0tBQ2Q7SUFJRCxNQUFNLEVBQU47UUFBQSxpQkF1Q0M7UUF0Q0MsSUFBRyxHQUFHLENBQUMsV0FBVyxJQUFJLElBQUksRUFBQztZQUN6QixLQUFLLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQztpQkFDN0MsSUFBSSxDQUFDLFVBQUMsR0FBTztnQkFDWixJQUFHLEdBQUcsRUFBQztvQkFDTCxLQUFJLENBQUMsT0FBTyxDQUFDO3dCQUNYLFVBQVUsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVU7d0JBQzlCLFFBQVEsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVE7d0JBQzFCLFFBQVEsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVE7d0JBQzFCLFFBQVEsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVE7d0JBQzFCLFNBQVMsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLFNBQVM7cUJBQzdCLENBQUMsQ0FBQTtpQkFDSDtZQUNILENBQUMsRUFBQyxVQUFDLEdBQU87Z0JBQ1IsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2IsQ0FBQyxDQUFDLENBQUM7U0FDSjthQUFJO1lBQ0gsS0FBSyxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQztpQkFDakQsSUFBSSxDQUFDLFVBQUMsR0FBTztnQkFDWixJQUFHLEdBQUcsRUFBQztvQkFDTCxLQUFLLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDO3lCQUNqRCxJQUFJLENBQUMsVUFBQyxHQUFPO3dCQUNaLElBQUcsR0FBRyxFQUFDOzRCQUNMLEtBQUksQ0FBQyxPQUFPLENBQUM7Z0NBQ1gsVUFBVSxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFBLENBQUMsQ0FBQSxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQSxDQUFDLENBQUEsRUFBRTtnQ0FDcEQsUUFBUSxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFBLENBQUMsQ0FBQSxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQSxDQUFDLENBQUEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTO2dDQUM3RCxRQUFRLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTO2dDQUMzQixRQUFRLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRO2dDQUMxQixTQUFTLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUEsQ0FBQyxDQUFBLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFBLENBQUMsQ0FBQSxFQUFFOzZCQUNsRCxDQUFDLENBQUE7eUJBQ0g7b0JBQ0gsQ0FBQyxFQUFDLFVBQUMsR0FBTzt3QkFDUixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2IsQ0FBQyxDQUFDLENBQUM7aUJBQ0o7WUFDSCxDQUFDLEVBQUMsVUFBQyxHQUFPO2dCQUNSLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNiLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBR0QsT0FBTyxnQkFBRyxDQUFDO0lBR1gsTUFBTSxnQkFBRyxDQUFDO0lBR1YsTUFBTSxnQkFBRyxDQUFDO0lBR1YsUUFBUSxnQkFBRyxDQUFDO0NBQ2IsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbG9naW5JbmZvLnRzXHJcbmNvbnN0IGFwaSA9IGdldEFwcCgpLmdsb2JhbERhdGE7ICAvLyDojrflj5blupTnlKjlrp7kvotcclxubGV0IGh0dHBzICA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL215UmVxdWVzdC5qcycpOyAgLy/ojrflj5ZhamF45pa55rOVXHJcbmxldCBUb2FzdCA9IHJlcXVpcmUoJy4uLy4uL21pbmlwcm9ncmFtX25wbS9AdmFudC93ZWFwcC90b2FzdC90b2FzdC5qcycpLmRlZmF1bHQ7XHJcblxyXG5QYWdlKHtcclxuICAvL+mhtemdouaVsOaNrlxyXG4gIGRhdGE6IHtcclxuICAgIGRhbldlaU5hbWU6ICcnLCAgIC8v5Y2V5L2N5ZCNXHJcbiAgICBwaG9uZU51bTogJycsICAgICAvL+eUteivnVxyXG4gICAgcmVhbE5hbWU6ICcnLCAgICAgLy/mmLXnp7BcclxuICAgIHVzZXJuYW1lOiAnJywgICAgIC8v55So5oi35ZCNXHJcbiAgICB4aWFRdU5hbWU6ICcnLCAgICAvL+i+luWMulxyXG4gIH0sXHJcblxyXG5cclxuICAvL+mhtemdouWIneWni+WMllxyXG4gIG9uTG9hZCgpe1xyXG4gICAgaWYoYXBpLmxvZ2luU3RhdHVzID09ICd5aCcpeyAgLy/nlKjmiLfmnLrmnoTnmbvlvZVcclxuICAgICAgaHR0cHMuc3VjY2Vzc1JlcXVlc3QoYXBpLmN1clVzZXIsIG51bGwsICdnZXQnKVxyXG4gICAgICAudGhlbigocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICAgIGlmKHJlcyl7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBkYW5XZWlOYW1lOiByZXMudmFsLmRhbldlaU5hbWUsICAgLy/ljZXkvY3lkI1cclxuICAgICAgICAgICAgcGhvbmVOdW06IHJlcy52YWwucGhvbmVOdW0sICAgICAgIC8v55S16K+dXHJcbiAgICAgICAgICAgIHJlYWxOYW1lOiByZXMudmFsLnJlYWxOYW1lLCAgICAgICAvL+aYteensFxyXG4gICAgICAgICAgICB1c2VybmFtZTogcmVzLnZhbC51c2VybmFtZSwgICAgICAgLy/nlKjmiLflkI1cclxuICAgICAgICAgICAgeGlhUXVOYW1lOiByZXMudmFsLnhpYVF1TmFtZSwgICAgIC8v6L6W5Yy6XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgICBUb2FzdChlcnIpO1xyXG4gICAgICB9KTtcclxuICAgIH1lbHNleyAgLy/kuLvnrqHljZXkvY3nmbvlvZVcclxuICAgICAgaHR0cHMuemdTdWNjZXNzUmVxdWVzdChhcGkubG9naW51c2VyLCBudWxsLCAnZ2V0JylcclxuICAgICAgLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgICBpZihyZXMpe1xyXG4gICAgICAgICAgaHR0cHMuemdTdWNjZXNzUmVxdWVzdChhcGkubG9naW51c2VyLCBudWxsLCAnZ2V0JylcclxuICAgICAgICAgIC50aGVuKChyZXM6YW55KTp2b2lkPT57XHJcbiAgICAgICAgICAgIGlmKHJlcyl7XHJcbiAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgIGRhbldlaU5hbWU6IHJlcy52YWwuZGFuV2VpTmFtZT9yZXMudmFsLmRhbldlaU5hbWU6JycsICAgLy/ljZXkvY3lkI1cclxuICAgICAgICAgICAgICAgIHBob25lTnVtOiByZXMudmFsLnBob25lTnVtP3Jlcy52YWwucGhvbmVOdW06cmVzLnZhbC50ZWxlcGhvbmUsICAgICAgIC8v55S16K+dXHJcbiAgICAgICAgICAgICAgICByZWFsTmFtZTogcmVzLnZhbC5sb2dpbm5hbWUsICAgICAgLy/mmLXnp7BcclxuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiByZXMudmFsLnVzZXJuYW1lLCAgICAgICAvL+eUqOaIt+WQjVxyXG4gICAgICAgICAgICAgICAgeGlhUXVOYW1lOiByZXMudmFsLnhpYVF1TmFtZT9yZXMudmFsLnhpYVF1TmFtZTonJywgICAgIC8v6L6W5Yy6XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgICAgICAgVG9hc3QoZXJyKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgICBUb2FzdChlcnIpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvL+mhtemdoua4suafk+WujOaIkFxyXG4gIG9uUmVhZHkoKXt9LFxyXG5cclxuICAvL+mhtemdouaYvuekulxyXG4gIG9uU2hvdygpe30sXHJcblxyXG4gIC8v6aG16Z2i6ZqQ6JePXHJcbiAgb25IaWRlKCl7fSxcclxuXHJcbiAgLy/pobXpnaLlhbPpl61cclxuICBvblVubG9hZCgpe31cclxufSlcclxuZXhwb3J0IHt9O1xyXG4iXX0=