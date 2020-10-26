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
        typeList: [],
        industryList: [],
        ptZiZhiList: [
            { id: 1, title: '国家级' },
            { id: 2, title: '省级' },
            { id: 3, title: '市级' },
            { id: 4, title: '区（市）级' },
            { id: 5, title: '无资质' }
        ],
        xmStageList: [],
        xmCategoryList: [],
        xmFinancingList: [],
        cdCarrierList: [],
        cdUserList: [
            { id: 1, dicName: '出租' },
            { id: 2, dicName: '出售' }
        ],
        flg: '',
        num: 0,
        mumList: [],
        searchKey: '',
        tenantId: '',
        ptSearchInfoShow: true,
        ptBtnShow: false,
        ptBtnClass: 1,
        ptIndex: 0,
        ptIndustryId: null,
        ptTypeClass: null,
        ptZiZhiClass: null,
        ptTypeId: '',
        ptZiZhi: '',
        ptCyTypeId: '',
        ptHyTypeId: '',
        proSearchInfoShow: false,
        xmIndex: 0,
        xmIndustryId: null,
        xmStageClass: null,
        xmCategoryClass: null,
        xmFinancingClass: null,
        xmStageId: '',
        xmTypeId: '',
        xmTzMoney: '',
        xmCyTypeId: '',
        xmHyTypeId: '',
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
        cdTypeClass: null,
        cdUserClass: null,
        cdTypeId: '',
        cdChuZuId: '',
        cdSaleId: '',
        cdCyTypeId: '',
        cdHyTypeId: '',
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
    ptTypes: function () {
        var _this = this;
        https.successRequest(api.submenuDic + '?moid=2', null, 'GET')
            .then(function (res) {
            if (res) {
                _this.setData({
                    typeList: res.val
                });
            }
        }, function (err) {
            console.log(err);
        });
    },
    industry: function () {
        var _this = this;
        https.successRequest(api.submenuDic + '?moid=7', null, 'GET')
            .then(function (res) {
            if (res) {
                var arr = res.val.map(function (item) {
                    var children = item.children.map(function (item2) {
                        return {
                            text: item2.dicName,
                            id: item2.id,
                            pId: item2.pId
                        };
                    });
                    children.unshift({
                        text: '全部',
                        id: item.id,
                        pId: item.id,
                    });
                    return {
                        text: item.dicName,
                        children: children
                    };
                });
                _this.setData({
                    industryList: arr
                });
            }
        }, function (err) {
            console.log(err);
        });
    },
    xmStage: function () {
        var _this = this;
        https.successRequest(api.submenuDic + '?moid=40', null, 'GET')
            .then(function (res) {
            if (res) {
                _this.setData({
                    xmStageList: res.val
                });
            }
        }, function (err) {
            console.log(err);
        });
    },
    xmCategory: function () {
        var _this = this;
        https.successRequest(api.submenuDic + '?moid=41', null, 'GET')
            .then(function (res) {
            if (res) {
                _this.setData({
                    xmCategoryList: res.val
                });
            }
        }, function (err) {
            console.log(err);
        });
    },
    xmFinancing: function () {
        var _this = this;
        https.successRequest(api.submenuDic + '?moid=55', null, 'GET')
            .then(function (res) {
            if (res) {
                console.log(res);
                _this.setData({
                    xmFinancingList: res.val
                });
            }
        }, function (err) {
            console.log(err);
        });
    },
    cdCarrier: function () {
        var _this = this;
        https.successRequest(api.submenuDic + '?moid=15', null, 'GET')
            .then(function (res) {
            if (res) {
                console.log(res);
                _this.setData({
                    cdCarrierList: res.val
                });
            }
        }, function (err) {
            console.log(err);
        });
    },
    searchBlur: function (event) {
        this.setData({
            searchKey: event.detail.value
        });
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
            searchKey: '',
            isListShow: false,
            isInfoShow: false,
            isSearchShow: true,
            isSearchInfoShow: false,
            ptSearchInfoShow: true,
            zjSearchInfoShow: false,
            proSearchInfoShow: false,
            cdSearchInfoShow: false,
        });
        this.getCxPro();
        this.getCyPro();
    },
    getCxPro: function () {
        var _this = this;
        https.successRequest(api.cxPlatformUser, {
            tenantId: this.data.tenantId,
            searchKey: this.data.searchKey,
            typeId: this.data.ptTypeId,
            ziZhi: this.data.ptZiZhi,
            cyTypeId: this.data.ptCyTypeId,
            hyTypeId: this.data.ptHyTypeId
        }, 'GET').then(function (res) {
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
            tenantId: this.data.tenantId,
            searchKey: this.data.searchKey,
            typeId: this.data.ptTypeId,
            ziZhi: this.data.ptZiZhi,
            cyTypeId: this.data.ptCyTypeId,
            hyTypeId: this.data.ptHyTypeId
        }, 'GET').then(function (res) {
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
                ptTypeClass: null,
                ptTypeId: '',
                ptZiZhiClass: null,
                ptZiZhi: '',
                ptIndex: 0,
                ptIndustryId: null,
                ptCyTypeId: '',
                ptHyTypeId: '',
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
                ptTypeClass: null,
                ptTypeId: '',
                ptZiZhiClass: null,
                ptZiZhi: '',
                ptIndex: 0,
                ptIndustryId: null,
                ptCyTypeId: '',
                ptHyTypeId: '',
                num: 0,
                mumList: [],
            });
            this.getCxPro();
            this.ptTypes();
            this.industry();
            this.selectComponent('#ptType').toggle(false);
            this.selectComponent('#ptZiZhi').toggle(false);
            this.selectComponent('#ptIndustry').toggle(false);
        }
        else {
            this.setData({
                ptBtnClass: e.target.dataset.num,
                ptBtnShow: true,
                ptTypeClass: null,
                ptTypeId: '',
                ptZiZhiClass: null,
                ptZiZhi: '',
                ptIndex: 0,
                ptIndustryId: null,
                ptCyTypeId: '',
                ptHyTypeId: '',
                num: 0,
                mumList: [],
            });
            this.getCyPro();
            this.ptTypes();
            this.industry();
            this.selectComponent('#ptType').toggle(false);
            this.selectComponent('#ptZiZhi').toggle(false);
            this.selectComponent('#ptIndustry').toggle(false);
        }
    },
    ptNavItem: function (data) {
        this.setData({
            ptIndex: data.detail.index || 0,
        });
    },
    ptIndustryItem: function (data) {
        var id = this.data.ptIndustryId === data.detail.id ? null : data.detail.id;
        var pId = this.data.ptIndustryId === data.detail.id ? null : data.detail.id;
        this.setData({
            ptIndustryId: id,
            ptCyTypeId: id ? id : '',
            ptHyTypeId: pId ? pId : '',
        });
    },
    ptTypeFn: function (e) {
        this.setData({
            ptTypeClass: e.target.dataset.id,
            ptTypeId: e.target.dataset.id
        });
    },
    ptZiZhiFn: function (e) {
        this.setData({
            cdTypeClass: e.target.dataset.id,
            cdTypeId: e.target.dataset.title
        });
    },
    ptReset: function (e) {
        var flag = e.currentTarget.dataset.flag;
        if (flag == 1) {
            this.setData({
                ptTypeClass: null,
                ptTypeId: '',
                num: 0,
                mumList: [],
            });
            this.selectComponent('#ptType').toggle(false);
        }
        else if (flag == 2) {
            this.setData({
                ptZiZhiClass: null,
                ptZiZhi: '',
                num: 0,
                mumList: [],
            });
            this.selectComponent('#ptZiZhi').toggle(false);
        }
        else {
            this.setData({
                ptIndex: 0,
                ptIndustryId: null,
                ptCyTypeId: '',
                ptHyTypeId: '',
                num: 0,
                mumList: [],
            });
            this.selectComponent('#ptIndustry').toggle(false);
        }
        this.getCxPro();
    },
    ptSubmit: function (e) {
        var flag = e.currentTarget.dataset.flag;
        if (flag == 1) {
            this.selectComponent('#ptType').toggle(false);
        }
        else if (flag == 2) {
            this.selectComponent('#ptZiZhi').toggle(false);
        }
        else {
            this.selectComponent('#ptIndustry').toggle(false);
        }
        this.setData({
            num: 0,
            mumList: [],
        });
        this.getCxPro();
    },
    zcFn: function () { },
    xmFn: function () {
        this.setData({
            num: 0,
            mumList: [],
            searchKey: '',
            isListShow: false,
            isInfoShow: false,
            isSearchShow: true,
            isSearchInfoShow: false,
            ptSearchInfoShow: false,
            ptBtnShow: false,
            zjSearchInfoShow: false,
            proSearchInfoShow: true,
            cdSearchInfoShow: false,
        });
        this.getProList();
        this.xmStage();
        this.xmCategory();
        this.xmFinancing();
        this.industry();
    },
    getProList: function () {
        var _this = this;
        https.successRequest(api.findPro, {
            tenantId: this.data.tenantId,
            searchKey: this.data.searchKey,
            needTypes: this.data.xmTypeId,
            tzMoney: this.data.xmTzMoney,
            cyTypeId: this.data.xmCyTypeId,
            hyTypeId: this.data.xmHyTypeId
        }, 'GET').then(function (res) {
            if (res) {
                var list = res.list.map(function (item) {
                    return {
                        id: item.id,
                        longitude: item.longitude,
                        latitude: item.latitude,
                        title: item.proName,
                        provinceName: item.provinceName ? item.provinceName : '',
                        cityName: item.cityName ? item.cityName : '',
                        districtName: item.districtName ? item.districtName : '',
                        markers: item.markers
                    };
                });
                _this.setData({
                    num: _this.data.num = res.total,
                    mumList: list
                });
            }
        }, function (err) {
            console.log(err);
        });
    },
    xmStageFn: function (e) {
        this.setData({
            xmStageClass: e.target.dataset.id,
            xmStageId: e.target.dataset.id
        });
    },
    xmCategoryFn: function (e) {
        this.setData({
            xmCategoryClass: e.target.dataset.id,
            xmTypeId: e.target.dataset.id
        });
    },
    xmFinancingFn: function (e) {
        this.setData({
            xmFinancingClass: e.target.dataset.id,
            xmTzMoney: e.target.dataset.id
        });
    },
    xmReset: function (e) {
        var flag = e.currentTarget.dataset.flag;
        if (flag == 1) {
            this.setData({
                xmStageClass: null,
                xmStageId: '',
                num: 0,
                mumList: [],
            });
            this.selectComponent('#xmStage').toggle(false);
        }
        else if (flag == 2) {
            this.setData({
                xmCategoryClass: null,
                xmTypeId: '',
                num: 0,
                mumList: [],
            });
            this.selectComponent('#xmCategory').toggle(false);
        }
        else if (flag == 3) {
            this.setData({
                xmFinancingClass: null,
                xmTzMoney: '',
                num: 0,
                mumList: [],
            });
            this.selectComponent('#xmFinancing').toggle(false);
        }
        else {
            this.setData({
                xmIndex: 0,
                xmIndustryId: null,
                xmCyTypeId: '',
                xmHyTypeId: '',
                num: 0,
                mumList: [],
            });
            this.selectComponent('#xmIndustry').toggle(false);
        }
        this.getProList();
    },
    xmSubmit: function (e) {
        var flag = e.currentTarget.dataset.flag;
        if (flag == 1) {
            this.selectComponent('#xmStage').toggle(false);
        }
        else if (flag == 2) {
            this.selectComponent('#xmCategory').toggle(false);
        }
        else if (flag == 3) {
            this.selectComponent('#xmFinancing').toggle(false);
        }
        else {
            this.selectComponent('#xmIndustry').toggle(false);
        }
        this.setData({
            num: 0,
            mumList: [],
        });
        this.getProList();
    },
    xmNavItem: function (data) {
        this.setData({
            xmIndex: data.detail.index || 0,
        });
    },
    xmIndustryItem: function (data) {
        var id = this.data.xmIndustryId === data.detail.id ? null : data.detail.id;
        var pId = this.data.xmIndustryId === data.detail.id ? null : data.detail.id;
        this.setData({
            xmIndustryId: id,
            xmCyTypeId: id ? id : '',
            xmHyTypeId: pId ? pId : '',
        });
    },
    cdFn: function () {
        this.setData({
            num: 0,
            mumList: [],
            searchKey: '',
            isListShow: false,
            isInfoShow: false,
            isSearchShow: true,
            isSearchInfoShow: false,
            ptSearchInfoShow: false,
            ptBtnShow: false,
            zjSearchInfoShow: false,
            proSearchInfoShow: false,
            cdSearchInfoShow: true,
        });
        this.getSiteList();
        this.cdCarrier();
        this.industry();
    },
    getSiteList: function () {
        var _this = this;
        https.successRequest(api.cyPlatform, {
            tenantId: this.data.tenantId,
            searchKey: this.data.searchKey,
            ztTypeId: this.data.cdTypeId,
            isChuZu: this.data.cdChuZuId,
            isSale: this.data.cdSaleId,
            cyTypeId: this.data.cdCyTypeId,
            hyTypeId: this.data.cdHyTypeId
        }, 'GET').then(function (res) {
            if (res) {
                var list = res.list.map(function (item) {
                    return {
                        id: item.id,
                        longitude: item.longitude,
                        latitude: item.latitude,
                        title: item.proName,
                        provinceName: item.provinceName ? item.provinceName : '',
                        cityName: item.cityName ? item.cityName : '',
                        districtName: item.districtName ? item.districtName : '',
                        markers: item.markers
                    };
                });
                _this.setData({
                    num: _this.data.num = res.total,
                    mumList: list
                });
            }
        }, function (err) {
            console.log(err);
        });
    },
    cdTypeFn: function (e) {
        this.setData({
            cdTypeClass: e.target.dataset.id,
            cdTypeId: e.target.dataset.id
        });
    },
    cdUseFn: function (e) {
        var id = e.target.dataset.id;
        if (id == 1) {
            this.setData({
                cdUserClass: id,
                cdChuZuId: '1',
                cdSaleId: '',
            });
        }
        else {
            this.setData({
                cdUserClass: id,
                cdChuZuId: '',
                cdSaleId: '1',
            });
        }
    },
    cdNavItem: function (data) {
        this.setData({
            cdIndex: data.detail.index || 0,
        });
    },
    cdIndustryItem: function (data) {
        var id = this.data.cdIndustryId === data.detail.id ? null : data.detail.id;
        var pId = this.data.cdIndustryId === data.detail.id ? null : data.detail.id;
        this.setData({
            cdIndustryId: id,
            cdCyTypeId: id ? id : '',
            cdHyTypeId: pId ? pId : '',
        });
    },
    cdReset: function (e) {
        var flag = e.currentTarget.dataset.flag;
        if (flag == 1) {
            this.setData({
                cdTypeClass: null,
                cdTypeId: '',
                num: 0,
                mumList: [],
            });
            this.selectComponent('#cdType').toggle(false);
        }
        else if (flag == 2) {
            this.setData({
                cdUserClass: null,
                cdChuZuId: '',
                cdSaleId: '',
                num: 0,
                mumList: [],
            });
            this.selectComponent('#cdUser').toggle(false);
        }
        else {
            this.setData({
                cdIndex: 0,
                cdIndustryId: null,
                cdCyTypeId: '',
                cdHyTypeId: '',
                num: 0,
                mumList: [],
            });
            this.selectComponent('#cdIndustry').toggle(false);
        }
        this.getSiteList();
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
            var title = e.currentTarget.dataset.title;
            var markers = JSON.parse(e.currentTarget.dataset.markers)[0].position;
            if (markers.length > 0) {
                this.setData({
                    goName: title,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFFLENBQUMsVUFBVSxDQUFDO0FBQ2hDLElBQUksS0FBSyxHQUFJLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0FBQ2pELElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxvREFBb0QsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUVuRixJQUFJLENBQUM7SUFFSCxJQUFJLEVBQUU7UUFFSixVQUFVLEVBQUUsSUFBSTtRQUNoQixVQUFVLEVBQUUsS0FBSztRQUNqQixZQUFZLEVBQUUsS0FBSztRQUNuQixnQkFBZ0IsRUFBRSxLQUFLO1FBR3ZCLFFBQVEsRUFBRSxFQUFFO1FBQ1osWUFBWSxFQUFFLEVBQUU7UUFDaEIsV0FBVyxFQUFDO1lBQ1YsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7WUFDdkIsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7WUFDdEIsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7WUFDdEIsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUU7WUFDekIsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7U0FDeEI7UUFFRCxXQUFXLEVBQUUsRUFBRTtRQUNmLGNBQWMsRUFBRSxFQUFFO1FBQ2xCLGVBQWUsRUFBRSxFQUFFO1FBRW5CLGFBQWEsRUFBRSxFQUFFO1FBQ2pCLFVBQVUsRUFBRTtZQUNWLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO1lBQ3hCLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO1NBQ3pCO1FBR0QsR0FBRyxFQUFFLEVBQUU7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LFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFHRCxPQUFPLGdCQUFHLENBQUM7SUFHWCxNQUFNO1FBQ0osSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLFlBQVksRUFBRSxLQUFLO1lBQ25CLGdCQUFnQixFQUFFLEtBQUs7U0FDeEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdELFFBQVEsZ0JBQUcsQ0FBQztDQUNiLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIG1hcC50c1xyXG5jb25zdCBhcGkgPSBnZXRBcHAoKS5nbG9iYWxEYXRhOyAgLy8g6I635Y+W5bqU55So5a6e5L6LXHJcbmxldCBodHRwcyAgPSByZXF1aXJlKCcuLi8uLi91dGlscy9teVJlcXVlc3QuanMnKTsgIC8v6I635Y+WYWpheOaWueazlVxyXG5sZXQgRGlhbG9nID0gcmVxdWlyZSgnLi4vLi4vbWluaXByb2dyYW1fbnBtL0B2YW50L3dlYXBwL2RpYWxvZy9kaWFsb2cuanMnKS5kZWZhdWx0O1xyXG5cclxuUGFnZSh7XHJcbiAgLy/pobXpnaLmlbDmja5cclxuICBkYXRhOiB7XHJcbiAgICAvL+aQnOe0olxyXG4gICAgaXNMaXN0U2hvdzogdHJ1ZSwgICAgICAgICAvL+m7mOiupOaYvuekujbmib7lhoXlrrlcclxuICAgIGlzSW5mb1Nob3c6IGZhbHNlLCAgICAgICAgLy/ljZXmnaHkv6Hmga/mmL7npLpcclxuICAgIGlzU2VhcmNoU2hvdzogZmFsc2UsICAgICAgLy/mkJzntKLnu5PmnpzmlbDmja5cclxuICAgIGlzU2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgLy/mkJzntKLliJfooajmlbDmja5cclxuXHJcbiAgICAvL+W5s+WPsOmrmOe6p+aQnOe0olxyXG4gICAgdHlwZUxpc3Q6IFtdLCAgICAgICAgICAgICAvL+exu+Wei1xyXG4gICAgaW5kdXN0cnlMaXN0OiBbXSwgICAgICAgICAvL+W5s+WPsOS6p+S4muihjOS4mlxyXG4gICAgcHRaaVpoaUxpc3Q6WyAgICAgICAgICAgICAvL+W5s+WPsOi1hOi0qFxyXG4gICAgICB7IGlkOiAxLCB0aXRsZTogJ+WbveWutue6pycgfSxcclxuICAgICAgeyBpZDogMiwgdGl0bGU6ICfnnIHnuqcnIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHRpdGxlOiAn5biC57qnJyB9LFxyXG4gICAgICB7IGlkOiA0LCB0aXRsZTogJ+WMuu+8iOW4gu+8iee6pycgfSxcclxuICAgICAgeyBpZDogNSwgdGl0bGU6ICfml6DotYTotKgnIH1cclxuICAgIF0sXHJcbiAgICAvL+mhueebrumrmOe6p+aQnOe0olxyXG4gICAgeG1TdGFnZUxpc3Q6IFtdLCAgICAgICAgICAgICAvL+aJgOWkhOmYtuautVxyXG4gICAgeG1DYXRlZ29yeUxpc3Q6IFtdLCAgICAgICAgICAvL+mcgOaxguexu+WIq1xyXG4gICAgeG1GaW5hbmNpbmdMaXN0OiBbXSwgICAgICAgICAvL+iejei1hOmHkeminVxyXG4gICAgLy/lnLrlnLDpq5jnuqfmkJzntKJcclxuICAgIGNkQ2Fycmllckxpc3Q6IFtdLCAgICAgICAgICAgLy/otYTmupDnsbvlnotcclxuICAgIGNkVXNlckxpc3Q6IFsgICAgICAgICAgICAgICAgLy/lnLrlnLDnlKjpgJRcclxuICAgICAgeyBpZDogMSwgZGljTmFtZTogJ+WHuuennycgfSxcclxuICAgICAgeyBpZDogMiwgZGljTmFtZTogJ+WHuuWUricgfVxyXG4gICAgXSxcclxuICAgIFxyXG5cclxuICAgIGZsZzogJycsICAgICAgICAgICAgICAgICAgIC8vNuaJvueKtuaAgeWIpOaWrVxyXG4gICAgbnVtOiAwLCAgICAgICAgICAgICAgICAgICAgLy825om+57uT5p6cXHJcbiAgICBtdW1MaXN0OiBbXSwgICAgICAgICAgICAgICAvLzbmib7liJfooahcclxuXHJcbiAgICBzZWFyY2hLZXk6ICcnLCAgICAgICAgICAgIC8va2V55YWz6ZSu5a2X5pCc57SiXHJcbiAgICB0ZW5hbnRJZDogJycsICAgICAgICAgICAgIC8v5Zyw5Yy6aWRcclxuXHJcbiAgICAvL+aJvuW5s+WPsFxyXG4gICAgcHRTZWFyY2hJbmZvU2hvdzogdHJ1ZSwgICAgIC8v5pi+56S6L+makOiXj1xyXG4gICAgcHRCdG5TaG93OiBmYWxzZSwgICAgICAgICAgIC8v5YWo6YOo5pe25pi+56S6L+makOiXj1xyXG4gICAgcHRCdG5DbGFzczogMSwgICAgICAgICAgICAgIC8v5YWo6YOo5oyJ6ZKu54q25oCB5YiH5o2iXHJcbiAgICBwdEluZGV4OiAwLCAgICAgICAgICAgICAgICAgLy/lvZPliY3ntKLlvJVcclxuICAgIHB0SW5kdXN0cnlJZDogbnVsbCwgICAgICAgICAvL+mAieS4reeahGlkXHJcbiAgICBcclxuICAgIHB0VHlwZUNsYXNzOiBudWxsLCAgICAgICAgICAvL+exu+Wei+aMiemSrueKtuaAgeWIh+aNolxyXG4gICAgcHRaaVpoaUNsYXNzOiBudWxsLCAgICAgICAgIC8v6LWE6LSo5oyJ6ZKu54q25oCB5YiH5o2iXHJcblxyXG4gICAgcHRUeXBlSWQ6ICcnLCAgICAgICAgICAgICAgIC8v5bmz5Y+w57G75Z6LaWRcclxuICAgIHB0WmlaaGk6ICcnLCAgICAgICAgICAgICAgICAvL+W5s+WPsOi1hOi0qGlkXHJcbiAgICBwdEN5VHlwZUlkOiAnJywgICAgICAgICAgICAgLy/kuqfkuJppZFxyXG4gICAgcHRIeVR5cGVJZDogJycsICAgICAgICAgICAgIC8v6KGM5LiaaWRcclxuXHJcbiAgXHJcbiAgICAvL+aJvumhueebrlxyXG4gICAgcHJvU2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgICAvL+aYvuekui/pmpDol49cclxuICAgIHhtSW5kZXg6IDAsICAgICAgICAgICAgICAgICAvL+W9k+WJjee0ouW8lVxyXG4gICAgeG1JbmR1c3RyeUlkOiBudWxsLCAgICAgICAgIC8v6YCJ5Lit55qEaWRcclxuXHJcbiAgICB4bVN0YWdlQ2xhc3M6IG51bGwsICAgICAgICAgIC8v6Zi25q615oyJ6ZKu54q25oCB5YiH5o2iXHJcbiAgICB4bUNhdGVnb3J5Q2xhc3M6IG51bGwsICAgICAgIC8v57G75Yir5oyJ6ZKu54q25oCB5YiH5o2iXHJcbiAgICB4bUZpbmFuY2luZ0NsYXNzOiBudWxsLCAgICAgIC8v6YeR6aKd5oyJ6ZKu54q25oCB5YiH5o2iXHJcblxyXG4gICAgeG1TdGFnZUlkOiAnJywgICAgICAgICAgICAgICAvL+aJgOWkhOmYtuautVxyXG4gICAgeG1UeXBlSWQ6ICcnLCAgICAgICAgICAgICAgICAvL+mcgOaxguexu+WIq1xyXG4gICAgeG1Uek1vbmV5OiAnJywgICAgICAgICAgICAgICAvL+iejei1hOmHkeminVxyXG4gICAgeG1DeVR5cGVJZDogJycsICAgICAgICAgICAgICAvL+S6p+S4mmlkXHJcbiAgICB4bUh5VHlwZUlkOiAnJywgICAgICAgICAgICAgIC8v6KGM5LiaaWRcclxuXHJcblxyXG4gICAgLy/mib7otYTph5FcclxuICAgIHpqU2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgICAvL+aYvuekui/pmpDol49cclxuICAgIC8v5om+6LWE6YeR77yI6YeR6J6N5pyN5Yqh77yJXHJcbiAgICBqclNlYXJjaEluZm9TaG93OiBmYWxzZSwgICAgLy/mmL7npLov6ZqQ6JePXHJcbiAgICBqckluZGV4OiAwLCAgICAgICAgICAgICAgICAvL+W9k+WJjee0ouW8lVxyXG4gICAganJJbmR1c3RyeUlkOiBudWxsLCAgICAgICAgLy/pgInkuK3nmoRpZFxyXG4gICAgLy/mib7otYTph5HvvIjmipXotYTvvIlcclxuICAgIHR6U2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgICAvL+aYvuekui/pmpDol49cclxuICAgIHR6SW5kZXg6IDAsICAgICAgICAgICAgICAgIC8v5b2T5YmN57Si5byVXHJcbiAgICB0ekluZHVzdHJ5SWQ6IG51bGwsICAgICAgICAvL+mAieS4reeahGlkXHJcbiAgICAvL+aJvui1hOmHke+8iOiejei1hO+8iVxyXG4gICAgcnpTZWFyY2hJbmZvU2hvdzogZmFsc2UsICAgIC8v5pi+56S6L+makOiXj1xyXG4gICAgcnpJbmRleDogMCwgICAgICAgICAgICAgICAgLy/lvZPliY3ntKLlvJVcclxuICAgIHJ6SW5kdXN0cnlJZDogbnVsbCwgICAgICAgIC8v6YCJ5Lit55qEaWRcclxuXHJcblxyXG4gICAgLy/mib7lnLrlnLBcclxuICAgIGNkU2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgIC8v5pi+56S6L+makOiXj1xyXG4gICAgY2RJbmRleDogMCwgICAgICAgICAgICAgICAgLy/lvZPliY3ntKLlvJVcclxuICAgIGNkSW5kdXN0cnlJZDogbnVsbCwgICAgICAgIC8v6YCJ5Lit55qEaWRcclxuXHJcbiAgICBjZFR5cGVDbGFzczogbnVsbCwgICAgICAgICAvL+i1hOa6kOexu+Wei1xyXG4gICAgY2RVc2VyQ2xhc3M6IG51bGwsICAgICAgICAgLy/lnLrlnLDnlKjpgJRcclxuXHJcbiAgICBjZFR5cGVJZDogJycsICAgICAgICAgICAgICAvL+i9veS9k+epuumXtOexu+Wei1xyXG4gICAgY2RDaHVadUlkOiAnJywgICAgICAgICAgICAgLy/mmK/lkKblh7rnp59cclxuICAgIGNkU2FsZUlkOiAnJywgICAgICAgICAgICAgIC8v5piv5ZCm5Ye65ZSuXHJcbiAgICBjZEN5VHlwZUlkOiAnJywgICAgICAgICAgICAvL+S6p+S4mmlkXHJcbiAgICBjZEh5VHlwZUlkOiAnJywgICAgICAgICAgICAvL+ihjOS4mmlkXHJcblxyXG4gICAgLy/mib7mnI3liqFcclxuICAgIGZ3U2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgICAvL+aYvuekui/pmpDol49cclxuICAgIGZ3SW5kZXg6IDAsICAgICAgICAgICAgICAgICAvL+W9k+WJjee0ouW8lVxyXG4gICAgZndJbmR1c3RyeUlkOiBudWxsLCAgICAgICAgIC8v6YCJ5Lit55qEaWRcclxuXHJcblxyXG4gICAgLy/lnLDlm75cclxuICAgIGxvbmdpdHVkZTogJycsICAgICAgICAgICAgLy/kuK3lv4Pnu4/luqZcclxuICAgIGxhdGl0dWRlOiAnJywgICAgICAgICAgICAgLy/kuK3lv4PnuqzluqZcclxuICAgIHNjYWxlOiAxMiwgICAgICAgICAgICAgICAgLy/nvKnmlL7nuqfliKvvvIzlj5blgLzojIPlm7TkuLozLTIwXHJcbiAgICBtYXJrZXJzOltdLCAgICAgICAgICAgICAgIC8v5qCH6K6w54K55aSE55CG5ZCO55qE5pWw5o2u77yIaWTjgIHmn6Xor6Lkvb/nlKjvvIlcclxuICAgIG1hcmtlcnNPYmo6e30sICAgICAgICAgICAgLy/mn6Xor6LnmoTljZXmnaHmlbDmja5cclxuICAgIC8v5omA5Lul5qCH54K55pWw5o2uXHJcbiAgICBjeFBsYXRmb3JtTW9kZWxzOiBbXSwgICAgIC8v5Yib5Lia5bmz5Y+wXHJcbiAgICBjeVBsYXRmb3JtTW9kZWxzOiBbXSwgICAgIC8v5Yib5paw5bmz5Y+wXHJcbiAgICBwcm9Nb2RlbHM6IFtdLCAgICAgICAgICAgIC8v5om+6aG555uuXHJcbiAgICBmd2pnTW9kZWxzOiBbXSwgICAgICAgICAgIC8v5om+5pyN5Yqh5py65p6EXHJcbiAgICB2ZWN0b3JNb2RlbHM6IFtdLCAgICAgICAgIC8v5om+5Zy65ZywXHJcbiAgICBqcmpnTWRvZWxzOiBbXSwgICAgICAgICAgIC8v5om+6YeR6J6N5py65p6EXHJcbiAgICB0ek1vZGVsczogW10sICAgICAgICAgICAgIC8v5om+5oqV6LWE6ZyA5rGCXHJcbiAgICByb25nemlQcm9zOiBbXSwgICAgICAgICAgIC8v5om+6J6N6LWE6ZyA5rGC77yI6aG555uu5bqT55qE6J6N6LWEN+mhue+8iVxyXG4gICAgcm9uZ3ppTmVlZHM6IFtdLCAgICAgICAgICAvL+aJvuiejei1hOmcgOaxgu+8iOmcgOaxguW6k+eahOiejei1hDfpobnvvIlcclxuICAgIC8v5a+86IiqXHJcbiAgICBnb05hbWU6JycsICAgICAgICAgICAgICAgIC8v6KaB5Y6755qE5Zyw5Z2AXHJcbiAgICBnb0xvbmdpdHVkZTogJycsICAgICAgICAgIC8v5Lit5b+D57uP5bqmKOe7iOeCuSlcclxuICAgIGdvTGF0aXR1ZGU6ICcnLCAgICAgICAgICAgLy/kuK3lv4PnuqzluqYo57uI54K5KVxyXG4gIH0sXHJcblxyXG4gIC8v57G75Z6LXHJcbiAgcHRUeXBlcygpOnZvaWR7XHJcbiAgICBodHRwcy5zdWNjZXNzUmVxdWVzdChhcGkuc3VibWVudURpYyArICc/bW9pZD0yJywgbnVsbCwgJ0dFVCcpXHJcbiAgICAudGhlbigocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICBpZihyZXMpe1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICB0eXBlTGlzdDogcmVzLnZhbFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICAvL+S6p+S4mi/ooYzkuJpcclxuICBpbmR1c3RyeSgpOnZvaWR7XHJcbiAgICBodHRwcy5zdWNjZXNzUmVxdWVzdChhcGkuc3VibWVudURpYyArICc/bW9pZD03JywgbnVsbCwgJ0dFVCcpXHJcbiAgICAudGhlbigocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICBpZihyZXMpe1xyXG4gICAgICAgIGxldCBhcnI6YW55ID0gcmVzLnZhbC5tYXAoKGl0ZW06YW55KTphbnk9PntcclxuICAgICAgICAgIGxldCBjaGlsZHJlbjphbnkgPSBpdGVtLmNoaWxkcmVuLm1hcCgoaXRlbTI6YW55KTphbnk9PntcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICB0ZXh0OiBpdGVtMi5kaWNOYW1lLFxyXG4gICAgICAgICAgICAgIGlkOiBpdGVtMi5pZCxcclxuICAgICAgICAgICAgICBwSWQ6IGl0ZW0yLnBJZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgY2hpbGRyZW4udW5zaGlmdCh7XHJcbiAgICAgICAgICAgIHRleHQ6ICflhajpg6gnLFxyXG4gICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgcElkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0ZXh0OiBpdGVtLmRpY05hbWUsXHJcbiAgICAgICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIGluZHVzdHJ5TGlzdDogYXJyXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIC8v5omA5aSE6Zi25q61XHJcbiAgeG1TdGFnZSgpOnZvaWR7XHJcbiAgICBodHRwcy5zdWNjZXNzUmVxdWVzdChhcGkuc3VibWVudURpYyArICc/bW9pZD00MCcsIG51bGwsICdHRVQnKVxyXG4gICAgLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgaWYocmVzKXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgeG1TdGFnZUxpc3Q6IHJlcy52YWxcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICB4bUNhdGVnb3J5KCk6dm9pZHsgIC8v6ZyA5rGC57G75YirXHJcbiAgICBodHRwcy5zdWNjZXNzUmVxdWVzdChhcGkuc3VibWVudURpYyArICc/bW9pZD00MScsIG51bGwsICdHRVQnKVxyXG4gICAgLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgaWYocmVzKXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgeG1DYXRlZ29yeUxpc3Q6IHJlcy52YWxcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICB4bUZpbmFuY2luZygpOnZvaWR7ICAvL+iejei1hOmHkeminVxyXG4gICAgaHR0cHMuc3VjY2Vzc1JlcXVlc3QoYXBpLnN1Ym1lbnVEaWMgKyAnP21vaWQ9NTUnLCBudWxsLCAnR0VUJylcclxuICAgIC50aGVuKChyZXM6YW55KTp2b2lkPT57XHJcbiAgICAgIGlmKHJlcyl7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICB4bUZpbmFuY2luZ0xpc3Q6IHJlcy52YWxcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgY2RDYXJyaWVyKCk6dm9pZHsgIC8v6LWE5rqQ57G75Z6LXHJcbiAgICBodHRwcy5zdWNjZXNzUmVxdWVzdChhcGkuc3VibWVudURpYyArICc/bW9pZD0xNScsIG51bGwsICdHRVQnKVxyXG4gICAgLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgaWYocmVzKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIGNkQ2Fycmllckxpc3Q6IHJlcy52YWxcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBcclxuXHJcbiAgLy/mkJzntKLmjInpkq7op6blj5FcclxuICBzZWFyY2hCbHVyKGV2ZW50OmFueSk6dm9pZHtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHNlYXJjaEtleTogZXZlbnQuZGV0YWlsLnZhbHVlXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIC8v5pCc57Si5YiX6KGo5pi+56S6XHJcbiAgc2VhcmNoSW5mb09wZW4oKTp2b2lke1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgaXNMaXN0U2hvdzogZmFsc2UsICAgICAgICAgIC8v6buY6K6k5pi+56S6NuaJvuWGheWuuVxyXG4gICAgICBpc0luZm9TaG93OiBmYWxzZSwgICAgICAgICAvL+WNleadoeS/oeaBr+aYvuekulxyXG4gICAgICBpc1NlYXJjaFNob3c6IGZhbHNlLCAgICAgICAvL+aQnOe0oue7k+aenOaVsOaNrlxyXG4gICAgICBpc1NlYXJjaEluZm9TaG93OiB0cnVlLCAgIC8v5pCc57Si5YiX6KGo5pWw5o2uXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgIC8v5pCc57Si5YiX6KGo5YWz6ZetXHJcbiAgIHNlYXJjaEluZm9DbG9zZSgpOnZvaWR7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBpc0xpc3RTaG93OiBmYWxzZSwgICAgICAgICAgLy/pu5jorqTmmL7npLo25om+5YaF5a65XHJcbiAgICAgIGlzSW5mb1Nob3c6IGZhbHNlLCAgICAgICAgICAvL+WNleadoeS/oeaBr+aYvuekulxyXG4gICAgICBpc1NlYXJjaFNob3c6IHRydWUsICAgICAgICAgLy/mkJzntKLnu5PmnpzmlbDmja5cclxuICAgICAgaXNTZWFyY2hJbmZvU2hvdzogZmFsc2UsICAgIC8v5pCc57Si5YiX6KGo5pWw5o2uXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG5cclxuICAvL+aQnOe0oue7k+aenOWFs+mXrVxyXG4gIHNlYXJjaENsb3NlKCk6dm9pZHtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICBtdW1MaXN0OiBbXSwgICAgICAgICAgICAgICAvLzbmib7liJfooahcclxuICAgICAgaXNMaXN0U2hvdzogdHJ1ZSwgICAgICAgICAgLy/pu5jorqTmmL7npLo25om+5YaF5a65XHJcbiAgICAgIGlzSW5mb1Nob3c6IGZhbHNlLCAgICAgICAgIC8v5Y2V5p2h5L+h5oGv5pi+56S6XHJcbiAgICAgIGlzU2VhcmNoU2hvdzogZmFsc2UsICAgICAgIC8v5pCc57Si57uT5p6c5pWw5o2uXHJcbiAgICAgIGlzU2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgIC8v5pCc57Si5YiX6KGo5pWw5o2uXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG5cclxuICAvL+aJvuW5s+WPsFxyXG4gIHB0Rm4oKTp2b2lkeyAgICAgICAgICAgICAgICAgICAvLzbmib7lubPlj7Dop6blj5FcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICBtdW1MaXN0OiBbXSwgICAgICAgICAgICAgICAvLzbmib7liJfooahcclxuICAgICAgc2VhcmNoS2V5OiAnJywgICAgICAgICAgICAgLy/lhbPplK7lrZfmkJzntKJcclxuXHJcbiAgICAgIGlzTGlzdFNob3c6IGZhbHNlLCAgICAgICAgIC8v6buY6K6k5pi+56S6NuaJvuWGheWuuVxyXG4gICAgICBpc0luZm9TaG93OiBmYWxzZSwgICAgICAgICAvL+WNleadoeS/oeaBr+aYvuekulxyXG4gICAgICBpc1NlYXJjaFNob3c6IHRydWUsICAgICAgICAvL+aQnOe0oue7k+aenOaVsOaNrlxyXG4gICAgICBpc1NlYXJjaEluZm9TaG93OiBmYWxzZSwgICAvL+aQnOe0ouWIl+ihqOaVsOaNrlxyXG5cclxuICAgICAgcHRTZWFyY2hJbmZvU2hvdzogdHJ1ZSwgICAgLy/lubPlj7Dlhajpg6jmjInpkq5cclxuICAgICAgempTZWFyY2hJbmZvU2hvdzogZmFsc2UsICAgLy/otYTph5Hlhajpg6jmjInpkq5cclxuICAgICAgcHJvU2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgLy/pobnnm67pq5jnuqfmkJzntKJcclxuICAgICAgY2RTZWFyY2hJbmZvU2hvdzogZmFsc2UsICAgLy/lnLrlnLDpq5jnuqfmkJzntKJcclxuXHJcbiAgICB9KVxyXG4gICAgdGhpcy5nZXRDeFBybygpOyAgICAgICAgICAgICAvLzbmib7liJvmlrDlubPlj7Dnu5/orqFcclxuICAgIHRoaXMuZ2V0Q3lQcm8oKTsgICAgICAgICAgICAgLy825om+5Yib5Lia5bmz5Y+w57uf6K6hXHJcbiAgfSxcclxuICBnZXRDeFBybygpOnZvaWR7ICAgICAgICAgICAgICAgLy825om+5Yib5paw5bmz5Y+w57uf6K6hXHJcbiAgICBodHRwcy5zdWNjZXNzUmVxdWVzdChhcGkuY3hQbGF0Zm9ybVVzZXIsIHtcclxuICAgICAgdGVuYW50SWQ6IHRoaXMuZGF0YS50ZW5hbnRJZCwgICAgIC8v5Zyw5Yy6aWRcclxuICAgICAgc2VhcmNoS2V5OiB0aGlzLmRhdGEuc2VhcmNoS2V5LCAgIC8v5YWz6ZSu5a2XXHJcbiAgICAgIHR5cGVJZDogdGhpcy5kYXRhLnB0VHlwZUlkLCAgICAgICAvL+W5s+WPsOexu+Wei2lkXHJcbiAgICAgIHppWmhpOiB0aGlzLmRhdGEucHRaaVpoaSwgICAgICAgICAvL+W5s+WPsOi1hOi0qGlkXHJcbiAgICAgIGN5VHlwZUlkOiB0aGlzLmRhdGEucHRDeVR5cGVJZCwgICAvL+S6p+S4mmlkXHJcbiAgICAgIGh5VHlwZUlkOiB0aGlzLmRhdGEucHRIeVR5cGVJZCAgICAvL+ihjOS4mmlkXHJcbiAgICB9LCAnR0VUJykudGhlbigocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICBpZihyZXMpe1xyXG4gICAgICAgIGxldCBsaXN0OmFueSA9IHJlcy5saXN0Lm1hcCgoaXRlbTphbnkpOmFueT0+e1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsICAgICAgICAgICAgICAgICAgICAgICAgICAvL0lEXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZTogaXRlbS5sb25naXR1ZGUsICAgICAgICAgICAgLy/kuK3lv4Pnu4/luqZcclxuICAgICAgICAgICAgbGF0aXR1ZGU6IGl0ZW0ubGF0aXR1ZGUsICAgICAgICAgICAgICAvL+S4reW/g+e6rOW6plxyXG4gICAgICAgICAgICB0aXRsZTogaXRlbS5jeE5hbWUsICAgICAgICAgICAgICAgICAgIC8v5qCH6aKYXHJcbiAgICAgICAgICAgIHByb3ZpbmNlTmFtZTogaXRlbS5wcm92aW5jZU5hbWU/aXRlbS5wcm92aW5jZU5hbWU6JycsICAgICAvL+ecgVxyXG4gICAgICAgICAgICBjaXR5TmFtZTogaXRlbS5jaXR5TmFtZT9pdGVtLmNpdHlOYW1lOicnLCAgICAgICAgICAgICAgICAgLy/luIJcclxuICAgICAgICAgICAgZGlzdHJpY3ROYW1lOiBpdGVtLmRpc3RyaWN0TmFtZT9pdGVtLmRpc3RyaWN0TmFtZTonJywgICAgIC8v5Yy6XHJcbiAgICAgICAgICAgIG1hcmtlcnM6IGl0ZW0ubWFya2VycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WdkOagh1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIG51bTogdGhpcy5kYXRhLm51bSArPSByZXMudG90YWwsXHJcbiAgICAgICAgICBtdW1MaXN0OiB0aGlzLmRhdGEubXVtTGlzdC5jb25jYXQobGlzdClcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBnZXRDeVBybygpOnZvaWR7ICAgICAgICAgICAgICAgLy825om+5Yib5Lia5bmz5Y+w57uf6K6hXHJcbiAgICBodHRwcy5zdWNjZXNzUmVxdWVzdChhcGkuY3lQbGF0VXNlciwge1xyXG4gICAgICB0ZW5hbnRJZDogdGhpcy5kYXRhLnRlbmFudElkLCAgICAgLy/lnLDljLppZFxyXG4gICAgICBzZWFyY2hLZXk6IHRoaXMuZGF0YS5zZWFyY2hLZXksICAgLy/lhbPplK7lrZdcclxuICAgICAgdHlwZUlkOiB0aGlzLmRhdGEucHRUeXBlSWQsICAgICAgIC8v5bmz5Y+w57G75Z6LaWRcclxuICAgICAgemlaaGk6IHRoaXMuZGF0YS5wdFppWmhpLCAgICAgICAgIC8v5bmz5Y+w6LWE6LSoaWRcclxuICAgICAgY3lUeXBlSWQ6IHRoaXMuZGF0YS5wdEN5VHlwZUlkLCAgIC8v5Lqn5LiaaWRcclxuICAgICAgaHlUeXBlSWQ6IHRoaXMuZGF0YS5wdEh5VHlwZUlkICAgIC8v6KGM5LiaaWRcclxuICAgIH0sICdHRVQnKS50aGVuKChyZXM6YW55KTp2b2lkPT57XHJcbiAgICAgIGlmKHJlcyl7XHJcbiAgICAgICAgbGV0IGxpc3Q6YW55ID0gcmVzLmxpc3QubWFwKChpdGVtOmFueSk6YW55PT57XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogaXRlbS5pZCwgICAgICAgICAgICAgICAgICAgICAgICAgIC8vSURcclxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBpdGVtLmxvbmdpdHVkZSwgICAgICAgICAgICAvL+S4reW/g+e7j+W6plxyXG4gICAgICAgICAgICBsYXRpdHVkZTogaXRlbS5sYXRpdHVkZSwgICAgICAgICAgICAgIC8v5Lit5b+D57qs5bqmXHJcbiAgICAgICAgICAgIHRpdGxlOiBpdGVtLmN5TmFtZSwgICAgICAgICAgICAgICAgICAgLy/moIfpophcclxuICAgICAgICAgICAgcHJvdmluY2VOYW1lOiBpdGVtLnByb3ZpbmNlTmFtZT9pdGVtLnByb3ZpbmNlTmFtZTonJywgICAgIC8v55yBXHJcbiAgICAgICAgICAgIGNpdHlOYW1lOiBpdGVtLmNpdHlOYW1lP2l0ZW0uY2l0eU5hbWU6JycsICAgICAgICAgICAgICAgICAvL+W4glxyXG4gICAgICAgICAgICBkaXN0cmljdE5hbWU6IGl0ZW0uZGlzdHJpY3ROYW1lP2l0ZW0uZGlzdHJpY3ROYW1lOicnLCAgICAgLy/ljLpcclxuICAgICAgICAgICAgbWFya2VyczogaXRlbS5tYXJrZXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Z2Q5qCHXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgbnVtOiB0aGlzLmRhdGEubnVtICs9IHJlcy50b3RhbCxcclxuICAgICAgICAgIG11bUxpc3Q6IHRoaXMuZGF0YS5tdW1MaXN0LmNvbmNhdChsaXN0KVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHB0QnRuVG9nZ2xlKGU6YW55KTp2b2lkeyAgLy/lhajpg6jmjInpkq7nirbmgIHliIfmjaJcclxuICAgIGlmKGUudGFyZ2V0LmRhdGFzZXQubnVtID09IDEpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHB0QnRuQ2xhc3M6IGUudGFyZ2V0LmRhdGFzZXQubnVtLFxyXG4gICAgICAgIHB0QnRuU2hvdzogZmFsc2UsICAgICAgICAgIC8v6auY57qn5pCc57SiXHJcbiAgICAgICAgcHRUeXBlQ2xhc3M6IG51bGwsXHJcbiAgICAgICAgcHRUeXBlSWQ6ICcnLFxyXG4gICAgICAgIHB0WmlaaGlDbGFzczogbnVsbCxcclxuICAgICAgICBwdFppWmhpOiAnJyxcclxuICAgICAgICBwdEluZGV4OiAwLCAgICAgICAgICAgICAgICAgLy/lvZPliY3ntKLlvJVcclxuICAgICAgICBwdEluZHVzdHJ5SWQ6IG51bGwsICAgICAgICAgLy/pgInkuK3nmoRpZFxyXG4gICAgICAgIHB0Q3lUeXBlSWQ6ICcnLCAgICAgICAgICAgICAvL+S6p+S4mmlkXHJcbiAgICAgICAgcHRIeVR5cGVJZDogJycsICAgICAgICAgICAgICAgLy/ooYzkuJppZFxyXG4gICAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgIC8vNuaJvuWIl+ihqFxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLmdldEN4UHJvKCk7ICAgICAgICAgICAgIC8vNuaJvuWIm+aWsOW5s+WPsOe7n+iuoVxyXG4gICAgICB0aGlzLmdldEN5UHJvKCk7ICAgICAgICAgICAgIC8vNuaJvuWIm+S4muW5s+WPsOe7n+iuoVxyXG4gICAgfWVsc2UgaWYoZS50YXJnZXQuZGF0YXNldC5udW0gPT0gMil7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgcHRCdG5DbGFzczogZS50YXJnZXQuZGF0YXNldC5udW0sXHJcbiAgICAgICAgcHRCdG5TaG93OiB0cnVlLCAgICAgICAgICAgLy/pq5jnuqfmkJzntKJcclxuICAgICAgICBwdFR5cGVDbGFzczogbnVsbCxcclxuICAgICAgICBwdFR5cGVJZDogJycsXHJcbiAgICAgICAgcHRaaVpoaUNsYXNzOiBudWxsLFxyXG4gICAgICAgIHB0WmlaaGk6ICcnLFxyXG4gICAgICAgIHB0SW5kZXg6IDAsICAgICAgICAgICAgICAgICAvL+W9k+WJjee0ouW8lVxyXG4gICAgICAgIHB0SW5kdXN0cnlJZDogbnVsbCwgICAgICAgICAvL+mAieS4reeahGlkXHJcbiAgICAgICAgcHRDeVR5cGVJZDogJycsICAgICAgICAgICAgIC8v5Lqn5LiaaWRcclxuICAgICAgICBwdEh5VHlwZUlkOiAnJywgICAgICAgICAgICAgICAvL+ihjOS4mmlkXHJcbiAgICAgICAgbnVtOiAwLCAgICAgICAgICAgICAgICAgICAgLy825om+57uT5p6cXHJcbiAgICAgICAgbXVtTGlzdDogW10sICAgICAgICAgICAgICAgLy825om+5YiX6KGoXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuZ2V0Q3hQcm8oKTsgICAgICAgICAgICAgLy825om+5Yib5paw5bmz5Y+w57uf6K6hXHJcbiAgICAgIHRoaXMucHRUeXBlcygpOyAgICAgICAgICAgICAgLy/nsbvlnotcclxuICAgICAgdGhpcy5pbmR1c3RyeSgpOyAgICAgICAgICAgICAvL+S6p+S4muOAgeihjOS4mlxyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI3B0VHlwZScpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAgLy/lubPlj7DnsbvlnovlsZXlvIDlhbPpl63nirbmgIFcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyNwdFppWmhpJykudG9nZ2xlKGZhbHNlKTsgICAgICAgIC8v5bmz5Y+w6LWE6LSo5bGV5byA5YWz6Zet54q25oCBXHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjcHRJbmR1c3RyeScpLnRvZ2dsZShmYWxzZSk7ICAgICAvL+S6p+S4muOAgeihjOS4muWxleW8gOWFs+mXreeKtuaAgVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgcHRCdG5DbGFzczogZS50YXJnZXQuZGF0YXNldC5udW0sXHJcbiAgICAgICAgcHRCdG5TaG93OiB0cnVlLCAgICAgICAgICAgLy/pq5jnuqfmkJzntKJcclxuICAgICAgICBwdFR5cGVDbGFzczogbnVsbCxcclxuICAgICAgICBwdFR5cGVJZDogJycsXHJcbiAgICAgICAgcHRaaVpoaUNsYXNzOiBudWxsLFxyXG4gICAgICAgIHB0WmlaaGk6ICcnLFxyXG4gICAgICAgIHB0SW5kZXg6IDAsICAgICAgICAgICAgICAgICAvL+W9k+WJjee0ouW8lVxyXG4gICAgICAgIHB0SW5kdXN0cnlJZDogbnVsbCwgICAgICAgICAvL+mAieS4reeahGlkXHJcbiAgICAgICAgcHRDeVR5cGVJZDogJycsICAgICAgICAgICAgIC8v5Lqn5LiaaWRcclxuICAgICAgICBwdEh5VHlwZUlkOiAnJywgICAgICAgICAgICAgICAvL+ihjOS4mmlkXHJcbiAgICAgICAgbnVtOiAwLCAgICAgICAgICAgICAgICAgICAgLy825om+57uT5p6cXHJcbiAgICAgICAgbXVtTGlzdDogW10sICAgICAgICAgICAgICAgLy825om+5YiX6KGoXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuZ2V0Q3lQcm8oKTsgICAgICAgICAgICAgLy825om+5Yib5Lia5bmz5Y+w57uf6K6hXHJcbiAgICAgIHRoaXMucHRUeXBlcygpOyAgICAgICAgICAgICAgLy/nsbvlnotcclxuICAgICAgdGhpcy5pbmR1c3RyeSgpOyAgICAgICAgICAgICAvL+S6p+S4muOAgeihjOS4mlxyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI3B0VHlwZScpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAgLy/lubPlj7DnsbvlnovlsZXlvIDlhbPpl63nirbmgIFcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyNwdFppWmhpJykudG9nZ2xlKGZhbHNlKTsgICAgICAgIC8v5bmz5Y+w6LWE6LSo5bGV5byA5YWz6Zet54q25oCBXHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjcHRJbmR1c3RyeScpLnRvZ2dsZShmYWxzZSk7ICAgICAvL+S6p+S4muOAgeihjOS4muWxleW8gOWFs+mXreeKtuaAgVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgcHROYXZJdGVtKGRhdGE6YW55KTp2b2lkeyAgICAgICAvL+ihjOS4muS6p+S4mu+8iOW3puS+p+WvvOiIqueCueWHu+aXtu+8jOinpuWPkeeahOS6i+S7tu+8iVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgcHRJbmRleDogZGF0YS5kZXRhaWwuaW5kZXggfHwgMCxcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgcHRJbmR1c3RyeUl0ZW0oZGF0YTphbnkpOnZvaWQgeyAgLy/ooYzkuJrkuqfkuJrvvIjlj7PkvqfpgInmi6npobnooqvngrnlh7vml7bvvIzkvJrop6blj5HnmoTkuovku7bvvIlcclxuICAgIGNvbnN0IGlkID0gdGhpcy5kYXRhLnB0SW5kdXN0cnlJZCA9PT0gZGF0YS5kZXRhaWwuaWQgPyBudWxsIDogZGF0YS5kZXRhaWwuaWQ7XHJcbiAgICBjb25zdCBwSWQgPSB0aGlzLmRhdGEucHRJbmR1c3RyeUlkID09PSBkYXRhLmRldGFpbC5pZCA/IG51bGwgOiBkYXRhLmRldGFpbC5pZDtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHB0SW5kdXN0cnlJZDogaWQsXHJcbiAgICAgIHB0Q3lUeXBlSWQ6IGlkID8gaWQgOiAnJywgICAgICAgICAgICAgICAvL+S6p+S4mmlkXHJcbiAgICAgIHB0SHlUeXBlSWQ6IHBJZCA/IHBJZCA6ICcnLCAgICAgICAgICAgICAvL+ihjOS4mmlkXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIHB0VHlwZUZuKGU6YW55KTp2b2lkeyAgLy/lubPlj7Dnsbvlnovop6blj5FcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHB0VHlwZUNsYXNzOiBlLnRhcmdldC5kYXRhc2V0LmlkLFxyXG4gICAgICBwdFR5cGVJZDogZS50YXJnZXQuZGF0YXNldC5pZFxyXG4gICAgfSlcclxuICB9LFxyXG4gIHB0WmlaaGlGbihlOmFueSk6dm9pZHsgIC8v5bmz5Y+w6LWE6LSo6Kem5Y+RXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBjZFR5cGVDbGFzczogZS50YXJnZXQuZGF0YXNldC5pZCxcclxuICAgICAgY2RUeXBlSWQ6IGUudGFyZ2V0LmRhdGFzZXQudGl0bGVcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgcHRSZXNldChlOmFueSk6dm9pZHsgIC8v6YeN572uXHJcbiAgICBsZXQgZmxhZzpudW1iZXIgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5mbGFnO1xyXG4gICAgaWYoZmxhZyA9PSAxKXsgIC8v5bmz5Y+w57G75Z6LXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgcHRUeXBlQ2xhc3M6IG51bGwsXHJcbiAgICAgICAgcHRUeXBlSWQ6ICcnLFxyXG4gICAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgIC8vNuaJvuWIl+ihqFxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI3B0VHlwZScpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAgLy/lubPlj7DnsbvlnovlhbPpl61cclxuICAgIH1lbHNlIGlmKGZsYWcgPT0gMil7ICAvL+W5s+WPsOi1hOi0qFxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHB0WmlaaGlDbGFzczogbnVsbCxcclxuICAgICAgICBwdFppWmhpOiAnJyxcclxuICAgICAgICBudW06IDAsICAgICAgICAgICAgICAgICAgICAvLzbmib7nu5PmnpxcclxuICAgICAgICBtdW1MaXN0OiBbXSwgICAgICAgICAgICAgICAvLzbmib7liJfooahcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyNwdFppWmhpJykudG9nZ2xlKGZhbHNlKTsgICAgICAgIC8v5bmz5Y+w6LWE6LSo5YWz6ZetXHJcbiAgICB9ZWxzZXsgIC8v5Lqn5Lia44CB6KGM5LiaXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgcHRJbmRleDogMCwgICAgICAgICAgICAgICAgIC8v5b2T5YmN57Si5byVXHJcbiAgICAgICAgcHRJbmR1c3RyeUlkOiBudWxsLCAgICAgICAgIC8v6YCJ5Lit55qEaWRcclxuICAgICAgICBwdEN5VHlwZUlkOiAnJywgICAgICAgICAgICAgLy/kuqfkuJppZFxyXG4gICAgICAgIHB0SHlUeXBlSWQ6ICcnLCAgICAgICAgICAgICAgIC8v6KGM5LiaaWRcclxuICAgICAgICBudW06IDAsICAgICAgICAgICAgICAgICAgICAvLzbmib7nu5PmnpxcclxuICAgICAgICBtdW1MaXN0OiBbXSwgICAgICAgICAgICAgICAvLzbmib7liJfooahcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyNwdEluZHVzdHJ5JykudG9nZ2xlKGZhbHNlKTsgICAgIC8v5Lqn5Lia44CB6KGM5Lia5YWz6ZetXHJcbiAgICB9XHJcbiAgICB0aGlzLmdldEN4UHJvKCk7ICAgICAgICAgICAgIC8vNuaJvuWIm+aWsOW5s+WPsOe7n+iuoVxyXG4gIH0sXHJcbiAgcHRTdWJtaXQoZTphbnkpOnZvaWR7ICAvL+WujOaIkFxyXG4gICAgbGV0IGZsYWc6bnVtYmVyID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuZmxhZztcclxuICAgIGlmKGZsYWcgPT0gMSl7XHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjcHRUeXBlJykudG9nZ2xlKGZhbHNlKTsgICAgICAgICAvL+W5s+WPsOexu+Wei+WxleW8gOWFs+mXreeKtuaAgVxyXG4gICAgfWVsc2UgaWYoZmxhZyA9PSAyKXtcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyNwdFppWmhpJykudG9nZ2xlKGZhbHNlKTsgICAgICAgICAvL+W5s+WPsOi1hOi0qOWxleW8gOWFs+mXreeKtuaAgVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjcHRJbmR1c3RyeScpLnRvZ2dsZShmYWxzZSk7ICAgICAvL+S6p+S4muOAgeihjOS4muWxleW8gOWFs+mXreeKtuaAgVxyXG4gICAgfVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgbnVtOiAwLCAgICAgICAgICAgICAgICAgICAgLy825om+57uT5p6cXHJcbiAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgIC8vNuaJvuWIl+ihqFxyXG4gICAgfSlcclxuICAgIHRoaXMuZ2V0Q3hQcm8oKTsgICAgICAgICAgICAgLy825om+5Yib5paw5bmz5Y+w57uf6K6hXHJcbiAgfSxcclxuXHJcblxyXG4gIC8v5om+5pS/562W77yI5aSW6ZO+77yJXHJcbiAgemNGbigpOnZvaWR7IH0sXHJcblxyXG5cclxuICAvL+aJvumhueebrlxyXG4gIHhtRm4oKTp2b2lkeyAgLy/mib7pobnnm65cclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICBtdW1MaXN0OiBbXSwgICAgICAgICAgICAgICAvLzbmib7liJfooahcclxuICAgICAgc2VhcmNoS2V5OiAnJywgICAgICAgICAgICAgLy/lhbPplK7lrZfmkJzntKJcclxuXHJcbiAgICAgIGlzTGlzdFNob3c6IGZhbHNlLCAgICAgICAgIC8v6buY6K6k5pi+56S6NuaJvuWGheWuuVxyXG4gICAgICBpc0luZm9TaG93OiBmYWxzZSwgICAgICAgICAvL+WNleadoeS/oeaBr+aYvuekulxyXG4gICAgICBpc1NlYXJjaFNob3c6IHRydWUsICAgICAgICAvL+aQnOe0oue7k+aenOaVsOaNrlxyXG4gICAgICBpc1NlYXJjaEluZm9TaG93OiBmYWxzZSwgICAvL+aQnOe0ouWIl+ihqOaVsOaNrlxyXG5cclxuICAgICAgcHRTZWFyY2hJbmZvU2hvdzogZmFsc2UsICAgLy/lubPlj7Dlhajpg6jmjInpkq5cclxuICAgICAgcHRCdG5TaG93OiBmYWxzZSwgICAgICAgICAgLy/lubPlj7Dpq5jnuqfmkJzntKJcclxuICAgICAgempTZWFyY2hJbmZvU2hvdzogZmFsc2UsICAgLy/otYTph5Hlhajpg6jmjInpkq5cclxuICAgICAgcHJvU2VhcmNoSW5mb1Nob3c6IHRydWUsICAgLy/pobnnm67pq5jnuqfmkJzntKJcclxuICAgICAgY2RTZWFyY2hJbmZvU2hvdzogZmFsc2UsICAgLy/lnLrlnLDpq5jnuqfmkJzntKJcclxuICAgIH0pXHJcbiAgICB0aGlzLmdldFByb0xpc3QoKTsgICAgICAgICAgIC8vNuaJvumhueebrue7n+iuoVxyXG4gICAgdGhpcy54bVN0YWdlKCk7ICAgICAgICAgICAgICAvL+aJgOWkhOmYtuautVxyXG4gICAgdGhpcy54bUNhdGVnb3J5KCk7ICAgICAgICAgICAvL+mcgOaxguexu+WIq1xyXG4gICAgdGhpcy54bUZpbmFuY2luZygpOyAgICAgICAgICAvL+iejei1hOmHkeminVxyXG4gICAgdGhpcy5pbmR1c3RyeSgpOyAgICAgICAgICAgICAvL+S6p+S4muOAgeihjOS4mlxyXG4gIH0sXHJcbiAgZ2V0UHJvTGlzdCgpOnZvaWR7ICAgICAgICAgICAgICAgLy825om+6aG555uu57uf6K6hXHJcbiAgICBodHRwcy5zdWNjZXNzUmVxdWVzdChhcGkuZmluZFBybywge1xyXG4gICAgICB0ZW5hbnRJZDogdGhpcy5kYXRhLnRlbmFudElkLCAgICAgICAgIC8v5Zyw5Yy6aWRcclxuICAgICAgc2VhcmNoS2V5OiB0aGlzLmRhdGEuc2VhcmNoS2V5LCAgICAgICAvL+WFs+mUruWtl+aQnOe0olxyXG4gICAgICBuZWVkVHlwZXM6IHRoaXMuZGF0YS54bVR5cGVJZCwgICAgICAgIC8v6ZyA5rGC57G75YirXHJcbiAgICAgIHR6TW9uZXk6IHRoaXMuZGF0YS54bVR6TW9uZXksICAgICAgICAgLy/ono3otYTph5Hpop1cclxuICAgICAgY3lUeXBlSWQ6IHRoaXMuZGF0YS54bUN5VHlwZUlkLCAgICAgICAvL+S6p+S4mmlkXHJcbiAgICAgIGh5VHlwZUlkOiB0aGlzLmRhdGEueG1IeVR5cGVJZCAgICAgICAgLy/ooYzkuJppZFxyXG4gICAgfSwgJ0dFVCcpLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgaWYocmVzKXtcclxuICAgICAgICBsZXQgbGlzdDphbnkgPSByZXMubGlzdC5tYXAoKGl0ZW06YW55KTphbnk9PntcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBpdGVtLmlkLCAgICAgICAgICAgICAgICAgICAgICAgICAgLy9JRFxyXG4gICAgICAgICAgICBsb25naXR1ZGU6IGl0ZW0ubG9uZ2l0dWRlLCAgICAgICAgICAgIC8v5Lit5b+D57uP5bqmXHJcbiAgICAgICAgICAgIGxhdGl0dWRlOiBpdGVtLmxhdGl0dWRlLCAgICAgICAgICAgICAgLy/kuK3lv4PnuqzluqZcclxuICAgICAgICAgICAgdGl0bGU6IGl0ZW0ucHJvTmFtZSwgICAgICAgICAgICAgICAgICAvL+agh+mimFxyXG4gICAgICAgICAgICBwcm92aW5jZU5hbWU6IGl0ZW0ucHJvdmluY2VOYW1lP2l0ZW0ucHJvdmluY2VOYW1lOicnLCAgICAgLy/nnIFcclxuICAgICAgICAgICAgY2l0eU5hbWU6IGl0ZW0uY2l0eU5hbWU/aXRlbS5jaXR5TmFtZTonJywgICAgICAgICAgICAgICAgIC8v5biCXHJcbiAgICAgICAgICAgIGRpc3RyaWN0TmFtZTogaXRlbS5kaXN0cmljdE5hbWU/aXRlbS5kaXN0cmljdE5hbWU6JycsICAgICAvL+WMulxyXG4gICAgICAgICAgICBtYXJrZXJzOiBpdGVtLm1hcmtlcnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lnZDmoIdcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBudW06IHRoaXMuZGF0YS5udW0gPSByZXMudG90YWwsXHJcbiAgICAgICAgICBtdW1MaXN0OiBsaXN0XHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgeG1TdGFnZUZuKGU6YW55KTp2b2lkeyAgLy/miYDlpITpmLbmrrXop6blj5FcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHhtU3RhZ2VDbGFzczogZS50YXJnZXQuZGF0YXNldC5pZCxcclxuICAgICAgeG1TdGFnZUlkOiBlLnRhcmdldC5kYXRhc2V0LmlkXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgeG1DYXRlZ29yeUZuKGU6YW55KTp2b2lkeyAgLy/pnIDmsYLnsbvliKvop6blj5FcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHhtQ2F0ZWdvcnlDbGFzczogZS50YXJnZXQuZGF0YXNldC5pZCxcclxuICAgICAgeG1UeXBlSWQ6IGUudGFyZ2V0LmRhdGFzZXQuaWRcclxuICAgIH0pXHJcbiAgfSxcclxuICB4bUZpbmFuY2luZ0ZuKGU6YW55KTp2b2lkeyAgLy/ono3otYTph5Hpop3op6blj5FcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHhtRmluYW5jaW5nQ2xhc3M6IGUudGFyZ2V0LmRhdGFzZXQuaWQsXHJcbiAgICAgIHhtVHpNb25leTogZS50YXJnZXQuZGF0YXNldC5pZFxyXG4gICAgfSlcclxuICB9LFxyXG4gIHhtUmVzZXQoZTphbnkpOnZvaWR7ICAvL+mhueebrumHjee9rlxyXG4gICAgbGV0IGZsYWc6bnVtYmVyID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuZmxhZztcclxuICAgIGlmKGZsYWcgPT0gMSl7ICAvL+aJgOWkhOmYtuautVxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHhtU3RhZ2VDbGFzczogbnVsbCxcclxuICAgICAgICB4bVN0YWdlSWQ6ICcnLFxyXG4gICAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgIC8vNuaJvuWIl+ihqFxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI3htU3RhZ2UnKS50b2dnbGUoZmFsc2UpOyAgICAgICAgIC8v5omA5aSE6Zi25q615YWz6ZetXHJcbiAgICB9ZWxzZSBpZihmbGFnID09IDIpeyAgLy/pnIDmsYLnsbvliKtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICB4bUNhdGVnb3J5Q2xhc3M6IG51bGwsXHJcbiAgICAgICAgeG1UeXBlSWQ6ICcnLFxyXG4gICAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgIC8vNuaJvuWIl+ihqFxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI3htQ2F0ZWdvcnknKS50b2dnbGUoZmFsc2UpOyAgICAgICAgLy/pnIDmsYLnsbvliKvlhbPpl61cclxuICAgIH1lbHNlIGlmKGZsYWcgPT0gMyl7ICAvL+iejei1hOmHkeminVxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHhtRmluYW5jaW5nQ2xhc3M6IG51bGwsXHJcbiAgICAgICAgeG1Uek1vbmV5OiAnJyxcclxuICAgICAgICBudW06IDAsICAgICAgICAgICAgICAgICAgICAvLzbmib7nu5PmnpxcclxuICAgICAgICBtdW1MaXN0OiBbXSwgICAgICAgICAgICAgICAvLzbmib7liJfooahcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyN4bUZpbmFuY2luZycpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAvL+W5s+WPsOi1hOi0qOWFs+mXrVxyXG4gICAgfWVsc2V7ICAvL+S6p+S4muOAgeihjOS4mlxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHhtSW5kZXg6IDAsICAgICAgICAgICAgICAgICAvL+W9k+WJjee0ouW8lVxyXG4gICAgICAgIHhtSW5kdXN0cnlJZDogbnVsbCwgICAgICAgICAvL+mAieS4reeahGlkXHJcbiAgICAgICAgeG1DeVR5cGVJZDogJycsICAgICAgICAgICAgIC8v5Lqn5LiaaWRcclxuICAgICAgICB4bUh5VHlwZUlkOiAnJywgICAgICAgICAgICAgLy/ooYzkuJppZFxyXG4gICAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgICAvLzbmib7nu5PmnpxcclxuICAgICAgICBtdW1MaXN0OiBbXSwgICAgICAgICAgICAgICAgLy825om+5YiX6KGoXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjeG1JbmR1c3RyeScpLnRvZ2dsZShmYWxzZSk7ICAgICAvL+S6p+S4muOAgeihjOS4muWFs+mXrVxyXG4gICAgfVxyXG4gICAgdGhpcy5nZXRQcm9MaXN0KCk7ICAgICAgICAgICAgIC8vNuaJvumhueebrue7n+iuoVxyXG4gIH0sXHJcbiAgeG1TdWJtaXQoZTphbnkpOnZvaWR7ICAvL+mhueebruWujOaIkFxyXG4gICAgbGV0IGZsYWc6bnVtYmVyID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuZmxhZztcclxuICAgIGlmKGZsYWcgPT0gMSl7XHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjeG1TdGFnZScpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAgLy/miYDlpITpmLbmrrXlhbPpl61cclxuICAgIH1lbHNlIGlmKGZsYWcgPT0gMil7XHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjeG1DYXRlZ29yeScpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAvL+mcgOaxguexu+WIq+WFs+mXrVxyXG4gICAgfWVsc2UgaWYoZmxhZyA9PSAzKXtcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyN4bUZpbmFuY2luZycpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAvL+W5s+WPsOi1hOi0qOWFs+mXrVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjeG1JbmR1c3RyeScpLnRvZ2dsZShmYWxzZSk7ICAgICAvL+S6p+S4muOAgeihjOS4muWFs+mXrVxyXG4gICAgfVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgbnVtOiAwLCAgICAgICAgICAgICAgICAgICAgLy825om+57uT5p6cXHJcbiAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgIC8vNuaJvuWIl+ihqFxyXG4gICAgfSlcclxuICAgIHRoaXMuZ2V0UHJvTGlzdCgpOyAgICAgICAgICAgICAvLzbmib7pobnnm67nu5/orqFcclxuICB9LFxyXG4gIHhtTmF2SXRlbShkYXRhOmFueSk6dm9pZHsgIC8v6KGM5Lia5Lqn5Lia77yI5bem5L6n5a+86Iiq54K55Ye75pe277yM6Kem5Y+R55qE5LqL5Lu277yJXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICB4bUluZGV4OiBkYXRhLmRldGFpbC5pbmRleCB8fCAwLFxyXG4gICAgfSk7XHJcbiAgfSxcclxuICB4bUluZHVzdHJ5SXRlbShkYXRhOmFueSk6dm9pZCB7ICAvL+ihjOS4muS6p+S4mu+8iOWPs+S+p+mAieaLqemhueiiq+eCueWHu+aXtu+8jOS8muinpuWPkeeahOS6i+S7tu+8iVxyXG4gICAgY29uc3QgaWQgPSB0aGlzLmRhdGEueG1JbmR1c3RyeUlkID09PSBkYXRhLmRldGFpbC5pZCA/IG51bGwgOiBkYXRhLmRldGFpbC5pZDtcclxuICAgIGNvbnN0IHBJZCA9IHRoaXMuZGF0YS54bUluZHVzdHJ5SWQgPT09IGRhdGEuZGV0YWlsLmlkID8gbnVsbCA6IGRhdGEuZGV0YWlsLmlkO1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgeG1JbmR1c3RyeUlkOiBpZCxcclxuICAgICAgeG1DeVR5cGVJZDogaWQgPyBpZCA6ICcnLCAgICAgICAgICAgICAgIC8v5Lqn5LiaaWRcclxuICAgICAgeG1IeVR5cGVJZDogcElkID8gcElkIDogJycsICAgICAgICAgICAgIC8v6KGM5LiaaWRcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcblxyXG5cclxuICAvL+aJvuWcuuWcsFxyXG4gIGNkRm4oKTp2b2lkeyAgLy/mib7lnLrlnLBcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICBtdW1MaXN0OiBbXSwgICAgICAgICAgICAgICAvLzbmib7liJfooahcclxuICAgICAgc2VhcmNoS2V5OiAnJywgICAgICAgICAgICAgLy/lhbPplK7lrZfmkJzntKJcclxuXHJcbiAgICAgIGlzTGlzdFNob3c6IGZhbHNlLCAgICAgICAgIC8v6buY6K6k5pi+56S6NuaJvuWGheWuuVxyXG4gICAgICBpc0luZm9TaG93OiBmYWxzZSwgICAgICAgICAvL+WNleadoeS/oeaBr+aYvuekulxyXG4gICAgICBpc1NlYXJjaFNob3c6IHRydWUsICAgICAgICAvL+aQnOe0oue7k+aenOaVsOaNrlxyXG4gICAgICBpc1NlYXJjaEluZm9TaG93OiBmYWxzZSwgICAvL+aQnOe0ouWIl+ihqOaVsOaNrlxyXG5cclxuICAgICAgcHRTZWFyY2hJbmZvU2hvdzogZmFsc2UsICAgLy/lubPlj7Dlhajpg6jmjInpkq5cclxuICAgICAgcHRCdG5TaG93OiBmYWxzZSwgICAgICAgICAgLy/lubPlj7Dpq5jnuqfmkJzntKJcclxuICAgICAgempTZWFyY2hJbmZvU2hvdzogZmFsc2UsICAgLy/otYTph5Hlhajpg6jmjInpkq5cclxuICAgICAgcHJvU2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgLy/pobnnm67pq5jnuqfmkJzntKJcclxuICAgICAgY2RTZWFyY2hJbmZvU2hvdzogdHJ1ZSwgICAvL+WcuuWcsOmrmOe6p+aQnOe0olxyXG4gICAgfSlcclxuICAgIHRoaXMuZ2V0U2l0ZUxpc3QoKTsgICAgICAgICAgICAvLzbmib7lnLrlnLDnu5/orqFcclxuXHJcbiAgICB0aGlzLmNkQ2FycmllcigpOyAgICAgICAgICAgICAgICAgLy/otYTmupDnsbvlnotcclxuICAgIHRoaXMuaW5kdXN0cnkoKTsgICAgICAgICAgICAgICAvL+S6p+S4muOAgeihjOS4mlxyXG4gIH0sXHJcbiAgZ2V0U2l0ZUxpc3QoKTp2b2lkeyAgICAgICAgICAgICAgIC8vNuaJvuWcuuWcsOe7n+iuoVxyXG4gICAgaHR0cHMuc3VjY2Vzc1JlcXVlc3QoYXBpLmN5UGxhdGZvcm0sIHtcclxuICAgICAgdGVuYW50SWQ6IHRoaXMuZGF0YS50ZW5hbnRJZCwgICAgICAgICAvL+WcsOWMumlkXHJcbiAgICAgIHNlYXJjaEtleTogdGhpcy5kYXRhLnNlYXJjaEtleSwgICAgICAgLy/lhbPplK7lrZfmkJzntKJcclxuICAgICAgXHJcbiAgICAgIHp0VHlwZUlkOiB0aGlzLmRhdGEuY2RUeXBlSWQsICAgICAgICAgLy/ovb3kvZPnqbrpl7TnsbvlnotcclxuICAgICAgaXNDaHVadTogdGhpcy5kYXRhLmNkQ2h1WnVJZCwgICAgICAgICAgLy/mmK/lkKblh7rnp59cclxuICAgICAgaXNTYWxlOiB0aGlzLmRhdGEuY2RTYWxlSWQsICAgICAgICAgICAvL+aYr+WQpuWHuuWUrlxyXG4gICAgICBjeVR5cGVJZDogdGhpcy5kYXRhLmNkQ3lUeXBlSWQsICAgICAgIC8v5Lqn5LiaaWRcclxuICAgICAgaHlUeXBlSWQ6IHRoaXMuZGF0YS5jZEh5VHlwZUlkICAgICAgICAvL+ihjOS4mmlkXHJcbiAgICB9LCAnR0VUJykudGhlbigocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICBpZihyZXMpe1xyXG4gICAgICAgIGxldCBsaXN0OmFueSA9IHJlcy5saXN0Lm1hcCgoaXRlbTphbnkpOmFueT0+e1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsICAgICAgICAgICAgICAgICAgICAgICAgICAvL0lEXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZTogaXRlbS5sb25naXR1ZGUsICAgICAgICAgICAgLy/kuK3lv4Pnu4/luqZcclxuICAgICAgICAgICAgbGF0aXR1ZGU6IGl0ZW0ubGF0aXR1ZGUsICAgICAgICAgICAgICAvL+S4reW/g+e6rOW6plxyXG4gICAgICAgICAgICB0aXRsZTogaXRlbS5wcm9OYW1lLCAgICAgICAgICAgICAgICAgIC8v5qCH6aKYXHJcbiAgICAgICAgICAgIHByb3ZpbmNlTmFtZTogaXRlbS5wcm92aW5jZU5hbWU/aXRlbS5wcm92aW5jZU5hbWU6JycsICAgICAvL+ecgVxyXG4gICAgICAgICAgICBjaXR5TmFtZTogaXRlbS5jaXR5TmFtZT9pdGVtLmNpdHlOYW1lOicnLCAgICAgICAgICAgICAgICAgLy/luIJcclxuICAgICAgICAgICAgZGlzdHJpY3ROYW1lOiBpdGVtLmRpc3RyaWN0TmFtZT9pdGVtLmRpc3RyaWN0TmFtZTonJywgICAgIC8v5Yy6XHJcbiAgICAgICAgICAgIG1hcmtlcnM6IGl0ZW0ubWFya2VycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WdkOagh1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIG51bTogdGhpcy5kYXRhLm51bSA9IHJlcy50b3RhbCxcclxuICAgICAgICAgIG11bUxpc3Q6IGxpc3RcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBjZFR5cGVGbihlOmFueSl7ICAvL+i1hOa6kOexu+Wei+inpuWPkVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgY2RUeXBlQ2xhc3M6IGUudGFyZ2V0LmRhdGFzZXQuaWQsXHJcbiAgICAgIGNkVHlwZUlkOiBlLnRhcmdldC5kYXRhc2V0LmlkXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgY2RVc2VGbihlOmFueSl7ICAvL+WcuuWcsOeUqOmAlOinpuWPkVxyXG4gICAgbGV0IGlkOmFueSA9IGUudGFyZ2V0LmRhdGFzZXQuaWQ7XHJcbiAgICBpZihpZCA9PSAxKXsgIC8v5Ye656efXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgY2RVc2VyQ2xhc3M6IGlkLFxyXG4gICAgICAgIGNkQ2h1WnVJZDogJzEnLCAgICAgICAgLy/lh7rnp59cclxuICAgICAgICBjZFNhbGVJZDogJycsICAgICAgICAgIC8v5Ye65ZSuXHJcbiAgICAgIH0pXHJcbiAgICB9ZWxzZXsgIC8v5Ye65ZSuXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgY2RVc2VyQ2xhc3M6IGlkLFxyXG4gICAgICAgIGNkQ2h1WnVJZDogJycsICAgICAgICAgLy/lh7rnp59cclxuICAgICAgICBjZFNhbGVJZDogJzEnLCAgICAgICAgIC8v5Ye65ZSuXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICBjZE5hdkl0ZW0oZGF0YTphbnkpOnZvaWR7ICAgICAgIC8v6KGM5Lia5Lqn5Lia77yI5bem5L6n5a+86Iiq54K55Ye75pe277yM6Kem5Y+R55qE5LqL5Lu277yJXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBjZEluZGV4OiBkYXRhLmRldGFpbC5pbmRleCB8fCAwLFxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBjZEluZHVzdHJ5SXRlbShkYXRhOmFueSk6dm9pZCB7ICAvL+ihjOS4muS6p+S4mu+8iOWPs+S+p+mAieaLqemhueiiq+eCueWHu+aXtu+8jOS8muinpuWPkeeahOS6i+S7tu+8iVxyXG4gICAgY29uc3QgaWQgPSB0aGlzLmRhdGEuY2RJbmR1c3RyeUlkID09PSBkYXRhLmRldGFpbC5pZCA/IG51bGwgOiBkYXRhLmRldGFpbC5pZDtcclxuICAgIGNvbnN0IHBJZCA9IHRoaXMuZGF0YS5jZEluZHVzdHJ5SWQgPT09IGRhdGEuZGV0YWlsLmlkID8gbnVsbCA6IGRhdGEuZGV0YWlsLmlkO1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgY2RJbmR1c3RyeUlkOiBpZCxcclxuICAgICAgY2RDeVR5cGVJZDogaWQgPyBpZCA6ICcnLCAgICAgICAgICAgICAgIC8v5Lqn5LiaaWRcclxuICAgICAgY2RIeVR5cGVJZDogcElkID8gcElkIDogJycsICAgICAgICAgICAgIC8v6KGM5LiaaWRcclxuICAgIH0pXHJcbiAgfSxcclxuICBjZFJlc2V0KGU6YW55KTp2b2lkeyAgLy/mib7lnLrlnLDph43nva5cclxuICAgIGxldCBmbGFnOm51bWJlciA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmZsYWc7XHJcbiAgICBpZihmbGFnID09IDEpeyAgLy/otYTmupDnsbvlnotcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBjZFR5cGVDbGFzczogbnVsbCxcclxuICAgICAgICBjZFR5cGVJZDogJycsXHJcbiAgICAgICAgbnVtOiAwLCAgICAgICAgICAgICAgICAgICAgLy825om+57uT5p6cXHJcbiAgICAgICAgbXVtTGlzdDogW10sICAgICAgICAgICAgICAgLy825om+5YiX6KGoXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjY2RUeXBlJykudG9nZ2xlKGZhbHNlKTsgICAgICAgICAvL+i1hOa6kOexu+Wei+WFs+mXrVxyXG4gICAgfWVsc2UgaWYoZmxhZyA9PSAyKXsgIC8v5Zy65Zyw55So6YCUXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgY2RVc2VyQ2xhc3M6IG51bGwsXHJcbiAgICAgICAgY2RDaHVadUlkOiAnJywgICAgICAgICAgICAgLy/lh7rnp59cclxuICAgICAgICBjZFNhbGVJZDogJycsICAgICAgICAgICAgICAvL+WHuuWUrlxyXG4gICAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgIC8vNuaJvuWIl+ihqFxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI2NkVXNlcicpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAvL+WcuuWcsOeUqOmAlFxyXG4gICAgfWVsc2V7ICAvL+S6p+S4muOAgeihjOS4mlxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGNkSW5kZXg6IDAsICAgICAgICAgICAgICAgICAvL+W9k+WJjee0ouW8lVxyXG4gICAgICAgIGNkSW5kdXN0cnlJZDogbnVsbCwgICAgICAgICAvL+mAieS4reeahGlkXHJcbiAgICAgICAgY2RDeVR5cGVJZDogJycsICAgICAgICAgICAgIC8v5Lqn5LiaaWRcclxuICAgICAgICBjZEh5VHlwZUlkOiAnJywgICAgICAgICAgICAgLy/ooYzkuJppZFxyXG4gICAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgIC8vNuaJvuWIl+ihqFxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI2NkSW5kdXN0cnknKS50b2dnbGUoZmFsc2UpOyAgICAgLy/kuqfkuJrjgIHooYzkuJrlhbPpl61cclxuICAgIH1cclxuICAgIHRoaXMuZ2V0U2l0ZUxpc3QoKTsgICAgICAgICAgICAvLzbmib7lnLrlnLDnu5/orqFcclxuICB9LFxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gIC8v5om+5pyN5YqhXHJcbiAgZndJbmR1c3RyeUl0ZW0oZGF0YTphbnkpOnZvaWQgeyAgLy/ooYzkuJrkuqfkuJpcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGZ3SW5kdXN0cnlJZDogZGF0YS5kZXRhaWwuaWRcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgLy/mib7otYTph5HvvIjph5Hono3mnI3liqHvvIlcclxuICBqckluZHVzdHJ5SXRlbShkYXRhOmFueSk6dm9pZCB7ICAvL+ihjOS4muS6p+S4mlxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAganJJbmR1c3RyeUlkOiBkYXRhLmRldGFpbC5pZFxyXG4gICAgfSlcclxuICB9LFxyXG4gIC8v5om+6LWE6YeR77yI5oqV6LWE77yJXHJcbiAgdHpJbmR1c3RyeUl0ZW0oZGF0YTphbnkpOnZvaWQgeyAgLy/ooYzkuJrkuqfkuJpcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHR6SW5kdXN0cnlJZDogZGF0YS5kZXRhaWwuaWRcclxuICAgIH0pXHJcbiAgfSxcclxuICAvL+aJvui1hOmHke+8iOiejei1hO+8iVxyXG4gIHJ6SW5kdXN0cnlJdGVtKGRhdGE6YW55KTp2b2lkIHsgIC8v6KGM5Lia5Lqn5LiaXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICByekluZHVzdHJ5SWQ6IGRhdGEuZGV0YWlsLmlkXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgXHJcblxyXG4gIC8v6Lev57q/5a+86IiqXHJcbiAgbmF2aWdhdGlvbihlOmFueSk6dm9pZHtcclxuICAgIGlmKCEhZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQubWFya2Vycyl7ICAvL+WkhOeQhjbmib7liJfooajlr7zoiKpcclxuICAgICAgbGV0IHRpdGxlOnN0cmluZyA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnRpdGxlO1xyXG4gICAgICBsZXQgbWFya2VyczphbnkgPSBKU09OLnBhcnNlKGUuY3VycmVudFRhcmdldC5kYXRhc2V0Lm1hcmtlcnMpWzBdLnBvc2l0aW9uO1xyXG4gICAgICBpZihtYXJrZXJzLmxlbmd0aCA+IDApe1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBnb05hbWU6IHRpdGxlLFxyXG4gICAgICAgICAgZ29Mb25naXR1ZGU6IG1hcmtlcnNbMF0ubG5nLFxyXG4gICAgICAgICAgZ29MYXRpdHVkZTogbWFya2Vyc1swXS5sYXRcclxuICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgZW5kUG9pbnQ6YW55ID0gSlNPTi5zdHJpbmdpZnkoeyAgLy/nu4jngrlcclxuICAgICAgJ25hbWUnOiB0aGlzLmRhdGEuZ29OYW1lLFxyXG4gICAgICAnbG9uZ2l0dWRlJzogcGFyc2VGbG9hdCh0aGlzLmRhdGEuZ29Mb25naXR1ZGUpLFxyXG4gICAgICAnbGF0aXR1ZGUnOiBwYXJzZUZsb2F0KHRoaXMuZGF0YS5nb0xhdGl0dWRlKVxyXG4gICAgfSk7XHJcblxyXG4gICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgIHVybDogJ3BsdWdpbjovL3JvdXRlUGxhbi9pbmRleD9rZXk9JyArIGFwaS5tYXBBcGlLZXkgKyAnJnJlZmVyZXI95omN6LWL5LqRJyArICcmZW5kUG9pbnQ9JyArIGVuZFBvaW50XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuXHJcbiAgLy/pgInmi6nluILljLpcclxuICBtYXBBcmVhKCk6dm9pZHtcclxuICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICB1cmw6XCIuLi9tYXBBcmVhL21hcEFyZWFcIlxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuXHJcbiAgLy/lnLDlm77or6bmg4VcclxuICBtYXBEZXRhaWwoKTp2b2lkIHtcclxuICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICB1cmw6XCIuLi9tYXBEZXRhaWwvbWFwRGV0YWlsXCJcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcblxyXG4gIC8v54K55Ye75qCH6K6w54K55rCU5rOh56qX5Y+j6Kem5Y+RXHJcbiAgbWFya0ZuKGU6YW55KTp2b2lkIHtcclxuICAgIC8v5p+l6K+i5Y2V5p2h5pWw5o2uXHJcbiAgICBsZXQgYXJyOmFueSA9IHRoaXMuZGF0YS5tYXJrZXJzLmZpbHRlcigoaXRlbTphbnkpOmFueT0+e1xyXG4gICAgICByZXR1cm4gaXRlbS5pZCA9PSBlLmRldGFpbC5tYXJrZXJJZDtcclxuICAgIH0pO1xyXG4gICAgaWYoYXJyLmxlbmd0aCA+PSAxKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBnb05hbWU6IGFyclswXS5jYWxsb3V0LmNvbnRlbnQsICAgICAgICAgLy/opoHljrvnmoTlnLDlnYBcclxuICAgICAgICBnb0xvbmdpdHVkZTogYXJyWzBdLmxvbmdpdHVkZSwgICAgICAgICAgLy/kuK3lv4Pnu4/luqYo57uI54K5KVxyXG4gICAgICAgIGdvTGF0aXR1ZGU6IGFyclswXS5sYXRpdHVkZSwgICAgICAgICAgICAvL+S4reW/g+e6rOW6pijnu4jngrkpXHJcbiAgICAgICAgbWFya2Vyc09iajogYXJyWzBdLCAgICAgICAgICAgICAgICAgICAgIC8v5Y2V5p2h5YiX6KGo5pWw5o2uXHJcbiAgICAgICAgaXNMaXN0U2hvdzogZmFsc2UsICAgICAgICAgICAgICAgICAgICAgIC8v6buY6K6k5pi+56S6NuaJvuWGheWuuVxyXG4gICAgICAgIGlzSW5mb1Nob3c6IHRydWUsICAgICAgICAgICAgICAgICAgICAgICAvL+WNleadoeS/oeaBr+aYvuekulxyXG4gICAgICAgIGlzU2VhcmNoU2hvdzogZmFsc2UsICAgICAgICAgICAgICAgICAgICAvL+aQnOe0oue7k+aenOaVsOaNrlxyXG4gICAgICAgIGlzU2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgICAgICAgICAgICAgICAvL+aQnOe0ouWIl+ihqOaVsOaNrlxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG5cclxuICAvL+WFs+mXreWNleadoeS/oeaBr+Wbnum7mOiupFxyXG4gIGNsb3NlRm4oKTp2b2lke1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgaXNMaXN0U2hvdzogdHJ1ZSwgICAgICAgICAgICAgICAgICAgICAgIC8v6buY6K6k5pi+56S6NuaJvuWGheWuuVxyXG4gICAgICBpc0luZm9TaG93OiBmYWxzZSwgICAgICAgICAgICAgICAgICAgICAgLy/ljZXmnaHkv6Hmga/mmL7npLpcclxuICAgICAgaXNTZWFyY2hTaG93OiBmYWxzZSwgICAgICAgICAgICAgICAgICAgIC8v5pCc57Si57uT5p6c5pWw5o2uXHJcbiAgICAgIGlzU2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgICAgICAgICAgICAgICAvL+aQnOe0ouWIl+ihqOaVsOaNrlxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuXHJcbiAgLy/pqozor4HnlKjmiLfnmbvlvZXnirbmgIFcclxuICB2ZXJpZmljYXRpb24oKTp2b2lke1xyXG4gICAgbGV0IHRva2VuOnN0cmluZyA9IHd4LmdldFN0b3JhZ2VTeW5jKCd0b2tlbicpO1xyXG4gICAgaWYoISF0b2tlbil7XHJcbiAgICAgIHRoaXMuZ2V0TWFyaygpOyAgLy/ojrflj5blnLDlm77moIfngrlcclxuICAgIH1lbHNle1xyXG4gICAgICBEaWFsb2cuYWxlcnQoe1xyXG4gICAgICAgIG1lc3NhZ2U6ICfnmbvlvZXlkI7miY3og73mn6XnnIvlnLDlm77vvIEnLFxyXG4gICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgIHVybDogJy4uL2xvZ2luRm9ybS9sb2dpbkZvcm0nXHJcbiAgICAgICAgfSlcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLy/ojrflj5blnLDlm77moIfngrlcclxuICBnZXRNYXJrKCk6dm9pZHtcclxuICAgIGh0dHBzLnN1Y2Nlc3NSZXF1ZXN0KGFwaS5hbGwsIG51bGwsICdHRVQnKVxyXG4gICAgLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgaWYocmVzKXtcclxuICAgICAgICAvL+WIm+aWsOW5s+WPsFxyXG4gICAgICAgIGxldCBjeFBsYXRmb3JtTW9kZWxzTGlzdDphbnkgPSByZXMudmFsLmN4UGxhdGZvcm1Nb2RlbHMubWFwKChpdGVtOmFueSk6YW55PT57XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBpdGVtLmxuZywgICAvL+e7j+W6plxyXG4gICAgICAgICAgICBsYXRpdHVkZTogaXRlbS5sYXQsICAgIC8v57qs5bqmXHJcbiAgICAgICAgICAgIGljb25QYXRoOiAnLi4vLi4vaW1hZ2VzL2FkZHJlc3MucG5nJywgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgd2lkdGg6IDMwLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwLFxyXG4gICAgICAgICAgICBjYWxsb3V0OiB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogaXRlbS5wdE5hbWUsXHJcbiAgICAgICAgICAgICAgY29sb3I6ICcjMDAwJyxcclxuICAgICAgICAgICAgICBmb250U2l6ZTogMTQsXHJcbiAgICAgICAgICAgICAgYmdDb2xvcjogJyNGRkYnLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDUsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI0NDQycsXHJcbiAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ0JZQ0xJQ0snXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHByb3ZpbmNlTmFtZTogaXRlbS5wcm92aW5jZU5hbWU/aXRlbS5wcm92aW5jZU5hbWU6JycsICAgICAvL+ecgVxyXG4gICAgICAgICAgICBjaXR5TmFtZTogaXRlbS5jaXR5TmFtZT9pdGVtLmNpdHlOYW1lOicnLCAgICAgICAgICAgICAgICAgLy/luIJcclxuICAgICAgICAgICAgZGlzdHJpY3ROYW1lOiBpdGVtLmRpc3RyaWN0TmFtZT9pdGVtLmRpc3RyaWN0TmFtZTonJyAgICAgIC8v5Yy6XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy/liJvkuJrlubPlj7BcclxuICAgICAgICBsZXQgY3lQbGF0Zm9ybU1vZGVsc0xpc3Q6YW55ID0gcmVzLnZhbC5jeVBsYXRmb3JtTW9kZWxzLm1hcCgoaXRlbTphbnkpOmFueT0+e1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZTogaXRlbS5sbmcsICAgLy/nu4/luqZcclxuICAgICAgICAgICAgbGF0aXR1ZGU6IGl0ZW0ubGF0LCAgICAvL+e6rOW6plxyXG4gICAgICAgICAgICBpY29uUGF0aDogJy4uLy4uL2ltYWdlcy9hZGRyZXNzLnBuZycsICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIHdpZHRoOiAzMCxcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMCxcclxuICAgICAgICAgICAgY2FsbG91dDoge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IGl0ZW0uY3lOYW1lLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IDE4LFxyXG4gICAgICAgICAgICAgIGJnQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1LFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNDQ0MnLFxyXG4gICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdCWUNMSUNLJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwcm92aW5jZU5hbWU6IGl0ZW0ucHJvdmluY2VOYW1lP2l0ZW0ucHJvdmluY2VOYW1lOicnLCAgICAgLy/nnIFcclxuICAgICAgICAgICAgY2l0eU5hbWU6IGl0ZW0uY2l0eU5hbWU/aXRlbS5jaXR5TmFtZTonJywgICAgICAgICAgICAgICAgIC8v5biCXHJcbiAgICAgICAgICAgIGRpc3RyaWN0TmFtZTogaXRlbS5kaXN0cmljdE5hbWU/aXRlbS5kaXN0cmljdE5hbWU6JycgICAgICAvL+WMulxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8v5om+6aG555uuXHJcbiAgICAgICAgbGV0IHByb01vZGVsc0xpc3Q6YW55ID0gcmVzLnZhbC5wcm9Nb2RlbHMubWFwKChpdGVtOmFueSk6YW55PT57XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBpdGVtLmxuZywgICAvL+e7j+W6plxyXG4gICAgICAgICAgICBsYXRpdHVkZTogaXRlbS5sYXQsICAgIC8v57qs5bqmXHJcbiAgICAgICAgICAgIGljb25QYXRoOiAnLi4vLi4vaW1hZ2VzL2FkZHJlc3MucG5nJywgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgd2lkdGg6IDMwLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwLFxyXG4gICAgICAgICAgICBjYWxsb3V0OiB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogaXRlbS5wcm9OYW1lLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IDE4LFxyXG4gICAgICAgICAgICAgIGJnQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1LFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNDQ0MnLFxyXG4gICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdCWUNMSUNLJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwcm92aW5jZU5hbWU6IGl0ZW0ucHJvdmluY2VOYW1lP2l0ZW0ucHJvdmluY2VOYW1lOicnLCAgICAgLy/nnIFcclxuICAgICAgICAgICAgY2l0eU5hbWU6IGl0ZW0uY2l0eU5hbWU/aXRlbS5jaXR5TmFtZTonJywgICAgICAgICAgICAgICAgIC8v5biCXHJcbiAgICAgICAgICAgIGRpc3RyaWN0TmFtZTogaXRlbS5kaXN0cmljdE5hbWU/aXRlbS5kaXN0cmljdE5hbWU6JycgICAgICAvL+WMulxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL+aJvuacjeWKoeacuuaehFxyXG4gICAgICAgIGxldCBmd2pnTW9kZWxzTGlzdDphbnkgPSByZXMudmFsLmZ3amdNb2RlbHMubWFwKChpdGVtOmFueSk6YW55PT57XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBpdGVtLmxuZywgICAvL+e7j+W6plxyXG4gICAgICAgICAgICBsYXRpdHVkZTogaXRlbS5sYXQsICAgIC8v57qs5bqmXHJcbiAgICAgICAgICAgIGljb25QYXRoOiAnLi4vLi4vaW1hZ2VzL2FkZHJlc3MucG5nJywgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgd2lkdGg6IDMwLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwLFxyXG4gICAgICAgICAgICBjYWxsb3V0OiB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogaXRlbS5xeU5hbWUgLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IDE4LFxyXG4gICAgICAgICAgICAgIGJnQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1LFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNDQ0MnLFxyXG4gICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdCWUNMSUNLJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwcm92aW5jZU5hbWU6IGl0ZW0ucHJvdmluY2VOYW1lP2l0ZW0ucHJvdmluY2VOYW1lOicnLCAgICAgLy/nnIFcclxuICAgICAgICAgICAgY2l0eU5hbWU6IGl0ZW0uY2l0eU5hbWU/aXRlbS5jaXR5TmFtZTonJywgICAgICAgICAgICAgICAgIC8v5biCXHJcbiAgICAgICAgICAgIGRpc3RyaWN0TmFtZTogaXRlbS5kaXN0cmljdE5hbWU/aXRlbS5kaXN0cmljdE5hbWU6JycgICAgICAvL+WMulxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8v5om+5Zy65ZywXHJcbiAgICAgICAgbGV0IHZlY3Rvck1vZGVsc0xpc3Q6YW55ID0gcmVzLnZhbC52ZWN0b3JNb2RlbHMubWFwKChpdGVtOmFueSk6YW55PT57XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBpdGVtLmxuZywgICAvL+e7j+W6plxyXG4gICAgICAgICAgICBsYXRpdHVkZTogaXRlbS5sYXQsICAgIC8v57qs5bqmXHJcbiAgICAgICAgICAgIGljb25QYXRoOiAnLi4vLi4vaW1hZ2VzL2FkZHJlc3MucG5nJywgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgd2lkdGg6IDMwLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwLFxyXG4gICAgICAgICAgICBjYWxsb3V0OiB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogaXRlbS5jeXp0TmFtZSAgLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IDE4LFxyXG4gICAgICAgICAgICAgIGJnQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1LFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNDQ0MnLFxyXG4gICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdCWUNMSUNLJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwcm92aW5jZU5hbWU6IGl0ZW0ucHJvdmluY2VOYW1lP2l0ZW0ucHJvdmluY2VOYW1lOicnLCAgICAgLy/nnIFcclxuICAgICAgICAgICAgY2l0eU5hbWU6IGl0ZW0uY2l0eU5hbWU/aXRlbS5jaXR5TmFtZTonJywgICAgICAgICAgICAgICAgIC8v5biCXHJcbiAgICAgICAgICAgIGRpc3RyaWN0TmFtZTogaXRlbS5kaXN0cmljdE5hbWU/aXRlbS5kaXN0cmljdE5hbWU6JycgICAgICAvL+WMulxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8v5om+6YeR6J6N5py65p6EXHJcbiAgICAgICAgbGV0IGpyamdNZG9lbHNMaXN0OmFueSA9IHJlcy52YWwuanJqZ01kb2Vscy5tYXAoKGl0ZW06YW55KTphbnk9PntcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICBsb25naXR1ZGU6IGl0ZW0ubG5nLCAgIC8v57uP5bqmXHJcbiAgICAgICAgICAgIGxhdGl0dWRlOiBpdGVtLmxhdCwgICAgLy/nuqzluqZcclxuICAgICAgICAgICAgaWNvblBhdGg6ICcuLi8uLi9pbWFnZXMvYWRkcmVzcy5wbmcnLCAgICAgICAgICAgICAvL+agh+iusFxyXG4gICAgICAgICAgICB3aWR0aDogMzAsXHJcbiAgICAgICAgICAgIGhlaWdodDogMzAsXHJcbiAgICAgICAgICAgIGNhbGxvdXQ6IHtcclxuICAgICAgICAgICAgICBjb250ZW50OiBpdGVtLnF5TmFtZSxcclxuICAgICAgICAgICAgICBjb2xvcjogJyMwMDAnLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAxOCxcclxuICAgICAgICAgICAgICBiZ0NvbG9yOiAnI0ZGRicsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNSxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXHJcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjQ0NDJyxcclxuICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnQllDTElDSydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcHJvdmluY2VOYW1lOiBpdGVtLnByb3ZpbmNlTmFtZT9pdGVtLnByb3ZpbmNlTmFtZTonJywgICAgIC8v55yBXHJcbiAgICAgICAgICAgIGNpdHlOYW1lOiBpdGVtLmNpdHlOYW1lP2l0ZW0uY2l0eU5hbWU6JycsICAgICAgICAgICAgICAgICAvL+W4glxyXG4gICAgICAgICAgICBkaXN0cmljdE5hbWU6IGl0ZW0uZGlzdHJpY3ROYW1lP2l0ZW0uZGlzdHJpY3ROYW1lOicnICAgICAgLy/ljLpcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvL+aJvuaKlei1hOmcgOaxglxyXG4gICAgICAgIGxldCB0ek1vZGVsc0xpc3Q6YW55ID0gcmVzLnZhbC50ek1vZGVscy5tYXAoKGl0ZW06YW55KTphbnk9PntcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICBsb25naXR1ZGU6IGl0ZW0ubG5nLCAgIC8v57uP5bqmXHJcbiAgICAgICAgICAgIGxhdGl0dWRlOiBpdGVtLmxhdCwgICAgLy/nuqzluqZcclxuICAgICAgICAgICAgaWNvblBhdGg6ICcuLi8uLi9pbWFnZXMvYWRkcmVzcy5wbmcnLCAgICAgICAgICAgICAvL+agh+iusFxyXG4gICAgICAgICAgICB3aWR0aDogMzAsXHJcbiAgICAgICAgICAgIGhlaWdodDogMzAsXHJcbiAgICAgICAgICAgIGNhbGxvdXQ6IHtcclxuICAgICAgICAgICAgICBjb250ZW50OiBpdGVtLm5lZWROYW1lICAgLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IDE4LFxyXG4gICAgICAgICAgICAgIGJnQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1LFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNDQ0MnLFxyXG4gICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdCWUNMSUNLJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwcm92aW5jZU5hbWU6IGl0ZW0ucHJvdmluY2VOYW1lP2l0ZW0ucHJvdmluY2VOYW1lOicnLCAgICAgLy/nnIFcclxuICAgICAgICAgICAgY2l0eU5hbWU6IGl0ZW0uY2l0eU5hbWU/aXRlbS5jaXR5TmFtZTonJywgICAgICAgICAgICAgICAgIC8v5biCXHJcbiAgICAgICAgICAgIGRpc3RyaWN0TmFtZTogaXRlbS5kaXN0cmljdE5hbWU/aXRlbS5kaXN0cmljdE5hbWU6JycgICAgICAvL+WMulxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8v5om+6J6N6LWE6ZyA5rGC77yI6aG555uu5bqT55qE6J6N6LWEN+mhue+8iVxyXG4gICAgICAgIGxldCByb25nemlQcm9zTGlzdDphbnkgPSByZXMudmFsLnJvbmd6aVByb3MubWFwKChpdGVtOmFueSk6YW55PT57XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBpdGVtLmxuZywgICAvL+e7j+W6plxyXG4gICAgICAgICAgICBsYXRpdHVkZTogaXRlbS5sYXQsICAgIC8v57qs5bqmXHJcbiAgICAgICAgICAgIGljb25QYXRoOiAnLi4vLi4vaW1hZ2VzL2FkZHJlc3MucG5nJywgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgd2lkdGg6IDMwLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwLFxyXG4gICAgICAgICAgICBjYWxsb3V0OiB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogaXRlbS5wcm9OYW1lICxcclxuICAgICAgICAgICAgICBjb2xvcjogJyMwMDAnLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAxOCxcclxuICAgICAgICAgICAgICBiZ0NvbG9yOiAnI0ZGRicsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNSxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXHJcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjQ0NDJyxcclxuICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnQllDTElDSydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcHJvdmluY2VOYW1lOiBpdGVtLnByb3ZpbmNlTmFtZT9pdGVtLnByb3ZpbmNlTmFtZTonJywgICAgIC8v55yBXHJcbiAgICAgICAgICAgIGNpdHlOYW1lOiBpdGVtLmNpdHlOYW1lP2l0ZW0uY2l0eU5hbWU6JycsICAgICAgICAgICAgICAgICAvL+W4glxyXG4gICAgICAgICAgICBkaXN0cmljdE5hbWU6IGl0ZW0uZGlzdHJpY3ROYW1lP2l0ZW0uZGlzdHJpY3ROYW1lOicnICAgICAgLy/ljLpcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvL+aJvuiejei1hOmcgOaxgu+8iOmcgOaxguW6k+eahOiejei1hDfpobnvvIlcclxuICAgICAgICBsZXQgcm9uZ3ppTmVlZHNMaXN0OmFueSA9IHJlcy52YWwucm9uZ3ppTmVlZHMubWFwKChpdGVtOmFueSk6YW55PT57XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBpdGVtLmxuZywgICAvL+e7j+W6plxyXG4gICAgICAgICAgICBsYXRpdHVkZTogaXRlbS5sYXQsICAgIC8v57qs5bqmXHJcbiAgICAgICAgICAgIGljb25QYXRoOiAnLi4vLi4vaW1hZ2VzL2FkZHJlc3MucG5nJywgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgd2lkdGg6IDMwLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwLFxyXG4gICAgICAgICAgICBjYWxsb3V0OiB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogaXRlbS5uZWVkTmFtZSxcclxuICAgICAgICAgICAgICBjb2xvcjogJyMwMDAnLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAxOCxcclxuICAgICAgICAgICAgICBiZ0NvbG9yOiAnI0ZGRicsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNSxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXHJcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjQ0NDJyxcclxuICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnQllDTElDSydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcHJvdmluY2VOYW1lOiBpdGVtLnByb3ZpbmNlTmFtZT9pdGVtLnByb3ZpbmNlTmFtZTonJywgICAgIC8v55yBXHJcbiAgICAgICAgICAgIGNpdHlOYW1lOiBpdGVtLmNpdHlOYW1lP2l0ZW0uY2l0eU5hbWU6JycsICAgICAgICAgICAgICAgICAvL+W4glxyXG4gICAgICAgICAgICBkaXN0cmljdE5hbWU6IGl0ZW0uZGlzdHJpY3ROYW1lP2l0ZW0uZGlzdHJpY3ROYW1lOicnICAgICAgLy/ljLpcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvL+WkhOeQhklE5Li65pWw5a2XXHJcbiAgICAgICAgbGV0IG1hcmtlcnNMaXN0OmFueSAgPSB0aGlzLmRhdGEubWFya2Vycy5jb25jYXQoY3hQbGF0Zm9ybU1vZGVsc0xpc3QsY3lQbGF0Zm9ybU1vZGVsc0xpc3QscHJvTW9kZWxzTGlzdCxmd2pnTW9kZWxzTGlzdCx2ZWN0b3JNb2RlbHNMaXN0LGpyamdNZG9lbHNMaXN0LHR6TW9kZWxzTGlzdCxyb25nemlQcm9zTGlzdCxyb25nemlOZWVkc0xpc3QpO1xyXG4gICAgICAgIGxldCBuZXdNYXJrZXJzTGlzdDphbnkgPSBtYXJrZXJzTGlzdC5tYXAoKGl0ZW06YW55LCBpbmRleDpudW1iZXIpOmFueT0+e1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGluZGV4LCAgICAgICAgICAgICAgICAgICAvL21hcOeUqOeahOiHquWumuS5iUlEXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZTogaXRlbS5sb25naXR1ZGUsICAgLy/nu4/luqZcclxuICAgICAgICAgICAgbGF0aXR1ZGU6IGl0ZW0ubGF0aXR1ZGUsICAgICAvL+e6rOW6plxyXG4gICAgICAgICAgICBpY29uUGF0aDogJy4uLy4uL2ltYWdlcy9hZGRyZXNzLnBuZycsICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgd2lkdGg6IDMwLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwLFxyXG4gICAgICAgICAgICBjYWxsb3V0OiBpdGVtLmNhbGxvdXQsXHJcbiAgICAgICAgICAgIG9sZElkOiBpdGVtLmlkLCAgICAgICAgICAgICAgICAgICAgICAvL+WOn+Wni0lEXHJcbiAgICAgICAgICAgIHRpdGxlOiBpdGVtLmNhbGxvdXQuY29udGVudCwgICAgICAgICAvL+agh+mimFxyXG4gICAgICAgICAgICBwcm92aW5jZU5hbWU6IGl0ZW0ucHJvdmluY2VOYW1lLCAgICAgLy/nnIFcclxuICAgICAgICAgICAgY2l0eU5hbWU6IGl0ZW0uY2l0eU5hbWUsICAgICAgICAgICAgIC8v5biCXHJcbiAgICAgICAgICAgIGRpc3RyaWN0TmFtZTogaXRlbS5kaXN0cmljdE5hbWUgICAgICAvL+WMulxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBtYXJrZXJzOiBuZXdNYXJrZXJzTGlzdFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuXHJcbiAgLy/pobXpnaLliJ3lp4vljJZcclxuICBvbkxvYWQoKXtcclxuICAgIC8v6aG16Z2i5qCH6aKYXHJcbiAgICB3eC5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoeyAgICAgXHJcbiAgICAgIHRpdGxlOiBcIuS6uuaJjeWIm+aWsOWIm+S4muW5s+WPsOWcsOWbvlwiXHJcbiAgICB9KTtcclxuICAgIC8v5b2T5YmN5L2N572uXHJcbiAgICB3eC5nZXRMb2NhdGlvbih7XHJcbiAgICAgIHR5cGU6ICd3Z3M4NCcsXHJcbiAgICAgIHN1Y2Nlc3M6KHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgbG9uZ2l0dWRlOiByZXMubG9uZ2l0dWRlLCAgICAvL+S4reW/g+e7j+W6plxyXG4gICAgICAgICAgbGF0aXR1ZGU6IHJlcy5sYXRpdHVkZSAgICAgICAvL+S4reW/g+e6rOW6plxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIC8v6aG16Z2i5pi+56S6XHJcbiAgb25TaG93KCl7XHJcbiAgICB0aGlzLnZlcmlmaWNhdGlvbigpOyAgLy/pqozor4HnlKjmiLfnmbvlvZXnirbmgIFcclxuICB9LFxyXG5cclxuICAvL+mhtemdoua4suafk+WujOaIkFxyXG4gIG9uUmVhZHkoKXt9LFxyXG5cclxuICAvL+mhtemdoumakOiXj1xyXG4gIG9uSGlkZSgpe1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgaXNMaXN0U2hvdzogdHJ1ZSwgICAgICAgICAgLy/pu5jorqTmmL7npLo25om+5YaF5a65XHJcbiAgICAgIGlzSW5mb1Nob3c6IGZhbHNlLCAgICAgICAgIC8v5Y2V5p2h5L+h5oGv5pi+56S6XHJcbiAgICAgIGlzU2VhcmNoU2hvdzogZmFsc2UsICAgICAgIC8v5pCc57Si57uT5p6c5pWw5o2uXHJcbiAgICAgIGlzU2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgIC8v5pCc57Si5YiX6KGo5pWw5o2uXHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICAvL+mhtemdouWFs+mXrVxyXG4gIG9uVW5sb2FkKCl7fVxyXG59KVxyXG5leHBvcnQge307XHJcbiJdfQ==