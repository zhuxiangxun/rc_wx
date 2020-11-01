"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api = getApp().globalData;
var https = require('../../utils/myRequest.js');
var Dialog = require('../../miniprogram_npm/@vant/weapp/dialog/dialog.js').default;
var QQMapWX = require('../../utils/qqmap-wx-jssdk.js');
Page({
    data: {
        imgUrl: '',
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
        rzFinancingClass: null,
        rzCategoryId: '',
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
    ptCxTypes: function () {
        var _this = this;
        https.successRequest(api.submenuDic + '?moid=60', null, 'GET')
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
        https.successRequest(api.submenuDic + '?moid=52', null, 'GET')
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
        https.successRequest(api.submenuDic + '?moid=14', null, 'GET')
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
        if (this.data.flag == 'allPt') {
            this.getAllPro();
        }
        if (this.data.flag == 'cxPt') {
            this.getCxPro();
        }
        if (this.data.flag == 'cyPt') {
            this.getCyPro();
        }
        if (this.data.flag == 'xm') {
            this.getProList();
        }
        if (this.data.flag == 'zj') {
            this.getAllFundsList();
        }
        if (this.data.flag == 'jr') {
            this.getJrList();
        }
        if (this.data.flag == 'tz') {
            this.getTzList();
        }
        if (this.data.flag == 'rz') {
            this.getRzList();
        }
        if (this.data.flag == 'cd') {
            this.getSiteList();
        }
        if (this.data.flag == 'fw') {
            this.getServiceList();
        }
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
            ptIndex: 0,
            ptIndustryId: null,
            ptTypeClass: null,
            ptZiZhiClass: null,
            ptTypeId: '',
            ptZiZhi: '',
            ptCyTypeId: '',
            ptHyTypeId: '',
            isSearchShow: true,
            ptSearchInfoShow: true,
            ptBtnClass: 1,
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
                        imgArr: item.ptPics,
                        provinceName: item.provinceName ? item.provinceName : '',
                        cityName: item.cityName ? item.cityName : '',
                        districtName: item.districtName ? item.districtName : '',
                        address: item.cxAddress
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
                        imgArr: item.picFiles,
                        provinceName: item.provinceName ? item.provinceName : '',
                        cityName: item.cityName ? item.cityName : '',
                        districtName: item.districtName ? item.districtName : '',
                        address: item.cyAddress
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
                        imgArr: item.imgArr,
                        provinceName: item.provinceName,
                        cityName: item.cityName,
                        districtName: item.districtName,
                        address: item.address
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
                        imgArr: item.ptPics,
                        provinceName: item.provinceName ? item.provinceName : '',
                        cityName: item.cityName ? item.cityName : '',
                        districtName: item.districtName ? item.districtName : '',
                        address: item.cxAddress
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
                        oldId: item.id,
                        title: item.cyName ? item.cyName : '未填报',
                        imgArr: item.picFiles,
                        provinceName: item.provinceName ? item.provinceName : '',
                        cityName: item.cityName ? item.cityName : '',
                        districtName: item.districtName ? item.districtName : '',
                        address: item.cyAddress
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
            this.ptCxTypes();
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
        var pId = data.detail.pId;
        this.setData({
            ptIndustryId: id,
            ptCyTypeId: pId ? pId : '',
            ptHyTypeId: id == pId ? '' : id,
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
            markers: [],
            pageSize: 10,
            pageIndex: 1,
            total: 0,
        });
        console.log();
        if (this.data.flag == 'cxPt') {
            this.getCxPro();
        }
        if (this.data.flag == 'cyPt') {
            this.getCyPro();
        }
    },
    zcFn: function () {
        wx.navigateToMiniProgram({
            appId: 'wxf4083a5f8365a30a',
            path: '',
            success: function () {
            }
        });
    },
    xmFn: function () {
        this.hideFn();
        this.setData({
            flag: 'xm',
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
            curStage: this.data.xmStageId,
            needTypes: this.data.xmTypeId,
            rzMoney: this.data.xmTzMoney,
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
                        imgArr: item.pictureFiles,
                        provinceName: item.provinceName ? item.provinceName : '',
                        cityName: item.cityName ? item.cityName : '',
                        districtName: item.districtName ? item.districtName : '',
                        address: item.address
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
            markers: [],
            pageSize: 10,
            pageIndex: 1,
            total: 0,
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
        var pId = data.detail.pId;
        this.setData({
            xmIndustryId: id,
            xmCyTypeId: pId ? pId : '',
            xmHyTypeId: id == pId ? '' : id,
        });
    },
    cdFn: function () {
        this.hideFn();
        this.setData({
            flag: 'cd',
            cdIndex: 0,
            cdIndustryId: null,
            cdTypeClass: null,
            cdUserClass: null,
            cdTypeId: '',
            cdChuZuId: '',
            cdSaleId: '',
            cdCyTypeId: '',
            cdHyTypeId: '',
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
                        imgArr: item.picFiles,
                        provinceName: item.provinceName ? item.provinceName : '',
                        cityName: item.cityName ? item.cityName : '',
                        districtName: item.districtName ? item.districtName : '',
                        address: item.cyztAddress
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
        var pId = data.detail.pId;
        this.setData({
            cdIndustryId: id,
            cdCyTypeId: pId ? pId : '',
            cdHyTypeId: id == pId ? '' : id,
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
            markers: [],
            pageSize: 10,
            pageIndex: 1,
            total: 0,
        });
        this.getSiteList();
    },
    fwFn: function () {
        this.hideFn();
        this.setData({
            flag: 'fw',
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
            qyNatureId: this.data.fwDwStatusId,
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
                        imgArr: item.fwjgPics,
                        provinceName: item.provinceName ? item.provinceName : '',
                        cityName: item.cityName ? item.cityName : '',
                        districtName: item.districtName ? item.districtName : '',
                        address: item.fwAddress
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
        var pId = data.detail.pId;
        this.setData({
            fwCategoryId: id,
            fwTypeOneId: pId ? pId : '',
            fwTypeTwoId: id == pId ? '' : id,
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
        var pId = data.detail.pId;
        this.setData({
            fwIndustryId: id,
            fwCyTypeId: pId ? pId : '',
            fwHyTypeId: id == pId ? '' : id,
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
        this.getServiceList();
    },
    fwSubmit: function (e) {
        var flag = e.currentTarget.dataset.flag;
        if (flag == 1) {
            this.selectComponent('#fwCategoryId').toggle(false);
        }
        else if (flag == 2) {
            this.selectComponent('#fwTypeId').toggle(false);
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
            markers: [],
            pageSize: 10,
            pageIndex: 1,
            total: 0,
        });
        this.getServiceList();
    },
    zjFn: function () {
        this.hideFn();
        this.setData({
            flag: 'zj',
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
            rzFinancingId: '',
            rzCyTypeId: '',
            rzHyTypeId: '',
            isSearchShow: true,
            zjSearchInfoShow: true,
            zjBtnClass: 1,
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
                        imgArr: item.fwjgPics,
                        provinceName: item.provinceName ? item.provinceName : '',
                        cityName: item.cityName ? item.cityName : '',
                        districtName: item.districtName ? item.districtName : '',
                        address: item.fwAddress
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
                        imgArr: item.needFiles,
                        provinceName: item.provinceName ? item.provinceName : '',
                        cityName: item.cityName ? item.cityName : '',
                        districtName: item.districtName ? item.districtName : '',
                        address: item.tenantName
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
                        imgArr: item.pictureFiles,
                        provinceName: item.provinceName ? item.provinceName : '',
                        cityName: item.cityName ? item.cityName : '',
                        districtName: item.districtName ? item.districtName : '',
                        address: item.tenantName
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
                        imgArr: item.needFiles,
                        provinceName: item.provinceName ? item.provinceName : '',
                        cityName: item.cityName ? item.cityName : '',
                        districtName: item.districtName ? item.districtName : '',
                        address: item.address
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
                        imgArr: item.imgArr,
                        provinceName: item.provinceName,
                        cityName: item.cityName,
                        districtName: item.districtName,
                        address: item.address
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
        this.setData({
            zjBtnClass: e.target.dataset.num,
            jrCategoryIndex: 0,
            jrCategoryId: null,
            jrTypeOneId: '',
            jrTypeTwoId: '',
            jrTypeClass: null,
            jrDwStatusId: '',
            jrScaleClass: null,
            jrDwScaleId: '',
            jrIndustryIndex: 0,
            jrIndustryId: null,
            jrCyTypeId: '',
            jrHyTypeId: '',
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
            rzIndex: 0,
            rzIndustryId: null,
            rzCategoryClass: null,
            rzFinancingClass: null,
            rzCategoryId: '',
            rzFinancingId: '',
            rzCyTypeId: '',
            rzHyTypeId: '',
            num: 0,
            mumList: [],
            markers: [],
            searchKey: '',
        });
        if (e.target.dataset.num == 1) {
            this.setData({
                flag: 'zj',
                jrSearchInfoShow: false,
                tzSearchInfoShow: false,
                rzSearchInfoShow: false,
            });
            this.getAllFundsList();
        }
        else if (e.target.dataset.num == 2) {
            this.setData({
                flag: 'jr',
                jrSearchInfoShow: true,
                tzSearchInfoShow: false,
                rzSearchInfoShow: false,
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
                jrSearchInfoShow: false,
                tzSearchInfoShow: true,
                rzSearchInfoShow: false,
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
                jrSearchInfoShow: false,
                tzSearchInfoShow: false,
                rzSearchInfoShow: true,
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
            qyNatureId: this.data.jrDwStatusId,
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
                        imgArr: item.fwjgPics,
                        provinceName: item.provinceName ? item.provinceName : '',
                        cityName: item.cityName ? item.cityName : '',
                        districtName: item.districtName ? item.districtName : '',
                        address: item.fwAddress
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
        var pId = data.detail.pId;
        this.setData({
            jrCategoryId: id,
            jrTypeOneId: pId ? pId : '',
            jrTypeTwoId: id == pId ? '' : id,
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
        var pId = data.detail.pId;
        this.setData({
            jrIndustryId: id,
            jrCyTypeId: pId ? pId : '',
            jrHyTypeId: id == pId ? '' : id,
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
            markers: [],
            pageSize: 10,
            pageIndex: 1,
            total: 0,
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
                        imgArr: item.needFiles,
                        provinceName: item.provinceName ? item.provinceName : '',
                        cityName: item.cityName ? item.cityName : '',
                        districtName: item.districtName ? item.districtName : '',
                        address: item.tenantName
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
        var pId = data.detail.pId;
        this.setData({
            tzIndustryId: id,
            tzCyTypeId: pId ? pId : '',
            tzHyTypeId: id == pId ? '' : id,
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
            markers: [],
            pageSize: 10,
            pageIndex: 1,
            total: 0,
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
            rzWay: this.data.rzCategoryId,
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
                        imgArr: item.needFiles,
                        provinceName: item.provinceName ? item.provinceName : '',
                        cityName: item.cityName ? item.cityName : '',
                        districtName: item.districtName ? item.districtName : '',
                        address: item.tenantName
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
                        imgArr: item.pictureFiles,
                        provinceName: item.provinceName ? item.provinceName : '',
                        cityName: item.cityName ? item.cityName : '',
                        districtName: item.districtName ? item.districtName : '',
                        address: item.address
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
                        imgArr: item.imgArr,
                        provinceName: item.provinceName,
                        cityName: item.cityName,
                        districtName: item.districtName,
                        address: item.address
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
        var pId = data.detail.pId;
        this.setData({
            rzIndustryId: id,
            rzCyTypeId: pId ? pId : '',
            rzHyTypeId: id == pId ? '' : id,
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
                rzFinancingClass: null,
                rzFinancingId: '',
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
        this.setData({
            num: 0,
            mumList: [],
            markers: [],
            pageSize: 10,
            pageIndex: 1,
            total: 0,
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
            isListShow: false,
            isInfoShow: false,
            isSearchShow: true,
            isSearchInfoShow: false,
        });
    },
    verification: function () {
        var _this = this;
        var token = wx.getStorageSync('token');
        if (!!token) {
            this.setData({
                imgUrl: api.imgUrl + '?token=' + token + '&filePath='
            });
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
                    if (item.model.cname == '西海岸新区') {
                        item.model.cname = '黄岛区';
                    }
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
                    if (item.title == '黄岛区') {
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
            title: "青岛人才创新创业平台地图"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFFLENBQUMsVUFBVSxDQUFDO0FBQ2hDLElBQUksS0FBSyxHQUFJLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0FBQ2pELElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxvREFBb0QsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUVuRixJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsK0JBQStCLENBQUMsQ0FBQztBQUV2RCxJQUFJLENBQUM7SUFFSCxJQUFJLEVBQUU7UUFDSixNQUFNLEVBQUUsRUFBRTtRQUNWLFNBQVMsRUFBRSxRQUFRO1FBQ25CLElBQUksRUFBRSxFQUFFO1FBQ1IsUUFBUSxFQUFFLEtBQUs7UUFFZixRQUFRLEVBQUUsRUFBRTtRQUNaLFNBQVMsRUFBRSxDQUFDO1FBQ1osS0FBSyxFQUFFLENBQUM7UUFFUixRQUFRLEVBQUUsRUFBRTtRQUNaLFFBQVEsRUFBRSxFQUFFO1FBQ1osTUFBTSxFQUFFLEVBQUU7UUFFVixVQUFVLEVBQUUsSUFBSTtRQUNoQixVQUFVLEVBQUUsS0FBSztRQUNqQixZQUFZLEVBQUUsS0FBSztRQUNuQixnQkFBZ0IsRUFBRSxLQUFLO1FBR3ZCLFFBQVEsRUFBRSxFQUFFO1FBQ1osWUFBWSxFQUFFLEVBQUU7UUFDaEIsV0FBVyxFQUFDO1lBQ1YsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7WUFDdkIsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7WUFDdEIsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7WUFDdEIsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUU7WUFDekIsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtB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RUFBQztnQkFDNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQztpQkFDcEMsQ0FBQyxDQUFBO2dCQUNGLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUN2QjtTQUNGO0lBRUgsQ0FBQztJQUlELE1BQU07UUFFSixFQUFFLENBQUMscUJBQXFCLENBQUM7WUFDdkIsS0FBSyxFQUFFLGNBQWM7U0FDdEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdELE1BQU07UUFDSixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUdELE9BQU8sZ0JBQUcsQ0FBQztJQUdYLE1BQU07UUFDSixHQUFHLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUVuQixHQUFHLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNsQixHQUFHLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNoQixHQUFHLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNuQixHQUFHLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUVsQixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsVUFBVSxFQUFFLElBQUk7WUFDaEIsVUFBVSxFQUFFLEtBQUs7WUFDakIsWUFBWSxFQUFFLEtBQUs7WUFDbkIsZ0JBQWdCLEVBQUUsS0FBSztTQUN4QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBR0QsUUFBUSxnQkFBRyxDQUFDO0NBQ2IsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbWFwLnRzXHJcbmNvbnN0IGFwaSA9IGdldEFwcCgpLmdsb2JhbERhdGE7ICAvLyDojrflj5blupTnlKjlrp7kvotcclxubGV0IGh0dHBzICA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL215UmVxdWVzdC5qcycpOyAgLy/ojrflj5ZhamF45pa55rOVXHJcbmxldCBEaWFsb2cgPSByZXF1aXJlKCcuLi8uLi9taW5pcHJvZ3JhbV9ucG0vQHZhbnQvd2VhcHAvZGlhbG9nL2RpYWxvZy5qcycpLmRlZmF1bHQ7XHJcblxyXG5sZXQgUVFNYXBXWCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3FxbWFwLXd4LWpzc2RrLmpzJyk7ICAvLyDlvJXlhaVTREvmoLjlv4PnsbtcclxuXHJcblBhZ2Uoe1xyXG4gIC8v6aG16Z2i5pWw5o2uXHJcbiAgZGF0YToge1xyXG4gICAgaW1nVXJsOiAnJywgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Zu+54mH5pyN5Yqh5ZmoXHJcbiAgICBtb3JlVGl0bGU6ICfngrnlh7vliqDovb3mm7TlpJonLCAgICAgICAgICAgIC8v5Yqg6L295pu05aSaXHJcbiAgICBmbGFnOiAnJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lvZPliY3liJfooahcclxuICAgIG1vcmVTaG93OiBmYWxzZSwgICAgICAgICAgICAgICAgICAgICAvL+WKoOi9veabtOWkmueKtuaAgVxyXG4gICAgLy/pobXnoIFcclxuICAgIHBhZ2VTaXplOiAxMCwgICAgICAgICAgICAgLy/mr4/pobXmmL7npLrmlbDph49cclxuICAgIHBhZ2VJbmRleDogMSwgICAgICAgICAgICAgLy/lvZPliY3pobVcclxuICAgIHRvdGFsOiAwLCAgICAgICAgICAgICAgICAgLy/mgLvmnaHmlbBcclxuICAgIC8v5Yy65biCXHJcbiAgICBhcmVhTGlzdDogW10sICAgICAgICAgICAgIC8v5Yy65YiX6KGoXHJcbiAgICBhcmVhTmFtZTogJycsICAgICAgICAgICAgIC8v5YiH5o2i55qE5Yy65ZCNXHJcbiAgICBhcmVhSWQ6ICcnLCAgICAgICAgICAgICAgIC8v5YiH5o2i55qE5Yy6SURcclxuICAgIC8v5pCc57SiXHJcbiAgICBpc0xpc3RTaG93OiB0cnVlLCAgICAgICAgIC8v6buY6K6k5pi+56S6NuaJvuWGheWuuVxyXG4gICAgaXNJbmZvU2hvdzogZmFsc2UsICAgICAgICAvL+WNleadoeS/oeaBr+aYvuekulxyXG4gICAgaXNTZWFyY2hTaG93OiBmYWxzZSwgICAgICAvL+aQnOe0oue7k+aenOaVsOaNrlxyXG4gICAgaXNTZWFyY2hJbmZvU2hvdzogZmFsc2UsICAvL+aQnOe0ouWIl+ihqOaVsOaNrlxyXG5cclxuICAgIC8v5bmz5Y+w6auY57qn5pCc57SiXHJcbiAgICB0eXBlTGlzdDogW10sICAgICAgICAgICAgIC8v57G75Z6LXHJcbiAgICBpbmR1c3RyeUxpc3Q6IFtdLCAgICAgICAgIC8v5bmz5Y+w5Lqn5Lia6KGM5LiaXHJcbiAgICBwdFppWmhpTGlzdDpbICAgICAgICAgICAgIC8v5bmz5Y+w6LWE6LSoXHJcbiAgICAgIHsgaWQ6IDEsIHRpdGxlOiAn5Zu95a6257qnJyB9LFxyXG4gICAgICB7IGlkOiAyLCB0aXRsZTogJ+ecgee6pycgfSxcclxuICAgICAgeyBpZDogMywgdGl0bGU6ICfluILnuqcnIH0sXHJcbiAgICAgIHsgaWQ6IDQsIHRpdGxlOiAn5Yy677yI5biC77yJ57qnJyB9LFxyXG4gICAgICB7IGlkOiA1LCB0aXRsZTogJ+aXoOi1hOi0qCcgfVxyXG4gICAgXSxcclxuICAgIC8v6aG555uu6auY57qn5pCc57SiXHJcbiAgICB4bVN0YWdlTGlzdDogW10sICAgICAgICAgICAgIC8v5omA5aSE6Zi25q61XHJcbiAgICB4bUNhdGVnb3J5TGlzdDogW10sICAgICAgICAgIC8v6ZyA5rGC57G75YirXHJcbiAgICB4bUZpbmFuY2luZ0xpc3Q6IFtdLCAgICAgICAgIC8v6J6N6LWE6YeR6aKdXHJcbiAgICAvL+WcuuWcsOmrmOe6p+aQnOe0olxyXG4gICAgY2RDYXJyaWVyTGlzdDogW10sICAgICAgICAgICAvL+i1hOa6kOexu+Wei1xyXG4gICAgY2RVc2VyTGlzdDogWyAgICAgICAgICAgICAgICAvL+WcuuWcsOeUqOmAlFxyXG4gICAgICB7IGlkOiAxLCBkaWNOYW1lOiAn5Ye656efJyB9LFxyXG4gICAgICB7IGlkOiAyLCBkaWNOYW1lOiAn5Ye65ZSuJyB9XHJcbiAgICBdLFxyXG4gICAgLy/mnI3liqHpq5jnuqfmkJzntKJcclxuICAgIGZ3Q2F0ZWdvcnlMaXN0OltdLCAgICAgICAgICAgIC8v5pyN5Yqh57G75YirXHJcbiAgICBmd1R5cGVMaXN0OiBbXSwgICAgICAgICAgICAgICAvL+WNleS9jeexu+Wei1xyXG4gICAgZndTY2FsZUxpc3Q6IFtdLCAgICAgICAgICAgICAgLy/ljZXkvY3op4TmqKFcclxuICAgIC8v5om+5oqV6LWEXHJcbiAgICB0ekFyZWFMaXN0OiBbXSwgICAgICAgICAgICAgICAvL+aKlei1hOWMuuWfn1xyXG4gICAgdHpXYXlMaXN0OiBbXSwgICAgICAgICAgICAgICAgLy/mipXotYTmlrnlvI9cclxuICAgIHR6T3RoZXJMaXN0OiBbXSwgICAgICAgICAgICAgIC8v5oqV6LWE6YeR6aKdXHJcbiAgICB0elR5cGVMaXN0OiBbXSwgICAgICAgICAgICAgICAvL+i1hOmHkeexu+Wei1xyXG4gICAgLy/mib7ono3otYRcclxuICAgIHJ6V2F5TGlzdDogW10sICAgICAgICAgICAgICAgIC8v6J6N6LWE5pa55byPXHJcblxyXG4gICAgZmxnOiAnJywgICAgICAgICAgICAgICAgICAgICAgLy825om+54q25oCB5Yik5patXHJcbiAgICBudW06IDAsICAgICAgICAgICAgICAgICAgICAgICAvLzbmib7nu5PmnpxcclxuICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgICAgIC8vNuaJvuWIl+ihqFxyXG5cclxuICAgIHNlYXJjaEtleTogJycsICAgICAgICAgICAgICAgLy9rZXnlhbPplK7lrZfmkJzntKJcclxuICAgIHRlbmFudElkOiAnJywgICAgICAgICAgICAgICAgLy/lnLDljLppZFxyXG5cclxuICAgIC8v5om+5bmz5Y+wXHJcbiAgICBwdFNlYXJjaEluZm9TaG93OiB0cnVlLCAgICAgLy/mmL7npLov6ZqQ6JePXHJcbiAgICBwdEJ0blNob3c6IGZhbHNlLCAgICAgICAgICAgLy/lhajpg6jml7bmmL7npLov6ZqQ6JePXHJcbiAgICBwdEJ0bkNsYXNzOiAxLCAgICAgICAgICAgICAgLy/lhajpg6jmjInpkq7nirbmgIHliIfmjaJcclxuICAgIHB0SW5kZXg6IDAsICAgICAgICAgICAgICAgICAvL+W9k+WJjee0ouW8lVxyXG4gICAgcHRJbmR1c3RyeUlkOiBudWxsLCAgICAgICAgIC8v6YCJ5Lit55qEaWRcclxuICAgIFxyXG4gICAgcHRUeXBlQ2xhc3M6IG51bGwsICAgICAgICAgIC8v57G75Z6L5oyJ6ZKu54q25oCB5YiH5o2iXHJcbiAgICBwdFppWmhpQ2xhc3M6IG51bGwsICAgICAgICAgLy/otYTotKjmjInpkq7nirbmgIHliIfmjaJcclxuXHJcbiAgICBwdFR5cGVJZDogJycsICAgICAgICAgICAgICAgLy/lubPlj7DnsbvlnotpZFxyXG4gICAgcHRaaVpoaTogJycsICAgICAgICAgICAgICAgIC8v5bmz5Y+w6LWE6LSoaWRcclxuICAgIHB0Q3lUeXBlSWQ6ICcnLCAgICAgICAgICAgICAvL+S6p+S4mmlkXHJcbiAgICBwdEh5VHlwZUlkOiAnJywgICAgICAgICAgICAgLy/ooYzkuJppZFxyXG5cclxuICBcclxuICAgIC8v5om+6aG555uuXHJcbiAgICBwcm9TZWFyY2hJbmZvU2hvdzogZmFsc2UsICAgIC8v5pi+56S6L+makOiXj1xyXG4gICAgeG1JbmRleDogMCwgICAgICAgICAgICAgICAgIC8v5b2T5YmN57Si5byVXHJcbiAgICB4bUluZHVzdHJ5SWQ6IG51bGwsICAgICAgICAgLy/pgInkuK3nmoRpZFxyXG5cclxuICAgIHhtU3RhZ2VDbGFzczogbnVsbCwgICAgICAgICAgLy/pmLbmrrXmjInpkq7nirbmgIHliIfmjaJcclxuICAgIHhtQ2F0ZWdvcnlDbGFzczogbnVsbCwgICAgICAgLy/nsbvliKvmjInpkq7nirbmgIHliIfmjaJcclxuICAgIHhtRmluYW5jaW5nQ2xhc3M6IG51bGwsICAgICAgLy/ph5Hpop3mjInpkq7nirbmgIHliIfmjaJcclxuXHJcbiAgICB4bVN0YWdlSWQ6ICcnLCAgICAgICAgICAgICAgIC8v5omA5aSE6Zi25q61XHJcbiAgICB4bVR5cGVJZDogJycsICAgICAgICAgICAgICAgIC8v6ZyA5rGC57G75YirXHJcbiAgICB4bVR6TW9uZXk6ICcnLCAgICAgICAgICAgICAgIC8v6J6N6LWE6YeR6aKdXHJcbiAgICB4bUN5VHlwZUlkOiAnJywgICAgICAgICAgICAgIC8v5Lqn5LiaaWRcclxuICAgIHhtSHlUeXBlSWQ6ICcnLCAgICAgICAgICAgICAgLy/ooYzkuJppZFxyXG5cclxuXHJcbiAgICAvL+aJvui1hOmHkVxyXG4gICAgempTZWFyY2hJbmZvU2hvdzogZmFsc2UsICAgIC8v5pi+56S6L+makOiXj1xyXG4gICAgempCdG5DbGFzczogMSwgICAgICAgICAgICAgIC8v5YWo6YOo5oyJ6ZKu54q25oCB5YiH5o2iXHJcbiAgICAvL+aJvui1hOmHke+8iOmHkeiejeacjeWKoe+8iVxyXG4gICAganJTZWFyY2hJbmZvU2hvdzogZmFsc2UsICAgIC8v5pi+56S6L+makOiXj1xyXG4gICAganJDYXRlZ29yeUluZGV4OiAwLCAgICAgICAgIC8v5b2T5YmN57Si5byV77yI5pyN5Yqh57G75Yir77yJXHJcbiAgICBqckNhdGVnb3J5SWQ6IG51bGwsICAgICAgICAgLy/pgInkuK3nmoRpZO+8iOacjeWKoeexu+WIq++8iVxyXG4gICAganJJbmR1c3RyeUluZGV4OiAwLCAgICAgICAgIC8v5b2T5YmN57Si5byV77yI6KGM5Lia5Lqn5Lia77yJXHJcbiAgICBqckluZHVzdHJ5SWQ6IG51bGwsICAgICAgICAgLy/pgInkuK3nmoRpZO+8iOihjOS4muS6p+S4mu+8iVxyXG5cclxuICAgIGpyVHlwZUNsYXNzOiBudWxsLCAgICAgICAgICAvL+WNleS9jeexu+Wei1xyXG4gICAganJTY2FsZUNsYXNzOiBudWxsLCAgICAgICAgIC8v5Y2V5L2N6KeE5qihXHJcblxyXG4gICAganJUeXBlT25lSWQ6ICcnLCAgICAgICAgICAgIC8v5pyN5Yqh57G75Yir5LiA57qn6I+c5Y2VXHJcbiAgICBqclR5cGVUd29JZDogJycsICAgICAgICAgICAgLy/mnI3liqHnsbvliKvkuoznuqfoj5zljZVcclxuICAgIGpyRHdTdGF0dXNJZDogJycsICAgICAgICAgICAvL+WNleS9jeexu+Wei2lkXHJcbiAgICBqckR3U2NhbGVJZDogJycsICAgICAgICAgICAgLy/ljZXkvY3op4TmqKFpZFxyXG4gICAganJDeVR5cGVJZDogJycsICAgICAgICAgICAgIC8v5Lqn5LiaaWRcclxuICAgIGpySHlUeXBlSWQ6ICcnLCAgICAgICAgICAgICAvL+ihjOS4mmlkXHJcblxyXG4gICAgLy/mib7otYTph5HvvIjmipXotYTvvIlcclxuICAgIHR6U2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgICAvL+aYvuekui/pmpDol49cclxuICAgIHR6SW5kZXg6IDAsICAgICAgICAgICAgICAgICAvL+W9k+WJjee0ouW8lVxyXG4gICAgdHpJbmR1c3RyeUlkOiBudWxsLCAgICAgICAgIC8v6YCJ5Lit55qEaWRcclxuXHJcbiAgICB0ekFyZWFDbGFzczogbnVsbCwgICAgICAgICAgLy/mipXotYTljLrln59cclxuICAgIHR6V2F5Q2xhc3M6IG51bGwsICAgICAgICAgICAvL+aKlei1hOaWueW8j1xyXG4gICAgdHpPdGhlckNsYXNzOiBudWxsLCAgICAgICAgIC8v5oqV6LWE6YeR6aKdXHJcbiAgICB0elR5cGVDbGFzczogbnVsbCwgICAgICAgICAgLy/mipXotYTnsbvlnotcclxuXHJcbiAgICB0ekFyZWFJZDogJycsICAgICAgICAgICAgICAgLy/mipXotYTljLrln59cclxuICAgIHR6V2F5SWQ6ICcnLCAgICAgICAgICAgICAgICAvL+aKlei1hOaWueW8j1xyXG4gICAgdHpPdGhlcklkOiAnJywgICAgICAgICAgICAgIC8v5oqV6LWE6YeR6aKdXHJcbiAgICB0elR5cGVJZDogJycsICAgICAgICAgICAgICAgLy/mipXotYTnsbvlnotcclxuICAgIHR6Q3lUeXBlSWQ6ICcnLCAgICAgICAgICAgICAvL+S6p+S4mmlkXHJcbiAgICB0ekh5VHlwZUlkOiAnJywgICAgICAgICAgICAgLy/ooYzkuJppZFxyXG5cclxuXHJcblxyXG4gICAgLy/mib7otYTph5HvvIjono3otYTvvIlcclxuICAgIHJ6U2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgICAvL+aYvuekui/pmpDol49cclxuICAgIHJ6SW5kZXg6IDAsICAgICAgICAgICAgICAgICAvL+W9k+WJjee0ouW8lVxyXG4gICAgcnpJbmR1c3RyeUlkOiBudWxsLCAgICAgICAgIC8v6YCJ5Lit55qEaWRcclxuXHJcbiAgICByekNhdGVnb3J5Q2xhc3M6IG51bGwsICAgICAgLy/pnIDmsYLnsbvliKtcclxuICAgIHJ6RmluYW5jaW5nQ2xhc3M6IG51bGwsICAgICAvL+iejei1hOmHkeminVxyXG5cclxuICAgIHJ6Q2F0ZWdvcnlJZDogJycsICAgICAgICAgICAvL+iejei1hOaWueW8j1xyXG4gICAgcnpGaW5hbmNpbmdJZDogJycsICAgICAgICAgIC8v6J6N6LWE6YeR6aKdXHJcbiAgICByekN5VHlwZUlkOiAnJywgICAgICAgICAgICAgLy/kuqfkuJppZFxyXG4gICAgcnpIeVR5cGVJZDogJycsICAgICAgICAgICAgIC8v6KGM5LiaaWRcclxuXHJcbiAgICAvL+aJvuWcuuWcsFxyXG4gICAgY2RTZWFyY2hJbmZvU2hvdzogZmFsc2UsICAgIC8v5pi+56S6L+makOiXj1xyXG4gICAgY2RJbmRleDogMCwgICAgICAgICAgICAgICAgIC8v5b2T5YmN57Si5byVXHJcbiAgICBjZEluZHVzdHJ5SWQ6IG51bGwsICAgICAgICAgLy/pgInkuK3nmoRpZFxyXG4gXHJcbiAgICBjZFR5cGVDbGFzczogbnVsbCwgICAgICAgICAgLy/otYTmupDnsbvlnotcclxuICAgIGNkVXNlckNsYXNzOiBudWxsLCAgICAgICAgICAvL+WcuuWcsOeUqOmAlFxyXG5cclxuICAgIGNkVHlwZUlkOiAnJywgICAgICAgICAgICAgICAvL+i9veS9k+epuumXtOexu+Wei1xyXG4gICAgY2RDaHVadUlkOiAnJywgICAgICAgICAgICAgIC8v5piv5ZCm5Ye656efXHJcbiAgICBjZFNhbGVJZDogJycsICAgICAgICAgICAgICAgLy/mmK/lkKblh7rllK5cclxuICAgIGNkQ3lUeXBlSWQ6ICcnLCAgICAgICAgICAgICAvL+S6p+S4mmlkXHJcbiAgICBjZEh5VHlwZUlkOiAnJywgICAgICAgICAgICAgLy/ooYzkuJppZFxyXG5cclxuICAgIC8v5om+5pyN5YqhXHJcbiAgICBmd1NlYXJjaEluZm9TaG93OiBmYWxzZSwgICAgLy/mmL7npLov6ZqQ6JePXHJcbiAgICBmd0NhdGVnb3J5SW5kZXg6IDAsICAgICAgICAgLy/lvZPliY3ntKLlvJXvvIjmnI3liqHnsbvliKvvvIlcclxuICAgIGZ3Q2F0ZWdvcnlJZDogbnVsbCwgICAgICAgICAvL+mAieS4reeahGlk77yI5pyN5Yqh57G75Yir77yJXHJcbiAgICBmd0luZHVzdHJ5SW5kZXg6IDAsICAgICAgICAgLy/lvZPliY3ntKLlvJXvvIjooYzkuJrkuqfkuJrvvIlcclxuICAgIGZ3SW5kdXN0cnlJZDogbnVsbCwgICAgICAgICAvL+mAieS4reeahGlk77yI6KGM5Lia5Lqn5Lia77yJXHJcblxyXG4gICAgZndUeXBlQ2xhc3M6IG51bGwsICAgICAgICAgIC8v5Y2V5L2N57G75Z6LXHJcbiAgICBmd1NjYWxlQ2xhc3M6IG51bGwsICAgICAgICAgLy/ljZXkvY3op4TmqKFcclxuXHJcbiAgICBmd1R5cGVPbmVJZDogJycsICAgICAgICAgICAgLy/mnI3liqHnsbvliKvkuIDnuqfoj5zljZVcclxuICAgIGZ3VHlwZVR3b0lkOiAnJywgICAgICAgICAgICAvL+acjeWKoeexu+WIq+S6jOe6p+iPnOWNlVxyXG4gICAgZndEd1N0YXR1c0lkOiAnJywgICAgICAgICAgIC8v5Y2V5L2N57G75Z6LaWRcclxuICAgIGZ3RHdTY2FsZUlkOiAnJywgICAgICAgICAgICAvL+WNleS9jeinhOaooWlkXHJcbiAgICBmd0N5VHlwZUlkOiAnJywgICAgICAgICAgICAgLy/kuqfkuJppZFxyXG4gICAgZndIeVR5cGVJZDogJycsICAgICAgICAgICAgIC8v6KGM5LiaaWRcclxuXHJcblxyXG4gICAgLy/lnLDlm75cclxuICAgIGxvbmdpdHVkZTogJycsICAgICAgICAgICAgLy/kuK3lv4Pnu4/luqZcclxuICAgIGxhdGl0dWRlOiAnJywgICAgICAgICAgICAgLy/kuK3lv4PnuqzluqZcclxuICAgIHNjYWxlOiAxMiwgICAgICAgICAgICAgICAgLy/nvKnmlL7nuqfliKvvvIzlj5blgLzojIPlm7TkuLozLTIwXHJcbiAgICBtYXJrZXJzOltdLCAgICAgICAgICAgICAgIC8v5qCH6K6w54K55aSE55CG5ZCO55qE5pWw5o2u77yIaWTjgIHmn6Xor6Lkvb/nlKjvvIlcclxuICAgIG1hcmtlcnNPYmo6e30sICAgICAgICAgICAgLy/mn6Xor6LnmoTljZXmnaHmlbDmja5cclxuICAgIC8v5omA5Lul5qCH54K55pWw5o2uXHJcbiAgICBjeFBsYXRmb3JtTW9kZWxzOiBbXSwgICAgIC8v5Yib5Lia5bmz5Y+wXHJcbiAgICBjeVBsYXRmb3JtTW9kZWxzOiBbXSwgICAgIC8v5Yib5paw5bmz5Y+wXHJcbiAgICBwcm9Nb2RlbHM6IFtdLCAgICAgICAgICAgIC8v5om+6aG555uuXHJcbiAgICBmd2pnTW9kZWxzOiBbXSwgICAgICAgICAgIC8v5om+5pyN5Yqh5py65p6EXHJcbiAgICB2ZWN0b3JNb2RlbHM6IFtdLCAgICAgICAgIC8v5om+5Zy65ZywXHJcbiAgICBqcmpnTWRvZWxzOiBbXSwgICAgICAgICAgIC8v5om+6YeR6J6N5py65p6EXHJcbiAgICB0ek1vZGVsczogW10sICAgICAgICAgICAgIC8v5om+5oqV6LWE6ZyA5rGCXHJcbiAgICByb25nemlQcm9zOiBbXSwgICAgICAgICAgIC8v5om+6J6N6LWE6ZyA5rGC77yI6aG555uu5bqT55qE6J6N6LWEN+mhue+8iVxyXG4gICAgcm9uZ3ppTmVlZHM6IFtdLCAgICAgICAgICAvL+aJvuiejei1hOmcgOaxgu+8iOmcgOaxguW6k+eahOiejei1hDfpobnvvIlcclxuICAgIC8v5a+86IiqXHJcbiAgICBnb05hbWU6JycsICAgICAgICAgICAgICAgIC8v6KaB5Y6755qE5Zyw5Z2AXHJcbiAgICBnb0xvbmdpdHVkZTogJycsICAgICAgICAgIC8v5Lit5b+D57uP5bqmKOe7iOeCuSlcclxuICAgIGdvTGF0aXR1ZGU6ICcnLCAgICAgICAgICAgLy/kuK3lv4PnuqzluqYo57uI54K5KVxyXG4gIH0sXHJcblxyXG4gIHB0Q3hUeXBlcygpOnZvaWR7ICAvL+WIm+aWsOW5s+WPsOexu+Wei1xyXG4gICAgaHR0cHMuc3VjY2Vzc1JlcXVlc3QoYXBpLnN1Ym1lbnVEaWMgKyAnP21vaWQ9NjAnLCBudWxsLCAnR0VUJylcclxuICAgIC50aGVuKChyZXM6YW55KTp2b2lkPT57XHJcbiAgICAgIGlmKHJlcyl7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIHR5cGVMaXN0OiByZXMudmFsXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIHB0VHlwZXMoKTp2b2lkeyAgLy/liJvkuJrlubPlj7DnsbvlnotcclxuICAgIGh0dHBzLnN1Y2Nlc3NSZXF1ZXN0KGFwaS5zdWJtZW51RGljICsgJz9tb2lkPTInLCBudWxsLCAnR0VUJylcclxuICAgIC50aGVuKChyZXM6YW55KTp2b2lkPT57XHJcbiAgICAgIGlmKHJlcyl7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIHR5cGVMaXN0OiByZXMudmFsXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIGluZHVzdHJ5KCk6dm9pZHsgIC8v5Lqn5LiaL+ihjOS4mlxyXG4gICAgaHR0cHMuc3VjY2Vzc1JlcXVlc3QoYXBpLnN1Ym1lbnVEaWMgKyAnP21vaWQ9NycsIG51bGwsICdHRVQnKVxyXG4gICAgLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgaWYocmVzKXtcclxuICAgICAgICBsZXQgYXJyOmFueSA9IHJlcy52YWwubWFwKChpdGVtOmFueSk6YW55PT57XHJcbiAgICAgICAgICBsZXQgY2hpbGRyZW46YW55ID0gaXRlbS5jaGlsZHJlbi5tYXAoKGl0ZW0yOmFueSk6YW55PT57XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgdGV4dDogaXRlbTIuZGljTmFtZSxcclxuICAgICAgICAgICAgICBpZDogaXRlbTIuaWQsXHJcbiAgICAgICAgICAgICAgcElkOiBpdGVtMi5wSWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIGNoaWxkcmVuLnVuc2hpZnQoe1xyXG4gICAgICAgICAgICB0ZXh0OiAn5YWo6YOoJyxcclxuICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgIHBJZDogaXRlbS5pZCxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdGV4dDogaXRlbS5kaWNOYW1lLFxyXG4gICAgICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW5cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBpbmR1c3RyeUxpc3Q6IGFyclxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICB4bVN0YWdlKCk6dm9pZHsgIC8v5omA5aSE6Zi25q61XHJcbiAgICBodHRwcy5zdWNjZXNzUmVxdWVzdChhcGkuc3VibWVudURpYyArICc/bW9pZD00MCcsIG51bGwsICdHRVQnKVxyXG4gICAgLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgaWYocmVzKXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgeG1TdGFnZUxpc3Q6IHJlcy52YWxcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICB4bUNhdGVnb3J5KCk6dm9pZHsgIC8v6ZyA5rGC57G75YirXHJcbiAgICBodHRwcy5zdWNjZXNzUmVxdWVzdChhcGkuc3VibWVudURpYyArICc/bW9pZD00MScsIG51bGwsICdHRVQnKVxyXG4gICAgLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgaWYocmVzKXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgeG1DYXRlZ29yeUxpc3Q6IHJlcy52YWxcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICB4bUZpbmFuY2luZygpOnZvaWR7ICAvL+iejei1hOmHkeminVxyXG4gICAgaHR0cHMuc3VjY2Vzc1JlcXVlc3QoYXBpLnN1Ym1lbnVEaWMgKyAnP21vaWQ9NTInLCBudWxsLCAnR0VUJylcclxuICAgIC50aGVuKChyZXM6YW55KTp2b2lkPT57XHJcbiAgICAgIGlmKHJlcyl7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIHhtRmluYW5jaW5nTGlzdDogcmVzLnZhbFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBjZENhcnJpZXIoKTp2b2lkeyAgLy/otYTmupDnsbvlnotcclxuICAgIGh0dHBzLnN1Y2Nlc3NSZXF1ZXN0KGFwaS5zdWJtZW51RGljICsgJz9tb2lkPTE1JywgbnVsbCwgJ0dFVCcpXHJcbiAgICAudGhlbigocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICBpZihyZXMpe1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBjZENhcnJpZXJMaXN0OiByZXMudmFsXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgZndDYXRlZ29yeSgpOnZvaWR7ICAvL+acjeWKoeexu+WIq1xyXG4gICAgaHR0cHMuc3VjY2Vzc1JlcXVlc3QoYXBpLnN1Ym1lbnVEaWMgKyAnP21vaWQ9MTMnLCBudWxsLCAnR0VUJylcclxuICAgIC50aGVuKChyZXM6YW55KTp2b2lkPT57XHJcbiAgICAgIGlmKHJlcyl7XHJcbiAgICAgICAgbGV0IGFycjphbnkgPSByZXMudmFsLm1hcCgoaXRlbTphbnkpOmFueT0+e1xyXG4gICAgICAgICAgbGV0IGNoaWxkcmVuOmFueSA9IGl0ZW0uY2hpbGRyZW4ubWFwKChpdGVtMjphbnkpOmFueT0+e1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIHRleHQ6IGl0ZW0yLmRpY05hbWUsXHJcbiAgICAgICAgICAgICAgaWQ6IGl0ZW0yLmlkLFxyXG4gICAgICAgICAgICAgIHBJZDogaXRlbTIucElkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBjaGlsZHJlbi51bnNoaWZ0KHtcclxuICAgICAgICAgICAgdGV4dDogJ+WFqOmDqCcsXHJcbiAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICBwSWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHRleHQ6IGl0ZW0uZGljTmFtZSxcclxuICAgICAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgZndDYXRlZ29yeUxpc3Q6IGFyclxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIGZ3VHlwZSgpOnZvaWR7ICAvL+WNleS9jeexu+Wei1xyXG4gICAgaHR0cHMuc3VjY2Vzc1JlcXVlc3QoYXBpLnN1Ym1lbnVEaWMgKyAnP21vaWQ9MTQnLCBudWxsLCAnR0VUJylcclxuICAgIC50aGVuKChyZXM6YW55KTp2b2lkPT57XHJcbiAgICAgIGlmKHJlcyl7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIGZ3VHlwZUxpc3Q6IHJlcy52YWxcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBmd1NjYWxlKCk6dm9pZHsgIC8v5Y2V5L2N6KeE5qihXHJcbiAgICBodHRwcy5zdWNjZXNzUmVxdWVzdChhcGkuc3VibWVudURpYyArICc/bW9pZD0yMScsIG51bGwsICdHRVQnKVxyXG4gICAgLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgaWYocmVzKXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgZndTY2FsZUxpc3Q6IHJlcy52YWxcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgcnpXYXkoKTp2b2lkeyAgLy/ono3otYTmlrnlvI9cclxuICAgIGh0dHBzLnN1Y2Nlc3NSZXF1ZXN0KGFwaS5zdWJtZW51RGljICsgJz9tb2lkPTU4JywgbnVsbCwgJ0dFVCcpXHJcbiAgICAudGhlbigocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICBpZihyZXMpe1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICByeldheUxpc3Q6IHJlcy52YWxcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgdHpBcmVhKCk6dm9pZHsgIC8v5oqV6LWE5Yy65Z+fXHJcbiAgICBodHRwcy5zdWNjZXNzUmVxdWVzdChhcGkudGVuYW50cywgbnVsbCwgJ0dFVCcpXHJcbiAgICAudGhlbigocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICBpZihyZXMpe1xyXG4gICAgICAgIGxldCBsaXN0OmFueSA9IHJlcy5saXN0Lm1hcCgoaXRlbTphbnkpOmFueT0+e1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZGljTmFtZTogaXRlbS5tb2RlbC5jbmFtZSxcclxuICAgICAgICAgICAgaWQ6IGl0ZW0ubW9kZWwuaWRcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICB0ekFyZWFMaXN0OiBsaXN0XHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSwoZXJyOmFueSk9PntcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICB0eldheSgpOnZvaWR7ICAvL+aKlei1hOaWueW8j1xyXG4gICAgaHR0cHMuc3VjY2Vzc1JlcXVlc3QoYXBpLnN1Ym1lbnVEaWMgKyAnP21vaWQ9NTYnLCBudWxsLCAnR0VUJylcclxuICAgIC50aGVuKChyZXM6YW55KTp2b2lkPT57XHJcbiAgICAgIGlmKHJlcyl7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIHR6V2F5TGlzdDogcmVzLnZhbFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICB0ek90aGVyKCk6dm9pZHsgIC8v5oqV6LWE6YeR6aKdXHJcbiAgICBodHRwcy5zdWNjZXNzUmVxdWVzdChhcGkuc3VibWVudURpYyArICc/bW9pZD01NScsIG51bGwsICdHRVQnKVxyXG4gICAgLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgaWYocmVzKXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgdHpPdGhlckxpc3Q6IHJlcy52YWxcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgdHpUeXBlKCk6dm9pZHsgIC8v6LWE6YeR57G75Z6LXHJcbiAgICBodHRwcy5zdWNjZXNzUmVxdWVzdChhcGkuc3VibWVudURpYyArICc/bW9pZD00MicsIG51bGwsICdHRVQnKVxyXG4gICAgLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgaWYocmVzKXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgdHpUeXBlTGlzdDogcmVzLnZhbFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuXHJcbiAgLy/mkJzntKLmjInpkq7op6blj5FcclxuICBzZWFyY2hCbHVyKGV2ZW50OmFueSk6dm9pZHtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHNlYXJjaEtleTogZXZlbnQuZGV0YWlsLnZhbHVlLCAgICAgLy/mma7pgJrmkJzntKJcclxuICAgICAgcGFnZVNpemU6IDEwLCAgICAgICAgICAgICAgICAgICAgICAvL+avj+mhteaYvuekuuaVsOmHj1xyXG4gICAgICBwYWdlSW5kZXg6IDEsICAgICAgICAgICAgICAgICAgICAgIC8v5b2T5YmN6aG1XHJcbiAgICAgIHRvdGFsOiAwLCAgICAgICAgICAgICAgICAgICAgICAgICAgLy/mgLvmnaHmlbBcclxuICAgICAgbWFya2VyczogW10sICAgICAgICAgICAgICAgICAgICAgICAvL+agh+iusOaAu+aVsFxyXG4gICAgICBudW06IDAsICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICBtdW1MaXN0OiBbXSwgICAgICAgICAgICAgICAgICAgICAgIC8vNuaJvuWIl+ihqFxyXG4gICAgfSlcclxuXHJcbiAgICBpZih0aGlzLmRhdGEuZmxhZyA9PSAnYWxsUHQnKXsgIC8v5bmz5Y+w5YWo6YOoXHJcbiAgICAgIHRoaXMuZ2V0QWxsUHJvKCk7IFxyXG4gICAgfVxyXG4gICAgaWYodGhpcy5kYXRhLmZsYWcgPT0gJ2N4UHQnKXsgIC8v5Yib5paw5bmz5Y+wXHJcbiAgICAgIHRoaXMuZ2V0Q3hQcm8oKTsgICAgXHJcbiAgICB9XHJcbiAgICBpZih0aGlzLmRhdGEuZmxhZyA9PSAnY3lQdCcpeyAgLy/liJvkuJrlubPlj7BcclxuICAgICAgdGhpcy5nZXRDeVBybygpOyAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpZih0aGlzLmRhdGEuZmxhZyA9PSAneG0nKXsgIC8v5om+6aG555uuXHJcbiAgICAgIHRoaXMuZ2V0UHJvTGlzdCgpOyAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaWYodGhpcy5kYXRhLmZsYWcgPT0gJ3pqJyl7ICAvL+aJvui1hOmHkVxyXG4gICAgICB0aGlzLmdldEFsbEZ1bmRzTGlzdCgpOyAgICBcclxuICAgIH1cclxuXHJcbiAgICBpZih0aGlzLmRhdGEuZmxhZyA9PSAnanInKXsgIC8v5om+6LWE6YeR77yI6YeR6J6N77yJXHJcbiAgICAgIHRoaXMuZ2V0SnJMaXN0KCk7ICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGlmKHRoaXMuZGF0YS5mbGFnID09ICd0eicpeyAgLy/mib7otYTph5HvvIjmipXotYTvvIlcclxuICAgICAgdGhpcy5nZXRUekxpc3QoKTsgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaWYodGhpcy5kYXRhLmZsYWcgPT0gJ3J6Jyl7ICAvL+aJvui1hOmHke+8iOiejei1hO+8iVxyXG4gICAgICB0aGlzLmdldFJ6TGlzdCgpOyAgICBcclxuICAgIH1cclxuXHJcbiAgICBpZih0aGlzLmRhdGEuZmxhZyA9PSAnY2QnKXsgIC8v5om+5Zy65ZywXHJcbiAgICAgIHRoaXMuZ2V0U2l0ZUxpc3QoKTsgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaWYodGhpcy5kYXRhLmZsYWcgPT0gJ2Z3Jyl7ICAvL+aJvuacjeWKoVxyXG4gICAgICB0aGlzLmdldFNlcnZpY2VMaXN0KCk7ICAgIFxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8v5pCc57Si5YiX6KGo5pi+56S6XHJcbiAgc2VhcmNoSW5mb09wZW4oKTp2b2lke1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgaXNMaXN0U2hvdzogZmFsc2UsICAgICAgICAgIC8v6buY6K6k5pi+56S6NuaJvuWGheWuuVxyXG4gICAgICBpc0luZm9TaG93OiBmYWxzZSwgICAgICAgICAvL+WNleadoeS/oeaBr+aYvuekulxyXG4gICAgICBpc1NlYXJjaFNob3c6IGZhbHNlLCAgICAgICAvL+aQnOe0oue7k+aenOaVsOaNrlxyXG4gICAgICBpc1NlYXJjaEluZm9TaG93OiB0cnVlLCAgIC8v5pCc57Si5YiX6KGo5pWw5o2uXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgIC8v5pCc57Si5YiX6KGo5YWz6ZetXHJcbiAgIHNlYXJjaEluZm9DbG9zZSgpOnZvaWR7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBpc0xpc3RTaG93OiBmYWxzZSwgICAgICAgICAgLy/pu5jorqTmmL7npLo25om+5YaF5a65XHJcbiAgICAgIGlzSW5mb1Nob3c6IGZhbHNlLCAgICAgICAgICAvL+WNleadoeS/oeaBr+aYvuekulxyXG4gICAgICBpc1NlYXJjaFNob3c6IHRydWUsICAgICAgICAgLy/mkJzntKLnu5PmnpzmlbDmja5cclxuICAgICAgaXNTZWFyY2hJbmZvU2hvdzogZmFsc2UsICAgIC8v5pCc57Si5YiX6KGo5pWw5o2uXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG5cclxuICAvL+aQnOe0oue7k+aenOWFs+mXrVxyXG4gIHNlYXJjaENsb3NlKCk6dm9pZHtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIG1hcmtlcnM6IFtdLCAgICAgICAgICAgICAgIC8v5riF56m6XHJcbiAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICBtdW1MaXN0OiBbXSwgICAgICAgICAgICAgICAvLzbmib7liJfooahcclxuICAgICAgaXNMaXN0U2hvdzogdHJ1ZSwgICAgICAgICAgLy/pu5jorqTmmL7npLo25om+5YaF5a65XHJcbiAgICAgIGlzSW5mb1Nob3c6IGZhbHNlLCAgICAgICAgIC8v5Y2V5p2h5L+h5oGv5pi+56S6XHJcbiAgICAgIGlzU2VhcmNoU2hvdzogZmFsc2UsICAgICAgIC8v5pCc57Si57uT5p6c5pWw5o2uXHJcbiAgICAgIGlzU2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgIC8v5pCc57Si5YiX6KGo5pWw5o2uXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIGhpZGVGbigpOnZvaWR7ICAgICAgIC8v6ZyA6KaB6ZqQ6JeP55qE5YWD57SgXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBwYWdlU2l6ZTogMTAsICAgICAgICAgICAgIC8v5q+P6aG15pi+56S65pWw6YePXHJcbiAgICAgIHBhZ2VJbmRleDogMSwgICAgICAgICAgICAgLy/lvZPliY3pobVcclxuICAgICAgdG90YWw6IDAsICAgICAgICAgICAgICAgICAvL+aAu+adoeaVsFxyXG5cclxuICAgICAgbWFya2VyczogW10sICAgICAgICAgICAgICAvL+agh+iusOaAu+aVsFxyXG4gICAgICBcclxuICAgICAgbnVtOiAwLCAgICAgICAgICAgICAgICAgICAgLy825om+57uT5p6cXHJcbiAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgIC8vNuaJvuWIl+ihqFxyXG4gICAgICBzZWFyY2hLZXk6ICcnLCAgICAgICAgICAgICAvL+WFs+mUruWtl+aQnOe0olxyXG5cclxuICAgICAgaXNMaXN0U2hvdzogZmFsc2UsICAgICAgICAgLy/pu5jorqTmmL7npLo25om+5YaF5a65XHJcbiAgICAgIGlzSW5mb1Nob3c6IGZhbHNlLCAgICAgICAgIC8v5Y2V5p2h5L+h5oGv5pi+56S6XHJcbiAgICAgIGlzU2VhcmNoU2hvdzogZmFsc2UsICAgICAgIC8v5pCc57Si57uT5p6c5pWw5o2uXHJcbiAgICAgIGlzU2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgIC8v5pCc57Si5YiX6KGo5pWw5o2uXHJcblxyXG4gICAgICBwdFNlYXJjaEluZm9TaG93OiBmYWxzZSwgICAgLy/lubPlj7Dlhajpg6jmjInpkq5cclxuICAgICAgcHRCdG5TaG93OiBmYWxzZSwgICAgICAgICAgIC8v5bmz5Y+w6auY57qn5pCc57Si6ZqQ6JePXHJcbiAgICAgIHByb1NlYXJjaEluZm9TaG93OiBmYWxzZSwgICAvL+mhueebrumrmOe6p+aQnOe0olxyXG5cclxuICAgICAgempTZWFyY2hJbmZvU2hvdzogZmFsc2UsICAgLy/otYTph5Hlhajpg6jmjInpkq5cclxuICAgICAganJTZWFyY2hJbmZvU2hvdzogZmFsc2UsICAgLy/mib7otYTph5HvvIjph5Hono3mnI3liqHvvIlcclxuICAgICAgdHpTZWFyY2hJbmZvU2hvdzogZmFsc2UsICAgLy/mib7otYTph5HvvIjmib7mipXotYTvvIlcclxuICAgICAgcnpTZWFyY2hJbmZvU2hvdzogZmFsc2UsICAgLy/mib7otYTph5HvvIjmib7ono3otYTvvIlcclxuICAgICAgXHJcbiAgICAgIGNkU2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgIC8v5Zy65Zyw6auY57qn5pCc57SiXHJcbiAgICAgIGZ3U2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgIC8v5pyN5Yqh6auY57qn5pCc57SiXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG5cclxuICAvL+aJvuW5s+WPsFxyXG4gIHB0Rm4oKTp2b2lkeyAgICAgICAgICAgICAgICAgICAvLzbmib7lubPlj7Dop6blj5FcclxuICAgIHRoaXMuaGlkZUZuKCk7ICAgICAgICAgICAgICAgLy/pnIDopoHpmpDol4/nmoTlhYPntKBcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGZsYWc6ICdhbGxQdCcsICAgICAgICAgICAgIC8v5b2T5YmN5YiX6KGoXHJcblxyXG4gICAgICBwdEluZGV4OiAwLCAgICAgICAgICAgICAgICAgLy/lvZPliY3ntKLlvJVcclxuICAgICAgcHRJbmR1c3RyeUlkOiBudWxsLCAgICAgICAgIC8v6YCJ5Lit55qEaWRcclxuICAgICAgcHRUeXBlQ2xhc3M6IG51bGwsICAgICAgICAgIC8v57G75Z6L5oyJ6ZKu54q25oCB5YiH5o2iXHJcbiAgICAgIHB0WmlaaGlDbGFzczogbnVsbCwgICAgICAgICAvL+i1hOi0qOaMiemSrueKtuaAgeWIh+aNolxyXG4gICAgICBwdFR5cGVJZDogJycsICAgICAgICAgICAgICAgLy/lubPlj7DnsbvlnotpZFxyXG4gICAgICBwdFppWmhpOiAnJywgICAgICAgICAgICAgICAgLy/lubPlj7DotYTotKhpZFxyXG4gICAgICBwdEN5VHlwZUlkOiAnJywgICAgICAgICAgICAgLy/kuqfkuJppZFxyXG4gICAgICBwdEh5VHlwZUlkOiAnJywgICAgICAgICAgICAgLy/ooYzkuJppZFxyXG5cclxuICAgICAgaXNTZWFyY2hTaG93OiB0cnVlLCAgICAgICAgLy/mkJzntKLnu5PmnpzmlbDmja5cclxuICAgICAgcHRTZWFyY2hJbmZvU2hvdzogdHJ1ZSwgICAgLy/lubPlj7Dlhajpg6jmjInpkq5cclxuICAgICAgcHRCdG5DbGFzczogMSwgICAgICAgICAgICAgIC8v5YWo6YOo5oyJ6ZKu54q25oCB5YiH5o2iXHJcbiAgICB9KVxyXG4gICAgdGhpcy5nZXRBbGxQcm8oKTsgICAgICAgICAgICAgIC8vNuaJvuWFqOmDqOW5s+WPsOe7n+iuoVxyXG4gIH0sXHJcbiAgZ2V0QWxsUHJvKCk6dm9pZHsgICAgICAgICAgICAgICAvLzbmib7lhajpg6jlubPlj7Dnu5/orqFcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIG1vcmVTaG93OiBmYWxzZSxcclxuICAgIH0pXHJcbiAgICBodHRwcy5zdWNjZXNzUmVxdWVzdChhcGkuYWxsUGxhdGZvcm0sIHtcclxuICAgICAgdGVuYW50SWQ6IGFwaS5hcmVhSWQsICAgICAgICAgICAgIC8v5Zyw5Yy6aWRcclxuICAgICAga2V5OiB0aGlzLmRhdGEuc2VhcmNoS2V5LCAgICAgICAgIC8v5YWz6ZSu5a2X5pCc57SiXHJcbiAgICAgIHBhZ2VTaXplOiB0aGlzLmRhdGEucGFnZVNpemUsICAgICAvL+avj+mhteaYvuekuuaVsOmHj1xyXG4gICAgICBwYWdlSW5kZXg6IHRoaXMuZGF0YS5wYWdlSW5kZXgsICAgLy/pobXmlbBcclxuICAgIH0sICdHRVQnKS50aGVuKChyZXM6YW55KTp2b2lkPT57XHJcbiAgICAgIGlmKHJlcyl7XHJcbiAgICAgICAgLy/liJvmlrDlubPlj7BcclxuICAgICAgICBsZXQgY3hQbGF0Zm9ybU1vZGVsc0xpc3Q6YW55ID0gcmVzLnZhbC5jeFBsYXRmb3JtTW9kZWxzLm1hcCgoaXRlbTphbnkpOmFueT0+e1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgIG5hbWU6ICfliJvmlrAnLCAgICAgICAgICAvL+ivpuaDheWIpOaWrVxyXG4gICAgICAgICAgICBsb25naXR1ZGU6IGl0ZW0ubG5nLCAgIC8v57uP5bqmXHJcbiAgICAgICAgICAgIGxhdGl0dWRlOiBpdGVtLmxhdCwgICAgLy/nuqzluqZcclxuICAgICAgICAgICAgaWNvblBhdGg6ICcuLi8uLi9pbWFnZXMvY3gucG5nJywgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgd2lkdGg6IDI3LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1LFxyXG4gICAgICAgICAgICBjYWxsb3V0OiB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogaXRlbS5wdE5hbWU/aXRlbS5wdE5hbWU6J+acquWhq+aKpScsXHJcbiAgICAgICAgICAgICAgY29sb3I6ICcjMDAwJyxcclxuICAgICAgICAgICAgICBmb250U2l6ZTogMTQsXHJcbiAgICAgICAgICAgICAgYmdDb2xvcjogJyNGRkYnLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDUsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI0NDQycsXHJcbiAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ0JZQ0xJQ0snXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGltZ0FycjogaXRlbS5wdFBpY3MsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WbvueJh+aVsOe7hFxyXG4gICAgICAgICAgICBwcm92aW5jZU5hbWU6IGl0ZW0ucHJvdmluY2VOYW1lP2l0ZW0ucHJvdmluY2VOYW1lOicnLCAgICAgLy/nnIFcclxuICAgICAgICAgICAgY2l0eU5hbWU6IGl0ZW0uY2l0eU5hbWU/aXRlbS5jaXR5TmFtZTonJywgICAgICAgICAgICAgICAgIC8v5biCXHJcbiAgICAgICAgICAgIGRpc3RyaWN0TmFtZTogaXRlbS5kaXN0cmljdE5hbWU/aXRlbS5kaXN0cmljdE5hbWU6JycsICAgICAvL+WMulxyXG4gICAgICAgICAgICBhZGRyZXNzOiBpdGVtLmN4QWRkcmVzcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/or6bnu4blnLDlnYBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvL+WIm+S4muW5s+WPsFxyXG4gICAgICAgIGxldCBjeVBsYXRmb3JtTW9kZWxzTGlzdDphbnkgPSByZXMudmFsLmN5UGxhdGZvcm1Nb2RlbHMubWFwKChpdGVtOmFueSk6YW55PT57XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgbmFtZTogJ+WIm+S4micsICAgICAgICAgIC8v6K+m5oOF5Yik5patXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZTogaXRlbS5sbmcsICAgLy/nu4/luqZcclxuICAgICAgICAgICAgbGF0aXR1ZGU6IGl0ZW0ubGF0LCAgICAvL+e6rOW6plxyXG4gICAgICAgICAgICBpY29uUGF0aDogJy4uLy4uL2ltYWdlcy9jeS5wbmcnLCAgICAgICAgICAgICAvL+agh+iusFxyXG4gICAgICAgICAgICB3aWR0aDogMjcsXHJcbiAgICAgICAgICAgIGhlaWdodDogMzUsXHJcbiAgICAgICAgICAgIGNhbGxvdXQ6IHtcclxuICAgICAgICAgICAgICBjb250ZW50OiBpdGVtLmN5TmFtZT9pdGVtLmN5TmFtZTon5pyq5aGr5oqlJyxcclxuICAgICAgICAgICAgICBjb2xvcjogJyMwMDAnLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAxOCxcclxuICAgICAgICAgICAgICBiZ0NvbG9yOiAnI0ZGRicsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNSxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXHJcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjQ0NDJyxcclxuICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnQllDTElDSydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW1nQXJyOiBpdGVtLnBpY0ZpbGVzLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lm77niYfmlbDnu4RcclxuICAgICAgICAgICAgcHJvdmluY2VOYW1lOiBpdGVtLnByb3ZpbmNlTmFtZT9pdGVtLnByb3ZpbmNlTmFtZTonJywgICAgIC8v55yBXHJcbiAgICAgICAgICAgIGNpdHlOYW1lOiBpdGVtLmNpdHlOYW1lP2l0ZW0uY2l0eU5hbWU6JycsICAgICAgICAgICAgICAgICAvL+W4glxyXG4gICAgICAgICAgICBkaXN0cmljdE5hbWU6IGl0ZW0uZGlzdHJpY3ROYW1lP2l0ZW0uZGlzdHJpY3ROYW1lOicnLCAgICAgLy/ljLpcclxuICAgICAgICAgICAgYWRkcmVzczogaXRlbS5jeUFkZHJlc3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6K+m57uG5Zyw5Z2AXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy/lpITnkIZJROS4uuaVsOWtl1xyXG4gICAgICAgIGxldCBtYXJrZXJzTGlzdDphbnkgID0gY3hQbGF0Zm9ybU1vZGVsc0xpc3QuY29uY2F0KGN5UGxhdGZvcm1Nb2RlbHNMaXN0KTtcclxuICAgICAgICBsZXQgbmV3TWFya2Vyc0xpc3Q6YW55ID0gbWFya2Vyc0xpc3QubWFwKChpdGVtOmFueSwgaW5kZXg6bnVtYmVyKTphbnk9PntcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBpbmRleCwgICAgICAgICAgICAgICAgICAgLy9tYXDnlKjnmoToh6rlrprkuYlJRFxyXG4gICAgICAgICAgICBuYW1lOiBpdGVtLm5hbWUsICAgICAgICAgICAgIC8v6K+m5oOF5Yik5patXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZTogaXRlbS5sb25naXR1ZGUsICAgLy/nu4/luqZcclxuICAgICAgICAgICAgbGF0aXR1ZGU6IGl0ZW0ubGF0aXR1ZGUsICAgICAvL+e6rOW6plxyXG4gICAgICAgICAgICBpY29uUGF0aDogaXRlbS5pY29uUGF0aCwgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIHdpZHRoOiAyNyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNSxcclxuICAgICAgICAgICAgY2FsbG91dDogaXRlbS5jYWxsb3V0LFxyXG4gICAgICAgICAgICBvbGRJZDogaXRlbS5pZCwgICAgICAgICAgICAgICAgICAgICAgLy/ljp/lp4tJRFxyXG4gICAgICAgICAgICB0aXRsZTogaXRlbS5jYWxsb3V0LmNvbnRlbnQsICAgICAgICAgLy/moIfpophcclxuICAgICAgICAgICAgaW1nQXJyOiBpdGVtLmltZ0FyciwgICAgICAgICAgICAgICAgIC8v5Zu+54mH5pWw57uEXHJcbiAgICAgICAgICAgIHByb3ZpbmNlTmFtZTogaXRlbS5wcm92aW5jZU5hbWUsICAgICAvL+ecgVxyXG4gICAgICAgICAgICBjaXR5TmFtZTogaXRlbS5jaXR5TmFtZSwgICAgICAgICAgICAgLy/luIJcclxuICAgICAgICAgICAgZGlzdHJpY3ROYW1lOiBpdGVtLmRpc3RyaWN0TmFtZSwgICAgICAvL+WMulxyXG4gICAgICAgICAgICBhZGRyZXNzOiBpdGVtLmFkZHJlc3MgICAgICAgICAgICAgICAgLy/or6bnu4blnLDlnYBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZih0aGlzLmRhdGEudG90YWwgPT0gMCl7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBtYXJrZXJzOiBuZXdNYXJrZXJzTGlzdCwgICAgICAgICAgICAgICAvL+agh+iusFxyXG4gICAgICAgICAgICB0b3RhbDogcmVzLnZhbC50b3RhbCwgICAgICAgICAgICAgICAgICAvL+aAu+aVsFxyXG4gICAgICAgICAgICBtdW1MaXN0OiBuZXdNYXJrZXJzTGlzdCwgICAgICAgICAgICAgICAvL+WIl+ihqFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIG1hcmtlcnM6IHRoaXMuZGF0YS5tYXJrZXJzLmNvbmNhdChuZXdNYXJrZXJzTGlzdCksICAgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgbXVtTGlzdDogdGhpcy5kYXRhLm11bUxpc3QuY29uY2F0KG5ld01hcmtlcnNMaXN0KSwgICAgICAgICAgICAgICAvL+WIl+ihqFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMuZGF0YS5tdW1MaXN0Lmxlbmd0aCA8IHJlcy52YWwudG90YWwpe1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgbW9yZVNob3c6IHRydWUsXHJcbiAgICAgICAgICAgIG1vcmVUaXRsZTogJ+eCueWHu+WKoOi9veabtOWkmicsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgbW9yZVNob3c6IHRydWUsXHJcbiAgICAgICAgICAgIG1vcmVUaXRsZTogJ+W3suWKoOi9veWFqOmDqCcsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgZ2V0Q3hQcm8oKTp2b2lkeyAgICAgICAgICAgICAgIC8vNuaJvuWIm+aWsOW5s+WPsOe7n+iuoVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgbW9yZVNob3c6IGZhbHNlLFxyXG4gICAgfSlcclxuICAgIGh0dHBzLnN1Y2Nlc3NSZXF1ZXN0KGFwaS5jeFBsYXRmb3JtVXNlciwge1xyXG4gICAgICB0ZW5hbnRJZDogYXBpLmFyZWFJZCwgICAgICAgICAgICAgLy/lnLDljLppZFxyXG4gICAgICBrZXk6IHRoaXMuZGF0YS5zZWFyY2hLZXksICAgICAgICAgLy/lhbPplK7lrZfmkJzntKJcclxuICAgICAgcGFnZVNpemU6IHRoaXMuZGF0YS5wYWdlU2l6ZSwgICAgIC8v5q+P6aG15pi+56S65pWw6YePXHJcbiAgICAgIHBhZ2VJbmRleDogdGhpcy5kYXRhLnBhZ2VJbmRleCwgICAvL+mhteaVsFxyXG4gICAgICB0eXBlSWQ6IHRoaXMuZGF0YS5wdFR5cGVJZCwgICAgICAgLy/lubPlj7DnsbvlnotpZFxyXG4gICAgICB6aVpoaTogdGhpcy5kYXRhLnB0WmlaaGksICAgICAgICAgLy/lubPlj7DotYTotKhpZFxyXG4gICAgICBjeVR5cGVJZDogdGhpcy5kYXRhLnB0Q3lUeXBlSWQsICAgLy/kuqfkuJppZFxyXG4gICAgICBoeVR5cGVJZDogdGhpcy5kYXRhLnB0SHlUeXBlSWQgICAgLy/ooYzkuJppZFxyXG4gICAgfSwgJ0dFVCcpLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgaWYocmVzKXtcclxuICAgICAgICBsZXQgbmV3TWFya2Vyc0xpc3Q6YW55ID0gcmVzLmxpc3QubWFwKChpdGVtOmFueSwgaW5kZXg6bnVtYmVyKTphbnk9PntcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBpbmRleCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vbWFw55So55qE6Ieq5a6a5LmJSURcclxuICAgICAgICAgICAgbmFtZTogJ+WIm+aWsCcsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/or6bmg4XliKTmlq1cclxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBpdGVtLmxuZywgICAgICAgICAgICAgICAgICAgICAgICAgLy/nu4/luqZcclxuICAgICAgICAgICAgbGF0aXR1ZGU6IGl0ZW0ubGF0LCAgICAgICAgICAgICAgICAgICAgICAgICAgLy/nuqzluqZcclxuICAgICAgICAgICAgaWNvblBhdGg6ICcuLi8uLi9pbWFnZXMvY3gucG5nJywgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgd2lkdGg6IDI3LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1LFxyXG4gICAgICAgICAgICBjYWxsb3V0OiB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogaXRlbS5wdE5hbWU/aXRlbS5wdE5hbWU6J+acquWhq+aKpScsXHJcbiAgICAgICAgICAgICAgY29sb3I6ICcjMDAwJyxcclxuICAgICAgICAgICAgICBmb250U2l6ZTogMTgsXHJcbiAgICAgICAgICAgICAgYmdDb2xvcjogJyNGRkYnLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDUsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI0NDQycsXHJcbiAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ0JZQ0xJQ0snXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9sZElkOiBpdGVtLmlkLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Y6f5aeLSURcclxuICAgICAgICAgICAgdGl0bGU6IGl0ZW0ucHROYW1lP2l0ZW0ucHROYW1lOifmnKrloavmiqUnLCAgICAgICAgICAgICAgICAgIC8v5qCH6aKYXHJcbiAgICAgICAgICAgIGltZ0FycjogaXRlbS5wdFBpY3MsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WbvueJh+aVsOe7hFxyXG4gICAgICAgICAgICBwcm92aW5jZU5hbWU6IGl0ZW0ucHJvdmluY2VOYW1lP2l0ZW0ucHJvdmluY2VOYW1lOicnLCAgICAgLy/nnIFcclxuICAgICAgICAgICAgY2l0eU5hbWU6IGl0ZW0uY2l0eU5hbWU/aXRlbS5jaXR5TmFtZTonJywgICAgICAgICAgICAgICAgIC8v5biCXHJcbiAgICAgICAgICAgIGRpc3RyaWN0TmFtZTogaXRlbS5kaXN0cmljdE5hbWU/aXRlbS5kaXN0cmljdE5hbWU6JycsICAgICAvL+WMulxyXG4gICAgICAgICAgICBhZGRyZXNzOiBpdGVtLmN4QWRkcmVzcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/or6bnu4blnLDlnYBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZih0aGlzLmRhdGEudG90YWwgPT0gMCl7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBtYXJrZXJzOiBuZXdNYXJrZXJzTGlzdCwgICAgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgdG90YWw6IHJlcy50b3RhbCwgICAgICAgICAgICAgICAgICAgICAgIC8v5oC75pWwXHJcbiAgICAgICAgICAgIG11bUxpc3Q6IG5ld01hcmtlcnNMaXN0LCAgICAgICAgICAgICAgICAvL+WIl+ihqFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIG1hcmtlcnM6IHRoaXMuZGF0YS5tYXJrZXJzLmNvbmNhdChuZXdNYXJrZXJzTGlzdCksICAgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgbXVtTGlzdDogdGhpcy5kYXRhLm11bUxpc3QuY29uY2F0KG5ld01hcmtlcnNMaXN0KSwgICAgICAgICAgICAgICAgLy/liJfooahcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuZGF0YS5tdW1MaXN0Lmxlbmd0aCA8IHJlcy50b3RhbCl7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBtb3JlU2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgbW9yZVRpdGxlOiAn54K55Ye75Yqg6L295pu05aSaJyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBtb3JlU2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgbW9yZVRpdGxlOiAn5bey5Yqg6L295YWo6YOoJyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBnZXRDeVBybygpOnZvaWR7ICAgICAgICAgICAgICAgLy825om+5Yib5Lia5bmz5Y+w57uf6K6hXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBtb3JlU2hvdzogZmFsc2UsXHJcbiAgICB9KVxyXG4gICAgaHR0cHMuc3VjY2Vzc1JlcXVlc3QoYXBpLmN5UGxhdFVzZXIsIHtcclxuICAgICAgdGVuYW50SWQ6IGFwaS5hcmVhSWQsICAgICAgICAgICAgIC8v5Zyw5Yy6aWRcclxuICAgICAga2V5OiB0aGlzLmRhdGEuc2VhcmNoS2V5LCAgICAgICAgIC8v5YWz6ZSu5a2X5pCc57SiXHJcbiAgICAgIHBhZ2VTaXplOiB0aGlzLmRhdGEucGFnZVNpemUsICAgICAvL+avj+mhteaYvuekuuaVsOmHj1xyXG4gICAgICBwYWdlSW5kZXg6IHRoaXMuZGF0YS5wYWdlSW5kZXgsICAgLy/pobXmlbBcclxuICAgICAgdHlwZUlkOiB0aGlzLmRhdGEucHRUeXBlSWQsICAgICAgIC8v5bmz5Y+w57G75Z6LaWRcclxuICAgICAgemlaaGk6IHRoaXMuZGF0YS5wdFppWmhpLCAgICAgICAgIC8v5bmz5Y+w6LWE6LSoaWRcclxuICAgICAgY3lUeXBlSWQ6IHRoaXMuZGF0YS5wdEN5VHlwZUlkLCAgIC8v5Lqn5LiaaWRcclxuICAgICAgaHlUeXBlSWQ6IHRoaXMuZGF0YS5wdEh5VHlwZUlkICAgIC8v6KGM5LiaaWRcclxuICAgIH0sICdHRVQnKS50aGVuKChyZXM6YW55KTp2b2lkPT57XHJcbiAgICAgIGlmKHJlcyl7XHJcbiAgICAgICAgbGV0IG5ld01hcmtlcnNMaXN0OmFueSA9IHJlcy5saXN0Lm1hcCgoaXRlbTphbnksIGluZGV4Om51bWJlcik6YW55PT57XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogaW5kZXgsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL21hcOeUqOeahOiHquWumuS5iUlEXHJcbiAgICAgICAgICAgIG5hbWU6ICfliJvkuJonLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6K+m5oOF5Yik5patXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZTogaXRlbS5sbmcsICAgICAgICAgICAgICAgICAgICAgICAgIC8v57uP5bqmXHJcbiAgICAgICAgICAgIGxhdGl0dWRlOiBpdGVtLmxhdCwgICAgICAgICAgICAgICAgICAgICAgICAgIC8v57qs5bqmXHJcbiAgICAgICAgICAgIGljb25QYXRoOiAnLi4vLi4vaW1hZ2VzL2N5LnBuZycsICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIHdpZHRoOiAyNyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNSxcclxuICAgICAgICAgICAgY2FsbG91dDoge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IGl0ZW0uY3lOYW1lP2l0ZW0uY3lOYW1lOifmnKrloavmiqUnLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IDE4LFxyXG4gICAgICAgICAgICAgIGJnQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1LFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNDQ0MnLFxyXG4gICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdCWUNMSUNLJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbGRJZDogaXRlbS5pZCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WOn+Wni0lEXHJcbiAgICAgICAgICAgIHRpdGxlOiBpdGVtLmN5TmFtZT9pdGVtLmN5TmFtZTon5pyq5aGr5oqlJywgICAgICAgICAgICAgICAgICAvL+agh+mimFxyXG4gICAgICAgICAgICBpbWdBcnI6IGl0ZW0ucGljRmlsZXMsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lm77niYfmlbDnu4RcclxuICAgICAgICAgICAgcHJvdmluY2VOYW1lOiBpdGVtLnByb3ZpbmNlTmFtZT9pdGVtLnByb3ZpbmNlTmFtZTonJywgICAgIC8v55yBXHJcbiAgICAgICAgICAgIGNpdHlOYW1lOiBpdGVtLmNpdHlOYW1lP2l0ZW0uY2l0eU5hbWU6JycsICAgICAgICAgICAgICAgICAvL+W4glxyXG4gICAgICAgICAgICBkaXN0cmljdE5hbWU6IGl0ZW0uZGlzdHJpY3ROYW1lP2l0ZW0uZGlzdHJpY3ROYW1lOicnLCAgICAgLy/ljLpcclxuICAgICAgICAgICAgYWRkcmVzczogaXRlbS5jeUFkZHJlc3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6K+m57uG5Zyw5Z2AXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZih0aGlzLmRhdGEudG90YWwgPT0gMCl7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBtYXJrZXJzOiBuZXdNYXJrZXJzTGlzdCwgICAgICAgICAgICAgICAvL+agh+iusFxyXG4gICAgICAgICAgICB0b3RhbDogcmVzLnRvdGFsLCAgICAgICAgICAgICAgICAgIC8v5oC75pWwXHJcbiAgICAgICAgICAgIG11bUxpc3Q6IG5ld01hcmtlcnNMaXN0LCAgICAgICAgICAgICAgICAvL+WIl+ihqFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIG1hcmtlcnM6IHRoaXMuZGF0YS5tYXJrZXJzLmNvbmNhdChuZXdNYXJrZXJzTGlzdCksICAgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgbXVtTGlzdDogdGhpcy5kYXRhLm11bUxpc3QuY29uY2F0KG5ld01hcmtlcnNMaXN0KSwgICAgICAgICAgICAgICAgLy/liJfooahcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMuZGF0YS5tdW1MaXN0Lmxlbmd0aCA8IHJlcy50b3RhbCl7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBtb3JlU2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgbW9yZVRpdGxlOiAn54K55Ye75Yqg6L295pu05aSaJyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBtb3JlU2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgbW9yZVRpdGxlOiAn5bey5Yqg6L295YWo6YOoJyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBwdEJ0blRvZ2dsZShlOmFueSk6dm9pZHsgIC8v5YWo6YOo5oyJ6ZKu54q25oCB5YiH5o2iXHJcbiAgICBpZihlLnRhcmdldC5kYXRhc2V0Lm51bSA9PSAxKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHsgIC8v5YWo6YOoXHJcbiAgICAgICAgZmxhZzogJ2FsbFB0JywgICAgICAgICAgICAgLy/lvZPliY3liJfooahcclxuICAgICAgICBwdEJ0bkNsYXNzOiBlLnRhcmdldC5kYXRhc2V0Lm51bSxcclxuICAgICAgICBwdEJ0blNob3c6IGZhbHNlLCAgICAgICAgICAvL+mrmOe6p+aQnOe0olxyXG4gICAgICAgIHBhZ2VTaXplOiAxMCwgICAgICAgICAgICAgLy/mr4/pobXmmL7npLrmlbDph49cclxuICAgICAgICBwYWdlSW5kZXg6IDEsICAgICAgICAgICAgIC8v5b2T5YmN6aG1XHJcbiAgICAgICAgdG90YWw6IDAsICAgICAgICAgICAgICAgICAvL+aAu+adoeaVsFxyXG4gICAgICAgIG1hcmtlcnM6IFtdLCAgICAgICAgICAgICAgLy/moIforrDmgLvmlbBcclxuICAgICAgICBudW06IDAsICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgLy825om+5YiX6KGoXHJcbiAgICAgICAgc2VhcmNoS2V5OiAnJywgICAgICAgICAgICAvL+WFs+mUruWtl+aQnOe0olxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLmdldEFsbFBybygpOyAgICAgICAgICAgICAvLzbmib7lhajpg6jlubPlj7Dnu5/orqFcclxuICAgIH1lbHNlIGlmKGUudGFyZ2V0LmRhdGFzZXQubnVtID09IDIpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGZsYWc6ICdjeFB0JywgICAgICAgICAgICAgLy/lvZPliY3liJfooahcclxuICAgICAgICBwdEJ0bkNsYXNzOiBlLnRhcmdldC5kYXRhc2V0Lm51bSxcclxuICAgICAgICBwdEJ0blNob3c6IHRydWUsICAgICAgICAgICAvL+mrmOe6p+aQnOe0olxyXG4gICAgICAgIHB0VHlwZUNsYXNzOiBudWxsLFxyXG4gICAgICAgIHB0VHlwZUlkOiAnJyxcclxuICAgICAgICBwdFppWmhpQ2xhc3M6IG51bGwsXHJcbiAgICAgICAgcHRaaVpoaTogJycsXHJcbiAgICAgICAgcHRJbmRleDogMCwgICAgICAgICAgICAgICAgIC8v5b2T5YmN57Si5byVXHJcbiAgICAgICAgcHRJbmR1c3RyeUlkOiBudWxsLCAgICAgICAgIC8v6YCJ5Lit55qEaWRcclxuICAgICAgICBwdEN5VHlwZUlkOiAnJywgICAgICAgICAgICAgLy/kuqfkuJppZFxyXG4gICAgICAgIHB0SHlUeXBlSWQ6ICcnLCAgICAgICAgICAgICAvL+ihjOS4mmlkXHJcblxyXG4gICAgICAgIHBhZ2VTaXplOiAxMCwgICAgICAgICAgICAgLy/mr4/pobXmmL7npLrmlbDph49cclxuICAgICAgICBwYWdlSW5kZXg6IDEsICAgICAgICAgICAgIC8v5b2T5YmN6aG1XHJcbiAgICAgICAgdG90YWw6IDAsICAgICAgICAgICAgICAgICAvL+aAu+adoeaVsFxyXG4gICAgICAgIG1hcmtlcnM6IFtdLCAgICAgICAgICAgICAgLy/moIforrDmgLvmlbBcclxuICAgICAgICBudW06IDAsICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgLy825om+5YiX6KGoXHJcbiAgICAgICAgc2VhcmNoS2V5OiAnJywgICAgICAgICAgICAvL+WFs+mUruWtl+aQnOe0olxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLmdldEN4UHJvKCk7ICAgICAgICAgICAgIC8vNuaJvuWIm+aWsOW5s+WPsOe7n+iuoVxyXG4gICAgICB0aGlzLnB0Q3hUeXBlcygpOyAgICAgICAgICAgIC8v5Yib5paw5bmz5Y+w57G75Z6LXHJcbiAgICAgIHRoaXMuaW5kdXN0cnkoKTsgICAgICAgICAgICAgLy/kuqfkuJrjgIHooYzkuJpcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyNwdFR5cGUnKS50b2dnbGUoZmFsc2UpOyAgICAgICAgIC8v5bmz5Y+w57G75Z6L5bGV5byA5YWz6Zet54q25oCBXHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjcHRaaVpoaScpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAvL+W5s+WPsOi1hOi0qOWxleW8gOWFs+mXreeKtuaAgVxyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI3B0SW5kdXN0cnknKS50b2dnbGUoZmFsc2UpOyAgICAgLy/kuqfkuJrjgIHooYzkuJrlsZXlvIDlhbPpl63nirbmgIFcclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGZsYWc6ICdjeVB0JywgICAgICAgICAgICAgLy/lvZPliY3liJfooahcclxuICAgICAgICBwdEJ0bkNsYXNzOiBlLnRhcmdldC5kYXRhc2V0Lm51bSxcclxuICAgICAgICBwdEJ0blNob3c6IHRydWUsICAgICAgICAgICAvL+mrmOe6p+aQnOe0olxyXG4gICAgICAgIHB0VHlwZUNsYXNzOiBudWxsLFxyXG4gICAgICAgIHB0VHlwZUlkOiAnJyxcclxuICAgICAgICBwdFppWmhpQ2xhc3M6IG51bGwsXHJcbiAgICAgICAgcHRaaVpoaTogJycsXHJcbiAgICAgICAgcHRJbmRleDogMCwgICAgICAgICAgICAgICAgIC8v5b2T5YmN57Si5byVXHJcbiAgICAgICAgcHRJbmR1c3RyeUlkOiBudWxsLCAgICAgICAgIC8v6YCJ5Lit55qEaWRcclxuICAgICAgICBwdEN5VHlwZUlkOiAnJywgICAgICAgICAgICAgLy/kuqfkuJppZFxyXG4gICAgICAgIHB0SHlUeXBlSWQ6ICcnLCAgICAgICAgICAgICAvL+ihjOS4mmlkXHJcblxyXG4gICAgICAgIHBhZ2VTaXplOiAxMCwgICAgICAgICAgICAgLy/mr4/pobXmmL7npLrmlbDph49cclxuICAgICAgICBwYWdlSW5kZXg6IDEsICAgICAgICAgICAgIC8v5b2T5YmN6aG1XHJcbiAgICAgICAgdG90YWw6IDAsICAgICAgICAgICAgICAgICAvL+aAu+adoeaVsFxyXG4gICAgICAgIG1hcmtlcnM6IFtdLCAgICAgICAgICAgICAgLy/moIforrDmgLvmlbBcclxuICAgICAgICBudW06IDAsICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgLy825om+5YiX6KGoXHJcbiAgICAgICAgc2VhcmNoS2V5OiAnJywgICAgICAgICAgICAvL+WFs+mUruWtl+aQnOe0olxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLmdldEN5UHJvKCk7ICAgICAgICAgICAgIC8vNuaJvuWIm+S4muW5s+WPsOe7n+iuoVxyXG4gICAgICB0aGlzLnB0VHlwZXMoKTsgICAgICAgICAgICAgIC8v57G75Z6LXHJcbiAgICAgIHRoaXMuaW5kdXN0cnkoKTsgICAgICAgICAgICAgLy/kuqfkuJrjgIHooYzkuJpcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyNwdFR5cGUnKS50b2dnbGUoZmFsc2UpOyAgICAgICAgIC8v5bmz5Y+w57G75Z6L5bGV5byA5YWz6Zet54q25oCBXHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjcHRaaVpoaScpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAvL+W5s+WPsOi1hOi0qOWxleW8gOWFs+mXreeKtuaAgVxyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI3B0SW5kdXN0cnknKS50b2dnbGUoZmFsc2UpOyAgICAgLy/kuqfkuJrjgIHooYzkuJrlsZXlvIDlhbPpl63nirbmgIFcclxuICAgIH1cclxuICB9LFxyXG4gIHB0TmF2SXRlbShkYXRhOmFueSk6dm9pZHsgICAgICAgLy/ooYzkuJrkuqfkuJrvvIjlt6bkvqflr7zoiKrngrnlh7vml7bvvIzop6blj5HnmoTkuovku7bvvIlcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHB0SW5kZXg6IGRhdGEuZGV0YWlsLmluZGV4IHx8IDAsXHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHB0SW5kdXN0cnlJdGVtKGRhdGE6YW55KTp2b2lkIHsgIC8v6KGM5Lia5Lqn5Lia77yI5Y+z5L6n6YCJ5oup6aG56KKr54K55Ye75pe277yM5Lya6Kem5Y+R55qE5LqL5Lu277yJXHJcblxyXG4gICAgY29uc3QgaWQgPSB0aGlzLmRhdGEucHRJbmR1c3RyeUlkID09PSBkYXRhLmRldGFpbC5pZCA/IG51bGwgOiBkYXRhLmRldGFpbC5pZDtcclxuICAgIGNvbnN0IHBJZCA9IGRhdGEuZGV0YWlsLnBJZDtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHB0SW5kdXN0cnlJZDogaWQsXHJcbiAgICAgIHB0Q3lUeXBlSWQ6ICBwSWQgPyBwSWQgOiAnJywgICAgICAgICAgLy/kuqfkuJppZFxyXG4gICAgICBwdEh5VHlwZUlkOiAgaWQgPT0gcElkID8gJycgOiBpZCwgICAgIC8v6KGM5LiaaWRcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgcHRUeXBlRm4oZTphbnkpOnZvaWR7ICAvL+W5s+WPsOexu+Wei+inpuWPkVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgcHRUeXBlQ2xhc3M6IGUudGFyZ2V0LmRhdGFzZXQuaWQsXHJcbiAgICAgIHB0VHlwZUlkOiBlLnRhcmdldC5kYXRhc2V0LmlkXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgcHRaaVpoaUZuKGU6YW55KTp2b2lkeyAgLy/lubPlj7DotYTotKjop6blj5FcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHB0WmlaaGlDbGFzczogZS50YXJnZXQuZGF0YXNldC5pZCxcclxuICAgICAgcHRaaVpoaTogZS50YXJnZXQuZGF0YXNldC50aXRsZVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICBwdFJlc2V0KGU6YW55KTp2b2lkeyAgLy/ph43nva5cclxuICAgIGxldCBmbGFnOm51bWJlciA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmZsYWc7XHJcbiAgICBpZihmbGFnID09IDEpeyAgLy/lubPlj7DnsbvlnotcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBwdFR5cGVDbGFzczogbnVsbCxcclxuICAgICAgICBwdFR5cGVJZDogJycsXHJcbiAgICAgICAgbnVtOiAwLCAgICAgICAgICAgICAgICAgICAgLy825om+57uT5p6cXHJcbiAgICAgICAgbXVtTGlzdDogW10sICAgICAgICAgICAgICAgLy825om+5YiX6KGoXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjcHRUeXBlJykudG9nZ2xlKGZhbHNlKTsgICAgICAgICAvL+W5s+WPsOexu+Wei+WFs+mXrVxyXG4gICAgfWVsc2UgaWYoZmxhZyA9PSAyKXsgIC8v5bmz5Y+w6LWE6LSoXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgcHRaaVpoaUNsYXNzOiBudWxsLFxyXG4gICAgICAgIHB0WmlaaGk6ICcnLFxyXG4gICAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgIC8vNuaJvuWIl+ihqFxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI3B0WmlaaGknKS50b2dnbGUoZmFsc2UpOyAgICAgICAgLy/lubPlj7DotYTotKjlhbPpl61cclxuICAgIH1lbHNleyAgLy/kuqfkuJrjgIHooYzkuJpcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBwdEluZGV4OiAwLCAgICAgICAgICAgICAgICAgLy/lvZPliY3ntKLlvJVcclxuICAgICAgICBwdEluZHVzdHJ5SWQ6IG51bGwsICAgICAgICAgLy/pgInkuK3nmoRpZFxyXG4gICAgICAgIHB0Q3lUeXBlSWQ6ICcnLCAgICAgICAgICAgICAvL+S6p+S4mmlkXHJcbiAgICAgICAgcHRIeVR5cGVJZDogJycsICAgICAgICAgICAgICAgLy/ooYzkuJppZFxyXG4gICAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgIC8vNuaJvuWIl+ihqFxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI3B0SW5kdXN0cnknKS50b2dnbGUoZmFsc2UpOyAgICAgLy/kuqfkuJrjgIHooYzkuJrlhbPpl61cclxuICAgIH1cclxuICAgIHRoaXMuZ2V0Q3hQcm8oKTsgICAgICAgICAgICAgLy825om+5Yib5paw5bmz5Y+w57uf6K6hXHJcbiAgfSxcclxuICBwdFN1Ym1pdChlOmFueSk6dm9pZHsgIC8v5a6M5oiQXHJcbiAgICBsZXQgZmxhZzpudW1iZXIgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5mbGFnO1xyXG4gICAgaWYoZmxhZyA9PSAxKXtcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyNwdFR5cGUnKS50b2dnbGUoZmFsc2UpOyAgICAgICAgIC8v5bmz5Y+w57G75Z6L5bGV5byA5YWz6Zet54q25oCBXHJcbiAgICB9ZWxzZSBpZihmbGFnID09IDIpe1xyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI3B0WmlaaGknKS50b2dnbGUoZmFsc2UpOyAgICAgICAgIC8v5bmz5Y+w6LWE6LSo5bGV5byA5YWz6Zet54q25oCBXHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyNwdEluZHVzdHJ5JykudG9nZ2xlKGZhbHNlKTsgICAgIC8v5Lqn5Lia44CB6KGM5Lia5bGV5byA5YWz6Zet54q25oCBXHJcbiAgICB9XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBudW06IDAsICAgICAgICAgICAgICAgICAgICAvLzbmib7nu5PmnpxcclxuICAgICAgbXVtTGlzdDogW10sICAgICAgICAgICAgICAgLy825om+5YiX6KGoXHJcbiAgICAgIG1hcmtlcnM6W10sICAgICAgICAgICAgICAgLy/moIforrDngrnlpITnkIblkI7nmoTmlbDmja7vvIhpZOOAgeafpeivouS9v+eUqO+8iVxyXG4gICAgICBwYWdlU2l6ZTogMTAsICAgICAgICAgICAgIC8v5q+P6aG15pi+56S65pWw6YePXHJcbiAgICAgIHBhZ2VJbmRleDogMSwgICAgICAgICAgICAgLy/lvZPliY3pobVcclxuICAgICAgdG90YWw6IDAsICAgICAgICAgICAgICAgICAvL+aAu+adoeaVsFxyXG4gICAgfSlcclxuICAgIGNvbnNvbGUubG9nKClcclxuICAgIGlmKHRoaXMuZGF0YS5mbGFnID09ICdjeFB0Jyl7XHJcbiAgICAgIHRoaXMuZ2V0Q3hQcm8oKTsgICAgICAgICAgICAgLy825om+5Yib5paw5bmz5Y+w57uf6K6hXHJcbiAgICB9XHJcbiAgICBpZih0aGlzLmRhdGEuZmxhZyA9PSAnY3lQdCcpe1xyXG4gICAgICB0aGlzLmdldEN5UHJvKCk7ICAgICAgICAgICAgIC8vNuaJvuWIm+S4muW5s+WPsOe7n+iuoVxyXG4gICAgfVxyXG4gICAgXHJcbiAgfSxcclxuXHJcblxyXG4gIC8v5om+5pS/562W77yI5aSW6ZO+77yJXHJcbiAgemNGbigpOnZvaWR7IFxyXG4gICAgd3gubmF2aWdhdGVUb01pbmlQcm9ncmFtKHtcclxuICAgICAgYXBwSWQ6ICd3eGY0MDgzYTVmODM2NWEzMGEnLFxyXG4gICAgICBwYXRoOiAnJyxcclxuICAgICAgc3VjY2VzcygpIHtcclxuICAgICAgICAvLyDmiZPlvIDmiJDlip9cclxuICAgICAgICAvLyB3eC5zd2l0Y2hUYWIoe1xyXG4gICAgICAgIC8vICAgdXJsOiAnL3BhZ2VzL2luZGV4L2luZGV4J1xyXG4gICAgICAgIC8vIH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSxcclxuXHJcblxyXG4gIC8v5om+6aG555uuXHJcbiAgeG1GbigpOnZvaWR7ICAvL+aJvumhueebrlxyXG4gICAgdGhpcy5oaWRlRm4oKTsgICAgICAgICAgICAgLy/pnIDopoHpmpDol4/nmoTlhYPntKBcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGZsYWc6ICd4bScsICAgICAgICAgICAgICAgIC8v5b2T5YmN5YiX6KGoXHJcblxyXG4gICAgICB4bUluZGV4OiAwLCAgICAgICAgICAgICAgICAgLy/lvZPliY3ntKLlvJVcclxuICAgICAgeG1JbmR1c3RyeUlkOiBudWxsLCAgICAgICAgIC8v6YCJ5Lit55qEaWRcclxuXHJcbiAgICAgIHhtU3RhZ2VDbGFzczogbnVsbCwgICAgICAgICAgLy/pmLbmrrXmjInpkq7nirbmgIHliIfmjaJcclxuICAgICAgeG1DYXRlZ29yeUNsYXNzOiBudWxsLCAgICAgICAvL+exu+WIq+aMiemSrueKtuaAgeWIh+aNolxyXG4gICAgICB4bUZpbmFuY2luZ0NsYXNzOiBudWxsLCAgICAgIC8v6YeR6aKd5oyJ6ZKu54q25oCB5YiH5o2iXHJcbiAgICAgIHhtU3RhZ2VJZDogJycsICAgICAgICAgICAgICAgLy/miYDlpITpmLbmrrVcclxuICAgICAgeG1UeXBlSWQ6ICcnLCAgICAgICAgICAgICAgICAvL+mcgOaxguexu+WIq1xyXG4gICAgICB4bVR6TW9uZXk6ICcnLCAgICAgICAgICAgICAgIC8v6J6N6LWE6YeR6aKdXHJcbiAgICAgIHhtQ3lUeXBlSWQ6ICcnLCAgICAgICAgICAgICAgLy/kuqfkuJppZFxyXG4gICAgICB4bUh5VHlwZUlkOiAnJywgICAgICAgICAgICAgIC8v6KGM5LiaaWRcclxuXHJcbiAgICAgIGlzU2VhcmNoU2hvdzogdHJ1ZSwgICAgICAgIC8v5pCc57Si57uT5p6c5pWw5o2uXHJcbiAgICAgIHByb1NlYXJjaEluZm9TaG93OiB0cnVlLCAgIC8v6aG555uu6auY57qn5pCc57SiXHJcbiAgICB9KVxyXG4gICAgdGhpcy5nZXRQcm9MaXN0KCk7ICAgICAgICAgICAvLzbmib7pobnnm67nu5/orqFcclxuICAgIHRoaXMueG1TdGFnZSgpOyAgICAgICAgICAgICAgLy/miYDlpITpmLbmrrVcclxuICAgIHRoaXMueG1DYXRlZ29yeSgpOyAgICAgICAgICAgLy/pnIDmsYLnsbvliKtcclxuICAgIHRoaXMueG1GaW5hbmNpbmcoKTsgICAgICAgICAgLy/ono3otYTph5Hpop1cclxuICAgIHRoaXMuaW5kdXN0cnkoKTsgICAgICAgICAgICAgLy/kuqfkuJrjgIHooYzkuJpcclxuICB9LFxyXG4gIGdldFByb0xpc3QoKTp2b2lkeyAgICAgICAgICAgICAgIC8vNuaJvumhueebrue7n+iuoVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgbW9yZVNob3c6IGZhbHNlLFxyXG4gICAgfSlcclxuICAgIGh0dHBzLnN1Y2Nlc3NSZXF1ZXN0KGFwaS5maW5kUHJvLCB7XHJcbiAgICAgIHRlbmFudElkOiBhcGkuYXJlYUlkLCAgICAgICAgICAgICAgICAgLy/lnLDljLppZFxyXG4gICAgICBrZXk6IHRoaXMuZGF0YS5zZWFyY2hLZXksICAgICAgICAgICAgIC8v5YWz6ZSu5a2X5pCc57SiXHJcbiAgICAgIHBhZ2VTaXplOiB0aGlzLmRhdGEucGFnZVNpemUsICAgICAgICAgLy/mr4/pobXmmL7npLrmlbDph49cclxuICAgICAgcGFnZUluZGV4OiB0aGlzLmRhdGEucGFnZUluZGV4LCAgICAgICAvL+mhteaVsFxyXG4gICAgICBjdXJTdGFnZTogdGhpcy5kYXRhLnhtU3RhZ2VJZCwgICAgIC8v5omA5aSE6Zi25q61XHJcbiAgICAgIG5lZWRUeXBlczogdGhpcy5kYXRhLnhtVHlwZUlkLCAgICAgICAgLy/pnIDmsYLnsbvliKtcclxuICAgICAgcnpNb25leTogdGhpcy5kYXRhLnhtVHpNb25leSwgICAgICAgICAvL+iejei1hOmHkeminVxyXG4gICAgICBjeVR5cGVJZDogdGhpcy5kYXRhLnhtQ3lUeXBlSWQsICAgICAgIC8v5Lqn5LiaaWRcclxuICAgICAgaHlUeXBlSWQ6IHRoaXMuZGF0YS54bUh5VHlwZUlkICAgICAgICAvL+ihjOS4mmlkXHJcbiAgICB9LCAnR0VUJykudGhlbigocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICBpZihyZXMpe1xyXG4gICAgICAgIGxldCBuZXdNYXJrZXJzTGlzdDphbnkgPSByZXMubGlzdC5tYXAoKGl0ZW06YW55LCBpbmRleDpudW1iZXIpOmFueT0+e1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGluZGV4LCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9tYXDnlKjnmoToh6rlrprkuYlJRFxyXG4gICAgICAgICAgICBuYW1lOiAn6aG555uuJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6K+m5oOF5Yik5patXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZTogaXRlbS5sbmcsICAgICAgICAgICAgICAgICAgICAgICAgIC8v57uP5bqmXHJcbiAgICAgICAgICAgIGxhdGl0dWRlOiBpdGVtLmxhdCwgICAgICAgICAgICAgICAgICAgICAgICAgIC8v57qs5bqmXHJcbiAgICAgICAgICAgIGljb25QYXRoOiAnLi4vLi4vaW1hZ2VzL3htLnBuZycsICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIHdpZHRoOiAyNyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNSxcclxuICAgICAgICAgICAgY2FsbG91dDoge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IGl0ZW0ucHJvTmFtZT9pdGVtLnByb05hbWU6J+acquWhq+aKpScsXHJcbiAgICAgICAgICAgICAgY29sb3I6ICcjMDAwJyxcclxuICAgICAgICAgICAgICBmb250U2l6ZTogMTgsXHJcbiAgICAgICAgICAgICAgYmdDb2xvcjogJyNGRkYnLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDUsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI0NDQycsXHJcbiAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ0JZQ0xJQ0snXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9sZElkOiBpdGVtLmlkLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Y6f5aeLSURcclxuICAgICAgICAgICAgdGl0bGU6IGl0ZW0ucHJvTmFtZT9pdGVtLnByb05hbWU6J+acquWhq+aKpScsICAgICAgICAgICAgICAgLy/moIfpophcclxuICAgICAgICAgICAgaW1nQXJyOiBpdGVtLnBpY3R1cmVGaWxlcywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lm77niYfmlbDnu4RcclxuICAgICAgICAgICAgcHJvdmluY2VOYW1lOiBpdGVtLnByb3ZpbmNlTmFtZT9pdGVtLnByb3ZpbmNlTmFtZTonJywgICAgLy/nnIFcclxuICAgICAgICAgICAgY2l0eU5hbWU6IGl0ZW0uY2l0eU5hbWU/aXRlbS5jaXR5TmFtZTonJywgICAgICAgICAgICAgICAgLy/luIJcclxuICAgICAgICAgICAgZGlzdHJpY3ROYW1lOiBpdGVtLmRpc3RyaWN0TmFtZT9pdGVtLmRpc3RyaWN0TmFtZTonJywgICAgLy/ljLpcclxuICAgICAgICAgICAgYWRkcmVzczogaXRlbS5hZGRyZXNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/or6bnu4blnLDlnYBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmKHRoaXMuZGF0YS50b3RhbCA9PSAwKXtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIG1hcmtlcnM6IG5ld01hcmtlcnNMaXN0LCAgICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIHRvdGFsOiByZXMudG90YWwsICAgICAgICAgICAgICAgICAgICAgIC8v5oC75pWwXHJcbiAgICAgICAgICAgIG11bUxpc3Q6IG5ld01hcmtlcnNMaXN0LCAgICAgICAgICAgICAgICAvL+WIl+ihqFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIG1hcmtlcnM6IHRoaXMuZGF0YS5tYXJrZXJzLmNvbmNhdChuZXdNYXJrZXJzTGlzdCksICAgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgbXVtTGlzdDogdGhpcy5kYXRhLm11bUxpc3QuY29uY2F0KG5ld01hcmtlcnNMaXN0KSwgICAgICAgICAgICAgICAgLy/liJfooahcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMuZGF0YS5tdW1MaXN0Lmxlbmd0aCA8IHJlcy50b3RhbCl7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBtb3JlU2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgbW9yZVRpdGxlOiAn54K55Ye75Yqg6L295pu05aSaJyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBtb3JlU2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgbW9yZVRpdGxlOiAn5bey5Yqg6L295YWo6YOoJyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICB4bVN0YWdlRm4oZTphbnkpOnZvaWR7ICAvL+aJgOWkhOmYtuauteinpuWPkVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgeG1TdGFnZUNsYXNzOiBlLnRhcmdldC5kYXRhc2V0LmlkLFxyXG4gICAgICB4bVN0YWdlSWQ6IGUudGFyZ2V0LmRhdGFzZXQuaWRcclxuICAgIH0pXHJcbiAgfSxcclxuICB4bUNhdGVnb3J5Rm4oZTphbnkpOnZvaWR7ICAvL+mcgOaxguexu+WIq+inpuWPkVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgeG1DYXRlZ29yeUNsYXNzOiBlLnRhcmdldC5kYXRhc2V0LmlkLFxyXG4gICAgICB4bVR5cGVJZDogZS50YXJnZXQuZGF0YXNldC5pZFxyXG4gICAgfSlcclxuICB9LFxyXG4gIHhtRmluYW5jaW5nRm4oZTphbnkpOnZvaWR7ICAvL+iejei1hOmHkemineinpuWPkVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgeG1GaW5hbmNpbmdDbGFzczogZS50YXJnZXQuZGF0YXNldC5pZCxcclxuICAgICAgeG1Uek1vbmV5OiBlLnRhcmdldC5kYXRhc2V0LmlkXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgeG1SZXNldChlOmFueSk6dm9pZHsgIC8v6aG555uu6YeN572uXHJcbiAgICBsZXQgZmxhZzpudW1iZXIgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5mbGFnO1xyXG4gICAgaWYoZmxhZyA9PSAxKXsgIC8v5omA5aSE6Zi25q61XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgeG1TdGFnZUNsYXNzOiBudWxsLFxyXG4gICAgICAgIHhtU3RhZ2VJZDogJycsXHJcbiAgICAgICAgbnVtOiAwLCAgICAgICAgICAgICAgICAgICAgLy825om+57uT5p6cXHJcbiAgICAgICAgbXVtTGlzdDogW10sICAgICAgICAgICAgICAgLy825om+5YiX6KGoXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjeG1TdGFnZScpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAgLy/miYDlpITpmLbmrrXlhbPpl61cclxuICAgIH1lbHNlIGlmKGZsYWcgPT0gMil7ICAvL+mcgOaxguexu+WIq1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHhtQ2F0ZWdvcnlDbGFzczogbnVsbCxcclxuICAgICAgICB4bVR5cGVJZDogJycsXHJcbiAgICAgICAgbnVtOiAwLCAgICAgICAgICAgICAgICAgICAgLy825om+57uT5p6cXHJcbiAgICAgICAgbXVtTGlzdDogW10sICAgICAgICAgICAgICAgLy825om+5YiX6KGoXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjeG1DYXRlZ29yeScpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAvL+mcgOaxguexu+WIq+WFs+mXrVxyXG4gICAgfWVsc2UgaWYoZmxhZyA9PSAzKXsgIC8v6J6N6LWE6YeR6aKdXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgeG1GaW5hbmNpbmdDbGFzczogbnVsbCxcclxuICAgICAgICB4bVR6TW9uZXk6ICcnLFxyXG4gICAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgIC8vNuaJvuWIl+ihqFxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI3htRmluYW5jaW5nJykudG9nZ2xlKGZhbHNlKTsgICAgICAgIC8v5bmz5Y+w6LWE6LSo5YWz6ZetXHJcbiAgICB9ZWxzZXsgIC8v5Lqn5Lia44CB6KGM5LiaXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgeG1JbmRleDogMCwgICAgICAgICAgICAgICAgIC8v5b2T5YmN57Si5byVXHJcbiAgICAgICAgeG1JbmR1c3RyeUlkOiBudWxsLCAgICAgICAgIC8v6YCJ5Lit55qEaWRcclxuICAgICAgICB4bUN5VHlwZUlkOiAnJywgICAgICAgICAgICAgLy/kuqfkuJppZFxyXG4gICAgICAgIHhtSHlUeXBlSWQ6ICcnLCAgICAgICAgICAgICAvL+ihjOS4mmlkXHJcbiAgICAgICAgbnVtOiAwLCAgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgICAvLzbmib7liJfooahcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyN4bUluZHVzdHJ5JykudG9nZ2xlKGZhbHNlKTsgICAgIC8v5Lqn5Lia44CB6KGM5Lia5YWz6ZetXHJcbiAgICB9XHJcbiAgICB0aGlzLmdldFByb0xpc3QoKTsgICAgICAgICAgICAgLy825om+6aG555uu57uf6K6hXHJcbiAgfSxcclxuICB4bVN1Ym1pdChlOmFueSk6dm9pZHsgIC8v6aG555uu5a6M5oiQXHJcbiAgICBsZXQgZmxhZzpudW1iZXIgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5mbGFnO1xyXG4gICAgaWYoZmxhZyA9PSAxKXtcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyN4bVN0YWdlJykudG9nZ2xlKGZhbHNlKTsgICAgICAgICAvL+aJgOWkhOmYtuauteWFs+mXrVxyXG4gICAgfWVsc2UgaWYoZmxhZyA9PSAyKXtcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyN4bUNhdGVnb3J5JykudG9nZ2xlKGZhbHNlKTsgICAgICAgIC8v6ZyA5rGC57G75Yir5YWz6ZetXHJcbiAgICB9ZWxzZSBpZihmbGFnID09IDMpe1xyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI3htRmluYW5jaW5nJykudG9nZ2xlKGZhbHNlKTsgICAgICAgIC8v5bmz5Y+w6LWE6LSo5YWz6ZetXHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyN4bUluZHVzdHJ5JykudG9nZ2xlKGZhbHNlKTsgICAgIC8v5Lqn5Lia44CB6KGM5Lia5YWz6ZetXHJcbiAgICB9XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBudW06IDAsICAgICAgICAgICAgICAgICAgICAvLzbmib7nu5PmnpxcclxuICAgICAgbXVtTGlzdDogW10sICAgICAgICAgICAgICAgLy825om+5YiX6KGoXHJcbiAgICAgIG1hcmtlcnM6W10sICAgICAgICAgICAgICAgLy/moIforrDngrnlpITnkIblkI7nmoTmlbDmja7vvIhpZOOAgeafpeivouS9v+eUqO+8iVxyXG4gICAgICBwYWdlU2l6ZTogMTAsICAgICAgICAgICAgIC8v5q+P6aG15pi+56S65pWw6YePXHJcbiAgICAgIHBhZ2VJbmRleDogMSwgICAgICAgICAgICAgLy/lvZPliY3pobVcclxuICAgICAgdG90YWw6IDAsICAgICAgICAgICAgICAgICAvL+aAu+adoeaVsFxyXG4gICAgfSlcclxuICAgIHRoaXMuZ2V0UHJvTGlzdCgpOyAgICAgICAgICAgICAvLzbmib7pobnnm67nu5/orqFcclxuICB9LFxyXG4gIHhtTmF2SXRlbShkYXRhOmFueSk6dm9pZHsgIC8v6KGM5Lia5Lqn5Lia77yI5bem5L6n5a+86Iiq54K55Ye75pe277yM6Kem5Y+R55qE5LqL5Lu277yJXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICB4bUluZGV4OiBkYXRhLmRldGFpbC5pbmRleCB8fCAwLFxyXG4gICAgfSk7XHJcbiAgfSxcclxuICB4bUluZHVzdHJ5SXRlbShkYXRhOmFueSk6dm9pZCB7ICAvL+ihjOS4muS6p+S4mu+8iOWPs+S+p+mAieaLqemhueiiq+eCueWHu+aXtu+8jOS8muinpuWPkeeahOS6i+S7tu+8iVxyXG4gICAgY29uc3QgaWQgPSB0aGlzLmRhdGEueG1JbmR1c3RyeUlkID09PSBkYXRhLmRldGFpbC5pZCA/IG51bGwgOiBkYXRhLmRldGFpbC5pZDtcclxuICAgIGNvbnN0IHBJZCA9IGRhdGEuZGV0YWlsLnBJZDtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHhtSW5kdXN0cnlJZDogaWQsXHJcbiAgICAgIHhtQ3lUeXBlSWQ6IHBJZCA/IHBJZCA6ICcnLCAgICAgICAgICAvL+S6p+S4mmlkXHJcbiAgICAgIHhtSHlUeXBlSWQ6IGlkID09IHBJZCA/ICcnIDogaWQsICAgICAvL+ihjOS4mmlkXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG5cclxuXHJcbiAgLy/mib7lnLrlnLBcclxuICBjZEZuKCk6dm9pZHsgIC8v5om+5Zy65ZywXHJcbiAgICB0aGlzLmhpZGVGbigpOyAgICAgICAgICAgICAgIC8v6ZyA6KaB6ZqQ6JeP55qE5YWD57SgXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBmbGFnOiAnY2QnLCAgICAgICAgICAgICAgICAgIC8v5b2T5YmN5YiX6KGoXHJcblxyXG4gICAgICBjZEluZGV4OiAwLCAgICAgICAgICAgICAgICAgLy/lvZPliY3ntKLlvJVcclxuICAgICAgY2RJbmR1c3RyeUlkOiBudWxsLCAgICAgICAgIC8v6YCJ5Lit55qEaWRcclxuICBcclxuICAgICAgY2RUeXBlQ2xhc3M6IG51bGwsICAgICAgICAgIC8v6LWE5rqQ57G75Z6LXHJcbiAgICAgIGNkVXNlckNsYXNzOiBudWxsLCAgICAgICAgICAvL+WcuuWcsOeUqOmAlFxyXG5cclxuICAgICAgY2RUeXBlSWQ6ICcnLCAgICAgICAgICAgICAgIC8v6L295L2T56m66Ze057G75Z6LXHJcbiAgICAgIGNkQ2h1WnVJZDogJycsICAgICAgICAgICAgICAvL+aYr+WQpuWHuuenn1xyXG4gICAgICBjZFNhbGVJZDogJycsICAgICAgICAgICAgICAgLy/mmK/lkKblh7rllK5cclxuICAgICAgY2RDeVR5cGVJZDogJycsICAgICAgICAgICAgIC8v5Lqn5LiaaWRcclxuICAgICAgY2RIeVR5cGVJZDogJycsICAgICAgICAgICAgIC8v6KGM5LiaaWRcclxuXHJcbiAgICAgIGlzU2VhcmNoU2hvdzogdHJ1ZSwgICAgICAgICAgLy/mkJzntKLnu5PmnpzmlbDmja5cclxuICAgICAgY2RTZWFyY2hJbmZvU2hvdzogdHJ1ZSwgICAgICAvL+WcuuWcsOmrmOe6p+aQnOe0olxyXG4gICAgfSlcclxuICAgIHRoaXMuZ2V0U2l0ZUxpc3QoKTsgICAgICAgICAgICAvLzbmib7lnLrlnLDnu5/orqFcclxuXHJcbiAgICB0aGlzLmNkQ2FycmllcigpOyAgICAgICAgICAgICAgLy/otYTmupDnsbvlnotcclxuICAgIHRoaXMuaW5kdXN0cnkoKTsgICAgICAgICAgICAgICAvL+S6p+S4muOAgeihjOS4mlxyXG4gIH0sXHJcbiAgZ2V0U2l0ZUxpc3QoKTp2b2lkeyAgICAgICAgICAgICAgIC8vNuaJvuWcuuWcsOe7n+iuoVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgbW9yZVNob3c6IGZhbHNlLFxyXG4gICAgfSlcclxuICAgIGh0dHBzLnN1Y2Nlc3NSZXF1ZXN0KGFwaS5jeVBsYXRmb3JtLCB7XHJcbiAgICAgIHRlbmFudElkOiBhcGkuYXJlYUlkLCAgICAgICAgICAgICAgICAgLy/lnLDljLppZFxyXG4gICAgICBrZXk6IHRoaXMuZGF0YS5zZWFyY2hLZXksICAgICAgICAgICAgIC8v5YWz6ZSu5a2X5pCc57SiXHJcbiAgICAgIHBhZ2VTaXplOiB0aGlzLmRhdGEucGFnZVNpemUsICAgICAgICAgLy/mr4/pobXmmL7npLrmlbDph49cclxuICAgICAgcGFnZUluZGV4OiB0aGlzLmRhdGEucGFnZUluZGV4LCAgICAgICAvL+mhteaVsFxyXG4gICAgICB6dFR5cGVJZDogdGhpcy5kYXRhLmNkVHlwZUlkLCAgICAgICAgIC8v6L295L2T56m66Ze057G75Z6LXHJcbiAgICAgIGlzQ2h1WnU6IHRoaXMuZGF0YS5jZENodVp1SWQsICAgICAgICAgIC8v5piv5ZCm5Ye656efXHJcbiAgICAgIGlzU2FsZTogdGhpcy5kYXRhLmNkU2FsZUlkLCAgICAgICAgICAgLy/mmK/lkKblh7rllK5cclxuICAgICAgY3lUeXBlSWQ6IHRoaXMuZGF0YS5jZEN5VHlwZUlkLCAgICAgICAvL+S6p+S4mmlkXHJcbiAgICAgIGh5VHlwZUlkOiB0aGlzLmRhdGEuY2RIeVR5cGVJZCAgICAgICAgLy/ooYzkuJppZFxyXG4gICAgfSwgJ0dFVCcpLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgaWYocmVzKXtcclxuICAgICAgICBsZXQgbmV3TWFya2Vyc0xpc3Q6YW55ID0gcmVzLmxpc3QubWFwKChpdGVtOmFueSwgaW5kZXg6bnVtYmVyKTphbnk9PntcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBpbmRleCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vbWFw55So55qE6Ieq5a6a5LmJSURcclxuICAgICAgICAgICAgbmFtZTogJ+WcuuWcsCcsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+ivpuaDheWIpOaWrVxyXG4gICAgICAgICAgICBsb25naXR1ZGU6IGl0ZW0ubG5nLCAgICAgICAgICAgICAgICAgICAgICAgICAvL+e7j+W6plxyXG4gICAgICAgICAgICBsYXRpdHVkZTogaXRlbS5sYXQsICAgICAgICAgICAgICAgICAgICAgICAgICAvL+e6rOW6plxyXG4gICAgICAgICAgICBpY29uUGF0aDogJy4uLy4uL2ltYWdlcy9jZC5wbmcnLCAgICAgICAgICAgICAvL+agh+iusFxyXG4gICAgICAgICAgICB3aWR0aDogMjcsXHJcbiAgICAgICAgICAgIGhlaWdodDogMzUsXHJcbiAgICAgICAgICAgIGNhbGxvdXQ6IHtcclxuICAgICAgICAgICAgICBjb250ZW50OiBpdGVtLmN5enROYW1lP2l0ZW0uY3l6dE5hbWU6J+acquWhq+aKpScsXHJcbiAgICAgICAgICAgICAgY29sb3I6ICcjMDAwJyxcclxuICAgICAgICAgICAgICBmb250U2l6ZTogMTgsXHJcbiAgICAgICAgICAgICAgYmdDb2xvcjogJyNGRkYnLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDUsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI0NDQycsXHJcbiAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ0JZQ0xJQ0snXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9sZElkOiBpdGVtLmlkLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Y6f5aeLSURcclxuICAgICAgICAgICAgdGl0bGU6IGl0ZW0uY3l6dE5hbWU/aXRlbS5jeXp0TmFtZTon5pyq5aGr5oqlJywgICAgICAgICAgICAgIC8v5qCH6aKYXHJcbiAgICAgICAgICAgIGltZ0FycjogaXRlbS5waWNGaWxlcywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Zu+54mH5pWw57uEXHJcbiAgICAgICAgICAgIHByb3ZpbmNlTmFtZTogaXRlbS5wcm92aW5jZU5hbWU/aXRlbS5wcm92aW5jZU5hbWU6JycsICAgIC8v55yBXHJcbiAgICAgICAgICAgIGNpdHlOYW1lOiBpdGVtLmNpdHlOYW1lP2l0ZW0uY2l0eU5hbWU6JycsICAgICAgICAgICAgICAgIC8v5biCXHJcbiAgICAgICAgICAgIGRpc3RyaWN0TmFtZTogaXRlbS5kaXN0cmljdE5hbWU/aXRlbS5kaXN0cmljdE5hbWU6JycsICAgIC8v5Yy6XHJcbiAgICAgICAgICAgIGFkZHJlc3M6IGl0ZW0uY3l6dEFkZHJlc3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6K+m57uG5Zyw5Z2AXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZih0aGlzLmRhdGEudG90YWwgPT0gMCl7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBtYXJrZXJzOiBuZXdNYXJrZXJzTGlzdCwgICAgICAgICAgICAgICAvL+agh+iusFxyXG4gICAgICAgICAgICB0b3RhbDogcmVzLnRvdGFsLCAgICAgICAgICAgICAgICAgICAgICAvL+aAu+aVsFxyXG4gICAgICAgICAgICBtdW1MaXN0OiBuZXdNYXJrZXJzTGlzdCwgICAgICAgICAgICAgICAgLy/liJfooahcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBtYXJrZXJzOiB0aGlzLmRhdGEubWFya2Vycy5jb25jYXQobmV3TWFya2Vyc0xpc3QpLCAgICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIG11bUxpc3Q6IHRoaXMuZGF0YS5tdW1MaXN0LmNvbmNhdChuZXdNYXJrZXJzTGlzdCksICAgICAgICAgICAgICAgIC8v5YiX6KGoXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZih0aGlzLmRhdGEubXVtTGlzdC5sZW5ndGggPCByZXMudG90YWwpe1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgbW9yZVNob3c6IHRydWUsXHJcbiAgICAgICAgICAgIG1vcmVUaXRsZTogJ+eCueWHu+WKoOi9veabtOWkmicsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgbW9yZVNob3c6IHRydWUsXHJcbiAgICAgICAgICAgIG1vcmVUaXRsZTogJ+W3suWKoOi9veWFqOmDqCcsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgY2RUeXBlRm4oZTphbnkpOnZvaWR7ICAvL+i1hOa6kOexu+Wei+inpuWPkVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgY2RUeXBlQ2xhc3M6IGUudGFyZ2V0LmRhdGFzZXQuaWQsXHJcbiAgICAgIGNkVHlwZUlkOiBlLnRhcmdldC5kYXRhc2V0LmlkXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgY2RVc2VGbihlOmFueSk6dm9pZHsgIC8v5Zy65Zyw55So6YCU6Kem5Y+RXHJcbiAgICBsZXQgaWQ6YW55ID0gZS50YXJnZXQuZGF0YXNldC5pZDtcclxuICAgIGlmKGlkID09IDEpeyAgLy/lh7rnp59cclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBjZFVzZXJDbGFzczogaWQsXHJcbiAgICAgICAgY2RDaHVadUlkOiAnMScsICAgICAgICAvL+WHuuenn1xyXG4gICAgICAgIGNkU2FsZUlkOiAnJywgICAgICAgICAgLy/lh7rllK5cclxuICAgICAgfSlcclxuICAgIH1lbHNleyAgLy/lh7rllK5cclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBjZFVzZXJDbGFzczogaWQsXHJcbiAgICAgICAgY2RDaHVadUlkOiAnJywgICAgICAgICAvL+WHuuenn1xyXG4gICAgICAgIGNkU2FsZUlkOiAnMScsICAgICAgICAgLy/lh7rllK5cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIGNkTmF2SXRlbShkYXRhOmFueSk6dm9pZHsgICAgICAgLy/ooYzkuJrkuqfkuJrvvIjlt6bkvqflr7zoiKrngrnlh7vml7bvvIzop6blj5HnmoTkuovku7bvvIlcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGNkSW5kZXg6IGRhdGEuZGV0YWlsLmluZGV4IHx8IDAsXHJcbiAgICB9KTtcclxuICB9LFxyXG4gIGNkSW5kdXN0cnlJdGVtKGRhdGE6YW55KTp2b2lkIHsgIC8v6KGM5Lia5Lqn5Lia77yI5Y+z5L6n6YCJ5oup6aG56KKr54K55Ye75pe277yM5Lya6Kem5Y+R55qE5LqL5Lu277yJXHJcbiAgICBjb25zdCBpZCA9IHRoaXMuZGF0YS5jZEluZHVzdHJ5SWQgPT09IGRhdGEuZGV0YWlsLmlkID8gbnVsbCA6IGRhdGEuZGV0YWlsLmlkO1xyXG4gICAgY29uc3QgcElkID0gZGF0YS5kZXRhaWwucElkO1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgY2RJbmR1c3RyeUlkOiBpZCxcclxuICAgICAgY2RDeVR5cGVJZDogcElkID8gcElkIDogJycsICAgICAgICAgIC8v5Lqn5LiaaWRcclxuICAgICAgY2RIeVR5cGVJZDogaWQgPT0gcElkID8gJycgOiBpZCwgICAgIC8v6KGM5LiaaWRcclxuICAgIH0pXHJcbiAgfSxcclxuICBjZFJlc2V0KGU6YW55KTp2b2lkeyAgLy/mib7lnLrlnLDph43nva5cclxuICAgIGxldCBmbGFnOm51bWJlciA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmZsYWc7XHJcbiAgICBpZihmbGFnID09IDEpeyAgLy/otYTmupDnsbvlnotcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBjZFR5cGVDbGFzczogbnVsbCxcclxuICAgICAgICBjZFR5cGVJZDogJycsXHJcbiAgICAgICAgbnVtOiAwLCAgICAgICAgICAgICAgICAgICAgLy825om+57uT5p6cXHJcbiAgICAgICAgbXVtTGlzdDogW10sICAgICAgICAgICAgICAgLy825om+5YiX6KGoXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjY2RUeXBlJykudG9nZ2xlKGZhbHNlKTsgICAgICAgICAvL+i1hOa6kOexu+Wei+WFs+mXrVxyXG4gICAgfWVsc2UgaWYoZmxhZyA9PSAyKXsgIC8v5Zy65Zyw55So6YCUXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgY2RVc2VyQ2xhc3M6IG51bGwsXHJcbiAgICAgICAgY2RDaHVadUlkOiAnJywgICAgICAgICAgICAgLy/lh7rnp59cclxuICAgICAgICBjZFNhbGVJZDogJycsICAgICAgICAgICAgICAvL+WHuuWUrlxyXG4gICAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgIC8vNuaJvuWIl+ihqFxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI2NkVXNlcicpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAvL+WcuuWcsOeUqOmAlOWFs+mXrVxyXG4gICAgfWVsc2V7ICAvL+S6p+S4muOAgeihjOS4mlxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGNkSW5kZXg6IDAsICAgICAgICAgICAgICAgICAvL+W9k+WJjee0ouW8lVxyXG4gICAgICAgIGNkSW5kdXN0cnlJZDogbnVsbCwgICAgICAgICAvL+mAieS4reeahGlkXHJcbiAgICAgICAgY2RDeVR5cGVJZDogJycsICAgICAgICAgICAgIC8v5Lqn5LiaaWRcclxuICAgICAgICBjZEh5VHlwZUlkOiAnJywgICAgICAgICAgICAgLy/ooYzkuJppZFxyXG4gICAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgIC8vNuaJvuWIl+ihqFxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI2NkSW5kdXN0cnknKS50b2dnbGUoZmFsc2UpOyAgICAgLy/kuqfkuJrjgIHooYzkuJrlhbPpl61cclxuICAgIH1cclxuICAgIHRoaXMuZ2V0U2l0ZUxpc3QoKTsgICAgICAgICAgICAvLzbmib7lnLrlnLDnu5/orqFcclxuICB9LFxyXG4gIGNkU3VibWl0KGU6YW55KTp2b2lkeyAgLy/mib7lnLrlnLDlrozmiJBcclxuICAgIGxldCBmbGFnOm51bWJlciA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmZsYWc7XHJcbiAgICBpZihmbGFnID09IDEpe1xyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI2NkVHlwZScpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAgLy/otYTmupDnsbvlnovlsZXlvIDlhbPpl63nirbmgIFcclxuICAgIH1lbHNlIGlmKGZsYWcgPT0gMil7XHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjY2RVc2VyJykudG9nZ2xlKGZhbHNlKTsgICAgICAgICAvL+WcuuWcsOeUqOmAlOWxleW8gOWFs+mXreeKtuaAgVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjY2RJbmR1c3RyeScpLnRvZ2dsZShmYWxzZSk7ICAgICAvL+S6p+S4muOAgeihjOS4muWxleW8gOWFs+mXreeKtuaAgVxyXG4gICAgfVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgbnVtOiAwLCAgICAgICAgICAgICAgICAgICAgLy825om+57uT5p6cXHJcbiAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgIC8vNuaJvuWIl+ihqFxyXG4gICAgICBtYXJrZXJzOltdLCAgICAgICAgICAgICAgIC8v5qCH6K6w54K55aSE55CG5ZCO55qE5pWw5o2u77yIaWTjgIHmn6Xor6Lkvb/nlKjvvIlcclxuICAgICAgcGFnZVNpemU6IDEwLCAgICAgICAgICAgICAvL+avj+mhteaYvuekuuaVsOmHj1xyXG4gICAgICBwYWdlSW5kZXg6IDEsICAgICAgICAgICAgIC8v5b2T5YmN6aG1XHJcbiAgICAgIHRvdGFsOiAwLCAgICAgICAgICAgICAgICAgLy/mgLvmnaHmlbBcclxuICAgIH0pXHJcbiAgICB0aGlzLmdldFNpdGVMaXN0KCk7ICAgICAgICAgICAgLy825om+5Zy65Zyw57uf6K6hXHJcbiAgfSxcclxuXHJcblxyXG4gIC8v5om+5pyN5YqhXHJcbiAgZndGbigpOnZvaWR7XHJcbiAgICB0aGlzLmhpZGVGbigpOyAgICAgICAgICAgICAgIC8v6ZyA6KaB6ZqQ6JeP55qE5YWD57SgXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBmbGFnOiAnZncnLCAgICAgICAgICAgICAgICAgLy/lvZPliY3liJfooahcclxuXHJcbiAgICAgIGZ3Q2F0ZWdvcnlJbmRleDogMCwgICAgICAgICAvL+W9k+WJjee0ouW8le+8iOacjeWKoeexu+WIq++8iVxyXG4gICAgICBmd0NhdGVnb3J5SWQ6IG51bGwsICAgICAgICAgLy/pgInkuK3nmoRpZO+8iOacjeWKoeexu+WIq++8iVxyXG4gICAgICBmd0luZHVzdHJ5SW5kZXg6IDAsICAgICAgICAgLy/lvZPliY3ntKLlvJXvvIjooYzkuJrkuqfkuJrvvIlcclxuICAgICAgZndJbmR1c3RyeUlkOiBudWxsLCAgICAgICAgIC8v6YCJ5Lit55qEaWTvvIjooYzkuJrkuqfkuJrvvIlcclxuXHJcbiAgICAgIGZ3VHlwZUNsYXNzOiBudWxsLCAgICAgICAgICAvL+WNleS9jeexu+Wei1xyXG4gICAgICBmd1NjYWxlQ2xhc3M6IG51bGwsICAgICAgICAgLy/ljZXkvY3op4TmqKFcclxuXHJcbiAgICAgIGZ3VHlwZU9uZUlkOiAnJywgICAgICAgICAgICAvL+acjeWKoeexu+WIq+S4gOe6p+iPnOWNlVxyXG4gICAgICBmd1R5cGVUd29JZDogJycsICAgICAgICAgICAgLy/mnI3liqHnsbvliKvkuoznuqfoj5zljZVcclxuICAgICAgZndEd1N0YXR1c0lkOiAnJywgICAgICAgICAgIC8v5Y2V5L2N57G75Z6LaWRcclxuICAgICAgZndEd1NjYWxlSWQ6ICcnLCAgICAgICAgICAgIC8v5Y2V5L2N6KeE5qihaWRcclxuICAgICAgZndDeVR5cGVJZDogJycsICAgICAgICAgICAgIC8v5Lqn5LiaaWRcclxuICAgICAgZndIeVR5cGVJZDogJycsICAgICAgICAgICAgIC8v6KGM5LiaaWRcclxuXHJcbiAgICAgIGlzU2VhcmNoU2hvdzogdHJ1ZSwgICAgICAgIC8v5pCc57Si57uT5p6c5pWw5o2uXHJcbiAgICAgIGZ3U2VhcmNoSW5mb1Nob3c6IHRydWUsICAgIC8v5pyN5Yqh6auY57qn5pCc57SiXHJcbiAgICB9KVxyXG4gICAgdGhpcy5nZXRTZXJ2aWNlTGlzdCgpOyAgICAgICAvLzbmib7mnI3liqHnu5/orqFcclxuICAgIHRoaXMuZndDYXRlZ29yeSgpOyAgICAgICAgICAgLy/mnI3liqHnsbvliKtcclxuICAgIHRoaXMuZndUeXBlKCk7ICAgICAgICAgICAgICAgLy/ljZXkvY3nsbvlnotcclxuICAgIHRoaXMuZndTY2FsZSgpOyAgICAgICAgICAgICAgLy/ljZXkvY3op4TmqKFcclxuICAgIHRoaXMuaW5kdXN0cnkoKTsgICAgICAgICAgICAgLy/kuqfkuJrjgIHooYzkuJpcclxuICB9LFxyXG4gIGdldFNlcnZpY2VMaXN0KCk6dm9pZHsgICAgICAgICAvLzbmib7mnI3liqHnu5/orqFcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIG1vcmVTaG93OiBmYWxzZSxcclxuICAgIH0pXHJcbiAgICBodHRwcy5zdWNjZXNzUmVxdWVzdChhcGkuZmluZEZ3LCB7XHJcbiAgICAgIHRlbmFudElkOiBhcGkuYXJlYUlkLCAgICAgICAgICAgICAgICAgLy/lnLDljLppZFxyXG4gICAgICBrZXk6IHRoaXMuZGF0YS5zZWFyY2hLZXksICAgICAgICAgICAgIC8v5YWz6ZSu5a2X5pCc57SiXHJcbiAgICAgIHBhZ2VTaXplOiB0aGlzLmRhdGEucGFnZVNpemUsICAgICAgICAgLy/mr4/pobXmmL7npLrmlbDph49cclxuICAgICAgcGFnZUluZGV4OiB0aGlzLmRhdGEucGFnZUluZGV4LCAgICAgICAvL+mhteaVsFxyXG4gICAgICB0eXBlT25lSWQ6IHRoaXMuZGF0YS5md1R5cGVPbmVJZCwgICAgIC8v5pyN5Yqh57G75Yir5LiA57qn6I+c5Y2VXHJcbiAgICAgIHR5cGVUd29JZDogdGhpcy5kYXRhLmZ3VHlwZVR3b0lkLCAgICAgLy/mnI3liqHnsbvliKvkuoznuqfoj5zljZVcclxuICAgICAgcXlOYXR1cmVJZDogdGhpcy5kYXRhLmZ3RHdTdGF0dXNJZCwgICAvL+WNleS9jeexu+Wei2lkXHJcbiAgICAgIGR3U2NhbGVJZDogdGhpcy5kYXRhLmZ3RHdTY2FsZUlkLCAgICAgLy/ljZXkvY3op4TmqKFpZFxyXG4gICAgICBjeVR5cGVJZDogdGhpcy5kYXRhLmZ3Q3lUeXBlSWQsICAgICAgIC8v5Lqn5LiaaWRcclxuICAgICAgaHlUeXBlSWQ6IHRoaXMuZGF0YS5md0h5VHlwZUlkICAgICAgICAvL+ihjOS4mmlkXHJcbiAgICB9LCAnR0VUJykudGhlbigocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICBpZihyZXMpe1xyXG4gICAgICAgIGxldCBuZXdNYXJrZXJzTGlzdDphbnkgPSByZXMubGlzdC5tYXAoKGl0ZW06YW55LCBpbmRleDpudW1iZXIpOmFueT0+e1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGluZGV4LCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9tYXDnlKjnmoToh6rlrprkuYlJRFxyXG4gICAgICAgICAgICBuYW1lOiAn5pyN5YqhJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6K+m5oOF5Yik5patXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZTogaXRlbS5sbmcsICAgICAgICAgICAgICAgICAgICAgICAgIC8v57uP5bqmXHJcbiAgICAgICAgICAgIGxhdGl0dWRlOiBpdGVtLmxhdCwgICAgICAgICAgICAgICAgICAgICAgICAgIC8v57qs5bqmXHJcbiAgICAgICAgICAgIGljb25QYXRoOiAnLi4vLi4vaW1hZ2VzL2Z3LnBuZycsICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIHdpZHRoOiAyNyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNSxcclxuICAgICAgICAgICAgY2FsbG91dDoge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IGl0ZW0ucXlOYW1lP2l0ZW0ucXlOYW1lOifmnKrloavmiqUnLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IDE4LFxyXG4gICAgICAgICAgICAgIGJnQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1LFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNDQ0MnLFxyXG4gICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdCWUNMSUNLJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbGRJZDogaXRlbS5pZCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WOn+Wni0lEXHJcbiAgICAgICAgICAgIHRpdGxlOiBpdGVtLnF5TmFtZT9pdGVtLnF5TmFtZTon5pyq5aGr5oqlJywgICAgICAgICAgICAgICAgICAvL+agh+mimFxyXG4gICAgICAgICAgICBpbWdBcnI6IGl0ZW0uZndqZ1BpY3MsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lm77niYfmlbDnu4RcclxuICAgICAgICAgICAgcHJvdmluY2VOYW1lOiBpdGVtLnByb3ZpbmNlTmFtZT9pdGVtLnByb3ZpbmNlTmFtZTonJywgICAgIC8v55yBXHJcbiAgICAgICAgICAgIGNpdHlOYW1lOiBpdGVtLmNpdHlOYW1lP2l0ZW0uY2l0eU5hbWU6JycsICAgICAgICAgICAgICAgICAvL+W4glxyXG4gICAgICAgICAgICBkaXN0cmljdE5hbWU6IGl0ZW0uZGlzdHJpY3ROYW1lP2l0ZW0uZGlzdHJpY3ROYW1lOicnLCAgICAgLy/ljLpcclxuICAgICAgICAgICAgYWRkcmVzczogaXRlbS5md0FkZHJlc3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6K+m57uG5Zyw5Z2AXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZih0aGlzLmRhdGEudG90YWwgPT0gMCl7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBtYXJrZXJzOiBuZXdNYXJrZXJzTGlzdCwgICAgICAgICAgICAgICAvL+agh+iusFxyXG4gICAgICAgICAgICB0b3RhbDogcmVzLnRvdGFsLCAgICAgICAgICAgICAgICAgICAgICAvL+aAu+aVsFxyXG4gICAgICAgICAgICBtdW1MaXN0OiBuZXdNYXJrZXJzTGlzdCwgICAgICAgICAgICAgICAgLy/liJfooahcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBtYXJrZXJzOiB0aGlzLmRhdGEubWFya2Vycy5jb25jYXQobmV3TWFya2Vyc0xpc3QpLCAgICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIG11bUxpc3Q6IHRoaXMuZGF0YS5tdW1MaXN0LmNvbmNhdChuZXdNYXJrZXJzTGlzdCksICAgICAgICAgICAgICAgIC8v5YiX6KGoXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZih0aGlzLmRhdGEubXVtTGlzdC5sZW5ndGggPCByZXMudG90YWwpe1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgbW9yZVNob3c6IHRydWUsXHJcbiAgICAgICAgICAgIG1vcmVUaXRsZTogJ+eCueWHu+WKoOi9veabtOWkmicsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgbW9yZVNob3c6IHRydWUsXHJcbiAgICAgICAgICAgIG1vcmVUaXRsZTogJ+W3suWKoOi9veWFqOmDqCcsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgZndDYXRlZ29yeU5hdkl0ZW0oZGF0YTphbnkpOnZvaWR7ICAgICAgIC8v5pyN5Yqh57G75Yir77yI5bem5L6n5a+86Iiq54K55Ye75pe277yM6Kem5Y+R55qE5LqL5Lu277yJXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBmd0NhdGVnb3J5SW5kZXg6IGRhdGEuZGV0YWlsLmluZGV4IHx8IDAsXHJcbiAgICB9KTtcclxuICB9LFxyXG4gIGZ3Q2F0ZWdvcnlJdGVtKGRhdGE6YW55KTp2b2lkIHsgIC8v5pyN5Yqh57G75Yir77yI5bem5L6n5a+86Iiq54K55Ye75pe277yM6Kem5Y+R55qE5LqL5Lu277yJXHJcbiAgICBjb25zdCBpZCA9IHRoaXMuZGF0YS5md0NhdGVnb3J5SWQgPT09IGRhdGEuZGV0YWlsLmlkID8gbnVsbCA6IGRhdGEuZGV0YWlsLmlkO1xyXG4gICAgY29uc3QgcElkID0gZGF0YS5kZXRhaWwucElkO1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgZndDYXRlZ29yeUlkOiBpZCxcclxuICAgICAgZndUeXBlT25lSWQ6IHBJZCA/IHBJZCA6ICcnLCAgICAgICAgICAgICAgIC8v5pyN5Yqh57G75Yir5LiA57qn6I+c5Y2VXHJcbiAgICAgIGZ3VHlwZVR3b0lkOiBpZCA9PSBwSWQgPyAnJyA6IGlkLCAgICAgICAgICAgLy/mnI3liqHnsbvliKvkuoznuqfoj5zljZUgXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgZndUeXBlRm4oZTphbnkpOnZvaWR7ICAgIC8v5Y2V5L2N57G75Z6L6Kem5Y+RXHJcbiAgICBsZXQgaWQ6YW55ID0gZS50YXJnZXQuZGF0YXNldC5pZDtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGZ3VHlwZUNsYXNzOiBpZCxcclxuICAgICAgZndEd1N0YXR1c0lkOiBpZCwgICAgICAgIC8v5Y2V5L2N57G75Z6LXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgZndTY2FsZUZuKGU6YW55KTp2b2lkeyAgICAvL+WNleS9jeinhOaooeinpuWPkVxyXG4gICAgbGV0IGlkOmFueSA9IGUudGFyZ2V0LmRhdGFzZXQuaWQ7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBmd1NjYWxlQ2xhc3M6IGlkLFxyXG4gICAgICBmd0R3U2NhbGVJZDogaWQsICAgICAgICAvL+WNleS9jeinhOaooVxyXG4gICAgfSlcclxuICB9LFxyXG4gIGZ3TmF2SXRlbShkYXRhOmFueSk6dm9pZHsgICAgICAgLy/mib7mnI3liqHooYzkuJrkuqfkuJrvvIjlt6bkvqflr7zoiKrngrnlh7vml7bvvIzop6blj5HnmoTkuovku7bvvIlcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGZ3SW5kdXN0cnlJbmRleDogZGF0YS5kZXRhaWwuaW5kZXggfHwgMCxcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgZndJbmR1c3RyeUl0ZW0oZGF0YTphbnkpOnZvaWQgeyAgLy/mib7mnI3liqHooYzkuJrkuqfkuJrvvIjlj7PkvqfpgInmi6npobnooqvngrnlh7vml7bvvIzkvJrop6blj5HnmoTkuovku7bvvIlcclxuICAgIGNvbnN0IGlkID0gdGhpcy5kYXRhLmZ3SW5kdXN0cnlJZCA9PT0gZGF0YS5kZXRhaWwuaWQgPyBudWxsIDogZGF0YS5kZXRhaWwuaWQ7XHJcbiAgICBjb25zdCBwSWQgPSBkYXRhLmRldGFpbC5wSWQ7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBmd0luZHVzdHJ5SWQ6IGlkLFxyXG4gICAgICBmd0N5VHlwZUlkOiBwSWQgPyBwSWQgOiAnJywgICAgICAgICAgLy/kuqfkuJppZFxyXG4gICAgICBmd0h5VHlwZUlkOiBpZCA9PSBwSWQgPyAnJyA6IGlkLCAgICAgLy/ooYzkuJppZFxyXG4gICAgfSlcclxuICB9LFxyXG4gIGZ3UmVzZXQoZTphbnkpOnZvaWR7ICAvL+aJvuacjeWKoemHjee9rlxyXG4gICAgbGV0IGZsYWc6bnVtYmVyID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuZmxhZztcclxuICAgIGlmKGZsYWcgPT0gMSl7ICAvL+acjeWKoeexu+WIq1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGZ3Q2F0ZWdvcnlJbmRleDogMCwgICAgICAgICAvL+W9k+WJjee0ouW8lVxyXG4gICAgICAgIGZ3Q2F0ZWdvcnlJZDogbnVsbCwgICAgICAgICAvL+mAieS4reeahGlkXHJcbiAgICAgICAgZndUeXBlT25lSWQ6ICcnLCAgICAgICAgICAgIC8v5pyN5Yqh57G75Yir5LiA57qn6I+c5Y2VXHJcbiAgICAgICAgZndUeXBlVHdvSWQ6ICcnLCAgICAgICAgICAgIC8v5pyN5Yqh57G75Yir5LqM57qn6I+c5Y2VXHJcbiAgICAgICAgbnVtOiAwLCAgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgICAvLzbmib7liJfooahcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyNmd0NhdGVnb3J5SWQnKS50b2dnbGUoZmFsc2UpOyAgICAgICAgIC8v5pyN5Yqh57G75Yir5YWz6ZetXHJcbiAgICB9ZWxzZSBpZihmbGFnID09IDIpeyAgLy/ljZXkvY3nsbvlnotcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBmd1R5cGVDbGFzczogbnVsbCxcclxuICAgICAgICBmd0R3U3RhdHVzSWQ6ICcnLCAgICAgICAgICAvL+WNleS9jeexu+Wei1xyXG4gICAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgIC8vNuaJvuWIl+ihqFxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI2Z3VHlwZUlkJykudG9nZ2xlKGZhbHNlKTsgICAgICAgIC8v5Y2V5L2N57G75Z6L5YWz6ZetXHJcbiAgICB9ZWxzZSBpZihmbGFnID09IDMpeyAgLy/ljZXkvY3op4TmqKFcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBmd1NjYWxlQ2xhc3M6IG51bGwsXHJcbiAgICAgICAgZndEd1NjYWxlSWQ6ICcnLCAgICAgICAgICAgLy/ljZXkvY3op4TmqKFcclxuICAgICAgICBudW06IDAsICAgICAgICAgICAgICAgICAgICAvLzbmib7nu5PmnpxcclxuICAgICAgICBtdW1MaXN0OiBbXSwgICAgICAgICAgICAgICAvLzbmib7liJfooahcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyNmd1NjYWxlSWQnKS50b2dnbGUoZmFsc2UpOyAgICAgICAgLy/ljZXkvY3op4TmqKHlhbPpl61cclxuICAgIH1lbHNleyAgLy/kuqfkuJrjgIHooYzkuJpcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBmd0luZHVzdHJ5SW5kZXg6IDAsICAgICAgICAgLy/lvZPliY3ntKLlvJVcclxuICAgICAgICBmd0luZHVzdHJ5SWQ6IG51bGwsICAgICAgICAgLy/pgInkuK3nmoRpZFxyXG4gICAgICAgIGZ3Q3lUeXBlSWQ6ICcnLCAgICAgICAgICAgICAvL+S6p+S4mmlkXHJcbiAgICAgICAgZndIeVR5cGVJZDogJycsICAgICAgICAgICAgIC8v6KGM5LiaaWRcclxuICAgICAgICBudW06IDAsICAgICAgICAgICAgICAgICAgICAvLzbmib7nu5PmnpxcclxuICAgICAgICBtdW1MaXN0OiBbXSwgICAgICAgICAgICAgICAvLzbmib7liJfooahcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyNmd0luZHVzdHJ5SWQnKS50b2dnbGUoZmFsc2UpOyAgICAgLy/kuqfkuJrjgIHooYzkuJrlhbPpl61cclxuICAgIH1cclxuICAgIHRoaXMuZ2V0U2VydmljZUxpc3QoKTsgICAgICAgICAgICAvLzbmib7mnI3liqFcclxuICB9LFxyXG4gIGZ3U3VibWl0KGU6YW55KTp2b2lkeyAgLy/mib7mnI3liqHlrozmiJBcclxuICAgIGxldCBmbGFnOm51bWJlciA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmZsYWc7XHJcbiAgICBpZihmbGFnID09IDEpe1xyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI2Z3Q2F0ZWdvcnlJZCcpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAgLy/mnI3liqHnsbvliKvlhbPpl61cclxuICAgIH1lbHNlIGlmKGZsYWcgPT0gMil7XHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjZndUeXBlSWQnKS50b2dnbGUoZmFsc2UpOyAgICAgICAgLy/ljZXkvY3nsbvlnovlhbPpl61cclxuICAgIH1lbHNlIGlmKGZsYWcgPT0gMyl7XHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjZndTY2FsZUlkJykudG9nZ2xlKGZhbHNlKTsgICAgICAgIC8v5Y2V5L2N6KeE5qih5YWz6ZetXHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyNmd0luZHVzdHJ5SWQnKS50b2dnbGUoZmFsc2UpOyAgICAgLy/kuqfkuJrjgIHooYzkuJrlhbPpl61cclxuICAgIH1cclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICBtdW1MaXN0OiBbXSwgICAgICAgICAgICAgICAvLzbmib7liJfooahcclxuICAgICAgbWFya2VyczpbXSwgICAgICAgICAgICAgICAvL+agh+iusOeCueWkhOeQhuWQjueahOaVsOaNru+8iGlk44CB5p+l6K+i5L2/55So77yJXHJcbiAgICAgIHBhZ2VTaXplOiAxMCwgICAgICAgICAgICAgLy/mr4/pobXmmL7npLrmlbDph49cclxuICAgICAgcGFnZUluZGV4OiAxLCAgICAgICAgICAgICAvL+W9k+WJjemhtVxyXG4gICAgICB0b3RhbDogMCwgICAgICAgICAgICAgICAgIC8v5oC75p2h5pWwXHJcbiAgICB9KVxyXG4gICAgdGhpcy5nZXRTZXJ2aWNlTGlzdCgpOyAgICAgICAvLzbmib7mnI3liqHnu5/orqFcclxuICB9LFxyXG5cclxuXHJcblxyXG5cclxuICAvL+aJvui1hOmHkVxyXG4gIHpqRm4oKTp2b2lke1xyXG4gICAgdGhpcy5oaWRlRm4oKTsgICAgICAgICAgICAgICAvL+mcgOimgemakOiXj+eahOWFg+e0oFxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgZmxhZzogJ3pqJywgICAgICAgICAgICAgICAgLy/lvZPliY3liJfooahcclxuXHJcbiAgICAvL+aJvui1hOmHke+8iOmHkeiejeacjeWKoe+8iVxyXG4gICAganJTZWFyY2hJbmZvU2hvdzogZmFsc2UsICAgIC8v5pi+56S6L+makOiXj1xyXG4gICAganJDYXRlZ29yeUluZGV4OiAwLCAgICAgICAgIC8v5b2T5YmN57Si5byV77yI5pyN5Yqh57G75Yir77yJXHJcbiAgICBqckNhdGVnb3J5SWQ6IG51bGwsICAgICAgICAgLy/pgInkuK3nmoRpZO+8iOacjeWKoeexu+WIq++8iVxyXG4gICAganJJbmR1c3RyeUluZGV4OiAwLCAgICAgICAgIC8v5b2T5YmN57Si5byV77yI6KGM5Lia5Lqn5Lia77yJXHJcbiAgICBqckluZHVzdHJ5SWQ6IG51bGwsICAgICAgICAgLy/pgInkuK3nmoRpZO+8iOihjOS4muS6p+S4mu+8iVxyXG5cclxuICAgIGpyVHlwZUNsYXNzOiBudWxsLCAgICAgICAgICAvL+WNleS9jeexu+Wei1xyXG4gICAganJTY2FsZUNsYXNzOiBudWxsLCAgICAgICAgIC8v5Y2V5L2N6KeE5qihXHJcblxyXG4gICAganJUeXBlT25lSWQ6ICcnLCAgICAgICAgICAgIC8v5pyN5Yqh57G75Yir5LiA57qn6I+c5Y2VXHJcbiAgICBqclR5cGVUd29JZDogJycsICAgICAgICAgICAgLy/mnI3liqHnsbvliKvkuoznuqfoj5zljZVcclxuICAgIGpyRHdTdGF0dXNJZDogJycsICAgICAgICAgICAvL+WNleS9jeexu+Wei2lkXHJcbiAgICBqckR3U2NhbGVJZDogJycsICAgICAgICAgICAgLy/ljZXkvY3op4TmqKFpZFxyXG4gICAganJDeVR5cGVJZDogJycsICAgICAgICAgICAgIC8v5Lqn5LiaaWRcclxuICAgIGpySHlUeXBlSWQ6ICcnLCAgICAgICAgICAgICAvL+ihjOS4mmlkXHJcblxyXG4gICAgLy/mib7otYTph5HvvIjmipXotYTvvIlcclxuICAgIHR6U2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgICAvL+aYvuekui/pmpDol49cclxuICAgIHR6SW5kZXg6IDAsICAgICAgICAgICAgICAgICAvL+W9k+WJjee0ouW8lVxyXG4gICAgdHpJbmR1c3RyeUlkOiBudWxsLCAgICAgICAgIC8v6YCJ5Lit55qEaWRcclxuXHJcbiAgICB0ekFyZWFDbGFzczogbnVsbCwgICAgICAgICAgLy/mipXotYTljLrln59cclxuICAgIHR6V2F5Q2xhc3M6IG51bGwsICAgICAgICAgICAvL+aKlei1hOaWueW8j1xyXG4gICAgdHpPdGhlckNsYXNzOiBudWxsLCAgICAgICAgIC8v5oqV6LWE6YeR6aKdXHJcbiAgICB0elR5cGVDbGFzczogbnVsbCwgICAgICAgICAgLy/mipXotYTnsbvlnotcclxuXHJcbiAgICB0ekFyZWFJZDogJycsICAgICAgICAgICAgICAgLy/mipXotYTljLrln59cclxuICAgIHR6V2F5SWQ6ICcnLCAgICAgICAgICAgICAgICAvL+aKlei1hOaWueW8j1xyXG4gICAgdHpPdGhlcklkOiAnJywgICAgICAgICAgICAgIC8v5oqV6LWE6YeR6aKdXHJcbiAgICB0elR5cGVJZDogJycsICAgICAgICAgICAgICAgLy/mipXotYTnsbvlnotcclxuICAgIHR6Q3lUeXBlSWQ6ICcnLCAgICAgICAgICAgICAvL+S6p+S4mmlkXHJcbiAgICB0ekh5VHlwZUlkOiAnJywgICAgICAgICAgICAgLy/ooYzkuJppZFxyXG5cclxuXHJcblxyXG4gICAgLy/mib7otYTph5HvvIjono3otYTvvIlcclxuICAgIHJ6U2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgICAvL+aYvuekui/pmpDol49cclxuICAgIHJ6SW5kZXg6IDAsICAgICAgICAgICAgICAgICAvL+W9k+WJjee0ouW8lVxyXG4gICAgcnpJbmR1c3RyeUlkOiBudWxsLCAgICAgICAgIC8v6YCJ5Lit55qEaWRcclxuXHJcbiAgICByekNhdGVnb3J5Q2xhc3M6IG51bGwsICAgICAgLy/pnIDmsYLnsbvliKtcclxuICAgIHJ6U3RhZ2VDbGFzczogbnVsbCwgICAgICAgICAvL+aJgOWkhOmYtuautVxyXG4gICAgcnpXYXlDbGFzczogbnVsbCwgICAgICAgICAgIC8v6J6N6LWE5pa55byPXHJcbiAgICByekZpbmFuY2luZ0NsYXNzOiBudWxsLCAgICAgLy/ono3otYTph5Hpop1cclxuXHJcbiAgICByekNhdGVnb3J5SWQ6ICcnLCAgICAgICAgICAgLy/pnIDmsYLnsbvliKtcclxuICAgIHJ6RmluYW5jaW5nSWQ6ICcnLCAgICAgICAgICAvL+iejei1hOmHkeminVxyXG4gICAgcnpDeVR5cGVJZDogJycsICAgICAgICAgICAgIC8v5Lqn5LiaaWRcclxuICAgIHJ6SHlUeXBlSWQ6ICcnLCAgICAgICAgICAgICAvL+ihjOS4mmlkXHJcblxyXG4gICAgaXNTZWFyY2hTaG93OiB0cnVlLCAgICAgICAgLy/mkJzntKLnu5PmnpzmlbDmja5cclxuICAgIHpqU2VhcmNoSW5mb1Nob3c6IHRydWUsICAgIC8v6LWE6YeR5YWo6YOo5oyJ6ZKuXHJcbiAgICB6akJ0bkNsYXNzOiAxLCAgICAgICAgICAgICAvL+aJvui1hOmHkeWFqOmDqFxyXG4gICAgfSlcclxuICAgIHRoaXMuZ2V0QWxsRnVuZHNMaXN0KCk7ICAgICAgIC8v5om+6LWE6YeR77yI5YWo6YOo77yJXHJcbiAgfSxcclxuICBnZXRBbGxGdW5kc0xpc3QoKXsgIC8v5om+6LWE6YeR77yI5YWo6YOo77yJXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBtb3JlU2hvdzogZmFsc2UsXHJcbiAgICB9KVxyXG4gICAgaHR0cHMuc3VjY2Vzc1JlcXVlc3QoYXBpLmFsbEZ1bmQsIHtcclxuICAgICAgdGVuYW50SWQ6IGFwaS5hcmVhSWQsICAgICAgICAgICAgICAgICAvL+WcsOWMumlkXHJcbiAgICAgIGtleTogdGhpcy5kYXRhLnNlYXJjaEtleSwgICAgICAgICAgICAgLy/lhbPplK7lrZfmkJzntKJcclxuICAgICAgcGFnZVNpemU6IHRoaXMuZGF0YS5wYWdlU2l6ZSwgICAgICAgICAvL+avj+mhteaYvuekuuaVsOmHj1xyXG4gICAgICBwYWdlSW5kZXg6IHRoaXMuZGF0YS5wYWdlSW5kZXgsICAgICAgIC8v6aG15pWwXHJcbiAgICB9LCAnR0VUJykudGhlbigocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICBpZihyZXMpe1xyXG4gICAgICAgIC8v6YeR6J6NXHJcbiAgICAgICAgbGV0IGpyamdNZG9lbHNMaXN0OmFueSA9IHJlcy52YWwuanJqZ01kb2Vscy5tYXAoKGl0ZW06YW55KTphbnk9PntcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiAn6YeR6J6NJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+ivpuaDheWIpOaWrVxyXG4gICAgICAgICAgICBsb25naXR1ZGU6IGl0ZW0ubG5nLCAgIC8v57uP5bqmXHJcbiAgICAgICAgICAgIGxhdGl0dWRlOiBpdGVtLmxhdCwgICAgLy/nuqzluqZcclxuICAgICAgICAgICAgaWNvblBhdGg6ICcuLi8uLi9pbWFnZXMvemoucG5nJywgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgd2lkdGg6IDI3LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1LFxyXG4gICAgICAgICAgICBjYWxsb3V0OiB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogaXRlbS5xeU5hbWU/aXRlbS5xeU5hbWU6J+acquWhq+aKpScsXHJcbiAgICAgICAgICAgICAgY29sb3I6ICcjMDAwJyxcclxuICAgICAgICAgICAgICBmb250U2l6ZTogMTQsXHJcbiAgICAgICAgICAgICAgYmdDb2xvcjogJyNGRkYnLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDUsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI0NDQycsXHJcbiAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ0JZQ0xJQ0snXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRpdGxlOiBpdGVtLnF5TmFtZSwgICAgICAgICAgICAgICAgICAgLy/moIfpophcclxuICAgICAgICAgICAgaW1nQXJyOiBpdGVtLmZ3amdQaWNzLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Zu+54mH5pWw57uEXHJcbiAgICAgICAgICAgIHByb3ZpbmNlTmFtZTogaXRlbS5wcm92aW5jZU5hbWU/aXRlbS5wcm92aW5jZU5hbWU6JycsICAgICAvL+ecgVxyXG4gICAgICAgICAgICBjaXR5TmFtZTogaXRlbS5jaXR5TmFtZT9pdGVtLmNpdHlOYW1lOicnLCAgICAgICAgICAgICAgICAgLy/luIJcclxuICAgICAgICAgICAgZGlzdHJpY3ROYW1lOiBpdGVtLmRpc3RyaWN0TmFtZT9pdGVtLmRpc3RyaWN0TmFtZTonJywgICAgIC8v5Yy6XHJcbiAgICAgICAgICAgIGFkZHJlc3M6IGl0ZW0uZndBZGRyZXNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+ivpue7huWcsOWdgFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8v5oqV6LWEXHJcbiAgICAgICAgbGV0IHR6TW9kZWxzTGlzdDphbnkgPSByZXMudmFsLnR6TW9kZWxzLm1hcCgoaXRlbTphbnkpOmFueT0+e1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgIG5hbWU6ICfotYTph5EnLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6K+m5oOF5Yik5patXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZTogaXRlbS5sbmcsICAgLy/nu4/luqZcclxuICAgICAgICAgICAgbGF0aXR1ZGU6IGl0ZW0ubGF0LCAgICAvL+e6rOW6plxyXG4gICAgICAgICAgICBpY29uUGF0aDogJy4uLy4uL2ltYWdlcy90ei5wbmcnLCAgICAgICAgICAgICAvL+agh+iusFxyXG4gICAgICAgICAgICB3aWR0aDogMjcsXHJcbiAgICAgICAgICAgIGhlaWdodDogMzUsXHJcbiAgICAgICAgICAgIGNhbGxvdXQ6IHtcclxuICAgICAgICAgICAgICBjb250ZW50OiBpdGVtLm5lZWROYW1lP2l0ZW0ubmVlZE5hbWU6J+acquWhq+aKpScsXHJcbiAgICAgICAgICAgICAgY29sb3I6ICcjMDAwJyxcclxuICAgICAgICAgICAgICBmb250U2l6ZTogMTQsXHJcbiAgICAgICAgICAgICAgYmdDb2xvcjogJyNGRkYnLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDUsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI0NDQycsXHJcbiAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ0JZQ0xJQ0snXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRpdGxlOiBpdGVtLm5lZWROYW1lLCAgICAgICAgICAgICAgICAgICAvL+agh+mimFxyXG4gICAgICAgICAgICBpbWdBcnI6IGl0ZW0ubmVlZEZpbGVzLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lm77niYfmlbDnu4RcclxuICAgICAgICAgICAgcHJvdmluY2VOYW1lOiBpdGVtLnByb3ZpbmNlTmFtZT9pdGVtLnByb3ZpbmNlTmFtZTonJywgICAgIC8v55yBXHJcbiAgICAgICAgICAgIGNpdHlOYW1lOiBpdGVtLmNpdHlOYW1lP2l0ZW0uY2l0eU5hbWU6JycsICAgICAgICAgICAgICAgICAvL+W4glxyXG4gICAgICAgICAgICBkaXN0cmljdE5hbWU6IGl0ZW0uZGlzdHJpY3ROYW1lP2l0ZW0uZGlzdHJpY3ROYW1lOicnLCAgICAgLy/ljLpcclxuICAgICAgICAgICAgYWRkcmVzczogaXRlbS50ZW5hbnROYW1lICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6K+m57uG5Zyw5Z2AXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8v6J6N6LWE77yI6ZyA5rGC77yJXHJcbiAgICAgICAgbGV0IHJvbmd6aU5lZWRzTGlzdDphbnkgPSByZXMudmFsLnJvbmd6aU5lZWRzLm1hcCgoaXRlbTphbnkpOmFueT0+e1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgIG5hbWU6ICfpnIDmsYInLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6K+m5oOF5Yik5patXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZTogaXRlbS5sbmcsICAgLy/nu4/luqZcclxuICAgICAgICAgICAgbGF0aXR1ZGU6IGl0ZW0ubGF0LCAgICAvL+e6rOW6plxyXG4gICAgICAgICAgICBpY29uUGF0aDogJy4uLy4uL2ltYWdlcy9yei5wbmcnLCAgICAgICAgICAgICAvL+agh+iusFxyXG4gICAgICAgICAgICB3aWR0aDogMjcsXHJcbiAgICAgICAgICAgIGhlaWdodDogMzUsXHJcbiAgICAgICAgICAgIGNhbGxvdXQ6IHtcclxuICAgICAgICAgICAgICBjb250ZW50OiBpdGVtLm5lZWROYW1lP2l0ZW0ubmVlZE5hbWU6J+acquWhq+aKpScsXHJcbiAgICAgICAgICAgICAgY29sb3I6ICcjMDAwJyxcclxuICAgICAgICAgICAgICBmb250U2l6ZTogMTQsXHJcbiAgICAgICAgICAgICAgYmdDb2xvcjogJyNGRkYnLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDUsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI0NDQycsXHJcbiAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ0JZQ0xJQ0snXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRpdGxlOiBpdGVtLm5lZWROYW1lLCAgICAgICAgICAgICAgICAgICAvL+agh+mimFxyXG4gICAgICAgICAgICBpbWdBcnI6IGl0ZW0ucGljdHVyZUZpbGVzLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lm77niYfmlbDnu4RcclxuICAgICAgICAgICAgcHJvdmluY2VOYW1lOiBpdGVtLnByb3ZpbmNlTmFtZT9pdGVtLnByb3ZpbmNlTmFtZTonJywgICAgIC8v55yBXHJcbiAgICAgICAgICAgIGNpdHlOYW1lOiBpdGVtLmNpdHlOYW1lP2l0ZW0uY2l0eU5hbWU6JycsICAgICAgICAgICAgICAgICAvL+W4glxyXG4gICAgICAgICAgICBkaXN0cmljdE5hbWU6IGl0ZW0uZGlzdHJpY3ROYW1lP2l0ZW0uZGlzdHJpY3ROYW1lOicnLCAgICAgLy/ljLpcclxuICAgICAgICAgICAgYWRkcmVzczogaXRlbS50ZW5hbnROYW1lICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6K+m57uG5Zyw5Z2AXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy/ono3otYTvvIjpobnnm67vvIlcclxuICAgICAgICBsZXQgcm9uZ3ppUHJvc0xpc3Q6YW55ID0gcmVzLnZhbC5yb25nemlQcm9zLm1hcCgoaXRlbTphbnkpOmFueT0+e1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgIG5hbWU6ICfono3otYQnLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6K+m5oOF5Yik5patXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZTogaXRlbS5sbmcsICAgLy/nu4/luqZcclxuICAgICAgICAgICAgbGF0aXR1ZGU6IGl0ZW0ubGF0LCAgICAvL+e6rOW6plxyXG4gICAgICAgICAgICBpY29uUGF0aDogJy4uLy4uL2ltYWdlcy94bS5wbmcnLCAgICAgICAgICAgICAvL+agh+iusFxyXG4gICAgICAgICAgICB3aWR0aDogMjcsXHJcbiAgICAgICAgICAgIGhlaWdodDogMzUsXHJcbiAgICAgICAgICAgIGNhbGxvdXQ6IHtcclxuICAgICAgICAgICAgICBjb250ZW50OiBpdGVtLnByb05hbWU/aXRlbS5wcm9OYW1lOifmnKrloavmiqUnLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IDE0LFxyXG4gICAgICAgICAgICAgIGJnQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1LFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNDQ0MnLFxyXG4gICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdCWUNMSUNLJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0aXRsZTogaXRlbS5wcm9OYW1lLCAgICAgICAgICAgICAgICAgICAvL+agh+mimFxyXG4gICAgICAgICAgICBpbWdBcnI6IGl0ZW0ubmVlZEZpbGVzLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lm77niYfmlbDnu4RcclxuICAgICAgICAgICAgcHJvdmluY2VOYW1lOiBpdGVtLnByb3ZpbmNlTmFtZT9pdGVtLnByb3ZpbmNlTmFtZTonJywgICAgIC8v55yBXHJcbiAgICAgICAgICAgIGNpdHlOYW1lOiBpdGVtLmNpdHlOYW1lP2l0ZW0uY2l0eU5hbWU6JycsICAgICAgICAgICAgICAgICAvL+W4glxyXG4gICAgICAgICAgICBkaXN0cmljdE5hbWU6IGl0ZW0uZGlzdHJpY3ROYW1lP2l0ZW0uZGlzdHJpY3ROYW1lOicnLCAgICAgLy/ljLpcclxuICAgICAgICAgICAgYWRkcmVzczogaXRlbS5hZGRyZXNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6K+m57uG5Zyw5Z2AXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy/lpITnkIZJROS4uuaVsOWtl1xyXG4gICAgICAgIGxldCBsaXN0OmFueSAgPSBqcmpnTWRvZWxzTGlzdC5jb25jYXQodHpNb2RlbHNMaXN0LCByb25nemlOZWVkc0xpc3QsIHJvbmd6aVByb3NMaXN0KTtcclxuICAgICAgICBsZXQgbmV3TWFya2Vyc0xpc3Q6YW55ID0gbGlzdC5tYXAoKGl0ZW06YW55LCBpbmRleDpudW1iZXIpOmFueT0+e1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGluZGV4LCAgICAgICAgICAgICAgICAgICAvL21hcOeUqOeahOiHquWumuS5iUlEXHJcbiAgICAgICAgICAgIG5hbWU6IGl0ZW0ubmFtZSwgICAgICAgICAgICAgLy/or6bmg4XliKTmlq1cclxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBpdGVtLmxvbmdpdHVkZSwgICAvL+e7j+W6plxyXG4gICAgICAgICAgICBsYXRpdHVkZTogaXRlbS5sYXRpdHVkZSwgICAgIC8v57qs5bqmXHJcbiAgICAgICAgICAgIGljb25QYXRoOiBpdGVtLmljb25QYXRoLCAgICAgLy/moIforrBcclxuICAgICAgICAgICAgd2lkdGg6IDI3LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1LFxyXG4gICAgICAgICAgICBjYWxsb3V0OiBpdGVtLmNhbGxvdXQsXHJcbiAgICAgICAgICAgIG9sZElkOiBpdGVtLmlkLCAgICAgICAgICAgICAgICAgICAgICAvL+WOn+Wni0lEXHJcbiAgICAgICAgICAgIHRpdGxlOiBpdGVtLnRpdGxlLCAgICAgICAgICAgICAgICAgICAvL+agh+mimFxyXG4gICAgICAgICAgICBpbWdBcnI6IGl0ZW0uaW1nQXJyLCAgICAgICAgICAgICAgICAgLy/lm77niYdcclxuICAgICAgICAgICAgcHJvdmluY2VOYW1lOiBpdGVtLnByb3ZpbmNlTmFtZSwgICAgIC8v55yBXHJcbiAgICAgICAgICAgIGNpdHlOYW1lOiBpdGVtLmNpdHlOYW1lLCAgICAgICAgICAgICAvL+W4glxyXG4gICAgICAgICAgICBkaXN0cmljdE5hbWU6IGl0ZW0uZGlzdHJpY3ROYW1lLCAgICAgLy/ljLpcclxuICAgICAgICAgICAgYWRkcmVzczogaXRlbS5hZGRyZXNzICAgICAgICAgICAgICAgIC8v6K+m57uG5Zyw5Z2AXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYodGhpcy5kYXRhLnRvdGFsID09IDApe1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgbWFya2VyczogbmV3TWFya2Vyc0xpc3QsICAgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgdG90YWw6IHJlcy52YWwudG90YWwsICAgICAgICAgICAgICAgICAgLy/mgLvmlbBcclxuICAgICAgICAgICAgbXVtTGlzdDogbmV3TWFya2Vyc0xpc3QsICAgICAgICAgICAgICAgIC8v5YiX6KGoXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgbWFya2VyczogdGhpcy5kYXRhLm1hcmtlcnMuY29uY2F0KG5ld01hcmtlcnNMaXN0KSwgICAgICAgICAgICAgICAvL+agh+iusFxyXG4gICAgICAgICAgICBtdW1MaXN0OiB0aGlzLmRhdGEubXVtTGlzdC5jb25jYXQobmV3TWFya2Vyc0xpc3QpLCAgICAgICAgICAgICAgICAvL+WIl+ihqFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5kYXRhLm11bUxpc3QubGVuZ3RoIDwgcmVzLnZhbC50b3RhbCl7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBtb3JlU2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgbW9yZVRpdGxlOiAn54K55Ye75Yqg6L295pu05aSaJyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBtb3JlU2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgbW9yZVRpdGxlOiAn5bey5Yqg6L295YWo6YOoJyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgempCdG5Ub2dnbGUoZTphbnkpOnZvaWR7ICAvL+aJvui1hOmHke+8iOaMiemSrueKtuaAgeWIh+aNou+8iVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgempCdG5DbGFzczogZS50YXJnZXQuZGF0YXNldC5udW0sXHJcbiAgICAgIC8v6YeR6J6NXHJcbiAgICAgIGpyQ2F0ZWdvcnlJbmRleDogMCwgICAgICAgICAvL+W9k+WJjee0ouW8lVxyXG4gICAgICBqckNhdGVnb3J5SWQ6IG51bGwsICAgICAgICAgLy/pgInkuK3nmoRpZFxyXG4gICAgICBqclR5cGVPbmVJZDogJycsICAgICAgICAgICAgLy/mnI3liqHnsbvliKvkuIDnuqfoj5zljZVcclxuICAgICAganJUeXBlVHdvSWQ6ICcnLCAgICAgICAgICAgIC8v5pyN5Yqh57G75Yir5LqM57qn6I+c5Y2VXHJcbiAgICAgIGpyVHlwZUNsYXNzOiBudWxsLFxyXG4gICAgICBqckR3U3RhdHVzSWQ6ICcnLCAgICAgICAgICAvL+WNleS9jeexu+Wei1xyXG4gICAgICBqclNjYWxlQ2xhc3M6IG51bGwsXHJcbiAgICAgIGpyRHdTY2FsZUlkOiAnJywgICAgICAgICAgIC8v5Y2V5L2N6KeE5qihXHJcbiAgICAgIGpySW5kdXN0cnlJbmRleDogMCwgICAgICAgICAvL+W9k+WJjee0ouW8lVxyXG4gICAgICBqckluZHVzdHJ5SWQ6IG51bGwsICAgICAgICAgLy/pgInkuK3nmoRpZFxyXG4gICAgICBqckN5VHlwZUlkOiAnJywgICAgICAgICAgICAgLy/kuqfkuJppZFxyXG4gICAgICBqckh5VHlwZUlkOiAnJywgICAgICAgICAgICAgLy/ooYzkuJppZFxyXG5cclxuICAgICAgLy/mipXotYRcclxuICAgICAgdHpJbmRleDogMCwgICAgICAgICAgICAgICAgIC8v5b2T5YmN57Si5byVXHJcbiAgICAgIHR6SW5kdXN0cnlJZDogbnVsbCwgICAgICAgICAvL+mAieS4reeahGlkXHJcblxyXG4gICAgICB0ekFyZWFDbGFzczogbnVsbCwgICAgICAgICAgLy/mipXotYTljLrln59cclxuICAgICAgdHpXYXlDbGFzczogbnVsbCwgICAgICAgICAgIC8v5oqV6LWE5pa55byPXHJcbiAgICAgIHR6T3RoZXJDbGFzczogbnVsbCwgICAgICAgICAvL+aKlei1hOmHkeminVxyXG4gICAgICB0elR5cGVDbGFzczogbnVsbCwgICAgICAgICAgLy/mipXotYTnsbvlnotcclxuXHJcbiAgICAgIHR6QXJlYUlkOiAnJywgICAgICAgICAgICAgICAvL+aKlei1hOWMuuWfn1xyXG4gICAgICB0eldheUlkOiAnJywgICAgICAgICAgICAgICAgLy/mipXotYTmlrnlvI9cclxuICAgICAgdHpPdGhlcklkOiAnJywgICAgICAgICAgICAgIC8v5oqV6LWE6YeR6aKdXHJcbiAgICAgIHR6VHlwZUlkOiAnJywgICAgICAgICAgICAgICAvL+aKlei1hOexu+Wei1xyXG4gICAgICB0ekN5VHlwZUlkOiAnJywgICAgICAgICAgICAgLy/kuqfkuJppZFxyXG4gICAgICB0ekh5VHlwZUlkOiAnJywgICAgICAgICAgICAgLy/ooYzkuJppZFxyXG5cclxuICAgICAgLy/ono3otYRcclxuICAgICAgcnpJbmRleDogMCwgICAgICAgICAgICAgICAgIC8v5b2T5YmN57Si5byVXHJcbiAgICAgIHJ6SW5kdXN0cnlJZDogbnVsbCwgICAgICAgICAvL+mAieS4reeahGlkXHJcblxyXG4gICAgICByekNhdGVnb3J5Q2xhc3M6IG51bGwsICAgICAgLy/pnIDmsYLnsbvliKtcclxuICAgICAgcnpGaW5hbmNpbmdDbGFzczogbnVsbCwgICAgIC8v6J6N6LWE6YeR6aKdXHJcblxyXG4gICAgICByekNhdGVnb3J5SWQ6ICcnLCAgICAgICAgICAgLy/ono3otYTmlrnlvI9cclxuICAgICAgcnpGaW5hbmNpbmdJZDogJycsICAgICAgICAgIC8v6J6N6LWE6YeR6aKdXHJcbiAgICAgIHJ6Q3lUeXBlSWQ6ICcnLCAgICAgICAgICAgICAvL+S6p+S4mmlkXHJcbiAgICAgIHJ6SHlUeXBlSWQ6ICcnLCAgICAgICAgICAgICAvL+ihjOS4mmlkXHJcblxyXG4gICAgICBudW06IDAsICAgICAgICAgICAgICAgICAgICAgLy825om+57uT5p6cXHJcbiAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgICAvLzbmib7liJfooahcclxuICAgICAgbWFya2VyczogW10sICAgICAgICAgICAgICAgIC8v5Zyw5Zu+5qCH54K5XHJcbiAgICAgIHNlYXJjaEtleTogJycsICAgICAgICAgICAgICAvL+WFs+mUruWtl+aQnOe0olxyXG4gICAgfSlcclxuICAgIGlmKGUudGFyZ2V0LmRhdGFzZXQubnVtID09IDEpe1xyXG4gICAgICB0aGlzLnNldERhdGEoeyAgLy/lhajpg6hcclxuICAgICAgICBmbGFnOiAnemonLCAgICAgICAgICAgICAgICAgICAgLy/lvZPliY3liJfooahcclxuICAgICAgICBqclNlYXJjaEluZm9TaG93OiBmYWxzZSwgICAgICAgICAgLy/pq5jnuqfmkJzntKLvvIjph5Hono3mnI3liqHvvIlcclxuICAgICAgICB0elNlYXJjaEluZm9TaG93OiBmYWxzZSwgICAgICAgICAgLy/pq5jnuqfmkJzntKLvvIjmib7mipXotYTvvIlcclxuICAgICAgICByelNlYXJjaEluZm9TaG93OiBmYWxzZSwgICAgICAgICAgLy/pq5jnuqfmkJzntKLvvIjmib7ono3otYTvvIlcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5nZXRBbGxGdW5kc0xpc3QoKTsgICAgICAgLy825om+6LWE6YeR5YWo6YOoXHJcbiAgICB9ZWxzZSBpZihlLnRhcmdldC5kYXRhc2V0Lm51bSA9PSAyKXsgIC8v6YeR6J6N5pyN5YqhXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgZmxhZzogJ2pyJywgICAgICAgICAgICAgICAgICAgICAgIC8v5b2T5YmN5YiX6KGoXHJcbiAgICAgICAganJTZWFyY2hJbmZvU2hvdzogdHJ1ZSwgICAgICAgICAgIC8v6auY57qn5pCc57Si77yI6YeR6J6N5pyN5Yqh77yJXHJcbiAgICAgICAgdHpTZWFyY2hJbmZvU2hvdzogZmFsc2UsICAgICAgICAgIC8v6auY57qn5pCc57Si77yI5om+5oqV6LWE77yJXHJcbiAgICAgICAgcnpTZWFyY2hJbmZvU2hvdzogZmFsc2UsICAgICAgICAgIC8v6auY57qn5pCc57Si77yI5om+6J6N6LWE77yJXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuZ2V0SnJMaXN0KCk7ICAgICAgICAgICAgLy/mib7otYTph5HvvIjph5Hono3vvIlcclxuICAgICAgdGhpcy5md0NhdGVnb3J5KCk7ICAgICAgICAgICAvL+acjeWKoeexu+WIq1xyXG4gICAgICB0aGlzLmZ3VHlwZSgpOyAgICAgICAgICAgICAgIC8v5Y2V5L2N57G75Z6LXHJcbiAgICAgIHRoaXMuZndTY2FsZSgpOyAgICAgICAgICAgICAgLy/ljZXkvY3op4TmqKFcclxuICAgICAgdGhpcy5pbmR1c3RyeSgpOyAgICAgICAgICAgICAvL+S6p+S4muOAgeihjOS4mlxyXG4gICAgfWVsc2UgaWYoZS50YXJnZXQuZGF0YXNldC5udW0gPT0gMyl7ICAvL+aJvuaKlei1hFxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGZsYWc6ICd0eicsICAgICAgICAgICAgICAgICAgICAgICAvL+W9k+WJjeWIl+ihqFxyXG4gICAgICAgIGpyU2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgICAgICAgICAvL+mrmOe6p+aQnOe0ou+8iOmHkeiejeacjeWKoe+8iVxyXG4gICAgICAgIHR6U2VhcmNoSW5mb1Nob3c6IHRydWUsICAgICAgICAgICAvL+mrmOe6p+aQnOe0ou+8iOaJvuaKlei1hO+8iVxyXG4gICAgICAgIHJ6U2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgICAgICAgICAvL+mrmOe6p+aQnOe0ou+8iOaJvuiejei1hO+8iVxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLmdldFR6TGlzdCgpOyAgICAgICAgICAgICAgICAgICAvL+aJvui1hOmHke+8iOaKlei1hO+8iVxyXG4gICAgICB0aGlzLnR6QXJlYSgpOyAgICAgICAgICAgICAgICAgICAgICAvL+aKlei1hOWMuuWfn1xyXG4gICAgICB0aGlzLnR6V2F5KCk7ICAgICAgICAgICAgICAgICAgICAgICAvL+aKlei1hOaWueW8j1xyXG4gICAgICB0aGlzLnR6T3RoZXIoKTsgICAgICAgICAgICAgICAgICAgICAvL+aKlei1hOmHkeminVxyXG4gICAgICB0aGlzLnR6VHlwZSgpOyAgICAgICAgICAgICAgICAgICAgICAvL+aKlei1hOexu+Wei1xyXG4gICAgICB0aGlzLmluZHVzdHJ5KCk7ICAgICAgICAgICAgICAgICAgICAvL+S6p+S4muOAgeihjOS4mlxyXG4gICAgfWVsc2V7ICAvL+aJvuiejei1hFxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGZsYWc6ICdyeicsICAgICAgICAgICAgICAgICAgICAgICAvL+W9k+WJjeWIl+ihqFxyXG4gICAgICAgIGpyU2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgICAgICAgICAvL+mrmOe6p+aQnOe0ou+8iOmHkeiejeacjeWKoe+8iVxyXG4gICAgICAgIHR6U2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgICAgICAgICAvL+mrmOe6p+aQnOe0ou+8iOaJvuaKlei1hO+8iVxyXG4gICAgICAgIHJ6U2VhcmNoSW5mb1Nob3c6IHRydWUsICAgICAgICAgICAvL+mrmOe6p+aQnOe0ou+8iOaJvuiejei1hO+8iVxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLmdldFJ6TGlzdCgpOyAgICAgICAgICAgICAgICAgICAvL+aJvui1hOmHke+8iOiejei1hO+8iVxyXG4gICAgICB0aGlzLnJ6V2F5KCk7ICAgICAgICAgICAgICAgICAgICAgICAvL+iejei1hOaWueW8j1xyXG4gICAgICB0aGlzLnhtU3RhZ2UoKTsgICAgICAgICAgICAgICAgICAgICAvL+aJgOWkhOmYtuautVxyXG4gICAgICB0aGlzLnhtQ2F0ZWdvcnkoKTsgICAgICAgICAgICAgICAgICAvL+mcgOaxguexu+WIq1xyXG4gICAgICB0aGlzLnhtRmluYW5jaW5nKCk7ICAgICAgICAgICAgICAgICAvL+iejei1hOmHkeminVxyXG4gICAgICB0aGlzLmluZHVzdHJ5KCk7ICAgICAgICAgICAgICAgICAgICAvL+S6p+S4muOAgeihjOS4mlxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG5cclxuICAvL+aJvui1hOmHke+8iOmHkeiejeacjeWKoe+8iVxyXG4gIGdldEpyTGlzdCgpeyAgLy/mib7otYTph5HvvIjph5Hono3vvIlcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIG1vcmVTaG93OiBmYWxzZSxcclxuICAgIH0pXHJcbiAgICBodHRwcy5zdWNjZXNzUmVxdWVzdChhcGkuamlucm9uZywge1xyXG4gICAgICB0ZW5hbnRJZDogYXBpLmFyZWFJZCwgICAgICAgICAgICAgICAgIC8v5Zyw5Yy6aWRcclxuICAgICAga2V5OiB0aGlzLmRhdGEuc2VhcmNoS2V5LCAgICAgICAgICAgICAvL+WFs+mUruWtl+aQnOe0olxyXG4gICAgICBwYWdlU2l6ZTogdGhpcy5kYXRhLnBhZ2VTaXplLCAgICAgICAgIC8v5q+P6aG15pi+56S65pWw6YePXHJcbiAgICAgIHBhZ2VJbmRleDogdGhpcy5kYXRhLnBhZ2VJbmRleCwgICAgICAgLy/pobXmlbBcclxuICAgICAgdHlwZU9uZUlkOiB0aGlzLmRhdGEuanJUeXBlT25lSWQsICAgICAvL+acjeWKoeexu+WIq+S4gOe6p+iPnOWNlVxyXG4gICAgICB0eXBlVHdvSWQ6IHRoaXMuZGF0YS5qclR5cGVUd29JZCwgICAgIC8v5pyN5Yqh57G75Yir5LqM57qn6I+c5Y2VXHJcbiAgICAgIHF5TmF0dXJlSWQ6IHRoaXMuZGF0YS5qckR3U3RhdHVzSWQsICAgLy/ljZXkvY3nsbvlnotpZFxyXG4gICAgICBkd1NjYWxlSWQ6IHRoaXMuZGF0YS5qckR3U2NhbGVJZCwgICAgIC8v5Y2V5L2N6KeE5qihaWRcclxuICAgICAgY3lUeXBlSWQ6IHRoaXMuZGF0YS5qckN5VHlwZUlkLCAgICAgICAvL+S6p+S4mmlkXHJcbiAgICAgIGh5VHlwZUlkOiB0aGlzLmRhdGEuanJIeVR5cGVJZCAgICAgICAgLy/ooYzkuJppZFxyXG4gICAgfSwgJ0dFVCcpLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgaWYocmVzKXtcclxuICAgICAgICAvL+mHkeiejVxyXG4gICAgICAgIGxldCBsaXN0OmFueSA9ICByZXMubGlzdC5tYXAoKGl0ZW06YW55LCBpbmRleDpudW1iZXIpOmFueT0+e1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGluZGV4LCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9tYXDnlKjnmoToh6rlrprkuYlJRFxyXG4gICAgICAgICAgICBuYW1lOiAn6YeR6J6NJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+ivpuaDheWIpOaWrVxyXG4gICAgICAgICAgICBsb25naXR1ZGU6IGl0ZW0ubG5nLCAgICAgICAgICAgICAgICAgICAgICAgICAvL+e7j+W6plxyXG4gICAgICAgICAgICBsYXRpdHVkZTogaXRlbS5sYXQsICAgICAgICAgICAgICAgICAgICAgICAgICAvL+e6rOW6plxyXG4gICAgICAgICAgICBpY29uUGF0aDogJy4uLy4uL2ltYWdlcy96ai5wbmcnLCAgICAgICAgICAgICAvL+agh+iusFxyXG4gICAgICAgICAgICB3aWR0aDogMjcsXHJcbiAgICAgICAgICAgIGhlaWdodDogMzUsXHJcbiAgICAgICAgICAgIGNhbGxvdXQ6IHtcclxuICAgICAgICAgICAgICBjb250ZW50OiBpdGVtLnF5TmFtZT9pdGVtLnF5TmFtZTon5pyq5aGr5oqlJyxcclxuICAgICAgICAgICAgICBjb2xvcjogJyMwMDAnLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAxOCxcclxuICAgICAgICAgICAgICBiZ0NvbG9yOiAnI0ZGRicsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNSxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXHJcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjQ0NDJyxcclxuICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnQllDTElDSydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb2xkSWQ6IGl0ZW0uaWQsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Y6f5aeLSURcclxuICAgICAgICAgICAgdGl0bGU6IGl0ZW0ucXlOYW1lP2l0ZW0ucXlOYW1lOifmnKrloavmiqUnLCAgICAgICAgICAgICAgICAgICAvL+agh+mimFxyXG4gICAgICAgICAgICBpbWdBcnI6IGl0ZW0uZndqZ1BpY3MsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Zu+54mH5pWw57uEXHJcbiAgICAgICAgICAgIHByb3ZpbmNlTmFtZTogaXRlbS5wcm92aW5jZU5hbWU/aXRlbS5wcm92aW5jZU5hbWU6JycsICAgICAvL+ecgVxyXG4gICAgICAgICAgICBjaXR5TmFtZTogaXRlbS5jaXR5TmFtZT9pdGVtLmNpdHlOYW1lOicnLCAgICAgICAgICAgICAgICAgLy/luIJcclxuICAgICAgICAgICAgZGlzdHJpY3ROYW1lOiBpdGVtLmRpc3RyaWN0TmFtZT9pdGVtLmRpc3RyaWN0TmFtZTonJywgICAgIC8v5Yy6XHJcbiAgICAgICAgICAgIGFkZHJlc3M6IGl0ZW0uZndBZGRyZXNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+ivpue7huWcsOWdgFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZih0aGlzLmRhdGEudG90YWwgPT0gMCl7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBtYXJrZXJzOiBsaXN0LCAgICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIHRvdGFsOiByZXMudG90YWwsICAgICAgIC8v5oC75pWwXHJcbiAgICAgICAgICAgIG11bUxpc3Q6IGxpc3QsICAgICAgICAgICAgICAgIC8v5YiX6KGoXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgbWFya2VyczogdGhpcy5kYXRhLm1hcmtlcnMuY29uY2F0KGxpc3QpLCAgICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIG11bUxpc3Q6IHRoaXMuZGF0YS5tdW1MaXN0LmNvbmNhdChsaXN0KSwgICAgICAgICAgICAgICAgLy/liJfooahcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICBpZih0aGlzLmRhdGEubXVtTGlzdC5sZW5ndGggPCByZXMudG90YWwpe1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgbW9yZVNob3c6IHRydWUsXHJcbiAgICAgICAgICAgIG1vcmVUaXRsZTogJ+eCueWHu+WKoOi9veabtOWkmicsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgbW9yZVNob3c6IHRydWUsXHJcbiAgICAgICAgICAgIG1vcmVUaXRsZTogJ+W3suWKoOi9veWFqOmDqCcsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAganJDYXRlZ29yeU5hdkl0ZW0oZGF0YTphbnkpOnZvaWR7ICAgICAgIC8v5pyN5Yqh57G75Yir77yI5bem5L6n5a+86Iiq54K55Ye75pe277yM6Kem5Y+R55qE5LqL5Lu277yJXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBqckNhdGVnb3J5SW5kZXg6IGRhdGEuZGV0YWlsLmluZGV4IHx8IDAsXHJcbiAgICB9KTtcclxuICB9LFxyXG4gIGpyQ2F0ZWdvcnlJdGVtKGRhdGE6YW55KTp2b2lkIHsgIC8v5pyN5Yqh57G75Yir77yI5bem5L6n5a+86Iiq54K55Ye75pe277yM6Kem5Y+R55qE5LqL5Lu277yJXHJcbiAgICBjb25zdCBpZCA9IHRoaXMuZGF0YS5qckNhdGVnb3J5SWQgPT09IGRhdGEuZGV0YWlsLmlkID8gbnVsbCA6IGRhdGEuZGV0YWlsLmlkO1xyXG4gICAgY29uc3QgcElkID0gZGF0YS5kZXRhaWwucElkO1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAganJDYXRlZ29yeUlkOiBpZCxcclxuICAgICAganJUeXBlT25lSWQ6IHBJZCA/IHBJZCA6ICcnLCAgICAgICAgICAgICAgIC8v5pyN5Yqh57G75Yir5LiA57qn6I+c5Y2VXHJcbiAgICAgIGpyVHlwZVR3b0lkOiBpZCA9PSBwSWQgPyAnJyA6IGlkLCAgICAgICAgICAvL+acjeWKoeexu+WIq+S6jOe6p+iPnOWNlSBcclxuICAgIH0pXHJcbiAgfSxcclxuICBqclR5cGVGbihlOmFueSk6dm9pZHsgICAgLy/ljZXkvY3nsbvlnovop6blj5FcclxuICAgIGxldCBpZDphbnkgPSBlLnRhcmdldC5kYXRhc2V0LmlkO1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAganJUeXBlQ2xhc3M6IGlkLFxyXG4gICAgICBqckR3U3RhdHVzSWQ6IGlkLCAgICAgICAgLy/ljZXkvY3nsbvlnotcclxuICAgIH0pXHJcbiAgfSxcclxuICBqclNjYWxlRm4oZTphbnkpOnZvaWR7ICAgIC8v5Y2V5L2N6KeE5qih6Kem5Y+RXHJcbiAgICBsZXQgaWQ6YW55ID0gZS50YXJnZXQuZGF0YXNldC5pZDtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGpyU2NhbGVDbGFzczogaWQsXHJcbiAgICAgIGpyRHdTY2FsZUlkOiBpZCwgICAgICAgIC8v5Y2V5L2N6KeE5qihXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAganJOYXZJdGVtKGRhdGE6YW55KTp2b2lkeyAgICAgICAvL+aJvuacjeWKoeihjOS4muS6p+S4mu+8iOW3puS+p+WvvOiIqueCueWHu+aXtu+8jOinpuWPkeeahOS6i+S7tu+8iVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAganJJbmR1c3RyeUluZGV4OiBkYXRhLmRldGFpbC5pbmRleCB8fCAwLFxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBqckluZHVzdHJ5SXRlbShkYXRhOmFueSk6dm9pZCB7ICAvL+aJvuacjeWKoeihjOS4muS6p+S4mu+8iOWPs+S+p+mAieaLqemhueiiq+eCueWHu+aXtu+8jOS8muinpuWPkeeahOS6i+S7tu+8iSBcclxuICAgIGNvbnN0IGlkID0gdGhpcy5kYXRhLmpySW5kdXN0cnlJZCA9PT0gZGF0YS5kZXRhaWwuaWQgPyBudWxsIDogZGF0YS5kZXRhaWwuaWQ7XHJcbiAgICBjb25zdCBwSWQgPSBkYXRhLmRldGFpbC5wSWQ7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBqckluZHVzdHJ5SWQ6IGlkLFxyXG4gICAgICBqckN5VHlwZUlkOiBwSWQgPyBwSWQgOiAnJywgICAgICAgICAgLy/kuqfkuJppZFxyXG4gICAgICBqckh5VHlwZUlkOiBpZCA9PSBwSWQgPyAnJyA6IGlkLCAgICAgLy/ooYzkuJppZFxyXG4gICAgfSlcclxuICB9LFxyXG4gIGpyUmVzZXQoZTphbnkpOnZvaWR7ICAvL+aJvuacjeWKoemHjee9rlxyXG4gICAgbGV0IGZsYWc6bnVtYmVyID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuZmxhZztcclxuICAgIGlmKGZsYWcgPT0gMSl7ICAvL+acjeWKoeexu+WIq1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGpyQ2F0ZWdvcnlJbmRleDogMCwgICAgICAgICAvL+W9k+WJjee0ouW8lVxyXG4gICAgICAgIGpyQ2F0ZWdvcnlJZDogbnVsbCwgICAgICAgICAvL+mAieS4reeahGlkXHJcbiAgICAgICAganJUeXBlT25lSWQ6ICcnLCAgICAgICAgICAgIC8v5pyN5Yqh57G75Yir5LiA57qn6I+c5Y2VXHJcbiAgICAgICAganJUeXBlVHdvSWQ6ICcnLCAgICAgICAgICAgIC8v5pyN5Yqh57G75Yir5LqM57qn6I+c5Y2VXHJcbiAgICAgICAgbnVtOiAwLCAgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgICAvLzbmib7liJfooahcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyNqckNhdGVnb3J5SWQnKS50b2dnbGUoZmFsc2UpOyAgICAgICAgIC8v5pyN5Yqh57G75Yir5YWz6ZetXHJcbiAgICB9ZWxzZSBpZihmbGFnID09IDIpeyAgLy/ljZXkvY3nsbvlnotcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBqclR5cGVDbGFzczogbnVsbCxcclxuICAgICAgICBqckR3U3RhdHVzSWQ6ICcnLCAgICAgICAgICAvL+WNleS9jeexu+Wei1xyXG4gICAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgIC8vNuaJvuWIl+ihqFxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI2pyVHlwZScpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAvL+WNleS9jeexu+Wei+WFs+mXrVxyXG4gICAgfWVsc2UgaWYoZmxhZyA9PSAzKXsgIC8v5Y2V5L2N6KeE5qihXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAganJTY2FsZUNsYXNzOiBudWxsLFxyXG4gICAgICAgIGpyRHdTY2FsZUlkOiAnJywgICAgICAgICAgIC8v5Y2V5L2N6KeE5qihXHJcbiAgICAgICAgbnVtOiAwLCAgICAgICAgICAgICAgICAgICAgLy825om+57uT5p6cXHJcbiAgICAgICAgbXVtTGlzdDogW10sICAgICAgICAgICAgICAgLy825om+5YiX6KGoXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjanJTY2FsZUlkJykudG9nZ2xlKGZhbHNlKTsgICAgICAgIC8v5Y2V5L2N6KeE5qih5YWz6ZetXHJcbiAgICB9ZWxzZXsgIC8v5Lqn5Lia44CB6KGM5LiaXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAganJJbmR1c3RyeUluZGV4OiAwLCAgICAgICAgIC8v5b2T5YmN57Si5byVXHJcbiAgICAgICAganJJbmR1c3RyeUlkOiBudWxsLCAgICAgICAgIC8v6YCJ5Lit55qEaWRcclxuICAgICAgICBqckN5VHlwZUlkOiAnJywgICAgICAgICAgICAgLy/kuqfkuJppZFxyXG4gICAgICAgIGpySHlUeXBlSWQ6ICcnLCAgICAgICAgICAgICAvL+ihjOS4mmlkXHJcbiAgICAgICAgbnVtOiAwLCAgICAgICAgICAgICAgICAgICAgLy825om+57uT5p6cXHJcbiAgICAgICAgbXVtTGlzdDogW10sICAgICAgICAgICAgICAgLy825om+5YiX6KGoXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjanJJbmR1c3RyeUlkJykudG9nZ2xlKGZhbHNlKTsgICAgIC8v5Lqn5Lia44CB6KGM5Lia5YWz6ZetXHJcbiAgICB9XHJcbiAgICB0aGlzLmdldEpyTGlzdCgpOyAgICAgICAgICAgIC8v5om+6LWE6YeR77yI6YeR6J6N77yJXHJcbiAgfSxcclxuICBqclN1Ym1pdChlOmFueSk6dm9pZHsgIC8v5om+5pyN5Yqh5a6M5oiQXHJcbiAgICBsZXQgZmxhZzpudW1iZXIgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5mbGFnO1xyXG4gICAgaWYoZmxhZyA9PSAxKXtcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyNqckNhdGVnb3J5SWQnKS50b2dnbGUoZmFsc2UpOyAgICAgICAgIC8v5pyN5Yqh57G75Yir5YWz6ZetXHJcbiAgICB9ZWxzZSBpZihmbGFnID09IDIpe1xyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI2pyVHlwZScpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAgICAgICAgLy/ljZXkvY3nsbvlnovlhbPpl61cclxuICAgIH1lbHNlIGlmKGZsYWcgPT0gMyl7XHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjanJTY2FsZUlkJykudG9nZ2xlKGZhbHNlKTsgICAgICAgICAgICAvL+WNleS9jeinhOaooeWFs+mXrVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjanJJbmR1c3RyeUlkJykudG9nZ2xlKGZhbHNlKTsgICAgICAgICAvL+S6p+S4muOAgeihjOS4muWFs+mXrVxyXG4gICAgfVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgbnVtOiAwLCAgICAgICAgICAgICAgICAgICAgLy825om+57uT5p6cXHJcbiAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgIC8vNuaJvuWIl+ihqFxyXG4gICAgICBtYXJrZXJzOltdLCAgICAgICAgICAgICAgIC8v5qCH6K6w54K55aSE55CG5ZCO55qE5pWw5o2u77yIaWTjgIHmn6Xor6Lkvb/nlKjvvIlcclxuICAgICAgcGFnZVNpemU6IDEwLCAgICAgICAgICAgICAvL+avj+mhteaYvuekuuaVsOmHj1xyXG4gICAgICBwYWdlSW5kZXg6IDEsICAgICAgICAgICAgIC8v5b2T5YmN6aG1XHJcbiAgICAgIHRvdGFsOiAwLCAgICAgICAgICAgICAgICAgLy/mgLvmnaHmlbBcclxuICAgIH0pXHJcbiAgICB0aGlzLmdldEpyTGlzdCgpOyAgICAgICAgICAgIC8v5om+6LWE6YeR77yI6YeR6J6N77yJXHJcbiAgfSxcclxuXHJcbiBcclxuICAvL+aJvui1hOmHke+8iOaKlei1hO+8iVxyXG4gIGdldFR6TGlzdCgpeyAgLy/mib7otYTph5HvvIjmipXotYTvvIlcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIG1vcmVTaG93OiBmYWxzZSxcclxuICAgIH0pXHJcbiAgICBodHRwcy5zdWNjZXNzUmVxdWVzdChhcGkudG91emksIHtcclxuICAgICAgdGVuYW50SWQ6IGFwaS5hcmVhSWQsICAgICAgICAgICAgICAgICAgLy/lnLDljLppZFxyXG4gICAgICBrZXk6IHRoaXMuZGF0YS5zZWFyY2hLZXksICAgICAgICAgICAgIC8v5YWz6ZSu5a2X5pCc57SiXHJcbiAgICAgIHBhZ2VTaXplOiB0aGlzLmRhdGEucGFnZVNpemUsICAgICAgICAgLy/mr4/pobXmmL7npLrmlbDph49cclxuICAgICAgcGFnZUluZGV4OiB0aGlzLmRhdGEucGFnZUluZGV4LCAgICAgICAvL+mhteaVsFxyXG5cclxuICAgICAgdHlwZU9uZUlkOiB0aGlzLmRhdGEuanJUeXBlT25lSWQsICAgICAvL+acjeWKoeexu+WIq+S4gOe6p+iPnOWNlVxyXG4gICAgICB0eXBlVHdvSWQ6IHRoaXMuZGF0YS5qclR5cGVUd29JZCwgICAgIC8v5pyN5Yqh57G75Yir5LqM57qn6I+c5Y2VXHJcbiAgICAgIGR3U3RhdHVzSWQ6IHRoaXMuZGF0YS5qckR3U3RhdHVzSWQsICAgLy/ljZXkvY3nsbvlnotpZFxyXG4gICAgICBkd1NjYWxlSWQ6IHRoaXMuZGF0YS5qckR3U2NhbGVJZCwgICAgIC8v5Y2V5L2N6KeE5qihaWRcclxuICAgICAgY3lUeXBlSWQ6IHRoaXMuZGF0YS5qckN5VHlwZUlkLCAgICAgICAvL+S6p+S4mmlkXHJcbiAgICAgIGh5VHlwZUlkOiB0aGlzLmRhdGEuanJIeVR5cGVJZCAgICAgICAgLy/ooYzkuJppZFxyXG4gICAgfSwgJ0dFVCcpLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgaWYocmVzKXtcclxuXHJcbiAgICAgICAgLy/mipXotYRcclxuICAgICAgICBsZXQgbGlzdDphbnkgPSAgcmVzLmxpc3QubWFwKChpdGVtOmFueSwgaW5kZXg6bnVtYmVyKTphbnk9PntcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBpbmRleCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vbWFw55So55qE6Ieq5a6a5LmJSURcclxuICAgICAgICAgICAgbmFtZTogJ+aKlei1hCcsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/or6bmg4XliKTmlq1cclxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBpdGVtLmxuZywgICAgICAgICAgICAgICAgICAgICAgICAgLy/nu4/luqZcclxuICAgICAgICAgICAgbGF0aXR1ZGU6IGl0ZW0ubGF0LCAgICAgICAgICAgICAgICAgICAgICAgICAgLy/nuqzluqZcclxuICAgICAgICAgICAgaWNvblBhdGg6ICcuLi8uLi9pbWFnZXMvdHoucG5nJywgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgd2lkdGg6IDI3LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1LFxyXG4gICAgICAgICAgICBjYWxsb3V0OiB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogaXRlbS5uZWVkTmFtZT9pdGVtLm5lZWROYW1lOifmnKrloavmiqUnLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IDE4LFxyXG4gICAgICAgICAgICAgIGJnQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1LFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNDQ0MnLFxyXG4gICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdCWUNMSUNLJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbGRJZDogaXRlbS5pZCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/ljp/lp4tJRFxyXG4gICAgICAgICAgICB0aXRsZTogaXRlbS5uZWVkTmFtZT9pdGVtLm5lZWROYW1lOifmnKrloavmiqUnLCAgICAgICAgICAgICAgLy/moIfpophcclxuICAgICAgICAgICAgaW1nQXJyOiBpdGVtLm5lZWRGaWxlcywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Zu+54mH5pWw57uEXHJcbiAgICAgICAgICAgIHByb3ZpbmNlTmFtZTogaXRlbS5wcm92aW5jZU5hbWU/aXRlbS5wcm92aW5jZU5hbWU6JycsICAgICAvL+ecgVxyXG4gICAgICAgICAgICBjaXR5TmFtZTogaXRlbS5jaXR5TmFtZT9pdGVtLmNpdHlOYW1lOicnLCAgICAgICAgICAgICAgICAgLy/luIJcclxuICAgICAgICAgICAgZGlzdHJpY3ROYW1lOiBpdGVtLmRpc3RyaWN0TmFtZT9pdGVtLmRpc3RyaWN0TmFtZTonJywgICAgIC8v5Yy6XHJcbiAgICAgICAgICAgIGFkZHJlc3M6IGl0ZW0udGVuYW50TmFtZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+ivpue7huWcsOWdgFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgICBpZih0aGlzLmRhdGEudG90YWwgPT0gMCl7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBtYXJrZXJzOiBsaXN0LCAgICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIHRvdGFsOiByZXMudG90YWwsICAgICAgIC8v5oC75pWwXHJcbiAgICAgICAgICAgIG11bUxpc3Q6IGxpc3QsICAgICAgICAgICAgICAgIC8v5YiX6KGoXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgbWFya2VyczogdGhpcy5kYXRhLm1hcmtlcnMuY29uY2F0KGxpc3QpLCAgICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIG11bUxpc3Q6IHRoaXMuZGF0YS5tdW1MaXN0LmNvbmNhdChsaXN0KSwgICAgICAgICAgICAgICAgLy/liJfooahcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICBpZih0aGlzLmRhdGEubXVtTGlzdC5sZW5ndGggPCByZXMudG90YWwpe1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgbW9yZVNob3c6IHRydWUsXHJcbiAgICAgICAgICAgIG1vcmVUaXRsZTogJ+eCueWHu+WKoOi9veabtOWkmicsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgbW9yZVNob3c6IHRydWUsXHJcbiAgICAgICAgICAgIG1vcmVUaXRsZTogJ+W3suWKoOi9veWFqOmDqCcsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLmRhdGEubXVtTGlzdC5sZW5ndGggPCByZXMudG90YWwpe1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgbW9yZVNob3c6IHRydWUsXHJcbiAgICAgICAgICAgIG1vcmVUaXRsZTogJ+eCueWHu+WKoOi9veabtOWkmicsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgbW9yZVNob3c6IHRydWUsXHJcbiAgICAgICAgICAgIG1vcmVUaXRsZTogJ+W3suWKoOi9veWFqOmDqCcsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgdHpBcmVhRm4oZTphbnkpOnZvaWR7ICAgIC8v5oqV6LWE5Yy65Z+f6Kem5Y+RXHJcbiAgICBsZXQgaWQ6YW55ID0gZS50YXJnZXQuZGF0YXNldC5pZDtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHR6QXJlYUNsYXNzOiBpZCxcclxuICAgICAgdHpBcmVhSWQ6IGlkLCAgICAgICAgLy/mipXotYTljLrln59JRFxyXG4gICAgfSlcclxuICB9LFxyXG4gIHR6V2F5Rm4oZTphbnkpOnZvaWR7ICAgICAvL+aKlei1hOaWueW8j+inpuWPkVxyXG4gICAgbGV0IGlkOmFueSA9IGUudGFyZ2V0LmRhdGFzZXQuaWQ7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICB0eldheUNsYXNzOiBpZCxcclxuICAgICAgdHpXYXlJZDogaWQsICAgICAgICAgLy/mipXotYTmlrnlvI9JRFxyXG4gICAgfSlcclxuICB9LFxyXG4gIHR6T3RoZXJGbihlOmFueSk6dm9pZHsgICAgIC8v5oqV6LWE6YeR6aKd6Kem5Y+RXHJcbiAgICBsZXQgaWQ6YW55ID0gZS50YXJnZXQuZGF0YXNldC5pZDtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHR6T3RoZXJDbGFzczogaWQsXHJcbiAgICAgIHR6T3RoZXJJZDogaWQsICAgICAgICAgLy/mipXotYTph5Hpop1JRFxyXG4gICAgfSlcclxuICB9LFxyXG4gIHR6VHlwZUZuKGU6YW55KTp2b2lkeyAgICAgIC8v5oqV6LWE57G75Z6L6Kem5Y+RXHJcbiAgICBsZXQgaWQ6YW55ID0gZS50YXJnZXQuZGF0YXNldC5pZDtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHR6VHlwZUNsYXNzOiBpZCxcclxuICAgICAgdHpUeXBlSWQ6IGlkLCAgICAgICAgIC8v5oqV6LWE57G75Z6LSURcclxuICAgIH0pXHJcbiAgfSxcclxuICB0ek5hdkl0ZW0oZGF0YTphbnkpOnZvaWR7ICAgICAgIC8v5om+5oqV6LWE6KGM5Lia5Lqn5Lia77yI5bem5L6n5a+86Iiq54K55Ye75pe277yM6Kem5Y+R55qE5LqL5Lu277yJXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICB0ekluZGV4OiBkYXRhLmRldGFpbC5pbmRleCB8fCAwLFxyXG4gICAgfSk7XHJcbiAgfSxcclxuICB0ekluZHVzdHJ5SXRlbShkYXRhOmFueSk6dm9pZCB7ICAvL+aJvuaKlei1hOihjOS4muS6p+S4mu+8iOWPs+S+p+mAieaLqemhueiiq+eCueWHu+aXtu+8jOS8muinpuWPkeeahOS6i+S7tu+8iVxyXG4gICAgY29uc3QgaWQgPSB0aGlzLmRhdGEudHpJbmR1c3RyeUlkID09PSBkYXRhLmRldGFpbC5pZCA/IG51bGwgOiBkYXRhLmRldGFpbC5pZDtcclxuICAgIGNvbnN0IHBJZCA9IGRhdGEuZGV0YWlsLnBJZDtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHR6SW5kdXN0cnlJZDogaWQsXHJcbiAgICAgIHR6Q3lUeXBlSWQ6IHBJZCA/IHBJZCA6ICcnLCAgICAgICAgICAvL+S6p+S4mmlkXHJcbiAgICAgIHR6SHlUeXBlSWQ6IGlkID09IHBJZCA/ICcnIDogaWQsICAgICAvL+ihjOS4mmlkXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgdHpSZXNldChlOmFueSk6dm9pZHsgIC8v5om+5oqV6LWE6YeN572uXHJcbiAgICBsZXQgZmxhZzpudW1iZXIgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5mbGFnO1xyXG4gICAgaWYoZmxhZyA9PSAxKXsgIC8v5oqV6LWE5Yy65Z+fXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgdHpBcmVhQ2xhc3M6IG51bGwsXHJcbiAgICAgICAgdHpBcmVhSWQ6ICcnLCAgICAgICAgICAgICAgIC8v5oqV6LWE5Yy65Z+fSURcclxuICAgICAgICBudW06IDAsICAgICAgICAgICAgICAgICAgICAgLy825om+57uT5p6cXHJcbiAgICAgICAgbXVtTGlzdDogW10sICAgICAgICAgICAgICAgIC8vNuaJvuWIl+ihqFxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI3R6QXJlYUlkJykudG9nZ2xlKGZhbHNlKTsgICAgICAgICAvL+aKlei1hOWMuuWfn+WFs+mXrVxyXG4gICAgfWVsc2UgaWYoZmxhZyA9PSAyKXsgIC8v5oqV6LWE5pa55byPXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgdHpXYXlDbGFzczogbnVsbCxcclxuICAgICAgICB0eldheUlkOiAnJywgICAgICAgICAgICAgIC8v5oqV6LWE5pa55byPSURcclxuICAgICAgICBudW06IDAsICAgICAgICAgICAgICAgICAgICAvLzbmib7nu5PmnpxcclxuICAgICAgICBtdW1MaXN0OiBbXSwgICAgICAgICAgICAgICAvLzbmib7liJfooahcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyN0eldheUlkJykudG9nZ2xlKGZhbHNlKTsgICAgICAgIC8v5oqV6LWE5pa55byP5YWz6ZetXHJcbiAgICB9ZWxzZSBpZihmbGFnID09IDMpeyAgLy/kuqfkuJrooYzkuJpcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICB0ekluZGV4OiAwLCAgICAgICAgICAgICAgICAvL+W9k+WJjee0ouW8lVxyXG4gICAgICAgIHR6SW5kdXN0cnlJZDogbnVsbCwgICAgICAgIC8v6YCJ5Lit55qEaWRcclxuICAgICAgICB0ekN5VHlwZUlkOiAnJywgICAgICAgICAgICAvL+S6p+S4mmlkXHJcbiAgICAgICAgdHpIeVR5cGVJZDogJycsICAgICAgICAgICAgLy/ooYzkuJppZFxyXG4gICAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgIC8vNuaJvuWIl+ihqFxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI3R6SW5kdXN0cnlJZCcpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAvL+S6p+S4muihjOS4muWFs+mXrVxyXG4gICAgfWVsc2V7ICAvL+abtOWkmlxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHR6T3RoZXJDbGFzczogbnVsbCxcclxuICAgICAgICB0ek90aGVySWQ6ICcnLCAgICAgICAgICAgICAvL+aKlei1hOmHkeminUlEXHJcbiAgICAgICAgdHpUeXBlQ2xhc3M6IG51bGwsXHJcbiAgICAgICAgdHpUeXBlSWQ6ICcnLCAgICAgICAgICAgICAgLy/mipXotYTnsbvlnotJRFxyXG4gICAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgIC8vNuaJvuWIl+ihqFxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI3R6TW9yZUlkJykudG9nZ2xlKGZhbHNlKTsgICAgIC8vL+abtOWkmuWFs+mXrVxyXG4gICAgfVxyXG4gICAgdGhpcy5nZXRUekxpc3QoKTsgICAgICAgICAgICAvL+aJvui1hOmHke+8iOmHkeiejVxyXG4gIH0sXHJcbiAgdHpTdWJtaXQoZTphbnkpOnZvaWR7ICAvL+aJvuaKlei1hOWujOaIkFxyXG4gICAgbGV0IGZsYWc6bnVtYmVyID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuZmxhZztcclxuICAgIGlmKGZsYWcgPT0gMSl7XHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjdHpBcmVhSWQnKS50b2dnbGUoZmFsc2UpOyAgICAgICAgIC8v5oqV6LWE5Yy65Z+f5YWz6ZetXHJcbiAgICB9ZWxzZSBpZihmbGFnID09IDIpe1xyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI3R6V2F5SWQnKS50b2dnbGUoZmFsc2UpOyAgICAgICAgICAvL+aKlei1hOaWueW8j+WFs+mXrVxyXG4gICAgfWVsc2UgaWYoZmxhZyA9PSAzKXtcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyN0ekluZHVzdHJ5SWQnKS50b2dnbGUoZmFsc2UpOyAgICAgIC8v5Lqn5Lia6KGM5Lia5YWz6ZetXHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyN0ek1vcmVJZCcpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAgIC8vL+abtOWkmuWFs+mXrVxyXG4gICAgfVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgbnVtOiAwLCAgICAgICAgICAgICAgICAgICAgLy825om+57uT5p6cXHJcbiAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgIC8vNuaJvuWIl+ihqFxyXG4gICAgICBtYXJrZXJzOltdLCAgICAgICAgICAgICAgIC8v5qCH6K6w54K55aSE55CG5ZCO55qE5pWw5o2u77yIaWTjgIHmn6Xor6Lkvb/nlKjvvIlcclxuICAgICAgcGFnZVNpemU6IDEwLCAgICAgICAgICAgICAvL+avj+mhteaYvuekuuaVsOmHj1xyXG4gICAgICBwYWdlSW5kZXg6IDEsICAgICAgICAgICAgIC8v5b2T5YmN6aG1XHJcbiAgICAgIHRvdGFsOiAwLCAgICAgICAgICAgICAgICAgLy/mgLvmnaHmlbBcclxuICAgIH0pXHJcbiAgICB0aGlzLmdldFR6TGlzdCgpOyAgICAgICAgICAgIC8v5om+6LWE6YeR77yI6YeR6J6NXHJcbiAgfSxcclxuXHJcbiAgLy/mib7otYTph5HvvIjono3otYTvvIlcclxuICBnZXRSekxpc3QoKXsgIC8v5om+6LWE6YeR77yI6J6N6LWE77yJXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBtb3JlU2hvdzogZmFsc2UsXHJcbiAgICB9KVxyXG4gICAgaHR0cHMuc3VjY2Vzc1JlcXVlc3QoYXBpLnJvbmd6aSwge1xyXG4gICAgICB0ZW5hbnRJZDogYXBpLmFyZWFJZCwgICAgICAgICAgICAgICAgICAvL+WcsOWMumlkXHJcbiAgICAgIGtleTogdGhpcy5kYXRhLnNlYXJjaEtleSwgICAgICAgICAgICAgLy/lhbPplK7lrZfmkJzntKJcclxuICAgICAgcGFnZVNpemU6IHRoaXMuZGF0YS5wYWdlU2l6ZSwgICAgICAgICAvL+avj+mhteaYvuekuuaVsOmHj1xyXG4gICAgICBwYWdlSW5kZXg6IHRoaXMuZGF0YS5wYWdlSW5kZXgsICAgICAgIC8v6aG15pWwXHJcblxyXG4gICAgICByeldheTogdGhpcy5kYXRhLnJ6Q2F0ZWdvcnlJZCwgICAgICAgIC8v6J6N6LWE5pa55byPXHJcbiAgICAgIHJ6TW9uZXk6IHRoaXMuZGF0YS5yekZpbmFuY2luZ0lkLCAgICAgLy/ono3otYTph5Hpop1cclxuICAgICAgY3lUeXBlSWQ6IHRoaXMuZGF0YS5yekN5VHlwZUlkLCAgICAgICAvL+S6p+S4mmlkXHJcbiAgICAgIGh5VHlwZUlkOiB0aGlzLmRhdGEucnpIeVR5cGVJZCAgICAgICAgLy/ooYzkuJppZFxyXG4gICAgfSwgJ0dFVCcpLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgaWYocmVzKXtcclxuICAgICAgICAvL+iejei1hO+8iOmcgOaxgu+8iVxyXG4gICAgICAgIGxldCByb25nemlOZWVkc0xpc3Q6YW55ID0gcmVzLnZhbC5uZWVkTGlzdC5tYXAoKGl0ZW06YW55KTphbnk9PntcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiAn6J6N6LWEJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+ivpuaDheWIpOaWrVxyXG4gICAgICAgICAgICBsb25naXR1ZGU6IGl0ZW0ubG5nLCAgIC8v57uP5bqmXHJcbiAgICAgICAgICAgIGxhdGl0dWRlOiBpdGVtLmxhdCwgICAgLy/nuqzluqZcclxuICAgICAgICAgICAgaWNvblBhdGg6ICcuLi8uLi9pbWFnZXMvcnoucG5nJywgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgd2lkdGg6IDI3LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1LFxyXG4gICAgICAgICAgICBjYWxsb3V0OiB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogaXRlbS5uZWVkTmFtZT9pdGVtLm5lZWROYW1lOifmnKrloavmiqUnLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IDE0LFxyXG4gICAgICAgICAgICAgIGJnQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1LFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNDQ0MnLFxyXG4gICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdCWUNMSUNLJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0aXRsZTogaXRlbS5uZWVkTmFtZSwgICAgICAgICAgICAgICAgICAgLy/moIfpophcclxuICAgICAgICAgICAgaW1nQXJyOiBpdGVtLm5lZWRGaWxlcywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Zu+54mH5pWw57uEXHJcbiAgICAgICAgICAgIHByb3ZpbmNlTmFtZTogaXRlbS5wcm92aW5jZU5hbWU/aXRlbS5wcm92aW5jZU5hbWU6JycsICAgICAvL+ecgVxyXG4gICAgICAgICAgICBjaXR5TmFtZTogaXRlbS5jaXR5TmFtZT9pdGVtLmNpdHlOYW1lOicnLCAgICAgICAgICAgICAgICAgLy/luIJcclxuICAgICAgICAgICAgZGlzdHJpY3ROYW1lOiBpdGVtLmRpc3RyaWN0TmFtZT9pdGVtLmRpc3RyaWN0TmFtZTonJywgICAgIC8v5Yy6XHJcbiAgICAgICAgICAgIGFkZHJlc3M6IGl0ZW0udGVuYW50TmFtZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+ivpue7huWcsOWdgFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8v6J6N6LWE77yI6aG555uu77yJXHJcbiAgICAgICAgbGV0IHJvbmd6aVByb3NMaXN0OmFueSA9IHJlcy52YWwucHJvTGlzdC5tYXAoKGl0ZW06YW55KTphbnk9PntcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiAn6aG555uuJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+ivpuaDheWIpOaWrVxyXG4gICAgICAgICAgICBsb25naXR1ZGU6IGl0ZW0ubG5nLCAgIC8v57uP5bqmXHJcbiAgICAgICAgICAgIGxhdGl0dWRlOiBpdGVtLmxhdCwgICAgLy/nuqzluqZcclxuICAgICAgICAgICAgaWNvblBhdGg6ICcuLi8uLi9pbWFnZXMveG0ucG5nJywgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgd2lkdGg6IDI3LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1LFxyXG4gICAgICAgICAgICBjYWxsb3V0OiB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogaXRlbS5wcm9OYW1lP2l0ZW0ucHJvTmFtZTon5pyq5aGr5oqlJyxcclxuICAgICAgICAgICAgICBjb2xvcjogJyMwMDAnLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAxNCxcclxuICAgICAgICAgICAgICBiZ0NvbG9yOiAnI0ZGRicsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNSxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXHJcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjQ0NDJyxcclxuICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnQllDTElDSydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGl0bGU6IGl0ZW0ucHJvTmFtZSwgICAgICAgICAgICAgICAgICAgLy/moIfpophcclxuICAgICAgICAgICAgaW1nQXJyOiBpdGVtLnBpY3R1cmVGaWxlcywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Zu+54mH5pWw57uEXHJcbiAgICAgICAgICAgIHByb3ZpbmNlTmFtZTogaXRlbS5wcm92aW5jZU5hbWU/aXRlbS5wcm92aW5jZU5hbWU6JycsICAgICAvL+ecgVxyXG4gICAgICAgICAgICBjaXR5TmFtZTogaXRlbS5jaXR5TmFtZT9pdGVtLmNpdHlOYW1lOicnLCAgICAgICAgICAgICAgICAgLy/luIJcclxuICAgICAgICAgICAgZGlzdHJpY3ROYW1lOiBpdGVtLmRpc3RyaWN0TmFtZT9pdGVtLmRpc3RyaWN0TmFtZTonJywgICAgIC8v5Yy6XHJcbiAgICAgICAgICAgIGFkZHJlc3M6IGl0ZW0uYWRkcmVzcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6K+m57uG5Zyw5Z2AXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy/lpITnkIZJROS4uuaVsOWtl1xyXG4gICAgICAgIGxldCBsaXN0OmFueSAgPSByb25nemlOZWVkc0xpc3QuY29uY2F0KHJvbmd6aVByb3NMaXN0KTtcclxuICAgICAgICBsZXQgbmV3TWFya2Vyc0xpc3Q6YW55ID0gbGlzdC5tYXAoKGl0ZW06YW55LCBpbmRleDpudW1iZXIpOmFueT0+e1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGluZGV4LCAgICAgICAgICAgICAgICAgICAvL21hcOeUqOeahOiHquWumuS5iUlEXHJcbiAgICAgICAgICAgIG5hbWU6IGl0ZW0ubmFtZSwgICAgICAgICAgICAgLy/or6bmg4XliKTmlq1cclxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBpdGVtLmxvbmdpdHVkZSwgICAvL+e7j+W6plxyXG4gICAgICAgICAgICBsYXRpdHVkZTogaXRlbS5sYXRpdHVkZSwgICAgIC8v57qs5bqmXHJcbiAgICAgICAgICAgIGljb25QYXRoOiBpdGVtLmljb25QYXRoLCAgICAgLy/moIforrBcclxuICAgICAgICAgICAgd2lkdGg6IDI3LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1LFxyXG4gICAgICAgICAgICBjYWxsb3V0OiBpdGVtLmNhbGxvdXQsXHJcbiAgICAgICAgICAgIG9sZElkOiBpdGVtLmlkLCAgICAgICAgICAgICAgICAgICAgICAvL+WOn+Wni0lEXHJcbiAgICAgICAgICAgIHRpdGxlOiBpdGVtLnRpdGxlLCAgICAgICAgICAgICAgICAgICAvL+agh+mimFxyXG4gICAgICAgICAgICBpbWdBcnI6IGl0ZW0uaW1nQXJyLCAgICAgICAgICAgICAgICAgLy/lm77niYfmlbDnu4RcclxuICAgICAgICAgICAgcHJvdmluY2VOYW1lOiBpdGVtLnByb3ZpbmNlTmFtZSwgICAgIC8v55yBXHJcbiAgICAgICAgICAgIGNpdHlOYW1lOiBpdGVtLmNpdHlOYW1lLCAgICAgICAgICAgICAvL+W4glxyXG4gICAgICAgICAgICBkaXN0cmljdE5hbWU6IGl0ZW0uZGlzdHJpY3ROYW1lLCAgICAgLy/ljLpcclxuICAgICAgICAgICAgYWRkcmVzczogaXRlbS5hZGRyZXNzICAgICAgICAgICAgICAgIC8v6K+m57uG5Zyw5Z2AXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICBcclxuICAgICAgICBpZih0aGlzLmRhdGEudG90YWwgPT0gMCl7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBtYXJrZXJzOiBuZXdNYXJrZXJzTGlzdCwgICAgICAgICAgICAgICAvL+agh+iusFxyXG4gICAgICAgICAgICB0b3RhbDogcmVzLnZhbC50b3RhbCwgICAgICAgICAgICAgICAgICAvL+aAu+aVsFxyXG4gICAgICAgICAgICBtdW1MaXN0OiBuZXdNYXJrZXJzTGlzdCwgICAgICAgICAgICAgICAgLy/liJfooahcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBtYXJrZXJzOiB0aGlzLmRhdGEubWFya2Vycy5jb25jYXQobmV3TWFya2Vyc0xpc3QpLCAgICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIG11bUxpc3Q6IHRoaXMuZGF0YS5tdW1MaXN0LmNvbmNhdChuZXdNYXJrZXJzTGlzdCksICAgICAgICAgICAgICAgIC8v5YiX6KGoXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5kYXRhLm11bUxpc3QubGVuZ3RoIDwgcmVzLnZhbC50b3RhbCl7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBtb3JlU2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgbW9yZVRpdGxlOiAn54K55Ye75Yqg6L295pu05aSaJyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBtb3JlU2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgbW9yZVRpdGxlOiAn5bey5Yqg6L295YWo6YOoJyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICByekNhdGVnb3J5Rm4oZTphbnkpOnZvaWR7ICAgICAvL+iejei1hOaWueW8j+inpuWPkVxyXG4gICAgbGV0IGlkOmFueSA9IGUudGFyZ2V0LmRhdGFzZXQuaWQ7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICByekNhdGVnb3J5Q2xhc3M6IGlkLFxyXG4gICAgICByekNhdGVnb3J5SWQ6IGlkLCAgICAgICAgIC8v6ZyA5rGC57G75YirSURcclxuICAgIH0pXHJcbiAgfSxcclxuICByekZpbmFuY2luZ0ZuKGU6YW55KTp2b2lkeyAgICAgLy/ono3otYTph5Hpop3op6blj5FcclxuICAgIGxldCBpZDphbnkgPSBlLnRhcmdldC5kYXRhc2V0LmlkO1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgcnpGaW5hbmNpbmdDbGFzczogaWQsXHJcbiAgICAgIHJ6RmluYW5jaW5nSWQ6IGlkLCAgICAgICAgIC8v6J6N6LWE6YeR6aKdSURcclxuICAgIH0pXHJcbiAgfSxcclxuICByek5hdkl0ZW0oZGF0YTphbnkpOnZvaWR7ICAgICAgIC8v5om+6J6N6LWE6KGM5Lia5Lqn5Lia77yI5bem5L6n5a+86Iiq54K55Ye75pe277yM6Kem5Y+R55qE5LqL5Lu277yJXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICByekluZGV4OiBkYXRhLmRldGFpbC5pbmRleCB8fCAwLFxyXG4gICAgfSk7XHJcbiAgfSxcclxuICByekluZHVzdHJ5SXRlbShkYXRhOmFueSk6dm9pZCB7ICAvL+aJvuiejei1hOihjOS4muS6p+S4mu+8iOWPs+S+p+mAieaLqemhueiiq+eCueWHu+aXtu+8jOS8muinpuWPkeeahOS6i+S7tu+8iVxyXG4gICAgY29uc3QgaWQgPSB0aGlzLmRhdGEucnpJbmR1c3RyeUlkID09PSBkYXRhLmRldGFpbC5pZCA/IG51bGwgOiBkYXRhLmRldGFpbC5pZDtcclxuICAgIGNvbnN0IHBJZCA9IGRhdGEuZGV0YWlsLnBJZDtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHJ6SW5kdXN0cnlJZDogaWQsXHJcbiAgICAgIHJ6Q3lUeXBlSWQ6IHBJZCA/IHBJZCA6ICcnLCAgICAgICAgICAvL+S6p+S4mmlkXHJcbiAgICAgIHJ6SHlUeXBlSWQ6IGlkID09IHBJZCA/ICcnIDogaWQsICAgICAvL+ihjOS4mmlkXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgcnpSZXNldChlOmFueSk6dm9pZHsgIC8v5om+6J6N6LWE6YeN572uXHJcbiAgICBsZXQgZmxhZzpudW1iZXIgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5mbGFnO1xyXG4gICAgaWYoZmxhZyA9PSAxKXsgIC8v5om+6J6N6LWE6ZyA5rGC57G75YirXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgcnpDYXRlZ29yeUNsYXNzOiBudWxsLFxyXG4gICAgICAgIHJ6Q2F0ZWdvcnlJZDogJycsICAgICAgICAgICAvL+aJvuiejei1hOmcgOaxguexu+WIq0lEXHJcbiAgICAgICAgbnVtOiAwLCAgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgICAvLzbmib7liJfooahcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyNyekNhdGVnb3J5SWQnKS50b2dnbGUoZmFsc2UpOyAgICAgICAgIC8v5om+6J6N6LWE6ZyA5rGC57G75Yir5YWz6ZetXHJcbiAgICB9ZWxzZSBpZihmbGFnID09IDIpeyAgLy/ono3otYTph5Hpop3op6blj5FcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICByekZpbmFuY2luZ0NsYXNzOiBudWxsLFxyXG4gICAgICAgIHJ6RmluYW5jaW5nSWQ6ICcnLCAgICAgICAgICAgICAvL+aJvuiejei1hOiejei1hOmHkeminUlEXHJcbiAgICAgICAgbnVtOiAwLCAgICAgICAgICAgICAgICAgICAgLy825om+57uT5p6cXHJcbiAgICAgICAgbXVtTGlzdDogW10sICAgICAgICAgICAgICAgLy825om+5YiX6KGoXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjcnpTdGFnZUlkJykudG9nZ2xlKGZhbHNlKTsgICAgICAgIC8v5om+6J6N6LWE5omA5aSE6Zi25q615YWz6ZetXHJcbiAgICB9ZWxzZSBpZihmbGFnID09IDMpeyAgLy/kuqfkuJrooYzkuJpcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICByekluZGV4OiAwLCAgICAgICAgICAgICAgICAvL+W9k+WJjee0ouW8lVxyXG4gICAgICAgIHJ6SW5kdXN0cnlJZDogbnVsbCwgICAgICAgIC8v6YCJ5Lit55qEaWRcclxuICAgICAgICByekN5VHlwZUlkOiAnJywgICAgICAgICAgICAvL+S6p+S4mmlkXHJcbiAgICAgICAgcnpIeVR5cGVJZDogJycsICAgICAgICAgICAgLy/ooYzkuJppZFxyXG4gICAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgIC8vNuaJvuWIl+ihqFxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI3J6SW5kdXN0cnlJZCcpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAvL+S6p+S4muihjOS4muWFs+mXrVxyXG4gICAgfVxyXG4gICAgdGhpcy5nZXRSekxpc3QoKTsgICAgICAgICAgICAvL+aJvui1hOmHke+8iOiejei1hClcclxuICB9LFxyXG4gIHJ6U3VibWl0KGU6YW55KTp2b2lkeyAgLy/mib7ono3otYTlrozmiJBcclxuICAgIGxldCBmbGFnOm51bWJlciA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmZsYWc7XHJcbiAgICBpZihmbGFnID09IDEpe1xyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI3J6Q2F0ZWdvcnlJZCcpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAgLy/mib7ono3otYTpnIDmsYLnsbvliKvlhbPpl61cclxuICAgIH1lbHNlIGlmKGZsYWcgPT0gMil7XHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjcnpTdGFnZUlkJykudG9nZ2xlKGZhbHNlKTsgICAgICAgIC8v5om+6J6N6LWE5omA5aSE6Zi25q615YWz6ZetXHJcbiAgICB9ZWxzZSBpZihmbGFnID09IDMpe1xyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI3J6SW5kdXN0cnlJZCcpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAvL+S6p+S4muihjOS4muWFs+mXrVxyXG4gICAgfVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgbnVtOiAwLCAgICAgICAgICAgICAgICAgICAgLy825om+57uT5p6cXHJcbiAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgIC8vNuaJvuWIl+ihqFxyXG4gICAgICBtYXJrZXJzOltdLCAgICAgICAgICAgICAgIC8v5qCH6K6w54K55aSE55CG5ZCO55qE5pWw5o2u77yIaWTjgIHmn6Xor6Lkvb/nlKjvvIlcclxuICAgICAgcGFnZVNpemU6IDEwLCAgICAgICAgICAgICAvL+avj+mhteaYvuekuuaVsOmHj1xyXG4gICAgICBwYWdlSW5kZXg6IDEsICAgICAgICAgICAgIC8v5b2T5YmN6aG1XHJcbiAgICAgIHRvdGFsOiAwLCAgICAgICAgICAgICAgICAgLy/mgLvmnaHmlbBcclxuICAgIH0pXHJcbiAgICB0aGlzLmdldFJ6TGlzdCgpOyAgICAgICAgICAgIC8v5om+6LWE6YeR77yI6J6N6LWEKVxyXG4gIH0sXHJcblxyXG4gIFxyXG5cclxuICAvL+i3r+e6v+WvvOiIqlxyXG4gIG5hdmlnYXRpb24oZTphbnkpOnZvaWR7XHJcbiAgICBpZighIWUuY3VycmVudFRhcmdldC5kYXRhc2V0LmxvbmdpdHVkZSl7ICAvL+WkhOeQhjbmib7liJfooajlr7zoiKpcclxuICAgICAgbGV0IHRpdGxlOnN0cmluZyA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnRpdGxlO1xyXG4gICAgICBsZXQgbG9uZ2l0dWRlOmFueSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmxvbmdpdHVkZTtcclxuICAgICAgbGV0IGxhdGl0dWRlOmFueSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmxhdGl0dWRlO1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGdvTmFtZTogdGl0bGUsXHJcbiAgICAgICAgZ29Mb25naXR1ZGU6IGxvbmdpdHVkZSxcclxuICAgICAgICBnb0xhdGl0dWRlOiBsYXRpdHVkZVxyXG4gICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGVuZFBvaW50OmFueSA9IEpTT04uc3RyaW5naWZ5KHsgIC8v57uI54K5XHJcbiAgICAgICduYW1lJzogdGhpcy5kYXRhLmdvTmFtZSxcclxuICAgICAgJ2xvbmdpdHVkZSc6IHBhcnNlRmxvYXQodGhpcy5kYXRhLmdvTG9uZ2l0dWRlKSxcclxuICAgICAgJ2xhdGl0dWRlJzogcGFyc2VGbG9hdCh0aGlzLmRhdGEuZ29MYXRpdHVkZSlcclxuICAgIH0pO1xyXG5cclxuICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICB1cmw6ICdwbHVnaW46Ly9yb3V0ZVBsYW4vaW5kZXg/a2V5PScgKyBhcGkubWFwQXBpS2V5ICsgJyZyZWZlcmVyPeaJjei1i+S6kScgKyAnJmVuZFBvaW50PScgKyBlbmRQb2ludFxyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcblxyXG4gIC8v6YCJ5oup5biC5Yy6XHJcbiAgbWFwQXJlYSgpOnZvaWR7XHJcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgdXJsOlwiLi4vbWFwQXJlYS9tYXBBcmVhXCJcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcblxyXG4gIC8v5Zyw5Zu+6K+m5oOFXHJcbiAgbWFwRGV0YWlsKGU6YW55KTp2b2lkIHtcclxuICAgIGxldCBuYW1lOlN0cmluZyA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0Lm5hbWU7XHJcbiAgICBsZXQgaWQ6U3RyaW5nID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQ7XHJcblxyXG4gICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgIHVybDpcIi4uL21hcERldGFpbC9tYXBEZXRhaWw/bmFtZT1cIiArIG5hbWUgKyAnJmlkPScgKyBpZFxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuXHJcbiAgLy/ngrnlh7vmoIforrDngrnmsJTms6Hnqpflj6Pop6blj5FcclxuICBtYXJrRm4oZTphbnkpOnZvaWQge1xyXG4gICAgLy/mn6Xor6LljZXmnaHmlbDmja5cclxuICAgIGxldCBhcnI6YW55ID0gdGhpcy5kYXRhLm1hcmtlcnMuZmlsdGVyKChpdGVtOmFueSk6YW55PT57XHJcbiAgICAgIHJldHVybiBpdGVtLmlkID09IGUuZGV0YWlsLm1hcmtlcklkO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYoYXJyLmxlbmd0aCA+PSAxKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBnb05hbWU6IGFyclswXS5jYWxsb3V0LmNvbnRlbnQsICAgICAgICAgLy/opoHljrvnmoTlnLDlnYBcclxuICAgICAgICBnb0xvbmdpdHVkZTogYXJyWzBdLmxvbmdpdHVkZSwgICAgICAgICAgLy/kuK3lv4Pnu4/luqYo57uI54K5KVxyXG4gICAgICAgIGdvTGF0aXR1ZGU6IGFyclswXS5sYXRpdHVkZSwgICAgICAgICAgICAvL+S4reW/g+e6rOW6pijnu4jngrkpXHJcbiAgICAgICAgbWFya2Vyc09iajogYXJyWzBdLCAgICAgICAgICAgICAgICAgICAgIC8v5Y2V5p2h5YiX6KGo5pWw5o2uXHJcbiAgICAgICAgaXNMaXN0U2hvdzogZmFsc2UsICAgICAgICAgICAgICAgICAgICAgIC8v6buY6K6k5pi+56S6NuaJvuWGheWuuVxyXG4gICAgICAgIGlzSW5mb1Nob3c6IHRydWUsICAgICAgICAgICAgICAgICAgICAgICAvL+WNleadoeS/oeaBr+aYvuekulxyXG4gICAgICAgIGlzU2VhcmNoU2hvdzogZmFsc2UsICAgICAgICAgICAgICAgICAgICAvL+aQnOe0oue7k+aenOaVsOaNrlxyXG4gICAgICAgIGlzU2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgICAgICAgICAgICAgICAvL+aQnOe0ouWIl+ihqOaVsOaNrlxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG5cclxuICAvL+WFs+mXreWNleadoeS/oeaBr+Wbnum7mOiupFxyXG4gIGNsb3NlRm4oKTp2b2lke1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgaXNMaXN0U2hvdzogZmFsc2UsICAgICAgICAgICAgICAgICAgICAgICAvL+m7mOiupOaYvuekujbmib7lhoXlrrlcclxuICAgICAgaXNJbmZvU2hvdzogZmFsc2UsICAgICAgICAgICAgICAgICAgICAgIC8v5Y2V5p2h5L+h5oGv5pi+56S6XHJcbiAgICAgIGlzU2VhcmNoU2hvdzogdHJ1ZSwgICAgICAgICAgICAgICAgICAgIC8v5pCc57Si57uT5p6c5pWw5o2uXHJcbiAgICAgIGlzU2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgICAgICAgICAgICAgICAvL+aQnOe0ouWIl+ihqOaVsOaNrlxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuXHJcbiAgLy/pqozor4HnlKjmiLfnmbvlvZXnirbmgIFcclxuICB2ZXJpZmljYXRpb24oKTp2b2lke1xyXG4gICAgbGV0IHRva2VuOnN0cmluZyA9IHd4LmdldFN0b3JhZ2VTeW5jKCd0b2tlbicpO1xyXG4gICAgaWYoISF0b2tlbil7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgaW1nVXJsOiBhcGkuaW1nVXJsICsgJz90b2tlbj0nICsgdG9rZW4gKyAnJmZpbGVQYXRoPSdcclxuICAgICAgfSlcclxuICAgICAgLy/liIfmjaLljLrnmoTmk43kvZxcclxuICAgICAgaWYoYXBpLmFyZWFOYW1lKXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgcGFnZVNpemU6IDEwLCAgICAgICAgICAgICAgIC8v5q+P6aG15pi+56S65pWw6YePXHJcbiAgICAgICAgICBwYWdlSW5kZXg6IDEsICAgICAgICAgICAgICAgLy/lvZPliY3pobVcclxuICAgICAgICAgIHRvdGFsOiAwLCAgICAgICAgICAgICAgICAgICAvL+aAu+adoeaVsFxyXG4gICAgICAgICAgbWFya2VyczogW10sICAgICAgICAgICAgICAgIC8v5riF56m6XHJcblxyXG4gICAgICAgICAgYXJlYU5hbWU6IGFwaS5hcmVhTmFtZSxcclxuICAgICAgICAgIGFyZWFJZDogYXBpLmFyZWFJZCxcclxuICAgICAgICAgIGxvbmdpdHVkZTogYXBpLmxvbmdpdHVkZSwgICAgLy/kuK3lv4Pnu4/luqZcclxuICAgICAgICAgIGxhdGl0dWRlOiBhcGkubGF0aXR1ZGUgICAgICAgLy/kuK3lv4PnuqzluqZcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vdGhpcy5nZXRNYXJrKCk7ICAgICAgICAgICAgICAgLy/ojrflj5blnLDlm77moIfngrlcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgLy/nrKzkuIDmrKHov5vlhaXojrflj5blvZPliY3kvY3nva5cclxuICAgICAgICB3eC5nZXRMb2NhdGlvbih7XHJcbiAgICAgICAgICB0eXBlOiAnd2dzODQnLFxyXG4gICAgICAgICAgc3VjY2VzczoocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgIHBhZ2VTaXplOiAxMCwgICAgICAgICAgICAgICAvL+avj+mhteaYvuekuuaVsOmHj1xyXG4gICAgICAgICAgICAgIHBhZ2VJbmRleDogMSwgICAgICAgICAgICAgICAvL+W9k+WJjemhtVxyXG4gICAgICAgICAgICAgIHRvdGFsOiAwLCAgICAgICAgICAgICAgICAgICAvL+aAu+adoeaVsFxyXG4gICAgICAgICAgICAgIG1hcmtlcnM6IFtdLCAgICAgICAgICAgICAgICAvL+a4heepulxyXG5cclxuICAgICAgICAgICAgICBsb25naXR1ZGU6IHJlcy5sb25naXR1ZGUsICAgIC8v5Lit5b+D57uP5bqmXHJcbiAgICAgICAgICAgICAgbGF0aXR1ZGU6IHJlcy5sYXRpdHVkZSAgICAgICAvL+S4reW/g+e6rOW6piBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy5nZXRBcmVhTGlzdCgpOyAgICAgICAgICAgICAgIC8v6I635Y+W6Z2S5bKb5omA5pyJ5Yy6XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICBEaWFsb2cuYWxlcnQoe1xyXG4gICAgICAgIG1lc3NhZ2U6ICfnmbvlvZXlkI7miY3og73mn6XnnIvlnLDlm77vvIEnLFxyXG4gICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgIHVybDogJy4uL2xvZ2luRm9ybS9sb2dpbkZvcm0nXHJcbiAgICAgICAgfSlcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLy/ojrflj5blnLDlm77moIfngrlcclxuICBnZXRNYXJrKCk6dm9pZHtcclxuICAgIGh0dHBzLnN1Y2Nlc3NSZXF1ZXN0KGFwaS5hbGwse1xyXG4gICAgICB0ZW5hbnRJZDogYXBpLmFyZWFJZCwgICAgICAgICAgICAgICAgICAgICAvL+WMuklEXHJcbiAgICAgIHBhZ2VTaXplOiB0aGlzLmRhdGEucGFnZVNpemUsICAgICAgICAgICAgIC8v5q+P6aG15pi+56S65pWw6YePXHJcbiAgICAgIHBhZ2VJbmRleDogdGhpcy5kYXRhLnBhZ2VJbmRleCwgICAgICAgICAgIC8v6aG15pWwXHJcbiAgICB9LCAnR0VUJykudGhlbigocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICBpZihyZXMpe1xyXG4gICAgICAgIC8v5Yib5paw5bmz5Y+wXHJcbiAgICAgICAgbGV0IGN4UGxhdGZvcm1Nb2RlbHNMaXN0OmFueSA9IHJlcy52YWwuY3hQbGF0Zm9ybU1vZGVscy5tYXAoKGl0ZW06YW55KTphbnk9PntcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICBsb25naXR1ZGU6IGl0ZW0ubG5nLCAgIC8v57uP5bqmXHJcbiAgICAgICAgICAgIGxhdGl0dWRlOiBpdGVtLmxhdCwgICAgLy/nuqzluqZcclxuICAgICAgICAgICAgaWNvblBhdGg6ICcuLi8uLi9pbWFnZXMvY3gucG5nJywgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgd2lkdGg6IDI3LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1LFxyXG4gICAgICAgICAgICBjYWxsb3V0OiB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogaXRlbS5wdE5hbWUsXHJcbiAgICAgICAgICAgICAgY29sb3I6ICcjMDAwJyxcclxuICAgICAgICAgICAgICBmb250U2l6ZTogMTQsXHJcbiAgICAgICAgICAgICAgYmdDb2xvcjogJyNGRkYnLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDUsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI0NDQycsXHJcbiAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ0JZQ0xJQ0snXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHByb3ZpbmNlTmFtZTogaXRlbS5wcm92aW5jZU5hbWU/aXRlbS5wcm92aW5jZU5hbWU6JycsICAgICAvL+ecgVxyXG4gICAgICAgICAgICBjaXR5TmFtZTogaXRlbS5jaXR5TmFtZT9pdGVtLmNpdHlOYW1lOicnLCAgICAgICAgICAgICAgICAgLy/luIJcclxuICAgICAgICAgICAgZGlzdHJpY3ROYW1lOiBpdGVtLmRpc3RyaWN0TmFtZT9pdGVtLmRpc3RyaWN0TmFtZTonJyAgICAgIC8v5Yy6XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy/liJvkuJrlubPlj7BcclxuICAgICAgICBsZXQgY3lQbGF0Zm9ybU1vZGVsc0xpc3Q6YW55ID0gcmVzLnZhbC5jeVBsYXRmb3JtTW9kZWxzLm1hcCgoaXRlbTphbnkpOmFueT0+e1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZTogaXRlbS5sbmcsICAgLy/nu4/luqZcclxuICAgICAgICAgICAgbGF0aXR1ZGU6IGl0ZW0ubGF0LCAgICAvL+e6rOW6plxyXG4gICAgICAgICAgICBpY29uUGF0aDogJy4uLy4uL2ltYWdlcy9jeS5wbmcnLCAgICAgICAgICAgICAvL+agh+iusFxyXG4gICAgICAgICAgICB3aWR0aDogMjcsXHJcbiAgICAgICAgICAgIGhlaWdodDogMzUsXHJcbiAgICAgICAgICAgIGNhbGxvdXQ6IHtcclxuICAgICAgICAgICAgICBjb250ZW50OiBpdGVtLmN5TmFtZSxcclxuICAgICAgICAgICAgICBjb2xvcjogJyMwMDAnLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAxOCxcclxuICAgICAgICAgICAgICBiZ0NvbG9yOiAnI0ZGRicsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNSxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXHJcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjQ0NDJyxcclxuICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnQllDTElDSydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcHJvdmluY2VOYW1lOiBpdGVtLnByb3ZpbmNlTmFtZT9pdGVtLnByb3ZpbmNlTmFtZTonJywgICAgIC8v55yBXHJcbiAgICAgICAgICAgIGNpdHlOYW1lOiBpdGVtLmNpdHlOYW1lP2l0ZW0uY2l0eU5hbWU6JycsICAgICAgICAgICAgICAgICAvL+W4glxyXG4gICAgICAgICAgICBkaXN0cmljdE5hbWU6IGl0ZW0uZGlzdHJpY3ROYW1lP2l0ZW0uZGlzdHJpY3ROYW1lOicnICAgICAgLy/ljLpcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvL+aJvumhueebrlxyXG4gICAgICAgIGxldCBwcm9Nb2RlbHNMaXN0OmFueSA9IHJlcy52YWwucHJvTW9kZWxzLm1hcCgoaXRlbTphbnkpOmFueT0+e1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZTogaXRlbS5sbmcsICAgLy/nu4/luqZcclxuICAgICAgICAgICAgbGF0aXR1ZGU6IGl0ZW0ubGF0LCAgICAvL+e6rOW6plxyXG4gICAgICAgICAgICBpY29uUGF0aDogJy4uLy4uL2ltYWdlcy94bS5wbmcnLCAgICAgICAgICAgICAvL+agh+iusFxyXG4gICAgICAgICAgICB3aWR0aDogMjcsXHJcbiAgICAgICAgICAgIGhlaWdodDogMzUsXHJcbiAgICAgICAgICAgIGNhbGxvdXQ6IHtcclxuICAgICAgICAgICAgICBjb250ZW50OiBpdGVtLnByb05hbWUsXHJcbiAgICAgICAgICAgICAgY29sb3I6ICcjMDAwJyxcclxuICAgICAgICAgICAgICBmb250U2l6ZTogMTgsXHJcbiAgICAgICAgICAgICAgYmdDb2xvcjogJyNGRkYnLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDUsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI0NDQycsXHJcbiAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ0JZQ0xJQ0snXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHByb3ZpbmNlTmFtZTogaXRlbS5wcm92aW5jZU5hbWU/aXRlbS5wcm92aW5jZU5hbWU6JycsICAgICAvL+ecgVxyXG4gICAgICAgICAgICBjaXR5TmFtZTogaXRlbS5jaXR5TmFtZT9pdGVtLmNpdHlOYW1lOicnLCAgICAgICAgICAgICAgICAgLy/luIJcclxuICAgICAgICAgICAgZGlzdHJpY3ROYW1lOiBpdGVtLmRpc3RyaWN0TmFtZT9pdGVtLmRpc3RyaWN0TmFtZTonJyAgICAgIC8v5Yy6XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8v5om+5pyN5Yqh5py65p6EXHJcbiAgICAgICAgbGV0IGZ3amdNb2RlbHNMaXN0OmFueSA9IHJlcy52YWwuZndqZ01vZGVscy5tYXAoKGl0ZW06YW55KTphbnk9PntcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICBsb25naXR1ZGU6IGl0ZW0ubG5nLCAgIC8v57uP5bqmXHJcbiAgICAgICAgICAgIGxhdGl0dWRlOiBpdGVtLmxhdCwgICAgLy/nuqzluqZcclxuICAgICAgICAgICAgaWNvblBhdGg6ICcuLi8uLi9pbWFnZXMvZncucG5nJywgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgd2lkdGg6IDI3LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1LFxyXG4gICAgICAgICAgICBjYWxsb3V0OiB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogaXRlbS5xeU5hbWUgLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IDE4LFxyXG4gICAgICAgICAgICAgIGJnQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1LFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNDQ0MnLFxyXG4gICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdCWUNMSUNLJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwcm92aW5jZU5hbWU6IGl0ZW0ucHJvdmluY2VOYW1lP2l0ZW0ucHJvdmluY2VOYW1lOicnLCAgICAgLy/nnIFcclxuICAgICAgICAgICAgY2l0eU5hbWU6IGl0ZW0uY2l0eU5hbWU/aXRlbS5jaXR5TmFtZTonJywgICAgICAgICAgICAgICAgIC8v5biCXHJcbiAgICAgICAgICAgIGRpc3RyaWN0TmFtZTogaXRlbS5kaXN0cmljdE5hbWU/aXRlbS5kaXN0cmljdE5hbWU6JycgICAgICAvL+WMulxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8v5om+5Zy65ZywXHJcbiAgICAgICAgbGV0IHZlY3Rvck1vZGVsc0xpc3Q6YW55ID0gcmVzLnZhbC52ZWN0b3JNb2RlbHMubWFwKChpdGVtOmFueSk6YW55PT57XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBpdGVtLmxuZywgICAvL+e7j+W6plxyXG4gICAgICAgICAgICBsYXRpdHVkZTogaXRlbS5sYXQsICAgIC8v57qs5bqmXHJcbiAgICAgICAgICAgIGljb25QYXRoOiAnLi4vLi4vaW1hZ2VzL2NkLnBuZycsICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIHdpZHRoOiAyNyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNSxcclxuICAgICAgICAgICAgY2FsbG91dDoge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IGl0ZW0uY3l6dE5hbWUgICxcclxuICAgICAgICAgICAgICBjb2xvcjogJyMwMDAnLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAxOCxcclxuICAgICAgICAgICAgICBiZ0NvbG9yOiAnI0ZGRicsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNSxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXHJcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjQ0NDJyxcclxuICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnQllDTElDSydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcHJvdmluY2VOYW1lOiBpdGVtLnByb3ZpbmNlTmFtZT9pdGVtLnByb3ZpbmNlTmFtZTonJywgICAgIC8v55yBXHJcbiAgICAgICAgICAgIGNpdHlOYW1lOiBpdGVtLmNpdHlOYW1lP2l0ZW0uY2l0eU5hbWU6JycsICAgICAgICAgICAgICAgICAvL+W4glxyXG4gICAgICAgICAgICBkaXN0cmljdE5hbWU6IGl0ZW0uZGlzdHJpY3ROYW1lP2l0ZW0uZGlzdHJpY3ROYW1lOicnICAgICAgLy/ljLpcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvL+aJvumHkeiejeacuuaehFxyXG4gICAgICAgIGxldCBqcmpnTWRvZWxzTGlzdDphbnkgPSByZXMudmFsLmpyamdNZG9lbHMubWFwKChpdGVtOmFueSk6YW55PT57XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBpdGVtLmxuZywgICAvL+e7j+W6plxyXG4gICAgICAgICAgICBsYXRpdHVkZTogaXRlbS5sYXQsICAgIC8v57qs5bqmXHJcbiAgICAgICAgICAgIGljb25QYXRoOiAnLi4vLi4vaW1hZ2VzL3pqLnBuZycsICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIHdpZHRoOiAyNyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNSxcclxuICAgICAgICAgICAgY2FsbG91dDoge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IGl0ZW0ucXlOYW1lLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IDE4LFxyXG4gICAgICAgICAgICAgIGJnQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1LFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNDQ0MnLFxyXG4gICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdCWUNMSUNLJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwcm92aW5jZU5hbWU6IGl0ZW0ucHJvdmluY2VOYW1lP2l0ZW0ucHJvdmluY2VOYW1lOicnLCAgICAgLy/nnIFcclxuICAgICAgICAgICAgY2l0eU5hbWU6IGl0ZW0uY2l0eU5hbWU/aXRlbS5jaXR5TmFtZTonJywgICAgICAgICAgICAgICAgIC8v5biCXHJcbiAgICAgICAgICAgIGRpc3RyaWN0TmFtZTogaXRlbS5kaXN0cmljdE5hbWU/aXRlbS5kaXN0cmljdE5hbWU6JycgICAgICAvL+WMulxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8v5om+5oqV6LWE6ZyA5rGCXHJcbiAgICAgICAgbGV0IHR6TW9kZWxzTGlzdDphbnkgPSByZXMudmFsLnR6TW9kZWxzLm1hcCgoaXRlbTphbnkpOmFueT0+e1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZTogaXRlbS5sbmcsICAgLy/nu4/luqZcclxuICAgICAgICAgICAgbGF0aXR1ZGU6IGl0ZW0ubGF0LCAgICAvL+e6rOW6plxyXG4gICAgICAgICAgICBpY29uUGF0aDogJy4uLy4uL2ltYWdlcy90ei5wbmcnLCAgICAgICAgICAgICAvL+agh+iusFxyXG4gICAgICAgICAgICB3aWR0aDogMjcsXHJcbiAgICAgICAgICAgIGhlaWdodDogMzUsXHJcbiAgICAgICAgICAgIGNhbGxvdXQ6IHtcclxuICAgICAgICAgICAgICBjb250ZW50OiBpdGVtLm5lZWROYW1lICAgLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IDE4LFxyXG4gICAgICAgICAgICAgIGJnQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1LFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNDQ0MnLFxyXG4gICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdCWUNMSUNLJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwcm92aW5jZU5hbWU6IGl0ZW0ucHJvdmluY2VOYW1lP2l0ZW0ucHJvdmluY2VOYW1lOicnLCAgICAgLy/nnIFcclxuICAgICAgICAgICAgY2l0eU5hbWU6IGl0ZW0uY2l0eU5hbWU/aXRlbS5jaXR5TmFtZTonJywgICAgICAgICAgICAgICAgIC8v5biCXHJcbiAgICAgICAgICAgIGRpc3RyaWN0TmFtZTogaXRlbS5kaXN0cmljdE5hbWU/aXRlbS5kaXN0cmljdE5hbWU6JycgICAgICAvL+WMulxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8v5om+6J6N6LWE6ZyA5rGC77yI6aG555uu5bqT55qE6J6N6LWEN+mhue+8iVxyXG4gICAgICAgIGxldCByb25nemlQcm9zTGlzdDphbnkgPSByZXMudmFsLnJvbmd6aVByb3MubWFwKChpdGVtOmFueSk6YW55PT57XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBpdGVtLmxuZywgICAvL+e7j+W6plxyXG4gICAgICAgICAgICBsYXRpdHVkZTogaXRlbS5sYXQsICAgIC8v57qs5bqmXHJcbiAgICAgICAgICAgIGljb25QYXRoOiAnLi4vLi4vaW1hZ2VzL3J6LnBuZycsICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIHdpZHRoOiAyNyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNSxcclxuICAgICAgICAgICAgY2FsbG91dDoge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IGl0ZW0ucHJvTmFtZSAsXHJcbiAgICAgICAgICAgICAgY29sb3I6ICcjMDAwJyxcclxuICAgICAgICAgICAgICBmb250U2l6ZTogMTgsXHJcbiAgICAgICAgICAgICAgYmdDb2xvcjogJyNGRkYnLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDUsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI0NDQycsXHJcbiAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ0JZQ0xJQ0snXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHByb3ZpbmNlTmFtZTogaXRlbS5wcm92aW5jZU5hbWU/aXRlbS5wcm92aW5jZU5hbWU6JycsICAgICAvL+ecgVxyXG4gICAgICAgICAgICBjaXR5TmFtZTogaXRlbS5jaXR5TmFtZT9pdGVtLmNpdHlOYW1lOicnLCAgICAgICAgICAgICAgICAgLy/luIJcclxuICAgICAgICAgICAgZGlzdHJpY3ROYW1lOiBpdGVtLmRpc3RyaWN0TmFtZT9pdGVtLmRpc3RyaWN0TmFtZTonJyAgICAgIC8v5Yy6XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy/mib7ono3otYTpnIDmsYLvvIjpnIDmsYLlupPnmoTono3otYQ36aG577yJXHJcbiAgICAgICAgbGV0IHJvbmd6aU5lZWRzTGlzdDphbnkgPSByZXMudmFsLnJvbmd6aU5lZWRzLm1hcCgoaXRlbTphbnkpOmFueT0+e1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZTogaXRlbS5sbmcsICAgLy/nu4/luqZcclxuICAgICAgICAgICAgbGF0aXR1ZGU6IGl0ZW0ubGF0LCAgICAvL+e6rOW6plxyXG4gICAgICAgICAgICBpY29uUGF0aDogJy4uLy4uL2ltYWdlcy9yei5wbmcnLCAgICAgICAgICAgICAvL+agh+iusFxyXG4gICAgICAgICAgICB3aWR0aDogMjcsXHJcbiAgICAgICAgICAgIGhlaWdodDogMzUsXHJcbiAgICAgICAgICAgIGNhbGxvdXQ6IHtcclxuICAgICAgICAgICAgICBjb250ZW50OiBpdGVtLm5lZWROYW1lLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IDE4LFxyXG4gICAgICAgICAgICAgIGJnQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1LFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNDQ0MnLFxyXG4gICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdCWUNMSUNLJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwcm92aW5jZU5hbWU6IGl0ZW0ucHJvdmluY2VOYW1lP2l0ZW0ucHJvdmluY2VOYW1lOicnLCAgICAgLy/nnIFcclxuICAgICAgICAgICAgY2l0eU5hbWU6IGl0ZW0uY2l0eU5hbWU/aXRlbS5jaXR5TmFtZTonJywgICAgICAgICAgICAgICAgIC8v5biCXHJcbiAgICAgICAgICAgIGRpc3RyaWN0TmFtZTogaXRlbS5kaXN0cmljdE5hbWU/aXRlbS5kaXN0cmljdE5hbWU6JycgICAgICAvL+WMulxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8v5aSE55CGSUTkuLrmlbDlrZdcclxuICAgICAgICBsZXQgbWFya2Vyc0xpc3Q6YW55ICA9IHRoaXMuZGF0YS5tYXJrZXJzLmNvbmNhdChjeFBsYXRmb3JtTW9kZWxzTGlzdCxjeVBsYXRmb3JtTW9kZWxzTGlzdCxwcm9Nb2RlbHNMaXN0LGZ3amdNb2RlbHNMaXN0LHZlY3Rvck1vZGVsc0xpc3QsanJqZ01kb2Vsc0xpc3QsdHpNb2RlbHNMaXN0LHJvbmd6aVByb3NMaXN0LHJvbmd6aU5lZWRzTGlzdCk7XHJcbiAgICAgICAgbGV0IG5ld01hcmtlcnNMaXN0OmFueSA9IG1hcmtlcnNMaXN0Lm1hcCgoaXRlbTphbnksIGluZGV4Om51bWJlcik6YW55PT57XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogaW5kZXgsICAgICAgICAgICAgICAgICAgIC8vbWFw55So55qE6Ieq5a6a5LmJSURcclxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBpdGVtLmxvbmdpdHVkZSwgICAvL+e7j+W6plxyXG4gICAgICAgICAgICBsYXRpdHVkZTogaXRlbS5sYXRpdHVkZSwgICAgIC8v57qs5bqmXHJcbiAgICAgICAgICAgIGljb25QYXRoOiBpdGVtLmljb25QYXRoLCAgICAgLy/moIforrBcclxuICAgICAgICAgICAgd2lkdGg6IDI3LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1LFxyXG4gICAgICAgICAgICBjYWxsb3V0OiBpdGVtLmNhbGxvdXQsXHJcbiAgICAgICAgICAgIG9sZElkOiBpdGVtLmlkLCAgICAgICAgICAgICAgICAgICAgICAvL+WOn+Wni0lEXHJcbiAgICAgICAgICAgIHRpdGxlOiBpdGVtLmNhbGxvdXQuY29udGVudCwgICAgICAgICAvL+agh+mimFxyXG4gICAgICAgICAgICBwcm92aW5jZU5hbWU6IGl0ZW0ucHJvdmluY2VOYW1lLCAgICAgLy/nnIFcclxuICAgICAgICAgICAgY2l0eU5hbWU6IGl0ZW0uY2l0eU5hbWUsICAgICAgICAgICAgIC8v5biCXHJcbiAgICAgICAgICAgIGRpc3RyaWN0TmFtZTogaXRlbS5kaXN0cmljdE5hbWUgICAgICAvL+WMulxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmKHRoaXMuZGF0YS50b3RhbCA9PSAwKXtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIG1hcmtlcnM6IG5ld01hcmtlcnNMaXN0LFxyXG4gICAgICAgICAgICB0b3RhbDogcmVzLnZhbC50b3RhbCAgICAgICAgIC8v5oC75pWwXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgbWFya2VyczogbmV3TWFya2Vyc0xpc3RcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgLy/ojrflj5bluILljLpcclxuICBnZXRBcmVhTGlzdCgpOnZvaWR7XHJcbiAgICBodHRwcy5zdWNjZXNzUmVxdWVzdChhcGkudGVuYW50cywgbnVsbCwgJ0dFVCcpLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgaWYocmVzKXtcclxuICAgICAgICBsZXQgbGlzdDphbnkgPSByZXMubGlzdC5tYXAoKGl0ZW06YW55KTphbnk9PntcclxuICAgICAgICAgIGlmKGl0ZW0ubW9kZWwuY25hbWUgPT0gJ+ilv+a1t+WyuOaWsOWMuicpe1xyXG4gICAgICAgICAgICBpdGVtLm1vZGVsLmNuYW1lID0gJ+m7hOWym+WMuic7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogaXRlbS5tb2RlbC5pZCxcclxuICAgICAgICAgICAgdGl0bGU6IGl0ZW0ubW9kZWwuY25hbWVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGxldCBuZXdMaXN0OmFueSA9IFtdO1xyXG4gICAgICAgIGxpc3QuZm9yRWFjaCgoaXRlbTphbnkpOnZvaWQ9PntcclxuICAgICAgICAgIGlmKGl0ZW0udGl0bGUgPT0gJ+adjuayp+WMuicpe1xyXG4gICAgICAgICAgICBuZXdMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiBpdGVtLnRpdGxlLFxyXG4gICAgICAgICAgICAgIGxvbmdpdHVkZTogJzEyMC40Mzk2MDEnLCAgICAgIC8v5Lit5b+D57uP5bqmXHJcbiAgICAgICAgICAgICAgbGF0aXR1ZGU6ICczNi4xNTE1ODYnLCAgICAgICAgLy/kuK3lv4PnuqzluqZcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmKGl0ZW0udGl0bGUgPT0gJ+W4guWMl+WMuicpe1xyXG4gICAgICAgICAgICBuZXdMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiBpdGVtLnRpdGxlLFxyXG4gICAgICAgICAgICAgIGxvbmdpdHVkZTogJzEyMC4zODAzODUnLCAgICAgICAgICAvL+S4reW/g+e7j+W6plxyXG4gICAgICAgICAgICAgIGxhdGl0dWRlOiAnMzYuMDkzNTEyJywgICAgICAgICAgICAvL+S4reW/g+e6rOW6plxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYoaXRlbS50aXRsZSA9PSAn6buE5bKb5Yy6Jyl7XHJcbiAgICAgICAgICAgIG5ld0xpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXHJcbiAgICAgICAgICAgICAgbG9uZ2l0dWRlOiAnMTIwLjIwNDQ2JywgICAgICAgICAgLy/kuK3lv4Pnu4/luqZcclxuICAgICAgICAgICAgICBsYXRpdHVkZTogJzM1Ljk2NjI1MScsICAgICAgICAgICAvL+S4reW/g+e6rOW6plxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYoaXRlbS50aXRsZSA9PSAn5biC5Y2X5Yy6Jyl7XHJcbiAgICAgICAgICAgIG5ld0xpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXHJcbiAgICAgICAgICAgICAgbG9uZ2l0dWRlOiAnMTIwLjQxOTQ4NycsICAgICAgICAgLy/kuK3lv4Pnu4/luqZcclxuICAgICAgICAgICAgICBsYXRpdHVkZTogJzM2LjA4MDkyNCcsICAgICAgICAgICAvL+S4reW/g+e6rOW6plxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYoaXRlbS50aXRsZSA9PSAn5bSC5bGx5Yy6Jyl7XHJcbiAgICAgICAgICAgIG5ld0xpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXHJcbiAgICAgICAgICAgICAgbG9uZ2l0dWRlOiAnMTIwLjQ3NTUzMycsICAgICAgICAgLy/kuK3lv4Pnu4/luqZcclxuICAgICAgICAgICAgICBsYXRpdHVkZTogJzM2LjExMzU3NScsICAgICAgICAgICAvL+S4reW/g+e6rOW6plxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYoaXRlbS50aXRsZSA9PSAn5Z+O6Ziz5Yy6Jyl7XHJcbiAgICAgICAgICAgIG5ld0xpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXHJcbiAgICAgICAgICAgICAgbG9uZ2l0dWRlOiAnMTIwLjQwMzA5NCcsICAgICAgICAgLy/kuK3lv4Pnu4/luqZcclxuICAgICAgICAgICAgICBsYXRpdHVkZTogJzM2LjMxMjk4NScsICAgICAgICAgICAvL+S4reW/g+e6rOW6plxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYoaXRlbS50aXRsZSA9PSAn5Y2z5aKo5Yy6Jyl7XHJcbiAgICAgICAgICAgIG5ld0xpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXHJcbiAgICAgICAgICAgICAgbG9uZ2l0dWRlOiAnMTIwLjQ1Mzk3NCcsICAgICAgICAgLy/kuK3lv4Pnu4/luqZcclxuICAgICAgICAgICAgICBsYXRpdHVkZTogJzM2LjM5NTUzNCcsICAgICAgICAgICAvL+S4reW/g+e6rOW6plxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYoaXRlbS50aXRsZSA9PSAn6IO25bee5biCJyl7XHJcbiAgICAgICAgICAgIG5ld0xpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXHJcbiAgICAgICAgICAgICAgbG9uZ2l0dWRlOiAnMTIwLjAzOTE3MicsICAgICAgICAgIC8v5Lit5b+D57uP5bqmXHJcbiAgICAgICAgICAgICAgbGF0aXR1ZGU6ICczNi4yNzA4NjMnLCAgICAgICAgICAgIC8v5Lit5b+D57qs5bqmXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZihpdGVtLnRpdGxlID09ICflubPluqbluIInKXtcclxuICAgICAgICAgICAgbmV3TGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgICB0aXRsZTogaXRlbS50aXRsZSxcclxuICAgICAgICAgICAgICBsb25naXR1ZGU6ICcxMTkuOTkzNzU0JywgICAgICAgICAgLy/kuK3lv4Pnu4/luqZcclxuICAgICAgICAgICAgICBsYXRpdHVkZTogJzM2Ljc4MjkwOCcsICAgICAgICAgICAvL+S4reW/g+e6rOW6plxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYoaXRlbS50aXRsZSA9PSAn6I6x6KW/5biCJyl7XHJcbiAgICAgICAgICAgIG5ld0xpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXHJcbiAgICAgICAgICAgICAgbG9uZ2l0dWRlOiAnMTIwLjUyNjEyNicsICAgICAgICAgIC8v5Lit5b+D57uP5bqmXHJcbiAgICAgICAgICAgICAgbGF0aXR1ZGU6ICczNi44OTQ3NDMnLCAgICAgICAgICAgLy/kuK3lv4PnuqzluqZcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmKGl0ZW0udGl0bGUgPT0gJ+mrmOaWsOWMuicpe1xyXG4gICAgICAgICAgICBuZXdMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiBpdGVtLnRpdGxlLFxyXG4gICAgICAgICAgICAgIGxvbmdpdHVkZTogJzEyMC4yODQ0NzYnLCAgICAgICAgICAvL+S4reW/g+e7j+W6plxyXG4gICAgICAgICAgICAgIGxhdGl0dWRlOiAnMzYuMjcyMzY3JywgICAgICAgICAgIC8v5Lit5b+D57qs5bqmXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZihpdGVtLnRpdGxlID09ICfpnZLlspvok53osLcnKXtcclxuICAgICAgICAgICAgbmV3TGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgICB0aXRsZTogaXRlbS50aXRsZSxcclxuICAgICAgICAgICAgICBsb25naXR1ZGU6ICcxMjAuNjgzNDQ1JywgICAgICAgICAgLy/kuK3lv4Pnu4/luqZcclxuICAgICAgICAgICAgICBsYXRpdHVkZTogJzM2LjM1MzQxMScsICAgICAgICAgICAvL+S4reW/g+e6rOW6plxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIGFyZWFMaXN0OiBuZXdMaXN0XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmdldEFyZWEoKTsgICAgICAgICAvL+iOt+WPluW9k+WJjeS9jee9ruaJgOWcqOWMulxyXG4gICAgICB9XHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgZ2V0QXJlYSgpOnZvaWR7ICAvL+iOt+WPluW9k+WJjeS9jee9ruaJgOWcqOWMulxyXG4gICAgXHJcbiAgICBsZXQgcXFtYXBzZGs6YW55ID0gbmV3IFFRTWFwV1goe1xyXG4gICAgICBrZXk6IGFwaS5tYXBBcGlLZXlcclxuICAgIH0pXHJcbiAgICB3eC5nZXRMb2NhdGlvbih7XHJcbiAgICAgIHR5cGU6ICd3Z3M4NCcsXHJcbiAgICAgIHN1Y2Nlc3M6KCk6dm9pZD0+e1xyXG4gICAgICAgIHFxbWFwc2RrLnJldmVyc2VHZW9jb2Rlcih7XHJcbiAgICAgICAgICBsb2NhdGlvbjogdGhpcy5kYXRhLmxhdGl0dWRlICsgJywnICsgdGhpcy5kYXRhLmxvbmdpdHVkZSxcclxuICAgICAgICAgIHN1Y2Nlc3M6KHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgICAgICAgbGV0IGFyZWFOYW1lOnN0cmluZyA9IHJlcy5yZXN1bHQuYWRkcmVzc19jb21wb25lbnQuZGlzdHJpY3Q7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5hcmVhTGlzdC5mb3JFYWNoKChpdGVtOmFueSk9PntcclxuICAgICAgICAgICAgICBpZihpdGVtLnRpdGxlID09IGFyZWFOYW1lKXtcclxuICAgICAgICAgICAgICAgIC8v5YWo5bGA5Y+Y6YePXHJcbiAgICAgICAgICAgICAgICBhcGkuYXJlYU5hbWUgPSBhcmVhTmFtZTsgICAvL+WMuuWQjVxyXG4gICAgICAgICAgICAgICAgYXBpLmFyZWFJZCA9IGl0ZW0uaWQ7ICAgICAgLy/ljLpJRFxyXG4gICAgICAgICAgICAgICAgYXBpLmxvbmdpdHVkZSA9IGl0ZW0ubG9uZ2l0dWRlLCAgICAvL+S4reW/g+e7j+W6plxyXG4gICAgICAgICAgICAgICAgYXBpLmxhdGl0dWRlID0gaXRlbS5sYXRpdHVkZSAgICAgICAvL+S4reW/g+e6rOW6plxyXG4gICAgICAgICAgICAgICAgLy/lvZPliY3pobXlj5jph4/vvIjliIfmjaLlnLDlm77mmL7npLrljLrln5/vvIlcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgIGFyZWFOYW1lOiBhcGkuYXJlYU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgIGFyZWFJZDogYXBpLmFyZWFJZCxcclxuICAgICAgICAgICAgICAgICAgbG9uZ2l0dWRlOiBhcGkubG9uZ2l0dWRlLCAgICAvL+S4reW/g+e7j+W6plxyXG4gICAgICAgICAgICAgICAgICBsYXRpdHVkZTogYXBpLmxhdGl0dWRlICAgICAgIC8v5Lit5b+D57qs5bqmXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmKGFwaS5pbmRleEZsYWcgPT0gJ3B0Jyl7ICAgICAgICAgLy/pppbpobXmib7lubPlj7Dov5vlhaVcclxuICAgICAgICAgICAgICAgICAgdGhpcy5wdEZuKCk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihhcGkuaW5kZXhGbGFnID09ICd4bScpeyAgIC8v6aaW6aG15om+5pS/562W6L+b5YWlXHJcbiAgICAgICAgICAgICAgICAgIHRoaXMueG1GbigpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYoYXBpLmluZGV4RmxhZyA9PSAnemonKXsgICAvL+mmlumhteaJvui1hOmHkei/m+WFpVxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnpqRm4oKTtcclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKGFwaS5pbmRleEZsYWcgPT0gJ2NkJyl7ICAgLy/pppbpobXmib7lnLrlnLDov5vlhaVcclxuICAgICAgICAgICAgICAgICAgdGhpcy5jZEZuKCk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihhcGkuaW5kZXhGbGFnID09ICdmdycpeyAgIC8v6aaW6aG15om+5pyN5Yqh6L+b5YWlXHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuZndGbigpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7ICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAvL3RoaXMuZ2V0TWFyaygpOyAgLy/ojrflj5blnLDlm77moIfngrlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIFxyXG4gIH0sXHJcblxyXG4gIG1vcmVGbigpOnZvaWR7ICAgLy/liqDovb3mm7TlpJpcclxuICAgIGlmKHRoaXMuZGF0YS5mbGFnID09ICdhbGxQdCcpeyAgLy/lubPlj7Dlhajpg6hcclxuICAgICAgaWYodGhpcy5kYXRhLm11bUxpc3QubGVuZ3RoIDwgdGhpcy5kYXRhLnRvdGFsKXtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIHBhZ2VJbmRleDogdGhpcy5kYXRhLnBhZ2VJbmRleCArPSAxLCAgICAgICAgICAgICAvL+W9k+WJjemhtVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHRoaXMuZ2V0QWxsUHJvKCk7ICAgXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmKHRoaXMuZGF0YS5mbGFnID09ICdjeFB0Jyl7ICAvL+WIm+aWsOW5s+WPsFxyXG4gICAgICBpZih0aGlzLmRhdGEubXVtTGlzdC5sZW5ndGggPCB0aGlzLmRhdGEudG90YWwpe1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBwYWdlSW5kZXg6IHRoaXMuZGF0YS5wYWdlSW5kZXggKz0gMSwgICAgICAgICAgICAgLy/lvZPliY3pobVcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuZ2V0Q3hQcm8oKTsgICBcclxuICAgICAgfSAgICBcclxuICAgIH1cclxuICAgIGlmKHRoaXMuZGF0YS5mbGFnID09ICdjeVB0Jyl7ICAvL+WIm+S4muW5s+WPsFxyXG4gICAgICBpZih0aGlzLmRhdGEubXVtTGlzdC5sZW5ndGggPCB0aGlzLmRhdGEudG90YWwpe1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBwYWdlSW5kZXg6IHRoaXMuZGF0YS5wYWdlSW5kZXggKz0gMSwgICAgICAgICAgICAgLy/lvZPliY3pobVcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuZ2V0Q3lQcm8oKTsgICBcclxuICAgICAgfSAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaWYodGhpcy5kYXRhLmZsYWcgPT0gJ3htJyl7ICAvL+aJvumhueebrlxyXG4gICAgICBpZih0aGlzLmRhdGEubXVtTGlzdC5sZW5ndGggPCB0aGlzLmRhdGEudG90YWwpe1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBwYWdlSW5kZXg6IHRoaXMuZGF0YS5wYWdlSW5kZXggKz0gMSwgICAgICAgICAgICAgLy/lvZPliY3pobVcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuZ2V0UHJvTGlzdCgpOyAgIFxyXG4gICAgICB9ICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpZih0aGlzLmRhdGEuZmxhZyA9PSAnemonKXsgIC8v5om+6LWE6YeRXHJcbiAgICAgIGlmKHRoaXMuZGF0YS5tdW1MaXN0Lmxlbmd0aCA8IHRoaXMuZGF0YS50b3RhbCl7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIHBhZ2VJbmRleDogdGhpcy5kYXRhLnBhZ2VJbmRleCArPSAxLCAgICAgICAgICAgICAvL+W9k+WJjemhtVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5nZXRBbGxGdW5kc0xpc3QoKTtcclxuICAgICAgfSAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaWYodGhpcy5kYXRhLmZsYWcgPT0gJ2pyJyl7ICAvL+aJvui1hOmHke+8iOmHkeieje+8iVxyXG4gICAgICBpZih0aGlzLmRhdGEubXVtTGlzdC5sZW5ndGggPCB0aGlzLmRhdGEudG90YWwpe1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBwYWdlSW5kZXg6IHRoaXMuZGF0YS5wYWdlSW5kZXggKz0gMSwgICAgICAgICAgICAgLy/lvZPliY3pobVcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuZ2V0SnJMaXN0KCk7XHJcbiAgICAgIH0gICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGlmKHRoaXMuZGF0YS5mbGFnID09ICd0eicpeyAgLy/mib7otYTph5HvvIjmipXotYTvvIlcclxuICAgICAgaWYodGhpcy5kYXRhLm11bUxpc3QubGVuZ3RoIDwgdGhpcy5kYXRhLnRvdGFsKXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgcGFnZUluZGV4OiB0aGlzLmRhdGEucGFnZUluZGV4ICs9IDEsICAgICAgICAgICAgIC8v5b2T5YmN6aG1XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmdldFR6TGlzdCgpO1xyXG4gICAgICB9ICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpZih0aGlzLmRhdGEuZmxhZyA9PSAncnonKXsgIC8v5om+6LWE6YeR77yI6J6N6LWE77yJXHJcbiAgICAgIGlmKHRoaXMuZGF0YS5tdW1MaXN0Lmxlbmd0aCA8IHRoaXMuZGF0YS50b3RhbCl7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIHBhZ2VJbmRleDogdGhpcy5kYXRhLnBhZ2VJbmRleCArPSAxLCAgICAgICAgICAgICAvL+W9k+WJjemhtVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5nZXRSekxpc3QoKTtcclxuICAgICAgfSAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaWYodGhpcy5kYXRhLmZsYWcgPT0gJ2NkJyl7ICAvL+aJvuWcuuWcsFxyXG4gICAgICBpZih0aGlzLmRhdGEubXVtTGlzdC5sZW5ndGggPCB0aGlzLmRhdGEudG90YWwpe1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBwYWdlSW5kZXg6IHRoaXMuZGF0YS5wYWdlSW5kZXggKz0gMSwgICAgICAgICAgICAgLy/lvZPliY3pobVcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuZ2V0U2l0ZUxpc3QoKTtcclxuICAgICAgfSAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaWYodGhpcy5kYXRhLmZsYWcgPT0gJ2Z3Jyl7ICAvL+aJvuacjeWKoVxyXG4gICAgICBpZih0aGlzLmRhdGEubXVtTGlzdC5sZW5ndGggPCB0aGlzLmRhdGEudG90YWwpe1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBwYWdlSW5kZXg6IHRoaXMuZGF0YS5wYWdlSW5kZXggKz0gMSwgICAgICAgICAgICAgLy/lvZPliY3pobVcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuZ2V0U2VydmljZUxpc3QoKTtcclxuICAgICAgfSAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICB9LFxyXG5cclxuXHJcbiAgLy/pobXpnaLliJ3lp4vljJZcclxuICBvbkxvYWQoKXtcclxuICAgIC8v6aG16Z2i5qCH6aKYXHJcbiAgICB3eC5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoeyAgICAgXHJcbiAgICAgIHRpdGxlOiBcIumdkuWym+S6uuaJjeWIm+aWsOWIm+S4muW5s+WPsOWcsOWbvlwiXHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICAvL+mhtemdouaYvuekulxyXG4gIG9uU2hvdygpe1xyXG4gICAgdGhpcy52ZXJpZmljYXRpb24oKTsgIC8v6aqM6K+B55So5oi355m75b2V54q25oCBXHJcbiAgfSxcclxuXHJcbiAgLy/pobXpnaLmuLLmn5PlrozmiJBcclxuICBvblJlYWR5KCl7fSxcclxuXHJcbiAgLy/pobXpnaLpmpDol49cclxuICBvbkhpZGUoKXtcclxuICAgIGFwaS5pbmRleEZsYWcgPSAnJzsgICAgIC8v6aaW6aG1NuaJvuWIpOaWrVxyXG5cclxuICAgIGFwaS5hcmVhTmFtZSA9ICcnOyAgICAgIC8v5riF56m65YWo5bGA5L2N572u5ZCN56ewXHJcbiAgICBhcGkuYXJlYUlkID0gJyc7ICAgICAgICAvL+a4heepuuWFqOWxgOS9jee9rklEXHJcbiAgICBhcGkubG9uZ2l0dWRlID0gJyc7ICAgICAvL+S4reW/g+e7j+W6plxyXG4gICAgYXBpLmxhdGl0dWRlID0gJyc7ICAgICAgLy/kuK3lv4PnuqzluqZcclxuXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBpc0xpc3RTaG93OiB0cnVlLCAgICAgICAgICAvL+m7mOiupOaYvuekujbmib7lhoXlrrlcclxuICAgICAgaXNJbmZvU2hvdzogZmFsc2UsICAgICAgICAgLy/ljZXmnaHkv6Hmga/mmL7npLpcclxuICAgICAgaXNTZWFyY2hTaG93OiBmYWxzZSwgICAgICAgLy/mkJzntKLnu5PmnpzmlbDmja5cclxuICAgICAgaXNTZWFyY2hJbmZvU2hvdzogZmFsc2UsICAgLy/mkJzntKLliJfooajmlbDmja5cclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIC8v6aG16Z2i5YWz6ZetXHJcbiAgb25VbmxvYWQoKXt9XHJcbn0pXHJcbmV4cG9ydCB7fTtcclxuIl19