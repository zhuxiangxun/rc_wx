"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api = getApp().globalData;
var https = require('../../utils/myRequest.js');
var Dialog = require('../../miniprogram_npm/@vant/weapp/dialog/dialog.js').default;
var QQMapWX = require('../../utils/qqmap-wx-jssdk.js');
Page({
    data: {
        moreTitle: '点击加载更多',
        flag: '',
        moreShow: false,
        pageSize: 10,
        pageIndex: 1,
        total: 0,
        areaList: [],
        areaName: '',
        areaId: '',
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
        fwCategoryList: [],
        fwTypeList: [],
        fwScaleList: [],
        tzAreaList: [],
        tzWayList: [],
        tzOtherList: [],
        tzTypeList: [],
        rzWayList: [],
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
        zjBtnClass: 1,
        jrSearchInfoShow: false,
        jrCategoryIndex: 0,
        jrCategoryId: null,
        jrIndustryIndex: 0,
        jrIndustryId: null,
        jrTypeClass: null,
        jrScaleClass: null,
        jrTypeOneId: '',
        jrTypeTwoId: '',
        jrDwStatusId: '',
        jrDwScaleId: '',
        jrCyTypeId: '',
        jrHyTypeId: '',
        tzSearchInfoShow: false,
        tzIndex: 0,
        tzIndustryId: null,
        tzAreaClass: null,
        tzWayClass: null,
        tzOtherClass: null,
        tzTypeClass: null,
        tzAreaId: '',
        tzWayId: '',
        tzOtherId: '',
        tzTypeId: '',
        tzCyTypeId: '',
        tzHyTypeId: '',
        rzSearchInfoShow: false,
        rzIndex: 0,
        rzIndustryId: null,
        rzCategoryClass: null,
        rzStageClass: null,
        rzWayClass: null,
        rzFinancingClass: null,
        rzCategoryId: '',
        rzStageId: '',
        rzWayId: '',
        rzFinancingId: '',
        rzCyTypeId: '',
        rzHyTypeId: '',
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
        fwCategoryIndex: 0,
        fwCategoryId: null,
        fwIndustryIndex: 0,
        fwIndustryId: null,
        fwTypeClass: null,
        fwScaleClass: null,
        fwTypeOneId: '',
        fwTypeTwoId: '',
        fwDwStatusId: '',
        fwDwScaleId: '',
        fwCyTypeId: '',
        fwHyTypeId: '',
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
                _this.setData({
                    cdCarrierList: res.val
                });
            }
        }, function (err) {
            console.log(err);
        });
    },
    fwCategory: function () {
        var _this = this;
        https.successRequest(api.submenuDic + '?moid=13', null, 'GET')
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
                    fwCategoryList: arr
                });
            }
        }, function (err) {
            console.log(err);
        });
    },
    fwType: function () {
        var _this = this;
        https.successRequest(api.submenuDic + '?moid=18', null, 'GET')
            .then(function (res) {
            if (res) {
                _this.setData({
                    fwTypeList: res.val
                });
            }
        }, function (err) {
            console.log(err);
        });
    },
    fwScale: function () {
        var _this = this;
        https.successRequest(api.submenuDic + '?moid=21', null, 'GET')
            .then(function (res) {
            if (res) {
                _this.setData({
                    fwScaleList: res.val
                });
            }
        }, function (err) {
            console.log(err);
        });
    },
    rzWay: function () {
        var _this = this;
        https.successRequest(api.submenuDic + '?moid=58', null, 'GET')
            .then(function (res) {
            if (res) {
                _this.setData({
                    rzWayList: res.val
                });
            }
        }, function (err) {
            console.log(err);
        });
    },
    tzArea: function () {
        var _this = this;
        https.successRequest(api.tenants, null, 'GET')
            .then(function (res) {
            if (res) {
                var list = res.list.map(function (item) {
                    return {
                        dicName: item.model.cname,
                        id: item.model.id
                    };
                });
                _this.setData({
                    tzAreaList: list
                });
            }
        }, function (err) {
            console.log(err);
        });
    },
    tzWay: function () {
        var _this = this;
        https.successRequest(api.submenuDic + '?moid=56', null, 'GET')
            .then(function (res) {
            if (res) {
                _this.setData({
                    tzWayList: res.val
                });
            }
        }, function (err) {
            console.log(err);
        });
    },
    tzOther: function () {
        var _this = this;
        https.successRequest(api.submenuDic + '?moid=55', null, 'GET')
            .then(function (res) {
            if (res) {
                _this.setData({
                    tzOtherList: res.val
                });
            }
        }, function (err) {
            console.log(err);
        });
    },
    tzType: function () {
        var _this = this;
        https.successRequest(api.submenuDic + '?moid=42', null, 'GET')
            .then(function (res) {
            if (res) {
                _this.setData({
                    tzTypeList: res.val
                });
            }
        }, function (err) {
            console.log(err);
        });
    },
    searchBlur: function (event) {
        this.setData({
            searchKey: event.detail.value,
            pageSize: 10,
            pageIndex: 1,
            total: 0,
            markers: [],
            num: 0,
            mumList: [],
        });
        this.getAllPro();
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
            markers: [],
            num: 0,
            mumList: [],
            isListShow: true,
            isInfoShow: false,
            isSearchShow: false,
            isSearchInfoShow: false,
        });
    },
    hideFn: function () {
        this.setData({
            pageSize: 10,
            pageIndex: 1,
            total: 0,
            markers: [],
            num: 0,
            mumList: [],
            searchKey: '',
            isListShow: false,
            isInfoShow: false,
            isSearchShow: false,
            isSearchInfoShow: false,
            ptSearchInfoShow: false,
            ptBtnShow: false,
            proSearchInfoShow: false,
            zjSearchInfoShow: false,
            jrSearchInfoShow: false,
            tzSearchInfoShow: false,
            rzSearchInfoShow: false,
            cdSearchInfoShow: false,
            fwSearchInfoShow: false,
        });
    },
    ptFn: function () {
        this.hideFn();
        this.setData({
            flag: 'allPt',
            isSearchShow: true,
            ptSearchInfoShow: true,
        });
        this.getAllPro();
    },
    getAllPro: function () {
        var _this = this;
        this.setData({
            moreShow: false,
        });
        https.successRequest(api.allPlatform, {
            tenantId: api.areaId,
            key: this.data.searchKey,
            pageSize: this.data.pageSize,
            pageIndex: this.data.pageIndex,
        }, 'GET').then(function (res) {
            if (res) {
                var cxPlatformModelsList = res.val.cxPlatformModels.map(function (item) {
                    return {
                        id: item.id,
                        name: '创新',
                        longitude: item.lng,
                        latitude: item.lat,
                        iconPath: '../../images/cx.png',
                        width: 27,
                        height: 35,
                        callout: {
                            content: item.ptName ? item.ptName : '未填报',
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
                        name: '创业',
                        longitude: item.lng,
                        latitude: item.lat,
                        iconPath: '../../images/cy.png',
                        width: 27,
                        height: 35,
                        callout: {
                            content: item.cyName ? item.cyName : '未填报',
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
                var markersList = cxPlatformModelsList.concat(cyPlatformModelsList);
                var newMarkersList = markersList.map(function (item, index) {
                    return {
                        id: index,
                        name: item.name,
                        longitude: item.longitude,
                        latitude: item.latitude,
                        iconPath: item.iconPath,
                        width: 27,
                        height: 35,
                        callout: item.callout,
                        oldId: item.id,
                        title: item.callout.content,
                        provinceName: item.provinceName,
                        cityName: item.cityName,
                        districtName: item.districtName
                    };
                });
                if (_this.data.total == 0) {
                    _this.setData({
                        markers: newMarkersList,
                        total: res.val.total,
                        mumList: newMarkersList,
                    });
                }
                else {
                    _this.setData({
                        markers: _this.data.markers.concat(newMarkersList),
                        mumList: _this.data.mumList.concat(newMarkersList),
                    });
                }
                if (_this.data.mumList.length < res.val.total) {
                    _this.setData({
                        moreShow: true,
                        moreTitle: '点击加载更多',
                    });
                }
                else {
                    _this.setData({
                        moreShow: true,
                        moreTitle: '已加载全部',
                    });
                }
            }
        }, function (err) {
            console.log(err);
        });
    },
    getCxPro: function () {
        var _this = this;
        this.setData({
            moreShow: false,
        });
        https.successRequest(api.cxPlatformUser, {
            tenantId: api.areaId,
            key: this.data.searchKey,
            pageSize: this.data.pageSize,
            pageIndex: this.data.pageIndex,
            typeId: this.data.ptTypeId,
            ziZhi: this.data.ptZiZhi,
            cyTypeId: this.data.ptCyTypeId,
            hyTypeId: this.data.ptHyTypeId
        }, 'GET').then(function (res) {
            if (res) {
                var newMarkersList = res.list.map(function (item, index) {
                    return {
                        id: index,
                        name: '创新',
                        longitude: item.lng,
                        latitude: item.lat,
                        iconPath: '../../images/cx.png',
                        width: 27,
                        height: 35,
                        callout: {
                            content: item.ptName ? item.ptName : '未填报',
                            color: '#000',
                            fontSize: 18,
                            bgColor: '#FFF',
                            padding: 5,
                            borderRadius: 4,
                            borderColor: '#CCC',
                            borderWidth: 1,
                            display: 'BYCLICK'
                        },
                        oldId: item.id,
                        title: item.ptName ? item.ptName : '未填报',
                        provinceName: item.provinceName ? item.provinceName : '',
                        cityName: item.cityName ? item.cityName : '',
                        districtName: item.districtName ? item.districtName : ''
                    };
                });
                if (_this.data.total == 0) {
                    _this.setData({
                        markers: newMarkersList,
                        total: res.total,
                        mumList: newMarkersList,
                    });
                }
                else {
                    _this.setData({
                        markers: _this.data.markers.concat(newMarkersList),
                        mumList: _this.data.mumList.concat(newMarkersList),
                    });
                }
                if (_this.data.mumList.length < res.total) {
                    _this.setData({
                        moreShow: true,
                        moreTitle: '点击加载更多',
                    });
                }
                else {
                    _this.setData({
                        moreShow: true,
                        moreTitle: '已加载全部',
                    });
                }
            }
        }, function (err) {
            console.log(err);
        });
    },
    getCyPro: function () {
        var _this = this;
        this.setData({
            moreShow: false,
        });
        https.successRequest(api.cyPlatUser, {
            tenantId: api.areaId,
            key: this.data.searchKey,
            pageSize: this.data.pageSize,
            pageIndex: this.data.pageIndex,
            typeId: this.data.ptTypeId,
            ziZhi: this.data.ptZiZhi,
            cyTypeId: this.data.ptCyTypeId,
            hyTypeId: this.data.ptHyTypeId
        }, 'GET').then(function (res) {
            if (res) {
                var newMarkersList = res.list.map(function (item, index) {
                    return {
                        id: index,
                        name: '创业',
                        longitude: item.lng,
                        latitude: item.lat,
                        iconPath: '../../images/cy.png',
                        width: 27,
                        height: 35,
                        callout: {
                            content: item.ptName ? item.ptName : '未填报',
                            color: '#000',
                            fontSize: 18,
                            bgColor: '#FFF',
                            padding: 5,
                            borderRadius: 4,
                            borderColor: '#CCC',
                            borderWidth: 1,
                            display: 'BYCLICK'
                        },
                        oldId: item.id,
                        title: item.cyName ? item.cyName : '未填报',
                        provinceName: item.provinceName ? item.provinceName : '',
                        cityName: item.cityName ? item.cityName : '',
                        districtName: item.districtName ? item.districtName : ''
                    };
                });
                if (_this.data.total == 0) {
                    _this.setData({
                        markers: newMarkersList,
                        total: res.total,
                        mumList: newMarkersList,
                    });
                }
                else {
                    _this.setData({
                        markers: _this.data.markers.concat(newMarkersList),
                        mumList: _this.data.mumList.concat(newMarkersList),
                    });
                }
                if (_this.data.mumList.length < res.total) {
                    _this.setData({
                        moreShow: true,
                        moreTitle: '点击加载更多',
                    });
                }
                else {
                    _this.setData({
                        moreShow: true,
                        moreTitle: '已加载全部',
                    });
                }
            }
        }, function (err) {
            console.log(err);
        });
    },
    ptBtnToggle: function (e) {
        if (e.target.dataset.num == 1) {
            this.setData({
                flag: 'allPt',
                ptBtnClass: e.target.dataset.num,
                ptBtnShow: false,
                pageSize: 10,
                pageIndex: 1,
                total: 0,
                markers: [],
                num: 0,
                mumList: [],
                searchKey: '',
            });
            this.getAllPro();
        }
        else if (e.target.dataset.num == 2) {
            this.setData({
                flag: 'cxPt',
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
                pageSize: 10,
                pageIndex: 1,
                total: 0,
                markers: [],
                num: 0,
                mumList: [],
                searchKey: '',
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
                flag: 'cyPt',
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
                pageSize: 10,
                pageIndex: 1,
                total: 0,
                markers: [],
                num: 0,
                mumList: [],
                searchKey: '',
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
            ptZiZhiClass: e.target.dataset.id,
            ptZiZhi: e.target.dataset.title
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
        this.hideFn();
        this.setData({
            flag: 'xm',
            isSearchShow: true,
            proSearchInfoShow: true,
        });
        this.getProList();
        this.xmStage();
        this.xmCategory();
        this.xmFinancing();
        this.industry();
    },
    getProList: function () {
        var _this = this;
        this.setData({
            moreShow: false,
        });
        https.successRequest(api.findPro, {
            tenantId: api.areaId,
            key: this.data.searchKey,
            pageSize: this.data.pageSize,
            pageIndex: this.data.pageIndex,
            proNeedtype: this.data.xmStageId,
            needTypes: this.data.xmTypeId,
            tzMoney: this.data.xmTzMoney,
            cyTypeId: this.data.xmCyTypeId,
            hyTypeId: this.data.xmHyTypeId
        }, 'GET').then(function (res) {
            if (res) {
                var newMarkersList = res.list.map(function (item, index) {
                    return {
                        id: index,
                        name: '项目',
                        longitude: item.lng,
                        latitude: item.lat,
                        iconPath: '../../images/xm.png',
                        width: 27,
                        height: 35,
                        callout: {
                            content: item.proName ? item.proName : '未填报',
                            color: '#000',
                            fontSize: 18,
                            bgColor: '#FFF',
                            padding: 5,
                            borderRadius: 4,
                            borderColor: '#CCC',
                            borderWidth: 1,
                            display: 'BYCLICK'
                        },
                        oldId: item.id,
                        title: item.proName ? item.proName : '未填报',
                        provinceName: item.provinceName ? item.provinceName : '',
                        cityName: item.cityName ? item.cityName : '',
                        districtName: item.districtName ? item.districtName : ''
                    };
                });
                if (_this.data.total == 0) {
                    _this.setData({
                        markers: newMarkersList,
                        total: res.total,
                        mumList: newMarkersList,
                    });
                }
                else {
                    _this.setData({
                        markers: _this.data.markers.concat(newMarkersList),
                        mumList: _this.data.mumList.concat(newMarkersList),
                    });
                }
                if (_this.data.mumList.length < res.total) {
                    _this.setData({
                        moreShow: true,
                        moreTitle: '点击加载更多',
                    });
                }
                else {
                    _this.setData({
                        moreShow: true,
                        moreTitle: '已加载全部',
                    });
                }
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
        this.hideFn();
        this.setData({
            flag: 'cd',
            isSearchShow: true,
            cdSearchInfoShow: true,
        });
        this.getSiteList();
        this.cdCarrier();
        this.industry();
    },
    getSiteList: function () {
        var _this = this;
        this.setData({
            moreShow: false,
        });
        https.successRequest(api.cyPlatform, {
            tenantId: api.areaId,
            key: this.data.searchKey,
            pageSize: this.data.pageSize,
            pageIndex: this.data.pageIndex,
            ztTypeId: this.data.cdTypeId,
            isChuZu: this.data.cdChuZuId,
            isSale: this.data.cdSaleId,
            cyTypeId: this.data.cdCyTypeId,
            hyTypeId: this.data.cdHyTypeId
        }, 'GET').then(function (res) {
            if (res) {
                var newMarkersList = res.list.map(function (item, index) {
                    return {
                        id: index,
                        name: '场地',
                        longitude: item.lng,
                        latitude: item.lat,
                        iconPath: '../../images/cd.png',
                        width: 27,
                        height: 35,
                        callout: {
                            content: item.cyztName ? item.cyztName : '未填报',
                            color: '#000',
                            fontSize: 18,
                            bgColor: '#FFF',
                            padding: 5,
                            borderRadius: 4,
                            borderColor: '#CCC',
                            borderWidth: 1,
                            display: 'BYCLICK'
                        },
                        oldId: item.id,
                        title: item.cyztName ? item.cyztName : '未填报',
                        provinceName: item.provinceName ? item.provinceName : '',
                        cityName: item.cityName ? item.cityName : '',
                        districtName: item.districtName ? item.districtName : ''
                    };
                });
                if (_this.data.total == 0) {
                    _this.setData({
                        markers: newMarkersList,
                        total: res.total,
                        mumList: newMarkersList,
                    });
                }
                else {
                    _this.setData({
                        markers: _this.data.markers.concat(newMarkersList),
                        mumList: _this.data.mumList.concat(newMarkersList),
                    });
                }
                if (_this.data.mumList.length < res.total) {
                    _this.setData({
                        moreShow: true,
                        moreTitle: '点击加载更多',
                    });
                }
                else {
                    _this.setData({
                        moreShow: true,
                        moreTitle: '已加载全部',
                    });
                }
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
    cdSubmit: function (e) {
        var flag = e.currentTarget.dataset.flag;
        if (flag == 1) {
            this.selectComponent('#cdType').toggle(false);
        }
        else if (flag == 2) {
            this.selectComponent('#cdUser').toggle(false);
        }
        else {
            this.selectComponent('#cdIndustry').toggle(false);
        }
        this.setData({
            num: 0,
            mumList: [],
        });
        this.getSiteList();
    },
    fwFn: function () {
        this.hideFn();
        this.setData({
            isSearchShow: true,
            fwSearchInfoShow: true,
        });
        this.getServiceList();
        this.fwCategory();
        this.fwType();
        this.fwScale();
        this.industry();
    },
    getServiceList: function () {
        var _this = this;
        this.setData({
            moreShow: false,
        });
        https.successRequest(api.findFw, {
            tenantId: api.areaId,
            key: this.data.searchKey,
            pageSize: this.data.pageSize,
            pageIndex: this.data.pageIndex,
            typeOneId: this.data.fwTypeOneId,
            typeTwoId: this.data.fwTypeTwoId,
            dwStatusId: this.data.fwDwStatusId,
            dwScaleId: this.data.fwDwScaleId,
            cyTypeId: this.data.fwCyTypeId,
            hyTypeId: this.data.fwHyTypeId
        }, 'GET').then(function (res) {
            if (res) {
                var newMarkersList = res.list.map(function (item, index) {
                    return {
                        id: index,
                        name: '服务',
                        longitude: item.lng,
                        latitude: item.lat,
                        iconPath: '../../images/fw.png',
                        width: 27,
                        height: 35,
                        callout: {
                            content: item.qyName ? item.qyName : '未填报',
                            color: '#000',
                            fontSize: 18,
                            bgColor: '#FFF',
                            padding: 5,
                            borderRadius: 4,
                            borderColor: '#CCC',
                            borderWidth: 1,
                            display: 'BYCLICK'
                        },
                        oldId: item.id,
                        title: item.qyName ? item.qyName : '未填报',
                        provinceName: item.provinceName ? item.provinceName : '',
                        cityName: item.cityName ? item.cityName : '',
                        districtName: item.districtName ? item.districtName : ''
                    };
                });
                if (_this.data.total == 0) {
                    _this.setData({
                        markers: newMarkersList,
                        total: res.total,
                        mumList: newMarkersList,
                    });
                }
                else {
                    _this.setData({
                        markers: _this.data.markers.concat(newMarkersList),
                        mumList: _this.data.mumList.concat(newMarkersList),
                    });
                }
                if (_this.data.mumList.length < res.total) {
                    _this.setData({
                        moreShow: true,
                        moreTitle: '点击加载更多',
                    });
                }
                else {
                    _this.setData({
                        moreShow: true,
                        moreTitle: '已加载全部',
                    });
                }
            }
        }, function (err) {
            console.log(err);
        });
    },
    fwCategoryNavItem: function (data) {
        this.setData({
            fwCategoryIndex: data.detail.index || 0,
        });
    },
    fwCategoryItem: function (data) {
        var id = this.data.fwCategoryId === data.detail.id ? null : data.detail.id;
        var pId = this.data.fwCategoryId === data.detail.id ? null : data.detail.id;
        this.setData({
            fwCategoryId: id,
            fwTypeOneId: id ? id : '',
            fwTypeTwoId: pId ? pId : '',
        });
    },
    fwTypeFn: function (e) {
        var id = e.target.dataset.id;
        this.setData({
            fwTypeClass: id,
            fwDwStatusId: id,
        });
    },
    fwScaleFn: function (e) {
        var id = e.target.dataset.id;
        this.setData({
            fwScaleClass: id,
            fwDwScaleId: id,
        });
    },
    fwNavItem: function (data) {
        this.setData({
            fwIndustryIndex: data.detail.index || 0,
        });
    },
    fwIndustryItem: function (data) {
        var id = this.data.fwIndustryId === data.detail.id ? null : data.detail.id;
        var pId = this.data.fwIndustryId === data.detail.id ? null : data.detail.id;
        this.setData({
            fwIndustryId: id,
            fwCyTypeId: id ? id : '',
            fwHyTypeId: pId ? pId : '',
        });
    },
    fwReset: function (e) {
        var flag = e.currentTarget.dataset.flag;
        if (flag == 1) {
            this.setData({
                fwCategoryIndex: 0,
                fwCategoryId: null,
                fwTypeOneId: '',
                fwTypeTwoId: '',
                num: 0,
                mumList: [],
            });
            this.selectComponent('#fwCategoryId').toggle(false);
        }
        else if (flag == 2) {
            this.setData({
                fwTypeClass: null,
                fwDwStatusId: '',
                num: 0,
                mumList: [],
            });
            this.selectComponent('#fwTypeId').toggle(false);
        }
        else if (flag == 3) {
            this.setData({
                fwScaleClass: null,
                fwDwScaleId: '',
                num: 0,
                mumList: [],
            });
            this.selectComponent('#fwScaleId').toggle(false);
        }
        else {
            this.setData({
                fwIndustryIndex: 0,
                fwIndustryId: null,
                fwCyTypeId: '',
                fwHyTypeId: '',
                num: 0,
                mumList: [],
            });
            this.selectComponent('#fwIndustryId').toggle(false);
        }
        this.getSiteList();
    },
    fwSubmit: function (e) {
        var flag = e.currentTarget.dataset.flag;
        if (flag == 1) {
            this.selectComponent('#fwCategoryId').toggle(false);
        }
        else if (flag == 2) {
            this.selectComponent('#fwType').toggle(false);
        }
        else if (flag == 3) {
            this.selectComponent('#fwScaleId').toggle(false);
        }
        else {
            this.selectComponent('#fwIndustryId').toggle(false);
        }
        this.setData({
            num: 0,
            mumList: [],
        });
        this.getServiceList();
    },
    zjFn: function () {
        this.hideFn();
        this.setData({
            flag: 'zj',
            isSearchShow: true,
            zjSearchInfoShow: true,
        });
        this.getAllFundsList();
    },
    getAllFundsList: function () {
        var _this = this;
        this.setData({
            moreShow: false,
        });
        https.successRequest(api.allFund, {
            tenantId: api.areaId,
            key: this.data.searchKey,
            pageSize: this.data.pageSize,
            pageIndex: this.data.pageIndex,
        }, 'GET').then(function (res) {
            if (res) {
                var jrjgMdoelsList = res.val.jrjgMdoels.map(function (item) {
                    return {
                        id: item.id,
                        name: '金融',
                        longitude: item.lng,
                        latitude: item.lat,
                        iconPath: '../../images/zj.png',
                        width: 27,
                        height: 35,
                        callout: {
                            content: item.qyName ? item.qyName : '未填报',
                            color: '#000',
                            fontSize: 14,
                            bgColor: '#FFF',
                            padding: 5,
                            borderRadius: 4,
                            borderColor: '#CCC',
                            borderWidth: 1,
                            display: 'BYCLICK'
                        },
                        title: item.qyName,
                        provinceName: item.provinceName ? item.provinceName : '',
                        cityName: item.cityName ? item.cityName : '',
                        districtName: item.districtName ? item.districtName : ''
                    };
                });
                var tzModelsList = res.val.tzModels.map(function (item) {
                    return {
                        id: item.id,
                        name: '资金',
                        longitude: item.lng,
                        latitude: item.lat,
                        iconPath: '../../images/tz.png',
                        width: 27,
                        height: 35,
                        callout: {
                            content: item.needName ? item.needName : '未填报',
                            color: '#000',
                            fontSize: 14,
                            bgColor: '#FFF',
                            padding: 5,
                            borderRadius: 4,
                            borderColor: '#CCC',
                            borderWidth: 1,
                            display: 'BYCLICK'
                        },
                        title: item.needName,
                        provinceName: item.provinceName ? item.provinceName : '',
                        cityName: item.cityName ? item.cityName : '',
                        districtName: item.districtName ? item.districtName : ''
                    };
                });
                var rongziNeedsList = res.val.rongziNeeds.map(function (item) {
                    return {
                        id: item.id,
                        name: '需求',
                        longitude: item.lng,
                        latitude: item.lat,
                        iconPath: '../../images/rz.png',
                        width: 27,
                        height: 35,
                        callout: {
                            content: item.needName ? item.needName : '未填报',
                            color: '#000',
                            fontSize: 14,
                            bgColor: '#FFF',
                            padding: 5,
                            borderRadius: 4,
                            borderColor: '#CCC',
                            borderWidth: 1,
                            display: 'BYCLICK'
                        },
                        title: item.needName,
                        provinceName: item.provinceName ? item.provinceName : '',
                        cityName: item.cityName ? item.cityName : '',
                        districtName: item.districtName ? item.districtName : ''
                    };
                });
                var rongziProsList = res.val.rongziPros.map(function (item) {
                    return {
                        id: item.id,
                        name: '融资',
                        longitude: item.lng,
                        latitude: item.lat,
                        iconPath: '../../images/xm.png',
                        width: 27,
                        height: 35,
                        callout: {
                            content: item.proName ? item.proName : '未填报',
                            color: '#000',
                            fontSize: 14,
                            bgColor: '#FFF',
                            padding: 5,
                            borderRadius: 4,
                            borderColor: '#CCC',
                            borderWidth: 1,
                            display: 'BYCLICK'
                        },
                        title: item.proName,
                        provinceName: item.provinceName ? item.provinceName : '',
                        cityName: item.cityName ? item.cityName : '',
                        districtName: item.districtName ? item.districtName : ''
                    };
                });
                var list = jrjgMdoelsList.concat(tzModelsList, rongziNeedsList, rongziProsList);
                var newMarkersList = list.map(function (item, index) {
                    return {
                        id: index,
                        name: item.name,
                        longitude: item.longitude,
                        latitude: item.latitude,
                        iconPath: item.iconPath,
                        width: 27,
                        height: 35,
                        callout: item.callout,
                        oldId: item.id,
                        title: item.title,
                        provinceName: item.provinceName,
                        cityName: item.cityName,
                        districtName: item.districtName
                    };
                });
                if (_this.data.total == 0) {
                    _this.setData({
                        markers: newMarkersList,
                        total: res.val.total,
                        mumList: newMarkersList,
                    });
                }
                else {
                    _this.setData({
                        markers: _this.data.markers.concat(newMarkersList),
                        mumList: _this.data.mumList.concat(newMarkersList),
                    });
                }
                if (_this.data.mumList.length < res.val.total) {
                    _this.setData({
                        moreShow: true,
                        moreTitle: '点击加载更多',
                    });
                }
                else {
                    _this.setData({
                        moreShow: true,
                        moreTitle: '已加载全部',
                    });
                }
            }
        }, function (err) {
            console.log(err);
        });
    },
    zjBtnToggle: function (e) {
        if (e.target.dataset.num == 1) {
            this.setData({
                flag: 'zj',
                zjBtnClass: e.target.dataset.num,
                jrSearchInfoShow: false,
                tzSearchInfoShow: false,
                rzSearchInfoShow: false,
                num: 0,
                mumList: [],
            });
            this.getAllFundsList();
        }
        else if (e.target.dataset.num == 2) {
            this.setData({
                flag: 'jr',
                zjBtnClass: e.target.dataset.num,
                jrSearchInfoShow: true,
                tzSearchInfoShow: false,
                rzSearchInfoShow: false,
                num: 0,
                mumList: [],
            });
            this.getJrList();
            this.fwCategory();
            this.fwType();
            this.fwScale();
            this.industry();
        }
        else if (e.target.dataset.num == 3) {
            this.setData({
                flag: 'tz',
                zjBtnClass: e.target.dataset.num,
                jrSearchInfoShow: false,
                tzSearchInfoShow: true,
                rzSearchInfoShow: false,
                num: 0,
                mumList: [],
            });
            this.getTzList();
            this.tzArea();
            this.tzWay();
            this.tzOther();
            this.tzType();
            this.industry();
        }
        else {
            this.setData({
                flag: 'rz',
                zjBtnClass: e.target.dataset.num,
                jrSearchInfoShow: false,
                tzSearchInfoShow: false,
                rzSearchInfoShow: true,
                num: 0,
                mumList: [],
            });
            this.getRzList();
            this.rzWay();
            this.xmStage();
            this.xmCategory();
            this.xmFinancing();
            this.industry();
        }
    },
    getJrList: function () {
        var _this = this;
        this.setData({
            moreShow: false,
        });
        https.successRequest(api.jinrong, {
            tenantId: api.areaId,
            key: this.data.searchKey,
            pageSize: this.data.pageSize,
            pageIndex: this.data.pageIndex,
            typeOneId: this.data.jrTypeOneId,
            typeTwoId: this.data.jrTypeTwoId,
            dwStatusId: this.data.jrDwStatusId,
            dwScaleId: this.data.jrDwScaleId,
            cyTypeId: this.data.jrCyTypeId,
            hyTypeId: this.data.jrHyTypeId
        }, 'GET').then(function (res) {
            if (res) {
                var list = res.list.map(function (item, index) {
                    return {
                        id: index,
                        name: '金融',
                        longitude: item.lng,
                        latitude: item.lat,
                        iconPath: '../../images/zj.png',
                        width: 27,
                        height: 35,
                        callout: {
                            content: item.qyName ? item.qyName : '未填报',
                            color: '#000',
                            fontSize: 18,
                            bgColor: '#FFF',
                            padding: 5,
                            borderRadius: 4,
                            borderColor: '#CCC',
                            borderWidth: 1,
                            display: 'BYCLICK'
                        },
                        oldId: item.id,
                        title: item.qyName ? item.qyName : '未填报',
                        provinceName: item.provinceName ? item.provinceName : '',
                        cityName: item.cityName ? item.cityName : '',
                        districtName: item.districtName ? item.districtName : ''
                    };
                });
                if (_this.data.total == 0) {
                    _this.setData({
                        markers: list,
                        total: res.total,
                        mumList: list,
                    });
                }
                else {
                    _this.setData({
                        markers: _this.data.markers.concat(list),
                        mumList: _this.data.mumList.concat(list),
                    });
                }
                if (_this.data.mumList.length < res.total) {
                    _this.setData({
                        moreShow: true,
                        moreTitle: '点击加载更多',
                    });
                }
                else {
                    _this.setData({
                        moreShow: true,
                        moreTitle: '已加载全部',
                    });
                }
            }
        }, function (err) {
            console.log(err);
        });
    },
    jrCategoryNavItem: function (data) {
        this.setData({
            jrCategoryIndex: data.detail.index || 0,
        });
    },
    jrCategoryItem: function (data) {
        var id = this.data.jrCategoryId === data.detail.id ? null : data.detail.id;
        var pId = this.data.jrCategoryId === data.detail.id ? null : data.detail.id;
        this.setData({
            jrCategoryId: id,
            jrTypeOneId: id ? id : '',
            jrTypeTwoId: pId ? pId : '',
        });
    },
    jrTypeFn: function (e) {
        var id = e.target.dataset.id;
        this.setData({
            jrTypeClass: id,
            jrDwStatusId: id,
        });
    },
    jrScaleFn: function (e) {
        var id = e.target.dataset.id;
        this.setData({
            jrScaleClass: id,
            jrDwScaleId: id,
        });
    },
    jrNavItem: function (data) {
        this.setData({
            jrIndustryIndex: data.detail.index || 0,
        });
    },
    jrIndustryItem: function (data) {
        var id = this.data.jrIndustryId === data.detail.id ? null : data.detail.id;
        var pId = this.data.jrIndustryId === data.detail.id ? null : data.detail.id;
        this.setData({
            jrIndustryId: id,
            jrCyTypeId: id ? id : '',
            jrHyTypeId: pId ? pId : '',
        });
    },
    jrReset: function (e) {
        var flag = e.currentTarget.dataset.flag;
        if (flag == 1) {
            this.setData({
                jrCategoryIndex: 0,
                jrCategoryId: null,
                jrTypeOneId: '',
                jrTypeTwoId: '',
                num: 0,
                mumList: [],
            });
            this.selectComponent('#jrCategoryId').toggle(false);
        }
        else if (flag == 2) {
            this.setData({
                jrTypeClass: null,
                jrDwStatusId: '',
                num: 0,
                mumList: [],
            });
            this.selectComponent('#jrType').toggle(false);
        }
        else if (flag == 3) {
            this.setData({
                jrScaleClass: null,
                jrDwScaleId: '',
                num: 0,
                mumList: [],
            });
            this.selectComponent('#jrScaleId').toggle(false);
        }
        else {
            this.setData({
                jrIndustryIndex: 0,
                jrIndustryId: null,
                jrCyTypeId: '',
                jrHyTypeId: '',
                num: 0,
                mumList: [],
            });
            this.selectComponent('#jrIndustryId').toggle(false);
        }
        this.getJrList();
    },
    jrSubmit: function (e) {
        var flag = e.currentTarget.dataset.flag;
        if (flag == 1) {
            this.selectComponent('#jrCategoryId').toggle(false);
        }
        else if (flag == 2) {
            this.selectComponent('#jrType').toggle(false);
        }
        else if (flag == 3) {
            this.selectComponent('#jrScaleId').toggle(false);
        }
        else {
            this.selectComponent('#jrIndustryId').toggle(false);
        }
        this.setData({
            num: 0,
            mumList: [],
        });
        this.getJrList();
    },
    getTzList: function () {
        var _this = this;
        this.setData({
            moreShow: false,
        });
        https.successRequest(api.touzi, {
            tenantId: api.areaId,
            key: this.data.searchKey,
            pageSize: this.data.pageSize,
            pageIndex: this.data.pageIndex,
            typeOneId: this.data.jrTypeOneId,
            typeTwoId: this.data.jrTypeTwoId,
            dwStatusId: this.data.jrDwStatusId,
            dwScaleId: this.data.jrDwScaleId,
            cyTypeId: this.data.jrCyTypeId,
            hyTypeId: this.data.jrHyTypeId
        }, 'GET').then(function (res) {
            if (res) {
                var list = res.list.map(function (item, index) {
                    return {
                        id: index,
                        name: '投资',
                        longitude: item.lng,
                        latitude: item.lat,
                        iconPath: '../../images/tz.png',
                        width: 27,
                        height: 35,
                        callout: {
                            content: item.needName ? item.needName : '未填报',
                            color: '#000',
                            fontSize: 18,
                            bgColor: '#FFF',
                            padding: 5,
                            borderRadius: 4,
                            borderColor: '#CCC',
                            borderWidth: 1,
                            display: 'BYCLICK'
                        },
                        oldId: item.id,
                        title: item.needName ? item.needName : '未填报',
                        provinceName: item.provinceName ? item.provinceName : '',
                        cityName: item.cityName ? item.cityName : '',
                        districtName: item.districtName ? item.districtName : ''
                    };
                });
                if (_this.data.total == 0) {
                    _this.setData({
                        markers: list,
                        total: res.total,
                        mumList: list,
                    });
                }
                else {
                    _this.setData({
                        markers: _this.data.markers.concat(list),
                        mumList: _this.data.mumList.concat(list),
                    });
                }
                if (_this.data.mumList.length < res.total) {
                    _this.setData({
                        moreShow: true,
                        moreTitle: '点击加载更多',
                    });
                }
                else {
                    _this.setData({
                        moreShow: true,
                        moreTitle: '已加载全部',
                    });
                }
                if (_this.data.mumList.length < res.total) {
                    _this.setData({
                        moreShow: true,
                        moreTitle: '点击加载更多',
                    });
                }
                else {
                    _this.setData({
                        moreShow: true,
                        moreTitle: '已加载全部',
                    });
                }
            }
        }, function (err) {
            console.log(err);
        });
    },
    tzAreaFn: function (e) {
        var id = e.target.dataset.id;
        this.setData({
            tzAreaClass: id,
            tzAreaId: id,
        });
    },
    tzWayFn: function (e) {
        var id = e.target.dataset.id;
        this.setData({
            tzWayClass: id,
            tzWayId: id,
        });
    },
    tzOtherFn: function (e) {
        var id = e.target.dataset.id;
        this.setData({
            tzOtherClass: id,
            tzOtherId: id,
        });
    },
    tzTypeFn: function (e) {
        var id = e.target.dataset.id;
        this.setData({
            tzTypeClass: id,
            tzTypeId: id,
        });
    },
    tzNavItem: function (data) {
        this.setData({
            tzIndex: data.detail.index || 0,
        });
    },
    tzIndustryItem: function (data) {
        var id = this.data.tzIndustryId === data.detail.id ? null : data.detail.id;
        var pId = this.data.tzIndustryId === data.detail.id ? null : data.detail.id;
        this.setData({
            tzIndustryId: id,
            tzCyTypeId: id ? id : '',
            tzHyTypeId: pId ? pId : '',
        });
    },
    tzReset: function (e) {
        var flag = e.currentTarget.dataset.flag;
        if (flag == 1) {
            this.setData({
                tzAreaClass: null,
                tzAreaId: '',
                num: 0,
                mumList: [],
            });
            this.selectComponent('#tzAreaId').toggle(false);
        }
        else if (flag == 2) {
            this.setData({
                tzWayClass: null,
                tzWayId: '',
                num: 0,
                mumList: [],
            });
            this.selectComponent('#tzWayId').toggle(false);
        }
        else if (flag == 3) {
            this.setData({
                tzIndex: 0,
                tzIndustryId: null,
                tzCyTypeId: '',
                tzHyTypeId: '',
                num: 0,
                mumList: [],
            });
            this.selectComponent('#tzIndustryId').toggle(false);
        }
        else {
            this.setData({
                tzOtherClass: null,
                tzOtherId: '',
                tzTypeClass: null,
                tzTypeId: '',
                num: 0,
                mumList: [],
            });
            this.selectComponent('#tzMoreId').toggle(false);
        }
        this.getTzList();
    },
    tzSubmit: function (e) {
        var flag = e.currentTarget.dataset.flag;
        if (flag == 1) {
            this.selectComponent('#tzAreaId').toggle(false);
        }
        else if (flag == 2) {
            this.selectComponent('#tzWayId').toggle(false);
        }
        else if (flag == 3) {
            this.selectComponent('#tzIndustryId').toggle(false);
        }
        else {
            this.selectComponent('#tzMoreId').toggle(false);
        }
        this.setData({
            num: 0,
            mumList: [],
        });
        this.getTzList();
    },
    getRzList: function () {
        var _this = this;
        this.setData({
            moreShow: false,
        });
        https.successRequest(api.rongzi, {
            tenantId: api.areaId,
            key: this.data.searchKey,
            pageSize: this.data.pageSize,
            pageIndex: this.data.pageIndex,
            needTypes: this.data.rzCategoryId,
            curStage: this.data.rzStageId,
            rzWay: this.data.rzWayId,
            rzMoney: this.data.rzFinancingId,
            cyTypeId: this.data.rzCyTypeId,
            hyTypeId: this.data.rzHyTypeId
        }, 'GET').then(function (res) {
            if (res) {
                var rongziNeedsList = res.val.needList.map(function (item) {
                    return {
                        id: item.id,
                        name: '融资',
                        longitude: item.lng,
                        latitude: item.lat,
                        iconPath: '../../images/rz.png',
                        width: 27,
                        height: 35,
                        callout: {
                            content: item.needName ? item.needName : '未填报',
                            color: '#000',
                            fontSize: 14,
                            bgColor: '#FFF',
                            padding: 5,
                            borderRadius: 4,
                            borderColor: '#CCC',
                            borderWidth: 1,
                            display: 'BYCLICK'
                        },
                        title: item.needName,
                        provinceName: item.provinceName ? item.provinceName : '',
                        cityName: item.cityName ? item.cityName : '',
                        districtName: item.districtName ? item.districtName : ''
                    };
                });
                var rongziProsList = res.val.proList.map(function (item) {
                    return {
                        id: item.id,
                        name: '项目',
                        longitude: item.lng,
                        latitude: item.lat,
                        iconPath: '../../images/xm.png',
                        width: 27,
                        height: 35,
                        callout: {
                            content: item.proName ? item.proName : '未填报',
                            color: '#000',
                            fontSize: 14,
                            bgColor: '#FFF',
                            padding: 5,
                            borderRadius: 4,
                            borderColor: '#CCC',
                            borderWidth: 1,
                            display: 'BYCLICK'
                        },
                        title: item.proName,
                        provinceName: item.provinceName ? item.provinceName : '',
                        cityName: item.cityName ? item.cityName : '',
                        districtName: item.districtName ? item.districtName : ''
                    };
                });
                var list = rongziNeedsList.concat(rongziProsList);
                var newMarkersList = list.map(function (item, index) {
                    return {
                        id: index,
                        name: item.name,
                        longitude: item.longitude,
                        latitude: item.latitude,
                        iconPath: item.iconPath,
                        width: 27,
                        height: 35,
                        callout: item.callout,
                        oldId: item.id,
                        title: item.title,
                        provinceName: item.provinceName,
                        cityName: item.cityName,
                        districtName: item.districtName
                    };
                });
                if (_this.data.total == 0) {
                    _this.setData({
                        markers: newMarkersList,
                        total: res.val.total,
                        mumList: newMarkersList,
                    });
                }
                else {
                    _this.setData({
                        markers: _this.data.markers.concat(newMarkersList),
                        mumList: _this.data.mumList.concat(newMarkersList),
                    });
                }
                if (_this.data.mumList.length < res.val.total) {
                    _this.setData({
                        moreShow: true,
                        moreTitle: '点击加载更多',
                    });
                }
                else {
                    _this.setData({
                        moreShow: true,
                        moreTitle: '已加载全部',
                    });
                }
            }
        }, function (err) {
            console.log(err);
        });
    },
    rzCategoryFn: function (e) {
        var id = e.target.dataset.id;
        this.setData({
            rzCategoryClass: id,
            rzCategoryId: id,
        });
    },
    rzStageFn: function (e) {
        var id = e.target.dataset.id;
        this.setData({
            rzStageClass: id,
            rzStageId: id,
        });
    },
    rzWayFn: function (e) {
        var id = e.target.dataset.id;
        this.setData({
            rzWayClass: id,
            rzWayId: id,
        });
    },
    rzFinancingFn: function (e) {
        var id = e.target.dataset.id;
        this.setData({
            rzFinancingClass: id,
            rzFinancingId: id,
        });
    },
    rzNavItem: function (data) {
        this.setData({
            rzIndex: data.detail.index || 0,
        });
    },
    rzIndustryItem: function (data) {
        var id = this.data.rzIndustryId === data.detail.id ? null : data.detail.id;
        var pId = this.data.rzIndustryId === data.detail.id ? null : data.detail.id;
        this.setData({
            rzIndustryId: id,
            rzCyTypeId: id ? id : '',
            rzHyTypeId: pId ? pId : '',
        });
    },
    rzReset: function (e) {
        var flag = e.currentTarget.dataset.flag;
        if (flag == 1) {
            this.setData({
                rzCategoryClass: null,
                rzCategoryId: '',
                num: 0,
                mumList: [],
            });
            this.selectComponent('#rzCategoryId').toggle(false);
        }
        else if (flag == 2) {
            this.setData({
                rzStageClass: null,
                rzStageId: '',
                num: 0,
                mumList: [],
            });
            this.selectComponent('#rzStageId').toggle(false);
        }
        else if (flag == 3) {
            this.setData({
                rzIndex: 0,
                rzIndustryId: null,
                rzCyTypeId: '',
                rzHyTypeId: '',
                num: 0,
                mumList: [],
            });
            this.selectComponent('#rzIndustryId').toggle(false);
        }
        else {
            this.setData({
                rzWayClass: null,
                rzWayId: '',
                rzFinancingClass: null,
                rzFinancingId: '',
                num: 0,
                mumList: [],
            });
            this.selectComponent('#rzMoreId').toggle(false);
        }
        this.getRzList();
    },
    rzSubmit: function (e) {
        var flag = e.currentTarget.dataset.flag;
        if (flag == 1) {
            this.selectComponent('#rzCategoryId').toggle(false);
        }
        else if (flag == 2) {
            this.selectComponent('#rzStageId').toggle(false);
        }
        else if (flag == 3) {
            this.selectComponent('#rzIndustryId').toggle(false);
        }
        else {
            this.selectComponent('#rzMoreId').toggle(false);
        }
        this.setData({
            num: 0,
            mumList: [],
        });
        this.getRzList();
    },
    navigation: function (e) {
        if (!!e.currentTarget.dataset.longitude) {
            var title = e.currentTarget.dataset.title;
            var longitude = e.currentTarget.dataset.longitude;
            var latitude = e.currentTarget.dataset.latitude;
            this.setData({
                goName: title,
                goLongitude: longitude,
                goLatitude: latitude
            });
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
    mapDetail: function (e) {
        var name = e.currentTarget.dataset.name;
        var id = e.currentTarget.dataset.id;
        wx.navigateTo({
            url: "../mapDetail/mapDetail?name=" + name + '&id=' + id
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
        var _this = this;
        var token = wx.getStorageSync('token');
        if (!!token) {
            if (api.areaName) {
                this.setData({
                    pageSize: 10,
                    pageIndex: 1,
                    total: 0,
                    markers: [],
                    areaName: api.areaName,
                    areaId: api.areaId,
                    longitude: api.longitude,
                    latitude: api.latitude
                });
            }
            else {
                wx.getLocation({
                    type: 'wgs84',
                    success: function (res) {
                        _this.setData({
                            pageSize: 10,
                            pageIndex: 1,
                            total: 0,
                            markers: [],
                            longitude: res.longitude,
                            latitude: res.latitude
                        });
                        _this.getAreaList();
                    }
                });
            }
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
        https.successRequest(api.all, {
            tenantId: api.areaId,
            pageSize: this.data.pageSize,
            pageIndex: this.data.pageIndex,
        }, 'GET').then(function (res) {
            if (res) {
                var cxPlatformModelsList = res.val.cxPlatformModels.map(function (item) {
                    return {
                        id: item.id,
                        longitude: item.lng,
                        latitude: item.lat,
                        iconPath: '../../images/cx.png',
                        width: 27,
                        height: 35,
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
                        iconPath: '../../images/cy.png',
                        width: 27,
                        height: 35,
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
                        iconPath: '../../images/xm.png',
                        width: 27,
                        height: 35,
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
                        iconPath: '../../images/fw.png',
                        width: 27,
                        height: 35,
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
                        iconPath: '../../images/cd.png',
                        width: 27,
                        height: 35,
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
                        iconPath: '../../images/zj.png',
                        width: 27,
                        height: 35,
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
                        iconPath: '../../images/tz.png',
                        width: 27,
                        height: 35,
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
                        iconPath: '../../images/rz.png',
                        width: 27,
                        height: 35,
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
                        iconPath: '../../images/rz.png',
                        width: 27,
                        height: 35,
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
                        iconPath: item.iconPath,
                        width: 27,
                        height: 35,
                        callout: item.callout,
                        oldId: item.id,
                        title: item.callout.content,
                        provinceName: item.provinceName,
                        cityName: item.cityName,
                        districtName: item.districtName
                    };
                });
                if (_this.data.total == 0) {
                    _this.setData({
                        markers: newMarkersList,
                        total: res.val.total
                    });
                }
                else {
                    _this.setData({
                        markers: newMarkersList
                    });
                }
            }
        }, function (err) {
            console.log(err);
        });
    },
    getAreaList: function () {
        var _this = this;
        https.successRequest(api.tenants, null, 'GET').then(function (res) {
            if (res) {
                var list = res.list.map(function (item) {
                    return {
                        id: item.model.id,
                        title: item.model.cname
                    };
                });
                var newList_1 = [];
                list.forEach(function (item) {
                    if (item.title == '李沧区') {
                        newList_1.push({
                            id: item.id,
                            title: item.title,
                            longitude: '120.439601',
                            latitude: '36.151586',
                        });
                    }
                    if (item.title == '市北区') {
                        newList_1.push({
                            id: item.id,
                            title: item.title,
                            longitude: '120.380385',
                            latitude: '36.093512',
                        });
                    }
                    if (item.title == '西海岸新区') {
                        newList_1.push({
                            id: item.id,
                            title: item.title,
                            longitude: '120.20446',
                            latitude: '35.966251',
                        });
                    }
                    if (item.title == '市南区') {
                        newList_1.push({
                            id: item.id,
                            title: item.title,
                            longitude: '120.419487',
                            latitude: '36.080924',
                        });
                    }
                    if (item.title == '崂山区') {
                        newList_1.push({
                            id: item.id,
                            title: item.title,
                            longitude: '120.475533',
                            latitude: '36.113575',
                        });
                    }
                    if (item.title == '城阳区') {
                        newList_1.push({
                            id: item.id,
                            title: item.title,
                            longitude: '120.403094',
                            latitude: '36.312985',
                        });
                    }
                    if (item.title == '即墨区') {
                        newList_1.push({
                            id: item.id,
                            title: item.title,
                            longitude: '120.453974',
                            latitude: '36.395534',
                        });
                    }
                    if (item.title == '胶州市') {
                        newList_1.push({
                            id: item.id,
                            title: item.title,
                            longitude: '120.039172',
                            latitude: '36.270863',
                        });
                    }
                    if (item.title == '平度市') {
                        newList_1.push({
                            id: item.id,
                            title: item.title,
                            longitude: '119.993754',
                            latitude: '36.782908',
                        });
                    }
                    if (item.title == '莱西市') {
                        newList_1.push({
                            id: item.id,
                            title: item.title,
                            longitude: '120.526126',
                            latitude: '36.894743',
                        });
                    }
                    if (item.title == '高新区') {
                        newList_1.push({
                            id: item.id,
                            title: item.title,
                            longitude: '120.284476',
                            latitude: '36.272367',
                        });
                    }
                    if (item.title == '青岛蓝谷') {
                        newList_1.push({
                            id: item.id,
                            title: item.title,
                            longitude: '120.683445',
                            latitude: '36.353411',
                        });
                    }
                });
                _this.setData({
                    areaList: newList_1
                });
                _this.getArea();
            }
        }, function (err) {
            console.log(err);
        });
    },
    getArea: function () {
        var _this = this;
        var qqmapsdk = new QQMapWX({
            key: api.mapApiKey
        });
        wx.getLocation({
            type: 'wgs84',
            success: function () {
                qqmapsdk.reverseGeocoder({
                    location: _this.data.latitude + ',' + _this.data.longitude,
                    success: function (res) {
                        var areaName = res.result.address_component.district;
                        _this.data.areaList.forEach(function (item) {
                            if (item.title == areaName) {
                                api.areaName = areaName;
                                api.areaId = item.id;
                                api.longitude = item.longitude,
                                    api.latitude = item.latitude;
                                _this.setData({
                                    areaName: api.areaName,
                                    areaId: api.areaId,
                                    longitude: api.longitude,
                                    latitude: api.latitude
                                });
                                if (api.indexFlag == 'pt') {
                                    _this.ptFn();
                                }
                                else if (api.indexFlag == 'xm') {
                                    _this.xmFn();
                                }
                                else if (api.indexFlag == 'zj') {
                                    _this.zjFn();
                                }
                                else if (api.indexFlag == 'cd') {
                                    _this.cdFn();
                                }
                                else if (api.indexFlag == 'fw') {
                                    _this.fwFn();
                                }
                                else {
                                }
                            }
                        });
                    }
                });
            }
        });
    },
    moreFn: function () {
        if (this.data.flag == 'allPt') {
            if (this.data.mumList.length < this.data.total) {
                this.setData({
                    pageIndex: this.data.pageIndex += 1,
                });
                this.getAllPro();
            }
        }
        if (this.data.flag == 'cxPt') {
            if (this.data.mumList.length < this.data.total) {
                this.setData({
                    pageIndex: this.data.pageIndex += 1,
                });
                this.getCxPro();
            }
        }
        if (this.data.flag == 'cyPt') {
            if (this.data.mumList.length < this.data.total) {
                this.setData({
                    pageIndex: this.data.pageIndex += 1,
                });
                this.getCyPro();
            }
        }
        if (this.data.flag == 'xm') {
            if (this.data.mumList.length < this.data.total) {
                this.setData({
                    pageIndex: this.data.pageIndex += 1,
                });
                this.getProList();
            }
        }
        if (this.data.flag == 'zj') {
            if (this.data.mumList.length < this.data.total) {
                this.setData({
                    pageIndex: this.data.pageIndex += 1,
                });
                this.getAllFundsList();
            }
        }
        if (this.data.flag == 'jr') {
            if (this.data.mumList.length < this.data.total) {
                this.setData({
                    pageIndex: this.data.pageIndex += 1,
                });
                this.getJrList();
            }
        }
        if (this.data.flag == 'tz') {
            if (this.data.mumList.length < this.data.total) {
                this.setData({
                    pageIndex: this.data.pageIndex += 1,
                });
                this.getTzList();
            }
        }
        if (this.data.flag == 'rz') {
            if (this.data.mumList.length < this.data.total) {
                this.setData({
                    pageIndex: this.data.pageIndex += 1,
                });
                this.getRzList();
            }
        }
        if (this.data.flag == 'cd') {
            if (this.data.mumList.length < this.data.total) {
                this.setData({
                    pageIndex: this.data.pageIndex += 1,
                });
                this.getSiteList();
            }
        }
        if (this.data.flag == 'fw') {
            if (this.data.mumList.length < this.data.total) {
                this.setData({
                    pageIndex: this.data.pageIndex += 1,
                });
                this.getServiceList();
            }
        }
    },
    onLoad: function () {
        wx.setNavigationBarTitle({
            title: "人才创新创业平台地图"
        });
    },
    onShow: function () {
        this.verification();
    },
    onReady: function () { },
    onHide: function () {
        api.indexFlag = '';
        api.areaName = '';
        api.areaId = '';
        api.longitude = '';
        api.latitude = '';
        this.setData({
            isListShow: true,
            isInfoShow: false,
            isSearchShow: false,
            isSearchInfoShow: false,
        });
    },
    onUnload: function () { }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFFLENBQUMsVUFBVSxDQUFDO0FBQ2hDLElBQUksS0FBSyxHQUFJLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0FBQ2pELElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxvREFBb0QsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUVuRixJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsK0JBQStCLENBQUMsQ0FBQztBQUV2RCxJQUFJLENBQUM7SUFFSCxJQUFJLEVBQUU7UUFDSixTQUFTLEVBQUUsUUFBUTtRQUNuQixJQUFJLEVBQUUsRUFBRTtRQUNSLFFBQVEsRUFBRSxLQUFLO1FBRWYsUUFBUSxFQUFFLEVBQUU7UUFDWixTQUFTLEVBQUUsQ0FBQztRQUNaLEtBQUssRUFBRSxDQUFDO1FBRVIsUUFBUSxFQUFFLEVBQUU7UUFDWixRQUFRLEVBQUUsRUFBRTtRQUNaLE1BQU0sRUFBRSxFQUFFO1FBRVYsVUFBVSxFQUFFLElBQUk7UUFDaEIsVUFBVSxFQUFFLEtBQUs7UUFDakIsWUFBWSxFQUFFLEtBQUs7UUFDbkIsZ0JBQWdCLEVBQUUsS0FBSztRQUd2QixRQUFRLEVBQUUsRUFBRTtRQUNaLFlBQVksRUFBRSxFQUFFO1FBQ2hCLFdBQVcsRUFBQztZQUNWLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO1lBQ3ZCLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO1lBQ3RCLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO1lBQ3RCLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFO1lBQ3pCLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO1NB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QztJQUdYLE1BQU07UUFDSixHQUFHLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUVuQixHQUFHLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNsQixHQUFHLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNoQixHQUFHLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNuQixHQUFHLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUVsQixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsVUFBVSxFQUFFLElBQUk7WUFDaEIsVUFBVSxFQUFFLEtBQUs7WUFDakIsWUFBWSxFQUFFLEtBQUs7WUFDbkIsZ0JBQWdCLEVBQUUsS0FBSztTQUN4QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBR0QsUUFBUSxnQkFBRyxDQUFDO0NBQ2IsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbWFwLnRzXHJcbmNvbnN0IGFwaSA9IGdldEFwcCgpLmdsb2JhbERhdGE7ICAvLyDojrflj5blupTnlKjlrp7kvotcclxubGV0IGh0dHBzICA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL215UmVxdWVzdC5qcycpOyAgLy/ojrflj5ZhamF45pa55rOVXHJcbmxldCBEaWFsb2cgPSByZXF1aXJlKCcuLi8uLi9taW5pcHJvZ3JhbV9ucG0vQHZhbnQvd2VhcHAvZGlhbG9nL2RpYWxvZy5qcycpLmRlZmF1bHQ7XHJcblxyXG5sZXQgUVFNYXBXWCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3FxbWFwLXd4LWpzc2RrLmpzJyk7ICAvLyDlvJXlhaVTREvmoLjlv4PnsbtcclxuXHJcblBhZ2Uoe1xyXG4gIC8v6aG16Z2i5pWw5o2uXHJcbiAgZGF0YToge1xyXG4gICAgbW9yZVRpdGxlOiAn54K55Ye75Yqg6L295pu05aSaJywgICAgICAgICAgICAvL+WKoOi9veabtOWkmlxyXG4gICAgZmxhZzogJycsICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5b2T5YmN5YiX6KGoXHJcbiAgICBtb3JlU2hvdzogZmFsc2UsICAgICAgICAgICAgICAgICAgICAgLy/liqDovb3mm7TlpJrnirbmgIFcclxuICAgIC8v6aG156CBXHJcbiAgICBwYWdlU2l6ZTogMTAsICAgICAgICAgICAgIC8v5q+P6aG15pi+56S65pWw6YePXHJcbiAgICBwYWdlSW5kZXg6IDEsICAgICAgICAgICAgIC8v5b2T5YmN6aG1XHJcbiAgICB0b3RhbDogMCwgICAgICAgICAgICAgICAgIC8v5oC75p2h5pWwXHJcbiAgICAvL+WMuuW4glxyXG4gICAgYXJlYUxpc3Q6IFtdLCAgICAgICAgICAgICAvL+WMuuWIl+ihqFxyXG4gICAgYXJlYU5hbWU6ICcnLCAgICAgICAgICAgICAvL+WIh+aNoueahOWMuuWQjVxyXG4gICAgYXJlYUlkOiAnJywgICAgICAgICAgICAgICAvL+WIh+aNoueahOWMuklEXHJcbiAgICAvL+aQnOe0olxyXG4gICAgaXNMaXN0U2hvdzogdHJ1ZSwgICAgICAgICAvL+m7mOiupOaYvuekujbmib7lhoXlrrlcclxuICAgIGlzSW5mb1Nob3c6IGZhbHNlLCAgICAgICAgLy/ljZXmnaHkv6Hmga/mmL7npLpcclxuICAgIGlzU2VhcmNoU2hvdzogZmFsc2UsICAgICAgLy/mkJzntKLnu5PmnpzmlbDmja5cclxuICAgIGlzU2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgLy/mkJzntKLliJfooajmlbDmja5cclxuXHJcbiAgICAvL+W5s+WPsOmrmOe6p+aQnOe0olxyXG4gICAgdHlwZUxpc3Q6IFtdLCAgICAgICAgICAgICAvL+exu+Wei1xyXG4gICAgaW5kdXN0cnlMaXN0OiBbXSwgICAgICAgICAvL+W5s+WPsOS6p+S4muihjOS4mlxyXG4gICAgcHRaaVpoaUxpc3Q6WyAgICAgICAgICAgICAvL+W5s+WPsOi1hOi0qFxyXG4gICAgICB7IGlkOiAxLCB0aXRsZTogJ+WbveWutue6pycgfSxcclxuICAgICAgeyBpZDogMiwgdGl0bGU6ICfnnIHnuqcnIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHRpdGxlOiAn5biC57qnJyB9LFxyXG4gICAgICB7IGlkOiA0LCB0aXRsZTogJ+WMuu+8iOW4gu+8iee6pycgfSxcclxuICAgICAgeyBpZDogNSwgdGl0bGU6ICfml6DotYTotKgnIH1cclxuICAgIF0sXHJcbiAgICAvL+mhueebrumrmOe6p+aQnOe0olxyXG4gICAgeG1TdGFnZUxpc3Q6IFtdLCAgICAgICAgICAgICAvL+aJgOWkhOmYtuautVxyXG4gICAgeG1DYXRlZ29yeUxpc3Q6IFtdLCAgICAgICAgICAvL+mcgOaxguexu+WIq1xyXG4gICAgeG1GaW5hbmNpbmdMaXN0OiBbXSwgICAgICAgICAvL+iejei1hOmHkeminVxyXG4gICAgLy/lnLrlnLDpq5jnuqfmkJzntKJcclxuICAgIGNkQ2Fycmllckxpc3Q6IFtdLCAgICAgICAgICAgLy/otYTmupDnsbvlnotcclxuICAgIGNkVXNlckxpc3Q6IFsgICAgICAgICAgICAgICAgLy/lnLrlnLDnlKjpgJRcclxuICAgICAgeyBpZDogMSwgZGljTmFtZTogJ+WHuuennycgfSxcclxuICAgICAgeyBpZDogMiwgZGljTmFtZTogJ+WHuuWUricgfVxyXG4gICAgXSxcclxuICAgIC8v5pyN5Yqh6auY57qn5pCc57SiXHJcbiAgICBmd0NhdGVnb3J5TGlzdDpbXSwgICAgICAgICAgICAvL+acjeWKoeexu+WIq1xyXG4gICAgZndUeXBlTGlzdDogW10sICAgICAgICAgICAgICAgLy/ljZXkvY3nsbvlnotcclxuICAgIGZ3U2NhbGVMaXN0OiBbXSwgICAgICAgICAgICAgIC8v5Y2V5L2N6KeE5qihXHJcbiAgICAvL+aJvuaKlei1hFxyXG4gICAgdHpBcmVhTGlzdDogW10sICAgICAgICAgICAgICAgLy/mipXotYTljLrln59cclxuICAgIHR6V2F5TGlzdDogW10sICAgICAgICAgICAgICAgIC8v5oqV6LWE5pa55byPXHJcbiAgICB0ek90aGVyTGlzdDogW10sICAgICAgICAgICAgICAvL+aKlei1hOmHkeminVxyXG4gICAgdHpUeXBlTGlzdDogW10sICAgICAgICAgICAgICAgLy/otYTph5HnsbvlnotcclxuICAgIC8v5om+6J6N6LWEXHJcbiAgICByeldheUxpc3Q6IFtdLCAgICAgICAgICAgICAgICAvL+iejei1hOaWueW8j1xyXG5cclxuICAgIGZsZzogJycsICAgICAgICAgICAgICAgICAgICAgIC8vNuaJvueKtuaAgeWIpOaWrVxyXG4gICAgbnVtOiAwLCAgICAgICAgICAgICAgICAgICAgICAgLy825om+57uT5p6cXHJcbiAgICBtdW1MaXN0OiBbXSwgICAgICAgICAgICAgICAgICAvLzbmib7liJfooahcclxuXHJcbiAgICBzZWFyY2hLZXk6ICcnLCAgICAgICAgICAgICAgIC8va2V55YWz6ZSu5a2X5pCc57SiXHJcbiAgICB0ZW5hbnRJZDogJycsICAgICAgICAgICAgICAgIC8v5Zyw5Yy6aWRcclxuXHJcbiAgICAvL+aJvuW5s+WPsFxyXG4gICAgcHRTZWFyY2hJbmZvU2hvdzogdHJ1ZSwgICAgIC8v5pi+56S6L+makOiXj1xyXG4gICAgcHRCdG5TaG93OiBmYWxzZSwgICAgICAgICAgIC8v5YWo6YOo5pe25pi+56S6L+makOiXj1xyXG4gICAgcHRCdG5DbGFzczogMSwgICAgICAgICAgICAgIC8v5YWo6YOo5oyJ6ZKu54q25oCB5YiH5o2iXHJcbiAgICBwdEluZGV4OiAwLCAgICAgICAgICAgICAgICAgLy/lvZPliY3ntKLlvJVcclxuICAgIHB0SW5kdXN0cnlJZDogbnVsbCwgICAgICAgICAvL+mAieS4reeahGlkXHJcbiAgICBcclxuICAgIHB0VHlwZUNsYXNzOiBudWxsLCAgICAgICAgICAvL+exu+Wei+aMiemSrueKtuaAgeWIh+aNolxyXG4gICAgcHRaaVpoaUNsYXNzOiBudWxsLCAgICAgICAgIC8v6LWE6LSo5oyJ6ZKu54q25oCB5YiH5o2iXHJcblxyXG4gICAgcHRUeXBlSWQ6ICcnLCAgICAgICAgICAgICAgIC8v5bmz5Y+w57G75Z6LaWRcclxuICAgIHB0WmlaaGk6ICcnLCAgICAgICAgICAgICAgICAvL+W5s+WPsOi1hOi0qGlkXHJcbiAgICBwdEN5VHlwZUlkOiAnJywgICAgICAgICAgICAgLy/kuqfkuJppZFxyXG4gICAgcHRIeVR5cGVJZDogJycsICAgICAgICAgICAgIC8v6KGM5LiaaWRcclxuXHJcbiAgXHJcbiAgICAvL+aJvumhueebrlxyXG4gICAgcHJvU2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgICAvL+aYvuekui/pmpDol49cclxuICAgIHhtSW5kZXg6IDAsICAgICAgICAgICAgICAgICAvL+W9k+WJjee0ouW8lVxyXG4gICAgeG1JbmR1c3RyeUlkOiBudWxsLCAgICAgICAgIC8v6YCJ5Lit55qEaWRcclxuXHJcbiAgICB4bVN0YWdlQ2xhc3M6IG51bGwsICAgICAgICAgIC8v6Zi25q615oyJ6ZKu54q25oCB5YiH5o2iXHJcbiAgICB4bUNhdGVnb3J5Q2xhc3M6IG51bGwsICAgICAgIC8v57G75Yir5oyJ6ZKu54q25oCB5YiH5o2iXHJcbiAgICB4bUZpbmFuY2luZ0NsYXNzOiBudWxsLCAgICAgIC8v6YeR6aKd5oyJ6ZKu54q25oCB5YiH5o2iXHJcblxyXG4gICAgeG1TdGFnZUlkOiAnJywgICAgICAgICAgICAgICAvL+aJgOWkhOmYtuautVxyXG4gICAgeG1UeXBlSWQ6ICcnLCAgICAgICAgICAgICAgICAvL+mcgOaxguexu+WIq1xyXG4gICAgeG1Uek1vbmV5OiAnJywgICAgICAgICAgICAgICAvL+iejei1hOmHkeminVxyXG4gICAgeG1DeVR5cGVJZDogJycsICAgICAgICAgICAgICAvL+S6p+S4mmlkXHJcbiAgICB4bUh5VHlwZUlkOiAnJywgICAgICAgICAgICAgIC8v6KGM5LiaaWRcclxuXHJcblxyXG4gICAgLy/mib7otYTph5FcclxuICAgIHpqU2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgICAvL+aYvuekui/pmpDol49cclxuICAgIHpqQnRuQ2xhc3M6IDEsICAgICAgICAgICAgICAvL+WFqOmDqOaMiemSrueKtuaAgeWIh+aNolxyXG4gICAgLy/mib7otYTph5HvvIjph5Hono3mnI3liqHvvIlcclxuICAgIGpyU2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgICAvL+aYvuekui/pmpDol49cclxuICAgIGpyQ2F0ZWdvcnlJbmRleDogMCwgICAgICAgICAvL+W9k+WJjee0ouW8le+8iOacjeWKoeexu+WIq++8iVxyXG4gICAganJDYXRlZ29yeUlkOiBudWxsLCAgICAgICAgIC8v6YCJ5Lit55qEaWTvvIjmnI3liqHnsbvliKvvvIlcclxuICAgIGpySW5kdXN0cnlJbmRleDogMCwgICAgICAgICAvL+W9k+WJjee0ouW8le+8iOihjOS4muS6p+S4mu+8iVxyXG4gICAganJJbmR1c3RyeUlkOiBudWxsLCAgICAgICAgIC8v6YCJ5Lit55qEaWTvvIjooYzkuJrkuqfkuJrvvIlcclxuXHJcbiAgICBqclR5cGVDbGFzczogbnVsbCwgICAgICAgICAgLy/ljZXkvY3nsbvlnotcclxuICAgIGpyU2NhbGVDbGFzczogbnVsbCwgICAgICAgICAvL+WNleS9jeinhOaooVxyXG5cclxuICAgIGpyVHlwZU9uZUlkOiAnJywgICAgICAgICAgICAvL+acjeWKoeexu+WIq+S4gOe6p+iPnOWNlVxyXG4gICAganJUeXBlVHdvSWQ6ICcnLCAgICAgICAgICAgIC8v5pyN5Yqh57G75Yir5LqM57qn6I+c5Y2VXHJcbiAgICBqckR3U3RhdHVzSWQ6ICcnLCAgICAgICAgICAgLy/ljZXkvY3nsbvlnotpZFxyXG4gICAganJEd1NjYWxlSWQ6ICcnLCAgICAgICAgICAgIC8v5Y2V5L2N6KeE5qihaWRcclxuICAgIGpyQ3lUeXBlSWQ6ICcnLCAgICAgICAgICAgICAvL+S6p+S4mmlkXHJcbiAgICBqckh5VHlwZUlkOiAnJywgICAgICAgICAgICAgLy/ooYzkuJppZFxyXG5cclxuICAgIC8v5om+6LWE6YeR77yI5oqV6LWE77yJXHJcbiAgICB0elNlYXJjaEluZm9TaG93OiBmYWxzZSwgICAgLy/mmL7npLov6ZqQ6JePXHJcbiAgICB0ekluZGV4OiAwLCAgICAgICAgICAgICAgICAgLy/lvZPliY3ntKLlvJVcclxuICAgIHR6SW5kdXN0cnlJZDogbnVsbCwgICAgICAgICAvL+mAieS4reeahGlkXHJcblxyXG4gICAgdHpBcmVhQ2xhc3M6IG51bGwsICAgICAgICAgIC8v5oqV6LWE5Yy65Z+fXHJcbiAgICB0eldheUNsYXNzOiBudWxsLCAgICAgICAgICAgLy/mipXotYTmlrnlvI9cclxuICAgIHR6T3RoZXJDbGFzczogbnVsbCwgICAgICAgICAvL+aKlei1hOmHkeminVxyXG4gICAgdHpUeXBlQ2xhc3M6IG51bGwsICAgICAgICAgIC8v5oqV6LWE57G75Z6LXHJcblxyXG4gICAgdHpBcmVhSWQ6ICcnLCAgICAgICAgICAgICAgIC8v5oqV6LWE5Yy65Z+fXHJcbiAgICB0eldheUlkOiAnJywgICAgICAgICAgICAgICAgLy/mipXotYTmlrnlvI9cclxuICAgIHR6T3RoZXJJZDogJycsICAgICAgICAgICAgICAvL+aKlei1hOmHkeminVxyXG4gICAgdHpUeXBlSWQ6ICcnLCAgICAgICAgICAgICAgIC8v5oqV6LWE57G75Z6LXHJcbiAgICB0ekN5VHlwZUlkOiAnJywgICAgICAgICAgICAgLy/kuqfkuJppZFxyXG4gICAgdHpIeVR5cGVJZDogJycsICAgICAgICAgICAgIC8v6KGM5LiaaWRcclxuXHJcblxyXG5cclxuICAgIC8v5om+6LWE6YeR77yI6J6N6LWE77yJXHJcbiAgICByelNlYXJjaEluZm9TaG93OiBmYWxzZSwgICAgLy/mmL7npLov6ZqQ6JePXHJcbiAgICByekluZGV4OiAwLCAgICAgICAgICAgICAgICAgLy/lvZPliY3ntKLlvJVcclxuICAgIHJ6SW5kdXN0cnlJZDogbnVsbCwgICAgICAgICAvL+mAieS4reeahGlkXHJcblxyXG4gICAgcnpDYXRlZ29yeUNsYXNzOiBudWxsLCAgICAgIC8v6ZyA5rGC57G75YirXHJcbiAgICByelN0YWdlQ2xhc3M6IG51bGwsICAgICAgICAgLy/miYDlpITpmLbmrrVcclxuICAgIHJ6V2F5Q2xhc3M6IG51bGwsICAgICAgICAgICAvL+iejei1hOaWueW8j1xyXG4gICAgcnpGaW5hbmNpbmdDbGFzczogbnVsbCwgICAgIC8v6J6N6LWE6YeR6aKdXHJcblxyXG4gICAgcnpDYXRlZ29yeUlkOiAnJywgICAgICAgICAgIC8v6ZyA5rGC57G75YirXHJcbiAgICByelN0YWdlSWQ6ICcnLCAgICAgICAgICAgICAgLy/miYDlpITpmLbmrrVcclxuICAgIHJ6V2F5SWQ6ICcnLCAgICAgICAgICAgICAgICAvL+iejei1hOaWueW8j1xyXG4gICAgcnpGaW5hbmNpbmdJZDogJycsICAgICAgICAgIC8v6J6N6LWE6YeR6aKdXHJcbiAgICByekN5VHlwZUlkOiAnJywgICAgICAgICAgICAgLy/kuqfkuJppZFxyXG4gICAgcnpIeVR5cGVJZDogJycsICAgICAgICAgICAgIC8v6KGM5LiaaWRcclxuXHJcbiAgICAvL+aJvuWcuuWcsFxyXG4gICAgY2RTZWFyY2hJbmZvU2hvdzogZmFsc2UsICAgIC8v5pi+56S6L+makOiXj1xyXG4gICAgY2RJbmRleDogMCwgICAgICAgICAgICAgICAgIC8v5b2T5YmN57Si5byVXHJcbiAgICBjZEluZHVzdHJ5SWQ6IG51bGwsICAgICAgICAgLy/pgInkuK3nmoRpZFxyXG4gXHJcbiAgICBjZFR5cGVDbGFzczogbnVsbCwgICAgICAgICAgLy/otYTmupDnsbvlnotcclxuICAgIGNkVXNlckNsYXNzOiBudWxsLCAgICAgICAgICAvL+WcuuWcsOeUqOmAlFxyXG5cclxuICAgIGNkVHlwZUlkOiAnJywgICAgICAgICAgICAgICAvL+i9veS9k+epuumXtOexu+Wei1xyXG4gICAgY2RDaHVadUlkOiAnJywgICAgICAgICAgICAgIC8v5piv5ZCm5Ye656efXHJcbiAgICBjZFNhbGVJZDogJycsICAgICAgICAgICAgICAgLy/mmK/lkKblh7rllK5cclxuICAgIGNkQ3lUeXBlSWQ6ICcnLCAgICAgICAgICAgICAvL+S6p+S4mmlkXHJcbiAgICBjZEh5VHlwZUlkOiAnJywgICAgICAgICAgICAgLy/ooYzkuJppZFxyXG5cclxuICAgIC8v5om+5pyN5YqhXHJcbiAgICBmd1NlYXJjaEluZm9TaG93OiBmYWxzZSwgICAgLy/mmL7npLov6ZqQ6JePXHJcbiAgICBmd0NhdGVnb3J5SW5kZXg6IDAsICAgICAgICAgLy/lvZPliY3ntKLlvJXvvIjmnI3liqHnsbvliKvvvIlcclxuICAgIGZ3Q2F0ZWdvcnlJZDogbnVsbCwgICAgICAgICAvL+mAieS4reeahGlk77yI5pyN5Yqh57G75Yir77yJXHJcbiAgICBmd0luZHVzdHJ5SW5kZXg6IDAsICAgICAgICAgLy/lvZPliY3ntKLlvJXvvIjooYzkuJrkuqfkuJrvvIlcclxuICAgIGZ3SW5kdXN0cnlJZDogbnVsbCwgICAgICAgICAvL+mAieS4reeahGlk77yI6KGM5Lia5Lqn5Lia77yJXHJcblxyXG4gICAgZndUeXBlQ2xhc3M6IG51bGwsICAgICAgICAgIC8v5Y2V5L2N57G75Z6LXHJcbiAgICBmd1NjYWxlQ2xhc3M6IG51bGwsICAgICAgICAgLy/ljZXkvY3op4TmqKFcclxuXHJcbiAgICBmd1R5cGVPbmVJZDogJycsICAgICAgICAgICAgLy/mnI3liqHnsbvliKvkuIDnuqfoj5zljZVcclxuICAgIGZ3VHlwZVR3b0lkOiAnJywgICAgICAgICAgICAvL+acjeWKoeexu+WIq+S6jOe6p+iPnOWNlVxyXG4gICAgZndEd1N0YXR1c0lkOiAnJywgICAgICAgICAgIC8v5Y2V5L2N57G75Z6LaWRcclxuICAgIGZ3RHdTY2FsZUlkOiAnJywgICAgICAgICAgICAvL+WNleS9jeinhOaooWlkXHJcbiAgICBmd0N5VHlwZUlkOiAnJywgICAgICAgICAgICAgLy/kuqfkuJppZFxyXG4gICAgZndIeVR5cGVJZDogJycsICAgICAgICAgICAgIC8v6KGM5LiaaWRcclxuXHJcblxyXG4gICAgLy/lnLDlm75cclxuICAgIGxvbmdpdHVkZTogJycsICAgICAgICAgICAgLy/kuK3lv4Pnu4/luqZcclxuICAgIGxhdGl0dWRlOiAnJywgICAgICAgICAgICAgLy/kuK3lv4PnuqzluqZcclxuICAgIHNjYWxlOiAxMiwgICAgICAgICAgICAgICAgLy/nvKnmlL7nuqfliKvvvIzlj5blgLzojIPlm7TkuLozLTIwXHJcbiAgICBtYXJrZXJzOltdLCAgICAgICAgICAgICAgIC8v5qCH6K6w54K55aSE55CG5ZCO55qE5pWw5o2u77yIaWTjgIHmn6Xor6Lkvb/nlKjvvIlcclxuICAgIG1hcmtlcnNPYmo6e30sICAgICAgICAgICAgLy/mn6Xor6LnmoTljZXmnaHmlbDmja5cclxuICAgIC8v5omA5Lul5qCH54K55pWw5o2uXHJcbiAgICBjeFBsYXRmb3JtTW9kZWxzOiBbXSwgICAgIC8v5Yib5Lia5bmz5Y+wXHJcbiAgICBjeVBsYXRmb3JtTW9kZWxzOiBbXSwgICAgIC8v5Yib5paw5bmz5Y+wXHJcbiAgICBwcm9Nb2RlbHM6IFtdLCAgICAgICAgICAgIC8v5om+6aG555uuXHJcbiAgICBmd2pnTW9kZWxzOiBbXSwgICAgICAgICAgIC8v5om+5pyN5Yqh5py65p6EXHJcbiAgICB2ZWN0b3JNb2RlbHM6IFtdLCAgICAgICAgIC8v5om+5Zy65ZywXHJcbiAgICBqcmpnTWRvZWxzOiBbXSwgICAgICAgICAgIC8v5om+6YeR6J6N5py65p6EXHJcbiAgICB0ek1vZGVsczogW10sICAgICAgICAgICAgIC8v5om+5oqV6LWE6ZyA5rGCXHJcbiAgICByb25nemlQcm9zOiBbXSwgICAgICAgICAgIC8v5om+6J6N6LWE6ZyA5rGC77yI6aG555uu5bqT55qE6J6N6LWEN+mhue+8iVxyXG4gICAgcm9uZ3ppTmVlZHM6IFtdLCAgICAgICAgICAvL+aJvuiejei1hOmcgOaxgu+8iOmcgOaxguW6k+eahOiejei1hDfpobnvvIlcclxuICAgIC8v5a+86IiqXHJcbiAgICBnb05hbWU6JycsICAgICAgICAgICAgICAgIC8v6KaB5Y6755qE5Zyw5Z2AXHJcbiAgICBnb0xvbmdpdHVkZTogJycsICAgICAgICAgIC8v5Lit5b+D57uP5bqmKOe7iOeCuSlcclxuICAgIGdvTGF0aXR1ZGU6ICcnLCAgICAgICAgICAgLy/kuK3lv4PnuqzluqYo57uI54K5KVxyXG4gIH0sXHJcblxyXG4gIHB0VHlwZXMoKTp2b2lkeyAgLy/nsbvlnotcclxuICAgIGh0dHBzLnN1Y2Nlc3NSZXF1ZXN0KGFwaS5zdWJtZW51RGljICsgJz9tb2lkPTInLCBudWxsLCAnR0VUJylcclxuICAgIC50aGVuKChyZXM6YW55KTp2b2lkPT57XHJcbiAgICAgIGlmKHJlcyl7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIHR5cGVMaXN0OiByZXMudmFsXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIGluZHVzdHJ5KCk6dm9pZHsgIC8v5Lqn5LiaL+ihjOS4mlxyXG4gICAgaHR0cHMuc3VjY2Vzc1JlcXVlc3QoYXBpLnN1Ym1lbnVEaWMgKyAnP21vaWQ9NycsIG51bGwsICdHRVQnKVxyXG4gICAgLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgaWYocmVzKXtcclxuICAgICAgICBsZXQgYXJyOmFueSA9IHJlcy52YWwubWFwKChpdGVtOmFueSk6YW55PT57XHJcbiAgICAgICAgICBsZXQgY2hpbGRyZW46YW55ID0gaXRlbS5jaGlsZHJlbi5tYXAoKGl0ZW0yOmFueSk6YW55PT57XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgdGV4dDogaXRlbTIuZGljTmFtZSxcclxuICAgICAgICAgICAgICBpZDogaXRlbTIuaWQsXHJcbiAgICAgICAgICAgICAgcElkOiBpdGVtMi5wSWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIGNoaWxkcmVuLnVuc2hpZnQoe1xyXG4gICAgICAgICAgICB0ZXh0OiAn5YWo6YOoJyxcclxuICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgIHBJZDogaXRlbS5pZCxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdGV4dDogaXRlbS5kaWNOYW1lLFxyXG4gICAgICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW5cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBpbmR1c3RyeUxpc3Q6IGFyclxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICB4bVN0YWdlKCk6dm9pZHsgIC8v5omA5aSE6Zi25q61XHJcbiAgICBodHRwcy5zdWNjZXNzUmVxdWVzdChhcGkuc3VibWVudURpYyArICc/bW9pZD00MCcsIG51bGwsICdHRVQnKVxyXG4gICAgLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgaWYocmVzKXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgeG1TdGFnZUxpc3Q6IHJlcy52YWxcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICB4bUNhdGVnb3J5KCk6dm9pZHsgIC8v6ZyA5rGC57G75YirXHJcbiAgICBodHRwcy5zdWNjZXNzUmVxdWVzdChhcGkuc3VibWVudURpYyArICc/bW9pZD00MScsIG51bGwsICdHRVQnKVxyXG4gICAgLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgaWYocmVzKXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgeG1DYXRlZ29yeUxpc3Q6IHJlcy52YWxcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICB4bUZpbmFuY2luZygpOnZvaWR7ICAvL+iejei1hOmHkeminVxyXG4gICAgaHR0cHMuc3VjY2Vzc1JlcXVlc3QoYXBpLnN1Ym1lbnVEaWMgKyAnP21vaWQ9NTUnLCBudWxsLCAnR0VUJylcclxuICAgIC50aGVuKChyZXM6YW55KTp2b2lkPT57XHJcbiAgICAgIGlmKHJlcyl7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIHhtRmluYW5jaW5nTGlzdDogcmVzLnZhbFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBjZENhcnJpZXIoKTp2b2lkeyAgLy/otYTmupDnsbvlnotcclxuICAgIGh0dHBzLnN1Y2Nlc3NSZXF1ZXN0KGFwaS5zdWJtZW51RGljICsgJz9tb2lkPTE1JywgbnVsbCwgJ0dFVCcpXHJcbiAgICAudGhlbigocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICBpZihyZXMpe1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBjZENhcnJpZXJMaXN0OiByZXMudmFsXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgZndDYXRlZ29yeSgpOnZvaWR7ICAvL+acjeWKoeexu+WIq1xyXG4gICAgaHR0cHMuc3VjY2Vzc1JlcXVlc3QoYXBpLnN1Ym1lbnVEaWMgKyAnP21vaWQ9MTMnLCBudWxsLCAnR0VUJylcclxuICAgIC50aGVuKChyZXM6YW55KTp2b2lkPT57XHJcbiAgICAgIGlmKHJlcyl7XHJcbiAgICAgICAgbGV0IGFycjphbnkgPSByZXMudmFsLm1hcCgoaXRlbTphbnkpOmFueT0+e1xyXG4gICAgICAgICAgbGV0IGNoaWxkcmVuOmFueSA9IGl0ZW0uY2hpbGRyZW4ubWFwKChpdGVtMjphbnkpOmFueT0+e1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIHRleHQ6IGl0ZW0yLmRpY05hbWUsXHJcbiAgICAgICAgICAgICAgaWQ6IGl0ZW0yLmlkLFxyXG4gICAgICAgICAgICAgIHBJZDogaXRlbTIucElkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBjaGlsZHJlbi51bnNoaWZ0KHtcclxuICAgICAgICAgICAgdGV4dDogJ+WFqOmDqCcsXHJcbiAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICBwSWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHRleHQ6IGl0ZW0uZGljTmFtZSxcclxuICAgICAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgZndDYXRlZ29yeUxpc3Q6IGFyclxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIGZ3VHlwZSgpOnZvaWR7ICAvL+WNleS9jeexu+Wei1xyXG4gICAgaHR0cHMuc3VjY2Vzc1JlcXVlc3QoYXBpLnN1Ym1lbnVEaWMgKyAnP21vaWQ9MTgnLCBudWxsLCAnR0VUJylcclxuICAgIC50aGVuKChyZXM6YW55KTp2b2lkPT57XHJcbiAgICAgIGlmKHJlcyl7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIGZ3VHlwZUxpc3Q6IHJlcy52YWxcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBmd1NjYWxlKCk6dm9pZHsgIC8v5Y2V5L2N6KeE5qihXHJcbiAgICBodHRwcy5zdWNjZXNzUmVxdWVzdChhcGkuc3VibWVudURpYyArICc/bW9pZD0yMScsIG51bGwsICdHRVQnKVxyXG4gICAgLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgaWYocmVzKXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgZndTY2FsZUxpc3Q6IHJlcy52YWxcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgcnpXYXkoKTp2b2lkeyAgLy/ono3otYTmlrnlvI9cclxuICAgIGh0dHBzLnN1Y2Nlc3NSZXF1ZXN0KGFwaS5zdWJtZW51RGljICsgJz9tb2lkPTU4JywgbnVsbCwgJ0dFVCcpXHJcbiAgICAudGhlbigocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICBpZihyZXMpe1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICByeldheUxpc3Q6IHJlcy52YWxcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgdHpBcmVhKCk6dm9pZHsgIC8v5oqV6LWE5Yy65Z+fXHJcbiAgICBodHRwcy5zdWNjZXNzUmVxdWVzdChhcGkudGVuYW50cywgbnVsbCwgJ0dFVCcpXHJcbiAgICAudGhlbigocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICBpZihyZXMpe1xyXG4gICAgICAgIGxldCBsaXN0OmFueSA9IHJlcy5saXN0Lm1hcCgoaXRlbTphbnkpOmFueT0+e1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZGljTmFtZTogaXRlbS5tb2RlbC5jbmFtZSxcclxuICAgICAgICAgICAgaWQ6IGl0ZW0ubW9kZWwuaWRcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICB0ekFyZWFMaXN0OiBsaXN0XHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSwoZXJyOmFueSk9PntcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICB0eldheSgpOnZvaWR7ICAvL+aKlei1hOaWueW8j1xyXG4gICAgaHR0cHMuc3VjY2Vzc1JlcXVlc3QoYXBpLnN1Ym1lbnVEaWMgKyAnP21vaWQ9NTYnLCBudWxsLCAnR0VUJylcclxuICAgIC50aGVuKChyZXM6YW55KTp2b2lkPT57XHJcbiAgICAgIGlmKHJlcyl7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIHR6V2F5TGlzdDogcmVzLnZhbFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICB0ek90aGVyKCk6dm9pZHsgIC8v5oqV6LWE6YeR6aKdXHJcbiAgICBodHRwcy5zdWNjZXNzUmVxdWVzdChhcGkuc3VibWVudURpYyArICc/bW9pZD01NScsIG51bGwsICdHRVQnKVxyXG4gICAgLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgaWYocmVzKXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgdHpPdGhlckxpc3Q6IHJlcy52YWxcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgdHpUeXBlKCk6dm9pZHsgIC8v6LWE6YeR57G75Z6LXHJcbiAgICBodHRwcy5zdWNjZXNzUmVxdWVzdChhcGkuc3VibWVudURpYyArICc/bW9pZD00MicsIG51bGwsICdHRVQnKVxyXG4gICAgLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgaWYocmVzKXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgdHpUeXBlTGlzdDogcmVzLnZhbFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuXHJcbiAgLy/mkJzntKLmjInpkq7op6blj5FcclxuICBzZWFyY2hCbHVyKGV2ZW50OmFueSk6dm9pZHtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHNlYXJjaEtleTogZXZlbnQuZGV0YWlsLnZhbHVlLCAgICAgLy/mma7pgJrmkJzntKJcclxuICAgICAgcGFnZVNpemU6IDEwLCAgICAgICAgICAgICAgICAgICAgICAvL+avj+mhteaYvuekuuaVsOmHj1xyXG4gICAgICBwYWdlSW5kZXg6IDEsICAgICAgICAgICAgICAgICAgICAgIC8v5b2T5YmN6aG1XHJcbiAgICAgIHRvdGFsOiAwLCAgICAgICAgICAgICAgICAgICAgICAgICAgLy/mgLvmnaHmlbBcclxuICAgICAgbWFya2VyczogW10sICAgICAgICAgICAgICAgICAgICAgICAvL+agh+iusOaAu+aVsFxyXG4gICAgICBudW06IDAsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLzbmib7nu5PmnpxcclxuICAgICAgbXVtTGlzdDogW10sICAgICAgICAgICAgICAgICAgICAgICAgLy825om+5YiX6KGoXHJcbiAgICB9KVxyXG4gICAgdGhpcy5nZXRBbGxQcm8oKTsgICAgICAgICAgICAgICAgICAgICAvLzbmib7lhajpg6jlubPlj7Dnu5/orqFcclxuICB9LFxyXG5cclxuICAvL+aQnOe0ouWIl+ihqOaYvuekulxyXG4gIHNlYXJjaEluZm9PcGVuKCk6dm9pZHtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGlzTGlzdFNob3c6IGZhbHNlLCAgICAgICAgICAvL+m7mOiupOaYvuekujbmib7lhoXlrrlcclxuICAgICAgaXNJbmZvU2hvdzogZmFsc2UsICAgICAgICAgLy/ljZXmnaHkv6Hmga/mmL7npLpcclxuICAgICAgaXNTZWFyY2hTaG93OiBmYWxzZSwgICAgICAgLy/mkJzntKLnu5PmnpzmlbDmja5cclxuICAgICAgaXNTZWFyY2hJbmZvU2hvdzogdHJ1ZSwgICAvL+aQnOe0ouWIl+ihqOaVsOaNrlxyXG4gICAgfSlcclxuICB9LFxyXG4gICAvL+aQnOe0ouWIl+ihqOWFs+mXrVxyXG4gICBzZWFyY2hJbmZvQ2xvc2UoKTp2b2lke1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgaXNMaXN0U2hvdzogZmFsc2UsICAgICAgICAgIC8v6buY6K6k5pi+56S6NuaJvuWGheWuuVxyXG4gICAgICBpc0luZm9TaG93OiBmYWxzZSwgICAgICAgICAgLy/ljZXmnaHkv6Hmga/mmL7npLpcclxuICAgICAgaXNTZWFyY2hTaG93OiB0cnVlLCAgICAgICAgIC8v5pCc57Si57uT5p6c5pWw5o2uXHJcbiAgICAgIGlzU2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgICAvL+aQnOe0ouWIl+ihqOaVsOaNrlxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuXHJcbiAgLy/mkJzntKLnu5PmnpzlhbPpl61cclxuICBzZWFyY2hDbG9zZSgpOnZvaWR7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBtYXJrZXJzOiBbXSwgICAgICAgICAgICAgICAvL+a4heepulxyXG4gICAgICBudW06IDAsICAgICAgICAgICAgICAgICAgICAvLzbmib7nu5PmnpxcclxuICAgICAgbXVtTGlzdDogW10sICAgICAgICAgICAgICAgLy825om+5YiX6KGoXHJcbiAgICAgIGlzTGlzdFNob3c6IHRydWUsICAgICAgICAgIC8v6buY6K6k5pi+56S6NuaJvuWGheWuuVxyXG4gICAgICBpc0luZm9TaG93OiBmYWxzZSwgICAgICAgICAvL+WNleadoeS/oeaBr+aYvuekulxyXG4gICAgICBpc1NlYXJjaFNob3c6IGZhbHNlLCAgICAgICAvL+aQnOe0oue7k+aenOaVsOaNrlxyXG4gICAgICBpc1NlYXJjaEluZm9TaG93OiBmYWxzZSwgICAvL+aQnOe0ouWIl+ihqOaVsOaNrlxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICBoaWRlRm4oKTp2b2lkeyAgICAgICAvL+mcgOimgemakOiXj+eahOWFg+e0oFxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgcGFnZVNpemU6IDEwLCAgICAgICAgICAgICAvL+avj+mhteaYvuekuuaVsOmHj1xyXG4gICAgICBwYWdlSW5kZXg6IDEsICAgICAgICAgICAgIC8v5b2T5YmN6aG1XHJcbiAgICAgIHRvdGFsOiAwLCAgICAgICAgICAgICAgICAgLy/mgLvmnaHmlbBcclxuXHJcbiAgICAgIG1hcmtlcnM6IFtdLCAgICAgICAgICAgICAgLy/moIforrDmgLvmlbBcclxuICAgICAgXHJcbiAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICBtdW1MaXN0OiBbXSwgICAgICAgICAgICAgICAvLzbmib7liJfooahcclxuICAgICAgc2VhcmNoS2V5OiAnJywgICAgICAgICAgICAgLy/lhbPplK7lrZfmkJzntKJcclxuXHJcbiAgICAgIGlzTGlzdFNob3c6IGZhbHNlLCAgICAgICAgIC8v6buY6K6k5pi+56S6NuaJvuWGheWuuVxyXG4gICAgICBpc0luZm9TaG93OiBmYWxzZSwgICAgICAgICAvL+WNleadoeS/oeaBr+aYvuekulxyXG4gICAgICBpc1NlYXJjaFNob3c6IGZhbHNlLCAgICAgICAvL+aQnOe0oue7k+aenOaVsOaNrlxyXG4gICAgICBpc1NlYXJjaEluZm9TaG93OiBmYWxzZSwgICAvL+aQnOe0ouWIl+ihqOaVsOaNrlxyXG5cclxuICAgICAgcHRTZWFyY2hJbmZvU2hvdzogZmFsc2UsICAgIC8v5bmz5Y+w5YWo6YOo5oyJ6ZKuXHJcbiAgICAgIHB0QnRuU2hvdzogZmFsc2UsICAgICAgICAgICAvL+W5s+WPsOmrmOe6p+aQnOe0oumakOiXj1xyXG4gICAgICBwcm9TZWFyY2hJbmZvU2hvdzogZmFsc2UsICAgLy/pobnnm67pq5jnuqfmkJzntKJcclxuXHJcbiAgICAgIHpqU2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgIC8v6LWE6YeR5YWo6YOo5oyJ6ZKuXHJcbiAgICAgIGpyU2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgIC8v5om+6LWE6YeR77yI6YeR6J6N5pyN5Yqh77yJXHJcbiAgICAgIHR6U2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgIC8v5om+6LWE6YeR77yI5om+5oqV6LWE77yJXHJcbiAgICAgIHJ6U2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgIC8v5om+6LWE6YeR77yI5om+6J6N6LWE77yJXHJcbiAgICAgIFxyXG4gICAgICBjZFNlYXJjaEluZm9TaG93OiBmYWxzZSwgICAvL+WcuuWcsOmrmOe6p+aQnOe0olxyXG4gICAgICBmd1NlYXJjaEluZm9TaG93OiBmYWxzZSwgICAvL+acjeWKoemrmOe6p+aQnOe0olxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuXHJcbiAgLy/mib7lubPlj7BcclxuICBwdEZuKCk6dm9pZHsgICAgICAgICAgICAgICAgICAgLy825om+5bmz5Y+w6Kem5Y+RXHJcbiAgICB0aGlzLmhpZGVGbigpOyAgICAgICAgICAgICAgIC8v6ZyA6KaB6ZqQ6JeP55qE5YWD57SgXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBmbGFnOiAnYWxsUHQnLCAgICAgICAgICAgICAvL+W9k+WJjeWIl+ihqFxyXG4gICAgICBpc1NlYXJjaFNob3c6IHRydWUsICAgICAgICAvL+aQnOe0oue7k+aenOaVsOaNrlxyXG4gICAgICBwdFNlYXJjaEluZm9TaG93OiB0cnVlLCAgICAvL+W5s+WPsOWFqOmDqOaMiemSrlxyXG4gICAgfSlcclxuICAgIHRoaXMuZ2V0QWxsUHJvKCk7ICAgICAgICAgICAgICAvLzbmib7lhajpg6jlubPlj7Dnu5/orqFcclxuICB9LFxyXG4gIGdldEFsbFBybygpOnZvaWR7ICAgICAgICAgICAgICAgLy825om+5YWo6YOo5bmz5Y+w57uf6K6hXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBtb3JlU2hvdzogZmFsc2UsXHJcbiAgICB9KVxyXG4gICAgaHR0cHMuc3VjY2Vzc1JlcXVlc3QoYXBpLmFsbFBsYXRmb3JtLCB7XHJcbiAgICAgIHRlbmFudElkOiBhcGkuYXJlYUlkLCAgICAgICAgICAgICAvL+WcsOWMumlkXHJcbiAgICAgIGtleTogdGhpcy5kYXRhLnNlYXJjaEtleSwgICAgICAgICAvL+WFs+mUruWtl+aQnOe0olxyXG4gICAgICBwYWdlU2l6ZTogdGhpcy5kYXRhLnBhZ2VTaXplLCAgICAgLy/mr4/pobXmmL7npLrmlbDph49cclxuICAgICAgcGFnZUluZGV4OiB0aGlzLmRhdGEucGFnZUluZGV4LCAgIC8v6aG15pWwXHJcbiAgICB9LCAnR0VUJykudGhlbigocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICBpZihyZXMpe1xyXG4gICAgICAgIC8v5Yib5paw5bmz5Y+wXHJcbiAgICAgICAgbGV0IGN4UGxhdGZvcm1Nb2RlbHNMaXN0OmFueSA9IHJlcy52YWwuY3hQbGF0Zm9ybU1vZGVscy5tYXAoKGl0ZW06YW55KTphbnk9PntcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiAn5Yib5pawJywgICAgICAgICAgLy/or6bmg4XliKTmlq1cclxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBpdGVtLmxuZywgICAvL+e7j+W6plxyXG4gICAgICAgICAgICBsYXRpdHVkZTogaXRlbS5sYXQsICAgIC8v57qs5bqmXHJcbiAgICAgICAgICAgIGljb25QYXRoOiAnLi4vLi4vaW1hZ2VzL2N4LnBuZycsICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIHdpZHRoOiAyNyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNSxcclxuICAgICAgICAgICAgY2FsbG91dDoge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IGl0ZW0ucHROYW1lP2l0ZW0ucHROYW1lOifmnKrloavmiqUnLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IDE0LFxyXG4gICAgICAgICAgICAgIGJnQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1LFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNDQ0MnLFxyXG4gICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdCWUNMSUNLJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwcm92aW5jZU5hbWU6IGl0ZW0ucHJvdmluY2VOYW1lP2l0ZW0ucHJvdmluY2VOYW1lOicnLCAgICAgLy/nnIFcclxuICAgICAgICAgICAgY2l0eU5hbWU6IGl0ZW0uY2l0eU5hbWU/aXRlbS5jaXR5TmFtZTonJywgICAgICAgICAgICAgICAgIC8v5biCXHJcbiAgICAgICAgICAgIGRpc3RyaWN0TmFtZTogaXRlbS5kaXN0cmljdE5hbWU/aXRlbS5kaXN0cmljdE5hbWU6JycgICAgICAvL+WMulxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8v5Yib5Lia5bmz5Y+wXHJcbiAgICAgICAgbGV0IGN5UGxhdGZvcm1Nb2RlbHNMaXN0OmFueSA9IHJlcy52YWwuY3lQbGF0Zm9ybU1vZGVscy5tYXAoKGl0ZW06YW55KTphbnk9PntcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiAn5Yib5LiaJywgICAgICAgICAgLy/or6bmg4XliKTmlq1cclxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBpdGVtLmxuZywgICAvL+e7j+W6plxyXG4gICAgICAgICAgICBsYXRpdHVkZTogaXRlbS5sYXQsICAgIC8v57qs5bqmXHJcbiAgICAgICAgICAgIGljb25QYXRoOiAnLi4vLi4vaW1hZ2VzL2N5LnBuZycsICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIHdpZHRoOiAyNyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNSxcclxuICAgICAgICAgICAgY2FsbG91dDoge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IGl0ZW0uY3lOYW1lP2l0ZW0uY3lOYW1lOifmnKrloavmiqUnLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IDE4LFxyXG4gICAgICAgICAgICAgIGJnQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1LFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNDQ0MnLFxyXG4gICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdCWUNMSUNLJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwcm92aW5jZU5hbWU6IGl0ZW0ucHJvdmluY2VOYW1lP2l0ZW0ucHJvdmluY2VOYW1lOicnLCAgICAgLy/nnIFcclxuICAgICAgICAgICAgY2l0eU5hbWU6IGl0ZW0uY2l0eU5hbWU/aXRlbS5jaXR5TmFtZTonJywgICAgICAgICAgICAgICAgIC8v5biCXHJcbiAgICAgICAgICAgIGRpc3RyaWN0TmFtZTogaXRlbS5kaXN0cmljdE5hbWU/aXRlbS5kaXN0cmljdE5hbWU6JycgICAgICAvL+WMulxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8v5aSE55CGSUTkuLrmlbDlrZdcclxuICAgICAgICBsZXQgbWFya2Vyc0xpc3Q6YW55ICA9IGN4UGxhdGZvcm1Nb2RlbHNMaXN0LmNvbmNhdChjeVBsYXRmb3JtTW9kZWxzTGlzdCk7XHJcbiAgICAgICAgbGV0IG5ld01hcmtlcnNMaXN0OmFueSA9IG1hcmtlcnNMaXN0Lm1hcCgoaXRlbTphbnksIGluZGV4Om51bWJlcik6YW55PT57XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogaW5kZXgsICAgICAgICAgICAgICAgICAgIC8vbWFw55So55qE6Ieq5a6a5LmJSURcclxuICAgICAgICAgICAgbmFtZTogaXRlbS5uYW1lLCAgICAgICAgICAgICAvL+ivpuaDheWIpOaWrVxyXG4gICAgICAgICAgICBsb25naXR1ZGU6IGl0ZW0ubG9uZ2l0dWRlLCAgIC8v57uP5bqmXHJcbiAgICAgICAgICAgIGxhdGl0dWRlOiBpdGVtLmxhdGl0dWRlLCAgICAgLy/nuqzluqZcclxuICAgICAgICAgICAgaWNvblBhdGg6IGl0ZW0uaWNvblBhdGgsICAgICAvL+agh+iusFxyXG4gICAgICAgICAgICB3aWR0aDogMjcsXHJcbiAgICAgICAgICAgIGhlaWdodDogMzUsXHJcbiAgICAgICAgICAgIGNhbGxvdXQ6IGl0ZW0uY2FsbG91dCxcclxuICAgICAgICAgICAgb2xkSWQ6IGl0ZW0uaWQsICAgICAgICAgICAgICAgICAgICAgIC8v5Y6f5aeLSURcclxuICAgICAgICAgICAgdGl0bGU6IGl0ZW0uY2FsbG91dC5jb250ZW50LCAgICAgICAgIC8v5qCH6aKYXHJcbiAgICAgICAgICAgIHByb3ZpbmNlTmFtZTogaXRlbS5wcm92aW5jZU5hbWUsICAgICAvL+ecgVxyXG4gICAgICAgICAgICBjaXR5TmFtZTogaXRlbS5jaXR5TmFtZSwgICAgICAgICAgICAgLy/luIJcclxuICAgICAgICAgICAgZGlzdHJpY3ROYW1lOiBpdGVtLmRpc3RyaWN0TmFtZSAgICAgIC8v5Yy6XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYodGhpcy5kYXRhLnRvdGFsID09IDApe1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgbWFya2VyczogbmV3TWFya2Vyc0xpc3QsICAgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgdG90YWw6IHJlcy52YWwudG90YWwsICAgICAgICAgICAgICAgICAgLy/mgLvmlbBcclxuICAgICAgICAgICAgbXVtTGlzdDogbmV3TWFya2Vyc0xpc3QsICAgICAgICAgICAgICAgLy/liJfooahcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBtYXJrZXJzOiB0aGlzLmRhdGEubWFya2Vycy5jb25jYXQobmV3TWFya2Vyc0xpc3QpLCAgICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIG11bUxpc3Q6IHRoaXMuZGF0YS5tdW1MaXN0LmNvbmNhdChuZXdNYXJrZXJzTGlzdCksICAgICAgICAgICAgICAgLy/liJfooahcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLmRhdGEubXVtTGlzdC5sZW5ndGggPCByZXMudmFsLnRvdGFsKXtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIG1vcmVTaG93OiB0cnVlLFxyXG4gICAgICAgICAgICBtb3JlVGl0bGU6ICfngrnlh7vliqDovb3mm7TlpJonLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIG1vcmVTaG93OiB0cnVlLFxyXG4gICAgICAgICAgICBtb3JlVGl0bGU6ICflt7LliqDovb3lhajpg6gnLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIGdldEN4UHJvKCk6dm9pZHsgICAgICAgICAgICAgICAvLzbmib7liJvmlrDlubPlj7Dnu5/orqFcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIG1vcmVTaG93OiBmYWxzZSxcclxuICAgIH0pXHJcbiAgICBodHRwcy5zdWNjZXNzUmVxdWVzdChhcGkuY3hQbGF0Zm9ybVVzZXIsIHtcclxuICAgICAgdGVuYW50SWQ6IGFwaS5hcmVhSWQsICAgICAgICAgICAgIC8v5Zyw5Yy6aWRcclxuICAgICAga2V5OiB0aGlzLmRhdGEuc2VhcmNoS2V5LCAgICAgICAgIC8v5YWz6ZSu5a2X5pCc57SiXHJcbiAgICAgIHBhZ2VTaXplOiB0aGlzLmRhdGEucGFnZVNpemUsICAgICAvL+avj+mhteaYvuekuuaVsOmHj1xyXG4gICAgICBwYWdlSW5kZXg6IHRoaXMuZGF0YS5wYWdlSW5kZXgsICAgLy/pobXmlbBcclxuICAgICAgdHlwZUlkOiB0aGlzLmRhdGEucHRUeXBlSWQsICAgICAgIC8v5bmz5Y+w57G75Z6LaWRcclxuICAgICAgemlaaGk6IHRoaXMuZGF0YS5wdFppWmhpLCAgICAgICAgIC8v5bmz5Y+w6LWE6LSoaWRcclxuICAgICAgY3lUeXBlSWQ6IHRoaXMuZGF0YS5wdEN5VHlwZUlkLCAgIC8v5Lqn5LiaaWRcclxuICAgICAgaHlUeXBlSWQ6IHRoaXMuZGF0YS5wdEh5VHlwZUlkICAgIC8v6KGM5LiaaWRcclxuICAgIH0sICdHRVQnKS50aGVuKChyZXM6YW55KTp2b2lkPT57XHJcbiAgICAgIGlmKHJlcyl7XHJcbiAgICAgICAgbGV0IG5ld01hcmtlcnNMaXN0OmFueSA9IHJlcy5saXN0Lm1hcCgoaXRlbTphbnksIGluZGV4Om51bWJlcik6YW55PT57XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogaW5kZXgsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL21hcOeUqOeahOiHquWumuS5iUlEXHJcbiAgICAgICAgICAgIG5hbWU6ICfliJvmlrAnLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6K+m5oOF5Yik5patXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZTogaXRlbS5sbmcsICAgICAgICAgICAgICAgICAgICAgICAgIC8v57uP5bqmXHJcbiAgICAgICAgICAgIGxhdGl0dWRlOiBpdGVtLmxhdCwgICAgICAgICAgICAgICAgICAgICAgICAgIC8v57qs5bqmXHJcbiAgICAgICAgICAgIGljb25QYXRoOiAnLi4vLi4vaW1hZ2VzL2N4LnBuZycsICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIHdpZHRoOiAyNyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNSxcclxuICAgICAgICAgICAgY2FsbG91dDoge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IGl0ZW0ucHROYW1lP2l0ZW0ucHROYW1lOifmnKrloavmiqUnLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IDE4LFxyXG4gICAgICAgICAgICAgIGJnQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1LFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNDQ0MnLFxyXG4gICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdCWUNMSUNLJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbGRJZDogaXRlbS5pZCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WOn+Wni0lEXHJcbiAgICAgICAgICAgIHRpdGxlOiBpdGVtLnB0TmFtZT9pdGVtLnB0TmFtZTon5pyq5aGr5oqlJywgICAgICAgICAgICAgICAgICAvL+agh+mimFxyXG4gICAgICAgICAgICBwcm92aW5jZU5hbWU6IGl0ZW0ucHJvdmluY2VOYW1lP2l0ZW0ucHJvdmluY2VOYW1lOicnLCAgICAgLy/nnIFcclxuICAgICAgICAgICAgY2l0eU5hbWU6IGl0ZW0uY2l0eU5hbWU/aXRlbS5jaXR5TmFtZTonJywgICAgICAgICAgICAgICAgIC8v5biCXHJcbiAgICAgICAgICAgIGRpc3RyaWN0TmFtZTogaXRlbS5kaXN0cmljdE5hbWU/aXRlbS5kaXN0cmljdE5hbWU6JycgICAgICAvL+WMulxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmKHRoaXMuZGF0YS50b3RhbCA9PSAwKXtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIG1hcmtlcnM6IG5ld01hcmtlcnNMaXN0LCAgICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIHRvdGFsOiByZXMudG90YWwsICAgICAgICAgICAgICAgICAgLy/mgLvmlbBcclxuICAgICAgICAgICAgbXVtTGlzdDogbmV3TWFya2Vyc0xpc3QsICAgICAgICAgICAgICAgIC8v5YiX6KGoXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgbWFya2VyczogdGhpcy5kYXRhLm1hcmtlcnMuY29uY2F0KG5ld01hcmtlcnNMaXN0KSwgICAgICAgICAgICAgICAvL+agh+iusFxyXG4gICAgICAgICAgICBtdW1MaXN0OiB0aGlzLmRhdGEubXVtTGlzdC5jb25jYXQobmV3TWFya2Vyc0xpc3QpLCAgICAgICAgICAgICAgICAvL+WIl+ihqFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5kYXRhLm11bUxpc3QubGVuZ3RoIDwgcmVzLnRvdGFsKXtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIG1vcmVTaG93OiB0cnVlLFxyXG4gICAgICAgICAgICBtb3JlVGl0bGU6ICfngrnlh7vliqDovb3mm7TlpJonLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIG1vcmVTaG93OiB0cnVlLFxyXG4gICAgICAgICAgICBtb3JlVGl0bGU6ICflt7LliqDovb3lhajpg6gnLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIGdldEN5UHJvKCk6dm9pZHsgICAgICAgICAgICAgICAvLzbmib7liJvkuJrlubPlj7Dnu5/orqFcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIG1vcmVTaG93OiBmYWxzZSxcclxuICAgIH0pXHJcbiAgICBodHRwcy5zdWNjZXNzUmVxdWVzdChhcGkuY3lQbGF0VXNlciwge1xyXG4gICAgICB0ZW5hbnRJZDogYXBpLmFyZWFJZCwgICAgICAgICAgICAgLy/lnLDljLppZFxyXG4gICAgICBrZXk6IHRoaXMuZGF0YS5zZWFyY2hLZXksICAgICAgICAgLy/lhbPplK7lrZfmkJzntKJcclxuICAgICAgcGFnZVNpemU6IHRoaXMuZGF0YS5wYWdlU2l6ZSwgICAgIC8v5q+P6aG15pi+56S65pWw6YePXHJcbiAgICAgIHBhZ2VJbmRleDogdGhpcy5kYXRhLnBhZ2VJbmRleCwgICAvL+mhteaVsFxyXG4gICAgICB0eXBlSWQ6IHRoaXMuZGF0YS5wdFR5cGVJZCwgICAgICAgLy/lubPlj7DnsbvlnotpZFxyXG4gICAgICB6aVpoaTogdGhpcy5kYXRhLnB0WmlaaGksICAgICAgICAgLy/lubPlj7DotYTotKhpZFxyXG4gICAgICBjeVR5cGVJZDogdGhpcy5kYXRhLnB0Q3lUeXBlSWQsICAgLy/kuqfkuJppZFxyXG4gICAgICBoeVR5cGVJZDogdGhpcy5kYXRhLnB0SHlUeXBlSWQgICAgLy/ooYzkuJppZFxyXG4gICAgfSwgJ0dFVCcpLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgaWYocmVzKXtcclxuICAgICAgICBsZXQgbmV3TWFya2Vyc0xpc3Q6YW55ID0gcmVzLmxpc3QubWFwKChpdGVtOmFueSwgaW5kZXg6bnVtYmVyKTphbnk9PntcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBpbmRleCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vbWFw55So55qE6Ieq5a6a5LmJSURcclxuICAgICAgICAgICAgbmFtZTogJ+WIm+S4micsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/or6bmg4XliKTmlq1cclxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBpdGVtLmxuZywgICAgICAgICAgICAgICAgICAgICAgICAgLy/nu4/luqZcclxuICAgICAgICAgICAgbGF0aXR1ZGU6IGl0ZW0ubGF0LCAgICAgICAgICAgICAgICAgICAgICAgICAgLy/nuqzluqZcclxuICAgICAgICAgICAgaWNvblBhdGg6ICcuLi8uLi9pbWFnZXMvY3kucG5nJywgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgd2lkdGg6IDI3LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1LFxyXG4gICAgICAgICAgICBjYWxsb3V0OiB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogaXRlbS5wdE5hbWU/aXRlbS5wdE5hbWU6J+acquWhq+aKpScsXHJcbiAgICAgICAgICAgICAgY29sb3I6ICcjMDAwJyxcclxuICAgICAgICAgICAgICBmb250U2l6ZTogMTgsXHJcbiAgICAgICAgICAgICAgYmdDb2xvcjogJyNGRkYnLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDUsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI0NDQycsXHJcbiAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ0JZQ0xJQ0snXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9sZElkOiBpdGVtLmlkLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Y6f5aeLSURcclxuICAgICAgICAgICAgdGl0bGU6IGl0ZW0uY3lOYW1lP2l0ZW0uY3lOYW1lOifmnKrloavmiqUnLCAgICAgICAgICAgICAgICAgIC8v5qCH6aKYXHJcbiAgICAgICAgICAgIHByb3ZpbmNlTmFtZTogaXRlbS5wcm92aW5jZU5hbWU/aXRlbS5wcm92aW5jZU5hbWU6JycsICAgICAvL+ecgVxyXG4gICAgICAgICAgICBjaXR5TmFtZTogaXRlbS5jaXR5TmFtZT9pdGVtLmNpdHlOYW1lOicnLCAgICAgICAgICAgICAgICAgLy/luIJcclxuICAgICAgICAgICAgZGlzdHJpY3ROYW1lOiBpdGVtLmRpc3RyaWN0TmFtZT9pdGVtLmRpc3RyaWN0TmFtZTonJyAgICAgIC8v5Yy6XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZih0aGlzLmRhdGEudG90YWwgPT0gMCl7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBtYXJrZXJzOiBuZXdNYXJrZXJzTGlzdCwgICAgICAgICAgICAgICAvL+agh+iusFxyXG4gICAgICAgICAgICB0b3RhbDogcmVzLnRvdGFsLCAgICAgICAgICAgICAgICAgIC8v5oC75pWwXHJcbiAgICAgICAgICAgIG11bUxpc3Q6IG5ld01hcmtlcnNMaXN0LCAgICAgICAgICAgICAgICAvL+WIl+ihqFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIG1hcmtlcnM6IHRoaXMuZGF0YS5tYXJrZXJzLmNvbmNhdChuZXdNYXJrZXJzTGlzdCksICAgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgbXVtTGlzdDogdGhpcy5kYXRhLm11bUxpc3QuY29uY2F0KG5ld01hcmtlcnNMaXN0KSwgICAgICAgICAgICAgICAgLy/liJfooahcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMuZGF0YS5tdW1MaXN0Lmxlbmd0aCA8IHJlcy50b3RhbCl7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBtb3JlU2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgbW9yZVRpdGxlOiAn54K55Ye75Yqg6L295pu05aSaJyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBtb3JlU2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgbW9yZVRpdGxlOiAn5bey5Yqg6L295YWo6YOoJyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBwdEJ0blRvZ2dsZShlOmFueSk6dm9pZHsgIC8v5YWo6YOo5oyJ6ZKu54q25oCB5YiH5o2iXHJcbiAgICBpZihlLnRhcmdldC5kYXRhc2V0Lm51bSA9PSAxKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHsgIC8v5YWo6YOoXHJcbiAgICAgICAgZmxhZzogJ2FsbFB0JywgICAgICAgICAgICAgLy/lvZPliY3liJfooahcclxuICAgICAgICBwdEJ0bkNsYXNzOiBlLnRhcmdldC5kYXRhc2V0Lm51bSxcclxuICAgICAgICBwdEJ0blNob3c6IGZhbHNlLCAgICAgICAgICAvL+mrmOe6p+aQnOe0olxyXG4gICAgICAgIHBhZ2VTaXplOiAxMCwgICAgICAgICAgICAgLy/mr4/pobXmmL7npLrmlbDph49cclxuICAgICAgICBwYWdlSW5kZXg6IDEsICAgICAgICAgICAgIC8v5b2T5YmN6aG1XHJcbiAgICAgICAgdG90YWw6IDAsICAgICAgICAgICAgICAgICAvL+aAu+adoeaVsFxyXG4gICAgICAgIG1hcmtlcnM6IFtdLCAgICAgICAgICAgICAgLy/moIforrDmgLvmlbBcclxuICAgICAgICBudW06IDAsICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgLy825om+5YiX6KGoXHJcbiAgICAgICAgc2VhcmNoS2V5OiAnJywgICAgICAgICAgICAvL+WFs+mUruWtl+aQnOe0olxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLmdldEFsbFBybygpOyAgICAgICAgICAgICAvLzbmib7lhajpg6jlubPlj7Dnu5/orqFcclxuICAgIH1lbHNlIGlmKGUudGFyZ2V0LmRhdGFzZXQubnVtID09IDIpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGZsYWc6ICdjeFB0JywgICAgICAgICAgICAgLy/lvZPliY3liJfooahcclxuICAgICAgICBwdEJ0bkNsYXNzOiBlLnRhcmdldC5kYXRhc2V0Lm51bSxcclxuICAgICAgICBwdEJ0blNob3c6IHRydWUsICAgICAgICAgICAvL+mrmOe6p+aQnOe0olxyXG4gICAgICAgIHB0VHlwZUNsYXNzOiBudWxsLFxyXG4gICAgICAgIHB0VHlwZUlkOiAnJyxcclxuICAgICAgICBwdFppWmhpQ2xhc3M6IG51bGwsXHJcbiAgICAgICAgcHRaaVpoaTogJycsXHJcbiAgICAgICAgcHRJbmRleDogMCwgICAgICAgICAgICAgICAgIC8v5b2T5YmN57Si5byVXHJcbiAgICAgICAgcHRJbmR1c3RyeUlkOiBudWxsLCAgICAgICAgIC8v6YCJ5Lit55qEaWRcclxuICAgICAgICBwdEN5VHlwZUlkOiAnJywgICAgICAgICAgICAgLy/kuqfkuJppZFxyXG4gICAgICAgIHB0SHlUeXBlSWQ6ICcnLCAgICAgICAgICAgICAvL+ihjOS4mmlkXHJcblxyXG4gICAgICAgIHBhZ2VTaXplOiAxMCwgICAgICAgICAgICAgLy/mr4/pobXmmL7npLrmlbDph49cclxuICAgICAgICBwYWdlSW5kZXg6IDEsICAgICAgICAgICAgIC8v5b2T5YmN6aG1XHJcbiAgICAgICAgdG90YWw6IDAsICAgICAgICAgICAgICAgICAvL+aAu+adoeaVsFxyXG4gICAgICAgIG1hcmtlcnM6IFtdLCAgICAgICAgICAgICAgLy/moIforrDmgLvmlbBcclxuICAgICAgICBudW06IDAsICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgLy825om+5YiX6KGoXHJcbiAgICAgICAgc2VhcmNoS2V5OiAnJywgICAgICAgICAgICAvL+WFs+mUruWtl+aQnOe0olxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLmdldEN4UHJvKCk7ICAgICAgICAgICAgIC8vNuaJvuWIm+aWsOW5s+WPsOe7n+iuoVxyXG4gICAgICB0aGlzLnB0VHlwZXMoKTsgICAgICAgICAgICAgIC8v57G75Z6LXHJcbiAgICAgIHRoaXMuaW5kdXN0cnkoKTsgICAgICAgICAgICAgLy/kuqfkuJrjgIHooYzkuJpcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyNwdFR5cGUnKS50b2dnbGUoZmFsc2UpOyAgICAgICAgIC8v5bmz5Y+w57G75Z6L5bGV5byA5YWz6Zet54q25oCBXHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjcHRaaVpoaScpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAvL+W5s+WPsOi1hOi0qOWxleW8gOWFs+mXreeKtuaAgVxyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI3B0SW5kdXN0cnknKS50b2dnbGUoZmFsc2UpOyAgICAgLy/kuqfkuJrjgIHooYzkuJrlsZXlvIDlhbPpl63nirbmgIFcclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGZsYWc6ICdjeVB0JywgICAgICAgICAgICAgLy/lvZPliY3liJfooahcclxuICAgICAgICBwdEJ0bkNsYXNzOiBlLnRhcmdldC5kYXRhc2V0Lm51bSxcclxuICAgICAgICBwdEJ0blNob3c6IHRydWUsICAgICAgICAgICAvL+mrmOe6p+aQnOe0olxyXG4gICAgICAgIHB0VHlwZUNsYXNzOiBudWxsLFxyXG4gICAgICAgIHB0VHlwZUlkOiAnJyxcclxuICAgICAgICBwdFppWmhpQ2xhc3M6IG51bGwsXHJcbiAgICAgICAgcHRaaVpoaTogJycsXHJcbiAgICAgICAgcHRJbmRleDogMCwgICAgICAgICAgICAgICAgIC8v5b2T5YmN57Si5byVXHJcbiAgICAgICAgcHRJbmR1c3RyeUlkOiBudWxsLCAgICAgICAgIC8v6YCJ5Lit55qEaWRcclxuICAgICAgICBwdEN5VHlwZUlkOiAnJywgICAgICAgICAgICAgLy/kuqfkuJppZFxyXG4gICAgICAgIHB0SHlUeXBlSWQ6ICcnLCAgICAgICAgICAgICAvL+ihjOS4mmlkXHJcblxyXG4gICAgICAgIHBhZ2VTaXplOiAxMCwgICAgICAgICAgICAgLy/mr4/pobXmmL7npLrmlbDph49cclxuICAgICAgICBwYWdlSW5kZXg6IDEsICAgICAgICAgICAgIC8v5b2T5YmN6aG1XHJcbiAgICAgICAgdG90YWw6IDAsICAgICAgICAgICAgICAgICAvL+aAu+adoeaVsFxyXG4gICAgICAgIG1hcmtlcnM6IFtdLCAgICAgICAgICAgICAgLy/moIforrDmgLvmlbBcclxuICAgICAgICBudW06IDAsICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgLy825om+5YiX6KGoXHJcbiAgICAgICAgc2VhcmNoS2V5OiAnJywgICAgICAgICAgICAvL+WFs+mUruWtl+aQnOe0olxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLmdldEN5UHJvKCk7ICAgICAgICAgICAgIC8vNuaJvuWIm+S4muW5s+WPsOe7n+iuoVxyXG4gICAgICB0aGlzLnB0VHlwZXMoKTsgICAgICAgICAgICAgIC8v57G75Z6LXHJcbiAgICAgIHRoaXMuaW5kdXN0cnkoKTsgICAgICAgICAgICAgLy/kuqfkuJrjgIHooYzkuJpcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyNwdFR5cGUnKS50b2dnbGUoZmFsc2UpOyAgICAgICAgIC8v5bmz5Y+w57G75Z6L5bGV5byA5YWz6Zet54q25oCBXHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjcHRaaVpoaScpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAvL+W5s+WPsOi1hOi0qOWxleW8gOWFs+mXreeKtuaAgVxyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI3B0SW5kdXN0cnknKS50b2dnbGUoZmFsc2UpOyAgICAgLy/kuqfkuJrjgIHooYzkuJrlsZXlvIDlhbPpl63nirbmgIFcclxuICAgIH1cclxuICB9LFxyXG4gIHB0TmF2SXRlbShkYXRhOmFueSk6dm9pZHsgICAgICAgLy/ooYzkuJrkuqfkuJrvvIjlt6bkvqflr7zoiKrngrnlh7vml7bvvIzop6blj5HnmoTkuovku7bvvIlcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHB0SW5kZXg6IGRhdGEuZGV0YWlsLmluZGV4IHx8IDAsXHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHB0SW5kdXN0cnlJdGVtKGRhdGE6YW55KTp2b2lkIHsgIC8v6KGM5Lia5Lqn5Lia77yI5Y+z5L6n6YCJ5oup6aG56KKr54K55Ye75pe277yM5Lya6Kem5Y+R55qE5LqL5Lu277yJXHJcbiAgICBjb25zdCBpZCA9IHRoaXMuZGF0YS5wdEluZHVzdHJ5SWQgPT09IGRhdGEuZGV0YWlsLmlkID8gbnVsbCA6IGRhdGEuZGV0YWlsLmlkO1xyXG4gICAgY29uc3QgcElkID0gdGhpcy5kYXRhLnB0SW5kdXN0cnlJZCA9PT0gZGF0YS5kZXRhaWwuaWQgPyBudWxsIDogZGF0YS5kZXRhaWwuaWQ7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBwdEluZHVzdHJ5SWQ6IGlkLFxyXG4gICAgICBwdEN5VHlwZUlkOiBpZCA/IGlkIDogJycsICAgICAgICAgICAgICAgLy/kuqfkuJppZFxyXG4gICAgICBwdEh5VHlwZUlkOiBwSWQgPyBwSWQgOiAnJywgICAgICAgICAgICAgLy/ooYzkuJppZFxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICBwdFR5cGVGbihlOmFueSk6dm9pZHsgIC8v5bmz5Y+w57G75Z6L6Kem5Y+RXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBwdFR5cGVDbGFzczogZS50YXJnZXQuZGF0YXNldC5pZCxcclxuICAgICAgcHRUeXBlSWQ6IGUudGFyZ2V0LmRhdGFzZXQuaWRcclxuICAgIH0pXHJcbiAgfSxcclxuICBwdFppWmhpRm4oZTphbnkpOnZvaWR7ICAvL+W5s+WPsOi1hOi0qOinpuWPkVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgcHRaaVpoaUNsYXNzOiBlLnRhcmdldC5kYXRhc2V0LmlkLFxyXG4gICAgICBwdFppWmhpOiBlLnRhcmdldC5kYXRhc2V0LnRpdGxlXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIHB0UmVzZXQoZTphbnkpOnZvaWR7ICAvL+mHjee9rlxyXG4gICAgbGV0IGZsYWc6bnVtYmVyID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuZmxhZztcclxuICAgIGlmKGZsYWcgPT0gMSl7ICAvL+W5s+WPsOexu+Wei1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHB0VHlwZUNsYXNzOiBudWxsLFxyXG4gICAgICAgIHB0VHlwZUlkOiAnJyxcclxuICAgICAgICBudW06IDAsICAgICAgICAgICAgICAgICAgICAvLzbmib7nu5PmnpxcclxuICAgICAgICBtdW1MaXN0OiBbXSwgICAgICAgICAgICAgICAvLzbmib7liJfooahcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyNwdFR5cGUnKS50b2dnbGUoZmFsc2UpOyAgICAgICAgIC8v5bmz5Y+w57G75Z6L5YWz6ZetXHJcbiAgICB9ZWxzZSBpZihmbGFnID09IDIpeyAgLy/lubPlj7DotYTotKhcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBwdFppWmhpQ2xhc3M6IG51bGwsXHJcbiAgICAgICAgcHRaaVpoaTogJycsXHJcbiAgICAgICAgbnVtOiAwLCAgICAgICAgICAgICAgICAgICAgLy825om+57uT5p6cXHJcbiAgICAgICAgbXVtTGlzdDogW10sICAgICAgICAgICAgICAgLy825om+5YiX6KGoXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjcHRaaVpoaScpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAvL+W5s+WPsOi1hOi0qOWFs+mXrVxyXG4gICAgfWVsc2V7ICAvL+S6p+S4muOAgeihjOS4mlxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHB0SW5kZXg6IDAsICAgICAgICAgICAgICAgICAvL+W9k+WJjee0ouW8lVxyXG4gICAgICAgIHB0SW5kdXN0cnlJZDogbnVsbCwgICAgICAgICAvL+mAieS4reeahGlkXHJcbiAgICAgICAgcHRDeVR5cGVJZDogJycsICAgICAgICAgICAgIC8v5Lqn5LiaaWRcclxuICAgICAgICBwdEh5VHlwZUlkOiAnJywgICAgICAgICAgICAgICAvL+ihjOS4mmlkXHJcbiAgICAgICAgbnVtOiAwLCAgICAgICAgICAgICAgICAgICAgLy825om+57uT5p6cXHJcbiAgICAgICAgbXVtTGlzdDogW10sICAgICAgICAgICAgICAgLy825om+5YiX6KGoXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjcHRJbmR1c3RyeScpLnRvZ2dsZShmYWxzZSk7ICAgICAvL+S6p+S4muOAgeihjOS4muWFs+mXrVxyXG4gICAgfVxyXG4gICAgdGhpcy5nZXRDeFBybygpOyAgICAgICAgICAgICAvLzbmib7liJvmlrDlubPlj7Dnu5/orqFcclxuICB9LFxyXG4gIHB0U3VibWl0KGU6YW55KTp2b2lkeyAgLy/lrozmiJBcclxuICAgIGxldCBmbGFnOm51bWJlciA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmZsYWc7XHJcbiAgICBpZihmbGFnID09IDEpe1xyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI3B0VHlwZScpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAgLy/lubPlj7DnsbvlnovlsZXlvIDlhbPpl63nirbmgIFcclxuICAgIH1lbHNlIGlmKGZsYWcgPT0gMil7XHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjcHRaaVpoaScpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAgLy/lubPlj7DotYTotKjlsZXlvIDlhbPpl63nirbmgIFcclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI3B0SW5kdXN0cnknKS50b2dnbGUoZmFsc2UpOyAgICAgLy/kuqfkuJrjgIHooYzkuJrlsZXlvIDlhbPpl63nirbmgIFcclxuICAgIH1cclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICBtdW1MaXN0OiBbXSwgICAgICAgICAgICAgICAvLzbmib7liJfooahcclxuICAgIH0pXHJcbiAgICB0aGlzLmdldEN4UHJvKCk7ICAgICAgICAgICAgIC8vNuaJvuWIm+aWsOW5s+WPsOe7n+iuoVxyXG4gIH0sXHJcblxyXG5cclxuICAvL+aJvuaUv+etlu+8iOWklumTvu+8iVxyXG4gIHpjRm4oKTp2b2lkeyB9LFxyXG5cclxuXHJcbiAgLy/mib7pobnnm65cclxuICB4bUZuKCk6dm9pZHsgIC8v5om+6aG555uuXHJcbiAgICB0aGlzLmhpZGVGbigpOyAgICAgICAgICAgICAvL+mcgOimgemakOiXj+eahOWFg+e0oFxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgZmxhZzogJ3htJywgICAgICAgICAgICAgICAgLy/lvZPliY3liJfooahcclxuICAgICAgaXNTZWFyY2hTaG93OiB0cnVlLCAgICAgICAgLy/mkJzntKLnu5PmnpzmlbDmja5cclxuICAgICAgcHJvU2VhcmNoSW5mb1Nob3c6IHRydWUsICAgLy/pobnnm67pq5jnuqfmkJzntKJcclxuICAgIH0pXHJcbiAgICB0aGlzLmdldFByb0xpc3QoKTsgICAgICAgICAgIC8vNuaJvumhueebrue7n+iuoVxyXG4gICAgdGhpcy54bVN0YWdlKCk7ICAgICAgICAgICAgICAvL+aJgOWkhOmYtuautVxyXG4gICAgdGhpcy54bUNhdGVnb3J5KCk7ICAgICAgICAgICAvL+mcgOaxguexu+WIq1xyXG4gICAgdGhpcy54bUZpbmFuY2luZygpOyAgICAgICAgICAvL+iejei1hOmHkeminVxyXG4gICAgdGhpcy5pbmR1c3RyeSgpOyAgICAgICAgICAgICAvL+S6p+S4muOAgeihjOS4mlxyXG4gIH0sXHJcbiAgZ2V0UHJvTGlzdCgpOnZvaWR7ICAgICAgICAgICAgICAgLy825om+6aG555uu57uf6K6hXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBtb3JlU2hvdzogZmFsc2UsXHJcbiAgICB9KVxyXG4gICAgaHR0cHMuc3VjY2Vzc1JlcXVlc3QoYXBpLmZpbmRQcm8sIHtcclxuICAgICAgdGVuYW50SWQ6IGFwaS5hcmVhSWQsICAgICAgICAgICAgICAgICAvL+WcsOWMumlkXHJcbiAgICAgIGtleTogdGhpcy5kYXRhLnNlYXJjaEtleSwgICAgICAgICAgICAgLy/lhbPplK7lrZfmkJzntKJcclxuICAgICAgcGFnZVNpemU6IHRoaXMuZGF0YS5wYWdlU2l6ZSwgICAgICAgICAvL+avj+mhteaYvuekuuaVsOmHj1xyXG4gICAgICBwYWdlSW5kZXg6IHRoaXMuZGF0YS5wYWdlSW5kZXgsICAgICAgIC8v6aG15pWwXHJcbiAgICAgIHByb05lZWR0eXBlOiB0aGlzLmRhdGEueG1TdGFnZUlkLCAgICAgLy/miYDlpITpmLbmrrVcclxuICAgICAgbmVlZFR5cGVzOiB0aGlzLmRhdGEueG1UeXBlSWQsICAgICAgICAvL+mcgOaxguexu+WIq1xyXG4gICAgICB0ek1vbmV5OiB0aGlzLmRhdGEueG1Uek1vbmV5LCAgICAgICAgIC8v6J6N6LWE6YeR6aKdXHJcbiAgICAgIGN5VHlwZUlkOiB0aGlzLmRhdGEueG1DeVR5cGVJZCwgICAgICAgLy/kuqfkuJppZFxyXG4gICAgICBoeVR5cGVJZDogdGhpcy5kYXRhLnhtSHlUeXBlSWQgICAgICAgIC8v6KGM5LiaaWRcclxuICAgIH0sICdHRVQnKS50aGVuKChyZXM6YW55KTp2b2lkPT57XHJcbiAgICAgIGlmKHJlcyl7XHJcbiAgICAgICAgbGV0IG5ld01hcmtlcnNMaXN0OmFueSA9IHJlcy5saXN0Lm1hcCgoaXRlbTphbnksIGluZGV4Om51bWJlcik6YW55PT57XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogaW5kZXgsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL21hcOeUqOeahOiHquWumuS5iUlEXHJcbiAgICAgICAgICAgIG5hbWU6ICfpobnnm64nLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/or6bmg4XliKTmlq1cclxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBpdGVtLmxuZywgICAgICAgICAgICAgICAgICAgICAgICAgLy/nu4/luqZcclxuICAgICAgICAgICAgbGF0aXR1ZGU6IGl0ZW0ubGF0LCAgICAgICAgICAgICAgICAgICAgICAgICAgLy/nuqzluqZcclxuICAgICAgICAgICAgaWNvblBhdGg6ICcuLi8uLi9pbWFnZXMveG0ucG5nJywgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgd2lkdGg6IDI3LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1LFxyXG4gICAgICAgICAgICBjYWxsb3V0OiB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogaXRlbS5wcm9OYW1lP2l0ZW0ucHJvTmFtZTon5pyq5aGr5oqlJyxcclxuICAgICAgICAgICAgICBjb2xvcjogJyMwMDAnLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAxOCxcclxuICAgICAgICAgICAgICBiZ0NvbG9yOiAnI0ZGRicsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNSxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXHJcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjQ0NDJyxcclxuICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnQllDTElDSydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb2xkSWQ6IGl0ZW0uaWQsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/ljp/lp4tJRFxyXG4gICAgICAgICAgICB0aXRsZTogaXRlbS5wcm9OYW1lP2l0ZW0ucHJvTmFtZTon5pyq5aGr5oqlJywgICAgICAgICAgICAgICAgICAvL+agh+mimFxyXG4gICAgICAgICAgICBwcm92aW5jZU5hbWU6IGl0ZW0ucHJvdmluY2VOYW1lP2l0ZW0ucHJvdmluY2VOYW1lOicnLCAgICAgLy/nnIFcclxuICAgICAgICAgICAgY2l0eU5hbWU6IGl0ZW0uY2l0eU5hbWU/aXRlbS5jaXR5TmFtZTonJywgICAgICAgICAgICAgICAgIC8v5biCXHJcbiAgICAgICAgICAgIGRpc3RyaWN0TmFtZTogaXRlbS5kaXN0cmljdE5hbWU/aXRlbS5kaXN0cmljdE5hbWU6JycgICAgICAvL+WMulxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYodGhpcy5kYXRhLnRvdGFsID09IDApe1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgbWFya2VyczogbmV3TWFya2Vyc0xpc3QsICAgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgdG90YWw6IHJlcy50b3RhbCwgICAgICAgICAgICAgICAgICAgICAgLy/mgLvmlbBcclxuICAgICAgICAgICAgbXVtTGlzdDogbmV3TWFya2Vyc0xpc3QsICAgICAgICAgICAgICAgIC8v5YiX6KGoXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgbWFya2VyczogdGhpcy5kYXRhLm1hcmtlcnMuY29uY2F0KG5ld01hcmtlcnNMaXN0KSwgICAgICAgICAgICAgICAvL+agh+iusFxyXG4gICAgICAgICAgICBtdW1MaXN0OiB0aGlzLmRhdGEubXVtTGlzdC5jb25jYXQobmV3TWFya2Vyc0xpc3QpLCAgICAgICAgICAgICAgICAvL+WIl+ihqFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5kYXRhLm11bUxpc3QubGVuZ3RoIDwgcmVzLnRvdGFsKXtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIG1vcmVTaG93OiB0cnVlLFxyXG4gICAgICAgICAgICBtb3JlVGl0bGU6ICfngrnlh7vliqDovb3mm7TlpJonLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIG1vcmVTaG93OiB0cnVlLFxyXG4gICAgICAgICAgICBtb3JlVGl0bGU6ICflt7LliqDovb3lhajpg6gnLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHhtU3RhZ2VGbihlOmFueSk6dm9pZHsgIC8v5omA5aSE6Zi25q616Kem5Y+RXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICB4bVN0YWdlQ2xhc3M6IGUudGFyZ2V0LmRhdGFzZXQuaWQsXHJcbiAgICAgIHhtU3RhZ2VJZDogZS50YXJnZXQuZGF0YXNldC5pZFxyXG4gICAgfSlcclxuICB9LFxyXG4gIHhtQ2F0ZWdvcnlGbihlOmFueSk6dm9pZHsgIC8v6ZyA5rGC57G75Yir6Kem5Y+RXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICB4bUNhdGVnb3J5Q2xhc3M6IGUudGFyZ2V0LmRhdGFzZXQuaWQsXHJcbiAgICAgIHhtVHlwZUlkOiBlLnRhcmdldC5kYXRhc2V0LmlkXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgeG1GaW5hbmNpbmdGbihlOmFueSk6dm9pZHsgIC8v6J6N6LWE6YeR6aKd6Kem5Y+RXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICB4bUZpbmFuY2luZ0NsYXNzOiBlLnRhcmdldC5kYXRhc2V0LmlkLFxyXG4gICAgICB4bVR6TW9uZXk6IGUudGFyZ2V0LmRhdGFzZXQuaWRcclxuICAgIH0pXHJcbiAgfSxcclxuICB4bVJlc2V0KGU6YW55KTp2b2lkeyAgLy/pobnnm67ph43nva5cclxuICAgIGxldCBmbGFnOm51bWJlciA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmZsYWc7XHJcbiAgICBpZihmbGFnID09IDEpeyAgLy/miYDlpITpmLbmrrVcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICB4bVN0YWdlQ2xhc3M6IG51bGwsXHJcbiAgICAgICAgeG1TdGFnZUlkOiAnJyxcclxuICAgICAgICBudW06IDAsICAgICAgICAgICAgICAgICAgICAvLzbmib7nu5PmnpxcclxuICAgICAgICBtdW1MaXN0OiBbXSwgICAgICAgICAgICAgICAvLzbmib7liJfooahcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyN4bVN0YWdlJykudG9nZ2xlKGZhbHNlKTsgICAgICAgICAvL+aJgOWkhOmYtuauteWFs+mXrVxyXG4gICAgfWVsc2UgaWYoZmxhZyA9PSAyKXsgIC8v6ZyA5rGC57G75YirXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgeG1DYXRlZ29yeUNsYXNzOiBudWxsLFxyXG4gICAgICAgIHhtVHlwZUlkOiAnJyxcclxuICAgICAgICBudW06IDAsICAgICAgICAgICAgICAgICAgICAvLzbmib7nu5PmnpxcclxuICAgICAgICBtdW1MaXN0OiBbXSwgICAgICAgICAgICAgICAvLzbmib7liJfooahcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyN4bUNhdGVnb3J5JykudG9nZ2xlKGZhbHNlKTsgICAgICAgIC8v6ZyA5rGC57G75Yir5YWz6ZetXHJcbiAgICB9ZWxzZSBpZihmbGFnID09IDMpeyAgLy/ono3otYTph5Hpop1cclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICB4bUZpbmFuY2luZ0NsYXNzOiBudWxsLFxyXG4gICAgICAgIHhtVHpNb25leTogJycsXHJcbiAgICAgICAgbnVtOiAwLCAgICAgICAgICAgICAgICAgICAgLy825om+57uT5p6cXHJcbiAgICAgICAgbXVtTGlzdDogW10sICAgICAgICAgICAgICAgLy825om+5YiX6KGoXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjeG1GaW5hbmNpbmcnKS50b2dnbGUoZmFsc2UpOyAgICAgICAgLy/lubPlj7DotYTotKjlhbPpl61cclxuICAgIH1lbHNleyAgLy/kuqfkuJrjgIHooYzkuJpcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICB4bUluZGV4OiAwLCAgICAgICAgICAgICAgICAgLy/lvZPliY3ntKLlvJVcclxuICAgICAgICB4bUluZHVzdHJ5SWQ6IG51bGwsICAgICAgICAgLy/pgInkuK3nmoRpZFxyXG4gICAgICAgIHhtQ3lUeXBlSWQ6ICcnLCAgICAgICAgICAgICAvL+S6p+S4mmlkXHJcbiAgICAgICAgeG1IeVR5cGVJZDogJycsICAgICAgICAgICAgIC8v6KGM5LiaaWRcclxuICAgICAgICBudW06IDAsICAgICAgICAgICAgICAgICAgICAgLy825om+57uT5p6cXHJcbiAgICAgICAgbXVtTGlzdDogW10sICAgICAgICAgICAgICAgIC8vNuaJvuWIl+ihqFxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI3htSW5kdXN0cnknKS50b2dnbGUoZmFsc2UpOyAgICAgLy/kuqfkuJrjgIHooYzkuJrlhbPpl61cclxuICAgIH1cclxuICAgIHRoaXMuZ2V0UHJvTGlzdCgpOyAgICAgICAgICAgICAvLzbmib7pobnnm67nu5/orqFcclxuICB9LFxyXG4gIHhtU3VibWl0KGU6YW55KTp2b2lkeyAgLy/pobnnm67lrozmiJBcclxuICAgIGxldCBmbGFnOm51bWJlciA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmZsYWc7XHJcbiAgICBpZihmbGFnID09IDEpe1xyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI3htU3RhZ2UnKS50b2dnbGUoZmFsc2UpOyAgICAgICAgIC8v5omA5aSE6Zi25q615YWz6ZetXHJcbiAgICB9ZWxzZSBpZihmbGFnID09IDIpe1xyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI3htQ2F0ZWdvcnknKS50b2dnbGUoZmFsc2UpOyAgICAgICAgLy/pnIDmsYLnsbvliKvlhbPpl61cclxuICAgIH1lbHNlIGlmKGZsYWcgPT0gMyl7XHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjeG1GaW5hbmNpbmcnKS50b2dnbGUoZmFsc2UpOyAgICAgICAgLy/lubPlj7DotYTotKjlhbPpl61cclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI3htSW5kdXN0cnknKS50b2dnbGUoZmFsc2UpOyAgICAgLy/kuqfkuJrjgIHooYzkuJrlhbPpl61cclxuICAgIH1cclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICBtdW1MaXN0OiBbXSwgICAgICAgICAgICAgICAvLzbmib7liJfooahcclxuICAgIH0pXHJcbiAgICB0aGlzLmdldFByb0xpc3QoKTsgICAgICAgICAgICAgLy825om+6aG555uu57uf6K6hXHJcbiAgfSxcclxuICB4bU5hdkl0ZW0oZGF0YTphbnkpOnZvaWR7ICAvL+ihjOS4muS6p+S4mu+8iOW3puS+p+WvvOiIqueCueWHu+aXtu+8jOinpuWPkeeahOS6i+S7tu+8iVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgeG1JbmRleDogZGF0YS5kZXRhaWwuaW5kZXggfHwgMCxcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgeG1JbmR1c3RyeUl0ZW0oZGF0YTphbnkpOnZvaWQgeyAgLy/ooYzkuJrkuqfkuJrvvIjlj7PkvqfpgInmi6npobnooqvngrnlh7vml7bvvIzkvJrop6blj5HnmoTkuovku7bvvIlcclxuICAgIGNvbnN0IGlkID0gdGhpcy5kYXRhLnhtSW5kdXN0cnlJZCA9PT0gZGF0YS5kZXRhaWwuaWQgPyBudWxsIDogZGF0YS5kZXRhaWwuaWQ7XHJcbiAgICBjb25zdCBwSWQgPSB0aGlzLmRhdGEueG1JbmR1c3RyeUlkID09PSBkYXRhLmRldGFpbC5pZCA/IG51bGwgOiBkYXRhLmRldGFpbC5pZDtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHhtSW5kdXN0cnlJZDogaWQsXHJcbiAgICAgIHhtQ3lUeXBlSWQ6IGlkID8gaWQgOiAnJywgICAgICAgICAgICAgICAvL+S6p+S4mmlkXHJcbiAgICAgIHhtSHlUeXBlSWQ6IHBJZCA/IHBJZCA6ICcnLCAgICAgICAgICAgICAvL+ihjOS4mmlkXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG5cclxuXHJcbiAgLy/mib7lnLrlnLBcclxuICBjZEZuKCk6dm9pZHsgIC8v5om+5Zy65ZywXHJcbiAgICB0aGlzLmhpZGVGbigpOyAgICAgICAgICAgICAgIC8v6ZyA6KaB6ZqQ6JeP55qE5YWD57SgXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBmbGFnOiAnY2QnLCAgICAgICAgICAgICAgICAgIC8v5b2T5YmN5YiX6KGoXHJcbiAgICAgIGlzU2VhcmNoU2hvdzogdHJ1ZSwgICAgICAgICAgLy/mkJzntKLnu5PmnpzmlbDmja5cclxuICAgICAgY2RTZWFyY2hJbmZvU2hvdzogdHJ1ZSwgICAgICAvL+WcuuWcsOmrmOe6p+aQnOe0olxyXG4gICAgfSlcclxuICAgIHRoaXMuZ2V0U2l0ZUxpc3QoKTsgICAgICAgICAgICAvLzbmib7lnLrlnLDnu5/orqFcclxuXHJcbiAgICB0aGlzLmNkQ2FycmllcigpOyAgICAgICAgICAgICAgLy/otYTmupDnsbvlnotcclxuICAgIHRoaXMuaW5kdXN0cnkoKTsgICAgICAgICAgICAgICAvL+S6p+S4muOAgeihjOS4mlxyXG4gIH0sXHJcbiAgZ2V0U2l0ZUxpc3QoKTp2b2lkeyAgICAgICAgICAgICAgIC8vNuaJvuWcuuWcsOe7n+iuoVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgbW9yZVNob3c6IGZhbHNlLFxyXG4gICAgfSlcclxuICAgIGh0dHBzLnN1Y2Nlc3NSZXF1ZXN0KGFwaS5jeVBsYXRmb3JtLCB7XHJcbiAgICAgIHRlbmFudElkOiBhcGkuYXJlYUlkLCAgICAgICAgICAgICAgICAgLy/lnLDljLppZFxyXG4gICAgICBrZXk6IHRoaXMuZGF0YS5zZWFyY2hLZXksICAgICAgICAgICAgIC8v5YWz6ZSu5a2X5pCc57SiXHJcbiAgICAgIHBhZ2VTaXplOiB0aGlzLmRhdGEucGFnZVNpemUsICAgICAgICAgLy/mr4/pobXmmL7npLrmlbDph49cclxuICAgICAgcGFnZUluZGV4OiB0aGlzLmRhdGEucGFnZUluZGV4LCAgICAgICAvL+mhteaVsFxyXG4gICAgICB6dFR5cGVJZDogdGhpcy5kYXRhLmNkVHlwZUlkLCAgICAgICAgIC8v6L295L2T56m66Ze057G75Z6LXHJcbiAgICAgIGlzQ2h1WnU6IHRoaXMuZGF0YS5jZENodVp1SWQsICAgICAgICAgIC8v5piv5ZCm5Ye656efXHJcbiAgICAgIGlzU2FsZTogdGhpcy5kYXRhLmNkU2FsZUlkLCAgICAgICAgICAgLy/mmK/lkKblh7rllK5cclxuICAgICAgY3lUeXBlSWQ6IHRoaXMuZGF0YS5jZEN5VHlwZUlkLCAgICAgICAvL+S6p+S4mmlkXHJcbiAgICAgIGh5VHlwZUlkOiB0aGlzLmRhdGEuY2RIeVR5cGVJZCAgICAgICAgLy/ooYzkuJppZFxyXG4gICAgfSwgJ0dFVCcpLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgaWYocmVzKXtcclxuICAgICAgICBsZXQgbmV3TWFya2Vyc0xpc3Q6YW55ID0gcmVzLmxpc3QubWFwKChpdGVtOmFueSwgaW5kZXg6bnVtYmVyKTphbnk9PntcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBpbmRleCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vbWFw55So55qE6Ieq5a6a5LmJSURcclxuICAgICAgICAgICAgbmFtZTogJ+WcuuWcsCcsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+ivpuaDheWIpOaWrVxyXG4gICAgICAgICAgICBsb25naXR1ZGU6IGl0ZW0ubG5nLCAgICAgICAgICAgICAgICAgICAgICAgICAvL+e7j+W6plxyXG4gICAgICAgICAgICBsYXRpdHVkZTogaXRlbS5sYXQsICAgICAgICAgICAgICAgICAgICAgICAgICAvL+e6rOW6plxyXG4gICAgICAgICAgICBpY29uUGF0aDogJy4uLy4uL2ltYWdlcy9jZC5wbmcnLCAgICAgICAgICAgICAvL+agh+iusFxyXG4gICAgICAgICAgICB3aWR0aDogMjcsXHJcbiAgICAgICAgICAgIGhlaWdodDogMzUsXHJcbiAgICAgICAgICAgIGNhbGxvdXQ6IHtcclxuICAgICAgICAgICAgICBjb250ZW50OiBpdGVtLmN5enROYW1lP2l0ZW0uY3l6dE5hbWU6J+acquWhq+aKpScsXHJcbiAgICAgICAgICAgICAgY29sb3I6ICcjMDAwJyxcclxuICAgICAgICAgICAgICBmb250U2l6ZTogMTgsXHJcbiAgICAgICAgICAgICAgYmdDb2xvcjogJyNGRkYnLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDUsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI0NDQycsXHJcbiAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ0JZQ0xJQ0snXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9sZElkOiBpdGVtLmlkLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Y6f5aeLSURcclxuICAgICAgICAgICAgdGl0bGU6IGl0ZW0uY3l6dE5hbWU/aXRlbS5jeXp0TmFtZTon5pyq5aGr5oqlJywgICAgICAgICAgICAgICAgICAvL+agh+mimFxyXG4gICAgICAgICAgICBwcm92aW5jZU5hbWU6IGl0ZW0ucHJvdmluY2VOYW1lP2l0ZW0ucHJvdmluY2VOYW1lOicnLCAgICAgLy/nnIFcclxuICAgICAgICAgICAgY2l0eU5hbWU6IGl0ZW0uY2l0eU5hbWU/aXRlbS5jaXR5TmFtZTonJywgICAgICAgICAgICAgICAgIC8v5biCXHJcbiAgICAgICAgICAgIGRpc3RyaWN0TmFtZTogaXRlbS5kaXN0cmljdE5hbWU/aXRlbS5kaXN0cmljdE5hbWU6JycgICAgICAvL+WMulxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYodGhpcy5kYXRhLnRvdGFsID09IDApe1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgbWFya2VyczogbmV3TWFya2Vyc0xpc3QsICAgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgdG90YWw6IHJlcy50b3RhbCwgICAgICAgICAgICAgICAgICAgICAgLy/mgLvmlbBcclxuICAgICAgICAgICAgbXVtTGlzdDogbmV3TWFya2Vyc0xpc3QsICAgICAgICAgICAgICAgIC8v5YiX6KGoXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgbWFya2VyczogdGhpcy5kYXRhLm1hcmtlcnMuY29uY2F0KG5ld01hcmtlcnNMaXN0KSwgICAgICAgICAgICAgICAvL+agh+iusFxyXG4gICAgICAgICAgICBtdW1MaXN0OiB0aGlzLmRhdGEubXVtTGlzdC5jb25jYXQobmV3TWFya2Vyc0xpc3QpLCAgICAgICAgICAgICAgICAvL+WIl+ihqFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5kYXRhLm11bUxpc3QubGVuZ3RoIDwgcmVzLnRvdGFsKXtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIG1vcmVTaG93OiB0cnVlLFxyXG4gICAgICAgICAgICBtb3JlVGl0bGU6ICfngrnlh7vliqDovb3mm7TlpJonLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIG1vcmVTaG93OiB0cnVlLFxyXG4gICAgICAgICAgICBtb3JlVGl0bGU6ICflt7LliqDovb3lhajpg6gnLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIGNkVHlwZUZuKGU6YW55KTp2b2lkeyAgLy/otYTmupDnsbvlnovop6blj5FcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGNkVHlwZUNsYXNzOiBlLnRhcmdldC5kYXRhc2V0LmlkLFxyXG4gICAgICBjZFR5cGVJZDogZS50YXJnZXQuZGF0YXNldC5pZFxyXG4gICAgfSlcclxuICB9LFxyXG4gIGNkVXNlRm4oZTphbnkpOnZvaWR7ICAvL+WcuuWcsOeUqOmAlOinpuWPkVxyXG4gICAgbGV0IGlkOmFueSA9IGUudGFyZ2V0LmRhdGFzZXQuaWQ7XHJcbiAgICBpZihpZCA9PSAxKXsgIC8v5Ye656efXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgY2RVc2VyQ2xhc3M6IGlkLFxyXG4gICAgICAgIGNkQ2h1WnVJZDogJzEnLCAgICAgICAgLy/lh7rnp59cclxuICAgICAgICBjZFNhbGVJZDogJycsICAgICAgICAgIC8v5Ye65ZSuXHJcbiAgICAgIH0pXHJcbiAgICB9ZWxzZXsgIC8v5Ye65ZSuXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgY2RVc2VyQ2xhc3M6IGlkLFxyXG4gICAgICAgIGNkQ2h1WnVJZDogJycsICAgICAgICAgLy/lh7rnp59cclxuICAgICAgICBjZFNhbGVJZDogJzEnLCAgICAgICAgIC8v5Ye65ZSuXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICBjZE5hdkl0ZW0oZGF0YTphbnkpOnZvaWR7ICAgICAgIC8v6KGM5Lia5Lqn5Lia77yI5bem5L6n5a+86Iiq54K55Ye75pe277yM6Kem5Y+R55qE5LqL5Lu277yJXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBjZEluZGV4OiBkYXRhLmRldGFpbC5pbmRleCB8fCAwLFxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBjZEluZHVzdHJ5SXRlbShkYXRhOmFueSk6dm9pZCB7ICAvL+ihjOS4muS6p+S4mu+8iOWPs+S+p+mAieaLqemhueiiq+eCueWHu+aXtu+8jOS8muinpuWPkeeahOS6i+S7tu+8iVxyXG4gICAgY29uc3QgaWQgPSB0aGlzLmRhdGEuY2RJbmR1c3RyeUlkID09PSBkYXRhLmRldGFpbC5pZCA/IG51bGwgOiBkYXRhLmRldGFpbC5pZDtcclxuICAgIGNvbnN0IHBJZCA9IHRoaXMuZGF0YS5jZEluZHVzdHJ5SWQgPT09IGRhdGEuZGV0YWlsLmlkID8gbnVsbCA6IGRhdGEuZGV0YWlsLmlkO1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgY2RJbmR1c3RyeUlkOiBpZCxcclxuICAgICAgY2RDeVR5cGVJZDogaWQgPyBpZCA6ICcnLCAgICAgICAgICAgICAgIC8v5Lqn5LiaaWRcclxuICAgICAgY2RIeVR5cGVJZDogcElkID8gcElkIDogJycsICAgICAgICAgICAgIC8v6KGM5LiaaWRcclxuICAgIH0pXHJcbiAgfSxcclxuICBjZFJlc2V0KGU6YW55KTp2b2lkeyAgLy/mib7lnLrlnLDph43nva5cclxuICAgIGxldCBmbGFnOm51bWJlciA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmZsYWc7XHJcbiAgICBpZihmbGFnID09IDEpeyAgLy/otYTmupDnsbvlnotcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBjZFR5cGVDbGFzczogbnVsbCxcclxuICAgICAgICBjZFR5cGVJZDogJycsXHJcbiAgICAgICAgbnVtOiAwLCAgICAgICAgICAgICAgICAgICAgLy825om+57uT5p6cXHJcbiAgICAgICAgbXVtTGlzdDogW10sICAgICAgICAgICAgICAgLy825om+5YiX6KGoXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjY2RUeXBlJykudG9nZ2xlKGZhbHNlKTsgICAgICAgICAvL+i1hOa6kOexu+Wei+WFs+mXrVxyXG4gICAgfWVsc2UgaWYoZmxhZyA9PSAyKXsgIC8v5Zy65Zyw55So6YCUXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgY2RVc2VyQ2xhc3M6IG51bGwsXHJcbiAgICAgICAgY2RDaHVadUlkOiAnJywgICAgICAgICAgICAgLy/lh7rnp59cclxuICAgICAgICBjZFNhbGVJZDogJycsICAgICAgICAgICAgICAvL+WHuuWUrlxyXG4gICAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgIC8vNuaJvuWIl+ihqFxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI2NkVXNlcicpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAvL+WcuuWcsOeUqOmAlOWFs+mXrVxyXG4gICAgfWVsc2V7ICAvL+S6p+S4muOAgeihjOS4mlxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGNkSW5kZXg6IDAsICAgICAgICAgICAgICAgICAvL+W9k+WJjee0ouW8lVxyXG4gICAgICAgIGNkSW5kdXN0cnlJZDogbnVsbCwgICAgICAgICAvL+mAieS4reeahGlkXHJcbiAgICAgICAgY2RDeVR5cGVJZDogJycsICAgICAgICAgICAgIC8v5Lqn5LiaaWRcclxuICAgICAgICBjZEh5VHlwZUlkOiAnJywgICAgICAgICAgICAgLy/ooYzkuJppZFxyXG4gICAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgIC8vNuaJvuWIl+ihqFxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI2NkSW5kdXN0cnknKS50b2dnbGUoZmFsc2UpOyAgICAgLy/kuqfkuJrjgIHooYzkuJrlhbPpl61cclxuICAgIH1cclxuICAgIHRoaXMuZ2V0U2l0ZUxpc3QoKTsgICAgICAgICAgICAvLzbmib7lnLrlnLDnu5/orqFcclxuICB9LFxyXG4gIGNkU3VibWl0KGU6YW55KTp2b2lkeyAgLy/mib7lnLrlnLDlrozmiJBcclxuICAgIGxldCBmbGFnOm51bWJlciA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmZsYWc7XHJcbiAgICBpZihmbGFnID09IDEpe1xyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI2NkVHlwZScpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAgLy/otYTmupDnsbvlnovlsZXlvIDlhbPpl63nirbmgIFcclxuICAgIH1lbHNlIGlmKGZsYWcgPT0gMil7XHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjY2RVc2VyJykudG9nZ2xlKGZhbHNlKTsgICAgICAgICAvL+WcuuWcsOeUqOmAlOWxleW8gOWFs+mXreeKtuaAgVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjY2RJbmR1c3RyeScpLnRvZ2dsZShmYWxzZSk7ICAgICAvL+S6p+S4muOAgeihjOS4muWxleW8gOWFs+mXreeKtuaAgVxyXG4gICAgfVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgbnVtOiAwLCAgICAgICAgICAgICAgICAgICAgLy825om+57uT5p6cXHJcbiAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgIC8vNuaJvuWIl+ihqFxyXG4gICAgfSlcclxuICAgIHRoaXMuZ2V0U2l0ZUxpc3QoKTsgICAgICAgICAgICAvLzbmib7lnLrlnLDnu5/orqFcclxuICB9LFxyXG5cclxuXHJcbiAgLy/mib7mnI3liqFcclxuICBmd0ZuKCk6dm9pZHtcclxuICAgIHRoaXMuaGlkZUZuKCk7ICAgICAgICAgICAgICAgLy/pnIDopoHpmpDol4/nmoTlhYPntKBcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGlzU2VhcmNoU2hvdzogdHJ1ZSwgICAgICAgIC8v5pCc57Si57uT5p6c5pWw5o2uXHJcbiAgICAgIGZ3U2VhcmNoSW5mb1Nob3c6IHRydWUsICAgIC8v5pyN5Yqh6auY57qn5pCc57SiXHJcbiAgICB9KVxyXG4gICAgdGhpcy5nZXRTZXJ2aWNlTGlzdCgpOyAgICAgICAvLzbmib7mnI3liqHnu5/orqFcclxuICAgIHRoaXMuZndDYXRlZ29yeSgpOyAgICAgICAgICAgLy/mnI3liqHnsbvliKtcclxuICAgIHRoaXMuZndUeXBlKCk7ICAgICAgICAgICAgICAgLy/ljZXkvY3nsbvlnotcclxuICAgIHRoaXMuZndTY2FsZSgpOyAgICAgICAgICAgICAgLy/ljZXkvY3op4TmqKFcclxuICAgIHRoaXMuaW5kdXN0cnkoKTsgICAgICAgICAgICAgLy/kuqfkuJrjgIHooYzkuJpcclxuICB9LFxyXG4gIGdldFNlcnZpY2VMaXN0KCk6dm9pZHsgICAgICAgICAvLzbmib7mnI3liqHnu5/orqFcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIG1vcmVTaG93OiBmYWxzZSxcclxuICAgIH0pXHJcbiAgICBodHRwcy5zdWNjZXNzUmVxdWVzdChhcGkuZmluZEZ3LCB7XHJcbiAgICAgIHRlbmFudElkOiBhcGkuYXJlYUlkLCAgICAgICAgICAgICAgICAgLy/lnLDljLppZFxyXG4gICAgICBrZXk6IHRoaXMuZGF0YS5zZWFyY2hLZXksICAgICAgICAgICAgIC8v5YWz6ZSu5a2X5pCc57SiXHJcbiAgICAgIHBhZ2VTaXplOiB0aGlzLmRhdGEucGFnZVNpemUsICAgICAgICAgLy/mr4/pobXmmL7npLrmlbDph49cclxuICAgICAgcGFnZUluZGV4OiB0aGlzLmRhdGEucGFnZUluZGV4LCAgICAgICAvL+mhteaVsFxyXG4gICAgICB0eXBlT25lSWQ6IHRoaXMuZGF0YS5md1R5cGVPbmVJZCwgICAgIC8v5pyN5Yqh57G75Yir5LiA57qn6I+c5Y2VXHJcbiAgICAgIHR5cGVUd29JZDogdGhpcy5kYXRhLmZ3VHlwZVR3b0lkLCAgICAgLy/mnI3liqHnsbvliKvkuoznuqfoj5zljZVcclxuICAgICAgZHdTdGF0dXNJZDogdGhpcy5kYXRhLmZ3RHdTdGF0dXNJZCwgICAvL+WNleS9jeexu+Wei2lkXHJcbiAgICAgIGR3U2NhbGVJZDogdGhpcy5kYXRhLmZ3RHdTY2FsZUlkLCAgICAgLy/ljZXkvY3op4TmqKFpZFxyXG4gICAgICBjeVR5cGVJZDogdGhpcy5kYXRhLmZ3Q3lUeXBlSWQsICAgICAgIC8v5Lqn5LiaaWRcclxuICAgICAgaHlUeXBlSWQ6IHRoaXMuZGF0YS5md0h5VHlwZUlkICAgICAgICAvL+ihjOS4mmlkXHJcbiAgICB9LCAnR0VUJykudGhlbigocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICBpZihyZXMpe1xyXG4gICAgICAgIGxldCBuZXdNYXJrZXJzTGlzdDphbnkgPSByZXMubGlzdC5tYXAoKGl0ZW06YW55LCBpbmRleDpudW1iZXIpOmFueT0+e1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGluZGV4LCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9tYXDnlKjnmoToh6rlrprkuYlJRFxyXG4gICAgICAgICAgICBuYW1lOiAn5pyN5YqhJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6K+m5oOF5Yik5patXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZTogaXRlbS5sbmcsICAgICAgICAgICAgICAgICAgICAgICAgIC8v57uP5bqmXHJcbiAgICAgICAgICAgIGxhdGl0dWRlOiBpdGVtLmxhdCwgICAgICAgICAgICAgICAgICAgICAgICAgIC8v57qs5bqmXHJcbiAgICAgICAgICAgIGljb25QYXRoOiAnLi4vLi4vaW1hZ2VzL2Z3LnBuZycsICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIHdpZHRoOiAyNyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNSxcclxuICAgICAgICAgICAgY2FsbG91dDoge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IGl0ZW0ucXlOYW1lP2l0ZW0ucXlOYW1lOifmnKrloavmiqUnLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IDE4LFxyXG4gICAgICAgICAgICAgIGJnQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1LFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNDQ0MnLFxyXG4gICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdCWUNMSUNLJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbGRJZDogaXRlbS5pZCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WOn+Wni0lEXHJcbiAgICAgICAgICAgIHRpdGxlOiBpdGVtLnF5TmFtZT9pdGVtLnF5TmFtZTon5pyq5aGr5oqlJywgICAgICAgICAgICAgICAgICAvL+agh+mimFxyXG4gICAgICAgICAgICBwcm92aW5jZU5hbWU6IGl0ZW0ucHJvdmluY2VOYW1lP2l0ZW0ucHJvdmluY2VOYW1lOicnLCAgICAgLy/nnIFcclxuICAgICAgICAgICAgY2l0eU5hbWU6IGl0ZW0uY2l0eU5hbWU/aXRlbS5jaXR5TmFtZTonJywgICAgICAgICAgICAgICAgIC8v5biCXHJcbiAgICAgICAgICAgIGRpc3RyaWN0TmFtZTogaXRlbS5kaXN0cmljdE5hbWU/aXRlbS5kaXN0cmljdE5hbWU6JycgICAgICAvL+WMulxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYodGhpcy5kYXRhLnRvdGFsID09IDApe1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgbWFya2VyczogbmV3TWFya2Vyc0xpc3QsICAgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgdG90YWw6IHJlcy50b3RhbCwgICAgICAgICAgICAgICAgICAgICAgLy/mgLvmlbBcclxuICAgICAgICAgICAgbXVtTGlzdDogbmV3TWFya2Vyc0xpc3QsICAgICAgICAgICAgICAgIC8v5YiX6KGoXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgbWFya2VyczogdGhpcy5kYXRhLm1hcmtlcnMuY29uY2F0KG5ld01hcmtlcnNMaXN0KSwgICAgICAgICAgICAgICAvL+agh+iusFxyXG4gICAgICAgICAgICBtdW1MaXN0OiB0aGlzLmRhdGEubXVtTGlzdC5jb25jYXQobmV3TWFya2Vyc0xpc3QpLCAgICAgICAgICAgICAgICAvL+WIl+ihqFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5kYXRhLm11bUxpc3QubGVuZ3RoIDwgcmVzLnRvdGFsKXtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIG1vcmVTaG93OiB0cnVlLFxyXG4gICAgICAgICAgICBtb3JlVGl0bGU6ICfngrnlh7vliqDovb3mm7TlpJonLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIG1vcmVTaG93OiB0cnVlLFxyXG4gICAgICAgICAgICBtb3JlVGl0bGU6ICflt7LliqDovb3lhajpg6gnLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIGZ3Q2F0ZWdvcnlOYXZJdGVtKGRhdGE6YW55KTp2b2lkeyAgICAgICAvL+acjeWKoeexu+WIq++8iOW3puS+p+WvvOiIqueCueWHu+aXtu+8jOinpuWPkeeahOS6i+S7tu+8iVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgZndDYXRlZ29yeUluZGV4OiBkYXRhLmRldGFpbC5pbmRleCB8fCAwLFxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBmd0NhdGVnb3J5SXRlbShkYXRhOmFueSk6dm9pZCB7ICAvL+acjeWKoeexu+WIq++8iOW3puS+p+WvvOiIqueCueWHu+aXtu+8jOinpuWPkeeahOS6i+S7tu+8iVxyXG4gICAgY29uc3QgaWQgPSB0aGlzLmRhdGEuZndDYXRlZ29yeUlkID09PSBkYXRhLmRldGFpbC5pZCA/IG51bGwgOiBkYXRhLmRldGFpbC5pZDtcclxuICAgIGNvbnN0IHBJZCA9IHRoaXMuZGF0YS5md0NhdGVnb3J5SWQgPT09IGRhdGEuZGV0YWlsLmlkID8gbnVsbCA6IGRhdGEuZGV0YWlsLmlkO1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgZndDYXRlZ29yeUlkOiBpZCxcclxuICAgICAgZndUeXBlT25lSWQ6IGlkID8gaWQgOiAnJywgICAgICAgICAgICAgICAvL+acjeWKoeexu+WIq+S4gOe6p+iPnOWNlVxyXG4gICAgICBmd1R5cGVUd29JZDogcElkID8gcElkIDogJycsICAgICAgICAgICAgIC8v5pyN5Yqh57G75Yir5LqM57qn6I+c5Y2VIFxyXG4gICAgfSlcclxuICB9LFxyXG4gIGZ3VHlwZUZuKGU6YW55KTp2b2lkeyAgICAvL+WNleS9jeexu+Wei+inpuWPkVxyXG4gICAgbGV0IGlkOmFueSA9IGUudGFyZ2V0LmRhdGFzZXQuaWQ7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBmd1R5cGVDbGFzczogaWQsXHJcbiAgICAgIGZ3RHdTdGF0dXNJZDogaWQsICAgICAgICAvL+WNleS9jeexu+Wei1xyXG4gICAgfSlcclxuICB9LFxyXG4gIGZ3U2NhbGVGbihlOmFueSk6dm9pZHsgICAgLy/ljZXkvY3op4TmqKHop6blj5FcclxuICAgIGxldCBpZDphbnkgPSBlLnRhcmdldC5kYXRhc2V0LmlkO1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgZndTY2FsZUNsYXNzOiBpZCxcclxuICAgICAgZndEd1NjYWxlSWQ6IGlkLCAgICAgICAgLy/ljZXkvY3op4TmqKFcclxuICAgIH0pXHJcbiAgfSxcclxuICBmd05hdkl0ZW0oZGF0YTphbnkpOnZvaWR7ICAgICAgIC8v5om+5pyN5Yqh6KGM5Lia5Lqn5Lia77yI5bem5L6n5a+86Iiq54K55Ye75pe277yM6Kem5Y+R55qE5LqL5Lu277yJXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBmd0luZHVzdHJ5SW5kZXg6IGRhdGEuZGV0YWlsLmluZGV4IHx8IDAsXHJcbiAgICB9KTtcclxuICB9LFxyXG4gIGZ3SW5kdXN0cnlJdGVtKGRhdGE6YW55KTp2b2lkIHsgIC8v5om+5pyN5Yqh6KGM5Lia5Lqn5Lia77yI5Y+z5L6n6YCJ5oup6aG56KKr54K55Ye75pe277yM5Lya6Kem5Y+R55qE5LqL5Lu277yJXHJcbiAgICBjb25zdCBpZCA9IHRoaXMuZGF0YS5md0luZHVzdHJ5SWQgPT09IGRhdGEuZGV0YWlsLmlkID8gbnVsbCA6IGRhdGEuZGV0YWlsLmlkO1xyXG4gICAgY29uc3QgcElkID0gdGhpcy5kYXRhLmZ3SW5kdXN0cnlJZCA9PT0gZGF0YS5kZXRhaWwuaWQgPyBudWxsIDogZGF0YS5kZXRhaWwuaWQ7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBmd0luZHVzdHJ5SWQ6IGlkLFxyXG4gICAgICBmd0N5VHlwZUlkOiBpZCA/IGlkIDogJycsICAgICAgICAgICAgICAgLy/kuqfkuJppZFxyXG4gICAgICBmd0h5VHlwZUlkOiBwSWQgPyBwSWQgOiAnJywgICAgICAgICAgICAgLy/ooYzkuJppZFxyXG4gICAgfSlcclxuICB9LFxyXG4gIGZ3UmVzZXQoZTphbnkpOnZvaWR7ICAvL+aJvuacjeWKoemHjee9rlxyXG4gICAgbGV0IGZsYWc6bnVtYmVyID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuZmxhZztcclxuICAgIGlmKGZsYWcgPT0gMSl7ICAvL+acjeWKoeexu+WIq1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGZ3Q2F0ZWdvcnlJbmRleDogMCwgICAgICAgICAvL+W9k+WJjee0ouW8lVxyXG4gICAgICAgIGZ3Q2F0ZWdvcnlJZDogbnVsbCwgICAgICAgICAvL+mAieS4reeahGlkXHJcbiAgICAgICAgZndUeXBlT25lSWQ6ICcnLCAgICAgICAgICAgIC8v5pyN5Yqh57G75Yir5LiA57qn6I+c5Y2VXHJcbiAgICAgICAgZndUeXBlVHdvSWQ6ICcnLCAgICAgICAgICAgIC8v5pyN5Yqh57G75Yir5LqM57qn6I+c5Y2VXHJcbiAgICAgICAgbnVtOiAwLCAgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgICAvLzbmib7liJfooahcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyNmd0NhdGVnb3J5SWQnKS50b2dnbGUoZmFsc2UpOyAgICAgICAgIC8v5pyN5Yqh57G75Yir5YWz6ZetXHJcbiAgICB9ZWxzZSBpZihmbGFnID09IDIpeyAgLy/ljZXkvY3nsbvlnotcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBmd1R5cGVDbGFzczogbnVsbCxcclxuICAgICAgICBmd0R3U3RhdHVzSWQ6ICcnLCAgICAgICAgICAvL+WNleS9jeexu+Wei1xyXG4gICAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgIC8vNuaJvuWIl+ihqFxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI2Z3VHlwZUlkJykudG9nZ2xlKGZhbHNlKTsgICAgICAgIC8v5Y2V5L2N57G75Z6L5YWz6ZetXHJcbiAgICB9ZWxzZSBpZihmbGFnID09IDMpeyAgLy/ljZXkvY3op4TmqKFcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBmd1NjYWxlQ2xhc3M6IG51bGwsXHJcbiAgICAgICAgZndEd1NjYWxlSWQ6ICcnLCAgICAgICAgICAgLy/ljZXkvY3op4TmqKFcclxuICAgICAgICBudW06IDAsICAgICAgICAgICAgICAgICAgICAvLzbmib7nu5PmnpxcclxuICAgICAgICBtdW1MaXN0OiBbXSwgICAgICAgICAgICAgICAvLzbmib7liJfooahcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyNmd1NjYWxlSWQnKS50b2dnbGUoZmFsc2UpOyAgICAgICAgLy/ljZXkvY3op4TmqKHlhbPpl61cclxuICAgIH1lbHNleyAgLy/kuqfkuJrjgIHooYzkuJpcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBmd0luZHVzdHJ5SW5kZXg6IDAsICAgICAgICAgLy/lvZPliY3ntKLlvJVcclxuICAgICAgICBmd0luZHVzdHJ5SWQ6IG51bGwsICAgICAgICAgLy/pgInkuK3nmoRpZFxyXG4gICAgICAgIGZ3Q3lUeXBlSWQ6ICcnLCAgICAgICAgICAgICAvL+S6p+S4mmlkXHJcbiAgICAgICAgZndIeVR5cGVJZDogJycsICAgICAgICAgICAgIC8v6KGM5LiaaWRcclxuICAgICAgICBudW06IDAsICAgICAgICAgICAgICAgICAgICAvLzbmib7nu5PmnpxcclxuICAgICAgICBtdW1MaXN0OiBbXSwgICAgICAgICAgICAgICAvLzbmib7liJfooahcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyNmd0luZHVzdHJ5SWQnKS50b2dnbGUoZmFsc2UpOyAgICAgLy/kuqfkuJrjgIHooYzkuJrlhbPpl61cclxuICAgIH1cclxuICAgIHRoaXMuZ2V0U2l0ZUxpc3QoKTsgICAgICAgICAgICAvLzbmib7lnLrlnLDnu5/orqFcclxuICB9LFxyXG4gIGZ3U3VibWl0KGU6YW55KTp2b2lkeyAgLy/mib7mnI3liqHlrozmiJBcclxuICAgIGxldCBmbGFnOm51bWJlciA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmZsYWc7XHJcbiAgICBpZihmbGFnID09IDEpe1xyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI2Z3Q2F0ZWdvcnlJZCcpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAgLy/mnI3liqHnsbvliKvlhbPpl61cclxuICAgIH1lbHNlIGlmKGZsYWcgPT0gMil7XHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjZndUeXBlJykudG9nZ2xlKGZhbHNlKTsgICAgICAgIC8v5Y2V5L2N57G75Z6L5YWz6ZetXHJcbiAgICB9ZWxzZSBpZihmbGFnID09IDMpe1xyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI2Z3U2NhbGVJZCcpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAvL+WNleS9jeinhOaooeWFs+mXrVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjZndJbmR1c3RyeUlkJykudG9nZ2xlKGZhbHNlKTsgICAgIC8v5Lqn5Lia44CB6KGM5Lia5YWz6ZetXHJcbiAgICB9XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBudW06IDAsICAgICAgICAgICAgICAgICAgICAvLzbmib7nu5PmnpxcclxuICAgICAgbXVtTGlzdDogW10sICAgICAgICAgICAgICAgLy825om+5YiX6KGoXHJcbiAgICB9KVxyXG4gICAgdGhpcy5nZXRTZXJ2aWNlTGlzdCgpOyAgICAgICAvLzbmib7mnI3liqHnu5/orqFcclxuICB9LFxyXG5cclxuXHJcblxyXG5cclxuICAvL+aJvui1hOmHkVxyXG4gIHpqRm4oKTp2b2lke1xyXG4gICAgdGhpcy5oaWRlRm4oKTsgICAgICAgICAgICAgICAvL+mcgOimgemakOiXj+eahOWFg+e0oFxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgZmxhZzogJ3pqJywgICAgICAgICAgICAgICAgLy/lvZPliY3liJfooahcclxuICAgICAgaXNTZWFyY2hTaG93OiB0cnVlLCAgICAgICAgLy/mkJzntKLnu5PmnpzmlbDmja5cclxuICAgICAgempTZWFyY2hJbmZvU2hvdzogdHJ1ZSwgICAgLy/otYTph5Hlhajpg6jmjInpkq5cclxuICAgIH0pXHJcbiAgICB0aGlzLmdldEFsbEZ1bmRzTGlzdCgpOyAgICAgICAvL+aJvui1hOmHke+8iOWFqOmDqO+8iVxyXG4gIH0sXHJcbiAgZ2V0QWxsRnVuZHNMaXN0KCl7ICAvL+aJvui1hOmHke+8iOWFqOmDqO+8iVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgbW9yZVNob3c6IGZhbHNlLFxyXG4gICAgfSlcclxuICAgIGh0dHBzLnN1Y2Nlc3NSZXF1ZXN0KGFwaS5hbGxGdW5kLCB7XHJcbiAgICAgIHRlbmFudElkOiBhcGkuYXJlYUlkLCAgICAgICAgICAgICAgICAgLy/lnLDljLppZFxyXG4gICAgICBrZXk6IHRoaXMuZGF0YS5zZWFyY2hLZXksICAgICAgICAgICAgIC8v5YWz6ZSu5a2X5pCc57SiXHJcbiAgICAgIHBhZ2VTaXplOiB0aGlzLmRhdGEucGFnZVNpemUsICAgICAgICAgLy/mr4/pobXmmL7npLrmlbDph49cclxuICAgICAgcGFnZUluZGV4OiB0aGlzLmRhdGEucGFnZUluZGV4LCAgICAgICAvL+mhteaVsFxyXG4gICAgfSwgJ0dFVCcpLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgaWYocmVzKXtcclxuICAgICAgICAvL+mHkeiejVxyXG4gICAgICAgIGxldCBqcmpnTWRvZWxzTGlzdDphbnkgPSByZXMudmFsLmpyamdNZG9lbHMubWFwKChpdGVtOmFueSk6YW55PT57XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgbmFtZTogJ+mHkeiejScsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/or6bmg4XliKTmlq1cclxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBpdGVtLmxuZywgICAvL+e7j+W6plxyXG4gICAgICAgICAgICBsYXRpdHVkZTogaXRlbS5sYXQsICAgIC8v57qs5bqmXHJcbiAgICAgICAgICAgIGljb25QYXRoOiAnLi4vLi4vaW1hZ2VzL3pqLnBuZycsICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIHdpZHRoOiAyNyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNSxcclxuICAgICAgICAgICAgY2FsbG91dDoge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IGl0ZW0ucXlOYW1lP2l0ZW0ucXlOYW1lOifmnKrloavmiqUnLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IDE0LFxyXG4gICAgICAgICAgICAgIGJnQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1LFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNDQ0MnLFxyXG4gICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdCWUNMSUNLJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0aXRsZTogaXRlbS5xeU5hbWUsICAgICAgICAgICAgICAgICAgIC8v5qCH6aKYXHJcbiAgICAgICAgICAgIHByb3ZpbmNlTmFtZTogaXRlbS5wcm92aW5jZU5hbWU/aXRlbS5wcm92aW5jZU5hbWU6JycsICAgICAvL+ecgVxyXG4gICAgICAgICAgICBjaXR5TmFtZTogaXRlbS5jaXR5TmFtZT9pdGVtLmNpdHlOYW1lOicnLCAgICAgICAgICAgICAgICAgLy/luIJcclxuICAgICAgICAgICAgZGlzdHJpY3ROYW1lOiBpdGVtLmRpc3RyaWN0TmFtZT9pdGVtLmRpc3RyaWN0TmFtZTonJyAgICAgIC8v5Yy6XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy/mipXotYRcclxuICAgICAgICBsZXQgdHpNb2RlbHNMaXN0OmFueSA9IHJlcy52YWwudHpNb2RlbHMubWFwKChpdGVtOmFueSk6YW55PT57XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgbmFtZTogJ+i1hOmHkScsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/or6bmg4XliKTmlq1cclxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBpdGVtLmxuZywgICAvL+e7j+W6plxyXG4gICAgICAgICAgICBsYXRpdHVkZTogaXRlbS5sYXQsICAgIC8v57qs5bqmXHJcbiAgICAgICAgICAgIGljb25QYXRoOiAnLi4vLi4vaW1hZ2VzL3R6LnBuZycsICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIHdpZHRoOiAyNyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNSxcclxuICAgICAgICAgICAgY2FsbG91dDoge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IGl0ZW0ubmVlZE5hbWU/aXRlbS5uZWVkTmFtZTon5pyq5aGr5oqlJyxcclxuICAgICAgICAgICAgICBjb2xvcjogJyMwMDAnLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAxNCxcclxuICAgICAgICAgICAgICBiZ0NvbG9yOiAnI0ZGRicsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNSxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXHJcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjQ0NDJyxcclxuICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnQllDTElDSydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGl0bGU6IGl0ZW0ubmVlZE5hbWUsICAgICAgICAgICAgICAgICAgIC8v5qCH6aKYXHJcbiAgICAgICAgICAgIHByb3ZpbmNlTmFtZTogaXRlbS5wcm92aW5jZU5hbWU/aXRlbS5wcm92aW5jZU5hbWU6JycsICAgICAvL+ecgVxyXG4gICAgICAgICAgICBjaXR5TmFtZTogaXRlbS5jaXR5TmFtZT9pdGVtLmNpdHlOYW1lOicnLCAgICAgICAgICAgICAgICAgLy/luIJcclxuICAgICAgICAgICAgZGlzdHJpY3ROYW1lOiBpdGVtLmRpc3RyaWN0TmFtZT9pdGVtLmRpc3RyaWN0TmFtZTonJyAgICAgIC8v5Yy6XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8v6J6N6LWE77yI6ZyA5rGC77yJXHJcbiAgICAgICAgbGV0IHJvbmd6aU5lZWRzTGlzdDphbnkgPSByZXMudmFsLnJvbmd6aU5lZWRzLm1hcCgoaXRlbTphbnkpOmFueT0+e1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgIG5hbWU6ICfpnIDmsYInLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6K+m5oOF5Yik5patXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZTogaXRlbS5sbmcsICAgLy/nu4/luqZcclxuICAgICAgICAgICAgbGF0aXR1ZGU6IGl0ZW0ubGF0LCAgICAvL+e6rOW6plxyXG4gICAgICAgICAgICBpY29uUGF0aDogJy4uLy4uL2ltYWdlcy9yei5wbmcnLCAgICAgICAgICAgICAvL+agh+iusFxyXG4gICAgICAgICAgICB3aWR0aDogMjcsXHJcbiAgICAgICAgICAgIGhlaWdodDogMzUsXHJcbiAgICAgICAgICAgIGNhbGxvdXQ6IHtcclxuICAgICAgICAgICAgICBjb250ZW50OiBpdGVtLm5lZWROYW1lP2l0ZW0ubmVlZE5hbWU6J+acquWhq+aKpScsXHJcbiAgICAgICAgICAgICAgY29sb3I6ICcjMDAwJyxcclxuICAgICAgICAgICAgICBmb250U2l6ZTogMTQsXHJcbiAgICAgICAgICAgICAgYmdDb2xvcjogJyNGRkYnLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDUsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI0NDQycsXHJcbiAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ0JZQ0xJQ0snXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRpdGxlOiBpdGVtLm5lZWROYW1lLCAgICAgICAgICAgICAgICAgICAvL+agh+mimFxyXG4gICAgICAgICAgICBwcm92aW5jZU5hbWU6IGl0ZW0ucHJvdmluY2VOYW1lP2l0ZW0ucHJvdmluY2VOYW1lOicnLCAgICAgLy/nnIFcclxuICAgICAgICAgICAgY2l0eU5hbWU6IGl0ZW0uY2l0eU5hbWU/aXRlbS5jaXR5TmFtZTonJywgICAgICAgICAgICAgICAgIC8v5biCXHJcbiAgICAgICAgICAgIGRpc3RyaWN0TmFtZTogaXRlbS5kaXN0cmljdE5hbWU/aXRlbS5kaXN0cmljdE5hbWU6JycgICAgICAvL+WMulxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8v6J6N6LWE77yI6aG555uu77yJXHJcbiAgICAgICAgbGV0IHJvbmd6aVByb3NMaXN0OmFueSA9IHJlcy52YWwucm9uZ3ppUHJvcy5tYXAoKGl0ZW06YW55KTphbnk9PntcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiAn6J6N6LWEJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+ivpuaDheWIpOaWrVxyXG4gICAgICAgICAgICBsb25naXR1ZGU6IGl0ZW0ubG5nLCAgIC8v57uP5bqmXHJcbiAgICAgICAgICAgIGxhdGl0dWRlOiBpdGVtLmxhdCwgICAgLy/nuqzluqZcclxuICAgICAgICAgICAgaWNvblBhdGg6ICcuLi8uLi9pbWFnZXMveG0ucG5nJywgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgd2lkdGg6IDI3LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1LFxyXG4gICAgICAgICAgICBjYWxsb3V0OiB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogaXRlbS5wcm9OYW1lP2l0ZW0ucHJvTmFtZTon5pyq5aGr5oqlJyxcclxuICAgICAgICAgICAgICBjb2xvcjogJyMwMDAnLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAxNCxcclxuICAgICAgICAgICAgICBiZ0NvbG9yOiAnI0ZGRicsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNSxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXHJcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjQ0NDJyxcclxuICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnQllDTElDSydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGl0bGU6IGl0ZW0ucHJvTmFtZSwgICAgICAgICAgICAgICAgICAgLy/moIfpophcclxuICAgICAgICAgICAgcHJvdmluY2VOYW1lOiBpdGVtLnByb3ZpbmNlTmFtZT9pdGVtLnByb3ZpbmNlTmFtZTonJywgICAgIC8v55yBXHJcbiAgICAgICAgICAgIGNpdHlOYW1lOiBpdGVtLmNpdHlOYW1lP2l0ZW0uY2l0eU5hbWU6JycsICAgICAgICAgICAgICAgICAvL+W4glxyXG4gICAgICAgICAgICBkaXN0cmljdE5hbWU6IGl0ZW0uZGlzdHJpY3ROYW1lP2l0ZW0uZGlzdHJpY3ROYW1lOicnICAgICAgLy/ljLpcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvL+WkhOeQhklE5Li65pWw5a2XXHJcbiAgICAgICAgbGV0IGxpc3Q6YW55ICA9IGpyamdNZG9lbHNMaXN0LmNvbmNhdCh0ek1vZGVsc0xpc3QsIHJvbmd6aU5lZWRzTGlzdCwgcm9uZ3ppUHJvc0xpc3QpO1xyXG4gICAgICAgIGxldCBuZXdNYXJrZXJzTGlzdDphbnkgPSBsaXN0Lm1hcCgoaXRlbTphbnksIGluZGV4Om51bWJlcik6YW55PT57XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogaW5kZXgsICAgICAgICAgICAgICAgICAgIC8vbWFw55So55qE6Ieq5a6a5LmJSURcclxuICAgICAgICAgICAgbmFtZTogaXRlbS5uYW1lLCAgICAgICAgICAgICAvL+ivpuaDheWIpOaWrVxyXG4gICAgICAgICAgICBsb25naXR1ZGU6IGl0ZW0ubG9uZ2l0dWRlLCAgIC8v57uP5bqmXHJcbiAgICAgICAgICAgIGxhdGl0dWRlOiBpdGVtLmxhdGl0dWRlLCAgICAgLy/nuqzluqZcclxuICAgICAgICAgICAgaWNvblBhdGg6IGl0ZW0uaWNvblBhdGgsICAgICAvL+agh+iusFxyXG4gICAgICAgICAgICB3aWR0aDogMjcsXHJcbiAgICAgICAgICAgIGhlaWdodDogMzUsXHJcbiAgICAgICAgICAgIGNhbGxvdXQ6IGl0ZW0uY2FsbG91dCxcclxuICAgICAgICAgICAgb2xkSWQ6IGl0ZW0uaWQsICAgICAgICAgICAgICAgICAgICAgIC8v5Y6f5aeLSURcclxuICAgICAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsICAgICAgICAgICAgICAgICAgIC8v5qCH6aKYXHJcbiAgICAgICAgICAgIHByb3ZpbmNlTmFtZTogaXRlbS5wcm92aW5jZU5hbWUsICAgICAvL+ecgVxyXG4gICAgICAgICAgICBjaXR5TmFtZTogaXRlbS5jaXR5TmFtZSwgICAgICAgICAgICAgLy/luIJcclxuICAgICAgICAgICAgZGlzdHJpY3ROYW1lOiBpdGVtLmRpc3RyaWN0TmFtZSAgICAgIC8v5Yy6XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYodGhpcy5kYXRhLnRvdGFsID09IDApe1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgbWFya2VyczogbmV3TWFya2Vyc0xpc3QsICAgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgdG90YWw6IHJlcy52YWwudG90YWwsICAgICAgICAgICAgICAgICAgLy/mgLvmlbBcclxuICAgICAgICAgICAgbXVtTGlzdDogbmV3TWFya2Vyc0xpc3QsICAgICAgICAgICAgICAgIC8v5YiX6KGoXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgbWFya2VyczogdGhpcy5kYXRhLm1hcmtlcnMuY29uY2F0KG5ld01hcmtlcnNMaXN0KSwgICAgICAgICAgICAgICAvL+agh+iusFxyXG4gICAgICAgICAgICBtdW1MaXN0OiB0aGlzLmRhdGEubXVtTGlzdC5jb25jYXQobmV3TWFya2Vyc0xpc3QpLCAgICAgICAgICAgICAgICAvL+WIl+ihqFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5kYXRhLm11bUxpc3QubGVuZ3RoIDwgcmVzLnZhbC50b3RhbCl7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBtb3JlU2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgbW9yZVRpdGxlOiAn54K55Ye75Yqg6L295pu05aSaJyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBtb3JlU2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgbW9yZVRpdGxlOiAn5bey5Yqg6L295YWo6YOoJyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgempCdG5Ub2dnbGUoZTphbnkpOnZvaWR7ICAvL+aJvui1hOmHke+8iOaMiemSrueKtuaAgeWIh+aNou+8iVxyXG4gICAgaWYoZS50YXJnZXQuZGF0YXNldC5udW0gPT0gMSl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7ICAvL+WFqOmDqFxyXG4gICAgICAgIGZsYWc6ICd6aicsICAgICAgICAgICAgICAgICAgICAvL+W9k+WJjeWIl+ihqFxyXG4gICAgICAgIHpqQnRuQ2xhc3M6IGUudGFyZ2V0LmRhdGFzZXQubnVtLFxyXG4gICAgICAgIGpyU2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgICAgICAgICAvL+mrmOe6p+aQnOe0ou+8iOmHkeiejeacjeWKoe+8iVxyXG4gICAgICAgIHR6U2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgICAgICAgICAvL+mrmOe6p+aQnOe0ou+8iOaJvuaKlei1hO+8iVxyXG4gICAgICAgIHJ6U2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgICAgICAgICAvL+mrmOe6p+aQnOe0ou+8iOaJvuiejei1hO+8iVxyXG4gICAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgICAvLzbmib7nu5PmnpxcclxuICAgICAgICBtdW1MaXN0OiBbXSwgICAgICAgICAgICAgICAgLy825om+5YiX6KGoXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuZ2V0QWxsRnVuZHNMaXN0KCk7ICAgICAgIC8vNuaJvui1hOmHkeWFqOmDqFxyXG4gICAgfWVsc2UgaWYoZS50YXJnZXQuZGF0YXNldC5udW0gPT0gMil7ICAvL+mHkeiejeacjeWKoVxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGZsYWc6ICdqcicsICAgICAgICAgICAgICAgICAgICAgICAvL+W9k+WJjeWIl+ihqFxyXG4gICAgICAgIHpqQnRuQ2xhc3M6IGUudGFyZ2V0LmRhdGFzZXQubnVtLFxyXG4gICAgICAgIGpyU2VhcmNoSW5mb1Nob3c6IHRydWUsICAgICAgICAgICAvL+mrmOe6p+aQnOe0ou+8iOmHkeiejeacjeWKoe+8iVxyXG4gICAgICAgIHR6U2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgICAgICAgICAvL+mrmOe6p+aQnOe0ou+8iOaJvuaKlei1hO+8iVxyXG4gICAgICAgIHJ6U2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgICAgICAgICAvL+mrmOe6p+aQnOe0ou+8iOaJvuiejei1hO+8iVxyXG4gICAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgICAgICAgICAvLzbmib7nu5PmnpxcclxuICAgICAgICBtdW1MaXN0OiBbXSwgICAgICAgICAgICAgICAgICAgICAgLy825om+5YiX6KGoXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuZ2V0SnJMaXN0KCk7ICAgICAgICAgICAgLy/mib7otYTph5HvvIjph5Hono3vvIlcclxuICAgICAgdGhpcy5md0NhdGVnb3J5KCk7ICAgICAgICAgICAvL+acjeWKoeexu+WIq1xyXG4gICAgICB0aGlzLmZ3VHlwZSgpOyAgICAgICAgICAgICAgIC8v5Y2V5L2N57G75Z6LXHJcbiAgICAgIHRoaXMuZndTY2FsZSgpOyAgICAgICAgICAgICAgLy/ljZXkvY3op4TmqKFcclxuICAgICAgdGhpcy5pbmR1c3RyeSgpOyAgICAgICAgICAgICAvL+S6p+S4muOAgeihjOS4mlxyXG5cclxuICAgIH1lbHNlIGlmKGUudGFyZ2V0LmRhdGFzZXQubnVtID09IDMpeyAgLy/mib7mipXotYRcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBmbGFnOiAndHonLCAgICAgICAgICAgICAgICAgICAgICAgLy/lvZPliY3liJfooahcclxuICAgICAgICB6akJ0bkNsYXNzOiBlLnRhcmdldC5kYXRhc2V0Lm51bSxcclxuICAgICAgICBqclNlYXJjaEluZm9TaG93OiBmYWxzZSwgICAgICAgICAgLy/pq5jnuqfmkJzntKLvvIjph5Hono3mnI3liqHvvIlcclxuICAgICAgICB0elNlYXJjaEluZm9TaG93OiB0cnVlLCAgICAgICAgICAgLy/pq5jnuqfmkJzntKLvvIjmib7mipXotYTvvIlcclxuICAgICAgICByelNlYXJjaEluZm9TaG93OiBmYWxzZSwgICAgICAgICAgLy/pq5jnuqfmkJzntKLvvIjmib7ono3otYTvvIlcclxuICAgICAgICBudW06IDAsICAgICAgICAgICAgICAgICAgICAgICAgICAgLy825om+57uT5p6cXHJcbiAgICAgICAgbXVtTGlzdDogW10sICAgICAgICAgICAgICAgICAgICAgIC8vNuaJvuWIl+ihqFxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLmdldFR6TGlzdCgpOyAgICAgICAgICAgICAgICAgICAvL+aJvui1hOmHke+8iOaKlei1hO+8iVxyXG4gICAgICB0aGlzLnR6QXJlYSgpOyAgICAgICAgICAgICAgICAgICAgICAvL+aKlei1hOWMuuWfn1xyXG4gICAgICB0aGlzLnR6V2F5KCk7ICAgICAgICAgICAgICAgICAgICAgICAvL+aKlei1hOaWueW8j1xyXG4gICAgICB0aGlzLnR6T3RoZXIoKTsgICAgICAgICAgICAgICAgICAgICAvL+aKlei1hOmHkeminVxyXG4gICAgICB0aGlzLnR6VHlwZSgpOyAgICAgICAgICAgICAgICAgICAgICAvL+aKlei1hOexu+Wei1xyXG4gICAgICB0aGlzLmluZHVzdHJ5KCk7ICAgICAgICAgICAgICAgICAgICAvL+S6p+S4muOAgeihjOS4mlxyXG4gICAgfWVsc2V7ICAvL+aJvuiejei1hFxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGZsYWc6ICdyeicsICAgICAgICAgICAgICAgICAgICAgICAvL+W9k+WJjeWIl+ihqFxyXG4gICAgICAgIHpqQnRuQ2xhc3M6IGUudGFyZ2V0LmRhdGFzZXQubnVtLFxyXG4gICAgICAgIGpyU2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgICAgICAgICAvL+mrmOe6p+aQnOe0ou+8iOmHkeiejeacjeWKoe+8iVxyXG4gICAgICAgIHR6U2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgICAgICAgICAvL+mrmOe6p+aQnOe0ou+8iOaJvuaKlei1hO+8iVxyXG4gICAgICAgIHJ6U2VhcmNoSW5mb1Nob3c6IHRydWUsICAgICAgICAgICAvL+mrmOe6p+aQnOe0ou+8iOaJvuiejei1hO+8iVxyXG4gICAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgICAgICAgICAvLzbmib7nu5PmnpxcclxuICAgICAgICBtdW1MaXN0OiBbXSwgICAgICAgICAgICAgICAgICAgICAgLy825om+5YiX6KGoXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuZ2V0UnpMaXN0KCk7ICAgICAgICAgICAgICAgICAgIC8v5om+6LWE6YeR77yI6J6N6LWE77yJXHJcbiAgICAgIHRoaXMucnpXYXkoKTsgICAgICAgICAgICAgICAgICAgICAgIC8v6J6N6LWE5pa55byPXHJcbiAgICAgIHRoaXMueG1TdGFnZSgpOyAgICAgICAgICAgICAgICAgICAgIC8v5omA5aSE6Zi25q61XHJcbiAgICAgIHRoaXMueG1DYXRlZ29yeSgpOyAgICAgICAgICAgICAgICAgIC8v6ZyA5rGC57G75YirXHJcbiAgICAgIHRoaXMueG1GaW5hbmNpbmcoKTsgICAgICAgICAgICAgICAgIC8v6J6N6LWE6YeR6aKdXHJcbiAgICAgIHRoaXMuaW5kdXN0cnkoKTsgICAgICAgICAgICAgICAgICAgIC8v5Lqn5Lia44CB6KGM5LiaXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcblxyXG4gIC8v5om+6LWE6YeR77yI6YeR6J6N5pyN5Yqh77yJXHJcbiAgZ2V0SnJMaXN0KCl7ICAvL+aJvui1hOmHke+8iOmHkeieje+8iVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgbW9yZVNob3c6IGZhbHNlLFxyXG4gICAgfSlcclxuICAgIGh0dHBzLnN1Y2Nlc3NSZXF1ZXN0KGFwaS5qaW5yb25nLCB7XHJcbiAgICAgIHRlbmFudElkOiBhcGkuYXJlYUlkLCAgICAgICAgICAgICAgICAgLy/lnLDljLppZFxyXG4gICAgICBrZXk6IHRoaXMuZGF0YS5zZWFyY2hLZXksICAgICAgICAgICAgIC8v5YWz6ZSu5a2X5pCc57SiXHJcbiAgICAgIHBhZ2VTaXplOiB0aGlzLmRhdGEucGFnZVNpemUsICAgICAgICAgLy/mr4/pobXmmL7npLrmlbDph49cclxuICAgICAgcGFnZUluZGV4OiB0aGlzLmRhdGEucGFnZUluZGV4LCAgICAgICAvL+mhteaVsFxyXG4gICAgICB0eXBlT25lSWQ6IHRoaXMuZGF0YS5qclR5cGVPbmVJZCwgICAgIC8v5pyN5Yqh57G75Yir5LiA57qn6I+c5Y2VXHJcbiAgICAgIHR5cGVUd29JZDogdGhpcy5kYXRhLmpyVHlwZVR3b0lkLCAgICAgLy/mnI3liqHnsbvliKvkuoznuqfoj5zljZVcclxuICAgICAgZHdTdGF0dXNJZDogdGhpcy5kYXRhLmpyRHdTdGF0dXNJZCwgICAvL+WNleS9jeexu+Wei2lkXHJcbiAgICAgIGR3U2NhbGVJZDogdGhpcy5kYXRhLmpyRHdTY2FsZUlkLCAgICAgLy/ljZXkvY3op4TmqKFpZFxyXG4gICAgICBjeVR5cGVJZDogdGhpcy5kYXRhLmpyQ3lUeXBlSWQsICAgICAgIC8v5Lqn5LiaaWRcclxuICAgICAgaHlUeXBlSWQ6IHRoaXMuZGF0YS5qckh5VHlwZUlkICAgICAgICAvL+ihjOS4mmlkXHJcbiAgICB9LCAnR0VUJykudGhlbigocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICBpZihyZXMpe1xyXG4gICAgICAgIC8v6YeR6J6NXHJcbiAgICAgICAgbGV0IGxpc3Q6YW55ID0gIHJlcy5saXN0Lm1hcCgoaXRlbTphbnksIGluZGV4Om51bWJlcik6YW55PT57XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogaW5kZXgsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL21hcOeUqOeahOiHquWumuS5iUlEXHJcbiAgICAgICAgICAgIG5hbWU6ICfph5Hono0nLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6K+m5oOF5Yik5patXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZTogaXRlbS5sbmcsICAgICAgICAgICAgICAgICAgICAgICAgIC8v57uP5bqmXHJcbiAgICAgICAgICAgIGxhdGl0dWRlOiBpdGVtLmxhdCwgICAgICAgICAgICAgICAgICAgICAgICAgIC8v57qs5bqmXHJcbiAgICAgICAgICAgIGljb25QYXRoOiAnLi4vLi4vaW1hZ2VzL3pqLnBuZycsICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIHdpZHRoOiAyNyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNSxcclxuICAgICAgICAgICAgY2FsbG91dDoge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IGl0ZW0ucXlOYW1lP2l0ZW0ucXlOYW1lOifmnKrloavmiqUnLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IDE4LFxyXG4gICAgICAgICAgICAgIGJnQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1LFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNDQ0MnLFxyXG4gICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdCWUNMSUNLJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbGRJZDogaXRlbS5pZCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/ljp/lp4tJRFxyXG4gICAgICAgICAgICB0aXRsZTogaXRlbS5xeU5hbWU/aXRlbS5xeU5hbWU6J+acquWhq+aKpScsICAgICAgICAgICAgICAgIC8v5qCH6aKYXHJcbiAgICAgICAgICAgIHByb3ZpbmNlTmFtZTogaXRlbS5wcm92aW5jZU5hbWU/aXRlbS5wcm92aW5jZU5hbWU6JycsICAgICAvL+ecgVxyXG4gICAgICAgICAgICBjaXR5TmFtZTogaXRlbS5jaXR5TmFtZT9pdGVtLmNpdHlOYW1lOicnLCAgICAgICAgICAgICAgICAgLy/luIJcclxuICAgICAgICAgICAgZGlzdHJpY3ROYW1lOiBpdGVtLmRpc3RyaWN0TmFtZT9pdGVtLmRpc3RyaWN0TmFtZTonJyAgICAgIC8v5Yy6XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuZGF0YS50b3RhbCA9PSAwKXtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIG1hcmtlcnM6IGxpc3QsICAgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgdG90YWw6IHJlcy50b3RhbCwgICAgICAgLy/mgLvmlbBcclxuICAgICAgICAgICAgbXVtTGlzdDogbGlzdCwgICAgICAgICAgICAgICAgLy/liJfooahcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBtYXJrZXJzOiB0aGlzLmRhdGEubWFya2Vycy5jb25jYXQobGlzdCksICAgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgbXVtTGlzdDogdGhpcy5kYXRhLm11bUxpc3QuY29uY2F0KGxpc3QpLCAgICAgICAgICAgICAgICAvL+WIl+ihqFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMuZGF0YS5tdW1MaXN0Lmxlbmd0aCA8IHJlcy50b3RhbCl7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBtb3JlU2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgbW9yZVRpdGxlOiAn54K55Ye75Yqg6L295pu05aSaJyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBtb3JlU2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgbW9yZVRpdGxlOiAn5bey5Yqg6L295YWo6YOoJyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBqckNhdGVnb3J5TmF2SXRlbShkYXRhOmFueSk6dm9pZHsgICAgICAgLy/mnI3liqHnsbvliKvvvIjlt6bkvqflr7zoiKrngrnlh7vml7bvvIzop6blj5HnmoTkuovku7bvvIlcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGpyQ2F0ZWdvcnlJbmRleDogZGF0YS5kZXRhaWwuaW5kZXggfHwgMCxcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAganJDYXRlZ29yeUl0ZW0oZGF0YTphbnkpOnZvaWQgeyAgLy/mnI3liqHnsbvliKvvvIjlt6bkvqflr7zoiKrngrnlh7vml7bvvIzop6blj5HnmoTkuovku7bvvIlcclxuICAgIGNvbnN0IGlkID0gdGhpcy5kYXRhLmpyQ2F0ZWdvcnlJZCA9PT0gZGF0YS5kZXRhaWwuaWQgPyBudWxsIDogZGF0YS5kZXRhaWwuaWQ7XHJcbiAgICBjb25zdCBwSWQgPSB0aGlzLmRhdGEuanJDYXRlZ29yeUlkID09PSBkYXRhLmRldGFpbC5pZCA/IG51bGwgOiBkYXRhLmRldGFpbC5pZDtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGpyQ2F0ZWdvcnlJZDogaWQsXHJcbiAgICAgIGpyVHlwZU9uZUlkOiBpZCA/IGlkIDogJycsICAgICAgICAgICAgICAgLy/mnI3liqHnsbvliKvkuIDnuqfoj5zljZVcclxuICAgICAganJUeXBlVHdvSWQ6IHBJZCA/IHBJZCA6ICcnLCAgICAgICAgICAgICAvL+acjeWKoeexu+WIq+S6jOe6p+iPnOWNlSBcclxuICAgIH0pXHJcbiAgfSxcclxuICBqclR5cGVGbihlOmFueSk6dm9pZHsgICAgLy/ljZXkvY3nsbvlnovop6blj5FcclxuICAgIGxldCBpZDphbnkgPSBlLnRhcmdldC5kYXRhc2V0LmlkO1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAganJUeXBlQ2xhc3M6IGlkLFxyXG4gICAgICBqckR3U3RhdHVzSWQ6IGlkLCAgICAgICAgLy/ljZXkvY3nsbvlnotcclxuICAgIH0pXHJcbiAgfSxcclxuICBqclNjYWxlRm4oZTphbnkpOnZvaWR7ICAgIC8v5Y2V5L2N6KeE5qih6Kem5Y+RXHJcbiAgICBsZXQgaWQ6YW55ID0gZS50YXJnZXQuZGF0YXNldC5pZDtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGpyU2NhbGVDbGFzczogaWQsXHJcbiAgICAgIGpyRHdTY2FsZUlkOiBpZCwgICAgICAgIC8v5Y2V5L2N6KeE5qihXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAganJOYXZJdGVtKGRhdGE6YW55KTp2b2lkeyAgICAgICAvL+aJvuacjeWKoeihjOS4muS6p+S4mu+8iOW3puS+p+WvvOiIqueCueWHu+aXtu+8jOinpuWPkeeahOS6i+S7tu+8iVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAganJJbmR1c3RyeUluZGV4OiBkYXRhLmRldGFpbC5pbmRleCB8fCAwLFxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBqckluZHVzdHJ5SXRlbShkYXRhOmFueSk6dm9pZCB7ICAvL+aJvuacjeWKoeihjOS4muS6p+S4mu+8iOWPs+S+p+mAieaLqemhueiiq+eCueWHu+aXtu+8jOS8muinpuWPkeeahOS6i+S7tu+8iVxyXG4gICAgY29uc3QgaWQgPSB0aGlzLmRhdGEuanJJbmR1c3RyeUlkID09PSBkYXRhLmRldGFpbC5pZCA/IG51bGwgOiBkYXRhLmRldGFpbC5pZDtcclxuICAgIGNvbnN0IHBJZCA9IHRoaXMuZGF0YS5qckluZHVzdHJ5SWQgPT09IGRhdGEuZGV0YWlsLmlkID8gbnVsbCA6IGRhdGEuZGV0YWlsLmlkO1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAganJJbmR1c3RyeUlkOiBpZCxcclxuICAgICAganJDeVR5cGVJZDogaWQgPyBpZCA6ICcnLCAgICAgICAgICAgICAgIC8v5Lqn5LiaaWRcclxuICAgICAganJIeVR5cGVJZDogcElkID8gcElkIDogJycsICAgICAgICAgICAgIC8v6KGM5LiaaWRcclxuICAgIH0pXHJcbiAgfSxcclxuICBqclJlc2V0KGU6YW55KTp2b2lkeyAgLy/mib7mnI3liqHph43nva5cclxuICAgIGxldCBmbGFnOm51bWJlciA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmZsYWc7XHJcbiAgICBpZihmbGFnID09IDEpeyAgLy/mnI3liqHnsbvliKtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBqckNhdGVnb3J5SW5kZXg6IDAsICAgICAgICAgLy/lvZPliY3ntKLlvJVcclxuICAgICAgICBqckNhdGVnb3J5SWQ6IG51bGwsICAgICAgICAgLy/pgInkuK3nmoRpZFxyXG4gICAgICAgIGpyVHlwZU9uZUlkOiAnJywgICAgICAgICAgICAvL+acjeWKoeexu+WIq+S4gOe6p+iPnOWNlVxyXG4gICAgICAgIGpyVHlwZVR3b0lkOiAnJywgICAgICAgICAgICAvL+acjeWKoeexu+WIq+S6jOe6p+iPnOWNlVxyXG4gICAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgICAvLzbmib7nu5PmnpxcclxuICAgICAgICBtdW1MaXN0OiBbXSwgICAgICAgICAgICAgICAgLy825om+5YiX6KGoXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjanJDYXRlZ29yeUlkJykudG9nZ2xlKGZhbHNlKTsgICAgICAgICAvL+acjeWKoeexu+WIq+WFs+mXrVxyXG4gICAgfWVsc2UgaWYoZmxhZyA9PSAyKXsgIC8v5Y2V5L2N57G75Z6LXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAganJUeXBlQ2xhc3M6IG51bGwsXHJcbiAgICAgICAganJEd1N0YXR1c0lkOiAnJywgICAgICAgICAgLy/ljZXkvY3nsbvlnotcclxuICAgICAgICBudW06IDAsICAgICAgICAgICAgICAgICAgICAvLzbmib7nu5PmnpxcclxuICAgICAgICBtdW1MaXN0OiBbXSwgICAgICAgICAgICAgICAvLzbmib7liJfooahcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyNqclR5cGUnKS50b2dnbGUoZmFsc2UpOyAgICAgICAgLy/ljZXkvY3nsbvlnovlhbPpl61cclxuICAgIH1lbHNlIGlmKGZsYWcgPT0gMyl7ICAvL+WNleS9jeinhOaooVxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGpyU2NhbGVDbGFzczogbnVsbCxcclxuICAgICAgICBqckR3U2NhbGVJZDogJycsICAgICAgICAgICAvL+WNleS9jeinhOaooVxyXG4gICAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgIC8vNuaJvuWIl+ihqFxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI2pyU2NhbGVJZCcpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAvL+WNleS9jeinhOaooeWFs+mXrVxyXG4gICAgfWVsc2V7ICAvL+S6p+S4muOAgeihjOS4mlxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGpySW5kdXN0cnlJbmRleDogMCwgICAgICAgICAvL+W9k+WJjee0ouW8lVxyXG4gICAgICAgIGpySW5kdXN0cnlJZDogbnVsbCwgICAgICAgICAvL+mAieS4reeahGlkXHJcbiAgICAgICAganJDeVR5cGVJZDogJycsICAgICAgICAgICAgIC8v5Lqn5LiaaWRcclxuICAgICAgICBqckh5VHlwZUlkOiAnJywgICAgICAgICAgICAgLy/ooYzkuJppZFxyXG4gICAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgIC8vNuaJvuWIl+ihqFxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI2pySW5kdXN0cnlJZCcpLnRvZ2dsZShmYWxzZSk7ICAgICAvL+S6p+S4muOAgeihjOS4muWFs+mXrVxyXG4gICAgfVxyXG4gICAgdGhpcy5nZXRKckxpc3QoKTsgICAgICAgICAgICAvL+aJvui1hOmHke+8iOmHkeieje+8iVxyXG4gIH0sXHJcbiAganJTdWJtaXQoZTphbnkpOnZvaWR7ICAvL+aJvuacjeWKoeWujOaIkFxyXG4gICAgbGV0IGZsYWc6bnVtYmVyID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuZmxhZztcclxuICAgIGlmKGZsYWcgPT0gMSl7XHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjanJDYXRlZ29yeUlkJykudG9nZ2xlKGZhbHNlKTsgICAgICAgICAvL+acjeWKoeexu+WIq+WFs+mXrVxyXG4gICAgfWVsc2UgaWYoZmxhZyA9PSAyKXtcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyNqclR5cGUnKS50b2dnbGUoZmFsc2UpOyAgICAgICAgICAgICAgIC8v5Y2V5L2N57G75Z6L5YWz6ZetXHJcbiAgICB9ZWxzZSBpZihmbGFnID09IDMpe1xyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI2pyU2NhbGVJZCcpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAgICAgLy/ljZXkvY3op4TmqKHlhbPpl61cclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI2pySW5kdXN0cnlJZCcpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAgLy/kuqfkuJrjgIHooYzkuJrlhbPpl61cclxuICAgIH1cclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICBtdW1MaXN0OiBbXSwgICAgICAgICAgICAgICAvLzbmib7liJfooahcclxuICAgIH0pXHJcbiAgICB0aGlzLmdldEpyTGlzdCgpOyAgICAgICAgICAgIC8v5om+6LWE6YeR77yI6YeR6J6N77yJXHJcbiAgfSxcclxuXHJcbiBcclxuICAvL+aJvui1hOmHke+8iOaKlei1hO+8iVxyXG4gIGdldFR6TGlzdCgpeyAgLy/mib7otYTph5HvvIjmipXotYTvvIlcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIG1vcmVTaG93OiBmYWxzZSxcclxuICAgIH0pXHJcbiAgICBodHRwcy5zdWNjZXNzUmVxdWVzdChhcGkudG91emksIHtcclxuICAgICAgdGVuYW50SWQ6IGFwaS5hcmVhSWQsICAgICAgICAgICAgICAgICAgLy/lnLDljLppZFxyXG4gICAgICBrZXk6IHRoaXMuZGF0YS5zZWFyY2hLZXksICAgICAgICAgICAgIC8v5YWz6ZSu5a2X5pCc57SiXHJcbiAgICAgIHBhZ2VTaXplOiB0aGlzLmRhdGEucGFnZVNpemUsICAgICAgICAgLy/mr4/pobXmmL7npLrmlbDph49cclxuICAgICAgcGFnZUluZGV4OiB0aGlzLmRhdGEucGFnZUluZGV4LCAgICAgICAvL+mhteaVsFxyXG5cclxuICAgICAgdHlwZU9uZUlkOiB0aGlzLmRhdGEuanJUeXBlT25lSWQsICAgICAvL+acjeWKoeexu+WIq+S4gOe6p+iPnOWNlVxyXG4gICAgICB0eXBlVHdvSWQ6IHRoaXMuZGF0YS5qclR5cGVUd29JZCwgICAgIC8v5pyN5Yqh57G75Yir5LqM57qn6I+c5Y2VXHJcbiAgICAgIGR3U3RhdHVzSWQ6IHRoaXMuZGF0YS5qckR3U3RhdHVzSWQsICAgLy/ljZXkvY3nsbvlnotpZFxyXG4gICAgICBkd1NjYWxlSWQ6IHRoaXMuZGF0YS5qckR3U2NhbGVJZCwgICAgIC8v5Y2V5L2N6KeE5qihaWRcclxuICAgICAgY3lUeXBlSWQ6IHRoaXMuZGF0YS5qckN5VHlwZUlkLCAgICAgICAvL+S6p+S4mmlkXHJcbiAgICAgIGh5VHlwZUlkOiB0aGlzLmRhdGEuanJIeVR5cGVJZCAgICAgICAgLy/ooYzkuJppZFxyXG4gICAgfSwgJ0dFVCcpLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgaWYocmVzKXtcclxuXHJcbiAgICAgICAgLy/mipXotYRcclxuICAgICAgICBsZXQgbGlzdDphbnkgPSAgcmVzLmxpc3QubWFwKChpdGVtOmFueSwgaW5kZXg6bnVtYmVyKTphbnk9PntcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBpbmRleCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vbWFw55So55qE6Ieq5a6a5LmJSURcclxuICAgICAgICAgICAgbmFtZTogJ+aKlei1hCcsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/or6bmg4XliKTmlq1cclxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBpdGVtLmxuZywgICAgICAgICAgICAgICAgICAgICAgICAgLy/nu4/luqZcclxuICAgICAgICAgICAgbGF0aXR1ZGU6IGl0ZW0ubGF0LCAgICAgICAgICAgICAgICAgICAgICAgICAgLy/nuqzluqZcclxuICAgICAgICAgICAgaWNvblBhdGg6ICcuLi8uLi9pbWFnZXMvdHoucG5nJywgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgd2lkdGg6IDI3LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1LFxyXG4gICAgICAgICAgICBjYWxsb3V0OiB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogaXRlbS5uZWVkTmFtZT9pdGVtLm5lZWROYW1lOifmnKrloavmiqUnLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IDE4LFxyXG4gICAgICAgICAgICAgIGJnQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1LFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNDQ0MnLFxyXG4gICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdCWUNMSUNLJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbGRJZDogaXRlbS5pZCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/ljp/lp4tJRFxyXG4gICAgICAgICAgICB0aXRsZTogaXRlbS5uZWVkTmFtZT9pdGVtLm5lZWROYW1lOifmnKrloavmiqUnLCAgICAgICAgICAgICAgICAvL+agh+mimFxyXG4gICAgICAgICAgICBwcm92aW5jZU5hbWU6IGl0ZW0ucHJvdmluY2VOYW1lP2l0ZW0ucHJvdmluY2VOYW1lOicnLCAgICAgLy/nnIFcclxuICAgICAgICAgICAgY2l0eU5hbWU6IGl0ZW0uY2l0eU5hbWU/aXRlbS5jaXR5TmFtZTonJywgICAgICAgICAgICAgICAgIC8v5biCXHJcbiAgICAgICAgICAgIGRpc3RyaWN0TmFtZTogaXRlbS5kaXN0cmljdE5hbWU/aXRlbS5kaXN0cmljdE5hbWU6JycgICAgICAvL+WMulxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgICBpZih0aGlzLmRhdGEudG90YWwgPT0gMCl7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBtYXJrZXJzOiBsaXN0LCAgICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIHRvdGFsOiByZXMudG90YWwsICAgICAgIC8v5oC75pWwXHJcbiAgICAgICAgICAgIG11bUxpc3Q6IGxpc3QsICAgICAgICAgICAgICAgIC8v5YiX6KGoXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgbWFya2VyczogdGhpcy5kYXRhLm1hcmtlcnMuY29uY2F0KGxpc3QpLCAgICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIG11bUxpc3Q6IHRoaXMuZGF0YS5tdW1MaXN0LmNvbmNhdChsaXN0KSwgICAgICAgICAgICAgICAgLy/liJfooahcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICBpZih0aGlzLmRhdGEubXVtTGlzdC5sZW5ndGggPCByZXMudG90YWwpe1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgbW9yZVNob3c6IHRydWUsXHJcbiAgICAgICAgICAgIG1vcmVUaXRsZTogJ+eCueWHu+WKoOi9veabtOWkmicsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgbW9yZVNob3c6IHRydWUsXHJcbiAgICAgICAgICAgIG1vcmVUaXRsZTogJ+W3suWKoOi9veWFqOmDqCcsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLmRhdGEubXVtTGlzdC5sZW5ndGggPCByZXMudG90YWwpe1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgbW9yZVNob3c6IHRydWUsXHJcbiAgICAgICAgICAgIG1vcmVUaXRsZTogJ+eCueWHu+WKoOi9veabtOWkmicsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgbW9yZVNob3c6IHRydWUsXHJcbiAgICAgICAgICAgIG1vcmVUaXRsZTogJ+W3suWKoOi9veWFqOmDqCcsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgdHpBcmVhRm4oZTphbnkpOnZvaWR7ICAgIC8v5oqV6LWE5Yy65Z+f6Kem5Y+RXHJcbiAgICBsZXQgaWQ6YW55ID0gZS50YXJnZXQuZGF0YXNldC5pZDtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHR6QXJlYUNsYXNzOiBpZCxcclxuICAgICAgdHpBcmVhSWQ6IGlkLCAgICAgICAgLy/mipXotYTljLrln59JRFxyXG4gICAgfSlcclxuICB9LFxyXG4gIHR6V2F5Rm4oZTphbnkpOnZvaWR7ICAgICAvL+aKlei1hOaWueW8j+inpuWPkVxyXG4gICAgbGV0IGlkOmFueSA9IGUudGFyZ2V0LmRhdGFzZXQuaWQ7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICB0eldheUNsYXNzOiBpZCxcclxuICAgICAgdHpXYXlJZDogaWQsICAgICAgICAgLy/mipXotYTmlrnlvI9JRFxyXG4gICAgfSlcclxuICB9LFxyXG4gIHR6T3RoZXJGbihlOmFueSk6dm9pZHsgICAgIC8v5oqV6LWE6YeR6aKd6Kem5Y+RXHJcbiAgICBsZXQgaWQ6YW55ID0gZS50YXJnZXQuZGF0YXNldC5pZDtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHR6T3RoZXJDbGFzczogaWQsXHJcbiAgICAgIHR6T3RoZXJJZDogaWQsICAgICAgICAgLy/mipXotYTph5Hpop1JRFxyXG4gICAgfSlcclxuICB9LFxyXG4gIHR6VHlwZUZuKGU6YW55KTp2b2lkeyAgICAgIC8v5oqV6LWE57G75Z6L6Kem5Y+RXHJcbiAgICBsZXQgaWQ6YW55ID0gZS50YXJnZXQuZGF0YXNldC5pZDtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHR6VHlwZUNsYXNzOiBpZCxcclxuICAgICAgdHpUeXBlSWQ6IGlkLCAgICAgICAgIC8v5oqV6LWE57G75Z6LSURcclxuICAgIH0pXHJcbiAgfSxcclxuICB0ek5hdkl0ZW0oZGF0YTphbnkpOnZvaWR7ICAgICAgIC8v5om+5oqV6LWE6KGM5Lia5Lqn5Lia77yI5bem5L6n5a+86Iiq54K55Ye75pe277yM6Kem5Y+R55qE5LqL5Lu277yJXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICB0ekluZGV4OiBkYXRhLmRldGFpbC5pbmRleCB8fCAwLFxyXG4gICAgfSk7XHJcbiAgfSxcclxuICB0ekluZHVzdHJ5SXRlbShkYXRhOmFueSk6dm9pZCB7ICAvL+aJvuaKlei1hOihjOS4muS6p+S4mu+8iOWPs+S+p+mAieaLqemhueiiq+eCueWHu+aXtu+8jOS8muinpuWPkeeahOS6i+S7tu+8iVxyXG4gICAgY29uc3QgaWQgPSB0aGlzLmRhdGEudHpJbmR1c3RyeUlkID09PSBkYXRhLmRldGFpbC5pZCA/IG51bGwgOiBkYXRhLmRldGFpbC5pZDtcclxuICAgIGNvbnN0IHBJZCA9IHRoaXMuZGF0YS50ekluZHVzdHJ5SWQgPT09IGRhdGEuZGV0YWlsLmlkID8gbnVsbCA6IGRhdGEuZGV0YWlsLmlkO1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgdHpJbmR1c3RyeUlkOiBpZCxcclxuICAgICAgdHpDeVR5cGVJZDogaWQgPyBpZCA6ICcnLCAgICAgICAgICAgICAgIC8v5Lqn5LiaaWRcclxuICAgICAgdHpIeVR5cGVJZDogcElkID8gcElkIDogJycsICAgICAgICAgICAgIC8v6KGM5LiaaWRcclxuICAgIH0pXHJcbiAgfSxcclxuICB0elJlc2V0KGU6YW55KTp2b2lkeyAgLy/mib7mipXotYTph43nva5cclxuICAgIGxldCBmbGFnOm51bWJlciA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmZsYWc7XHJcbiAgICBpZihmbGFnID09IDEpeyAgLy/mipXotYTljLrln59cclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICB0ekFyZWFDbGFzczogbnVsbCxcclxuICAgICAgICB0ekFyZWFJZDogJycsICAgICAgICAgICAgICAgLy/mipXotYTljLrln59JRFxyXG4gICAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgICAvLzbmib7nu5PmnpxcclxuICAgICAgICBtdW1MaXN0OiBbXSwgICAgICAgICAgICAgICAgLy825om+5YiX6KGoXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjdHpBcmVhSWQnKS50b2dnbGUoZmFsc2UpOyAgICAgICAgIC8v5oqV6LWE5Yy65Z+f5YWz6ZetXHJcbiAgICB9ZWxzZSBpZihmbGFnID09IDIpeyAgLy/mipXotYTmlrnlvI9cclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICB0eldheUNsYXNzOiBudWxsLFxyXG4gICAgICAgIHR6V2F5SWQ6ICcnLCAgICAgICAgICAgICAgLy/mipXotYTmlrnlvI9JRFxyXG4gICAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgIC8vNuaJvuWIl+ihqFxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI3R6V2F5SWQnKS50b2dnbGUoZmFsc2UpOyAgICAgICAgLy/mipXotYTmlrnlvI/lhbPpl61cclxuICAgIH1lbHNlIGlmKGZsYWcgPT0gMyl7ICAvL+S6p+S4muihjOS4mlxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHR6SW5kZXg6IDAsICAgICAgICAgICAgICAgIC8v5b2T5YmN57Si5byVXHJcbiAgICAgICAgdHpJbmR1c3RyeUlkOiBudWxsLCAgICAgICAgLy/pgInkuK3nmoRpZFxyXG4gICAgICAgIHR6Q3lUeXBlSWQ6ICcnLCAgICAgICAgICAgIC8v5Lqn5LiaaWRcclxuICAgICAgICB0ekh5VHlwZUlkOiAnJywgICAgICAgICAgICAvL+ihjOS4mmlkXHJcbiAgICAgICAgbnVtOiAwLCAgICAgICAgICAgICAgICAgICAgLy825om+57uT5p6cXHJcbiAgICAgICAgbXVtTGlzdDogW10sICAgICAgICAgICAgICAgLy825om+5YiX6KGoXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjdHpJbmR1c3RyeUlkJykudG9nZ2xlKGZhbHNlKTsgICAgICAgIC8v5Lqn5Lia6KGM5Lia5YWz6ZetXHJcbiAgICB9ZWxzZXsgIC8v5pu05aSaXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgdHpPdGhlckNsYXNzOiBudWxsLFxyXG4gICAgICAgIHR6T3RoZXJJZDogJycsICAgICAgICAgICAgIC8v5oqV6LWE6YeR6aKdSURcclxuICAgICAgICB0elR5cGVDbGFzczogbnVsbCxcclxuICAgICAgICB0elR5cGVJZDogJycsICAgICAgICAgICAgICAvL+aKlei1hOexu+Wei0lEXHJcbiAgICAgICAgbnVtOiAwLCAgICAgICAgICAgICAgICAgICAgLy825om+57uT5p6cXHJcbiAgICAgICAgbXVtTGlzdDogW10sICAgICAgICAgICAgICAgLy825om+5YiX6KGoXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjdHpNb3JlSWQnKS50b2dnbGUoZmFsc2UpOyAgICAgLy8v5pu05aSa5YWz6ZetXHJcbiAgICB9XHJcbiAgICB0aGlzLmdldFR6TGlzdCgpOyAgICAgICAgICAgIC8v5om+6LWE6YeR77yI6YeR6J6NXHJcbiAgfSxcclxuICB0elN1Ym1pdChlOmFueSk6dm9pZHsgIC8v5om+5oqV6LWE5a6M5oiQXHJcbiAgICBsZXQgZmxhZzpudW1iZXIgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5mbGFnO1xyXG4gICAgaWYoZmxhZyA9PSAxKXtcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyN0ekFyZWFJZCcpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAgLy/mipXotYTljLrln5/lhbPpl61cclxuICAgIH1lbHNlIGlmKGZsYWcgPT0gMil7XHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjdHpXYXlJZCcpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAgIC8v5oqV6LWE5pa55byP5YWz6ZetXHJcbiAgICB9ZWxzZSBpZihmbGFnID09IDMpe1xyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI3R6SW5kdXN0cnlJZCcpLnRvZ2dsZShmYWxzZSk7ICAgICAgLy/kuqfkuJrooYzkuJrlhbPpl61cclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI3R6TW9yZUlkJykudG9nZ2xlKGZhbHNlKTsgICAgICAgICAgLy8v5pu05aSa5YWz6ZetXHJcbiAgICB9XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBudW06IDAsICAgICAgICAgICAgICAgICAgICAvLzbmib7nu5PmnpxcclxuICAgICAgbXVtTGlzdDogW10sICAgICAgICAgICAgICAgLy825om+5YiX6KGoXHJcbiAgICB9KVxyXG4gICAgdGhpcy5nZXRUekxpc3QoKTsgICAgICAgICAgICAvL+aJvui1hOmHke+8iOmHkeiejVxyXG4gIH0sXHJcblxyXG5cclxuXHJcbiAgLy/mib7otYTph5HvvIjono3otYTvvIlcclxuICBnZXRSekxpc3QoKXsgIC8v5om+6LWE6YeR77yI6J6N6LWE77yJXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBtb3JlU2hvdzogZmFsc2UsXHJcbiAgICB9KVxyXG4gICAgaHR0cHMuc3VjY2Vzc1JlcXVlc3QoYXBpLnJvbmd6aSwge1xyXG4gICAgICB0ZW5hbnRJZDogYXBpLmFyZWFJZCwgICAgICAgICAgICAgICAgICAvL+WcsOWMumlkXHJcbiAgICAgIGtleTogdGhpcy5kYXRhLnNlYXJjaEtleSwgICAgICAgICAgICAgLy/lhbPplK7lrZfmkJzntKJcclxuICAgICAgcGFnZVNpemU6IHRoaXMuZGF0YS5wYWdlU2l6ZSwgICAgICAgICAvL+avj+mhteaYvuekuuaVsOmHj1xyXG4gICAgICBwYWdlSW5kZXg6IHRoaXMuZGF0YS5wYWdlSW5kZXgsICAgICAgIC8v6aG15pWwXHJcblxyXG4gICAgICBuZWVkVHlwZXM6IHRoaXMuZGF0YS5yekNhdGVnb3J5SWQsICAgIC8v6ZyA5rGC57G75YirXHJcbiAgICAgIGN1clN0YWdlOiB0aGlzLmRhdGEucnpTdGFnZUlkLCAgICAgICAgLy/miYDlpITpmLbmrrVcclxuICAgICAgcnpXYXk6IHRoaXMuZGF0YS5yeldheUlkLCAgICAgICAgICAgICAvL+iejei1hOaWueW8j1xyXG4gICAgICByek1vbmV5OiB0aGlzLmRhdGEucnpGaW5hbmNpbmdJZCwgICAgIC8v6J6N6LWE6YeR6aKdXHJcbiAgICAgIGN5VHlwZUlkOiB0aGlzLmRhdGEucnpDeVR5cGVJZCwgICAgICAgLy/kuqfkuJppZFxyXG4gICAgICBoeVR5cGVJZDogdGhpcy5kYXRhLnJ6SHlUeXBlSWQgICAgICAgIC8v6KGM5LiaaWRcclxuICAgIH0sICdHRVQnKS50aGVuKChyZXM6YW55KTp2b2lkPT57XHJcbiAgICAgIGlmKHJlcyl7XHJcbiAgICAgICAgLy/ono3otYTvvIjpnIDmsYLvvIlcclxuICAgICAgICBsZXQgcm9uZ3ppTmVlZHNMaXN0OmFueSA9IHJlcy52YWwubmVlZExpc3QubWFwKChpdGVtOmFueSk6YW55PT57XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgbmFtZTogJ+iejei1hCcsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/or6bmg4XliKTmlq1cclxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBpdGVtLmxuZywgICAvL+e7j+W6plxyXG4gICAgICAgICAgICBsYXRpdHVkZTogaXRlbS5sYXQsICAgIC8v57qs5bqmXHJcbiAgICAgICAgICAgIGljb25QYXRoOiAnLi4vLi4vaW1hZ2VzL3J6LnBuZycsICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIHdpZHRoOiAyNyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNSxcclxuICAgICAgICAgICAgY2FsbG91dDoge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IGl0ZW0ubmVlZE5hbWU/aXRlbS5uZWVkTmFtZTon5pyq5aGr5oqlJyxcclxuICAgICAgICAgICAgICBjb2xvcjogJyMwMDAnLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAxNCxcclxuICAgICAgICAgICAgICBiZ0NvbG9yOiAnI0ZGRicsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNSxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXHJcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjQ0NDJyxcclxuICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnQllDTElDSydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGl0bGU6IGl0ZW0ubmVlZE5hbWUsICAgICAgICAgICAgICAgICAgIC8v5qCH6aKYXHJcbiAgICAgICAgICAgIHByb3ZpbmNlTmFtZTogaXRlbS5wcm92aW5jZU5hbWU/aXRlbS5wcm92aW5jZU5hbWU6JycsICAgICAvL+ecgVxyXG4gICAgICAgICAgICBjaXR5TmFtZTogaXRlbS5jaXR5TmFtZT9pdGVtLmNpdHlOYW1lOicnLCAgICAgICAgICAgICAgICAgLy/luIJcclxuICAgICAgICAgICAgZGlzdHJpY3ROYW1lOiBpdGVtLmRpc3RyaWN0TmFtZT9pdGVtLmRpc3RyaWN0TmFtZTonJyAgICAgIC8v5Yy6XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy/ono3otYTvvIjpobnnm67vvIlcclxuICAgICAgICBsZXQgcm9uZ3ppUHJvc0xpc3Q6YW55ID0gcmVzLnZhbC5wcm9MaXN0Lm1hcCgoaXRlbTphbnkpOmFueT0+e1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgIG5hbWU6ICfpobnnm64nLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6K+m5oOF5Yik5patXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZTogaXRlbS5sbmcsICAgLy/nu4/luqZcclxuICAgICAgICAgICAgbGF0aXR1ZGU6IGl0ZW0ubGF0LCAgICAvL+e6rOW6plxyXG4gICAgICAgICAgICBpY29uUGF0aDogJy4uLy4uL2ltYWdlcy94bS5wbmcnLCAgICAgICAgICAgICAvL+agh+iusFxyXG4gICAgICAgICAgICB3aWR0aDogMjcsXHJcbiAgICAgICAgICAgIGhlaWdodDogMzUsXHJcbiAgICAgICAgICAgIGNhbGxvdXQ6IHtcclxuICAgICAgICAgICAgICBjb250ZW50OiBpdGVtLnByb05hbWU/aXRlbS5wcm9OYW1lOifmnKrloavmiqUnLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IDE0LFxyXG4gICAgICAgICAgICAgIGJnQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1LFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNDQ0MnLFxyXG4gICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdCWUNMSUNLJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0aXRsZTogaXRlbS5wcm9OYW1lLCAgICAgICAgICAgICAgICAgICAvL+agh+mimFxyXG4gICAgICAgICAgICBwcm92aW5jZU5hbWU6IGl0ZW0ucHJvdmluY2VOYW1lP2l0ZW0ucHJvdmluY2VOYW1lOicnLCAgICAgLy/nnIFcclxuICAgICAgICAgICAgY2l0eU5hbWU6IGl0ZW0uY2l0eU5hbWU/aXRlbS5jaXR5TmFtZTonJywgICAgICAgICAgICAgICAgIC8v5biCXHJcbiAgICAgICAgICAgIGRpc3RyaWN0TmFtZTogaXRlbS5kaXN0cmljdE5hbWU/aXRlbS5kaXN0cmljdE5hbWU6JycgICAgICAvL+WMulxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8v5aSE55CGSUTkuLrmlbDlrZdcclxuICAgICAgICBsZXQgbGlzdDphbnkgID0gcm9uZ3ppTmVlZHNMaXN0LmNvbmNhdChyb25nemlQcm9zTGlzdCk7XHJcbiAgICAgICAgbGV0IG5ld01hcmtlcnNMaXN0OmFueSA9IGxpc3QubWFwKChpdGVtOmFueSwgaW5kZXg6bnVtYmVyKTphbnk9PntcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBpbmRleCwgICAgICAgICAgICAgICAgICAgLy9tYXDnlKjnmoToh6rlrprkuYlJRFxyXG4gICAgICAgICAgICBuYW1lOiBpdGVtLm5hbWUsICAgICAgICAgICAgIC8v6K+m5oOF5Yik5patXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZTogaXRlbS5sb25naXR1ZGUsICAgLy/nu4/luqZcclxuICAgICAgICAgICAgbGF0aXR1ZGU6IGl0ZW0ubGF0aXR1ZGUsICAgICAvL+e6rOW6plxyXG4gICAgICAgICAgICBpY29uUGF0aDogaXRlbS5pY29uUGF0aCwgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIHdpZHRoOiAyNyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNSxcclxuICAgICAgICAgICAgY2FsbG91dDogaXRlbS5jYWxsb3V0LFxyXG4gICAgICAgICAgICBvbGRJZDogaXRlbS5pZCwgICAgICAgICAgICAgICAgICAgICAgLy/ljp/lp4tJRFxyXG4gICAgICAgICAgICB0aXRsZTogaXRlbS50aXRsZSwgICAgICAgICAgICAgICAgICAgLy/moIfpophcclxuICAgICAgICAgICAgcHJvdmluY2VOYW1lOiBpdGVtLnByb3ZpbmNlTmFtZSwgICAgIC8v55yBXHJcbiAgICAgICAgICAgIGNpdHlOYW1lOiBpdGVtLmNpdHlOYW1lLCAgICAgICAgICAgICAvL+W4glxyXG4gICAgICAgICAgICBkaXN0cmljdE5hbWU6IGl0ZW0uZGlzdHJpY3ROYW1lICAgICAgLy/ljLpcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMuZGF0YS50b3RhbCA9PSAwKXtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIG1hcmtlcnM6IG5ld01hcmtlcnNMaXN0LCAgICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIHRvdGFsOiByZXMudmFsLnRvdGFsLCAgICAgICAgICAgICAgICAgIC8v5oC75pWwXHJcbiAgICAgICAgICAgIG11bUxpc3Q6IG5ld01hcmtlcnNMaXN0LCAgICAgICAgICAgICAgICAvL+WIl+ihqFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIG1hcmtlcnM6IHRoaXMuZGF0YS5tYXJrZXJzLmNvbmNhdChuZXdNYXJrZXJzTGlzdCksICAgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgbXVtTGlzdDogdGhpcy5kYXRhLm11bUxpc3QuY29uY2F0KG5ld01hcmtlcnNMaXN0KSwgICAgICAgICAgICAgICAgLy/liJfooahcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICBpZih0aGlzLmRhdGEubXVtTGlzdC5sZW5ndGggPCByZXMudmFsLnRvdGFsKXtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIG1vcmVTaG93OiB0cnVlLFxyXG4gICAgICAgICAgICBtb3JlVGl0bGU6ICfngrnlh7vliqDovb3mm7TlpJonLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIG1vcmVTaG93OiB0cnVlLFxyXG4gICAgICAgICAgICBtb3JlVGl0bGU6ICflt7LliqDovb3lhajpg6gnLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHJ6Q2F0ZWdvcnlGbihlOmFueSk6dm9pZHsgICAgIC8v6ZyA5rGC57G75Yir6Kem5Y+RXHJcbiAgICBsZXQgaWQ6YW55ID0gZS50YXJnZXQuZGF0YXNldC5pZDtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHJ6Q2F0ZWdvcnlDbGFzczogaWQsXHJcbiAgICAgIHJ6Q2F0ZWdvcnlJZDogaWQsICAgICAgICAgLy/pnIDmsYLnsbvliKtJRFxyXG4gICAgfSlcclxuICB9LFxyXG4gIHJ6U3RhZ2VGbihlOmFueSk6dm9pZHsgICAgIC8v5omA5aSE6Zi25q616Kem5Y+RXHJcbiAgICBsZXQgaWQ6YW55ID0gZS50YXJnZXQuZGF0YXNldC5pZDtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHJ6U3RhZ2VDbGFzczogaWQsXHJcbiAgICAgIHJ6U3RhZ2VJZDogaWQsICAgICAgICAgLy/miYDlpITpmLbmrrVJRFxyXG4gICAgfSlcclxuICB9LFxyXG4gIHJ6V2F5Rm4oZTphbnkpOnZvaWR7ICAgICAgLy/ono3otYTmlrnlvI/op6blj5FcclxuICAgIGxldCBpZDphbnkgPSBlLnRhcmdldC5kYXRhc2V0LmlkO1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgcnpXYXlDbGFzczogaWQsXHJcbiAgICAgIHJ6V2F5SWQ6IGlkLCAgICAgICAgIC8v6J6N6LWE5pa55byPSURcclxuICAgIH0pXHJcbiAgfSxcclxuICByekZpbmFuY2luZ0ZuKGU6YW55KTp2b2lkeyAgICAgLy/ono3otYTph5Hpop3op6blj5FcclxuICAgIGxldCBpZDphbnkgPSBlLnRhcmdldC5kYXRhc2V0LmlkO1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgcnpGaW5hbmNpbmdDbGFzczogaWQsXHJcbiAgICAgIHJ6RmluYW5jaW5nSWQ6IGlkLCAgICAgICAgIC8v6J6N6LWE6YeR6aKdSURcclxuICAgIH0pXHJcbiAgfSxcclxuICByek5hdkl0ZW0oZGF0YTphbnkpOnZvaWR7ICAgICAgIC8v5om+6J6N6LWE6KGM5Lia5Lqn5Lia77yI5bem5L6n5a+86Iiq54K55Ye75pe277yM6Kem5Y+R55qE5LqL5Lu277yJXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICByekluZGV4OiBkYXRhLmRldGFpbC5pbmRleCB8fCAwLFxyXG4gICAgfSk7XHJcbiAgfSxcclxuICByekluZHVzdHJ5SXRlbShkYXRhOmFueSk6dm9pZCB7ICAvL+aJvuiejei1hOihjOS4muS6p+S4mu+8iOWPs+S+p+mAieaLqemhueiiq+eCueWHu+aXtu+8jOS8muinpuWPkeeahOS6i+S7tu+8iVxyXG4gICAgY29uc3QgaWQgPSB0aGlzLmRhdGEucnpJbmR1c3RyeUlkID09PSBkYXRhLmRldGFpbC5pZCA/IG51bGwgOiBkYXRhLmRldGFpbC5pZDtcclxuICAgIGNvbnN0IHBJZCA9IHRoaXMuZGF0YS5yekluZHVzdHJ5SWQgPT09IGRhdGEuZGV0YWlsLmlkID8gbnVsbCA6IGRhdGEuZGV0YWlsLmlkO1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgcnpJbmR1c3RyeUlkOiBpZCxcclxuICAgICAgcnpDeVR5cGVJZDogaWQgPyBpZCA6ICcnLCAgICAgICAgICAgICAgIC8v5Lqn5LiaaWRcclxuICAgICAgcnpIeVR5cGVJZDogcElkID8gcElkIDogJycsICAgICAgICAgICAgIC8v6KGM5LiaaWRcclxuICAgIH0pXHJcbiAgfSxcclxuICByelJlc2V0KGU6YW55KTp2b2lkeyAgLy/mib7ono3otYTph43nva5cclxuICAgIGxldCBmbGFnOm51bWJlciA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmZsYWc7XHJcbiAgICBpZihmbGFnID09IDEpeyAgLy/mib7ono3otYTpnIDmsYLnsbvliKtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICByekNhdGVnb3J5Q2xhc3M6IG51bGwsXHJcbiAgICAgICAgcnpDYXRlZ29yeUlkOiAnJywgICAgICAgICAgIC8v5om+6J6N6LWE6ZyA5rGC57G75YirSURcclxuICAgICAgICBudW06IDAsICAgICAgICAgICAgICAgICAgICAgLy825om+57uT5p6cXHJcbiAgICAgICAgbXVtTGlzdDogW10sICAgICAgICAgICAgICAgIC8vNuaJvuWIl+ihqFxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI3J6Q2F0ZWdvcnlJZCcpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAgLy/mib7ono3otYTpnIDmsYLnsbvliKvlhbPpl61cclxuICAgIH1lbHNlIGlmKGZsYWcgPT0gMil7ICAvL+aJvuiejei1hOaJgOWkhOmYtuautVxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHJ6U3RhZ2VDbGFzczogbnVsbCxcclxuICAgICAgICByelN0YWdlSWQ6ICcnLCAgICAgICAgICAgICAvL+aJvuiejei1hOaJgOWkhOmYtuautUlEXHJcbiAgICAgICAgbnVtOiAwLCAgICAgICAgICAgICAgICAgICAgLy825om+57uT5p6cXHJcbiAgICAgICAgbXVtTGlzdDogW10sICAgICAgICAgICAgICAgLy825om+5YiX6KGoXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjcnpTdGFnZUlkJykudG9nZ2xlKGZhbHNlKTsgICAgICAgIC8v5om+6J6N6LWE5omA5aSE6Zi25q615YWz6ZetXHJcbiAgICB9ZWxzZSBpZihmbGFnID09IDMpeyAgLy/kuqfkuJrooYzkuJpcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICByekluZGV4OiAwLCAgICAgICAgICAgICAgICAvL+W9k+WJjee0ouW8lVxyXG4gICAgICAgIHJ6SW5kdXN0cnlJZDogbnVsbCwgICAgICAgIC8v6YCJ5Lit55qEaWRcclxuICAgICAgICByekN5VHlwZUlkOiAnJywgICAgICAgICAgICAvL+S6p+S4mmlkXHJcbiAgICAgICAgcnpIeVR5cGVJZDogJycsICAgICAgICAgICAgLy/ooYzkuJppZFxyXG4gICAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgIC8vNuaJvuWIl+ihqFxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI3J6SW5kdXN0cnlJZCcpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAvL+S6p+S4muihjOS4muWFs+mXrVxyXG4gICAgfWVsc2V7ICAvL+abtOWkmlxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHJ6V2F5Q2xhc3M6IG51bGwsXHJcbiAgICAgICAgcnpXYXlJZDogJycsICAgICAgICAgICAgICAgLy/mipXotYTph5Hpop1JRFxyXG4gICAgICAgIHJ6RmluYW5jaW5nQ2xhc3M6IG51bGwsXHJcbiAgICAgICAgcnpGaW5hbmNpbmdJZDogJycsICAgICAgICAgLy/mipXotYTnsbvlnotJRFxyXG4gICAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgIC8vNuaJvuWIl+ihqFxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI3J6TW9yZUlkJykudG9nZ2xlKGZhbHNlKTsgICAgIC8vL+abtOWkmuWFs+mXrVxyXG4gICAgfVxyXG4gICAgdGhpcy5nZXRSekxpc3QoKTsgICAgICAgICAgICAvL+aJvui1hOmHke+8iOiejei1hClcclxuICB9LFxyXG4gIHJ6U3VibWl0KGU6YW55KTp2b2lkeyAgLy/mib7ono3otYTlrozmiJBcclxuICAgIGxldCBmbGFnOm51bWJlciA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmZsYWc7XHJcbiAgICBpZihmbGFnID09IDEpe1xyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI3J6Q2F0ZWdvcnlJZCcpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAgLy/mib7ono3otYTpnIDmsYLnsbvliKvlhbPpl61cclxuICAgIH1lbHNlIGlmKGZsYWcgPT0gMil7XHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjcnpTdGFnZUlkJykudG9nZ2xlKGZhbHNlKTsgICAgICAgIC8v5om+6J6N6LWE5omA5aSE6Zi25q615YWz6ZetXHJcbiAgICB9ZWxzZSBpZihmbGFnID09IDMpe1xyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI3J6SW5kdXN0cnlJZCcpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAvL+S6p+S4muihjOS4muWFs+mXrVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjcnpNb3JlSWQnKS50b2dnbGUoZmFsc2UpOyAgICAgICAgICAvLy/mm7TlpJrlhbPpl61cclxuICAgIH1cclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICBtdW1MaXN0OiBbXSwgICAgICAgICAgICAgICAvLzbmib7liJfooahcclxuICAgIH0pXHJcbiAgICB0aGlzLmdldFJ6TGlzdCgpOyAgICAgICAgICAgIC8v5om+6LWE6YeR77yI6J6N6LWEKVxyXG4gIH0sXHJcblxyXG4gIFxyXG5cclxuICAvL+i3r+e6v+WvvOiIqlxyXG4gIG5hdmlnYXRpb24oZTphbnkpOnZvaWR7XHJcbiAgICBpZighIWUuY3VycmVudFRhcmdldC5kYXRhc2V0LmxvbmdpdHVkZSl7ICAvL+WkhOeQhjbmib7liJfooajlr7zoiKpcclxuICAgICAgbGV0IHRpdGxlOnN0cmluZyA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnRpdGxlO1xyXG4gICAgICBsZXQgbG9uZ2l0dWRlOmFueSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmxvbmdpdHVkZTtcclxuICAgICAgbGV0IGxhdGl0dWRlOmFueSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmxhdGl0dWRlO1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGdvTmFtZTogdGl0bGUsXHJcbiAgICAgICAgZ29Mb25naXR1ZGU6IGxvbmdpdHVkZSxcclxuICAgICAgICBnb0xhdGl0dWRlOiBsYXRpdHVkZVxyXG4gICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGVuZFBvaW50OmFueSA9IEpTT04uc3RyaW5naWZ5KHsgIC8v57uI54K5XHJcbiAgICAgICduYW1lJzogdGhpcy5kYXRhLmdvTmFtZSxcclxuICAgICAgJ2xvbmdpdHVkZSc6IHBhcnNlRmxvYXQodGhpcy5kYXRhLmdvTG9uZ2l0dWRlKSxcclxuICAgICAgJ2xhdGl0dWRlJzogcGFyc2VGbG9hdCh0aGlzLmRhdGEuZ29MYXRpdHVkZSlcclxuICAgIH0pO1xyXG5cclxuICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICB1cmw6ICdwbHVnaW46Ly9yb3V0ZVBsYW4vaW5kZXg/a2V5PScgKyBhcGkubWFwQXBpS2V5ICsgJyZyZWZlcmVyPeaJjei1i+S6kScgKyAnJmVuZFBvaW50PScgKyBlbmRQb2ludFxyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcblxyXG4gIC8v6YCJ5oup5biC5Yy6XHJcbiAgbWFwQXJlYSgpOnZvaWR7XHJcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgdXJsOlwiLi4vbWFwQXJlYS9tYXBBcmVhXCJcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcblxyXG4gIC8v5Zyw5Zu+6K+m5oOFXHJcbiAgbWFwRGV0YWlsKGU6YW55KTp2b2lkIHtcclxuICAgIGxldCBuYW1lOlN0cmluZyA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0Lm5hbWU7XHJcbiAgICBsZXQgaWQ6U3RyaW5nID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQ7XHJcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgdXJsOlwiLi4vbWFwRGV0YWlsL21hcERldGFpbD9uYW1lPVwiICsgbmFtZSArICcmaWQ9JyArIGlkXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG5cclxuICAvL+eCueWHu+agh+iusOeCueawlOazoeeql+WPo+inpuWPkVxyXG4gIG1hcmtGbihlOmFueSk6dm9pZCB7XHJcbiAgICAvL+afpeivouWNleadoeaVsOaNrlxyXG4gICAgbGV0IGFycjphbnkgPSB0aGlzLmRhdGEubWFya2Vycy5maWx0ZXIoKGl0ZW06YW55KTphbnk9PntcclxuICAgICAgcmV0dXJuIGl0ZW0uaWQgPT0gZS5kZXRhaWwubWFya2VySWQ7XHJcbiAgICB9KTtcclxuICAgIGlmKGFyci5sZW5ndGggPj0gMSl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgZ29OYW1lOiBhcnJbMF0uY2FsbG91dC5jb250ZW50LCAgICAgICAgIC8v6KaB5Y6755qE5Zyw5Z2AXHJcbiAgICAgICAgZ29Mb25naXR1ZGU6IGFyclswXS5sb25naXR1ZGUsICAgICAgICAgIC8v5Lit5b+D57uP5bqmKOe7iOeCuSlcclxuICAgICAgICBnb0xhdGl0dWRlOiBhcnJbMF0ubGF0aXR1ZGUsICAgICAgICAgICAgLy/kuK3lv4PnuqzluqYo57uI54K5KVxyXG4gICAgICAgIG1hcmtlcnNPYmo6IGFyclswXSwgICAgICAgICAgICAgICAgICAgICAvL+WNleadoeWIl+ihqOaVsOaNrlxyXG4gICAgICAgIGlzTGlzdFNob3c6IGZhbHNlLCAgICAgICAgICAgICAgICAgICAgICAvL+m7mOiupOaYvuekujbmib7lhoXlrrlcclxuICAgICAgICBpc0luZm9TaG93OiB0cnVlLCAgICAgICAgICAgICAgICAgICAgICAgLy/ljZXmnaHkv6Hmga/mmL7npLpcclxuICAgICAgICBpc1NlYXJjaFNob3c6IGZhbHNlLCAgICAgICAgICAgICAgICAgICAgLy/mkJzntKLnu5PmnpzmlbDmja5cclxuICAgICAgICBpc1NlYXJjaEluZm9TaG93OiBmYWxzZSwgICAgICAgICAgICAgICAgLy/mkJzntKLliJfooajmlbDmja5cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG5cclxuXHJcbiAgLy/lhbPpl63ljZXmnaHkv6Hmga/lm57pu5jorqRcclxuICBjbG9zZUZuKCk6dm9pZHtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGlzTGlzdFNob3c6IHRydWUsICAgICAgICAgICAgICAgICAgICAgICAvL+m7mOiupOaYvuekujbmib7lhoXlrrlcclxuICAgICAgaXNJbmZvU2hvdzogZmFsc2UsICAgICAgICAgICAgICAgICAgICAgIC8v5Y2V5p2h5L+h5oGv5pi+56S6XHJcbiAgICAgIGlzU2VhcmNoU2hvdzogZmFsc2UsICAgICAgICAgICAgICAgICAgICAvL+aQnOe0oue7k+aenOaVsOaNrlxyXG4gICAgICBpc1NlYXJjaEluZm9TaG93OiBmYWxzZSwgICAgICAgICAgICAgICAgLy/mkJzntKLliJfooajmlbDmja5cclxuICAgIH0pXHJcbiAgfSxcclxuXHJcblxyXG4gIC8v6aqM6K+B55So5oi355m75b2V54q25oCBXHJcbiAgdmVyaWZpY2F0aW9uKCk6dm9pZHtcclxuICAgIGxldCB0b2tlbjpzdHJpbmcgPSB3eC5nZXRTdG9yYWdlU3luYygndG9rZW4nKTtcclxuICAgIGlmKCEhdG9rZW4pe1xyXG4gICAgICAvL+WIh+aNouWMuueahOaTjeS9nFxyXG4gICAgICBpZihhcGkuYXJlYU5hbWUpe1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBwYWdlU2l6ZTogMTAsICAgICAgICAgICAgICAgLy/mr4/pobXmmL7npLrmlbDph49cclxuICAgICAgICAgIHBhZ2VJbmRleDogMSwgICAgICAgICAgICAgICAvL+W9k+WJjemhtVxyXG4gICAgICAgICAgdG90YWw6IDAsICAgICAgICAgICAgICAgICAgIC8v5oC75p2h5pWwXHJcbiAgICAgICAgICBtYXJrZXJzOiBbXSwgICAgICAgICAgICAgICAgLy/muIXnqbpcclxuXHJcbiAgICAgICAgICBhcmVhTmFtZTogYXBpLmFyZWFOYW1lLFxyXG4gICAgICAgICAgYXJlYUlkOiBhcGkuYXJlYUlkLFxyXG4gICAgICAgICAgbG9uZ2l0dWRlOiBhcGkubG9uZ2l0dWRlLCAgICAvL+S4reW/g+e7j+W6plxyXG4gICAgICAgICAgbGF0aXR1ZGU6IGFwaS5sYXRpdHVkZSAgICAgICAvL+S4reW/g+e6rOW6plxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy90aGlzLmdldE1hcmsoKTsgICAgICAgICAgICAgICAvL+iOt+WPluWcsOWbvuagh+eCuVxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICAvL+esrOS4gOasoei/m+WFpeiOt+WPluW9k+WJjeS9jee9rlxyXG4gICAgICAgIHd4LmdldExvY2F0aW9uKHtcclxuICAgICAgICAgIHR5cGU6ICd3Z3M4NCcsXHJcbiAgICAgICAgICBzdWNjZXNzOihyZXM6YW55KTp2b2lkPT57XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgcGFnZVNpemU6IDEwLCAgICAgICAgICAgICAgIC8v5q+P6aG15pi+56S65pWw6YePXHJcbiAgICAgICAgICAgICAgcGFnZUluZGV4OiAxLCAgICAgICAgICAgICAgIC8v5b2T5YmN6aG1XHJcbiAgICAgICAgICAgICAgdG90YWw6IDAsICAgICAgICAgICAgICAgICAgIC8v5oC75p2h5pWwXHJcbiAgICAgICAgICAgICAgbWFya2VyczogW10sICAgICAgICAgICAgICAgIC8v5riF56m6XHJcblxyXG4gICAgICAgICAgICAgIGxvbmdpdHVkZTogcmVzLmxvbmdpdHVkZSwgICAgLy/kuK3lv4Pnu4/luqZcclxuICAgICAgICAgICAgICBsYXRpdHVkZTogcmVzLmxhdGl0dWRlICAgICAgIC8v5Lit5b+D57qs5bqmIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLmdldEFyZWFMaXN0KCk7ICAgICAgICAgICAgICAgLy/ojrflj5bpnZLlspvmiYDmnInljLpcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIERpYWxvZy5hbGVydCh7XHJcbiAgICAgICAgbWVzc2FnZTogJ+eZu+W9leWQjuaJjeiDveafpeeci+WcsOWbvu+8gScsXHJcbiAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgdXJsOiAnLi4vbG9naW5Gb3JtL2xvZ2luRm9ybSdcclxuICAgICAgICB9KVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvL+iOt+WPluWcsOWbvuagh+eCuVxyXG4gIGdldE1hcmsoKTp2b2lke1xyXG4gICAgaHR0cHMuc3VjY2Vzc1JlcXVlc3QoYXBpLmFsbCx7XHJcbiAgICAgIHRlbmFudElkOiBhcGkuYXJlYUlkLCAgICAgICAgICAgICAgICAgICAgIC8v5Yy6SURcclxuICAgICAgcGFnZVNpemU6IHRoaXMuZGF0YS5wYWdlU2l6ZSwgICAgICAgICAgICAgLy/mr4/pobXmmL7npLrmlbDph49cclxuICAgICAgcGFnZUluZGV4OiB0aGlzLmRhdGEucGFnZUluZGV4LCAgICAgICAgICAgLy/pobXmlbBcclxuICAgIH0sICdHRVQnKS50aGVuKChyZXM6YW55KTp2b2lkPT57XHJcbiAgICAgIGlmKHJlcyl7XHJcbiAgICAgICAgLy/liJvmlrDlubPlj7BcclxuICAgICAgICBsZXQgY3hQbGF0Zm9ybU1vZGVsc0xpc3Q6YW55ID0gcmVzLnZhbC5jeFBsYXRmb3JtTW9kZWxzLm1hcCgoaXRlbTphbnkpOmFueT0+e1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZTogaXRlbS5sbmcsICAgLy/nu4/luqZcclxuICAgICAgICAgICAgbGF0aXR1ZGU6IGl0ZW0ubGF0LCAgICAvL+e6rOW6plxyXG4gICAgICAgICAgICBpY29uUGF0aDogJy4uLy4uL2ltYWdlcy9jeC5wbmcnLCAgICAgICAgICAgICAvL+agh+iusFxyXG4gICAgICAgICAgICB3aWR0aDogMjcsXHJcbiAgICAgICAgICAgIGhlaWdodDogMzUsXHJcbiAgICAgICAgICAgIGNhbGxvdXQ6IHtcclxuICAgICAgICAgICAgICBjb250ZW50OiBpdGVtLnB0TmFtZSxcclxuICAgICAgICAgICAgICBjb2xvcjogJyMwMDAnLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAxNCxcclxuICAgICAgICAgICAgICBiZ0NvbG9yOiAnI0ZGRicsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNSxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXHJcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjQ0NDJyxcclxuICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnQllDTElDSydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcHJvdmluY2VOYW1lOiBpdGVtLnByb3ZpbmNlTmFtZT9pdGVtLnByb3ZpbmNlTmFtZTonJywgICAgIC8v55yBXHJcbiAgICAgICAgICAgIGNpdHlOYW1lOiBpdGVtLmNpdHlOYW1lP2l0ZW0uY2l0eU5hbWU6JycsICAgICAgICAgICAgICAgICAvL+W4glxyXG4gICAgICAgICAgICBkaXN0cmljdE5hbWU6IGl0ZW0uZGlzdHJpY3ROYW1lP2l0ZW0uZGlzdHJpY3ROYW1lOicnICAgICAgLy/ljLpcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvL+WIm+S4muW5s+WPsFxyXG4gICAgICAgIGxldCBjeVBsYXRmb3JtTW9kZWxzTGlzdDphbnkgPSByZXMudmFsLmN5UGxhdGZvcm1Nb2RlbHMubWFwKChpdGVtOmFueSk6YW55PT57XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBpdGVtLmxuZywgICAvL+e7j+W6plxyXG4gICAgICAgICAgICBsYXRpdHVkZTogaXRlbS5sYXQsICAgIC8v57qs5bqmXHJcbiAgICAgICAgICAgIGljb25QYXRoOiAnLi4vLi4vaW1hZ2VzL2N5LnBuZycsICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIHdpZHRoOiAyNyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNSxcclxuICAgICAgICAgICAgY2FsbG91dDoge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IGl0ZW0uY3lOYW1lLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IDE4LFxyXG4gICAgICAgICAgICAgIGJnQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1LFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNDQ0MnLFxyXG4gICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdCWUNMSUNLJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwcm92aW5jZU5hbWU6IGl0ZW0ucHJvdmluY2VOYW1lP2l0ZW0ucHJvdmluY2VOYW1lOicnLCAgICAgLy/nnIFcclxuICAgICAgICAgICAgY2l0eU5hbWU6IGl0ZW0uY2l0eU5hbWU/aXRlbS5jaXR5TmFtZTonJywgICAgICAgICAgICAgICAgIC8v5biCXHJcbiAgICAgICAgICAgIGRpc3RyaWN0TmFtZTogaXRlbS5kaXN0cmljdE5hbWU/aXRlbS5kaXN0cmljdE5hbWU6JycgICAgICAvL+WMulxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8v5om+6aG555uuXHJcbiAgICAgICAgbGV0IHByb01vZGVsc0xpc3Q6YW55ID0gcmVzLnZhbC5wcm9Nb2RlbHMubWFwKChpdGVtOmFueSk6YW55PT57XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBpdGVtLmxuZywgICAvL+e7j+W6plxyXG4gICAgICAgICAgICBsYXRpdHVkZTogaXRlbS5sYXQsICAgIC8v57qs5bqmXHJcbiAgICAgICAgICAgIGljb25QYXRoOiAnLi4vLi4vaW1hZ2VzL3htLnBuZycsICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIHdpZHRoOiAyNyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNSxcclxuICAgICAgICAgICAgY2FsbG91dDoge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IGl0ZW0ucHJvTmFtZSxcclxuICAgICAgICAgICAgICBjb2xvcjogJyMwMDAnLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAxOCxcclxuICAgICAgICAgICAgICBiZ0NvbG9yOiAnI0ZGRicsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNSxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXHJcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjQ0NDJyxcclxuICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnQllDTElDSydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcHJvdmluY2VOYW1lOiBpdGVtLnByb3ZpbmNlTmFtZT9pdGVtLnByb3ZpbmNlTmFtZTonJywgICAgIC8v55yBXHJcbiAgICAgICAgICAgIGNpdHlOYW1lOiBpdGVtLmNpdHlOYW1lP2l0ZW0uY2l0eU5hbWU6JycsICAgICAgICAgICAgICAgICAvL+W4glxyXG4gICAgICAgICAgICBkaXN0cmljdE5hbWU6IGl0ZW0uZGlzdHJpY3ROYW1lP2l0ZW0uZGlzdHJpY3ROYW1lOicnICAgICAgLy/ljLpcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy/mib7mnI3liqHmnLrmnoRcclxuICAgICAgICBsZXQgZndqZ01vZGVsc0xpc3Q6YW55ID0gcmVzLnZhbC5md2pnTW9kZWxzLm1hcCgoaXRlbTphbnkpOmFueT0+e1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZTogaXRlbS5sbmcsICAgLy/nu4/luqZcclxuICAgICAgICAgICAgbGF0aXR1ZGU6IGl0ZW0ubGF0LCAgICAvL+e6rOW6plxyXG4gICAgICAgICAgICBpY29uUGF0aDogJy4uLy4uL2ltYWdlcy9mdy5wbmcnLCAgICAgICAgICAgICAvL+agh+iusFxyXG4gICAgICAgICAgICB3aWR0aDogMjcsXHJcbiAgICAgICAgICAgIGhlaWdodDogMzUsXHJcbiAgICAgICAgICAgIGNhbGxvdXQ6IHtcclxuICAgICAgICAgICAgICBjb250ZW50OiBpdGVtLnF5TmFtZSAsXHJcbiAgICAgICAgICAgICAgY29sb3I6ICcjMDAwJyxcclxuICAgICAgICAgICAgICBmb250U2l6ZTogMTgsXHJcbiAgICAgICAgICAgICAgYmdDb2xvcjogJyNGRkYnLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDUsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI0NDQycsXHJcbiAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ0JZQ0xJQ0snXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHByb3ZpbmNlTmFtZTogaXRlbS5wcm92aW5jZU5hbWU/aXRlbS5wcm92aW5jZU5hbWU6JycsICAgICAvL+ecgVxyXG4gICAgICAgICAgICBjaXR5TmFtZTogaXRlbS5jaXR5TmFtZT9pdGVtLmNpdHlOYW1lOicnLCAgICAgICAgICAgICAgICAgLy/luIJcclxuICAgICAgICAgICAgZGlzdHJpY3ROYW1lOiBpdGVtLmRpc3RyaWN0TmFtZT9pdGVtLmRpc3RyaWN0TmFtZTonJyAgICAgIC8v5Yy6XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy/mib7lnLrlnLBcclxuICAgICAgICBsZXQgdmVjdG9yTW9kZWxzTGlzdDphbnkgPSByZXMudmFsLnZlY3Rvck1vZGVscy5tYXAoKGl0ZW06YW55KTphbnk9PntcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICBsb25naXR1ZGU6IGl0ZW0ubG5nLCAgIC8v57uP5bqmXHJcbiAgICAgICAgICAgIGxhdGl0dWRlOiBpdGVtLmxhdCwgICAgLy/nuqzluqZcclxuICAgICAgICAgICAgaWNvblBhdGg6ICcuLi8uLi9pbWFnZXMvY2QucG5nJywgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgd2lkdGg6IDI3LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1LFxyXG4gICAgICAgICAgICBjYWxsb3V0OiB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogaXRlbS5jeXp0TmFtZSAgLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IDE4LFxyXG4gICAgICAgICAgICAgIGJnQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1LFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNDQ0MnLFxyXG4gICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdCWUNMSUNLJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwcm92aW5jZU5hbWU6IGl0ZW0ucHJvdmluY2VOYW1lP2l0ZW0ucHJvdmluY2VOYW1lOicnLCAgICAgLy/nnIFcclxuICAgICAgICAgICAgY2l0eU5hbWU6IGl0ZW0uY2l0eU5hbWU/aXRlbS5jaXR5TmFtZTonJywgICAgICAgICAgICAgICAgIC8v5biCXHJcbiAgICAgICAgICAgIGRpc3RyaWN0TmFtZTogaXRlbS5kaXN0cmljdE5hbWU/aXRlbS5kaXN0cmljdE5hbWU6JycgICAgICAvL+WMulxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8v5om+6YeR6J6N5py65p6EXHJcbiAgICAgICAgbGV0IGpyamdNZG9lbHNMaXN0OmFueSA9IHJlcy52YWwuanJqZ01kb2Vscy5tYXAoKGl0ZW06YW55KTphbnk9PntcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICBsb25naXR1ZGU6IGl0ZW0ubG5nLCAgIC8v57uP5bqmXHJcbiAgICAgICAgICAgIGxhdGl0dWRlOiBpdGVtLmxhdCwgICAgLy/nuqzluqZcclxuICAgICAgICAgICAgaWNvblBhdGg6ICcuLi8uLi9pbWFnZXMvemoucG5nJywgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgd2lkdGg6IDI3LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1LFxyXG4gICAgICAgICAgICBjYWxsb3V0OiB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogaXRlbS5xeU5hbWUsXHJcbiAgICAgICAgICAgICAgY29sb3I6ICcjMDAwJyxcclxuICAgICAgICAgICAgICBmb250U2l6ZTogMTgsXHJcbiAgICAgICAgICAgICAgYmdDb2xvcjogJyNGRkYnLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDUsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI0NDQycsXHJcbiAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ0JZQ0xJQ0snXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHByb3ZpbmNlTmFtZTogaXRlbS5wcm92aW5jZU5hbWU/aXRlbS5wcm92aW5jZU5hbWU6JycsICAgICAvL+ecgVxyXG4gICAgICAgICAgICBjaXR5TmFtZTogaXRlbS5jaXR5TmFtZT9pdGVtLmNpdHlOYW1lOicnLCAgICAgICAgICAgICAgICAgLy/luIJcclxuICAgICAgICAgICAgZGlzdHJpY3ROYW1lOiBpdGVtLmRpc3RyaWN0TmFtZT9pdGVtLmRpc3RyaWN0TmFtZTonJyAgICAgIC8v5Yy6XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy/mib7mipXotYTpnIDmsYJcclxuICAgICAgICBsZXQgdHpNb2RlbHNMaXN0OmFueSA9IHJlcy52YWwudHpNb2RlbHMubWFwKChpdGVtOmFueSk6YW55PT57XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBpdGVtLmxuZywgICAvL+e7j+W6plxyXG4gICAgICAgICAgICBsYXRpdHVkZTogaXRlbS5sYXQsICAgIC8v57qs5bqmXHJcbiAgICAgICAgICAgIGljb25QYXRoOiAnLi4vLi4vaW1hZ2VzL3R6LnBuZycsICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIHdpZHRoOiAyNyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNSxcclxuICAgICAgICAgICAgY2FsbG91dDoge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IGl0ZW0ubmVlZE5hbWUgICAsXHJcbiAgICAgICAgICAgICAgY29sb3I6ICcjMDAwJyxcclxuICAgICAgICAgICAgICBmb250U2l6ZTogMTgsXHJcbiAgICAgICAgICAgICAgYmdDb2xvcjogJyNGRkYnLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDUsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI0NDQycsXHJcbiAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ0JZQ0xJQ0snXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHByb3ZpbmNlTmFtZTogaXRlbS5wcm92aW5jZU5hbWU/aXRlbS5wcm92aW5jZU5hbWU6JycsICAgICAvL+ecgVxyXG4gICAgICAgICAgICBjaXR5TmFtZTogaXRlbS5jaXR5TmFtZT9pdGVtLmNpdHlOYW1lOicnLCAgICAgICAgICAgICAgICAgLy/luIJcclxuICAgICAgICAgICAgZGlzdHJpY3ROYW1lOiBpdGVtLmRpc3RyaWN0TmFtZT9pdGVtLmRpc3RyaWN0TmFtZTonJyAgICAgIC8v5Yy6XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy/mib7ono3otYTpnIDmsYLvvIjpobnnm67lupPnmoTono3otYQ36aG577yJXHJcbiAgICAgICAgbGV0IHJvbmd6aVByb3NMaXN0OmFueSA9IHJlcy52YWwucm9uZ3ppUHJvcy5tYXAoKGl0ZW06YW55KTphbnk9PntcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICBsb25naXR1ZGU6IGl0ZW0ubG5nLCAgIC8v57uP5bqmXHJcbiAgICAgICAgICAgIGxhdGl0dWRlOiBpdGVtLmxhdCwgICAgLy/nuqzluqZcclxuICAgICAgICAgICAgaWNvblBhdGg6ICcuLi8uLi9pbWFnZXMvcnoucG5nJywgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgd2lkdGg6IDI3LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1LFxyXG4gICAgICAgICAgICBjYWxsb3V0OiB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogaXRlbS5wcm9OYW1lICxcclxuICAgICAgICAgICAgICBjb2xvcjogJyMwMDAnLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAxOCxcclxuICAgICAgICAgICAgICBiZ0NvbG9yOiAnI0ZGRicsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNSxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXHJcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjQ0NDJyxcclxuICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnQllDTElDSydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcHJvdmluY2VOYW1lOiBpdGVtLnByb3ZpbmNlTmFtZT9pdGVtLnByb3ZpbmNlTmFtZTonJywgICAgIC8v55yBXHJcbiAgICAgICAgICAgIGNpdHlOYW1lOiBpdGVtLmNpdHlOYW1lP2l0ZW0uY2l0eU5hbWU6JycsICAgICAgICAgICAgICAgICAvL+W4glxyXG4gICAgICAgICAgICBkaXN0cmljdE5hbWU6IGl0ZW0uZGlzdHJpY3ROYW1lP2l0ZW0uZGlzdHJpY3ROYW1lOicnICAgICAgLy/ljLpcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvL+aJvuiejei1hOmcgOaxgu+8iOmcgOaxguW6k+eahOiejei1hDfpobnvvIlcclxuICAgICAgICBsZXQgcm9uZ3ppTmVlZHNMaXN0OmFueSA9IHJlcy52YWwucm9uZ3ppTmVlZHMubWFwKChpdGVtOmFueSk6YW55PT57XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBpdGVtLmxuZywgICAvL+e7j+W6plxyXG4gICAgICAgICAgICBsYXRpdHVkZTogaXRlbS5sYXQsICAgIC8v57qs5bqmXHJcbiAgICAgICAgICAgIGljb25QYXRoOiAnLi4vLi4vaW1hZ2VzL3J6LnBuZycsICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIHdpZHRoOiAyNyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNSxcclxuICAgICAgICAgICAgY2FsbG91dDoge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IGl0ZW0ubmVlZE5hbWUsXHJcbiAgICAgICAgICAgICAgY29sb3I6ICcjMDAwJyxcclxuICAgICAgICAgICAgICBmb250U2l6ZTogMTgsXHJcbiAgICAgICAgICAgICAgYmdDb2xvcjogJyNGRkYnLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDUsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI0NDQycsXHJcbiAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ0JZQ0xJQ0snXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHByb3ZpbmNlTmFtZTogaXRlbS5wcm92aW5jZU5hbWU/aXRlbS5wcm92aW5jZU5hbWU6JycsICAgICAvL+ecgVxyXG4gICAgICAgICAgICBjaXR5TmFtZTogaXRlbS5jaXR5TmFtZT9pdGVtLmNpdHlOYW1lOicnLCAgICAgICAgICAgICAgICAgLy/luIJcclxuICAgICAgICAgICAgZGlzdHJpY3ROYW1lOiBpdGVtLmRpc3RyaWN0TmFtZT9pdGVtLmRpc3RyaWN0TmFtZTonJyAgICAgIC8v5Yy6XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy/lpITnkIZJROS4uuaVsOWtl1xyXG4gICAgICAgIGxldCBtYXJrZXJzTGlzdDphbnkgID0gdGhpcy5kYXRhLm1hcmtlcnMuY29uY2F0KGN4UGxhdGZvcm1Nb2RlbHNMaXN0LGN5UGxhdGZvcm1Nb2RlbHNMaXN0LHByb01vZGVsc0xpc3QsZndqZ01vZGVsc0xpc3QsdmVjdG9yTW9kZWxzTGlzdCxqcmpnTWRvZWxzTGlzdCx0ek1vZGVsc0xpc3Qscm9uZ3ppUHJvc0xpc3Qscm9uZ3ppTmVlZHNMaXN0KTtcclxuICAgICAgICBsZXQgbmV3TWFya2Vyc0xpc3Q6YW55ID0gbWFya2Vyc0xpc3QubWFwKChpdGVtOmFueSwgaW5kZXg6bnVtYmVyKTphbnk9PntcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBpbmRleCwgICAgICAgICAgICAgICAgICAgLy9tYXDnlKjnmoToh6rlrprkuYlJRFxyXG4gICAgICAgICAgICBsb25naXR1ZGU6IGl0ZW0ubG9uZ2l0dWRlLCAgIC8v57uP5bqmXHJcbiAgICAgICAgICAgIGxhdGl0dWRlOiBpdGVtLmxhdGl0dWRlLCAgICAgLy/nuqzluqZcclxuICAgICAgICAgICAgaWNvblBhdGg6IGl0ZW0uaWNvblBhdGgsICAgICAvL+agh+iusFxyXG4gICAgICAgICAgICB3aWR0aDogMjcsXHJcbiAgICAgICAgICAgIGhlaWdodDogMzUsXHJcbiAgICAgICAgICAgIGNhbGxvdXQ6IGl0ZW0uY2FsbG91dCxcclxuICAgICAgICAgICAgb2xkSWQ6IGl0ZW0uaWQsICAgICAgICAgICAgICAgICAgICAgIC8v5Y6f5aeLSURcclxuICAgICAgICAgICAgdGl0bGU6IGl0ZW0uY2FsbG91dC5jb250ZW50LCAgICAgICAgIC8v5qCH6aKYXHJcbiAgICAgICAgICAgIHByb3ZpbmNlTmFtZTogaXRlbS5wcm92aW5jZU5hbWUsICAgICAvL+ecgVxyXG4gICAgICAgICAgICBjaXR5TmFtZTogaXRlbS5jaXR5TmFtZSwgICAgICAgICAgICAgLy/luIJcclxuICAgICAgICAgICAgZGlzdHJpY3ROYW1lOiBpdGVtLmRpc3RyaWN0TmFtZSAgICAgIC8v5Yy6XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYodGhpcy5kYXRhLnRvdGFsID09IDApe1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgbWFya2VyczogbmV3TWFya2Vyc0xpc3QsXHJcbiAgICAgICAgICAgIHRvdGFsOiByZXMudmFsLnRvdGFsICAgICAgICAgLy/mgLvmlbBcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBtYXJrZXJzOiBuZXdNYXJrZXJzTGlzdFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICAvL+iOt+WPluW4guWMulxyXG4gIGdldEFyZWFMaXN0KCk6dm9pZHtcclxuICAgIGh0dHBzLnN1Y2Nlc3NSZXF1ZXN0KGFwaS50ZW5hbnRzLCBudWxsLCAnR0VUJykudGhlbigocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICBpZihyZXMpe1xyXG4gICAgICAgIGxldCBsaXN0OmFueSA9IHJlcy5saXN0Lm1hcCgoaXRlbTphbnkpOmFueT0+e1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGl0ZW0ubW9kZWwuaWQsXHJcbiAgICAgICAgICAgIHRpdGxlOiBpdGVtLm1vZGVsLmNuYW1lXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBsZXQgbmV3TGlzdDphbnkgPSBbXTtcclxuICAgICAgICBsaXN0LmZvckVhY2goKGl0ZW06YW55KTp2b2lkPT57XHJcbiAgICAgICAgICBpZihpdGVtLnRpdGxlID09ICfmnY7msqfljLonKXtcclxuICAgICAgICAgICAgbmV3TGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgICB0aXRsZTogaXRlbS50aXRsZSxcclxuICAgICAgICAgICAgICBsb25naXR1ZGU6ICcxMjAuNDM5NjAxJywgICAgICAvL+S4reW/g+e7j+W6plxyXG4gICAgICAgICAgICAgIGxhdGl0dWRlOiAnMzYuMTUxNTg2JywgICAgICAgIC8v5Lit5b+D57qs5bqmXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZihpdGVtLnRpdGxlID09ICfluILljJfljLonKXtcclxuICAgICAgICAgICAgbmV3TGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgICB0aXRsZTogaXRlbS50aXRsZSxcclxuICAgICAgICAgICAgICBsb25naXR1ZGU6ICcxMjAuMzgwMzg1JywgICAgICAgICAgLy/kuK3lv4Pnu4/luqZcclxuICAgICAgICAgICAgICBsYXRpdHVkZTogJzM2LjA5MzUxMicsICAgICAgICAgICAgLy/kuK3lv4PnuqzluqZcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmKGl0ZW0udGl0bGUgPT0gJ+ilv+a1t+WyuOaWsOWMuicpe1xyXG4gICAgICAgICAgICBuZXdMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiBpdGVtLnRpdGxlLFxyXG4gICAgICAgICAgICAgIGxvbmdpdHVkZTogJzEyMC4yMDQ0NicsICAgICAgICAgIC8v5Lit5b+D57uP5bqmXHJcbiAgICAgICAgICAgICAgbGF0aXR1ZGU6ICczNS45NjYyNTEnLCAgICAgICAgICAgLy/kuK3lv4PnuqzluqZcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmKGl0ZW0udGl0bGUgPT0gJ+W4guWNl+WMuicpe1xyXG4gICAgICAgICAgICBuZXdMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiBpdGVtLnRpdGxlLFxyXG4gICAgICAgICAgICAgIGxvbmdpdHVkZTogJzEyMC40MTk0ODcnLCAgICAgICAgIC8v5Lit5b+D57uP5bqmXHJcbiAgICAgICAgICAgICAgbGF0aXR1ZGU6ICczNi4wODA5MjQnLCAgICAgICAgICAgLy/kuK3lv4PnuqzluqZcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmKGl0ZW0udGl0bGUgPT0gJ+W0guWxseWMuicpe1xyXG4gICAgICAgICAgICBuZXdMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiBpdGVtLnRpdGxlLFxyXG4gICAgICAgICAgICAgIGxvbmdpdHVkZTogJzEyMC40NzU1MzMnLCAgICAgICAgIC8v5Lit5b+D57uP5bqmXHJcbiAgICAgICAgICAgICAgbGF0aXR1ZGU6ICczNi4xMTM1NzUnLCAgICAgICAgICAgLy/kuK3lv4PnuqzluqZcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmKGl0ZW0udGl0bGUgPT0gJ+WfjumYs+WMuicpe1xyXG4gICAgICAgICAgICBuZXdMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiBpdGVtLnRpdGxlLFxyXG4gICAgICAgICAgICAgIGxvbmdpdHVkZTogJzEyMC40MDMwOTQnLCAgICAgICAgIC8v5Lit5b+D57uP5bqmXHJcbiAgICAgICAgICAgICAgbGF0aXR1ZGU6ICczNi4zMTI5ODUnLCAgICAgICAgICAgLy/kuK3lv4PnuqzluqZcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmKGl0ZW0udGl0bGUgPT0gJ+WNs+WiqOWMuicpe1xyXG4gICAgICAgICAgICBuZXdMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiBpdGVtLnRpdGxlLFxyXG4gICAgICAgICAgICAgIGxvbmdpdHVkZTogJzEyMC40NTM5NzQnLCAgICAgICAgIC8v5Lit5b+D57uP5bqmXHJcbiAgICAgICAgICAgICAgbGF0aXR1ZGU6ICczNi4zOTU1MzQnLCAgICAgICAgICAgLy/kuK3lv4PnuqzluqZcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmKGl0ZW0udGl0bGUgPT0gJ+iDtuW3nuW4gicpe1xyXG4gICAgICAgICAgICBuZXdMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiBpdGVtLnRpdGxlLFxyXG4gICAgICAgICAgICAgIGxvbmdpdHVkZTogJzEyMC4wMzkxNzInLCAgICAgICAgICAvL+S4reW/g+e7j+W6plxyXG4gICAgICAgICAgICAgIGxhdGl0dWRlOiAnMzYuMjcwODYzJywgICAgICAgICAgICAvL+S4reW/g+e6rOW6plxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYoaXRlbS50aXRsZSA9PSAn5bmz5bqm5biCJyl7XHJcbiAgICAgICAgICAgIG5ld0xpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXHJcbiAgICAgICAgICAgICAgbG9uZ2l0dWRlOiAnMTE5Ljk5Mzc1NCcsICAgICAgICAgIC8v5Lit5b+D57uP5bqmXHJcbiAgICAgICAgICAgICAgbGF0aXR1ZGU6ICczNi43ODI5MDgnLCAgICAgICAgICAgLy/kuK3lv4PnuqzluqZcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmKGl0ZW0udGl0bGUgPT0gJ+iOseilv+W4gicpe1xyXG4gICAgICAgICAgICBuZXdMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiBpdGVtLnRpdGxlLFxyXG4gICAgICAgICAgICAgIGxvbmdpdHVkZTogJzEyMC41MjYxMjYnLCAgICAgICAgICAvL+S4reW/g+e7j+W6plxyXG4gICAgICAgICAgICAgIGxhdGl0dWRlOiAnMzYuODk0NzQzJywgICAgICAgICAgIC8v5Lit5b+D57qs5bqmXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZihpdGVtLnRpdGxlID09ICfpq5jmlrDljLonKXtcclxuICAgICAgICAgICAgbmV3TGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgICB0aXRsZTogaXRlbS50aXRsZSxcclxuICAgICAgICAgICAgICBsb25naXR1ZGU6ICcxMjAuMjg0NDc2JywgICAgICAgICAgLy/kuK3lv4Pnu4/luqZcclxuICAgICAgICAgICAgICBsYXRpdHVkZTogJzM2LjI3MjM2NycsICAgICAgICAgICAvL+S4reW/g+e6rOW6plxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYoaXRlbS50aXRsZSA9PSAn6Z2S5bKb6JOd6LC3Jyl7XHJcbiAgICAgICAgICAgIG5ld0xpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXHJcbiAgICAgICAgICAgICAgbG9uZ2l0dWRlOiAnMTIwLjY4MzQ0NScsICAgICAgICAgIC8v5Lit5b+D57uP5bqmXHJcbiAgICAgICAgICAgICAgbGF0aXR1ZGU6ICczNi4zNTM0MTEnLCAgICAgICAgICAgLy/kuK3lv4PnuqzluqZcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBhcmVhTGlzdDogbmV3TGlzdFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5nZXRBcmVhKCk7ICAgICAgICAgLy/ojrflj5blvZPliY3kvY3nva7miYDlnKjljLpcclxuICAgICAgfVxyXG4gICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIGdldEFyZWEoKTp2b2lkeyAgLy/ojrflj5blvZPliY3kvY3nva7miYDlnKjljLpcclxuICAgIFxyXG4gICAgbGV0IHFxbWFwc2RrOmFueSA9IG5ldyBRUU1hcFdYKHtcclxuICAgICAga2V5OiBhcGkubWFwQXBpS2V5XHJcbiAgICB9KVxyXG4gICAgd3guZ2V0TG9jYXRpb24oe1xyXG4gICAgICB0eXBlOiAnd2dzODQnLFxyXG4gICAgICBzdWNjZXNzOigpOnZvaWQ9PntcclxuICAgICAgICBxcW1hcHNkay5yZXZlcnNlR2VvY29kZXIoe1xyXG4gICAgICAgICAgbG9jYXRpb246IHRoaXMuZGF0YS5sYXRpdHVkZSArICcsJyArIHRoaXMuZGF0YS5sb25naXR1ZGUsXHJcbiAgICAgICAgICBzdWNjZXNzOihyZXM6YW55KTp2b2lkPT57XHJcbiAgICAgICAgICAgIGxldCBhcmVhTmFtZTpzdHJpbmcgPSByZXMucmVzdWx0LmFkZHJlc3NfY29tcG9uZW50LmRpc3RyaWN0O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5kYXRhLmFyZWFMaXN0LmZvckVhY2goKGl0ZW06YW55KT0+e1xyXG4gICAgICAgICAgICAgIGlmKGl0ZW0udGl0bGUgPT0gYXJlYU5hbWUpe1xyXG4gICAgICAgICAgICAgICAgLy/lhajlsYDlj5jph49cclxuICAgICAgICAgICAgICAgIGFwaS5hcmVhTmFtZSA9IGFyZWFOYW1lOyAgIC8v5Yy65ZCNXHJcbiAgICAgICAgICAgICAgICBhcGkuYXJlYUlkID0gaXRlbS5pZDsgICAgICAvL+WMuklEXHJcbiAgICAgICAgICAgICAgICBhcGkubG9uZ2l0dWRlID0gaXRlbS5sb25naXR1ZGUsICAgIC8v5Lit5b+D57uP5bqmXHJcbiAgICAgICAgICAgICAgICBhcGkubGF0aXR1ZGUgPSBpdGVtLmxhdGl0dWRlICAgICAgIC8v5Lit5b+D57qs5bqmXHJcbiAgICAgICAgICAgICAgICAvL+W9k+WJjemhteWPmOmHj++8iOWIh+aNouWcsOWbvuaYvuekuuWMuuWfn++8iVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgICBhcmVhTmFtZTogYXBpLmFyZWFOYW1lLFxyXG4gICAgICAgICAgICAgICAgICBhcmVhSWQ6IGFwaS5hcmVhSWQsXHJcbiAgICAgICAgICAgICAgICAgIGxvbmdpdHVkZTogYXBpLmxvbmdpdHVkZSwgICAgLy/kuK3lv4Pnu4/luqZcclxuICAgICAgICAgICAgICAgICAgbGF0aXR1ZGU6IGFwaS5sYXRpdHVkZSAgICAgICAvL+S4reW/g+e6rOW6plxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZihhcGkuaW5kZXhGbGFnID09ICdwdCcpeyAgICAgICAgIC8v6aaW6aG15om+5bmz5Y+w6L+b5YWlXHJcbiAgICAgICAgICAgICAgICAgIHRoaXMucHRGbigpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYoYXBpLmluZGV4RmxhZyA9PSAneG0nKXsgICAvL+mmlumhteaJvuaUv+etlui/m+WFpVxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnhtRm4oKTtcclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKGFwaS5pbmRleEZsYWcgPT0gJ3pqJyl7ICAgLy/pppbpobXmib7otYTph5Hov5vlhaVcclxuICAgICAgICAgICAgICAgICAgdGhpcy56akZuKCk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihhcGkuaW5kZXhGbGFnID09ICdjZCcpeyAgIC8v6aaW6aG15om+5Zy65Zyw6L+b5YWlXHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuY2RGbigpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYoYXBpLmluZGV4RmxhZyA9PSAnZncnKXsgICAvL+mmlumhteaJvuacjeWKoei/m+WFpVxyXG4gICAgICAgICAgICAgICAgICB0aGlzLmZ3Rm4oKTtcclxuICAgICAgICAgICAgICAgIH1lbHNleyAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLy90aGlzLmdldE1hcmsoKTsgIC8v6I635Y+W5Zyw5Zu+5qCH54K5XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICBcclxuICB9LFxyXG5cclxuICBtb3JlRm4oKTp2b2lkeyAgIC8v5Yqg6L295pu05aSaXHJcbiAgICBpZih0aGlzLmRhdGEuZmxhZyA9PSAnYWxsUHQnKXsgIC8v5bmz5Y+w5YWo6YOoXHJcbiAgICAgIGlmKHRoaXMuZGF0YS5tdW1MaXN0Lmxlbmd0aCA8IHRoaXMuZGF0YS50b3RhbCl7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBwYWdlSW5kZXg6IHRoaXMuZGF0YS5wYWdlSW5kZXggKz0gMSwgICAgICAgICAgICAgLy/lvZPliY3pobVcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICB0aGlzLmdldEFsbFBybygpOyAgIFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZih0aGlzLmRhdGEuZmxhZyA9PSAnY3hQdCcpeyAgLy/liJvmlrDlubPlj7BcclxuICAgICAgaWYodGhpcy5kYXRhLm11bUxpc3QubGVuZ3RoIDwgdGhpcy5kYXRhLnRvdGFsKXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgcGFnZUluZGV4OiB0aGlzLmRhdGEucGFnZUluZGV4ICs9IDEsICAgICAgICAgICAgIC8v5b2T5YmN6aG1XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmdldEN4UHJvKCk7ICAgXHJcbiAgICAgIH0gICAgXHJcbiAgICB9XHJcbiAgICBpZih0aGlzLmRhdGEuZmxhZyA9PSAnY3lQdCcpeyAgLy/liJvkuJrlubPlj7BcclxuICAgICAgaWYodGhpcy5kYXRhLm11bUxpc3QubGVuZ3RoIDwgdGhpcy5kYXRhLnRvdGFsKXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgcGFnZUluZGV4OiB0aGlzLmRhdGEucGFnZUluZGV4ICs9IDEsICAgICAgICAgICAgIC8v5b2T5YmN6aG1XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmdldEN5UHJvKCk7ICAgXHJcbiAgICAgIH0gICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGlmKHRoaXMuZGF0YS5mbGFnID09ICd4bScpeyAgLy/mib7pobnnm65cclxuICAgICAgaWYodGhpcy5kYXRhLm11bUxpc3QubGVuZ3RoIDwgdGhpcy5kYXRhLnRvdGFsKXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgcGFnZUluZGV4OiB0aGlzLmRhdGEucGFnZUluZGV4ICs9IDEsICAgICAgICAgICAgIC8v5b2T5YmN6aG1XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmdldFByb0xpc3QoKTsgICBcclxuICAgICAgfSAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaWYodGhpcy5kYXRhLmZsYWcgPT0gJ3pqJyl7ICAvL+aJvui1hOmHkVxyXG4gICAgICBpZih0aGlzLmRhdGEubXVtTGlzdC5sZW5ndGggPCB0aGlzLmRhdGEudG90YWwpe1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBwYWdlSW5kZXg6IHRoaXMuZGF0YS5wYWdlSW5kZXggKz0gMSwgICAgICAgICAgICAgLy/lvZPliY3pobVcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuZ2V0QWxsRnVuZHNMaXN0KCk7XHJcbiAgICAgIH0gICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGlmKHRoaXMuZGF0YS5mbGFnID09ICdqcicpeyAgLy/mib7otYTph5HvvIjph5Hono3vvIlcclxuICAgICAgaWYodGhpcy5kYXRhLm11bUxpc3QubGVuZ3RoIDwgdGhpcy5kYXRhLnRvdGFsKXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgcGFnZUluZGV4OiB0aGlzLmRhdGEucGFnZUluZGV4ICs9IDEsICAgICAgICAgICAgIC8v5b2T5YmN6aG1XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmdldEpyTGlzdCgpO1xyXG4gICAgICB9ICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpZih0aGlzLmRhdGEuZmxhZyA9PSAndHonKXsgIC8v5om+6LWE6YeR77yI5oqV6LWE77yJXHJcbiAgICAgIGlmKHRoaXMuZGF0YS5tdW1MaXN0Lmxlbmd0aCA8IHRoaXMuZGF0YS50b3RhbCl7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIHBhZ2VJbmRleDogdGhpcy5kYXRhLnBhZ2VJbmRleCArPSAxLCAgICAgICAgICAgICAvL+W9k+WJjemhtVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5nZXRUekxpc3QoKTtcclxuICAgICAgfSAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaWYodGhpcy5kYXRhLmZsYWcgPT0gJ3J6Jyl7ICAvL+aJvui1hOmHke+8iOiejei1hO+8iVxyXG4gICAgICBpZih0aGlzLmRhdGEubXVtTGlzdC5sZW5ndGggPCB0aGlzLmRhdGEudG90YWwpe1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBwYWdlSW5kZXg6IHRoaXMuZGF0YS5wYWdlSW5kZXggKz0gMSwgICAgICAgICAgICAgLy/lvZPliY3pobVcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuZ2V0UnpMaXN0KCk7XHJcbiAgICAgIH0gICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGlmKHRoaXMuZGF0YS5mbGFnID09ICdjZCcpeyAgLy/mib7lnLrlnLBcclxuICAgICAgaWYodGhpcy5kYXRhLm11bUxpc3QubGVuZ3RoIDwgdGhpcy5kYXRhLnRvdGFsKXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgcGFnZUluZGV4OiB0aGlzLmRhdGEucGFnZUluZGV4ICs9IDEsICAgICAgICAgICAgIC8v5b2T5YmN6aG1XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmdldFNpdGVMaXN0KCk7XHJcbiAgICAgIH0gICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGlmKHRoaXMuZGF0YS5mbGFnID09ICdmdycpeyAgLy/mib7mnI3liqFcclxuICAgICAgaWYodGhpcy5kYXRhLm11bUxpc3QubGVuZ3RoIDwgdGhpcy5kYXRhLnRvdGFsKXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgcGFnZUluZGV4OiB0aGlzLmRhdGEucGFnZUluZGV4ICs9IDEsICAgICAgICAgICAgIC8v5b2T5YmN6aG1XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmdldFNlcnZpY2VMaXN0KCk7XHJcbiAgICAgIH0gICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgfSxcclxuXHJcblxyXG4gIC8v6aG16Z2i5Yid5aeL5YyWXHJcbiAgb25Mb2FkKCl7XHJcbiAgICAvL+mhtemdouagh+mimFxyXG4gICAgd3guc2V0TmF2aWdhdGlvbkJhclRpdGxlKHsgICAgIFxyXG4gICAgICB0aXRsZTogXCLkurrmiY3liJvmlrDliJvkuJrlubPlj7DlnLDlm75cIlxyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgLy/pobXpnaLmmL7npLpcclxuICBvblNob3coKXtcclxuICAgIHRoaXMudmVyaWZpY2F0aW9uKCk7ICAvL+mqjOivgeeUqOaIt+eZu+W9leeKtuaAgVxyXG4gIH0sXHJcblxyXG4gIC8v6aG16Z2i5riy5p+T5a6M5oiQXHJcbiAgb25SZWFkeSgpe30sXHJcblxyXG4gIC8v6aG16Z2i6ZqQ6JePXHJcbiAgb25IaWRlKCl7XHJcbiAgICBhcGkuaW5kZXhGbGFnID0gJyc7ICAgICAvL+mmlumhtTbmib7liKTmlq1cclxuXHJcbiAgICBhcGkuYXJlYU5hbWUgPSAnJzsgICAgICAvL+a4heepuuWFqOWxgOS9jee9ruWQjeensFxyXG4gICAgYXBpLmFyZWFJZCA9ICcnOyAgICAgICAgLy/muIXnqbrlhajlsYDkvY3nva5JRFxyXG4gICAgYXBpLmxvbmdpdHVkZSA9ICcnOyAgICAgLy/kuK3lv4Pnu4/luqZcclxuICAgIGFwaS5sYXRpdHVkZSA9ICcnOyAgICAgIC8v5Lit5b+D57qs5bqmXHJcblxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgaXNMaXN0U2hvdzogdHJ1ZSwgICAgICAgICAgLy/pu5jorqTmmL7npLo25om+5YaF5a65XHJcbiAgICAgIGlzSW5mb1Nob3c6IGZhbHNlLCAgICAgICAgIC8v5Y2V5p2h5L+h5oGv5pi+56S6XHJcbiAgICAgIGlzU2VhcmNoU2hvdzogZmFsc2UsICAgICAgIC8v5pCc57Si57uT5p6c5pWw5o2uXHJcbiAgICAgIGlzU2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgIC8v5pCc57Si5YiX6KGo5pWw5o2uXHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICAvL+mhtemdouWFs+mXrVxyXG4gIG9uVW5sb2FkKCl7fVxyXG59KVxyXG5leHBvcnQge307XHJcbiJdfQ==