"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api = getApp().globalData;
var https = require('../../utils/myRequest.js');
var Toast = require('../../miniprogram_npm/@vant/weapp/toast/toast.js').default;
Page({
    data: {
        loginInfo: '',
        loginBtn: '',
        passwordShow: true,
    },
    loginInfoFn: function () {
        var token = wx.getStorageSync('token');
        if (!!token) {
            wx.navigateTo({
                url: '../loginInfo/loginInfo'
            });
        }
        else {
            Toast('请先登录！');
        }
    },
    changePassword: function () {
        var token = wx.getStorageSync('token');
        if (!!token) {
            wx.navigateTo({
                url: '../newPassword/newPassword'
            });
        }
        else {
            Toast('请先登录！');
        }
    },
    loginFn: function () {
        if (this.data.loginBtn == '退出登录') {
            wx.clearStorage();
            api.userId = '';
            Toast('已退出登录');
            this.setData({
                loginBtn: '登录',
                loginInfo: '未登录',
                passwordShow: true,
            });
        }
        else {
            wx.navigateTo({
                url: '../loginForm/loginForm'
            });
        }
    },
    onLoad: function () {
        wx.setNavigationBarTitle({
            title: "我的"
        });
    },
    onReady: function () {
    },
    onShow: function () {
        var _this = this;
        try {
            var token = wx.getStorageSync('token');
            if (!!token) {
                if (api.loginStatus == 'yh') {
                    https.successRequest(api.curUser, null, 'get')
                        .then(function (res) {
                        if (res) {
                            api.userId = res.val.id;
                            _this.setData({
                                loginInfo: res.val.realName,
                                loginBtn: '退出登录',
                                passwordShow: true
                            });
                        }
                    }, function (err) {
                        Toast(err);
                    });
                }
                if (api.loginStatus == 'zg') {
                    if (api.userId == '') {
                        https.zgSuccessRequest(api.loginuser, null, 'get')
                            .then(function (res) {
                            if (res) {
                                api.userId = res.val.id;
                                _this.setData({
                                    loginInfo: res.val.username,
                                    loginBtn: '退出登录',
                                    passwordShow: false
                                });
                            }
                        }, function (err) {
                            Toast(err);
                        });
                    }
                }
            }
            else {
                this.setData({
                    loginInfo: '未登录',
                    loginBtn: '登录'
                });
            }
        }
        catch (e) {
        }
    },
    onHide: function () { },
    onUnload: function () { }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBRSxDQUFDLFVBQVUsQ0FBQztBQUNoQyxJQUFJLEtBQUssR0FBSSxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUNqRCxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsa0RBQWtELENBQUMsQ0FBQyxPQUFPLENBQUM7QUFFaEYsSUFBSSxDQUFDO0lBRUgsSUFBSSxFQUFFO1FBQ0osU0FBUyxFQUFFLEVBQUU7UUFDYixRQUFRLEVBQUUsRUFBRTtRQUNaLFlBQVksRUFBRSxJQUFJO0tBQ25CO0lBR0QsV0FBVyxFQUFYO1FBQ0UsSUFBSSxLQUFLLEdBQVUsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QyxJQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUM7WUFDVCxFQUFFLENBQUMsVUFBVSxDQUFDO2dCQUNaLEdBQUcsRUFBQyx3QkFBd0I7YUFDN0IsQ0FBQyxDQUFBO1NBQ0g7YUFBSTtZQUNILEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNoQjtJQUNILENBQUM7SUFHRCxjQUFjLEVBQWQ7UUFDRSxJQUFJLEtBQUssR0FBVSxFQUFFLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlDLElBQUcsQ0FBQyxDQUFDLEtBQUssRUFBQztZQUNULEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ1osR0FBRyxFQUFDLDRCQUE0QjthQUNqQyxDQUFDLENBQUE7U0FDSDthQUFJO1lBQ0gsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2hCO0lBQ0gsQ0FBQztJQUlELE9BQU8sRUFBUDtRQUNFLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksTUFBTSxFQUFDO1lBQzlCLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNsQixHQUFHLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUNoQixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDZixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLFFBQVEsRUFBRSxJQUFJO2dCQUNkLFNBQVMsRUFBRSxLQUFLO2dCQUNoQixZQUFZLEVBQUUsSUFBSTthQUNuQixDQUFDLENBQUE7U0FDSDthQUFJO1lBQ0gsRUFBRSxDQUFDLFVBQVUsQ0FBQztnQkFDWixHQUFHLEVBQUUsd0JBQXdCO2FBQzlCLENBQUMsQ0FBQTtTQUNIO0lBQ0gsQ0FBQztJQUdELE1BQU07UUFDSixFQUFFLENBQUMscUJBQXFCLENBQUM7WUFDdkIsS0FBSyxFQUFFLElBQUk7U0FDWixDQUFDLENBQUM7SUFDTCxDQUFDO0lBR0QsT0FBTztJQUVQLENBQUM7SUFHRCxNQUFNLEVBQU47UUFBQSxpQkE4Q0M7UUE1Q0MsSUFBSTtZQUNGLElBQUksS0FBSyxHQUFVLEVBQUUsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFO2dCQUNYLElBQUcsR0FBRyxDQUFDLFdBQVcsSUFBSSxJQUFJLEVBQUM7b0JBQ3pCLEtBQUssQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDO3lCQUM3QyxJQUFJLENBQUMsVUFBQyxHQUFPO3dCQUNaLElBQUcsR0FBRyxFQUFDOzRCQUNMLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7NEJBQ3hCLEtBQUksQ0FBQyxPQUFPLENBQUM7Z0NBQ1gsU0FBUyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUTtnQ0FDM0IsUUFBUSxFQUFFLE1BQU07Z0NBQ2hCLFlBQVksRUFBRSxJQUFJOzZCQUNuQixDQUFDLENBQUE7eUJBQ0g7b0JBQ0gsQ0FBQyxFQUFDLFVBQUMsR0FBTzt3QkFDUixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2IsQ0FBQyxDQUFDLENBQUM7aUJBQ0o7Z0JBQ0QsSUFBRyxHQUFHLENBQUMsV0FBVyxJQUFJLElBQUksRUFBQztvQkFDekIsSUFBRyxHQUFHLENBQUMsTUFBTSxJQUFJLEVBQUUsRUFBQzt3QkFDbEIsS0FBSyxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQzs2QkFDakQsSUFBSSxDQUFDLFVBQUMsR0FBTzs0QkFDWixJQUFHLEdBQUcsRUFBQztnQ0FDTCxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO2dDQUN4QixLQUFJLENBQUMsT0FBTyxDQUFDO29DQUNYLFNBQVMsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVE7b0NBQzNCLFFBQVEsRUFBRSxNQUFNO29DQUNoQixZQUFZLEVBQUUsS0FBSztpQ0FDcEIsQ0FBQyxDQUFBOzZCQUNIO3dCQUNILENBQUMsRUFBQyxVQUFDLEdBQU87NEJBQ1IsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNiLENBQUMsQ0FBQyxDQUFDO3FCQUNKO2lCQUNGO2FBQ0Y7aUJBQUk7Z0JBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxTQUFTLEVBQUUsS0FBSztvQkFDaEIsUUFBUSxFQUFFLElBQUk7aUJBQ2YsQ0FBQyxDQUFBO2FBQ0g7U0FDRjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1NBRVg7SUFDSCxDQUFDO0lBR0QsTUFBTSxnQkFBRyxDQUFDO0lBR1YsUUFBUSxnQkFBRyxDQUFDO0NBQ2IsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbG9naW4udHNcclxuY29uc3QgYXBpID0gZ2V0QXBwKCkuZ2xvYmFsRGF0YTsgIC8vIOiOt+WPluW6lOeUqOWunuS+i1xyXG5sZXQgaHR0cHMgID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvbXlSZXF1ZXN0LmpzJyk7ICAvL+iOt+WPlmFqYXjmlrnms5VcclxubGV0IFRvYXN0ID0gcmVxdWlyZSgnLi4vLi4vbWluaXByb2dyYW1fbnBtL0B2YW50L3dlYXBwL3RvYXN0L3RvYXN0LmpzJykuZGVmYXVsdDtcclxuXHJcblBhZ2Uoe1xyXG4gIC8v6aG16Z2i5pWw5o2uXHJcbiAgZGF0YToge1xyXG4gICAgbG9naW5JbmZvOiAnJywgICAgICAgICAgLy/nmbvlvZXlkI1cclxuICAgIGxvZ2luQnRuOiAnJywgICAgICAgICAgIC8v55m75b2VIC8g6YCA5Ye65oyJ6ZKuXHJcbiAgICBwYXNzd29yZFNob3c6IHRydWUsICAgICAvL+S4quS6uueZu+W9lei/mOaYr+S4u+euoeWNleS9jeeZu+W9lVxyXG4gIH0sXHJcblxyXG4gIC8v5Liq5Lq65L+h5oGvXHJcbiAgbG9naW5JbmZvRm4oKTp2b2lkIHtcclxuICAgIGxldCB0b2tlbjpzdHJpbmcgPSB3eC5nZXRTdG9yYWdlU3luYygndG9rZW4nKTtcclxuICAgIGlmKCEhdG9rZW4pe1xyXG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6Jy4uL2xvZ2luSW5mby9sb2dpbkluZm8nXHJcbiAgICAgIH0pXHJcbiAgICB9ZWxzZXtcclxuICAgICAgVG9hc3QoJ+ivt+WFiOeZu+W9le+8gScpO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8v5L+u5pS55a+G56CBXHJcbiAgY2hhbmdlUGFzc3dvcmQoKTp2b2lke1xyXG4gICAgbGV0IHRva2VuOnN0cmluZyA9IHd4LmdldFN0b3JhZ2VTeW5jKCd0b2tlbicpO1xyXG4gICAgaWYoISF0b2tlbil7XHJcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybDonLi4vbmV3UGFzc3dvcmQvbmV3UGFzc3dvcmQnXHJcbiAgICAgIH0pXHJcbiAgICB9ZWxzZXtcclxuICAgICAgVG9hc3QoJ+ivt+WFiOeZu+W9le+8gScpO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG5cclxuICAvL+eZu+W9lei3s+i9rOaIluiAhemAgOWHuueZu+W9lVxyXG4gIGxvZ2luRm4oKTp2b2lke1xyXG4gICAgaWYodGhpcy5kYXRhLmxvZ2luQnRuID09ICfpgIDlh7rnmbvlvZUnKXtcclxuICAgICAgd3guY2xlYXJTdG9yYWdlKCk7ICAvL+a4hemZpOe8k+WtmFxyXG4gICAgICBhcGkudXNlcklkID0gJyc7XHJcbiAgICAgIFRvYXN0KCflt7LpgIDlh7rnmbvlvZUnKTtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBsb2dpbkJ0bjogJ+eZu+W9lScsXHJcbiAgICAgICAgbG9naW5JbmZvOiAn5pyq55m75b2VJyxcclxuICAgICAgICBwYXNzd29yZFNob3c6IHRydWUsXHJcbiAgICAgIH0pXHJcbiAgICB9ZWxzZXtcclxuICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgdXJsOiAnLi4vbG9naW5Gb3JtL2xvZ2luRm9ybSdcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvL+mhtemdouWIneWni+WMllxyXG4gIG9uTG9hZCgpe1xyXG4gICAgd3guc2V0TmF2aWdhdGlvbkJhclRpdGxlKHsgICAgIFxyXG4gICAgICB0aXRsZTogXCLmiJHnmoRcIlxyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgLy/pobXpnaLmuLLmn5PlrozmiJBcclxuICBvblJlYWR5KCl7XHJcbiAgICBcclxuICB9LFxyXG5cclxuICAvL+mhtemdouaYvuekulxyXG4gIG9uU2hvdygpe1xyXG4gICAgLy/liKTmlq3mmK/lkKbnmbvlvZVcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCB0b2tlbjpzdHJpbmcgPSB3eC5nZXRTdG9yYWdlU3luYygndG9rZW4nKTtcclxuICAgICAgaWYgKCEhdG9rZW4pIHtcclxuICAgICAgICBpZihhcGkubG9naW5TdGF0dXMgPT0gJ3loJyl7ICAvL+eUqOaIt+acuuaehOeZu+W9lVxyXG4gICAgICAgICAgaHR0cHMuc3VjY2Vzc1JlcXVlc3QoYXBpLmN1clVzZXIsIG51bGwsICdnZXQnKVxyXG4gICAgICAgICAgLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgICAgICAgaWYocmVzKXtcclxuICAgICAgICAgICAgICBhcGkudXNlcklkID0gcmVzLnZhbC5pZDsgICAgICAgIC8v55So5oi3SURcclxuICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgbG9naW5JbmZvOiByZXMudmFsLnJlYWxOYW1lLFxyXG4gICAgICAgICAgICAgICAgbG9naW5CdG46ICfpgIDlh7rnmbvlvZUnLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmRTaG93OiB0cnVlXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgICAgICAgVG9hc3QoZXJyKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihhcGkubG9naW5TdGF0dXMgPT0gJ3pnJyl7ICAvL+S4u+euoeWNleS9jeeZu+W9lVxyXG4gICAgICAgICAgaWYoYXBpLnVzZXJJZCA9PSAnJyl7XHJcbiAgICAgICAgICAgIGh0dHBzLnpnU3VjY2Vzc1JlcXVlc3QoYXBpLmxvZ2ludXNlciwgbnVsbCwgJ2dldCcpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXM6YW55KTp2b2lkPT57XHJcbiAgICAgICAgICAgICAgaWYocmVzKXtcclxuICAgICAgICAgICAgICAgIGFwaS51c2VySWQgPSByZXMudmFsLmlkOyAgICAgICAgLy/nlKjmiLdJRFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgICAgbG9naW5JbmZvOiByZXMudmFsLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgICBsb2dpbkJ0bjogJ+mAgOWHuueZu+W9lScsXHJcbiAgICAgICAgICAgICAgICAgIHBhc3N3b3JkU2hvdzogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICAgICAgICAgIFRvYXN0KGVycik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIGxvZ2luSW5mbzogJ+acqueZu+W9lScsXHJcbiAgICAgICAgICBsb2dpbkJ0bjogJ+eZu+W9lSdcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIC8vY29uc29sZS5sb2coZSlcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvL+mhtemdoumakOiXj1xyXG4gIG9uSGlkZSgpe30sXHJcblxyXG4gIC8v6aG16Z2i5YWz6ZetXHJcbiAgb25VbmxvYWQoKXt9XHJcbn0pXHJcbmV4cG9ydCB7fTtcclxuIl19