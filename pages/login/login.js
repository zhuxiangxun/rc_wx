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
                https.successRequest(api.curUser, null, 'get')
                    .then(function (res) {
                    if (res) {
                        api.userId = res.val.id;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBRSxDQUFDLFVBQVUsQ0FBQztBQUNoQyxJQUFJLEtBQUssR0FBSSxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUNqRCxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsa0RBQWtELENBQUMsQ0FBQyxPQUFPLENBQUM7QUFFaEYsSUFBSSxDQUFDO0lBRUgsSUFBSSxFQUFFO1FBQ0osU0FBUyxFQUFFLEVBQUU7UUFDYixRQUFRLEVBQUUsRUFBRTtLQUNiO0lBR0QsV0FBVyxFQUFYO1FBQ0UsSUFBSSxLQUFLLEdBQVUsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QyxJQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUM7WUFDVCxFQUFFLENBQUMsVUFBVSxDQUFDO2dCQUNaLEdBQUcsRUFBQyx3QkFBd0I7YUFDN0IsQ0FBQyxDQUFBO1NBQ0g7YUFBSTtZQUNILEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNoQjtJQUNILENBQUM7SUFHRCxjQUFjLEVBQWQ7UUFDRSxJQUFJLEtBQUssR0FBVSxFQUFFLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlDLElBQUcsQ0FBQyxDQUFDLEtBQUssRUFBQztZQUNULEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ1osR0FBRyxFQUFDLDRCQUE0QjthQUNqQyxDQUFDLENBQUE7U0FDSDthQUFJO1lBQ0gsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2hCO0lBQ0gsQ0FBQztJQUlELE9BQU8sRUFBUDtRQUNFLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksTUFBTSxFQUFDO1lBQzlCLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNsQixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDZixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLFFBQVEsRUFBRSxJQUFJO2dCQUNkLFNBQVMsRUFBRSxLQUFLO2FBQ2pCLENBQUMsQ0FBQTtTQUNIO2FBQUk7WUFDSCxFQUFFLENBQUMsVUFBVSxDQUFDO2dCQUNaLEdBQUcsRUFBRSx3QkFBd0I7YUFDOUIsQ0FBQyxDQUFBO1NBQ0g7SUFDSCxDQUFDO0lBR0QsTUFBTTtRQUNKLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztZQUN2QixLQUFLLEVBQUUsSUFBSTtTQUNaLENBQUMsQ0FBQztJQUNMLENBQUM7SUFHRCxPQUFPO0lBRVAsQ0FBQztJQUdELE1BQU0sRUFBTjtRQUFBLGlCQTBCQztRQXhCQyxJQUFJO1lBQ0YsSUFBSSxLQUFLLEdBQVUsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUU7Z0JBQ1gsS0FBSyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUM7cUJBQzdDLElBQUksQ0FBQyxVQUFDLEdBQU87b0JBQ1osSUFBRyxHQUFHLEVBQUM7d0JBQ0wsR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQzt3QkFDeEIsS0FBSSxDQUFDLE9BQU8sQ0FBQzs0QkFDWCxTQUFTLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFROzRCQUMzQixRQUFRLEVBQUUsTUFBTTt5QkFDakIsQ0FBQyxDQUFBO3FCQUNIO2dCQUNILENBQUMsRUFBQyxVQUFDLEdBQU87b0JBQ1IsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNiLENBQUMsQ0FBQyxDQUFDO2FBQ0o7aUJBQUk7Z0JBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxTQUFTLEVBQUUsS0FBSztvQkFDaEIsUUFBUSxFQUFFLElBQUk7aUJBQ2YsQ0FBQyxDQUFBO2FBQ0g7U0FDRjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1NBRVg7SUFDSCxDQUFDO0lBR0QsTUFBTSxnQkFBRyxDQUFDO0lBR1YsUUFBUSxnQkFBRyxDQUFDO0NBQ2IsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbG9naW4udHNcclxuY29uc3QgYXBpID0gZ2V0QXBwKCkuZ2xvYmFsRGF0YTsgIC8vIOiOt+WPluW6lOeUqOWunuS+i1xyXG5sZXQgaHR0cHMgID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvbXlSZXF1ZXN0LmpzJyk7ICAvL+iOt+WPlmFqYXjmlrnms5VcclxubGV0IFRvYXN0ID0gcmVxdWlyZSgnLi4vLi4vbWluaXByb2dyYW1fbnBtL0B2YW50L3dlYXBwL3RvYXN0L3RvYXN0LmpzJykuZGVmYXVsdDtcclxuXHJcblBhZ2Uoe1xyXG4gIC8v6aG16Z2i5pWw5o2uXHJcbiAgZGF0YToge1xyXG4gICAgbG9naW5JbmZvOiAnJywgICAgICAgICAgLy/nmbvlvZXlkI1cclxuICAgIGxvZ2luQnRuOiAnJywgICAgICAgICAgIC8v55m75b2VIC8g6YCA5Ye65oyJ6ZKuXHJcbiAgfSxcclxuXHJcbiAgLy/kuKrkurrkv6Hmga9cclxuICBsb2dpbkluZm9GbigpOnZvaWQge1xyXG4gICAgbGV0IHRva2VuOnN0cmluZyA9IHd4LmdldFN0b3JhZ2VTeW5jKCd0b2tlbicpO1xyXG4gICAgaWYoISF0b2tlbil7XHJcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybDonLi4vbG9naW5JbmZvL2xvZ2luSW5mbydcclxuICAgICAgfSlcclxuICAgIH1lbHNle1xyXG4gICAgICBUb2FzdCgn6K+35YWI55m75b2V77yBJyk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLy/kv67mlLnlr4bnoIFcclxuICBjaGFuZ2VQYXNzd29yZCgpOnZvaWR7XHJcbiAgICBsZXQgdG9rZW46c3RyaW5nID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3Rva2VuJyk7XHJcbiAgICBpZighIXRva2VuKXtcclxuICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgdXJsOicuLi9uZXdQYXNzd29yZC9uZXdQYXNzd29yZCdcclxuICAgICAgfSlcclxuICAgIH1lbHNle1xyXG4gICAgICBUb2FzdCgn6K+35YWI55m75b2V77yBJyk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcblxyXG4gIC8v55m75b2V6Lez6L2s5oiW6ICF6YCA5Ye655m75b2VXHJcbiAgbG9naW5GbigpOnZvaWR7XHJcbiAgICBpZih0aGlzLmRhdGEubG9naW5CdG4gPT0gJ+mAgOWHuueZu+W9lScpe1xyXG4gICAgICB3eC5jbGVhclN0b3JhZ2UoKTsgIC8v5riF6Zmk57yT5a2YXHJcbiAgICAgIFRvYXN0KCflt7LpgIDlh7rnmbvlvZUnKTtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBsb2dpbkJ0bjogJ+eZu+W9lScsXHJcbiAgICAgICAgbG9naW5JbmZvOiAn5pyq55m75b2VJ1xyXG4gICAgICB9KVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybDogJy4uL2xvZ2luRm9ybS9sb2dpbkZvcm0nXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLy/pobXpnaLliJ3lp4vljJZcclxuICBvbkxvYWQoKXtcclxuICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7ICAgICBcclxuICAgICAgdGl0bGU6IFwi5oiR55qEXCJcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIC8v6aG16Z2i5riy5p+T5a6M5oiQXHJcbiAgb25SZWFkeSgpe1xyXG4gICAgXHJcbiAgfSxcclxuXHJcbiAgLy/pobXpnaLmmL7npLpcclxuICBvblNob3coKXtcclxuICAgIC8v5Yik5pat5piv5ZCm55m75b2VXHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgdG9rZW46c3RyaW5nID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3Rva2VuJyk7XHJcbiAgICAgIGlmICghIXRva2VuKSB7XHJcbiAgICAgICAgaHR0cHMuc3VjY2Vzc1JlcXVlc3QoYXBpLmN1clVzZXIsIG51bGwsICdnZXQnKVxyXG4gICAgICAgIC50aGVuKChyZXM6YW55KTp2b2lkPT57XHJcbiAgICAgICAgICBpZihyZXMpe1xyXG4gICAgICAgICAgICBhcGkudXNlcklkID0gcmVzLnZhbC5pZDsgICAgICAgIC8v55So5oi3SURcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICBsb2dpbkluZm86IHJlcy52YWwucmVhbE5hbWUsXHJcbiAgICAgICAgICAgICAgbG9naW5CdG46ICfpgIDlh7rnmbvlvZUnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgICAgIFRvYXN0KGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBsb2dpbkluZm86ICfmnKrnmbvlvZUnLFxyXG4gICAgICAgICAgbG9naW5CdG46ICfnmbvlvZUnXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAvL2NvbnNvbGUubG9nKGUpXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLy/pobXpnaLpmpDol49cclxuICBvbkhpZGUoKXt9LFxyXG5cclxuICAvL+mhtemdouWFs+mXrVxyXG4gIG9uVW5sb2FkKCl7fVxyXG59KVxyXG5leHBvcnQge307XHJcbiJdfQ==