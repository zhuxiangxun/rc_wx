"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api = getApp().globalData;
var https = require('../../utils/myRequest.js');
var Dialog = require('../../miniprogram_npm/@vant/weapp/dialog/dialog.js').default;
Page({
    data: {
        isListShow: true,
        isInfoShow: false,
        longitude: '',
        latitude: '',
        scale: 12,
        markers: [],
        markersObj: {},
        cxPlatformModels: [],
        cyPlatformModels: [],
        proModels: [],
        fwjgModels: [],
        vectorModels: [],
        jrjgMdoels: [],
        tzModels: [],
        rongziPros: [],
        rongziNeeds: [],
    },
    onChange: function (event) {
        this.setData({ active: event.detail });
    },
    mapDetail: function () {
        wx.navigateTo({
            url: "../mapDetail/mapDetail"
        });
    },
    markFn: function (e) {
        console.log(e.detail.markerId);
        var arr = this.data.markers.filter(function (item) {
            return item.id == e.detail.markerId;
        });
        if (arr.length >= 1) {
            this.setData({
                markersObj: arr[0].info,
                isListShow: false,
                isInfoShow: true
            });
        }
    },
    fnClick: function () {
    },
    closeFn: function () {
        this.fnClick();
        this.setData({
            isListShow: true,
            isInfoShow: false
        });
    },
    mapArea: function () {
        wx.navigateTo({
            url: "../mapArea/mapArea"
        });
    },
    verification: function () {
        var token = wx.getStorageSync('token');
        if (!!token) {
            this.getMark();
        }
        else {
            Dialog.alert({
                message: '登录后才能查看地图！',
            }).then(function () {
                wx.navigateTo({
                    url: '../loginForm/loginForm'
                });
            });
        }
    },
    getMark: function () {
        var _this = this;
        https.successRequest(api.all, null, 'GET')
            .then(function (res) {
            if (res) {
                var cxPlatformModelsList = res.val.cxPlatformModels.map(function (item) {
                    return {
                        id: item.id,
                        longitude: item.lng,
                        latitude: item.lat,
                        iconPath: '../../images/address.png',
                        width: 30,
                        height: 30,
                        callout: {
                            content: item.ptName,
                            color: '#000',
                            fontSize: 14,
                            bgColor: '#FFF',
                            padding: 5,
                            borderRadius: 4,
                            borderColor: '#CCC',
                            borderWidth: 1,
                            display: 'BYCLICK'
                        },
                        info: item
                    };
                });
                var cyPlatformModelsList = res.val.cyPlatformModels.map(function (item) {
                    return {
                        id: item.id,
                        longitude: item.lng,
                        latitude: item.lat,
                        iconPath: '../../images/address.png',
                        width: 30,
                        height: 30,
                        callout: {
                            content: item.cyName,
                            color: '#000',
                            fontSize: 18,
                            bgColor: '#FFF',
                            padding: 5,
                            borderRadius: 4,
                            borderColor: '#CCC',
                            borderWidth: 1,
                            display: 'BYCLICK'
                        },
                        info: item
                    };
                });
                var proModelsList = res.val.proModels.map(function (item) {
                    return {
                        id: item.id,
                        longitude: item.lng,
                        latitude: item.lat,
                        iconPath: '../../images/address.png',
                        width: 30,
                        height: 30,
                        callout: {
                            content: item.proName,
                            color: '#000',
                            fontSize: 18,
                            bgColor: '#FFF',
                            padding: 5,
                            borderRadius: 4,
                            borderColor: '#CCC',
                            borderWidth: 1,
                            display: 'BYCLICK'
                        },
                        info: item
                    };
                });
                var fwjgModelsList = res.val.fwjgModels.map(function (item) {
                    return {
                        id: item.id,
                        longitude: item.lng,
                        latitude: item.lat,
                        iconPath: '../../images/address.png',
                        width: 30,
                        height: 30,
                        callout: {
                            content: item.qyName,
                            color: '#000',
                            fontSize: 18,
                            bgColor: '#FFF',
                            padding: 5,
                            borderRadius: 4,
                            borderColor: '#CCC',
                            borderWidth: 1,
                            display: 'BYCLICK'
                        },
                        info: item
                    };
                });
                var vectorModelsList = res.val.vectorModels.map(function (item) {
                    return {
                        id: item.id,
                        longitude: item.lng,
                        latitude: item.lat,
                        iconPath: '../../images/address.png',
                        width: 30,
                        height: 30,
                        callout: {
                            content: item.cyztName,
                            color: '#000',
                            fontSize: 18,
                            bgColor: '#FFF',
                            padding: 5,
                            borderRadius: 4,
                            borderColor: '#CCC',
                            borderWidth: 1,
                            display: 'BYCLICK'
                        },
                        info: item
                    };
                });
                var jrjgMdoelsList = res.val.jrjgMdoels.map(function (item) {
                    return {
                        id: item.id,
                        longitude: item.lng,
                        latitude: item.lat,
                        iconPath: '../../images/address.png',
                        width: 30,
                        height: 30,
                        callout: {
                            content: item.qyName,
                            color: '#000',
                            fontSize: 18,
                            bgColor: '#FFF',
                            padding: 5,
                            borderRadius: 4,
                            borderColor: '#CCC',
                            borderWidth: 1,
                            display: 'BYCLICK'
                        },
                        info: item
                    };
                });
                var tzModelsList = res.val.tzModels.map(function (item) {
                    return {
                        id: item.id,
                        longitude: item.lng,
                        latitude: item.lat,
                        iconPath: '../../images/address.png',
                        width: 30,
                        height: 30,
                        callout: {
                            content: item.needName,
                            color: '#000',
                            fontSize: 18,
                            bgColor: '#FFF',
                            padding: 5,
                            borderRadius: 4,
                            borderColor: '#CCC',
                            borderWidth: 1,
                            display: 'BYCLICK'
                        },
                        info: item
                    };
                });
                var rongziProsList = res.val.rongziPros.map(function (item) {
                    return {
                        id: item.id,
                        longitude: item.lng,
                        latitude: item.lat,
                        iconPath: '../../images/address.png',
                        width: 30,
                        height: 30,
                        callout: {
                            content: item.proName,
                            color: '#000',
                            fontSize: 18,
                            bgColor: '#FFF',
                            padding: 5,
                            borderRadius: 4,
                            borderColor: '#CCC',
                            borderWidth: 1,
                            display: 'BYCLICK'
                        },
                        info: item
                    };
                });
                var rongziNeedsList = res.val.rongziNeeds.map(function (item) {
                    return {
                        id: item.id,
                        longitude: item.lng,
                        latitude: item.lat,
                        iconPath: '../../images/address.png',
                        width: 30,
                        height: 30,
                        callout: {
                            content: item.needName,
                            color: '#000',
                            fontSize: 18,
                            bgColor: '#FFF',
                            padding: 5,
                            borderRadius: 4,
                            borderColor: '#CCC',
                            borderWidth: 1,
                            display: 'BYCLICK'
                        },
                        info: item
                    };
                });
                var markersList = _this.data.markers.concat(cxPlatformModelsList, cyPlatformModelsList, proModelsList, fwjgModelsList, vectorModelsList, jrjgMdoelsList, tzModelsList, rongziProsList, rongziNeedsList);
                var newMarkersList = markersList.map(function (item, index) {
                    return {
                        id: index,
                        longitude: item.longitude,
                        latitude: item.latitude,
                        iconPath: '../../images/address.png',
                        width: 30,
                        height: 30,
                        callout: item.callout,
                        info: item.info
                    };
                });
                _this.setData({
                    markers: newMarkersList
                });
            }
        }, function (err) {
            console.log(err);
        });
    },
    onLoad: function () {
        var _this = this;
        wx.setNavigationBarTitle({
            title: "人才创新创业平台地图"
        });
        wx.getLocation({
            type: 'wgs84',
            success: function (res) {
                _this.setData({
                    longitude: res.longitude,
                    latitude: res.latitude
                });
            }
        });
    },
    onShow: function () {
        this.verification();
    },
    onReady: function () { },
    onHide: function () { },
    onUnload: function () { }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFFLENBQUMsVUFBVSxDQUFDO0FBQ2hDLElBQUksS0FBSyxHQUFJLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0FBQ2pELElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxvREFBb0QsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUVuRixJQUFJLENBQUM7SUFFSCxJQUFJLEVBQUU7UUFDSixVQUFVLEVBQUUsSUFBSTtRQUNoQixVQUFVLEVBQUUsS0FBSztRQUNqQixTQUFTLEVBQUUsRUFBRTtRQUNiLFFBQVEsRUFBRSxFQUFFO1FBQ1osS0FBSyxFQUFFLEVBQUU7UUFDVCxPQUFPLEVBQUMsRUFBRTtRQUNWLFVBQVUsRUFBQyxFQUFFO1FBQ2IsZ0JBQWdCLEVBQUUsRUFBRTtRQUNwQixnQkFBZ0IsRUFBRSxFQUFFO1FBQ3BCLFNBQVMsRUFBRSxFQUFFO1FBQ2IsVUFBVSxFQUFFLEVBQUU7UUFDZCxZQUFZLEVBQUUsRUFBRTtRQUNoQixVQUFVLEVBQUUsRUFBRTtRQUNkLFFBQVEsRUFBRSxFQUFFO1FBQ1osVUFBVSxFQUFFLEVBQUU7UUFDZCxXQUFXLEVBQUUsRUFBRTtLQUNoQjtJQUVELFFBQVEsRUFBUixVQUFTLEtBQVM7UUFFaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBSUQsU0FBUyxFQUFUO1FBQ0UsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBQyx3QkFBd0I7U0FDN0IsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUlELE1BQU0sRUFBTixVQUFPLENBQUs7UUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFL0IsSUFBSSxH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QUMsR0FBTztZQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBSUQsTUFBTSxFQUFOO1FBQUEsaUJBZUM7UUFiQyxFQUFFLENBQUMscUJBQXFCLENBQUM7WUFDdkIsS0FBSyxFQUFFLFlBQVk7U0FDcEIsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLFdBQVcsQ0FBQztZQUNiLElBQUksRUFBRSxPQUFPO1lBQ2IsT0FBTyxFQUFDLFVBQUMsR0FBTztnQkFDZCxLQUFJLENBQUMsT0FBTyxDQUFDO29CQUNYLFNBQVMsRUFBRSxHQUFHLENBQUMsU0FBUztvQkFDeEIsUUFBUSxFQUFFLEdBQUcsQ0FBQyxRQUFRO2lCQUN2QixDQUFDLENBQUE7WUFDSixDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdELE1BQU07UUFDSixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUdELE9BQU8sZ0JBQUcsQ0FBQztJQUdYLE1BQU0sZ0JBQUcsQ0FBQztJQUdWLFFBQVEsZ0JBQUcsQ0FBQztDQUNiLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIG1hcC50c1xyXG5jb25zdCBhcGkgPSBnZXRBcHAoKS5nbG9iYWxEYXRhOyAgLy8g6I635Y+W5bqU55So5a6e5L6LXHJcbmxldCBodHRwcyAgPSByZXF1aXJlKCcuLi8uLi91dGlscy9teVJlcXVlc3QuanMnKTsgIC8v6I635Y+WYWpheOaWueazlVxyXG5sZXQgRGlhbG9nID0gcmVxdWlyZSgnLi4vLi4vbWluaXByb2dyYW1fbnBtL0B2YW50L3dlYXBwL2RpYWxvZy9kaWFsb2cuanMnKS5kZWZhdWx0O1xyXG5cclxuUGFnZSh7XHJcbiAgLy/pobXpnaLmlbDmja5cclxuICBkYXRhOiB7XHJcbiAgICBpc0xpc3RTaG93OiB0cnVlLCAgICAgICAgLy/pu5jorqTmmL7npLo25om+5YaF5a65XHJcbiAgICBpc0luZm9TaG93OiBmYWxzZSwgICAgICAgICAvL+WNleadoeS/oeaBr+aYvuekulxyXG4gICAgbG9uZ2l0dWRlOiAnJywgICAgICAgICAgICAvL+S4reW/g+e7j+W6plxyXG4gICAgbGF0aXR1ZGU6ICcnLCAgICAgICAgICAgICAvL+S4reW/g+e6rOW6plxyXG4gICAgc2NhbGU6IDEyLCAgICAgICAgICAgICAgICAvL+e8qeaUvue6p+WIq++8jOWPluWAvOiMg+WbtOS4ujMtMjBcclxuICAgIG1hcmtlcnM6W10sICAgICAgICAgICAgICAgLy/moIforrDngrnlpITnkIblkI7nmoTmlbDmja7vvIhpZOOAgeafpeivouS9v+eUqO+8iVxyXG4gICAgbWFya2Vyc09iajp7fSwgICAgICAgICAgICAvL+afpeivoueahOWNleadoeaVsOaNrlxyXG4gICAgY3hQbGF0Zm9ybU1vZGVsczogW10sICAgICAvL+WIm+S4muW5s+WPsFxyXG4gICAgY3lQbGF0Zm9ybU1vZGVsczogW10sICAgICAvL+WIm+aWsOW5s+WPsFxyXG4gICAgcHJvTW9kZWxzOiBbXSwgICAgICAgICAgICAvL+aJvumhueebrlxyXG4gICAgZndqZ01vZGVsczogW10sICAgICAgICAgICAvL+aJvuacjeWKoeacuuaehFxyXG4gICAgdmVjdG9yTW9kZWxzOiBbXSwgICAgICAgICAvL+aJvuWcuuWcsFxyXG4gICAganJqZ01kb2VsczogW10sICAgICAgICAgICAvL+aJvumHkeiejeacuuaehFxyXG4gICAgdHpNb2RlbHM6IFtdLCAgICAgICAgICAgICAvL+aJvuaKlei1hOmcgOaxglxyXG4gICAgcm9uZ3ppUHJvczogW10sICAgICAgICAgICAvL+aJvuiejei1hOmcgOaxgu+8iOmhueebruW6k+eahOiejei1hDfpobnvvIlcclxuICAgIHJvbmd6aU5lZWRzOiBbXSwgICAgICAgICAgLy/mib7ono3otYTpnIDmsYLvvIjpnIDmsYLlupPnmoTono3otYQ36aG577yJXHJcbiAgfSxcclxuXHJcbiAgb25DaGFuZ2UoZXZlbnQ6YW55KTp2b2lkIHtcclxuICAgIC8vIGV2ZW50LmRldGFpbCDnmoTlgLzkuLrlvZPliY3pgInkuK3pobnnmoTntKLlvJVcclxuICAgIHRoaXMuc2V0RGF0YSh7IGFjdGl2ZTogZXZlbnQuZGV0YWlsIH0pO1xyXG4gIH0sXHJcblxyXG5cclxuICAvL+WcsOWbvuivpuaDhVxyXG4gIG1hcERldGFpbCgpOnZvaWQge1xyXG4gICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgIHVybDpcIi4uL21hcERldGFpbC9tYXBEZXRhaWxcIlxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuXHJcbiAgLy/ngrnlh7vmoIforrDngrnmsJTms6Hnqpflj6Pop6blj5FcclxuICBtYXJrRm4oZTphbnkpOnZvaWQge1xyXG4gICAgY29uc29sZS5sb2coZS5kZXRhaWwubWFya2VySWQpO1xyXG4gICAgLy/mn6Xor6LljZXmnaHmlbDmja5cclxuICAgIGxldCBhcnI6YW55ID0gdGhpcy5kYXRhLm1hcmtlcnMuZmlsdGVyKChpdGVtOmFueSk6YW55PT57XHJcbiAgICAgIHJldHVybiBpdGVtLmlkID09IGUuZGV0YWlsLm1hcmtlcklkO1xyXG4gICAgfSk7XHJcbiAgICBpZihhcnIubGVuZ3RoID49IDEpe1xyXG4gICAgICAvL+aOp+WItuaYvuekuumakOiXj1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIG1hcmtlcnNPYmo6IGFyclswXS5pbmZvLFxyXG4gICAgICAgIGlzTGlzdFNob3c6IGZhbHNlLFxyXG4gICAgICAgIGlzSW5mb1Nob3c6IHRydWVcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBmbkNsaWNrKCk6YW55e1xyXG5cclxuICB9LFxyXG5cclxuICAvL+WFs+mXreWNleadoeS/oeaBr+Wbnum7mOiupFxyXG4gIGNsb3NlRm4oKTp2b2lke1xyXG4gICAgdGhpcy5mbkNsaWNrKCk7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBpc0xpc3RTaG93OiB0cnVlLFxyXG4gICAgICBpc0luZm9TaG93OiBmYWxzZVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvL+mAieaLqeW4guWMulxyXG4gIG1hcEFyZWEoKTp2b2lke1xyXG4gICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgIHVybDpcIi4uL21hcEFyZWEvbWFwQXJlYVwiXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIC8v6aqM6K+B55So5oi355m75b2V54q25oCBXHJcbiAgdmVyaWZpY2F0aW9uKCk6dm9pZHtcclxuICAgIGxldCB0b2tlbjpzdHJpbmcgPSB3eC5nZXRTdG9yYWdlU3luYygndG9rZW4nKTtcclxuICAgIGlmKCEhdG9rZW4pe1xyXG4gICAgICB0aGlzLmdldE1hcmsoKTsgIC8v6I635Y+W5Zyw5Zu+5qCH54K5XHJcbiAgICB9ZWxzZXtcclxuICAgICAgRGlhbG9nLmFsZXJ0KHtcclxuICAgICAgICBtZXNzYWdlOiAn55m75b2V5ZCO5omN6IO95p+l55yL5Zyw5Zu+77yBJyxcclxuICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICB1cmw6ICcuLi9sb2dpbkZvcm0vbG9naW5Gb3JtJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8v6I635Y+W5Zyw5Zu+5qCH54K5XHJcbiAgZ2V0TWFyaygpOnZvaWR7XHJcbiAgICBodHRwcy5zdWNjZXNzUmVxdWVzdChhcGkuYWxsLCBudWxsLCAnR0VUJylcclxuICAgIC50aGVuKChyZXM6YW55KTp2b2lkPT57XHJcbiAgICAgIGlmKHJlcyl7XHJcbiAgICAgICAgLy/liJvmlrDlubPlj7BcclxuICAgICAgICBsZXQgY3hQbGF0Zm9ybU1vZGVsc0xpc3Q6YW55ID0gcmVzLnZhbC5jeFBsYXRmb3JtTW9kZWxzLm1hcCgoaXRlbTphbnkpOmFueT0+e1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZTogaXRlbS5sbmcsICAgLy/nu4/luqZcclxuICAgICAgICAgICAgbGF0aXR1ZGU6IGl0ZW0ubGF0LCAgICAvL+e6rOW6plxyXG4gICAgICAgICAgICBpY29uUGF0aDogJy4uLy4uL2ltYWdlcy9hZGRyZXNzLnBuZycsICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIHdpZHRoOiAzMCxcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMCxcclxuICAgICAgICAgICAgY2FsbG91dDoge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IGl0ZW0ucHROYW1lLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IDE0LFxyXG4gICAgICAgICAgICAgIGJnQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1LFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNDQ0MnLFxyXG4gICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdCWUNMSUNLJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbmZvOiBpdGVtICAgIC8v6K+m5oOFXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy/liJvkuJrlubPlj7BcclxuICAgICAgICBsZXQgY3lQbGF0Zm9ybU1vZGVsc0xpc3Q6YW55ID0gcmVzLnZhbC5jeVBsYXRmb3JtTW9kZWxzLm1hcCgoaXRlbTphbnkpOmFueT0+e1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZTogaXRlbS5sbmcsICAgLy/nu4/luqZcclxuICAgICAgICAgICAgbGF0aXR1ZGU6IGl0ZW0ubGF0LCAgICAvL+e6rOW6plxyXG4gICAgICAgICAgICBpY29uUGF0aDogJy4uLy4uL2ltYWdlcy9hZGRyZXNzLnBuZycsICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIHdpZHRoOiAzMCxcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMCxcclxuICAgICAgICAgICAgY2FsbG91dDoge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IGl0ZW0uY3lOYW1lLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IDE4LFxyXG4gICAgICAgICAgICAgIGJnQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1LFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNDQ0MnLFxyXG4gICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdCWUNMSUNLJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbmZvOiBpdGVtICAgIC8v6K+m5oOFXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy/mib7pobnnm65cclxuICAgICAgICBsZXQgcHJvTW9kZWxzTGlzdDphbnkgPSByZXMudmFsLnByb01vZGVscy5tYXAoKGl0ZW06YW55KTphbnk9PntcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICBsb25naXR1ZGU6IGl0ZW0ubG5nLCAgIC8v57uP5bqmXHJcbiAgICAgICAgICAgIGxhdGl0dWRlOiBpdGVtLmxhdCwgICAgLy/nuqzluqZcclxuICAgICAgICAgICAgaWNvblBhdGg6ICcuLi8uLi9pbWFnZXMvYWRkcmVzcy5wbmcnLCAgICAgICAgICAgICAvL+agh+iusFxyXG4gICAgICAgICAgICB3aWR0aDogMzAsXHJcbiAgICAgICAgICAgIGhlaWdodDogMzAsXHJcbiAgICAgICAgICAgIGNhbGxvdXQ6IHtcclxuICAgICAgICAgICAgICBjb250ZW50OiBpdGVtLnByb05hbWUsXHJcbiAgICAgICAgICAgICAgY29sb3I6ICcjMDAwJyxcclxuICAgICAgICAgICAgICBmb250U2l6ZTogMTgsXHJcbiAgICAgICAgICAgICAgYmdDb2xvcjogJyNGRkYnLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDUsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI0NDQycsXHJcbiAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ0JZQ0xJQ0snXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluZm86IGl0ZW0gICAgLy/or6bmg4VcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy/mib7mnI3liqHmnLrmnoRcclxuICAgICAgICBsZXQgZndqZ01vZGVsc0xpc3Q6YW55ID0gcmVzLnZhbC5md2pnTW9kZWxzLm1hcCgoaXRlbTphbnkpOmFueT0+e1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZTogaXRlbS5sbmcsICAgLy/nu4/luqZcclxuICAgICAgICAgICAgbGF0aXR1ZGU6IGl0ZW0ubGF0LCAgICAvL+e6rOW6plxyXG4gICAgICAgICAgICBpY29uUGF0aDogJy4uLy4uL2ltYWdlcy9hZGRyZXNzLnBuZycsICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIHdpZHRoOiAzMCxcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMCxcclxuICAgICAgICAgICAgY2FsbG91dDoge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IGl0ZW0ucXlOYW1lICxcclxuICAgICAgICAgICAgICBjb2xvcjogJyMwMDAnLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAxOCxcclxuICAgICAgICAgICAgICBiZ0NvbG9yOiAnI0ZGRicsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNSxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXHJcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjQ0NDJyxcclxuICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnQllDTElDSydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5mbzogaXRlbSAgICAvL+ivpuaDhVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8v5om+5Zy65ZywXHJcbiAgICAgICAgbGV0IHZlY3Rvck1vZGVsc0xpc3Q6YW55ID0gcmVzLnZhbC52ZWN0b3JNb2RlbHMubWFwKChpdGVtOmFueSk6YW55PT57XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBpdGVtLmxuZywgICAvL+e7j+W6plxyXG4gICAgICAgICAgICBsYXRpdHVkZTogaXRlbS5sYXQsICAgIC8v57qs5bqmXHJcbiAgICAgICAgICAgIGljb25QYXRoOiAnLi4vLi4vaW1hZ2VzL2FkZHJlc3MucG5nJywgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgd2lkdGg6IDMwLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwLFxyXG4gICAgICAgICAgICBjYWxsb3V0OiB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogaXRlbS5jeXp0TmFtZSAgLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IDE4LFxyXG4gICAgICAgICAgICAgIGJnQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1LFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNDQ0MnLFxyXG4gICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdCWUNMSUNLJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbmZvOiBpdGVtICAgIC8v6K+m5oOFXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy/mib7ph5Hono3mnLrmnoRcclxuICAgICAgICBsZXQganJqZ01kb2Vsc0xpc3Q6YW55ID0gcmVzLnZhbC5qcmpnTWRvZWxzLm1hcCgoaXRlbTphbnkpOmFueT0+e1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZTogaXRlbS5sbmcsICAgLy/nu4/luqZcclxuICAgICAgICAgICAgbGF0aXR1ZGU6IGl0ZW0ubGF0LCAgICAvL+e6rOW6plxyXG4gICAgICAgICAgICBpY29uUGF0aDogJy4uLy4uL2ltYWdlcy9hZGRyZXNzLnBuZycsICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIHdpZHRoOiAzMCxcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMCxcclxuICAgICAgICAgICAgY2FsbG91dDoge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IGl0ZW0ucXlOYW1lLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IDE4LFxyXG4gICAgICAgICAgICAgIGJnQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1LFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNDQ0MnLFxyXG4gICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdCWUNMSUNLJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbmZvOiBpdGVtICAgIC8v6K+m5oOFXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy/mib7mipXotYTpnIDmsYJcclxuICAgICAgICBsZXQgdHpNb2RlbHNMaXN0OmFueSA9IHJlcy52YWwudHpNb2RlbHMubWFwKChpdGVtOmFueSk6YW55PT57XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBpdGVtLmxuZywgICAvL+e7j+W6plxyXG4gICAgICAgICAgICBsYXRpdHVkZTogaXRlbS5sYXQsICAgIC8v57qs5bqmXHJcbiAgICAgICAgICAgIGljb25QYXRoOiAnLi4vLi4vaW1hZ2VzL2FkZHJlc3MucG5nJywgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgd2lkdGg6IDMwLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwLFxyXG4gICAgICAgICAgICBjYWxsb3V0OiB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogaXRlbS5uZWVkTmFtZSAgICxcclxuICAgICAgICAgICAgICBjb2xvcjogJyMwMDAnLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAxOCxcclxuICAgICAgICAgICAgICBiZ0NvbG9yOiAnI0ZGRicsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNSxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXHJcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjQ0NDJyxcclxuICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnQllDTElDSydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5mbzogaXRlbSAgICAvL+ivpuaDhVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8v5om+6J6N6LWE6ZyA5rGC77yI6aG555uu5bqT55qE6J6N6LWEN+mhue+8iVxyXG4gICAgICAgIGxldCByb25nemlQcm9zTGlzdDphbnkgPSByZXMudmFsLnJvbmd6aVByb3MubWFwKChpdGVtOmFueSk6YW55PT57XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBpdGVtLmxuZywgICAvL+e7j+W6plxyXG4gICAgICAgICAgICBsYXRpdHVkZTogaXRlbS5sYXQsICAgIC8v57qs5bqmXHJcbiAgICAgICAgICAgIGljb25QYXRoOiAnLi4vLi4vaW1hZ2VzL2FkZHJlc3MucG5nJywgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgd2lkdGg6IDMwLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwLFxyXG4gICAgICAgICAgICBjYWxsb3V0OiB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogaXRlbS5wcm9OYW1lICxcclxuICAgICAgICAgICAgICBjb2xvcjogJyMwMDAnLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAxOCxcclxuICAgICAgICAgICAgICBiZ0NvbG9yOiAnI0ZGRicsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNSxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXHJcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjQ0NDJyxcclxuICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnQllDTElDSydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5mbzogaXRlbSAgICAvL+ivpuaDhVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8v5om+6J6N6LWE6ZyA5rGC77yI6ZyA5rGC5bqT55qE6J6N6LWEN+mhue+8iVxyXG4gICAgICAgIGxldCByb25nemlOZWVkc0xpc3Q6YW55ID0gcmVzLnZhbC5yb25nemlOZWVkcy5tYXAoKGl0ZW06YW55KTphbnk9PntcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICBsb25naXR1ZGU6IGl0ZW0ubG5nLCAgIC8v57uP5bqmXHJcbiAgICAgICAgICAgIGxhdGl0dWRlOiBpdGVtLmxhdCwgICAgLy/nuqzluqZcclxuICAgICAgICAgICAgaWNvblBhdGg6ICcuLi8uLi9pbWFnZXMvYWRkcmVzcy5wbmcnLCAgICAgICAgICAgICAvL+agh+iusFxyXG4gICAgICAgICAgICB3aWR0aDogMzAsXHJcbiAgICAgICAgICAgIGhlaWdodDogMzAsXHJcbiAgICAgICAgICAgIGNhbGxvdXQ6IHtcclxuICAgICAgICAgICAgICBjb250ZW50OiBpdGVtLm5lZWROYW1lLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IDE4LFxyXG4gICAgICAgICAgICAgIGJnQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1LFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNDQ0MnLFxyXG4gICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdCWUNMSUNLJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbmZvOiBpdGVtICAgIC8v6K+m5oOFXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy/lpITnkIZJROS4uuaVsOWtl1xyXG4gICAgICAgIGxldCBtYXJrZXJzTGlzdDphbnkgID0gdGhpcy5kYXRhLm1hcmtlcnMuY29uY2F0KGN4UGxhdGZvcm1Nb2RlbHNMaXN0LGN5UGxhdGZvcm1Nb2RlbHNMaXN0LHByb01vZGVsc0xpc3QsZndqZ01vZGVsc0xpc3QsdmVjdG9yTW9kZWxzTGlzdCxqcmpnTWRvZWxzTGlzdCx0ek1vZGVsc0xpc3Qscm9uZ3ppUHJvc0xpc3Qscm9uZ3ppTmVlZHNMaXN0KTtcclxuICAgICAgICBsZXQgbmV3TWFya2Vyc0xpc3Q6YW55ID0gbWFya2Vyc0xpc3QubWFwKChpdGVtOmFueSwgaW5kZXg6bnVtYmVyKTphbnk9PntcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBpbmRleCxcclxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBpdGVtLmxvbmdpdHVkZSwgICAvL+e7j+W6plxyXG4gICAgICAgICAgICBsYXRpdHVkZTogaXRlbS5sYXRpdHVkZSwgICAgLy/nuqzluqZcclxuICAgICAgICAgICAgaWNvblBhdGg6ICcuLi8uLi9pbWFnZXMvYWRkcmVzcy5wbmcnLCAgICAgICAgICAgICAvL+agh+iusFxyXG4gICAgICAgICAgICB3aWR0aDogMzAsXHJcbiAgICAgICAgICAgIGhlaWdodDogMzAsXHJcbiAgICAgICAgICAgIGNhbGxvdXQ6IGl0ZW0uY2FsbG91dCxcclxuICAgICAgICAgICAgaW5mbzogaXRlbS5pbmZvICAgIC8v6K+m5oOFXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIG1hcmtlcnM6IG5ld01hcmtlcnNMaXN0XHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG5cclxuICAvL+mhtemdouWIneWni+WMllxyXG4gIG9uTG9hZCgpe1xyXG4gICAgLy/pobXpnaLmoIfpophcclxuICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7ICAgICBcclxuICAgICAgdGl0bGU6IFwi5Lq65omN5Yib5paw5Yib5Lia5bmz5Y+w5Zyw5Zu+XCJcclxuICAgIH0pO1xyXG4gICAgLy/lvZPliY3kvY3nva5cclxuICAgIHd4LmdldExvY2F0aW9uKHtcclxuICAgICAgdHlwZTogJ3dnczg0JyxcclxuICAgICAgc3VjY2VzczoocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBsb25naXR1ZGU6IHJlcy5sb25naXR1ZGUsICAgIC8v5Lit5b+D57uP5bqmXHJcbiAgICAgICAgICBsYXRpdHVkZTogcmVzLmxhdGl0dWRlICAgICAgIC8v5Lit5b+D57qs5bqmXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgLy/pobXpnaLmmL7npLpcclxuICBvblNob3coKXtcclxuICAgIHRoaXMudmVyaWZpY2F0aW9uKCk7ICAvL+mqjOivgeeUqOaIt+eZu+W9leeKtuaAgVxyXG4gIH0sXHJcblxyXG4gIC8v6aG16Z2i5riy5p+T5a6M5oiQXHJcbiAgb25SZWFkeSgpe30sXHJcblxyXG4gIC8v6aG16Z2i6ZqQ6JePXHJcbiAgb25IaWRlKCl7fSxcclxuXHJcbiAgLy/pobXpnaLlhbPpl61cclxuICBvblVubG9hZCgpe31cclxufSlcclxuZXhwb3J0IHt9O1xyXG4iXX0=