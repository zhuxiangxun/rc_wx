"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api = getApp().globalData;
var https = require('../../utils/myRequest.js');
var Toast = require('../../miniprogram_npm/@vant/weapp/toast/toast.js').default;
Page({
    data: {
        loginInfo: '',
        loginBtn: '',
    },
    loginInfoFn: function () {
    },
    changePassword: function () {
    },
    loginFn: function () {
        if (this.data.loginBtn == '退出登录') {
            wx.clearStorage();
            Toast('已退出登录');
            this.setData({
                loginBtn: '登录',
                loginInfo: '未登录'
            });
        }
        else {
            wx.navigateTo({
                url: '../loginForm/loginForm'
            });
        }
    },
    onLoad: function (options) {
        console.log(options);
        wx.setNavigationBarTitle({
            title: "我的"
        });
    },
    onReady: function () { },
    onShow: function () {
        var _this = this;
        try {
            var token = wx.getStorageSync('token');
            if (!!token) {
                https.successRequest(api.curUser, null, 'get')
                    .then(function (res) {
                    if (res) {
                        _this.setData({
                            loginInfo: res.val.realName,
                            loginBtn: '退出登录'
                        });
                    }
                }, function (err) {
                    Toast(err);
                });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBRSxDQUFDLFVBQVUsQ0FBQztBQUNoQyxJQUFJLEtBQUssR0FBSSxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUNqRCxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsa0RBQWtELENBQUMsQ0FBQyxPQUFPLENBQUM7QUFFaEYsSUFBSSxDQUFDO0lBRUgsSUFBSSxFQUFFO1FBQ0osU0FBUyxFQUFFLEVBQUU7UUFDYixRQUFRLEVBQUUsRUFBRTtLQUNiO0lBR0QsV0FBVyxFQUFYO0lBSUEsQ0FBQztJQUdELGNBQWMsRUFBZDtJQUlBLENBQUM7SUFJRCxPQUFPLEVBQVA7UUFDRSxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLE1BQU0sRUFBQztZQUM5QixFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDbEIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxRQUFRLEVBQUUsSUFBSTtnQkFDZCxTQUFTLEVBQUUsS0FBSzthQUNqQixDQUFDLENBQUE7U0FDSDthQUFJO1lBQ0gsRUFBRSxDQUFDLFVBQVUsQ0FBQztnQkFDWixHQUFHLEVBQUUsd0JBQXdCO2FBQzlCLENBQUMsQ0FBQTtTQUNIO0lBQ0gsQ0FBQztJQUdELE1BQU0sWUFBQyxPQUFPO1FBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNwQixFQUFFLENBQUMscUJBQXFCLENBQUM7WUFDdkIsS0FBSyxFQUFFLElBQUk7U0FDWixDQUFDLENBQUM7SUFDTCxDQUFDO0lBR0QsT0FBTyxnQkFBRyxDQUFDO0lBR1gsTUFBTSxFQUFOO1FBQUEsaUJBeUJDO1FBdkJDLElBQUk7WUFDRixJQUFJLEtBQUssR0FBVSxFQUFFLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRTtnQkFDWCxLQUFLLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQztxQkFDN0MsSUFBSSxDQUFDLFVBQUMsR0FBTztvQkFDWixJQUFHLEdBQUcsRUFBQzt3QkFDTCxLQUFJLENBQUMsT0FBTyxDQUFDOzRCQUNYLFNBQVMsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVE7NEJBQzNCLFFBQVEsRUFBRSxNQUFNO3lCQUNqQixDQUFDLENBQUE7cUJBQ0g7Z0JBQ0gsQ0FBQyxFQUFDLFVBQUMsR0FBTztvQkFDUixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2IsQ0FBQyxDQUFDLENBQUM7YUFDSjtpQkFBSTtnQkFDSCxJQUFJLENBQUMsT0FBTyxDQUFDO29CQUNYLFNBQVMsRUFBRSxLQUFLO29CQUNoQixRQUFRLEVBQUUsSUFBSTtpQkFDZixDQUFDLENBQUE7YUFDSDtTQUNGO1FBQUMsT0FBTyxDQUFDLEVBQUU7U0FFWDtJQUNILENBQUM7SUFHRCxNQUFNLGdCQUFHLENBQUM7SUFHVixRQUFRLGdCQUFHLENBQUM7Q0FDYixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsb2dpbi50c1xyXG5jb25zdCBhcGkgPSBnZXRBcHAoKS5nbG9iYWxEYXRhOyAgLy8g6I635Y+W5bqU55So5a6e5L6LXHJcbmxldCBodHRwcyAgPSByZXF1aXJlKCcuLi8uLi91dGlscy9teVJlcXVlc3QuanMnKTsgIC8v6I635Y+WYWpheOaWueazlVxyXG5sZXQgVG9hc3QgPSByZXF1aXJlKCcuLi8uLi9taW5pcHJvZ3JhbV9ucG0vQHZhbnQvd2VhcHAvdG9hc3QvdG9hc3QuanMnKS5kZWZhdWx0O1xyXG5cclxuUGFnZSh7XHJcbiAgLy/pobXpnaLmlbDmja5cclxuICBkYXRhOiB7XHJcbiAgICBsb2dpbkluZm86ICcnLCAgICAgICAgICAvL+eZu+W9leWQjVxyXG4gICAgbG9naW5CdG46ICcnLCAgICAgICAgICAgLy/nmbvlvZUgLyDpgIDlh7rmjInpkq5cclxuICB9LFxyXG5cclxuICAvL+S4quS6uuS/oeaBr1xyXG4gIGxvZ2luSW5mb0ZuKCk6dm9pZCB7XHJcbiAgICAvLyB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgIC8vICAgdXJsOicuLi9sb2dpbkluZm8vbG9naW5JbmZvJ1xyXG4gICAgLy8gfSlcclxuICB9LFxyXG5cclxuICAvL+S/ruaUueWvhueggVxyXG4gIGNoYW5nZVBhc3N3b3JkKCk6dm9pZHtcclxuICAgIC8vIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgLy8gICB1cmw6Jy4uL25ld1Bhc3N3b3JkL25ld1Bhc3N3b3JkJ1xyXG4gICAgLy8gfSlcclxuICB9LFxyXG5cclxuXHJcbiAgLy/nmbvlvZXot7PovazmiJbogIXpgIDlh7rnmbvlvZVcclxuICBsb2dpbkZuKCk6dm9pZHtcclxuICAgIGlmKHRoaXMuZGF0YS5sb2dpbkJ0biA9PSAn6YCA5Ye655m75b2VJyl7XHJcbiAgICAgIHd4LmNsZWFyU3RvcmFnZSgpOyAgLy/muIXpmaTnvJPlrZhcclxuICAgICAgVG9hc3QoJ+W3sumAgOWHuueZu+W9lScpO1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGxvZ2luQnRuOiAn55m75b2VJyxcclxuICAgICAgICBsb2dpbkluZm86ICfmnKrnmbvlvZUnXHJcbiAgICAgIH0pXHJcbiAgICB9ZWxzZXtcclxuICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgdXJsOiAnLi4vbG9naW5Gb3JtL2xvZ2luRm9ybSdcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvL+mhtemdouWIneWni+WMllxyXG4gIG9uTG9hZChvcHRpb25zKXtcclxuICAgIGNvbnNvbGUubG9nKG9wdGlvbnMpXHJcbiAgICB3eC5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoeyAgICAgXHJcbiAgICAgIHRpdGxlOiBcIuaIkeeahFwiXHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICAvL+mhtemdoua4suafk+WujOaIkFxyXG4gIG9uUmVhZHkoKXt9LFxyXG5cclxuICAvL+mhtemdouaYvuekulxyXG4gIG9uU2hvdygpe1xyXG4gICAgLy/liKTmlq3mmK/lkKbnmbvlvZVcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCB0b2tlbjpzdHJpbmcgPSB3eC5nZXRTdG9yYWdlU3luYygndG9rZW4nKTtcclxuICAgICAgaWYgKCEhdG9rZW4pIHtcclxuICAgICAgICBodHRwcy5zdWNjZXNzUmVxdWVzdChhcGkuY3VyVXNlciwgbnVsbCwgJ2dldCcpXHJcbiAgICAgICAgLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgICAgIGlmKHJlcyl7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgbG9naW5JbmZvOiByZXMudmFsLnJlYWxOYW1lLFxyXG4gICAgICAgICAgICAgIGxvZ2luQnRuOiAn6YCA5Ye655m75b2VJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgICAgICBUb2FzdChlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgbG9naW5JbmZvOiAn5pyq55m75b2VJyxcclxuICAgICAgICAgIGxvZ2luQnRuOiAn55m75b2VJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgLy9jb25zb2xlLmxvZyhlKVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8v6aG16Z2i6ZqQ6JePXHJcbiAgb25IaWRlKCl7fSxcclxuXHJcbiAgLy/pobXpnaLlhbPpl61cclxuICBvblVubG9hZCgpe31cclxufSlcclxuZXhwb3J0IHt9O1xyXG4iXX0=