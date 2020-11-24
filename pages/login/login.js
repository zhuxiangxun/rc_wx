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
    onShareAppMessage: function (res) {
        if (res.from === 'button') {
            console.log(res.target);
        }
        return {
            title: '青岛人才创新创业平台地图',
            path: '/pages/home/home',
            imageUrl: ''
        };
    },
    onShareTimeline: function () {
        return {
            title: '青岛人才创新创业平台地图',
            query: {},
            imageUrl: ''
        };
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
                loginBtn: '登录 / 注册',
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
                    loginBtn: '登录 / 注册'
                });
            }
        }
        catch (e) {
        }
    },
    onHide: function () { },
    onUnload: function () { }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBRSxDQUFDLFVBQVUsQ0FBQztBQUNoQyxJQUFJLEtBQUssR0FBSSxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUNqRCxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsa0RBQWtELENBQUMsQ0FBQyxPQUFPLENBQUM7QUFFaEYsSUFBSSxDQUFDO0lBRUgsSUFBSSxFQUFFO1FBQ0osU0FBUyxFQUFFLEVBQUU7UUFDYixRQUFRLEVBQUUsRUFBRTtRQUNaLFlBQVksRUFBRSxJQUFJO0tBQ25CO0lBRUQsaUJBQWlCLEVBQUMsVUFBQyxHQUFPO1FBQ3hCLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7WUFFekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDekI7UUFDRCxPQUFPO1lBQ0wsS0FBSyxFQUFFLGNBQWM7WUFDckIsSUFBSSxFQUFFLGtCQUFrQjtZQUN4QixRQUFRLEVBQUUsRUFBRTtTQUNiLENBQUE7SUFDSCxDQUFDO0lBRUQsZUFBZSxFQUFDO1FBQ2QsT0FBTztZQUNMLEtBQUssRUFBRSxjQUFjO1lBQ3JCLEtBQUssRUFBRSxFQUFFO1lBQ1QsUUFBUSxFQUFFLEVBQUU7U0FDYixDQUFBO0lBQ0gsQ0FBQztJQUdELFdBQVcsRUFBWDtRQUNFLElBQUksS0FBSyxHQUFVLEVBQUUsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUMsSUFBRyxDQUFDLENBQUMsS0FBSyxFQUFDO1lBQ1QsRUFBRSxDQUFDLFVBQVUsQ0FBQztnQkFDWixHQUFHLEVBQUMsd0JBQXdCO2FBQzdCLENBQUMsQ0FBQTtTQUNIO2FBQUk7WUFDSCxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDaEI7SUFDSCxDQUFDO0lBR0QsY0FBYyxF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QUFBO2FBQ0g7U0FDRjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1NBRVg7SUFDSCxDQUFDO0lBR0QsTUFBTSxnQkFBRyxDQUFDO0lBR1YsUUFBUSxnQkFBRyxDQUFDO0NBQ2IsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbG9naW4udHNcclxuY29uc3QgYXBpID0gZ2V0QXBwKCkuZ2xvYmFsRGF0YTsgIC8vIOiOt+WPluW6lOeUqOWunuS+i1xyXG5sZXQgaHR0cHMgID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvbXlSZXF1ZXN0LmpzJyk7ICAvL+iOt+WPlmFqYXjmlrnms5VcclxubGV0IFRvYXN0ID0gcmVxdWlyZSgnLi4vLi4vbWluaXByb2dyYW1fbnBtL0B2YW50L3dlYXBwL3RvYXN0L3RvYXN0LmpzJykuZGVmYXVsdDtcclxuXHJcblBhZ2Uoe1xyXG4gIC8v6aG16Z2i5pWw5o2uXHJcbiAgZGF0YToge1xyXG4gICAgbG9naW5JbmZvOiAnJywgICAgICAgICAgLy/nmbvlvZXlkI1cclxuICAgIGxvZ2luQnRuOiAnJywgICAgICAgICAgIC8v55m75b2VIC8g6YCA5Ye65oyJ6ZKuXHJcbiAgICBwYXNzd29yZFNob3c6IHRydWUsICAgICAvL+S4quS6uueZu+W9lei/mOaYr+S4u+euoeWNleS9jeeZu+W9lVxyXG4gIH0sXHJcblxyXG4gIG9uU2hhcmVBcHBNZXNzYWdlOihyZXM6YW55KTphbnk9PiB7ICAvL+WPkemAgee7meaci+WPi1xyXG4gICAgaWYgKHJlcy5mcm9tID09PSAnYnV0dG9uJykge1xyXG4gICAgICAvLyDmnaXoh6rpobXpnaLlhoXovazlj5HmjInpkq5cclxuICAgICAgY29uc29sZS5sb2cocmVzLnRhcmdldCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0aXRsZTogJ+mdkuWym+S6uuaJjeWIm+aWsOWIm+S4muW5s+WPsOWcsOWbvicsXHJcbiAgICAgIHBhdGg6ICcvcGFnZXMvaG9tZS9ob21lJyxcclxuICAgICAgaW1hZ2VVcmw6ICcnXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgb25TaGFyZVRpbWVsaW5lOigpOmFueT0+IHsgIC8v5YiG5LqrXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0aXRsZTogJ+mdkuWym+S6uuaJjeWIm+aWsOWIm+S4muW5s+WPsOWcsOWbvicsXHJcbiAgICAgIHF1ZXJ5OiB7fSxcclxuICAgICAgaW1hZ2VVcmw6ICcnXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLy/kuKrkurrkv6Hmga9cclxuICBsb2dpbkluZm9GbigpOnZvaWQge1xyXG4gICAgbGV0IHRva2VuOnN0cmluZyA9IHd4LmdldFN0b3JhZ2VTeW5jKCd0b2tlbicpO1xyXG4gICAgaWYoISF0b2tlbil7XHJcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybDonLi4vbG9naW5JbmZvL2xvZ2luSW5mbydcclxuICAgICAgfSlcclxuICAgIH1lbHNle1xyXG4gICAgICBUb2FzdCgn6K+35YWI55m75b2V77yBJyk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLy/kv67mlLnlr4bnoIFcclxuICBjaGFuZ2VQYXNzd29yZCgpOnZvaWR7XHJcbiAgICBsZXQgdG9rZW46c3RyaW5nID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3Rva2VuJyk7XHJcbiAgICBpZighIXRva2VuKXtcclxuICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgdXJsOicuLi9uZXdQYXNzd29yZC9uZXdQYXNzd29yZCdcclxuICAgICAgfSlcclxuICAgIH1lbHNle1xyXG4gICAgICBUb2FzdCgn6K+35YWI55m75b2V77yBJyk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcblxyXG4gIC8v55m75b2V6Lez6L2s5oiW6ICF6YCA5Ye655m75b2VXHJcbiAgbG9naW5GbigpOnZvaWR7XHJcbiAgICBpZih0aGlzLmRhdGEubG9naW5CdG4gPT0gJ+mAgOWHuueZu+W9lScpe1xyXG4gICAgICB3eC5jbGVhclN0b3JhZ2UoKTsgIC8v5riF6Zmk57yT5a2YXHJcbiAgICAgIGFwaS51c2VySWQgPSAnJztcclxuICAgICAgVG9hc3QoJ+W3sumAgOWHuueZu+W9lScpO1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGxvZ2luQnRuOiAn55m75b2VIC8g5rOo5YaMJyxcclxuICAgICAgICBsb2dpbkluZm86ICfmnKrnmbvlvZUnLFxyXG4gICAgICAgIHBhc3N3b3JkU2hvdzogdHJ1ZSxcclxuICAgICAgfSlcclxuICAgIH1lbHNle1xyXG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6ICcuLi9sb2dpbkZvcm0vbG9naW5Gb3JtJ1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8v6aG16Z2i5Yid5aeL5YyWXHJcbiAgb25Mb2FkKCl7XHJcbiAgICB3eC5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoeyAgICAgXHJcbiAgICAgIHRpdGxlOiBcIuaIkeeahFwiXHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICAvL+mhtemdoua4suafk+WujOaIkFxyXG4gIG9uUmVhZHkoKXtcclxuICAgIFxyXG4gIH0sXHJcblxyXG4gIC8v6aG16Z2i5pi+56S6XHJcbiAgb25TaG93KCl7XHJcbiAgICAvL+WIpOaWreaYr+WQpueZu+W9lVxyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IHRva2VuOnN0cmluZyA9IHd4LmdldFN0b3JhZ2VTeW5jKCd0b2tlbicpO1xyXG4gICAgICBpZiAoISF0b2tlbikge1xyXG4gICAgICAgIGlmKGFwaS5sb2dpblN0YXR1cyA9PSAneWgnKXsgIC8v55So5oi35py65p6E55m75b2VXHJcbiAgICAgICAgICBodHRwcy5zdWNjZXNzUmVxdWVzdChhcGkuY3VyVXNlciwgbnVsbCwgJ2dldCcpXHJcbiAgICAgICAgICAudGhlbigocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICAgICAgICBpZihyZXMpe1xyXG4gICAgICAgICAgICAgIGFwaS51c2VySWQgPSByZXMudmFsLmlkOyAgICAgICAgLy/nlKjmiLdJRFxyXG4gICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICBsb2dpbkluZm86IHJlcy52YWwucmVhbE5hbWUsXHJcbiAgICAgICAgICAgICAgICBsb2dpbkJ0bjogJ+mAgOWHuueZu+W9lScsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZFNob3c6IHRydWVcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICAgICAgICBUb2FzdChlcnIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGFwaS5sb2dpblN0YXR1cyA9PSAnemcnKXsgIC8v5Li7566h5Y2V5L2N55m75b2VXHJcbiAgICAgICAgICBpZihhcGkudXNlcklkID09ICcnKXtcclxuICAgICAgICAgICAgaHR0cHMuemdTdWNjZXNzUmVxdWVzdChhcGkubG9naW51c2VyLCBudWxsLCAnZ2V0JylcclxuICAgICAgICAgICAgLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgICAgICAgICBpZihyZXMpe1xyXG4gICAgICAgICAgICAgICAgYXBpLnVzZXJJZCA9IHJlcy52YWwuaWQ7ICAgICAgICAvL+eUqOaIt0lEXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgICBsb2dpbkluZm86IHJlcy52YWwudXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgIGxvZ2luQnRuOiAn6YCA5Ye655m75b2VJyxcclxuICAgICAgICAgICAgICAgICAgcGFzc3dvcmRTaG93OiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgICAgICAgICAgVG9hc3QoZXJyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgbG9naW5JbmZvOiAn5pyq55m75b2VJyxcclxuICAgICAgICAgIGxvZ2luQnRuOiAn55m75b2VIC8g5rOo5YaMJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgLy9jb25zb2xlLmxvZyhlKVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8v6aG16Z2i6ZqQ6JePXHJcbiAgb25IaWRlKCl7fSxcclxuXHJcbiAgLy/pobXpnaLlhbPpl61cclxuICBvblVubG9hZCgpe31cclxufSlcclxuZXhwb3J0IHt9O1xyXG4iXX0=