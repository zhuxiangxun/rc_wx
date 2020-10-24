"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api = getApp().globalData;
var https = require('../../utils/myRequest.js');
var Toast = require('../../miniprogram_npm/@vant/weapp/toast/toast.js').default;
Page({
    data: {
        loginBtn: '',
    },
    showPopup: function () {
    },
    loginFn: function () {
        if (this.data.loginBtn == '退出登录') {
            wx.clearStorage();
            Toast('已退出登录');
            this.setData({
                loginBtn: '登录'
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
        try {
            var token = wx.getStorageSync('token');
            if (!!token) {
                https.successRequest(api.curUser, null, 'get')
                    .then(function (res) {
                    if (res) {
                        console.log(res);
                    }
                }, function (err) {
                    Toast(err);
                });
                this.setData({
                    loginBtn: '退出登录'
                });
            }
            else {
                this.setData({
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBRSxDQUFDLFVBQVUsQ0FBQztBQUNoQyxJQUFJLEtBQUssR0FBSSxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUNqRCxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsa0RBQWtELENBQUMsQ0FBQyxPQUFPLENBQUM7QUFFaEYsSUFBSSxDQUFDO0lBRUgsSUFBSSxFQUFFO1FBTUosUUFBUSxFQUFFLEVBQUU7S0FDYjtJQUdELFNBQVMsRUFBVDtJQUVBLENBQUM7SUFxQkQsT0FBTyxFQUFQO1FBQ0UsSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxNQUFNLEVBQUM7WUFDOUIsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ2xCLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNmLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsUUFBUSxFQUFFLElBQUk7YUFDZixDQUFDLENBQUE7U0FDSDthQUFJO1lBQ0gsRUFBRSxDQUFDLFVBQVUsQ0FBQztnQkFDWixHQUFHLEVBQUUsd0JBQXdCO2FBQzlCLENBQUMsQ0FBQTtTQUNIO0lBQ0gsQ0FBQztJQUdELE1BQU0sWUFBQyxPQUFPO1FBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNwQixFQUFFLENBQUMscUJBQXFCLENBQUM7WUFDdkIsS0FBSyxFQUFFLElBQUk7U0FDWixDQUFDLENBQUM7SUFDTCxDQUFDO0lBR0QsT0FBTyxnQkFBRyxDQUFDO0lBR1gsTUFBTSxFQUFOO1FBRUUsSUFBSTtZQUNGLElBQUksS0FBSyxHQUFVLEVBQUUsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFO2dCQUNYLEtBQUssQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDO3FCQUM3QyxJQUFJLENBQUMsVUFBQyxHQUFPO29CQUNaLElBQUcsR0FBRyxFQUFDO3dCQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQ2xCO2dCQUNILENBQUMsRUFBQyxVQUFDLEdBQU87b0JBQ1IsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNiLENBQUMsQ0FBQyxDQUFDO2dCQUVILElBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ1gsUUFBUSxFQUFFLE1BQU07aUJBQ2pCLENBQUMsQ0FBQTthQUNIO2lCQUFJO2dCQUNILElBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ1gsUUFBUSxFQUFFLElBQUk7aUJBQ2YsQ0FBQyxDQUFBO2FBQ0g7U0FDRjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1NBRVg7SUFDSCxDQUFDO0lBR0QsTUFBTSxnQkFBRyxDQUFDO0lBR1YsUUFBUSxnQkFBRyxDQUFDO0NBQ2IsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbG9naW4udHNcclxuY29uc3QgYXBpID0gZ2V0QXBwKCkuZ2xvYmFsRGF0YTsgIC8vIOiOt+WPluW6lOeUqOWunuS+i1xyXG5sZXQgaHR0cHMgID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvbXlSZXF1ZXN0LmpzJyk7ICAvL+iOt+WPlmFqYXjmlrnms5VcclxubGV0IFRvYXN0ID0gcmVxdWlyZSgnLi4vLi4vbWluaXByb2dyYW1fbnBtL0B2YW50L3dlYXBwL3RvYXN0L3RvYXN0LmpzJykuZGVmYXVsdDtcclxuXHJcblBhZ2Uoe1xyXG4gIC8v6aG16Z2i5pWw5o2uXHJcbiAgZGF0YToge1xyXG4gICAgLy8gZm9vdGVyQWN0aXZlOiAyLFxyXG4gICAgLy8gaWNvbjoge1xyXG4gICAgLy8gICBub3JtYWw6ICdodHRwczovL2ltZy55emNkbi5jbi92YW50L3VzZXItaW5hY3RpdmUucG5nJyxcclxuICAgIC8vICAgYWN0aXZlOiAnaHR0cHM6Ly9pbWcueXpjZG4uY24vdmFudC91c2VyLWFjdGl2ZS5wbmcnLFxyXG4gICAgLy8gfVxyXG4gICAgbG9naW5CdG46ICcnLCAgICAgICAgICAgLy/nmbvlvZUgLyDpgIDlh7rmjInpkq5cclxuICB9LFxyXG5cclxuICAvL+S4quS6uuS/oeaBr1xyXG4gIHNob3dQb3B1cCgpOnZvaWQge1xyXG4gICAgXHJcbiAgfSxcclxuXHJcbiAgLy/lupXpg6joj5zljZVcclxuICAvLyBvbkZvb3RlckNoYW5nZShldmVudDphbnkpOnZvaWQge1xyXG4gIC8vICAgdGhpcy5zZXREYXRhKHsgYWN0aXZlOiBldmVudC5kZXRhaWwgfSk7XHJcbiAgLy8gICBpZihldmVudC5kZXRhaWwgPT0gMSl7XHJcbiAgLy8gICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gIC8vICAgICAgIHVybDonLi4vbWFwL21hcCdcclxuICAvLyAgICAgfSlcclxuICAvLyAgIH1lbHNlIGlmKGV2ZW50LmRldGFpbCA9PSAyKXtcclxuICAvLyAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgLy8gICAgICAgdXJsOicuLi9sb2dpbi9sb2dpbidcclxuICAvLyAgICAgfSlcclxuICAvLyAgIH1lbHNle1xyXG4gIC8vICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAvLyAgICAgICB1cmw6Jy4uL2luZGV4L2luZGV4J1xyXG4gIC8vICAgICB9KVxyXG4gIC8vICAgfVxyXG4gIC8vIH0sXHJcblxyXG4gIC8v55m75b2V6Lez6L2s5oiW6ICF6YCA5Ye655m75b2VXHJcbiAgbG9naW5GbigpOnZvaWR7XHJcbiAgICBpZih0aGlzLmRhdGEubG9naW5CdG4gPT0gJ+mAgOWHuueZu+W9lScpe1xyXG4gICAgICB3eC5jbGVhclN0b3JhZ2UoKTsgIC8v5riF6Zmk57yT5a2YXHJcbiAgICAgIFRvYXN0KCflt7LpgIDlh7rnmbvlvZUnKTtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBsb2dpbkJ0bjogJ+eZu+W9lSdcclxuICAgICAgfSlcclxuICAgIH1lbHNle1xyXG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6ICcuLi9sb2dpbkZvcm0vbG9naW5Gb3JtJ1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8v6aG16Z2i5Yid5aeL5YyWXHJcbiAgb25Mb2FkKG9wdGlvbnMpe1xyXG4gICAgY29uc29sZS5sb2cob3B0aW9ucylcclxuICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7ICAgICBcclxuICAgICAgdGl0bGU6IFwi5oiR55qEXCJcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIC8v6aG16Z2i5riy5p+T5a6M5oiQXHJcbiAgb25SZWFkeSgpe30sXHJcblxyXG4gIC8v6aG16Z2i5pi+56S6XHJcbiAgb25TaG93KCl7XHJcbiAgICAvL+WIpOaWreaYr+WQpueZu+W9lVxyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IHRva2VuOnN0cmluZyA9IHd4LmdldFN0b3JhZ2VTeW5jKCd0b2tlbicpO1xyXG4gICAgICBpZiAoISF0b2tlbikge1xyXG4gICAgICAgIGh0dHBzLnN1Y2Nlc3NSZXF1ZXN0KGFwaS5jdXJVc2VyLCBudWxsLCAnZ2V0JylcclxuICAgICAgICAudGhlbigocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICAgICAgaWYocmVzKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICAgICAgVG9hc3QoZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLy0tLS0tLS0tLVxyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBsb2dpbkJ0bjogJ+mAgOWHuueZu+W9lSdcclxuICAgICAgICB9KVxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgbG9naW5CdG46ICfnmbvlvZUnXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAvL2NvbnNvbGUubG9nKGUpXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLy/pobXpnaLpmpDol49cclxuICBvbkhpZGUoKXt9LFxyXG5cclxuICAvL+mhtemdouWFs+mXrVxyXG4gIG9uVW5sb2FkKCl7fVxyXG59KVxyXG5leHBvcnQge307XHJcbiJdfQ==