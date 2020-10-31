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
    onReady: function () { },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBRSxDQUFDLFVBQVUsQ0FBQztBQUNoQyxJQUFJLEtBQUssR0FBSSxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUNqRCxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsa0RBQWtELENBQUMsQ0FBQyxPQUFPLENBQUM7QUFFaEYsSUFBSSxDQUFDO0lBRUgsSUFBSSxFQUFFO1FBQ0osU0FBUyxFQUFFLEVBQUU7UUFDYixRQUFRLEVBQUUsRUFBRTtLQUNiO0lBR0QsV0FBVyxFQUFYO1FBQ0UsSUFBSSxLQUFLLEdBQVUsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QyxJQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUM7WUFDVCxFQUFFLENBQUMsVUFBVSxDQUFDO2dCQUNaLEdBQUcsRUFBQyx3QkFBd0I7YUFDN0IsQ0FBQyxDQUFBO1NBQ0g7YUFBSTtZQUNILEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNoQjtJQUNILENBQUM7SUFHRCxjQUFjLEVBQWQ7UUFDRSxJQUFJLEtBQUssR0FBVSxFQUFFLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlDLElBQUcsQ0FBQyxDQUFDLEtBQUssRUFBQztZQUNULEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ1osR0FBRyxFQUFDLDRCQUE0QjthQUNqQyxDQUFDLENBQUE7U0FDSDthQUFJO1lBQ0gsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2hCO0lBQ0gsQ0FBQztJQUlELE9BQU8sRUFBUDtRQUNFLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksTUFBTSxFQUFDO1lBQzlCLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNsQixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDZixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLFFBQVEsRUFBRSxJQUFJO2dCQUNkLFNBQVMsRUFBRSxLQUFLO2FBQ2pCLENBQUMsQ0FBQTtTQUNIO2FBQUk7WUFDSCxFQUFFLENBQUMsVUFBVSxDQUFDO2dCQUNaLEdBQUcsRUFBRSx3QkFBd0I7YUFDOUIsQ0FBQyxDQUFBO1NBQ0g7SUFDSCxDQUFDO0lBR0QsTUFBTTtRQUNKLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztZQUN2QixLQUFLLEVBQUUsSUFBSTtTQUNaLENBQUMsQ0FBQztJQUNMLENBQUM7SUFHRCxPQUFPLGdCQUFHLENBQUM7SUFHWCxNQUFNLEVBQU47UUFBQSxpQkEwQkM7UUF4QkMsSUFBSTtZQUNGLElBQUksS0FBSyxHQUFVLEVBQUUsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFO2dCQUNYLEtBQUssQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDO3FCQUM3QyxJQUFJLENBQUMsVUFBQyxHQUFPO29CQUNaLElBQUcsR0FBRyxFQUFDO3dCQUNMLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7d0JBQ3hCLEtBQUksQ0FBQyxPQUFPLENBQUM7NEJBQ1gsU0FBUyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUTs0QkFDM0IsUUFBUSxFQUFFLE1BQU07eUJBQ2pCLENBQUMsQ0FBQTtxQkFDSDtnQkFDSCxDQUFDLEVBQUMsVUFBQyxHQUFPO29CQUNSLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDYixDQUFDLENBQUMsQ0FBQzthQUNKO2lCQUFJO2dCQUNILElBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ1gsU0FBUyxFQUFFLEtBQUs7b0JBQ2hCLFFBQVEsRUFBRSxJQUFJO2lCQUNmLENBQUMsQ0FBQTthQUNIO1NBQ0Y7UUFBQyxPQUFPLENBQUMsRUFBRTtTQUVYO0lBQ0gsQ0FBQztJQUdELE1BQU0sZ0JBQUcsQ0FBQztJQUdWLFFBQVEsZ0JBQUcsQ0FBQztDQUNiLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGxvZ2luLnRzXHJcbmNvbnN0IGFwaSA9IGdldEFwcCgpLmdsb2JhbERhdGE7ICAvLyDojrflj5blupTnlKjlrp7kvotcclxubGV0IGh0dHBzICA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL215UmVxdWVzdC5qcycpOyAgLy/ojrflj5ZhamF45pa55rOVXHJcbmxldCBUb2FzdCA9IHJlcXVpcmUoJy4uLy4uL21pbmlwcm9ncmFtX25wbS9AdmFudC93ZWFwcC90b2FzdC90b2FzdC5qcycpLmRlZmF1bHQ7XHJcblxyXG5QYWdlKHtcclxuICAvL+mhtemdouaVsOaNrlxyXG4gIGRhdGE6IHtcclxuICAgIGxvZ2luSW5mbzogJycsICAgICAgICAgIC8v55m75b2V5ZCNXHJcbiAgICBsb2dpbkJ0bjogJycsICAgICAgICAgICAvL+eZu+W9lSAvIOmAgOWHuuaMiemSrlxyXG4gIH0sXHJcblxyXG4gIC8v5Liq5Lq65L+h5oGvXHJcbiAgbG9naW5JbmZvRm4oKTp2b2lkIHtcclxuICAgIGxldCB0b2tlbjpzdHJpbmcgPSB3eC5nZXRTdG9yYWdlU3luYygndG9rZW4nKTtcclxuICAgIGlmKCEhdG9rZW4pe1xyXG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6Jy4uL2xvZ2luSW5mby9sb2dpbkluZm8nXHJcbiAgICAgIH0pXHJcbiAgICB9ZWxzZXtcclxuICAgICAgVG9hc3QoJ+ivt+WFiOeZu+W9le+8gScpO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8v5L+u5pS55a+G56CBXHJcbiAgY2hhbmdlUGFzc3dvcmQoKTp2b2lke1xyXG4gICAgbGV0IHRva2VuOnN0cmluZyA9IHd4LmdldFN0b3JhZ2VTeW5jKCd0b2tlbicpO1xyXG4gICAgaWYoISF0b2tlbil7XHJcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybDonLi4vbmV3UGFzc3dvcmQvbmV3UGFzc3dvcmQnXHJcbiAgICAgIH0pXHJcbiAgICB9ZWxzZXtcclxuICAgICAgVG9hc3QoJ+ivt+WFiOeZu+W9le+8gScpO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG5cclxuICAvL+eZu+W9lei3s+i9rOaIluiAhemAgOWHuueZu+W9lVxyXG4gIGxvZ2luRm4oKTp2b2lke1xyXG4gICAgaWYodGhpcy5kYXRhLmxvZ2luQnRuID09ICfpgIDlh7rnmbvlvZUnKXtcclxuICAgICAgd3guY2xlYXJTdG9yYWdlKCk7ICAvL+a4hemZpOe8k+WtmFxyXG4gICAgICBUb2FzdCgn5bey6YCA5Ye655m75b2VJyk7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgbG9naW5CdG46ICfnmbvlvZUnLFxyXG4gICAgICAgIGxvZ2luSW5mbzogJ+acqueZu+W9lSdcclxuICAgICAgfSlcclxuICAgIH1lbHNle1xyXG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6ICcuLi9sb2dpbkZvcm0vbG9naW5Gb3JtJ1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8v6aG16Z2i5Yid5aeL5YyWXHJcbiAgb25Mb2FkKCl7XHJcbiAgICB3eC5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoeyAgICAgXHJcbiAgICAgIHRpdGxlOiBcIuaIkeeahFwiXHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICAvL+mhtemdoua4suafk+WujOaIkFxyXG4gIG9uUmVhZHkoKXt9LFxyXG5cclxuICAvL+mhtemdouaYvuekulxyXG4gIG9uU2hvdygpe1xyXG4gICAgLy/liKTmlq3mmK/lkKbnmbvlvZVcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCB0b2tlbjpzdHJpbmcgPSB3eC5nZXRTdG9yYWdlU3luYygndG9rZW4nKTtcclxuICAgICAgaWYgKCEhdG9rZW4pIHtcclxuICAgICAgICBodHRwcy5zdWNjZXNzUmVxdWVzdChhcGkuY3VyVXNlciwgbnVsbCwgJ2dldCcpXHJcbiAgICAgICAgLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgICAgIGlmKHJlcyl7XHJcbiAgICAgICAgICAgIGFwaS51c2VySWQgPSByZXMudmFsLmlkOyAgICAgICAgLy/nlKjmiLdJRFxyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgIGxvZ2luSW5mbzogcmVzLnZhbC5yZWFsTmFtZSxcclxuICAgICAgICAgICAgICBsb2dpbkJ0bjogJ+mAgOWHuueZu+W9lSdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICAgICAgVG9hc3QoZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIGxvZ2luSW5mbzogJ+acqueZu+W9lScsXHJcbiAgICAgICAgICBsb2dpbkJ0bjogJ+eZu+W9lSdcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIC8vY29uc29sZS5sb2coZSlcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvL+mhtemdoumakOiXj1xyXG4gIG9uSGlkZSgpe30sXHJcblxyXG4gIC8v6aG16Z2i5YWz6ZetXHJcbiAgb25VbmxvYWQoKXt9XHJcbn0pXHJcbmV4cG9ydCB7fTtcclxuIl19