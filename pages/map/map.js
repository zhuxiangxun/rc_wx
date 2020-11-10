"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api = getApp().globalData;
var https = require('../../utils/myRequest.js');
var Dialog = require('../../miniprogram_npm/@vant/weapp/dialog/dialog.js').default;
var QQMapWX = require('../../utils/qqmap-wx-jssdk.js');
Page({
    data: {
        ptTitle: '',
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
        jrCategoryList: [],
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
        https.request(api.submenuDic + '?moid=60', null, 'GET')
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
        https.request(api.submenuDic + '?moid=2', null, 'GET')
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
        https.request(api.submenuDic + '?moid=7', null, 'GET')
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
        https.request(api.submenuDic + '?moid=40', null, 'GET')
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
        https.request(api.submenuDic + '?moid=41', null, 'GET')
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
        https.request(api.submenuDic + '?moid=52', null, 'GET')
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
        https.request(api.submenuDic + '?moid=15', null, 'GET')
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
        https.request(api.submenuDic + '?moid=13', null, 'GET')
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
                var categoryList = arr.filter(function (item) {
                    return item.text == '金融服务';
                });
                _this.setData({
                    fwCategoryList: arr,
                    jrCategoryList: categoryList
                });
            }
        }, function (err) {
            console.log(err);
        });
    },
    fwType: function () {
        var _this = this;
        https.request(api.submenuDic + '?moid=14', null, 'GET')
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
        https.request(api.submenuDic + '?moid=21', null, 'GET')
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
        https.request(api.submenuDic + '?moid=58', null, 'GET')
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
        https.request(api.tenants, null, 'GET')
            .then(function (res) {
            if (res) {
                var list = res.list.map(function (item) {
                    return {
                        dicName: item.cname,
                        id: item.id
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
        https.request(api.submenuDic + '?moid=56', null, 'GET')
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
        https.request(api.submenuDic + '?moid=55', null, 'GET')
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
        https.request(api.submenuDic + '?moid=42', null, 'GET')
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
            ptTitle: '全部平台',
            moreShow: false,
        });
        https.request(api.allPlatform, {
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
            ptTitle: '创新平台',
            moreShow: false,
        });
        https.request(api.cxPlatformUser, {
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
            ptTitle: '创业平台',
            moreShow: false,
        });
        https.request(api.cyPlatUser, {
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
        if (this.data.flag == 'cxPt') {
            this.getCxPro();
        }
        if (this.data.flag == 'cyPt') {
            this.getCyPro();
        }
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
            ptTitle: '项目',
            moreShow: false,
        });
        https.request(api.findPro, {
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
            ptTitle: '场地',
            moreShow: false,
        });
        https.request(api.cyPlatform, {
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
            ptTitle: '服务机构',
            moreShow: false,
        });
        https.request(api.findFw, {
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
            ptTitle: '资金',
            moreShow: false,
        });
        https.request(api.allFund, {
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
                        imgArr: item.pictureFiles,
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
                        total: res.val.total,
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
            ptTitle: '金融服务',
            moreShow: false,
        });
        https.request(api.jinrong, {
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
                        total: res.total,
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
            ptTitle: '投资',
            moreShow: false,
        });
        https.request(api.touzi, {
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
                        total: res.total,
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
            ptTitle: '融资',
            moreShow: false,
        });
        https.request(api.rongzi, {
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
                        total: res.val.total,
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
        var token = wx.getStorageSync('token');
        if (!!token) {
            wx.navigateTo({
                url: "../mapDetail/mapDetail?name=" + name + '&id=' + id
            });
        }
        else {
            Dialog.alert({
                message: '登录后才能查看详情！',
            }).then(function () {
                wx.navigateTo({
                    url: '../loginForm/loginForm'
                });
            });
        }
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
        this.setData({
            imgUrl: api.imgUrl + '?filePath='
        });
        if (api.areaName && api.areaName != '青岛市') {
            this.setData({
                pageSize: 10,
                pageIndex: 1,
                total: 0,
                markers: [],
                scale: 12,
                areaName: api.areaName,
                areaId: api.areaId,
                longitude: api.longitude,
                latitude: api.latitude
            });
        }
        else if (api.areaName == '青岛市') {
            this.setData({
                pageSize: 10,
                pageIndex: 1,
                total: 0,
                markers: [],
                scale: 10,
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
                        scale: 12,
                        longitude: res.longitude,
                        latitude: res.latitude
                    });
                    _this.getAreaList();
                }
            });
        }
    },
    getMark: function () {
        var _this = this;
        https.request(api.all, {
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
        https.request(api.tenants, null, 'GET').then(function (res) {
            if (res) {
                var list = res.list.map(function (item) {
                    if (item.cname == '西海岸新区') {
                        item.cname = '黄岛区';
                    }
                    return {
                        id: item.id,
                        title: item.cname
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
                    if (item.title == '青岛市') {
                        newList_1.unshift({
                            id: item.id,
                            title: item.title,
                            longitude: '120.389458',
                            latitude: '36.07316',
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
                        var city = res.result.address_component.city;
                        var areaName = res.result.address_component.district;
                        if (city != '青岛市') {
                            areaName = '青岛市';
                        }
                        _this.data.areaList.forEach(function (item) {
                            if (item.title == areaName) {
                                api.areaName = areaName;
                                api.areaId = item.id;
                                api.longitude = item.longitude,
                                    api.latitude = item.latitude;
                                if (areaName == '青岛市') {
                                    _this.setData({
                                        scale: 10,
                                        areaName: api.areaName,
                                        areaId: api.areaId,
                                        longitude: api.longitude,
                                        latitude: api.latitude
                                    });
                                }
                                else {
                                    _this.setData({
                                        scale: 12,
                                        areaName: api.areaName,
                                        areaId: api.areaId,
                                        longitude: api.longitude,
                                        latitude: api.latitude,
                                    });
                                }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFFLENBQUMsVUFBVSxDQUFDO0FBQ2hDLElBQUksS0FBSyxHQUFJLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0FBQ2pELElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxvREFBb0QsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUVuRixJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsK0JBQStCLENBQUMsQ0FBQztBQUV2RCxJQUFJLENBQUM7SUFFSCxJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUUsRUFBRTtRQUNYLE1BQU0sRUFBRSxFQUFFO1FBQ1YsU0FBUyxFQUFFLFFBQVE7UUFDbkIsSUFBSSxFQUFFLEVBQUU7UUFDUixRQUFRLEVBQUUsS0FBSztRQUVmLFFBQVEsRUFBRSxFQUFFO1FBQ1osU0FBUyxFQUFFLENBQUM7UUFDWixLQUFLLEVBQUUsQ0FBQztRQUVSLFFBQVEsRUFBRSxFQUFFO1FBQ1osUUFBUSxFQUFFLEVBQUU7UUFDWixNQUFNLEVBQUUsRUFBRTtRQUVWLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLFlBQVksRUFBRSxLQUFLO1FBQ25CLGdCQUFnQixFQUFFLEtBQUs7UUFHdkIsUUFBUSxFQUFFLEVBQUU7UUFDWixZQUFZLEVBQUUsRUFBRTtRQUNoQixXQUFXLEVBQUM7WUFDVixFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtZQUN2QixFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtZQUN0QixFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtZQUN0QixFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRTtZQUN6QixFQUFFLEVB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RSxDQUFDO0lBQ3RCLENBQUM7SUFHRCxPQUFPLGdCQUFHLENBQUM7SUFHWCxNQUFNO1FBQ0osR0FBRyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFFbkIsR0FBRyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbEIsR0FBRyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDaEIsR0FBRyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDbkIsR0FBRyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFFbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLFlBQVksRUFBRSxLQUFLO1lBQ25CLGdCQUFnQixFQUFFLEtBQUs7U0FDeEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdELFFBQVEsZ0JBQUcsQ0FBQztDQUNiLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIG1hcC50c1xyXG5jb25zdCBhcGkgPSBnZXRBcHAoKS5nbG9iYWxEYXRhOyAgLy8g6I635Y+W5bqU55So5a6e5L6LXHJcbmxldCBodHRwcyAgPSByZXF1aXJlKCcuLi8uLi91dGlscy9teVJlcXVlc3QuanMnKTsgIC8v6I635Y+WYWpheOaWueazlVxyXG5sZXQgRGlhbG9nID0gcmVxdWlyZSgnLi4vLi4vbWluaXByb2dyYW1fbnBtL0B2YW50L3dlYXBwL2RpYWxvZy9kaWFsb2cuanMnKS5kZWZhdWx0O1xyXG5cclxubGV0IFFRTWFwV1ggPSByZXF1aXJlKCcuLi8uLi91dGlscy9xcW1hcC13eC1qc3Nkay5qcycpOyAgLy8g5byV5YWlU0RL5qC45b+D57G7XHJcblxyXG5QYWdlKHtcclxuICAvL+mhtemdouaVsOaNrlxyXG4gIGRhdGE6IHtcclxuICAgIHB0VGl0bGU6ICcnLCAgICAgICAgICAgICAgICAgICAgICAgICAvL+W9k+WJjeafpeivoueahOW5s+WPsOWQjeensFxyXG4gICAgaW1nVXJsOiAnJywgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Zu+54mH5pyN5Yqh5ZmoXHJcbiAgICBtb3JlVGl0bGU6ICfngrnlh7vliqDovb3mm7TlpJonLCAgICAgICAgICAgIC8v5Yqg6L295pu05aSaXHJcbiAgICBmbGFnOiAnJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lvZPliY3liJfooahcclxuICAgIG1vcmVTaG93OiBmYWxzZSwgICAgICAgICAgICAgICAgICAgICAvL+WKoOi9veabtOWkmueKtuaAgVxyXG4gICAgLy/pobXnoIFcclxuICAgIHBhZ2VTaXplOiAxMCwgICAgICAgICAgICAgLy/mr4/pobXmmL7npLrmlbDph49cclxuICAgIHBhZ2VJbmRleDogMSwgICAgICAgICAgICAgLy/lvZPliY3pobVcclxuICAgIHRvdGFsOiAwLCAgICAgICAgICAgICAgICAgLy/mgLvmnaHmlbBcclxuICAgIC8v5Yy65biCXHJcbiAgICBhcmVhTGlzdDogW10sICAgICAgICAgICAgIC8v5Yy65YiX6KGoXHJcbiAgICBhcmVhTmFtZTogJycsICAgICAgICAgICAgIC8v5YiH5o2i55qE5Yy65ZCNXHJcbiAgICBhcmVhSWQ6ICcnLCAgICAgICAgICAgICAgIC8v5YiH5o2i55qE5Yy6SURcclxuICAgIC8v5pCc57SiXHJcbiAgICBpc0xpc3RTaG93OiB0cnVlLCAgICAgICAgIC8v6buY6K6k5pi+56S6NuaJvuWGheWuuVxyXG4gICAgaXNJbmZvU2hvdzogZmFsc2UsICAgICAgICAvL+WNleadoeS/oeaBr+aYvuekulxyXG4gICAgaXNTZWFyY2hTaG93OiBmYWxzZSwgICAgICAvL+aQnOe0oue7k+aenOaVsOaNrlxyXG4gICAgaXNTZWFyY2hJbmZvU2hvdzogZmFsc2UsICAvL+aQnOe0ouWIl+ihqOaVsOaNrlxyXG5cclxuICAgIC8v5bmz5Y+w6auY57qn5pCc57SiXHJcbiAgICB0eXBlTGlzdDogW10sICAgICAgICAgICAgIC8v57G75Z6LXHJcbiAgICBpbmR1c3RyeUxpc3Q6IFtdLCAgICAgICAgIC8v5bmz5Y+w5Lqn5Lia6KGM5LiaXHJcbiAgICBwdFppWmhpTGlzdDpbICAgICAgICAgICAgIC8v5bmz5Y+w6LWE6LSoXHJcbiAgICAgIHsgaWQ6IDEsIHRpdGxlOiAn5Zu95a6257qnJyB9LFxyXG4gICAgICB7IGlkOiAyLCB0aXRsZTogJ+ecgee6pycgfSxcclxuICAgICAgeyBpZDogMywgdGl0bGU6ICfluILnuqcnIH0sXHJcbiAgICAgIHsgaWQ6IDQsIHRpdGxlOiAn5Yy677yI5biC77yJ57qnJyB9LFxyXG4gICAgICB7IGlkOiA1LCB0aXRsZTogJ+aXoOi1hOi0qCcgfVxyXG4gICAgXSxcclxuICAgIC8v6aG555uu6auY57qn5pCc57SiXHJcbiAgICB4bVN0YWdlTGlzdDogW10sICAgICAgICAgICAgIC8v5omA5aSE6Zi25q61XHJcbiAgICB4bUNhdGVnb3J5TGlzdDogW10sICAgICAgICAgIC8v6ZyA5rGC57G75YirXHJcbiAgICB4bUZpbmFuY2luZ0xpc3Q6IFtdLCAgICAgICAgIC8v6J6N6LWE6YeR6aKdXHJcbiAgICAvL+WcuuWcsOmrmOe6p+aQnOe0olxyXG4gICAgY2RDYXJyaWVyTGlzdDogW10sICAgICAgICAgICAvL+i1hOa6kOexu+Wei1xyXG4gICAgY2RVc2VyTGlzdDogWyAgICAgICAgICAgICAgICAvL+WcuuWcsOeUqOmAlFxyXG4gICAgICB7IGlkOiAxLCBkaWNOYW1lOiAn5Ye656efJyB9LFxyXG4gICAgICB7IGlkOiAyLCBkaWNOYW1lOiAn5Ye65ZSuJyB9XHJcbiAgICBdLFxyXG4gICAgLy/mnI3liqHpq5jnuqfmkJzntKJcclxuICAgIGZ3Q2F0ZWdvcnlMaXN0OltdLCAgICAgICAgICAgIC8v5pyN5Yqh57G75YirXHJcbiAgICBqckNhdGVnb3J5TGlzdDpbXSwgICAgICAgICAgICAvL+mHkeiejeacjeWKoeexu+WIq1xyXG4gICAgZndUeXBlTGlzdDogW10sICAgICAgICAgICAgICAgLy/ljZXkvY3nsbvlnotcclxuICAgIGZ3U2NhbGVMaXN0OiBbXSwgICAgICAgICAgICAgIC8v5Y2V5L2N6KeE5qihXHJcbiAgICAvL+aJvuaKlei1hFxyXG4gICAgdHpBcmVhTGlzdDogW10sICAgICAgICAgICAgICAgLy/mipXotYTljLrln59cclxuICAgIHR6V2F5TGlzdDogW10sICAgICAgICAgICAgICAgIC8v5oqV6LWE5pa55byPXHJcbiAgICB0ek90aGVyTGlzdDogW10sICAgICAgICAgICAgICAvL+aKlei1hOmHkeminVxyXG4gICAgdHpUeXBlTGlzdDogW10sICAgICAgICAgICAgICAgLy/otYTph5HnsbvlnotcclxuICAgIC8v5om+6J6N6LWEXHJcbiAgICByeldheUxpc3Q6IFtdLCAgICAgICAgICAgICAgICAvL+iejei1hOaWueW8j1xyXG5cclxuICAgIGZsZzogJycsICAgICAgICAgICAgICAgICAgICAgIC8vNuaJvueKtuaAgeWIpOaWrVxyXG4gICAgbnVtOiAwLCAgICAgICAgICAgICAgICAgICAgICAgLy825om+57uT5p6cXHJcbiAgICBtdW1MaXN0OiBbXSwgICAgICAgICAgICAgICAgICAvLzbmib7liJfooahcclxuXHJcbiAgICBzZWFyY2hLZXk6ICcnLCAgICAgICAgICAgICAgIC8va2V55YWz6ZSu5a2X5pCc57SiXHJcbiAgICB0ZW5hbnRJZDogJycsICAgICAgICAgICAgICAgIC8v5Zyw5Yy6aWRcclxuXHJcbiAgICAvL+aJvuW5s+WPsFxyXG4gICAgcHRTZWFyY2hJbmZvU2hvdzogdHJ1ZSwgICAgIC8v5pi+56S6L+makOiXj1xyXG4gICAgcHRCdG5TaG93OiBmYWxzZSwgICAgICAgICAgIC8v5YWo6YOo5pe25pi+56S6L+makOiXj1xyXG4gICAgcHRCdG5DbGFzczogMSwgICAgICAgICAgICAgIC8v5YWo6YOo5oyJ6ZKu54q25oCB5YiH5o2iXHJcbiAgICBwdEluZGV4OiAwLCAgICAgICAgICAgICAgICAgLy/lvZPliY3ntKLlvJVcclxuICAgIHB0SW5kdXN0cnlJZDogbnVsbCwgICAgICAgICAvL+mAieS4reeahGlkXHJcbiAgICBcclxuICAgIHB0VHlwZUNsYXNzOiBudWxsLCAgICAgICAgICAvL+exu+Wei+aMiemSrueKtuaAgeWIh+aNolxyXG4gICAgcHRaaVpoaUNsYXNzOiBudWxsLCAgICAgICAgIC8v6LWE6LSo5oyJ6ZKu54q25oCB5YiH5o2iXHJcblxyXG4gICAgcHRUeXBlSWQ6ICcnLCAgICAgICAgICAgICAgIC8v5bmz5Y+w57G75Z6LaWRcclxuICAgIHB0WmlaaGk6ICcnLCAgICAgICAgICAgICAgICAvL+W5s+WPsOi1hOi0qGlkXHJcbiAgICBwdEN5VHlwZUlkOiAnJywgICAgICAgICAgICAgLy/kuqfkuJppZFxyXG4gICAgcHRIeVR5cGVJZDogJycsICAgICAgICAgICAgIC8v6KGM5LiaaWRcclxuXHJcbiAgXHJcbiAgICAvL+aJvumhueebrlxyXG4gICAgcHJvU2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgICAvL+aYvuekui/pmpDol49cclxuICAgIHhtSW5kZXg6IDAsICAgICAgICAgICAgICAgICAvL+W9k+WJjee0ouW8lVxyXG4gICAgeG1JbmR1c3RyeUlkOiBudWxsLCAgICAgICAgIC8v6YCJ5Lit55qEaWRcclxuXHJcbiAgICB4bVN0YWdlQ2xhc3M6IG51bGwsICAgICAgICAgIC8v6Zi25q615oyJ6ZKu54q25oCB5YiH5o2iXHJcbiAgICB4bUNhdGVnb3J5Q2xhc3M6IG51bGwsICAgICAgIC8v57G75Yir5oyJ6ZKu54q25oCB5YiH5o2iXHJcbiAgICB4bUZpbmFuY2luZ0NsYXNzOiBudWxsLCAgICAgIC8v6YeR6aKd5oyJ6ZKu54q25oCB5YiH5o2iXHJcblxyXG4gICAgeG1TdGFnZUlkOiAnJywgICAgICAgICAgICAgICAvL+aJgOWkhOmYtuautVxyXG4gICAgeG1UeXBlSWQ6ICcnLCAgICAgICAgICAgICAgICAvL+mcgOaxguexu+WIq1xyXG4gICAgeG1Uek1vbmV5OiAnJywgICAgICAgICAgICAgICAvL+iejei1hOmHkeminVxyXG4gICAgeG1DeVR5cGVJZDogJycsICAgICAgICAgICAgICAvL+S6p+S4mmlkXHJcbiAgICB4bUh5VHlwZUlkOiAnJywgICAgICAgICAgICAgIC8v6KGM5LiaaWRcclxuXHJcblxyXG4gICAgLy/mib7otYTph5FcclxuICAgIHpqU2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgICAvL+aYvuekui/pmpDol49cclxuICAgIHpqQnRuQ2xhc3M6IDEsICAgICAgICAgICAgICAvL+WFqOmDqOaMiemSrueKtuaAgeWIh+aNolxyXG4gICAgLy/mib7otYTph5HvvIjph5Hono3mnI3liqHvvIlcclxuICAgIGpyU2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgICAvL+aYvuekui/pmpDol49cclxuICAgIGpyQ2F0ZWdvcnlJbmRleDogMCwgICAgICAgICAvL+W9k+WJjee0ouW8le+8iOacjeWKoeexu+WIq++8iVxyXG4gICAganJDYXRlZ29yeUlkOiBudWxsLCAgICAgICAgIC8v6YCJ5Lit55qEaWTvvIjmnI3liqHnsbvliKvvvIlcclxuICAgIGpySW5kdXN0cnlJbmRleDogMCwgICAgICAgICAvL+W9k+WJjee0ouW8le+8iOihjOS4muS6p+S4mu+8iVxyXG4gICAganJJbmR1c3RyeUlkOiBudWxsLCAgICAgICAgIC8v6YCJ5Lit55qEaWTvvIjooYzkuJrkuqfkuJrvvIlcclxuXHJcbiAgICBqclR5cGVDbGFzczogbnVsbCwgICAgICAgICAgLy/ljZXkvY3nsbvlnotcclxuICAgIGpyU2NhbGVDbGFzczogbnVsbCwgICAgICAgICAvL+WNleS9jeinhOaooVxyXG5cclxuICAgIGpyVHlwZU9uZUlkOiAnJywgICAgICAgICAgICAvL+acjeWKoeexu+WIq+S4gOe6p+iPnOWNlVxyXG4gICAganJUeXBlVHdvSWQ6ICcnLCAgICAgICAgICAgIC8v5pyN5Yqh57G75Yir5LqM57qn6I+c5Y2VXHJcbiAgICBqckR3U3RhdHVzSWQ6ICcnLCAgICAgICAgICAgLy/ljZXkvY3nsbvlnotpZFxyXG4gICAganJEd1NjYWxlSWQ6ICcnLCAgICAgICAgICAgIC8v5Y2V5L2N6KeE5qihaWRcclxuICAgIGpyQ3lUeXBlSWQ6ICcnLCAgICAgICAgICAgICAvL+S6p+S4mmlkXHJcbiAgICBqckh5VHlwZUlkOiAnJywgICAgICAgICAgICAgLy/ooYzkuJppZFxyXG5cclxuICAgIC8v5om+6LWE6YeR77yI5oqV6LWE77yJXHJcbiAgICB0elNlYXJjaEluZm9TaG93OiBmYWxzZSwgICAgLy/mmL7npLov6ZqQ6JePXHJcbiAgICB0ekluZGV4OiAwLCAgICAgICAgICAgICAgICAgLy/lvZPliY3ntKLlvJVcclxuICAgIHR6SW5kdXN0cnlJZDogbnVsbCwgICAgICAgICAvL+mAieS4reeahGlkXHJcblxyXG4gICAgdHpBcmVhQ2xhc3M6IG51bGwsICAgICAgICAgIC8v5oqV6LWE5Yy65Z+fXHJcbiAgICB0eldheUNsYXNzOiBudWxsLCAgICAgICAgICAgLy/mipXotYTmlrnlvI9cclxuICAgIHR6T3RoZXJDbGFzczogbnVsbCwgICAgICAgICAvL+aKlei1hOmHkeminVxyXG4gICAgdHpUeXBlQ2xhc3M6IG51bGwsICAgICAgICAgIC8v5oqV6LWE57G75Z6LXHJcblxyXG4gICAgdHpBcmVhSWQ6ICcnLCAgICAgICAgICAgICAgIC8v5oqV6LWE5Yy65Z+fXHJcbiAgICB0eldheUlkOiAnJywgICAgICAgICAgICAgICAgLy/mipXotYTmlrnlvI9cclxuICAgIHR6T3RoZXJJZDogJycsICAgICAgICAgICAgICAvL+aKlei1hOmHkeminVxyXG4gICAgdHpUeXBlSWQ6ICcnLCAgICAgICAgICAgICAgIC8v5oqV6LWE57G75Z6LXHJcbiAgICB0ekN5VHlwZUlkOiAnJywgICAgICAgICAgICAgLy/kuqfkuJppZFxyXG4gICAgdHpIeVR5cGVJZDogJycsICAgICAgICAgICAgIC8v6KGM5LiaaWRcclxuXHJcblxyXG5cclxuICAgIC8v5om+6LWE6YeR77yI6J6N6LWE77yJXHJcbiAgICByelNlYXJjaEluZm9TaG93OiBmYWxzZSwgICAgLy/mmL7npLov6ZqQ6JePXHJcbiAgICByekluZGV4OiAwLCAgICAgICAgICAgICAgICAgLy/lvZPliY3ntKLlvJVcclxuICAgIHJ6SW5kdXN0cnlJZDogbnVsbCwgICAgICAgICAvL+mAieS4reeahGlkXHJcblxyXG4gICAgcnpDYXRlZ29yeUNsYXNzOiBudWxsLCAgICAgIC8v6ZyA5rGC57G75YirXHJcbiAgICByekZpbmFuY2luZ0NsYXNzOiBudWxsLCAgICAgLy/ono3otYTph5Hpop1cclxuXHJcbiAgICByekNhdGVnb3J5SWQ6ICcnLCAgICAgICAgICAgLy/ono3otYTmlrnlvI9cclxuICAgIHJ6RmluYW5jaW5nSWQ6ICcnLCAgICAgICAgICAvL+iejei1hOmHkeminVxyXG4gICAgcnpDeVR5cGVJZDogJycsICAgICAgICAgICAgIC8v5Lqn5LiaaWRcclxuICAgIHJ6SHlUeXBlSWQ6ICcnLCAgICAgICAgICAgICAvL+ihjOS4mmlkXHJcblxyXG4gICAgLy/mib7lnLrlnLBcclxuICAgIGNkU2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgICAvL+aYvuekui/pmpDol49cclxuICAgIGNkSW5kZXg6IDAsICAgICAgICAgICAgICAgICAvL+W9k+WJjee0ouW8lVxyXG4gICAgY2RJbmR1c3RyeUlkOiBudWxsLCAgICAgICAgIC8v6YCJ5Lit55qEaWRcclxuIFxyXG4gICAgY2RUeXBlQ2xhc3M6IG51bGwsICAgICAgICAgIC8v6LWE5rqQ57G75Z6LXHJcbiAgICBjZFVzZXJDbGFzczogbnVsbCwgICAgICAgICAgLy/lnLrlnLDnlKjpgJRcclxuXHJcbiAgICBjZFR5cGVJZDogJycsICAgICAgICAgICAgICAgLy/ovb3kvZPnqbrpl7TnsbvlnotcclxuICAgIGNkQ2h1WnVJZDogJycsICAgICAgICAgICAgICAvL+aYr+WQpuWHuuenn1xyXG4gICAgY2RTYWxlSWQ6ICcnLCAgICAgICAgICAgICAgIC8v5piv5ZCm5Ye65ZSuXHJcbiAgICBjZEN5VHlwZUlkOiAnJywgICAgICAgICAgICAgLy/kuqfkuJppZFxyXG4gICAgY2RIeVR5cGVJZDogJycsICAgICAgICAgICAgIC8v6KGM5LiaaWRcclxuXHJcbiAgICAvL+aJvuacjeWKoVxyXG4gICAgZndTZWFyY2hJbmZvU2hvdzogZmFsc2UsICAgIC8v5pi+56S6L+makOiXj1xyXG4gICAgZndDYXRlZ29yeUluZGV4OiAwLCAgICAgICAgIC8v5b2T5YmN57Si5byV77yI5pyN5Yqh57G75Yir77yJXHJcbiAgICBmd0NhdGVnb3J5SWQ6IG51bGwsICAgICAgICAgLy/pgInkuK3nmoRpZO+8iOacjeWKoeexu+WIq++8iVxyXG4gICAgZndJbmR1c3RyeUluZGV4OiAwLCAgICAgICAgIC8v5b2T5YmN57Si5byV77yI6KGM5Lia5Lqn5Lia77yJXHJcbiAgICBmd0luZHVzdHJ5SWQ6IG51bGwsICAgICAgICAgLy/pgInkuK3nmoRpZO+8iOihjOS4muS6p+S4mu+8iVxyXG5cclxuICAgIGZ3VHlwZUNsYXNzOiBudWxsLCAgICAgICAgICAvL+WNleS9jeexu+Wei1xyXG4gICAgZndTY2FsZUNsYXNzOiBudWxsLCAgICAgICAgIC8v5Y2V5L2N6KeE5qihXHJcblxyXG4gICAgZndUeXBlT25lSWQ6ICcnLCAgICAgICAgICAgIC8v5pyN5Yqh57G75Yir5LiA57qn6I+c5Y2VXHJcbiAgICBmd1R5cGVUd29JZDogJycsICAgICAgICAgICAgLy/mnI3liqHnsbvliKvkuoznuqfoj5zljZVcclxuICAgIGZ3RHdTdGF0dXNJZDogJycsICAgICAgICAgICAvL+WNleS9jeexu+Wei2lkXHJcbiAgICBmd0R3U2NhbGVJZDogJycsICAgICAgICAgICAgLy/ljZXkvY3op4TmqKFpZFxyXG4gICAgZndDeVR5cGVJZDogJycsICAgICAgICAgICAgIC8v5Lqn5LiaaWRcclxuICAgIGZ3SHlUeXBlSWQ6ICcnLCAgICAgICAgICAgICAvL+ihjOS4mmlkXHJcblxyXG5cclxuICAgIC8v5Zyw5Zu+XHJcbiAgICBsb25naXR1ZGU6ICcnLCAgICAgICAgICAgIC8v5Lit5b+D57uP5bqmXHJcbiAgICBsYXRpdHVkZTogJycsICAgICAgICAgICAgIC8v5Lit5b+D57qs5bqmXHJcbiAgICBzY2FsZTogMTIsICAgICAgICAgICAgICAgIC8v57yp5pS+57qn5Yir77yM5Y+W5YC86IyD5Zu05Li6My0yMFxyXG4gICAgbWFya2VyczpbXSwgICAgICAgICAgICAgICAvL+agh+iusOeCueWkhOeQhuWQjueahOaVsOaNru+8iGlk44CB5p+l6K+i5L2/55So77yJXHJcbiAgICBtYXJrZXJzT2JqOnt9LCAgICAgICAgICAgIC8v5p+l6K+i55qE5Y2V5p2h5pWw5o2uXHJcbiAgICAvL+aJgOS7peagh+eCueaVsOaNrlxyXG4gICAgY3hQbGF0Zm9ybU1vZGVsczogW10sICAgICAvL+WIm+S4muW5s+WPsFxyXG4gICAgY3lQbGF0Zm9ybU1vZGVsczogW10sICAgICAvL+WIm+aWsOW5s+WPsFxyXG4gICAgcHJvTW9kZWxzOiBbXSwgICAgICAgICAgICAvL+aJvumhueebrlxyXG4gICAgZndqZ01vZGVsczogW10sICAgICAgICAgICAvL+aJvuacjeWKoeacuuaehFxyXG4gICAgdmVjdG9yTW9kZWxzOiBbXSwgICAgICAgICAvL+aJvuWcuuWcsFxyXG4gICAganJqZ01kb2VsczogW10sICAgICAgICAgICAvL+aJvumHkeiejeacuuaehFxyXG4gICAgdHpNb2RlbHM6IFtdLCAgICAgICAgICAgICAvL+aJvuaKlei1hOmcgOaxglxyXG4gICAgcm9uZ3ppUHJvczogW10sICAgICAgICAgICAvL+aJvuiejei1hOmcgOaxgu+8iOmhueebruW6k+eahOiejei1hDfpobnvvIlcclxuICAgIHJvbmd6aU5lZWRzOiBbXSwgICAgICAgICAgLy/mib7ono3otYTpnIDmsYLvvIjpnIDmsYLlupPnmoTono3otYQ36aG577yJXHJcbiAgICAvL+WvvOiIqlxyXG4gICAgZ29OYW1lOicnLCAgICAgICAgICAgICAgICAvL+imgeWOu+eahOWcsOWdgFxyXG4gICAgZ29Mb25naXR1ZGU6ICcnLCAgICAgICAgICAvL+S4reW/g+e7j+W6pijnu4jngrkpXHJcbiAgICBnb0xhdGl0dWRlOiAnJywgICAgICAgICAgIC8v5Lit5b+D57qs5bqmKOe7iOeCuSlcclxuICB9LFxyXG5cclxuICBwdEN4VHlwZXMoKTp2b2lkeyAgLy/liJvmlrDlubPlj7DnsbvlnotcclxuICAgIGh0dHBzLnJlcXVlc3QoYXBpLnN1Ym1lbnVEaWMgKyAnP21vaWQ9NjAnLCBudWxsLCAnR0VUJylcclxuICAgIC50aGVuKChyZXM6YW55KTp2b2lkPT57XHJcbiAgICAgIGlmKHJlcyl7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIHR5cGVMaXN0OiByZXMudmFsXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIHB0VHlwZXMoKTp2b2lkeyAgLy/liJvkuJrlubPlj7DnsbvlnotcclxuICAgIGh0dHBzLnJlcXVlc3QoYXBpLnN1Ym1lbnVEaWMgKyAnP21vaWQ9MicsIG51bGwsICdHRVQnKVxyXG4gICAgLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgaWYocmVzKXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgdHlwZUxpc3Q6IHJlcy52YWxcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgaW5kdXN0cnkoKTp2b2lkeyAgLy/kuqfkuJov6KGM5LiaXHJcbiAgICBodHRwcy5yZXF1ZXN0KGFwaS5zdWJtZW51RGljICsgJz9tb2lkPTcnLCBudWxsLCAnR0VUJylcclxuICAgIC50aGVuKChyZXM6YW55KTp2b2lkPT57XHJcbiAgICAgIGlmKHJlcyl7XHJcbiAgICAgICAgbGV0IGFycjphbnkgPSByZXMudmFsLm1hcCgoaXRlbTphbnkpOmFueT0+e1xyXG4gICAgICAgICAgbGV0IGNoaWxkcmVuOmFueSA9IGl0ZW0uY2hpbGRyZW4ubWFwKChpdGVtMjphbnkpOmFueT0+e1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIHRleHQ6IGl0ZW0yLmRpY05hbWUsXHJcbiAgICAgICAgICAgICAgaWQ6IGl0ZW0yLmlkLFxyXG4gICAgICAgICAgICAgIHBJZDogaXRlbTIucElkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBjaGlsZHJlbi51bnNoaWZ0KHtcclxuICAgICAgICAgICAgdGV4dDogJ+WFqOmDqCcsXHJcbiAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICBwSWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHRleHQ6IGl0ZW0uZGljTmFtZSxcclxuICAgICAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgaW5kdXN0cnlMaXN0OiBhcnJcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgeG1TdGFnZSgpOnZvaWR7ICAvL+aJgOWkhOmYtuautVxyXG4gICAgaHR0cHMucmVxdWVzdChhcGkuc3VibWVudURpYyArICc/bW9pZD00MCcsIG51bGwsICdHRVQnKVxyXG4gICAgLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgaWYocmVzKXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgeG1TdGFnZUxpc3Q6IHJlcy52YWxcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICB4bUNhdGVnb3J5KCk6dm9pZHsgIC8v6ZyA5rGC57G75YirXHJcbiAgICBodHRwcy5yZXF1ZXN0KGFwaS5zdWJtZW51RGljICsgJz9tb2lkPTQxJywgbnVsbCwgJ0dFVCcpXHJcbiAgICAudGhlbigocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICBpZihyZXMpe1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICB4bUNhdGVnb3J5TGlzdDogcmVzLnZhbFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHhtRmluYW5jaW5nKCk6dm9pZHsgIC8v6J6N6LWE6YeR6aKdXHJcbiAgICBodHRwcy5yZXF1ZXN0KGFwaS5zdWJtZW51RGljICsgJz9tb2lkPTUyJywgbnVsbCwgJ0dFVCcpXHJcbiAgICAudGhlbigocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICBpZihyZXMpe1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICB4bUZpbmFuY2luZ0xpc3Q6IHJlcy52YWxcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgY2RDYXJyaWVyKCk6dm9pZHsgIC8v6LWE5rqQ57G75Z6LXHJcbiAgICBodHRwcy5yZXF1ZXN0KGFwaS5zdWJtZW51RGljICsgJz9tb2lkPTE1JywgbnVsbCwgJ0dFVCcpXHJcbiAgICAudGhlbigocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICBpZihyZXMpe1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBjZENhcnJpZXJMaXN0OiByZXMudmFsXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgZndDYXRlZ29yeSgpOnZvaWR7ICAvL+acjeWKoeexu+WIq1xyXG4gICAgaHR0cHMucmVxdWVzdChhcGkuc3VibWVudURpYyArICc/bW9pZD0xMycsIG51bGwsICdHRVQnKVxyXG4gICAgLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgaWYocmVzKXtcclxuICAgICAgICBsZXQgYXJyOmFueSA9IHJlcy52YWwubWFwKChpdGVtOmFueSk6YW55PT57XHJcbiAgICAgICAgICBsZXQgY2hpbGRyZW46YW55ID0gaXRlbS5jaGlsZHJlbi5tYXAoKGl0ZW0yOmFueSk6YW55PT57XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgdGV4dDogaXRlbTIuZGljTmFtZSxcclxuICAgICAgICAgICAgICBpZDogaXRlbTIuaWQsXHJcbiAgICAgICAgICAgICAgcElkOiBpdGVtMi5wSWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIGNoaWxkcmVuLnVuc2hpZnQoe1xyXG4gICAgICAgICAgICB0ZXh0OiAn5YWo6YOoJyxcclxuICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgIHBJZDogaXRlbS5pZCxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdGV4dDogaXRlbS5kaWNOYW1lLFxyXG4gICAgICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW5cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBsZXQgY2F0ZWdvcnlMaXN0OmFueSA9IGFyci5maWx0ZXIoKGl0ZW06YW55KT0+e1xyXG4gICAgICAgICAgcmV0dXJuIGl0ZW0udGV4dCA9PSAn6YeR6J6N5pyN5YqhJ1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBmd0NhdGVnb3J5TGlzdDogYXJyLFxyXG4gICAgICAgICAganJDYXRlZ29yeUxpc3Q6IGNhdGVnb3J5TGlzdFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIGZ3VHlwZSgpOnZvaWR7ICAvL+WNleS9jeexu+Wei1xyXG4gICAgaHR0cHMucmVxdWVzdChhcGkuc3VibWVudURpYyArICc/bW9pZD0xNCcsIG51bGwsICdHRVQnKVxyXG4gICAgLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgaWYocmVzKXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgZndUeXBlTGlzdDogcmVzLnZhbFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIGZ3U2NhbGUoKTp2b2lkeyAgLy/ljZXkvY3op4TmqKFcclxuICAgIGh0dHBzLnJlcXVlc3QoYXBpLnN1Ym1lbnVEaWMgKyAnP21vaWQ9MjEnLCBudWxsLCAnR0VUJylcclxuICAgIC50aGVuKChyZXM6YW55KTp2b2lkPT57XHJcbiAgICAgIGlmKHJlcyl7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIGZ3U2NhbGVMaXN0OiByZXMudmFsXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIHJ6V2F5KCk6dm9pZHsgIC8v6J6N6LWE5pa55byPXHJcbiAgICBodHRwcy5yZXF1ZXN0KGFwaS5zdWJtZW51RGljICsgJz9tb2lkPTU4JywgbnVsbCwgJ0dFVCcpXHJcbiAgICAudGhlbigocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICBpZihyZXMpe1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICByeldheUxpc3Q6IHJlcy52YWxcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgdHpBcmVhKCk6dm9pZHsgIC8v5oqV6LWE5Yy65Z+fXHJcbiAgICBodHRwcy5yZXF1ZXN0KGFwaS50ZW5hbnRzLCBudWxsLCAnR0VUJylcclxuICAgIC50aGVuKChyZXM6YW55KTp2b2lkPT57XHJcbiAgICAgIGlmKHJlcyl7XHJcbiAgICAgICAgbGV0IGxpc3Q6YW55ID0gcmVzLmxpc3QubWFwKChpdGVtOmFueSk6YW55PT57XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBkaWNOYW1lOiBpdGVtLmNuYW1lLFxyXG4gICAgICAgICAgICBpZDogaXRlbS5pZFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIHR6QXJlYUxpc3Q6IGxpc3RcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIHR6V2F5KCk6dm9pZHsgIC8v5oqV6LWE5pa55byPXHJcbiAgICBodHRwcy5yZXF1ZXN0KGFwaS5zdWJtZW51RGljICsgJz9tb2lkPTU2JywgbnVsbCwgJ0dFVCcpXHJcbiAgICAudGhlbigocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICBpZihyZXMpe1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICB0eldheUxpc3Q6IHJlcy52YWxcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgdHpPdGhlcigpOnZvaWR7ICAvL+aKlei1hOmHkeminVxyXG4gICAgaHR0cHMucmVxdWVzdChhcGkuc3VibWVudURpYyArICc/bW9pZD01NScsIG51bGwsICdHRVQnKVxyXG4gICAgLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgaWYocmVzKXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgdHpPdGhlckxpc3Q6IHJlcy52YWxcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgdHpUeXBlKCk6dm9pZHsgIC8v6LWE6YeR57G75Z6LXHJcbiAgICBodHRwcy5yZXF1ZXN0KGFwaS5zdWJtZW51RGljICsgJz9tb2lkPTQyJywgbnVsbCwgJ0dFVCcpXHJcbiAgICAudGhlbigocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICBpZihyZXMpe1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICB0elR5cGVMaXN0OiByZXMudmFsXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG5cclxuICAvL+aQnOe0ouaMiemSruinpuWPkVxyXG4gIHNlYXJjaEJsdXIoZXZlbnQ6YW55KTp2b2lke1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgc2VhcmNoS2V5OiBldmVudC5kZXRhaWwudmFsdWUsICAgICAvL+aZrumAmuaQnOe0olxyXG4gICAgICBwYWdlU2l6ZTogMTAsICAgICAgICAgICAgICAgICAgICAgIC8v5q+P6aG15pi+56S65pWw6YePXHJcbiAgICAgIHBhZ2VJbmRleDogMSwgICAgICAgICAgICAgICAgICAgICAgLy/lvZPliY3pobVcclxuICAgICAgdG90YWw6IDAsICAgICAgICAgICAgICAgICAgICAgICAgICAvL+aAu+adoeaVsFxyXG4gICAgICBtYXJrZXJzOiBbXSwgICAgICAgICAgICAgICAgICAgICAgIC8v5qCH6K6w5oC75pWwXHJcbiAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy825om+57uT5p6cXHJcbiAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgICAgICAgICAgLy825om+5YiX6KGoXHJcbiAgICB9KVxyXG5cclxuICAgIGlmKHRoaXMuZGF0YS5mbGFnID09ICdhbGxQdCcpeyAgLy/lubPlj7Dlhajpg6hcclxuICAgICAgdGhpcy5nZXRBbGxQcm8oKTsgXHJcbiAgICB9XHJcbiAgICBpZih0aGlzLmRhdGEuZmxhZyA9PSAnY3hQdCcpeyAgLy/liJvmlrDlubPlj7BcclxuICAgICAgdGhpcy5nZXRDeFBybygpOyAgICBcclxuICAgIH1cclxuICAgIGlmKHRoaXMuZGF0YS5mbGFnID09ICdjeVB0Jyl7ICAvL+WIm+S4muW5s+WPsFxyXG4gICAgICB0aGlzLmdldEN5UHJvKCk7ICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGlmKHRoaXMuZGF0YS5mbGFnID09ICd4bScpeyAgLy/mib7pobnnm65cclxuICAgICAgdGhpcy5nZXRQcm9MaXN0KCk7ICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpZih0aGlzLmRhdGEuZmxhZyA9PSAnemonKXsgIC8v5om+6LWE6YeRXHJcbiAgICAgIHRoaXMuZ2V0QWxsRnVuZHNMaXN0KCk7ICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGlmKHRoaXMuZGF0YS5mbGFnID09ICdqcicpeyAgLy/mib7otYTph5HvvIjph5Hono3vvIlcclxuICAgICAgdGhpcy5nZXRKckxpc3QoKTsgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaWYodGhpcy5kYXRhLmZsYWcgPT0gJ3R6Jyl7ICAvL+aJvui1hOmHke+8iOaKlei1hO+8iVxyXG4gICAgICB0aGlzLmdldFR6TGlzdCgpOyAgICBcclxuICAgIH1cclxuXHJcbiAgICBpZih0aGlzLmRhdGEuZmxhZyA9PSAncnonKXsgIC8v5om+6LWE6YeR77yI6J6N6LWE77yJXHJcbiAgICAgIHRoaXMuZ2V0UnpMaXN0KCk7ICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGlmKHRoaXMuZGF0YS5mbGFnID09ICdjZCcpeyAgLy/mib7lnLrlnLBcclxuICAgICAgdGhpcy5nZXRTaXRlTGlzdCgpOyAgICBcclxuICAgIH1cclxuXHJcbiAgICBpZih0aGlzLmRhdGEuZmxhZyA9PSAnZncnKXsgIC8v5om+5pyN5YqhXHJcbiAgICAgIHRoaXMuZ2V0U2VydmljZUxpc3QoKTsgICAgXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLy/mkJzntKLliJfooajmmL7npLpcclxuICBzZWFyY2hJbmZvT3BlbigpOnZvaWR7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBpc0xpc3RTaG93OiBmYWxzZSwgICAgICAgICAgLy/pu5jorqTmmL7npLo25om+5YaF5a65XHJcbiAgICAgIGlzSW5mb1Nob3c6IGZhbHNlLCAgICAgICAgIC8v5Y2V5p2h5L+h5oGv5pi+56S6XHJcbiAgICAgIGlzU2VhcmNoU2hvdzogZmFsc2UsICAgICAgIC8v5pCc57Si57uT5p6c5pWw5o2uXHJcbiAgICAgIGlzU2VhcmNoSW5mb1Nob3c6IHRydWUsICAgLy/mkJzntKLliJfooajmlbDmja5cclxuICAgIH0pXHJcbiAgfSxcclxuICAgLy/mkJzntKLliJfooajlhbPpl61cclxuICAgc2VhcmNoSW5mb0Nsb3NlKCk6dm9pZHtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGlzTGlzdFNob3c6IGZhbHNlLCAgICAgICAgICAvL+m7mOiupOaYvuekujbmib7lhoXlrrlcclxuICAgICAgaXNJbmZvU2hvdzogZmFsc2UsICAgICAgICAgIC8v5Y2V5p2h5L+h5oGv5pi+56S6XHJcbiAgICAgIGlzU2VhcmNoU2hvdzogdHJ1ZSwgICAgICAgICAvL+aQnOe0oue7k+aenOaVsOaNrlxyXG4gICAgICBpc1NlYXJjaEluZm9TaG93OiBmYWxzZSwgICAgLy/mkJzntKLliJfooajmlbDmja5cclxuICAgIH0pXHJcbiAgfSxcclxuXHJcblxyXG4gIC8v5pCc57Si57uT5p6c5YWz6ZetXHJcbiAgc2VhcmNoQ2xvc2UoKTp2b2lke1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgbWFya2VyczogW10sICAgICAgICAgICAgICAgLy/muIXnqbpcclxuICAgICAgbnVtOiAwLCAgICAgICAgICAgICAgICAgICAgLy825om+57uT5p6cXHJcbiAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgIC8vNuaJvuWIl+ihqFxyXG4gICAgICBpc0xpc3RTaG93OiB0cnVlLCAgICAgICAgICAvL+m7mOiupOaYvuekujbmib7lhoXlrrlcclxuICAgICAgaXNJbmZvU2hvdzogZmFsc2UsICAgICAgICAgLy/ljZXmnaHkv6Hmga/mmL7npLpcclxuICAgICAgaXNTZWFyY2hTaG93OiBmYWxzZSwgICAgICAgLy/mkJzntKLnu5PmnpzmlbDmja5cclxuICAgICAgaXNTZWFyY2hJbmZvU2hvdzogZmFsc2UsICAgLy/mkJzntKLliJfooajmlbDmja5cclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgaGlkZUZuKCk6dm9pZHsgICAgICAgLy/pnIDopoHpmpDol4/nmoTlhYPntKBcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHBhZ2VTaXplOiAxMCwgICAgICAgICAgICAgLy/mr4/pobXmmL7npLrmlbDph49cclxuICAgICAgcGFnZUluZGV4OiAxLCAgICAgICAgICAgICAvL+W9k+WJjemhtVxyXG4gICAgICB0b3RhbDogMCwgICAgICAgICAgICAgICAgIC8v5oC75p2h5pWwXHJcblxyXG4gICAgICBtYXJrZXJzOiBbXSwgICAgICAgICAgICAgIC8v5qCH6K6w5oC75pWwXHJcbiAgICAgIFxyXG4gICAgICBudW06IDAsICAgICAgICAgICAgICAgICAgICAvLzbmib7nu5PmnpxcclxuICAgICAgbXVtTGlzdDogW10sICAgICAgICAgICAgICAgLy825om+5YiX6KGoXHJcbiAgICAgIHNlYXJjaEtleTogJycsICAgICAgICAgICAgIC8v5YWz6ZSu5a2X5pCc57SiXHJcblxyXG4gICAgICBpc0xpc3RTaG93OiBmYWxzZSwgICAgICAgICAvL+m7mOiupOaYvuekujbmib7lhoXlrrlcclxuICAgICAgaXNJbmZvU2hvdzogZmFsc2UsICAgICAgICAgLy/ljZXmnaHkv6Hmga/mmL7npLpcclxuICAgICAgaXNTZWFyY2hTaG93OiBmYWxzZSwgICAgICAgLy/mkJzntKLnu5PmnpzmlbDmja5cclxuICAgICAgaXNTZWFyY2hJbmZvU2hvdzogZmFsc2UsICAgLy/mkJzntKLliJfooajmlbDmja5cclxuXHJcbiAgICAgIHB0U2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgICAvL+W5s+WPsOWFqOmDqOaMiemSrlxyXG4gICAgICBwdEJ0blNob3c6IGZhbHNlLCAgICAgICAgICAgLy/lubPlj7Dpq5jnuqfmkJzntKLpmpDol49cclxuICAgICAgcHJvU2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgIC8v6aG555uu6auY57qn5pCc57SiXHJcblxyXG4gICAgICB6alNlYXJjaEluZm9TaG93OiBmYWxzZSwgICAvL+i1hOmHkeWFqOmDqOaMiemSrlxyXG4gICAgICBqclNlYXJjaEluZm9TaG93OiBmYWxzZSwgICAvL+aJvui1hOmHke+8iOmHkeiejeacjeWKoe+8iVxyXG4gICAgICB0elNlYXJjaEluZm9TaG93OiBmYWxzZSwgICAvL+aJvui1hOmHke+8iOaJvuaKlei1hO+8iVxyXG4gICAgICByelNlYXJjaEluZm9TaG93OiBmYWxzZSwgICAvL+aJvui1hOmHke+8iOaJvuiejei1hO+8iVxyXG4gICAgICBcclxuICAgICAgY2RTZWFyY2hJbmZvU2hvdzogZmFsc2UsICAgLy/lnLrlnLDpq5jnuqfmkJzntKJcclxuICAgICAgZndTZWFyY2hJbmZvU2hvdzogZmFsc2UsICAgLy/mnI3liqHpq5jnuqfmkJzntKJcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcblxyXG4gIC8v5om+5bmz5Y+wXHJcbiAgcHRGbigpOnZvaWR7ICAgICAgICAgICAgICAgICAgIC8vNuaJvuW5s+WPsOinpuWPkVxyXG4gICAgdGhpcy5oaWRlRm4oKTsgICAgICAgICAgICAgICAvL+mcgOimgemakOiXj+eahOWFg+e0oFxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgZmxhZzogJ2FsbFB0JywgICAgICAgICAgICAgLy/lvZPliY3liJfooahcclxuXHJcbiAgICAgIHB0SW5kZXg6IDAsICAgICAgICAgICAgICAgICAvL+W9k+WJjee0ouW8lVxyXG4gICAgICBwdEluZHVzdHJ5SWQ6IG51bGwsICAgICAgICAgLy/pgInkuK3nmoRpZFxyXG4gICAgICBwdFR5cGVDbGFzczogbnVsbCwgICAgICAgICAgLy/nsbvlnovmjInpkq7nirbmgIHliIfmjaJcclxuICAgICAgcHRaaVpoaUNsYXNzOiBudWxsLCAgICAgICAgIC8v6LWE6LSo5oyJ6ZKu54q25oCB5YiH5o2iXHJcbiAgICAgIHB0VHlwZUlkOiAnJywgICAgICAgICAgICAgICAvL+W5s+WPsOexu+Wei2lkXHJcbiAgICAgIHB0WmlaaGk6ICcnLCAgICAgICAgICAgICAgICAvL+W5s+WPsOi1hOi0qGlkXHJcbiAgICAgIHB0Q3lUeXBlSWQ6ICcnLCAgICAgICAgICAgICAvL+S6p+S4mmlkXHJcbiAgICAgIHB0SHlUeXBlSWQ6ICcnLCAgICAgICAgICAgICAvL+ihjOS4mmlkXHJcblxyXG4gICAgICBpc1NlYXJjaFNob3c6IHRydWUsICAgICAgICAvL+aQnOe0oue7k+aenOaVsOaNrlxyXG4gICAgICBwdFNlYXJjaEluZm9TaG93OiB0cnVlLCAgICAvL+W5s+WPsOWFqOmDqOaMiemSrlxyXG4gICAgICBwdEJ0bkNsYXNzOiAxLCAgICAgICAgICAgICAgLy/lhajpg6jmjInpkq7nirbmgIHliIfmjaJcclxuICAgIH0pXHJcbiAgICB0aGlzLmdldEFsbFBybygpOyAgICAgICAgICAgICAgLy825om+5YWo6YOo5bmz5Y+w57uf6K6hXHJcbiAgfSxcclxuICBnZXRBbGxQcm8oKTp2b2lkeyAgICAgICAgICAgICAgIC8vNuaJvuWFqOmDqOW5s+WPsOe7n+iuoVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgcHRUaXRsZTogJ+WFqOmDqOW5s+WPsCcsICAgICAgICAvL+afpeivouS5puexjeagh+mimFxyXG4gICAgICBtb3JlU2hvdzogZmFsc2UsXHJcbiAgICB9KVxyXG4gICAgaHR0cHMucmVxdWVzdChhcGkuYWxsUGxhdGZvcm0sIHtcclxuICAgICAgdGVuYW50SWQ6IGFwaS5hcmVhSWQsICAgICAgICAgICAgIC8v5Zyw5Yy6aWRcclxuICAgICAga2V5OiB0aGlzLmRhdGEuc2VhcmNoS2V5LCAgICAgICAgIC8v5YWz6ZSu5a2X5pCc57SiXHJcbiAgICAgIHBhZ2VTaXplOiB0aGlzLmRhdGEucGFnZVNpemUsICAgICAvL+avj+mhteaYvuekuuaVsOmHj1xyXG4gICAgICBwYWdlSW5kZXg6IHRoaXMuZGF0YS5wYWdlSW5kZXgsICAgLy/pobXmlbBcclxuICAgIH0sICdHRVQnKS50aGVuKChyZXM6YW55KTp2b2lkPT57XHJcbiAgICAgIGlmKHJlcyl7XHJcbiAgICAgICAgLy/liJvmlrDlubPlj7BcclxuICAgICAgICBsZXQgY3hQbGF0Zm9ybU1vZGVsc0xpc3Q6YW55ID0gcmVzLnZhbC5jeFBsYXRmb3JtTW9kZWxzLm1hcCgoaXRlbTphbnkpOmFueT0+e1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgIG5hbWU6ICfliJvmlrAnLCAgICAgICAgICAvL+ivpuaDheWIpOaWrVxyXG4gICAgICAgICAgICBsb25naXR1ZGU6IGl0ZW0ubG5nLCAgIC8v57uP5bqmXHJcbiAgICAgICAgICAgIGxhdGl0dWRlOiBpdGVtLmxhdCwgICAgLy/nuqzluqZcclxuICAgICAgICAgICAgaWNvblBhdGg6ICcuLi8uLi9pbWFnZXMvY3gucG5nJywgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgd2lkdGg6IDI3LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1LFxyXG4gICAgICAgICAgICBjYWxsb3V0OiB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogaXRlbS5wdE5hbWU/aXRlbS5wdE5hbWU6J+acquWhq+aKpScsXHJcbiAgICAgICAgICAgICAgY29sb3I6ICcjMDAwJyxcclxuICAgICAgICAgICAgICBmb250U2l6ZTogMTQsXHJcbiAgICAgICAgICAgICAgYmdDb2xvcjogJyNGRkYnLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDUsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI0NDQycsXHJcbiAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ0JZQ0xJQ0snXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGltZ0FycjogaXRlbS5wdFBpY3MsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WbvueJh+aVsOe7hFxyXG4gICAgICAgICAgICBwcm92aW5jZU5hbWU6IGl0ZW0ucHJvdmluY2VOYW1lP2l0ZW0ucHJvdmluY2VOYW1lOicnLCAgICAgLy/nnIFcclxuICAgICAgICAgICAgY2l0eU5hbWU6IGl0ZW0uY2l0eU5hbWU/aXRlbS5jaXR5TmFtZTonJywgICAgICAgICAgICAgICAgIC8v5biCXHJcbiAgICAgICAgICAgIGRpc3RyaWN0TmFtZTogaXRlbS5kaXN0cmljdE5hbWU/aXRlbS5kaXN0cmljdE5hbWU6JycsICAgICAvL+WMulxyXG4gICAgICAgICAgICBhZGRyZXNzOiBpdGVtLmN4QWRkcmVzcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/or6bnu4blnLDlnYBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvL+WIm+S4muW5s+WPsFxyXG4gICAgICAgIGxldCBjeVBsYXRmb3JtTW9kZWxzTGlzdDphbnkgPSByZXMudmFsLmN5UGxhdGZvcm1Nb2RlbHMubWFwKChpdGVtOmFueSk6YW55PT57XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgbmFtZTogJ+WIm+S4micsICAgICAgICAgIC8v6K+m5oOF5Yik5patXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZTogaXRlbS5sbmcsICAgLy/nu4/luqZcclxuICAgICAgICAgICAgbGF0aXR1ZGU6IGl0ZW0ubGF0LCAgICAvL+e6rOW6plxyXG4gICAgICAgICAgICBpY29uUGF0aDogJy4uLy4uL2ltYWdlcy9jeS5wbmcnLCAgICAgICAgICAgICAvL+agh+iusFxyXG4gICAgICAgICAgICB3aWR0aDogMjcsXHJcbiAgICAgICAgICAgIGhlaWdodDogMzUsXHJcbiAgICAgICAgICAgIGNhbGxvdXQ6IHtcclxuICAgICAgICAgICAgICBjb250ZW50OiBpdGVtLmN5TmFtZT9pdGVtLmN5TmFtZTon5pyq5aGr5oqlJyxcclxuICAgICAgICAgICAgICBjb2xvcjogJyMwMDAnLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAxOCxcclxuICAgICAgICAgICAgICBiZ0NvbG9yOiAnI0ZGRicsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNSxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXHJcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjQ0NDJyxcclxuICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnQllDTElDSydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW1nQXJyOiBpdGVtLnBpY0ZpbGVzLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lm77niYfmlbDnu4RcclxuICAgICAgICAgICAgcHJvdmluY2VOYW1lOiBpdGVtLnByb3ZpbmNlTmFtZT9pdGVtLnByb3ZpbmNlTmFtZTonJywgICAgIC8v55yBXHJcbiAgICAgICAgICAgIGNpdHlOYW1lOiBpdGVtLmNpdHlOYW1lP2l0ZW0uY2l0eU5hbWU6JycsICAgICAgICAgICAgICAgICAvL+W4glxyXG4gICAgICAgICAgICBkaXN0cmljdE5hbWU6IGl0ZW0uZGlzdHJpY3ROYW1lP2l0ZW0uZGlzdHJpY3ROYW1lOicnLCAgICAgLy/ljLpcclxuICAgICAgICAgICAgYWRkcmVzczogaXRlbS5jeUFkZHJlc3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6K+m57uG5Zyw5Z2AXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy/lpITnkIZJROS4uuaVsOWtl1xyXG4gICAgICAgIGxldCBtYXJrZXJzTGlzdDphbnkgID0gY3hQbGF0Zm9ybU1vZGVsc0xpc3QuY29uY2F0KGN5UGxhdGZvcm1Nb2RlbHNMaXN0KTtcclxuICAgICAgICBsZXQgbmV3TWFya2Vyc0xpc3Q6YW55ID0gbWFya2Vyc0xpc3QubWFwKChpdGVtOmFueSwgaW5kZXg6bnVtYmVyKTphbnk9PntcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBpbmRleCwgICAgICAgICAgICAgICAgICAgLy9tYXDnlKjnmoToh6rlrprkuYlJRFxyXG4gICAgICAgICAgICBuYW1lOiBpdGVtLm5hbWUsICAgICAgICAgICAgIC8v6K+m5oOF5Yik5patXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZTogaXRlbS5sb25naXR1ZGUsICAgLy/nu4/luqZcclxuICAgICAgICAgICAgbGF0aXR1ZGU6IGl0ZW0ubGF0aXR1ZGUsICAgICAvL+e6rOW6plxyXG4gICAgICAgICAgICBpY29uUGF0aDogaXRlbS5pY29uUGF0aCwgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIHdpZHRoOiAyNyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNSxcclxuICAgICAgICAgICAgY2FsbG91dDogaXRlbS5jYWxsb3V0LFxyXG4gICAgICAgICAgICBvbGRJZDogaXRlbS5pZCwgICAgICAgICAgICAgICAgICAgICAgLy/ljp/lp4tJRFxyXG4gICAgICAgICAgICB0aXRsZTogaXRlbS5jYWxsb3V0LmNvbnRlbnQsICAgICAgICAgLy/moIfpophcclxuICAgICAgICAgICAgaW1nQXJyOiBpdGVtLmltZ0FyciwgICAgICAgICAgICAgICAgIC8v5Zu+54mH5pWw57uEXHJcbiAgICAgICAgICAgIHByb3ZpbmNlTmFtZTogaXRlbS5wcm92aW5jZU5hbWUsICAgICAvL+ecgVxyXG4gICAgICAgICAgICBjaXR5TmFtZTogaXRlbS5jaXR5TmFtZSwgICAgICAgICAgICAgLy/luIJcclxuICAgICAgICAgICAgZGlzdHJpY3ROYW1lOiBpdGVtLmRpc3RyaWN0TmFtZSwgICAgICAvL+WMulxyXG4gICAgICAgICAgICBhZGRyZXNzOiBpdGVtLmFkZHJlc3MgICAgICAgICAgICAgICAgLy/or6bnu4blnLDlnYBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZih0aGlzLmRhdGEudG90YWwgPT0gMCl7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBtYXJrZXJzOiBuZXdNYXJrZXJzTGlzdCwgICAgICAgICAgICAgICAvL+agh+iusFxyXG4gICAgICAgICAgICB0b3RhbDogcmVzLnZhbC50b3RhbCwgICAgICAgICAgICAgICAgICAvL+aAu+aVsFxyXG4gICAgICAgICAgICBtdW1MaXN0OiBuZXdNYXJrZXJzTGlzdCwgICAgICAgICAgICAgICAvL+WIl+ihqFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIG1hcmtlcnM6IHRoaXMuZGF0YS5tYXJrZXJzLmNvbmNhdChuZXdNYXJrZXJzTGlzdCksICAgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgbXVtTGlzdDogdGhpcy5kYXRhLm11bUxpc3QuY29uY2F0KG5ld01hcmtlcnNMaXN0KSwgICAgICAgICAgICAgICAvL+WIl+ihqFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMuZGF0YS5tdW1MaXN0Lmxlbmd0aCA8IHJlcy52YWwudG90YWwpe1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgbW9yZVNob3c6IHRydWUsXHJcbiAgICAgICAgICAgIG1vcmVUaXRsZTogJ+eCueWHu+WKoOi9veabtOWkmicsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgbW9yZVNob3c6IHRydWUsXHJcbiAgICAgICAgICAgIG1vcmVUaXRsZTogJ+W3suWKoOi9veWFqOmDqCcsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgZ2V0Q3hQcm8oKTp2b2lkeyAgICAgICAgICAgICAgIC8vNuaJvuWIm+aWsOW5s+WPsOe7n+iuoVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgcHRUaXRsZTogJ+WIm+aWsOW5s+WPsCcsICAgICAgICAvL+afpeivouS5puexjeagh+mimFxyXG4gICAgICBtb3JlU2hvdzogZmFsc2UsXHJcbiAgICB9KVxyXG4gICAgaHR0cHMucmVxdWVzdChhcGkuY3hQbGF0Zm9ybVVzZXIsIHtcclxuICAgICAgdGVuYW50SWQ6IGFwaS5hcmVhSWQsICAgICAgICAgICAgIC8v5Zyw5Yy6aWRcclxuICAgICAga2V5OiB0aGlzLmRhdGEuc2VhcmNoS2V5LCAgICAgICAgIC8v5YWz6ZSu5a2X5pCc57SiXHJcbiAgICAgIHBhZ2VTaXplOiB0aGlzLmRhdGEucGFnZVNpemUsICAgICAvL+avj+mhteaYvuekuuaVsOmHj1xyXG4gICAgICBwYWdlSW5kZXg6IHRoaXMuZGF0YS5wYWdlSW5kZXgsICAgLy/pobXmlbBcclxuICAgICAgdHlwZUlkOiB0aGlzLmRhdGEucHRUeXBlSWQsICAgICAgIC8v5bmz5Y+w57G75Z6LaWRcclxuICAgICAgemlaaGk6IHRoaXMuZGF0YS5wdFppWmhpLCAgICAgICAgIC8v5bmz5Y+w6LWE6LSoaWRcclxuICAgICAgY3lUeXBlSWQ6IHRoaXMuZGF0YS5wdEN5VHlwZUlkLCAgIC8v5Lqn5LiaaWRcclxuICAgICAgaHlUeXBlSWQ6IHRoaXMuZGF0YS5wdEh5VHlwZUlkICAgIC8v6KGM5LiaaWRcclxuICAgIH0sICdHRVQnKS50aGVuKChyZXM6YW55KTp2b2lkPT57XHJcbiAgICAgIGlmKHJlcyl7XHJcbiAgICAgICAgbGV0IG5ld01hcmtlcnNMaXN0OmFueSA9IHJlcy5saXN0Lm1hcCgoaXRlbTphbnksIGluZGV4Om51bWJlcik6YW55PT57XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogaW5kZXgsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL21hcOeUqOeahOiHquWumuS5iUlEXHJcbiAgICAgICAgICAgIG5hbWU6ICfliJvmlrAnLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6K+m5oOF5Yik5patXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZTogaXRlbS5sbmcsICAgICAgICAgICAgICAgICAgICAgICAgIC8v57uP5bqmXHJcbiAgICAgICAgICAgIGxhdGl0dWRlOiBpdGVtLmxhdCwgICAgICAgICAgICAgICAgICAgICAgICAgIC8v57qs5bqmXHJcbiAgICAgICAgICAgIGljb25QYXRoOiAnLi4vLi4vaW1hZ2VzL2N4LnBuZycsICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIHdpZHRoOiAyNyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNSxcclxuICAgICAgICAgICAgY2FsbG91dDoge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IGl0ZW0ucHROYW1lP2l0ZW0ucHROYW1lOifmnKrloavmiqUnLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IDE4LFxyXG4gICAgICAgICAgICAgIGJnQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1LFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNDQ0MnLFxyXG4gICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdCWUNMSUNLJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbGRJZDogaXRlbS5pZCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WOn+Wni0lEXHJcbiAgICAgICAgICAgIHRpdGxlOiBpdGVtLnB0TmFtZT9pdGVtLnB0TmFtZTon5pyq5aGr5oqlJywgICAgICAgICAgICAgICAgICAvL+agh+mimFxyXG4gICAgICAgICAgICBpbWdBcnI6IGl0ZW0ucHRQaWNzLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lm77niYfmlbDnu4RcclxuICAgICAgICAgICAgcHJvdmluY2VOYW1lOiBpdGVtLnByb3ZpbmNlTmFtZT9pdGVtLnByb3ZpbmNlTmFtZTonJywgICAgIC8v55yBXHJcbiAgICAgICAgICAgIGNpdHlOYW1lOiBpdGVtLmNpdHlOYW1lP2l0ZW0uY2l0eU5hbWU6JycsICAgICAgICAgICAgICAgICAvL+W4glxyXG4gICAgICAgICAgICBkaXN0cmljdE5hbWU6IGl0ZW0uZGlzdHJpY3ROYW1lP2l0ZW0uZGlzdHJpY3ROYW1lOicnLCAgICAgLy/ljLpcclxuICAgICAgICAgICAgYWRkcmVzczogaXRlbS5jeEFkZHJlc3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6K+m57uG5Zyw5Z2AXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYodGhpcy5kYXRhLnRvdGFsID09IDApe1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgbWFya2VyczogbmV3TWFya2Vyc0xpc3QsICAgICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIHRvdGFsOiByZXMudG90YWwsICAgICAgICAgICAgICAgICAgICAgICAvL+aAu+aVsFxyXG4gICAgICAgICAgICBtdW1MaXN0OiBuZXdNYXJrZXJzTGlzdCwgICAgICAgICAgICAgICAgLy/liJfooahcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBtYXJrZXJzOiB0aGlzLmRhdGEubWFya2Vycy5jb25jYXQobmV3TWFya2Vyc0xpc3QpLCAgICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIG11bUxpc3Q6IHRoaXMuZGF0YS5tdW1MaXN0LmNvbmNhdChuZXdNYXJrZXJzTGlzdCksICAgICAgICAgICAgICAgIC8v5YiX6KGoXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLmRhdGEubXVtTGlzdC5sZW5ndGggPCByZXMudG90YWwpe1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgbW9yZVNob3c6IHRydWUsXHJcbiAgICAgICAgICAgIG1vcmVUaXRsZTogJ+eCueWHu+WKoOi9veabtOWkmicsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgbW9yZVNob3c6IHRydWUsXHJcbiAgICAgICAgICAgIG1vcmVUaXRsZTogJ+W3suWKoOi9veWFqOmDqCcsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgZ2V0Q3lQcm8oKTp2b2lkeyAgICAgICAgICAgICAgIC8vNuaJvuWIm+S4muW5s+WPsOe7n+iuoVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgcHRUaXRsZTogJ+WIm+S4muW5s+WPsCcsICAgICAgICAvL+afpeivouS5puexjeagh+mimFxyXG4gICAgICBtb3JlU2hvdzogZmFsc2UsXHJcbiAgICB9KVxyXG4gICAgaHR0cHMucmVxdWVzdChhcGkuY3lQbGF0VXNlciwge1xyXG4gICAgICB0ZW5hbnRJZDogYXBpLmFyZWFJZCwgICAgICAgICAgICAgLy/lnLDljLppZFxyXG4gICAgICBrZXk6IHRoaXMuZGF0YS5zZWFyY2hLZXksICAgICAgICAgLy/lhbPplK7lrZfmkJzntKJcclxuICAgICAgcGFnZVNpemU6IHRoaXMuZGF0YS5wYWdlU2l6ZSwgICAgIC8v5q+P6aG15pi+56S65pWw6YePXHJcbiAgICAgIHBhZ2VJbmRleDogdGhpcy5kYXRhLnBhZ2VJbmRleCwgICAvL+mhteaVsFxyXG4gICAgICB0eXBlSWQ6IHRoaXMuZGF0YS5wdFR5cGVJZCwgICAgICAgLy/lubPlj7DnsbvlnotpZFxyXG4gICAgICB6aVpoaTogdGhpcy5kYXRhLnB0WmlaaGksICAgICAgICAgLy/lubPlj7DotYTotKhpZFxyXG4gICAgICBjeVR5cGVJZDogdGhpcy5kYXRhLnB0Q3lUeXBlSWQsICAgLy/kuqfkuJppZFxyXG4gICAgICBoeVR5cGVJZDogdGhpcy5kYXRhLnB0SHlUeXBlSWQgICAgLy/ooYzkuJppZFxyXG4gICAgfSwgJ0dFVCcpLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgaWYocmVzKXtcclxuICAgICAgICBsZXQgbmV3TWFya2Vyc0xpc3Q6YW55ID0gcmVzLmxpc3QubWFwKChpdGVtOmFueSwgaW5kZXg6bnVtYmVyKTphbnk9PntcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBpbmRleCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vbWFw55So55qE6Ieq5a6a5LmJSURcclxuICAgICAgICAgICAgbmFtZTogJ+WIm+S4micsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/or6bmg4XliKTmlq1cclxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBpdGVtLmxuZywgICAgICAgICAgICAgICAgICAgICAgICAgLy/nu4/luqZcclxuICAgICAgICAgICAgbGF0aXR1ZGU6IGl0ZW0ubGF0LCAgICAgICAgICAgICAgICAgICAgICAgICAgLy/nuqzluqZcclxuICAgICAgICAgICAgaWNvblBhdGg6ICcuLi8uLi9pbWFnZXMvY3kucG5nJywgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgd2lkdGg6IDI3LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1LFxyXG4gICAgICAgICAgICBjYWxsb3V0OiB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogaXRlbS5jeU5hbWU/aXRlbS5jeU5hbWU6J+acquWhq+aKpScsXHJcbiAgICAgICAgICAgICAgY29sb3I6ICcjMDAwJyxcclxuICAgICAgICAgICAgICBmb250U2l6ZTogMTgsXHJcbiAgICAgICAgICAgICAgYmdDb2xvcjogJyNGRkYnLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDUsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI0NDQycsXHJcbiAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ0JZQ0xJQ0snXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9sZElkOiBpdGVtLmlkLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Y6f5aeLSURcclxuICAgICAgICAgICAgdGl0bGU6IGl0ZW0uY3lOYW1lP2l0ZW0uY3lOYW1lOifmnKrloavmiqUnLCAgICAgICAgICAgICAgICAgIC8v5qCH6aKYXHJcbiAgICAgICAgICAgIGltZ0FycjogaXRlbS5waWNGaWxlcywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WbvueJh+aVsOe7hFxyXG4gICAgICAgICAgICBwcm92aW5jZU5hbWU6IGl0ZW0ucHJvdmluY2VOYW1lP2l0ZW0ucHJvdmluY2VOYW1lOicnLCAgICAgLy/nnIFcclxuICAgICAgICAgICAgY2l0eU5hbWU6IGl0ZW0uY2l0eU5hbWU/aXRlbS5jaXR5TmFtZTonJywgICAgICAgICAgICAgICAgIC8v5biCXHJcbiAgICAgICAgICAgIGRpc3RyaWN0TmFtZTogaXRlbS5kaXN0cmljdE5hbWU/aXRlbS5kaXN0cmljdE5hbWU6JycsICAgICAvL+WMulxyXG4gICAgICAgICAgICBhZGRyZXNzOiBpdGVtLmN5QWRkcmVzcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/or6bnu4blnLDlnYBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmKHRoaXMuZGF0YS50b3RhbCA9PSAwKXtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIG1hcmtlcnM6IG5ld01hcmtlcnNMaXN0LCAgICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIHRvdGFsOiByZXMudG90YWwsICAgICAgICAgICAgICAgICAgLy/mgLvmlbBcclxuICAgICAgICAgICAgbXVtTGlzdDogbmV3TWFya2Vyc0xpc3QsICAgICAgICAgICAgICAgIC8v5YiX6KGoXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgbWFya2VyczogdGhpcy5kYXRhLm1hcmtlcnMuY29uY2F0KG5ld01hcmtlcnNMaXN0KSwgICAgICAgICAgICAgICAvL+agh+iusFxyXG4gICAgICAgICAgICBtdW1MaXN0OiB0aGlzLmRhdGEubXVtTGlzdC5jb25jYXQobmV3TWFya2Vyc0xpc3QpLCAgICAgICAgICAgICAgICAvL+WIl+ihqFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5kYXRhLm11bUxpc3QubGVuZ3RoIDwgcmVzLnRvdGFsKXtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIG1vcmVTaG93OiB0cnVlLFxyXG4gICAgICAgICAgICBtb3JlVGl0bGU6ICfngrnlh7vliqDovb3mm7TlpJonLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIG1vcmVTaG93OiB0cnVlLFxyXG4gICAgICAgICAgICBtb3JlVGl0bGU6ICflt7LliqDovb3lhajpg6gnLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHB0QnRuVG9nZ2xlKGU6YW55KTp2b2lkeyAgLy/lhajpg6jmjInpkq7nirbmgIHliIfmjaJcclxuICAgIGlmKGUudGFyZ2V0LmRhdGFzZXQubnVtID09IDEpe1xyXG4gICAgICB0aGlzLnNldERhdGEoeyAgLy/lhajpg6hcclxuICAgICAgICBmbGFnOiAnYWxsUHQnLCAgICAgICAgICAgICAvL+W9k+WJjeWIl+ihqFxyXG4gICAgICAgIHB0QnRuQ2xhc3M6IGUudGFyZ2V0LmRhdGFzZXQubnVtLFxyXG4gICAgICAgIHB0QnRuU2hvdzogZmFsc2UsICAgICAgICAgIC8v6auY57qn5pCc57SiXHJcbiAgICAgICAgcGFnZVNpemU6IDEwLCAgICAgICAgICAgICAvL+avj+mhteaYvuekuuaVsOmHj1xyXG4gICAgICAgIHBhZ2VJbmRleDogMSwgICAgICAgICAgICAgLy/lvZPliY3pobVcclxuICAgICAgICB0b3RhbDogMCwgICAgICAgICAgICAgICAgIC8v5oC75p2h5pWwXHJcbiAgICAgICAgbWFya2VyczogW10sICAgICAgICAgICAgICAvL+agh+iusOaAu+aVsFxyXG4gICAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgLy825om+57uT5p6cXHJcbiAgICAgICAgbXVtTGlzdDogW10sICAgICAgICAgICAgICAvLzbmib7liJfooahcclxuICAgICAgICBzZWFyY2hLZXk6ICcnLCAgICAgICAgICAgIC8v5YWz6ZSu5a2X5pCc57SiXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuZ2V0QWxsUHJvKCk7ICAgICAgICAgICAgIC8vNuaJvuWFqOmDqOW5s+WPsOe7n+iuoVxyXG4gICAgfWVsc2UgaWYoZS50YXJnZXQuZGF0YXNldC5udW0gPT0gMil7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgZmxhZzogJ2N4UHQnLCAgICAgICAgICAgICAvL+W9k+WJjeWIl+ihqFxyXG4gICAgICAgIHB0QnRuQ2xhc3M6IGUudGFyZ2V0LmRhdGFzZXQubnVtLFxyXG4gICAgICAgIHB0QnRuU2hvdzogdHJ1ZSwgICAgICAgICAgIC8v6auY57qn5pCc57SiXHJcbiAgICAgICAgcHRUeXBlQ2xhc3M6IG51bGwsXHJcbiAgICAgICAgcHRUeXBlSWQ6ICcnLFxyXG4gICAgICAgIHB0WmlaaGlDbGFzczogbnVsbCxcclxuICAgICAgICBwdFppWmhpOiAnJyxcclxuICAgICAgICBwdEluZGV4OiAwLCAgICAgICAgICAgICAgICAgLy/lvZPliY3ntKLlvJVcclxuICAgICAgICBwdEluZHVzdHJ5SWQ6IG51bGwsICAgICAgICAgLy/pgInkuK3nmoRpZFxyXG4gICAgICAgIHB0Q3lUeXBlSWQ6ICcnLCAgICAgICAgICAgICAvL+S6p+S4mmlkXHJcbiAgICAgICAgcHRIeVR5cGVJZDogJycsICAgICAgICAgICAgIC8v6KGM5LiaaWRcclxuXHJcbiAgICAgICAgcGFnZVNpemU6IDEwLCAgICAgICAgICAgICAvL+avj+mhteaYvuekuuaVsOmHj1xyXG4gICAgICAgIHBhZ2VJbmRleDogMSwgICAgICAgICAgICAgLy/lvZPliY3pobVcclxuICAgICAgICB0b3RhbDogMCwgICAgICAgICAgICAgICAgIC8v5oC75p2h5pWwXHJcbiAgICAgICAgbWFya2VyczogW10sICAgICAgICAgICAgICAvL+agh+iusOaAu+aVsFxyXG4gICAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgLy825om+57uT5p6cXHJcbiAgICAgICAgbXVtTGlzdDogW10sICAgICAgICAgICAgICAvLzbmib7liJfooahcclxuICAgICAgICBzZWFyY2hLZXk6ICcnLCAgICAgICAgICAgIC8v5YWz6ZSu5a2X5pCc57SiXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuZ2V0Q3hQcm8oKTsgICAgICAgICAgICAgLy825om+5Yib5paw5bmz5Y+w57uf6K6hXHJcbiAgICAgIHRoaXMucHRDeFR5cGVzKCk7ICAgICAgICAgICAgLy/liJvmlrDlubPlj7DnsbvlnotcclxuICAgICAgdGhpcy5pbmR1c3RyeSgpOyAgICAgICAgICAgICAvL+S6p+S4muOAgeihjOS4mlxyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI3B0VHlwZScpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAgLy/lubPlj7DnsbvlnovlsZXlvIDlhbPpl63nirbmgIFcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyNwdFppWmhpJykudG9nZ2xlKGZhbHNlKTsgICAgICAgIC8v5bmz5Y+w6LWE6LSo5bGV5byA5YWz6Zet54q25oCBXHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjcHRJbmR1c3RyeScpLnRvZ2dsZShmYWxzZSk7ICAgICAvL+S6p+S4muOAgeihjOS4muWxleW8gOWFs+mXreeKtuaAgVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgZmxhZzogJ2N5UHQnLCAgICAgICAgICAgICAgLy/lvZPliY3liJfooahcclxuICAgICAgICBwdEJ0bkNsYXNzOiBlLnRhcmdldC5kYXRhc2V0Lm51bSxcclxuICAgICAgICBwdEJ0blNob3c6IHRydWUsICAgICAgICAgICAvL+mrmOe6p+aQnOe0olxyXG4gICAgICAgIHB0VHlwZUNsYXNzOiBudWxsLFxyXG4gICAgICAgIHB0VHlwZUlkOiAnJyxcclxuICAgICAgICBwdFppWmhpQ2xhc3M6IG51bGwsXHJcbiAgICAgICAgcHRaaVpoaTogJycsXHJcbiAgICAgICAgcHRJbmRleDogMCwgICAgICAgICAgICAgICAgIC8v5b2T5YmN57Si5byVXHJcbiAgICAgICAgcHRJbmR1c3RyeUlkOiBudWxsLCAgICAgICAgIC8v6YCJ5Lit55qEaWRcclxuICAgICAgICBwdEN5VHlwZUlkOiAnJywgICAgICAgICAgICAgLy/kuqfkuJppZFxyXG4gICAgICAgIHB0SHlUeXBlSWQ6ICcnLCAgICAgICAgICAgICAvL+ihjOS4mmlkXHJcblxyXG4gICAgICAgIHBhZ2VTaXplOiAxMCwgICAgICAgICAgICAgLy/mr4/pobXmmL7npLrmlbDph49cclxuICAgICAgICBwYWdlSW5kZXg6IDEsICAgICAgICAgICAgIC8v5b2T5YmN6aG1XHJcbiAgICAgICAgdG90YWw6IDAsICAgICAgICAgICAgICAgICAvL+aAu+adoeaVsFxyXG4gICAgICAgIG1hcmtlcnM6IFtdLCAgICAgICAgICAgICAgLy/moIforrDmgLvmlbBcclxuICAgICAgICBudW06IDAsICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgLy825om+5YiX6KGoXHJcbiAgICAgICAgc2VhcmNoS2V5OiAnJywgICAgICAgICAgICAvL+WFs+mUruWtl+aQnOe0olxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLmdldEN5UHJvKCk7ICAgICAgICAgICAgIC8vNuaJvuWIm+S4muW5s+WPsOe7n+iuoVxyXG4gICAgICB0aGlzLnB0VHlwZXMoKTsgICAgICAgICAgICAgIC8v57G75Z6LXHJcbiAgICAgIHRoaXMuaW5kdXN0cnkoKTsgICAgICAgICAgICAgLy/kuqfkuJrjgIHooYzkuJpcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyNwdFR5cGUnKS50b2dnbGUoZmFsc2UpOyAgICAgICAgIC8v5bmz5Y+w57G75Z6L5bGV5byA5YWz6Zet54q25oCBXHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjcHRaaVpoaScpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAvL+W5s+WPsOi1hOi0qOWxleW8gOWFs+mXreeKtuaAgVxyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI3B0SW5kdXN0cnknKS50b2dnbGUoZmFsc2UpOyAgICAgLy/kuqfkuJrjgIHooYzkuJrlsZXlvIDlhbPpl63nirbmgIFcclxuICAgIH1cclxuICB9LFxyXG4gIHB0TmF2SXRlbShkYXRhOmFueSk6dm9pZHsgICAgICAgLy/ooYzkuJrkuqfkuJrvvIjlt6bkvqflr7zoiKrngrnlh7vml7bvvIzop6blj5HnmoTkuovku7bvvIlcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHB0SW5kZXg6IGRhdGEuZGV0YWlsLmluZGV4IHx8IDAsXHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHB0SW5kdXN0cnlJdGVtKGRhdGE6YW55KTp2b2lkIHsgIC8v6KGM5Lia5Lqn5Lia77yI5Y+z5L6n6YCJ5oup6aG56KKr54K55Ye75pe277yM5Lya6Kem5Y+R55qE5LqL5Lu277yJXHJcbiAgICBjb25zdCBpZCA9IHRoaXMuZGF0YS5wdEluZHVzdHJ5SWQgPT09IGRhdGEuZGV0YWlsLmlkID8gbnVsbCA6IGRhdGEuZGV0YWlsLmlkO1xyXG4gICAgY29uc3QgcElkID0gZGF0YS5kZXRhaWwucElkO1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgcHRJbmR1c3RyeUlkOiBpZCxcclxuICAgICAgcHRDeVR5cGVJZDogIHBJZCA/IHBJZCA6ICcnLCAgICAgICAgICAvL+S6p+S4mmlkXHJcbiAgICAgIHB0SHlUeXBlSWQ6ICBpZCA9PSBwSWQgPyAnJyA6IGlkLCAgICAgLy/ooYzkuJppZFxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICBwdFR5cGVGbihlOmFueSk6dm9pZHsgIC8v5bmz5Y+w57G75Z6L6Kem5Y+RXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBwdFR5cGVDbGFzczogZS50YXJnZXQuZGF0YXNldC5pZCxcclxuICAgICAgcHRUeXBlSWQ6IGUudGFyZ2V0LmRhdGFzZXQuaWRcclxuICAgIH0pXHJcbiAgfSxcclxuICBwdFppWmhpRm4oZTphbnkpOnZvaWR7ICAvL+W5s+WPsOi1hOi0qOinpuWPkVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgcHRaaVpoaUNsYXNzOiBlLnRhcmdldC5kYXRhc2V0LmlkLFxyXG4gICAgICBwdFppWmhpOiBlLnRhcmdldC5kYXRhc2V0LnRpdGxlXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIHB0UmVzZXQoZTphbnkpOnZvaWR7ICAvL+mHjee9rlxyXG4gICAgbGV0IGZsYWc6bnVtYmVyID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuZmxhZztcclxuICAgIGlmKGZsYWcgPT0gMSl7ICAvL+W5s+WPsOexu+Wei1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHB0VHlwZUNsYXNzOiBudWxsLFxyXG4gICAgICAgIHB0VHlwZUlkOiAnJyxcclxuICAgICAgICBudW06IDAsICAgICAgICAgICAgICAgICAgICAvLzbmib7nu5PmnpxcclxuICAgICAgICBtdW1MaXN0OiBbXSwgICAgICAgICAgICAgICAvLzbmib7liJfooahcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyNwdFR5cGUnKS50b2dnbGUoZmFsc2UpOyAgICAgICAgIC8v5bmz5Y+w57G75Z6L5YWz6ZetXHJcbiAgICB9ZWxzZSBpZihmbGFnID09IDIpeyAgLy/lubPlj7DotYTotKhcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBwdFppWmhpQ2xhc3M6IG51bGwsXHJcbiAgICAgICAgcHRaaVpoaTogJycsXHJcbiAgICAgICAgbnVtOiAwLCAgICAgICAgICAgICAgICAgICAgLy825om+57uT5p6cXHJcbiAgICAgICAgbXVtTGlzdDogW10sICAgICAgICAgICAgICAgLy825om+5YiX6KGoXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjcHRaaVpoaScpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAvL+W5s+WPsOi1hOi0qOWFs+mXrVxyXG4gICAgfWVsc2V7ICAvL+S6p+S4muOAgeihjOS4mlxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHB0SW5kZXg6IDAsICAgICAgICAgICAgICAgICAvL+W9k+WJjee0ouW8lVxyXG4gICAgICAgIHB0SW5kdXN0cnlJZDogbnVsbCwgICAgICAgICAvL+mAieS4reeahGlkXHJcbiAgICAgICAgcHRDeVR5cGVJZDogJycsICAgICAgICAgICAgIC8v5Lqn5LiaaWRcclxuICAgICAgICBwdEh5VHlwZUlkOiAnJywgICAgICAgICAgICAgICAvL+ihjOS4mmlkXHJcbiAgICAgICAgbnVtOiAwLCAgICAgICAgICAgICAgICAgICAgLy825om+57uT5p6cXHJcbiAgICAgICAgbXVtTGlzdDogW10sICAgICAgICAgICAgICAgLy825om+5YiX6KGoXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjcHRJbmR1c3RyeScpLnRvZ2dsZShmYWxzZSk7ICAgICAvL+S6p+S4muOAgeihjOS4muWFs+mXrVxyXG4gICAgfVxyXG4gICAgaWYodGhpcy5kYXRhLmZsYWcgPT0gJ2N4UHQnKXtcclxuICAgICAgdGhpcy5nZXRDeFBybygpOyAgICAgICAgICAgICAvLzbmib7liJvmlrDlubPlj7Dnu5/orqFcclxuICAgIH1cclxuICAgIGlmKHRoaXMuZGF0YS5mbGFnID09ICdjeVB0Jyl7XHJcbiAgICAgIHRoaXMuZ2V0Q3lQcm8oKTsgICAgICAgICAgICAgLy825om+5Yib5Lia5bmz5Y+w57uf6K6hXHJcbiAgICB9XHJcbiAgfSxcclxuICBwdFN1Ym1pdChlOmFueSk6dm9pZHsgIC8v5a6M5oiQXHJcbiAgICBsZXQgZmxhZzpudW1iZXIgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5mbGFnO1xyXG4gICAgaWYoZmxhZyA9PSAxKXtcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyNwdFR5cGUnKS50b2dnbGUoZmFsc2UpOyAgICAgICAgIC8v5bmz5Y+w57G75Z6L5bGV5byA5YWz6Zet54q25oCBXHJcbiAgICB9ZWxzZSBpZihmbGFnID09IDIpe1xyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI3B0WmlaaGknKS50b2dnbGUoZmFsc2UpOyAgICAgICAgIC8v5bmz5Y+w6LWE6LSo5bGV5byA5YWz6Zet54q25oCBXHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyNwdEluZHVzdHJ5JykudG9nZ2xlKGZhbHNlKTsgICAgIC8v5Lqn5Lia44CB6KGM5Lia5bGV5byA5YWz6Zet54q25oCBXHJcbiAgICB9XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBudW06IDAsICAgICAgICAgICAgICAgICAgICAvLzbmib7nu5PmnpxcclxuICAgICAgbXVtTGlzdDogW10sICAgICAgICAgICAgICAgLy825om+5YiX6KGoXHJcbiAgICAgIG1hcmtlcnM6W10sICAgICAgICAgICAgICAgLy/moIforrDngrnlpITnkIblkI7nmoTmlbDmja7vvIhpZOOAgeafpeivouS9v+eUqO+8iVxyXG4gICAgICBwYWdlU2l6ZTogMTAsICAgICAgICAgICAgIC8v5q+P6aG15pi+56S65pWw6YePXHJcbiAgICAgIHBhZ2VJbmRleDogMSwgICAgICAgICAgICAgLy/lvZPliY3pobVcclxuICAgICAgdG90YWw6IDAsICAgICAgICAgICAgICAgICAvL+aAu+adoeaVsFxyXG4gICAgfSlcclxuICAgIGlmKHRoaXMuZGF0YS5mbGFnID09ICdjeFB0Jyl7XHJcbiAgICAgIHRoaXMuZ2V0Q3hQcm8oKTsgICAgICAgICAgICAgLy825om+5Yib5paw5bmz5Y+w57uf6K6hXHJcbiAgICB9XHJcbiAgICBpZih0aGlzLmRhdGEuZmxhZyA9PSAnY3lQdCcpe1xyXG4gICAgICB0aGlzLmdldEN5UHJvKCk7ICAgICAgICAgICAgIC8vNuaJvuWIm+S4muW5s+WPsOe7n+iuoVxyXG4gICAgfVxyXG4gICAgXHJcbiAgfSxcclxuXHJcblxyXG4gIC8v5om+5pS/562W77yI5aSW6ZO+77yJXHJcbiAgemNGbigpOnZvaWR7IFxyXG4gICAgd3gubmF2aWdhdGVUb01pbmlQcm9ncmFtKHtcclxuICAgICAgYXBwSWQ6ICd3eGY0MDgzYTVmODM2NWEzMGEnLFxyXG4gICAgICBwYXRoOiAnJyxcclxuICAgICAgc3VjY2VzcygpIHtcclxuICAgICAgICAvLyDmiZPlvIDmiJDlip9cclxuICAgICAgICAvLyB3eC5zd2l0Y2hUYWIoe1xyXG4gICAgICAgIC8vICAgdXJsOiAnL3BhZ2VzL2luZGV4L2luZGV4J1xyXG4gICAgICAgIC8vIH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSxcclxuXHJcblxyXG4gIC8v5om+6aG555uuXHJcbiAgeG1GbigpOnZvaWR7ICAvL+aJvumhueebrlxyXG4gICAgdGhpcy5oaWRlRm4oKTsgICAgICAgICAgICAgLy/pnIDopoHpmpDol4/nmoTlhYPntKBcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGZsYWc6ICd4bScsICAgICAgICAgICAgICAgIC8v5b2T5YmN5YiX6KGoXHJcblxyXG4gICAgICB4bUluZGV4OiAwLCAgICAgICAgICAgICAgICAgLy/lvZPliY3ntKLlvJVcclxuICAgICAgeG1JbmR1c3RyeUlkOiBudWxsLCAgICAgICAgIC8v6YCJ5Lit55qEaWRcclxuXHJcbiAgICAgIHhtU3RhZ2VDbGFzczogbnVsbCwgICAgICAgICAgLy/pmLbmrrXmjInpkq7nirbmgIHliIfmjaJcclxuICAgICAgeG1DYXRlZ29yeUNsYXNzOiBudWxsLCAgICAgICAvL+exu+WIq+aMiemSrueKtuaAgeWIh+aNolxyXG4gICAgICB4bUZpbmFuY2luZ0NsYXNzOiBudWxsLCAgICAgIC8v6YeR6aKd5oyJ6ZKu54q25oCB5YiH5o2iXHJcbiAgICAgIHhtU3RhZ2VJZDogJycsICAgICAgICAgICAgICAgLy/miYDlpITpmLbmrrVcclxuICAgICAgeG1UeXBlSWQ6ICcnLCAgICAgICAgICAgICAgICAvL+mcgOaxguexu+WIq1xyXG4gICAgICB4bVR6TW9uZXk6ICcnLCAgICAgICAgICAgICAgIC8v6J6N6LWE6YeR6aKdXHJcbiAgICAgIHhtQ3lUeXBlSWQ6ICcnLCAgICAgICAgICAgICAgLy/kuqfkuJppZFxyXG4gICAgICB4bUh5VHlwZUlkOiAnJywgICAgICAgICAgICAgIC8v6KGM5LiaaWRcclxuXHJcbiAgICAgIGlzU2VhcmNoU2hvdzogdHJ1ZSwgICAgICAgIC8v5pCc57Si57uT5p6c5pWw5o2uXHJcbiAgICAgIHByb1NlYXJjaEluZm9TaG93OiB0cnVlLCAgIC8v6aG555uu6auY57qn5pCc57SiXHJcbiAgICB9KVxyXG4gICAgdGhpcy5nZXRQcm9MaXN0KCk7ICAgICAgICAgICAvLzbmib7pobnnm67nu5/orqFcclxuICAgIHRoaXMueG1TdGFnZSgpOyAgICAgICAgICAgICAgLy/miYDlpITpmLbmrrVcclxuICAgIHRoaXMueG1DYXRlZ29yeSgpOyAgICAgICAgICAgLy/pnIDmsYLnsbvliKtcclxuICAgIHRoaXMueG1GaW5hbmNpbmcoKTsgICAgICAgICAgLy/ono3otYTph5Hpop1cclxuICAgIHRoaXMuaW5kdXN0cnkoKTsgICAgICAgICAgICAgLy/kuqfkuJrjgIHooYzkuJpcclxuICB9LFxyXG4gIGdldFByb0xpc3QoKTp2b2lkeyAgICAgICAgICAgICAgIC8vNuaJvumhueebrue7n+iuoVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgcHRUaXRsZTogJ+mhueebricsICAgICAgICAvL+afpeivouS5puexjeagh+mimFxyXG4gICAgICBtb3JlU2hvdzogZmFsc2UsXHJcbiAgICB9KVxyXG4gICAgaHR0cHMucmVxdWVzdChhcGkuZmluZFBybywge1xyXG4gICAgICB0ZW5hbnRJZDogYXBpLmFyZWFJZCwgICAgICAgICAgICAgICAgIC8v5Zyw5Yy6aWRcclxuICAgICAga2V5OiB0aGlzLmRhdGEuc2VhcmNoS2V5LCAgICAgICAgICAgICAvL+WFs+mUruWtl+aQnOe0olxyXG4gICAgICBwYWdlU2l6ZTogdGhpcy5kYXRhLnBhZ2VTaXplLCAgICAgICAgIC8v5q+P6aG15pi+56S65pWw6YePXHJcbiAgICAgIHBhZ2VJbmRleDogdGhpcy5kYXRhLnBhZ2VJbmRleCwgICAgICAgLy/pobXmlbBcclxuICAgICAgY3VyU3RhZ2U6IHRoaXMuZGF0YS54bVN0YWdlSWQsICAgICAvL+aJgOWkhOmYtuautVxyXG4gICAgICBuZWVkVHlwZXM6IHRoaXMuZGF0YS54bVR5cGVJZCwgICAgICAgIC8v6ZyA5rGC57G75YirXHJcbiAgICAgIHJ6TW9uZXk6IHRoaXMuZGF0YS54bVR6TW9uZXksICAgICAgICAgLy/ono3otYTph5Hpop1cclxuICAgICAgY3lUeXBlSWQ6IHRoaXMuZGF0YS54bUN5VHlwZUlkLCAgICAgICAvL+S6p+S4mmlkXHJcbiAgICAgIGh5VHlwZUlkOiB0aGlzLmRhdGEueG1IeVR5cGVJZCAgICAgICAgLy/ooYzkuJppZFxyXG4gICAgfSwgJ0dFVCcpLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgaWYocmVzKXtcclxuICAgICAgICBsZXQgbmV3TWFya2Vyc0xpc3Q6YW55ID0gcmVzLmxpc3QubWFwKChpdGVtOmFueSwgaW5kZXg6bnVtYmVyKTphbnk9PntcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBpbmRleCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vbWFw55So55qE6Ieq5a6a5LmJSURcclxuICAgICAgICAgICAgbmFtZTogJ+mhueebricsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+ivpuaDheWIpOaWrVxyXG4gICAgICAgICAgICBsb25naXR1ZGU6IGl0ZW0ubG5nLCAgICAgICAgICAgICAgICAgICAgICAgICAvL+e7j+W6plxyXG4gICAgICAgICAgICBsYXRpdHVkZTogaXRlbS5sYXQsICAgICAgICAgICAgICAgICAgICAgICAgICAvL+e6rOW6plxyXG4gICAgICAgICAgICBpY29uUGF0aDogJy4uLy4uL2ltYWdlcy94bS5wbmcnLCAgICAgICAgICAgICAvL+agh+iusFxyXG4gICAgICAgICAgICB3aWR0aDogMjcsXHJcbiAgICAgICAgICAgIGhlaWdodDogMzUsXHJcbiAgICAgICAgICAgIGNhbGxvdXQ6IHtcclxuICAgICAgICAgICAgICBjb250ZW50OiBpdGVtLnByb05hbWU/aXRlbS5wcm9OYW1lOifmnKrloavmiqUnLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IDE4LFxyXG4gICAgICAgICAgICAgIGJnQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1LFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNDQ0MnLFxyXG4gICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdCWUNMSUNLJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbGRJZDogaXRlbS5pZCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WOn+Wni0lEXHJcbiAgICAgICAgICAgIHRpdGxlOiBpdGVtLnByb05hbWU/aXRlbS5wcm9OYW1lOifmnKrloavmiqUnLCAgICAgICAgICAgICAgIC8v5qCH6aKYXHJcbiAgICAgICAgICAgIGltZ0FycjogaXRlbS5waWN0dXJlRmlsZXMsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Zu+54mH5pWw57uEXHJcbiAgICAgICAgICAgIHByb3ZpbmNlTmFtZTogaXRlbS5wcm92aW5jZU5hbWU/aXRlbS5wcm92aW5jZU5hbWU6JycsICAgIC8v55yBXHJcbiAgICAgICAgICAgIGNpdHlOYW1lOiBpdGVtLmNpdHlOYW1lP2l0ZW0uY2l0eU5hbWU6JycsICAgICAgICAgICAgICAgIC8v5biCXHJcbiAgICAgICAgICAgIGRpc3RyaWN0TmFtZTogaXRlbS5kaXN0cmljdE5hbWU/aXRlbS5kaXN0cmljdE5hbWU6JycsICAgIC8v5Yy6XHJcbiAgICAgICAgICAgIGFkZHJlc3M6IGl0ZW0uYWRkcmVzcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6K+m57uG5Zyw5Z2AXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZih0aGlzLmRhdGEudG90YWwgPT0gMCl7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBtYXJrZXJzOiBuZXdNYXJrZXJzTGlzdCwgICAgICAgICAgICAgICAvL+agh+iusFxyXG4gICAgICAgICAgICB0b3RhbDogcmVzLnRvdGFsLCAgICAgICAgICAgICAgICAgICAgICAvL+aAu+aVsFxyXG4gICAgICAgICAgICBtdW1MaXN0OiBuZXdNYXJrZXJzTGlzdCwgICAgICAgICAgICAgICAgLy/liJfooahcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBtYXJrZXJzOiB0aGlzLmRhdGEubWFya2Vycy5jb25jYXQobmV3TWFya2Vyc0xpc3QpLCAgICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIG11bUxpc3Q6IHRoaXMuZGF0YS5tdW1MaXN0LmNvbmNhdChuZXdNYXJrZXJzTGlzdCksICAgICAgICAgICAgICAgIC8v5YiX6KGoXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZih0aGlzLmRhdGEubXVtTGlzdC5sZW5ndGggPCByZXMudG90YWwpe1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgbW9yZVNob3c6IHRydWUsXHJcbiAgICAgICAgICAgIG1vcmVUaXRsZTogJ+eCueWHu+WKoOi9veabtOWkmicsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgbW9yZVNob3c6IHRydWUsXHJcbiAgICAgICAgICAgIG1vcmVUaXRsZTogJ+W3suWKoOi9veWFqOmDqCcsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgeG1TdGFnZUZuKGU6YW55KTp2b2lkeyAgLy/miYDlpITpmLbmrrXop6blj5FcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHhtU3RhZ2VDbGFzczogZS50YXJnZXQuZGF0YXNldC5pZCxcclxuICAgICAgeG1TdGFnZUlkOiBlLnRhcmdldC5kYXRhc2V0LmlkXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgeG1DYXRlZ29yeUZuKGU6YW55KTp2b2lkeyAgLy/pnIDmsYLnsbvliKvop6blj5FcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHhtQ2F0ZWdvcnlDbGFzczogZS50YXJnZXQuZGF0YXNldC5pZCxcclxuICAgICAgeG1UeXBlSWQ6IGUudGFyZ2V0LmRhdGFzZXQuaWRcclxuICAgIH0pXHJcbiAgfSxcclxuICB4bUZpbmFuY2luZ0ZuKGU6YW55KTp2b2lkeyAgLy/ono3otYTph5Hpop3op6blj5FcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHhtRmluYW5jaW5nQ2xhc3M6IGUudGFyZ2V0LmRhdGFzZXQuaWQsXHJcbiAgICAgIHhtVHpNb25leTogZS50YXJnZXQuZGF0YXNldC5pZFxyXG4gICAgfSlcclxuICB9LFxyXG4gIHhtUmVzZXQoZTphbnkpOnZvaWR7ICAvL+mhueebrumHjee9rlxyXG4gICAgbGV0IGZsYWc6bnVtYmVyID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuZmxhZztcclxuICAgIGlmKGZsYWcgPT0gMSl7ICAvL+aJgOWkhOmYtuautVxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHhtU3RhZ2VDbGFzczogbnVsbCxcclxuICAgICAgICB4bVN0YWdlSWQ6ICcnLFxyXG4gICAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgIC8vNuaJvuWIl+ihqFxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI3htU3RhZ2UnKS50b2dnbGUoZmFsc2UpOyAgICAgICAgIC8v5omA5aSE6Zi25q615YWz6ZetXHJcbiAgICB9ZWxzZSBpZihmbGFnID09IDIpeyAgLy/pnIDmsYLnsbvliKtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICB4bUNhdGVnb3J5Q2xhc3M6IG51bGwsXHJcbiAgICAgICAgeG1UeXBlSWQ6ICcnLFxyXG4gICAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgIC8vNuaJvuWIl+ihqFxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI3htQ2F0ZWdvcnknKS50b2dnbGUoZmFsc2UpOyAgICAgICAgLy/pnIDmsYLnsbvliKvlhbPpl61cclxuICAgIH1lbHNlIGlmKGZsYWcgPT0gMyl7ICAvL+iejei1hOmHkeminVxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHhtRmluYW5jaW5nQ2xhc3M6IG51bGwsXHJcbiAgICAgICAgeG1Uek1vbmV5OiAnJyxcclxuICAgICAgICBudW06IDAsICAgICAgICAgICAgICAgICAgICAvLzbmib7nu5PmnpxcclxuICAgICAgICBtdW1MaXN0OiBbXSwgICAgICAgICAgICAgICAvLzbmib7liJfooahcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyN4bUZpbmFuY2luZycpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAvL+W5s+WPsOi1hOi0qOWFs+mXrVxyXG4gICAgfWVsc2V7ICAvL+S6p+S4muOAgeihjOS4mlxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHhtSW5kZXg6IDAsICAgICAgICAgICAgICAgICAvL+W9k+WJjee0ouW8lVxyXG4gICAgICAgIHhtSW5kdXN0cnlJZDogbnVsbCwgICAgICAgICAvL+mAieS4reeahGlkXHJcbiAgICAgICAgeG1DeVR5cGVJZDogJycsICAgICAgICAgICAgIC8v5Lqn5LiaaWRcclxuICAgICAgICB4bUh5VHlwZUlkOiAnJywgICAgICAgICAgICAgLy/ooYzkuJppZFxyXG4gICAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgICAvLzbmib7nu5PmnpxcclxuICAgICAgICBtdW1MaXN0OiBbXSwgICAgICAgICAgICAgICAgLy825om+5YiX6KGoXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjeG1JbmR1c3RyeScpLnRvZ2dsZShmYWxzZSk7ICAgICAvL+S6p+S4muOAgeihjOS4muWFs+mXrVxyXG4gICAgfVxyXG4gICAgdGhpcy5nZXRQcm9MaXN0KCk7ICAgICAgICAgICAgIC8vNuaJvumhueebrue7n+iuoVxyXG4gIH0sXHJcbiAgeG1TdWJtaXQoZTphbnkpOnZvaWR7ICAvL+mhueebruWujOaIkFxyXG4gICAgbGV0IGZsYWc6bnVtYmVyID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuZmxhZztcclxuICAgIGlmKGZsYWcgPT0gMSl7XHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjeG1TdGFnZScpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAgLy/miYDlpITpmLbmrrXlhbPpl61cclxuICAgIH1lbHNlIGlmKGZsYWcgPT0gMil7XHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjeG1DYXRlZ29yeScpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAvL+mcgOaxguexu+WIq+WFs+mXrVxyXG4gICAgfWVsc2UgaWYoZmxhZyA9PSAzKXtcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyN4bUZpbmFuY2luZycpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAvL+W5s+WPsOi1hOi0qOWFs+mXrVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjeG1JbmR1c3RyeScpLnRvZ2dsZShmYWxzZSk7ICAgICAvL+S6p+S4muOAgeihjOS4muWFs+mXrVxyXG4gICAgfVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgbnVtOiAwLCAgICAgICAgICAgICAgICAgICAgLy825om+57uT5p6cXHJcbiAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgIC8vNuaJvuWIl+ihqFxyXG4gICAgICBtYXJrZXJzOltdLCAgICAgICAgICAgICAgIC8v5qCH6K6w54K55aSE55CG5ZCO55qE5pWw5o2u77yIaWTjgIHmn6Xor6Lkvb/nlKjvvIlcclxuICAgICAgcGFnZVNpemU6IDEwLCAgICAgICAgICAgICAvL+avj+mhteaYvuekuuaVsOmHj1xyXG4gICAgICBwYWdlSW5kZXg6IDEsICAgICAgICAgICAgIC8v5b2T5YmN6aG1XHJcbiAgICAgIHRvdGFsOiAwLCAgICAgICAgICAgICAgICAgLy/mgLvmnaHmlbBcclxuICAgIH0pXHJcbiAgICB0aGlzLmdldFByb0xpc3QoKTsgICAgICAgICAgICAgLy825om+6aG555uu57uf6K6hXHJcbiAgfSxcclxuICB4bU5hdkl0ZW0oZGF0YTphbnkpOnZvaWR7ICAvL+ihjOS4muS6p+S4mu+8iOW3puS+p+WvvOiIqueCueWHu+aXtu+8jOinpuWPkeeahOS6i+S7tu+8iVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgeG1JbmRleDogZGF0YS5kZXRhaWwuaW5kZXggfHwgMCxcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgeG1JbmR1c3RyeUl0ZW0oZGF0YTphbnkpOnZvaWQgeyAgLy/ooYzkuJrkuqfkuJrvvIjlj7PkvqfpgInmi6npobnooqvngrnlh7vml7bvvIzkvJrop6blj5HnmoTkuovku7bvvIlcclxuICAgIGNvbnN0IGlkID0gdGhpcy5kYXRhLnhtSW5kdXN0cnlJZCA9PT0gZGF0YS5kZXRhaWwuaWQgPyBudWxsIDogZGF0YS5kZXRhaWwuaWQ7XHJcbiAgICBjb25zdCBwSWQgPSBkYXRhLmRldGFpbC5wSWQ7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICB4bUluZHVzdHJ5SWQ6IGlkLFxyXG4gICAgICB4bUN5VHlwZUlkOiBwSWQgPyBwSWQgOiAnJywgICAgICAgICAgLy/kuqfkuJppZFxyXG4gICAgICB4bUh5VHlwZUlkOiBpZCA9PSBwSWQgPyAnJyA6IGlkLCAgICAgLy/ooYzkuJppZFxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuXHJcblxyXG4gIC8v5om+5Zy65ZywXHJcbiAgY2RGbigpOnZvaWR7ICAvL+aJvuWcuuWcsFxyXG4gICAgdGhpcy5oaWRlRm4oKTsgICAgICAgICAgICAgICAvL+mcgOimgemakOiXj+eahOWFg+e0oFxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgZmxhZzogJ2NkJywgICAgICAgICAgICAgICAgICAvL+W9k+WJjeWIl+ihqFxyXG5cclxuICAgICAgY2RJbmRleDogMCwgICAgICAgICAgICAgICAgIC8v5b2T5YmN57Si5byVXHJcbiAgICAgIGNkSW5kdXN0cnlJZDogbnVsbCwgICAgICAgICAvL+mAieS4reeahGlkXHJcbiAgXHJcbiAgICAgIGNkVHlwZUNsYXNzOiBudWxsLCAgICAgICAgICAvL+i1hOa6kOexu+Wei1xyXG4gICAgICBjZFVzZXJDbGFzczogbnVsbCwgICAgICAgICAgLy/lnLrlnLDnlKjpgJRcclxuXHJcbiAgICAgIGNkVHlwZUlkOiAnJywgICAgICAgICAgICAgICAvL+i9veS9k+epuumXtOexu+Wei1xyXG4gICAgICBjZENodVp1SWQ6ICcnLCAgICAgICAgICAgICAgLy/mmK/lkKblh7rnp59cclxuICAgICAgY2RTYWxlSWQ6ICcnLCAgICAgICAgICAgICAgIC8v5piv5ZCm5Ye65ZSuXHJcbiAgICAgIGNkQ3lUeXBlSWQ6ICcnLCAgICAgICAgICAgICAvL+S6p+S4mmlkXHJcbiAgICAgIGNkSHlUeXBlSWQ6ICcnLCAgICAgICAgICAgICAvL+ihjOS4mmlkXHJcblxyXG4gICAgICBpc1NlYXJjaFNob3c6IHRydWUsICAgICAgICAgIC8v5pCc57Si57uT5p6c5pWw5o2uXHJcbiAgICAgIGNkU2VhcmNoSW5mb1Nob3c6IHRydWUsICAgICAgLy/lnLrlnLDpq5jnuqfmkJzntKJcclxuICAgIH0pXHJcbiAgICB0aGlzLmdldFNpdGVMaXN0KCk7ICAgICAgICAgICAgLy825om+5Zy65Zyw57uf6K6hXHJcblxyXG4gICAgdGhpcy5jZENhcnJpZXIoKTsgICAgICAgICAgICAgIC8v6LWE5rqQ57G75Z6LXHJcbiAgICB0aGlzLmluZHVzdHJ5KCk7ICAgICAgICAgICAgICAgLy/kuqfkuJrjgIHooYzkuJpcclxuICB9LFxyXG4gIGdldFNpdGVMaXN0KCk6dm9pZHsgICAgICAgICAgICAgICAvLzbmib7lnLrlnLDnu5/orqFcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHB0VGl0bGU6ICflnLrlnLAnLCAgICAgICAgICAgICAgLy/mn6Xor6LmoIfpophcclxuICAgICAgbW9yZVNob3c6IGZhbHNlLFxyXG4gICAgfSlcclxuICAgIGh0dHBzLnJlcXVlc3QoYXBpLmN5UGxhdGZvcm0sIHtcclxuICAgICAgdGVuYW50SWQ6IGFwaS5hcmVhSWQsICAgICAgICAgICAgICAgICAvL+WcsOWMumlkXHJcbiAgICAgIGtleTogdGhpcy5kYXRhLnNlYXJjaEtleSwgICAgICAgICAgICAgLy/lhbPplK7lrZfmkJzntKJcclxuICAgICAgcGFnZVNpemU6IHRoaXMuZGF0YS5wYWdlU2l6ZSwgICAgICAgICAvL+avj+mhteaYvuekuuaVsOmHj1xyXG4gICAgICBwYWdlSW5kZXg6IHRoaXMuZGF0YS5wYWdlSW5kZXgsICAgICAgIC8v6aG15pWwXHJcbiAgICAgIHp0VHlwZUlkOiB0aGlzLmRhdGEuY2RUeXBlSWQsICAgICAgICAgLy/ovb3kvZPnqbrpl7TnsbvlnotcclxuICAgICAgaXNDaHVadTogdGhpcy5kYXRhLmNkQ2h1WnVJZCwgICAgICAgICAgLy/mmK/lkKblh7rnp59cclxuICAgICAgaXNTYWxlOiB0aGlzLmRhdGEuY2RTYWxlSWQsICAgICAgICAgICAvL+aYr+WQpuWHuuWUrlxyXG4gICAgICBjeVR5cGVJZDogdGhpcy5kYXRhLmNkQ3lUeXBlSWQsICAgICAgIC8v5Lqn5LiaaWRcclxuICAgICAgaHlUeXBlSWQ6IHRoaXMuZGF0YS5jZEh5VHlwZUlkICAgICAgICAvL+ihjOS4mmlkXHJcbiAgICB9LCAnR0VUJykudGhlbigocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICBpZihyZXMpe1xyXG4gICAgICAgIGxldCBuZXdNYXJrZXJzTGlzdDphbnkgPSByZXMubGlzdC5tYXAoKGl0ZW06YW55LCBpbmRleDpudW1iZXIpOmFueT0+e1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGluZGV4LCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9tYXDnlKjnmoToh6rlrprkuYlJRFxyXG4gICAgICAgICAgICBuYW1lOiAn5Zy65ZywJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6K+m5oOF5Yik5patXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZTogaXRlbS5sbmcsICAgICAgICAgICAgICAgICAgICAgICAgIC8v57uP5bqmXHJcbiAgICAgICAgICAgIGxhdGl0dWRlOiBpdGVtLmxhdCwgICAgICAgICAgICAgICAgICAgICAgICAgIC8v57qs5bqmXHJcbiAgICAgICAgICAgIGljb25QYXRoOiAnLi4vLi4vaW1hZ2VzL2NkLnBuZycsICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIHdpZHRoOiAyNyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNSxcclxuICAgICAgICAgICAgY2FsbG91dDoge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IGl0ZW0uY3l6dE5hbWU/aXRlbS5jeXp0TmFtZTon5pyq5aGr5oqlJyxcclxuICAgICAgICAgICAgICBjb2xvcjogJyMwMDAnLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAxOCxcclxuICAgICAgICAgICAgICBiZ0NvbG9yOiAnI0ZGRicsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNSxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXHJcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjQ0NDJyxcclxuICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnQllDTElDSydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb2xkSWQ6IGl0ZW0uaWQsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/ljp/lp4tJRFxyXG4gICAgICAgICAgICB0aXRsZTogaXRlbS5jeXp0TmFtZT9pdGVtLmN5enROYW1lOifmnKrloavmiqUnLCAgICAgICAgICAgICAgLy/moIfpophcclxuICAgICAgICAgICAgaW1nQXJyOiBpdGVtLnBpY0ZpbGVzLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lm77niYfmlbDnu4RcclxuICAgICAgICAgICAgcHJvdmluY2VOYW1lOiBpdGVtLnByb3ZpbmNlTmFtZT9pdGVtLnByb3ZpbmNlTmFtZTonJywgICAgLy/nnIFcclxuICAgICAgICAgICAgY2l0eU5hbWU6IGl0ZW0uY2l0eU5hbWU/aXRlbS5jaXR5TmFtZTonJywgICAgICAgICAgICAgICAgLy/luIJcclxuICAgICAgICAgICAgZGlzdHJpY3ROYW1lOiBpdGVtLmRpc3RyaWN0TmFtZT9pdGVtLmRpc3RyaWN0TmFtZTonJywgICAgLy/ljLpcclxuICAgICAgICAgICAgYWRkcmVzczogaXRlbS5jeXp0QWRkcmVzcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/or6bnu4blnLDlnYBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmKHRoaXMuZGF0YS50b3RhbCA9PSAwKXtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIG1hcmtlcnM6IG5ld01hcmtlcnNMaXN0LCAgICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIHRvdGFsOiByZXMudG90YWwsICAgICAgICAgICAgICAgICAgICAgIC8v5oC75pWwXHJcbiAgICAgICAgICAgIG11bUxpc3Q6IG5ld01hcmtlcnNMaXN0LCAgICAgICAgICAgICAgICAvL+WIl+ihqFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIG1hcmtlcnM6IHRoaXMuZGF0YS5tYXJrZXJzLmNvbmNhdChuZXdNYXJrZXJzTGlzdCksICAgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgbXVtTGlzdDogdGhpcy5kYXRhLm11bUxpc3QuY29uY2F0KG5ld01hcmtlcnNMaXN0KSwgICAgICAgICAgICAgICAgLy/liJfooahcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMuZGF0YS5tdW1MaXN0Lmxlbmd0aCA8IHJlcy50b3RhbCl7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBtb3JlU2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgbW9yZVRpdGxlOiAn54K55Ye75Yqg6L295pu05aSaJyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBtb3JlU2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgbW9yZVRpdGxlOiAn5bey5Yqg6L295YWo6YOoJyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBjZFR5cGVGbihlOmFueSk6dm9pZHsgIC8v6LWE5rqQ57G75Z6L6Kem5Y+RXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBjZFR5cGVDbGFzczogZS50YXJnZXQuZGF0YXNldC5pZCxcclxuICAgICAgY2RUeXBlSWQ6IGUudGFyZ2V0LmRhdGFzZXQuaWRcclxuICAgIH0pXHJcbiAgfSxcclxuICBjZFVzZUZuKGU6YW55KTp2b2lkeyAgLy/lnLrlnLDnlKjpgJTop6blj5FcclxuICAgIGxldCBpZDphbnkgPSBlLnRhcmdldC5kYXRhc2V0LmlkO1xyXG4gICAgaWYoaWQgPT0gMSl7ICAvL+WHuuenn1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGNkVXNlckNsYXNzOiBpZCxcclxuICAgICAgICBjZENodVp1SWQ6ICcxJywgICAgICAgIC8v5Ye656efXHJcbiAgICAgICAgY2RTYWxlSWQ6ICcnLCAgICAgICAgICAvL+WHuuWUrlxyXG4gICAgICB9KVxyXG4gICAgfWVsc2V7ICAvL+WHuuWUrlxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGNkVXNlckNsYXNzOiBpZCxcclxuICAgICAgICBjZENodVp1SWQ6ICcnLCAgICAgICAgIC8v5Ye656efXHJcbiAgICAgICAgY2RTYWxlSWQ6ICcxJywgICAgICAgICAvL+WHuuWUrlxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgY2ROYXZJdGVtKGRhdGE6YW55KTp2b2lkeyAgICAgICAvL+ihjOS4muS6p+S4mu+8iOW3puS+p+WvvOiIqueCueWHu+aXtu+8jOinpuWPkeeahOS6i+S7tu+8iVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgY2RJbmRleDogZGF0YS5kZXRhaWwuaW5kZXggfHwgMCxcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgY2RJbmR1c3RyeUl0ZW0oZGF0YTphbnkpOnZvaWQgeyAgLy/ooYzkuJrkuqfkuJrvvIjlj7PkvqfpgInmi6npobnooqvngrnlh7vml7bvvIzkvJrop6blj5HnmoTkuovku7bvvIlcclxuICAgIGNvbnN0IGlkID0gdGhpcy5kYXRhLmNkSW5kdXN0cnlJZCA9PT0gZGF0YS5kZXRhaWwuaWQgPyBudWxsIDogZGF0YS5kZXRhaWwuaWQ7XHJcbiAgICBjb25zdCBwSWQgPSBkYXRhLmRldGFpbC5wSWQ7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBjZEluZHVzdHJ5SWQ6IGlkLFxyXG4gICAgICBjZEN5VHlwZUlkOiBwSWQgPyBwSWQgOiAnJywgICAgICAgICAgLy/kuqfkuJppZFxyXG4gICAgICBjZEh5VHlwZUlkOiBpZCA9PSBwSWQgPyAnJyA6IGlkLCAgICAgLy/ooYzkuJppZFxyXG4gICAgfSlcclxuICB9LFxyXG4gIGNkUmVzZXQoZTphbnkpOnZvaWR7ICAvL+aJvuWcuuWcsOmHjee9rlxyXG4gICAgbGV0IGZsYWc6bnVtYmVyID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuZmxhZztcclxuICAgIGlmKGZsYWcgPT0gMSl7ICAvL+i1hOa6kOexu+Wei1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGNkVHlwZUNsYXNzOiBudWxsLFxyXG4gICAgICAgIGNkVHlwZUlkOiAnJyxcclxuICAgICAgICBudW06IDAsICAgICAgICAgICAgICAgICAgICAvLzbmib7nu5PmnpxcclxuICAgICAgICBtdW1MaXN0OiBbXSwgICAgICAgICAgICAgICAvLzbmib7liJfooahcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyNjZFR5cGUnKS50b2dnbGUoZmFsc2UpOyAgICAgICAgIC8v6LWE5rqQ57G75Z6L5YWz6ZetXHJcbiAgICB9ZWxzZSBpZihmbGFnID09IDIpeyAgLy/lnLrlnLDnlKjpgJRcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBjZFVzZXJDbGFzczogbnVsbCxcclxuICAgICAgICBjZENodVp1SWQ6ICcnLCAgICAgICAgICAgICAvL+WHuuenn1xyXG4gICAgICAgIGNkU2FsZUlkOiAnJywgICAgICAgICAgICAgIC8v5Ye65ZSuXHJcbiAgICAgICAgbnVtOiAwLCAgICAgICAgICAgICAgICAgICAgLy825om+57uT5p6cXHJcbiAgICAgICAgbXVtTGlzdDogW10sICAgICAgICAgICAgICAgLy825om+5YiX6KGoXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjY2RVc2VyJykudG9nZ2xlKGZhbHNlKTsgICAgICAgIC8v5Zy65Zyw55So6YCU5YWz6ZetXHJcbiAgICB9ZWxzZXsgIC8v5Lqn5Lia44CB6KGM5LiaXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgY2RJbmRleDogMCwgICAgICAgICAgICAgICAgIC8v5b2T5YmN57Si5byVXHJcbiAgICAgICAgY2RJbmR1c3RyeUlkOiBudWxsLCAgICAgICAgIC8v6YCJ5Lit55qEaWRcclxuICAgICAgICBjZEN5VHlwZUlkOiAnJywgICAgICAgICAgICAgLy/kuqfkuJppZFxyXG4gICAgICAgIGNkSHlUeXBlSWQ6ICcnLCAgICAgICAgICAgICAvL+ihjOS4mmlkXHJcbiAgICAgICAgbnVtOiAwLCAgICAgICAgICAgICAgICAgICAgLy825om+57uT5p6cXHJcbiAgICAgICAgbXVtTGlzdDogW10sICAgICAgICAgICAgICAgLy825om+5YiX6KGoXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjY2RJbmR1c3RyeScpLnRvZ2dsZShmYWxzZSk7ICAgICAvL+S6p+S4muOAgeihjOS4muWFs+mXrVxyXG4gICAgfVxyXG4gICAgdGhpcy5nZXRTaXRlTGlzdCgpOyAgICAgICAgICAgIC8vNuaJvuWcuuWcsOe7n+iuoVxyXG4gIH0sXHJcbiAgY2RTdWJtaXQoZTphbnkpOnZvaWR7ICAvL+aJvuWcuuWcsOWujOaIkFxyXG4gICAgbGV0IGZsYWc6bnVtYmVyID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuZmxhZztcclxuICAgIGlmKGZsYWcgPT0gMSl7XHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjY2RUeXBlJykudG9nZ2xlKGZhbHNlKTsgICAgICAgICAvL+i1hOa6kOexu+Wei+WxleW8gOWFs+mXreeKtuaAgVxyXG4gICAgfWVsc2UgaWYoZmxhZyA9PSAyKXtcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyNjZFVzZXInKS50b2dnbGUoZmFsc2UpOyAgICAgICAgIC8v5Zy65Zyw55So6YCU5bGV5byA5YWz6Zet54q25oCBXHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyNjZEluZHVzdHJ5JykudG9nZ2xlKGZhbHNlKTsgICAgIC8v5Lqn5Lia44CB6KGM5Lia5bGV5byA5YWz6Zet54q25oCBXHJcbiAgICB9XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBudW06IDAsICAgICAgICAgICAgICAgICAgICAvLzbmib7nu5PmnpxcclxuICAgICAgbXVtTGlzdDogW10sICAgICAgICAgICAgICAgLy825om+5YiX6KGoXHJcbiAgICAgIG1hcmtlcnM6W10sICAgICAgICAgICAgICAgLy/moIforrDngrnlpITnkIblkI7nmoTmlbDmja7vvIhpZOOAgeafpeivouS9v+eUqO+8iVxyXG4gICAgICBwYWdlU2l6ZTogMTAsICAgICAgICAgICAgIC8v5q+P6aG15pi+56S65pWw6YePXHJcbiAgICAgIHBhZ2VJbmRleDogMSwgICAgICAgICAgICAgLy/lvZPliY3pobVcclxuICAgICAgdG90YWw6IDAsICAgICAgICAgICAgICAgICAvL+aAu+adoeaVsFxyXG4gICAgfSlcclxuICAgIHRoaXMuZ2V0U2l0ZUxpc3QoKTsgICAgICAgICAgICAvLzbmib7lnLrlnLDnu5/orqFcclxuICB9LFxyXG5cclxuXHJcbiAgLy/mib7mnI3liqFcclxuICBmd0ZuKCk6dm9pZHtcclxuICAgIHRoaXMuaGlkZUZuKCk7ICAgICAgICAgICAgICAgLy/pnIDopoHpmpDol4/nmoTlhYPntKBcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGZsYWc6ICdmdycsICAgICAgICAgICAgICAgICAvL+W9k+WJjeWIl+ihqFxyXG5cclxuICAgICAgZndDYXRlZ29yeUluZGV4OiAwLCAgICAgICAgIC8v5b2T5YmN57Si5byV77yI5pyN5Yqh57G75Yir77yJXHJcbiAgICAgIGZ3Q2F0ZWdvcnlJZDogbnVsbCwgICAgICAgICAvL+mAieS4reeahGlk77yI5pyN5Yqh57G75Yir77yJXHJcbiAgICAgIGZ3SW5kdXN0cnlJbmRleDogMCwgICAgICAgICAvL+W9k+WJjee0ouW8le+8iOihjOS4muS6p+S4mu+8iVxyXG4gICAgICBmd0luZHVzdHJ5SWQ6IG51bGwsICAgICAgICAgLy/pgInkuK3nmoRpZO+8iOihjOS4muS6p+S4mu+8iVxyXG5cclxuICAgICAgZndUeXBlQ2xhc3M6IG51bGwsICAgICAgICAgIC8v5Y2V5L2N57G75Z6LXHJcbiAgICAgIGZ3U2NhbGVDbGFzczogbnVsbCwgICAgICAgICAvL+WNleS9jeinhOaooVxyXG5cclxuICAgICAgZndUeXBlT25lSWQ6ICcnLCAgICAgICAgICAgIC8v5pyN5Yqh57G75Yir5LiA57qn6I+c5Y2VXHJcbiAgICAgIGZ3VHlwZVR3b0lkOiAnJywgICAgICAgICAgICAvL+acjeWKoeexu+WIq+S6jOe6p+iPnOWNlVxyXG4gICAgICBmd0R3U3RhdHVzSWQ6ICcnLCAgICAgICAgICAgLy/ljZXkvY3nsbvlnotpZFxyXG4gICAgICBmd0R3U2NhbGVJZDogJycsICAgICAgICAgICAgLy/ljZXkvY3op4TmqKFpZFxyXG4gICAgICBmd0N5VHlwZUlkOiAnJywgICAgICAgICAgICAgLy/kuqfkuJppZFxyXG4gICAgICBmd0h5VHlwZUlkOiAnJywgICAgICAgICAgICAgLy/ooYzkuJppZFxyXG5cclxuICAgICAgaXNTZWFyY2hTaG93OiB0cnVlLCAgICAgICAgLy/mkJzntKLnu5PmnpzmlbDmja5cclxuICAgICAgZndTZWFyY2hJbmZvU2hvdzogdHJ1ZSwgICAgLy/mnI3liqHpq5jnuqfmkJzntKJcclxuICAgIH0pXHJcbiAgICB0aGlzLmdldFNlcnZpY2VMaXN0KCk7ICAgICAgIC8vNuaJvuacjeWKoee7n+iuoVxyXG4gICAgdGhpcy5md0NhdGVnb3J5KCk7ICAgICAgICAgICAvL+acjeWKoeexu+WIq1xyXG4gICAgdGhpcy5md1R5cGUoKTsgICAgICAgICAgICAgICAvL+WNleS9jeexu+Wei1xyXG4gICAgdGhpcy5md1NjYWxlKCk7ICAgICAgICAgICAgICAvL+WNleS9jeinhOaooVxyXG4gICAgdGhpcy5pbmR1c3RyeSgpOyAgICAgICAgICAgICAvL+S6p+S4muOAgeihjOS4mlxyXG4gIH0sXHJcbiAgZ2V0U2VydmljZUxpc3QoKTp2b2lkeyAgICAgICAgIC8vNuaJvuacjeWKoee7n+iuoVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgcHRUaXRsZTogJ+acjeWKoeacuuaehCcsICAgICAgICAvL+afpeivouagh+mimFxyXG4gICAgICBtb3JlU2hvdzogZmFsc2UsXHJcbiAgICB9KVxyXG4gICAgaHR0cHMucmVxdWVzdChhcGkuZmluZEZ3LCB7XHJcbiAgICAgIHRlbmFudElkOiBhcGkuYXJlYUlkLCAgICAgICAgICAgICAgICAgLy/lnLDljLppZFxyXG4gICAgICBrZXk6IHRoaXMuZGF0YS5zZWFyY2hLZXksICAgICAgICAgICAgIC8v5YWz6ZSu5a2X5pCc57SiXHJcbiAgICAgIHBhZ2VTaXplOiB0aGlzLmRhdGEucGFnZVNpemUsICAgICAgICAgLy/mr4/pobXmmL7npLrmlbDph49cclxuICAgICAgcGFnZUluZGV4OiB0aGlzLmRhdGEucGFnZUluZGV4LCAgICAgICAvL+mhteaVsFxyXG4gICAgICB0eXBlT25lSWQ6IHRoaXMuZGF0YS5md1R5cGVPbmVJZCwgICAgIC8v5pyN5Yqh57G75Yir5LiA57qn6I+c5Y2VXHJcbiAgICAgIHR5cGVUd29JZDogdGhpcy5kYXRhLmZ3VHlwZVR3b0lkLCAgICAgLy/mnI3liqHnsbvliKvkuoznuqfoj5zljZVcclxuICAgICAgcXlOYXR1cmVJZDogdGhpcy5kYXRhLmZ3RHdTdGF0dXNJZCwgICAvL+WNleS9jeexu+Wei2lkXHJcbiAgICAgIGR3U2NhbGVJZDogdGhpcy5kYXRhLmZ3RHdTY2FsZUlkLCAgICAgLy/ljZXkvY3op4TmqKFpZFxyXG4gICAgICBjeVR5cGVJZDogdGhpcy5kYXRhLmZ3Q3lUeXBlSWQsICAgICAgIC8v5Lqn5LiaaWRcclxuICAgICAgaHlUeXBlSWQ6IHRoaXMuZGF0YS5md0h5VHlwZUlkICAgICAgICAvL+ihjOS4mmlkXHJcbiAgICB9LCAnR0VUJykudGhlbigocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICBpZihyZXMpe1xyXG4gICAgICAgIGxldCBuZXdNYXJrZXJzTGlzdDphbnkgPSByZXMubGlzdC5tYXAoKGl0ZW06YW55LCBpbmRleDpudW1iZXIpOmFueT0+e1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGluZGV4LCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9tYXDnlKjnmoToh6rlrprkuYlJRFxyXG4gICAgICAgICAgICBuYW1lOiAn5pyN5YqhJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6K+m5oOF5Yik5patXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZTogaXRlbS5sbmcsICAgICAgICAgICAgICAgICAgICAgICAgIC8v57uP5bqmXHJcbiAgICAgICAgICAgIGxhdGl0dWRlOiBpdGVtLmxhdCwgICAgICAgICAgICAgICAgICAgICAgICAgIC8v57qs5bqmXHJcbiAgICAgICAgICAgIGljb25QYXRoOiAnLi4vLi4vaW1hZ2VzL2Z3LnBuZycsICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIHdpZHRoOiAyNyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNSxcclxuICAgICAgICAgICAgY2FsbG91dDoge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IGl0ZW0ucXlOYW1lP2l0ZW0ucXlOYW1lOifmnKrloavmiqUnLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IDE4LFxyXG4gICAgICAgICAgICAgIGJnQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1LFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNDQ0MnLFxyXG4gICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdCWUNMSUNLJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbGRJZDogaXRlbS5pZCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WOn+Wni0lEXHJcbiAgICAgICAgICAgIHRpdGxlOiBpdGVtLnF5TmFtZT9pdGVtLnF5TmFtZTon5pyq5aGr5oqlJywgICAgICAgICAgICAgICAgICAvL+agh+mimFxyXG4gICAgICAgICAgICBpbWdBcnI6IGl0ZW0uZndqZ1BpY3MsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lm77niYfmlbDnu4RcclxuICAgICAgICAgICAgcHJvdmluY2VOYW1lOiBpdGVtLnByb3ZpbmNlTmFtZT9pdGVtLnByb3ZpbmNlTmFtZTonJywgICAgIC8v55yBXHJcbiAgICAgICAgICAgIGNpdHlOYW1lOiBpdGVtLmNpdHlOYW1lP2l0ZW0uY2l0eU5hbWU6JycsICAgICAgICAgICAgICAgICAvL+W4glxyXG4gICAgICAgICAgICBkaXN0cmljdE5hbWU6IGl0ZW0uZGlzdHJpY3ROYW1lP2l0ZW0uZGlzdHJpY3ROYW1lOicnLCAgICAgLy/ljLpcclxuICAgICAgICAgICAgYWRkcmVzczogaXRlbS5md0FkZHJlc3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6K+m57uG5Zyw5Z2AXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZih0aGlzLmRhdGEudG90YWwgPT0gMCl7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBtYXJrZXJzOiBuZXdNYXJrZXJzTGlzdCwgICAgICAgICAgICAgICAvL+agh+iusFxyXG4gICAgICAgICAgICB0b3RhbDogcmVzLnRvdGFsLCAgICAgICAgICAgICAgICAgICAgICAvL+aAu+aVsFxyXG4gICAgICAgICAgICBtdW1MaXN0OiBuZXdNYXJrZXJzTGlzdCwgICAgICAgICAgICAgICAgLy/liJfooahcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBtYXJrZXJzOiB0aGlzLmRhdGEubWFya2Vycy5jb25jYXQobmV3TWFya2Vyc0xpc3QpLCAgICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIG11bUxpc3Q6IHRoaXMuZGF0YS5tdW1MaXN0LmNvbmNhdChuZXdNYXJrZXJzTGlzdCksICAgICAgICAgICAgICAgIC8v5YiX6KGoXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZih0aGlzLmRhdGEubXVtTGlzdC5sZW5ndGggPCByZXMudG90YWwpe1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgbW9yZVNob3c6IHRydWUsXHJcbiAgICAgICAgICAgIG1vcmVUaXRsZTogJ+eCueWHu+WKoOi9veabtOWkmicsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgbW9yZVNob3c6IHRydWUsXHJcbiAgICAgICAgICAgIG1vcmVUaXRsZTogJ+W3suWKoOi9veWFqOmDqCcsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgZndDYXRlZ29yeU5hdkl0ZW0oZGF0YTphbnkpOnZvaWR7ICAgICAgIC8v5pyN5Yqh57G75Yir77yI5bem5L6n5a+86Iiq54K55Ye75pe277yM6Kem5Y+R55qE5LqL5Lu277yJXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBmd0NhdGVnb3J5SW5kZXg6IGRhdGEuZGV0YWlsLmluZGV4IHx8IDAsXHJcbiAgICB9KTtcclxuICB9LFxyXG4gIGZ3Q2F0ZWdvcnlJdGVtKGRhdGE6YW55KTp2b2lkIHsgIC8v5pyN5Yqh57G75Yir77yI5bem5L6n5a+86Iiq54K55Ye75pe277yM6Kem5Y+R55qE5LqL5Lu277yJXHJcbiAgICBjb25zdCBpZCA9IHRoaXMuZGF0YS5md0NhdGVnb3J5SWQgPT09IGRhdGEuZGV0YWlsLmlkID8gbnVsbCA6IGRhdGEuZGV0YWlsLmlkO1xyXG4gICAgY29uc3QgcElkID0gZGF0YS5kZXRhaWwucElkO1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgZndDYXRlZ29yeUlkOiBpZCxcclxuICAgICAgZndUeXBlT25lSWQ6IHBJZCA/IHBJZCA6ICcnLCAgICAgICAgICAgICAgIC8v5pyN5Yqh57G75Yir5LiA57qn6I+c5Y2VXHJcbiAgICAgIGZ3VHlwZVR3b0lkOiBpZCA9PSBwSWQgPyAnJyA6IGlkLCAgICAgICAgICAgLy/mnI3liqHnsbvliKvkuoznuqfoj5zljZUgXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgZndUeXBlRm4oZTphbnkpOnZvaWR7ICAgIC8v5Y2V5L2N57G75Z6L6Kem5Y+RXHJcbiAgICBsZXQgaWQ6YW55ID0gZS50YXJnZXQuZGF0YXNldC5pZDtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGZ3VHlwZUNsYXNzOiBpZCxcclxuICAgICAgZndEd1N0YXR1c0lkOiBpZCwgICAgICAgIC8v5Y2V5L2N57G75Z6LXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgZndTY2FsZUZuKGU6YW55KTp2b2lkeyAgICAvL+WNleS9jeinhOaooeinpuWPkVxyXG4gICAgbGV0IGlkOmFueSA9IGUudGFyZ2V0LmRhdGFzZXQuaWQ7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBmd1NjYWxlQ2xhc3M6IGlkLFxyXG4gICAgICBmd0R3U2NhbGVJZDogaWQsICAgICAgICAvL+WNleS9jeinhOaooVxyXG4gICAgfSlcclxuICB9LFxyXG4gIGZ3TmF2SXRlbShkYXRhOmFueSk6dm9pZHsgICAgICAgLy/mib7mnI3liqHooYzkuJrkuqfkuJrvvIjlt6bkvqflr7zoiKrngrnlh7vml7bvvIzop6blj5HnmoTkuovku7bvvIlcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGZ3SW5kdXN0cnlJbmRleDogZGF0YS5kZXRhaWwuaW5kZXggfHwgMCxcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgZndJbmR1c3RyeUl0ZW0oZGF0YTphbnkpOnZvaWQgeyAgLy/mib7mnI3liqHooYzkuJrkuqfkuJrvvIjlj7PkvqfpgInmi6npobnooqvngrnlh7vml7bvvIzkvJrop6blj5HnmoTkuovku7bvvIlcclxuICAgIGNvbnN0IGlkID0gdGhpcy5kYXRhLmZ3SW5kdXN0cnlJZCA9PT0gZGF0YS5kZXRhaWwuaWQgPyBudWxsIDogZGF0YS5kZXRhaWwuaWQ7XHJcbiAgICBjb25zdCBwSWQgPSBkYXRhLmRldGFpbC5wSWQ7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBmd0luZHVzdHJ5SWQ6IGlkLFxyXG4gICAgICBmd0N5VHlwZUlkOiBwSWQgPyBwSWQgOiAnJywgICAgICAgICAgLy/kuqfkuJppZFxyXG4gICAgICBmd0h5VHlwZUlkOiBpZCA9PSBwSWQgPyAnJyA6IGlkLCAgICAgLy/ooYzkuJppZFxyXG4gICAgfSlcclxuICB9LFxyXG4gIGZ3UmVzZXQoZTphbnkpOnZvaWR7ICAvL+aJvuacjeWKoemHjee9rlxyXG4gICAgbGV0IGZsYWc6bnVtYmVyID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuZmxhZztcclxuICAgIGlmKGZsYWcgPT0gMSl7ICAvL+acjeWKoeexu+WIq1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGZ3Q2F0ZWdvcnlJbmRleDogMCwgICAgICAgICAvL+W9k+WJjee0ouW8lVxyXG4gICAgICAgIGZ3Q2F0ZWdvcnlJZDogbnVsbCwgICAgICAgICAvL+mAieS4reeahGlkXHJcbiAgICAgICAgZndUeXBlT25lSWQ6ICcnLCAgICAgICAgICAgIC8v5pyN5Yqh57G75Yir5LiA57qn6I+c5Y2VXHJcbiAgICAgICAgZndUeXBlVHdvSWQ6ICcnLCAgICAgICAgICAgIC8v5pyN5Yqh57G75Yir5LqM57qn6I+c5Y2VXHJcbiAgICAgICAgbnVtOiAwLCAgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgICAvLzbmib7liJfooahcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyNmd0NhdGVnb3J5SWQnKS50b2dnbGUoZmFsc2UpOyAgICAgICAgIC8v5pyN5Yqh57G75Yir5YWz6ZetXHJcbiAgICB9ZWxzZSBpZihmbGFnID09IDIpeyAgLy/ljZXkvY3nsbvlnotcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBmd1R5cGVDbGFzczogbnVsbCxcclxuICAgICAgICBmd0R3U3RhdHVzSWQ6ICcnLCAgICAgICAgICAvL+WNleS9jeexu+Wei1xyXG4gICAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgIC8vNuaJvuWIl+ihqFxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI2Z3VHlwZUlkJykudG9nZ2xlKGZhbHNlKTsgICAgICAgIC8v5Y2V5L2N57G75Z6L5YWz6ZetXHJcbiAgICB9ZWxzZSBpZihmbGFnID09IDMpeyAgLy/ljZXkvY3op4TmqKFcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBmd1NjYWxlQ2xhc3M6IG51bGwsXHJcbiAgICAgICAgZndEd1NjYWxlSWQ6ICcnLCAgICAgICAgICAgLy/ljZXkvY3op4TmqKFcclxuICAgICAgICBudW06IDAsICAgICAgICAgICAgICAgICAgICAvLzbmib7nu5PmnpxcclxuICAgICAgICBtdW1MaXN0OiBbXSwgICAgICAgICAgICAgICAvLzbmib7liJfooahcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyNmd1NjYWxlSWQnKS50b2dnbGUoZmFsc2UpOyAgICAgICAgLy/ljZXkvY3op4TmqKHlhbPpl61cclxuICAgIH1lbHNleyAgLy/kuqfkuJrjgIHooYzkuJpcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBmd0luZHVzdHJ5SW5kZXg6IDAsICAgICAgICAgLy/lvZPliY3ntKLlvJVcclxuICAgICAgICBmd0luZHVzdHJ5SWQ6IG51bGwsICAgICAgICAgLy/pgInkuK3nmoRpZFxyXG4gICAgICAgIGZ3Q3lUeXBlSWQ6ICcnLCAgICAgICAgICAgICAvL+S6p+S4mmlkXHJcbiAgICAgICAgZndIeVR5cGVJZDogJycsICAgICAgICAgICAgIC8v6KGM5LiaaWRcclxuICAgICAgICBudW06IDAsICAgICAgICAgICAgICAgICAgICAvLzbmib7nu5PmnpxcclxuICAgICAgICBtdW1MaXN0OiBbXSwgICAgICAgICAgICAgICAvLzbmib7liJfooahcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyNmd0luZHVzdHJ5SWQnKS50b2dnbGUoZmFsc2UpOyAgICAgLy/kuqfkuJrjgIHooYzkuJrlhbPpl61cclxuICAgIH1cclxuICAgIHRoaXMuZ2V0U2VydmljZUxpc3QoKTsgICAgICAgICAgICAvLzbmib7mnI3liqFcclxuICB9LFxyXG4gIGZ3U3VibWl0KGU6YW55KTp2b2lkeyAgLy/mib7mnI3liqHlrozmiJBcclxuICAgIGxldCBmbGFnOm51bWJlciA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmZsYWc7XHJcbiAgICBpZihmbGFnID09IDEpe1xyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI2Z3Q2F0ZWdvcnlJZCcpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAgLy/mnI3liqHnsbvliKvlhbPpl61cclxuICAgIH1lbHNlIGlmKGZsYWcgPT0gMil7XHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjZndUeXBlSWQnKS50b2dnbGUoZmFsc2UpOyAgICAgICAgLy/ljZXkvY3nsbvlnovlhbPpl61cclxuICAgIH1lbHNlIGlmKGZsYWcgPT0gMyl7XHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjZndTY2FsZUlkJykudG9nZ2xlKGZhbHNlKTsgICAgICAgIC8v5Y2V5L2N6KeE5qih5YWz6ZetXHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyNmd0luZHVzdHJ5SWQnKS50b2dnbGUoZmFsc2UpOyAgICAgLy/kuqfkuJrjgIHooYzkuJrlhbPpl61cclxuICAgIH1cclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICBtdW1MaXN0OiBbXSwgICAgICAgICAgICAgICAvLzbmib7liJfooahcclxuICAgICAgbWFya2VyczpbXSwgICAgICAgICAgICAgICAvL+agh+iusOeCueWkhOeQhuWQjueahOaVsOaNru+8iGlk44CB5p+l6K+i5L2/55So77yJXHJcbiAgICAgIHBhZ2VTaXplOiAxMCwgICAgICAgICAgICAgLy/mr4/pobXmmL7npLrmlbDph49cclxuICAgICAgcGFnZUluZGV4OiAxLCAgICAgICAgICAgICAvL+W9k+WJjemhtVxyXG4gICAgICB0b3RhbDogMCwgICAgICAgICAgICAgICAgIC8v5oC75p2h5pWwXHJcbiAgICB9KVxyXG4gICAgdGhpcy5nZXRTZXJ2aWNlTGlzdCgpOyAgICAgICAvLzbmib7mnI3liqHnu5/orqFcclxuICB9LFxyXG5cclxuXHJcblxyXG5cclxuICAvL+aJvui1hOmHkVxyXG4gIHpqRm4oKTp2b2lke1xyXG4gICAgdGhpcy5oaWRlRm4oKTsgICAgICAgICAgICAgICAvL+mcgOimgemakOiXj+eahOWFg+e0oFxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgZmxhZzogJ3pqJywgICAgICAgICAgICAgICAgLy/lvZPliY3liJfooahcclxuXHJcbiAgICAvL+aJvui1hOmHke+8iOmHkeiejeacjeWKoe+8iVxyXG4gICAganJTZWFyY2hJbmZvU2hvdzogZmFsc2UsICAgIC8v5pi+56S6L+makOiXj1xyXG4gICAganJDYXRlZ29yeUluZGV4OiAwLCAgICAgICAgIC8v5b2T5YmN57Si5byV77yI5pyN5Yqh57G75Yir77yJXHJcbiAgICBqckNhdGVnb3J5SWQ6IG51bGwsICAgICAgICAgLy/pgInkuK3nmoRpZO+8iOacjeWKoeexu+WIq++8iVxyXG4gICAganJJbmR1c3RyeUluZGV4OiAwLCAgICAgICAgIC8v5b2T5YmN57Si5byV77yI6KGM5Lia5Lqn5Lia77yJXHJcbiAgICBqckluZHVzdHJ5SWQ6IG51bGwsICAgICAgICAgLy/pgInkuK3nmoRpZO+8iOihjOS4muS6p+S4mu+8iVxyXG5cclxuICAgIGpyVHlwZUNsYXNzOiBudWxsLCAgICAgICAgICAvL+WNleS9jeexu+Wei1xyXG4gICAganJTY2FsZUNsYXNzOiBudWxsLCAgICAgICAgIC8v5Y2V5L2N6KeE5qihXHJcblxyXG4gICAganJUeXBlT25lSWQ6ICcnLCAgICAgICAgICAgIC8v5pyN5Yqh57G75Yir5LiA57qn6I+c5Y2VXHJcbiAgICBqclR5cGVUd29JZDogJycsICAgICAgICAgICAgLy/mnI3liqHnsbvliKvkuoznuqfoj5zljZVcclxuICAgIGpyRHdTdGF0dXNJZDogJycsICAgICAgICAgICAvL+WNleS9jeexu+Wei2lkXHJcbiAgICBqckR3U2NhbGVJZDogJycsICAgICAgICAgICAgLy/ljZXkvY3op4TmqKFpZFxyXG4gICAganJDeVR5cGVJZDogJycsICAgICAgICAgICAgIC8v5Lqn5LiaaWRcclxuICAgIGpySHlUeXBlSWQ6ICcnLCAgICAgICAgICAgICAvL+ihjOS4mmlkXHJcblxyXG4gICAgLy/mib7otYTph5HvvIjmipXotYTvvIlcclxuICAgIHR6U2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgICAvL+aYvuekui/pmpDol49cclxuICAgIHR6SW5kZXg6IDAsICAgICAgICAgICAgICAgICAvL+W9k+WJjee0ouW8lVxyXG4gICAgdHpJbmR1c3RyeUlkOiBudWxsLCAgICAgICAgIC8v6YCJ5Lit55qEaWRcclxuXHJcbiAgICB0ekFyZWFDbGFzczogbnVsbCwgICAgICAgICAgLy/mipXotYTljLrln59cclxuICAgIHR6V2F5Q2xhc3M6IG51bGwsICAgICAgICAgICAvL+aKlei1hOaWueW8j1xyXG4gICAgdHpPdGhlckNsYXNzOiBudWxsLCAgICAgICAgIC8v5oqV6LWE6YeR6aKdXHJcbiAgICB0elR5cGVDbGFzczogbnVsbCwgICAgICAgICAgLy/mipXotYTnsbvlnotcclxuXHJcbiAgICB0ekFyZWFJZDogJycsICAgICAgICAgICAgICAgLy/mipXotYTljLrln59cclxuICAgIHR6V2F5SWQ6ICcnLCAgICAgICAgICAgICAgICAvL+aKlei1hOaWueW8j1xyXG4gICAgdHpPdGhlcklkOiAnJywgICAgICAgICAgICAgIC8v5oqV6LWE6YeR6aKdXHJcbiAgICB0elR5cGVJZDogJycsICAgICAgICAgICAgICAgLy/mipXotYTnsbvlnotcclxuICAgIHR6Q3lUeXBlSWQ6ICcnLCAgICAgICAgICAgICAvL+S6p+S4mmlkXHJcbiAgICB0ekh5VHlwZUlkOiAnJywgICAgICAgICAgICAgLy/ooYzkuJppZFxyXG5cclxuXHJcblxyXG4gICAgLy/mib7otYTph5HvvIjono3otYTvvIlcclxuICAgIHJ6U2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgICAvL+aYvuekui/pmpDol49cclxuICAgIHJ6SW5kZXg6IDAsICAgICAgICAgICAgICAgICAvL+W9k+WJjee0ouW8lVxyXG4gICAgcnpJbmR1c3RyeUlkOiBudWxsLCAgICAgICAgIC8v6YCJ5Lit55qEaWRcclxuXHJcbiAgICByekNhdGVnb3J5Q2xhc3M6IG51bGwsICAgICAgLy/pnIDmsYLnsbvliKtcclxuICAgIHJ6U3RhZ2VDbGFzczogbnVsbCwgICAgICAgICAvL+aJgOWkhOmYtuautVxyXG4gICAgcnpXYXlDbGFzczogbnVsbCwgICAgICAgICAgIC8v6J6N6LWE5pa55byPXHJcbiAgICByekZpbmFuY2luZ0NsYXNzOiBudWxsLCAgICAgLy/ono3otYTph5Hpop1cclxuXHJcbiAgICByekNhdGVnb3J5SWQ6ICcnLCAgICAgICAgICAgLy/pnIDmsYLnsbvliKtcclxuICAgIHJ6RmluYW5jaW5nSWQ6ICcnLCAgICAgICAgICAvL+iejei1hOmHkeminVxyXG4gICAgcnpDeVR5cGVJZDogJycsICAgICAgICAgICAgIC8v5Lqn5LiaaWRcclxuICAgIHJ6SHlUeXBlSWQ6ICcnLCAgICAgICAgICAgICAvL+ihjOS4mmlkXHJcblxyXG4gICAgaXNTZWFyY2hTaG93OiB0cnVlLCAgICAgICAgLy/mkJzntKLnu5PmnpzmlbDmja5cclxuICAgIHpqU2VhcmNoSW5mb1Nob3c6IHRydWUsICAgIC8v6LWE6YeR5YWo6YOo5oyJ6ZKuXHJcbiAgICB6akJ0bkNsYXNzOiAxLCAgICAgICAgICAgICAvL+aJvui1hOmHkeWFqOmDqFxyXG4gICAgfSlcclxuICAgIHRoaXMuZ2V0QWxsRnVuZHNMaXN0KCk7ICAgICAgIC8v5om+6LWE6YeR77yI5YWo6YOo77yJXHJcbiAgfSxcclxuICBnZXRBbGxGdW5kc0xpc3QoKXsgIC8v5om+6LWE6YeR77yI5YWo6YOo77yJXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBwdFRpdGxlOiAn6LWE6YeRJywgICAgICAgIC8v5p+l6K+i5qCH6aKYXHJcbiAgICAgIG1vcmVTaG93OiBmYWxzZSxcclxuICAgIH0pXHJcbiAgICBodHRwcy5yZXF1ZXN0KGFwaS5hbGxGdW5kLCB7XHJcbiAgICAgIHRlbmFudElkOiBhcGkuYXJlYUlkLCAgICAgICAgICAgICAgICAgLy/lnLDljLppZFxyXG4gICAgICBrZXk6IHRoaXMuZGF0YS5zZWFyY2hLZXksICAgICAgICAgICAgIC8v5YWz6ZSu5a2X5pCc57SiXHJcbiAgICAgIHBhZ2VTaXplOiB0aGlzLmRhdGEucGFnZVNpemUsICAgICAgICAgLy/mr4/pobXmmL7npLrmlbDph49cclxuICAgICAgcGFnZUluZGV4OiB0aGlzLmRhdGEucGFnZUluZGV4LCAgICAgICAvL+mhteaVsFxyXG4gICAgfSwgJ0dFVCcpLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgaWYocmVzKXtcclxuICAgICAgICAvL+mHkeiejVxyXG4gICAgICAgIGxldCBqcmpnTWRvZWxzTGlzdDphbnkgPSByZXMudmFsLmpyamdNZG9lbHMubWFwKChpdGVtOmFueSk6YW55PT57XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgbmFtZTogJ+mHkeiejScsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/or6bmg4XliKTmlq1cclxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBpdGVtLmxuZywgICAvL+e7j+W6plxyXG4gICAgICAgICAgICBsYXRpdHVkZTogaXRlbS5sYXQsICAgIC8v57qs5bqmXHJcbiAgICAgICAgICAgIGljb25QYXRoOiAnLi4vLi4vaW1hZ2VzL3pqLnBuZycsICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIHdpZHRoOiAyNyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNSxcclxuICAgICAgICAgICAgY2FsbG91dDoge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IGl0ZW0ucXlOYW1lP2l0ZW0ucXlOYW1lOifmnKrloavmiqUnLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IDE0LFxyXG4gICAgICAgICAgICAgIGJnQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1LFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNDQ0MnLFxyXG4gICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdCWUNMSUNLJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0aXRsZTogaXRlbS5xeU5hbWUsICAgICAgICAgICAgICAgICAgIC8v5qCH6aKYXHJcbiAgICAgICAgICAgIGltZ0FycjogaXRlbS5md2pnUGljcywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WbvueJh+aVsOe7hFxyXG4gICAgICAgICAgICBwcm92aW5jZU5hbWU6IGl0ZW0ucHJvdmluY2VOYW1lP2l0ZW0ucHJvdmluY2VOYW1lOicnLCAgICAgLy/nnIFcclxuICAgICAgICAgICAgY2l0eU5hbWU6IGl0ZW0uY2l0eU5hbWU/aXRlbS5jaXR5TmFtZTonJywgICAgICAgICAgICAgICAgIC8v5biCXHJcbiAgICAgICAgICAgIGRpc3RyaWN0TmFtZTogaXRlbS5kaXN0cmljdE5hbWU/aXRlbS5kaXN0cmljdE5hbWU6JycsICAgICAvL+WMulxyXG4gICAgICAgICAgICBhZGRyZXNzOiBpdGVtLmZ3QWRkcmVzcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/or6bnu4blnLDlnYBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICAvL+aKlei1hFxyXG4gICAgICAgIGxldCB0ek1vZGVsc0xpc3Q6YW55ID0gcmVzLnZhbC50ek1vZGVscy5tYXAoKGl0ZW06YW55KTphbnk9PntcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiAn6LWE6YeRJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+ivpuaDheWIpOaWrVxyXG4gICAgICAgICAgICBsb25naXR1ZGU6IGl0ZW0ubG5nLCAgIC8v57uP5bqmXHJcbiAgICAgICAgICAgIGxhdGl0dWRlOiBpdGVtLmxhdCwgICAgLy/nuqzluqZcclxuICAgICAgICAgICAgaWNvblBhdGg6ICcuLi8uLi9pbWFnZXMvdHoucG5nJywgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgd2lkdGg6IDI3LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1LFxyXG4gICAgICAgICAgICBjYWxsb3V0OiB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogaXRlbS5uZWVkTmFtZT9pdGVtLm5lZWROYW1lOifmnKrloavmiqUnLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IDE0LFxyXG4gICAgICAgICAgICAgIGJnQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1LFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNDQ0MnLFxyXG4gICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdCWUNMSUNLJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0aXRsZTogaXRlbS5uZWVkTmFtZSwgICAgICAgICAgICAgICAgICAgLy/moIfpophcclxuICAgICAgICAgICAgaW1nQXJyOiBpdGVtLm5lZWRGaWxlcywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Zu+54mH5pWw57uEXHJcbiAgICAgICAgICAgIHByb3ZpbmNlTmFtZTogaXRlbS5wcm92aW5jZU5hbWU/aXRlbS5wcm92aW5jZU5hbWU6JycsICAgICAvL+ecgVxyXG4gICAgICAgICAgICBjaXR5TmFtZTogaXRlbS5jaXR5TmFtZT9pdGVtLmNpdHlOYW1lOicnLCAgICAgICAgICAgICAgICAgLy/luIJcclxuICAgICAgICAgICAgZGlzdHJpY3ROYW1lOiBpdGVtLmRpc3RyaWN0TmFtZT9pdGVtLmRpc3RyaWN0TmFtZTonJywgICAgIC8v5Yy6XHJcbiAgICAgICAgICAgIGFkZHJlc3M6IGl0ZW0udGVuYW50TmFtZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+ivpue7huWcsOWdgFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL+iejei1hO+8iOmcgOaxgu+8iVxyXG4gICAgICAgIGxldCByb25nemlOZWVkc0xpc3Q6YW55ID0gcmVzLnZhbC5yb25nemlOZWVkcy5tYXAoKGl0ZW06YW55KTphbnk9PntcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiAn6ZyA5rGCJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+ivpuaDheWIpOaWrVxyXG4gICAgICAgICAgICBsb25naXR1ZGU6IGl0ZW0ubG5nLCAgIC8v57uP5bqmXHJcbiAgICAgICAgICAgIGxhdGl0dWRlOiBpdGVtLmxhdCwgICAgLy/nuqzluqZcclxuICAgICAgICAgICAgaWNvblBhdGg6ICcuLi8uLi9pbWFnZXMvcnoucG5nJywgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgd2lkdGg6IDI3LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1LFxyXG4gICAgICAgICAgICBjYWxsb3V0OiB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogaXRlbS5uZWVkTmFtZT9pdGVtLm5lZWROYW1lOifmnKrloavmiqUnLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IDE0LFxyXG4gICAgICAgICAgICAgIGJnQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1LFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNDQ0MnLFxyXG4gICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdCWUNMSUNLJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0aXRsZTogaXRlbS5uZWVkTmFtZSwgICAgICAgICAgICAgICAgICAgLy/moIfpophcclxuICAgICAgICAgICAgaW1nQXJyOiBpdGVtLnBpY3R1cmVGaWxlcywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Zu+54mH5pWw57uEXHJcbiAgICAgICAgICAgIHByb3ZpbmNlTmFtZTogaXRlbS5wcm92aW5jZU5hbWU/aXRlbS5wcm92aW5jZU5hbWU6JycsICAgICAvL+ecgVxyXG4gICAgICAgICAgICBjaXR5TmFtZTogaXRlbS5jaXR5TmFtZT9pdGVtLmNpdHlOYW1lOicnLCAgICAgICAgICAgICAgICAgLy/luIJcclxuICAgICAgICAgICAgZGlzdHJpY3ROYW1lOiBpdGVtLmRpc3RyaWN0TmFtZT9pdGVtLmRpc3RyaWN0TmFtZTonJywgICAgIC8v5Yy6XHJcbiAgICAgICAgICAgIGFkZHJlc3M6IGl0ZW0udGVuYW50TmFtZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+ivpue7huWcsOWdgFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8v6J6N6LWE77yI6aG555uu77yJXHJcbiAgICAgICAgbGV0IHJvbmd6aVByb3NMaXN0OmFueSA9IHJlcy52YWwucm9uZ3ppUHJvcy5tYXAoKGl0ZW06YW55KTphbnk9PntcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiAn6J6N6LWEJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+ivpuaDheWIpOaWrVxyXG4gICAgICAgICAgICBsb25naXR1ZGU6IGl0ZW0ubG5nLCAgIC8v57uP5bqmXHJcbiAgICAgICAgICAgIGxhdGl0dWRlOiBpdGVtLmxhdCwgICAgLy/nuqzluqZcclxuICAgICAgICAgICAgaWNvblBhdGg6ICcuLi8uLi9pbWFnZXMveG0ucG5nJywgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgd2lkdGg6IDI3LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1LFxyXG4gICAgICAgICAgICBjYWxsb3V0OiB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogaXRlbS5wcm9OYW1lP2l0ZW0ucHJvTmFtZTon5pyq5aGr5oqlJyxcclxuICAgICAgICAgICAgICBjb2xvcjogJyMwMDAnLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAxNCxcclxuICAgICAgICAgICAgICBiZ0NvbG9yOiAnI0ZGRicsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNSxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXHJcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjQ0NDJyxcclxuICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnQllDTElDSydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGl0bGU6IGl0ZW0ucHJvTmFtZSwgICAgICAgICAgICAgICAgICAgLy/moIfpophcclxuICAgICAgICAgICAgaW1nQXJyOiBpdGVtLnBpY3R1cmVGaWxlcywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Zu+54mH5pWw57uEXHJcbiAgICAgICAgICAgIHByb3ZpbmNlTmFtZTogaXRlbS5wcm92aW5jZU5hbWU/aXRlbS5wcm92aW5jZU5hbWU6JycsICAgICAvL+ecgVxyXG4gICAgICAgICAgICBjaXR5TmFtZTogaXRlbS5jaXR5TmFtZT9pdGVtLmNpdHlOYW1lOicnLCAgICAgICAgICAgICAgICAgLy/luIJcclxuICAgICAgICAgICAgZGlzdHJpY3ROYW1lOiBpdGVtLmRpc3RyaWN0TmFtZT9pdGVtLmRpc3RyaWN0TmFtZTonJywgICAgIC8v5Yy6XHJcbiAgICAgICAgICAgIGFkZHJlc3M6IGl0ZW0uYWRkcmVzcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+ivpue7huWcsOWdgFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8v5aSE55CGSUTkuLrmlbDlrZdcclxuICAgICAgICBsZXQgbGlzdDphbnkgID0ganJqZ01kb2Vsc0xpc3QuY29uY2F0KHR6TW9kZWxzTGlzdCwgcm9uZ3ppTmVlZHNMaXN0LCByb25nemlQcm9zTGlzdCk7XHJcbiAgICAgICAgbGV0IG5ld01hcmtlcnNMaXN0OmFueSA9IGxpc3QubWFwKChpdGVtOmFueSwgaW5kZXg6bnVtYmVyKTphbnk9PntcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBpbmRleCwgICAgICAgICAgICAgICAgICAgLy9tYXDnlKjnmoToh6rlrprkuYlJRFxyXG4gICAgICAgICAgICBuYW1lOiBpdGVtLm5hbWUsICAgICAgICAgICAgIC8v6K+m5oOF5Yik5patXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZTogaXRlbS5sb25naXR1ZGUsICAgLy/nu4/luqZcclxuICAgICAgICAgICAgbGF0aXR1ZGU6IGl0ZW0ubGF0aXR1ZGUsICAgICAvL+e6rOW6plxyXG4gICAgICAgICAgICBpY29uUGF0aDogaXRlbS5pY29uUGF0aCwgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIHdpZHRoOiAyNyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNSxcclxuICAgICAgICAgICAgY2FsbG91dDogaXRlbS5jYWxsb3V0LFxyXG4gICAgICAgICAgICBvbGRJZDogaXRlbS5pZCwgICAgICAgICAgICAgICAgICAgICAgLy/ljp/lp4tJRFxyXG4gICAgICAgICAgICB0aXRsZTogaXRlbS50aXRsZSwgICAgICAgICAgICAgICAgICAgLy/moIfpophcclxuICAgICAgICAgICAgaW1nQXJyOiBpdGVtLmltZ0FyciwgICAgICAgICAgICAgICAgIC8v5Zu+54mHXHJcbiAgICAgICAgICAgIHByb3ZpbmNlTmFtZTogaXRlbS5wcm92aW5jZU5hbWUsICAgICAvL+ecgVxyXG4gICAgICAgICAgICBjaXR5TmFtZTogaXRlbS5jaXR5TmFtZSwgICAgICAgICAgICAgLy/luIJcclxuICAgICAgICAgICAgZGlzdHJpY3ROYW1lOiBpdGVtLmRpc3RyaWN0TmFtZSwgICAgIC8v5Yy6XHJcbiAgICAgICAgICAgIGFkZHJlc3M6IGl0ZW0uYWRkcmVzcyAgICAgICAgICAgICAgICAvL+ivpue7huWcsOWdgFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmKHRoaXMuZGF0YS50b3RhbCA9PSAwKXtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIG1hcmtlcnM6IG5ld01hcmtlcnNMaXN0LCAgICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIHRvdGFsOiByZXMudmFsLnRvdGFsLCAgICAgICAgICAgICAgICAgIC8v5oC75pWwXHJcbiAgICAgICAgICAgIG11bUxpc3Q6IG5ld01hcmtlcnNMaXN0LCAgICAgICAgICAgICAgICAvL+WIl+ihqFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIG1hcmtlcnM6IHRoaXMuZGF0YS5tYXJrZXJzLmNvbmNhdChuZXdNYXJrZXJzTGlzdCksICAgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgbXVtTGlzdDogdGhpcy5kYXRhLm11bUxpc3QuY29uY2F0KG5ld01hcmtlcnNMaXN0KSwgICAgICAgICAgICAgICAvL+WIl+ihqFxyXG4gICAgICAgICAgICB0b3RhbDogcmVzLnZhbC50b3RhbCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5oC75pWwXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLmRhdGEubXVtTGlzdC5sZW5ndGggPCByZXMudmFsLnRvdGFsKXtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIG1vcmVTaG93OiB0cnVlLFxyXG4gICAgICAgICAgICBtb3JlVGl0bGU6ICfngrnlh7vliqDovb3mm7TlpJonLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIG1vcmVTaG93OiB0cnVlLFxyXG4gICAgICAgICAgICBtb3JlVGl0bGU6ICflt7LliqDovb3lhajpg6gnLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICB6akJ0blRvZ2dsZShlOmFueSk6dm9pZHsgIC8v5om+6LWE6YeR77yI5oyJ6ZKu54q25oCB5YiH5o2i77yJXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICB6akJ0bkNsYXNzOiBlLnRhcmdldC5kYXRhc2V0Lm51bSxcclxuICAgICAgLy/ph5Hono1cclxuICAgICAganJDYXRlZ29yeUluZGV4OiAwLCAgICAgICAgIC8v5b2T5YmN57Si5byVXHJcbiAgICAgIGpyQ2F0ZWdvcnlJZDogbnVsbCwgICAgICAgICAvL+mAieS4reeahGlkXHJcbiAgICAgIGpyVHlwZU9uZUlkOiAnJywgICAgICAgICAgICAvL+acjeWKoeexu+WIq+S4gOe6p+iPnOWNlVxyXG4gICAgICBqclR5cGVUd29JZDogJycsICAgICAgICAgICAgLy/mnI3liqHnsbvliKvkuoznuqfoj5zljZVcclxuICAgICAganJUeXBlQ2xhc3M6IG51bGwsXHJcbiAgICAgIGpyRHdTdGF0dXNJZDogJycsICAgICAgICAgIC8v5Y2V5L2N57G75Z6LXHJcbiAgICAgIGpyU2NhbGVDbGFzczogbnVsbCxcclxuICAgICAganJEd1NjYWxlSWQ6ICcnLCAgICAgICAgICAgLy/ljZXkvY3op4TmqKFcclxuICAgICAganJJbmR1c3RyeUluZGV4OiAwLCAgICAgICAgIC8v5b2T5YmN57Si5byVXHJcbiAgICAgIGpySW5kdXN0cnlJZDogbnVsbCwgICAgICAgICAvL+mAieS4reeahGlkXHJcbiAgICAgIGpyQ3lUeXBlSWQ6ICcnLCAgICAgICAgICAgICAvL+S6p+S4mmlkXHJcbiAgICAgIGpySHlUeXBlSWQ6ICcnLCAgICAgICAgICAgICAvL+ihjOS4mmlkXHJcblxyXG4gICAgICAvL+aKlei1hFxyXG4gICAgICB0ekluZGV4OiAwLCAgICAgICAgICAgICAgICAgLy/lvZPliY3ntKLlvJVcclxuICAgICAgdHpJbmR1c3RyeUlkOiBudWxsLCAgICAgICAgIC8v6YCJ5Lit55qEaWRcclxuXHJcbiAgICAgIHR6QXJlYUNsYXNzOiBudWxsLCAgICAgICAgICAvL+aKlei1hOWMuuWfn1xyXG4gICAgICB0eldheUNsYXNzOiBudWxsLCAgICAgICAgICAgLy/mipXotYTmlrnlvI9cclxuICAgICAgdHpPdGhlckNsYXNzOiBudWxsLCAgICAgICAgIC8v5oqV6LWE6YeR6aKdXHJcbiAgICAgIHR6VHlwZUNsYXNzOiBudWxsLCAgICAgICAgICAvL+aKlei1hOexu+Wei1xyXG5cclxuICAgICAgdHpBcmVhSWQ6ICcnLCAgICAgICAgICAgICAgIC8v5oqV6LWE5Yy65Z+fXHJcbiAgICAgIHR6V2F5SWQ6ICcnLCAgICAgICAgICAgICAgICAvL+aKlei1hOaWueW8j1xyXG4gICAgICB0ek90aGVySWQ6ICcnLCAgICAgICAgICAgICAgLy/mipXotYTph5Hpop1cclxuICAgICAgdHpUeXBlSWQ6ICcnLCAgICAgICAgICAgICAgIC8v5oqV6LWE57G75Z6LXHJcbiAgICAgIHR6Q3lUeXBlSWQ6ICcnLCAgICAgICAgICAgICAvL+S6p+S4mmlkXHJcbiAgICAgIHR6SHlUeXBlSWQ6ICcnLCAgICAgICAgICAgICAvL+ihjOS4mmlkXHJcblxyXG4gICAgICAvL+iejei1hFxyXG4gICAgICByekluZGV4OiAwLCAgICAgICAgICAgICAgICAgLy/lvZPliY3ntKLlvJVcclxuICAgICAgcnpJbmR1c3RyeUlkOiBudWxsLCAgICAgICAgIC8v6YCJ5Lit55qEaWRcclxuXHJcbiAgICAgIHJ6Q2F0ZWdvcnlDbGFzczogbnVsbCwgICAgICAvL+mcgOaxguexu+WIq1xyXG4gICAgICByekZpbmFuY2luZ0NsYXNzOiBudWxsLCAgICAgLy/ono3otYTph5Hpop1cclxuXHJcbiAgICAgIHJ6Q2F0ZWdvcnlJZDogJycsICAgICAgICAgICAvL+iejei1hOaWueW8j1xyXG4gICAgICByekZpbmFuY2luZ0lkOiAnJywgICAgICAgICAgLy/ono3otYTph5Hpop1cclxuICAgICAgcnpDeVR5cGVJZDogJycsICAgICAgICAgICAgIC8v5Lqn5LiaaWRcclxuICAgICAgcnpIeVR5cGVJZDogJycsICAgICAgICAgICAgIC8v6KGM5LiaaWRcclxuXHJcbiAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgICAvLzbmib7nu5PmnpxcclxuICAgICAgbXVtTGlzdDogW10sICAgICAgICAgICAgICAgIC8vNuaJvuWIl+ihqFxyXG4gICAgICBtYXJrZXJzOiBbXSwgICAgICAgICAgICAgICAgLy/lnLDlm77moIfngrlcclxuICAgICAgc2VhcmNoS2V5OiAnJywgICAgICAgICAgICAgIC8v5YWz6ZSu5a2X5pCc57SiXHJcbiAgICB9KVxyXG4gICAgaWYoZS50YXJnZXQuZGF0YXNldC5udW0gPT0gMSl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7ICAvL+WFqOmDqFxyXG4gICAgICAgIGZsYWc6ICd6aicsICAgICAgICAgICAgICAgICAgICAvL+W9k+WJjeWIl+ihqFxyXG4gICAgICAgIGpyU2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgICAgICAgICAvL+mrmOe6p+aQnOe0ou+8iOmHkeiejeacjeWKoe+8iVxyXG4gICAgICAgIHR6U2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgICAgICAgICAvL+mrmOe6p+aQnOe0ou+8iOaJvuaKlei1hO+8iVxyXG4gICAgICAgIHJ6U2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgICAgICAgICAvL+mrmOe6p+aQnOe0ou+8iOaJvuiejei1hO+8iVxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLmdldEFsbEZ1bmRzTGlzdCgpOyAgICAgICAvLzbmib7otYTph5Hlhajpg6hcclxuICAgIH1lbHNlIGlmKGUudGFyZ2V0LmRhdGFzZXQubnVtID09IDIpeyAgLy/ph5Hono3mnI3liqFcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBmbGFnOiAnanInLCAgICAgICAgICAgICAgICAgICAgICAgLy/lvZPliY3liJfooahcclxuICAgICAgICBqclNlYXJjaEluZm9TaG93OiB0cnVlLCAgICAgICAgICAgLy/pq5jnuqfmkJzntKLvvIjph5Hono3mnI3liqHvvIlcclxuICAgICAgICB0elNlYXJjaEluZm9TaG93OiBmYWxzZSwgICAgICAgICAgLy/pq5jnuqfmkJzntKLvvIjmib7mipXotYTvvIlcclxuICAgICAgICByelNlYXJjaEluZm9TaG93OiBmYWxzZSwgICAgICAgICAgLy/pq5jnuqfmkJzntKLvvIjmib7ono3otYTvvIlcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5nZXRKckxpc3QoKTsgICAgICAgICAgICAvL+aJvui1hOmHke+8iOmHkeieje+8iVxyXG4gICAgICB0aGlzLmZ3Q2F0ZWdvcnkoKTsgICAgICAgICAgIC8v5pyN5Yqh57G75YirXHJcbiAgICAgIHRoaXMuZndUeXBlKCk7ICAgICAgICAgICAgICAgLy/ljZXkvY3nsbvlnotcclxuICAgICAgdGhpcy5md1NjYWxlKCk7ICAgICAgICAgICAgICAvL+WNleS9jeinhOaooVxyXG4gICAgICB0aGlzLmluZHVzdHJ5KCk7ICAgICAgICAgICAgIC8v5Lqn5Lia44CB6KGM5LiaXHJcbiAgICB9ZWxzZSBpZihlLnRhcmdldC5kYXRhc2V0Lm51bSA9PSAzKXsgIC8v5om+5oqV6LWEXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgZmxhZzogJ3R6JywgICAgICAgICAgICAgICAgICAgICAgIC8v5b2T5YmN5YiX6KGoXHJcbiAgICAgICAganJTZWFyY2hJbmZvU2hvdzogZmFsc2UsICAgICAgICAgIC8v6auY57qn5pCc57Si77yI6YeR6J6N5pyN5Yqh77yJXHJcbiAgICAgICAgdHpTZWFyY2hJbmZvU2hvdzogdHJ1ZSwgICAgICAgICAgIC8v6auY57qn5pCc57Si77yI5om+5oqV6LWE77yJXHJcbiAgICAgICAgcnpTZWFyY2hJbmZvU2hvdzogZmFsc2UsICAgICAgICAgIC8v6auY57qn5pCc57Si77yI5om+6J6N6LWE77yJXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuZ2V0VHpMaXN0KCk7ICAgICAgICAgICAgICAgICAgIC8v5om+6LWE6YeR77yI5oqV6LWE77yJXHJcbiAgICAgIHRoaXMudHpBcmVhKCk7ICAgICAgICAgICAgICAgICAgICAgIC8v5oqV6LWE5Yy65Z+fXHJcbiAgICAgIHRoaXMudHpXYXkoKTsgICAgICAgICAgICAgICAgICAgICAgIC8v5oqV6LWE5pa55byPXHJcbiAgICAgIHRoaXMudHpPdGhlcigpOyAgICAgICAgICAgICAgICAgICAgIC8v5oqV6LWE6YeR6aKdXHJcbiAgICAgIHRoaXMudHpUeXBlKCk7ICAgICAgICAgICAgICAgICAgICAgIC8v5oqV6LWE57G75Z6LXHJcbiAgICAgIHRoaXMuaW5kdXN0cnkoKTsgICAgICAgICAgICAgICAgICAgIC8v5Lqn5Lia44CB6KGM5LiaXHJcbiAgICB9ZWxzZXsgIC8v5om+6J6N6LWEXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgZmxhZzogJ3J6JywgICAgICAgICAgICAgICAgICAgICAgIC8v5b2T5YmN5YiX6KGoXHJcbiAgICAgICAganJTZWFyY2hJbmZvU2hvdzogZmFsc2UsICAgICAgICAgIC8v6auY57qn5pCc57Si77yI6YeR6J6N5pyN5Yqh77yJXHJcbiAgICAgICAgdHpTZWFyY2hJbmZvU2hvdzogZmFsc2UsICAgICAgICAgIC8v6auY57qn5pCc57Si77yI5om+5oqV6LWE77yJXHJcbiAgICAgICAgcnpTZWFyY2hJbmZvU2hvdzogdHJ1ZSwgICAgICAgICAgIC8v6auY57qn5pCc57Si77yI5om+6J6N6LWE77yJXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuZ2V0UnpMaXN0KCk7ICAgICAgICAgICAgICAgICAgIC8v5om+6LWE6YeR77yI6J6N6LWE77yJXHJcbiAgICAgIHRoaXMucnpXYXkoKTsgICAgICAgICAgICAgICAgICAgICAgIC8v6J6N6LWE5pa55byPXHJcbiAgICAgIHRoaXMueG1TdGFnZSgpOyAgICAgICAgICAgICAgICAgICAgIC8v5omA5aSE6Zi25q61XHJcbiAgICAgIHRoaXMueG1DYXRlZ29yeSgpOyAgICAgICAgICAgICAgICAgIC8v6ZyA5rGC57G75YirXHJcbiAgICAgIHRoaXMueG1GaW5hbmNpbmcoKTsgICAgICAgICAgICAgICAgIC8v6J6N6LWE6YeR6aKdXHJcbiAgICAgIHRoaXMuaW5kdXN0cnkoKTsgICAgICAgICAgICAgICAgICAgIC8v5Lqn5Lia44CB6KGM5LiaXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLy/mib7otYTph5HvvIjph5Hono3mnI3liqHvvIlcclxuICBnZXRKckxpc3QoKXsgIC8v5om+6LWE6YeR77yI6YeR6J6N77yJXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBwdFRpdGxlOiAn6YeR6J6N5pyN5YqhJywgICAgICAgIC8v5p+l6K+i5qCH6aKYXHJcbiAgICAgIG1vcmVTaG93OiBmYWxzZSxcclxuICAgIH0pXHJcbiAgICBodHRwcy5yZXF1ZXN0KGFwaS5qaW5yb25nLCB7XHJcbiAgICAgIHRlbmFudElkOiBhcGkuYXJlYUlkLCAgICAgICAgICAgICAgICAgLy/lnLDljLppZFxyXG4gICAgICBrZXk6IHRoaXMuZGF0YS5zZWFyY2hLZXksICAgICAgICAgICAgIC8v5YWz6ZSu5a2X5pCc57SiXHJcbiAgICAgIHBhZ2VTaXplOiB0aGlzLmRhdGEucGFnZVNpemUsICAgICAgICAgLy/mr4/pobXmmL7npLrmlbDph49cclxuICAgICAgcGFnZUluZGV4OiB0aGlzLmRhdGEucGFnZUluZGV4LCAgICAgICAvL+mhteaVsFxyXG4gICAgICB0eXBlT25lSWQ6IHRoaXMuZGF0YS5qclR5cGVPbmVJZCwgICAgIC8v5pyN5Yqh57G75Yir5LiA57qn6I+c5Y2VXHJcbiAgICAgIHR5cGVUd29JZDogdGhpcy5kYXRhLmpyVHlwZVR3b0lkLCAgICAgLy/mnI3liqHnsbvliKvkuoznuqfoj5zljZVcclxuICAgICAgcXlOYXR1cmVJZDogdGhpcy5kYXRhLmpyRHdTdGF0dXNJZCwgICAvL+WNleS9jeexu+Wei2lkXHJcbiAgICAgIGR3U2NhbGVJZDogdGhpcy5kYXRhLmpyRHdTY2FsZUlkLCAgICAgLy/ljZXkvY3op4TmqKFpZFxyXG4gICAgICBjeVR5cGVJZDogdGhpcy5kYXRhLmpyQ3lUeXBlSWQsICAgICAgIC8v5Lqn5LiaaWRcclxuICAgICAgaHlUeXBlSWQ6IHRoaXMuZGF0YS5qckh5VHlwZUlkICAgICAgICAvL+ihjOS4mmlkXHJcbiAgICB9LCAnR0VUJykudGhlbigocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICBpZihyZXMpe1xyXG4gICAgICAgIC8v6YeR6J6NXHJcbiAgICAgICAgbGV0IGxpc3Q6YW55ID0gIHJlcy5saXN0Lm1hcCgoaXRlbTphbnksIGluZGV4Om51bWJlcik6YW55PT57XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogaW5kZXgsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL21hcOeUqOeahOiHquWumuS5iUlEXHJcbiAgICAgICAgICAgIG5hbWU6ICfph5Hono0nLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6K+m5oOF5Yik5patXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZTogaXRlbS5sbmcsICAgICAgICAgICAgICAgICAgICAgICAgIC8v57uP5bqmXHJcbiAgICAgICAgICAgIGxhdGl0dWRlOiBpdGVtLmxhdCwgICAgICAgICAgICAgICAgICAgICAgICAgIC8v57qs5bqmXHJcbiAgICAgICAgICAgIGljb25QYXRoOiAnLi4vLi4vaW1hZ2VzL3pqLnBuZycsICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIHdpZHRoOiAyNyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNSxcclxuICAgICAgICAgICAgY2FsbG91dDoge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IGl0ZW0ucXlOYW1lP2l0ZW0ucXlOYW1lOifmnKrloavmiqUnLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IDE4LFxyXG4gICAgICAgICAgICAgIGJnQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1LFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNDQ0MnLFxyXG4gICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdCWUNMSUNLJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbGRJZDogaXRlbS5pZCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/ljp/lp4tJRFxyXG4gICAgICAgICAgICB0aXRsZTogaXRlbS5xeU5hbWU/aXRlbS5xeU5hbWU6J+acquWhq+aKpScsICAgICAgICAgICAgICAgICAgIC8v5qCH6aKYXHJcbiAgICAgICAgICAgIGltZ0FycjogaXRlbS5md2pnUGljcywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lm77niYfmlbDnu4RcclxuICAgICAgICAgICAgcHJvdmluY2VOYW1lOiBpdGVtLnByb3ZpbmNlTmFtZT9pdGVtLnByb3ZpbmNlTmFtZTonJywgICAgIC8v55yBXHJcbiAgICAgICAgICAgIGNpdHlOYW1lOiBpdGVtLmNpdHlOYW1lP2l0ZW0uY2l0eU5hbWU6JycsICAgICAgICAgICAgICAgICAvL+W4glxyXG4gICAgICAgICAgICBkaXN0cmljdE5hbWU6IGl0ZW0uZGlzdHJpY3ROYW1lP2l0ZW0uZGlzdHJpY3ROYW1lOicnLCAgICAgLy/ljLpcclxuICAgICAgICAgICAgYWRkcmVzczogaXRlbS5md0FkZHJlc3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6K+m57uG5Zyw5Z2AXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuZGF0YS50b3RhbCA9PSAwKXtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIG1hcmtlcnM6IGxpc3QsICAgICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIHRvdGFsOiByZXMudG90YWwsICAgICAgICAgICAgIC8v5oC75pWwXHJcbiAgICAgICAgICAgIG11bUxpc3Q6IGxpc3QsICAgICAgICAgICAgICAgIC8v5YiX6KGoXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgbWFya2VyczogdGhpcy5kYXRhLm1hcmtlcnMuY29uY2F0KGxpc3QpLCAgICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIG11bUxpc3Q6IHRoaXMuZGF0YS5tdW1MaXN0LmNvbmNhdChsaXN0KSwgICAgICAgICAgICAgICAvL+WIl+ihqFxyXG4gICAgICAgICAgICB0b3RhbDogcmVzLnRvdGFsLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+aAu+aVsFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMuZGF0YS5tdW1MaXN0Lmxlbmd0aCA8IHJlcy50b3RhbCl7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBtb3JlU2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgbW9yZVRpdGxlOiAn54K55Ye75Yqg6L295pu05aSaJyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBtb3JlU2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgbW9yZVRpdGxlOiAn5bey5Yqg6L295YWo6YOoJyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBqckNhdGVnb3J5TmF2SXRlbShkYXRhOmFueSk6dm9pZHsgICAgICAgLy/mnI3liqHnsbvliKvvvIjlt6bkvqflr7zoiKrngrnlh7vml7bvvIzop6blj5HnmoTkuovku7bvvIlcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGpyQ2F0ZWdvcnlJbmRleDogZGF0YS5kZXRhaWwuaW5kZXggfHwgMCxcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAganJDYXRlZ29yeUl0ZW0oZGF0YTphbnkpOnZvaWQgeyAgLy/mnI3liqHnsbvliKvvvIjlt6bkvqflr7zoiKrngrnlh7vml7bvvIzop6blj5HnmoTkuovku7bvvIlcclxuICAgIGNvbnN0IGlkID0gdGhpcy5kYXRhLmpyQ2F0ZWdvcnlJZCA9PT0gZGF0YS5kZXRhaWwuaWQgPyBudWxsIDogZGF0YS5kZXRhaWwuaWQ7XHJcbiAgICBjb25zdCBwSWQgPSBkYXRhLmRldGFpbC5wSWQ7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBqckNhdGVnb3J5SWQ6IGlkLFxyXG4gICAgICBqclR5cGVPbmVJZDogcElkID8gcElkIDogJycsICAgICAgICAgICAgICAgLy/mnI3liqHnsbvliKvkuIDnuqfoj5zljZVcclxuICAgICAganJUeXBlVHdvSWQ6IGlkID09IHBJZCA/ICcnIDogaWQsICAgICAgICAgIC8v5pyN5Yqh57G75Yir5LqM57qn6I+c5Y2VIFxyXG4gICAgfSlcclxuICB9LFxyXG4gIGpyVHlwZUZuKGU6YW55KTp2b2lkeyAgICAvL+WNleS9jeexu+Wei+inpuWPkVxyXG4gICAgbGV0IGlkOmFueSA9IGUudGFyZ2V0LmRhdGFzZXQuaWQ7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBqclR5cGVDbGFzczogaWQsXHJcbiAgICAgIGpyRHdTdGF0dXNJZDogaWQsICAgICAgICAvL+WNleS9jeexu+Wei1xyXG4gICAgfSlcclxuICB9LFxyXG4gIGpyU2NhbGVGbihlOmFueSk6dm9pZHsgICAgLy/ljZXkvY3op4TmqKHop6blj5FcclxuICAgIGxldCBpZDphbnkgPSBlLnRhcmdldC5kYXRhc2V0LmlkO1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAganJTY2FsZUNsYXNzOiBpZCxcclxuICAgICAganJEd1NjYWxlSWQ6IGlkLCAgICAgICAgLy/ljZXkvY3op4TmqKFcclxuICAgIH0pXHJcbiAgfSxcclxuICBqck5hdkl0ZW0oZGF0YTphbnkpOnZvaWR7ICAgICAgIC8v5om+5pyN5Yqh6KGM5Lia5Lqn5Lia77yI5bem5L6n5a+86Iiq54K55Ye75pe277yM6Kem5Y+R55qE5LqL5Lu277yJXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBqckluZHVzdHJ5SW5kZXg6IGRhdGEuZGV0YWlsLmluZGV4IHx8IDAsXHJcbiAgICB9KTtcclxuICB9LFxyXG4gIGpySW5kdXN0cnlJdGVtKGRhdGE6YW55KTp2b2lkIHsgIC8v5om+5pyN5Yqh6KGM5Lia5Lqn5Lia77yI5Y+z5L6n6YCJ5oup6aG56KKr54K55Ye75pe277yM5Lya6Kem5Y+R55qE5LqL5Lu277yJIFxyXG4gICAgY29uc3QgaWQgPSB0aGlzLmRhdGEuanJJbmR1c3RyeUlkID09PSBkYXRhLmRldGFpbC5pZCA/IG51bGwgOiBkYXRhLmRldGFpbC5pZDtcclxuICAgIGNvbnN0IHBJZCA9IGRhdGEuZGV0YWlsLnBJZDtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGpySW5kdXN0cnlJZDogaWQsXHJcbiAgICAgIGpyQ3lUeXBlSWQ6IHBJZCA/IHBJZCA6ICcnLCAgICAgICAgICAvL+S6p+S4mmlkXHJcbiAgICAgIGpySHlUeXBlSWQ6IGlkID09IHBJZCA/ICcnIDogaWQsICAgICAvL+ihjOS4mmlkXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAganJSZXNldChlOmFueSk6dm9pZHsgIC8v5om+5pyN5Yqh6YeN572uXHJcbiAgICBsZXQgZmxhZzpudW1iZXIgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5mbGFnO1xyXG4gICAgaWYoZmxhZyA9PSAxKXsgIC8v5pyN5Yqh57G75YirXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAganJDYXRlZ29yeUluZGV4OiAwLCAgICAgICAgIC8v5b2T5YmN57Si5byVXHJcbiAgICAgICAganJDYXRlZ29yeUlkOiBudWxsLCAgICAgICAgIC8v6YCJ5Lit55qEaWRcclxuICAgICAgICBqclR5cGVPbmVJZDogJycsICAgICAgICAgICAgLy/mnI3liqHnsbvliKvkuIDnuqfoj5zljZVcclxuICAgICAgICBqclR5cGVUd29JZDogJycsICAgICAgICAgICAgLy/mnI3liqHnsbvliKvkuoznuqfoj5zljZVcclxuICAgICAgICBudW06IDAsICAgICAgICAgICAgICAgICAgICAgLy825om+57uT5p6cXHJcbiAgICAgICAgbXVtTGlzdDogW10sICAgICAgICAgICAgICAgIC8vNuaJvuWIl+ihqFxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI2pyQ2F0ZWdvcnlJZCcpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAgLy/mnI3liqHnsbvliKvlhbPpl61cclxuICAgIH1lbHNlIGlmKGZsYWcgPT0gMil7ICAvL+WNleS9jeexu+Wei1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGpyVHlwZUNsYXNzOiBudWxsLFxyXG4gICAgICAgIGpyRHdTdGF0dXNJZDogJycsICAgICAgICAgIC8v5Y2V5L2N57G75Z6LXHJcbiAgICAgICAgbnVtOiAwLCAgICAgICAgICAgICAgICAgICAgLy825om+57uT5p6cXHJcbiAgICAgICAgbXVtTGlzdDogW10sICAgICAgICAgICAgICAgLy825om+5YiX6KGoXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjanJUeXBlJykudG9nZ2xlKGZhbHNlKTsgICAgICAgIC8v5Y2V5L2N57G75Z6L5YWz6ZetXHJcbiAgICB9ZWxzZSBpZihmbGFnID09IDMpeyAgLy/ljZXkvY3op4TmqKFcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBqclNjYWxlQ2xhc3M6IG51bGwsXHJcbiAgICAgICAganJEd1NjYWxlSWQ6ICcnLCAgICAgICAgICAgLy/ljZXkvY3op4TmqKFcclxuICAgICAgICBudW06IDAsICAgICAgICAgICAgICAgICAgICAvLzbmib7nu5PmnpxcclxuICAgICAgICBtdW1MaXN0OiBbXSwgICAgICAgICAgICAgICAvLzbmib7liJfooahcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyNqclNjYWxlSWQnKS50b2dnbGUoZmFsc2UpOyAgICAgICAgLy/ljZXkvY3op4TmqKHlhbPpl61cclxuICAgIH1lbHNleyAgLy/kuqfkuJrjgIHooYzkuJpcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBqckluZHVzdHJ5SW5kZXg6IDAsICAgICAgICAgLy/lvZPliY3ntKLlvJVcclxuICAgICAgICBqckluZHVzdHJ5SWQ6IG51bGwsICAgICAgICAgLy/pgInkuK3nmoRpZFxyXG4gICAgICAgIGpyQ3lUeXBlSWQ6ICcnLCAgICAgICAgICAgICAvL+S6p+S4mmlkXHJcbiAgICAgICAganJIeVR5cGVJZDogJycsICAgICAgICAgICAgIC8v6KGM5LiaaWRcclxuICAgICAgICBudW06IDAsICAgICAgICAgICAgICAgICAgICAvLzbmib7nu5PmnpxcclxuICAgICAgICBtdW1MaXN0OiBbXSwgICAgICAgICAgICAgICAvLzbmib7liJfooahcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyNqckluZHVzdHJ5SWQnKS50b2dnbGUoZmFsc2UpOyAgICAgLy/kuqfkuJrjgIHooYzkuJrlhbPpl61cclxuICAgIH1cclxuICAgIHRoaXMuZ2V0SnJMaXN0KCk7ICAgICAgICAgICAgLy/mib7otYTph5HvvIjph5Hono3vvIlcclxuICB9LFxyXG4gIGpyU3VibWl0KGU6YW55KTp2b2lkeyAgLy/mib7mnI3liqHlrozmiJBcclxuICAgIGxldCBmbGFnOm51bWJlciA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmZsYWc7XHJcbiAgICBpZihmbGFnID09IDEpe1xyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI2pyQ2F0ZWdvcnlJZCcpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAgLy/mnI3liqHnsbvliKvlhbPpl61cclxuICAgIH1lbHNlIGlmKGZsYWcgPT0gMil7XHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjanJUeXBlJykudG9nZ2xlKGZhbHNlKTsgICAgICAgICAgICAgICAvL+WNleS9jeexu+Wei+WFs+mXrVxyXG4gICAgfWVsc2UgaWYoZmxhZyA9PSAzKXtcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyNqclNjYWxlSWQnKS50b2dnbGUoZmFsc2UpOyAgICAgICAgICAgIC8v5Y2V5L2N6KeE5qih5YWz6ZetXHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyNqckluZHVzdHJ5SWQnKS50b2dnbGUoZmFsc2UpOyAgICAgICAgIC8v5Lqn5Lia44CB6KGM5Lia5YWz6ZetXHJcbiAgICB9XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBudW06IDAsICAgICAgICAgICAgICAgICAgICAvLzbmib7nu5PmnpxcclxuICAgICAgbXVtTGlzdDogW10sICAgICAgICAgICAgICAgLy825om+5YiX6KGoXHJcbiAgICAgIG1hcmtlcnM6W10sICAgICAgICAgICAgICAgLy/moIforrDngrnlpITnkIblkI7nmoTmlbDmja7vvIhpZOOAgeafpeivouS9v+eUqO+8iVxyXG4gICAgICBwYWdlU2l6ZTogMTAsICAgICAgICAgICAgIC8v5q+P6aG15pi+56S65pWw6YePXHJcbiAgICAgIHBhZ2VJbmRleDogMSwgICAgICAgICAgICAgLy/lvZPliY3pobVcclxuICAgICAgdG90YWw6IDAsICAgICAgICAgICAgICAgICAvL+aAu+adoeaVsFxyXG4gICAgfSlcclxuICAgIHRoaXMuZ2V0SnJMaXN0KCk7ICAgICAgICAgICAgLy/mib7otYTph5HvvIjph5Hono3vvIlcclxuICB9LFxyXG5cclxuIFxyXG4gIC8v5om+6LWE6YeR77yI5oqV6LWE77yJXHJcbiAgZ2V0VHpMaXN0KCl7ICAvL+aJvui1hOmHke+8iOaKlei1hO+8iVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgcHRUaXRsZTogJ+aKlei1hCcsICAgICAgICAvL+afpeivouagh+mimFxyXG4gICAgICBtb3JlU2hvdzogZmFsc2UsXHJcbiAgICB9KVxyXG4gICAgaHR0cHMucmVxdWVzdChhcGkudG91emksIHtcclxuICAgICAgdGVuYW50SWQ6IGFwaS5hcmVhSWQsICAgICAgICAgICAgICAgICAgLy/lnLDljLppZFxyXG4gICAgICBrZXk6IHRoaXMuZGF0YS5zZWFyY2hLZXksICAgICAgICAgICAgIC8v5YWz6ZSu5a2X5pCc57SiXHJcbiAgICAgIHBhZ2VTaXplOiB0aGlzLmRhdGEucGFnZVNpemUsICAgICAgICAgLy/mr4/pobXmmL7npLrmlbDph49cclxuICAgICAgcGFnZUluZGV4OiB0aGlzLmRhdGEucGFnZUluZGV4LCAgICAgICAvL+mhteaVsFxyXG5cclxuICAgICAgdHlwZU9uZUlkOiB0aGlzLmRhdGEuanJUeXBlT25lSWQsICAgICAvL+acjeWKoeexu+WIq+S4gOe6p+iPnOWNlVxyXG4gICAgICB0eXBlVHdvSWQ6IHRoaXMuZGF0YS5qclR5cGVUd29JZCwgICAgIC8v5pyN5Yqh57G75Yir5LqM57qn6I+c5Y2VXHJcbiAgICAgIGR3U3RhdHVzSWQ6IHRoaXMuZGF0YS5qckR3U3RhdHVzSWQsICAgLy/ljZXkvY3nsbvlnotpZFxyXG4gICAgICBkd1NjYWxlSWQ6IHRoaXMuZGF0YS5qckR3U2NhbGVJZCwgICAgIC8v5Y2V5L2N6KeE5qihaWRcclxuICAgICAgY3lUeXBlSWQ6IHRoaXMuZGF0YS5qckN5VHlwZUlkLCAgICAgICAvL+S6p+S4mmlkXHJcbiAgICAgIGh5VHlwZUlkOiB0aGlzLmRhdGEuanJIeVR5cGVJZCAgICAgICAgLy/ooYzkuJppZFxyXG4gICAgfSwgJ0dFVCcpLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgaWYocmVzKXtcclxuXHJcbiAgICAgICAgLy/mipXotYRcclxuICAgICAgICBsZXQgbGlzdDphbnkgPSAgcmVzLmxpc3QubWFwKChpdGVtOmFueSwgaW5kZXg6bnVtYmVyKTphbnk9PntcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBpbmRleCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vbWFw55So55qE6Ieq5a6a5LmJSURcclxuICAgICAgICAgICAgbmFtZTogJ+aKlei1hCcsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/or6bmg4XliKTmlq1cclxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBpdGVtLmxuZywgICAgICAgICAgICAgICAgICAgICAgICAgLy/nu4/luqZcclxuICAgICAgICAgICAgbGF0aXR1ZGU6IGl0ZW0ubGF0LCAgICAgICAgICAgICAgICAgICAgICAgICAgLy/nuqzluqZcclxuICAgICAgICAgICAgaWNvblBhdGg6ICcuLi8uLi9pbWFnZXMvdHoucG5nJywgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgd2lkdGg6IDI3LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1LFxyXG4gICAgICAgICAgICBjYWxsb3V0OiB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogaXRlbS5uZWVkTmFtZT9pdGVtLm5lZWROYW1lOifmnKrloavmiqUnLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IDE4LFxyXG4gICAgICAgICAgICAgIGJnQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1LFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNDQ0MnLFxyXG4gICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdCWUNMSUNLJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbGRJZDogaXRlbS5pZCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/ljp/lp4tJRFxyXG4gICAgICAgICAgICB0aXRsZTogaXRlbS5uZWVkTmFtZT9pdGVtLm5lZWROYW1lOifmnKrloavmiqUnLCAgICAgICAgICAgICAgLy/moIfpophcclxuICAgICAgICAgICAgaW1nQXJyOiBpdGVtLm5lZWRGaWxlcywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Zu+54mH5pWw57uEXHJcbiAgICAgICAgICAgIHByb3ZpbmNlTmFtZTogaXRlbS5wcm92aW5jZU5hbWU/aXRlbS5wcm92aW5jZU5hbWU6JycsICAgICAvL+ecgVxyXG4gICAgICAgICAgICBjaXR5TmFtZTogaXRlbS5jaXR5TmFtZT9pdGVtLmNpdHlOYW1lOicnLCAgICAgICAgICAgICAgICAgLy/luIJcclxuICAgICAgICAgICAgZGlzdHJpY3ROYW1lOiBpdGVtLmRpc3RyaWN0TmFtZT9pdGVtLmRpc3RyaWN0TmFtZTonJywgICAgIC8v5Yy6XHJcbiAgICAgICAgICAgIGFkZHJlc3M6IGl0ZW0udGVuYW50TmFtZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+ivpue7huWcsOWdgFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgICBpZih0aGlzLmRhdGEudG90YWwgPT0gMCl7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBtYXJrZXJzOiBsaXN0LCAgICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIHRvdGFsOiByZXMudG90YWwsICAgICAgIC8v5oC75pWwXHJcbiAgICAgICAgICAgIG11bUxpc3Q6IGxpc3QsICAgICAgICAgICAgICAgIC8v5YiX6KGoXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgbWFya2VyczogdGhpcy5kYXRhLm1hcmtlcnMuY29uY2F0KGxpc3QpLCAgICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIG11bUxpc3Q6IHRoaXMuZGF0YS5tdW1MaXN0LmNvbmNhdChsaXN0KSwgICAgICAgICAgICAgICAvL+WIl+ihqFxyXG4gICAgICAgICAgICB0b3RhbDogcmVzLnRvdGFsLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+aAu+aVsFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMuZGF0YS5tdW1MaXN0Lmxlbmd0aCA8IHJlcy50b3RhbCl7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBtb3JlU2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgbW9yZVRpdGxlOiAn54K55Ye75Yqg6L295pu05aSaJyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBtb3JlU2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgbW9yZVRpdGxlOiAn5bey5Yqg6L295YWo6YOoJyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuZGF0YS5tdW1MaXN0Lmxlbmd0aCA8IHJlcy50b3RhbCl7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBtb3JlU2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgbW9yZVRpdGxlOiAn54K55Ye75Yqg6L295pu05aSaJyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBtb3JlU2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgbW9yZVRpdGxlOiAn5bey5Yqg6L295YWo6YOoJyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICB0ekFyZWFGbihlOmFueSk6dm9pZHsgICAgLy/mipXotYTljLrln5/op6blj5FcclxuICAgIGxldCBpZDphbnkgPSBlLnRhcmdldC5kYXRhc2V0LmlkO1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgdHpBcmVhQ2xhc3M6IGlkLFxyXG4gICAgICB0ekFyZWFJZDogaWQsICAgICAgICAvL+aKlei1hOWMuuWfn0lEXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgdHpXYXlGbihlOmFueSk6dm9pZHsgICAgIC8v5oqV6LWE5pa55byP6Kem5Y+RXHJcbiAgICBsZXQgaWQ6YW55ID0gZS50YXJnZXQuZGF0YXNldC5pZDtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHR6V2F5Q2xhc3M6IGlkLFxyXG4gICAgICB0eldheUlkOiBpZCwgICAgICAgICAvL+aKlei1hOaWueW8j0lEXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgdHpPdGhlckZuKGU6YW55KTp2b2lkeyAgICAgLy/mipXotYTph5Hpop3op6blj5FcclxuICAgIGxldCBpZDphbnkgPSBlLnRhcmdldC5kYXRhc2V0LmlkO1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgdHpPdGhlckNsYXNzOiBpZCxcclxuICAgICAgdHpPdGhlcklkOiBpZCwgICAgICAgICAvL+aKlei1hOmHkeminUlEXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgdHpUeXBlRm4oZTphbnkpOnZvaWR7ICAgICAgLy/mipXotYTnsbvlnovop6blj5FcclxuICAgIGxldCBpZDphbnkgPSBlLnRhcmdldC5kYXRhc2V0LmlkO1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgdHpUeXBlQ2xhc3M6IGlkLFxyXG4gICAgICB0elR5cGVJZDogaWQsICAgICAgICAgLy/mipXotYTnsbvlnotJRFxyXG4gICAgfSlcclxuICB9LFxyXG4gIHR6TmF2SXRlbShkYXRhOmFueSk6dm9pZHsgICAgICAgLy/mib7mipXotYTooYzkuJrkuqfkuJrvvIjlt6bkvqflr7zoiKrngrnlh7vml7bvvIzop6blj5HnmoTkuovku7bvvIlcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHR6SW5kZXg6IGRhdGEuZGV0YWlsLmluZGV4IHx8IDAsXHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHR6SW5kdXN0cnlJdGVtKGRhdGE6YW55KTp2b2lkIHsgIC8v5om+5oqV6LWE6KGM5Lia5Lqn5Lia77yI5Y+z5L6n6YCJ5oup6aG56KKr54K55Ye75pe277yM5Lya6Kem5Y+R55qE5LqL5Lu277yJXHJcbiAgICBjb25zdCBpZCA9IHRoaXMuZGF0YS50ekluZHVzdHJ5SWQgPT09IGRhdGEuZGV0YWlsLmlkID8gbnVsbCA6IGRhdGEuZGV0YWlsLmlkO1xyXG4gICAgY29uc3QgcElkID0gZGF0YS5kZXRhaWwucElkO1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgdHpJbmR1c3RyeUlkOiBpZCxcclxuICAgICAgdHpDeVR5cGVJZDogcElkID8gcElkIDogJycsICAgICAgICAgIC8v5Lqn5LiaaWRcclxuICAgICAgdHpIeVR5cGVJZDogaWQgPT0gcElkID8gJycgOiBpZCwgICAgIC8v6KGM5LiaaWRcclxuICAgIH0pXHJcbiAgfSxcclxuICB0elJlc2V0KGU6YW55KTp2b2lkeyAgLy/mib7mipXotYTph43nva5cclxuICAgIGxldCBmbGFnOm51bWJlciA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmZsYWc7XHJcbiAgICBpZihmbGFnID09IDEpeyAgLy/mipXotYTljLrln59cclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICB0ekFyZWFDbGFzczogbnVsbCxcclxuICAgICAgICB0ekFyZWFJZDogJycsICAgICAgICAgICAgICAgLy/mipXotYTljLrln59JRFxyXG4gICAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgICAvLzbmib7nu5PmnpxcclxuICAgICAgICBtdW1MaXN0OiBbXSwgICAgICAgICAgICAgICAgLy825om+5YiX6KGoXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjdHpBcmVhSWQnKS50b2dnbGUoZmFsc2UpOyAgICAgICAgIC8v5oqV6LWE5Yy65Z+f5YWz6ZetXHJcbiAgICB9ZWxzZSBpZihmbGFnID09IDIpeyAgLy/mipXotYTmlrnlvI9cclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICB0eldheUNsYXNzOiBudWxsLFxyXG4gICAgICAgIHR6V2F5SWQ6ICcnLCAgICAgICAgICAgICAgLy/mipXotYTmlrnlvI9JRFxyXG4gICAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgIC8vNuaJvuWIl+ihqFxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI3R6V2F5SWQnKS50b2dnbGUoZmFsc2UpOyAgICAgICAgLy/mipXotYTmlrnlvI/lhbPpl61cclxuICAgIH1lbHNlIGlmKGZsYWcgPT0gMyl7ICAvL+S6p+S4muihjOS4mlxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHR6SW5kZXg6IDAsICAgICAgICAgICAgICAgIC8v5b2T5YmN57Si5byVXHJcbiAgICAgICAgdHpJbmR1c3RyeUlkOiBudWxsLCAgICAgICAgLy/pgInkuK3nmoRpZFxyXG4gICAgICAgIHR6Q3lUeXBlSWQ6ICcnLCAgICAgICAgICAgIC8v5Lqn5LiaaWRcclxuICAgICAgICB0ekh5VHlwZUlkOiAnJywgICAgICAgICAgICAvL+ihjOS4mmlkXHJcbiAgICAgICAgbnVtOiAwLCAgICAgICAgICAgICAgICAgICAgLy825om+57uT5p6cXHJcbiAgICAgICAgbXVtTGlzdDogW10sICAgICAgICAgICAgICAgLy825om+5YiX6KGoXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjdHpJbmR1c3RyeUlkJykudG9nZ2xlKGZhbHNlKTsgICAgICAgIC8v5Lqn5Lia6KGM5Lia5YWz6ZetXHJcbiAgICB9ZWxzZXsgIC8v5pu05aSaXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgdHpPdGhlckNsYXNzOiBudWxsLFxyXG4gICAgICAgIHR6T3RoZXJJZDogJycsICAgICAgICAgICAgIC8v5oqV6LWE6YeR6aKdSURcclxuICAgICAgICB0elR5cGVDbGFzczogbnVsbCxcclxuICAgICAgICB0elR5cGVJZDogJycsICAgICAgICAgICAgICAvL+aKlei1hOexu+Wei0lEXHJcbiAgICAgICAgbnVtOiAwLCAgICAgICAgICAgICAgICAgICAgLy825om+57uT5p6cXHJcbiAgICAgICAgbXVtTGlzdDogW10sICAgICAgICAgICAgICAgLy825om+5YiX6KGoXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjdHpNb3JlSWQnKS50b2dnbGUoZmFsc2UpOyAgICAgLy8v5pu05aSa5YWz6ZetXHJcbiAgICB9XHJcbiAgICB0aGlzLmdldFR6TGlzdCgpOyAgICAgICAgICAgIC8v5om+6LWE6YeR77yI6YeR6J6NXHJcbiAgfSxcclxuICB0elN1Ym1pdChlOmFueSk6dm9pZHsgIC8v5om+5oqV6LWE5a6M5oiQXHJcbiAgICBsZXQgZmxhZzpudW1iZXIgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5mbGFnO1xyXG4gICAgaWYoZmxhZyA9PSAxKXtcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyN0ekFyZWFJZCcpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAgLy/mipXotYTljLrln5/lhbPpl61cclxuICAgIH1lbHNlIGlmKGZsYWcgPT0gMil7XHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjdHpXYXlJZCcpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAgIC8v5oqV6LWE5pa55byP5YWz6ZetXHJcbiAgICB9ZWxzZSBpZihmbGFnID09IDMpe1xyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI3R6SW5kdXN0cnlJZCcpLnRvZ2dsZShmYWxzZSk7ICAgICAgLy/kuqfkuJrooYzkuJrlhbPpl61cclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI3R6TW9yZUlkJykudG9nZ2xlKGZhbHNlKTsgICAgICAgICAgLy8v5pu05aSa5YWz6ZetXHJcbiAgICB9XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBudW06IDAsICAgICAgICAgICAgICAgICAgICAvLzbmib7nu5PmnpxcclxuICAgICAgbXVtTGlzdDogW10sICAgICAgICAgICAgICAgLy825om+5YiX6KGoXHJcbiAgICAgIG1hcmtlcnM6W10sICAgICAgICAgICAgICAgLy/moIforrDngrnlpITnkIblkI7nmoTmlbDmja7vvIhpZOOAgeafpeivouS9v+eUqO+8iVxyXG4gICAgICBwYWdlU2l6ZTogMTAsICAgICAgICAgICAgIC8v5q+P6aG15pi+56S65pWw6YePXHJcbiAgICAgIHBhZ2VJbmRleDogMSwgICAgICAgICAgICAgLy/lvZPliY3pobVcclxuICAgICAgdG90YWw6IDAsICAgICAgICAgICAgICAgICAvL+aAu+adoeaVsFxyXG4gICAgfSlcclxuICAgIHRoaXMuZ2V0VHpMaXN0KCk7ICAgICAgICAgICAgLy/mib7otYTph5HvvIjph5Hono1cclxuICB9LFxyXG5cclxuICAvL+aJvui1hOmHke+8iOiejei1hO+8iVxyXG4gIGdldFJ6TGlzdCgpeyAgLy/mib7otYTph5HvvIjono3otYTvvIlcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHB0VGl0bGU6ICfono3otYQnLCAgICAgICAgLy/mn6Xor6LmoIfpophcclxuICAgICAgbW9yZVNob3c6IGZhbHNlLFxyXG4gICAgfSlcclxuICAgIGh0dHBzLnJlcXVlc3QoYXBpLnJvbmd6aSwge1xyXG4gICAgICB0ZW5hbnRJZDogYXBpLmFyZWFJZCwgICAgICAgICAgICAgICAgICAvL+WcsOWMumlkXHJcbiAgICAgIGtleTogdGhpcy5kYXRhLnNlYXJjaEtleSwgICAgICAgICAgICAgLy/lhbPplK7lrZfmkJzntKJcclxuICAgICAgcGFnZVNpemU6IHRoaXMuZGF0YS5wYWdlU2l6ZSwgICAgICAgICAvL+avj+mhteaYvuekuuaVsOmHj1xyXG4gICAgICBwYWdlSW5kZXg6IHRoaXMuZGF0YS5wYWdlSW5kZXgsICAgICAgIC8v6aG15pWwXHJcblxyXG4gICAgICByeldheTogdGhpcy5kYXRhLnJ6Q2F0ZWdvcnlJZCwgICAgICAgIC8v6J6N6LWE5pa55byPXHJcbiAgICAgIHJ6TW9uZXk6IHRoaXMuZGF0YS5yekZpbmFuY2luZ0lkLCAgICAgLy/ono3otYTph5Hpop1cclxuICAgICAgY3lUeXBlSWQ6IHRoaXMuZGF0YS5yekN5VHlwZUlkLCAgICAgICAvL+S6p+S4mmlkXHJcbiAgICAgIGh5VHlwZUlkOiB0aGlzLmRhdGEucnpIeVR5cGVJZCAgICAgICAgLy/ooYzkuJppZFxyXG4gICAgfSwgJ0dFVCcpLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgaWYocmVzKXtcclxuICAgICAgICAvL+iejei1hO+8iOmcgOaxgu+8iVxyXG4gICAgICAgIGxldCByb25nemlOZWVkc0xpc3Q6YW55ID0gcmVzLnZhbC5uZWVkTGlzdC5tYXAoKGl0ZW06YW55KTphbnk9PntcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiAn6J6N6LWEJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+ivpuaDheWIpOaWrVxyXG4gICAgICAgICAgICBsb25naXR1ZGU6IGl0ZW0ubG5nLCAgIC8v57uP5bqmXHJcbiAgICAgICAgICAgIGxhdGl0dWRlOiBpdGVtLmxhdCwgICAgLy/nuqzluqZcclxuICAgICAgICAgICAgaWNvblBhdGg6ICcuLi8uLi9pbWFnZXMvcnoucG5nJywgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgd2lkdGg6IDI3LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1LFxyXG4gICAgICAgICAgICBjYWxsb3V0OiB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogaXRlbS5uZWVkTmFtZT9pdGVtLm5lZWROYW1lOifmnKrloavmiqUnLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IDE0LFxyXG4gICAgICAgICAgICAgIGJnQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1LFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNDQ0MnLFxyXG4gICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdCWUNMSUNLJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0aXRsZTogaXRlbS5uZWVkTmFtZSwgICAgICAgICAgICAgICAgICAgLy/moIfpophcclxuICAgICAgICAgICAgaW1nQXJyOiBpdGVtLm5lZWRGaWxlcywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Zu+54mH5pWw57uEXHJcbiAgICAgICAgICAgIHByb3ZpbmNlTmFtZTogaXRlbS5wcm92aW5jZU5hbWU/aXRlbS5wcm92aW5jZU5hbWU6JycsICAgICAvL+ecgVxyXG4gICAgICAgICAgICBjaXR5TmFtZTogaXRlbS5jaXR5TmFtZT9pdGVtLmNpdHlOYW1lOicnLCAgICAgICAgICAgICAgICAgLy/luIJcclxuICAgICAgICAgICAgZGlzdHJpY3ROYW1lOiBpdGVtLmRpc3RyaWN0TmFtZT9pdGVtLmRpc3RyaWN0TmFtZTonJywgICAgIC8v5Yy6XHJcbiAgICAgICAgICAgIGFkZHJlc3M6IGl0ZW0udGVuYW50TmFtZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+ivpue7huWcsOWdgFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8v6J6N6LWE77yI6aG555uu77yJXHJcbiAgICAgICAgbGV0IHJvbmd6aVByb3NMaXN0OmFueSA9IHJlcy52YWwucHJvTGlzdC5tYXAoKGl0ZW06YW55KTphbnk9PntcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiAn6aG555uuJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+ivpuaDheWIpOaWrVxyXG4gICAgICAgICAgICBsb25naXR1ZGU6IGl0ZW0ubG5nLCAgIC8v57uP5bqmXHJcbiAgICAgICAgICAgIGxhdGl0dWRlOiBpdGVtLmxhdCwgICAgLy/nuqzluqZcclxuICAgICAgICAgICAgaWNvblBhdGg6ICcuLi8uLi9pbWFnZXMveG0ucG5nJywgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgd2lkdGg6IDI3LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1LFxyXG4gICAgICAgICAgICBjYWxsb3V0OiB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogaXRlbS5wcm9OYW1lP2l0ZW0ucHJvTmFtZTon5pyq5aGr5oqlJyxcclxuICAgICAgICAgICAgICBjb2xvcjogJyMwMDAnLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAxNCxcclxuICAgICAgICAgICAgICBiZ0NvbG9yOiAnI0ZGRicsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNSxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXHJcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjQ0NDJyxcclxuICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnQllDTElDSydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGl0bGU6IGl0ZW0ucHJvTmFtZSwgICAgICAgICAgICAgICAgICAgLy/moIfpophcclxuICAgICAgICAgICAgaW1nQXJyOiBpdGVtLnBpY3R1cmVGaWxlcywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Zu+54mH5pWw57uEXHJcbiAgICAgICAgICAgIHByb3ZpbmNlTmFtZTogaXRlbS5wcm92aW5jZU5hbWU/aXRlbS5wcm92aW5jZU5hbWU6JycsICAgICAvL+ecgVxyXG4gICAgICAgICAgICBjaXR5TmFtZTogaXRlbS5jaXR5TmFtZT9pdGVtLmNpdHlOYW1lOicnLCAgICAgICAgICAgICAgICAgLy/luIJcclxuICAgICAgICAgICAgZGlzdHJpY3ROYW1lOiBpdGVtLmRpc3RyaWN0TmFtZT9pdGVtLmRpc3RyaWN0TmFtZTonJywgICAgIC8v5Yy6XHJcbiAgICAgICAgICAgIGFkZHJlc3M6IGl0ZW0uYWRkcmVzcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6K+m57uG5Zyw5Z2AXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy/lpITnkIZJROS4uuaVsOWtl1xyXG4gICAgICAgIGxldCBsaXN0OmFueSAgPSByb25nemlOZWVkc0xpc3QuY29uY2F0KHJvbmd6aVByb3NMaXN0KTtcclxuICAgICAgICBsZXQgbmV3TWFya2Vyc0xpc3Q6YW55ID0gbGlzdC5tYXAoKGl0ZW06YW55LCBpbmRleDpudW1iZXIpOmFueT0+e1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGluZGV4LCAgICAgICAgICAgICAgICAgICAvL21hcOeUqOeahOiHquWumuS5iUlEXHJcbiAgICAgICAgICAgIG5hbWU6IGl0ZW0ubmFtZSwgICAgICAgICAgICAgLy/or6bmg4XliKTmlq1cclxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBpdGVtLmxvbmdpdHVkZSwgICAvL+e7j+W6plxyXG4gICAgICAgICAgICBsYXRpdHVkZTogaXRlbS5sYXRpdHVkZSwgICAgIC8v57qs5bqmXHJcbiAgICAgICAgICAgIGljb25QYXRoOiBpdGVtLmljb25QYXRoLCAgICAgLy/moIforrBcclxuICAgICAgICAgICAgd2lkdGg6IDI3LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1LFxyXG4gICAgICAgICAgICBjYWxsb3V0OiBpdGVtLmNhbGxvdXQsXHJcbiAgICAgICAgICAgIG9sZElkOiBpdGVtLmlkLCAgICAgICAgICAgICAgICAgICAgICAvL+WOn+Wni0lEXHJcbiAgICAgICAgICAgIHRpdGxlOiBpdGVtLnRpdGxlLCAgICAgICAgICAgICAgICAgICAvL+agh+mimFxyXG4gICAgICAgICAgICBpbWdBcnI6IGl0ZW0uaW1nQXJyLCAgICAgICAgICAgICAgICAgLy/lm77niYfmlbDnu4RcclxuICAgICAgICAgICAgcHJvdmluY2VOYW1lOiBpdGVtLnByb3ZpbmNlTmFtZSwgICAgIC8v55yBXHJcbiAgICAgICAgICAgIGNpdHlOYW1lOiBpdGVtLmNpdHlOYW1lLCAgICAgICAgICAgICAvL+W4glxyXG4gICAgICAgICAgICBkaXN0cmljdE5hbWU6IGl0ZW0uZGlzdHJpY3ROYW1lLCAgICAgLy/ljLpcclxuICAgICAgICAgICAgYWRkcmVzczogaXRlbS5hZGRyZXNzICAgICAgICAgICAgICAgIC8v6K+m57uG5Zyw5Z2AXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICBcclxuICAgICAgICBpZih0aGlzLmRhdGEudG90YWwgPT0gMCl7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBtYXJrZXJzOiBuZXdNYXJrZXJzTGlzdCwgICAgICAgICAgICAgICAvL+agh+iusFxyXG4gICAgICAgICAgICB0b3RhbDogcmVzLnZhbC50b3RhbCwgICAgICAgICAgICAgICAgICAvL+aAu+aVsFxyXG4gICAgICAgICAgICBtdW1MaXN0OiBuZXdNYXJrZXJzTGlzdCwgICAgICAgICAgICAgICAgLy/liJfooahcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBtYXJrZXJzOiB0aGlzLmRhdGEubWFya2Vycy5jb25jYXQobmV3TWFya2Vyc0xpc3QpLCAgICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIG11bUxpc3Q6IHRoaXMuZGF0YS5tdW1MaXN0LmNvbmNhdChuZXdNYXJrZXJzTGlzdCksICAgICAgICAgICAgICAgLy/liJfooahcclxuICAgICAgICAgICAgdG90YWw6IHJlcy52YWwudG90YWwsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+aAu+aVsFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMuZGF0YS5tdW1MaXN0Lmxlbmd0aCA8IHJlcy52YWwudG90YWwpe1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgbW9yZVNob3c6IHRydWUsXHJcbiAgICAgICAgICAgIG1vcmVUaXRsZTogJ+eCueWHu+WKoOi9veabtOWkmicsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgbW9yZVNob3c6IHRydWUsXHJcbiAgICAgICAgICAgIG1vcmVUaXRsZTogJ+W3suWKoOi9veWFqOmDqCcsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgcnpDYXRlZ29yeUZuKGU6YW55KTp2b2lkeyAgICAgLy/ono3otYTmlrnlvI/op6blj5FcclxuICAgIGxldCBpZDphbnkgPSBlLnRhcmdldC5kYXRhc2V0LmlkO1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgcnpDYXRlZ29yeUNsYXNzOiBpZCxcclxuICAgICAgcnpDYXRlZ29yeUlkOiBpZCwgICAgICAgICAvL+mcgOaxguexu+WIq0lEXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgcnpGaW5hbmNpbmdGbihlOmFueSk6dm9pZHsgICAgIC8v6J6N6LWE6YeR6aKd6Kem5Y+RXHJcbiAgICBsZXQgaWQ6YW55ID0gZS50YXJnZXQuZGF0YXNldC5pZDtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHJ6RmluYW5jaW5nQ2xhc3M6IGlkLFxyXG4gICAgICByekZpbmFuY2luZ0lkOiBpZCwgICAgICAgICAvL+iejei1hOmHkeminUlEXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgcnpOYXZJdGVtKGRhdGE6YW55KTp2b2lkeyAgICAgICAvL+aJvuiejei1hOihjOS4muS6p+S4mu+8iOW3puS+p+WvvOiIqueCueWHu+aXtu+8jOinpuWPkeeahOS6i+S7tu+8iVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgcnpJbmRleDogZGF0YS5kZXRhaWwuaW5kZXggfHwgMCxcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgcnpJbmR1c3RyeUl0ZW0oZGF0YTphbnkpOnZvaWQgeyAgLy/mib7ono3otYTooYzkuJrkuqfkuJrvvIjlj7PkvqfpgInmi6npobnooqvngrnlh7vml7bvvIzkvJrop6blj5HnmoTkuovku7bvvIlcclxuICAgIGNvbnN0IGlkID0gdGhpcy5kYXRhLnJ6SW5kdXN0cnlJZCA9PT0gZGF0YS5kZXRhaWwuaWQgPyBudWxsIDogZGF0YS5kZXRhaWwuaWQ7XHJcbiAgICBjb25zdCBwSWQgPSBkYXRhLmRldGFpbC5wSWQ7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICByekluZHVzdHJ5SWQ6IGlkLFxyXG4gICAgICByekN5VHlwZUlkOiBwSWQgPyBwSWQgOiAnJywgICAgICAgICAgLy/kuqfkuJppZFxyXG4gICAgICByekh5VHlwZUlkOiBpZCA9PSBwSWQgPyAnJyA6IGlkLCAgICAgLy/ooYzkuJppZFxyXG4gICAgfSlcclxuICB9LFxyXG4gIHJ6UmVzZXQoZTphbnkpOnZvaWR7ICAvL+aJvuiejei1hOmHjee9rlxyXG4gICAgbGV0IGZsYWc6bnVtYmVyID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuZmxhZztcclxuICAgIGlmKGZsYWcgPT0gMSl7ICAvL+aJvuiejei1hOmcgOaxguexu+WIq1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHJ6Q2F0ZWdvcnlDbGFzczogbnVsbCxcclxuICAgICAgICByekNhdGVnb3J5SWQ6ICcnLCAgICAgICAgICAgLy/mib7ono3otYTpnIDmsYLnsbvliKtJRFxyXG4gICAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgICAvLzbmib7nu5PmnpxcclxuICAgICAgICBtdW1MaXN0OiBbXSwgICAgICAgICAgICAgICAgLy825om+5YiX6KGoXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjcnpDYXRlZ29yeUlkJykudG9nZ2xlKGZhbHNlKTsgICAgICAgICAvL+aJvuiejei1hOmcgOaxguexu+WIq+WFs+mXrVxyXG4gICAgfWVsc2UgaWYoZmxhZyA9PSAyKXsgIC8v6J6N6LWE6YeR6aKd6Kem5Y+RXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgcnpGaW5hbmNpbmdDbGFzczogbnVsbCxcclxuICAgICAgICByekZpbmFuY2luZ0lkOiAnJywgICAgICAgICAgICAgLy/mib7ono3otYTono3otYTph5Hpop1JRFxyXG4gICAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgIC8vNuaJvuWIl+ihqFxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI3J6U3RhZ2VJZCcpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAvL+aJvuiejei1hOaJgOWkhOmYtuauteWFs+mXrVxyXG4gICAgfWVsc2UgaWYoZmxhZyA9PSAzKXsgIC8v5Lqn5Lia6KGM5LiaXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgcnpJbmRleDogMCwgICAgICAgICAgICAgICAgLy/lvZPliY3ntKLlvJVcclxuICAgICAgICByekluZHVzdHJ5SWQ6IG51bGwsICAgICAgICAvL+mAieS4reeahGlkXHJcbiAgICAgICAgcnpDeVR5cGVJZDogJycsICAgICAgICAgICAgLy/kuqfkuJppZFxyXG4gICAgICAgIHJ6SHlUeXBlSWQ6ICcnLCAgICAgICAgICAgIC8v6KGM5LiaaWRcclxuICAgICAgICBudW06IDAsICAgICAgICAgICAgICAgICAgICAvLzbmib7nu5PmnpxcclxuICAgICAgICBtdW1MaXN0OiBbXSwgICAgICAgICAgICAgICAvLzbmib7liJfooahcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyNyekluZHVzdHJ5SWQnKS50b2dnbGUoZmFsc2UpOyAgICAgICAgLy/kuqfkuJrooYzkuJrlhbPpl61cclxuICAgIH1cclxuICAgIHRoaXMuZ2V0UnpMaXN0KCk7ICAgICAgICAgICAgLy/mib7otYTph5HvvIjono3otYQpXHJcbiAgfSxcclxuICByelN1Ym1pdChlOmFueSk6dm9pZHsgIC8v5om+6J6N6LWE5a6M5oiQXHJcbiAgICBsZXQgZmxhZzpudW1iZXIgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5mbGFnO1xyXG4gICAgaWYoZmxhZyA9PSAxKXtcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyNyekNhdGVnb3J5SWQnKS50b2dnbGUoZmFsc2UpOyAgICAgICAgIC8v5om+6J6N6LWE6ZyA5rGC57G75Yir5YWz6ZetXHJcbiAgICB9ZWxzZSBpZihmbGFnID09IDIpe1xyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI3J6U3RhZ2VJZCcpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAvL+aJvuiejei1hOaJgOWkhOmYtuauteWFs+mXrVxyXG4gICAgfWVsc2UgaWYoZmxhZyA9PSAzKXtcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyNyekluZHVzdHJ5SWQnKS50b2dnbGUoZmFsc2UpOyAgICAgICAgLy/kuqfkuJrooYzkuJrlhbPpl61cclxuICAgIH1cclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICBtdW1MaXN0OiBbXSwgICAgICAgICAgICAgICAvLzbmib7liJfooahcclxuICAgICAgbWFya2VyczpbXSwgICAgICAgICAgICAgICAvL+agh+iusOeCueWkhOeQhuWQjueahOaVsOaNru+8iGlk44CB5p+l6K+i5L2/55So77yJXHJcbiAgICAgIHBhZ2VTaXplOiAxMCwgICAgICAgICAgICAgLy/mr4/pobXmmL7npLrmlbDph49cclxuICAgICAgcGFnZUluZGV4OiAxLCAgICAgICAgICAgICAvL+W9k+WJjemhtVxyXG4gICAgICB0b3RhbDogMCwgICAgICAgICAgICAgICAgIC8v5oC75p2h5pWwXHJcbiAgICB9KVxyXG4gICAgdGhpcy5nZXRSekxpc3QoKTsgICAgICAgICAgICAvL+aJvui1hOmHke+8iOiejei1hClcclxuICB9LFxyXG5cclxuICBcclxuXHJcbiAgLy/ot6/nur/lr7zoiKpcclxuICBuYXZpZ2F0aW9uKGU6YW55KTp2b2lke1xyXG4gICAgaWYoISFlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5sb25naXR1ZGUpeyAgLy/lpITnkIY25om+5YiX6KGo5a+86IiqXHJcbiAgICAgIGxldCB0aXRsZTpzdHJpbmcgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC50aXRsZTtcclxuICAgICAgbGV0IGxvbmdpdHVkZTphbnkgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5sb25naXR1ZGU7XHJcbiAgICAgIGxldCBsYXRpdHVkZTphbnkgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5sYXRpdHVkZTtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBnb05hbWU6IHRpdGxlLFxyXG4gICAgICAgIGdvTG9uZ2l0dWRlOiBsb25naXR1ZGUsXHJcbiAgICAgICAgZ29MYXRpdHVkZTogbGF0aXR1ZGVcclxuICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBlbmRQb2ludDphbnkgPSBKU09OLnN0cmluZ2lmeSh7ICAvL+e7iOeCuVxyXG4gICAgICAnbmFtZSc6IHRoaXMuZGF0YS5nb05hbWUsXHJcbiAgICAgICdsb25naXR1ZGUnOiBwYXJzZUZsb2F0KHRoaXMuZGF0YS5nb0xvbmdpdHVkZSksXHJcbiAgICAgICdsYXRpdHVkZSc6IHBhcnNlRmxvYXQodGhpcy5kYXRhLmdvTGF0aXR1ZGUpXHJcbiAgICB9KTtcclxuXHJcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgdXJsOiAncGx1Z2luOi8vcm91dGVQbGFuL2luZGV4P2tleT0nICsgYXBpLm1hcEFwaUtleSArICcmcmVmZXJlcj3miY3otYvkupEnICsgJyZlbmRQb2ludD0nICsgZW5kUG9pbnRcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG5cclxuICAvL+mAieaLqeW4guWMulxyXG4gIG1hcEFyZWEoKTp2b2lke1xyXG4gICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgIHVybDpcIi4uL21hcEFyZWEvbWFwQXJlYVwiXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG5cclxuICAvL+WcsOWbvuivpuaDhVxyXG4gIG1hcERldGFpbChlOmFueSk6dm9pZCB7XHJcbiAgICBsZXQgbmFtZTpTdHJpbmcgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5uYW1lO1xyXG4gICAgbGV0IGlkOlN0cmluZyA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkO1xyXG5cclxuICAgIGxldCB0b2tlbjpzdHJpbmcgPSB3eC5nZXRTdG9yYWdlU3luYygndG9rZW4nKTtcclxuICAgIGlmKCEhdG9rZW4pe1xyXG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6XCIuLi9tYXBEZXRhaWwvbWFwRGV0YWlsP25hbWU9XCIgKyBuYW1lICsgJyZpZD0nICsgaWRcclxuICAgICAgfSlcclxuICAgIH1lbHNle1xyXG4gICAgICBEaWFsb2cuYWxlcnQoe1xyXG4gICAgICAgIG1lc3NhZ2U6ICfnmbvlvZXlkI7miY3og73mn6XnnIvor6bmg4XvvIEnLFxyXG4gICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgIHVybDogJy4uL2xvZ2luRm9ybS9sb2dpbkZvcm0nXHJcbiAgICAgICAgfSlcclxuICAgICAgfSk7XHJcbiAgICB9IFxyXG4gIH0sXHJcblxyXG5cclxuICAvL+eCueWHu+agh+iusOeCueawlOazoeeql+WPo+inpuWPkVxyXG4gIG1hcmtGbihlOmFueSk6dm9pZCB7XHJcbiAgICAvL+afpeivouWNleadoeaVsOaNrlxyXG4gICAgbGV0IGFycjphbnkgPSB0aGlzLmRhdGEubWFya2Vycy5maWx0ZXIoKGl0ZW06YW55KTphbnk9PntcclxuICAgICAgcmV0dXJuIGl0ZW0uaWQgPT0gZS5kZXRhaWwubWFya2VySWQ7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZihhcnIubGVuZ3RoID49IDEpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGdvTmFtZTogYXJyWzBdLmNhbGxvdXQuY29udGVudCwgICAgICAgICAvL+imgeWOu+eahOWcsOWdgFxyXG4gICAgICAgIGdvTG9uZ2l0dWRlOiBhcnJbMF0ubG9uZ2l0dWRlLCAgICAgICAgICAvL+S4reW/g+e7j+W6pijnu4jngrkpXHJcbiAgICAgICAgZ29MYXRpdHVkZTogYXJyWzBdLmxhdGl0dWRlLCAgICAgICAgICAgIC8v5Lit5b+D57qs5bqmKOe7iOeCuSlcclxuICAgICAgICBtYXJrZXJzT2JqOiBhcnJbMF0sICAgICAgICAgICAgICAgICAgICAgLy/ljZXmnaHliJfooajmlbDmja5cclxuICAgICAgICBpc0xpc3RTaG93OiBmYWxzZSwgICAgICAgICAgICAgICAgICAgICAgLy/pu5jorqTmmL7npLo25om+5YaF5a65XHJcbiAgICAgICAgaXNJbmZvU2hvdzogdHJ1ZSwgICAgICAgICAgICAgICAgICAgICAgIC8v5Y2V5p2h5L+h5oGv5pi+56S6XHJcbiAgICAgICAgaXNTZWFyY2hTaG93OiBmYWxzZSwgICAgICAgICAgICAgICAgICAgIC8v5pCc57Si57uT5p6c5pWw5o2uXHJcbiAgICAgICAgaXNTZWFyY2hJbmZvU2hvdzogZmFsc2UsICAgICAgICAgICAgICAgIC8v5pCc57Si5YiX6KGo5pWw5o2uXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcblxyXG4gIC8v5YWz6Zet5Y2V5p2h5L+h5oGv5Zue6buY6K6kXHJcbiAgY2xvc2VGbigpOnZvaWR7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBpc0xpc3RTaG93OiBmYWxzZSwgICAgICAgICAgICAgICAgICAgICAgIC8v6buY6K6k5pi+56S6NuaJvuWGheWuuVxyXG4gICAgICBpc0luZm9TaG93OiBmYWxzZSwgICAgICAgICAgICAgICAgICAgICAgLy/ljZXmnaHkv6Hmga/mmL7npLpcclxuICAgICAgaXNTZWFyY2hTaG93OiB0cnVlLCAgICAgICAgICAgICAgICAgICAgLy/mkJzntKLnu5PmnpzmlbDmja5cclxuICAgICAgaXNTZWFyY2hJbmZvU2hvdzogZmFsc2UsICAgICAgICAgICAgICAgIC8v5pCc57Si5YiX6KGo5pWw5o2uXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG5cclxuICAvL+mqjOivgeeUqOaIt+eZu+W9leeKtuaAgVxyXG4gIHZlcmlmaWNhdGlvbigpOnZvaWR7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBpbWdVcmw6IGFwaS5pbWdVcmwgKyAnP2ZpbGVQYXRoPSdcclxuICAgIH0pXHJcbiAgICBpZihhcGkuYXJlYU5hbWUgJiYgYXBpLmFyZWFOYW1lICE9ICfpnZLlspvluIInKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBwYWdlU2l6ZTogMTAsICAgICAgICAgICAgICAgLy/mr4/pobXmmL7npLrmlbDph49cclxuICAgICAgICBwYWdlSW5kZXg6IDEsICAgICAgICAgICAgICAgLy/lvZPliY3pobVcclxuICAgICAgICB0b3RhbDogMCwgICAgICAgICAgICAgICAgICAgLy/mgLvmnaHmlbBcclxuICAgICAgICBtYXJrZXJzOiBbXSwgICAgICAgICAgICAgICAgLy/muIXnqbpcclxuICAgICAgICBzY2FsZTogMTIsICAgICAgICAgICAgICAgICAgLy/nvKnmlL7nuqfliKvvvIzlj5blgLzojIPlm7TkuLozLTIwXHJcblxyXG4gICAgICAgIGFyZWFOYW1lOiBhcGkuYXJlYU5hbWUsXHJcbiAgICAgICAgYXJlYUlkOiBhcGkuYXJlYUlkLFxyXG4gICAgICAgIGxvbmdpdHVkZTogYXBpLmxvbmdpdHVkZSwgICAgLy/kuK3lv4Pnu4/luqZcclxuICAgICAgICBsYXRpdHVkZTogYXBpLmxhdGl0dWRlICAgICAgIC8v5Lit5b+D57qs5bqmXHJcbiAgICAgIH0pXHJcbiAgICAgIC8vdGhpcy5nZXRNYXJrKCk7ICAgICAgICAgICAgICAgLy/ojrflj5blnLDlm77moIfngrlcclxuICAgIH1lbHNlIGlmKGFwaS5hcmVhTmFtZSA9PSAn6Z2S5bKb5biCJyl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgcGFnZVNpemU6IDEwLCAgICAgICAgICAgICAgIC8v5q+P6aG15pi+56S65pWw6YePXHJcbiAgICAgICAgcGFnZUluZGV4OiAxLCAgICAgICAgICAgICAgIC8v5b2T5YmN6aG1XHJcbiAgICAgICAgdG90YWw6IDAsICAgICAgICAgICAgICAgICAgIC8v5oC75p2h5pWwXHJcbiAgICAgICAgbWFya2VyczogW10sICAgICAgICAgICAgICAgIC8v5riF56m6XHJcbiAgICAgICAgc2NhbGU6IDEwLCAgICAgICAgICAgICAgICAgIC8v57yp5pS+57qn5Yir77yM5Y+W5YC86IyD5Zu05Li6My0yMFxyXG5cclxuICAgICAgICBhcmVhTmFtZTogYXBpLmFyZWFOYW1lLFxyXG4gICAgICAgIGFyZWFJZDogYXBpLmFyZWFJZCxcclxuICAgICAgICBsb25naXR1ZGU6IGFwaS5sb25naXR1ZGUsICAgIC8v5Lit5b+D57uP5bqmXHJcbiAgICAgICAgbGF0aXR1ZGU6IGFwaS5sYXRpdHVkZSAgICAgICAvL+S4reW/g+e6rOW6plxyXG4gICAgICB9KVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIC8v56ys5LiA5qyh6L+b5YWl6I635Y+W5b2T5YmN5L2N572uXHJcbiAgICAgIHd4LmdldExvY2F0aW9uKHtcclxuICAgICAgICB0eXBlOiAnd2dzODQnLFxyXG4gICAgICAgIHN1Y2Nlc3M6KHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIHBhZ2VTaXplOiAxMCwgICAgICAgICAgICAgICAvL+avj+mhteaYvuekuuaVsOmHj1xyXG4gICAgICAgICAgICBwYWdlSW5kZXg6IDEsICAgICAgICAgICAgICAgLy/lvZPliY3pobVcclxuICAgICAgICAgICAgdG90YWw6IDAsICAgICAgICAgICAgICAgICAgIC8v5oC75p2h5pWwXHJcbiAgICAgICAgICAgIG1hcmtlcnM6IFtdLCAgICAgICAgICAgICAgICAvL+a4heepulxyXG4gICAgICAgICAgICBzY2FsZTogMTIsICAgICAgICAgICAgICAgICAgLy/nvKnmlL7nuqfliKvvvIzlj5blgLzojIPlm7TkuLozLTIwXHJcblxyXG4gICAgICAgICAgICBsb25naXR1ZGU6IHJlcy5sb25naXR1ZGUsICAgIC8v5Lit5b+D57uP5bqmXHJcbiAgICAgICAgICAgIGxhdGl0dWRlOiByZXMubGF0aXR1ZGUgICAgICAgLy/kuK3lv4PnuqzluqYgXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgdGhpcy5nZXRBcmVhTGlzdCgpOyAgICAgICAgICAgICAgIC8v6I635Y+W6Z2S5bKb5omA5pyJ5Yy6XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvL+iOt+WPluWcsOWbvuagh+eCuVxyXG4gIGdldE1hcmsoKTp2b2lke1xyXG4gICAgaHR0cHMucmVxdWVzdChhcGkuYWxsLHtcclxuICAgICAgdGVuYW50SWQ6IGFwaS5hcmVhSWQsICAgICAgICAgICAgICAgICAgICAgLy/ljLpJRFxyXG4gICAgICBwYWdlU2l6ZTogdGhpcy5kYXRhLnBhZ2VTaXplLCAgICAgICAgICAgICAvL+avj+mhteaYvuekuuaVsOmHj1xyXG4gICAgICBwYWdlSW5kZXg6IHRoaXMuZGF0YS5wYWdlSW5kZXgsICAgICAgICAgICAvL+mhteaVsFxyXG4gICAgfSwgJ0dFVCcpLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgaWYocmVzKXtcclxuICAgICAgICAvL+WIm+aWsOW5s+WPsFxyXG4gICAgICAgIGxldCBjeFBsYXRmb3JtTW9kZWxzTGlzdDphbnkgPSByZXMudmFsLmN4UGxhdGZvcm1Nb2RlbHMubWFwKChpdGVtOmFueSk6YW55PT57XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBpdGVtLmxuZywgICAvL+e7j+W6plxyXG4gICAgICAgICAgICBsYXRpdHVkZTogaXRlbS5sYXQsICAgIC8v57qs5bqmXHJcbiAgICAgICAgICAgIGljb25QYXRoOiAnLi4vLi4vaW1hZ2VzL2N4LnBuZycsICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIHdpZHRoOiAyNyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNSxcclxuICAgICAgICAgICAgY2FsbG91dDoge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IGl0ZW0ucHROYW1lLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IDE0LFxyXG4gICAgICAgICAgICAgIGJnQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1LFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNDQ0MnLFxyXG4gICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdCWUNMSUNLJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwcm92aW5jZU5hbWU6IGl0ZW0ucHJvdmluY2VOYW1lP2l0ZW0ucHJvdmluY2VOYW1lOicnLCAgICAgLy/nnIFcclxuICAgICAgICAgICAgY2l0eU5hbWU6IGl0ZW0uY2l0eU5hbWU/aXRlbS5jaXR5TmFtZTonJywgICAgICAgICAgICAgICAgIC8v5biCXHJcbiAgICAgICAgICAgIGRpc3RyaWN0TmFtZTogaXRlbS5kaXN0cmljdE5hbWU/aXRlbS5kaXN0cmljdE5hbWU6JycgICAgICAvL+WMulxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8v5Yib5Lia5bmz5Y+wXHJcbiAgICAgICAgbGV0IGN5UGxhdGZvcm1Nb2RlbHNMaXN0OmFueSA9IHJlcy52YWwuY3lQbGF0Zm9ybU1vZGVscy5tYXAoKGl0ZW06YW55KTphbnk9PntcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICBsb25naXR1ZGU6IGl0ZW0ubG5nLCAgIC8v57uP5bqmXHJcbiAgICAgICAgICAgIGxhdGl0dWRlOiBpdGVtLmxhdCwgICAgLy/nuqzluqZcclxuICAgICAgICAgICAgaWNvblBhdGg6ICcuLi8uLi9pbWFnZXMvY3kucG5nJywgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgd2lkdGg6IDI3LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1LFxyXG4gICAgICAgICAgICBjYWxsb3V0OiB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogaXRlbS5jeU5hbWUsXHJcbiAgICAgICAgICAgICAgY29sb3I6ICcjMDAwJyxcclxuICAgICAgICAgICAgICBmb250U2l6ZTogMTgsXHJcbiAgICAgICAgICAgICAgYmdDb2xvcjogJyNGRkYnLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDUsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI0NDQycsXHJcbiAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ0JZQ0xJQ0snXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHByb3ZpbmNlTmFtZTogaXRlbS5wcm92aW5jZU5hbWU/aXRlbS5wcm92aW5jZU5hbWU6JycsICAgICAvL+ecgVxyXG4gICAgICAgICAgICBjaXR5TmFtZTogaXRlbS5jaXR5TmFtZT9pdGVtLmNpdHlOYW1lOicnLCAgICAgICAgICAgICAgICAgLy/luIJcclxuICAgICAgICAgICAgZGlzdHJpY3ROYW1lOiBpdGVtLmRpc3RyaWN0TmFtZT9pdGVtLmRpc3RyaWN0TmFtZTonJyAgICAgIC8v5Yy6XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy/mib7pobnnm65cclxuICAgICAgICBsZXQgcHJvTW9kZWxzTGlzdDphbnkgPSByZXMudmFsLnByb01vZGVscy5tYXAoKGl0ZW06YW55KTphbnk9PntcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICBsb25naXR1ZGU6IGl0ZW0ubG5nLCAgIC8v57uP5bqmXHJcbiAgICAgICAgICAgIGxhdGl0dWRlOiBpdGVtLmxhdCwgICAgLy/nuqzluqZcclxuICAgICAgICAgICAgaWNvblBhdGg6ICcuLi8uLi9pbWFnZXMveG0ucG5nJywgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgd2lkdGg6IDI3LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1LFxyXG4gICAgICAgICAgICBjYWxsb3V0OiB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogaXRlbS5wcm9OYW1lLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IDE4LFxyXG4gICAgICAgICAgICAgIGJnQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1LFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNDQ0MnLFxyXG4gICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdCWUNMSUNLJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwcm92aW5jZU5hbWU6IGl0ZW0ucHJvdmluY2VOYW1lP2l0ZW0ucHJvdmluY2VOYW1lOicnLCAgICAgLy/nnIFcclxuICAgICAgICAgICAgY2l0eU5hbWU6IGl0ZW0uY2l0eU5hbWU/aXRlbS5jaXR5TmFtZTonJywgICAgICAgICAgICAgICAgIC8v5biCXHJcbiAgICAgICAgICAgIGRpc3RyaWN0TmFtZTogaXRlbS5kaXN0cmljdE5hbWU/aXRlbS5kaXN0cmljdE5hbWU6JycgICAgICAvL+WMulxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL+aJvuacjeWKoeacuuaehFxyXG4gICAgICAgIGxldCBmd2pnTW9kZWxzTGlzdDphbnkgPSByZXMudmFsLmZ3amdNb2RlbHMubWFwKChpdGVtOmFueSk6YW55PT57XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBpdGVtLmxuZywgICAvL+e7j+W6plxyXG4gICAgICAgICAgICBsYXRpdHVkZTogaXRlbS5sYXQsICAgIC8v57qs5bqmXHJcbiAgICAgICAgICAgIGljb25QYXRoOiAnLi4vLi4vaW1hZ2VzL2Z3LnBuZycsICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIHdpZHRoOiAyNyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNSxcclxuICAgICAgICAgICAgY2FsbG91dDoge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IGl0ZW0ucXlOYW1lICxcclxuICAgICAgICAgICAgICBjb2xvcjogJyMwMDAnLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAxOCxcclxuICAgICAgICAgICAgICBiZ0NvbG9yOiAnI0ZGRicsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNSxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXHJcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjQ0NDJyxcclxuICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnQllDTElDSydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcHJvdmluY2VOYW1lOiBpdGVtLnByb3ZpbmNlTmFtZT9pdGVtLnByb3ZpbmNlTmFtZTonJywgICAgIC8v55yBXHJcbiAgICAgICAgICAgIGNpdHlOYW1lOiBpdGVtLmNpdHlOYW1lP2l0ZW0uY2l0eU5hbWU6JycsICAgICAgICAgICAgICAgICAvL+W4glxyXG4gICAgICAgICAgICBkaXN0cmljdE5hbWU6IGl0ZW0uZGlzdHJpY3ROYW1lP2l0ZW0uZGlzdHJpY3ROYW1lOicnICAgICAgLy/ljLpcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvL+aJvuWcuuWcsFxyXG4gICAgICAgIGxldCB2ZWN0b3JNb2RlbHNMaXN0OmFueSA9IHJlcy52YWwudmVjdG9yTW9kZWxzLm1hcCgoaXRlbTphbnkpOmFueT0+e1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZTogaXRlbS5sbmcsICAgLy/nu4/luqZcclxuICAgICAgICAgICAgbGF0aXR1ZGU6IGl0ZW0ubGF0LCAgICAvL+e6rOW6plxyXG4gICAgICAgICAgICBpY29uUGF0aDogJy4uLy4uL2ltYWdlcy9jZC5wbmcnLCAgICAgICAgICAgICAvL+agh+iusFxyXG4gICAgICAgICAgICB3aWR0aDogMjcsXHJcbiAgICAgICAgICAgIGhlaWdodDogMzUsXHJcbiAgICAgICAgICAgIGNhbGxvdXQ6IHtcclxuICAgICAgICAgICAgICBjb250ZW50OiBpdGVtLmN5enROYW1lICAsXHJcbiAgICAgICAgICAgICAgY29sb3I6ICcjMDAwJyxcclxuICAgICAgICAgICAgICBmb250U2l6ZTogMTgsXHJcbiAgICAgICAgICAgICAgYmdDb2xvcjogJyNGRkYnLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDUsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI0NDQycsXHJcbiAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ0JZQ0xJQ0snXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHByb3ZpbmNlTmFtZTogaXRlbS5wcm92aW5jZU5hbWU/aXRlbS5wcm92aW5jZU5hbWU6JycsICAgICAvL+ecgVxyXG4gICAgICAgICAgICBjaXR5TmFtZTogaXRlbS5jaXR5TmFtZT9pdGVtLmNpdHlOYW1lOicnLCAgICAgICAgICAgICAgICAgLy/luIJcclxuICAgICAgICAgICAgZGlzdHJpY3ROYW1lOiBpdGVtLmRpc3RyaWN0TmFtZT9pdGVtLmRpc3RyaWN0TmFtZTonJyAgICAgIC8v5Yy6XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy/mib7ph5Hono3mnLrmnoRcclxuICAgICAgICBsZXQganJqZ01kb2Vsc0xpc3Q6YW55ID0gcmVzLnZhbC5qcmpnTWRvZWxzLm1hcCgoaXRlbTphbnkpOmFueT0+e1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZTogaXRlbS5sbmcsICAgLy/nu4/luqZcclxuICAgICAgICAgICAgbGF0aXR1ZGU6IGl0ZW0ubGF0LCAgICAvL+e6rOW6plxyXG4gICAgICAgICAgICBpY29uUGF0aDogJy4uLy4uL2ltYWdlcy96ai5wbmcnLCAgICAgICAgICAgICAvL+agh+iusFxyXG4gICAgICAgICAgICB3aWR0aDogMjcsXHJcbiAgICAgICAgICAgIGhlaWdodDogMzUsXHJcbiAgICAgICAgICAgIGNhbGxvdXQ6IHtcclxuICAgICAgICAgICAgICBjb250ZW50OiBpdGVtLnF5TmFtZSxcclxuICAgICAgICAgICAgICBjb2xvcjogJyMwMDAnLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAxOCxcclxuICAgICAgICAgICAgICBiZ0NvbG9yOiAnI0ZGRicsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNSxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXHJcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjQ0NDJyxcclxuICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnQllDTElDSydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcHJvdmluY2VOYW1lOiBpdGVtLnByb3ZpbmNlTmFtZT9pdGVtLnByb3ZpbmNlTmFtZTonJywgICAgIC8v55yBXHJcbiAgICAgICAgICAgIGNpdHlOYW1lOiBpdGVtLmNpdHlOYW1lP2l0ZW0uY2l0eU5hbWU6JycsICAgICAgICAgICAgICAgICAvL+W4glxyXG4gICAgICAgICAgICBkaXN0cmljdE5hbWU6IGl0ZW0uZGlzdHJpY3ROYW1lP2l0ZW0uZGlzdHJpY3ROYW1lOicnICAgICAgLy/ljLpcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvL+aJvuaKlei1hOmcgOaxglxyXG4gICAgICAgIGxldCB0ek1vZGVsc0xpc3Q6YW55ID0gcmVzLnZhbC50ek1vZGVscy5tYXAoKGl0ZW06YW55KTphbnk9PntcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICBsb25naXR1ZGU6IGl0ZW0ubG5nLCAgIC8v57uP5bqmXHJcbiAgICAgICAgICAgIGxhdGl0dWRlOiBpdGVtLmxhdCwgICAgLy/nuqzluqZcclxuICAgICAgICAgICAgaWNvblBhdGg6ICcuLi8uLi9pbWFnZXMvdHoucG5nJywgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgd2lkdGg6IDI3LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1LFxyXG4gICAgICAgICAgICBjYWxsb3V0OiB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogaXRlbS5uZWVkTmFtZSAgICxcclxuICAgICAgICAgICAgICBjb2xvcjogJyMwMDAnLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAxOCxcclxuICAgICAgICAgICAgICBiZ0NvbG9yOiAnI0ZGRicsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNSxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXHJcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjQ0NDJyxcclxuICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnQllDTElDSydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcHJvdmluY2VOYW1lOiBpdGVtLnByb3ZpbmNlTmFtZT9pdGVtLnByb3ZpbmNlTmFtZTonJywgICAgIC8v55yBXHJcbiAgICAgICAgICAgIGNpdHlOYW1lOiBpdGVtLmNpdHlOYW1lP2l0ZW0uY2l0eU5hbWU6JycsICAgICAgICAgICAgICAgICAvL+W4glxyXG4gICAgICAgICAgICBkaXN0cmljdE5hbWU6IGl0ZW0uZGlzdHJpY3ROYW1lP2l0ZW0uZGlzdHJpY3ROYW1lOicnICAgICAgLy/ljLpcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvL+aJvuiejei1hOmcgOaxgu+8iOmhueebruW6k+eahOiejei1hDfpobnvvIlcclxuICAgICAgICBsZXQgcm9uZ3ppUHJvc0xpc3Q6YW55ID0gcmVzLnZhbC5yb25nemlQcm9zLm1hcCgoaXRlbTphbnkpOmFueT0+e1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZTogaXRlbS5sbmcsICAgLy/nu4/luqZcclxuICAgICAgICAgICAgbGF0aXR1ZGU6IGl0ZW0ubGF0LCAgICAvL+e6rOW6plxyXG4gICAgICAgICAgICBpY29uUGF0aDogJy4uLy4uL2ltYWdlcy9yei5wbmcnLCAgICAgICAgICAgICAvL+agh+iusFxyXG4gICAgICAgICAgICB3aWR0aDogMjcsXHJcbiAgICAgICAgICAgIGhlaWdodDogMzUsXHJcbiAgICAgICAgICAgIGNhbGxvdXQ6IHtcclxuICAgICAgICAgICAgICBjb250ZW50OiBpdGVtLnByb05hbWUgLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IDE4LFxyXG4gICAgICAgICAgICAgIGJnQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1LFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNDQ0MnLFxyXG4gICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdCWUNMSUNLJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwcm92aW5jZU5hbWU6IGl0ZW0ucHJvdmluY2VOYW1lP2l0ZW0ucHJvdmluY2VOYW1lOicnLCAgICAgLy/nnIFcclxuICAgICAgICAgICAgY2l0eU5hbWU6IGl0ZW0uY2l0eU5hbWU/aXRlbS5jaXR5TmFtZTonJywgICAgICAgICAgICAgICAgIC8v5biCXHJcbiAgICAgICAgICAgIGRpc3RyaWN0TmFtZTogaXRlbS5kaXN0cmljdE5hbWU/aXRlbS5kaXN0cmljdE5hbWU6JycgICAgICAvL+WMulxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8v5om+6J6N6LWE6ZyA5rGC77yI6ZyA5rGC5bqT55qE6J6N6LWEN+mhue+8iVxyXG4gICAgICAgIGxldCByb25nemlOZWVkc0xpc3Q6YW55ID0gcmVzLnZhbC5yb25nemlOZWVkcy5tYXAoKGl0ZW06YW55KTphbnk9PntcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICBsb25naXR1ZGU6IGl0ZW0ubG5nLCAgIC8v57uP5bqmXHJcbiAgICAgICAgICAgIGxhdGl0dWRlOiBpdGVtLmxhdCwgICAgLy/nuqzluqZcclxuICAgICAgICAgICAgaWNvblBhdGg6ICcuLi8uLi9pbWFnZXMvcnoucG5nJywgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgd2lkdGg6IDI3LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1LFxyXG4gICAgICAgICAgICBjYWxsb3V0OiB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogaXRlbS5uZWVkTmFtZSxcclxuICAgICAgICAgICAgICBjb2xvcjogJyMwMDAnLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAxOCxcclxuICAgICAgICAgICAgICBiZ0NvbG9yOiAnI0ZGRicsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNSxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXHJcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjQ0NDJyxcclxuICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnQllDTElDSydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcHJvdmluY2VOYW1lOiBpdGVtLnByb3ZpbmNlTmFtZT9pdGVtLnByb3ZpbmNlTmFtZTonJywgICAgIC8v55yBXHJcbiAgICAgICAgICAgIGNpdHlOYW1lOiBpdGVtLmNpdHlOYW1lP2l0ZW0uY2l0eU5hbWU6JycsICAgICAgICAgICAgICAgICAvL+W4glxyXG4gICAgICAgICAgICBkaXN0cmljdE5hbWU6IGl0ZW0uZGlzdHJpY3ROYW1lP2l0ZW0uZGlzdHJpY3ROYW1lOicnICAgICAgLy/ljLpcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvL+WkhOeQhklE5Li65pWw5a2XXHJcbiAgICAgICAgbGV0IG1hcmtlcnNMaXN0OmFueSAgPSB0aGlzLmRhdGEubWFya2Vycy5jb25jYXQoY3hQbGF0Zm9ybU1vZGVsc0xpc3QsY3lQbGF0Zm9ybU1vZGVsc0xpc3QscHJvTW9kZWxzTGlzdCxmd2pnTW9kZWxzTGlzdCx2ZWN0b3JNb2RlbHNMaXN0LGpyamdNZG9lbHNMaXN0LHR6TW9kZWxzTGlzdCxyb25nemlQcm9zTGlzdCxyb25nemlOZWVkc0xpc3QpO1xyXG4gICAgICAgIGxldCBuZXdNYXJrZXJzTGlzdDphbnkgPSBtYXJrZXJzTGlzdC5tYXAoKGl0ZW06YW55LCBpbmRleDpudW1iZXIpOmFueT0+e1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGluZGV4LCAgICAgICAgICAgICAgICAgICAvL21hcOeUqOeahOiHquWumuS5iUlEXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZTogaXRlbS5sb25naXR1ZGUsICAgLy/nu4/luqZcclxuICAgICAgICAgICAgbGF0aXR1ZGU6IGl0ZW0ubGF0aXR1ZGUsICAgICAvL+e6rOW6plxyXG4gICAgICAgICAgICBpY29uUGF0aDogaXRlbS5pY29uUGF0aCwgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIHdpZHRoOiAyNyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNSxcclxuICAgICAgICAgICAgY2FsbG91dDogaXRlbS5jYWxsb3V0LFxyXG4gICAgICAgICAgICBvbGRJZDogaXRlbS5pZCwgICAgICAgICAgICAgICAgICAgICAgLy/ljp/lp4tJRFxyXG4gICAgICAgICAgICB0aXRsZTogaXRlbS5jYWxsb3V0LmNvbnRlbnQsICAgICAgICAgLy/moIfpophcclxuICAgICAgICAgICAgcHJvdmluY2VOYW1lOiBpdGVtLnByb3ZpbmNlTmFtZSwgICAgIC8v55yBXHJcbiAgICAgICAgICAgIGNpdHlOYW1lOiBpdGVtLmNpdHlOYW1lLCAgICAgICAgICAgICAvL+W4glxyXG4gICAgICAgICAgICBkaXN0cmljdE5hbWU6IGl0ZW0uZGlzdHJpY3ROYW1lICAgICAgLy/ljLpcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZih0aGlzLmRhdGEudG90YWwgPT0gMCl7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBtYXJrZXJzOiBuZXdNYXJrZXJzTGlzdCxcclxuICAgICAgICAgICAgdG90YWw6IHJlcy52YWwudG90YWwgICAgICAgICAvL+aAu+aVsFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIG1hcmtlcnM6IG5ld01hcmtlcnNMaXN0XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIC8v6I635Y+W5biC5Yy6XHJcbiAgZ2V0QXJlYUxpc3QoKTp2b2lke1xyXG4gICAgaHR0cHMucmVxdWVzdChhcGkudGVuYW50cywgbnVsbCwgJ0dFVCcpLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgaWYocmVzKXtcclxuICAgICAgICBsZXQgbGlzdDphbnkgPSByZXMubGlzdC5tYXAoKGl0ZW06YW55KTphbnk9PntcclxuICAgICAgICAgIGlmKGl0ZW0uY25hbWUgPT0gJ+ilv+a1t+WyuOaWsOWMuicpe1xyXG4gICAgICAgICAgICBpdGVtLmNuYW1lID0gJ+m7hOWym+WMuic7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgdGl0bGU6IGl0ZW0uY25hbWVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGxldCBuZXdMaXN0OmFueSA9IFtdO1xyXG4gICAgICAgIGxpc3QuZm9yRWFjaCgoaXRlbTphbnkpOnZvaWQ9PntcclxuICAgICAgICAgIGlmKGl0ZW0udGl0bGUgPT0gJ+adjuayp+WMuicpe1xyXG4gICAgICAgICAgICBuZXdMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiBpdGVtLnRpdGxlLFxyXG4gICAgICAgICAgICAgIGxvbmdpdHVkZTogJzEyMC40Mzk2MDEnLCAgICAgIC8v5Lit5b+D57uP5bqmXHJcbiAgICAgICAgICAgICAgbGF0aXR1ZGU6ICczNi4xNTE1ODYnLCAgICAgICAgLy/kuK3lv4PnuqzluqZcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmKGl0ZW0udGl0bGUgPT0gJ+W4guWMl+WMuicpe1xyXG4gICAgICAgICAgICBuZXdMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiBpdGVtLnRpdGxlLFxyXG4gICAgICAgICAgICAgIGxvbmdpdHVkZTogJzEyMC4zODAzODUnLCAgICAgICAgICAvL+S4reW/g+e7j+W6plxyXG4gICAgICAgICAgICAgIGxhdGl0dWRlOiAnMzYuMDkzNTEyJywgICAgICAgICAgICAvL+S4reW/g+e6rOW6plxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYoaXRlbS50aXRsZSA9PSAn6buE5bKb5Yy6Jyl7XHJcbiAgICAgICAgICAgIG5ld0xpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXHJcbiAgICAgICAgICAgICAgbG9uZ2l0dWRlOiAnMTIwLjIwNDQ2JywgICAgICAgICAgLy/kuK3lv4Pnu4/luqZcclxuICAgICAgICAgICAgICBsYXRpdHVkZTogJzM1Ljk2NjI1MScsICAgICAgICAgICAvL+S4reW/g+e6rOW6plxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYoaXRlbS50aXRsZSA9PSAn5biC5Y2X5Yy6Jyl7XHJcbiAgICAgICAgICAgIG5ld0xpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXHJcbiAgICAgICAgICAgICAgbG9uZ2l0dWRlOiAnMTIwLjQxOTQ4NycsICAgICAgICAgLy/kuK3lv4Pnu4/luqZcclxuICAgICAgICAgICAgICBsYXRpdHVkZTogJzM2LjA4MDkyNCcsICAgICAgICAgICAvL+S4reW/g+e6rOW6plxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYoaXRlbS50aXRsZSA9PSAn5bSC5bGx5Yy6Jyl7XHJcbiAgICAgICAgICAgIG5ld0xpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXHJcbiAgICAgICAgICAgICAgbG9uZ2l0dWRlOiAnMTIwLjQ3NTUzMycsICAgICAgICAgLy/kuK3lv4Pnu4/luqZcclxuICAgICAgICAgICAgICBsYXRpdHVkZTogJzM2LjExMzU3NScsICAgICAgICAgICAvL+S4reW/g+e6rOW6plxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYoaXRlbS50aXRsZSA9PSAn5Z+O6Ziz5Yy6Jyl7XHJcbiAgICAgICAgICAgIG5ld0xpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXHJcbiAgICAgICAgICAgICAgbG9uZ2l0dWRlOiAnMTIwLjQwMzA5NCcsICAgICAgICAgLy/kuK3lv4Pnu4/luqZcclxuICAgICAgICAgICAgICBsYXRpdHVkZTogJzM2LjMxMjk4NScsICAgICAgICAgICAvL+S4reW/g+e6rOW6plxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYoaXRlbS50aXRsZSA9PSAn5Y2z5aKo5Yy6Jyl7XHJcbiAgICAgICAgICAgIG5ld0xpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXHJcbiAgICAgICAgICAgICAgbG9uZ2l0dWRlOiAnMTIwLjQ1Mzk3NCcsICAgICAgICAgLy/kuK3lv4Pnu4/luqZcclxuICAgICAgICAgICAgICBsYXRpdHVkZTogJzM2LjM5NTUzNCcsICAgICAgICAgICAvL+S4reW/g+e6rOW6plxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYoaXRlbS50aXRsZSA9PSAn6IO25bee5biCJyl7XHJcbiAgICAgICAgICAgIG5ld0xpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXHJcbiAgICAgICAgICAgICAgbG9uZ2l0dWRlOiAnMTIwLjAzOTE3MicsICAgICAgICAgIC8v5Lit5b+D57uP5bqmXHJcbiAgICAgICAgICAgICAgbGF0aXR1ZGU6ICczNi4yNzA4NjMnLCAgICAgICAgICAgIC8v5Lit5b+D57qs5bqmXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZihpdGVtLnRpdGxlID09ICflubPluqbluIInKXtcclxuICAgICAgICAgICAgbmV3TGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgICB0aXRsZTogaXRlbS50aXRsZSxcclxuICAgICAgICAgICAgICBsb25naXR1ZGU6ICcxMTkuOTkzNzU0JywgICAgICAgICAgLy/kuK3lv4Pnu4/luqZcclxuICAgICAgICAgICAgICBsYXRpdHVkZTogJzM2Ljc4MjkwOCcsICAgICAgICAgICAvL+S4reW/g+e6rOW6plxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYoaXRlbS50aXRsZSA9PSAn6I6x6KW/5biCJyl7XHJcbiAgICAgICAgICAgIG5ld0xpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXHJcbiAgICAgICAgICAgICAgbG9uZ2l0dWRlOiAnMTIwLjUyNjEyNicsICAgICAgICAgIC8v5Lit5b+D57uP5bqmXHJcbiAgICAgICAgICAgICAgbGF0aXR1ZGU6ICczNi44OTQ3NDMnLCAgICAgICAgICAgLy/kuK3lv4PnuqzluqZcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmKGl0ZW0udGl0bGUgPT0gJ+mrmOaWsOWMuicpe1xyXG4gICAgICAgICAgICBuZXdMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiBpdGVtLnRpdGxlLFxyXG4gICAgICAgICAgICAgIGxvbmdpdHVkZTogJzEyMC4yODQ0NzYnLCAgICAgICAgICAvL+S4reW/g+e7j+W6plxyXG4gICAgICAgICAgICAgIGxhdGl0dWRlOiAnMzYuMjcyMzY3JywgICAgICAgICAgIC8v5Lit5b+D57qs5bqmXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZihpdGVtLnRpdGxlID09ICfpnZLlspvok53osLcnKXtcclxuICAgICAgICAgICAgbmV3TGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgICB0aXRsZTogaXRlbS50aXRsZSxcclxuICAgICAgICAgICAgICBsb25naXR1ZGU6ICcxMjAuNjgzNDQ1JywgICAgICAgICAgLy/kuK3lv4Pnu4/luqZcclxuICAgICAgICAgICAgICBsYXRpdHVkZTogJzM2LjM1MzQxMScsICAgICAgICAgICAvL+S4reW/g+e6rOW6plxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYoaXRlbS50aXRsZSA9PSAn6Z2S5bKb5biCJyl7XHJcbiAgICAgICAgICAgIG5ld0xpc3QudW5zaGlmdCh7XHJcbiAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXHJcbiAgICAgICAgICAgICAgbG9uZ2l0dWRlOiAnMTIwLjM4OTQ1OCcsICAgICAgICAgIC8v5Lit5b+D57uP5bqmXHJcbiAgICAgICAgICAgICAgbGF0aXR1ZGU6ICczNi4wNzMxNicsICAgICAgICAgICAgIC8v5Lit5b+D57qs5bqmXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgYXJlYUxpc3Q6IG5ld0xpc3RcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuZ2V0QXJlYSgpOyAgICAgICAgIC8v6I635Y+W5b2T5YmN5L2N572u5omA5Zyo5Yy6XHJcbiAgICAgIH1cclxuICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBnZXRBcmVhKCk6dm9pZHsgIC8v6I635Y+W5b2T5YmN5L2N572u5omA5Zyo5Yy6XHJcbiAgICBsZXQgcXFtYXBzZGs6YW55ID0gbmV3IFFRTWFwV1goe1xyXG4gICAgICBrZXk6IGFwaS5tYXBBcGlLZXlcclxuICAgIH0pXHJcbiAgICB3eC5nZXRMb2NhdGlvbih7XHJcbiAgICAgIHR5cGU6ICd3Z3M4NCcsXHJcbiAgICAgIHN1Y2Nlc3M6KCk6dm9pZD0+e1xyXG4gICAgICAgIHFxbWFwc2RrLnJldmVyc2VHZW9jb2Rlcih7XHJcbiAgICAgICAgICBsb2NhdGlvbjogdGhpcy5kYXRhLmxhdGl0dWRlICsgJywnICsgdGhpcy5kYXRhLmxvbmdpdHVkZSxcclxuICAgICAgICAgIHN1Y2Nlc3M6KHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgICAgICAgbGV0IGNpdHk6YW55ID0gcmVzLnJlc3VsdC5hZGRyZXNzX2NvbXBvbmVudC5jaXR5O1xyXG4gICAgICAgICAgICBsZXQgYXJlYU5hbWU6c3RyaW5nID0gcmVzLnJlc3VsdC5hZGRyZXNzX2NvbXBvbmVudC5kaXN0cmljdDtcclxuICAgICAgICAgICAgaWYoY2l0eSAhPSAn6Z2S5bKb5biCJyl7XHJcbiAgICAgICAgICAgICAgYXJlYU5hbWUgPSAn6Z2S5bKb5biCJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmRhdGEuYXJlYUxpc3QuZm9yRWFjaCgoaXRlbTphbnkpPT57XHJcbiAgICAgICAgICAgICAgaWYoaXRlbS50aXRsZSA9PSBhcmVhTmFtZSl7XHJcbiAgICAgICAgICAgICAgICAvL+WFqOWxgOWPmOmHj1xyXG4gICAgICAgICAgICAgICAgYXBpLmFyZWFOYW1lID0gYXJlYU5hbWU7ICAgLy/ljLrlkI1cclxuICAgICAgICAgICAgICAgIGFwaS5hcmVhSWQgPSBpdGVtLmlkOyAgICAgIC8v5Yy6SURcclxuICAgICAgICAgICAgICAgIGFwaS5sb25naXR1ZGUgPSBpdGVtLmxvbmdpdHVkZSwgICAgLy/kuK3lv4Pnu4/luqZcclxuICAgICAgICAgICAgICAgIGFwaS5sYXRpdHVkZSA9IGl0ZW0ubGF0aXR1ZGUgICAgICAgLy/kuK3lv4PnuqzluqZcclxuICAgICAgICAgICAgICAgIC8v5b2T5YmN6aG15Y+Y6YeP77yI5YiH5o2i5Zyw5Zu+5pi+56S65Yy65Z+f77yJXHJcbiAgICAgICAgICAgICAgICBpZihhcmVhTmFtZSA9PSAn6Z2S5bKb5biCJyl7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NhbGU6IDEwLCAgICAgICAgICAgICAgICAgICAgLy/nvKnmlL7nuqfliKvvvIzlj5blgLzojIPlm7TkuLozLTIwXHJcbiAgICAgICAgICAgICAgICAgICAgYXJlYU5hbWU6IGFwaS5hcmVhTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBhcmVhSWQ6IGFwaS5hcmVhSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9uZ2l0dWRlOiBhcGkubG9uZ2l0dWRlLCAgICAgLy/kuK3lv4Pnu4/luqZcclxuICAgICAgICAgICAgICAgICAgICBsYXRpdHVkZTogYXBpLmxhdGl0dWRlICAgICAgIC8v5Lit5b+D57qs5bqmXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NhbGU6IDEyLCAgICAgICAgICAgICAgICAgICAgLy/nvKnmlL7nuqfliKvvvIzlj5blgLzojIPlm7TkuLozLTIwXHJcbiAgICAgICAgICAgICAgICAgICAgYXJlYU5hbWU6IGFwaS5hcmVhTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBhcmVhSWQ6IGFwaS5hcmVhSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9uZ2l0dWRlOiBhcGkubG9uZ2l0dWRlLCAgICAgLy/kuK3lv4Pnu4/luqZcclxuICAgICAgICAgICAgICAgICAgICBsYXRpdHVkZTogYXBpLmxhdGl0dWRlLCAgICAgICAvL+S4reW/g+e6rOW6plxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZihhcGkuaW5kZXhGbGFnID09ICdwdCcpeyAgICAgICAgIC8v6aaW6aG15om+5bmz5Y+w6L+b5YWlXHJcbiAgICAgICAgICAgICAgICAgIHRoaXMucHRGbigpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYoYXBpLmluZGV4RmxhZyA9PSAneG0nKXsgICAvL+mmlumhteaJvuaUv+etlui/m+WFpVxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnhtRm4oKTtcclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKGFwaS5pbmRleEZsYWcgPT0gJ3pqJyl7ICAgLy/pppbpobXmib7otYTph5Hov5vlhaVcclxuICAgICAgICAgICAgICAgICAgdGhpcy56akZuKCk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihhcGkuaW5kZXhGbGFnID09ICdjZCcpeyAgIC8v6aaW6aG15om+5Zy65Zyw6L+b5YWlXHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuY2RGbigpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYoYXBpLmluZGV4RmxhZyA9PSAnZncnKXsgICAvL+mmlumhteaJvuacjeWKoei/m+WFpVxyXG4gICAgICAgICAgICAgICAgICB0aGlzLmZ3Rm4oKTtcclxuICAgICAgICAgICAgICAgIH1lbHNleyAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLy90aGlzLmdldE1hcmsoKTsgIC8v6I635Y+W5Zyw5Zu+5qCH54K5XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgbW9yZUZuKCk6dm9pZHsgICAvL+WKoOi9veabtOWkmlxyXG4gICAgaWYodGhpcy5kYXRhLmZsYWcgPT0gJ2FsbFB0Jyl7ICAvL+W5s+WPsOWFqOmDqFxyXG4gICAgICBpZih0aGlzLmRhdGEubXVtTGlzdC5sZW5ndGggPCB0aGlzLmRhdGEudG90YWwpe1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgcGFnZUluZGV4OiB0aGlzLmRhdGEucGFnZUluZGV4ICs9IDEsICAgICAgICAgICAgIC8v5b2T5YmN6aG1XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgdGhpcy5nZXRBbGxQcm8oKTsgICBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYodGhpcy5kYXRhLmZsYWcgPT0gJ2N4UHQnKXsgIC8v5Yib5paw5bmz5Y+wXHJcbiAgICAgIGlmKHRoaXMuZGF0YS5tdW1MaXN0Lmxlbmd0aCA8IHRoaXMuZGF0YS50b3RhbCl7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIHBhZ2VJbmRleDogdGhpcy5kYXRhLnBhZ2VJbmRleCArPSAxLCAgICAgICAgICAgICAvL+W9k+WJjemhtVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5nZXRDeFBybygpOyAgIFxyXG4gICAgICB9ICAgIFxyXG4gICAgfVxyXG4gICAgaWYodGhpcy5kYXRhLmZsYWcgPT0gJ2N5UHQnKXsgIC8v5Yib5Lia5bmz5Y+wXHJcbiAgICAgIGlmKHRoaXMuZGF0YS5tdW1MaXN0Lmxlbmd0aCA8IHRoaXMuZGF0YS50b3RhbCl7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIHBhZ2VJbmRleDogdGhpcy5kYXRhLnBhZ2VJbmRleCArPSAxLCAgICAgICAgICAgICAvL+W9k+WJjemhtVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5nZXRDeVBybygpOyAgIFxyXG4gICAgICB9ICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpZih0aGlzLmRhdGEuZmxhZyA9PSAneG0nKXsgIC8v5om+6aG555uuXHJcbiAgICAgIGlmKHRoaXMuZGF0YS5tdW1MaXN0Lmxlbmd0aCA8IHRoaXMuZGF0YS50b3RhbCl7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIHBhZ2VJbmRleDogdGhpcy5kYXRhLnBhZ2VJbmRleCArPSAxLCAgICAgICAgICAgICAvL+W9k+WJjemhtVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5nZXRQcm9MaXN0KCk7ICAgXHJcbiAgICAgIH0gICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGlmKHRoaXMuZGF0YS5mbGFnID09ICd6aicpeyAgLy/mib7otYTph5FcclxuICAgICAgaWYodGhpcy5kYXRhLm11bUxpc3QubGVuZ3RoIDwgdGhpcy5kYXRhLnRvdGFsKXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgcGFnZUluZGV4OiB0aGlzLmRhdGEucGFnZUluZGV4ICs9IDEsICAgICAgICAgICAgIC8v5b2T5YmN6aG1XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmdldEFsbEZ1bmRzTGlzdCgpO1xyXG4gICAgICB9ICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpZih0aGlzLmRhdGEuZmxhZyA9PSAnanInKXsgIC8v5om+6LWE6YeR77yI6YeR6J6N77yJXHJcbiAgICAgIGlmKHRoaXMuZGF0YS5tdW1MaXN0Lmxlbmd0aCA8IHRoaXMuZGF0YS50b3RhbCl7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIHBhZ2VJbmRleDogdGhpcy5kYXRhLnBhZ2VJbmRleCArPSAxLCAgICAgICAgICAgICAvL+W9k+WJjemhtVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5nZXRKckxpc3QoKTtcclxuICAgICAgfSAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaWYodGhpcy5kYXRhLmZsYWcgPT0gJ3R6Jyl7ICAvL+aJvui1hOmHke+8iOaKlei1hO+8iVxyXG4gICAgICBpZih0aGlzLmRhdGEubXVtTGlzdC5sZW5ndGggPCB0aGlzLmRhdGEudG90YWwpe1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBwYWdlSW5kZXg6IHRoaXMuZGF0YS5wYWdlSW5kZXggKz0gMSwgICAgICAgICAgICAgLy/lvZPliY3pobVcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuZ2V0VHpMaXN0KCk7XHJcbiAgICAgIH0gICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGlmKHRoaXMuZGF0YS5mbGFnID09ICdyeicpeyAgLy/mib7otYTph5HvvIjono3otYTvvIlcclxuICAgICAgaWYodGhpcy5kYXRhLm11bUxpc3QubGVuZ3RoIDwgdGhpcy5kYXRhLnRvdGFsKXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgcGFnZUluZGV4OiB0aGlzLmRhdGEucGFnZUluZGV4ICs9IDEsICAgICAgICAgICAgIC8v5b2T5YmN6aG1XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmdldFJ6TGlzdCgpO1xyXG4gICAgICB9ICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpZih0aGlzLmRhdGEuZmxhZyA9PSAnY2QnKXsgIC8v5om+5Zy65ZywXHJcbiAgICAgIGlmKHRoaXMuZGF0YS5tdW1MaXN0Lmxlbmd0aCA8IHRoaXMuZGF0YS50b3RhbCl7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIHBhZ2VJbmRleDogdGhpcy5kYXRhLnBhZ2VJbmRleCArPSAxLCAgICAgICAgICAgICAvL+W9k+WJjemhtVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5nZXRTaXRlTGlzdCgpO1xyXG4gICAgICB9ICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpZih0aGlzLmRhdGEuZmxhZyA9PSAnZncnKXsgIC8v5om+5pyN5YqhXHJcbiAgICAgIGlmKHRoaXMuZGF0YS5tdW1MaXN0Lmxlbmd0aCA8IHRoaXMuZGF0YS50b3RhbCl7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIHBhZ2VJbmRleDogdGhpcy5kYXRhLnBhZ2VJbmRleCArPSAxLCAgICAgICAgICAgICAvL+W9k+WJjemhtVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5nZXRTZXJ2aWNlTGlzdCgpO1xyXG4gICAgICB9ICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gIH0sXHJcblxyXG5cclxuICAvL+mhtemdouWIneWni+WMllxyXG4gIG9uTG9hZCgpe1xyXG4gICAgLy/pobXpnaLmoIfpophcclxuICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7ICAgICBcclxuICAgICAgdGl0bGU6IFwi6Z2S5bKb5Lq65omN5Yib5paw5Yib5Lia5bmz5Y+w5Zyw5Zu+XCJcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIC8v6aG16Z2i5pi+56S6XHJcbiAgb25TaG93KCl7XHJcbiAgICB0aGlzLnZlcmlmaWNhdGlvbigpOyAgLy/pqozor4HnlKjmiLfnmbvlvZXnirbmgIFcclxuICB9LFxyXG5cclxuICAvL+mhtemdoua4suafk+WujOaIkFxyXG4gIG9uUmVhZHkoKXt9LFxyXG5cclxuICAvL+mhtemdoumakOiXj1xyXG4gIG9uSGlkZSgpe1xyXG4gICAgYXBpLmluZGV4RmxhZyA9ICcnOyAgICAgLy/pppbpobU25om+5Yik5patXHJcblxyXG4gICAgYXBpLmFyZWFOYW1lID0gJyc7ICAgICAgLy/muIXnqbrlhajlsYDkvY3nva7lkI3np7BcclxuICAgIGFwaS5hcmVhSWQgPSAnJzsgICAgICAgIC8v5riF56m65YWo5bGA5L2N572uSURcclxuICAgIGFwaS5sb25naXR1ZGUgPSAnJzsgICAgIC8v5Lit5b+D57uP5bqmXHJcbiAgICBhcGkubGF0aXR1ZGUgPSAnJzsgICAgICAvL+S4reW/g+e6rOW6plxyXG5cclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGlzTGlzdFNob3c6IHRydWUsICAgICAgICAgIC8v6buY6K6k5pi+56S6NuaJvuWGheWuuVxyXG4gICAgICBpc0luZm9TaG93OiBmYWxzZSwgICAgICAgICAvL+WNleadoeS/oeaBr+aYvuekulxyXG4gICAgICBpc1NlYXJjaFNob3c6IGZhbHNlLCAgICAgICAvL+aQnOe0oue7k+aenOaVsOaNrlxyXG4gICAgICBpc1NlYXJjaEluZm9TaG93OiBmYWxzZSwgICAvL+aQnOe0ouWIl+ihqOaVsOaNrlxyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgLy/pobXpnaLlhbPpl61cclxuICBvblVubG9hZCgpe31cclxufSlcclxuZXhwb3J0IHt9O1xyXG4iXX0=