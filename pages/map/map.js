"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api = getApp().globalData;
var https = require('../../utils/myRequest.js');
var Dialog = require('../../miniprogram_npm/@vant/weapp/dialog/dialog.js').default;
Page({
    data: {
        isListShow: true,
        isInfoShow: false,
        isSearchShow: false,
        isSearchInfoShow: false,
        searchKey: '',
        industryList: [
            {
                text: '现代海洋现代海洋现代海洋',
                children: [
                    {
                        text: '全部',
                        id: 1,
                        cyID: 11
                    },
                    {
                        text: '温州',
                        id: 2,
                        cyID: 22
                    },
                ]
            },
        ],
        flg: '',
        num: 0,
        mumList: [],
        ptSearchInfoShow: true,
        ptBtnShow: false,
        ptBtnClass: 1,
        ptIndex: 0,
        ptIndustryId: null,
        proSearchInfoShow: false,
        proIndex: 0,
        proIndustryId: null,
        zjSearchInfoShow: false,
        jrSearchInfoShow: false,
        jrIndex: 0,
        jrIndustryId: null,
        tzSearchInfoShow: false,
        tzIndex: 0,
        tzIndustryId: null,
        rzSearchInfoShow: false,
        rzIndex: 0,
        rzIndustryId: null,
        cdSearchInfoShow: false,
        cdIndex: 0,
        cdIndustryId: null,
        fwSearchInfoShow: false,
        fwIndex: 0,
        fwIndustryId: null,
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
        goName: '',
        goLongitude: '',
        goLatitude: '',
    },
    searchInfoOpen: function () {
        this.setData({
            isListShow: false,
            isInfoShow: false,
            isSearchShow: false,
            isSearchInfoShow: true,
        });
    },
    searchInfoClose: function () {
        this.setData({
            isListShow: false,
            isInfoShow: false,
            isSearchShow: true,
            isSearchInfoShow: false,
        });
    },
    searchClose: function () {
        this.setData({
            num: 0,
            mumList: [],
            isListShow: true,
            isInfoShow: false,
            isSearchShow: false,
            isSearchInfoShow: false,
        });
    },
    ptFn: function () {
        this.setData({
            num: 0,
            mumList: [],
            isListShow: false,
            isInfoShow: false,
            isSearchShow: true,
            isSearchInfoShow: false,
        });
        this.getCxPro();
        this.getCyPro();
    },
    getCxPro: function () {
        var _this = this;
        https.successRequest(api.cxPlatformUser, {
            cyTypeId: '',
            hyTypeId: '',
            typeId: '',
            ziZhi: '',
            tenantId: '',
        }, 'GET')
            .then(function (res) {
            if (res) {
                var list = res.list.map(function (item) {
                    return {
                        id: item.id,
                        longitude: item.longitude,
                        latitude: item.latitude,
                        title: item.cxName,
                        provinceName: item.provinceName ? item.provinceName : '',
                        cityName: item.cityName ? item.cityName : '',
                        districtName: item.districtName ? item.districtName : '',
                        markers: item.markers
                    };
                });
                _this.setData({
                    num: _this.data.num += res.total,
                    mumList: _this.data.mumList.concat(list)
                });
            }
        }, function (err) {
            console.log(err);
        });
    },
    getCyPro: function () {
        var _this = this;
        https.successRequest(api.cyPlatUser, {
            cyTypeId: '',
            hyTypeId: '',
            typeId: '',
            ziZhi: '',
            tenantId: '',
        }, 'GET')
            .then(function (res) {
            if (res) {
                var list = res.list.map(function (item) {
                    return {
                        id: item.id,
                        longitude: item.longitude,
                        latitude: item.latitude,
                        title: item.cyName,
                        provinceName: item.provinceName ? item.provinceName : '',
                        cityName: item.cityName ? item.cityName : '',
                        districtName: item.districtName ? item.districtName : '',
                        markers: item.markers
                    };
                });
                _this.setData({
                    num: _this.data.num += res.total,
                    mumList: _this.data.mumList.concat(list)
                });
            }
        }, function (err) {
            console.log(err);
        });
    },
    ptBtnToggle: function (e) {
        if (e.target.dataset.num == 1) {
            this.setData({
                ptBtnClass: e.target.dataset.num,
                ptBtnShow: false,
                num: 0,
                mumList: [],
            });
            this.getCxPro();
            this.getCyPro();
        }
        else if (e.target.dataset.num == 2) {
            this.setData({
                ptBtnClass: e.target.dataset.num,
                ptBtnShow: true,
                num: 0,
                mumList: [],
            });
            this.getCxPro();
        }
        else {
            this.setData({
                ptBtnClass: e.target.dataset.num,
                ptBtnShow: true,
                num: 0,
                mumList: [],
            });
            this.getCyPro();
        }
    },
    ptIndustryItem: function (data) {
        this.setData({
            ptIndustryId: data.detail.id
        });
    },
    proIndustryItem: function (data) {
        this.setData({
            proIndustryId: data.detail.id
        });
    },
    cdIndustryItem: function (data) {
        this.setData({
            cdIndustryId: data.detail.id
        });
    },
    fwIndustryItem: function (data) {
        this.setData({
            fwIndustryId: data.detail.id
        });
    },
    jrIndustryItem: function (data) {
        this.setData({
            jrIndustryId: data.detail.id
        });
    },
    tzIndustryItem: function (data) {
        this.setData({
            tzIndustryId: data.detail.id
        });
    },
    rzIndustryItem: function (data) {
        this.setData({
            rzIndustryId: data.detail.id
        });
    },
    navigation: function (e) {
        if (!!e.currentTarget.dataset.markers) {
            var markers = JSON.parse(e.currentTarget.dataset.markers)[0].position;
            if (markers.length > 0) {
                this.setData({
                    goLongitude: markers[0].lng,
                    goLatitude: markers[0].lat
                });
            }
        }
        var endPoint = JSON.stringify({
            'name': this.data.goName,
            'longitude': parseFloat(this.data.goLongitude),
            'latitude': parseFloat(this.data.goLatitude)
        });
        wx.navigateTo({
            url: 'plugin://routePlan/index?key=' + api.mapApiKey + '&referer=才赋云' + '&endPoint=' + endPoint
        });
    },
    mapArea: function () {
        wx.navigateTo({
            url: "../mapArea/mapArea"
        });
    },
    mapDetail: function () {
        wx.navigateTo({
            url: "../mapDetail/mapDetail"
        });
    },
    markFn: function (e) {
        var arr = this.data.markers.filter(function (item) {
            return item.id == e.detail.markerId;
        });
        if (arr.length >= 1) {
            this.setData({
                goName: arr[0].callout.content,
                goLongitude: arr[0].longitude,
                goLatitude: arr[0].latitude,
                markersObj: arr[0],
                isListShow: false,
                isInfoShow: true,
                isSearchShow: false,
                isSearchInfoShow: false,
            });
        }
    },
    closeFn: function () {
        this.setData({
            isListShow: true,
            isInfoShow: false,
            isSearchShow: false,
            isSearchInfoShow: false,
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
                        provinceName: item.provinceName ? item.provinceName : '',
                        cityName: item.cityName ? item.cityName : '',
                        districtName: item.districtName ? item.districtName : ''
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
                        provinceName: item.provinceName ? item.provinceName : '',
                        cityName: item.cityName ? item.cityName : '',
                        districtName: item.districtName ? item.districtName : ''
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
                        provinceName: item.provinceName ? item.provinceName : '',
                        cityName: item.cityName ? item.cityName : '',
                        districtName: item.districtName ? item.districtName : ''
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
                        provinceName: item.provinceName ? item.provinceName : '',
                        cityName: item.cityName ? item.cityName : '',
                        districtName: item.districtName ? item.districtName : ''
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
                        provinceName: item.provinceName ? item.provinceName : '',
                        cityName: item.cityName ? item.cityName : '',
                        districtName: item.districtName ? item.districtName : ''
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
                        provinceName: item.provinceName ? item.provinceName : '',
                        cityName: item.cityName ? item.cityName : '',
                        districtName: item.districtName ? item.districtName : ''
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
                        provinceName: item.provinceName ? item.provinceName : '',
                        cityName: item.cityName ? item.cityName : '',
                        districtName: item.districtName ? item.districtName : ''
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
                        provinceName: item.provinceName ? item.provinceName : '',
                        cityName: item.cityName ? item.cityName : '',
                        districtName: item.districtName ? item.districtName : ''
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
                        provinceName: item.provinceName ? item.provinceName : '',
                        cityName: item.cityName ? item.cityName : '',
                        districtName: item.districtName ? item.districtName : ''
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
                        oldId: item.id,
                        title: item.callout.content,
                        provinceName: item.provinceName,
                        cityName: item.cityName,
                        districtName: item.districtName
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
    onHide: function () {
        this.setData({
            isListShow: true,
            isInfoShow: false,
            isSearchShow: false,
            isSearchInfoShow: false,
        });
    },
    onUnload: function () { }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFFLENBQUMsVUFBVSxDQUFDO0FBQ2hDLElBQUksS0FBSyxHQUFJLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0FBQ2pELElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxvREFBb0QsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUVuRixJQUFJLENBQUM7SUFFSCxJQUFJLEVBQUU7UUFFSixVQUFVLEVBQUUsSUFBSTtRQUNoQixVQUFVLEVBQUUsS0FBSztRQUNqQixZQUFZLEVBQUUsS0FBSztRQUNuQixnQkFBZ0IsRUFBRSxLQUFLO1FBQ3ZCLFNBQVMsRUFBRSxFQUFFO1FBQ2IsWUFBWSxFQUFFO1lBQ1o7Z0JBQ0UsSUFBSSxFQUFFLGNBQWM7Z0JBQ3BCLFFBQVEsRUFBQztvQkFDUDt3QkFDRSxJQUFJLEVBQUUsSUFBSTt3QkFDVixFQUFFLEVBQUUsQ0FBQzt3QkFDTCxJQUFJLEVBQUUsRUFBRTtxQkFDVDtvQkFDRDt3QkFDRSxJQUFJLEVBQUUsSUFBSTt3QkFDVixFQUFFLEVBQUUsQ0FBQzt3QkFDTCxJQUFJLEVBQUUsRUFBRTtxQkFDVDtpQkFDRjthQUNGO1NBQ0Y7UUFHRCxHQUFHLEVBQUUsRUFBRTtRQUNQLEdBQUcsRUFBRSxDQUFDO1FBQ04sT0FBTyxFQUFFLEVBQUU7UUFJWCxnQkFBZ0IsRUFBRSxJQUFJO1FBQ3RCLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLFVBQVUsRUFBRSxDQUFDO1FBQ2IsT0FBTyxFQUFFLENBQUM7UUFDVixZQUFZLEVBQUUsSUFBSTtRQUdsQixpQkFBaUIsRUFBRSxLQUFLO1FBQ3hCLFFBQVEsRUFBRSxDQUFDO1FBQ1gsYUFBYSxFQUFFLElBQUk7UUFJbkIsZ0JBQWdCLEVBQUUsS0FBSztRQUV2QixnQkFBZ0IsRUFBRSxLQUFLO1FBQ3ZCLE9BQU8sRUFBRSxDQUFDO1FB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S0FBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxPQUFPLEVBQUUsY0FBYztpQkFDeEIsQ0FBQyxDQUFBO2FBQ0g7UUFDSCxDQUFDLEVBQUMsVUFBQyxHQUFPO1lBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFJRCxNQUFNLEVBQU47UUFBQSxpQkFlQztRQWJDLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztZQUN2QixLQUFLLEVBQUUsWUFBWTtTQUNwQixDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsV0FBVyxDQUFDO1lBQ2IsSUFBSSxFQUFFLE9BQU87WUFDYixPQUFPLEVBQUMsVUFBQyxHQUFPO2dCQUNkLEtBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ1gsU0FBUyxFQUFFLEdBQUcsQ0FBQyxTQUFTO29CQUN4QixRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVE7aUJBQ3ZCLENBQUMsQ0FBQTtZQUNKLENBQUM7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBR0QsTUFBTTtRQUNKLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBR0QsT0FBTyxnQkFBRyxDQUFDO0lBR1gsTUFBTTtRQUNKLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxVQUFVLEVBQUUsSUFBSTtZQUNoQixVQUFVLEVBQUUsS0FBSztZQUNqQixZQUFZLEVBQUUsS0FBSztZQUNuQixnQkFBZ0IsRUFBRSxLQUFLO1NBQ3hCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFHRCxRQUFRLGdCQUFHLENBQUM7Q0FDYixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBtYXAudHNcclxuY29uc3QgYXBpID0gZ2V0QXBwKCkuZ2xvYmFsRGF0YTsgIC8vIOiOt+WPluW6lOeUqOWunuS+i1xyXG5sZXQgaHR0cHMgID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvbXlSZXF1ZXN0LmpzJyk7ICAvL+iOt+WPlmFqYXjmlrnms5VcclxubGV0IERpYWxvZyA9IHJlcXVpcmUoJy4uLy4uL21pbmlwcm9ncmFtX25wbS9AdmFudC93ZWFwcC9kaWFsb2cvZGlhbG9nLmpzJykuZGVmYXVsdDtcclxuXHJcblBhZ2Uoe1xyXG4gIC8v6aG16Z2i5pWw5o2uXHJcbiAgZGF0YToge1xyXG4gICAgLy/mkJzntKJcclxuICAgIGlzTGlzdFNob3c6IHRydWUsICAgICAgICAgLy/pu5jorqTmmL7npLo25om+5YaF5a65XHJcbiAgICBpc0luZm9TaG93OiBmYWxzZSwgICAgICAgIC8v5Y2V5p2h5L+h5oGv5pi+56S6XHJcbiAgICBpc1NlYXJjaFNob3c6IGZhbHNlLCAgICAgIC8v5pCc57Si57uT5p6c5pWw5o2uXHJcbiAgICBpc1NlYXJjaEluZm9TaG93OiBmYWxzZSwgIC8v5pCc57Si5YiX6KGo5pWw5o2uXHJcbiAgICBzZWFyY2hLZXk6ICcnLCAgICAgICAgICAgIC8va2V55YWz6ZSu5a2X5pCc57SiXHJcbiAgICBpbmR1c3RyeUxpc3Q6IFsgICAgICAgICAgIC8v5bmz5Y+w5Lqn5Lia6KGM5LiaXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiAn546w5Luj5rW35rSL546w5Luj5rW35rSL546w5Luj5rW35rSLJyxcclxuICAgICAgICBjaGlsZHJlbjpbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6ICflhajpg6gnLFxyXG4gICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgY3lJRDogMTFcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6ICfmuKnlt54nLFxyXG4gICAgICAgICAgICBpZDogMixcclxuICAgICAgICAgICAgY3lJRDogMjJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuXHJcblxyXG4gICAgZmxnOiAnJywgICAgICAgICAgICAgICAgICAgLy825om+54q25oCB5Yik5patXHJcbiAgICBudW06IDAsICAgICAgICAgICAgICAgICAgICAvLzbmib7nu5PmnpxcclxuICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgIC8vNuaJvuWIl+ihqFxyXG5cclxuXHJcbiAgICAvL+aJvuW5s+WPsFxyXG4gICAgcHRTZWFyY2hJbmZvU2hvdzogdHJ1ZSwgICAgIC8v5pi+56S6L+makOiXj1xyXG4gICAgcHRCdG5TaG93OiBmYWxzZSwgICAgICAgICAgIC8v5YWo6YOo5pe25pi+56S6L+makOiXj1xyXG4gICAgcHRCdG5DbGFzczogMSwgICAgICAgICAgICAgIC8v5YWo6YOo5oyJ6ZKu54q25oCB5YiH5o2iXHJcbiAgICBwdEluZGV4OiAwLCAgICAgICAgICAgICAgICAgLy/lvZPliY3ntKLlvJVcclxuICAgIHB0SW5kdXN0cnlJZDogbnVsbCwgICAgICAgICAvL+mAieS4reeahGlkXHJcbiAgXHJcbiAgICAvL+aJvumhueebrlxyXG4gICAgcHJvU2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgICAvL+aYvuekui/pmpDol49cclxuICAgIHByb0luZGV4OiAwLCAgICAgICAgICAgICAgICAvL+W9k+WJjee0ouW8lVxyXG4gICAgcHJvSW5kdXN0cnlJZDogbnVsbCwgICAgICAgIC8v6YCJ5Lit55qEaWRcclxuXHJcblxyXG4gICAgLy/mib7otYTph5FcclxuICAgIHpqU2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgICAvL+aYvuekui/pmpDol49cclxuICAgIC8v5om+6LWE6YeR77yI6YeR6J6N5pyN5Yqh77yJXHJcbiAgICBqclNlYXJjaEluZm9TaG93OiBmYWxzZSwgICAgLy/mmL7npLov6ZqQ6JePXHJcbiAgICBqckluZGV4OiAwLCAgICAgICAgICAgICAgICAvL+W9k+WJjee0ouW8lVxyXG4gICAganJJbmR1c3RyeUlkOiBudWxsLCAgICAgICAgLy/pgInkuK3nmoRpZFxyXG4gICAgLy/mib7otYTph5HvvIjmipXotYTvvIlcclxuICAgIHR6U2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgICAvL+aYvuekui/pmpDol49cclxuICAgIHR6SW5kZXg6IDAsICAgICAgICAgICAgICAgIC8v5b2T5YmN57Si5byVXHJcbiAgICB0ekluZHVzdHJ5SWQ6IG51bGwsICAgICAgICAvL+mAieS4reeahGlkXHJcbiAgICAvL+aJvui1hOmHke+8iOiejei1hO+8iVxyXG4gICAgcnpTZWFyY2hJbmZvU2hvdzogZmFsc2UsICAgIC8v5pi+56S6L+makOiXj1xyXG4gICAgcnpJbmRleDogMCwgICAgICAgICAgICAgICAgLy/lvZPliY3ntKLlvJVcclxuICAgIHJ6SW5kdXN0cnlJZDogbnVsbCwgICAgICAgIC8v6YCJ5Lit55qEaWRcclxuXHJcblxyXG4gICAgLy/mib7lnLrlnLBcclxuICAgIGNkU2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgICAvL+aYvuekui/pmpDol49cclxuICAgIGNkSW5kZXg6IDAsICAgICAgICAgICAgICAgIC8v5b2T5YmN57Si5byVXHJcbiAgICBjZEluZHVzdHJ5SWQ6IG51bGwsICAgICAgICAvL+mAieS4reeahGlkXHJcblxyXG4gICAgLy/mib7mnI3liqFcclxuICAgIGZ3U2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgICAvL+aYvuekui/pmpDol49cclxuICAgIGZ3SW5kZXg6IDAsICAgICAgICAgICAgICAgICAvL+W9k+WJjee0ouW8lVxyXG4gICAgZndJbmR1c3RyeUlkOiBudWxsLCAgICAgICAgIC8v6YCJ5Lit55qEaWRcclxuXHJcblxyXG4gICAgLy/lnLDlm75cclxuICAgIGxvbmdpdHVkZTogJycsICAgICAgICAgICAgLy/kuK3lv4Pnu4/luqZcclxuICAgIGxhdGl0dWRlOiAnJywgICAgICAgICAgICAgLy/kuK3lv4PnuqzluqZcclxuICAgIHNjYWxlOiAxMiwgICAgICAgICAgICAgICAgLy/nvKnmlL7nuqfliKvvvIzlj5blgLzojIPlm7TkuLozLTIwXHJcbiAgICBtYXJrZXJzOltdLCAgICAgICAgICAgICAgIC8v5qCH6K6w54K55aSE55CG5ZCO55qE5pWw5o2u77yIaWTjgIHmn6Xor6Lkvb/nlKjvvIlcclxuICAgIG1hcmtlcnNPYmo6e30sICAgICAgICAgICAgLy/mn6Xor6LnmoTljZXmnaHmlbDmja5cclxuICAgIC8v5omA5Lul5qCH54K55pWw5o2uXHJcbiAgICBjeFBsYXRmb3JtTW9kZWxzOiBbXSwgICAgIC8v5Yib5Lia5bmz5Y+wXHJcbiAgICBjeVBsYXRmb3JtTW9kZWxzOiBbXSwgICAgIC8v5Yib5paw5bmz5Y+wXHJcbiAgICBwcm9Nb2RlbHM6IFtdLCAgICAgICAgICAgIC8v5om+6aG555uuXHJcbiAgICBmd2pnTW9kZWxzOiBbXSwgICAgICAgICAgIC8v5om+5pyN5Yqh5py65p6EXHJcbiAgICB2ZWN0b3JNb2RlbHM6IFtdLCAgICAgICAgIC8v5om+5Zy65ZywXHJcbiAgICBqcmpnTWRvZWxzOiBbXSwgICAgICAgICAgIC8v5om+6YeR6J6N5py65p6EXHJcbiAgICB0ek1vZGVsczogW10sICAgICAgICAgICAgIC8v5om+5oqV6LWE6ZyA5rGCXHJcbiAgICByb25nemlQcm9zOiBbXSwgICAgICAgICAgIC8v5om+6J6N6LWE6ZyA5rGC77yI6aG555uu5bqT55qE6J6N6LWEN+mhue+8iVxyXG4gICAgcm9uZ3ppTmVlZHM6IFtdLCAgICAgICAgICAvL+aJvuiejei1hOmcgOaxgu+8iOmcgOaxguW6k+eahOiejei1hDfpobnvvIlcclxuICAgIC8v5a+86IiqXHJcbiAgICBnb05hbWU6JycsICAgICAgICAgICAgICAgIC8v6KaB5Y6755qE5Zyw5Z2AXHJcbiAgICBnb0xvbmdpdHVkZTogJycsICAgICAgICAgIC8v5Lit5b+D57uP5bqmKOe7iOeCuSlcclxuICAgIGdvTGF0aXR1ZGU6ICcnLCAgICAgICAgICAgLy/kuK3lv4PnuqzluqYo57uI54K5KVxyXG4gIH0sXHJcblxyXG5cclxuICAvL+aQnOe0ouWIl+ihqOaYvuekulxyXG4gIHNlYXJjaEluZm9PcGVuKCk6dm9pZHtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGlzTGlzdFNob3c6IGZhbHNlLCAgICAgICAgICAvL+m7mOiupOaYvuekujbmib7lhoXlrrlcclxuICAgICAgaXNJbmZvU2hvdzogZmFsc2UsICAgICAgICAgLy/ljZXmnaHkv6Hmga/mmL7npLpcclxuICAgICAgaXNTZWFyY2hTaG93OiBmYWxzZSwgICAgICAgLy/mkJzntKLnu5PmnpzmlbDmja5cclxuICAgICAgaXNTZWFyY2hJbmZvU2hvdzogdHJ1ZSwgICAvL+aQnOe0ouWIl+ihqOaVsOaNrlxyXG4gICAgfSlcclxuICB9LFxyXG4gICAvL+aQnOe0ouWIl+ihqOWFs+mXrVxyXG4gICBzZWFyY2hJbmZvQ2xvc2UoKTp2b2lke1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgaXNMaXN0U2hvdzogZmFsc2UsICAgICAgICAgIC8v6buY6K6k5pi+56S6NuaJvuWGheWuuVxyXG4gICAgICBpc0luZm9TaG93OiBmYWxzZSwgICAgICAgICAgLy/ljZXmnaHkv6Hmga/mmL7npLpcclxuICAgICAgaXNTZWFyY2hTaG93OiB0cnVlLCAgICAgICAgIC8v5pCc57Si57uT5p6c5pWw5o2uXHJcbiAgICAgIGlzU2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgICAvL+aQnOe0ouWIl+ihqOaVsOaNrlxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuXHJcbiAgLy/mkJzntKLnu5PmnpzlhbPpl61cclxuICBzZWFyY2hDbG9zZSgpOnZvaWR7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBudW06IDAsICAgICAgICAgICAgICAgICAgICAvLzbmib7nu5PmnpxcclxuICAgICAgbXVtTGlzdDogW10sICAgICAgICAgICAgICAgLy825om+5YiX6KGoXHJcbiAgICAgIGlzTGlzdFNob3c6IHRydWUsICAgICAgICAgIC8v6buY6K6k5pi+56S6NuaJvuWGheWuuVxyXG4gICAgICBpc0luZm9TaG93OiBmYWxzZSwgICAgICAgICAvL+WNleadoeS/oeaBr+aYvuekulxyXG4gICAgICBpc1NlYXJjaFNob3c6IGZhbHNlLCAgICAgICAvL+aQnOe0oue7k+aenOaVsOaNrlxyXG4gICAgICBpc1NlYXJjaEluZm9TaG93OiBmYWxzZSwgICAvL+aQnOe0ouWIl+ihqOaVsOaNrlxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuXHJcbiAgLy/mib7lubPlj7BcclxuICBwdEZuKCk6dm9pZHsgICAgICAgICAgICAgICAgICAgLy825om+5bmz5Y+w6Kem5Y+RXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBudW06IDAsICAgICAgICAgICAgICAgICAgICAvLzbmib7nu5PmnpxcclxuICAgICAgbXVtTGlzdDogW10sICAgICAgICAgICAgICAgLy825om+5YiX6KGoXHJcbiAgICAgIGlzTGlzdFNob3c6IGZhbHNlLCAgICAgICAgIC8v6buY6K6k5pi+56S6NuaJvuWGheWuuVxyXG4gICAgICBpc0luZm9TaG93OiBmYWxzZSwgICAgICAgICAvL+WNleadoeS/oeaBr+aYvuekulxyXG4gICAgICBpc1NlYXJjaFNob3c6IHRydWUsICAgICAgICAvL+aQnOe0oue7k+aenOaVsOaNrlxyXG4gICAgICBpc1NlYXJjaEluZm9TaG93OiBmYWxzZSwgICAvL+aQnOe0ouWIl+ihqOaVsOaNrlxyXG4gICAgfSlcclxuICAgIHRoaXMuZ2V0Q3hQcm8oKTsgICAgICAgICAgICAgLy825om+5Yib5paw5bmz5Y+w57uf6K6hXHJcbiAgICB0aGlzLmdldEN5UHJvKCk7ICAgICAgICAgICAgIC8vNuaJvuWIm+S4muW5s+WPsOe7n+iuoVxyXG4gIH0sXHJcbiAgZ2V0Q3hQcm8oKTp2b2lkeyAgICAgICAgICAgICAgIC8vNuaJvuWIm+aWsOW5s+WPsOe7n+iuoVxyXG4gICAgaHR0cHMuc3VjY2Vzc1JlcXVlc3QoYXBpLmN4UGxhdGZvcm1Vc2VyLCB7XHJcbiAgICAgIGN5VHlwZUlkOiAnJywgICAvL+S6p+S4mmlkXHJcbiAgICAgIGh5VHlwZUlkOiAnJywgICAvL+ihjOS4mmlkXHJcbiAgICAgIHR5cGVJZDogJycsICAgICAvL+W5s+WPsOexu+Wei2lkXHJcbiAgICAgIHppWmhpOiAnJywgICAgICAvL+W5s+WPsOi1hOi0qGlkXHJcbiAgICAgIHRlbmFudElkOiAnJywgICAvL+WcsOWMumlkXHJcbiAgICB9LCAnR0VUJylcclxuICAgIC50aGVuKChyZXM6YW55KTp2b2lkPT57XHJcbiAgICAgIGlmKHJlcyl7XHJcbiAgICAgICAgbGV0IGxpc3Q6YW55ID0gcmVzLmxpc3QubWFwKChpdGVtOmFueSk6YW55PT57XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogaXRlbS5pZCwgICAgICAgICAgICAgICAgICAgICAgICAgIC8vSURcclxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBpdGVtLmxvbmdpdHVkZSwgICAgICAgICAgICAvL+S4reW/g+e7j+W6plxyXG4gICAgICAgICAgICBsYXRpdHVkZTogaXRlbS5sYXRpdHVkZSwgICAgICAgICAgICAgIC8v5Lit5b+D57qs5bqmXHJcbiAgICAgICAgICAgIHRpdGxlOiBpdGVtLmN4TmFtZSwgICAgICAgICAgICAgICAgICAgLy/moIfpophcclxuICAgICAgICAgICAgcHJvdmluY2VOYW1lOiBpdGVtLnByb3ZpbmNlTmFtZT9pdGVtLnByb3ZpbmNlTmFtZTonJywgICAgIC8v55yBXHJcbiAgICAgICAgICAgIGNpdHlOYW1lOiBpdGVtLmNpdHlOYW1lP2l0ZW0uY2l0eU5hbWU6JycsICAgICAgICAgICAgICAgICAvL+W4glxyXG4gICAgICAgICAgICBkaXN0cmljdE5hbWU6IGl0ZW0uZGlzdHJpY3ROYW1lP2l0ZW0uZGlzdHJpY3ROYW1lOicnLCAgICAgLy/ljLpcclxuICAgICAgICAgICAgbWFya2VyczogaXRlbS5tYXJrZXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Z2Q5qCHXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgbnVtOiB0aGlzLmRhdGEubnVtICs9IHJlcy50b3RhbCxcclxuICAgICAgICAgIG11bUxpc3Q6IHRoaXMuZGF0YS5tdW1MaXN0LmNvbmNhdChsaXN0KVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIGdldEN5UHJvKCk6dm9pZHsgICAgICAgICAgICAgICAvLzbmib7liJvkuJrlubPlj7Dnu5/orqFcclxuICAgIGh0dHBzLnN1Y2Nlc3NSZXF1ZXN0KGFwaS5jeVBsYXRVc2VyLCB7XHJcbiAgICAgIGN5VHlwZUlkOiAnJywgICAvL+S6p+S4mmlkXHJcbiAgICAgIGh5VHlwZUlkOiAnJywgICAvL+ihjOS4mmlkXHJcbiAgICAgIHR5cGVJZDogJycsICAgICAvL+W5s+WPsOexu+Wei2lkXHJcbiAgICAgIHppWmhpOiAnJywgICAgICAvL+W5s+WPsOi1hOi0qGlkXHJcbiAgICAgIHRlbmFudElkOiAnJywgICAvL+WcsOWMumlkXHJcbiAgICB9LCAnR0VUJylcclxuICAgIC50aGVuKChyZXM6YW55KTp2b2lkPT57XHJcbiAgICAgIGlmKHJlcyl7XHJcbiAgICAgICAgbGV0IGxpc3Q6YW55ID0gcmVzLmxpc3QubWFwKChpdGVtOmFueSk6YW55PT57XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogaXRlbS5pZCwgICAgICAgICAgICAgICAgICAgICAgICAgIC8vSURcclxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBpdGVtLmxvbmdpdHVkZSwgICAgICAgICAgICAvL+S4reW/g+e7j+W6plxyXG4gICAgICAgICAgICBsYXRpdHVkZTogaXRlbS5sYXRpdHVkZSwgICAgICAgICAgICAgIC8v5Lit5b+D57qs5bqmXHJcbiAgICAgICAgICAgIHRpdGxlOiBpdGVtLmN5TmFtZSwgICAgICAgICAgICAgICAgICAgLy/moIfpophcclxuICAgICAgICAgICAgcHJvdmluY2VOYW1lOiBpdGVtLnByb3ZpbmNlTmFtZT9pdGVtLnByb3ZpbmNlTmFtZTonJywgICAgIC8v55yBXHJcbiAgICAgICAgICAgIGNpdHlOYW1lOiBpdGVtLmNpdHlOYW1lP2l0ZW0uY2l0eU5hbWU6JycsICAgICAgICAgICAgICAgICAvL+W4glxyXG4gICAgICAgICAgICBkaXN0cmljdE5hbWU6IGl0ZW0uZGlzdHJpY3ROYW1lP2l0ZW0uZGlzdHJpY3ROYW1lOicnLCAgICAgLy/ljLpcclxuICAgICAgICAgICAgbWFya2VyczogaXRlbS5tYXJrZXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Z2Q5qCHXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgbnVtOiB0aGlzLmRhdGEubnVtICs9IHJlcy50b3RhbCxcclxuICAgICAgICAgIG11bUxpc3Q6IHRoaXMuZGF0YS5tdW1MaXN0LmNvbmNhdChsaXN0KVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHB0QnRuVG9nZ2xlKGU6YW55KTp2b2lkeyAgLy/lhajpg6jmjInpkq7nirbmgIHliIfmjaJcclxuICAgIGlmKGUudGFyZ2V0LmRhdGFzZXQubnVtID09IDEpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHB0QnRuQ2xhc3M6IGUudGFyZ2V0LmRhdGFzZXQubnVtLFxyXG4gICAgICAgIHB0QnRuU2hvdzogZmFsc2UsICAgICAgICAgIC8v6auY57qn5pCc57SiXHJcbiAgICAgICAgbnVtOiAwLCAgICAgICAgICAgICAgICAgICAgLy825om+57uT5p6cXHJcbiAgICAgICAgbXVtTGlzdDogW10sICAgICAgICAgICAgICAgLy825om+5YiX6KGoXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuZ2V0Q3hQcm8oKTsgICAgICAgICAgICAgLy825om+5Yib5paw5bmz5Y+w57uf6K6hXHJcbiAgICAgIHRoaXMuZ2V0Q3lQcm8oKTsgICAgICAgICAgICAgLy825om+5Yib5Lia5bmz5Y+w57uf6K6hXHJcbiAgICB9ZWxzZSBpZihlLnRhcmdldC5kYXRhc2V0Lm51bSA9PSAyKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBwdEJ0bkNsYXNzOiBlLnRhcmdldC5kYXRhc2V0Lm51bSxcclxuICAgICAgICBwdEJ0blNob3c6IHRydWUsICAgICAgICAgICAvL+mrmOe6p+aQnOe0olxyXG4gICAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgIC8vNuaJvuWIl+ihqFxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLmdldEN4UHJvKCk7ICAgICAgICAgICAgIC8vNuaJvuWIm+aWsOW5s+WPsOe7n+iuoVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgcHRCdG5DbGFzczogZS50YXJnZXQuZGF0YXNldC5udW0sXHJcbiAgICAgICAgcHRCdG5TaG93OiB0cnVlLCAgICAgICAgICAgLy/pq5jnuqfmkJzntKJcclxuICAgICAgICBudW06IDAsICAgICAgICAgICAgICAgICAgICAvLzbmib7nu5PmnpxcclxuICAgICAgICBtdW1MaXN0OiBbXSwgICAgICAgICAgICAgICAvLzbmib7liJfooahcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5nZXRDeVBybygpOyAgICAgICAgICAgICAvLzbmib7liJvkuJrlubPlj7Dnu5/orqFcclxuICAgIH1cclxuICB9LFxyXG4gIHB0SW5kdXN0cnlJdGVtKGRhdGE6YW55KTp2b2lkIHsgIC8v6KGM5Lia5Lqn5LiaXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBwdEluZHVzdHJ5SWQ6IGRhdGEuZGV0YWlsLmlkXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIC8v5om+6aG555uuXHJcbiAgcHJvSW5kdXN0cnlJdGVtKGRhdGE6YW55KTp2b2lkIHsgIC8v6KGM5Lia5Lqn5LiaXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBwcm9JbmR1c3RyeUlkOiBkYXRhLmRldGFpbC5pZFxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvL+aJvuWcuuWcsFxyXG4gIGNkSW5kdXN0cnlJdGVtKGRhdGE6YW55KTp2b2lkIHsgIC8v6KGM5Lia5Lqn5LiaXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBjZEluZHVzdHJ5SWQ6IGRhdGEuZGV0YWlsLmlkXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIC8v5om+5pyN5YqhXHJcbiAgZndJbmR1c3RyeUl0ZW0oZGF0YTphbnkpOnZvaWQgeyAgLy/ooYzkuJrkuqfkuJpcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGZ3SW5kdXN0cnlJZDogZGF0YS5kZXRhaWwuaWRcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgLy/mib7otYTph5HvvIjph5Hono3mnI3liqHvvIlcclxuICBqckluZHVzdHJ5SXRlbShkYXRhOmFueSk6dm9pZCB7ICAvL+ihjOS4muS6p+S4mlxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAganJJbmR1c3RyeUlkOiBkYXRhLmRldGFpbC5pZFxyXG4gICAgfSlcclxuICB9LFxyXG4gIC8v5om+6LWE6YeR77yI5oqV6LWE77yJXHJcbiAgdHpJbmR1c3RyeUl0ZW0oZGF0YTphbnkpOnZvaWQgeyAgLy/ooYzkuJrkuqfkuJpcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHR6SW5kdXN0cnlJZDogZGF0YS5kZXRhaWwuaWRcclxuICAgIH0pXHJcbiAgfSxcclxuICAvL+aJvui1hOmHke+8iOiejei1hO+8iVxyXG4gIHJ6SW5kdXN0cnlJdGVtKGRhdGE6YW55KTp2b2lkIHsgIC8v6KGM5Lia5Lqn5LiaXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICByekluZHVzdHJ5SWQ6IGRhdGEuZGV0YWlsLmlkXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgXHJcblxyXG4gIC8v6Lev57q/5a+86IiqXHJcbiAgbmF2aWdhdGlvbihlOmFueSk6dm9pZHtcclxuICAgIGlmKCEhZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQubWFya2Vycyl7XHJcbiAgICAgIGxldCBtYXJrZXJzOmFueSA9IEpTT04ucGFyc2UoZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQubWFya2VycylbMF0ucG9zaXRpb247XHJcbiAgICAgIGlmKG1hcmtlcnMubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIGdvTG9uZ2l0dWRlOiBtYXJrZXJzWzBdLmxuZyxcclxuICAgICAgICAgIGdvTGF0aXR1ZGU6IG1hcmtlcnNbMF0ubGF0XHJcbiAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgZW5kUG9pbnQ6YW55ID0gSlNPTi5zdHJpbmdpZnkoeyAgLy/nu4jngrlcclxuICAgICAgJ25hbWUnOiB0aGlzLmRhdGEuZ29OYW1lLFxyXG4gICAgICAnbG9uZ2l0dWRlJzogcGFyc2VGbG9hdCh0aGlzLmRhdGEuZ29Mb25naXR1ZGUpLFxyXG4gICAgICAnbGF0aXR1ZGUnOiBwYXJzZUZsb2F0KHRoaXMuZGF0YS5nb0xhdGl0dWRlKVxyXG4gICAgfSk7XHJcblxyXG4gICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgIHVybDogJ3BsdWdpbjovL3JvdXRlUGxhbi9pbmRleD9rZXk9JyArIGFwaS5tYXBBcGlLZXkgKyAnJnJlZmVyZXI95omN6LWL5LqRJyArICcmZW5kUG9pbnQ9JyArIGVuZFBvaW50XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuXHJcbiAgLy/pgInmi6nluILljLpcclxuICBtYXBBcmVhKCk6dm9pZHtcclxuICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICB1cmw6XCIuLi9tYXBBcmVhL21hcEFyZWFcIlxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuXHJcbiAgLy/lnLDlm77or6bmg4VcclxuICBtYXBEZXRhaWwoKTp2b2lkIHtcclxuICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICB1cmw6XCIuLi9tYXBEZXRhaWwvbWFwRGV0YWlsXCJcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcblxyXG4gIC8v54K55Ye75qCH6K6w54K55rCU5rOh56qX5Y+j6Kem5Y+RXHJcbiAgbWFya0ZuKGU6YW55KTp2b2lkIHtcclxuICAgIC8v5p+l6K+i5Y2V5p2h5pWw5o2uXHJcbiAgICBsZXQgYXJyOmFueSA9IHRoaXMuZGF0YS5tYXJrZXJzLmZpbHRlcigoaXRlbTphbnkpOmFueT0+e1xyXG4gICAgICByZXR1cm4gaXRlbS5pZCA9PSBlLmRldGFpbC5tYXJrZXJJZDtcclxuICAgIH0pO1xyXG4gICAgaWYoYXJyLmxlbmd0aCA+PSAxKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBnb05hbWU6IGFyclswXS5jYWxsb3V0LmNvbnRlbnQsICAgICAgICAgLy/opoHljrvnmoTlnLDlnYBcclxuICAgICAgICBnb0xvbmdpdHVkZTogYXJyWzBdLmxvbmdpdHVkZSwgICAgICAgICAgLy/kuK3lv4Pnu4/luqYo57uI54K5KVxyXG4gICAgICAgIGdvTGF0aXR1ZGU6IGFyclswXS5sYXRpdHVkZSwgICAgICAgICAgICAvL+S4reW/g+e6rOW6pijnu4jngrkpXHJcbiAgICAgICAgbWFya2Vyc09iajogYXJyWzBdLCAgICAgICAgICAgICAgICAgICAgIC8v5Y2V5p2h5YiX6KGo5pWw5o2uXHJcbiAgICAgICAgaXNMaXN0U2hvdzogZmFsc2UsICAgICAgICAgICAgICAgICAgICAgIC8v6buY6K6k5pi+56S6NuaJvuWGheWuuVxyXG4gICAgICAgIGlzSW5mb1Nob3c6IHRydWUsICAgICAgICAgICAgICAgICAgICAgICAvL+WNleadoeS/oeaBr+aYvuekulxyXG4gICAgICAgIGlzU2VhcmNoU2hvdzogZmFsc2UsICAgICAgICAgICAgICAgICAgICAvL+aQnOe0oue7k+aenOaVsOaNrlxyXG4gICAgICAgIGlzU2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgICAgICAgICAgICAgICAvL+aQnOe0ouWIl+ihqOaVsOaNrlxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG5cclxuICAvL+WFs+mXreWNleadoeS/oeaBr+Wbnum7mOiupFxyXG4gIGNsb3NlRm4oKTp2b2lke1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgaXNMaXN0U2hvdzogdHJ1ZSwgICAgICAgICAgICAgICAgICAgICAgIC8v6buY6K6k5pi+56S6NuaJvuWGheWuuVxyXG4gICAgICBpc0luZm9TaG93OiBmYWxzZSwgICAgICAgICAgICAgICAgICAgICAgLy/ljZXmnaHkv6Hmga/mmL7npLpcclxuICAgICAgaXNTZWFyY2hTaG93OiBmYWxzZSwgICAgICAgICAgICAgICAgICAgIC8v5pCc57Si57uT5p6c5pWw5o2uXHJcbiAgICAgIGlzU2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgICAgICAgICAgICAgICAvL+aQnOe0ouWIl+ihqOaVsOaNrlxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuXHJcbiAgLy/pqozor4HnlKjmiLfnmbvlvZXnirbmgIFcclxuICB2ZXJpZmljYXRpb24oKTp2b2lke1xyXG4gICAgbGV0IHRva2VuOnN0cmluZyA9IHd4LmdldFN0b3JhZ2VTeW5jKCd0b2tlbicpO1xyXG4gICAgaWYoISF0b2tlbil7XHJcbiAgICAgIHRoaXMuZ2V0TWFyaygpOyAgLy/ojrflj5blnLDlm77moIfngrlcclxuICAgIH1lbHNle1xyXG4gICAgICBEaWFsb2cuYWxlcnQoe1xyXG4gICAgICAgIG1lc3NhZ2U6ICfnmbvlvZXlkI7miY3og73mn6XnnIvlnLDlm77vvIEnLFxyXG4gICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgIHVybDogJy4uL2xvZ2luRm9ybS9sb2dpbkZvcm0nXHJcbiAgICAgICAgfSlcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLy/ojrflj5blnLDlm77moIfngrlcclxuICBnZXRNYXJrKCk6dm9pZHtcclxuICAgIGh0dHBzLnN1Y2Nlc3NSZXF1ZXN0KGFwaS5hbGwsIG51bGwsICdHRVQnKVxyXG4gICAgLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgaWYocmVzKXtcclxuICAgICAgICAvL+WIm+aWsOW5s+WPsFxyXG4gICAgICAgIGxldCBjeFBsYXRmb3JtTW9kZWxzTGlzdDphbnkgPSByZXMudmFsLmN4UGxhdGZvcm1Nb2RlbHMubWFwKChpdGVtOmFueSk6YW55PT57XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBpdGVtLmxuZywgICAvL+e7j+W6plxyXG4gICAgICAgICAgICBsYXRpdHVkZTogaXRlbS5sYXQsICAgIC8v57qs5bqmXHJcbiAgICAgICAgICAgIGljb25QYXRoOiAnLi4vLi4vaW1hZ2VzL2FkZHJlc3MucG5nJywgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgd2lkdGg6IDMwLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwLFxyXG4gICAgICAgICAgICBjYWxsb3V0OiB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogaXRlbS5wdE5hbWUsXHJcbiAgICAgICAgICAgICAgY29sb3I6ICcjMDAwJyxcclxuICAgICAgICAgICAgICBmb250U2l6ZTogMTQsXHJcbiAgICAgICAgICAgICAgYmdDb2xvcjogJyNGRkYnLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDUsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI0NDQycsXHJcbiAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ0JZQ0xJQ0snXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHByb3ZpbmNlTmFtZTogaXRlbS5wcm92aW5jZU5hbWU/aXRlbS5wcm92aW5jZU5hbWU6JycsICAgICAvL+ecgVxyXG4gICAgICAgICAgICBjaXR5TmFtZTogaXRlbS5jaXR5TmFtZT9pdGVtLmNpdHlOYW1lOicnLCAgICAgICAgICAgICAgICAgLy/luIJcclxuICAgICAgICAgICAgZGlzdHJpY3ROYW1lOiBpdGVtLmRpc3RyaWN0TmFtZT9pdGVtLmRpc3RyaWN0TmFtZTonJyAgICAgIC8v5Yy6XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy/liJvkuJrlubPlj7BcclxuICAgICAgICBsZXQgY3lQbGF0Zm9ybU1vZGVsc0xpc3Q6YW55ID0gcmVzLnZhbC5jeVBsYXRmb3JtTW9kZWxzLm1hcCgoaXRlbTphbnkpOmFueT0+e1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZTogaXRlbS5sbmcsICAgLy/nu4/luqZcclxuICAgICAgICAgICAgbGF0aXR1ZGU6IGl0ZW0ubGF0LCAgICAvL+e6rOW6plxyXG4gICAgICAgICAgICBpY29uUGF0aDogJy4uLy4uL2ltYWdlcy9hZGRyZXNzLnBuZycsICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIHdpZHRoOiAzMCxcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMCxcclxuICAgICAgICAgICAgY2FsbG91dDoge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IGl0ZW0uY3lOYW1lLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IDE4LFxyXG4gICAgICAgICAgICAgIGJnQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1LFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNDQ0MnLFxyXG4gICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdCWUNMSUNLJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwcm92aW5jZU5hbWU6IGl0ZW0ucHJvdmluY2VOYW1lP2l0ZW0ucHJvdmluY2VOYW1lOicnLCAgICAgLy/nnIFcclxuICAgICAgICAgICAgY2l0eU5hbWU6IGl0ZW0uY2l0eU5hbWU/aXRlbS5jaXR5TmFtZTonJywgICAgICAgICAgICAgICAgIC8v5biCXHJcbiAgICAgICAgICAgIGRpc3RyaWN0TmFtZTogaXRlbS5kaXN0cmljdE5hbWU/aXRlbS5kaXN0cmljdE5hbWU6JycgICAgICAvL+WMulxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8v5om+6aG555uuXHJcbiAgICAgICAgbGV0IHByb01vZGVsc0xpc3Q6YW55ID0gcmVzLnZhbC5wcm9Nb2RlbHMubWFwKChpdGVtOmFueSk6YW55PT57XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBpdGVtLmxuZywgICAvL+e7j+W6plxyXG4gICAgICAgICAgICBsYXRpdHVkZTogaXRlbS5sYXQsICAgIC8v57qs5bqmXHJcbiAgICAgICAgICAgIGljb25QYXRoOiAnLi4vLi4vaW1hZ2VzL2FkZHJlc3MucG5nJywgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgd2lkdGg6IDMwLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwLFxyXG4gICAgICAgICAgICBjYWxsb3V0OiB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogaXRlbS5wcm9OYW1lLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IDE4LFxyXG4gICAgICAgICAgICAgIGJnQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1LFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNDQ0MnLFxyXG4gICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdCWUNMSUNLJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwcm92aW5jZU5hbWU6IGl0ZW0ucHJvdmluY2VOYW1lP2l0ZW0ucHJvdmluY2VOYW1lOicnLCAgICAgLy/nnIFcclxuICAgICAgICAgICAgY2l0eU5hbWU6IGl0ZW0uY2l0eU5hbWU/aXRlbS5jaXR5TmFtZTonJywgICAgICAgICAgICAgICAgIC8v5biCXHJcbiAgICAgICAgICAgIGRpc3RyaWN0TmFtZTogaXRlbS5kaXN0cmljdE5hbWU/aXRlbS5kaXN0cmljdE5hbWU6JycgICAgICAvL+WMulxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL+aJvuacjeWKoeacuuaehFxyXG4gICAgICAgIGxldCBmd2pnTW9kZWxzTGlzdDphbnkgPSByZXMudmFsLmZ3amdNb2RlbHMubWFwKChpdGVtOmFueSk6YW55PT57XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBpdGVtLmxuZywgICAvL+e7j+W6plxyXG4gICAgICAgICAgICBsYXRpdHVkZTogaXRlbS5sYXQsICAgIC8v57qs5bqmXHJcbiAgICAgICAgICAgIGljb25QYXRoOiAnLi4vLi4vaW1hZ2VzL2FkZHJlc3MucG5nJywgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgd2lkdGg6IDMwLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwLFxyXG4gICAgICAgICAgICBjYWxsb3V0OiB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogaXRlbS5xeU5hbWUgLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IDE4LFxyXG4gICAgICAgICAgICAgIGJnQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1LFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNDQ0MnLFxyXG4gICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdCWUNMSUNLJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwcm92aW5jZU5hbWU6IGl0ZW0ucHJvdmluY2VOYW1lP2l0ZW0ucHJvdmluY2VOYW1lOicnLCAgICAgLy/nnIFcclxuICAgICAgICAgICAgY2l0eU5hbWU6IGl0ZW0uY2l0eU5hbWU/aXRlbS5jaXR5TmFtZTonJywgICAgICAgICAgICAgICAgIC8v5biCXHJcbiAgICAgICAgICAgIGRpc3RyaWN0TmFtZTogaXRlbS5kaXN0cmljdE5hbWU/aXRlbS5kaXN0cmljdE5hbWU6JycgICAgICAvL+WMulxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8v5om+5Zy65ZywXHJcbiAgICAgICAgbGV0IHZlY3Rvck1vZGVsc0xpc3Q6YW55ID0gcmVzLnZhbC52ZWN0b3JNb2RlbHMubWFwKChpdGVtOmFueSk6YW55PT57XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBpdGVtLmxuZywgICAvL+e7j+W6plxyXG4gICAgICAgICAgICBsYXRpdHVkZTogaXRlbS5sYXQsICAgIC8v57qs5bqmXHJcbiAgICAgICAgICAgIGljb25QYXRoOiAnLi4vLi4vaW1hZ2VzL2FkZHJlc3MucG5nJywgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgd2lkdGg6IDMwLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwLFxyXG4gICAgICAgICAgICBjYWxsb3V0OiB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogaXRlbS5jeXp0TmFtZSAgLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IDE4LFxyXG4gICAgICAgICAgICAgIGJnQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1LFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNDQ0MnLFxyXG4gICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdCWUNMSUNLJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwcm92aW5jZU5hbWU6IGl0ZW0ucHJvdmluY2VOYW1lP2l0ZW0ucHJvdmluY2VOYW1lOicnLCAgICAgLy/nnIFcclxuICAgICAgICAgICAgY2l0eU5hbWU6IGl0ZW0uY2l0eU5hbWU/aXRlbS5jaXR5TmFtZTonJywgICAgICAgICAgICAgICAgIC8v5biCXHJcbiAgICAgICAgICAgIGRpc3RyaWN0TmFtZTogaXRlbS5kaXN0cmljdE5hbWU/aXRlbS5kaXN0cmljdE5hbWU6JycgICAgICAvL+WMulxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8v5om+6YeR6J6N5py65p6EXHJcbiAgICAgICAgbGV0IGpyamdNZG9lbHNMaXN0OmFueSA9IHJlcy52YWwuanJqZ01kb2Vscy5tYXAoKGl0ZW06YW55KTphbnk9PntcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICBsb25naXR1ZGU6IGl0ZW0ubG5nLCAgIC8v57uP5bqmXHJcbiAgICAgICAgICAgIGxhdGl0dWRlOiBpdGVtLmxhdCwgICAgLy/nuqzluqZcclxuICAgICAgICAgICAgaWNvblBhdGg6ICcuLi8uLi9pbWFnZXMvYWRkcmVzcy5wbmcnLCAgICAgICAgICAgICAvL+agh+iusFxyXG4gICAgICAgICAgICB3aWR0aDogMzAsXHJcbiAgICAgICAgICAgIGhlaWdodDogMzAsXHJcbiAgICAgICAgICAgIGNhbGxvdXQ6IHtcclxuICAgICAgICAgICAgICBjb250ZW50OiBpdGVtLnF5TmFtZSxcclxuICAgICAgICAgICAgICBjb2xvcjogJyMwMDAnLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAxOCxcclxuICAgICAgICAgICAgICBiZ0NvbG9yOiAnI0ZGRicsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNSxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXHJcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjQ0NDJyxcclxuICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnQllDTElDSydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcHJvdmluY2VOYW1lOiBpdGVtLnByb3ZpbmNlTmFtZT9pdGVtLnByb3ZpbmNlTmFtZTonJywgICAgIC8v55yBXHJcbiAgICAgICAgICAgIGNpdHlOYW1lOiBpdGVtLmNpdHlOYW1lP2l0ZW0uY2l0eU5hbWU6JycsICAgICAgICAgICAgICAgICAvL+W4glxyXG4gICAgICAgICAgICBkaXN0cmljdE5hbWU6IGl0ZW0uZGlzdHJpY3ROYW1lP2l0ZW0uZGlzdHJpY3ROYW1lOicnICAgICAgLy/ljLpcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvL+aJvuaKlei1hOmcgOaxglxyXG4gICAgICAgIGxldCB0ek1vZGVsc0xpc3Q6YW55ID0gcmVzLnZhbC50ek1vZGVscy5tYXAoKGl0ZW06YW55KTphbnk9PntcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICBsb25naXR1ZGU6IGl0ZW0ubG5nLCAgIC8v57uP5bqmXHJcbiAgICAgICAgICAgIGxhdGl0dWRlOiBpdGVtLmxhdCwgICAgLy/nuqzluqZcclxuICAgICAgICAgICAgaWNvblBhdGg6ICcuLi8uLi9pbWFnZXMvYWRkcmVzcy5wbmcnLCAgICAgICAgICAgICAvL+agh+iusFxyXG4gICAgICAgICAgICB3aWR0aDogMzAsXHJcbiAgICAgICAgICAgIGhlaWdodDogMzAsXHJcbiAgICAgICAgICAgIGNhbGxvdXQ6IHtcclxuICAgICAgICAgICAgICBjb250ZW50OiBpdGVtLm5lZWROYW1lICAgLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IDE4LFxyXG4gICAgICAgICAgICAgIGJnQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1LFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNDQ0MnLFxyXG4gICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdCWUNMSUNLJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwcm92aW5jZU5hbWU6IGl0ZW0ucHJvdmluY2VOYW1lP2l0ZW0ucHJvdmluY2VOYW1lOicnLCAgICAgLy/nnIFcclxuICAgICAgICAgICAgY2l0eU5hbWU6IGl0ZW0uY2l0eU5hbWU/aXRlbS5jaXR5TmFtZTonJywgICAgICAgICAgICAgICAgIC8v5biCXHJcbiAgICAgICAgICAgIGRpc3RyaWN0TmFtZTogaXRlbS5kaXN0cmljdE5hbWU/aXRlbS5kaXN0cmljdE5hbWU6JycgICAgICAvL+WMulxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8v5om+6J6N6LWE6ZyA5rGC77yI6aG555uu5bqT55qE6J6N6LWEN+mhue+8iVxyXG4gICAgICAgIGxldCByb25nemlQcm9zTGlzdDphbnkgPSByZXMudmFsLnJvbmd6aVByb3MubWFwKChpdGVtOmFueSk6YW55PT57XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBpdGVtLmxuZywgICAvL+e7j+W6plxyXG4gICAgICAgICAgICBsYXRpdHVkZTogaXRlbS5sYXQsICAgIC8v57qs5bqmXHJcbiAgICAgICAgICAgIGljb25QYXRoOiAnLi4vLi4vaW1hZ2VzL2FkZHJlc3MucG5nJywgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgd2lkdGg6IDMwLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwLFxyXG4gICAgICAgICAgICBjYWxsb3V0OiB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogaXRlbS5wcm9OYW1lICxcclxuICAgICAgICAgICAgICBjb2xvcjogJyMwMDAnLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAxOCxcclxuICAgICAgICAgICAgICBiZ0NvbG9yOiAnI0ZGRicsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNSxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXHJcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjQ0NDJyxcclxuICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnQllDTElDSydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcHJvdmluY2VOYW1lOiBpdGVtLnByb3ZpbmNlTmFtZT9pdGVtLnByb3ZpbmNlTmFtZTonJywgICAgIC8v55yBXHJcbiAgICAgICAgICAgIGNpdHlOYW1lOiBpdGVtLmNpdHlOYW1lP2l0ZW0uY2l0eU5hbWU6JycsICAgICAgICAgICAgICAgICAvL+W4glxyXG4gICAgICAgICAgICBkaXN0cmljdE5hbWU6IGl0ZW0uZGlzdHJpY3ROYW1lP2l0ZW0uZGlzdHJpY3ROYW1lOicnICAgICAgLy/ljLpcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvL+aJvuiejei1hOmcgOaxgu+8iOmcgOaxguW6k+eahOiejei1hDfpobnvvIlcclxuICAgICAgICBsZXQgcm9uZ3ppTmVlZHNMaXN0OmFueSA9IHJlcy52YWwucm9uZ3ppTmVlZHMubWFwKChpdGVtOmFueSk6YW55PT57XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBpdGVtLmxuZywgICAvL+e7j+W6plxyXG4gICAgICAgICAgICBsYXRpdHVkZTogaXRlbS5sYXQsICAgIC8v57qs5bqmXHJcbiAgICAgICAgICAgIGljb25QYXRoOiAnLi4vLi4vaW1hZ2VzL2FkZHJlc3MucG5nJywgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgd2lkdGg6IDMwLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwLFxyXG4gICAgICAgICAgICBjYWxsb3V0OiB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogaXRlbS5uZWVkTmFtZSxcclxuICAgICAgICAgICAgICBjb2xvcjogJyMwMDAnLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAxOCxcclxuICAgICAgICAgICAgICBiZ0NvbG9yOiAnI0ZGRicsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNSxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXHJcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjQ0NDJyxcclxuICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnQllDTElDSydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcHJvdmluY2VOYW1lOiBpdGVtLnByb3ZpbmNlTmFtZT9pdGVtLnByb3ZpbmNlTmFtZTonJywgICAgIC8v55yBXHJcbiAgICAgICAgICAgIGNpdHlOYW1lOiBpdGVtLmNpdHlOYW1lP2l0ZW0uY2l0eU5hbWU6JycsICAgICAgICAgICAgICAgICAvL+W4glxyXG4gICAgICAgICAgICBkaXN0cmljdE5hbWU6IGl0ZW0uZGlzdHJpY3ROYW1lP2l0ZW0uZGlzdHJpY3ROYW1lOicnICAgICAgLy/ljLpcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvL+WkhOeQhklE5Li65pWw5a2XXHJcbiAgICAgICAgbGV0IG1hcmtlcnNMaXN0OmFueSAgPSB0aGlzLmRhdGEubWFya2Vycy5jb25jYXQoY3hQbGF0Zm9ybU1vZGVsc0xpc3QsY3lQbGF0Zm9ybU1vZGVsc0xpc3QscHJvTW9kZWxzTGlzdCxmd2pnTW9kZWxzTGlzdCx2ZWN0b3JNb2RlbHNMaXN0LGpyamdNZG9lbHNMaXN0LHR6TW9kZWxzTGlzdCxyb25nemlQcm9zTGlzdCxyb25nemlOZWVkc0xpc3QpO1xyXG4gICAgICAgIGxldCBuZXdNYXJrZXJzTGlzdDphbnkgPSBtYXJrZXJzTGlzdC5tYXAoKGl0ZW06YW55LCBpbmRleDpudW1iZXIpOmFueT0+e1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGluZGV4LCAgICAgICAgICAgICAgICAgICAvL21hcOeUqOeahOiHquWumuS5iUlEXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZTogaXRlbS5sb25naXR1ZGUsICAgLy/nu4/luqZcclxuICAgICAgICAgICAgbGF0aXR1ZGU6IGl0ZW0ubGF0aXR1ZGUsICAgICAvL+e6rOW6plxyXG4gICAgICAgICAgICBpY29uUGF0aDogJy4uLy4uL2ltYWdlcy9hZGRyZXNzLnBuZycsICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgd2lkdGg6IDMwLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwLFxyXG4gICAgICAgICAgICBjYWxsb3V0OiBpdGVtLmNhbGxvdXQsXHJcbiAgICAgICAgICAgIG9sZElkOiBpdGVtLmlkLCAgICAgICAgICAgICAgICAgICAgICAvL+WOn+Wni0lEXHJcbiAgICAgICAgICAgIHRpdGxlOiBpdGVtLmNhbGxvdXQuY29udGVudCwgICAgICAgICAvL+agh+mimFxyXG4gICAgICAgICAgICBwcm92aW5jZU5hbWU6IGl0ZW0ucHJvdmluY2VOYW1lLCAgICAgLy/nnIFcclxuICAgICAgICAgICAgY2l0eU5hbWU6IGl0ZW0uY2l0eU5hbWUsICAgICAgICAgICAgIC8v5biCXHJcbiAgICAgICAgICAgIGRpc3RyaWN0TmFtZTogaXRlbS5kaXN0cmljdE5hbWUgICAgICAvL+WMulxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBtYXJrZXJzOiBuZXdNYXJrZXJzTGlzdFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuXHJcbiAgLy/pobXpnaLliJ3lp4vljJZcclxuICBvbkxvYWQoKXtcclxuICAgIC8v6aG16Z2i5qCH6aKYXHJcbiAgICB3eC5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoeyAgICAgXHJcbiAgICAgIHRpdGxlOiBcIuS6uuaJjeWIm+aWsOWIm+S4muW5s+WPsOWcsOWbvlwiXHJcbiAgICB9KTtcclxuICAgIC8v5b2T5YmN5L2N572uXHJcbiAgICB3eC5nZXRMb2NhdGlvbih7XHJcbiAgICAgIHR5cGU6ICd3Z3M4NCcsXHJcbiAgICAgIHN1Y2Nlc3M6KHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgbG9uZ2l0dWRlOiByZXMubG9uZ2l0dWRlLCAgICAvL+S4reW/g+e7j+W6plxyXG4gICAgICAgICAgbGF0aXR1ZGU6IHJlcy5sYXRpdHVkZSAgICAgICAvL+S4reW/g+e6rOW6plxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIC8v6aG16Z2i5pi+56S6XHJcbiAgb25TaG93KCl7XHJcbiAgICB0aGlzLnZlcmlmaWNhdGlvbigpOyAgLy/pqozor4HnlKjmiLfnmbvlvZXnirbmgIFcclxuICB9LFxyXG5cclxuICAvL+mhtemdoua4suafk+WujOaIkFxyXG4gIG9uUmVhZHkoKXt9LFxyXG5cclxuICAvL+mhtemdoumakOiXj1xyXG4gIG9uSGlkZSgpe1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgaXNMaXN0U2hvdzogdHJ1ZSwgICAgICAgICAgLy/pu5jorqTmmL7npLo25om+5YaF5a65XHJcbiAgICAgIGlzSW5mb1Nob3c6IGZhbHNlLCAgICAgICAgIC8v5Y2V5p2h5L+h5oGv5pi+56S6XHJcbiAgICAgIGlzU2VhcmNoU2hvdzogZmFsc2UsICAgICAgIC8v5pCc57Si57uT5p6c5pWw5o2uXHJcbiAgICAgIGlzU2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgIC8v5pCc57Si5YiX6KGo5pWw5o2uXHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICAvL+mhtemdouWFs+mXrVxyXG4gIG9uVW5sb2FkKCl7fVxyXG59KVxyXG5leHBvcnQge307XHJcbiJdfQ==