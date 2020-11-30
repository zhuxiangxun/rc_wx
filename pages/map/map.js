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
    onShareAppMessage: function (res) {
        if (res.from === 'button') {
            console.log(res.target);
        }
        return {
            title: '青岛人才创新创业平台地图',
            path: '/pages/home/home',
            imageUrl: ''
        };
    },
    onShareTimeline: function () {
        return {
            title: '青岛人才创新创业平台地图',
            query: {},
            imageUrl: ''
        };
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
        else if (api.areaName && api.areaName == '青岛市') {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFFLENBQUMsVUFBVSxDQUFDO0FBQ2hDLElBQUksS0FBSyxHQUFJLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0FBQ2pELElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxvREFBb0QsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUVuRixJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsK0JBQStCLENBQUMsQ0FBQztBQUV2RCxJQUFJLENBQUM7SUFFSCxJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUUsRUFBRTtRQUNYLE1BQU0sRUFBRSxFQUFFO1FBQ1YsU0FBUyxFQUFFLFFBQVE7UUFDbkIsSUFBSSxFQUFFLEVBQUU7UUFDUixRQUFRLEVBQUUsS0FBSztRQUVmLFFBQVEsRUFBRSxFQUFFO1FBQ1osU0FBUyxFQUFFLENBQUM7UUFDWixLQUFLLEVBQUUsQ0FBQztRQUVSLFFBQVEsRUFBRSxFQUFFO1FBQ1osUUFBUSxFQUFFLEVBQUU7UUFDWixNQUFNLEVBQUUsRUFBRTtRQUVWLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLFlBQVksRUFBRSxLQUFLO1FBQ25CLGdCQUFnQixFQUFFLEtBQUs7UUFHdkIsUUFBUSxFQUFFLEVBQUU7UUFDWixZQUFZLEVBQUUsRUFBRTtRQUNoQixXQUFXLEVBQUM7WUFDVixFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtZQUN2QixFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtZQUN0QixFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtZQUN0QixFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRTtZQUN6QixFQUFFLEVB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WUFDeEIsSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUM7Z0JBQzVDLElBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ1gsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUM7aUJBQ3BDLENBQUMsQ0FBQTtnQkFDRixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7YUFDdkI7U0FDRjtJQUVILENBQUM7SUFJRCxNQUFNO1FBRUosRUFBRSxDQUFDLHFCQUFxQixDQUFDO1lBQ3ZCLEtBQUssRUFBRSxjQUFjO1NBQ3RCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFHRCxNQUFNO1FBQ0osSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFHRCxPQUFPLGdCQUFHLENBQUM7SUFHWCxNQUFNO1FBQ0osR0FBRyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFFbkIsR0FBRyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbEIsR0FBRyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDaEIsR0FBRyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDbkIsR0FBRyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFFbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLFlBQVksRUFBRSxLQUFLO1lBQ25CLGdCQUFnQixFQUFFLEtBQUs7U0FDeEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdELFFBQVEsZ0JBQUcsQ0FBQztDQUNiLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIG1hcC50c1xyXG5jb25zdCBhcGkgPSBnZXRBcHAoKS5nbG9iYWxEYXRhOyAgLy8g6I635Y+W5bqU55So5a6e5L6LXHJcbmxldCBodHRwcyAgPSByZXF1aXJlKCcuLi8uLi91dGlscy9teVJlcXVlc3QuanMnKTsgIC8v6I635Y+WYWpheOaWueazlVxyXG5sZXQgRGlhbG9nID0gcmVxdWlyZSgnLi4vLi4vbWluaXByb2dyYW1fbnBtL0B2YW50L3dlYXBwL2RpYWxvZy9kaWFsb2cuanMnKS5kZWZhdWx0O1xyXG5cclxubGV0IFFRTWFwV1ggPSByZXF1aXJlKCcuLi8uLi91dGlscy9xcW1hcC13eC1qc3Nkay5qcycpOyAgLy8g5byV5YWlU0RL5qC45b+D57G7XHJcblxyXG5QYWdlKHtcclxuICAvL+mhtemdouaVsOaNrlxyXG4gIGRhdGE6IHtcclxuICAgIHB0VGl0bGU6ICcnLCAgICAgICAgICAgICAgICAgICAgICAgICAvL+W9k+WJjeafpeivoueahOW5s+WPsOWQjeensFxyXG4gICAgaW1nVXJsOiAnJywgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Zu+54mH5pyN5Yqh5ZmoXHJcbiAgICBtb3JlVGl0bGU6ICfngrnlh7vliqDovb3mm7TlpJonLCAgICAgICAgICAgIC8v5Yqg6L295pu05aSaXHJcbiAgICBmbGFnOiAnJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lvZPliY3liJfooahcclxuICAgIG1vcmVTaG93OiBmYWxzZSwgICAgICAgICAgICAgICAgICAgICAvL+WKoOi9veabtOWkmueKtuaAgVxyXG4gICAgLy/pobXnoIFcclxuICAgIHBhZ2VTaXplOiAxMCwgICAgICAgICAgICAgLy/mr4/pobXmmL7npLrmlbDph49cclxuICAgIHBhZ2VJbmRleDogMSwgICAgICAgICAgICAgLy/lvZPliY3pobVcclxuICAgIHRvdGFsOiAwLCAgICAgICAgICAgICAgICAgLy/mgLvmnaHmlbBcclxuICAgIC8v5Yy65biCXHJcbiAgICBhcmVhTGlzdDogW10sICAgICAgICAgICAgIC8v5Yy65YiX6KGoXHJcbiAgICBhcmVhTmFtZTogJycsICAgICAgICAgICAgIC8v5YiH5o2i55qE5Yy65ZCNXHJcbiAgICBhcmVhSWQ6ICcnLCAgICAgICAgICAgICAgIC8v5YiH5o2i55qE5Yy6SURcclxuICAgIC8v5pCc57SiXHJcbiAgICBpc0xpc3RTaG93OiB0cnVlLCAgICAgICAgIC8v6buY6K6k5pi+56S6NuaJvuWGheWuuVxyXG4gICAgaXNJbmZvU2hvdzogZmFsc2UsICAgICAgICAvL+WNleadoeS/oeaBr+aYvuekulxyXG4gICAgaXNTZWFyY2hTaG93OiBmYWxzZSwgICAgICAvL+aQnOe0oue7k+aenOaVsOaNrlxyXG4gICAgaXNTZWFyY2hJbmZvU2hvdzogZmFsc2UsICAvL+aQnOe0ouWIl+ihqOaVsOaNrlxyXG5cclxuICAgIC8v5bmz5Y+w6auY57qn5pCc57SiXHJcbiAgICB0eXBlTGlzdDogW10sICAgICAgICAgICAgIC8v57G75Z6LXHJcbiAgICBpbmR1c3RyeUxpc3Q6IFtdLCAgICAgICAgIC8v5bmz5Y+w5Lqn5Lia6KGM5LiaXHJcbiAgICBwdFppWmhpTGlzdDpbICAgICAgICAgICAgIC8v5bmz5Y+w6LWE6LSoXHJcbiAgICAgIHsgaWQ6IDEsIHRpdGxlOiAn5Zu95a6257qnJyB9LFxyXG4gICAgICB7IGlkOiAyLCB0aXRsZTogJ+ecgee6pycgfSxcclxuICAgICAgeyBpZDogMywgdGl0bGU6ICfluILnuqcnIH0sXHJcbiAgICAgIHsgaWQ6IDQsIHRpdGxlOiAn5Yy677yI5biC77yJ57qnJyB9LFxyXG4gICAgICB7IGlkOiA1LCB0aXRsZTogJ+aXoOi1hOi0qCcgfVxyXG4gICAgXSxcclxuICAgIC8v6aG555uu6auY57qn5pCc57SiXHJcbiAgICB4bVN0YWdlTGlzdDogW10sICAgICAgICAgICAgIC8v5omA5aSE6Zi25q61XHJcbiAgICB4bUNhdGVnb3J5TGlzdDogW10sICAgICAgICAgIC8v6ZyA5rGC57G75YirXHJcbiAgICB4bUZpbmFuY2luZ0xpc3Q6IFtdLCAgICAgICAgIC8v6J6N6LWE6YeR6aKdXHJcbiAgICAvL+WcuuWcsOmrmOe6p+aQnOe0olxyXG4gICAgY2RDYXJyaWVyTGlzdDogW10sICAgICAgICAgICAvL+i1hOa6kOexu+Wei1xyXG4gICAgY2RVc2VyTGlzdDogWyAgICAgICAgICAgICAgICAvL+WcuuWcsOeUqOmAlFxyXG4gICAgICB7IGlkOiAxLCBkaWNOYW1lOiAn5Ye656efJyB9LFxyXG4gICAgICB7IGlkOiAyLCBkaWNOYW1lOiAn5Ye65ZSuJyB9XHJcbiAgICBdLFxyXG4gICAgLy/mnI3liqHpq5jnuqfmkJzntKJcclxuICAgIGZ3Q2F0ZWdvcnlMaXN0OltdLCAgICAgICAgICAgIC8v5pyN5Yqh57G75YirXHJcbiAgICBqckNhdGVnb3J5TGlzdDpbXSwgICAgICAgICAgICAvL+mHkeiejeacjeWKoeexu+WIq1xyXG4gICAgZndUeXBlTGlzdDogW10sICAgICAgICAgICAgICAgLy/ljZXkvY3nsbvlnotcclxuICAgIGZ3U2NhbGVMaXN0OiBbXSwgICAgICAgICAgICAgIC8v5Y2V5L2N6KeE5qihXHJcbiAgICAvL+aJvuaKlei1hFxyXG4gICAgdHpBcmVhTGlzdDogW10sICAgICAgICAgICAgICAgLy/mipXotYTljLrln59cclxuICAgIHR6V2F5TGlzdDogW10sICAgICAgICAgICAgICAgIC8v5oqV6LWE5pa55byPXHJcbiAgICB0ek90aGVyTGlzdDogW10sICAgICAgICAgICAgICAvL+aKlei1hOmHkeminVxyXG4gICAgdHpUeXBlTGlzdDogW10sICAgICAgICAgICAgICAgLy/otYTph5HnsbvlnotcclxuICAgIC8v5om+6J6N6LWEXHJcbiAgICByeldheUxpc3Q6IFtdLCAgICAgICAgICAgICAgICAvL+iejei1hOaWueW8j1xyXG5cclxuICAgIGZsZzogJycsICAgICAgICAgICAgICAgICAgICAgIC8vNuaJvueKtuaAgeWIpOaWrVxyXG4gICAgbnVtOiAwLCAgICAgICAgICAgICAgICAgICAgICAgLy825om+57uT5p6cXHJcbiAgICBtdW1MaXN0OiBbXSwgICAgICAgICAgICAgICAgICAvLzbmib7liJfooahcclxuXHJcbiAgICBzZWFyY2hLZXk6ICcnLCAgICAgICAgICAgICAgIC8va2V55YWz6ZSu5a2X5pCc57SiXHJcbiAgICB0ZW5hbnRJZDogJycsICAgICAgICAgICAgICAgIC8v5Zyw5Yy6aWRcclxuXHJcbiAgICAvL+aJvuW5s+WPsFxyXG4gICAgcHRTZWFyY2hJbmZvU2hvdzogdHJ1ZSwgICAgIC8v5pi+56S6L+makOiXj1xyXG4gICAgcHRCdG5TaG93OiBmYWxzZSwgICAgICAgICAgIC8v5YWo6YOo5pe25pi+56S6L+makOiXj1xyXG4gICAgcHRCdG5DbGFzczogMSwgICAgICAgICAgICAgIC8v5YWo6YOo5oyJ6ZKu54q25oCB5YiH5o2iXHJcbiAgICBwdEluZGV4OiAwLCAgICAgICAgICAgICAgICAgLy/lvZPliY3ntKLlvJVcclxuICAgIHB0SW5kdXN0cnlJZDogbnVsbCwgICAgICAgICAvL+mAieS4reeahGlkXHJcbiAgICBcclxuICAgIHB0VHlwZUNsYXNzOiBudWxsLCAgICAgICAgICAvL+exu+Wei+aMiemSrueKtuaAgeWIh+aNolxyXG4gICAgcHRaaVpoaUNsYXNzOiBudWxsLCAgICAgICAgIC8v6LWE6LSo5oyJ6ZKu54q25oCB5YiH5o2iXHJcblxyXG4gICAgcHRUeXBlSWQ6ICcnLCAgICAgICAgICAgICAgIC8v5bmz5Y+w57G75Z6LaWRcclxuICAgIHB0WmlaaGk6ICcnLCAgICAgICAgICAgICAgICAvL+W5s+WPsOi1hOi0qGlkXHJcbiAgICBwdEN5VHlwZUlkOiAnJywgICAgICAgICAgICAgLy/kuqfkuJppZFxyXG4gICAgcHRIeVR5cGVJZDogJycsICAgICAgICAgICAgIC8v6KGM5LiaaWRcclxuXHJcbiAgXHJcbiAgICAvL+aJvumhueebrlxyXG4gICAgcHJvU2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgICAvL+aYvuekui/pmpDol49cclxuICAgIHhtSW5kZXg6IDAsICAgICAgICAgICAgICAgICAvL+W9k+WJjee0ouW8lVxyXG4gICAgeG1JbmR1c3RyeUlkOiBudWxsLCAgICAgICAgIC8v6YCJ5Lit55qEaWRcclxuXHJcbiAgICB4bVN0YWdlQ2xhc3M6IG51bGwsICAgICAgICAgIC8v6Zi25q615oyJ6ZKu54q25oCB5YiH5o2iXHJcbiAgICB4bUNhdGVnb3J5Q2xhc3M6IG51bGwsICAgICAgIC8v57G75Yir5oyJ6ZKu54q25oCB5YiH5o2iXHJcbiAgICB4bUZpbmFuY2luZ0NsYXNzOiBudWxsLCAgICAgIC8v6YeR6aKd5oyJ6ZKu54q25oCB5YiH5o2iXHJcblxyXG4gICAgeG1TdGFnZUlkOiAnJywgICAgICAgICAgICAgICAvL+aJgOWkhOmYtuautVxyXG4gICAgeG1UeXBlSWQ6ICcnLCAgICAgICAgICAgICAgICAvL+mcgOaxguexu+WIq1xyXG4gICAgeG1Uek1vbmV5OiAnJywgICAgICAgICAgICAgICAvL+iejei1hOmHkeminVxyXG4gICAgeG1DeVR5cGVJZDogJycsICAgICAgICAgICAgICAvL+S6p+S4mmlkXHJcbiAgICB4bUh5VHlwZUlkOiAnJywgICAgICAgICAgICAgIC8v6KGM5LiaaWRcclxuXHJcblxyXG4gICAgLy/mib7otYTph5FcclxuICAgIHpqU2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgICAvL+aYvuekui/pmpDol49cclxuICAgIHpqQnRuQ2xhc3M6IDEsICAgICAgICAgICAgICAvL+WFqOmDqOaMiemSrueKtuaAgeWIh+aNolxyXG4gICAgLy/mib7otYTph5HvvIjph5Hono3mnI3liqHvvIlcclxuICAgIGpyU2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgICAvL+aYvuekui/pmpDol49cclxuICAgIGpyQ2F0ZWdvcnlJbmRleDogMCwgICAgICAgICAvL+W9k+WJjee0ouW8le+8iOacjeWKoeexu+WIq++8iVxyXG4gICAganJDYXRlZ29yeUlkOiBudWxsLCAgICAgICAgIC8v6YCJ5Lit55qEaWTvvIjmnI3liqHnsbvliKvvvIlcclxuICAgIGpySW5kdXN0cnlJbmRleDogMCwgICAgICAgICAvL+W9k+WJjee0ouW8le+8iOihjOS4muS6p+S4mu+8iVxyXG4gICAganJJbmR1c3RyeUlkOiBudWxsLCAgICAgICAgIC8v6YCJ5Lit55qEaWTvvIjooYzkuJrkuqfkuJrvvIlcclxuXHJcbiAgICBqclR5cGVDbGFzczogbnVsbCwgICAgICAgICAgLy/ljZXkvY3nsbvlnotcclxuICAgIGpyU2NhbGVDbGFzczogbnVsbCwgICAgICAgICAvL+WNleS9jeinhOaooVxyXG5cclxuICAgIGpyVHlwZU9uZUlkOiAnJywgICAgICAgICAgICAvL+acjeWKoeexu+WIq+S4gOe6p+iPnOWNlVxyXG4gICAganJUeXBlVHdvSWQ6ICcnLCAgICAgICAgICAgIC8v5pyN5Yqh57G75Yir5LqM57qn6I+c5Y2VXHJcbiAgICBqckR3U3RhdHVzSWQ6ICcnLCAgICAgICAgICAgLy/ljZXkvY3nsbvlnotpZFxyXG4gICAganJEd1NjYWxlSWQ6ICcnLCAgICAgICAgICAgIC8v5Y2V5L2N6KeE5qihaWRcclxuICAgIGpyQ3lUeXBlSWQ6ICcnLCAgICAgICAgICAgICAvL+S6p+S4mmlkXHJcbiAgICBqckh5VHlwZUlkOiAnJywgICAgICAgICAgICAgLy/ooYzkuJppZFxyXG5cclxuICAgIC8v5om+6LWE6YeR77yI5oqV6LWE77yJXHJcbiAgICB0elNlYXJjaEluZm9TaG93OiBmYWxzZSwgICAgLy/mmL7npLov6ZqQ6JePXHJcbiAgICB0ekluZGV4OiAwLCAgICAgICAgICAgICAgICAgLy/lvZPliY3ntKLlvJVcclxuICAgIHR6SW5kdXN0cnlJZDogbnVsbCwgICAgICAgICAvL+mAieS4reeahGlkXHJcblxyXG4gICAgdHpBcmVhQ2xhc3M6IG51bGwsICAgICAgICAgIC8v5oqV6LWE5Yy65Z+fXHJcbiAgICB0eldheUNsYXNzOiBudWxsLCAgICAgICAgICAgLy/mipXotYTmlrnlvI9cclxuICAgIHR6T3RoZXJDbGFzczogbnVsbCwgICAgICAgICAvL+aKlei1hOmHkeminVxyXG4gICAgdHpUeXBlQ2xhc3M6IG51bGwsICAgICAgICAgIC8v5oqV6LWE57G75Z6LXHJcblxyXG4gICAgdHpBcmVhSWQ6ICcnLCAgICAgICAgICAgICAgIC8v5oqV6LWE5Yy65Z+fXHJcbiAgICB0eldheUlkOiAnJywgICAgICAgICAgICAgICAgLy/mipXotYTmlrnlvI9cclxuICAgIHR6T3RoZXJJZDogJycsICAgICAgICAgICAgICAvL+aKlei1hOmHkeminVxyXG4gICAgdHpUeXBlSWQ6ICcnLCAgICAgICAgICAgICAgIC8v5oqV6LWE57G75Z6LXHJcbiAgICB0ekN5VHlwZUlkOiAnJywgICAgICAgICAgICAgLy/kuqfkuJppZFxyXG4gICAgdHpIeVR5cGVJZDogJycsICAgICAgICAgICAgIC8v6KGM5LiaaWRcclxuXHJcblxyXG5cclxuICAgIC8v5om+6LWE6YeR77yI6J6N6LWE77yJXHJcbiAgICByelNlYXJjaEluZm9TaG93OiBmYWxzZSwgICAgLy/mmL7npLov6ZqQ6JePXHJcbiAgICByekluZGV4OiAwLCAgICAgICAgICAgICAgICAgLy/lvZPliY3ntKLlvJVcclxuICAgIHJ6SW5kdXN0cnlJZDogbnVsbCwgICAgICAgICAvL+mAieS4reeahGlkXHJcblxyXG4gICAgcnpDYXRlZ29yeUNsYXNzOiBudWxsLCAgICAgIC8v6ZyA5rGC57G75YirXHJcbiAgICByekZpbmFuY2luZ0NsYXNzOiBudWxsLCAgICAgLy/ono3otYTph5Hpop1cclxuXHJcbiAgICByekNhdGVnb3J5SWQ6ICcnLCAgICAgICAgICAgLy/ono3otYTmlrnlvI9cclxuICAgIHJ6RmluYW5jaW5nSWQ6ICcnLCAgICAgICAgICAvL+iejei1hOmHkeminVxyXG4gICAgcnpDeVR5cGVJZDogJycsICAgICAgICAgICAgIC8v5Lqn5LiaaWRcclxuICAgIHJ6SHlUeXBlSWQ6ICcnLCAgICAgICAgICAgICAvL+ihjOS4mmlkXHJcblxyXG4gICAgLy/mib7lnLrlnLBcclxuICAgIGNkU2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgICAvL+aYvuekui/pmpDol49cclxuICAgIGNkSW5kZXg6IDAsICAgICAgICAgICAgICAgICAvL+W9k+WJjee0ouW8lVxyXG4gICAgY2RJbmR1c3RyeUlkOiBudWxsLCAgICAgICAgIC8v6YCJ5Lit55qEaWRcclxuIFxyXG4gICAgY2RUeXBlQ2xhc3M6IG51bGwsICAgICAgICAgIC8v6LWE5rqQ57G75Z6LXHJcbiAgICBjZFVzZXJDbGFzczogbnVsbCwgICAgICAgICAgLy/lnLrlnLDnlKjpgJRcclxuXHJcbiAgICBjZFR5cGVJZDogJycsICAgICAgICAgICAgICAgLy/ovb3kvZPnqbrpl7TnsbvlnotcclxuICAgIGNkQ2h1WnVJZDogJycsICAgICAgICAgICAgICAvL+aYr+WQpuWHuuenn1xyXG4gICAgY2RTYWxlSWQ6ICcnLCAgICAgICAgICAgICAgIC8v5piv5ZCm5Ye65ZSuXHJcbiAgICBjZEN5VHlwZUlkOiAnJywgICAgICAgICAgICAgLy/kuqfkuJppZFxyXG4gICAgY2RIeVR5cGVJZDogJycsICAgICAgICAgICAgIC8v6KGM5LiaaWRcclxuXHJcbiAgICAvL+aJvuacjeWKoVxyXG4gICAgZndTZWFyY2hJbmZvU2hvdzogZmFsc2UsICAgIC8v5pi+56S6L+makOiXj1xyXG4gICAgZndDYXRlZ29yeUluZGV4OiAwLCAgICAgICAgIC8v5b2T5YmN57Si5byV77yI5pyN5Yqh57G75Yir77yJXHJcbiAgICBmd0NhdGVnb3J5SWQ6IG51bGwsICAgICAgICAgLy/pgInkuK3nmoRpZO+8iOacjeWKoeexu+WIq++8iVxyXG4gICAgZndJbmR1c3RyeUluZGV4OiAwLCAgICAgICAgIC8v5b2T5YmN57Si5byV77yI6KGM5Lia5Lqn5Lia77yJXHJcbiAgICBmd0luZHVzdHJ5SWQ6IG51bGwsICAgICAgICAgLy/pgInkuK3nmoRpZO+8iOihjOS4muS6p+S4mu+8iVxyXG5cclxuICAgIGZ3VHlwZUNsYXNzOiBudWxsLCAgICAgICAgICAvL+WNleS9jeexu+Wei1xyXG4gICAgZndTY2FsZUNsYXNzOiBudWxsLCAgICAgICAgIC8v5Y2V5L2N6KeE5qihXHJcblxyXG4gICAgZndUeXBlT25lSWQ6ICcnLCAgICAgICAgICAgIC8v5pyN5Yqh57G75Yir5LiA57qn6I+c5Y2VXHJcbiAgICBmd1R5cGVUd29JZDogJycsICAgICAgICAgICAgLy/mnI3liqHnsbvliKvkuoznuqfoj5zljZVcclxuICAgIGZ3RHdTdGF0dXNJZDogJycsICAgICAgICAgICAvL+WNleS9jeexu+Wei2lkXHJcbiAgICBmd0R3U2NhbGVJZDogJycsICAgICAgICAgICAgLy/ljZXkvY3op4TmqKFpZFxyXG4gICAgZndDeVR5cGVJZDogJycsICAgICAgICAgICAgIC8v5Lqn5LiaaWRcclxuICAgIGZ3SHlUeXBlSWQ6ICcnLCAgICAgICAgICAgICAvL+ihjOS4mmlkXHJcblxyXG5cclxuICAgIC8v5Zyw5Zu+XHJcbiAgICBsb25naXR1ZGU6ICcnLCAgICAgICAgICAgIC8v5Lit5b+D57uP5bqmXHJcbiAgICBsYXRpdHVkZTogJycsICAgICAgICAgICAgIC8v5Lit5b+D57qs5bqmXHJcbiAgICBzY2FsZTogMTIsICAgICAgICAgICAgICAgIC8v57yp5pS+57qn5Yir77yM5Y+W5YC86IyD5Zu05Li6My0yMFxyXG4gICAgbWFya2VyczpbXSwgICAgICAgICAgICAgICAvL+agh+iusOeCueWkhOeQhuWQjueahOaVsOaNru+8iGlk44CB5p+l6K+i5L2/55So77yJXHJcbiAgICBtYXJrZXJzT2JqOnt9LCAgICAgICAgICAgIC8v5p+l6K+i55qE5Y2V5p2h5pWw5o2uXHJcbiAgICAvL+aJgOS7peagh+eCueaVsOaNrlxyXG4gICAgY3hQbGF0Zm9ybU1vZGVsczogW10sICAgICAvL+WIm+S4muW5s+WPsFxyXG4gICAgY3lQbGF0Zm9ybU1vZGVsczogW10sICAgICAvL+WIm+aWsOW5s+WPsFxyXG4gICAgcHJvTW9kZWxzOiBbXSwgICAgICAgICAgICAvL+aJvumhueebrlxyXG4gICAgZndqZ01vZGVsczogW10sICAgICAgICAgICAvL+aJvuacjeWKoeacuuaehFxyXG4gICAgdmVjdG9yTW9kZWxzOiBbXSwgICAgICAgICAvL+aJvuWcuuWcsFxyXG4gICAganJqZ01kb2VsczogW10sICAgICAgICAgICAvL+aJvumHkeiejeacuuaehFxyXG4gICAgdHpNb2RlbHM6IFtdLCAgICAgICAgICAgICAvL+aJvuaKlei1hOmcgOaxglxyXG4gICAgcm9uZ3ppUHJvczogW10sICAgICAgICAgICAvL+aJvuiejei1hOmcgOaxgu+8iOmhueebruW6k+eahOiejei1hDfpobnvvIlcclxuICAgIHJvbmd6aU5lZWRzOiBbXSwgICAgICAgICAgLy/mib7ono3otYTpnIDmsYLvvIjpnIDmsYLlupPnmoTono3otYQ36aG577yJXHJcbiAgICAvL+WvvOiIqlxyXG4gICAgZ29OYW1lOicnLCAgICAgICAgICAgICAgICAvL+imgeWOu+eahOWcsOWdgFxyXG4gICAgZ29Mb25naXR1ZGU6ICcnLCAgICAgICAgICAvL+S4reW/g+e7j+W6pijnu4jngrkpXHJcbiAgICBnb0xhdGl0dWRlOiAnJywgICAgICAgICAgIC8v5Lit5b+D57qs5bqmKOe7iOeCuSlcclxuICB9LFxyXG5cclxuICBvblNoYXJlQXBwTWVzc2FnZToocmVzOmFueSk6YW55PT4geyAgLy/lj5HpgIHnu5nmnIvlj4tcclxuICAgIGlmIChyZXMuZnJvbSA9PT0gJ2J1dHRvbicpIHtcclxuICAgICAgLy8g5p2l6Ieq6aG16Z2i5YaF6L2s5Y+R5oyJ6ZKuXHJcbiAgICAgIGNvbnNvbGUubG9nKHJlcy50YXJnZXQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdGl0bGU6ICfpnZLlspvkurrmiY3liJvmlrDliJvkuJrlubPlj7DlnLDlm74nLFxyXG4gICAgICBwYXRoOiAnL3BhZ2VzL2hvbWUvaG9tZScsXHJcbiAgICAgIGltYWdlVXJsOiAnJ1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIG9uU2hhcmVUaW1lbGluZTooKTphbnk9PiB7ICAvL+WIhuS6q1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdGl0bGU6ICfpnZLlspvkurrmiY3liJvmlrDliJvkuJrlubPlj7DlnLDlm74nLFxyXG4gICAgICBxdWVyeToge30sXHJcbiAgICAgIGltYWdlVXJsOiAnJ1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHB0Q3hUeXBlcygpOnZvaWR7ICAvL+WIm+aWsOW5s+WPsOexu+Wei1xyXG4gICAgaHR0cHMucmVxdWVzdChhcGkuc3VibWVudURpYyArICc/bW9pZD02MCcsIG51bGwsICdHRVQnKVxyXG4gICAgLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgaWYocmVzKXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgdHlwZUxpc3Q6IHJlcy52YWxcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgcHRUeXBlcygpOnZvaWR7ICAvL+WIm+S4muW5s+WPsOexu+Wei1xyXG4gICAgaHR0cHMucmVxdWVzdChhcGkuc3VibWVudURpYyArICc/bW9pZD0yJywgbnVsbCwgJ0dFVCcpXHJcbiAgICAudGhlbigocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICBpZihyZXMpe1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICB0eXBlTGlzdDogcmVzLnZhbFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBpbmR1c3RyeSgpOnZvaWR7ICAvL+S6p+S4mi/ooYzkuJpcclxuICAgIGh0dHBzLnJlcXVlc3QoYXBpLnN1Ym1lbnVEaWMgKyAnP21vaWQ9NycsIG51bGwsICdHRVQnKVxyXG4gICAgLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgaWYocmVzKXtcclxuICAgICAgICBsZXQgYXJyOmFueSA9IHJlcy52YWwubWFwKChpdGVtOmFueSk6YW55PT57XHJcbiAgICAgICAgICBsZXQgY2hpbGRyZW46YW55ID0gaXRlbS5jaGlsZHJlbi5tYXAoKGl0ZW0yOmFueSk6YW55PT57XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgdGV4dDogaXRlbTIuZGljTmFtZSxcclxuICAgICAgICAgICAgICBpZDogaXRlbTIuaWQsXHJcbiAgICAgICAgICAgICAgcElkOiBpdGVtMi5wSWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIGNoaWxkcmVuLnVuc2hpZnQoe1xyXG4gICAgICAgICAgICB0ZXh0OiAn5YWo6YOoJyxcclxuICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgIHBJZDogaXRlbS5pZCxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdGV4dDogaXRlbS5kaWNOYW1lLFxyXG4gICAgICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW5cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBpbmR1c3RyeUxpc3Q6IGFyclxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICB4bVN0YWdlKCk6dm9pZHsgIC8v5omA5aSE6Zi25q61XHJcbiAgICBodHRwcy5yZXF1ZXN0KGFwaS5zdWJtZW51RGljICsgJz9tb2lkPTQwJywgbnVsbCwgJ0dFVCcpXHJcbiAgICAudGhlbigocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICBpZihyZXMpe1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICB4bVN0YWdlTGlzdDogcmVzLnZhbFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHhtQ2F0ZWdvcnkoKTp2b2lkeyAgLy/pnIDmsYLnsbvliKtcclxuICAgIGh0dHBzLnJlcXVlc3QoYXBpLnN1Ym1lbnVEaWMgKyAnP21vaWQ9NDEnLCBudWxsLCAnR0VUJylcclxuICAgIC50aGVuKChyZXM6YW55KTp2b2lkPT57XHJcbiAgICAgIGlmKHJlcyl7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIHhtQ2F0ZWdvcnlMaXN0OiByZXMudmFsXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgeG1GaW5hbmNpbmcoKTp2b2lkeyAgLy/ono3otYTph5Hpop1cclxuICAgIGh0dHBzLnJlcXVlc3QoYXBpLnN1Ym1lbnVEaWMgKyAnP21vaWQ9NTInLCBudWxsLCAnR0VUJylcclxuICAgIC50aGVuKChyZXM6YW55KTp2b2lkPT57XHJcbiAgICAgIGlmKHJlcyl7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIHhtRmluYW5jaW5nTGlzdDogcmVzLnZhbFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBjZENhcnJpZXIoKTp2b2lkeyAgLy/otYTmupDnsbvlnotcclxuICAgIGh0dHBzLnJlcXVlc3QoYXBpLnN1Ym1lbnVEaWMgKyAnP21vaWQ9MTUnLCBudWxsLCAnR0VUJylcclxuICAgIC50aGVuKChyZXM6YW55KTp2b2lkPT57XHJcbiAgICAgIGlmKHJlcyl7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIGNkQ2Fycmllckxpc3Q6IHJlcy52YWxcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBmd0NhdGVnb3J5KCk6dm9pZHsgIC8v5pyN5Yqh57G75YirXHJcbiAgICBodHRwcy5yZXF1ZXN0KGFwaS5zdWJtZW51RGljICsgJz9tb2lkPTEzJywgbnVsbCwgJ0dFVCcpXHJcbiAgICAudGhlbigocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICBpZihyZXMpe1xyXG4gICAgICAgIGxldCBhcnI6YW55ID0gcmVzLnZhbC5tYXAoKGl0ZW06YW55KTphbnk9PntcclxuICAgICAgICAgIGxldCBjaGlsZHJlbjphbnkgPSBpdGVtLmNoaWxkcmVuLm1hcCgoaXRlbTI6YW55KTphbnk9PntcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICB0ZXh0OiBpdGVtMi5kaWNOYW1lLFxyXG4gICAgICAgICAgICAgIGlkOiBpdGVtMi5pZCxcclxuICAgICAgICAgICAgICBwSWQ6IGl0ZW0yLnBJZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgY2hpbGRyZW4udW5zaGlmdCh7XHJcbiAgICAgICAgICAgIHRleHQ6ICflhajpg6gnLFxyXG4gICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgcElkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0ZXh0OiBpdGVtLmRpY05hbWUsXHJcbiAgICAgICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGxldCBjYXRlZ29yeUxpc3Q6YW55ID0gYXJyLmZpbHRlcigoaXRlbTphbnkpPT57XHJcbiAgICAgICAgICByZXR1cm4gaXRlbS50ZXh0ID09ICfph5Hono3mnI3liqEnXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIGZ3Q2F0ZWdvcnlMaXN0OiBhcnIsXHJcbiAgICAgICAgICBqckNhdGVnb3J5TGlzdDogY2F0ZWdvcnlMaXN0XHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgZndUeXBlKCk6dm9pZHsgIC8v5Y2V5L2N57G75Z6LXHJcbiAgICBodHRwcy5yZXF1ZXN0KGFwaS5zdWJtZW51RGljICsgJz9tb2lkPTE0JywgbnVsbCwgJ0dFVCcpXHJcbiAgICAudGhlbigocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICBpZihyZXMpe1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBmd1R5cGVMaXN0OiByZXMudmFsXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgZndTY2FsZSgpOnZvaWR7ICAvL+WNleS9jeinhOaooVxyXG4gICAgaHR0cHMucmVxdWVzdChhcGkuc3VibWVudURpYyArICc/bW9pZD0yMScsIG51bGwsICdHRVQnKVxyXG4gICAgLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgaWYocmVzKXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgZndTY2FsZUxpc3Q6IHJlcy52YWxcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgcnpXYXkoKTp2b2lkeyAgLy/ono3otYTmlrnlvI9cclxuICAgIGh0dHBzLnJlcXVlc3QoYXBpLnN1Ym1lbnVEaWMgKyAnP21vaWQ9NTgnLCBudWxsLCAnR0VUJylcclxuICAgIC50aGVuKChyZXM6YW55KTp2b2lkPT57XHJcbiAgICAgIGlmKHJlcyl7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIHJ6V2F5TGlzdDogcmVzLnZhbFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICB0ekFyZWEoKTp2b2lkeyAgLy/mipXotYTljLrln59cclxuICAgIGh0dHBzLnJlcXVlc3QoYXBpLnRlbmFudHMsIG51bGwsICdHRVQnKVxyXG4gICAgLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgaWYocmVzKXtcclxuICAgICAgICBsZXQgbGlzdDphbnkgPSByZXMubGlzdC5tYXAoKGl0ZW06YW55KTphbnk9PntcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGRpY05hbWU6IGl0ZW0uY25hbWUsXHJcbiAgICAgICAgICAgIGlkOiBpdGVtLmlkXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgdHpBcmVhTGlzdDogbGlzdFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0sKGVycjphbnkpPT57XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgdHpXYXkoKTp2b2lkeyAgLy/mipXotYTmlrnlvI9cclxuICAgIGh0dHBzLnJlcXVlc3QoYXBpLnN1Ym1lbnVEaWMgKyAnP21vaWQ9NTYnLCBudWxsLCAnR0VUJylcclxuICAgIC50aGVuKChyZXM6YW55KTp2b2lkPT57XHJcbiAgICAgIGlmKHJlcyl7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIHR6V2F5TGlzdDogcmVzLnZhbFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICB0ek90aGVyKCk6dm9pZHsgIC8v5oqV6LWE6YeR6aKdXHJcbiAgICBodHRwcy5yZXF1ZXN0KGFwaS5zdWJtZW51RGljICsgJz9tb2lkPTU1JywgbnVsbCwgJ0dFVCcpXHJcbiAgICAudGhlbigocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICBpZihyZXMpe1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICB0ek90aGVyTGlzdDogcmVzLnZhbFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICB0elR5cGUoKTp2b2lkeyAgLy/otYTph5HnsbvlnotcclxuICAgIGh0dHBzLnJlcXVlc3QoYXBpLnN1Ym1lbnVEaWMgKyAnP21vaWQ9NDInLCBudWxsLCAnR0VUJylcclxuICAgIC50aGVuKChyZXM6YW55KTp2b2lkPT57XHJcbiAgICAgIGlmKHJlcyl7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIHR6VHlwZUxpc3Q6IHJlcy52YWxcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcblxyXG4gIC8v5pCc57Si5oyJ6ZKu6Kem5Y+RXHJcbiAgc2VhcmNoQmx1cihldmVudDphbnkpOnZvaWR7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBzZWFyY2hLZXk6IGV2ZW50LmRldGFpbC52YWx1ZSwgICAgIC8v5pmu6YCa5pCc57SiXHJcbiAgICAgIHBhZ2VTaXplOiAxMCwgICAgICAgICAgICAgICAgICAgICAgLy/mr4/pobXmmL7npLrmlbDph49cclxuICAgICAgcGFnZUluZGV4OiAxLCAgICAgICAgICAgICAgICAgICAgICAvL+W9k+WJjemhtVxyXG4gICAgICB0b3RhbDogMCwgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5oC75p2h5pWwXHJcbiAgICAgIG1hcmtlcnM6IFtdLCAgICAgICAgICAgICAgICAgICAgICAgLy/moIforrDmgLvmlbBcclxuICAgICAgbnVtOiAwLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLzbmib7nu5PmnpxcclxuICAgICAgbXVtTGlzdDogW10sICAgICAgICAgICAgICAgICAgICAgICAvLzbmib7liJfooahcclxuICAgIH0pXHJcblxyXG4gICAgaWYodGhpcy5kYXRhLmZsYWcgPT0gJ2FsbFB0Jyl7ICAvL+W5s+WPsOWFqOmDqFxyXG4gICAgICB0aGlzLmdldEFsbFBybygpOyBcclxuICAgIH1cclxuICAgIGlmKHRoaXMuZGF0YS5mbGFnID09ICdjeFB0Jyl7ICAvL+WIm+aWsOW5s+WPsFxyXG4gICAgICB0aGlzLmdldEN4UHJvKCk7ICAgIFxyXG4gICAgfVxyXG4gICAgaWYodGhpcy5kYXRhLmZsYWcgPT0gJ2N5UHQnKXsgIC8v5Yib5Lia5bmz5Y+wXHJcbiAgICAgIHRoaXMuZ2V0Q3lQcm8oKTsgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaWYodGhpcy5kYXRhLmZsYWcgPT0gJ3htJyl7ICAvL+aJvumhueebrlxyXG4gICAgICB0aGlzLmdldFByb0xpc3QoKTsgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGlmKHRoaXMuZGF0YS5mbGFnID09ICd6aicpeyAgLy/mib7otYTph5FcclxuICAgICAgdGhpcy5nZXRBbGxGdW5kc0xpc3QoKTsgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaWYodGhpcy5kYXRhLmZsYWcgPT0gJ2pyJyl7ICAvL+aJvui1hOmHke+8iOmHkeieje+8iVxyXG4gICAgICB0aGlzLmdldEpyTGlzdCgpOyAgICBcclxuICAgIH1cclxuXHJcbiAgICBpZih0aGlzLmRhdGEuZmxhZyA9PSAndHonKXsgIC8v5om+6LWE6YeR77yI5oqV6LWE77yJXHJcbiAgICAgIHRoaXMuZ2V0VHpMaXN0KCk7ICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGlmKHRoaXMuZGF0YS5mbGFnID09ICdyeicpeyAgLy/mib7otYTph5HvvIjono3otYTvvIlcclxuICAgICAgdGhpcy5nZXRSekxpc3QoKTsgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaWYodGhpcy5kYXRhLmZsYWcgPT0gJ2NkJyl7ICAvL+aJvuWcuuWcsFxyXG4gICAgICB0aGlzLmdldFNpdGVMaXN0KCk7ICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGlmKHRoaXMuZGF0YS5mbGFnID09ICdmdycpeyAgLy/mib7mnI3liqFcclxuICAgICAgdGhpcy5nZXRTZXJ2aWNlTGlzdCgpOyAgICBcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvL+aQnOe0ouWIl+ihqOaYvuekulxyXG4gIHNlYXJjaEluZm9PcGVuKCk6dm9pZHtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGlzTGlzdFNob3c6IGZhbHNlLCAgICAgICAgICAvL+m7mOiupOaYvuekujbmib7lhoXlrrlcclxuICAgICAgaXNJbmZvU2hvdzogZmFsc2UsICAgICAgICAgLy/ljZXmnaHkv6Hmga/mmL7npLpcclxuICAgICAgaXNTZWFyY2hTaG93OiBmYWxzZSwgICAgICAgLy/mkJzntKLnu5PmnpzmlbDmja5cclxuICAgICAgaXNTZWFyY2hJbmZvU2hvdzogdHJ1ZSwgICAvL+aQnOe0ouWIl+ihqOaVsOaNrlxyXG4gICAgfSlcclxuICB9LFxyXG4gICAvL+aQnOe0ouWIl+ihqOWFs+mXrVxyXG4gICBzZWFyY2hJbmZvQ2xvc2UoKTp2b2lke1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgaXNMaXN0U2hvdzogZmFsc2UsICAgICAgICAgIC8v6buY6K6k5pi+56S6NuaJvuWGheWuuVxyXG4gICAgICBpc0luZm9TaG93OiBmYWxzZSwgICAgICAgICAgLy/ljZXmnaHkv6Hmga/mmL7npLpcclxuICAgICAgaXNTZWFyY2hTaG93OiB0cnVlLCAgICAgICAgIC8v5pCc57Si57uT5p6c5pWw5o2uXHJcbiAgICAgIGlzU2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgICAvL+aQnOe0ouWIl+ihqOaVsOaNrlxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuXHJcbiAgLy/mkJzntKLnu5PmnpzlhbPpl61cclxuICBzZWFyY2hDbG9zZSgpOnZvaWR7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBtYXJrZXJzOiBbXSwgICAgICAgICAgICAgICAvL+a4heepulxyXG4gICAgICBudW06IDAsICAgICAgICAgICAgICAgICAgICAvLzbmib7nu5PmnpxcclxuICAgICAgbXVtTGlzdDogW10sICAgICAgICAgICAgICAgLy825om+5YiX6KGoXHJcbiAgICAgIGlzTGlzdFNob3c6IHRydWUsICAgICAgICAgIC8v6buY6K6k5pi+56S6NuaJvuWGheWuuVxyXG4gICAgICBpc0luZm9TaG93OiBmYWxzZSwgICAgICAgICAvL+WNleadoeS/oeaBr+aYvuekulxyXG4gICAgICBpc1NlYXJjaFNob3c6IGZhbHNlLCAgICAgICAvL+aQnOe0oue7k+aenOaVsOaNrlxyXG4gICAgICBpc1NlYXJjaEluZm9TaG93OiBmYWxzZSwgICAvL+aQnOe0ouWIl+ihqOaVsOaNrlxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICBoaWRlRm4oKTp2b2lkeyAgICAgICAvL+mcgOimgemakOiXj+eahOWFg+e0oFxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgcGFnZVNpemU6IDEwLCAgICAgICAgICAgICAvL+avj+mhteaYvuekuuaVsOmHj1xyXG4gICAgICBwYWdlSW5kZXg6IDEsICAgICAgICAgICAgIC8v5b2T5YmN6aG1XHJcbiAgICAgIHRvdGFsOiAwLCAgICAgICAgICAgICAgICAgLy/mgLvmnaHmlbBcclxuXHJcbiAgICAgIG1hcmtlcnM6IFtdLCAgICAgICAgICAgICAgLy/moIforrDmgLvmlbBcclxuICAgICAgXHJcbiAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICBtdW1MaXN0OiBbXSwgICAgICAgICAgICAgICAvLzbmib7liJfooahcclxuICAgICAgc2VhcmNoS2V5OiAnJywgICAgICAgICAgICAgLy/lhbPplK7lrZfmkJzntKJcclxuXHJcbiAgICAgIGlzTGlzdFNob3c6IGZhbHNlLCAgICAgICAgIC8v6buY6K6k5pi+56S6NuaJvuWGheWuuVxyXG4gICAgICBpc0luZm9TaG93OiBmYWxzZSwgICAgICAgICAvL+WNleadoeS/oeaBr+aYvuekulxyXG4gICAgICBpc1NlYXJjaFNob3c6IGZhbHNlLCAgICAgICAvL+aQnOe0oue7k+aenOaVsOaNrlxyXG4gICAgICBpc1NlYXJjaEluZm9TaG93OiBmYWxzZSwgICAvL+aQnOe0ouWIl+ihqOaVsOaNrlxyXG5cclxuICAgICAgcHRTZWFyY2hJbmZvU2hvdzogZmFsc2UsICAgIC8v5bmz5Y+w5YWo6YOo5oyJ6ZKuXHJcbiAgICAgIHB0QnRuU2hvdzogZmFsc2UsICAgICAgICAgICAvL+W5s+WPsOmrmOe6p+aQnOe0oumakOiXj1xyXG4gICAgICBwcm9TZWFyY2hJbmZvU2hvdzogZmFsc2UsICAgLy/pobnnm67pq5jnuqfmkJzntKJcclxuXHJcbiAgICAgIHpqU2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgIC8v6LWE6YeR5YWo6YOo5oyJ6ZKuXHJcbiAgICAgIGpyU2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgIC8v5om+6LWE6YeR77yI6YeR6J6N5pyN5Yqh77yJXHJcbiAgICAgIHR6U2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgIC8v5om+6LWE6YeR77yI5om+5oqV6LWE77yJXHJcbiAgICAgIHJ6U2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgIC8v5om+6LWE6YeR77yI5om+6J6N6LWE77yJXHJcbiAgICAgIFxyXG4gICAgICBjZFNlYXJjaEluZm9TaG93OiBmYWxzZSwgICAvL+WcuuWcsOmrmOe6p+aQnOe0olxyXG4gICAgICBmd1NlYXJjaEluZm9TaG93OiBmYWxzZSwgICAvL+acjeWKoemrmOe6p+aQnOe0olxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuXHJcbiAgLy/mib7lubPlj7BcclxuICBwdEZuKCk6dm9pZHsgICAgICAgICAgICAgICAgICAgLy825om+5bmz5Y+w6Kem5Y+RXHJcbiAgICB0aGlzLmhpZGVGbigpOyAgICAgICAgICAgICAgIC8v6ZyA6KaB6ZqQ6JeP55qE5YWD57SgXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBmbGFnOiAnYWxsUHQnLCAgICAgICAgICAgICAvL+W9k+WJjeWIl+ihqFxyXG5cclxuICAgICAgcHRJbmRleDogMCwgICAgICAgICAgICAgICAgIC8v5b2T5YmN57Si5byVXHJcbiAgICAgIHB0SW5kdXN0cnlJZDogbnVsbCwgICAgICAgICAvL+mAieS4reeahGlkXHJcbiAgICAgIHB0VHlwZUNsYXNzOiBudWxsLCAgICAgICAgICAvL+exu+Wei+aMiemSrueKtuaAgeWIh+aNolxyXG4gICAgICBwdFppWmhpQ2xhc3M6IG51bGwsICAgICAgICAgLy/otYTotKjmjInpkq7nirbmgIHliIfmjaJcclxuICAgICAgcHRUeXBlSWQ6ICcnLCAgICAgICAgICAgICAgIC8v5bmz5Y+w57G75Z6LaWRcclxuICAgICAgcHRaaVpoaTogJycsICAgICAgICAgICAgICAgIC8v5bmz5Y+w6LWE6LSoaWRcclxuICAgICAgcHRDeVR5cGVJZDogJycsICAgICAgICAgICAgIC8v5Lqn5LiaaWRcclxuICAgICAgcHRIeVR5cGVJZDogJycsICAgICAgICAgICAgIC8v6KGM5LiaaWRcclxuXHJcbiAgICAgIGlzU2VhcmNoU2hvdzogdHJ1ZSwgICAgICAgIC8v5pCc57Si57uT5p6c5pWw5o2uXHJcbiAgICAgIHB0U2VhcmNoSW5mb1Nob3c6IHRydWUsICAgIC8v5bmz5Y+w5YWo6YOo5oyJ6ZKuXHJcbiAgICAgIHB0QnRuQ2xhc3M6IDEsICAgICAgICAgICAgICAvL+WFqOmDqOaMiemSrueKtuaAgeWIh+aNolxyXG4gICAgfSlcclxuICAgIHRoaXMuZ2V0QWxsUHJvKCk7ICAgICAgICAgICAgICAvLzbmib7lhajpg6jlubPlj7Dnu5/orqFcclxuICB9LFxyXG4gIGdldEFsbFBybygpOnZvaWR7ICAgICAgICAgICAgICAgLy825om+5YWo6YOo5bmz5Y+w57uf6K6hXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBwdFRpdGxlOiAn5YWo6YOo5bmz5Y+wJywgICAgICAgIC8v5p+l6K+i5Lmm57GN5qCH6aKYXHJcbiAgICAgIG1vcmVTaG93OiBmYWxzZSxcclxuICAgIH0pXHJcbiAgICBodHRwcy5yZXF1ZXN0KGFwaS5hbGxQbGF0Zm9ybSwge1xyXG4gICAgICB0ZW5hbnRJZDogYXBpLmFyZWFJZCwgICAgICAgICAgICAgLy/lnLDljLppZFxyXG4gICAgICBrZXk6IHRoaXMuZGF0YS5zZWFyY2hLZXksICAgICAgICAgLy/lhbPplK7lrZfmkJzntKJcclxuICAgICAgcGFnZVNpemU6IHRoaXMuZGF0YS5wYWdlU2l6ZSwgICAgIC8v5q+P6aG15pi+56S65pWw6YePXHJcbiAgICAgIHBhZ2VJbmRleDogdGhpcy5kYXRhLnBhZ2VJbmRleCwgICAvL+mhteaVsFxyXG4gICAgfSwgJ0dFVCcpLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgaWYocmVzKXtcclxuICAgICAgICAvL+WIm+aWsOW5s+WPsFxyXG4gICAgICAgIGxldCBjeFBsYXRmb3JtTW9kZWxzTGlzdDphbnkgPSByZXMudmFsLmN4UGxhdGZvcm1Nb2RlbHMubWFwKChpdGVtOmFueSk6YW55PT57XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgbmFtZTogJ+WIm+aWsCcsICAgICAgICAgIC8v6K+m5oOF5Yik5patXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZTogaXRlbS5sbmcsICAgLy/nu4/luqZcclxuICAgICAgICAgICAgbGF0aXR1ZGU6IGl0ZW0ubGF0LCAgICAvL+e6rOW6plxyXG4gICAgICAgICAgICBpY29uUGF0aDogJy4uLy4uL2ltYWdlcy9jeC5wbmcnLCAgICAgICAgICAgICAvL+agh+iusFxyXG4gICAgICAgICAgICB3aWR0aDogMjcsXHJcbiAgICAgICAgICAgIGhlaWdodDogMzUsXHJcbiAgICAgICAgICAgIGNhbGxvdXQ6IHtcclxuICAgICAgICAgICAgICBjb250ZW50OiBpdGVtLnB0TmFtZT9pdGVtLnB0TmFtZTon5pyq5aGr5oqlJyxcclxuICAgICAgICAgICAgICBjb2xvcjogJyMwMDAnLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAxNCxcclxuICAgICAgICAgICAgICBiZ0NvbG9yOiAnI0ZGRicsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNSxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXHJcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjQ0NDJyxcclxuICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnQllDTElDSydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW1nQXJyOiBpdGVtLnB0UGljcywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Zu+54mH5pWw57uEXHJcbiAgICAgICAgICAgIHByb3ZpbmNlTmFtZTogaXRlbS5wcm92aW5jZU5hbWU/aXRlbS5wcm92aW5jZU5hbWU6JycsICAgICAvL+ecgVxyXG4gICAgICAgICAgICBjaXR5TmFtZTogaXRlbS5jaXR5TmFtZT9pdGVtLmNpdHlOYW1lOicnLCAgICAgICAgICAgICAgICAgLy/luIJcclxuICAgICAgICAgICAgZGlzdHJpY3ROYW1lOiBpdGVtLmRpc3RyaWN0TmFtZT9pdGVtLmRpc3RyaWN0TmFtZTonJywgICAgIC8v5Yy6XHJcbiAgICAgICAgICAgIGFkZHJlc3M6IGl0ZW0uY3hBZGRyZXNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+ivpue7huWcsOWdgFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8v5Yib5Lia5bmz5Y+wXHJcbiAgICAgICAgbGV0IGN5UGxhdGZvcm1Nb2RlbHNMaXN0OmFueSA9IHJlcy52YWwuY3lQbGF0Zm9ybU1vZGVscy5tYXAoKGl0ZW06YW55KTphbnk9PntcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiAn5Yib5LiaJywgICAgICAgICAgLy/or6bmg4XliKTmlq1cclxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBpdGVtLmxuZywgICAvL+e7j+W6plxyXG4gICAgICAgICAgICBsYXRpdHVkZTogaXRlbS5sYXQsICAgIC8v57qs5bqmXHJcbiAgICAgICAgICAgIGljb25QYXRoOiAnLi4vLi4vaW1hZ2VzL2N5LnBuZycsICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIHdpZHRoOiAyNyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNSxcclxuICAgICAgICAgICAgY2FsbG91dDoge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IGl0ZW0uY3lOYW1lP2l0ZW0uY3lOYW1lOifmnKrloavmiqUnLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IDE4LFxyXG4gICAgICAgICAgICAgIGJnQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1LFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNDQ0MnLFxyXG4gICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdCWUNMSUNLJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbWdBcnI6IGl0ZW0ucGljRmlsZXMsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WbvueJh+aVsOe7hFxyXG4gICAgICAgICAgICBwcm92aW5jZU5hbWU6IGl0ZW0ucHJvdmluY2VOYW1lP2l0ZW0ucHJvdmluY2VOYW1lOicnLCAgICAgLy/nnIFcclxuICAgICAgICAgICAgY2l0eU5hbWU6IGl0ZW0uY2l0eU5hbWU/aXRlbS5jaXR5TmFtZTonJywgICAgICAgICAgICAgICAgIC8v5biCXHJcbiAgICAgICAgICAgIGRpc3RyaWN0TmFtZTogaXRlbS5kaXN0cmljdE5hbWU/aXRlbS5kaXN0cmljdE5hbWU6JycsICAgICAvL+WMulxyXG4gICAgICAgICAgICBhZGRyZXNzOiBpdGVtLmN5QWRkcmVzcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/or6bnu4blnLDlnYBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvL+WkhOeQhklE5Li65pWw5a2XXHJcbiAgICAgICAgbGV0IG1hcmtlcnNMaXN0OmFueSAgPSBjeFBsYXRmb3JtTW9kZWxzTGlzdC5jb25jYXQoY3lQbGF0Zm9ybU1vZGVsc0xpc3QpO1xyXG4gICAgICAgIGxldCBuZXdNYXJrZXJzTGlzdDphbnkgPSBtYXJrZXJzTGlzdC5tYXAoKGl0ZW06YW55LCBpbmRleDpudW1iZXIpOmFueT0+e1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGluZGV4LCAgICAgICAgICAgICAgICAgICAvL21hcOeUqOeahOiHquWumuS5iUlEXHJcbiAgICAgICAgICAgIG5hbWU6IGl0ZW0ubmFtZSwgICAgICAgICAgICAgLy/or6bmg4XliKTmlq1cclxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBpdGVtLmxvbmdpdHVkZSwgICAvL+e7j+W6plxyXG4gICAgICAgICAgICBsYXRpdHVkZTogaXRlbS5sYXRpdHVkZSwgICAgIC8v57qs5bqmXHJcbiAgICAgICAgICAgIGljb25QYXRoOiBpdGVtLmljb25QYXRoLCAgICAgLy/moIforrBcclxuICAgICAgICAgICAgd2lkdGg6IDI3LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1LFxyXG4gICAgICAgICAgICBjYWxsb3V0OiBpdGVtLmNhbGxvdXQsXHJcbiAgICAgICAgICAgIG9sZElkOiBpdGVtLmlkLCAgICAgICAgICAgICAgICAgICAgICAvL+WOn+Wni0lEXHJcbiAgICAgICAgICAgIHRpdGxlOiBpdGVtLmNhbGxvdXQuY29udGVudCwgICAgICAgICAvL+agh+mimFxyXG4gICAgICAgICAgICBpbWdBcnI6IGl0ZW0uaW1nQXJyLCAgICAgICAgICAgICAgICAgLy/lm77niYfmlbDnu4RcclxuICAgICAgICAgICAgcHJvdmluY2VOYW1lOiBpdGVtLnByb3ZpbmNlTmFtZSwgICAgIC8v55yBXHJcbiAgICAgICAgICAgIGNpdHlOYW1lOiBpdGVtLmNpdHlOYW1lLCAgICAgICAgICAgICAvL+W4glxyXG4gICAgICAgICAgICBkaXN0cmljdE5hbWU6IGl0ZW0uZGlzdHJpY3ROYW1lLCAgICAgIC8v5Yy6XHJcbiAgICAgICAgICAgIGFkZHJlc3M6IGl0ZW0uYWRkcmVzcyAgICAgICAgICAgICAgICAvL+ivpue7huWcsOWdgFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmKHRoaXMuZGF0YS50b3RhbCA9PSAwKXtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIG1hcmtlcnM6IG5ld01hcmtlcnNMaXN0LCAgICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIHRvdGFsOiByZXMudmFsLnRvdGFsLCAgICAgICAgICAgICAgICAgIC8v5oC75pWwXHJcbiAgICAgICAgICAgIG11bUxpc3Q6IG5ld01hcmtlcnNMaXN0LCAgICAgICAgICAgICAgIC8v5YiX6KGoXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgbWFya2VyczogdGhpcy5kYXRhLm1hcmtlcnMuY29uY2F0KG5ld01hcmtlcnNMaXN0KSwgICAgICAgICAgICAgICAvL+agh+iusFxyXG4gICAgICAgICAgICBtdW1MaXN0OiB0aGlzLmRhdGEubXVtTGlzdC5jb25jYXQobmV3TWFya2Vyc0xpc3QpLCAgICAgICAgICAgICAgIC8v5YiX6KGoXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5kYXRhLm11bUxpc3QubGVuZ3RoIDwgcmVzLnZhbC50b3RhbCl7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBtb3JlU2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgbW9yZVRpdGxlOiAn54K55Ye75Yqg6L295pu05aSaJyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBtb3JlU2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgbW9yZVRpdGxlOiAn5bey5Yqg6L295YWo6YOoJyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBnZXRDeFBybygpOnZvaWR7ICAgICAgICAgICAgICAgLy825om+5Yib5paw5bmz5Y+w57uf6K6hXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBwdFRpdGxlOiAn5Yib5paw5bmz5Y+wJywgICAgICAgIC8v5p+l6K+i5Lmm57GN5qCH6aKYXHJcbiAgICAgIG1vcmVTaG93OiBmYWxzZSxcclxuICAgIH0pXHJcbiAgICBodHRwcy5yZXF1ZXN0KGFwaS5jeFBsYXRmb3JtVXNlciwge1xyXG4gICAgICB0ZW5hbnRJZDogYXBpLmFyZWFJZCwgICAgICAgICAgICAgLy/lnLDljLppZFxyXG4gICAgICBrZXk6IHRoaXMuZGF0YS5zZWFyY2hLZXksICAgICAgICAgLy/lhbPplK7lrZfmkJzntKJcclxuICAgICAgcGFnZVNpemU6IHRoaXMuZGF0YS5wYWdlU2l6ZSwgICAgIC8v5q+P6aG15pi+56S65pWw6YePXHJcbiAgICAgIHBhZ2VJbmRleDogdGhpcy5kYXRhLnBhZ2VJbmRleCwgICAvL+mhteaVsFxyXG4gICAgICB0eXBlSWQ6IHRoaXMuZGF0YS5wdFR5cGVJZCwgICAgICAgLy/lubPlj7DnsbvlnotpZFxyXG4gICAgICB6aVpoaTogdGhpcy5kYXRhLnB0WmlaaGksICAgICAgICAgLy/lubPlj7DotYTotKhpZFxyXG4gICAgICBjeVR5cGVJZDogdGhpcy5kYXRhLnB0Q3lUeXBlSWQsICAgLy/kuqfkuJppZFxyXG4gICAgICBoeVR5cGVJZDogdGhpcy5kYXRhLnB0SHlUeXBlSWQgICAgLy/ooYzkuJppZFxyXG4gICAgfSwgJ0dFVCcpLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgaWYocmVzKXtcclxuICAgICAgICBsZXQgbmV3TWFya2Vyc0xpc3Q6YW55ID0gcmVzLmxpc3QubWFwKChpdGVtOmFueSwgaW5kZXg6bnVtYmVyKTphbnk9PntcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBpbmRleCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vbWFw55So55qE6Ieq5a6a5LmJSURcclxuICAgICAgICAgICAgbmFtZTogJ+WIm+aWsCcsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/or6bmg4XliKTmlq1cclxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBpdGVtLmxuZywgICAgICAgICAgICAgICAgICAgICAgICAgLy/nu4/luqZcclxuICAgICAgICAgICAgbGF0aXR1ZGU6IGl0ZW0ubGF0LCAgICAgICAgICAgICAgICAgICAgICAgICAgLy/nuqzluqZcclxuICAgICAgICAgICAgaWNvblBhdGg6ICcuLi8uLi9pbWFnZXMvY3gucG5nJywgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgd2lkdGg6IDI3LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1LFxyXG4gICAgICAgICAgICBjYWxsb3V0OiB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogaXRlbS5wdE5hbWU/aXRlbS5wdE5hbWU6J+acquWhq+aKpScsXHJcbiAgICAgICAgICAgICAgY29sb3I6ICcjMDAwJyxcclxuICAgICAgICAgICAgICBmb250U2l6ZTogMTgsXHJcbiAgICAgICAgICAgICAgYmdDb2xvcjogJyNGRkYnLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDUsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI0NDQycsXHJcbiAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ0JZQ0xJQ0snXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9sZElkOiBpdGVtLmlkLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Y6f5aeLSURcclxuICAgICAgICAgICAgdGl0bGU6IGl0ZW0ucHROYW1lP2l0ZW0ucHROYW1lOifmnKrloavmiqUnLCAgICAgICAgICAgICAgICAgIC8v5qCH6aKYXHJcbiAgICAgICAgICAgIGltZ0FycjogaXRlbS5wdFBpY3MsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WbvueJh+aVsOe7hFxyXG4gICAgICAgICAgICBwcm92aW5jZU5hbWU6IGl0ZW0ucHJvdmluY2VOYW1lP2l0ZW0ucHJvdmluY2VOYW1lOicnLCAgICAgLy/nnIFcclxuICAgICAgICAgICAgY2l0eU5hbWU6IGl0ZW0uY2l0eU5hbWU/aXRlbS5jaXR5TmFtZTonJywgICAgICAgICAgICAgICAgIC8v5biCXHJcbiAgICAgICAgICAgIGRpc3RyaWN0TmFtZTogaXRlbS5kaXN0cmljdE5hbWU/aXRlbS5kaXN0cmljdE5hbWU6JycsICAgICAvL+WMulxyXG4gICAgICAgICAgICBhZGRyZXNzOiBpdGVtLmN4QWRkcmVzcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/or6bnu4blnLDlnYBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZih0aGlzLmRhdGEudG90YWwgPT0gMCl7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBtYXJrZXJzOiBuZXdNYXJrZXJzTGlzdCwgICAgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgdG90YWw6IHJlcy50b3RhbCwgICAgICAgICAgICAgICAgICAgICAgIC8v5oC75pWwXHJcbiAgICAgICAgICAgIG11bUxpc3Q6IG5ld01hcmtlcnNMaXN0LCAgICAgICAgICAgICAgICAvL+WIl+ihqFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIG1hcmtlcnM6IHRoaXMuZGF0YS5tYXJrZXJzLmNvbmNhdChuZXdNYXJrZXJzTGlzdCksICAgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgbXVtTGlzdDogdGhpcy5kYXRhLm11bUxpc3QuY29uY2F0KG5ld01hcmtlcnNMaXN0KSwgICAgICAgICAgICAgICAgLy/liJfooahcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuZGF0YS5tdW1MaXN0Lmxlbmd0aCA8IHJlcy50b3RhbCl7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBtb3JlU2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgbW9yZVRpdGxlOiAn54K55Ye75Yqg6L295pu05aSaJyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBtb3JlU2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgbW9yZVRpdGxlOiAn5bey5Yqg6L295YWo6YOoJyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBnZXRDeVBybygpOnZvaWR7ICAgICAgICAgICAgICAgLy825om+5Yib5Lia5bmz5Y+w57uf6K6hXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBwdFRpdGxlOiAn5Yib5Lia5bmz5Y+wJywgICAgICAgIC8v5p+l6K+i5Lmm57GN5qCH6aKYXHJcbiAgICAgIG1vcmVTaG93OiBmYWxzZSxcclxuICAgIH0pXHJcbiAgICBodHRwcy5yZXF1ZXN0KGFwaS5jeVBsYXRVc2VyLCB7XHJcbiAgICAgIHRlbmFudElkOiBhcGkuYXJlYUlkLCAgICAgICAgICAgICAvL+WcsOWMumlkXHJcbiAgICAgIGtleTogdGhpcy5kYXRhLnNlYXJjaEtleSwgICAgICAgICAvL+WFs+mUruWtl+aQnOe0olxyXG4gICAgICBwYWdlU2l6ZTogdGhpcy5kYXRhLnBhZ2VTaXplLCAgICAgLy/mr4/pobXmmL7npLrmlbDph49cclxuICAgICAgcGFnZUluZGV4OiB0aGlzLmRhdGEucGFnZUluZGV4LCAgIC8v6aG15pWwXHJcbiAgICAgIHR5cGVJZDogdGhpcy5kYXRhLnB0VHlwZUlkLCAgICAgICAvL+W5s+WPsOexu+Wei2lkXHJcbiAgICAgIHppWmhpOiB0aGlzLmRhdGEucHRaaVpoaSwgICAgICAgICAvL+W5s+WPsOi1hOi0qGlkXHJcbiAgICAgIGN5VHlwZUlkOiB0aGlzLmRhdGEucHRDeVR5cGVJZCwgICAvL+S6p+S4mmlkXHJcbiAgICAgIGh5VHlwZUlkOiB0aGlzLmRhdGEucHRIeVR5cGVJZCAgICAvL+ihjOS4mmlkXHJcbiAgICB9LCAnR0VUJykudGhlbigocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICBpZihyZXMpe1xyXG4gICAgICAgIGxldCBuZXdNYXJrZXJzTGlzdDphbnkgPSByZXMubGlzdC5tYXAoKGl0ZW06YW55LCBpbmRleDpudW1iZXIpOmFueT0+e1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGluZGV4LCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9tYXDnlKjnmoToh6rlrprkuYlJRFxyXG4gICAgICAgICAgICBuYW1lOiAn5Yib5LiaJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+ivpuaDheWIpOaWrVxyXG4gICAgICAgICAgICBsb25naXR1ZGU6IGl0ZW0ubG5nLCAgICAgICAgICAgICAgICAgICAgICAgICAvL+e7j+W6plxyXG4gICAgICAgICAgICBsYXRpdHVkZTogaXRlbS5sYXQsICAgICAgICAgICAgICAgICAgICAgICAgICAvL+e6rOW6plxyXG4gICAgICAgICAgICBpY29uUGF0aDogJy4uLy4uL2ltYWdlcy9jeS5wbmcnLCAgICAgICAgICAgICAvL+agh+iusFxyXG4gICAgICAgICAgICB3aWR0aDogMjcsXHJcbiAgICAgICAgICAgIGhlaWdodDogMzUsXHJcbiAgICAgICAgICAgIGNhbGxvdXQ6IHtcclxuICAgICAgICAgICAgICBjb250ZW50OiBpdGVtLmN5TmFtZT9pdGVtLmN5TmFtZTon5pyq5aGr5oqlJyxcclxuICAgICAgICAgICAgICBjb2xvcjogJyMwMDAnLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAxOCxcclxuICAgICAgICAgICAgICBiZ0NvbG9yOiAnI0ZGRicsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNSxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXHJcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjQ0NDJyxcclxuICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnQllDTElDSydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb2xkSWQ6IGl0ZW0uaWQsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/ljp/lp4tJRFxyXG4gICAgICAgICAgICB0aXRsZTogaXRlbS5jeU5hbWU/aXRlbS5jeU5hbWU6J+acquWhq+aKpScsICAgICAgICAgICAgICAgICAgLy/moIfpophcclxuICAgICAgICAgICAgaW1nQXJyOiBpdGVtLnBpY0ZpbGVzLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Zu+54mH5pWw57uEXHJcbiAgICAgICAgICAgIHByb3ZpbmNlTmFtZTogaXRlbS5wcm92aW5jZU5hbWU/aXRlbS5wcm92aW5jZU5hbWU6JycsICAgICAvL+ecgVxyXG4gICAgICAgICAgICBjaXR5TmFtZTogaXRlbS5jaXR5TmFtZT9pdGVtLmNpdHlOYW1lOicnLCAgICAgICAgICAgICAgICAgLy/luIJcclxuICAgICAgICAgICAgZGlzdHJpY3ROYW1lOiBpdGVtLmRpc3RyaWN0TmFtZT9pdGVtLmRpc3RyaWN0TmFtZTonJywgICAgIC8v5Yy6XHJcbiAgICAgICAgICAgIGFkZHJlc3M6IGl0ZW0uY3lBZGRyZXNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+ivpue7huWcsOWdgFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYodGhpcy5kYXRhLnRvdGFsID09IDApe1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgbWFya2VyczogbmV3TWFya2Vyc0xpc3QsICAgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgdG90YWw6IHJlcy50b3RhbCwgICAgICAgICAgICAgICAgICAvL+aAu+aVsFxyXG4gICAgICAgICAgICBtdW1MaXN0OiBuZXdNYXJrZXJzTGlzdCwgICAgICAgICAgICAgICAgLy/liJfooahcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBtYXJrZXJzOiB0aGlzLmRhdGEubWFya2Vycy5jb25jYXQobmV3TWFya2Vyc0xpc3QpLCAgICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIG11bUxpc3Q6IHRoaXMuZGF0YS5tdW1MaXN0LmNvbmNhdChuZXdNYXJrZXJzTGlzdCksICAgICAgICAgICAgICAgIC8v5YiX6KGoXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZih0aGlzLmRhdGEubXVtTGlzdC5sZW5ndGggPCByZXMudG90YWwpe1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgbW9yZVNob3c6IHRydWUsXHJcbiAgICAgICAgICAgIG1vcmVUaXRsZTogJ+eCueWHu+WKoOi9veabtOWkmicsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgbW9yZVNob3c6IHRydWUsXHJcbiAgICAgICAgICAgIG1vcmVUaXRsZTogJ+W3suWKoOi9veWFqOmDqCcsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgcHRCdG5Ub2dnbGUoZTphbnkpOnZvaWR7ICAvL+WFqOmDqOaMiemSrueKtuaAgeWIh+aNolxyXG4gICAgaWYoZS50YXJnZXQuZGF0YXNldC5udW0gPT0gMSl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7ICAvL+WFqOmDqFxyXG4gICAgICAgIGZsYWc6ICdhbGxQdCcsICAgICAgICAgICAgIC8v5b2T5YmN5YiX6KGoXHJcbiAgICAgICAgcHRCdG5DbGFzczogZS50YXJnZXQuZGF0YXNldC5udW0sXHJcbiAgICAgICAgcHRCdG5TaG93OiBmYWxzZSwgICAgICAgICAgLy/pq5jnuqfmkJzntKJcclxuICAgICAgICBwYWdlU2l6ZTogMTAsICAgICAgICAgICAgIC8v5q+P6aG15pi+56S65pWw6YePXHJcbiAgICAgICAgcGFnZUluZGV4OiAxLCAgICAgICAgICAgICAvL+W9k+WJjemhtVxyXG4gICAgICAgIHRvdGFsOiAwLCAgICAgICAgICAgICAgICAgLy/mgLvmnaHmlbBcclxuICAgICAgICBtYXJrZXJzOiBbXSwgICAgICAgICAgICAgIC8v5qCH6K6w5oC75pWwXHJcbiAgICAgICAgbnVtOiAwLCAgICAgICAgICAgICAgICAgICAvLzbmib7nu5PmnpxcclxuICAgICAgICBtdW1MaXN0OiBbXSwgICAgICAgICAgICAgIC8vNuaJvuWIl+ihqFxyXG4gICAgICAgIHNlYXJjaEtleTogJycsICAgICAgICAgICAgLy/lhbPplK7lrZfmkJzntKJcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5nZXRBbGxQcm8oKTsgICAgICAgICAgICAgLy825om+5YWo6YOo5bmz5Y+w57uf6K6hXHJcbiAgICB9ZWxzZSBpZihlLnRhcmdldC5kYXRhc2V0Lm51bSA9PSAyKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBmbGFnOiAnY3hQdCcsICAgICAgICAgICAgIC8v5b2T5YmN5YiX6KGoXHJcbiAgICAgICAgcHRCdG5DbGFzczogZS50YXJnZXQuZGF0YXNldC5udW0sXHJcbiAgICAgICAgcHRCdG5TaG93OiB0cnVlLCAgICAgICAgICAgLy/pq5jnuqfmkJzntKJcclxuICAgICAgICBwdFR5cGVDbGFzczogbnVsbCxcclxuICAgICAgICBwdFR5cGVJZDogJycsXHJcbiAgICAgICAgcHRaaVpoaUNsYXNzOiBudWxsLFxyXG4gICAgICAgIHB0WmlaaGk6ICcnLFxyXG4gICAgICAgIHB0SW5kZXg6IDAsICAgICAgICAgICAgICAgICAvL+W9k+WJjee0ouW8lVxyXG4gICAgICAgIHB0SW5kdXN0cnlJZDogbnVsbCwgICAgICAgICAvL+mAieS4reeahGlkXHJcbiAgICAgICAgcHRDeVR5cGVJZDogJycsICAgICAgICAgICAgIC8v5Lqn5LiaaWRcclxuICAgICAgICBwdEh5VHlwZUlkOiAnJywgICAgICAgICAgICAgLy/ooYzkuJppZFxyXG5cclxuICAgICAgICBwYWdlU2l6ZTogMTAsICAgICAgICAgICAgIC8v5q+P6aG15pi+56S65pWw6YePXHJcbiAgICAgICAgcGFnZUluZGV4OiAxLCAgICAgICAgICAgICAvL+W9k+WJjemhtVxyXG4gICAgICAgIHRvdGFsOiAwLCAgICAgICAgICAgICAgICAgLy/mgLvmnaHmlbBcclxuICAgICAgICBtYXJrZXJzOiBbXSwgICAgICAgICAgICAgIC8v5qCH6K6w5oC75pWwXHJcbiAgICAgICAgbnVtOiAwLCAgICAgICAgICAgICAgICAgICAvLzbmib7nu5PmnpxcclxuICAgICAgICBtdW1MaXN0OiBbXSwgICAgICAgICAgICAgIC8vNuaJvuWIl+ihqFxyXG4gICAgICAgIHNlYXJjaEtleTogJycsICAgICAgICAgICAgLy/lhbPplK7lrZfmkJzntKJcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5nZXRDeFBybygpOyAgICAgICAgICAgICAvLzbmib7liJvmlrDlubPlj7Dnu5/orqFcclxuICAgICAgdGhpcy5wdEN4VHlwZXMoKTsgICAgICAgICAgICAvL+WIm+aWsOW5s+WPsOexu+Wei1xyXG4gICAgICB0aGlzLmluZHVzdHJ5KCk7ICAgICAgICAgICAgIC8v5Lqn5Lia44CB6KGM5LiaXHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjcHRUeXBlJykudG9nZ2xlKGZhbHNlKTsgICAgICAgICAvL+W5s+WPsOexu+Wei+WxleW8gOWFs+mXreeKtuaAgVxyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI3B0WmlaaGknKS50b2dnbGUoZmFsc2UpOyAgICAgICAgLy/lubPlj7DotYTotKjlsZXlvIDlhbPpl63nirbmgIFcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyNwdEluZHVzdHJ5JykudG9nZ2xlKGZhbHNlKTsgICAgIC8v5Lqn5Lia44CB6KGM5Lia5bGV5byA5YWz6Zet54q25oCBXHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBmbGFnOiAnY3lQdCcsICAgICAgICAgICAgICAvL+W9k+WJjeWIl+ihqFxyXG4gICAgICAgIHB0QnRuQ2xhc3M6IGUudGFyZ2V0LmRhdGFzZXQubnVtLFxyXG4gICAgICAgIHB0QnRuU2hvdzogdHJ1ZSwgICAgICAgICAgIC8v6auY57qn5pCc57SiXHJcbiAgICAgICAgcHRUeXBlQ2xhc3M6IG51bGwsXHJcbiAgICAgICAgcHRUeXBlSWQ6ICcnLFxyXG4gICAgICAgIHB0WmlaaGlDbGFzczogbnVsbCxcclxuICAgICAgICBwdFppWmhpOiAnJyxcclxuICAgICAgICBwdEluZGV4OiAwLCAgICAgICAgICAgICAgICAgLy/lvZPliY3ntKLlvJVcclxuICAgICAgICBwdEluZHVzdHJ5SWQ6IG51bGwsICAgICAgICAgLy/pgInkuK3nmoRpZFxyXG4gICAgICAgIHB0Q3lUeXBlSWQ6ICcnLCAgICAgICAgICAgICAvL+S6p+S4mmlkXHJcbiAgICAgICAgcHRIeVR5cGVJZDogJycsICAgICAgICAgICAgIC8v6KGM5LiaaWRcclxuXHJcbiAgICAgICAgcGFnZVNpemU6IDEwLCAgICAgICAgICAgICAvL+avj+mhteaYvuekuuaVsOmHj1xyXG4gICAgICAgIHBhZ2VJbmRleDogMSwgICAgICAgICAgICAgLy/lvZPliY3pobVcclxuICAgICAgICB0b3RhbDogMCwgICAgICAgICAgICAgICAgIC8v5oC75p2h5pWwXHJcbiAgICAgICAgbWFya2VyczogW10sICAgICAgICAgICAgICAvL+agh+iusOaAu+aVsFxyXG4gICAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgLy825om+57uT5p6cXHJcbiAgICAgICAgbXVtTGlzdDogW10sICAgICAgICAgICAgICAvLzbmib7liJfooahcclxuICAgICAgICBzZWFyY2hLZXk6ICcnLCAgICAgICAgICAgIC8v5YWz6ZSu5a2X5pCc57SiXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuZ2V0Q3lQcm8oKTsgICAgICAgICAgICAgLy825om+5Yib5Lia5bmz5Y+w57uf6K6hXHJcbiAgICAgIHRoaXMucHRUeXBlcygpOyAgICAgICAgICAgICAgLy/nsbvlnotcclxuICAgICAgdGhpcy5pbmR1c3RyeSgpOyAgICAgICAgICAgICAvL+S6p+S4muOAgeihjOS4mlxyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI3B0VHlwZScpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAgLy/lubPlj7DnsbvlnovlsZXlvIDlhbPpl63nirbmgIFcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyNwdFppWmhpJykudG9nZ2xlKGZhbHNlKTsgICAgICAgIC8v5bmz5Y+w6LWE6LSo5bGV5byA5YWz6Zet54q25oCBXHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjcHRJbmR1c3RyeScpLnRvZ2dsZShmYWxzZSk7ICAgICAvL+S6p+S4muOAgeihjOS4muWxleW8gOWFs+mXreeKtuaAgVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgcHROYXZJdGVtKGRhdGE6YW55KTp2b2lkeyAgICAgICAvL+ihjOS4muS6p+S4mu+8iOW3puS+p+WvvOiIqueCueWHu+aXtu+8jOinpuWPkeeahOS6i+S7tu+8iVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgcHRJbmRleDogZGF0YS5kZXRhaWwuaW5kZXggfHwgMCxcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgcHRJbmR1c3RyeUl0ZW0oZGF0YTphbnkpOnZvaWQgeyAgLy/ooYzkuJrkuqfkuJrvvIjlj7PkvqfpgInmi6npobnooqvngrnlh7vml7bvvIzkvJrop6blj5HnmoTkuovku7bvvIlcclxuICAgIGNvbnN0IGlkID0gdGhpcy5kYXRhLnB0SW5kdXN0cnlJZCA9PT0gZGF0YS5kZXRhaWwuaWQgPyBudWxsIDogZGF0YS5kZXRhaWwuaWQ7XHJcbiAgICBjb25zdCBwSWQgPSBkYXRhLmRldGFpbC5wSWQ7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBwdEluZHVzdHJ5SWQ6IGlkLFxyXG4gICAgICBwdEN5VHlwZUlkOiAgcElkID8gcElkIDogJycsICAgICAgICAgIC8v5Lqn5LiaaWRcclxuICAgICAgcHRIeVR5cGVJZDogIGlkID09IHBJZCA/ICcnIDogaWQsICAgICAvL+ihjOS4mmlkXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIHB0VHlwZUZuKGU6YW55KTp2b2lkeyAgLy/lubPlj7Dnsbvlnovop6blj5FcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHB0VHlwZUNsYXNzOiBlLnRhcmdldC5kYXRhc2V0LmlkLFxyXG4gICAgICBwdFR5cGVJZDogZS50YXJnZXQuZGF0YXNldC5pZFxyXG4gICAgfSlcclxuICB9LFxyXG4gIHB0WmlaaGlGbihlOmFueSk6dm9pZHsgIC8v5bmz5Y+w6LWE6LSo6Kem5Y+RXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBwdFppWmhpQ2xhc3M6IGUudGFyZ2V0LmRhdGFzZXQuaWQsXHJcbiAgICAgIHB0WmlaaGk6IGUudGFyZ2V0LmRhdGFzZXQudGl0bGVcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgcHRSZXNldChlOmFueSk6dm9pZHsgIC8v6YeN572uXHJcbiAgICBsZXQgZmxhZzpudW1iZXIgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5mbGFnO1xyXG4gICAgaWYoZmxhZyA9PSAxKXsgIC8v5bmz5Y+w57G75Z6LXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgcHRUeXBlQ2xhc3M6IG51bGwsXHJcbiAgICAgICAgcHRUeXBlSWQ6ICcnLFxyXG4gICAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgIC8vNuaJvuWIl+ihqFxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI3B0VHlwZScpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAgLy/lubPlj7DnsbvlnovlhbPpl61cclxuICAgIH1lbHNlIGlmKGZsYWcgPT0gMil7ICAvL+W5s+WPsOi1hOi0qFxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHB0WmlaaGlDbGFzczogbnVsbCxcclxuICAgICAgICBwdFppWmhpOiAnJyxcclxuICAgICAgICBudW06IDAsICAgICAgICAgICAgICAgICAgICAvLzbmib7nu5PmnpxcclxuICAgICAgICBtdW1MaXN0OiBbXSwgICAgICAgICAgICAgICAvLzbmib7liJfooahcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyNwdFppWmhpJykudG9nZ2xlKGZhbHNlKTsgICAgICAgIC8v5bmz5Y+w6LWE6LSo5YWz6ZetXHJcbiAgICB9ZWxzZXsgIC8v5Lqn5Lia44CB6KGM5LiaXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgcHRJbmRleDogMCwgICAgICAgICAgICAgICAgIC8v5b2T5YmN57Si5byVXHJcbiAgICAgICAgcHRJbmR1c3RyeUlkOiBudWxsLCAgICAgICAgIC8v6YCJ5Lit55qEaWRcclxuICAgICAgICBwdEN5VHlwZUlkOiAnJywgICAgICAgICAgICAgLy/kuqfkuJppZFxyXG4gICAgICAgIHB0SHlUeXBlSWQ6ICcnLCAgICAgICAgICAgICAgIC8v6KGM5LiaaWRcclxuICAgICAgICBudW06IDAsICAgICAgICAgICAgICAgICAgICAvLzbmib7nu5PmnpxcclxuICAgICAgICBtdW1MaXN0OiBbXSwgICAgICAgICAgICAgICAvLzbmib7liJfooahcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyNwdEluZHVzdHJ5JykudG9nZ2xlKGZhbHNlKTsgICAgIC8v5Lqn5Lia44CB6KGM5Lia5YWz6ZetXHJcbiAgICB9XHJcbiAgICBpZih0aGlzLmRhdGEuZmxhZyA9PSAnY3hQdCcpe1xyXG4gICAgICB0aGlzLmdldEN4UHJvKCk7ICAgICAgICAgICAgIC8vNuaJvuWIm+aWsOW5s+WPsOe7n+iuoVxyXG4gICAgfVxyXG4gICAgaWYodGhpcy5kYXRhLmZsYWcgPT0gJ2N5UHQnKXtcclxuICAgICAgdGhpcy5nZXRDeVBybygpOyAgICAgICAgICAgICAvLzbmib7liJvkuJrlubPlj7Dnu5/orqFcclxuICAgIH1cclxuICB9LFxyXG4gIHB0U3VibWl0KGU6YW55KTp2b2lkeyAgLy/lrozmiJBcclxuICAgIGxldCBmbGFnOm51bWJlciA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmZsYWc7XHJcbiAgICBpZihmbGFnID09IDEpe1xyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI3B0VHlwZScpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAgLy/lubPlj7DnsbvlnovlsZXlvIDlhbPpl63nirbmgIFcclxuICAgIH1lbHNlIGlmKGZsYWcgPT0gMil7XHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjcHRaaVpoaScpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAgLy/lubPlj7DotYTotKjlsZXlvIDlhbPpl63nirbmgIFcclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI3B0SW5kdXN0cnknKS50b2dnbGUoZmFsc2UpOyAgICAgLy/kuqfkuJrjgIHooYzkuJrlsZXlvIDlhbPpl63nirbmgIFcclxuICAgIH1cclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICBtdW1MaXN0OiBbXSwgICAgICAgICAgICAgICAvLzbmib7liJfooahcclxuICAgICAgbWFya2VyczpbXSwgICAgICAgICAgICAgICAvL+agh+iusOeCueWkhOeQhuWQjueahOaVsOaNru+8iGlk44CB5p+l6K+i5L2/55So77yJXHJcbiAgICAgIHBhZ2VTaXplOiAxMCwgICAgICAgICAgICAgLy/mr4/pobXmmL7npLrmlbDph49cclxuICAgICAgcGFnZUluZGV4OiAxLCAgICAgICAgICAgICAvL+W9k+WJjemhtVxyXG4gICAgICB0b3RhbDogMCwgICAgICAgICAgICAgICAgIC8v5oC75p2h5pWwXHJcbiAgICB9KVxyXG4gICAgaWYodGhpcy5kYXRhLmZsYWcgPT0gJ2N4UHQnKXtcclxuICAgICAgdGhpcy5nZXRDeFBybygpOyAgICAgICAgICAgICAvLzbmib7liJvmlrDlubPlj7Dnu5/orqFcclxuICAgIH1cclxuICAgIGlmKHRoaXMuZGF0YS5mbGFnID09ICdjeVB0Jyl7XHJcbiAgICAgIHRoaXMuZ2V0Q3lQcm8oKTsgICAgICAgICAgICAgLy825om+5Yib5Lia5bmz5Y+w57uf6K6hXHJcbiAgICB9XHJcbiAgICBcclxuICB9LFxyXG5cclxuXHJcbiAgLy/mib7mlL/nrZbvvIjlpJbpk77vvIlcclxuICB6Y0ZuKCk6dm9pZHsgXHJcbiAgICB3eC5uYXZpZ2F0ZVRvTWluaVByb2dyYW0oe1xyXG4gICAgICBhcHBJZDogJ3d4ZjQwODNhNWY4MzY1YTMwYScsXHJcbiAgICAgIHBhdGg6ICcnLFxyXG4gICAgICBzdWNjZXNzKCkge1xyXG4gICAgICAgIC8vIOaJk+W8gOaIkOWKn1xyXG4gICAgICAgIC8vIHd4LnN3aXRjaFRhYih7XHJcbiAgICAgICAgLy8gICB1cmw6ICcvcGFnZXMvaW5kZXgvaW5kZXgnXHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuXHJcbiAgLy/mib7pobnnm65cclxuICB4bUZuKCk6dm9pZHsgIC8v5om+6aG555uuXHJcbiAgICB0aGlzLmhpZGVGbigpOyAgICAgICAgICAgICAvL+mcgOimgemakOiXj+eahOWFg+e0oFxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgZmxhZzogJ3htJywgICAgICAgICAgICAgICAgLy/lvZPliY3liJfooahcclxuXHJcbiAgICAgIHhtSW5kZXg6IDAsICAgICAgICAgICAgICAgICAvL+W9k+WJjee0ouW8lVxyXG4gICAgICB4bUluZHVzdHJ5SWQ6IG51bGwsICAgICAgICAgLy/pgInkuK3nmoRpZFxyXG5cclxuICAgICAgeG1TdGFnZUNsYXNzOiBudWxsLCAgICAgICAgICAvL+mYtuauteaMiemSrueKtuaAgeWIh+aNolxyXG4gICAgICB4bUNhdGVnb3J5Q2xhc3M6IG51bGwsICAgICAgIC8v57G75Yir5oyJ6ZKu54q25oCB5YiH5o2iXHJcbiAgICAgIHhtRmluYW5jaW5nQ2xhc3M6IG51bGwsICAgICAgLy/ph5Hpop3mjInpkq7nirbmgIHliIfmjaJcclxuICAgICAgeG1TdGFnZUlkOiAnJywgICAgICAgICAgICAgICAvL+aJgOWkhOmYtuautVxyXG4gICAgICB4bVR5cGVJZDogJycsICAgICAgICAgICAgICAgIC8v6ZyA5rGC57G75YirXHJcbiAgICAgIHhtVHpNb25leTogJycsICAgICAgICAgICAgICAgLy/ono3otYTph5Hpop1cclxuICAgICAgeG1DeVR5cGVJZDogJycsICAgICAgICAgICAgICAvL+S6p+S4mmlkXHJcbiAgICAgIHhtSHlUeXBlSWQ6ICcnLCAgICAgICAgICAgICAgLy/ooYzkuJppZFxyXG5cclxuICAgICAgaXNTZWFyY2hTaG93OiB0cnVlLCAgICAgICAgLy/mkJzntKLnu5PmnpzmlbDmja5cclxuICAgICAgcHJvU2VhcmNoSW5mb1Nob3c6IHRydWUsICAgLy/pobnnm67pq5jnuqfmkJzntKJcclxuICAgIH0pXHJcbiAgICB0aGlzLmdldFByb0xpc3QoKTsgICAgICAgICAgIC8vNuaJvumhueebrue7n+iuoVxyXG4gICAgdGhpcy54bVN0YWdlKCk7ICAgICAgICAgICAgICAvL+aJgOWkhOmYtuautVxyXG4gICAgdGhpcy54bUNhdGVnb3J5KCk7ICAgICAgICAgICAvL+mcgOaxguexu+WIq1xyXG4gICAgdGhpcy54bUZpbmFuY2luZygpOyAgICAgICAgICAvL+iejei1hOmHkeminVxyXG4gICAgdGhpcy5pbmR1c3RyeSgpOyAgICAgICAgICAgICAvL+S6p+S4muOAgeihjOS4mlxyXG4gIH0sXHJcbiAgZ2V0UHJvTGlzdCgpOnZvaWR7ICAgICAgICAgICAgICAgLy825om+6aG555uu57uf6K6hXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBwdFRpdGxlOiAn6aG555uuJywgICAgICAgIC8v5p+l6K+i5Lmm57GN5qCH6aKYXHJcbiAgICAgIG1vcmVTaG93OiBmYWxzZSxcclxuICAgIH0pXHJcbiAgICBodHRwcy5yZXF1ZXN0KGFwaS5maW5kUHJvLCB7XHJcbiAgICAgIHRlbmFudElkOiBhcGkuYXJlYUlkLCAgICAgICAgICAgICAgICAgLy/lnLDljLppZFxyXG4gICAgICBrZXk6IHRoaXMuZGF0YS5zZWFyY2hLZXksICAgICAgICAgICAgIC8v5YWz6ZSu5a2X5pCc57SiXHJcbiAgICAgIHBhZ2VTaXplOiB0aGlzLmRhdGEucGFnZVNpemUsICAgICAgICAgLy/mr4/pobXmmL7npLrmlbDph49cclxuICAgICAgcGFnZUluZGV4OiB0aGlzLmRhdGEucGFnZUluZGV4LCAgICAgICAvL+mhteaVsFxyXG4gICAgICBjdXJTdGFnZTogdGhpcy5kYXRhLnhtU3RhZ2VJZCwgICAgIC8v5omA5aSE6Zi25q61XHJcbiAgICAgIG5lZWRUeXBlczogdGhpcy5kYXRhLnhtVHlwZUlkLCAgICAgICAgLy/pnIDmsYLnsbvliKtcclxuICAgICAgcnpNb25leTogdGhpcy5kYXRhLnhtVHpNb25leSwgICAgICAgICAvL+iejei1hOmHkeminVxyXG4gICAgICBjeVR5cGVJZDogdGhpcy5kYXRhLnhtQ3lUeXBlSWQsICAgICAgIC8v5Lqn5LiaaWRcclxuICAgICAgaHlUeXBlSWQ6IHRoaXMuZGF0YS54bUh5VHlwZUlkICAgICAgICAvL+ihjOS4mmlkXHJcbiAgICB9LCAnR0VUJykudGhlbigocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICBpZihyZXMpe1xyXG4gICAgICAgIGxldCBuZXdNYXJrZXJzTGlzdDphbnkgPSByZXMubGlzdC5tYXAoKGl0ZW06YW55LCBpbmRleDpudW1iZXIpOmFueT0+e1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGluZGV4LCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9tYXDnlKjnmoToh6rlrprkuYlJRFxyXG4gICAgICAgICAgICBuYW1lOiAn6aG555uuJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6K+m5oOF5Yik5patXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZTogaXRlbS5sbmcsICAgICAgICAgICAgICAgICAgICAgICAgIC8v57uP5bqmXHJcbiAgICAgICAgICAgIGxhdGl0dWRlOiBpdGVtLmxhdCwgICAgICAgICAgICAgICAgICAgICAgICAgIC8v57qs5bqmXHJcbiAgICAgICAgICAgIGljb25QYXRoOiAnLi4vLi4vaW1hZ2VzL3htLnBuZycsICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIHdpZHRoOiAyNyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNSxcclxuICAgICAgICAgICAgY2FsbG91dDoge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IGl0ZW0ucHJvTmFtZT9pdGVtLnByb05hbWU6J+acquWhq+aKpScsXHJcbiAgICAgICAgICAgICAgY29sb3I6ICcjMDAwJyxcclxuICAgICAgICAgICAgICBmb250U2l6ZTogMTgsXHJcbiAgICAgICAgICAgICAgYmdDb2xvcjogJyNGRkYnLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDUsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI0NDQycsXHJcbiAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ0JZQ0xJQ0snXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9sZElkOiBpdGVtLmlkLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Y6f5aeLSURcclxuICAgICAgICAgICAgdGl0bGU6IGl0ZW0ucHJvTmFtZT9pdGVtLnByb05hbWU6J+acquWhq+aKpScsICAgICAgICAgICAgICAgLy/moIfpophcclxuICAgICAgICAgICAgaW1nQXJyOiBpdGVtLnBpY3R1cmVGaWxlcywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lm77niYfmlbDnu4RcclxuICAgICAgICAgICAgcHJvdmluY2VOYW1lOiBpdGVtLnByb3ZpbmNlTmFtZT9pdGVtLnByb3ZpbmNlTmFtZTonJywgICAgLy/nnIFcclxuICAgICAgICAgICAgY2l0eU5hbWU6IGl0ZW0uY2l0eU5hbWU/aXRlbS5jaXR5TmFtZTonJywgICAgICAgICAgICAgICAgLy/luIJcclxuICAgICAgICAgICAgZGlzdHJpY3ROYW1lOiBpdGVtLmRpc3RyaWN0TmFtZT9pdGVtLmRpc3RyaWN0TmFtZTonJywgICAgLy/ljLpcclxuICAgICAgICAgICAgYWRkcmVzczogaXRlbS5hZGRyZXNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/or6bnu4blnLDlnYBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmKHRoaXMuZGF0YS50b3RhbCA9PSAwKXtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIG1hcmtlcnM6IG5ld01hcmtlcnNMaXN0LCAgICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIHRvdGFsOiByZXMudG90YWwsICAgICAgICAgICAgICAgICAgICAgIC8v5oC75pWwXHJcbiAgICAgICAgICAgIG11bUxpc3Q6IG5ld01hcmtlcnNMaXN0LCAgICAgICAgICAgICAgICAvL+WIl+ihqFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIG1hcmtlcnM6IHRoaXMuZGF0YS5tYXJrZXJzLmNvbmNhdChuZXdNYXJrZXJzTGlzdCksICAgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgbXVtTGlzdDogdGhpcy5kYXRhLm11bUxpc3QuY29uY2F0KG5ld01hcmtlcnNMaXN0KSwgICAgICAgICAgICAgICAgLy/liJfooahcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMuZGF0YS5tdW1MaXN0Lmxlbmd0aCA8IHJlcy50b3RhbCl7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBtb3JlU2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgbW9yZVRpdGxlOiAn54K55Ye75Yqg6L295pu05aSaJyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBtb3JlU2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgbW9yZVRpdGxlOiAn5bey5Yqg6L295YWo6YOoJyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICB4bVN0YWdlRm4oZTphbnkpOnZvaWR7ICAvL+aJgOWkhOmYtuauteinpuWPkVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgeG1TdGFnZUNsYXNzOiBlLnRhcmdldC5kYXRhc2V0LmlkLFxyXG4gICAgICB4bVN0YWdlSWQ6IGUudGFyZ2V0LmRhdGFzZXQuaWRcclxuICAgIH0pXHJcbiAgfSxcclxuICB4bUNhdGVnb3J5Rm4oZTphbnkpOnZvaWR7ICAvL+mcgOaxguexu+WIq+inpuWPkVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgeG1DYXRlZ29yeUNsYXNzOiBlLnRhcmdldC5kYXRhc2V0LmlkLFxyXG4gICAgICB4bVR5cGVJZDogZS50YXJnZXQuZGF0YXNldC5pZFxyXG4gICAgfSlcclxuICB9LFxyXG4gIHhtRmluYW5jaW5nRm4oZTphbnkpOnZvaWR7ICAvL+iejei1hOmHkemineinpuWPkVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgeG1GaW5hbmNpbmdDbGFzczogZS50YXJnZXQuZGF0YXNldC5pZCxcclxuICAgICAgeG1Uek1vbmV5OiBlLnRhcmdldC5kYXRhc2V0LmlkXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgeG1SZXNldChlOmFueSk6dm9pZHsgIC8v6aG555uu6YeN572uXHJcbiAgICBsZXQgZmxhZzpudW1iZXIgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5mbGFnO1xyXG4gICAgaWYoZmxhZyA9PSAxKXsgIC8v5omA5aSE6Zi25q61XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgeG1TdGFnZUNsYXNzOiBudWxsLFxyXG4gICAgICAgIHhtU3RhZ2VJZDogJycsXHJcbiAgICAgICAgbnVtOiAwLCAgICAgICAgICAgICAgICAgICAgLy825om+57uT5p6cXHJcbiAgICAgICAgbXVtTGlzdDogW10sICAgICAgICAgICAgICAgLy825om+5YiX6KGoXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjeG1TdGFnZScpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAgLy/miYDlpITpmLbmrrXlhbPpl61cclxuICAgIH1lbHNlIGlmKGZsYWcgPT0gMil7ICAvL+mcgOaxguexu+WIq1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHhtQ2F0ZWdvcnlDbGFzczogbnVsbCxcclxuICAgICAgICB4bVR5cGVJZDogJycsXHJcbiAgICAgICAgbnVtOiAwLCAgICAgICAgICAgICAgICAgICAgLy825om+57uT5p6cXHJcbiAgICAgICAgbXVtTGlzdDogW10sICAgICAgICAgICAgICAgLy825om+5YiX6KGoXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjeG1DYXRlZ29yeScpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAvL+mcgOaxguexu+WIq+WFs+mXrVxyXG4gICAgfWVsc2UgaWYoZmxhZyA9PSAzKXsgIC8v6J6N6LWE6YeR6aKdXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgeG1GaW5hbmNpbmdDbGFzczogbnVsbCxcclxuICAgICAgICB4bVR6TW9uZXk6ICcnLFxyXG4gICAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgIC8vNuaJvuWIl+ihqFxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI3htRmluYW5jaW5nJykudG9nZ2xlKGZhbHNlKTsgICAgICAgIC8v5bmz5Y+w6LWE6LSo5YWz6ZetXHJcbiAgICB9ZWxzZXsgIC8v5Lqn5Lia44CB6KGM5LiaXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgeG1JbmRleDogMCwgICAgICAgICAgICAgICAgIC8v5b2T5YmN57Si5byVXHJcbiAgICAgICAgeG1JbmR1c3RyeUlkOiBudWxsLCAgICAgICAgIC8v6YCJ5Lit55qEaWRcclxuICAgICAgICB4bUN5VHlwZUlkOiAnJywgICAgICAgICAgICAgLy/kuqfkuJppZFxyXG4gICAgICAgIHhtSHlUeXBlSWQ6ICcnLCAgICAgICAgICAgICAvL+ihjOS4mmlkXHJcbiAgICAgICAgbnVtOiAwLCAgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgICAvLzbmib7liJfooahcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyN4bUluZHVzdHJ5JykudG9nZ2xlKGZhbHNlKTsgICAgIC8v5Lqn5Lia44CB6KGM5Lia5YWz6ZetXHJcbiAgICB9XHJcbiAgICB0aGlzLmdldFByb0xpc3QoKTsgICAgICAgICAgICAgLy825om+6aG555uu57uf6K6hXHJcbiAgfSxcclxuICB4bVN1Ym1pdChlOmFueSk6dm9pZHsgIC8v6aG555uu5a6M5oiQXHJcbiAgICBsZXQgZmxhZzpudW1iZXIgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5mbGFnO1xyXG4gICAgaWYoZmxhZyA9PSAxKXtcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyN4bVN0YWdlJykudG9nZ2xlKGZhbHNlKTsgICAgICAgICAvL+aJgOWkhOmYtuauteWFs+mXrVxyXG4gICAgfWVsc2UgaWYoZmxhZyA9PSAyKXtcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyN4bUNhdGVnb3J5JykudG9nZ2xlKGZhbHNlKTsgICAgICAgIC8v6ZyA5rGC57G75Yir5YWz6ZetXHJcbiAgICB9ZWxzZSBpZihmbGFnID09IDMpe1xyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI3htRmluYW5jaW5nJykudG9nZ2xlKGZhbHNlKTsgICAgICAgIC8v5bmz5Y+w6LWE6LSo5YWz6ZetXHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyN4bUluZHVzdHJ5JykudG9nZ2xlKGZhbHNlKTsgICAgIC8v5Lqn5Lia44CB6KGM5Lia5YWz6ZetXHJcbiAgICB9XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBudW06IDAsICAgICAgICAgICAgICAgICAgICAvLzbmib7nu5PmnpxcclxuICAgICAgbXVtTGlzdDogW10sICAgICAgICAgICAgICAgLy825om+5YiX6KGoXHJcbiAgICAgIG1hcmtlcnM6W10sICAgICAgICAgICAgICAgLy/moIforrDngrnlpITnkIblkI7nmoTmlbDmja7vvIhpZOOAgeafpeivouS9v+eUqO+8iVxyXG4gICAgICBwYWdlU2l6ZTogMTAsICAgICAgICAgICAgIC8v5q+P6aG15pi+56S65pWw6YePXHJcbiAgICAgIHBhZ2VJbmRleDogMSwgICAgICAgICAgICAgLy/lvZPliY3pobVcclxuICAgICAgdG90YWw6IDAsICAgICAgICAgICAgICAgICAvL+aAu+adoeaVsFxyXG4gICAgfSlcclxuICAgIHRoaXMuZ2V0UHJvTGlzdCgpOyAgICAgICAgICAgICAvLzbmib7pobnnm67nu5/orqFcclxuICB9LFxyXG4gIHhtTmF2SXRlbShkYXRhOmFueSk6dm9pZHsgIC8v6KGM5Lia5Lqn5Lia77yI5bem5L6n5a+86Iiq54K55Ye75pe277yM6Kem5Y+R55qE5LqL5Lu277yJXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICB4bUluZGV4OiBkYXRhLmRldGFpbC5pbmRleCB8fCAwLFxyXG4gICAgfSk7XHJcbiAgfSxcclxuICB4bUluZHVzdHJ5SXRlbShkYXRhOmFueSk6dm9pZCB7ICAvL+ihjOS4muS6p+S4mu+8iOWPs+S+p+mAieaLqemhueiiq+eCueWHu+aXtu+8jOS8muinpuWPkeeahOS6i+S7tu+8iVxyXG4gICAgY29uc3QgaWQgPSB0aGlzLmRhdGEueG1JbmR1c3RyeUlkID09PSBkYXRhLmRldGFpbC5pZCA/IG51bGwgOiBkYXRhLmRldGFpbC5pZDtcclxuICAgIGNvbnN0IHBJZCA9IGRhdGEuZGV0YWlsLnBJZDtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHhtSW5kdXN0cnlJZDogaWQsXHJcbiAgICAgIHhtQ3lUeXBlSWQ6IHBJZCA/IHBJZCA6ICcnLCAgICAgICAgICAvL+S6p+S4mmlkXHJcbiAgICAgIHhtSHlUeXBlSWQ6IGlkID09IHBJZCA/ICcnIDogaWQsICAgICAvL+ihjOS4mmlkXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG5cclxuXHJcbiAgLy/mib7lnLrlnLBcclxuICBjZEZuKCk6dm9pZHsgIC8v5om+5Zy65ZywXHJcbiAgICB0aGlzLmhpZGVGbigpOyAgICAgICAgICAgICAgIC8v6ZyA6KaB6ZqQ6JeP55qE5YWD57SgXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBmbGFnOiAnY2QnLCAgICAgICAgICAgICAgICAgIC8v5b2T5YmN5YiX6KGoXHJcblxyXG4gICAgICBjZEluZGV4OiAwLCAgICAgICAgICAgICAgICAgLy/lvZPliY3ntKLlvJVcclxuICAgICAgY2RJbmR1c3RyeUlkOiBudWxsLCAgICAgICAgIC8v6YCJ5Lit55qEaWRcclxuICBcclxuICAgICAgY2RUeXBlQ2xhc3M6IG51bGwsICAgICAgICAgIC8v6LWE5rqQ57G75Z6LXHJcbiAgICAgIGNkVXNlckNsYXNzOiBudWxsLCAgICAgICAgICAvL+WcuuWcsOeUqOmAlFxyXG5cclxuICAgICAgY2RUeXBlSWQ6ICcnLCAgICAgICAgICAgICAgIC8v6L295L2T56m66Ze057G75Z6LXHJcbiAgICAgIGNkQ2h1WnVJZDogJycsICAgICAgICAgICAgICAvL+aYr+WQpuWHuuenn1xyXG4gICAgICBjZFNhbGVJZDogJycsICAgICAgICAgICAgICAgLy/mmK/lkKblh7rllK5cclxuICAgICAgY2RDeVR5cGVJZDogJycsICAgICAgICAgICAgIC8v5Lqn5LiaaWRcclxuICAgICAgY2RIeVR5cGVJZDogJycsICAgICAgICAgICAgIC8v6KGM5LiaaWRcclxuXHJcbiAgICAgIGlzU2VhcmNoU2hvdzogdHJ1ZSwgICAgICAgICAgLy/mkJzntKLnu5PmnpzmlbDmja5cclxuICAgICAgY2RTZWFyY2hJbmZvU2hvdzogdHJ1ZSwgICAgICAvL+WcuuWcsOmrmOe6p+aQnOe0olxyXG4gICAgfSlcclxuICAgIHRoaXMuZ2V0U2l0ZUxpc3QoKTsgICAgICAgICAgICAvLzbmib7lnLrlnLDnu5/orqFcclxuXHJcbiAgICB0aGlzLmNkQ2FycmllcigpOyAgICAgICAgICAgICAgLy/otYTmupDnsbvlnotcclxuICAgIHRoaXMuaW5kdXN0cnkoKTsgICAgICAgICAgICAgICAvL+S6p+S4muOAgeihjOS4mlxyXG4gIH0sXHJcbiAgZ2V0U2l0ZUxpc3QoKTp2b2lkeyAgICAgICAgICAgICAgIC8vNuaJvuWcuuWcsOe7n+iuoVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgcHRUaXRsZTogJ+WcuuWcsCcsICAgICAgICAgICAgICAvL+afpeivouagh+mimFxyXG4gICAgICBtb3JlU2hvdzogZmFsc2UsXHJcbiAgICB9KVxyXG4gICAgaHR0cHMucmVxdWVzdChhcGkuY3lQbGF0Zm9ybSwge1xyXG4gICAgICB0ZW5hbnRJZDogYXBpLmFyZWFJZCwgICAgICAgICAgICAgICAgIC8v5Zyw5Yy6aWRcclxuICAgICAga2V5OiB0aGlzLmRhdGEuc2VhcmNoS2V5LCAgICAgICAgICAgICAvL+WFs+mUruWtl+aQnOe0olxyXG4gICAgICBwYWdlU2l6ZTogdGhpcy5kYXRhLnBhZ2VTaXplLCAgICAgICAgIC8v5q+P6aG15pi+56S65pWw6YePXHJcbiAgICAgIHBhZ2VJbmRleDogdGhpcy5kYXRhLnBhZ2VJbmRleCwgICAgICAgLy/pobXmlbBcclxuICAgICAgenRUeXBlSWQ6IHRoaXMuZGF0YS5jZFR5cGVJZCwgICAgICAgICAvL+i9veS9k+epuumXtOexu+Wei1xyXG4gICAgICBpc0NodVp1OiB0aGlzLmRhdGEuY2RDaHVadUlkLCAgICAgICAgICAvL+aYr+WQpuWHuuenn1xyXG4gICAgICBpc1NhbGU6IHRoaXMuZGF0YS5jZFNhbGVJZCwgICAgICAgICAgIC8v5piv5ZCm5Ye65ZSuXHJcbiAgICAgIGN5VHlwZUlkOiB0aGlzLmRhdGEuY2RDeVR5cGVJZCwgICAgICAgLy/kuqfkuJppZFxyXG4gICAgICBoeVR5cGVJZDogdGhpcy5kYXRhLmNkSHlUeXBlSWQgICAgICAgIC8v6KGM5LiaaWRcclxuICAgIH0sICdHRVQnKS50aGVuKChyZXM6YW55KTp2b2lkPT57XHJcbiAgICAgIGlmKHJlcyl7XHJcbiAgICAgICAgbGV0IG5ld01hcmtlcnNMaXN0OmFueSA9IHJlcy5saXN0Lm1hcCgoaXRlbTphbnksIGluZGV4Om51bWJlcik6YW55PT57XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogaW5kZXgsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL21hcOeUqOeahOiHquWumuS5iUlEXHJcbiAgICAgICAgICAgIG5hbWU6ICflnLrlnLAnLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/or6bmg4XliKTmlq1cclxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBpdGVtLmxuZywgICAgICAgICAgICAgICAgICAgICAgICAgLy/nu4/luqZcclxuICAgICAgICAgICAgbGF0aXR1ZGU6IGl0ZW0ubGF0LCAgICAgICAgICAgICAgICAgICAgICAgICAgLy/nuqzluqZcclxuICAgICAgICAgICAgaWNvblBhdGg6ICcuLi8uLi9pbWFnZXMvY2QucG5nJywgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgd2lkdGg6IDI3LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1LFxyXG4gICAgICAgICAgICBjYWxsb3V0OiB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogaXRlbS5jeXp0TmFtZT9pdGVtLmN5enROYW1lOifmnKrloavmiqUnLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IDE4LFxyXG4gICAgICAgICAgICAgIGJnQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1LFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNDQ0MnLFxyXG4gICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdCWUNMSUNLJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbGRJZDogaXRlbS5pZCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WOn+Wni0lEXHJcbiAgICAgICAgICAgIHRpdGxlOiBpdGVtLmN5enROYW1lP2l0ZW0uY3l6dE5hbWU6J+acquWhq+aKpScsICAgICAgICAgICAgICAvL+agh+mimFxyXG4gICAgICAgICAgICBpbWdBcnI6IGl0ZW0ucGljRmlsZXMsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WbvueJh+aVsOe7hFxyXG4gICAgICAgICAgICBwcm92aW5jZU5hbWU6IGl0ZW0ucHJvdmluY2VOYW1lP2l0ZW0ucHJvdmluY2VOYW1lOicnLCAgICAvL+ecgVxyXG4gICAgICAgICAgICBjaXR5TmFtZTogaXRlbS5jaXR5TmFtZT9pdGVtLmNpdHlOYW1lOicnLCAgICAgICAgICAgICAgICAvL+W4glxyXG4gICAgICAgICAgICBkaXN0cmljdE5hbWU6IGl0ZW0uZGlzdHJpY3ROYW1lP2l0ZW0uZGlzdHJpY3ROYW1lOicnLCAgICAvL+WMulxyXG4gICAgICAgICAgICBhZGRyZXNzOiBpdGVtLmN5enRBZGRyZXNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+ivpue7huWcsOWdgFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYodGhpcy5kYXRhLnRvdGFsID09IDApe1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgbWFya2VyczogbmV3TWFya2Vyc0xpc3QsICAgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgdG90YWw6IHJlcy50b3RhbCwgICAgICAgICAgICAgICAgICAgICAgLy/mgLvmlbBcclxuICAgICAgICAgICAgbXVtTGlzdDogbmV3TWFya2Vyc0xpc3QsICAgICAgICAgICAgICAgIC8v5YiX6KGoXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgbWFya2VyczogdGhpcy5kYXRhLm1hcmtlcnMuY29uY2F0KG5ld01hcmtlcnNMaXN0KSwgICAgICAgICAgICAgICAvL+agh+iusFxyXG4gICAgICAgICAgICBtdW1MaXN0OiB0aGlzLmRhdGEubXVtTGlzdC5jb25jYXQobmV3TWFya2Vyc0xpc3QpLCAgICAgICAgICAgICAgICAvL+WIl+ihqFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5kYXRhLm11bUxpc3QubGVuZ3RoIDwgcmVzLnRvdGFsKXtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIG1vcmVTaG93OiB0cnVlLFxyXG4gICAgICAgICAgICBtb3JlVGl0bGU6ICfngrnlh7vliqDovb3mm7TlpJonLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIG1vcmVTaG93OiB0cnVlLFxyXG4gICAgICAgICAgICBtb3JlVGl0bGU6ICflt7LliqDovb3lhajpg6gnLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIGNkVHlwZUZuKGU6YW55KTp2b2lkeyAgLy/otYTmupDnsbvlnovop6blj5FcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGNkVHlwZUNsYXNzOiBlLnRhcmdldC5kYXRhc2V0LmlkLFxyXG4gICAgICBjZFR5cGVJZDogZS50YXJnZXQuZGF0YXNldC5pZFxyXG4gICAgfSlcclxuICB9LFxyXG4gIGNkVXNlRm4oZTphbnkpOnZvaWR7ICAvL+WcuuWcsOeUqOmAlOinpuWPkVxyXG4gICAgbGV0IGlkOmFueSA9IGUudGFyZ2V0LmRhdGFzZXQuaWQ7XHJcbiAgICBpZihpZCA9PSAxKXsgIC8v5Ye656efXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgY2RVc2VyQ2xhc3M6IGlkLFxyXG4gICAgICAgIGNkQ2h1WnVJZDogJzEnLCAgICAgICAgLy/lh7rnp59cclxuICAgICAgICBjZFNhbGVJZDogJycsICAgICAgICAgIC8v5Ye65ZSuXHJcbiAgICAgIH0pXHJcbiAgICB9ZWxzZXsgIC8v5Ye65ZSuXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgY2RVc2VyQ2xhc3M6IGlkLFxyXG4gICAgICAgIGNkQ2h1WnVJZDogJycsICAgICAgICAgLy/lh7rnp59cclxuICAgICAgICBjZFNhbGVJZDogJzEnLCAgICAgICAgIC8v5Ye65ZSuXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICBjZE5hdkl0ZW0oZGF0YTphbnkpOnZvaWR7ICAgICAgIC8v6KGM5Lia5Lqn5Lia77yI5bem5L6n5a+86Iiq54K55Ye75pe277yM6Kem5Y+R55qE5LqL5Lu277yJXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBjZEluZGV4OiBkYXRhLmRldGFpbC5pbmRleCB8fCAwLFxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBjZEluZHVzdHJ5SXRlbShkYXRhOmFueSk6dm9pZCB7ICAvL+ihjOS4muS6p+S4mu+8iOWPs+S+p+mAieaLqemhueiiq+eCueWHu+aXtu+8jOS8muinpuWPkeeahOS6i+S7tu+8iVxyXG4gICAgY29uc3QgaWQgPSB0aGlzLmRhdGEuY2RJbmR1c3RyeUlkID09PSBkYXRhLmRldGFpbC5pZCA/IG51bGwgOiBkYXRhLmRldGFpbC5pZDtcclxuICAgIGNvbnN0IHBJZCA9IGRhdGEuZGV0YWlsLnBJZDtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGNkSW5kdXN0cnlJZDogaWQsXHJcbiAgICAgIGNkQ3lUeXBlSWQ6IHBJZCA/IHBJZCA6ICcnLCAgICAgICAgICAvL+S6p+S4mmlkXHJcbiAgICAgIGNkSHlUeXBlSWQ6IGlkID09IHBJZCA/ICcnIDogaWQsICAgICAvL+ihjOS4mmlkXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgY2RSZXNldChlOmFueSk6dm9pZHsgIC8v5om+5Zy65Zyw6YeN572uXHJcbiAgICBsZXQgZmxhZzpudW1iZXIgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5mbGFnO1xyXG4gICAgaWYoZmxhZyA9PSAxKXsgIC8v6LWE5rqQ57G75Z6LXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgY2RUeXBlQ2xhc3M6IG51bGwsXHJcbiAgICAgICAgY2RUeXBlSWQ6ICcnLFxyXG4gICAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgIC8vNuaJvuWIl+ihqFxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI2NkVHlwZScpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAgLy/otYTmupDnsbvlnovlhbPpl61cclxuICAgIH1lbHNlIGlmKGZsYWcgPT0gMil7ICAvL+WcuuWcsOeUqOmAlFxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGNkVXNlckNsYXNzOiBudWxsLFxyXG4gICAgICAgIGNkQ2h1WnVJZDogJycsICAgICAgICAgICAgIC8v5Ye656efXHJcbiAgICAgICAgY2RTYWxlSWQ6ICcnLCAgICAgICAgICAgICAgLy/lh7rllK5cclxuICAgICAgICBudW06IDAsICAgICAgICAgICAgICAgICAgICAvLzbmib7nu5PmnpxcclxuICAgICAgICBtdW1MaXN0OiBbXSwgICAgICAgICAgICAgICAvLzbmib7liJfooahcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyNjZFVzZXInKS50b2dnbGUoZmFsc2UpOyAgICAgICAgLy/lnLrlnLDnlKjpgJTlhbPpl61cclxuICAgIH1lbHNleyAgLy/kuqfkuJrjgIHooYzkuJpcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBjZEluZGV4OiAwLCAgICAgICAgICAgICAgICAgLy/lvZPliY3ntKLlvJVcclxuICAgICAgICBjZEluZHVzdHJ5SWQ6IG51bGwsICAgICAgICAgLy/pgInkuK3nmoRpZFxyXG4gICAgICAgIGNkQ3lUeXBlSWQ6ICcnLCAgICAgICAgICAgICAvL+S6p+S4mmlkXHJcbiAgICAgICAgY2RIeVR5cGVJZDogJycsICAgICAgICAgICAgIC8v6KGM5LiaaWRcclxuICAgICAgICBudW06IDAsICAgICAgICAgICAgICAgICAgICAvLzbmib7nu5PmnpxcclxuICAgICAgICBtdW1MaXN0OiBbXSwgICAgICAgICAgICAgICAvLzbmib7liJfooahcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyNjZEluZHVzdHJ5JykudG9nZ2xlKGZhbHNlKTsgICAgIC8v5Lqn5Lia44CB6KGM5Lia5YWz6ZetXHJcbiAgICB9XHJcbiAgICB0aGlzLmdldFNpdGVMaXN0KCk7ICAgICAgICAgICAgLy825om+5Zy65Zyw57uf6K6hXHJcbiAgfSxcclxuICBjZFN1Ym1pdChlOmFueSk6dm9pZHsgIC8v5om+5Zy65Zyw5a6M5oiQXHJcbiAgICBsZXQgZmxhZzpudW1iZXIgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5mbGFnO1xyXG4gICAgaWYoZmxhZyA9PSAxKXtcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyNjZFR5cGUnKS50b2dnbGUoZmFsc2UpOyAgICAgICAgIC8v6LWE5rqQ57G75Z6L5bGV5byA5YWz6Zet54q25oCBXHJcbiAgICB9ZWxzZSBpZihmbGFnID09IDIpe1xyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI2NkVXNlcicpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAgLy/lnLrlnLDnlKjpgJTlsZXlvIDlhbPpl63nirbmgIFcclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI2NkSW5kdXN0cnknKS50b2dnbGUoZmFsc2UpOyAgICAgLy/kuqfkuJrjgIHooYzkuJrlsZXlvIDlhbPpl63nirbmgIFcclxuICAgIH1cclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICBtdW1MaXN0OiBbXSwgICAgICAgICAgICAgICAvLzbmib7liJfooahcclxuICAgICAgbWFya2VyczpbXSwgICAgICAgICAgICAgICAvL+agh+iusOeCueWkhOeQhuWQjueahOaVsOaNru+8iGlk44CB5p+l6K+i5L2/55So77yJXHJcbiAgICAgIHBhZ2VTaXplOiAxMCwgICAgICAgICAgICAgLy/mr4/pobXmmL7npLrmlbDph49cclxuICAgICAgcGFnZUluZGV4OiAxLCAgICAgICAgICAgICAvL+W9k+WJjemhtVxyXG4gICAgICB0b3RhbDogMCwgICAgICAgICAgICAgICAgIC8v5oC75p2h5pWwXHJcbiAgICB9KVxyXG4gICAgdGhpcy5nZXRTaXRlTGlzdCgpOyAgICAgICAgICAgIC8vNuaJvuWcuuWcsOe7n+iuoVxyXG4gIH0sXHJcblxyXG5cclxuICAvL+aJvuacjeWKoVxyXG4gIGZ3Rm4oKTp2b2lke1xyXG4gICAgdGhpcy5oaWRlRm4oKTsgICAgICAgICAgICAgICAvL+mcgOimgemakOiXj+eahOWFg+e0oFxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgZmxhZzogJ2Z3JywgICAgICAgICAgICAgICAgIC8v5b2T5YmN5YiX6KGoXHJcblxyXG4gICAgICBmd0NhdGVnb3J5SW5kZXg6IDAsICAgICAgICAgLy/lvZPliY3ntKLlvJXvvIjmnI3liqHnsbvliKvvvIlcclxuICAgICAgZndDYXRlZ29yeUlkOiBudWxsLCAgICAgICAgIC8v6YCJ5Lit55qEaWTvvIjmnI3liqHnsbvliKvvvIlcclxuICAgICAgZndJbmR1c3RyeUluZGV4OiAwLCAgICAgICAgIC8v5b2T5YmN57Si5byV77yI6KGM5Lia5Lqn5Lia77yJXHJcbiAgICAgIGZ3SW5kdXN0cnlJZDogbnVsbCwgICAgICAgICAvL+mAieS4reeahGlk77yI6KGM5Lia5Lqn5Lia77yJXHJcblxyXG4gICAgICBmd1R5cGVDbGFzczogbnVsbCwgICAgICAgICAgLy/ljZXkvY3nsbvlnotcclxuICAgICAgZndTY2FsZUNsYXNzOiBudWxsLCAgICAgICAgIC8v5Y2V5L2N6KeE5qihXHJcblxyXG4gICAgICBmd1R5cGVPbmVJZDogJycsICAgICAgICAgICAgLy/mnI3liqHnsbvliKvkuIDnuqfoj5zljZVcclxuICAgICAgZndUeXBlVHdvSWQ6ICcnLCAgICAgICAgICAgIC8v5pyN5Yqh57G75Yir5LqM57qn6I+c5Y2VXHJcbiAgICAgIGZ3RHdTdGF0dXNJZDogJycsICAgICAgICAgICAvL+WNleS9jeexu+Wei2lkXHJcbiAgICAgIGZ3RHdTY2FsZUlkOiAnJywgICAgICAgICAgICAvL+WNleS9jeinhOaooWlkXHJcbiAgICAgIGZ3Q3lUeXBlSWQ6ICcnLCAgICAgICAgICAgICAvL+S6p+S4mmlkXHJcbiAgICAgIGZ3SHlUeXBlSWQ6ICcnLCAgICAgICAgICAgICAvL+ihjOS4mmlkXHJcblxyXG4gICAgICBpc1NlYXJjaFNob3c6IHRydWUsICAgICAgICAvL+aQnOe0oue7k+aenOaVsOaNrlxyXG4gICAgICBmd1NlYXJjaEluZm9TaG93OiB0cnVlLCAgICAvL+acjeWKoemrmOe6p+aQnOe0olxyXG4gICAgfSlcclxuICAgIHRoaXMuZ2V0U2VydmljZUxpc3QoKTsgICAgICAgLy825om+5pyN5Yqh57uf6K6hXHJcbiAgICB0aGlzLmZ3Q2F0ZWdvcnkoKTsgICAgICAgICAgIC8v5pyN5Yqh57G75YirXHJcbiAgICB0aGlzLmZ3VHlwZSgpOyAgICAgICAgICAgICAgIC8v5Y2V5L2N57G75Z6LXHJcbiAgICB0aGlzLmZ3U2NhbGUoKTsgICAgICAgICAgICAgIC8v5Y2V5L2N6KeE5qihXHJcbiAgICB0aGlzLmluZHVzdHJ5KCk7ICAgICAgICAgICAgIC8v5Lqn5Lia44CB6KGM5LiaXHJcbiAgfSxcclxuICBnZXRTZXJ2aWNlTGlzdCgpOnZvaWR7ICAgICAgICAgLy825om+5pyN5Yqh57uf6K6hXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBwdFRpdGxlOiAn5pyN5Yqh5py65p6EJywgICAgICAgIC8v5p+l6K+i5qCH6aKYXHJcbiAgICAgIG1vcmVTaG93OiBmYWxzZSxcclxuICAgIH0pXHJcbiAgICBodHRwcy5yZXF1ZXN0KGFwaS5maW5kRncsIHtcclxuICAgICAgdGVuYW50SWQ6IGFwaS5hcmVhSWQsICAgICAgICAgICAgICAgICAvL+WcsOWMumlkXHJcbiAgICAgIGtleTogdGhpcy5kYXRhLnNlYXJjaEtleSwgICAgICAgICAgICAgLy/lhbPplK7lrZfmkJzntKJcclxuICAgICAgcGFnZVNpemU6IHRoaXMuZGF0YS5wYWdlU2l6ZSwgICAgICAgICAvL+avj+mhteaYvuekuuaVsOmHj1xyXG4gICAgICBwYWdlSW5kZXg6IHRoaXMuZGF0YS5wYWdlSW5kZXgsICAgICAgIC8v6aG15pWwXHJcbiAgICAgIHR5cGVPbmVJZDogdGhpcy5kYXRhLmZ3VHlwZU9uZUlkLCAgICAgLy/mnI3liqHnsbvliKvkuIDnuqfoj5zljZVcclxuICAgICAgdHlwZVR3b0lkOiB0aGlzLmRhdGEuZndUeXBlVHdvSWQsICAgICAvL+acjeWKoeexu+WIq+S6jOe6p+iPnOWNlVxyXG4gICAgICBxeU5hdHVyZUlkOiB0aGlzLmRhdGEuZndEd1N0YXR1c0lkLCAgIC8v5Y2V5L2N57G75Z6LaWRcclxuICAgICAgZHdTY2FsZUlkOiB0aGlzLmRhdGEuZndEd1NjYWxlSWQsICAgICAvL+WNleS9jeinhOaooWlkXHJcbiAgICAgIGN5VHlwZUlkOiB0aGlzLmRhdGEuZndDeVR5cGVJZCwgICAgICAgLy/kuqfkuJppZFxyXG4gICAgICBoeVR5cGVJZDogdGhpcy5kYXRhLmZ3SHlUeXBlSWQgICAgICAgIC8v6KGM5LiaaWRcclxuICAgIH0sICdHRVQnKS50aGVuKChyZXM6YW55KTp2b2lkPT57XHJcbiAgICAgIGlmKHJlcyl7XHJcbiAgICAgICAgbGV0IG5ld01hcmtlcnNMaXN0OmFueSA9IHJlcy5saXN0Lm1hcCgoaXRlbTphbnksIGluZGV4Om51bWJlcik6YW55PT57XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogaW5kZXgsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL21hcOeUqOeahOiHquWumuS5iUlEXHJcbiAgICAgICAgICAgIG5hbWU6ICfmnI3liqEnLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/or6bmg4XliKTmlq1cclxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBpdGVtLmxuZywgICAgICAgICAgICAgICAgICAgICAgICAgLy/nu4/luqZcclxuICAgICAgICAgICAgbGF0aXR1ZGU6IGl0ZW0ubGF0LCAgICAgICAgICAgICAgICAgICAgICAgICAgLy/nuqzluqZcclxuICAgICAgICAgICAgaWNvblBhdGg6ICcuLi8uLi9pbWFnZXMvZncucG5nJywgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgd2lkdGg6IDI3LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1LFxyXG4gICAgICAgICAgICBjYWxsb3V0OiB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogaXRlbS5xeU5hbWU/aXRlbS5xeU5hbWU6J+acquWhq+aKpScsXHJcbiAgICAgICAgICAgICAgY29sb3I6ICcjMDAwJyxcclxuICAgICAgICAgICAgICBmb250U2l6ZTogMTgsXHJcbiAgICAgICAgICAgICAgYmdDb2xvcjogJyNGRkYnLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDUsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI0NDQycsXHJcbiAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ0JZQ0xJQ0snXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9sZElkOiBpdGVtLmlkLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Y6f5aeLSURcclxuICAgICAgICAgICAgdGl0bGU6IGl0ZW0ucXlOYW1lP2l0ZW0ucXlOYW1lOifmnKrloavmiqUnLCAgICAgICAgICAgICAgICAgIC8v5qCH6aKYXHJcbiAgICAgICAgICAgIGltZ0FycjogaXRlbS5md2pnUGljcywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WbvueJh+aVsOe7hFxyXG4gICAgICAgICAgICBwcm92aW5jZU5hbWU6IGl0ZW0ucHJvdmluY2VOYW1lP2l0ZW0ucHJvdmluY2VOYW1lOicnLCAgICAgLy/nnIFcclxuICAgICAgICAgICAgY2l0eU5hbWU6IGl0ZW0uY2l0eU5hbWU/aXRlbS5jaXR5TmFtZTonJywgICAgICAgICAgICAgICAgIC8v5biCXHJcbiAgICAgICAgICAgIGRpc3RyaWN0TmFtZTogaXRlbS5kaXN0cmljdE5hbWU/aXRlbS5kaXN0cmljdE5hbWU6JycsICAgICAvL+WMulxyXG4gICAgICAgICAgICBhZGRyZXNzOiBpdGVtLmZ3QWRkcmVzcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/or6bnu4blnLDlnYBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmKHRoaXMuZGF0YS50b3RhbCA9PSAwKXtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIG1hcmtlcnM6IG5ld01hcmtlcnNMaXN0LCAgICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIHRvdGFsOiByZXMudG90YWwsICAgICAgICAgICAgICAgICAgICAgIC8v5oC75pWwXHJcbiAgICAgICAgICAgIG11bUxpc3Q6IG5ld01hcmtlcnNMaXN0LCAgICAgICAgICAgICAgICAvL+WIl+ihqFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIG1hcmtlcnM6IHRoaXMuZGF0YS5tYXJrZXJzLmNvbmNhdChuZXdNYXJrZXJzTGlzdCksICAgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgbXVtTGlzdDogdGhpcy5kYXRhLm11bUxpc3QuY29uY2F0KG5ld01hcmtlcnNMaXN0KSwgICAgICAgICAgICAgICAgLy/liJfooahcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMuZGF0YS5tdW1MaXN0Lmxlbmd0aCA8IHJlcy50b3RhbCl7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBtb3JlU2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgbW9yZVRpdGxlOiAn54K55Ye75Yqg6L295pu05aSaJyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBtb3JlU2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgbW9yZVRpdGxlOiAn5bey5Yqg6L295YWo6YOoJyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBmd0NhdGVnb3J5TmF2SXRlbShkYXRhOmFueSk6dm9pZHsgICAgICAgLy/mnI3liqHnsbvliKvvvIjlt6bkvqflr7zoiKrngrnlh7vml7bvvIzop6blj5HnmoTkuovku7bvvIlcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGZ3Q2F0ZWdvcnlJbmRleDogZGF0YS5kZXRhaWwuaW5kZXggfHwgMCxcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgZndDYXRlZ29yeUl0ZW0oZGF0YTphbnkpOnZvaWQgeyAgLy/mnI3liqHnsbvliKvvvIjlt6bkvqflr7zoiKrngrnlh7vml7bvvIzop6blj5HnmoTkuovku7bvvIlcclxuICAgIGNvbnN0IGlkID0gdGhpcy5kYXRhLmZ3Q2F0ZWdvcnlJZCA9PT0gZGF0YS5kZXRhaWwuaWQgPyBudWxsIDogZGF0YS5kZXRhaWwuaWQ7XHJcbiAgICBjb25zdCBwSWQgPSBkYXRhLmRldGFpbC5wSWQ7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBmd0NhdGVnb3J5SWQ6IGlkLFxyXG4gICAgICBmd1R5cGVPbmVJZDogcElkID8gcElkIDogJycsICAgICAgICAgICAgICAgLy/mnI3liqHnsbvliKvkuIDnuqfoj5zljZVcclxuICAgICAgZndUeXBlVHdvSWQ6IGlkID09IHBJZCA/ICcnIDogaWQsICAgICAgICAgICAvL+acjeWKoeexu+WIq+S6jOe6p+iPnOWNlSBcclxuICAgIH0pXHJcbiAgfSxcclxuICBmd1R5cGVGbihlOmFueSk6dm9pZHsgICAgLy/ljZXkvY3nsbvlnovop6blj5FcclxuICAgIGxldCBpZDphbnkgPSBlLnRhcmdldC5kYXRhc2V0LmlkO1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgZndUeXBlQ2xhc3M6IGlkLFxyXG4gICAgICBmd0R3U3RhdHVzSWQ6IGlkLCAgICAgICAgLy/ljZXkvY3nsbvlnotcclxuICAgIH0pXHJcbiAgfSxcclxuICBmd1NjYWxlRm4oZTphbnkpOnZvaWR7ICAgIC8v5Y2V5L2N6KeE5qih6Kem5Y+RXHJcbiAgICBsZXQgaWQ6YW55ID0gZS50YXJnZXQuZGF0YXNldC5pZDtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGZ3U2NhbGVDbGFzczogaWQsXHJcbiAgICAgIGZ3RHdTY2FsZUlkOiBpZCwgICAgICAgIC8v5Y2V5L2N6KeE5qihXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgZndOYXZJdGVtKGRhdGE6YW55KTp2b2lkeyAgICAgICAvL+aJvuacjeWKoeihjOS4muS6p+S4mu+8iOW3puS+p+WvvOiIqueCueWHu+aXtu+8jOinpuWPkeeahOS6i+S7tu+8iVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgZndJbmR1c3RyeUluZGV4OiBkYXRhLmRldGFpbC5pbmRleCB8fCAwLFxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBmd0luZHVzdHJ5SXRlbShkYXRhOmFueSk6dm9pZCB7ICAvL+aJvuacjeWKoeihjOS4muS6p+S4mu+8iOWPs+S+p+mAieaLqemhueiiq+eCueWHu+aXtu+8jOS8muinpuWPkeeahOS6i+S7tu+8iVxyXG4gICAgY29uc3QgaWQgPSB0aGlzLmRhdGEuZndJbmR1c3RyeUlkID09PSBkYXRhLmRldGFpbC5pZCA/IG51bGwgOiBkYXRhLmRldGFpbC5pZDtcclxuICAgIGNvbnN0IHBJZCA9IGRhdGEuZGV0YWlsLnBJZDtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGZ3SW5kdXN0cnlJZDogaWQsXHJcbiAgICAgIGZ3Q3lUeXBlSWQ6IHBJZCA/IHBJZCA6ICcnLCAgICAgICAgICAvL+S6p+S4mmlkXHJcbiAgICAgIGZ3SHlUeXBlSWQ6IGlkID09IHBJZCA/ICcnIDogaWQsICAgICAvL+ihjOS4mmlkXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgZndSZXNldChlOmFueSk6dm9pZHsgIC8v5om+5pyN5Yqh6YeN572uXHJcbiAgICBsZXQgZmxhZzpudW1iZXIgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5mbGFnO1xyXG4gICAgaWYoZmxhZyA9PSAxKXsgIC8v5pyN5Yqh57G75YirXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgZndDYXRlZ29yeUluZGV4OiAwLCAgICAgICAgIC8v5b2T5YmN57Si5byVXHJcbiAgICAgICAgZndDYXRlZ29yeUlkOiBudWxsLCAgICAgICAgIC8v6YCJ5Lit55qEaWRcclxuICAgICAgICBmd1R5cGVPbmVJZDogJycsICAgICAgICAgICAgLy/mnI3liqHnsbvliKvkuIDnuqfoj5zljZVcclxuICAgICAgICBmd1R5cGVUd29JZDogJycsICAgICAgICAgICAgLy/mnI3liqHnsbvliKvkuoznuqfoj5zljZVcclxuICAgICAgICBudW06IDAsICAgICAgICAgICAgICAgICAgICAgLy825om+57uT5p6cXHJcbiAgICAgICAgbXVtTGlzdDogW10sICAgICAgICAgICAgICAgIC8vNuaJvuWIl+ihqFxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI2Z3Q2F0ZWdvcnlJZCcpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAgLy/mnI3liqHnsbvliKvlhbPpl61cclxuICAgIH1lbHNlIGlmKGZsYWcgPT0gMil7ICAvL+WNleS9jeexu+Wei1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGZ3VHlwZUNsYXNzOiBudWxsLFxyXG4gICAgICAgIGZ3RHdTdGF0dXNJZDogJycsICAgICAgICAgIC8v5Y2V5L2N57G75Z6LXHJcbiAgICAgICAgbnVtOiAwLCAgICAgICAgICAgICAgICAgICAgLy825om+57uT5p6cXHJcbiAgICAgICAgbXVtTGlzdDogW10sICAgICAgICAgICAgICAgLy825om+5YiX6KGoXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjZndUeXBlSWQnKS50b2dnbGUoZmFsc2UpOyAgICAgICAgLy/ljZXkvY3nsbvlnovlhbPpl61cclxuICAgIH1lbHNlIGlmKGZsYWcgPT0gMyl7ICAvL+WNleS9jeinhOaooVxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGZ3U2NhbGVDbGFzczogbnVsbCxcclxuICAgICAgICBmd0R3U2NhbGVJZDogJycsICAgICAgICAgICAvL+WNleS9jeinhOaooVxyXG4gICAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgIC8vNuaJvuWIl+ihqFxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI2Z3U2NhbGVJZCcpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAvL+WNleS9jeinhOaooeWFs+mXrVxyXG4gICAgfWVsc2V7ICAvL+S6p+S4muOAgeihjOS4mlxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGZ3SW5kdXN0cnlJbmRleDogMCwgICAgICAgICAvL+W9k+WJjee0ouW8lVxyXG4gICAgICAgIGZ3SW5kdXN0cnlJZDogbnVsbCwgICAgICAgICAvL+mAieS4reeahGlkXHJcbiAgICAgICAgZndDeVR5cGVJZDogJycsICAgICAgICAgICAgIC8v5Lqn5LiaaWRcclxuICAgICAgICBmd0h5VHlwZUlkOiAnJywgICAgICAgICAgICAgLy/ooYzkuJppZFxyXG4gICAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgIC8vNuaJvuWIl+ihqFxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI2Z3SW5kdXN0cnlJZCcpLnRvZ2dsZShmYWxzZSk7ICAgICAvL+S6p+S4muOAgeihjOS4muWFs+mXrVxyXG4gICAgfVxyXG4gICAgdGhpcy5nZXRTZXJ2aWNlTGlzdCgpOyAgICAgICAgICAgIC8vNuaJvuacjeWKoVxyXG4gIH0sXHJcbiAgZndTdWJtaXQoZTphbnkpOnZvaWR7ICAvL+aJvuacjeWKoeWujOaIkFxyXG4gICAgbGV0IGZsYWc6bnVtYmVyID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuZmxhZztcclxuICAgIGlmKGZsYWcgPT0gMSl7XHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjZndDYXRlZ29yeUlkJykudG9nZ2xlKGZhbHNlKTsgICAgICAgICAvL+acjeWKoeexu+WIq+WFs+mXrVxyXG4gICAgfWVsc2UgaWYoZmxhZyA9PSAyKXtcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyNmd1R5cGVJZCcpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAvL+WNleS9jeexu+Wei+WFs+mXrVxyXG4gICAgfWVsc2UgaWYoZmxhZyA9PSAzKXtcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyNmd1NjYWxlSWQnKS50b2dnbGUoZmFsc2UpOyAgICAgICAgLy/ljZXkvY3op4TmqKHlhbPpl61cclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI2Z3SW5kdXN0cnlJZCcpLnRvZ2dsZShmYWxzZSk7ICAgICAvL+S6p+S4muOAgeihjOS4muWFs+mXrVxyXG4gICAgfVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgbnVtOiAwLCAgICAgICAgICAgICAgICAgICAgLy825om+57uT5p6cXHJcbiAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgIC8vNuaJvuWIl+ihqFxyXG4gICAgICBtYXJrZXJzOltdLCAgICAgICAgICAgICAgIC8v5qCH6K6w54K55aSE55CG5ZCO55qE5pWw5o2u77yIaWTjgIHmn6Xor6Lkvb/nlKjvvIlcclxuICAgICAgcGFnZVNpemU6IDEwLCAgICAgICAgICAgICAvL+avj+mhteaYvuekuuaVsOmHj1xyXG4gICAgICBwYWdlSW5kZXg6IDEsICAgICAgICAgICAgIC8v5b2T5YmN6aG1XHJcbiAgICAgIHRvdGFsOiAwLCAgICAgICAgICAgICAgICAgLy/mgLvmnaHmlbBcclxuICAgIH0pXHJcbiAgICB0aGlzLmdldFNlcnZpY2VMaXN0KCk7ICAgICAgIC8vNuaJvuacjeWKoee7n+iuoVxyXG4gIH0sXHJcblxyXG5cclxuXHJcblxyXG4gIC8v5om+6LWE6YeRXHJcbiAgempGbigpOnZvaWR7XHJcbiAgICB0aGlzLmhpZGVGbigpOyAgICAgICAgICAgICAgIC8v6ZyA6KaB6ZqQ6JeP55qE5YWD57SgXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBmbGFnOiAnemonLCAgICAgICAgICAgICAgICAvL+W9k+WJjeWIl+ihqFxyXG5cclxuICAgIC8v5om+6LWE6YeR77yI6YeR6J6N5pyN5Yqh77yJXHJcbiAgICBqclNlYXJjaEluZm9TaG93OiBmYWxzZSwgICAgLy/mmL7npLov6ZqQ6JePXHJcbiAgICBqckNhdGVnb3J5SW5kZXg6IDAsICAgICAgICAgLy/lvZPliY3ntKLlvJXvvIjmnI3liqHnsbvliKvvvIlcclxuICAgIGpyQ2F0ZWdvcnlJZDogbnVsbCwgICAgICAgICAvL+mAieS4reeahGlk77yI5pyN5Yqh57G75Yir77yJXHJcbiAgICBqckluZHVzdHJ5SW5kZXg6IDAsICAgICAgICAgLy/lvZPliY3ntKLlvJXvvIjooYzkuJrkuqfkuJrvvIlcclxuICAgIGpySW5kdXN0cnlJZDogbnVsbCwgICAgICAgICAvL+mAieS4reeahGlk77yI6KGM5Lia5Lqn5Lia77yJXHJcblxyXG4gICAganJUeXBlQ2xhc3M6IG51bGwsICAgICAgICAgIC8v5Y2V5L2N57G75Z6LXHJcbiAgICBqclNjYWxlQ2xhc3M6IG51bGwsICAgICAgICAgLy/ljZXkvY3op4TmqKFcclxuXHJcbiAgICBqclR5cGVPbmVJZDogJycsICAgICAgICAgICAgLy/mnI3liqHnsbvliKvkuIDnuqfoj5zljZVcclxuICAgIGpyVHlwZVR3b0lkOiAnJywgICAgICAgICAgICAvL+acjeWKoeexu+WIq+S6jOe6p+iPnOWNlVxyXG4gICAganJEd1N0YXR1c0lkOiAnJywgICAgICAgICAgIC8v5Y2V5L2N57G75Z6LaWRcclxuICAgIGpyRHdTY2FsZUlkOiAnJywgICAgICAgICAgICAvL+WNleS9jeinhOaooWlkXHJcbiAgICBqckN5VHlwZUlkOiAnJywgICAgICAgICAgICAgLy/kuqfkuJppZFxyXG4gICAganJIeVR5cGVJZDogJycsICAgICAgICAgICAgIC8v6KGM5LiaaWRcclxuXHJcbiAgICAvL+aJvui1hOmHke+8iOaKlei1hO+8iVxyXG4gICAgdHpTZWFyY2hJbmZvU2hvdzogZmFsc2UsICAgIC8v5pi+56S6L+makOiXj1xyXG4gICAgdHpJbmRleDogMCwgICAgICAgICAgICAgICAgIC8v5b2T5YmN57Si5byVXHJcbiAgICB0ekluZHVzdHJ5SWQ6IG51bGwsICAgICAgICAgLy/pgInkuK3nmoRpZFxyXG5cclxuICAgIHR6QXJlYUNsYXNzOiBudWxsLCAgICAgICAgICAvL+aKlei1hOWMuuWfn1xyXG4gICAgdHpXYXlDbGFzczogbnVsbCwgICAgICAgICAgIC8v5oqV6LWE5pa55byPXHJcbiAgICB0ek90aGVyQ2xhc3M6IG51bGwsICAgICAgICAgLy/mipXotYTph5Hpop1cclxuICAgIHR6VHlwZUNsYXNzOiBudWxsLCAgICAgICAgICAvL+aKlei1hOexu+Wei1xyXG5cclxuICAgIHR6QXJlYUlkOiAnJywgICAgICAgICAgICAgICAvL+aKlei1hOWMuuWfn1xyXG4gICAgdHpXYXlJZDogJycsICAgICAgICAgICAgICAgIC8v5oqV6LWE5pa55byPXHJcbiAgICB0ek90aGVySWQ6ICcnLCAgICAgICAgICAgICAgLy/mipXotYTph5Hpop1cclxuICAgIHR6VHlwZUlkOiAnJywgICAgICAgICAgICAgICAvL+aKlei1hOexu+Wei1xyXG4gICAgdHpDeVR5cGVJZDogJycsICAgICAgICAgICAgIC8v5Lqn5LiaaWRcclxuICAgIHR6SHlUeXBlSWQ6ICcnLCAgICAgICAgICAgICAvL+ihjOS4mmlkXHJcblxyXG5cclxuXHJcbiAgICAvL+aJvui1hOmHke+8iOiejei1hO+8iVxyXG4gICAgcnpTZWFyY2hJbmZvU2hvdzogZmFsc2UsICAgIC8v5pi+56S6L+makOiXj1xyXG4gICAgcnpJbmRleDogMCwgICAgICAgICAgICAgICAgIC8v5b2T5YmN57Si5byVXHJcbiAgICByekluZHVzdHJ5SWQ6IG51bGwsICAgICAgICAgLy/pgInkuK3nmoRpZFxyXG5cclxuICAgIHJ6Q2F0ZWdvcnlDbGFzczogbnVsbCwgICAgICAvL+mcgOaxguexu+WIq1xyXG4gICAgcnpTdGFnZUNsYXNzOiBudWxsLCAgICAgICAgIC8v5omA5aSE6Zi25q61XHJcbiAgICByeldheUNsYXNzOiBudWxsLCAgICAgICAgICAgLy/ono3otYTmlrnlvI9cclxuICAgIHJ6RmluYW5jaW5nQ2xhc3M6IG51bGwsICAgICAvL+iejei1hOmHkeminVxyXG5cclxuICAgIHJ6Q2F0ZWdvcnlJZDogJycsICAgICAgICAgICAvL+mcgOaxguexu+WIq1xyXG4gICAgcnpGaW5hbmNpbmdJZDogJycsICAgICAgICAgIC8v6J6N6LWE6YeR6aKdXHJcbiAgICByekN5VHlwZUlkOiAnJywgICAgICAgICAgICAgLy/kuqfkuJppZFxyXG4gICAgcnpIeVR5cGVJZDogJycsICAgICAgICAgICAgIC8v6KGM5LiaaWRcclxuXHJcbiAgICBpc1NlYXJjaFNob3c6IHRydWUsICAgICAgICAvL+aQnOe0oue7k+aenOaVsOaNrlxyXG4gICAgempTZWFyY2hJbmZvU2hvdzogdHJ1ZSwgICAgLy/otYTph5Hlhajpg6jmjInpkq5cclxuICAgIHpqQnRuQ2xhc3M6IDEsICAgICAgICAgICAgIC8v5om+6LWE6YeR5YWo6YOoXHJcbiAgICB9KVxyXG4gICAgdGhpcy5nZXRBbGxGdW5kc0xpc3QoKTsgICAgICAgLy/mib7otYTph5HvvIjlhajpg6jvvIlcclxuICB9LFxyXG4gIGdldEFsbEZ1bmRzTGlzdCgpeyAgLy/mib7otYTph5HvvIjlhajpg6jvvIlcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHB0VGl0bGU6ICfotYTph5EnLCAgICAgICAgLy/mn6Xor6LmoIfpophcclxuICAgICAgbW9yZVNob3c6IGZhbHNlLFxyXG4gICAgfSlcclxuICAgIGh0dHBzLnJlcXVlc3QoYXBpLmFsbEZ1bmQsIHtcclxuICAgICAgdGVuYW50SWQ6IGFwaS5hcmVhSWQsICAgICAgICAgICAgICAgICAvL+WcsOWMumlkXHJcbiAgICAgIGtleTogdGhpcy5kYXRhLnNlYXJjaEtleSwgICAgICAgICAgICAgLy/lhbPplK7lrZfmkJzntKJcclxuICAgICAgcGFnZVNpemU6IHRoaXMuZGF0YS5wYWdlU2l6ZSwgICAgICAgICAvL+avj+mhteaYvuekuuaVsOmHj1xyXG4gICAgICBwYWdlSW5kZXg6IHRoaXMuZGF0YS5wYWdlSW5kZXgsICAgICAgIC8v6aG15pWwXHJcbiAgICB9LCAnR0VUJykudGhlbigocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICBpZihyZXMpe1xyXG4gICAgICAgIC8v6YeR6J6NXHJcbiAgICAgICAgbGV0IGpyamdNZG9lbHNMaXN0OmFueSA9IHJlcy52YWwuanJqZ01kb2Vscy5tYXAoKGl0ZW06YW55KTphbnk9PntcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiAn6YeR6J6NJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+ivpuaDheWIpOaWrVxyXG4gICAgICAgICAgICBsb25naXR1ZGU6IGl0ZW0ubG5nLCAgIC8v57uP5bqmXHJcbiAgICAgICAgICAgIGxhdGl0dWRlOiBpdGVtLmxhdCwgICAgLy/nuqzluqZcclxuICAgICAgICAgICAgaWNvblBhdGg6ICcuLi8uLi9pbWFnZXMvemoucG5nJywgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgd2lkdGg6IDI3LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1LFxyXG4gICAgICAgICAgICBjYWxsb3V0OiB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogaXRlbS5xeU5hbWU/aXRlbS5xeU5hbWU6J+acquWhq+aKpScsXHJcbiAgICAgICAgICAgICAgY29sb3I6ICcjMDAwJyxcclxuICAgICAgICAgICAgICBmb250U2l6ZTogMTQsXHJcbiAgICAgICAgICAgICAgYmdDb2xvcjogJyNGRkYnLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDUsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI0NDQycsXHJcbiAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ0JZQ0xJQ0snXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRpdGxlOiBpdGVtLnF5TmFtZSwgICAgICAgICAgICAgICAgICAgLy/moIfpophcclxuICAgICAgICAgICAgaW1nQXJyOiBpdGVtLmZ3amdQaWNzLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Zu+54mH5pWw57uEXHJcbiAgICAgICAgICAgIHByb3ZpbmNlTmFtZTogaXRlbS5wcm92aW5jZU5hbWU/aXRlbS5wcm92aW5jZU5hbWU6JycsICAgICAvL+ecgVxyXG4gICAgICAgICAgICBjaXR5TmFtZTogaXRlbS5jaXR5TmFtZT9pdGVtLmNpdHlOYW1lOicnLCAgICAgICAgICAgICAgICAgLy/luIJcclxuICAgICAgICAgICAgZGlzdHJpY3ROYW1lOiBpdGVtLmRpc3RyaWN0TmFtZT9pdGVtLmRpc3RyaWN0TmFtZTonJywgICAgIC8v5Yy6XHJcbiAgICAgICAgICAgIGFkZHJlc3M6IGl0ZW0uZndBZGRyZXNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+ivpue7huWcsOWdgFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8v5oqV6LWEXHJcbiAgICAgICAgbGV0IHR6TW9kZWxzTGlzdDphbnkgPSByZXMudmFsLnR6TW9kZWxzLm1hcCgoaXRlbTphbnkpOmFueT0+e1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgIG5hbWU6ICfotYTph5EnLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6K+m5oOF5Yik5patXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZTogaXRlbS5sbmcsICAgLy/nu4/luqZcclxuICAgICAgICAgICAgbGF0aXR1ZGU6IGl0ZW0ubGF0LCAgICAvL+e6rOW6plxyXG4gICAgICAgICAgICBpY29uUGF0aDogJy4uLy4uL2ltYWdlcy90ei5wbmcnLCAgICAgICAgICAgICAvL+agh+iusFxyXG4gICAgICAgICAgICB3aWR0aDogMjcsXHJcbiAgICAgICAgICAgIGhlaWdodDogMzUsXHJcbiAgICAgICAgICAgIGNhbGxvdXQ6IHtcclxuICAgICAgICAgICAgICBjb250ZW50OiBpdGVtLm5lZWROYW1lP2l0ZW0ubmVlZE5hbWU6J+acquWhq+aKpScsXHJcbiAgICAgICAgICAgICAgY29sb3I6ICcjMDAwJyxcclxuICAgICAgICAgICAgICBmb250U2l6ZTogMTQsXHJcbiAgICAgICAgICAgICAgYmdDb2xvcjogJyNGRkYnLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDUsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI0NDQycsXHJcbiAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ0JZQ0xJQ0snXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRpdGxlOiBpdGVtLm5lZWROYW1lLCAgICAgICAgICAgICAgICAgICAvL+agh+mimFxyXG4gICAgICAgICAgICBpbWdBcnI6IGl0ZW0ubmVlZEZpbGVzLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lm77niYfmlbDnu4RcclxuICAgICAgICAgICAgcHJvdmluY2VOYW1lOiBpdGVtLnByb3ZpbmNlTmFtZT9pdGVtLnByb3ZpbmNlTmFtZTonJywgICAgIC8v55yBXHJcbiAgICAgICAgICAgIGNpdHlOYW1lOiBpdGVtLmNpdHlOYW1lP2l0ZW0uY2l0eU5hbWU6JycsICAgICAgICAgICAgICAgICAvL+W4glxyXG4gICAgICAgICAgICBkaXN0cmljdE5hbWU6IGl0ZW0uZGlzdHJpY3ROYW1lP2l0ZW0uZGlzdHJpY3ROYW1lOicnLCAgICAgLy/ljLpcclxuICAgICAgICAgICAgYWRkcmVzczogaXRlbS50ZW5hbnROYW1lICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6K+m57uG5Zyw5Z2AXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8v6J6N6LWE77yI6ZyA5rGC77yJXHJcbiAgICAgICAgbGV0IHJvbmd6aU5lZWRzTGlzdDphbnkgPSByZXMudmFsLnJvbmd6aU5lZWRzLm1hcCgoaXRlbTphbnkpOmFueT0+e1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgIG5hbWU6ICfpnIDmsYInLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6K+m5oOF5Yik5patXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZTogaXRlbS5sbmcsICAgLy/nu4/luqZcclxuICAgICAgICAgICAgbGF0aXR1ZGU6IGl0ZW0ubGF0LCAgICAvL+e6rOW6plxyXG4gICAgICAgICAgICBpY29uUGF0aDogJy4uLy4uL2ltYWdlcy9yei5wbmcnLCAgICAgICAgICAgICAvL+agh+iusFxyXG4gICAgICAgICAgICB3aWR0aDogMjcsXHJcbiAgICAgICAgICAgIGhlaWdodDogMzUsXHJcbiAgICAgICAgICAgIGNhbGxvdXQ6IHtcclxuICAgICAgICAgICAgICBjb250ZW50OiBpdGVtLm5lZWROYW1lP2l0ZW0ubmVlZE5hbWU6J+acquWhq+aKpScsXHJcbiAgICAgICAgICAgICAgY29sb3I6ICcjMDAwJyxcclxuICAgICAgICAgICAgICBmb250U2l6ZTogMTQsXHJcbiAgICAgICAgICAgICAgYmdDb2xvcjogJyNGRkYnLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDUsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI0NDQycsXHJcbiAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ0JZQ0xJQ0snXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRpdGxlOiBpdGVtLm5lZWROYW1lLCAgICAgICAgICAgICAgICAgICAvL+agh+mimFxyXG4gICAgICAgICAgICBpbWdBcnI6IGl0ZW0ucGljdHVyZUZpbGVzLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lm77niYfmlbDnu4RcclxuICAgICAgICAgICAgcHJvdmluY2VOYW1lOiBpdGVtLnByb3ZpbmNlTmFtZT9pdGVtLnByb3ZpbmNlTmFtZTonJywgICAgIC8v55yBXHJcbiAgICAgICAgICAgIGNpdHlOYW1lOiBpdGVtLmNpdHlOYW1lP2l0ZW0uY2l0eU5hbWU6JycsICAgICAgICAgICAgICAgICAvL+W4glxyXG4gICAgICAgICAgICBkaXN0cmljdE5hbWU6IGl0ZW0uZGlzdHJpY3ROYW1lP2l0ZW0uZGlzdHJpY3ROYW1lOicnLCAgICAgLy/ljLpcclxuICAgICAgICAgICAgYWRkcmVzczogaXRlbS50ZW5hbnROYW1lICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6K+m57uG5Zyw5Z2AXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy/ono3otYTvvIjpobnnm67vvIlcclxuICAgICAgICBsZXQgcm9uZ3ppUHJvc0xpc3Q6YW55ID0gcmVzLnZhbC5yb25nemlQcm9zLm1hcCgoaXRlbTphbnkpOmFueT0+e1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgIG5hbWU6ICfono3otYQnLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6K+m5oOF5Yik5patXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZTogaXRlbS5sbmcsICAgLy/nu4/luqZcclxuICAgICAgICAgICAgbGF0aXR1ZGU6IGl0ZW0ubGF0LCAgICAvL+e6rOW6plxyXG4gICAgICAgICAgICBpY29uUGF0aDogJy4uLy4uL2ltYWdlcy94bS5wbmcnLCAgICAgICAgICAgICAvL+agh+iusFxyXG4gICAgICAgICAgICB3aWR0aDogMjcsXHJcbiAgICAgICAgICAgIGhlaWdodDogMzUsXHJcbiAgICAgICAgICAgIGNhbGxvdXQ6IHtcclxuICAgICAgICAgICAgICBjb250ZW50OiBpdGVtLnByb05hbWU/aXRlbS5wcm9OYW1lOifmnKrloavmiqUnLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IDE0LFxyXG4gICAgICAgICAgICAgIGJnQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1LFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNDQ0MnLFxyXG4gICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdCWUNMSUNLJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0aXRsZTogaXRlbS5wcm9OYW1lLCAgICAgICAgICAgICAgICAgICAvL+agh+mimFxyXG4gICAgICAgICAgICBpbWdBcnI6IGl0ZW0ucGljdHVyZUZpbGVzLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lm77niYfmlbDnu4RcclxuICAgICAgICAgICAgcHJvdmluY2VOYW1lOiBpdGVtLnByb3ZpbmNlTmFtZT9pdGVtLnByb3ZpbmNlTmFtZTonJywgICAgIC8v55yBXHJcbiAgICAgICAgICAgIGNpdHlOYW1lOiBpdGVtLmNpdHlOYW1lP2l0ZW0uY2l0eU5hbWU6JycsICAgICAgICAgICAgICAgICAvL+W4glxyXG4gICAgICAgICAgICBkaXN0cmljdE5hbWU6IGl0ZW0uZGlzdHJpY3ROYW1lP2l0ZW0uZGlzdHJpY3ROYW1lOicnLCAgICAgLy/ljLpcclxuICAgICAgICAgICAgYWRkcmVzczogaXRlbS5hZGRyZXNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6K+m57uG5Zyw5Z2AXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy/lpITnkIZJROS4uuaVsOWtl1xyXG4gICAgICAgIGxldCBsaXN0OmFueSAgPSBqcmpnTWRvZWxzTGlzdC5jb25jYXQodHpNb2RlbHNMaXN0LCByb25nemlOZWVkc0xpc3QsIHJvbmd6aVByb3NMaXN0KTtcclxuICAgICAgICBsZXQgbmV3TWFya2Vyc0xpc3Q6YW55ID0gbGlzdC5tYXAoKGl0ZW06YW55LCBpbmRleDpudW1iZXIpOmFueT0+e1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGluZGV4LCAgICAgICAgICAgICAgICAgICAvL21hcOeUqOeahOiHquWumuS5iUlEXHJcbiAgICAgICAgICAgIG5hbWU6IGl0ZW0ubmFtZSwgICAgICAgICAgICAgLy/or6bmg4XliKTmlq1cclxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBpdGVtLmxvbmdpdHVkZSwgICAvL+e7j+W6plxyXG4gICAgICAgICAgICBsYXRpdHVkZTogaXRlbS5sYXRpdHVkZSwgICAgIC8v57qs5bqmXHJcbiAgICAgICAgICAgIGljb25QYXRoOiBpdGVtLmljb25QYXRoLCAgICAgLy/moIforrBcclxuICAgICAgICAgICAgd2lkdGg6IDI3LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1LFxyXG4gICAgICAgICAgICBjYWxsb3V0OiBpdGVtLmNhbGxvdXQsXHJcbiAgICAgICAgICAgIG9sZElkOiBpdGVtLmlkLCAgICAgICAgICAgICAgICAgICAgICAvL+WOn+Wni0lEXHJcbiAgICAgICAgICAgIHRpdGxlOiBpdGVtLnRpdGxlLCAgICAgICAgICAgICAgICAgICAvL+agh+mimFxyXG4gICAgICAgICAgICBpbWdBcnI6IGl0ZW0uaW1nQXJyLCAgICAgICAgICAgICAgICAgLy/lm77niYdcclxuICAgICAgICAgICAgcHJvdmluY2VOYW1lOiBpdGVtLnByb3ZpbmNlTmFtZSwgICAgIC8v55yBXHJcbiAgICAgICAgICAgIGNpdHlOYW1lOiBpdGVtLmNpdHlOYW1lLCAgICAgICAgICAgICAvL+W4glxyXG4gICAgICAgICAgICBkaXN0cmljdE5hbWU6IGl0ZW0uZGlzdHJpY3ROYW1lLCAgICAgLy/ljLpcclxuICAgICAgICAgICAgYWRkcmVzczogaXRlbS5hZGRyZXNzICAgICAgICAgICAgICAgIC8v6K+m57uG5Zyw5Z2AXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYodGhpcy5kYXRhLnRvdGFsID09IDApe1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgbWFya2VyczogbmV3TWFya2Vyc0xpc3QsICAgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgdG90YWw6IHJlcy52YWwudG90YWwsICAgICAgICAgICAgICAgICAgLy/mgLvmlbBcclxuICAgICAgICAgICAgbXVtTGlzdDogbmV3TWFya2Vyc0xpc3QsICAgICAgICAgICAgICAgIC8v5YiX6KGoXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgbWFya2VyczogdGhpcy5kYXRhLm1hcmtlcnMuY29uY2F0KG5ld01hcmtlcnNMaXN0KSwgICAgICAgICAgICAgICAvL+agh+iusFxyXG4gICAgICAgICAgICBtdW1MaXN0OiB0aGlzLmRhdGEubXVtTGlzdC5jb25jYXQobmV3TWFya2Vyc0xpc3QpLCAgICAgICAgICAgICAgIC8v5YiX6KGoXHJcbiAgICAgICAgICAgIHRvdGFsOiByZXMudmFsLnRvdGFsLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/mgLvmlbBcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuZGF0YS5tdW1MaXN0Lmxlbmd0aCA8IHJlcy52YWwudG90YWwpe1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgbW9yZVNob3c6IHRydWUsXHJcbiAgICAgICAgICAgIG1vcmVUaXRsZTogJ+eCueWHu+WKoOi9veabtOWkmicsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgbW9yZVNob3c6IHRydWUsXHJcbiAgICAgICAgICAgIG1vcmVUaXRsZTogJ+W3suWKoOi9veWFqOmDqCcsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIHpqQnRuVG9nZ2xlKGU6YW55KTp2b2lkeyAgLy/mib7otYTph5HvvIjmjInpkq7nirbmgIHliIfmjaLvvIlcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHpqQnRuQ2xhc3M6IGUudGFyZ2V0LmRhdGFzZXQubnVtLFxyXG4gICAgICAvL+mHkeiejVxyXG4gICAgICBqckNhdGVnb3J5SW5kZXg6IDAsICAgICAgICAgLy/lvZPliY3ntKLlvJVcclxuICAgICAganJDYXRlZ29yeUlkOiBudWxsLCAgICAgICAgIC8v6YCJ5Lit55qEaWRcclxuICAgICAganJUeXBlT25lSWQ6ICcnLCAgICAgICAgICAgIC8v5pyN5Yqh57G75Yir5LiA57qn6I+c5Y2VXHJcbiAgICAgIGpyVHlwZVR3b0lkOiAnJywgICAgICAgICAgICAvL+acjeWKoeexu+WIq+S6jOe6p+iPnOWNlVxyXG4gICAgICBqclR5cGVDbGFzczogbnVsbCxcclxuICAgICAganJEd1N0YXR1c0lkOiAnJywgICAgICAgICAgLy/ljZXkvY3nsbvlnotcclxuICAgICAganJTY2FsZUNsYXNzOiBudWxsLFxyXG4gICAgICBqckR3U2NhbGVJZDogJycsICAgICAgICAgICAvL+WNleS9jeinhOaooVxyXG4gICAgICBqckluZHVzdHJ5SW5kZXg6IDAsICAgICAgICAgLy/lvZPliY3ntKLlvJVcclxuICAgICAganJJbmR1c3RyeUlkOiBudWxsLCAgICAgICAgIC8v6YCJ5Lit55qEaWRcclxuICAgICAganJDeVR5cGVJZDogJycsICAgICAgICAgICAgIC8v5Lqn5LiaaWRcclxuICAgICAganJIeVR5cGVJZDogJycsICAgICAgICAgICAgIC8v6KGM5LiaaWRcclxuXHJcbiAgICAgIC8v5oqV6LWEXHJcbiAgICAgIHR6SW5kZXg6IDAsICAgICAgICAgICAgICAgICAvL+W9k+WJjee0ouW8lVxyXG4gICAgICB0ekluZHVzdHJ5SWQ6IG51bGwsICAgICAgICAgLy/pgInkuK3nmoRpZFxyXG5cclxuICAgICAgdHpBcmVhQ2xhc3M6IG51bGwsICAgICAgICAgIC8v5oqV6LWE5Yy65Z+fXHJcbiAgICAgIHR6V2F5Q2xhc3M6IG51bGwsICAgICAgICAgICAvL+aKlei1hOaWueW8j1xyXG4gICAgICB0ek90aGVyQ2xhc3M6IG51bGwsICAgICAgICAgLy/mipXotYTph5Hpop1cclxuICAgICAgdHpUeXBlQ2xhc3M6IG51bGwsICAgICAgICAgIC8v5oqV6LWE57G75Z6LXHJcblxyXG4gICAgICB0ekFyZWFJZDogJycsICAgICAgICAgICAgICAgLy/mipXotYTljLrln59cclxuICAgICAgdHpXYXlJZDogJycsICAgICAgICAgICAgICAgIC8v5oqV6LWE5pa55byPXHJcbiAgICAgIHR6T3RoZXJJZDogJycsICAgICAgICAgICAgICAvL+aKlei1hOmHkeminVxyXG4gICAgICB0elR5cGVJZDogJycsICAgICAgICAgICAgICAgLy/mipXotYTnsbvlnotcclxuICAgICAgdHpDeVR5cGVJZDogJycsICAgICAgICAgICAgIC8v5Lqn5LiaaWRcclxuICAgICAgdHpIeVR5cGVJZDogJycsICAgICAgICAgICAgIC8v6KGM5LiaaWRcclxuXHJcbiAgICAgIC8v6J6N6LWEXHJcbiAgICAgIHJ6SW5kZXg6IDAsICAgICAgICAgICAgICAgICAvL+W9k+WJjee0ouW8lVxyXG4gICAgICByekluZHVzdHJ5SWQ6IG51bGwsICAgICAgICAgLy/pgInkuK3nmoRpZFxyXG5cclxuICAgICAgcnpDYXRlZ29yeUNsYXNzOiBudWxsLCAgICAgIC8v6ZyA5rGC57G75YirXHJcbiAgICAgIHJ6RmluYW5jaW5nQ2xhc3M6IG51bGwsICAgICAvL+iejei1hOmHkeminVxyXG5cclxuICAgICAgcnpDYXRlZ29yeUlkOiAnJywgICAgICAgICAgIC8v6J6N6LWE5pa55byPXHJcbiAgICAgIHJ6RmluYW5jaW5nSWQ6ICcnLCAgICAgICAgICAvL+iejei1hOmHkeminVxyXG4gICAgICByekN5VHlwZUlkOiAnJywgICAgICAgICAgICAgLy/kuqfkuJppZFxyXG4gICAgICByekh5VHlwZUlkOiAnJywgICAgICAgICAgICAgLy/ooYzkuJppZFxyXG5cclxuICAgICAgbnVtOiAwLCAgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICBtdW1MaXN0OiBbXSwgICAgICAgICAgICAgICAgLy825om+5YiX6KGoXHJcbiAgICAgIG1hcmtlcnM6IFtdLCAgICAgICAgICAgICAgICAvL+WcsOWbvuagh+eCuVxyXG4gICAgICBzZWFyY2hLZXk6ICcnLCAgICAgICAgICAgICAgLy/lhbPplK7lrZfmkJzntKJcclxuICAgIH0pXHJcbiAgICBpZihlLnRhcmdldC5kYXRhc2V0Lm51bSA9PSAxKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHsgIC8v5YWo6YOoXHJcbiAgICAgICAgZmxhZzogJ3pqJywgICAgICAgICAgICAgICAgICAgIC8v5b2T5YmN5YiX6KGoXHJcbiAgICAgICAganJTZWFyY2hJbmZvU2hvdzogZmFsc2UsICAgICAgICAgIC8v6auY57qn5pCc57Si77yI6YeR6J6N5pyN5Yqh77yJXHJcbiAgICAgICAgdHpTZWFyY2hJbmZvU2hvdzogZmFsc2UsICAgICAgICAgIC8v6auY57qn5pCc57Si77yI5om+5oqV6LWE77yJXHJcbiAgICAgICAgcnpTZWFyY2hJbmZvU2hvdzogZmFsc2UsICAgICAgICAgIC8v6auY57qn5pCc57Si77yI5om+6J6N6LWE77yJXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuZ2V0QWxsRnVuZHNMaXN0KCk7ICAgICAgIC8vNuaJvui1hOmHkeWFqOmDqFxyXG4gICAgfWVsc2UgaWYoZS50YXJnZXQuZGF0YXNldC5udW0gPT0gMil7ICAvL+mHkeiejeacjeWKoVxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGZsYWc6ICdqcicsICAgICAgICAgICAgICAgICAgICAgICAvL+W9k+WJjeWIl+ihqFxyXG4gICAgICAgIGpyU2VhcmNoSW5mb1Nob3c6IHRydWUsICAgICAgICAgICAvL+mrmOe6p+aQnOe0ou+8iOmHkeiejeacjeWKoe+8iVxyXG4gICAgICAgIHR6U2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgICAgICAgICAvL+mrmOe6p+aQnOe0ou+8iOaJvuaKlei1hO+8iVxyXG4gICAgICAgIHJ6U2VhcmNoSW5mb1Nob3c6IGZhbHNlLCAgICAgICAgICAvL+mrmOe6p+aQnOe0ou+8iOaJvuiejei1hO+8iVxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLmdldEpyTGlzdCgpOyAgICAgICAgICAgIC8v5om+6LWE6YeR77yI6YeR6J6N77yJXHJcbiAgICAgIHRoaXMuZndDYXRlZ29yeSgpOyAgICAgICAgICAgLy/mnI3liqHnsbvliKtcclxuICAgICAgdGhpcy5md1R5cGUoKTsgICAgICAgICAgICAgICAvL+WNleS9jeexu+Wei1xyXG4gICAgICB0aGlzLmZ3U2NhbGUoKTsgICAgICAgICAgICAgIC8v5Y2V5L2N6KeE5qihXHJcbiAgICAgIHRoaXMuaW5kdXN0cnkoKTsgICAgICAgICAgICAgLy/kuqfkuJrjgIHooYzkuJpcclxuICAgIH1lbHNlIGlmKGUudGFyZ2V0LmRhdGFzZXQubnVtID09IDMpeyAgLy/mib7mipXotYRcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBmbGFnOiAndHonLCAgICAgICAgICAgICAgICAgICAgICAgLy/lvZPliY3liJfooahcclxuICAgICAgICBqclNlYXJjaEluZm9TaG93OiBmYWxzZSwgICAgICAgICAgLy/pq5jnuqfmkJzntKLvvIjph5Hono3mnI3liqHvvIlcclxuICAgICAgICB0elNlYXJjaEluZm9TaG93OiB0cnVlLCAgICAgICAgICAgLy/pq5jnuqfmkJzntKLvvIjmib7mipXotYTvvIlcclxuICAgICAgICByelNlYXJjaEluZm9TaG93OiBmYWxzZSwgICAgICAgICAgLy/pq5jnuqfmkJzntKLvvIjmib7ono3otYTvvIlcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5nZXRUekxpc3QoKTsgICAgICAgICAgICAgICAgICAgLy/mib7otYTph5HvvIjmipXotYTvvIlcclxuICAgICAgdGhpcy50ekFyZWEoKTsgICAgICAgICAgICAgICAgICAgICAgLy/mipXotYTljLrln59cclxuICAgICAgdGhpcy50eldheSgpOyAgICAgICAgICAgICAgICAgICAgICAgLy/mipXotYTmlrnlvI9cclxuICAgICAgdGhpcy50ek90aGVyKCk7ICAgICAgICAgICAgICAgICAgICAgLy/mipXotYTph5Hpop1cclxuICAgICAgdGhpcy50elR5cGUoKTsgICAgICAgICAgICAgICAgICAgICAgLy/mipXotYTnsbvlnotcclxuICAgICAgdGhpcy5pbmR1c3RyeSgpOyAgICAgICAgICAgICAgICAgICAgLy/kuqfkuJrjgIHooYzkuJpcclxuICAgIH1lbHNleyAgLy/mib7ono3otYRcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBmbGFnOiAncnonLCAgICAgICAgICAgICAgICAgICAgICAgLy/lvZPliY3liJfooahcclxuICAgICAgICBqclNlYXJjaEluZm9TaG93OiBmYWxzZSwgICAgICAgICAgLy/pq5jnuqfmkJzntKLvvIjph5Hono3mnI3liqHvvIlcclxuICAgICAgICB0elNlYXJjaEluZm9TaG93OiBmYWxzZSwgICAgICAgICAgLy/pq5jnuqfmkJzntKLvvIjmib7mipXotYTvvIlcclxuICAgICAgICByelNlYXJjaEluZm9TaG93OiB0cnVlLCAgICAgICAgICAgLy/pq5jnuqfmkJzntKLvvIjmib7ono3otYTvvIlcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5nZXRSekxpc3QoKTsgICAgICAgICAgICAgICAgICAgLy/mib7otYTph5HvvIjono3otYTvvIlcclxuICAgICAgdGhpcy5yeldheSgpOyAgICAgICAgICAgICAgICAgICAgICAgLy/ono3otYTmlrnlvI9cclxuICAgICAgdGhpcy54bVN0YWdlKCk7ICAgICAgICAgICAgICAgICAgICAgLy/miYDlpITpmLbmrrVcclxuICAgICAgdGhpcy54bUNhdGVnb3J5KCk7ICAgICAgICAgICAgICAgICAgLy/pnIDmsYLnsbvliKtcclxuICAgICAgdGhpcy54bUZpbmFuY2luZygpOyAgICAgICAgICAgICAgICAgLy/ono3otYTph5Hpop1cclxuICAgICAgdGhpcy5pbmR1c3RyeSgpOyAgICAgICAgICAgICAgICAgICAgLy/kuqfkuJrjgIHooYzkuJpcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvL+aJvui1hOmHke+8iOmHkeiejeacjeWKoe+8iVxyXG4gIGdldEpyTGlzdCgpeyAgLy/mib7otYTph5HvvIjph5Hono3vvIlcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHB0VGl0bGU6ICfph5Hono3mnI3liqEnLCAgICAgICAgLy/mn6Xor6LmoIfpophcclxuICAgICAgbW9yZVNob3c6IGZhbHNlLFxyXG4gICAgfSlcclxuICAgIGh0dHBzLnJlcXVlc3QoYXBpLmppbnJvbmcsIHtcclxuICAgICAgdGVuYW50SWQ6IGFwaS5hcmVhSWQsICAgICAgICAgICAgICAgICAvL+WcsOWMumlkXHJcbiAgICAgIGtleTogdGhpcy5kYXRhLnNlYXJjaEtleSwgICAgICAgICAgICAgLy/lhbPplK7lrZfmkJzntKJcclxuICAgICAgcGFnZVNpemU6IHRoaXMuZGF0YS5wYWdlU2l6ZSwgICAgICAgICAvL+avj+mhteaYvuekuuaVsOmHj1xyXG4gICAgICBwYWdlSW5kZXg6IHRoaXMuZGF0YS5wYWdlSW5kZXgsICAgICAgIC8v6aG15pWwXHJcbiAgICAgIHR5cGVPbmVJZDogdGhpcy5kYXRhLmpyVHlwZU9uZUlkLCAgICAgLy/mnI3liqHnsbvliKvkuIDnuqfoj5zljZVcclxuICAgICAgdHlwZVR3b0lkOiB0aGlzLmRhdGEuanJUeXBlVHdvSWQsICAgICAvL+acjeWKoeexu+WIq+S6jOe6p+iPnOWNlVxyXG4gICAgICBxeU5hdHVyZUlkOiB0aGlzLmRhdGEuanJEd1N0YXR1c0lkLCAgIC8v5Y2V5L2N57G75Z6LaWRcclxuICAgICAgZHdTY2FsZUlkOiB0aGlzLmRhdGEuanJEd1NjYWxlSWQsICAgICAvL+WNleS9jeinhOaooWlkXHJcbiAgICAgIGN5VHlwZUlkOiB0aGlzLmRhdGEuanJDeVR5cGVJZCwgICAgICAgLy/kuqfkuJppZFxyXG4gICAgICBoeVR5cGVJZDogdGhpcy5kYXRhLmpySHlUeXBlSWQgICAgICAgIC8v6KGM5LiaaWRcclxuICAgIH0sICdHRVQnKS50aGVuKChyZXM6YW55KTp2b2lkPT57XHJcbiAgICAgIGlmKHJlcyl7XHJcbiAgICAgICAgLy/ph5Hono1cclxuICAgICAgICBsZXQgbGlzdDphbnkgPSAgcmVzLmxpc3QubWFwKChpdGVtOmFueSwgaW5kZXg6bnVtYmVyKTphbnk9PntcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBpbmRleCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vbWFw55So55qE6Ieq5a6a5LmJSURcclxuICAgICAgICAgICAgbmFtZTogJ+mHkeiejScsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/or6bmg4XliKTmlq1cclxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBpdGVtLmxuZywgICAgICAgICAgICAgICAgICAgICAgICAgLy/nu4/luqZcclxuICAgICAgICAgICAgbGF0aXR1ZGU6IGl0ZW0ubGF0LCAgICAgICAgICAgICAgICAgICAgICAgICAgLy/nuqzluqZcclxuICAgICAgICAgICAgaWNvblBhdGg6ICcuLi8uLi9pbWFnZXMvemoucG5nJywgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgd2lkdGg6IDI3LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1LFxyXG4gICAgICAgICAgICBjYWxsb3V0OiB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogaXRlbS5xeU5hbWU/aXRlbS5xeU5hbWU6J+acquWhq+aKpScsXHJcbiAgICAgICAgICAgICAgY29sb3I6ICcjMDAwJyxcclxuICAgICAgICAgICAgICBmb250U2l6ZTogMTgsXHJcbiAgICAgICAgICAgICAgYmdDb2xvcjogJyNGRkYnLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDUsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI0NDQycsXHJcbiAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ0JZQ0xJQ0snXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9sZElkOiBpdGVtLmlkLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WOn+Wni0lEXHJcbiAgICAgICAgICAgIHRpdGxlOiBpdGVtLnF5TmFtZT9pdGVtLnF5TmFtZTon5pyq5aGr5oqlJywgICAgICAgICAgICAgICAgICAgLy/moIfpophcclxuICAgICAgICAgICAgaW1nQXJyOiBpdGVtLmZ3amdQaWNzLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WbvueJh+aVsOe7hFxyXG4gICAgICAgICAgICBwcm92aW5jZU5hbWU6IGl0ZW0ucHJvdmluY2VOYW1lP2l0ZW0ucHJvdmluY2VOYW1lOicnLCAgICAgLy/nnIFcclxuICAgICAgICAgICAgY2l0eU5hbWU6IGl0ZW0uY2l0eU5hbWU/aXRlbS5jaXR5TmFtZTonJywgICAgICAgICAgICAgICAgIC8v5biCXHJcbiAgICAgICAgICAgIGRpc3RyaWN0TmFtZTogaXRlbS5kaXN0cmljdE5hbWU/aXRlbS5kaXN0cmljdE5hbWU6JycsICAgICAvL+WMulxyXG4gICAgICAgICAgICBhZGRyZXNzOiBpdGVtLmZ3QWRkcmVzcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/or6bnu4blnLDlnYBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5kYXRhLnRvdGFsID09IDApe1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgbWFya2VyczogbGlzdCwgICAgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgdG90YWw6IHJlcy50b3RhbCwgICAgICAgICAgICAgLy/mgLvmlbBcclxuICAgICAgICAgICAgbXVtTGlzdDogbGlzdCwgICAgICAgICAgICAgICAgLy/liJfooahcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBtYXJrZXJzOiB0aGlzLmRhdGEubWFya2Vycy5jb25jYXQobGlzdCksICAgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgbXVtTGlzdDogdGhpcy5kYXRhLm11bUxpc3QuY29uY2F0KGxpc3QpLCAgICAgICAgICAgICAgIC8v5YiX6KGoXHJcbiAgICAgICAgICAgIHRvdGFsOiByZXMudG90YWwsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5oC75pWwXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5kYXRhLm11bUxpc3QubGVuZ3RoIDwgcmVzLnRvdGFsKXtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIG1vcmVTaG93OiB0cnVlLFxyXG4gICAgICAgICAgICBtb3JlVGl0bGU6ICfngrnlh7vliqDovb3mm7TlpJonLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIG1vcmVTaG93OiB0cnVlLFxyXG4gICAgICAgICAgICBtb3JlVGl0bGU6ICflt7LliqDovb3lhajpg6gnLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIGpyQ2F0ZWdvcnlOYXZJdGVtKGRhdGE6YW55KTp2b2lkeyAgICAgICAvL+acjeWKoeexu+WIq++8iOW3puS+p+WvvOiIqueCueWHu+aXtu+8jOinpuWPkeeahOS6i+S7tu+8iVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAganJDYXRlZ29yeUluZGV4OiBkYXRhLmRldGFpbC5pbmRleCB8fCAwLFxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBqckNhdGVnb3J5SXRlbShkYXRhOmFueSk6dm9pZCB7ICAvL+acjeWKoeexu+WIq++8iOW3puS+p+WvvOiIqueCueWHu+aXtu+8jOinpuWPkeeahOS6i+S7tu+8iVxyXG4gICAgY29uc3QgaWQgPSB0aGlzLmRhdGEuanJDYXRlZ29yeUlkID09PSBkYXRhLmRldGFpbC5pZCA/IG51bGwgOiBkYXRhLmRldGFpbC5pZDtcclxuICAgIGNvbnN0IHBJZCA9IGRhdGEuZGV0YWlsLnBJZDtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGpyQ2F0ZWdvcnlJZDogaWQsXHJcbiAgICAgIGpyVHlwZU9uZUlkOiBwSWQgPyBwSWQgOiAnJywgICAgICAgICAgICAgICAvL+acjeWKoeexu+WIq+S4gOe6p+iPnOWNlVxyXG4gICAgICBqclR5cGVUd29JZDogaWQgPT0gcElkID8gJycgOiBpZCwgICAgICAgICAgLy/mnI3liqHnsbvliKvkuoznuqfoj5zljZUgXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAganJUeXBlRm4oZTphbnkpOnZvaWR7ICAgIC8v5Y2V5L2N57G75Z6L6Kem5Y+RXHJcbiAgICBsZXQgaWQ6YW55ID0gZS50YXJnZXQuZGF0YXNldC5pZDtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGpyVHlwZUNsYXNzOiBpZCxcclxuICAgICAganJEd1N0YXR1c0lkOiBpZCwgICAgICAgIC8v5Y2V5L2N57G75Z6LXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAganJTY2FsZUZuKGU6YW55KTp2b2lkeyAgICAvL+WNleS9jeinhOaooeinpuWPkVxyXG4gICAgbGV0IGlkOmFueSA9IGUudGFyZ2V0LmRhdGFzZXQuaWQ7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBqclNjYWxlQ2xhc3M6IGlkLFxyXG4gICAgICBqckR3U2NhbGVJZDogaWQsICAgICAgICAvL+WNleS9jeinhOaooVxyXG4gICAgfSlcclxuICB9LFxyXG4gIGpyTmF2SXRlbShkYXRhOmFueSk6dm9pZHsgICAgICAgLy/mib7mnI3liqHooYzkuJrkuqfkuJrvvIjlt6bkvqflr7zoiKrngrnlh7vml7bvvIzop6blj5HnmoTkuovku7bvvIlcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGpySW5kdXN0cnlJbmRleDogZGF0YS5kZXRhaWwuaW5kZXggfHwgMCxcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAganJJbmR1c3RyeUl0ZW0oZGF0YTphbnkpOnZvaWQgeyAgLy/mib7mnI3liqHooYzkuJrkuqfkuJrvvIjlj7PkvqfpgInmi6npobnooqvngrnlh7vml7bvvIzkvJrop6blj5HnmoTkuovku7bvvIkgXHJcbiAgICBjb25zdCBpZCA9IHRoaXMuZGF0YS5qckluZHVzdHJ5SWQgPT09IGRhdGEuZGV0YWlsLmlkID8gbnVsbCA6IGRhdGEuZGV0YWlsLmlkO1xyXG4gICAgY29uc3QgcElkID0gZGF0YS5kZXRhaWwucElkO1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAganJJbmR1c3RyeUlkOiBpZCxcclxuICAgICAganJDeVR5cGVJZDogcElkID8gcElkIDogJycsICAgICAgICAgIC8v5Lqn5LiaaWRcclxuICAgICAganJIeVR5cGVJZDogaWQgPT0gcElkID8gJycgOiBpZCwgICAgIC8v6KGM5LiaaWRcclxuICAgIH0pXHJcbiAgfSxcclxuICBqclJlc2V0KGU6YW55KTp2b2lkeyAgLy/mib7mnI3liqHph43nva5cclxuICAgIGxldCBmbGFnOm51bWJlciA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmZsYWc7XHJcbiAgICBpZihmbGFnID09IDEpeyAgLy/mnI3liqHnsbvliKtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBqckNhdGVnb3J5SW5kZXg6IDAsICAgICAgICAgLy/lvZPliY3ntKLlvJVcclxuICAgICAgICBqckNhdGVnb3J5SWQ6IG51bGwsICAgICAgICAgLy/pgInkuK3nmoRpZFxyXG4gICAgICAgIGpyVHlwZU9uZUlkOiAnJywgICAgICAgICAgICAvL+acjeWKoeexu+WIq+S4gOe6p+iPnOWNlVxyXG4gICAgICAgIGpyVHlwZVR3b0lkOiAnJywgICAgICAgICAgICAvL+acjeWKoeexu+WIq+S6jOe6p+iPnOWNlVxyXG4gICAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgICAvLzbmib7nu5PmnpxcclxuICAgICAgICBtdW1MaXN0OiBbXSwgICAgICAgICAgICAgICAgLy825om+5YiX6KGoXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjanJDYXRlZ29yeUlkJykudG9nZ2xlKGZhbHNlKTsgICAgICAgICAvL+acjeWKoeexu+WIq+WFs+mXrVxyXG4gICAgfWVsc2UgaWYoZmxhZyA9PSAyKXsgIC8v5Y2V5L2N57G75Z6LXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAganJUeXBlQ2xhc3M6IG51bGwsXHJcbiAgICAgICAganJEd1N0YXR1c0lkOiAnJywgICAgICAgICAgLy/ljZXkvY3nsbvlnotcclxuICAgICAgICBudW06IDAsICAgICAgICAgICAgICAgICAgICAvLzbmib7nu5PmnpxcclxuICAgICAgICBtdW1MaXN0OiBbXSwgICAgICAgICAgICAgICAvLzbmib7liJfooahcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyNqclR5cGUnKS50b2dnbGUoZmFsc2UpOyAgICAgICAgLy/ljZXkvY3nsbvlnovlhbPpl61cclxuICAgIH1lbHNlIGlmKGZsYWcgPT0gMyl7ICAvL+WNleS9jeinhOaooVxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGpyU2NhbGVDbGFzczogbnVsbCxcclxuICAgICAgICBqckR3U2NhbGVJZDogJycsICAgICAgICAgICAvL+WNleS9jeinhOaooVxyXG4gICAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgIC8vNuaJvuWIl+ihqFxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI2pyU2NhbGVJZCcpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAvL+WNleS9jeinhOaooeWFs+mXrVxyXG4gICAgfWVsc2V7ICAvL+S6p+S4muOAgeihjOS4mlxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGpySW5kdXN0cnlJbmRleDogMCwgICAgICAgICAvL+W9k+WJjee0ouW8lVxyXG4gICAgICAgIGpySW5kdXN0cnlJZDogbnVsbCwgICAgICAgICAvL+mAieS4reeahGlkXHJcbiAgICAgICAganJDeVR5cGVJZDogJycsICAgICAgICAgICAgIC8v5Lqn5LiaaWRcclxuICAgICAgICBqckh5VHlwZUlkOiAnJywgICAgICAgICAgICAgLy/ooYzkuJppZFxyXG4gICAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgIC8vNuaJvuWIl+ihqFxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI2pySW5kdXN0cnlJZCcpLnRvZ2dsZShmYWxzZSk7ICAgICAvL+S6p+S4muOAgeihjOS4muWFs+mXrVxyXG4gICAgfVxyXG4gICAgdGhpcy5nZXRKckxpc3QoKTsgICAgICAgICAgICAvL+aJvui1hOmHke+8iOmHkeieje+8iVxyXG4gIH0sXHJcbiAganJTdWJtaXQoZTphbnkpOnZvaWR7ICAvL+aJvuacjeWKoeWujOaIkFxyXG4gICAgbGV0IGZsYWc6bnVtYmVyID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuZmxhZztcclxuICAgIGlmKGZsYWcgPT0gMSl7XHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjanJDYXRlZ29yeUlkJykudG9nZ2xlKGZhbHNlKTsgICAgICAgICAvL+acjeWKoeexu+WIq+WFs+mXrVxyXG4gICAgfWVsc2UgaWYoZmxhZyA9PSAyKXtcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyNqclR5cGUnKS50b2dnbGUoZmFsc2UpOyAgICAgICAgICAgICAgIC8v5Y2V5L2N57G75Z6L5YWz6ZetXHJcbiAgICB9ZWxzZSBpZihmbGFnID09IDMpe1xyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI2pyU2NhbGVJZCcpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAgICAgLy/ljZXkvY3op4TmqKHlhbPpl61cclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI2pySW5kdXN0cnlJZCcpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAgLy/kuqfkuJrjgIHooYzkuJrlhbPpl61cclxuICAgIH1cclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICBtdW1MaXN0OiBbXSwgICAgICAgICAgICAgICAvLzbmib7liJfooahcclxuICAgICAgbWFya2VyczpbXSwgICAgICAgICAgICAgICAvL+agh+iusOeCueWkhOeQhuWQjueahOaVsOaNru+8iGlk44CB5p+l6K+i5L2/55So77yJXHJcbiAgICAgIHBhZ2VTaXplOiAxMCwgICAgICAgICAgICAgLy/mr4/pobXmmL7npLrmlbDph49cclxuICAgICAgcGFnZUluZGV4OiAxLCAgICAgICAgICAgICAvL+W9k+WJjemhtVxyXG4gICAgICB0b3RhbDogMCwgICAgICAgICAgICAgICAgIC8v5oC75p2h5pWwXHJcbiAgICB9KVxyXG4gICAgdGhpcy5nZXRKckxpc3QoKTsgICAgICAgICAgICAvL+aJvui1hOmHke+8iOmHkeieje+8iVxyXG4gIH0sXHJcblxyXG4gXHJcbiAgLy/mib7otYTph5HvvIjmipXotYTvvIlcclxuICBnZXRUekxpc3QoKXsgIC8v5om+6LWE6YeR77yI5oqV6LWE77yJXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBwdFRpdGxlOiAn5oqV6LWEJywgICAgICAgIC8v5p+l6K+i5qCH6aKYXHJcbiAgICAgIG1vcmVTaG93OiBmYWxzZSxcclxuICAgIH0pXHJcbiAgICBodHRwcy5yZXF1ZXN0KGFwaS50b3V6aSwge1xyXG4gICAgICB0ZW5hbnRJZDogYXBpLmFyZWFJZCwgICAgICAgICAgICAgICAgICAvL+WcsOWMumlkXHJcbiAgICAgIGtleTogdGhpcy5kYXRhLnNlYXJjaEtleSwgICAgICAgICAgICAgLy/lhbPplK7lrZfmkJzntKJcclxuICAgICAgcGFnZVNpemU6IHRoaXMuZGF0YS5wYWdlU2l6ZSwgICAgICAgICAvL+avj+mhteaYvuekuuaVsOmHj1xyXG4gICAgICBwYWdlSW5kZXg6IHRoaXMuZGF0YS5wYWdlSW5kZXgsICAgICAgIC8v6aG15pWwXHJcblxyXG4gICAgICB0eXBlT25lSWQ6IHRoaXMuZGF0YS5qclR5cGVPbmVJZCwgICAgIC8v5pyN5Yqh57G75Yir5LiA57qn6I+c5Y2VXHJcbiAgICAgIHR5cGVUd29JZDogdGhpcy5kYXRhLmpyVHlwZVR3b0lkLCAgICAgLy/mnI3liqHnsbvliKvkuoznuqfoj5zljZVcclxuICAgICAgZHdTdGF0dXNJZDogdGhpcy5kYXRhLmpyRHdTdGF0dXNJZCwgICAvL+WNleS9jeexu+Wei2lkXHJcbiAgICAgIGR3U2NhbGVJZDogdGhpcy5kYXRhLmpyRHdTY2FsZUlkLCAgICAgLy/ljZXkvY3op4TmqKFpZFxyXG4gICAgICBjeVR5cGVJZDogdGhpcy5kYXRhLmpyQ3lUeXBlSWQsICAgICAgIC8v5Lqn5LiaaWRcclxuICAgICAgaHlUeXBlSWQ6IHRoaXMuZGF0YS5qckh5VHlwZUlkICAgICAgICAvL+ihjOS4mmlkXHJcbiAgICB9LCAnR0VUJykudGhlbigocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICBpZihyZXMpe1xyXG5cclxuICAgICAgICAvL+aKlei1hFxyXG4gICAgICAgIGxldCBsaXN0OmFueSA9ICByZXMubGlzdC5tYXAoKGl0ZW06YW55LCBpbmRleDpudW1iZXIpOmFueT0+e1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGluZGV4LCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9tYXDnlKjnmoToh6rlrprkuYlJRFxyXG4gICAgICAgICAgICBuYW1lOiAn5oqV6LWEJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+ivpuaDheWIpOaWrVxyXG4gICAgICAgICAgICBsb25naXR1ZGU6IGl0ZW0ubG5nLCAgICAgICAgICAgICAgICAgICAgICAgICAvL+e7j+W6plxyXG4gICAgICAgICAgICBsYXRpdHVkZTogaXRlbS5sYXQsICAgICAgICAgICAgICAgICAgICAgICAgICAvL+e6rOW6plxyXG4gICAgICAgICAgICBpY29uUGF0aDogJy4uLy4uL2ltYWdlcy90ei5wbmcnLCAgICAgICAgICAgICAvL+agh+iusFxyXG4gICAgICAgICAgICB3aWR0aDogMjcsXHJcbiAgICAgICAgICAgIGhlaWdodDogMzUsXHJcbiAgICAgICAgICAgIGNhbGxvdXQ6IHtcclxuICAgICAgICAgICAgICBjb250ZW50OiBpdGVtLm5lZWROYW1lP2l0ZW0ubmVlZE5hbWU6J+acquWhq+aKpScsXHJcbiAgICAgICAgICAgICAgY29sb3I6ICcjMDAwJyxcclxuICAgICAgICAgICAgICBmb250U2l6ZTogMTgsXHJcbiAgICAgICAgICAgICAgYmdDb2xvcjogJyNGRkYnLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDUsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI0NDQycsXHJcbiAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ0JZQ0xJQ0snXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9sZElkOiBpdGVtLmlkLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WOn+Wni0lEXHJcbiAgICAgICAgICAgIHRpdGxlOiBpdGVtLm5lZWROYW1lP2l0ZW0ubmVlZE5hbWU6J+acquWhq+aKpScsICAgICAgICAgICAgICAvL+agh+mimFxyXG4gICAgICAgICAgICBpbWdBcnI6IGl0ZW0ubmVlZEZpbGVzLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lm77niYfmlbDnu4RcclxuICAgICAgICAgICAgcHJvdmluY2VOYW1lOiBpdGVtLnByb3ZpbmNlTmFtZT9pdGVtLnByb3ZpbmNlTmFtZTonJywgICAgIC8v55yBXHJcbiAgICAgICAgICAgIGNpdHlOYW1lOiBpdGVtLmNpdHlOYW1lP2l0ZW0uY2l0eU5hbWU6JycsICAgICAgICAgICAgICAgICAvL+W4glxyXG4gICAgICAgICAgICBkaXN0cmljdE5hbWU6IGl0ZW0uZGlzdHJpY3ROYW1lP2l0ZW0uZGlzdHJpY3ROYW1lOicnLCAgICAgLy/ljLpcclxuICAgICAgICAgICAgYWRkcmVzczogaXRlbS50ZW5hbnROYW1lICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6K+m57uG5Zyw5Z2AXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMuZGF0YS50b3RhbCA9PSAwKXtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIG1hcmtlcnM6IGxpc3QsICAgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgdG90YWw6IHJlcy50b3RhbCwgICAgICAgLy/mgLvmlbBcclxuICAgICAgICAgICAgbXVtTGlzdDogbGlzdCwgICAgICAgICAgICAgICAgLy/liJfooahcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBtYXJrZXJzOiB0aGlzLmRhdGEubWFya2Vycy5jb25jYXQobGlzdCksICAgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgbXVtTGlzdDogdGhpcy5kYXRhLm11bUxpc3QuY29uY2F0KGxpc3QpLCAgICAgICAgICAgICAgIC8v5YiX6KGoXHJcbiAgICAgICAgICAgIHRvdGFsOiByZXMudG90YWwsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5oC75pWwXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5kYXRhLm11bUxpc3QubGVuZ3RoIDwgcmVzLnRvdGFsKXtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIG1vcmVTaG93OiB0cnVlLFxyXG4gICAgICAgICAgICBtb3JlVGl0bGU6ICfngrnlh7vliqDovb3mm7TlpJonLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIG1vcmVTaG93OiB0cnVlLFxyXG4gICAgICAgICAgICBtb3JlVGl0bGU6ICflt7LliqDovb3lhajpg6gnLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5kYXRhLm11bUxpc3QubGVuZ3RoIDwgcmVzLnRvdGFsKXtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIG1vcmVTaG93OiB0cnVlLFxyXG4gICAgICAgICAgICBtb3JlVGl0bGU6ICfngrnlh7vliqDovb3mm7TlpJonLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIG1vcmVTaG93OiB0cnVlLFxyXG4gICAgICAgICAgICBtb3JlVGl0bGU6ICflt7LliqDovb3lhajpg6gnLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHR6QXJlYUZuKGU6YW55KTp2b2lkeyAgICAvL+aKlei1hOWMuuWfn+inpuWPkVxyXG4gICAgbGV0IGlkOmFueSA9IGUudGFyZ2V0LmRhdGFzZXQuaWQ7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICB0ekFyZWFDbGFzczogaWQsXHJcbiAgICAgIHR6QXJlYUlkOiBpZCwgICAgICAgIC8v5oqV6LWE5Yy65Z+fSURcclxuICAgIH0pXHJcbiAgfSxcclxuICB0eldheUZuKGU6YW55KTp2b2lkeyAgICAgLy/mipXotYTmlrnlvI/op6blj5FcclxuICAgIGxldCBpZDphbnkgPSBlLnRhcmdldC5kYXRhc2V0LmlkO1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgdHpXYXlDbGFzczogaWQsXHJcbiAgICAgIHR6V2F5SWQ6IGlkLCAgICAgICAgIC8v5oqV6LWE5pa55byPSURcclxuICAgIH0pXHJcbiAgfSxcclxuICB0ek90aGVyRm4oZTphbnkpOnZvaWR7ICAgICAvL+aKlei1hOmHkemineinpuWPkVxyXG4gICAgbGV0IGlkOmFueSA9IGUudGFyZ2V0LmRhdGFzZXQuaWQ7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICB0ek90aGVyQ2xhc3M6IGlkLFxyXG4gICAgICB0ek90aGVySWQ6IGlkLCAgICAgICAgIC8v5oqV6LWE6YeR6aKdSURcclxuICAgIH0pXHJcbiAgfSxcclxuICB0elR5cGVGbihlOmFueSk6dm9pZHsgICAgICAvL+aKlei1hOexu+Wei+inpuWPkVxyXG4gICAgbGV0IGlkOmFueSA9IGUudGFyZ2V0LmRhdGFzZXQuaWQ7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICB0elR5cGVDbGFzczogaWQsXHJcbiAgICAgIHR6VHlwZUlkOiBpZCwgICAgICAgICAvL+aKlei1hOexu+Wei0lEXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgdHpOYXZJdGVtKGRhdGE6YW55KTp2b2lkeyAgICAgICAvL+aJvuaKlei1hOihjOS4muS6p+S4mu+8iOW3puS+p+WvvOiIqueCueWHu+aXtu+8jOinpuWPkeeahOS6i+S7tu+8iVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgdHpJbmRleDogZGF0YS5kZXRhaWwuaW5kZXggfHwgMCxcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgdHpJbmR1c3RyeUl0ZW0oZGF0YTphbnkpOnZvaWQgeyAgLy/mib7mipXotYTooYzkuJrkuqfkuJrvvIjlj7PkvqfpgInmi6npobnooqvngrnlh7vml7bvvIzkvJrop6blj5HnmoTkuovku7bvvIlcclxuICAgIGNvbnN0IGlkID0gdGhpcy5kYXRhLnR6SW5kdXN0cnlJZCA9PT0gZGF0YS5kZXRhaWwuaWQgPyBudWxsIDogZGF0YS5kZXRhaWwuaWQ7XHJcbiAgICBjb25zdCBwSWQgPSBkYXRhLmRldGFpbC5wSWQ7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICB0ekluZHVzdHJ5SWQ6IGlkLFxyXG4gICAgICB0ekN5VHlwZUlkOiBwSWQgPyBwSWQgOiAnJywgICAgICAgICAgLy/kuqfkuJppZFxyXG4gICAgICB0ekh5VHlwZUlkOiBpZCA9PSBwSWQgPyAnJyA6IGlkLCAgICAgLy/ooYzkuJppZFxyXG4gICAgfSlcclxuICB9LFxyXG4gIHR6UmVzZXQoZTphbnkpOnZvaWR7ICAvL+aJvuaKlei1hOmHjee9rlxyXG4gICAgbGV0IGZsYWc6bnVtYmVyID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuZmxhZztcclxuICAgIGlmKGZsYWcgPT0gMSl7ICAvL+aKlei1hOWMuuWfn1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHR6QXJlYUNsYXNzOiBudWxsLFxyXG4gICAgICAgIHR6QXJlYUlkOiAnJywgICAgICAgICAgICAgICAvL+aKlei1hOWMuuWfn0lEXHJcbiAgICAgICAgbnVtOiAwLCAgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgICAvLzbmib7liJfooahcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyN0ekFyZWFJZCcpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAgLy/mipXotYTljLrln5/lhbPpl61cclxuICAgIH1lbHNlIGlmKGZsYWcgPT0gMil7ICAvL+aKlei1hOaWueW8j1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHR6V2F5Q2xhc3M6IG51bGwsXHJcbiAgICAgICAgdHpXYXlJZDogJycsICAgICAgICAgICAgICAvL+aKlei1hOaWueW8j0lEXHJcbiAgICAgICAgbnVtOiAwLCAgICAgICAgICAgICAgICAgICAgLy825om+57uT5p6cXHJcbiAgICAgICAgbXVtTGlzdDogW10sICAgICAgICAgICAgICAgLy825om+5YiX6KGoXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjdHpXYXlJZCcpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAvL+aKlei1hOaWueW8j+WFs+mXrVxyXG4gICAgfWVsc2UgaWYoZmxhZyA9PSAzKXsgIC8v5Lqn5Lia6KGM5LiaXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgdHpJbmRleDogMCwgICAgICAgICAgICAgICAgLy/lvZPliY3ntKLlvJVcclxuICAgICAgICB0ekluZHVzdHJ5SWQ6IG51bGwsICAgICAgICAvL+mAieS4reeahGlkXHJcbiAgICAgICAgdHpDeVR5cGVJZDogJycsICAgICAgICAgICAgLy/kuqfkuJppZFxyXG4gICAgICAgIHR6SHlUeXBlSWQ6ICcnLCAgICAgICAgICAgIC8v6KGM5LiaaWRcclxuICAgICAgICBudW06IDAsICAgICAgICAgICAgICAgICAgICAvLzbmib7nu5PmnpxcclxuICAgICAgICBtdW1MaXN0OiBbXSwgICAgICAgICAgICAgICAvLzbmib7liJfooahcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyN0ekluZHVzdHJ5SWQnKS50b2dnbGUoZmFsc2UpOyAgICAgICAgLy/kuqfkuJrooYzkuJrlhbPpl61cclxuICAgIH1lbHNleyAgLy/mm7TlpJpcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICB0ek90aGVyQ2xhc3M6IG51bGwsXHJcbiAgICAgICAgdHpPdGhlcklkOiAnJywgICAgICAgICAgICAgLy/mipXotYTph5Hpop1JRFxyXG4gICAgICAgIHR6VHlwZUNsYXNzOiBudWxsLFxyXG4gICAgICAgIHR6VHlwZUlkOiAnJywgICAgICAgICAgICAgIC8v5oqV6LWE57G75Z6LSURcclxuICAgICAgICBudW06IDAsICAgICAgICAgICAgICAgICAgICAvLzbmib7nu5PmnpxcclxuICAgICAgICBtdW1MaXN0OiBbXSwgICAgICAgICAgICAgICAvLzbmib7liJfooahcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyN0ek1vcmVJZCcpLnRvZ2dsZShmYWxzZSk7ICAgICAvLy/mm7TlpJrlhbPpl61cclxuICAgIH1cclxuICAgIHRoaXMuZ2V0VHpMaXN0KCk7ICAgICAgICAgICAgLy/mib7otYTph5HvvIjph5Hono1cclxuICB9LFxyXG4gIHR6U3VibWl0KGU6YW55KTp2b2lkeyAgLy/mib7mipXotYTlrozmiJBcclxuICAgIGxldCBmbGFnOm51bWJlciA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmZsYWc7XHJcbiAgICBpZihmbGFnID09IDEpe1xyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI3R6QXJlYUlkJykudG9nZ2xlKGZhbHNlKTsgICAgICAgICAvL+aKlei1hOWMuuWfn+WFs+mXrVxyXG4gICAgfWVsc2UgaWYoZmxhZyA9PSAyKXtcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyN0eldheUlkJykudG9nZ2xlKGZhbHNlKTsgICAgICAgICAgLy/mipXotYTmlrnlvI/lhbPpl61cclxuICAgIH1lbHNlIGlmKGZsYWcgPT0gMyl7XHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjdHpJbmR1c3RyeUlkJykudG9nZ2xlKGZhbHNlKTsgICAgICAvL+S6p+S4muihjOS4muWFs+mXrVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjdHpNb3JlSWQnKS50b2dnbGUoZmFsc2UpOyAgICAgICAgICAvLy/mm7TlpJrlhbPpl61cclxuICAgIH1cclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICBtdW1MaXN0OiBbXSwgICAgICAgICAgICAgICAvLzbmib7liJfooahcclxuICAgICAgbWFya2VyczpbXSwgICAgICAgICAgICAgICAvL+agh+iusOeCueWkhOeQhuWQjueahOaVsOaNru+8iGlk44CB5p+l6K+i5L2/55So77yJXHJcbiAgICAgIHBhZ2VTaXplOiAxMCwgICAgICAgICAgICAgLy/mr4/pobXmmL7npLrmlbDph49cclxuICAgICAgcGFnZUluZGV4OiAxLCAgICAgICAgICAgICAvL+W9k+WJjemhtVxyXG4gICAgICB0b3RhbDogMCwgICAgICAgICAgICAgICAgIC8v5oC75p2h5pWwXHJcbiAgICB9KVxyXG4gICAgdGhpcy5nZXRUekxpc3QoKTsgICAgICAgICAgICAvL+aJvui1hOmHke+8iOmHkeiejVxyXG4gIH0sXHJcblxyXG4gIC8v5om+6LWE6YeR77yI6J6N6LWE77yJXHJcbiAgZ2V0UnpMaXN0KCl7ICAvL+aJvui1hOmHke+8iOiejei1hO+8iVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgcHRUaXRsZTogJ+iejei1hCcsICAgICAgICAvL+afpeivouagh+mimFxyXG4gICAgICBtb3JlU2hvdzogZmFsc2UsXHJcbiAgICB9KVxyXG4gICAgaHR0cHMucmVxdWVzdChhcGkucm9uZ3ppLCB7XHJcbiAgICAgIHRlbmFudElkOiBhcGkuYXJlYUlkLCAgICAgICAgICAgICAgICAgIC8v5Zyw5Yy6aWRcclxuICAgICAga2V5OiB0aGlzLmRhdGEuc2VhcmNoS2V5LCAgICAgICAgICAgICAvL+WFs+mUruWtl+aQnOe0olxyXG4gICAgICBwYWdlU2l6ZTogdGhpcy5kYXRhLnBhZ2VTaXplLCAgICAgICAgIC8v5q+P6aG15pi+56S65pWw6YePXHJcbiAgICAgIHBhZ2VJbmRleDogdGhpcy5kYXRhLnBhZ2VJbmRleCwgICAgICAgLy/pobXmlbBcclxuXHJcbiAgICAgIHJ6V2F5OiB0aGlzLmRhdGEucnpDYXRlZ29yeUlkLCAgICAgICAgLy/ono3otYTmlrnlvI9cclxuICAgICAgcnpNb25leTogdGhpcy5kYXRhLnJ6RmluYW5jaW5nSWQsICAgICAvL+iejei1hOmHkeminVxyXG4gICAgICBjeVR5cGVJZDogdGhpcy5kYXRhLnJ6Q3lUeXBlSWQsICAgICAgIC8v5Lqn5LiaaWRcclxuICAgICAgaHlUeXBlSWQ6IHRoaXMuZGF0YS5yekh5VHlwZUlkICAgICAgICAvL+ihjOS4mmlkXHJcbiAgICB9LCAnR0VUJykudGhlbigocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICBpZihyZXMpe1xyXG4gICAgICAgIC8v6J6N6LWE77yI6ZyA5rGC77yJXHJcbiAgICAgICAgbGV0IHJvbmd6aU5lZWRzTGlzdDphbnkgPSByZXMudmFsLm5lZWRMaXN0Lm1hcCgoaXRlbTphbnkpOmFueT0+e1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgIG5hbWU6ICfono3otYQnLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6K+m5oOF5Yik5patXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZTogaXRlbS5sbmcsICAgLy/nu4/luqZcclxuICAgICAgICAgICAgbGF0aXR1ZGU6IGl0ZW0ubGF0LCAgICAvL+e6rOW6plxyXG4gICAgICAgICAgICBpY29uUGF0aDogJy4uLy4uL2ltYWdlcy9yei5wbmcnLCAgICAgICAgICAgICAvL+agh+iusFxyXG4gICAgICAgICAgICB3aWR0aDogMjcsXHJcbiAgICAgICAgICAgIGhlaWdodDogMzUsXHJcbiAgICAgICAgICAgIGNhbGxvdXQ6IHtcclxuICAgICAgICAgICAgICBjb250ZW50OiBpdGVtLm5lZWROYW1lP2l0ZW0ubmVlZE5hbWU6J+acquWhq+aKpScsXHJcbiAgICAgICAgICAgICAgY29sb3I6ICcjMDAwJyxcclxuICAgICAgICAgICAgICBmb250U2l6ZTogMTQsXHJcbiAgICAgICAgICAgICAgYmdDb2xvcjogJyNGRkYnLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDUsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI0NDQycsXHJcbiAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ0JZQ0xJQ0snXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRpdGxlOiBpdGVtLm5lZWROYW1lLCAgICAgICAgICAgICAgICAgICAvL+agh+mimFxyXG4gICAgICAgICAgICBpbWdBcnI6IGl0ZW0ubmVlZEZpbGVzLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lm77niYfmlbDnu4RcclxuICAgICAgICAgICAgcHJvdmluY2VOYW1lOiBpdGVtLnByb3ZpbmNlTmFtZT9pdGVtLnByb3ZpbmNlTmFtZTonJywgICAgIC8v55yBXHJcbiAgICAgICAgICAgIGNpdHlOYW1lOiBpdGVtLmNpdHlOYW1lP2l0ZW0uY2l0eU5hbWU6JycsICAgICAgICAgICAgICAgICAvL+W4glxyXG4gICAgICAgICAgICBkaXN0cmljdE5hbWU6IGl0ZW0uZGlzdHJpY3ROYW1lP2l0ZW0uZGlzdHJpY3ROYW1lOicnLCAgICAgLy/ljLpcclxuICAgICAgICAgICAgYWRkcmVzczogaXRlbS50ZW5hbnROYW1lICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6K+m57uG5Zyw5Z2AXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy/ono3otYTvvIjpobnnm67vvIlcclxuICAgICAgICBsZXQgcm9uZ3ppUHJvc0xpc3Q6YW55ID0gcmVzLnZhbC5wcm9MaXN0Lm1hcCgoaXRlbTphbnkpOmFueT0+e1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgIG5hbWU6ICfpobnnm64nLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6K+m5oOF5Yik5patXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZTogaXRlbS5sbmcsICAgLy/nu4/luqZcclxuICAgICAgICAgICAgbGF0aXR1ZGU6IGl0ZW0ubGF0LCAgICAvL+e6rOW6plxyXG4gICAgICAgICAgICBpY29uUGF0aDogJy4uLy4uL2ltYWdlcy94bS5wbmcnLCAgICAgICAgICAgICAvL+agh+iusFxyXG4gICAgICAgICAgICB3aWR0aDogMjcsXHJcbiAgICAgICAgICAgIGhlaWdodDogMzUsXHJcbiAgICAgICAgICAgIGNhbGxvdXQ6IHtcclxuICAgICAgICAgICAgICBjb250ZW50OiBpdGVtLnByb05hbWU/aXRlbS5wcm9OYW1lOifmnKrloavmiqUnLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IDE0LFxyXG4gICAgICAgICAgICAgIGJnQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1LFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNDQ0MnLFxyXG4gICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdCWUNMSUNLJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0aXRsZTogaXRlbS5wcm9OYW1lLCAgICAgICAgICAgICAgICAgICAvL+agh+mimFxyXG4gICAgICAgICAgICBpbWdBcnI6IGl0ZW0ucGljdHVyZUZpbGVzLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lm77niYfmlbDnu4RcclxuICAgICAgICAgICAgcHJvdmluY2VOYW1lOiBpdGVtLnByb3ZpbmNlTmFtZT9pdGVtLnByb3ZpbmNlTmFtZTonJywgICAgIC8v55yBXHJcbiAgICAgICAgICAgIGNpdHlOYW1lOiBpdGVtLmNpdHlOYW1lP2l0ZW0uY2l0eU5hbWU6JycsICAgICAgICAgICAgICAgICAvL+W4glxyXG4gICAgICAgICAgICBkaXN0cmljdE5hbWU6IGl0ZW0uZGlzdHJpY3ROYW1lP2l0ZW0uZGlzdHJpY3ROYW1lOicnLCAgICAgLy/ljLpcclxuICAgICAgICAgICAgYWRkcmVzczogaXRlbS5hZGRyZXNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/or6bnu4blnLDlnYBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvL+WkhOeQhklE5Li65pWw5a2XXHJcbiAgICAgICAgbGV0IGxpc3Q6YW55ICA9IHJvbmd6aU5lZWRzTGlzdC5jb25jYXQocm9uZ3ppUHJvc0xpc3QpO1xyXG4gICAgICAgIGxldCBuZXdNYXJrZXJzTGlzdDphbnkgPSBsaXN0Lm1hcCgoaXRlbTphbnksIGluZGV4Om51bWJlcik6YW55PT57XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogaW5kZXgsICAgICAgICAgICAgICAgICAgIC8vbWFw55So55qE6Ieq5a6a5LmJSURcclxuICAgICAgICAgICAgbmFtZTogaXRlbS5uYW1lLCAgICAgICAgICAgICAvL+ivpuaDheWIpOaWrVxyXG4gICAgICAgICAgICBsb25naXR1ZGU6IGl0ZW0ubG9uZ2l0dWRlLCAgIC8v57uP5bqmXHJcbiAgICAgICAgICAgIGxhdGl0dWRlOiBpdGVtLmxhdGl0dWRlLCAgICAgLy/nuqzluqZcclxuICAgICAgICAgICAgaWNvblBhdGg6IGl0ZW0uaWNvblBhdGgsICAgICAvL+agh+iusFxyXG4gICAgICAgICAgICB3aWR0aDogMjcsXHJcbiAgICAgICAgICAgIGhlaWdodDogMzUsXHJcbiAgICAgICAgICAgIGNhbGxvdXQ6IGl0ZW0uY2FsbG91dCxcclxuICAgICAgICAgICAgb2xkSWQ6IGl0ZW0uaWQsICAgICAgICAgICAgICAgICAgICAgIC8v5Y6f5aeLSURcclxuICAgICAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsICAgICAgICAgICAgICAgICAgIC8v5qCH6aKYXHJcbiAgICAgICAgICAgIGltZ0FycjogaXRlbS5pbWdBcnIsICAgICAgICAgICAgICAgICAvL+WbvueJh+aVsOe7hFxyXG4gICAgICAgICAgICBwcm92aW5jZU5hbWU6IGl0ZW0ucHJvdmluY2VOYW1lLCAgICAgLy/nnIFcclxuICAgICAgICAgICAgY2l0eU5hbWU6IGl0ZW0uY2l0eU5hbWUsICAgICAgICAgICAgIC8v5biCXHJcbiAgICAgICAgICAgIGRpc3RyaWN0TmFtZTogaXRlbS5kaXN0cmljdE5hbWUsICAgICAvL+WMulxyXG4gICAgICAgICAgICBhZGRyZXNzOiBpdGVtLmFkZHJlc3MgICAgICAgICAgICAgICAgLy/or6bnu4blnLDlnYBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMuZGF0YS50b3RhbCA9PSAwKXtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIG1hcmtlcnM6IG5ld01hcmtlcnNMaXN0LCAgICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIHRvdGFsOiByZXMudmFsLnRvdGFsLCAgICAgICAgICAgICAgICAgIC8v5oC75pWwXHJcbiAgICAgICAgICAgIG11bUxpc3Q6IG5ld01hcmtlcnNMaXN0LCAgICAgICAgICAgICAgICAvL+WIl+ihqFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIG1hcmtlcnM6IHRoaXMuZGF0YS5tYXJrZXJzLmNvbmNhdChuZXdNYXJrZXJzTGlzdCksICAgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgbXVtTGlzdDogdGhpcy5kYXRhLm11bUxpc3QuY29uY2F0KG5ld01hcmtlcnNMaXN0KSwgICAgICAgICAgICAgICAvL+WIl+ihqFxyXG4gICAgICAgICAgICB0b3RhbDogcmVzLnZhbC50b3RhbCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5oC75pWwXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5kYXRhLm11bUxpc3QubGVuZ3RoIDwgcmVzLnZhbC50b3RhbCl7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBtb3JlU2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgbW9yZVRpdGxlOiAn54K55Ye75Yqg6L295pu05aSaJyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBtb3JlU2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgbW9yZVRpdGxlOiAn5bey5Yqg6L295YWo6YOoJyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICByekNhdGVnb3J5Rm4oZTphbnkpOnZvaWR7ICAgICAvL+iejei1hOaWueW8j+inpuWPkVxyXG4gICAgbGV0IGlkOmFueSA9IGUudGFyZ2V0LmRhdGFzZXQuaWQ7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICByekNhdGVnb3J5Q2xhc3M6IGlkLFxyXG4gICAgICByekNhdGVnb3J5SWQ6IGlkLCAgICAgICAgIC8v6ZyA5rGC57G75YirSURcclxuICAgIH0pXHJcbiAgfSxcclxuICByekZpbmFuY2luZ0ZuKGU6YW55KTp2b2lkeyAgICAgLy/ono3otYTph5Hpop3op6blj5FcclxuICAgIGxldCBpZDphbnkgPSBlLnRhcmdldC5kYXRhc2V0LmlkO1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgcnpGaW5hbmNpbmdDbGFzczogaWQsXHJcbiAgICAgIHJ6RmluYW5jaW5nSWQ6IGlkLCAgICAgICAgIC8v6J6N6LWE6YeR6aKdSURcclxuICAgIH0pXHJcbiAgfSxcclxuICByek5hdkl0ZW0oZGF0YTphbnkpOnZvaWR7ICAgICAgIC8v5om+6J6N6LWE6KGM5Lia5Lqn5Lia77yI5bem5L6n5a+86Iiq54K55Ye75pe277yM6Kem5Y+R55qE5LqL5Lu277yJXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICByekluZGV4OiBkYXRhLmRldGFpbC5pbmRleCB8fCAwLFxyXG4gICAgfSk7XHJcbiAgfSxcclxuICByekluZHVzdHJ5SXRlbShkYXRhOmFueSk6dm9pZCB7ICAvL+aJvuiejei1hOihjOS4muS6p+S4mu+8iOWPs+S+p+mAieaLqemhueiiq+eCueWHu+aXtu+8jOS8muinpuWPkeeahOS6i+S7tu+8iVxyXG4gICAgY29uc3QgaWQgPSB0aGlzLmRhdGEucnpJbmR1c3RyeUlkID09PSBkYXRhLmRldGFpbC5pZCA/IG51bGwgOiBkYXRhLmRldGFpbC5pZDtcclxuICAgIGNvbnN0IHBJZCA9IGRhdGEuZGV0YWlsLnBJZDtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHJ6SW5kdXN0cnlJZDogaWQsXHJcbiAgICAgIHJ6Q3lUeXBlSWQ6IHBJZCA/IHBJZCA6ICcnLCAgICAgICAgICAvL+S6p+S4mmlkXHJcbiAgICAgIHJ6SHlUeXBlSWQ6IGlkID09IHBJZCA/ICcnIDogaWQsICAgICAvL+ihjOS4mmlkXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgcnpSZXNldChlOmFueSk6dm9pZHsgIC8v5om+6J6N6LWE6YeN572uXHJcbiAgICBsZXQgZmxhZzpudW1iZXIgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5mbGFnO1xyXG4gICAgaWYoZmxhZyA9PSAxKXsgIC8v5om+6J6N6LWE6ZyA5rGC57G75YirXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgcnpDYXRlZ29yeUNsYXNzOiBudWxsLFxyXG4gICAgICAgIHJ6Q2F0ZWdvcnlJZDogJycsICAgICAgICAgICAvL+aJvuiejei1hOmcgOaxguexu+WIq0lEXHJcbiAgICAgICAgbnVtOiAwLCAgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgICAvLzbmib7liJfooahcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyNyekNhdGVnb3J5SWQnKS50b2dnbGUoZmFsc2UpOyAgICAgICAgIC8v5om+6J6N6LWE6ZyA5rGC57G75Yir5YWz6ZetXHJcbiAgICB9ZWxzZSBpZihmbGFnID09IDIpeyAgLy/ono3otYTph5Hpop3op6blj5FcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICByekZpbmFuY2luZ0NsYXNzOiBudWxsLFxyXG4gICAgICAgIHJ6RmluYW5jaW5nSWQ6ICcnLCAgICAgICAgICAgICAvL+aJvuiejei1hOiejei1hOmHkeminUlEXHJcbiAgICAgICAgbnVtOiAwLCAgICAgICAgICAgICAgICAgICAgLy825om+57uT5p6cXHJcbiAgICAgICAgbXVtTGlzdDogW10sICAgICAgICAgICAgICAgLy825om+5YiX6KGoXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjcnpTdGFnZUlkJykudG9nZ2xlKGZhbHNlKTsgICAgICAgIC8v5om+6J6N6LWE5omA5aSE6Zi25q615YWz6ZetXHJcbiAgICB9ZWxzZSBpZihmbGFnID09IDMpeyAgLy/kuqfkuJrooYzkuJpcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICByekluZGV4OiAwLCAgICAgICAgICAgICAgICAvL+W9k+WJjee0ouW8lVxyXG4gICAgICAgIHJ6SW5kdXN0cnlJZDogbnVsbCwgICAgICAgIC8v6YCJ5Lit55qEaWRcclxuICAgICAgICByekN5VHlwZUlkOiAnJywgICAgICAgICAgICAvL+S6p+S4mmlkXHJcbiAgICAgICAgcnpIeVR5cGVJZDogJycsICAgICAgICAgICAgLy/ooYzkuJppZFxyXG4gICAgICAgIG51bTogMCwgICAgICAgICAgICAgICAgICAgIC8vNuaJvue7k+aenFxyXG4gICAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgIC8vNuaJvuWIl+ihqFxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI3J6SW5kdXN0cnlJZCcpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAvL+S6p+S4muihjOS4muWFs+mXrVxyXG4gICAgfVxyXG4gICAgdGhpcy5nZXRSekxpc3QoKTsgICAgICAgICAgICAvL+aJvui1hOmHke+8iOiejei1hClcclxuICB9LFxyXG4gIHJ6U3VibWl0KGU6YW55KTp2b2lkeyAgLy/mib7ono3otYTlrozmiJBcclxuICAgIGxldCBmbGFnOm51bWJlciA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmZsYWc7XHJcbiAgICBpZihmbGFnID09IDEpe1xyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI3J6Q2F0ZWdvcnlJZCcpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAgLy/mib7ono3otYTpnIDmsYLnsbvliKvlhbPpl61cclxuICAgIH1lbHNlIGlmKGZsYWcgPT0gMil7XHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjcnpTdGFnZUlkJykudG9nZ2xlKGZhbHNlKTsgICAgICAgIC8v5om+6J6N6LWE5omA5aSE6Zi25q615YWz6ZetXHJcbiAgICB9ZWxzZSBpZihmbGFnID09IDMpe1xyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI3J6SW5kdXN0cnlJZCcpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAvL+S6p+S4muihjOS4muWFs+mXrVxyXG4gICAgfVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgbnVtOiAwLCAgICAgICAgICAgICAgICAgICAgLy825om+57uT5p6cXHJcbiAgICAgIG11bUxpc3Q6IFtdLCAgICAgICAgICAgICAgIC8vNuaJvuWIl+ihqFxyXG4gICAgICBtYXJrZXJzOltdLCAgICAgICAgICAgICAgIC8v5qCH6K6w54K55aSE55CG5ZCO55qE5pWw5o2u77yIaWTjgIHmn6Xor6Lkvb/nlKjvvIlcclxuICAgICAgcGFnZVNpemU6IDEwLCAgICAgICAgICAgICAvL+avj+mhteaYvuekuuaVsOmHj1xyXG4gICAgICBwYWdlSW5kZXg6IDEsICAgICAgICAgICAgIC8v5b2T5YmN6aG1XHJcbiAgICAgIHRvdGFsOiAwLCAgICAgICAgICAgICAgICAgLy/mgLvmnaHmlbBcclxuICAgIH0pXHJcbiAgICB0aGlzLmdldFJ6TGlzdCgpOyAgICAgICAgICAgIC8v5om+6LWE6YeR77yI6J6N6LWEKVxyXG4gIH0sXHJcblxyXG4gIFxyXG5cclxuICAvL+i3r+e6v+WvvOiIqlxyXG4gIG5hdmlnYXRpb24oZTphbnkpOnZvaWR7XHJcbiAgICBpZighIWUuY3VycmVudFRhcmdldC5kYXRhc2V0LmxvbmdpdHVkZSl7ICAvL+WkhOeQhjbmib7liJfooajlr7zoiKpcclxuICAgICAgbGV0IHRpdGxlOnN0cmluZyA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnRpdGxlO1xyXG4gICAgICBsZXQgbG9uZ2l0dWRlOmFueSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmxvbmdpdHVkZTtcclxuICAgICAgbGV0IGxhdGl0dWRlOmFueSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmxhdGl0dWRlO1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGdvTmFtZTogdGl0bGUsXHJcbiAgICAgICAgZ29Mb25naXR1ZGU6IGxvbmdpdHVkZSxcclxuICAgICAgICBnb0xhdGl0dWRlOiBsYXRpdHVkZVxyXG4gICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGVuZFBvaW50OmFueSA9IEpTT04uc3RyaW5naWZ5KHsgIC8v57uI54K5XHJcbiAgICAgICduYW1lJzogdGhpcy5kYXRhLmdvTmFtZSxcclxuICAgICAgJ2xvbmdpdHVkZSc6IHBhcnNlRmxvYXQodGhpcy5kYXRhLmdvTG9uZ2l0dWRlKSxcclxuICAgICAgJ2xhdGl0dWRlJzogcGFyc2VGbG9hdCh0aGlzLmRhdGEuZ29MYXRpdHVkZSlcclxuICAgIH0pO1xyXG5cclxuICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICB1cmw6ICdwbHVnaW46Ly9yb3V0ZVBsYW4vaW5kZXg/a2V5PScgKyBhcGkubWFwQXBpS2V5ICsgJyZyZWZlcmVyPeaJjei1i+S6kScgKyAnJmVuZFBvaW50PScgKyBlbmRQb2ludFxyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcblxyXG4gIC8v6YCJ5oup5biC5Yy6XHJcbiAgbWFwQXJlYSgpOnZvaWR7XHJcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgdXJsOlwiLi4vbWFwQXJlYS9tYXBBcmVhXCJcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcblxyXG4gIC8v5Zyw5Zu+6K+m5oOFXHJcbiAgbWFwRGV0YWlsKGU6YW55KTp2b2lkIHtcclxuICAgIGxldCBuYW1lOlN0cmluZyA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0Lm5hbWU7XHJcbiAgICBsZXQgaWQ6U3RyaW5nID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQ7XHJcblxyXG4gICAgbGV0IHRva2VuOnN0cmluZyA9IHd4LmdldFN0b3JhZ2VTeW5jKCd0b2tlbicpO1xyXG4gICAgaWYoISF0b2tlbil7XHJcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybDpcIi4uL21hcERldGFpbC9tYXBEZXRhaWw/bmFtZT1cIiArIG5hbWUgKyAnJmlkPScgKyBpZFxyXG4gICAgICB9KVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIERpYWxvZy5hbGVydCh7XHJcbiAgICAgICAgbWVzc2FnZTogJ+eZu+W9leWQjuaJjeiDveafpeeci+ivpuaDhe+8gScsXHJcbiAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgdXJsOiAnLi4vbG9naW5Gb3JtL2xvZ2luRm9ybSdcclxuICAgICAgICB9KVxyXG4gICAgICB9KTtcclxuICAgIH0gXHJcbiAgfSxcclxuXHJcblxyXG4gIC8v54K55Ye75qCH6K6w54K55rCU5rOh56qX5Y+j6Kem5Y+RXHJcbiAgbWFya0ZuKGU6YW55KTp2b2lkIHtcclxuICAgIC8v5p+l6K+i5Y2V5p2h5pWw5o2uXHJcbiAgICBsZXQgYXJyOmFueSA9IHRoaXMuZGF0YS5tYXJrZXJzLmZpbHRlcigoaXRlbTphbnkpOmFueT0+e1xyXG4gICAgICByZXR1cm4gaXRlbS5pZCA9PSBlLmRldGFpbC5tYXJrZXJJZDtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmKGFyci5sZW5ndGggPj0gMSl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgZ29OYW1lOiBhcnJbMF0uY2FsbG91dC5jb250ZW50LCAgICAgICAgIC8v6KaB5Y6755qE5Zyw5Z2AXHJcbiAgICAgICAgZ29Mb25naXR1ZGU6IGFyclswXS5sb25naXR1ZGUsICAgICAgICAgIC8v5Lit5b+D57uP5bqmKOe7iOeCuSlcclxuICAgICAgICBnb0xhdGl0dWRlOiBhcnJbMF0ubGF0aXR1ZGUsICAgICAgICAgICAgLy/kuK3lv4PnuqzluqYo57uI54K5KVxyXG4gICAgICAgIG1hcmtlcnNPYmo6IGFyclswXSwgICAgICAgICAgICAgICAgICAgICAvL+WNleadoeWIl+ihqOaVsOaNrlxyXG4gICAgICAgIGlzTGlzdFNob3c6IGZhbHNlLCAgICAgICAgICAgICAgICAgICAgICAvL+m7mOiupOaYvuekujbmib7lhoXlrrlcclxuICAgICAgICBpc0luZm9TaG93OiB0cnVlLCAgICAgICAgICAgICAgICAgICAgICAgLy/ljZXmnaHkv6Hmga/mmL7npLpcclxuICAgICAgICBpc1NlYXJjaFNob3c6IGZhbHNlLCAgICAgICAgICAgICAgICAgICAgLy/mkJzntKLnu5PmnpzmlbDmja5cclxuICAgICAgICBpc1NlYXJjaEluZm9TaG93OiBmYWxzZSwgICAgICAgICAgICAgICAgLy/mkJzntKLliJfooajmlbDmja5cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG5cclxuXHJcbiAgLy/lhbPpl63ljZXmnaHkv6Hmga/lm57pu5jorqRcclxuICBjbG9zZUZuKCk6dm9pZHtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGlzTGlzdFNob3c6IGZhbHNlLCAgICAgICAgICAgICAgICAgICAgICAgLy/pu5jorqTmmL7npLo25om+5YaF5a65XHJcbiAgICAgIGlzSW5mb1Nob3c6IGZhbHNlLCAgICAgICAgICAgICAgICAgICAgICAvL+WNleadoeS/oeaBr+aYvuekulxyXG4gICAgICBpc1NlYXJjaFNob3c6IHRydWUsICAgICAgICAgICAgICAgICAgICAvL+aQnOe0oue7k+aenOaVsOaNrlxyXG4gICAgICBpc1NlYXJjaEluZm9TaG93OiBmYWxzZSwgICAgICAgICAgICAgICAgLy/mkJzntKLliJfooajmlbDmja5cclxuICAgIH0pXHJcbiAgfSxcclxuXHJcblxyXG4gIC8v6aqM6K+B55So5oi355m75b2V54q25oCBXHJcbiAgdmVyaWZpY2F0aW9uKCk6dm9pZHtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGltZ1VybDogYXBpLmltZ1VybCArICc/ZmlsZVBhdGg9J1xyXG4gICAgfSlcclxuICAgIGlmKGFwaS5hcmVhTmFtZSAmJiBhcGkuYXJlYU5hbWUgIT0gJ+mdkuWym+W4gicpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHBhZ2VTaXplOiAxMCwgICAgICAgICAgICAgICAvL+avj+mhteaYvuekuuaVsOmHj1xyXG4gICAgICAgIHBhZ2VJbmRleDogMSwgICAgICAgICAgICAgICAvL+W9k+WJjemhtVxyXG4gICAgICAgIHRvdGFsOiAwLCAgICAgICAgICAgICAgICAgICAvL+aAu+adoeaVsFxyXG4gICAgICAgIG1hcmtlcnM6IFtdLCAgICAgICAgICAgICAgICAvL+a4heepulxyXG4gICAgICAgIHNjYWxlOiAxMiwgICAgICAgICAgICAgICAgICAvL+e8qeaUvue6p+WIq++8jOWPluWAvOiMg+WbtOS4ujMtMjBcclxuXHJcbiAgICAgICAgYXJlYU5hbWU6IGFwaS5hcmVhTmFtZSxcclxuICAgICAgICBhcmVhSWQ6IGFwaS5hcmVhSWQsXHJcbiAgICAgICAgbG9uZ2l0dWRlOiBhcGkubG9uZ2l0dWRlLCAgICAvL+S4reW/g+e7j+W6plxyXG4gICAgICAgIGxhdGl0dWRlOiBhcGkubGF0aXR1ZGUgICAgICAgLy/kuK3lv4PnuqzluqZcclxuICAgICAgfSlcclxuICAgICAgLy90aGlzLmdldE1hcmsoKTsgICAgICAgICAgICAgICAvL+iOt+WPluWcsOWbvuagh+eCuVxyXG4gICAgfWVsc2UgaWYoYXBpLmFyZWFOYW1lICYmIGFwaS5hcmVhTmFtZSA9PSAn6Z2S5bKb5biCJyl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgcGFnZVNpemU6IDEwLCAgICAgICAgICAgICAgIC8v5q+P6aG15pi+56S65pWw6YePXHJcbiAgICAgICAgcGFnZUluZGV4OiAxLCAgICAgICAgICAgICAgIC8v5b2T5YmN6aG1XHJcbiAgICAgICAgdG90YWw6IDAsICAgICAgICAgICAgICAgICAgIC8v5oC75p2h5pWwXHJcbiAgICAgICAgbWFya2VyczogW10sICAgICAgICAgICAgICAgIC8v5riF56m6XHJcbiAgICAgICAgc2NhbGU6IDEwLCAgICAgICAgICAgICAgICAgIC8v57yp5pS+57qn5Yir77yM5Y+W5YC86IyD5Zu05Li6My0yMFxyXG5cclxuICAgICAgICBhcmVhTmFtZTogYXBpLmFyZWFOYW1lLFxyXG4gICAgICAgIGFyZWFJZDogYXBpLmFyZWFJZCxcclxuICAgICAgICBsb25naXR1ZGU6IGFwaS5sb25naXR1ZGUsICAgIC8v5Lit5b+D57uP5bqmXHJcbiAgICAgICAgbGF0aXR1ZGU6IGFwaS5sYXRpdHVkZSAgICAgICAvL+S4reW/g+e6rOW6plxyXG4gICAgICB9KVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIC8v56ys5LiA5qyh6L+b5YWl6I635Y+W5b2T5YmN5L2N572uXHJcbiAgICAgIHd4LmdldExvY2F0aW9uKHtcclxuICAgICAgICB0eXBlOiAnd2dzODQnLFxyXG4gICAgICAgIHN1Y2Nlc3M6KHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIHBhZ2VTaXplOiAxMCwgICAgICAgICAgICAgICAvL+avj+mhteaYvuekuuaVsOmHj1xyXG4gICAgICAgICAgICBwYWdlSW5kZXg6IDEsICAgICAgICAgICAgICAgLy/lvZPliY3pobVcclxuICAgICAgICAgICAgdG90YWw6IDAsICAgICAgICAgICAgICAgICAgIC8v5oC75p2h5pWwXHJcbiAgICAgICAgICAgIG1hcmtlcnM6IFtdLCAgICAgICAgICAgICAgICAvL+a4heepulxyXG4gICAgICAgICAgICBzY2FsZTogMTIsICAgICAgICAgICAgICAgICAgLy/nvKnmlL7nuqfliKvvvIzlj5blgLzojIPlm7TkuLozLTIwXHJcblxyXG4gICAgICAgICAgICBsb25naXR1ZGU6IHJlcy5sb25naXR1ZGUsICAgIC8v5Lit5b+D57uP5bqmXHJcbiAgICAgICAgICAgIGxhdGl0dWRlOiByZXMubGF0aXR1ZGUgICAgICAgLy/kuK3lv4PnuqzluqYgXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgdGhpcy5nZXRBcmVhTGlzdCgpOyAgICAgICAgICAgICAgIC8v6I635Y+W6Z2S5bKb5omA5pyJ5Yy6XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvL+iOt+WPluWcsOWbvuagh+eCuVxyXG4gIGdldE1hcmsoKTp2b2lke1xyXG4gICAgaHR0cHMucmVxdWVzdChhcGkuYWxsLHtcclxuICAgICAgdGVuYW50SWQ6IGFwaS5hcmVhSWQsICAgICAgICAgICAgICAgICAgICAgLy/ljLpJRFxyXG4gICAgICBwYWdlU2l6ZTogdGhpcy5kYXRhLnBhZ2VTaXplLCAgICAgICAgICAgICAvL+avj+mhteaYvuekuuaVsOmHj1xyXG4gICAgICBwYWdlSW5kZXg6IHRoaXMuZGF0YS5wYWdlSW5kZXgsICAgICAgICAgICAvL+mhteaVsFxyXG4gICAgfSwgJ0dFVCcpLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgaWYocmVzKXtcclxuICAgICAgICAvL+WIm+aWsOW5s+WPsFxyXG4gICAgICAgIGxldCBjeFBsYXRmb3JtTW9kZWxzTGlzdDphbnkgPSByZXMudmFsLmN4UGxhdGZvcm1Nb2RlbHMubWFwKChpdGVtOmFueSk6YW55PT57XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBpdGVtLmxuZywgICAvL+e7j+W6plxyXG4gICAgICAgICAgICBsYXRpdHVkZTogaXRlbS5sYXQsICAgIC8v57qs5bqmXHJcbiAgICAgICAgICAgIGljb25QYXRoOiAnLi4vLi4vaW1hZ2VzL2N4LnBuZycsICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIHdpZHRoOiAyNyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNSxcclxuICAgICAgICAgICAgY2FsbG91dDoge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IGl0ZW0ucHROYW1lLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IDE0LFxyXG4gICAgICAgICAgICAgIGJnQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1LFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNDQ0MnLFxyXG4gICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdCWUNMSUNLJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwcm92aW5jZU5hbWU6IGl0ZW0ucHJvdmluY2VOYW1lP2l0ZW0ucHJvdmluY2VOYW1lOicnLCAgICAgLy/nnIFcclxuICAgICAgICAgICAgY2l0eU5hbWU6IGl0ZW0uY2l0eU5hbWU/aXRlbS5jaXR5TmFtZTonJywgICAgICAgICAgICAgICAgIC8v5biCXHJcbiAgICAgICAgICAgIGRpc3RyaWN0TmFtZTogaXRlbS5kaXN0cmljdE5hbWU/aXRlbS5kaXN0cmljdE5hbWU6JycgICAgICAvL+WMulxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8v5Yib5Lia5bmz5Y+wXHJcbiAgICAgICAgbGV0IGN5UGxhdGZvcm1Nb2RlbHNMaXN0OmFueSA9IHJlcy52YWwuY3lQbGF0Zm9ybU1vZGVscy5tYXAoKGl0ZW06YW55KTphbnk9PntcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICBsb25naXR1ZGU6IGl0ZW0ubG5nLCAgIC8v57uP5bqmXHJcbiAgICAgICAgICAgIGxhdGl0dWRlOiBpdGVtLmxhdCwgICAgLy/nuqzluqZcclxuICAgICAgICAgICAgaWNvblBhdGg6ICcuLi8uLi9pbWFnZXMvY3kucG5nJywgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgd2lkdGg6IDI3LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1LFxyXG4gICAgICAgICAgICBjYWxsb3V0OiB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogaXRlbS5jeU5hbWUsXHJcbiAgICAgICAgICAgICAgY29sb3I6ICcjMDAwJyxcclxuICAgICAgICAgICAgICBmb250U2l6ZTogMTgsXHJcbiAgICAgICAgICAgICAgYmdDb2xvcjogJyNGRkYnLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDUsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI0NDQycsXHJcbiAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ0JZQ0xJQ0snXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHByb3ZpbmNlTmFtZTogaXRlbS5wcm92aW5jZU5hbWU/aXRlbS5wcm92aW5jZU5hbWU6JycsICAgICAvL+ecgVxyXG4gICAgICAgICAgICBjaXR5TmFtZTogaXRlbS5jaXR5TmFtZT9pdGVtLmNpdHlOYW1lOicnLCAgICAgICAgICAgICAgICAgLy/luIJcclxuICAgICAgICAgICAgZGlzdHJpY3ROYW1lOiBpdGVtLmRpc3RyaWN0TmFtZT9pdGVtLmRpc3RyaWN0TmFtZTonJyAgICAgIC8v5Yy6XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy/mib7pobnnm65cclxuICAgICAgICBsZXQgcHJvTW9kZWxzTGlzdDphbnkgPSByZXMudmFsLnByb01vZGVscy5tYXAoKGl0ZW06YW55KTphbnk9PntcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICBsb25naXR1ZGU6IGl0ZW0ubG5nLCAgIC8v57uP5bqmXHJcbiAgICAgICAgICAgIGxhdGl0dWRlOiBpdGVtLmxhdCwgICAgLy/nuqzluqZcclxuICAgICAgICAgICAgaWNvblBhdGg6ICcuLi8uLi9pbWFnZXMveG0ucG5nJywgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgd2lkdGg6IDI3LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1LFxyXG4gICAgICAgICAgICBjYWxsb3V0OiB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogaXRlbS5wcm9OYW1lLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IDE4LFxyXG4gICAgICAgICAgICAgIGJnQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1LFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNDQ0MnLFxyXG4gICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdCWUNMSUNLJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwcm92aW5jZU5hbWU6IGl0ZW0ucHJvdmluY2VOYW1lP2l0ZW0ucHJvdmluY2VOYW1lOicnLCAgICAgLy/nnIFcclxuICAgICAgICAgICAgY2l0eU5hbWU6IGl0ZW0uY2l0eU5hbWU/aXRlbS5jaXR5TmFtZTonJywgICAgICAgICAgICAgICAgIC8v5biCXHJcbiAgICAgICAgICAgIGRpc3RyaWN0TmFtZTogaXRlbS5kaXN0cmljdE5hbWU/aXRlbS5kaXN0cmljdE5hbWU6JycgICAgICAvL+WMulxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL+aJvuacjeWKoeacuuaehFxyXG4gICAgICAgIGxldCBmd2pnTW9kZWxzTGlzdDphbnkgPSByZXMudmFsLmZ3amdNb2RlbHMubWFwKChpdGVtOmFueSk6YW55PT57XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBpdGVtLmxuZywgICAvL+e7j+W6plxyXG4gICAgICAgICAgICBsYXRpdHVkZTogaXRlbS5sYXQsICAgIC8v57qs5bqmXHJcbiAgICAgICAgICAgIGljb25QYXRoOiAnLi4vLi4vaW1hZ2VzL2Z3LnBuZycsICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIHdpZHRoOiAyNyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNSxcclxuICAgICAgICAgICAgY2FsbG91dDoge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IGl0ZW0ucXlOYW1lICxcclxuICAgICAgICAgICAgICBjb2xvcjogJyMwMDAnLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAxOCxcclxuICAgICAgICAgICAgICBiZ0NvbG9yOiAnI0ZGRicsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNSxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXHJcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjQ0NDJyxcclxuICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnQllDTElDSydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcHJvdmluY2VOYW1lOiBpdGVtLnByb3ZpbmNlTmFtZT9pdGVtLnByb3ZpbmNlTmFtZTonJywgICAgIC8v55yBXHJcbiAgICAgICAgICAgIGNpdHlOYW1lOiBpdGVtLmNpdHlOYW1lP2l0ZW0uY2l0eU5hbWU6JycsICAgICAgICAgICAgICAgICAvL+W4glxyXG4gICAgICAgICAgICBkaXN0cmljdE5hbWU6IGl0ZW0uZGlzdHJpY3ROYW1lP2l0ZW0uZGlzdHJpY3ROYW1lOicnICAgICAgLy/ljLpcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvL+aJvuWcuuWcsFxyXG4gICAgICAgIGxldCB2ZWN0b3JNb2RlbHNMaXN0OmFueSA9IHJlcy52YWwudmVjdG9yTW9kZWxzLm1hcCgoaXRlbTphbnkpOmFueT0+e1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZTogaXRlbS5sbmcsICAgLy/nu4/luqZcclxuICAgICAgICAgICAgbGF0aXR1ZGU6IGl0ZW0ubGF0LCAgICAvL+e6rOW6plxyXG4gICAgICAgICAgICBpY29uUGF0aDogJy4uLy4uL2ltYWdlcy9jZC5wbmcnLCAgICAgICAgICAgICAvL+agh+iusFxyXG4gICAgICAgICAgICB3aWR0aDogMjcsXHJcbiAgICAgICAgICAgIGhlaWdodDogMzUsXHJcbiAgICAgICAgICAgIGNhbGxvdXQ6IHtcclxuICAgICAgICAgICAgICBjb250ZW50OiBpdGVtLmN5enROYW1lICAsXHJcbiAgICAgICAgICAgICAgY29sb3I6ICcjMDAwJyxcclxuICAgICAgICAgICAgICBmb250U2l6ZTogMTgsXHJcbiAgICAgICAgICAgICAgYmdDb2xvcjogJyNGRkYnLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDUsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI0NDQycsXHJcbiAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ0JZQ0xJQ0snXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHByb3ZpbmNlTmFtZTogaXRlbS5wcm92aW5jZU5hbWU/aXRlbS5wcm92aW5jZU5hbWU6JycsICAgICAvL+ecgVxyXG4gICAgICAgICAgICBjaXR5TmFtZTogaXRlbS5jaXR5TmFtZT9pdGVtLmNpdHlOYW1lOicnLCAgICAgICAgICAgICAgICAgLy/luIJcclxuICAgICAgICAgICAgZGlzdHJpY3ROYW1lOiBpdGVtLmRpc3RyaWN0TmFtZT9pdGVtLmRpc3RyaWN0TmFtZTonJyAgICAgIC8v5Yy6XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy/mib7ph5Hono3mnLrmnoRcclxuICAgICAgICBsZXQganJqZ01kb2Vsc0xpc3Q6YW55ID0gcmVzLnZhbC5qcmpnTWRvZWxzLm1hcCgoaXRlbTphbnkpOmFueT0+e1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZTogaXRlbS5sbmcsICAgLy/nu4/luqZcclxuICAgICAgICAgICAgbGF0aXR1ZGU6IGl0ZW0ubGF0LCAgICAvL+e6rOW6plxyXG4gICAgICAgICAgICBpY29uUGF0aDogJy4uLy4uL2ltYWdlcy96ai5wbmcnLCAgICAgICAgICAgICAvL+agh+iusFxyXG4gICAgICAgICAgICB3aWR0aDogMjcsXHJcbiAgICAgICAgICAgIGhlaWdodDogMzUsXHJcbiAgICAgICAgICAgIGNhbGxvdXQ6IHtcclxuICAgICAgICAgICAgICBjb250ZW50OiBpdGVtLnF5TmFtZSxcclxuICAgICAgICAgICAgICBjb2xvcjogJyMwMDAnLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAxOCxcclxuICAgICAgICAgICAgICBiZ0NvbG9yOiAnI0ZGRicsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNSxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXHJcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjQ0NDJyxcclxuICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnQllDTElDSydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcHJvdmluY2VOYW1lOiBpdGVtLnByb3ZpbmNlTmFtZT9pdGVtLnByb3ZpbmNlTmFtZTonJywgICAgIC8v55yBXHJcbiAgICAgICAgICAgIGNpdHlOYW1lOiBpdGVtLmNpdHlOYW1lP2l0ZW0uY2l0eU5hbWU6JycsICAgICAgICAgICAgICAgICAvL+W4glxyXG4gICAgICAgICAgICBkaXN0cmljdE5hbWU6IGl0ZW0uZGlzdHJpY3ROYW1lP2l0ZW0uZGlzdHJpY3ROYW1lOicnICAgICAgLy/ljLpcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvL+aJvuaKlei1hOmcgOaxglxyXG4gICAgICAgIGxldCB0ek1vZGVsc0xpc3Q6YW55ID0gcmVzLnZhbC50ek1vZGVscy5tYXAoKGl0ZW06YW55KTphbnk9PntcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICBsb25naXR1ZGU6IGl0ZW0ubG5nLCAgIC8v57uP5bqmXHJcbiAgICAgICAgICAgIGxhdGl0dWRlOiBpdGVtLmxhdCwgICAgLy/nuqzluqZcclxuICAgICAgICAgICAgaWNvblBhdGg6ICcuLi8uLi9pbWFnZXMvdHoucG5nJywgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgd2lkdGg6IDI3LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1LFxyXG4gICAgICAgICAgICBjYWxsb3V0OiB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogaXRlbS5uZWVkTmFtZSAgICxcclxuICAgICAgICAgICAgICBjb2xvcjogJyMwMDAnLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAxOCxcclxuICAgICAgICAgICAgICBiZ0NvbG9yOiAnI0ZGRicsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNSxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXHJcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjQ0NDJyxcclxuICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnQllDTElDSydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcHJvdmluY2VOYW1lOiBpdGVtLnByb3ZpbmNlTmFtZT9pdGVtLnByb3ZpbmNlTmFtZTonJywgICAgIC8v55yBXHJcbiAgICAgICAgICAgIGNpdHlOYW1lOiBpdGVtLmNpdHlOYW1lP2l0ZW0uY2l0eU5hbWU6JycsICAgICAgICAgICAgICAgICAvL+W4glxyXG4gICAgICAgICAgICBkaXN0cmljdE5hbWU6IGl0ZW0uZGlzdHJpY3ROYW1lP2l0ZW0uZGlzdHJpY3ROYW1lOicnICAgICAgLy/ljLpcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvL+aJvuiejei1hOmcgOaxgu+8iOmhueebruW6k+eahOiejei1hDfpobnvvIlcclxuICAgICAgICBsZXQgcm9uZ3ppUHJvc0xpc3Q6YW55ID0gcmVzLnZhbC5yb25nemlQcm9zLm1hcCgoaXRlbTphbnkpOmFueT0+e1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZTogaXRlbS5sbmcsICAgLy/nu4/luqZcclxuICAgICAgICAgICAgbGF0aXR1ZGU6IGl0ZW0ubGF0LCAgICAvL+e6rOW6plxyXG4gICAgICAgICAgICBpY29uUGF0aDogJy4uLy4uL2ltYWdlcy9yei5wbmcnLCAgICAgICAgICAgICAvL+agh+iusFxyXG4gICAgICAgICAgICB3aWR0aDogMjcsXHJcbiAgICAgICAgICAgIGhlaWdodDogMzUsXHJcbiAgICAgICAgICAgIGNhbGxvdXQ6IHtcclxuICAgICAgICAgICAgICBjb250ZW50OiBpdGVtLnByb05hbWUgLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IDE4LFxyXG4gICAgICAgICAgICAgIGJnQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1LFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNDQ0MnLFxyXG4gICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdCWUNMSUNLJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwcm92aW5jZU5hbWU6IGl0ZW0ucHJvdmluY2VOYW1lP2l0ZW0ucHJvdmluY2VOYW1lOicnLCAgICAgLy/nnIFcclxuICAgICAgICAgICAgY2l0eU5hbWU6IGl0ZW0uY2l0eU5hbWU/aXRlbS5jaXR5TmFtZTonJywgICAgICAgICAgICAgICAgIC8v5biCXHJcbiAgICAgICAgICAgIGRpc3RyaWN0TmFtZTogaXRlbS5kaXN0cmljdE5hbWU/aXRlbS5kaXN0cmljdE5hbWU6JycgICAgICAvL+WMulxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8v5om+6J6N6LWE6ZyA5rGC77yI6ZyA5rGC5bqT55qE6J6N6LWEN+mhue+8iVxyXG4gICAgICAgIGxldCByb25nemlOZWVkc0xpc3Q6YW55ID0gcmVzLnZhbC5yb25nemlOZWVkcy5tYXAoKGl0ZW06YW55KTphbnk9PntcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICBsb25naXR1ZGU6IGl0ZW0ubG5nLCAgIC8v57uP5bqmXHJcbiAgICAgICAgICAgIGxhdGl0dWRlOiBpdGVtLmxhdCwgICAgLy/nuqzluqZcclxuICAgICAgICAgICAgaWNvblBhdGg6ICcuLi8uLi9pbWFnZXMvcnoucG5nJywgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICAgICAgd2lkdGg6IDI3LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1LFxyXG4gICAgICAgICAgICBjYWxsb3V0OiB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogaXRlbS5uZWVkTmFtZSxcclxuICAgICAgICAgICAgICBjb2xvcjogJyMwMDAnLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAxOCxcclxuICAgICAgICAgICAgICBiZ0NvbG9yOiAnI0ZGRicsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNSxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXHJcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjQ0NDJyxcclxuICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnQllDTElDSydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcHJvdmluY2VOYW1lOiBpdGVtLnByb3ZpbmNlTmFtZT9pdGVtLnByb3ZpbmNlTmFtZTonJywgICAgIC8v55yBXHJcbiAgICAgICAgICAgIGNpdHlOYW1lOiBpdGVtLmNpdHlOYW1lP2l0ZW0uY2l0eU5hbWU6JycsICAgICAgICAgICAgICAgICAvL+W4glxyXG4gICAgICAgICAgICBkaXN0cmljdE5hbWU6IGl0ZW0uZGlzdHJpY3ROYW1lP2l0ZW0uZGlzdHJpY3ROYW1lOicnICAgICAgLy/ljLpcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvL+WkhOeQhklE5Li65pWw5a2XXHJcbiAgICAgICAgbGV0IG1hcmtlcnNMaXN0OmFueSAgPSB0aGlzLmRhdGEubWFya2Vycy5jb25jYXQoY3hQbGF0Zm9ybU1vZGVsc0xpc3QsY3lQbGF0Zm9ybU1vZGVsc0xpc3QscHJvTW9kZWxzTGlzdCxmd2pnTW9kZWxzTGlzdCx2ZWN0b3JNb2RlbHNMaXN0LGpyamdNZG9lbHNMaXN0LHR6TW9kZWxzTGlzdCxyb25nemlQcm9zTGlzdCxyb25nemlOZWVkc0xpc3QpO1xyXG4gICAgICAgIGxldCBuZXdNYXJrZXJzTGlzdDphbnkgPSBtYXJrZXJzTGlzdC5tYXAoKGl0ZW06YW55LCBpbmRleDpudW1iZXIpOmFueT0+e1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGluZGV4LCAgICAgICAgICAgICAgICAgICAvL21hcOeUqOeahOiHquWumuS5iUlEXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZTogaXRlbS5sb25naXR1ZGUsICAgLy/nu4/luqZcclxuICAgICAgICAgICAgbGF0aXR1ZGU6IGl0ZW0ubGF0aXR1ZGUsICAgICAvL+e6rOW6plxyXG4gICAgICAgICAgICBpY29uUGF0aDogaXRlbS5pY29uUGF0aCwgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgICAgIHdpZHRoOiAyNyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNSxcclxuICAgICAgICAgICAgY2FsbG91dDogaXRlbS5jYWxsb3V0LFxyXG4gICAgICAgICAgICBvbGRJZDogaXRlbS5pZCwgICAgICAgICAgICAgICAgICAgICAgLy/ljp/lp4tJRFxyXG4gICAgICAgICAgICB0aXRsZTogaXRlbS5jYWxsb3V0LmNvbnRlbnQsICAgICAgICAgLy/moIfpophcclxuICAgICAgICAgICAgcHJvdmluY2VOYW1lOiBpdGVtLnByb3ZpbmNlTmFtZSwgICAgIC8v55yBXHJcbiAgICAgICAgICAgIGNpdHlOYW1lOiBpdGVtLmNpdHlOYW1lLCAgICAgICAgICAgICAvL+W4glxyXG4gICAgICAgICAgICBkaXN0cmljdE5hbWU6IGl0ZW0uZGlzdHJpY3ROYW1lICAgICAgLy/ljLpcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZih0aGlzLmRhdGEudG90YWwgPT0gMCl7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBtYXJrZXJzOiBuZXdNYXJrZXJzTGlzdCxcclxuICAgICAgICAgICAgdG90YWw6IHJlcy52YWwudG90YWwgICAgICAgICAvL+aAu+aVsFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIG1hcmtlcnM6IG5ld01hcmtlcnNMaXN0XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIC8v6I635Y+W5biC5Yy6XHJcbiAgZ2V0QXJlYUxpc3QoKTp2b2lke1xyXG4gICAgaHR0cHMucmVxdWVzdChhcGkudGVuYW50cywgbnVsbCwgJ0dFVCcpLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgaWYocmVzKXtcclxuICAgICAgICBsZXQgbGlzdDphbnkgPSByZXMubGlzdC5tYXAoKGl0ZW06YW55KTphbnk9PntcclxuICAgICAgICAgIGlmKGl0ZW0uY25hbWUgPT0gJ+ilv+a1t+WyuOaWsOWMuicpe1xyXG4gICAgICAgICAgICBpdGVtLmNuYW1lID0gJ+m7hOWym+WMuic7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgdGl0bGU6IGl0ZW0uY25hbWVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGxldCBuZXdMaXN0OmFueSA9IFtdO1xyXG4gICAgICAgIGxpc3QuZm9yRWFjaCgoaXRlbTphbnkpOnZvaWQ9PntcclxuICAgICAgICAgIGlmKGl0ZW0udGl0bGUgPT0gJ+adjuayp+WMuicpe1xyXG4gICAgICAgICAgICBuZXdMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiBpdGVtLnRpdGxlLFxyXG4gICAgICAgICAgICAgIGxvbmdpdHVkZTogJzEyMC40Mzk2MDEnLCAgICAgIC8v5Lit5b+D57uP5bqmXHJcbiAgICAgICAgICAgICAgbGF0aXR1ZGU6ICczNi4xNTE1ODYnLCAgICAgICAgLy/kuK3lv4PnuqzluqZcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmKGl0ZW0udGl0bGUgPT0gJ+W4guWMl+WMuicpe1xyXG4gICAgICAgICAgICBuZXdMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiBpdGVtLnRpdGxlLFxyXG4gICAgICAgICAgICAgIGxvbmdpdHVkZTogJzEyMC4zODAzODUnLCAgICAgICAgICAvL+S4reW/g+e7j+W6plxyXG4gICAgICAgICAgICAgIGxhdGl0dWRlOiAnMzYuMDkzNTEyJywgICAgICAgICAgICAvL+S4reW/g+e6rOW6plxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYoaXRlbS50aXRsZSA9PSAn6buE5bKb5Yy6Jyl7XHJcbiAgICAgICAgICAgIG5ld0xpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXHJcbiAgICAgICAgICAgICAgbG9uZ2l0dWRlOiAnMTIwLjIwNDQ2JywgICAgICAgICAgLy/kuK3lv4Pnu4/luqZcclxuICAgICAgICAgICAgICBsYXRpdHVkZTogJzM1Ljk2NjI1MScsICAgICAgICAgICAvL+S4reW/g+e6rOW6plxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYoaXRlbS50aXRsZSA9PSAn5biC5Y2X5Yy6Jyl7XHJcbiAgICAgICAgICAgIG5ld0xpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXHJcbiAgICAgICAgICAgICAgbG9uZ2l0dWRlOiAnMTIwLjQxOTQ4NycsICAgICAgICAgLy/kuK3lv4Pnu4/luqZcclxuICAgICAgICAgICAgICBsYXRpdHVkZTogJzM2LjA4MDkyNCcsICAgICAgICAgICAvL+S4reW/g+e6rOW6plxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYoaXRlbS50aXRsZSA9PSAn5bSC5bGx5Yy6Jyl7XHJcbiAgICAgICAgICAgIG5ld0xpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXHJcbiAgICAgICAgICAgICAgbG9uZ2l0dWRlOiAnMTIwLjQ3NTUzMycsICAgICAgICAgLy/kuK3lv4Pnu4/luqZcclxuICAgICAgICAgICAgICBsYXRpdHVkZTogJzM2LjExMzU3NScsICAgICAgICAgICAvL+S4reW/g+e6rOW6plxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYoaXRlbS50aXRsZSA9PSAn5Z+O6Ziz5Yy6Jyl7XHJcbiAgICAgICAgICAgIG5ld0xpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXHJcbiAgICAgICAgICAgICAgbG9uZ2l0dWRlOiAnMTIwLjQwMzA5NCcsICAgICAgICAgLy/kuK3lv4Pnu4/luqZcclxuICAgICAgICAgICAgICBsYXRpdHVkZTogJzM2LjMxMjk4NScsICAgICAgICAgICAvL+S4reW/g+e6rOW6plxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYoaXRlbS50aXRsZSA9PSAn5Y2z5aKo5Yy6Jyl7XHJcbiAgICAgICAgICAgIG5ld0xpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXHJcbiAgICAgICAgICAgICAgbG9uZ2l0dWRlOiAnMTIwLjQ1Mzk3NCcsICAgICAgICAgLy/kuK3lv4Pnu4/luqZcclxuICAgICAgICAgICAgICBsYXRpdHVkZTogJzM2LjM5NTUzNCcsICAgICAgICAgICAvL+S4reW/g+e6rOW6plxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYoaXRlbS50aXRsZSA9PSAn6IO25bee5biCJyl7XHJcbiAgICAgICAgICAgIG5ld0xpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXHJcbiAgICAgICAgICAgICAgbG9uZ2l0dWRlOiAnMTIwLjAzOTE3MicsICAgICAgICAgIC8v5Lit5b+D57uP5bqmXHJcbiAgICAgICAgICAgICAgbGF0aXR1ZGU6ICczNi4yNzA4NjMnLCAgICAgICAgICAgIC8v5Lit5b+D57qs5bqmXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZihpdGVtLnRpdGxlID09ICflubPluqbluIInKXtcclxuICAgICAgICAgICAgbmV3TGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgICB0aXRsZTogaXRlbS50aXRsZSxcclxuICAgICAgICAgICAgICBsb25naXR1ZGU6ICcxMTkuOTkzNzU0JywgICAgICAgICAgLy/kuK3lv4Pnu4/luqZcclxuICAgICAgICAgICAgICBsYXRpdHVkZTogJzM2Ljc4MjkwOCcsICAgICAgICAgICAvL+S4reW/g+e6rOW6plxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYoaXRlbS50aXRsZSA9PSAn6I6x6KW/5biCJyl7XHJcbiAgICAgICAgICAgIG5ld0xpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXHJcbiAgICAgICAgICAgICAgbG9uZ2l0dWRlOiAnMTIwLjUyNjEyNicsICAgICAgICAgIC8v5Lit5b+D57uP5bqmXHJcbiAgICAgICAgICAgICAgbGF0aXR1ZGU6ICczNi44OTQ3NDMnLCAgICAgICAgICAgLy/kuK3lv4PnuqzluqZcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmKGl0ZW0udGl0bGUgPT0gJ+mrmOaWsOWMuicpe1xyXG4gICAgICAgICAgICBuZXdMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiBpdGVtLnRpdGxlLFxyXG4gICAgICAgICAgICAgIGxvbmdpdHVkZTogJzEyMC4yODQ0NzYnLCAgICAgICAgICAvL+S4reW/g+e7j+W6plxyXG4gICAgICAgICAgICAgIGxhdGl0dWRlOiAnMzYuMjcyMzY3JywgICAgICAgICAgIC8v5Lit5b+D57qs5bqmXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZihpdGVtLnRpdGxlID09ICfpnZLlspvok53osLcnKXtcclxuICAgICAgICAgICAgbmV3TGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgICB0aXRsZTogaXRlbS50aXRsZSxcclxuICAgICAgICAgICAgICBsb25naXR1ZGU6ICcxMjAuNjgzNDQ1JywgICAgICAgICAgLy/kuK3lv4Pnu4/luqZcclxuICAgICAgICAgICAgICBsYXRpdHVkZTogJzM2LjM1MzQxMScsICAgICAgICAgICAvL+S4reW/g+e6rOW6plxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYoaXRlbS50aXRsZSA9PSAn6Z2S5bKb5biCJyl7XHJcbiAgICAgICAgICAgIG5ld0xpc3QudW5zaGlmdCh7XHJcbiAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXHJcbiAgICAgICAgICAgICAgbG9uZ2l0dWRlOiAnMTIwLjM4OTQ1OCcsICAgICAgICAgIC8v5Lit5b+D57uP5bqmXHJcbiAgICAgICAgICAgICAgbGF0aXR1ZGU6ICczNi4wNzMxNicsICAgICAgICAgICAgIC8v5Lit5b+D57qs5bqmXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgYXJlYUxpc3Q6IG5ld0xpc3RcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuZ2V0QXJlYSgpOyAgICAgICAgIC8v6I635Y+W5b2T5YmN5L2N572u5omA5Zyo5Yy6XHJcbiAgICAgIH1cclxuICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBnZXRBcmVhKCk6dm9pZHsgIC8v6I635Y+W5b2T5YmN5L2N572u5omA5Zyo5Yy6XHJcbiAgICBsZXQgcXFtYXBzZGs6YW55ID0gbmV3IFFRTWFwV1goe1xyXG4gICAgICBrZXk6IGFwaS5tYXBBcGlLZXlcclxuICAgIH0pXHJcbiAgICB3eC5nZXRMb2NhdGlvbih7XHJcbiAgICAgIHR5cGU6ICd3Z3M4NCcsXHJcbiAgICAgIHN1Y2Nlc3M6KCk6dm9pZD0+e1xyXG4gICAgICAgIHFxbWFwc2RrLnJldmVyc2VHZW9jb2Rlcih7XHJcbiAgICAgICAgICBsb2NhdGlvbjogdGhpcy5kYXRhLmxhdGl0dWRlICsgJywnICsgdGhpcy5kYXRhLmxvbmdpdHVkZSxcclxuICAgICAgICAgIHN1Y2Nlc3M6KHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgICAgICAgbGV0IGNpdHk6YW55ID0gcmVzLnJlc3VsdC5hZGRyZXNzX2NvbXBvbmVudC5jaXR5O1xyXG4gICAgICAgICAgICBsZXQgYXJlYU5hbWU6c3RyaW5nID0gcmVzLnJlc3VsdC5hZGRyZXNzX2NvbXBvbmVudC5kaXN0cmljdDtcclxuICAgICAgICAgICAgaWYoY2l0eSAhPSAn6Z2S5bKb5biCJyl7XHJcbiAgICAgICAgICAgICAgYXJlYU5hbWUgPSAn6Z2S5bKb5biCJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmRhdGEuYXJlYUxpc3QuZm9yRWFjaCgoaXRlbTphbnkpPT57XHJcbiAgICAgICAgICAgICAgaWYoaXRlbS50aXRsZSA9PSBhcmVhTmFtZSl7XHJcbiAgICAgICAgICAgICAgICAvL+WFqOWxgOWPmOmHj1xyXG4gICAgICAgICAgICAgICAgYXBpLmFyZWFOYW1lID0gYXJlYU5hbWU7ICAgLy/ljLrlkI1cclxuICAgICAgICAgICAgICAgIGFwaS5hcmVhSWQgPSBpdGVtLmlkOyAgICAgIC8v5Yy6SURcclxuICAgICAgICAgICAgICAgIGFwaS5sb25naXR1ZGUgPSBpdGVtLmxvbmdpdHVkZSwgICAgLy/kuK3lv4Pnu4/luqZcclxuICAgICAgICAgICAgICAgIGFwaS5sYXRpdHVkZSA9IGl0ZW0ubGF0aXR1ZGUgICAgICAgLy/kuK3lv4PnuqzluqZcclxuICAgICAgICAgICAgICAgIC8v5b2T5YmN6aG15Y+Y6YeP77yI5YiH5o2i5Zyw5Zu+5pi+56S65Yy65Z+f77yJXHJcbiAgICAgICAgICAgICAgICBpZihhcmVhTmFtZSA9PSAn6Z2S5bKb5biCJyl7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NhbGU6IDEwLCAgICAgICAgICAgICAgICAgICAgLy/nvKnmlL7nuqfliKvvvIzlj5blgLzojIPlm7TkuLozLTIwXHJcbiAgICAgICAgICAgICAgICAgICAgYXJlYU5hbWU6IGFwaS5hcmVhTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBhcmVhSWQ6IGFwaS5hcmVhSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9uZ2l0dWRlOiBhcGkubG9uZ2l0dWRlLCAgICAgLy/kuK3lv4Pnu4/luqZcclxuICAgICAgICAgICAgICAgICAgICBsYXRpdHVkZTogYXBpLmxhdGl0dWRlICAgICAgIC8v5Lit5b+D57qs5bqmXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NhbGU6IDEyLCAgICAgICAgICAgICAgICAgICAgLy/nvKnmlL7nuqfliKvvvIzlj5blgLzojIPlm7TkuLozLTIwXHJcbiAgICAgICAgICAgICAgICAgICAgYXJlYU5hbWU6IGFwaS5hcmVhTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBhcmVhSWQ6IGFwaS5hcmVhSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9uZ2l0dWRlOiBhcGkubG9uZ2l0dWRlLCAgICAgLy/kuK3lv4Pnu4/luqZcclxuICAgICAgICAgICAgICAgICAgICBsYXRpdHVkZTogYXBpLmxhdGl0dWRlLCAgICAgICAvL+S4reW/g+e6rOW6plxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZihhcGkuaW5kZXhGbGFnID09ICdwdCcpeyAgICAgICAgIC8v6aaW6aG15om+5bmz5Y+w6L+b5YWlXHJcbiAgICAgICAgICAgICAgICAgIHRoaXMucHRGbigpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYoYXBpLmluZGV4RmxhZyA9PSAneG0nKXsgICAvL+mmlumhteaJvuaUv+etlui/m+WFpVxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnhtRm4oKTtcclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKGFwaS5pbmRleEZsYWcgPT0gJ3pqJyl7ICAgLy/pppbpobXmib7otYTph5Hov5vlhaVcclxuICAgICAgICAgICAgICAgICAgdGhpcy56akZuKCk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihhcGkuaW5kZXhGbGFnID09ICdjZCcpeyAgIC8v6aaW6aG15om+5Zy65Zyw6L+b5YWlXHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuY2RGbigpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYoYXBpLmluZGV4RmxhZyA9PSAnZncnKXsgICAvL+mmlumhteaJvuacjeWKoei/m+WFpVxyXG4gICAgICAgICAgICAgICAgICB0aGlzLmZ3Rm4oKTtcclxuICAgICAgICAgICAgICAgIH1lbHNleyAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLy90aGlzLmdldE1hcmsoKTsgIC8v6I635Y+W5Zyw5Zu+5qCH54K5XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgbW9yZUZuKCk6dm9pZHsgICAvL+WKoOi9veabtOWkmlxyXG4gICAgaWYodGhpcy5kYXRhLmZsYWcgPT0gJ2FsbFB0Jyl7ICAvL+W5s+WPsOWFqOmDqFxyXG4gICAgICBpZih0aGlzLmRhdGEubXVtTGlzdC5sZW5ndGggPCB0aGlzLmRhdGEudG90YWwpe1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgcGFnZUluZGV4OiB0aGlzLmRhdGEucGFnZUluZGV4ICs9IDEsICAgICAgICAgICAgIC8v5b2T5YmN6aG1XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgdGhpcy5nZXRBbGxQcm8oKTsgICBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYodGhpcy5kYXRhLmZsYWcgPT0gJ2N4UHQnKXsgIC8v5Yib5paw5bmz5Y+wXHJcbiAgICAgIGlmKHRoaXMuZGF0YS5tdW1MaXN0Lmxlbmd0aCA8IHRoaXMuZGF0YS50b3RhbCl7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIHBhZ2VJbmRleDogdGhpcy5kYXRhLnBhZ2VJbmRleCArPSAxLCAgICAgICAgICAgICAvL+W9k+WJjemhtVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5nZXRDeFBybygpOyAgIFxyXG4gICAgICB9ICAgIFxyXG4gICAgfVxyXG4gICAgaWYodGhpcy5kYXRhLmZsYWcgPT0gJ2N5UHQnKXsgIC8v5Yib5Lia5bmz5Y+wXHJcbiAgICAgIGlmKHRoaXMuZGF0YS5tdW1MaXN0Lmxlbmd0aCA8IHRoaXMuZGF0YS50b3RhbCl7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIHBhZ2VJbmRleDogdGhpcy5kYXRhLnBhZ2VJbmRleCArPSAxLCAgICAgICAgICAgICAvL+W9k+WJjemhtVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5nZXRDeVBybygpOyAgIFxyXG4gICAgICB9ICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpZih0aGlzLmRhdGEuZmxhZyA9PSAneG0nKXsgIC8v5om+6aG555uuXHJcbiAgICAgIGlmKHRoaXMuZGF0YS5tdW1MaXN0Lmxlbmd0aCA8IHRoaXMuZGF0YS50b3RhbCl7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIHBhZ2VJbmRleDogdGhpcy5kYXRhLnBhZ2VJbmRleCArPSAxLCAgICAgICAgICAgICAvL+W9k+WJjemhtVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5nZXRQcm9MaXN0KCk7ICAgXHJcbiAgICAgIH0gICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGlmKHRoaXMuZGF0YS5mbGFnID09ICd6aicpeyAgLy/mib7otYTph5FcclxuICAgICAgaWYodGhpcy5kYXRhLm11bUxpc3QubGVuZ3RoIDwgdGhpcy5kYXRhLnRvdGFsKXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgcGFnZUluZGV4OiB0aGlzLmRhdGEucGFnZUluZGV4ICs9IDEsICAgICAgICAgICAgIC8v5b2T5YmN6aG1XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmdldEFsbEZ1bmRzTGlzdCgpO1xyXG4gICAgICB9ICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpZih0aGlzLmRhdGEuZmxhZyA9PSAnanInKXsgIC8v5om+6LWE6YeR77yI6YeR6J6N77yJXHJcbiAgICAgIGlmKHRoaXMuZGF0YS5tdW1MaXN0Lmxlbmd0aCA8IHRoaXMuZGF0YS50b3RhbCl7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIHBhZ2VJbmRleDogdGhpcy5kYXRhLnBhZ2VJbmRleCArPSAxLCAgICAgICAgICAgICAvL+W9k+WJjemhtVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5nZXRKckxpc3QoKTtcclxuICAgICAgfSAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaWYodGhpcy5kYXRhLmZsYWcgPT0gJ3R6Jyl7ICAvL+aJvui1hOmHke+8iOaKlei1hO+8iVxyXG4gICAgICBpZih0aGlzLmRhdGEubXVtTGlzdC5sZW5ndGggPCB0aGlzLmRhdGEudG90YWwpe1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBwYWdlSW5kZXg6IHRoaXMuZGF0YS5wYWdlSW5kZXggKz0gMSwgICAgICAgICAgICAgLy/lvZPliY3pobVcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuZ2V0VHpMaXN0KCk7XHJcbiAgICAgIH0gICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGlmKHRoaXMuZGF0YS5mbGFnID09ICdyeicpeyAgLy/mib7otYTph5HvvIjono3otYTvvIlcclxuICAgICAgaWYodGhpcy5kYXRhLm11bUxpc3QubGVuZ3RoIDwgdGhpcy5kYXRhLnRvdGFsKXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgcGFnZUluZGV4OiB0aGlzLmRhdGEucGFnZUluZGV4ICs9IDEsICAgICAgICAgICAgIC8v5b2T5YmN6aG1XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmdldFJ6TGlzdCgpO1xyXG4gICAgICB9ICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpZih0aGlzLmRhdGEuZmxhZyA9PSAnY2QnKXsgIC8v5om+5Zy65ZywXHJcbiAgICAgIGlmKHRoaXMuZGF0YS5tdW1MaXN0Lmxlbmd0aCA8IHRoaXMuZGF0YS50b3RhbCl7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIHBhZ2VJbmRleDogdGhpcy5kYXRhLnBhZ2VJbmRleCArPSAxLCAgICAgICAgICAgICAvL+W9k+WJjemhtVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5nZXRTaXRlTGlzdCgpO1xyXG4gICAgICB9ICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpZih0aGlzLmRhdGEuZmxhZyA9PSAnZncnKXsgIC8v5om+5pyN5YqhXHJcbiAgICAgIGlmKHRoaXMuZGF0YS5tdW1MaXN0Lmxlbmd0aCA8IHRoaXMuZGF0YS50b3RhbCl7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIHBhZ2VJbmRleDogdGhpcy5kYXRhLnBhZ2VJbmRleCArPSAxLCAgICAgICAgICAgICAvL+W9k+WJjemhtVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5nZXRTZXJ2aWNlTGlzdCgpO1xyXG4gICAgICB9ICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gIH0sXHJcblxyXG5cclxuICAvL+mhtemdouWIneWni+WMllxyXG4gIG9uTG9hZCgpe1xyXG4gICAgLy/pobXpnaLmoIfpophcclxuICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7ICAgICBcclxuICAgICAgdGl0bGU6IFwi6Z2S5bKb5Lq65omN5Yib5paw5Yib5Lia5bmz5Y+w5Zyw5Zu+XCJcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIC8v6aG16Z2i5pi+56S6XHJcbiAgb25TaG93KCl7XHJcbiAgICB0aGlzLnZlcmlmaWNhdGlvbigpOyAgLy/pqozor4HnlKjmiLfnmbvlvZXnirbmgIFcclxuICB9LFxyXG5cclxuICAvL+mhtemdoua4suafk+WujOaIkFxyXG4gIG9uUmVhZHkoKXt9LFxyXG5cclxuICAvL+mhtemdoumakOiXj1xyXG4gIG9uSGlkZSgpe1xyXG4gICAgYXBpLmluZGV4RmxhZyA9ICcnOyAgICAgLy/pppbpobU25om+5Yik5patXHJcblxyXG4gICAgYXBpLmFyZWFOYW1lID0gJyc7ICAgICAgLy/muIXnqbrlhajlsYDkvY3nva7lkI3np7BcclxuICAgIGFwaS5hcmVhSWQgPSAnJzsgICAgICAgIC8v5riF56m65YWo5bGA5L2N572uSURcclxuICAgIGFwaS5sb25naXR1ZGUgPSAnJzsgICAgIC8v5Lit5b+D57uP5bqmXHJcbiAgICBhcGkubGF0aXR1ZGUgPSAnJzsgICAgICAvL+S4reW/g+e6rOW6plxyXG5cclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGlzTGlzdFNob3c6IHRydWUsICAgICAgICAgIC8v6buY6K6k5pi+56S6NuaJvuWGheWuuVxyXG4gICAgICBpc0luZm9TaG93OiBmYWxzZSwgICAgICAgICAvL+WNleadoeS/oeaBr+aYvuekulxyXG4gICAgICBpc1NlYXJjaFNob3c6IGZhbHNlLCAgICAgICAvL+aQnOe0oue7k+aenOaVsOaNrlxyXG4gICAgICBpc1NlYXJjaEluZm9TaG93OiBmYWxzZSwgICAvL+aQnOe0ouWIl+ihqOaVsOaNrlxyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgLy/pobXpnaLlhbPpl61cclxuICBvblVubG9hZCgpe31cclxufSlcclxuZXhwb3J0IHt9O1xyXG4iXX0=