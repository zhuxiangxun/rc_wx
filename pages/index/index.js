"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api = getApp().globalData;
var Dialog = require('../../miniprogram_npm/@vant/weapp/dialog/dialog.js').default;
var https = require('../../utils/myRequest.js');
var globalFn = require('../../utils/globalFn.js');
var expressFn = globalFn.throttle(function () {
    wx.navigateTo({
        url: "../news/news"
    });
}, 1000);
var template = require('../../templates/template.js');
Page({
    data: {
        list: {
            cyModel: 0,
            cxModel: 0,
            cxcyCount: 0,
            fwCount: 0,
            talentCountModel: 0,
            zcCount: 0,
            fwTypeCount: 0,
            productCount: 0,
            vectorCount: 0,
            proCount: 0,
            equipCount: 0,
            needCount: 0
        }
    },
    indexHeaderFn: function (event) {
        template.indexHeaderFn(event);
    },
    onPullDownRefresh: function () {
        wx.showNavigationBarLoading();
        this.getData();
    },
    newsClick: function () {
        expressFn();
    },
    getData: function () {
        var _this = this;
        wx.showNavigationBarLoading();
        https.request(api.count, null, 'GET')
            .then(function (res) {
            _this.setData({
                list: {
                    cyModel: res.val.cyModel.platformCount ? res.val.cyModel.platformCount : 0,
                    cxModel: res.val.cxModel.platformCount ? res.val.cxModel.platformCount : 0,
                    cxcyCount: res.val.cxcyCount ? res.val.cxcyCount : 0,
                    fwCount: res.val.fwCount ? res.val.fwCount : 0,
                    talentCountModel: res.val.talentCountModel.talentCount ? res.val.talentCountModel.talentCount : 0,
                    zcCount: res.val.zcCount ? res.val.zcCount : 0,
                    fwTypeCount: res.val.fwTypeCount ? res.val.fwTypeCount : 0,
                    productCount: res.val.productCount ? res.val.productCount : 0,
                    vectorCount: res.val.vectorCount ? res.val.vectorCount : 0,
                    proCount: res.val.proCount ? res.val.proCount : 0,
                    equipCount: res.val.equipCount ? res.val.equipCount : 0,
                    needCount: res.val.needCount ? res.val.needCount : 0
                }
            });
            wx.hideNavigationBarLoading();
            wx.stopPullDownRefresh();
        }, function (err) {
            console.log(err);
        });
    },
    ptFn: function () {
        var token = wx.getStorageSync('token');
        if (!!token) {
            api.indexFlag = 'pt';
            wx.switchTab({
                url: '../map/map'
            });
        }
        else {
            wx.navigateTo({
                url: '../loginForm/loginForm'
            });
        }
    },
    zcFn: function () {
        wx.navigateToMiniProgram({
            appId: 'wxf4083a5f8365a30a',
            path: 'https://rc.qingdao.gov.cn',
            success: function () {
            }
        });
    },
    linkFn: function () {
        Dialog.alert({
            message: '“平台地图”正与全市人才相关部门办事服务实现互联互通，目前，请先使用“青岛人才”进行登录办理，后期将逐步完善各项功能板块，敬请期待！',
        }).then(function () {
            wx.navigateToMiniProgram({
                appId: 'wx2e070e33c6154515',
                path: 'https://rc.qingdao.gov.cn',
                success: function () {
                }
            });
        });
    },
    xmFn: function () {
        var token = wx.getStorageSync('token');
        if (!!token) {
            api.indexFlag = 'xm';
            wx.switchTab({
                url: '../map/map'
            });
        }
        else {
            wx.navigateTo({
                url: '../loginForm/loginForm'
            });
        }
    },
    zjFn: function () {
        var token = wx.getStorageSync('token');
        if (!!token) {
            api.indexFlag = 'zj';
            wx.switchTab({
                url: '../map/map'
            });
        }
        else {
            wx.navigateTo({
                url: '../loginForm/loginForm'
            });
        }
    },
    cdFn: function () {
        var token = wx.getStorageSync('token');
        if (!!token) {
            api.indexFlag = 'cd';
            wx.switchTab({
                url: '../map/map'
            });
        }
        else {
            wx.navigateTo({
                url: '../loginForm/loginForm'
            });
        }
    },
    fwFn: function () {
        var token = wx.getStorageSync('token');
        if (!!token) {
            api.indexFlag = 'fw';
            wx.switchTab({
                url: '../map/map'
            });
        }
        else {
            wx.navigateTo({
                url: '../loginForm/loginForm'
            });
        }
    },
    mapFn: function () {
        var token = wx.getStorageSync('token');
        if (!!token) {
            wx.switchTab({
                url: '../map/map'
            });
        }
        else {
            wx.navigateTo({
                url: '../loginForm/loginForm'
            });
        }
    },
    jyFn: function () {
        var token = wx.getStorageSync('token');
        if (!!token) {
            wx.navigateTo({
                url: '../transaction/transaction'
            });
        }
        else {
            wx.navigateTo({
                url: '../loginForm/loginForm'
            });
        }
    },
    yqFn: function () {
        var token = wx.getStorageSync('token');
        if (!!token) {
            wx.navigateTo({
                url: '../device/device'
            });
        }
        else {
            wx.navigateTo({
                url: '../loginForm/loginForm'
            });
        }
    },
    onLoad: function () {
        this.getData();
    },
    onShow: function () { },
    onReady: function () { },
    onHide: function () { },
    onUnload: function () { },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBRSxDQUFDLFVBQVUsQ0FBQztBQUNoQyxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsb0RBQW9ELENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDbkYsSUFBSSxLQUFLLEdBQUksT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUM7QUFDakQsSUFBSSxRQUFRLEdBQUksT0FBTyxDQUFDLHlCQUF5QixDQUFDLENBQUM7QUFDbkQsSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQztJQUNoQyxFQUFFLENBQUMsVUFBVSxDQUFDO1FBQ1osR0FBRyxFQUFDLGNBQWM7S0FDbkIsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxFQUFDLElBQUksQ0FBQyxDQUFDO0FBQ1IsSUFBSSxRQUFRLEdBQU8sT0FBTyxDQUFDLDZCQUE2QixDQUFDLENBQUM7QUFFMUQsSUFBSSxDQUFDO0lBRUgsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFDO1lBQ0gsT0FBTyxFQUFFLENBQUM7WUFDVixPQUFPLEVBQUUsQ0FBQztZQUNWLFNBQVMsRUFBRSxDQUFDO1lBQ1osT0FBTyxFQUFFLENBQUM7WUFDVixnQkFBZ0IsRUFBRSxDQUFDO1lBQ25CLE9BQU8sRUFBRSxDQUFDO1lBQ1YsV0FBVyxFQUFFLENBQUM7WUFDZCxZQUFZLEVBQUUsQ0FBQztZQUNmLFdBQVcsRUFBRSxDQUFDO1lBQ2QsUUFBUSxFQUFFLENBQUM7WUFDWCxVQUFVLEVBQUUsQ0FBQztZQUNiLFNBQVMsRUFBRSxDQUFDO1NBQ2I7S0FDRjtJQUdELGFBQWEsRUFBYixVQUFjLEtBQVM7UUFDckIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBR0QsaUJBQWlCLEVBQWpCO1FBQ0UsRUFBRSxDQUFDLHdCQUF3QixFQUFFLENBQUM7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clxuLy8g6I635Y+W5bqU55So5a6e5L6LXHJcbmNvbnN0IGFwaSA9IGdldEFwcCgpLmdsb2JhbERhdGE7ICAvLyDojrflj5blupTnlKjlrp7kvotcclxubGV0IERpYWxvZyA9IHJlcXVpcmUoJy4uLy4uL21pbmlwcm9ncmFtX25wbS9AdmFudC93ZWFwcC9kaWFsb2cvZGlhbG9nLmpzJykuZGVmYXVsdDtcclxubGV0IGh0dHBzICA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL215UmVxdWVzdC5qcycpOyAgICAgLy/ojrflj5ZhamF45pa55rOVXHJcbmxldCBnbG9iYWxGbiAgPSByZXF1aXJlKCcuLi8uLi91dGlscy9nbG9iYWxGbi5qcycpOyAgIC8v6I635Y+W5YWs5YWx5bCB6KOF5pa55rOVXHJcbmxldCBleHByZXNzRm4gPSBnbG9iYWxGbi50aHJvdHRsZShmdW5jdGlvbigpeyAgICAgICAgIC8v5L+h5oGv6YCf6YCS77yI5Ye95pWw6Ziy5oqW77yJXHJcbiAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICB1cmw6XCIuLi9uZXdzL25ld3NcIlxyXG4gIH0pXHJcbn0sMTAwMCk7XHJcbmxldCB0ZW1wbGF0ZTphbnkgPSByZXF1aXJlKCcuLi8uLi90ZW1wbGF0ZXMvdGVtcGxhdGUuanMnKTsgICAvL+iOt+WPlmluZGV4SGVhZGVy5qih5p2/55qE5pa55rOVXHJcblxyXG5QYWdlKHtcclxuICAvL+mhtemdouaVsOaNrlxyXG4gIGRhdGE6IHtcclxuICAgIGxpc3Q6eyAgLy/nu5/orqExMuadoeS/oeaBr1xyXG4gICAgICBjeU1vZGVsOiAwLCAgICAgICAgICAgICAvL+WIm+S4muW5s+WPsFxyXG4gICAgICBjeE1vZGVsOiAwLCAgICAgICAgICAgICAvL+WIm+aWsOW5s+WPsFxyXG4gICAgICBjeGN5Q291bnQ6IDAsICAgICAgICAgICAvL+WPjOWIm+acuuaehFxyXG4gICAgICBmd0NvdW50OiAwLCAgICAgICAgICAgICAvL+WPjOWIm+acjeWKoeacuuaehFxyXG4gICAgICB0YWxlbnRDb3VudE1vZGVsOiAwLCAgICAvL+mHjeeCueS6uuaJjVxyXG4gICAgICB6Y0NvdW50OiAwLCAgICAgICAgICAgICAvL+aUv+etluacjeWKoVxyXG4gICAgICBmd1R5cGVDb3VudDogMCwgICAgICAgICAvL+WPjOWIm+acjeWKoeS6p+WTgeKAlOe7n+iuoeacjeWKoeexu+WIq+eahOaVsOmHj1xyXG4gICAgICBwcm9kdWN0Q291bnQ6IDAsICAgICAgICAvL+WPjOWIm+aKgOacr+aIkOaenFxyXG4gICAgICB2ZWN0b3JDb3VudDogMCwgICAgICAgICAvL+WIm+S4mui9veS9k+i1hOa6kFxyXG4gICAgICBwcm9Db3VudDogMCwgICAgICAgICAgICAvL+WIm+aWsOWIm+S4mumhueebrlxyXG4gICAgICBlcXVpcENvdW50OiAwLCAgICAgICAgICAvL+S7quWZqOiuvuWkh+i1hOa6kFxyXG4gICAgICBuZWVkQ291bnQ6IDAgICAgICAgICAgICAvL+WIm+aWsOWIm+S4mumcgOaxguWvueaOpVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8v5qih5p2/54K55Ye75LqL5Lu2XHJcbiAgaW5kZXhIZWFkZXJGbihldmVudDphbnkpOnZvaWR7XHJcbiAgICB0ZW1wbGF0ZS5pbmRleEhlYWRlckZuKGV2ZW50KTtcclxuICB9LFxyXG5cclxuICAvL+S4i+aLieWIt+aWsFxyXG4gIG9uUHVsbERvd25SZWZyZXNoKCk6dm9pZHtcclxuICAgIHd4LnNob3dOYXZpZ2F0aW9uQmFyTG9hZGluZygpOyAgIC8v5Zyo5qCH6aKY5qCP5Lit5pi+56S65Yqg6L29XHJcbiAgICB0aGlzLmdldERhdGEoKTsgICAgICAgICAgICAgICAgICAvL+iOt+WPlue7n+iuoeaVsOaNruaWueazlVxyXG4gIH0sXHJcblxyXG4gIC8v5L+h5oGv6YCf6YCS77yI5Ye95pWw6Ziy5oqW77yJXHJcbiAgbmV3c0NsaWNrKCk6dm9pZCB7XHJcbiAgICBleHByZXNzRm4oKTsgIC8v6Lez6L2s5L+h5oGv6YCf6YCSXHJcbiAgfSxcclxuXHJcbiAgLy/ojrflj5bnu5/orqHmlbDmja7mlrnms5VcclxuICBnZXREYXRhKCl7XHJcbiAgICB3eC5zaG93TmF2aWdhdGlvbkJhckxvYWRpbmcoKSAvL+WcqOagh+mimOagj+S4reaYvuekuuWKoOi9vVxyXG4gICAgaHR0cHMucmVxdWVzdChhcGkuY291bnQsIG51bGwsICdHRVQnKVxyXG4gICAgLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBsaXN0OntcclxuICAgICAgICAgIGN5TW9kZWw6IHJlcy52YWwuY3lNb2RlbC5wbGF0Zm9ybUNvdW50P3Jlcy52YWwuY3lNb2RlbC5wbGF0Zm9ybUNvdW50OjAsICAgICAgICAgICAgIC8v5Yib5Lia5bmz5Y+wXHJcbiAgICAgICAgICBjeE1vZGVsOiByZXMudmFsLmN4TW9kZWwucGxhdGZvcm1Db3VudD9yZXMudmFsLmN4TW9kZWwucGxhdGZvcm1Db3VudDowLCAgICAgICAgICAgICAvL+WIm+aWsOW5s+WPsFxyXG4gICAgICAgICAgY3hjeUNvdW50OiByZXMudmFsLmN4Y3lDb3VudD9yZXMudmFsLmN4Y3lDb3VudDowLCAgICAgICAgICAgLy/lj4zliJvmnLrmnoRcclxuICAgICAgICAgIGZ3Q291bnQ6IHJlcy52YWwuZndDb3VudD9yZXMudmFsLmZ3Q291bnQ6MCwgICAgICAgICAgICAgLy/lj4zliJvmnI3liqHmnLrmnoRcclxuICAgICAgICAgIHRhbGVudENvdW50TW9kZWw6IHJlcy52YWwudGFsZW50Q291bnRNb2RlbC50YWxlbnRDb3VudD9yZXMudmFsLnRhbGVudENvdW50TW9kZWwudGFsZW50Q291bnQ6MCwgICAgLy/ph43ngrnkurrmiY1cclxuICAgICAgICAgIHpjQ291bnQ6IHJlcy52YWwuemNDb3VudD9yZXMudmFsLnpjQ291bnQ6MCwgICAgICAgICAgICAgLy/mlL/nrZbmnI3liqFcclxuICAgICAgICAgIGZ3VHlwZUNvdW50OiByZXMudmFsLmZ3VHlwZUNvdW50P3Jlcy52YWwuZndUeXBlQ291bnQ6MCwgICAgICAgICAvL+WPjOWIm+acjeWKoeS6p+WTgeKAlOe7n+iuoeacjeWKoeexu+WIq+eahOaVsOmHj1xyXG4gICAgICAgICAgcHJvZHVjdENvdW50OiByZXMudmFsLnByb2R1Y3RDb3VudD9yZXMudmFsLnByb2R1Y3RDb3VudDowLCAgICAgICAgLy/lj4zliJvmioDmnK/miJDmnpxcclxuICAgICAgICAgIHZlY3RvckNvdW50OiByZXMudmFsLnZlY3RvckNvdW50P3Jlcy52YWwudmVjdG9yQ291bnQ6MCwgICAgICAgICAvL+WIm+S4mui9veS9k+i1hOa6kFxyXG4gICAgICAgICAgcHJvQ291bnQ6IHJlcy52YWwucHJvQ291bnQ/cmVzLnZhbC5wcm9Db3VudDowLCAgICAgICAgICAgIC8v5Yib5paw5Yib5Lia6aG555uuXHJcbiAgICAgICAgICBlcXVpcENvdW50OiByZXMudmFsLmVxdWlwQ291bnQ/cmVzLnZhbC5lcXVpcENvdW50OjAsICAgICAgICAgIC8v5Luq5Zmo6K6+5aSH6LWE5rqQXHJcbiAgICAgICAgICBuZWVkQ291bnQ6IHJlcy52YWwubmVlZENvdW50P3Jlcy52YWwubmVlZENvdW50OjAgICAgICAgICAgICAvL+WIm+aWsOWIm+S4mumcgOaxguWvueaOpVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgd3guaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nKCk7ICAvL+WujOaIkOWBnOatouWKoOi9vVxyXG4gICAgICB3eC5zdG9wUHVsbERvd25SZWZyZXNoKCk7ICAgICAgIC8v5YGc5q2i5LiL5ouJ5Yi35pawXHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgLy/mib7lubPlj7BcclxuICBwdEZuKCk6dm9pZHtcclxuICAgIGxldCB0b2tlbjpzdHJpbmcgPSB3eC5nZXRTdG9yYWdlU3luYygndG9rZW4nKTtcclxuICAgIGlmKCEhdG9rZW4pe1xyXG4gICAgICBhcGkuaW5kZXhGbGFnID0gJ3B0JztcclxuICAgICAgd3guc3dpdGNoVGFiKHtcclxuICAgICAgICB1cmw6ICcuLi9tYXAvbWFwJ1xyXG4gICAgICB9KVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybDogJy4uL2xvZ2luRm9ybS9sb2dpbkZvcm0nXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgemNGbigpOnZvaWR7XHJcbiAgICB3eC5uYXZpZ2F0ZVRvTWluaVByb2dyYW0oe1xyXG4gICAgICBhcHBJZDogJ3d4ZjQwODNhNWY4MzY1YTMwYScsXHJcbiAgICAgIHBhdGg6ICdodHRwczovL3JjLnFpbmdkYW8uZ292LmNuJyxcclxuICAgICAgc3VjY2VzcygpIHtcclxuICAgICAgICAvLyDmiZPlvIDmiJDlip9cclxuICAgICAgICAvLyB3eC5zd2l0Y2hUYWIoe1xyXG4gICAgICAgIC8vICAgdXJsOiAnL3BhZ2VzL2luZGV4L2luZGV4J1xyXG4gICAgICAgIC8vIH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgLy/kurrmiY3nvZHlpJbpk75cclxuICBsaW5rRm4oKTp2b2lke1xyXG4gICAgRGlhbG9nLmFsZXJ0KHtcclxuICAgICAgbWVzc2FnZTogJ+KAnOW5s+WPsOWcsOWbvuKAneato+S4juWFqOW4guS6uuaJjeebuOWFs+mDqOmXqOWKnuS6i+acjeWKoeWunueOsOS6kuiBlOS6kumAmu+8jOebruWJje+8jOivt+WFiOS9v+eUqOKAnOmdkuWym+S6uuaJjeKAnei/m+ihjOeZu+W9leWKnueQhu+8jOWQjuacn+WwhumAkOatpeWujOWWhOWQhOmhueWKn+iDveadv+Wdl++8jOaVrOivt+acn+W+he+8gScsXHJcbiAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgd3gubmF2aWdhdGVUb01pbmlQcm9ncmFtKHtcclxuICAgICAgICBhcHBJZDogJ3d4MmUwNzBlMzNjNjE1NDUxNScsXHJcbiAgICAgICAgcGF0aDogJ2h0dHBzOi8vcmMucWluZ2Rhby5nb3YuY24nLFxyXG4gICAgICAgIHN1Y2Nlc3MoKSB7XHJcbiAgICAgICAgICAvLyDmiZPlvIDmiJDlip9cclxuICAgICAgICAgIC8vIHd4LnN3aXRjaFRhYih7XHJcbiAgICAgICAgICAvLyAgIHVybDogJy9wYWdlcy9pbmRleC9pbmRleCdcclxuICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgLy/mib7pobnnm65cclxuICB4bUZuKCk6dm9pZHtcclxuICAgIGxldCB0b2tlbjpzdHJpbmcgPSB3eC5nZXRTdG9yYWdlU3luYygndG9rZW4nKTtcclxuICAgIGlmKCEhdG9rZW4pe1xyXG4gICAgICBhcGkuaW5kZXhGbGFnID0gJ3htJztcclxuICAgICAgd3guc3dpdGNoVGFiKHtcclxuICAgICAgICB1cmw6ICcuLi9tYXAvbWFwJ1xyXG4gICAgICB9KVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybDogJy4uL2xvZ2luRm9ybS9sb2dpbkZvcm0nXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLy/mib7otYTph5FcclxuICB6akZuKCk6dm9pZHtcclxuICAgIGxldCB0b2tlbjpzdHJpbmcgPSB3eC5nZXRTdG9yYWdlU3luYygndG9rZW4nKTtcclxuICAgIGlmKCEhdG9rZW4pe1xyXG4gICAgICBhcGkuaW5kZXhGbGFnID0gJ3pqJztcclxuICAgICAgd3guc3dpdGNoVGFiKHtcclxuICAgICAgICB1cmw6ICcuLi9tYXAvbWFwJ1xyXG4gICAgICB9KVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybDogJy4uL2xvZ2luRm9ybS9sb2dpbkZvcm0nXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLy/mib7lnLrlnLBcclxuICBjZEZuKCk6dm9pZHtcclxuICAgIGxldCB0b2tlbjpzdHJpbmcgPSB3eC5nZXRTdG9yYWdlU3luYygndG9rZW4nKTtcclxuICAgIGlmKCEhdG9rZW4pe1xyXG4gICAgICBhcGkuaW5kZXhGbGFnID0gJ2NkJztcclxuICAgICAgd3guc3dpdGNoVGFiKHtcclxuICAgICAgICB1cmw6ICcuLi9tYXAvbWFwJ1xyXG4gICAgICB9KVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybDogJy4uL2xvZ2luRm9ybS9sb2dpbkZvcm0nXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLy/mib7mnI3liqFcclxuICBmd0ZuKCk6dm9pZHtcclxuICAgIGxldCB0b2tlbjpzdHJpbmcgPSB3eC5nZXRTdG9yYWdlU3luYygndG9rZW4nKTtcclxuICAgIGlmKCEhdG9rZW4pe1xyXG4gICAgICBhcGkuaW5kZXhGbGFnID0gJ2Z3JztcclxuICAgICAgd3guc3dpdGNoVGFiKHtcclxuICAgICAgICB1cmw6ICcuLi9tYXAvbWFwJ1xyXG4gICAgICB9KVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybDogJy4uL2xvZ2luRm9ybS9sb2dpbkZvcm0nXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLy/lnLDlm75cclxuICBtYXBGbigpOnZvaWR7XHJcbiAgICBsZXQgdG9rZW46c3RyaW5nID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3Rva2VuJyk7XHJcbiAgICBpZighIXRva2VuKXtcclxuICAgICAgd3guc3dpdGNoVGFiKHsgXHJcbiAgICAgICAgdXJsOicuLi9tYXAvbWFwJ1xyXG4gICAgICB9KTtcclxuICAgIH1lbHNle1xyXG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6ICcuLi9sb2dpbkZvcm0vbG9naW5Gb3JtJ1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8v5oiR6KaB5Lqk5piTXHJcbiAganlGbigpOnZvaWR7XHJcbiAgICBsZXQgdG9rZW46c3RyaW5nID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3Rva2VuJyk7XHJcbiAgICBpZighIXRva2VuKXtcclxuICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgdXJsOicuLi90cmFuc2FjdGlvbi90cmFuc2FjdGlvbidcclxuICAgICAgfSlcclxuICAgIH1lbHNle1xyXG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6ICcuLi9sb2dpbkZvcm0vbG9naW5Gb3JtJ1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8v5oiR6KaB5Luq5Zmo6K6+5aSHXHJcbiAgeXFGbigpOnZvaWR7XHJcbiAgICBsZXQgdG9rZW46c3RyaW5nID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3Rva2VuJyk7XHJcbiAgICBpZighIXRva2VuKXtcclxuICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgdXJsOicuLi9kZXZpY2UvZGV2aWNlJ1xyXG4gICAgICB9KVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybDogJy4uL2xvZ2luRm9ybS9sb2dpbkZvcm0nXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcblxyXG4gIC8v6aG16Z2i5Yid5aeL5YyWXHJcbiAgb25Mb2FkKCl7XHJcbiAgICB0aGlzLmdldERhdGEoKTsgIC8v6I635Y+W57uf6K6h5pWw5o2u5pa55rOVXHJcbiAgfSxcclxuXHJcbiAgLy/pobXpnaLmmL7npLpcclxuICBvblNob3coKXt9LFxyXG5cclxuICAvL+mhtemdoua4suafk+WujOaIkFxyXG4gIG9uUmVhZHkoKXt9LFxyXG5cclxuICAvL+mhtemdoumakOiXj1xyXG4gIG9uSGlkZSgpe30sXHJcblxyXG4gIC8v6aG16Z2i5YWz6ZetXHJcbiAgb25VbmxvYWQoKXt9LFxyXG5cclxuXHJcbn0pXHJcbmV4cG9ydCB7fTtcclxuIl19