"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dialog = require('../../miniprogram_npm/@vant/weapp/dialog/dialog.js').default;
var Toast = require('../../miniprogram_npm/@vant/weapp/toast/toast.js').default;
var api = getApp().globalData;
var https = require('../../utils/myRequest.js');
Page({
    data: {
        jgFlag: false,
        grFlag: false,
        contentOverflow: 'scroll',
        tabActive: 'jg',
        qydanweiList: [],
        tenantList: [],
        industryBusinessesList: [],
        platformIdList: [],
        cardList: [],
        grPlatformIdList: [],
        typeIdList: [],
        jgIndex: 0,
        jgIndustryId: [],
        jgIndustryBusinesses: '',
        jgVerifyCodeTime: '获取验证码',
        jgDisabled: false,
        jgProtocolChecked: false,
        grIndex: 0,
        grIndustryId: [],
        grIndustryBusinesses: '',
        grVerifyCodeTime: '获取验证码',
        grDisabled: false,
        grProtocolChecked: false,
        jgFileList: [],
        jgRepeatPassword: '',
        jgPasswordError: '',
        unitType: [
            { text: '选择类型', value: 0 },
            { text: '新款商品', value: 1 },
            { text: '活动商品', value: 2 },
        ],
        jgFormDate: {
            shxyCode: '',
            shxypics: [],
            password: '',
            trueword: '',
            qyName: '',
            qyNatureId: '',
            tenantId: '',
            industryBusinesses: [],
            qyAddress: '',
            legalName: '',
            legalId: '',
            linkPerson: '',
            linkTel: '',
            verifyCode: '',
            email: '',
            isCxPlatform: '2',
            isCyPlatform: '2',
            platformId: ''
        },
        jgFormRrror: {
            shxyCodeError: '',
            shxypicsError: '',
            passwordError: '',
            truewordError: '',
            qyNameError: '',
            qyNatureIdError: '',
            tenantIdError: '',
            industryBusinessesError: '',
            qyAddressError: '',
            legalIdError: '',
            linkPersonError: '',
            linkTelError: '',
            verifyCodeError: '',
            emailError: ''
        },
        jgVerification: false,
        grFileList: [],
        grFormDate: {
            cardTypeId: '',
            cardNum: '',
            cardPic: [],
            password: '',
            trueword: '',
            realName: '',
            phoneNum: '',
            verifyCode: '',
            email: '',
            xiaQuId: '',
            danWeiId: '',
            danWeiAddress: '',
            curLocation: '',
            isLiuXue: '2',
            rcTypeId: '',
            industryBusinessModels: [],
        },
        grFormRrror: {
            cardTypeIdRrror: '',
            cardNumRrror: '',
            cardPicError: '',
            passwordError: '',
            truewordError: '',
            realNameError: '',
            phoneNumError: '',
            verifyCodeError: '',
            emailError: '',
            xiaQuIdError: '',
            danWeiIdError: '',
            curLocationError: '',
            rcTypeIdError: '',
            industryBusinessModelsError: [],
        },
        grVerification: false,
    },
    dropdownOpen: function () {
        this.setData({
            contentOverflow: 'hidden'
        });
    },
    dropdownClose: function () {
        this.setData({
            contentOverflow: 'scroll'
        });
    },
    getDanweiList: function () {
        var _this = this;
        https.request(api.submenuDic + '?moid=14', null, 'GET')
            .then(function (res) {
            var list = res.val.map(function (item) {
                return {
                    text: item.dicName,
                    value: item.id
                };
            });
            _this.setData({
                qydanweiList: list
            });
        }, function (err) {
            console.log(err);
        });
    },
    getTenantList: function () {
        var _this = this;
        https.request(api.tenantList, null, 'GET')
            .then(function (res) {
            var list = res.list.map(function (item) {
                return {
                    text: item.cname,
                    value: item.id
                };
            });
            _this.setData({
                tenantList: list
            });
        }, function (err) {
            console.log(err);
        });
    },
    getIndustryBusinesses: function () {
        var _this = this;
        https.request(api.submenuDic + '?moid=7', null, 'GET')
            .then(function (res) {
            if (res) {
                var arr = res.val.map(function (item) {
                    var children = item.children.map(function (item2) {
                        return {
                            pText: item.dicName,
                            text: item2.dicName,
                            id: item2.id,
                            pId: item2.pId
                        };
                    });
                    children.unshift({
                        pText: item.dicName,
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
                    industryBusinessesList: arr
                });
            }
        }, function (err) {
            console.log(err);
        });
    },
    getPlatformIdList: function () {
        var _this = this;
        https.request(api.cyPlatformApi + '?xiaQuId=' + this.data.jgFormDate.tenantId, null, 'GET')
            .then(function (res) {
            var list = res.list.map(function (item) {
                return {
                    text: item.cyName,
                    value: item.id
                };
            });
            _this.setData({
                platformIdList: list
            });
        }, function (err) {
            console.log(err);
        });
    },
    jgProtocolCheckedFn: function (value) {
        this.setData({
            jgProtocolChecked: value.detail
        });
    },
    getcardList: function () {
        var _this = this;
        https.request(api.submenuDic + '?moid=3', null, 'GET')
            .then(function (res) {
            var list = res.val.map(function (item) {
                return {
                    text: item.dicName,
                    value: item.id
                };
            });
            _this.setData({
                cardList: list
            });
        }, function (err) {
            console.log(err);
        });
    },
    getGrPlatformIdList: function () {
        var _this = this;
        https.request(api.cyPlatformApi + '?xiaQuId=' + this.data.grFormDate.xiaQuId, null, 'GET')
            .then(function (res) {
            var list = res.list.map(function (item) {
                return {
                    text: item.cyName,
                    value: item.id
                };
            });
            _this.setData({
                grPlatformIdList: list
            });
        }, function (err) {
            console.log(err);
        });
    },
    getTypeIdList: function () {
        var _this = this;
        https.request(api.submenuDic + '?moid=8', null, 'GET')
            .then(function (res) {
            var list = res.val.map(function (item) {
                return {
                    text: item.dicName,
                    value: item.id
                };
            });
            _this.setData({
                typeIdList: list
            });
        }, function (err) {
            console.log(err);
        });
    },
    onTabChange: function () {
        this.setData({
            contentOverflow: 'scroll'
        });
    },
    jgShxyCodeInput: function (value) {
        var _a, _b, _c;
        var reg = /[1-9]\d{15}/;
        var str = reg.test(value.detail);
        if (value.detail) {
            if (str) {
                this.setData((_a = {},
                    _a["jgFormRrror.shxyCodeError"] = '',
                    _a["jgFormDate.shxyCode"] = value.detail,
                    _a.jgVerification = true,
                    _a));
            }
            else {
                this.setData((_b = {},
                    _b["jgFormRrror.shxyCodeError"] = '请输入正确统一社会信用代码',
                    _b["jgFormDate.shxyCode"] = value.detail,
                    _b.jgVerification = false,
                    _b));
            }
        }
        else {
            this.setData((_c = {},
                _c["jgFormRrror.shxyCodeError"] = '',
                _c["jgFormDate.shxyCode"] = value.detail,
                _c.jgVerification = false,
                _c));
        }
    },
    jgAfterRead: function (event) {
        var _that = this;
        var file = event.detail.file;
        wx.uploadFile({
            url: api.fileUrl,
            filePath: file.path,
            name: 'files',
            formData: {
                filePath: file.path,
                fileName: ''
            },
            success: function (res) {
                var _a;
                var file = JSON.parse(res.data);
                var fileList = file.val.map(function (item) {
                    return {
                        name: item.fileName,
                        url: api.imgUrl + '?filePath=' + item.filePath,
                    };
                });
                _that.setData((_a = {
                        jgFileList: fileList
                    },
                    _a["jgFormDate.shxypics"] = file.val,
                    _a["jgFormRrror.shxypicsError"] = '',
                    _a.jgVerification = true,
                    _a));
            },
        });
    },
    jgDelete: function () {
        var _a;
        this.setData((_a = {
                jgFileList: []
            },
            _a["jgFormDate.shxypics"] = [],
            _a["jgFormRrror.shxypicsError"] = '请上传统一社会信用代码扫描件',
            _a.jgVerification = false,
            _a));
    },
    jgPasswordInput: function (value) {
        var _a, _b, _c;
        var reg = /(?=.*([a-zA-Z].*))(?=.*[0-9].*)[a-zA-Z0-9-*/+.~!@#$%^&*()]{6,20}$/;
        var str = reg.test(value.detail);
        if (value.detail) {
            if (str) {
                this.setData((_a = {},
                    _a["jgFormRrror.passwordError"] = '',
                    _a["jgFormDate.password"] = value.detail,
                    _a.jgVerification = true,
                    _a));
            }
            else {
                this.setData((_b = {},
                    _b["jgFormRrror.passwordError"] = '数字、英文、字符两种及以上6-20位',
                    _b["jgFormDate.password"] = value.detail,
                    _b.jgVerification = false,
                    _b));
            }
        }
        else {
            this.setData((_c = {},
                _c["jgFormRrror.passwordError"] = '',
                _c["jgFormDate.password"] = value.detail,
                _c.jgVerification = false,
                _c));
        }
    },
    jgRepeatPasswordInput: function (value) {
        var _a, _b, _c;
        if (value.detail) {
            if (value.detail != this.data.jgFormDate.password) {
                this.setData((_a = {},
                    _a["jgFormRrror.truewordError"] = '两次输入的密码不一致',
                    _a["jgFormDate.trueword"] = value.detail,
                    _a.jgVerification = true,
                    _a));
            }
            else {
                this.setData((_b = {},
                    _b["jgFormRrror.truewordError"] = '',
                    _b["jgFormDate.trueword"] = value.detail,
                    _b.jgVerification = false,
                    _b));
            }
        }
        else {
            this.setData((_c = {},
                _c["jgFormRrror.truewordError"] = '',
                _c["jgFormDate.trueword"] = value.detail,
                _c.jgVerification = false,
                _c));
        }
    },
    jgQyNameInput: function (value) {
        var _a;
        if (value.detail) {
            this.setData((_a = {},
                _a["jgFormRrror.qyNameError"] = '',
                _a["jgFormDate.qyName"] = value.detail,
                _a.jgVerification = true,
                _a));
        }
    },
    jgDanweiFn: function (value) {
        var _a;
        this.setData((_a = {},
            _a["jgFormRrror.qyNatureIdError"] = '',
            _a["jgFormDate.qyNatureId"] = value.detail,
            _a.jgVerification = true,
            _a));
    },
    jgTenantFn: function (value) {
        var _a;
        this.setData((_a = {},
            _a["jgFormRrror.tenantIdError"] = '',
            _a["jgFormDate.tenantId"] = value.detail,
            _a.jgVerification = true,
            _a["jgFormDate.platformId "] = '',
            _a));
        this.getPlatformIdList();
    },
    jgNavItem: function (data) {
        this.setData({
            jgIndex: data.detail.index || 0,
        });
    },
    jgIndustryItem: function (data) {
        var _a, _b, _c;
        var _this = this;
        var id = data.detail.id;
        var pId = data.detail.pId;
        if (id == pId) {
            this.setData({
                jgFlag: false
            });
            this.data.jgIndustryId.forEach(function (item) {
                var _a;
                if (item == pId) {
                    _this.setData((_a = {
                            jgIndustryId: []
                        },
                        _a["jgFormDate.industryBusinesses"] = [],
                        _a.jgIndustryBusinesses = '',
                        _a["jgFormRrror.industryBusinessesError"] = '请选择产业/行业',
                        _a.jgVerification = false,
                        _a.jgFlag = true,
                        _a));
                }
            });
            if (!this.data.jgFlag) {
                var arr = [pId];
                var industryList = [
                    {
                        cyTypeId: pId,
                        hyTypeId: '',
                        pText: data.detail.pText,
                        text: data.detail.text,
                    }
                ];
                this.setData((_a = {
                        jgIndustryId: arr
                    },
                    _a["jgFormDate.industryBusinesses"] = industryList,
                    _a.jgIndustryBusinesses = data.detail.pText + ' / ' + data.detail.text,
                    _a["jgFormRrror.industryBusinessesError"] = '',
                    _a.jgVerification = true,
                    _a));
            }
        }
        else {
            if (this.data.jgIndustryId.length > 0) {
                this.setData({
                    jgFlag: false
                });
                this.data.jgIndustryId.forEach(function (item) {
                    var _a;
                    if (item == id) {
                        var arr = _this.data.jgIndustryId.filter(function (item2) {
                            return item2 != id;
                        });
                        var industryList = _this.data.jgFormDate.industryBusinesses.filter(function (item2) {
                            return item2.hyTypeId != id;
                        });
                        var str = industryList.map(function (item2) {
                            return item2.text;
                        }).join('、');
                        if (industryList.length > 0) {
                            str = industryList[0].pText + ' / ' + str;
                        }
                        else {
                            str = '';
                        }
                        _this.setData((_a = {
                                jgIndustryId: arr
                            },
                            _a["jgFormDate.industryBusinesses"] = industryList,
                            _a.jgIndustryBusinesses = str,
                            _a["jgFormRrror.industryBusinessesError"] = _this.data.jgIndustryId.length == 0 ? '请选择产业/行业' : '',
                            _a.jgVerification = _this.data.jgIndustryId.length == 0 ? false : true,
                            _a.jgFlag = true,
                            _a));
                    }
                });
                if (!this.data.jgFlag) {
                    var arr = [id];
                    var industryList = [
                        {
                            cyTypeId: pId,
                            hyTypeId: id,
                            pText: data.detail.pText,
                            text: data.detail.text,
                        }
                    ];
                    var newArr = this.data.jgIndustryId.concat(arr).filter(function (item) {
                        return item != pId;
                    });
                    var newIndustryList = this.data.jgFormDate.industryBusinesses.concat(industryList).filter(function (item) {
                        return item.hyTypeId != "";
                    });
                    var str = newIndustryList.map(function (item) {
                        return item.text;
                    }).join('、');
                    this.setData((_b = {
                            jgIndustryId: newArr
                        },
                        _b["jgFormDate.industryBusinesses"] = newIndustryList,
                        _b.jgIndustryBusinesses = data.detail.pText + ' / ' + str,
                        _b["jgFormRrror.industryBusinessesError"] = '',
                        _b.jgVerification = true,
                        _b));
                }
            }
            else {
                var arr = [id];
                var industryList = [
                    {
                        cyTypeId: pId,
                        hyTypeId: id,
                        pText: data.detail.pText,
                        text: data.detail.text,
                    }
                ];
                this.setData((_c = {
                        jgIndustryId: arr
                    },
                    _c["jgFormDate.industryBusinesses"] = industryList,
                    _c.jgIndustryBusinesses = data.detail.pText + ' / ' + data.detail.text,
                    _c["jgFormRrror.industryBusinessesError"] = '',
                    _c.jgVerification = true,
                    _c));
            }
        }
    },
    jgQyAddress: function (value) {
        var _a;
        if (value.detail) {
            this.setData((_a = {},
                _a["jgFormRrror.qyAddressError"] = '',
                _a["jgFormDate.qyAddress"] = value.detail,
                _a.jgVerification = true,
                _a));
        }
    },
    jgLegalName: function (value) {
        var _a;
        if (value.detail) {
            this.setData((_a = {},
                _a["jgFormDate.legalName"] = value.detail,
                _a));
        }
    },
    jgLegalId: function (value) {
        var _a, _b;
        var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        var str = reg.test(value.detail);
        if (str) {
            this.setData((_a = {},
                _a["jgFormRrror.legalIdError"] = '',
                _a["jgFormDate.legalId"] = value.detail,
                _a.jgVerification = true,
                _a));
        }
        else {
            this.setData((_b = {},
                _b["jgFormRrror.legalIdError"] = '请输入正确的法人身份证号',
                _b["jgFormDate.legalId"] = value.detail,
                _b.jgVerification = false,
                _b));
        }
    },
    jgLinkPerson: function (value) {
        var _a;
        if (value.detail) {
            this.setData((_a = {},
                _a["jgFormRrror.linkPersonError"] = '',
                _a["jgFormDate.linkPerson"] = value.detail,
                _a.jgVerification = true,
                _a));
        }
    },
    jgLinkTel: function (value) {
        var _a, _b, _c;
        var reg = /^((1[0-9]{10})|(((([0-9]{3}-)?[0-9]{8})|(([0-9]{4}-)?[0-9]{7}))(-[0-9]{1,4})?))$/;
        var str = reg.test(value.detail);
        if (value.detail) {
            if (str) {
                this.setData((_a = {},
                    _a["jgFormRrror.linkTelError"] = '',
                    _a["jgFormDate.linkTel"] = value.detail,
                    _a.jgVerification = true,
                    _a));
            }
            else {
                this.setData((_b = {},
                    _b["jgFormRrror.linkTelError"] = '请输入正确的联系电话',
                    _b["jgFormDate.linkTel"] = value.detail,
                    _b.jgVerification = false,
                    _b));
            }
        }
        else {
            this.setData((_c = {},
                _c["jgFormRrror.linkTelError"] = '',
                _c["jgFormDate.linkTel"] = value.detail,
                _c.jgVerification = false,
                _c));
        }
    },
    jgVerifyCode: function (value) {
        var _a;
        if (value.detail) {
            this.setData((_a = {},
                _a["jgFormRrror.verifyCodeError"] = '',
                _a["jgFormDate.verifyCode"] = value.detail,
                _a.jgVerification = true,
                _a));
        }
    },
    jgEmail: function (value) {
        var _a, _b, _c;
        var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
        var str = reg.test(value.detail);
        if (value.detail) {
            if (str) {
                this.setData((_a = {},
                    _a["jgFormRrror.emailError"] = '',
                    _a["jgFormDate.email"] = value.detail,
                    _a.jgVerification = true,
                    _a));
            }
            else {
                this.setData((_b = {},
                    _b["jgFormRrror.emailError"] = '请输入正确的电子邮箱',
                    _b["jgFormDate.email"] = value.detail,
                    _b.jgVerification = false,
                    _b));
            }
        }
        else {
            this.setData((_c = {},
                _c["jgFormRrror.emailError"] = '',
                _c["jgFormDate.email"] = value.detail,
                _c.jgVerification = false,
                _c));
        }
    },
    jgPlatformOpen: function () {
        this.setData({
            contentOverflow: 'hidden'
        });
        if (this.data.platformIdList.length == 0) {
            Toast('请先选择所在地区！');
        }
    },
    jgPlatformFn: function (value) {
        var _a;
        this.setData((_a = {},
            _a["jgFormDate.platformId"] = value.detail,
            _a));
    },
    jgSubmitFn: function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        console.log(this.data.jgFormDate.industryBusinesses);
        if (this.data.jgFormDate.shxyCode == '') {
            this.setData((_a = {},
                _a["jgFormRrror.shxyCodeError"] = '请输入统一社会信用代码',
                _a.jgVerification = false,
                _a));
        }
        if (this.data.jgFormDate.shxypics.length == 0) {
            this.setData((_b = {},
                _b["jgFormRrror.shxypicsError"] = '请上传统一社会信用代码扫描件',
                _b.jgVerification = false,
                _b));
        }
        if (this.data.jgFormDate.password == '') {
            this.setData((_c = {},
                _c["jgFormRrror.passwordError"] = '请输入密码',
                _c.jgVerification = false,
                _c));
        }
        if (this.data.jgFormDate.trueword == '') {
            this.setData((_d = {},
                _d["jgFormRrror.truewordError"] = '请再次确认密码',
                _d.jgVerification = false,
                _d));
        }
        if (this.data.jgFormDate.qyName == '') {
            this.setData((_e = {},
                _e["jgFormRrror.qyNameError"] = '请输入单位名称',
                _e.jgVerification = false,
                _e));
        }
        if (this.data.jgFormDate.qyNatureId == '') {
            this.setData((_f = {},
                _f["jgFormRrror.qyNatureIdError"] = '请选择单位类型',
                _f.jgVerification = false,
                _f));
        }
        if (this.data.jgFormDate.tenantId == '') {
            this.setData((_g = {},
                _g["jgFormRrror.tenantIdError"] = '请选择所在地区',
                _g.jgVerification = false,
                _g));
        }
        if (this.data.jgIndustryId.length == 0) {
            this.setData((_h = {},
                _h["jgFormRrror.industryBusinessesError"] = '请选择产业/行业',
                _h.jgVerification = false,
                _h));
        }
        if (this.data.jgFormDate.qyAddress == '') {
            this.setData((_j = {},
                _j["jgFormRrror.qyAddressError"] = '请输入单位详细地址',
                _j.jgVerification = false,
                _j));
        }
        if (this.data.jgFormDate.linkPerson == '') {
            this.setData((_k = {},
                _k["jgFormRrror.qyAddressError"] = '请输入单位联系人',
                _k.jgVerification = false,
                _k));
        }
        if (this.data.jgFormDate.linkPerson == '') {
            this.setData((_l = {},
                _l["jgFormRrror.linkTelError"] = '请输入联系电话',
                _l.jgVerification = false,
                _l));
        }
        if (this.data.jgFormDate.verifyCode == '') {
            this.setData((_m = {},
                _m["jgFormRrror.verifyCodeError"] = '请输入验证码',
                _m.jgVerification = false,
                _m));
        }
        if (this.data.jgFormDate.email == '') {
            this.setData((_o = {},
                _o["jgFormRrror.emailError"] = '请输入电子邮箱',
                _o.jgVerification = false,
                _o));
        }
        if (this.data.jgVerification == false) {
            Toast('请把必填信息填写完整！');
        }
        else if (this.data.jgProtocolChecked == false) {
            Toast('请阅读并接受应用使用协议！');
        }
        else {
            https.request(api.enterReg, this.data.jgFormDate, 'POST')
                .then(function () {
                wx.navigateTo({
                    url: '../loginForm/loginForm'
                });
            }, function (err) {
                Toast(err);
            });
        }
    },
    jgVerifyCodeFn: function () {
        var _this = this;
        if (this.data.jgFormDate.linkTel != '') {
            https.request(api.getCode + "?telephone=" + this.data.jgFormDate.linkTel, null, 'GET')
                .then(function () {
                _this.setData({
                    jgVerifyCodeTime: '60',
                    jgDisabled: true
                });
                var setTime = setInterval(function () {
                    var str = parseInt(_this.data.jgVerifyCodeTime) - 1;
                    if (str > 0) {
                        _this.setData({
                            jgVerifyCodeTime: str
                        });
                    }
                    else {
                        clearInterval(setTime);
                        _this.setData({
                            jgVerifyCodeTime: '获取验证码',
                            jgDisabled: false
                        });
                    }
                }, 1000);
            }, function (err) {
                Toast(err);
            });
        }
        else {
            Toast('请先填写联系电话！');
        }
    },
    jgCxPlatform: function (event) {
        var _a;
        this.setData((_a = {},
            _a["jgFormDate.isCxPlatform"] = event.detail,
            _a));
    },
    jgCyPlatform: function (event) {
        var _a;
        this.setData((_a = {},
            _a["jgFormDate.isCyPlatform"] = event.detail,
            _a));
    },
    grCardTypeFn: function (value) {
        var _a;
        this.setData((_a = {},
            _a["grFormRrror.cardTypeIdRrror"] = '',
            _a["grFormDate.cardTypeId"] = value.detail,
            _a.grVerification = true,
            _a));
    },
    grCardNum: function (value) {
        var _a;
        if (value.detail) {
            this.setData((_a = {},
                _a["grFormRrror.cardNumRrror"] = '',
                _a["grFormDate.cardNum"] = value.detail,
                _a.grVerification = true,
                _a));
        }
    },
    grAfterRead: function (event) {
        var _that = this;
        var file = event.detail.file;
        wx.uploadFile({
            url: api.fileUrl,
            filePath: file.path,
            name: 'files',
            formData: {
                filePath: file.path,
                fileName: ''
            },
            success: function (res) {
                var _a;
                var file = JSON.parse(res.data);
                var fileList = file.val.map(function (item) {
                    return {
                        name: item.fileName,
                        url: api.imgUrl + '?filePath=' + item.filePath,
                    };
                });
                _that.setData((_a = {
                        grFileList: fileList
                    },
                    _a["grFormDate.cardPic"] = file.val,
                    _a["grFormRrror.cardPicError"] = '',
                    _a.grVerification = true,
                    _a));
            },
        });
    },
    grDelete: function () {
        var _a;
        this.setData((_a = {
                grFileList: []
            },
            _a["grFormDate.cardPic"] = [],
            _a["grFormRrror.cardPicError"] = '请上传证件扫描件',
            _a.grVerification = false,
            _a));
    },
    grPasswordInput: function (value) {
        var _a, _b, _c;
        var reg = /(?=.*([a-zA-Z].*))(?=.*[0-9].*)[a-zA-Z0-9-*/+.~!@#$%^&*()]{6,20}$/;
        var str = reg.test(value.detail);
        if (value.detail) {
            if (str) {
                this.setData((_a = {},
                    _a["grFormRrror.passwordError"] = '',
                    _a["grFormDate.password"] = value.detail,
                    _a.grVerification = true,
                    _a));
            }
            else {
                this.setData((_b = {},
                    _b["grFormRrror.passwordError"] = '数字、英文、字符两种及以上6-20位',
                    _b["grFormDate.password"] = value.detail,
                    _b.grVerification = false,
                    _b));
            }
        }
        else {
            this.setData((_c = {},
                _c["grFormRrror.passwordError"] = '',
                _c["grFormDate.password"] = value.detail,
                _c.grVerification = false,
                _c));
        }
    },
    grRepeatPasswordInput: function (value) {
        var _a, _b, _c;
        if (value.detail) {
            if (value.detail != this.data.grFormDate.password) {
                this.setData((_a = {},
                    _a["grFormRrror.truewordError"] = '两次输入的密码不一致',
                    _a["grFormDate.trueword"] = value.detail,
                    _a.grVerification = true,
                    _a));
            }
            else {
                this.setData((_b = {},
                    _b["grFormRrror.truewordError"] = '',
                    _b["grFormDate.trueword"] = value.detail,
                    _b.grVerification = false,
                    _b));
            }
        }
        else {
            this.setData((_c = {},
                _c["grFormRrror.truewordError"] = '',
                _c["grFormDate.trueword"] = value.detail,
                _c.grVerification = false,
                _c));
        }
    },
    grRealName: function (value) {
        var _a;
        if (value.detail) {
            this.setData((_a = {},
                _a["grFormRrror.realNameRrror"] = '',
                _a["grFormDate.realName"] = value.detail,
                _a.grVerification = true,
                _a));
        }
    },
    grPhoneNum: function (value) {
        var _a, _b, _c;
        var reg = /^((1[0-9]{10})|(((([0-9]{3}-)?[0-9]{8})|(([0-9]{4}-)?[0-9]{7}))(-[0-9]{1,4})?))$/;
        var str = reg.test(value.detail);
        if (value.detail) {
            if (str) {
                this.setData((_a = {},
                    _a["grFormRrror.phoneNumError"] = '',
                    _a["grFormDate.phoneNum"] = value.detail,
                    _a.grVerification = true,
                    _a));
            }
            else {
                this.setData((_b = {},
                    _b["grFormRrror.phoneNumError"] = '请输入正确的联系电话',
                    _b["grFormDate.phoneNum"] = value.detail,
                    _b.grVerification = false,
                    _b));
            }
        }
        else {
            this.setData((_c = {},
                _c["grFormRrror.phoneNumError"] = '',
                _c["grFormDate.phoneNum"] = value.detail,
                _c.grVerification = false,
                _c));
        }
    },
    grVerifyCode: function (value) {
        var _a;
        if (value.detail) {
            this.setData((_a = {},
                _a["grFormRrror.verifyCodeError"] = '',
                _a["grFormDate.verifyCode"] = value.detail,
                _a.grVerification = true,
                _a));
        }
    },
    grVerifyCodeFn: function () {
        var _this = this;
        if (this.data.grFormDate.phoneNum != '') {
            https.request(api.getCode + "?telephone=" + this.data.grFormDate.phoneNum, null, 'GET')
                .then(function () {
                _this.setData({
                    grVerifyCodeTime: '60',
                    grDisabled: true
                });
                var setTime = setInterval(function () {
                    var str = parseInt(_this.data.grVerifyCodeTime) - 1;
                    if (str > 0) {
                        _this.setData({
                            grVerifyCodeTime: str
                        });
                    }
                    else {
                        clearInterval(setTime);
                        _this.setData({
                            grVerifyCodeTime: '获取验证码',
                            grDisabled: false
                        });
                    }
                }, 1000);
            }, function (err) {
                Toast(err);
            });
        }
        else {
            Toast('请先填写联系电话！');
        }
    },
    grEmail: function (value) {
        var _a, _b, _c;
        var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
        var str = reg.test(value.detail);
        if (value.detail) {
            if (str) {
                this.setData((_a = {},
                    _a["grFormRrror.emailError"] = '',
                    _a["grFormDate.email"] = value.detail,
                    _a.grVerification = true,
                    _a));
            }
            else {
                this.setData((_b = {},
                    _b["grFormRrror.emailError"] = '请输入正确的电子邮箱',
                    _b["grFormDate.email"] = value.detail,
                    _b.grVerification = false,
                    _b));
            }
        }
        else {
            this.setData((_c = {},
                _c["grFormRrror.emailError"] = '',
                _c["grFormDate.email"] = value.detail,
                _c.grVerification = false,
                _c));
        }
    },
    grxiaQuFn: function (value) {
        var _a;
        this.setData((_a = {},
            _a["grFormRrror.xiaQuIdError"] = '',
            _a["grFormDate.xiaQuId"] = value.detail,
            _a.grVerification = true,
            _a["grFormDate.danWeiId"] = '',
            _a));
        this.getGrPlatformIdList();
    },
    grPlatformOpen: function () {
        this.setData({
            contentOverflow: 'hidden'
        });
        if (this.data.grPlatformIdList.length == 0) {
            Toast('请先选择所在地区！');
        }
    },
    grPlatformFn: function (value) {
        var _a;
        this.setData((_a = {},
            _a["grFormDate.danWeiId"] = value.detail,
            _a));
    },
    grQyAddress: function (value) {
        var _a;
        if (value.detail) {
            this.setData((_a = {},
                _a["grFormDate.danWeiAddress"] = value.detail,
                _a));
        }
    },
    grCurLocation: function (value) {
        var _a;
        if (value.detail) {
            this.setData((_a = {},
                _a["grFormRrror.curLocationError"] = '',
                _a["grFormDate.curLocation"] = value.detail,
                _a.grVerification = true,
                _a));
        }
    },
    grIsLiuXue: function (event) {
        var _a;
        this.setData((_a = {},
            _a["grFormDate.isLiuXue"] = event.detail,
            _a));
    },
    grypeFn: function (value) {
        var _a;
        this.setData((_a = {},
            _a["grFormRrror.rcTypeIdError"] = '',
            _a["grFormDate.rcTypeId"] = value.detail,
            _a.grVerification = true,
            _a));
    },
    grNavItem: function (data) {
        this.setData({
            grIndex: data.detail.index || 0,
        });
    },
    grIndustryItem: function (data) {
        var _a, _b, _c;
        var _this = this;
        var id = data.detail.id;
        var pId = data.detail.pId;
        if (id == pId) {
            this.setData({
                grFlag: false
            });
            this.data.grIndustryId.forEach(function (item) {
                var _a;
                if (item == pId) {
                    _this.setData((_a = {
                            grIndustryId: []
                        },
                        _a["grFormDate.industryBusinessModels"] = [],
                        _a.jgIndustryBusinesses = '',
                        _a["grFormRrror.industryBusinessModelsError"] = '请选择产业/行业',
                        _a.grVerification = false,
                        _a.grFlag = true,
                        _a));
                }
            });
            if (!this.data.grFlag) {
                var arr = [pId];
                var industryList = [
                    {
                        cyTypeId: pId,
                        hyTypeId: '',
                        pText: data.detail.pText,
                        text: data.detail.text,
                    }
                ];
                this.setData((_a = {
                        grIndustryId: arr
                    },
                    _a["grFormDate.industryBusinessModels"] = industryList,
                    _a.grIndustryBusinesses = data.detail.pText + ' / ' + data.detail.text,
                    _a["grFormRrror.industryBusinessModelsError"] = '',
                    _a.grVerification = true,
                    _a));
            }
        }
        else {
            if (this.data.grIndustryId.length > 0) {
                this.setData({
                    grFlag: false
                });
                this.data.grIndustryId.forEach(function (item) {
                    var _a;
                    if (item == id) {
                        var arr = _this.data.grIndustryId.filter(function (item2) {
                            return item2 != id;
                        });
                        var industryList = _this.data.grFormDate.industryBusinessModels.filter(function (item2) {
                            return item2.hyTypeId != id;
                        });
                        var str = industryList.map(function (item2) {
                            return item2.text;
                        }).join('、');
                        if (industryList.length > 0) {
                            str = industryList[0].pText + ' / ' + str;
                        }
                        else {
                            str = '';
                        }
                        _this.setData((_a = {
                                grIndustryId: arr
                            },
                            _a["grFormDate.industryBusinessModels"] = industryList,
                            _a.grIndustryBusinesses = str,
                            _a["grFormRrror.industryBusinessModelsError"] = _this.data.grIndustryId.length == 0 ? '请选择产业/行业' : '',
                            _a.grVerification = _this.data.grIndustryId.length == 0 ? false : true,
                            _a.grFlag = true,
                            _a));
                    }
                });
                if (!this.data.grFlag) {
                    var arr = [id];
                    var industryList = [
                        {
                            cyTypeId: pId,
                            hyTypeId: id,
                            pText: data.detail.pText,
                            text: data.detail.text,
                        }
                    ];
                    var newArr = this.data.grIndustryId.concat(arr).filter(function (item) {
                        return item != pId;
                    });
                    var newIndustryList = this.data.grFormDate.industryBusinessModels.concat(industryList).filter(function (item) {
                        return item.hyTypeId != "";
                    });
                    var str = newIndustryList.map(function (item) {
                        return item.text;
                    }).join('、');
                    this.setData((_b = {
                            grIndustryId: newArr
                        },
                        _b["grFormDate.industryBusinessModels"] = newIndustryList,
                        _b.grIndustryBusinesses = data.detail.pText + ' / ' + str,
                        _b["grFormRrror.industryBusinessModelsError"] = '',
                        _b.grVerification = true,
                        _b));
                }
            }
            else {
                var arr = [id];
                var industryList = [
                    {
                        cyTypeId: pId,
                        hyTypeId: id,
                        pText: data.detail.pText,
                        text: data.detail.text,
                    }
                ];
                this.setData((_c = {
                        grIndustryId: arr
                    },
                    _c["grFormDate.industryBusinessModels"] = industryList,
                    _c.grIndustryBusinesses = data.detail.pText + ' / ' + data.detail.text,
                    _c["grFormRrror.industryBusinessModelsError"] = '',
                    _c.grVerification = true,
                    _c));
            }
        }
    },
    grProtocolCheckedFn: function (value) {
        this.setData({
            grProtocolChecked: value.detail
        });
    },
    grSubmitFn: function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        if (this.data.grFormDate.cardTypeId == '') {
            this.setData((_a = {},
                _a["grFormRrror.cardTypeIdRrror"] = '请选择单位类型',
                _a.grVerification = false,
                _a));
        }
        if (this.data.grFormDate.cardNum == '') {
            this.setData((_b = {},
                _b["grFormRrror.cardNumRrror"] = '请选择证件号码',
                _b.grVerification = false,
                _b));
        }
        if (this.data.grFormDate.cardPic.length == 0) {
            this.setData((_c = {},
                _c["grFormRrror.cardPicError"] = '请上传证件扫描件',
                _c.grVerification = false,
                _c));
        }
        if (this.data.grFormDate.password == '') {
            this.setData((_d = {},
                _d["grFormRrror.passwordError"] = '请输入密码',
                _d.grVerification = false,
                _d));
        }
        if (this.data.grFormDate.trueword == '') {
            this.setData((_e = {},
                _e["grFormRrror.truewordError"] = '请再次确认密码',
                _e.grVerification = false,
                _e));
        }
        if (this.data.grFormDate.realName == '') {
            this.setData((_f = {},
                _f["grFormRrror.realNameRrror"] = '请输入姓名',
                _f.grVerification = false,
                _f));
        }
        if (this.data.grFormDate.phoneNum == '') {
            this.setData((_g = {},
                _g["grFormRrror.phoneNumError"] = '请输入联系电话',
                _g.grVerification = false,
                _g));
        }
        if (this.data.grFormDate.verifyCode == '') {
            this.setData((_h = {},
                _h["grFormRrror.verifyCodeError"] = '请输入验证码',
                _h.grVerification = false,
                _h));
        }
        if (this.data.grFormDate.email == '') {
            this.setData((_j = {},
                _j["grFormRrror.emailError"] = '请输入电子邮箱',
                _j.grVerification = false,
                _j));
        }
        if (this.data.grFormDate.xiaQuId == '') {
            this.setData((_k = {},
                _k["grFormRrror.xiaQuIdError"] = '请选择所在地区',
                _k.grVerification = false,
                _k));
        }
        if (this.data.grFormDate.curLocation == '') {
            this.setData((_l = {},
                _l["grFormRrror.curLocationError"] = '请输入现居住地详细地址',
                _l.grVerification = false,
                _l));
        }
        if (this.data.grFormDate.rcTypeId == '') {
            this.setData((_m = {},
                _m["grFormRrror.rcTypeIdError"] = '请选择您属于',
                _m.grVerification = false,
                _m));
        }
        if (this.data.grFormDate.industryBusinessModels.length == 0) {
            this.setData((_o = {},
                _o["grFormRrror.industryBusinessModelsError"] = '请选择产业/行业',
                _o.grVerification = false,
                _o));
        }
        if (this.data.grVerification == false) {
            Toast('请把必填信息填写完整！');
        }
        else if (this.data.grProtocolChecked == false) {
            Toast('请阅读并接受应用使用协议！');
        }
        else {
            https.request(api.userReg, this.data.grFormDate, 'POST')
                .then(function () {
                wx.navigateTo({
                    url: '../loginForm/loginForm'
                });
            }, function (err) {
                Toast(err);
            });
        }
    },
    noticeFn: function () {
        this.setData({
            jgProtocolChecked: !this.data.jgProtocolChecked
        });
        Dialog.alert({
            title: '注册须知',
            messageAlign: 'left',
            message: '1.本站采用实名认证，申请人须确保填写信息的真实、完整、有效。信息填写不真实、不完整等将导致注册无法审核通过。本站确保用户信息的安全性和保密性并为之负责。\n2.遵守中华人民共和国法律法令和其他相关法规，严禁发布破坏宪法和法律、法规的信息。\n3.遵守公安部关于《计算机信息网络国际联网安全保护管理办法》的规定，自觉维护计算机信息网络的安全。\n4.严禁在网上宣扬封建迷信、淫秽、色情、暴力、赌博、欺诈等不正当行为。\n5.单位或个人发布的信息要真实有效、准确完整，并不得有引人误解或者虚假的陈述。\n6.用户注册成功后，请妥善保管您的用户名和密码。',
        }).then(function () {
        });
    },
    grNoticeFn: function () {
        this.setData({
            grProtocolChecked: !this.data.grProtocolChecked
        });
        Dialog.alert({
            title: '注册须知',
            messageAlign: 'left',
            message: '1.本站采用实名认证，申请人须确保填写信息的真实、完整、有效。信息填写不真实、不完整等将导致注册无法审核通过。本站确保用户信息的安全性和保密性并为之负责。\n2.遵守中华人民共和国法律法令和其他相关法规，严禁发布破坏宪法和法律、法规的信息。\n3.遵守公安部关于《计算机信息网络国际联网安全保护管理办法》的规定，自觉维护计算机信息网络的安全。\n4.严禁在网上宣扬封建迷信、淫秽、色情、暴力、赌博、欺诈等不正当行为。\n5.单位或个人发布的信息要真实有效、准确完整，并不得有引人误解或者虚假的陈述。\n6.用户注册成功后，请妥善保管您的用户名和密码。',
        }).then(function () {
        });
    },
    onLoad: function () {
        wx.setNavigationBarTitle({
            title: "注册"
        });
        this.getDanweiList();
        this.getTenantList();
        this.getIndustryBusinesses();
        this.getcardList();
        this.getTypeIdList();
    },
    onReady: function () { },
    onShow: function () { },
    onHide: function () { },
    onUnload: function () { }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXJlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlZ2lzdGVyZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsb0RBQW9ELENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDbkYsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLGtEQUFrRCxDQUFDLENBQUMsT0FBTyxDQUFDO0FBQ2hGLElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBRSxDQUFDLFVBQVUsQ0FBQztBQUNoQyxJQUFJLEtBQUssR0FBSSxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUVqRCxJQUFJLENBQUM7SUFFSCxJQUFJLEVBQUU7UUFDSixNQUFNLEVBQUUsS0FBSztRQUNiLE1BQU0sRUFBRSxLQUFLO1FBRWIsZUFBZSxFQUFFLFFBQVE7UUFDekIsU0FBUyxFQUFFLElBQUk7UUFFZixZQUFZLEVBQUUsRUFBRTtRQUNoQixVQUFVLEVBQUUsRUFBRTtRQUNkLHNCQUFzQixFQUFFLEVBQUU7UUFDMUIsY0FBYyxFQUFFLEVBQUU7UUFDbEIsUUFBUSxFQUFFLEVBQUU7UUFDWixnQkFBZ0IsRUFBRSxFQUFFO1FBQ3BCLFVBQVUsRUFBRSxFQUFFO1FBRWQsT0FBTyxFQUFFLENBQUM7UUFDVixZQUFZLEVBQUUsRUFBRTtRQUNoQixvQkFBb0IsRUFBRSxFQUFFO1FBQ3hCLGdCQUFnQixFQUFFLE9BQU87UUFDekIsVUFBVSxFQUFFLEtBQUs7UUFDakIsaUJBQWlCLEVBQUUsS0FBSztRQUd4QixPQUFPLEVBQUUsQ0FBQztRQUNWLFlBQVksRUFBRSxFQUFFO1FBQ2hCLG9CQUFvQixFQUFFLEVBQUU7UUFDeEIsZ0JBQWdCLEVBQUUsT0FBTztRQUN6QixVQUFVLEVBQUUsS0FBSztRQUNqQixpQkFBaUIsRUFBRSxLQUFLO1FBR3hCLFVBQVUsRUFBRSxFQUFFO1FBQ2QsZ0JBQWdCLEVBQUUsRUFBRTtRQUNwQixlQUFlLEVBQUUsRUFBRTtR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QUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVnaXN0ZXJlZC50c1xyXG5sZXQgRGlhbG9nID0gcmVxdWlyZSgnLi4vLi4vbWluaXByb2dyYW1fbnBtL0B2YW50L3dlYXBwL2RpYWxvZy9kaWFsb2cuanMnKS5kZWZhdWx0O1xyXG5sZXQgVG9hc3QgPSByZXF1aXJlKCcuLi8uLi9taW5pcHJvZ3JhbV9ucG0vQHZhbnQvd2VhcHAvdG9hc3QvdG9hc3QuanMnKS5kZWZhdWx0O1xyXG5jb25zdCBhcGkgPSBnZXRBcHAoKS5nbG9iYWxEYXRhOyAgLy8g6I635Y+W5bqU55So5a6e5L6LXHJcbmxldCBodHRwcyAgPSByZXF1aXJlKCcuLi8uLi91dGlscy9teVJlcXVlc3QuanMnKTsgICAgIC8v6I635Y+WYWpheOaWueazlVxyXG5cclxuUGFnZSh7XHJcbiAgLy/pobXpnaLmlbDmja5cclxuICBkYXRhOiB7XHJcbiAgICBqZ0ZsYWc6IGZhbHNlLCAgICAgICAgICAgICAgICAgIC8v5py65p6E6KGM5Lia6YeN5aSN5Yik5patXHJcbiAgICBnckZsYWc6IGZhbHNlLCAgICAgICAgICAgICAgICAgIC8v5Liq5Lq66KGM5Lia6YeN5aSN5Yik5patXHJcblxyXG4gICAgY29udGVudE92ZXJmbG93OiAnc2Nyb2xsJywgICAgICAvL+WGheWuuemrmOW6plxyXG4gICAgdGFiQWN0aXZlOiAnamcnLCAgICAgICAgICAgICAgICAvL+azqOWGjHRhYlxyXG5cclxuICAgIHF5ZGFud2VpTGlzdDogW10sICAgICAgICAgICAgICAgLy/ljZXkvY3nsbvlnotcclxuICAgIHRlbmFudExpc3Q6IFtdLCAgICAgICAgICAgICAgICAgLy/miYDlnKjlnLDljLpcclxuICAgIGluZHVzdHJ5QnVzaW5lc3Nlc0xpc3Q6IFtdLCAgICAgLy/kuqfkuJrjgIHooYzkuJrnsbvliKvliJfooahcclxuICAgIHBsYXRmb3JtSWRMaXN0OiBbXSwgICAgICAgICAgICAgLy/miYDlsZ7liJvkuJrlubPlj7BcclxuICAgIGNhcmRMaXN0OiBbXSwgICAgICAgICAgICAgICAgICAgLy/or4Hku7bnsbvlnotcclxuICAgIGdyUGxhdGZvcm1JZExpc3Q6IFtdLCAgICAgICAgICAgLy/kuKrkurrlt6XkvZzljZXkvY1cclxuICAgIHR5cGVJZExpc3Q6IFtdLCAgICAgICAgICAgICAgICAgLy/mgqjlsZ7kuo5cclxuICBcclxuICAgIGpnSW5kZXg6IDAsICAgICAgICAgICAgICAgICAgICAgLy/lvZPliY3ntKLlvJXvvIjmnLrmnoTvvIlcclxuICAgIGpnSW5kdXN0cnlJZDogW10sICAgICAgICAgICAgICAgLy/pgInkuK3nmoRpZO+8iOacuuaehO+8iVxyXG4gICAgamdJbmR1c3RyeUJ1c2luZXNzZXM6ICcnLCAgICAgICAvL+S6p+S4muOAgeihjOS4muaYvuekulxyXG4gICAgamdWZXJpZnlDb2RlVGltZTogJ+iOt+WPlumqjOivgeeggScsICAvL+iOt+WPlumqjOivgeeggVxyXG4gICAgamdEaXNhYmxlZDogZmFsc2UsICAgICAgICAgICAgICAvL+mqjOivgeeggeaMiemSrueKtuaAgVxyXG4gICAgamdQcm90b2NvbENoZWNrZWQ6IGZhbHNlLCAgICAgICAvL+WNj+iurlxyXG5cclxuXHJcbiAgICBnckluZGV4OiAwLCAgICAgICAgICAgICAgICAgICAgIC8v5b2T5YmN57Si5byV77yI5py65p6E77yJXHJcbiAgICBnckluZHVzdHJ5SWQ6IFtdLCAgICAgICAgICAgICAvL+mAieS4reeahGlk77yI5py65p6E77yJXHJcbiAgICBnckluZHVzdHJ5QnVzaW5lc3NlczogJycsICAgICAgIC8v5Lqn5Lia44CB6KGM5Lia5pi+56S6XHJcbiAgICBnclZlcmlmeUNvZGVUaW1lOiAn6I635Y+W6aqM6K+B56CBJywgIC8v6I635Y+W6aqM6K+B56CBXHJcbiAgICBnckRpc2FibGVkOiBmYWxzZSwgICAgICAgICAgICAgIC8v6aqM6K+B56CB5oyJ6ZKu54q25oCBXHJcbiAgICBnclByb3RvY29sQ2hlY2tlZDogZmFsc2UsICAgICAgIC8v5Y2P6K6uXHJcblxyXG4gICAgLy/mnLrmnoTms6jlhoxcclxuICAgIGpnRmlsZUxpc3Q6IFtdLCAgICAgICAgICAvL+acuuaehOS4iuS8oOmZhOS7tlxyXG4gICAgamdSZXBlYXRQYXNzd29yZDogJycsICAgIC8v5py65p6E56Gu6K6k5a+G56CBXHJcbiAgICBqZ1Bhc3N3b3JkRXJyb3I6ICcnLCAgICAgLy/mnLrmnoTnoa7orqTlr4bnoIFcclxuICAgIHVuaXRUeXBlOiBbICAgICAgICAgICAgICAvL+WNleS9jeexu+Wei1xyXG4gICAgICB7IHRleHQ6ICfpgInmi6nnsbvlnosnLCB2YWx1ZTogMCB9LFxyXG4gICAgICB7IHRleHQ6ICfmlrDmrL7llYblk4EnLCB2YWx1ZTogMSB9LFxyXG4gICAgICB7IHRleHQ6ICfmtLvliqjllYblk4EnLCB2YWx1ZTogMiB9LFxyXG4gICAgXSxcclxuICAgIGpnRm9ybURhdGU6eyAgLy/mnLrmnoTooajljZVcclxuICAgICAgc2h4eUNvZGU6ICcnLCAgICAgICAgICAgICAgICAgLy/nu5/kuIDnpL7kvJrkv6HnlKjku6PnoIFcclxuICAgICAgc2h4eXBpY3M6IFtdLCAgICAgICAgICAgICAgICAgLy/nu5/kuIDnpL7kvJrkv6HnlKjku6PnoIHmiavmj4/ku7bkuIrkvKBcclxuICAgICAgcGFzc3dvcmQ6ICcnLCAgICAgICAgICAgICAgICAgLy/lr4bnoIFcclxuICAgICAgdHJ1ZXdvcmQ6ICcnLCAgICAgICAgICAgICAgICAgLy/noa7orqTlr4bnoIFcclxuICAgICAgcXlOYW1lOiAnJywgICAgICAgICAgICAgICAgICAgLy/ljZXkvY3lkI3np7BcclxuICAgICAgcXlOYXR1cmVJZDogJycsICAgICAgICAgICAgICAgLy/ljZXkvY3nsbvlnotcclxuICAgICAgdGVuYW50SWQ6ICcnLCAgICAgICAgICAgICAgICAgLy/miYDlnKjlnLDljLpcclxuICAgICAgaW5kdXN0cnlCdXNpbmVzc2VzOiBbXSwgICAgICAgLy/kuqfkuJrjgIHooYzkuJpcclxuICAgICAgcXlBZGRyZXNzOiAnJywgICAgICAgICAgICAgICAgLy/ljZXkvY3or6bnu4blnLDlnYBcclxuICAgICAgbGVnYWxOYW1lOiAnJywgICAgICAgICAgICAgICAgLy/ms5Xkurrlp5PlkI1cclxuICAgICAgbGVnYWxJZDogJycsICAgICAgICAgICAgICAgICAgLy/ms5Xkurrouqvku73or4Hlj7dcclxuICAgICAgbGlua1BlcnNvbjogJycsICAgICAgICAgICAgICAgLy/ogZTns7vkurpcclxuICAgICAgbGlua1RlbDogJycsICAgICAgICAgICAgICAgICAgLy/ogZTns7vkurrnlLXor51cclxuICAgICAgdmVyaWZ5Q29kZTogJycsICAgICAgICAgICAgICAgLy/pqozor4HnoIFcclxuICAgICAgZW1haWw6ICcnLCAgICAgICAgICAgICAgICAgICAgLy/nlLXlrZDpgq7nrrFcclxuICAgICAgaXNDeFBsYXRmb3JtOiAnMicsICAgICAgICAgICAgLy/mmK/lkKbliJvmlrDlubPlj7DkuLvkvZPljZXkvY1cclxuICAgICAgaXNDeVBsYXRmb3JtOiAnMicsICAgICAgICAgICAgLy/mmK/lkKbliJvkuJrlubPlj7DkuLvkvZPljZXkvY1cclxuICAgICAgcGxhdGZvcm1JZDogJycgICAgICAgICAgICAgICAgLy/miYDlsZ7liJvkuJrlubPlj7BcclxuICAgIH0sXHJcbiAgICBqZ0Zvcm1ScnJvcjp7ICAvL+acuuaehOmqjOivgVxyXG4gICAgICBzaHh5Q29kZUVycm9yOiAnJywgICAgICAgICAgICAvL+e7n+S4gOekvuS8muS/oeeUqOS7o+eggVxyXG4gICAgICBzaHh5cGljc0Vycm9yOiAnJywgICAgICAgICAgICAvL+e7n+S4gOekvuS8muS/oeeUqOS7o+eggeaJq+aPj+S7tuS4iuS8oFxyXG4gICAgICBwYXNzd29yZEVycm9yOiAnJywgICAgICAgICAgICAvL+WvhueggVxyXG4gICAgICB0cnVld29yZEVycm9yOiAnJywgICAgICAgICAgICAvL+ehruiupOWvhueggVxyXG4gICAgICBxeU5hbWVFcnJvcjogJycsICAgICAgICAgICAgICAvL+WNleS9jeWQjeensFxyXG4gICAgICBxeU5hdHVyZUlkRXJyb3I6ICcnLCAgICAgICAgICAvL+WNleS9jeexu+Wei1xyXG4gICAgICB0ZW5hbnRJZEVycm9yOiAnJywgICAgICAgICAgICAvL+aJgOWcqOWcsOWMulxyXG4gICAgICBpbmR1c3RyeUJ1c2luZXNzZXNFcnJvcjogJycsICAvL+S6p+S4muOAgeihjOS4mlxyXG4gICAgICBxeUFkZHJlc3NFcnJvcjogJycsICAgICAgICAgICAvL+WNleS9jeivpue7huWcsOWdgFxyXG4gICAgICBsZWdhbElkRXJyb3I6ICcnLCAgICAgICAgICAgICAvL+azleS6uui6q+S7veivgeWPt1xyXG4gICAgICBsaW5rUGVyc29uRXJyb3I6ICcnLCAgICAgICAgICAvL+iBlOezu+S6ulxyXG4gICAgICBsaW5rVGVsRXJyb3I6ICcnLCAgICAgICAgICAgICAvL+iBlOezu+S6uueUteivnVxyXG4gICAgICB2ZXJpZnlDb2RlRXJyb3I6ICcnLCAgICAgICAgICAvL+mqjOivgeeggVxyXG4gICAgICBlbWFpbEVycm9yOiAnJyAgICAgICAgICAgICAgICAvL+eUteWtkOmCrueusVxyXG4gICAgfSxcclxuICAgIGpnVmVyaWZpY2F0aW9uOiBmYWxzZSwgICAgLy/pqozor4HliKTmlq1cclxuXHJcblxyXG4gICAgLy/kuKrkurrpqozor4FcclxuICAgIGdyRmlsZUxpc3Q6IFtdLCAgICAgICAgICAgICAgICAgIC8v5py65p6E5LiK5Lyg6ZmE5Lu2XHJcbiAgICBnckZvcm1EYXRlOnsgIC8v5py65p6E6KGo5Y2VXHJcbiAgICAgIGNhcmRUeXBlSWQ6ICcnLCAgICAgICAgICAgICAgICAvL+ivgeS7tuexu+Wei1xyXG4gICAgICBjYXJkTnVtOiAnJywgICAgICAgICAgICAgICAgICAgLy/or4Hku7blj7fnoIFcclxuICAgICAgY2FyZFBpYzogW10sICAgICAgICAgICAgICAgICAgIC8v6K+B5Lu25omr5o+P5Lu25LiK5LygXHJcbiAgICAgIHBhc3N3b3JkOiAnJywgICAgICAgICAgICAgICAgICAvL+WvhueggVxyXG4gICAgICB0cnVld29yZDogJycsICAgICAgICAgICAgICAgICAgLy/noa7orqTlr4bnoIFcclxuICAgICAgcmVhbE5hbWU6ICcnLCAgICAgICAgICAgICAgICAgIC8v5aeT5ZCNXHJcbiAgICAgIHBob25lTnVtOiAnJywgICAgICAgICAgICAgICAgICAvL+iBlOezu+eUteivnVxyXG4gICAgICB2ZXJpZnlDb2RlOiAnJywgICAgICAgICAgICAgICAgLy/pqozor4HnoIFcclxuICAgICAgZW1haWw6ICcnLCAgICAgICAgICAgICAgICAgICAgIC8v55S15a2Q6YKu566xXHJcbiAgICAgIHhpYVF1SWQ6ICcnLCAgICAgICAgICAgICAgICAgICAvL+aJgOWxnuWcsOWMulxyXG4gICAgICBkYW5XZWlJZDogJycsICAgICAgICAgICAgICAgICAgLy8g5omA5bGe5Y2V5L2NXHJcbiAgICAgIGRhbldlaUFkZHJlc3M6ICcnLCAgICAgICAgICAgICAvL+W3peS9nOWNleS9jeivpue7huWcsOWdgFxyXG4gICAgICBjdXJMb2NhdGlvbjogJycsICAgICAgICAgICAgICAgLy/njrDlsYXkvY/lnLDor6bnu4blnLDlnYBcclxuICAgICAgaXNMaXVYdWU6ICcyJywgICAgICAgICAgICAgICAgIC8v5piv5ZCm5Li655WZ5a2m5Zue5Zu95Lq65ZGYXHJcbiAgICAgIHJjVHlwZUlkOiAnJywgICAgICAgICAgICAgICAgICAvL+aCqOWxnuS6jlxyXG4gICAgICBpbmR1c3RyeUJ1c2luZXNzTW9kZWxzOiBbXSwgICAgLy/kuqfkuJrjgIHooYzkuJpcclxuICAgIH0sXHJcbiAgICBnckZvcm1ScnJvcjp7ICAvL+acuuaehOmqjOivgVxyXG4gICAgICBjYXJkVHlwZUlkUnJyb3I6ICcnLCAgICAgICAgICAgLy/or4Hku7bnsbvlnotcclxuICAgICAgY2FyZE51bVJycm9yOiAnJywgICAgICAgICAgICAgIC8v6K+B5Lu25Y+356CBXHJcbiAgICAgIGNhcmRQaWNFcnJvcjogJycsICAgICAgICAgICAgICAvL+ivgeS7tuaJq+aPj+S7tuS4iuS8oFxyXG4gICAgICBwYXNzd29yZEVycm9yOiAnJywgICAgICAgICAgICAgLy/lr4bnoIFcclxuICAgICAgdHJ1ZXdvcmRFcnJvcjogJycsICAgICAgICAgICAgIC8v56Gu6K6k5a+G56CBXHJcbiAgICAgIHJlYWxOYW1lRXJyb3I6ICcnLCAgICAgICAgICAgICAvL+Wnk+WQjVxyXG4gICAgICBwaG9uZU51bUVycm9yOiAnJywgICAgICAgICAgICAgLy/ogZTns7vnlLXor51cclxuICAgICAgdmVyaWZ5Q29kZUVycm9yOiAnJywgICAgICAgICAgIC8v6aqM6K+B56CBXHJcbiAgICAgIGVtYWlsRXJyb3I6ICcnLCAgICAgICAgICAgICAgICAvL+eUteWtkOmCrueusVxyXG4gICAgICB4aWFRdUlkRXJyb3I6ICcnLCAgICAgICAgICAgICAgLy/miYDlsZ7lnLDljLpcclxuICAgICAgZGFuV2VpSWRFcnJvcjogJycsICAgICAgICAgICAgIC8vIOaJgOWxnuWNleS9jVxyXG4gICAgICBjdXJMb2NhdGlvbkVycm9yOiAnJywgICAgICAgICAgLy/njrDlsYXkvY/lnLDor6bnu4blnLDlnYBcclxuICAgICAgcmNUeXBlSWRFcnJvcjogJycsICAgICAgICAgICAgIC8v5oKo5bGe5LqOXHJcbiAgICAgIGluZHVzdHJ5QnVzaW5lc3NNb2RlbHNFcnJvcjogW10sICAgIC8v5Lqn5Lia44CB6KGM5LiaXHJcbiAgICB9LFxyXG4gICAgZ3JWZXJpZmljYXRpb246IGZhbHNlLCAgICAvL+mqjOivgeWIpOaWrVxyXG4gIH0sXHJcblxyXG4gIGRyb3Bkb3duT3BlbigpOnZvaWR7ICAvL+aJk+W8gOS4i+aLieiPnOWNleinpuWPkVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgY29udGVudE92ZXJmbG93OiAnaGlkZGVuJ1xyXG4gICAgfSlcclxuICB9LFxyXG4gIGRyb3Bkb3duQ2xvc2UoKTp2b2lkeyAgLy/lhbPpl63kuIvmi4noj5zljZXop6blj5FcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGNvbnRlbnRPdmVyZmxvdzogJ3Njcm9sbCdcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcblxyXG4gIGdldERhbndlaUxpc3QoKTp2b2lkeyAgLy/ojrflj5bljZXkvY3nsbvlnotcclxuICAgIGh0dHBzLnJlcXVlc3QoYXBpLnN1Ym1lbnVEaWMgKyAnP21vaWQ9MTQnLCBudWxsLCAnR0VUJylcclxuICAgIC50aGVuKChyZXM6YW55KTp2b2lkPT57XHJcbiAgICAgIGxldCBsaXN0OmFueSA9IHJlcy52YWwubWFwKChpdGVtOmFueSk6YW55PT57XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHRleHQ6IGl0ZW0uZGljTmFtZSxcclxuICAgICAgICAgIHZhbHVlOiBpdGVtLmlkXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHF5ZGFud2VpTGlzdDogbGlzdFxyXG4gICAgICB9KVxyXG4gICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIGdldFRlbmFudExpc3QoKTp2b2lkeyAgLy/ojrflj5bmiYDlnKjlnLDljLpcclxuICAgIGh0dHBzLnJlcXVlc3QoYXBpLnRlbmFudExpc3QsIG51bGwsICdHRVQnKVxyXG4gICAgLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgbGV0IGxpc3Q6YW55ID0gcmVzLmxpc3QubWFwKChpdGVtOmFueSk6YW55PT57XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHRleHQ6IGl0ZW0uY25hbWUsXHJcbiAgICAgICAgICB2YWx1ZTogaXRlbS5pZFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICB0ZW5hbnRMaXN0OiBsaXN0XHJcbiAgICAgIH0pXHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgZ2V0SW5kdXN0cnlCdXNpbmVzc2VzKCk6dm9pZHsgIC8v5Lqn5Lia44CB6KGM5Lia57G75YirXHJcbiAgICBodHRwcy5yZXF1ZXN0KGFwaS5zdWJtZW51RGljICsgJz9tb2lkPTcnLCBudWxsLCAnR0VUJylcclxuICAgIC50aGVuKChyZXM6YW55KTp2b2lkPT57XHJcbiAgICAgIGlmKHJlcyl7XHJcbiAgICAgICAgbGV0IGFycjphbnkgPSByZXMudmFsLm1hcCgoaXRlbTphbnkpOmFueT0+e1xyXG4gICAgICAgICAgbGV0IGNoaWxkcmVuOmFueSA9IGl0ZW0uY2hpbGRyZW4ubWFwKChpdGVtMjphbnkpOmFueT0+e1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIHBUZXh0OiBpdGVtLmRpY05hbWUsXHJcbiAgICAgICAgICAgICAgdGV4dDogaXRlbTIuZGljTmFtZSxcclxuICAgICAgICAgICAgICBpZDogaXRlbTIuaWQsXHJcbiAgICAgICAgICAgICAgcElkOiBpdGVtMi5wSWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIGNoaWxkcmVuLnVuc2hpZnQoe1xyXG4gICAgICAgICAgICBwVGV4dDogaXRlbS5kaWNOYW1lLFxyXG4gICAgICAgICAgICB0ZXh0OiAn5YWo6YOoJyxcclxuICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgIHBJZDogaXRlbS5pZCxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdGV4dDogaXRlbS5kaWNOYW1lLFxyXG4gICAgICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW5cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBpbmR1c3RyeUJ1c2luZXNzZXNMaXN0OiBhcnJcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBnZXRQbGF0Zm9ybUlkTGlzdCgpOnZvaWR7ICAvL+iOt+WPluaJgOWxnuWIm+S4muW5s+WPsFxyXG4gICAgaHR0cHMucmVxdWVzdChhcGkuY3lQbGF0Zm9ybUFwaSArICc/eGlhUXVJZD0nICsgdGhpcy5kYXRhLmpnRm9ybURhdGUudGVuYW50SWQsIG51bGwsICdHRVQnKVxyXG4gICAgLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgbGV0IGxpc3Q6YW55ID0gcmVzLmxpc3QubWFwKChpdGVtOmFueSk6YW55PT57XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHRleHQ6IGl0ZW0uY3lOYW1lLFxyXG4gICAgICAgICAgdmFsdWU6IGl0ZW0uaWRcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgcGxhdGZvcm1JZExpc3Q6IGxpc3RcclxuICAgICAgfSlcclxuICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIGpnUHJvdG9jb2xDaGVja2VkRm4odmFsdWU6YW55KTp2b2lkeyAgLy/kvb/nlKjljY/orq5cclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGpnUHJvdG9jb2xDaGVja2VkOiB2YWx1ZS5kZXRhaWxcclxuICAgIH0pXHJcbiAgfSxcclxuICBnZXRjYXJkTGlzdCgpOnZvaWR7ICAvL+iOt+WPluivgeS7tuexu+Wei1xyXG4gICAgaHR0cHMucmVxdWVzdChhcGkuc3VibWVudURpYyArICc/bW9pZD0zJywgbnVsbCwgJ0dFVCcpXHJcbiAgICAudGhlbigocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICBsZXQgbGlzdDphbnkgPSByZXMudmFsLm1hcCgoaXRlbTphbnkpOmFueT0+e1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICB0ZXh0OiBpdGVtLmRpY05hbWUsXHJcbiAgICAgICAgICB2YWx1ZTogaXRlbS5pZFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBjYXJkTGlzdDogbGlzdFxyXG4gICAgICB9KVxyXG4gICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgZ2V0R3JQbGF0Zm9ybUlkTGlzdCgpOnZvaWR7ICAvL+iOt+WPluW3peS9nOWNleS9jVxyXG4gICAgaHR0cHMucmVxdWVzdChhcGkuY3lQbGF0Zm9ybUFwaSArICc/eGlhUXVJZD0nICsgdGhpcy5kYXRhLmdyRm9ybURhdGUueGlhUXVJZCwgbnVsbCwgJ0dFVCcpXHJcbiAgICAudGhlbigocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICBsZXQgbGlzdDphbnkgPSByZXMubGlzdC5tYXAoKGl0ZW06YW55KTphbnk9PntcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgdGV4dDogaXRlbS5jeU5hbWUsXHJcbiAgICAgICAgICB2YWx1ZTogaXRlbS5pZFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBnclBsYXRmb3JtSWRMaXN0OiBsaXN0XHJcbiAgICAgIH0pXHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBnZXRUeXBlSWRMaXN0KCk6dm9pZHsgIC8v5oKo5bGe5LqOXHJcbiAgICBodHRwcy5yZXF1ZXN0KGFwaS5zdWJtZW51RGljICsgJz9tb2lkPTgnLCBudWxsLCAnR0VUJylcclxuICAgIC50aGVuKChyZXM6YW55KTp2b2lkPT57XHJcbiAgICAgIGxldCBsaXN0OmFueSA9IHJlcy52YWwubWFwKChpdGVtOmFueSk6YW55PT57XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHRleHQ6IGl0ZW0uZGljTmFtZSxcclxuICAgICAgICAgIHZhbHVlOiBpdGVtLmlkXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHR5cGVJZExpc3Q6IGxpc3RcclxuICAgICAgfSlcclxuICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuXHJcbiAgb25UYWJDaGFuZ2UoKTp2b2lkeyAgLy90YWLliIfmjaLop6blj5FcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGNvbnRlbnRPdmVyZmxvdzogJ3Njcm9sbCdcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcblxyXG4gIC8v5py65p6E5rOo5YaMXHJcbiAgamdTaHh5Q29kZUlucHV0KHZhbHVlOmFueSk6dm9pZHsgIC8v57uf5LiA56S+5Lya5L+h55So5Luj56CBXHJcbiAgICBsZXQgcmVnOmFueSA9IC9bMS05XVxcZHsxNX0vO1xyXG4gICAgbGV0IHN0cjpCb29sZWFuID0gcmVnLnRlc3QodmFsdWUuZGV0YWlsKTtcclxuICAgIGlmKHZhbHVlLmRldGFpbCl7XHJcbiAgICAgIGlmKHN0cil7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIFtcImpnRm9ybVJycm9yLnNoeHlDb2RlRXJyb3JcIl06ICcnLFxyXG4gICAgICAgICAgW1wiamdGb3JtRGF0ZS5zaHh5Q29kZVwiXTogdmFsdWUuZGV0YWlsLFxyXG4gICAgICAgICAgamdWZXJpZmljYXRpb246IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgW1wiamdGb3JtUnJyb3Iuc2h4eUNvZGVFcnJvclwiXTogJ+ivt+i+k+WFpeato+ehrue7n+S4gOekvuS8muS/oeeUqOS7o+eggScsXHJcbiAgICAgICAgICBbXCJqZ0Zvcm1EYXRlLnNoeHlDb2RlXCJdOiB2YWx1ZS5kZXRhaWwsXHJcbiAgICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJqZ0Zvcm1ScnJvci5zaHh5Q29kZUVycm9yXCJdOiAnJyxcclxuICAgICAgICBbXCJqZ0Zvcm1EYXRlLnNoeHlDb2RlXCJdOiB2YWx1ZS5kZXRhaWwsXHJcbiAgICAgICAgamdWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICBqZ0FmdGVyUmVhZChldmVudDphbnkpOnZvaWQgeyAgICAgICAgICAgICAvL+e7n+S4gOekvuS8muS/oeeUqOS7o+eggeaJq+aPj+S7tuS4iuS8oFxyXG4gICAgbGV0IF90aGF0OmFueSA9IHRoaXM7XHJcbiAgICBjb25zdCB7IGZpbGUgfTphbnkgPSBldmVudC5kZXRhaWw7XHJcbiAgICB3eC51cGxvYWRGaWxlKHtcclxuICAgICAgdXJsOiBhcGkuZmlsZVVybCxcclxuICAgICAgZmlsZVBhdGg6IGZpbGUucGF0aCxcclxuICAgICAgbmFtZTogJ2ZpbGVzJyxcclxuICAgICAgZm9ybURhdGE6IHsgXHJcbiAgICAgICAgZmlsZVBhdGg6IGZpbGUucGF0aCxcclxuICAgICAgICBmaWxlTmFtZTogJydcclxuICAgICAgfSxzdWNjZXNzKHJlczphbnkpIHtcclxuICAgICAgICBsZXQgZmlsZTphbnkgPSBKU09OLnBhcnNlKHJlcy5kYXRhKTtcclxuICAgICAgICBsZXQgZmlsZUxpc3Q6YW55ID0gZmlsZS52YWwubWFwKChpdGVtOmFueSk6YW55PT57XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBuYW1lOiBpdGVtLmZpbGVOYW1lLFxyXG4gICAgICAgICAgICB1cmw6IGFwaS5pbWdVcmwgKyAnP2ZpbGVQYXRoPScgKyBpdGVtLmZpbGVQYXRoLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgX3RoYXQuc2V0RGF0YSh7XHJcbiAgICAgICAgICBqZ0ZpbGVMaXN0OiBmaWxlTGlzdCwgICAgICAgICAgICAgICAgICAgICAgLy/mmL7npLpcclxuICAgICAgICAgIFtcImpnRm9ybURhdGUuc2h4eXBpY3NcIl06IGZpbGUudmFsLCAgICAgICAgIC8v5o+Q5LqkXHJcbiAgICAgICAgICBbXCJqZ0Zvcm1ScnJvci5zaHh5cGljc0Vycm9yXCJdOiAnJyxcclxuICAgICAgICAgIGpnVmVyaWZpY2F0aW9uOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgamdEZWxldGUoKTp2b2lkeyAgLy/nu5/kuIDnpL7kvJrkv6HnlKjku6PnoIHmiavmj4/ku7bkuIrkvKDliKDpmaRcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGpnRmlsZUxpc3Q6IFtdLCAgICAgICAgICAgICAgICAgICAvL+a4heepuuS4iuS8oOaYvuekuuWIl+ihqFxyXG4gICAgICBbXCJqZ0Zvcm1EYXRlLnNoeHlwaWNzXCJdOiBbXSwgICAgICAvL+a4heepuuS4iuS8oOWIl+ihqFxyXG4gICAgICBbXCJqZ0Zvcm1ScnJvci5zaHh5cGljc0Vycm9yXCJdOiAn6K+35LiK5Lyg57uf5LiA56S+5Lya5L+h55So5Luj56CB5omr5o+P5Lu2JyxcclxuICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgIH0pXHJcbiAgfSxcclxuICBqZ1Bhc3N3b3JkSW5wdXQodmFsdWU6YW55KTp2b2lkeyAgLy/lr4bnoIFcclxuICAgIGxldCByZWc6YW55ID0gLyg/PS4qKFthLXpBLVpdLiopKSg/PS4qWzAtOV0uKilbYS16QS1aMC05LSovKy5+IUAjJCVeJiooKV17NiwyMH0kLztcclxuICAgIGxldCBzdHI6Qm9vbGVhbiA9IHJlZy50ZXN0KHZhbHVlLmRldGFpbCk7XHJcbiAgICBpZih2YWx1ZS5kZXRhaWwpe1xyXG4gICAgICBpZihzdHIpe1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBbXCJqZ0Zvcm1ScnJvci5wYXNzd29yZEVycm9yXCJdOiAnJyxcclxuICAgICAgICAgIFtcImpnRm9ybURhdGUucGFzc3dvcmRcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICAgIGpnVmVyaWZpY2F0aW9uOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIFtcImpnRm9ybVJycm9yLnBhc3N3b3JkRXJyb3JcIl06ICfmlbDlrZfjgIHoi7HmlofjgIHlrZfnrKbkuKTnp43lj4rku6XkuIo2LTIw5L2NJyxcclxuICAgICAgICAgIFtcImpnRm9ybURhdGUucGFzc3dvcmRcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICAgIGpnVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLnBhc3N3b3JkRXJyb3JcIl06ICcnLFxyXG4gICAgICAgIFtcImpnRm9ybURhdGUucGFzc3dvcmRcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIGpnUmVwZWF0UGFzc3dvcmRJbnB1dCh2YWx1ZTphbnkpOnZvaWR7ICAvL+ehruiupOWvhueggVxyXG4gICAgaWYodmFsdWUuZGV0YWlsKXtcclxuICAgICAgaWYodmFsdWUuZGV0YWlsICE9IHRoaXMuZGF0YS5qZ0Zvcm1EYXRlLnBhc3N3b3JkKXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgW1wiamdGb3JtUnJyb3IudHJ1ZXdvcmRFcnJvclwiXTogJ+S4pOasoei+k+WFpeeahOWvhueggeS4jeS4gOiHtCcsXHJcbiAgICAgICAgICBbXCJqZ0Zvcm1EYXRlLnRydWV3b3JkXCJdOiB2YWx1ZS5kZXRhaWwsXHJcbiAgICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBbXCJqZ0Zvcm1ScnJvci50cnVld29yZEVycm9yXCJdOiAnJyxcclxuICAgICAgICAgIFtcImpnRm9ybURhdGUudHJ1ZXdvcmRcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICAgIGpnVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLnRydWV3b3JkRXJyb3JcIl06ICcnLFxyXG4gICAgICAgIFtcImpnRm9ybURhdGUudHJ1ZXdvcmRcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIGpnUXlOYW1lSW5wdXQodmFsdWU6YW55KTp2b2lkeyAgLy/ljZXkvY3lkI3np7BcclxuICAgIGlmKHZhbHVlLmRldGFpbCl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiamdGb3JtUnJyb3IucXlOYW1lRXJyb3JcIl06ICcnLFxyXG4gICAgICAgIFtcImpnRm9ybURhdGUucXlOYW1lXCJdOiB2YWx1ZS5kZXRhaWwsXHJcbiAgICAgICAgamdWZXJpZmljYXRpb246IHRydWVcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIGpnRGFud2VpRm4odmFsdWU6YW55KTp2b2lkeyAgLy/ljZXkvY3nsbvlnotcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIFtcImpnRm9ybVJycm9yLnF5TmF0dXJlSWRFcnJvclwiXTogJycsXHJcbiAgICAgIFtcImpnRm9ybURhdGUucXlOYXR1cmVJZFwiXTogdmFsdWUuZGV0YWlsLFxyXG4gICAgICBqZ1ZlcmlmaWNhdGlvbjogdHJ1ZVxyXG4gICAgfSlcclxuICB9LFxyXG4gIGpnVGVuYW50Rm4odmFsdWU6YW55KTp2b2lkeyAgLy/miYDlnKjlnLDljLpcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIFtcImpnRm9ybVJycm9yLnRlbmFudElkRXJyb3JcIl06ICcnLFxyXG4gICAgICBbXCJqZ0Zvcm1EYXRlLnRlbmFudElkXCJdOiB2YWx1ZS5kZXRhaWwsXHJcbiAgICAgIGpnVmVyaWZpY2F0aW9uOiB0cnVlLFxyXG4gICAgICBbXCJqZ0Zvcm1EYXRlLnBsYXRmb3JtSWQgXCJdOiAnJ1xyXG4gICAgfSlcclxuICAgIHRoaXMuZ2V0UGxhdGZvcm1JZExpc3QoKTsgIC8v6I635Y+W5omA5bGe5Yib5Lia5bmz5Y+wXHJcbiAgfSxcclxuICBqZ05hdkl0ZW0oZGF0YTphbnkpOnZvaWR7ICAvL+ihjOS4muS6p+S4mu+8iOW3puS+p+WvvOiIqueCueWHu+aXtu+8jOinpuWPkeeahOS6i+S7tu+8iVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgamdJbmRleDogZGF0YS5kZXRhaWwuaW5kZXggfHwgMCxcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgamdJbmR1c3RyeUl0ZW0oZGF0YTphbnkpOnZvaWQgeyAgLy/ooYzkuJrkuqfkuJrvvIjlj7PkvqfpgInmi6npobnooqvngrnlh7vml7bvvIzkvJrop6blj5HnmoTkuovku7bvvIlcclxuICAgIGNvbnN0IGlkID0gZGF0YS5kZXRhaWwuaWQ7XHJcbiAgICBjb25zdCBwSWQgPSBkYXRhLmRldGFpbC5wSWQ7XHJcbiAgICBpZihpZCA9PSBwSWQpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGpnRmxhZzogZmFsc2VcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5kYXRhLmpnSW5kdXN0cnlJZC5mb3JFYWNoKChpdGVtOmFueSk6dm9pZD0+e1xyXG4gICAgICAgIGlmKGl0ZW0gPT0gcElkKXtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIGpnSW5kdXN0cnlJZDogW10sXHJcbiAgICAgICAgICAgIFtcImpnRm9ybURhdGUuaW5kdXN0cnlCdXNpbmVzc2VzXCJdOiBbXSxcclxuICAgICAgICAgICAgamdJbmR1c3RyeUJ1c2luZXNzZXM6ICcnLFxyXG4gICAgICAgICAgICBbXCJqZ0Zvcm1ScnJvci5pbmR1c3RyeUJ1c2luZXNzZXNFcnJvclwiXTogJ+ivt+mAieaLqeS6p+S4mi/ooYzkuJonLFxyXG4gICAgICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2UsXHJcbiAgICAgICAgICAgIGpnRmxhZzogdHJ1ZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIGlmKCF0aGlzLmRhdGEuamdGbGFnKXtcclxuICAgICAgICBsZXQgYXJyOmFueSA9IFtwSWRdO1xyXG4gICAgICAgIGxldCBpbmR1c3RyeUxpc3Q6YW55ID0gW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBjeVR5cGVJZDogcElkLCAgICAgICAvL+S6p+S4mmlkXHJcbiAgICAgICAgICAgIGh5VHlwZUlkOiAnJywgICAgICAgIC8v6KGM5LiaaWRcclxuICAgICAgICAgICAgcFRleHQ6IGRhdGEuZGV0YWlsLnBUZXh0LCAgICAgICAgICAgLy/kuqfkuJrlkI3np7BcclxuICAgICAgICAgICAgdGV4dDogZGF0YS5kZXRhaWwudGV4dCwgICAgICAgICAgICAgLy/ooYzkuJrlkI3np7BcclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIGpnSW5kdXN0cnlJZDogYXJyLFxyXG4gICAgICAgICAgW1wiamdGb3JtRGF0ZS5pbmR1c3RyeUJ1c2luZXNzZXNcIl06IGluZHVzdHJ5TGlzdCxcclxuICAgICAgICAgIGpnSW5kdXN0cnlCdXNpbmVzc2VzOiBkYXRhLmRldGFpbC5wVGV4dCArICcgLyAnICsgZGF0YS5kZXRhaWwudGV4dCxcclxuICAgICAgICAgIFtcImpnRm9ybVJycm9yLmluZHVzdHJ5QnVzaW5lc3Nlc0Vycm9yXCJdOiAnJyxcclxuICAgICAgICAgIGpnVmVyaWZpY2F0aW9uOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIGlmKHRoaXMuZGF0YS5qZ0luZHVzdHJ5SWQubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIGpnRmxhZzogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuZGF0YS5qZ0luZHVzdHJ5SWQuZm9yRWFjaCgoaXRlbTphbnkpOmFueT0+e1xyXG4gICAgICAgICAgaWYoaXRlbSA9PSBpZCl7XHJcbiAgICAgICAgICAgIGxldCBhcnI6YW55ID0gdGhpcy5kYXRhLmpnSW5kdXN0cnlJZC5maWx0ZXIoKGl0ZW0yOmFueSk6YW55PT57XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0yICE9IGlkXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBsZXQgaW5kdXN0cnlMaXN0OmFueSA9IHRoaXMuZGF0YS5qZ0Zvcm1EYXRlLmluZHVzdHJ5QnVzaW5lc3Nlcy5maWx0ZXIoKGl0ZW0yOmFueSk6YW55PT57XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0yLmh5VHlwZUlkICE9IGlkXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBsZXQgc3RyOnN0cmluZyA9IGluZHVzdHJ5TGlzdC5tYXAoKGl0ZW0yOmFueSk6dm9pZD0+e1xyXG4gICAgICAgICAgICAgIHJldHVybiBpdGVtMi50ZXh0XHJcbiAgICAgICAgICAgIH0pLmpvaW4oJ+OAgScpO1xyXG4gICAgICAgICAgICBpZihpbmR1c3RyeUxpc3QubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgICAgc3RyID0gaW5kdXN0cnlMaXN0WzBdLnBUZXh0ICsgJyAvICcgKyBzdHI7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgIHN0ciA9ICcnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgIGpnSW5kdXN0cnlJZDogYXJyLFxyXG4gICAgICAgICAgICAgIFtcImpnRm9ybURhdGUuaW5kdXN0cnlCdXNpbmVzc2VzXCJdOiBpbmR1c3RyeUxpc3QsXHJcbiAgICAgICAgICAgICAgamdJbmR1c3RyeUJ1c2luZXNzZXM6IHN0cixcclxuICAgICAgICAgICAgICBbXCJqZ0Zvcm1ScnJvci5pbmR1c3RyeUJ1c2luZXNzZXNFcnJvclwiXTogdGhpcy5kYXRhLmpnSW5kdXN0cnlJZC5sZW5ndGggPT0gMCA/ICfor7fpgInmi6nkuqfkuJov6KGM5LiaJyA6ICcnLFxyXG4gICAgICAgICAgICAgIGpnVmVyaWZpY2F0aW9uOiB0aGlzLmRhdGEuamdJbmR1c3RyeUlkLmxlbmd0aCA9PSAwID8gZmFsc2UgOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGpnRmxhZzogdHJ1ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYoIXRoaXMuZGF0YS5qZ0ZsYWcpe1xyXG4gICAgICAgICAgbGV0IGFycjphbnkgPSBbaWRdXHJcbiAgICAgICAgICBsZXQgaW5kdXN0cnlMaXN0OmFueSA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGN5VHlwZUlkOiBwSWQsICAgICAgICAgIC8v5Lqn5LiaaWRcclxuICAgICAgICAgICAgICBoeVR5cGVJZDogaWQsICAgICAgICAgICAvL+ihjOS4mmlkXHJcbiAgICAgICAgICAgICAgcFRleHQ6IGRhdGEuZGV0YWlsLnBUZXh0LCAgICAgICAgICAgLy/kuqfkuJrlkI3np7BcclxuICAgICAgICAgICAgICB0ZXh0OiBkYXRhLmRldGFpbC50ZXh0LCAgICAgICAgICAgICAvL+ihjOS4muWQjeensFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgICBsZXQgbmV3QXJyOmFueSA9IHRoaXMuZGF0YS5qZ0luZHVzdHJ5SWQuY29uY2F0KGFycikuZmlsdGVyKChpdGVtOmFueSk6YW55PT57XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtICE9IHBJZFxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgbGV0IG5ld0luZHVzdHJ5TGlzdDphbnkgPSB0aGlzLmRhdGEuamdGb3JtRGF0ZS5pbmR1c3RyeUJ1c2luZXNzZXMuY29uY2F0KGluZHVzdHJ5TGlzdCkuZmlsdGVyKChpdGVtOmFueSk6YW55PT57XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtLmh5VHlwZUlkICE9IFwiXCJcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIGxldCBzdHI6c3RyaW5nID0gbmV3SW5kdXN0cnlMaXN0Lm1hcCgoaXRlbTphbnkpOnZvaWQ9PntcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0udGV4dFxyXG4gICAgICAgICAgfSkuam9pbign44CBJyk7XHJcblxyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgamdJbmR1c3RyeUlkOiBuZXdBcnIsXHJcbiAgICAgICAgICAgIFtcImpnRm9ybURhdGUuaW5kdXN0cnlCdXNpbmVzc2VzXCJdOiBuZXdJbmR1c3RyeUxpc3QsXHJcbiAgICAgICAgICAgIGpnSW5kdXN0cnlCdXNpbmVzc2VzOiBkYXRhLmRldGFpbC5wVGV4dCArICcgLyAnICsgc3RyLFxyXG4gICAgICAgICAgICBbXCJqZ0Zvcm1ScnJvci5pbmR1c3RyeUJ1c2luZXNzZXNFcnJvclwiXTogJycsXHJcbiAgICAgICAgICAgIGpnVmVyaWZpY2F0aW9uOiB0cnVlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgbGV0IGFycjphbnkgPSBbaWRdO1xyXG4gICAgICAgIGxldCBpbmR1c3RyeUxpc3Q6YW55ID0gW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBjeVR5cGVJZDogcElkLCAgICAgICAvL+S6p+S4mmlkXHJcbiAgICAgICAgICAgIGh5VHlwZUlkOiBpZCwgICAgICAgIC8v6KGM5LiaaWRcclxuICAgICAgICAgICAgcFRleHQ6IGRhdGEuZGV0YWlsLnBUZXh0LCAgICAgICAgICAgLy/kuqfkuJrlkI3np7BcclxuICAgICAgICAgICAgdGV4dDogZGF0YS5kZXRhaWwudGV4dCwgICAgICAgICAgICAgLy/ooYzkuJrlkI3np7BcclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIGpnSW5kdXN0cnlJZDogYXJyLFxyXG4gICAgICAgICAgW1wiamdGb3JtRGF0ZS5pbmR1c3RyeUJ1c2luZXNzZXNcIl06IGluZHVzdHJ5TGlzdCxcclxuICAgICAgICAgIGpnSW5kdXN0cnlCdXNpbmVzc2VzOiBkYXRhLmRldGFpbC5wVGV4dCArICcgLyAnICsgZGF0YS5kZXRhaWwudGV4dCxcclxuICAgICAgICAgIFtcImpnRm9ybVJycm9yLmluZHVzdHJ5QnVzaW5lc3Nlc0Vycm9yXCJdOiAnJyxcclxuICAgICAgICAgIGpnVmVyaWZpY2F0aW9uOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgamdReUFkZHJlc3ModmFsdWU6YW55KTp2b2lkeyAgLy/ljZXkvY3or6bnu4blnLDlnYBcclxuICAgIGlmKHZhbHVlLmRldGFpbCl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiamdGb3JtUnJyb3IucXlBZGRyZXNzRXJyb3JcIl06ICcnLFxyXG4gICAgICAgIFtcImpnRm9ybURhdGUucXlBZGRyZXNzXCJdOiB2YWx1ZS5kZXRhaWwsXHJcbiAgICAgICAgamdWZXJpZmljYXRpb246IHRydWVcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIGpnTGVnYWxOYW1lKHZhbHVlOmFueSk6dm9pZHsgIC8v5rOV5Lq65aeT5ZCNXHJcbiAgICBpZih2YWx1ZS5kZXRhaWwpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybURhdGUubGVnYWxOYW1lXCJdOiB2YWx1ZS5kZXRhaWxcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIGpnTGVnYWxJZCh2YWx1ZTphbnkpOnZvaWR7ICAvL+azleS6uui6q+S7veivgeWPt1xyXG4gICAgLy/ouqvku73or4Hlj7fnoIHkuLoxNeS9jeaIluiAhTE45L2N77yMMTXkvY3ml7blhajkuLrmlbDlrZfvvIwxOOS9jeWJjTE35L2N5Li65pWw5a2X77yM5pyA5ZCO5LiA5L2N5piv5qCh6aqM5L2N77yM5Y+v6IO95Li65pWw5a2X5oiW5a2X56ymWFxyXG4gICAgbGV0IHJlZzphbnkgPSAvKF5cXGR7MTV9JCl8KF5cXGR7MTh9JCl8KF5cXGR7MTd9KFxcZHxYfHgpJCkvO1xyXG4gICAgbGV0IHN0cjpCb29sZWFuID0gcmVnLnRlc3QodmFsdWUuZGV0YWlsKTtcclxuICAgIGlmKHN0cil7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiamdGb3JtUnJyb3IubGVnYWxJZEVycm9yXCJdOiAnJyxcclxuICAgICAgICBbXCJqZ0Zvcm1EYXRlLmxlZ2FsSWRcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogdHJ1ZVxyXG4gICAgICB9KVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiamdGb3JtUnJyb3IubGVnYWxJZEVycm9yXCJdOiAn6K+36L6T5YWl5q2j56Gu55qE5rOV5Lq66Lqr5Lu96K+B5Y+3JyxcclxuICAgICAgICBbXCJqZ0Zvcm1EYXRlLmxlZ2FsSWRcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIGpnTGlua1BlcnNvbih2YWx1ZTphbnkpOnZvaWR7ICAvL+WNleS9jeiBlOezu+S6ulxyXG4gICAgaWYodmFsdWUuZGV0YWlsKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJqZ0Zvcm1ScnJvci5saW5rUGVyc29uRXJyb3JcIl06ICcnLFxyXG4gICAgICAgIFtcImpnRm9ybURhdGUubGlua1BlcnNvblwiXTogdmFsdWUuZGV0YWlsLFxyXG4gICAgICAgIGpnVmVyaWZpY2F0aW9uOiB0cnVlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICBqZ0xpbmtUZWwodmFsdWU6YW55KTp2b2lkeyAgLy/ogZTns7vnlLXor51cclxuICAgIGxldCByZWc6YW55ID0gL14oKDFbMC05XXsxMH0pfCgoKChbMC05XXszfS0pP1swLTldezh9KXwoKFswLTldezR9LSk/WzAtOV17N30pKSgtWzAtOV17MSw0fSk/KSkkLztcclxuICAgIGxldCBzdHI6Qm9vbGVhbiA9IHJlZy50ZXN0KHZhbHVlLmRldGFpbCk7XHJcbiAgICBpZih2YWx1ZS5kZXRhaWwpe1xyXG4gICAgICBpZihzdHIpe1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBbXCJqZ0Zvcm1ScnJvci5saW5rVGVsRXJyb3JcIl06ICcnLFxyXG4gICAgICAgICAgW1wiamdGb3JtRGF0ZS5saW5rVGVsXCJdOiB2YWx1ZS5kZXRhaWwsXHJcbiAgICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBbXCJqZ0Zvcm1ScnJvci5saW5rVGVsRXJyb3JcIl06ICfor7fovpPlhaXmraPnoa7nmoTogZTns7vnlLXor50nLFxyXG4gICAgICAgICAgW1wiamdGb3JtRGF0ZS5saW5rVGVsXCJdOiB2YWx1ZS5kZXRhaWwsXHJcbiAgICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJqZ0Zvcm1ScnJvci5saW5rVGVsRXJyb3JcIl06ICcnLFxyXG4gICAgICAgIFtcImpnRm9ybURhdGUubGlua1RlbFwiXTogdmFsdWUuZGV0YWlsLFxyXG4gICAgICAgIGpnVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgamdWZXJpZnlDb2RlKHZhbHVlOmFueSk6dm9pZHsgIC8v6aqM6K+B56CBXHJcbiAgICBpZih2YWx1ZS5kZXRhaWwpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLnZlcmlmeUNvZGVFcnJvclwiXTogJycsXHJcbiAgICAgICAgW1wiamdGb3JtRGF0ZS52ZXJpZnlDb2RlXCJdOiB2YWx1ZS5kZXRhaWwsXHJcbiAgICAgICAgamdWZXJpZmljYXRpb246IHRydWVcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIGpnRW1haWwodmFsdWU6YW55KTp2b2lkeyAgLy/nlLXlrZDpgq7nrrFcclxuICAgIGxldCByZWc6YW55ID0gL14oW2EtekEtWjAtOV8tXSkrQChbYS16QS1aMC05Xy1dKSsoLlthLXpBLVowLTlfLV0pKy87XHJcbiAgICBsZXQgc3RyOkJvb2xlYW4gPSByZWcudGVzdCh2YWx1ZS5kZXRhaWwpO1xyXG4gICAgaWYodmFsdWUuZGV0YWlsKXtcclxuICAgICAgaWYoc3RyKXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgW1wiamdGb3JtUnJyb3IuZW1haWxFcnJvclwiXTogJycsXHJcbiAgICAgICAgICBbXCJqZ0Zvcm1EYXRlLmVtYWlsXCJdOiB2YWx1ZS5kZXRhaWwsXHJcbiAgICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBbXCJqZ0Zvcm1ScnJvci5lbWFpbEVycm9yXCJdOiAn6K+36L6T5YWl5q2j56Gu55qE55S15a2Q6YKu566xJyxcclxuICAgICAgICAgIFtcImpnRm9ybURhdGUuZW1haWxcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICAgIGpnVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLmVtYWlsRXJyb3JcIl06ICcnLFxyXG4gICAgICAgIFtcImpnRm9ybURhdGUuZW1haWxcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIGpnUGxhdGZvcm1PcGVuKCk6dm9pZHsgIC8v5omA5bGe5Yib5Lia5bmz5Y+w5omT5byA5LqL5Lu2XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBjb250ZW50T3ZlcmZsb3c6ICdoaWRkZW4nXHJcbiAgICB9KVxyXG4gICAgaWYodGhpcy5kYXRhLnBsYXRmb3JtSWRMaXN0Lmxlbmd0aCA9PSAwKXtcclxuICAgICAgVG9hc3QoJ+ivt+WFiOmAieaLqeaJgOWcqOWcsOWMuu+8gScpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgamdQbGF0Zm9ybUZuKHZhbHVlOmFueSk6dm9pZHsgIC8v5omA5bGe5Yib5Lia5bmz5Y+wXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBbXCJqZ0Zvcm1EYXRlLnBsYXRmb3JtSWRcIl06IHZhbHVlLmRldGFpbFxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuXHJcblxyXG5cclxuICBqZ1N1Ym1pdEZuKCk6dm9pZHsgIC8v5py65p6E5rOo5YaMXHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGEuamdGb3JtRGF0ZS5pbmR1c3RyeUJ1c2luZXNzZXMpXHJcblxyXG5cclxuICAgIC8v6K+36L6T5YWl57uf5LiA56S+5Lya5L+h55So5Luj56CBXHJcbiAgICBpZih0aGlzLmRhdGEuamdGb3JtRGF0ZS5zaHh5Q29kZSA9PSAnJyl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiamdGb3JtUnJyb3Iuc2h4eUNvZGVFcnJvclwiXTon6K+36L6T5YWl57uf5LiA56S+5Lya5L+h55So5Luj56CBJyxcclxuICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIC8v57uf5LiA56S+5Lya5L+h55So5Luj56CB5omr5o+P5Lu25LiK5LygXHJcbiAgICBpZih0aGlzLmRhdGEuamdGb3JtRGF0ZS5zaHh5cGljcy5sZW5ndGggPT0gMCl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiamdGb3JtUnJyb3Iuc2h4eXBpY3NFcnJvclwiXTon6K+35LiK5Lyg57uf5LiA56S+5Lya5L+h55So5Luj56CB5omr5o+P5Lu2JyxcclxuICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIC8v5a+G56CBXHJcbiAgICBpZih0aGlzLmRhdGEuamdGb3JtRGF0ZS5wYXNzd29yZCA9PSAnJyl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiamdGb3JtUnJyb3IucGFzc3dvcmRFcnJvclwiXTon6K+36L6T5YWl5a+G56CBJyxcclxuICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIC8v56Gu6K6k5a+G56CBXHJcbiAgICBpZih0aGlzLmRhdGEuamdGb3JtRGF0ZS50cnVld29yZCA9PSAnJyl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiamdGb3JtUnJyb3IudHJ1ZXdvcmRFcnJvclwiXTon6K+35YaN5qyh56Gu6K6k5a+G56CBJyxcclxuICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIC8v5Y2V5L2N5ZCN56ewXHJcbiAgICBpZih0aGlzLmRhdGEuamdGb3JtRGF0ZS5xeU5hbWUgPT0gJycpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLnF5TmFtZUVycm9yXCJdOifor7fovpPlhaXljZXkvY3lkI3np7AnLFxyXG4gICAgICAgIGpnVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy/ljZXkvY3nsbvlnotcclxuICAgIGlmKHRoaXMuZGF0YS5qZ0Zvcm1EYXRlLnF5TmF0dXJlSWQgPT0gJycpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLnF5TmF0dXJlSWRFcnJvclwiXTon6K+36YCJ5oup5Y2V5L2N57G75Z6LJyxcclxuICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIC8v5omA5Zyo5Zyw5Yy6XHJcbiAgICBpZih0aGlzLmRhdGEuamdGb3JtRGF0ZS50ZW5hbnRJZCA9PSAnJyl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiamdGb3JtUnJyb3IudGVuYW50SWRFcnJvclwiXTon6K+36YCJ5oup5omA5Zyo5Zyw5Yy6JyxcclxuICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIC8v5Lqn5Lia44CB6KGM5LiaXHJcbiAgICBpZih0aGlzLmRhdGEuamdJbmR1c3RyeUlkLmxlbmd0aCA9PSAwKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJqZ0Zvcm1ScnJvci5pbmR1c3RyeUJ1c2luZXNzZXNFcnJvclwiXTon6K+36YCJ5oup5Lqn5LiaL+ihjOS4micsXHJcbiAgICAgICAgamdWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvL+WNleS9jeivpue7huWcsOWdgFxyXG4gICAgaWYodGhpcy5kYXRhLmpnRm9ybURhdGUucXlBZGRyZXNzID09ICcnKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJqZ0Zvcm1ScnJvci5xeUFkZHJlc3NFcnJvclwiXTon6K+36L6T5YWl5Y2V5L2N6K+m57uG5Zyw5Z2AJyxcclxuICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIC8v5Y2V5L2N6IGU57O75Lq6XHJcbiAgICBpZih0aGlzLmRhdGEuamdGb3JtRGF0ZS5saW5rUGVyc29uID09ICcnKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJqZ0Zvcm1ScnJvci5xeUFkZHJlc3NFcnJvclwiXTon6K+36L6T5YWl5Y2V5L2N6IGU57O75Lq6JyxcclxuICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIC8v6IGU57O755S16K+dXHJcbiAgICBpZih0aGlzLmRhdGEuamdGb3JtRGF0ZS5saW5rUGVyc29uID09ICcnKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJqZ0Zvcm1ScnJvci5saW5rVGVsRXJyb3JcIl06J+ivt+i+k+WFpeiBlOezu+eUteivnScsXHJcbiAgICAgICAgamdWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvL+mqjOivgeeggVxyXG4gICAgaWYodGhpcy5kYXRhLmpnRm9ybURhdGUudmVyaWZ5Q29kZSA9PSAnJyl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiamdGb3JtUnJyb3IudmVyaWZ5Q29kZUVycm9yXCJdOifor7fovpPlhaXpqozor4HnoIEnLFxyXG4gICAgICAgIGpnVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy/nlLXlrZDpgq7nrrFcclxuICAgIGlmKHRoaXMuZGF0YS5qZ0Zvcm1EYXRlLmVtYWlsID09ICcnKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJqZ0Zvcm1ScnJvci5lbWFpbEVycm9yXCJdOifor7fovpPlhaXnlLXlrZDpgq7nrrEnLFxyXG4gICAgICAgIGpnVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy/pmIXor7vljY/orq5cclxuICAgIGlmKHRoaXMuZGF0YS5qZ1ZlcmlmaWNhdGlvbiA9PSBmYWxzZSl7XHJcbiAgICAgIFRvYXN0KCfor7fmiorlv4Xloavkv6Hmga/loavlhpnlrozmlbTvvIEnKTtcclxuICAgIH1lbHNlIGlmKHRoaXMuZGF0YS5qZ1Byb3RvY29sQ2hlY2tlZCA9PSBmYWxzZSl7XHJcbiAgICAgIFRvYXN0KCfor7fpmIXor7vlubbmjqXlj5flupTnlKjkvb/nlKjljY/orq7vvIEnKTtcclxuICAgIH1lbHNle1xyXG4gICAgICBodHRwcy5yZXF1ZXN0KGFwaS5lbnRlclJlZywgdGhpcy5kYXRhLmpnRm9ybURhdGUsICdQT1NUJylcclxuICAgICAgLnRoZW4oKCk6dm9pZD0+e1xyXG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgdXJsOiAnLi4vbG9naW5Gb3JtL2xvZ2luRm9ybSdcclxuICAgICAgICB9KVxyXG4gICAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICAgIFRvYXN0KGVycik7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGpnVmVyaWZ5Q29kZUZuKCk6dm9pZHsgIC8v6I635Y+W6aqM6K+B56CBXHJcbiAgICBpZih0aGlzLmRhdGEuamdGb3JtRGF0ZS5saW5rVGVsICE9ICcnKXtcclxuICAgICAgaHR0cHMucmVxdWVzdChhcGkuZ2V0Q29kZSArIFwiP3RlbGVwaG9uZT1cIiArIHRoaXMuZGF0YS5qZ0Zvcm1EYXRlLmxpbmtUZWwsIG51bGwsICdHRVQnKVxyXG4gICAgICAudGhlbigoKTp2b2lkPT57XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIGpnVmVyaWZ5Q29kZVRpbWU6ICc2MCcsXHJcbiAgICAgICAgICBqZ0Rpc2FibGVkOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgICBsZXQgc2V0VGltZTphbnkgPSBzZXRJbnRlcnZhbCgoKTp2b2lkPT57XHJcbiAgICAgICAgICBsZXQgc3RyOmFueSA9IHBhcnNlSW50KHRoaXMuZGF0YS5qZ1ZlcmlmeUNvZGVUaW1lKSAtIDE7XHJcbiAgICAgICAgICBpZihzdHIgPiAwKXtcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICBqZ1ZlcmlmeUNvZGVUaW1lOiBzdHJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHNldFRpbWUpO1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgIGpnVmVyaWZ5Q29kZVRpbWU6ICfojrflj5bpqozor4HnoIEnLFxyXG4gICAgICAgICAgICAgIGpnRGlzYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSwxMDAwKVxyXG4gICAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICAgIFRvYXN0KGVycik7XHJcbiAgICAgIH0pO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIFRvYXN0KCfor7flhYjloavlhpnogZTns7vnlLXor53vvIEnKTtcclxuICAgIH1cclxuICB9LFxyXG4gIGpnQ3hQbGF0Zm9ybShldmVudDphbnkpOnZvaWR7ICAvL+aYr+WQpuWIm+aWsOW5s+WPsOS4u+S9k+WNleS9jVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgW1wiamdGb3JtRGF0ZS5pc0N4UGxhdGZvcm1cIl06IGV2ZW50LmRldGFpbCxcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgamdDeVBsYXRmb3JtKGV2ZW50OmFueSk6dm9pZHsgIC8v5piv5ZCm5Yib5Lia5bmz5Y+w5Li75L2T5Y2V5L2NXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBbXCJqZ0Zvcm1EYXRlLmlzQ3lQbGF0Zm9ybVwiXTogZXZlbnQuZGV0YWlsLFxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBcclxuXHJcblxyXG5cclxuXHJcblxyXG4gIC8v5Liq5Lq65rOo5YaMXHJcbiAgZ3JDYXJkVHlwZUZuKHZhbHVlOmFueSk6dm9pZHsgIC8v6K+B5Lu257G75Z6LXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBbXCJnckZvcm1ScnJvci5jYXJkVHlwZUlkUnJyb3JcIl06ICcnLFxyXG4gICAgICBbXCJnckZvcm1EYXRlLmNhcmRUeXBlSWRcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgZ3JWZXJpZmljYXRpb246IHRydWVcclxuICAgIH0pXHJcbiAgfSxcclxuICBnckNhcmROdW0odmFsdWU6YW55KTp2b2lkeyAgLy/or4Hku7blj7fnoIFcclxuICAgIGlmKHZhbHVlLmRldGFpbCl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiZ3JGb3JtUnJyb3IuY2FyZE51bVJycm9yXCJdOiAnJyxcclxuICAgICAgICBbXCJnckZvcm1EYXRlLmNhcmROdW1cIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICBnclZlcmlmaWNhdGlvbjogdHJ1ZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZ3JBZnRlclJlYWQoZXZlbnQ6YW55KTp2b2lkIHsgICAgICAgICAgICAgLy/or4Hku7bmiavmj4/ku7bkuIrkvKBcclxuICAgIGxldCBfdGhhdDphbnkgPSB0aGlzO1xyXG4gICAgY29uc3QgeyBmaWxlIH06YW55ID0gZXZlbnQuZGV0YWlsO1xyXG4gICAgd3gudXBsb2FkRmlsZSh7XHJcbiAgICAgIHVybDogYXBpLmZpbGVVcmwsXHJcbiAgICAgIGZpbGVQYXRoOiBmaWxlLnBhdGgsXHJcbiAgICAgIG5hbWU6ICdmaWxlcycsXHJcbiAgICAgIGZvcm1EYXRhOiB7IFxyXG4gICAgICAgIGZpbGVQYXRoOiBmaWxlLnBhdGgsXHJcbiAgICAgICAgZmlsZU5hbWU6ICcnXHJcbiAgICAgIH0sc3VjY2VzcyhyZXM6YW55KSB7XHJcbiAgICAgICAgbGV0IGZpbGU6YW55ID0gSlNPTi5wYXJzZShyZXMuZGF0YSk7XHJcbiAgICAgICAgbGV0IGZpbGVMaXN0OmFueSA9IGZpbGUudmFsLm1hcCgoaXRlbTphbnkpOmFueT0+e1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmFtZTogaXRlbS5maWxlTmFtZSxcclxuICAgICAgICAgICAgdXJsOiBhcGkuaW1nVXJsICsgJz9maWxlUGF0aD0nICsgaXRlbS5maWxlUGF0aCxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIF90aGF0LnNldERhdGEoe1xyXG4gICAgICAgICAgZ3JGaWxlTGlzdDogZmlsZUxpc3QsICAgICAgICAgICAgICAgICAgICAgIC8v5pi+56S6XHJcbiAgICAgICAgICBbXCJnckZvcm1EYXRlLmNhcmRQaWNcIl06IGZpbGUudmFsLCAgICAgICAgIC8v5o+Q5LqkXHJcbiAgICAgICAgICBbXCJnckZvcm1ScnJvci5jYXJkUGljRXJyb3JcIl06ICcnLFxyXG4gICAgICAgICAgZ3JWZXJpZmljYXRpb246IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBnckRlbGV0ZSgpOnZvaWR7ICAvL+ivgeS7tuaJq+aPj+S7tuS4iuS8oOWIoOmZpFxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgZ3JGaWxlTGlzdDogW10sICAgICAgICAgICAgICAgICAgIC8v5riF56m65LiK5Lyg5pi+56S65YiX6KGoXHJcbiAgICAgIFtcImdyRm9ybURhdGUuY2FyZFBpY1wiXTogW10sICAgICAgLy/muIXnqbrkuIrkvKDliJfooahcclxuICAgICAgW1wiZ3JGb3JtUnJyb3IuY2FyZFBpY0Vycm9yXCJdOiAn6K+35LiK5Lyg6K+B5Lu25omr5o+P5Lu2JyxcclxuICAgICAgICBnclZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgIH0pXHJcbiAgfSxcclxuICBnclBhc3N3b3JkSW5wdXQodmFsdWU6YW55KTp2b2lkeyAgLy/lr4bnoIFcclxuICAgIGxldCByZWc6YW55ID0gLyg/PS4qKFthLXpBLVpdLiopKSg/PS4qWzAtOV0uKilbYS16QS1aMC05LSovKy5+IUAjJCVeJiooKV17NiwyMH0kLztcclxuICAgIGxldCBzdHI6Qm9vbGVhbiA9IHJlZy50ZXN0KHZhbHVlLmRldGFpbCk7XHJcbiAgICBpZih2YWx1ZS5kZXRhaWwpe1xyXG4gICAgICBpZihzdHIpe1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBbXCJnckZvcm1ScnJvci5wYXNzd29yZEVycm9yXCJdOiAnJyxcclxuICAgICAgICAgIFtcImdyRm9ybURhdGUucGFzc3dvcmRcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICAgIGdyVmVyaWZpY2F0aW9uOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIFtcImdyRm9ybVJycm9yLnBhc3N3b3JkRXJyb3JcIl06ICfmlbDlrZfjgIHoi7HmlofjgIHlrZfnrKbkuKTnp43lj4rku6XkuIo2LTIw5L2NJyxcclxuICAgICAgICAgIFtcImdyRm9ybURhdGUucGFzc3dvcmRcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICAgIGdyVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImdyRm9ybVJycm9yLnBhc3N3b3JkRXJyb3JcIl06ICcnLFxyXG4gICAgICAgIFtcImdyRm9ybURhdGUucGFzc3dvcmRcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICBnclZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIGdyUmVwZWF0UGFzc3dvcmRJbnB1dCh2YWx1ZTphbnkpOnZvaWR7ICAvL+ehruiupOWvhueggVxyXG4gICAgaWYodmFsdWUuZGV0YWlsKXtcclxuICAgICAgaWYodmFsdWUuZGV0YWlsICE9IHRoaXMuZGF0YS5nckZvcm1EYXRlLnBhc3N3b3JkKXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgW1wiZ3JGb3JtUnJyb3IudHJ1ZXdvcmRFcnJvclwiXTogJ+S4pOasoei+k+WFpeeahOWvhueggeS4jeS4gOiHtCcsXHJcbiAgICAgICAgICBbXCJnckZvcm1EYXRlLnRydWV3b3JkXCJdOiB2YWx1ZS5kZXRhaWwsXHJcbiAgICAgICAgICBnclZlcmlmaWNhdGlvbjogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBbXCJnckZvcm1ScnJvci50cnVld29yZEVycm9yXCJdOiAnJyxcclxuICAgICAgICAgIFtcImdyRm9ybURhdGUudHJ1ZXdvcmRcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICAgIGdyVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImdyRm9ybVJycm9yLnRydWV3b3JkRXJyb3JcIl06ICcnLFxyXG4gICAgICAgIFtcImdyRm9ybURhdGUudHJ1ZXdvcmRcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICBnclZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIGdyUmVhbE5hbWUodmFsdWU6YW55KTp2b2lkeyAgLy/lp5PlkI1cclxuICAgIGlmKHZhbHVlLmRldGFpbCl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiZ3JGb3JtUnJyb3IucmVhbE5hbWVScnJvclwiXTogJycsXHJcbiAgICAgICAgW1wiZ3JGb3JtRGF0ZS5yZWFsTmFtZVwiXTogdmFsdWUuZGV0YWlsLFxyXG4gICAgICAgIGdyVmVyaWZpY2F0aW9uOiB0cnVlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICBnclBob25lTnVtKHZhbHVlOmFueSk6dm9pZHsgIC8v6IGU57O755S16K+dXHJcbiAgICBsZXQgcmVnOmFueSA9IC9eKCgxWzAtOV17MTB9KXwoKCgoWzAtOV17M30tKT9bMC05XXs4fSl8KChbMC05XXs0fS0pP1swLTldezd9KSkoLVswLTldezEsNH0pPykpJC87XHJcbiAgICBsZXQgc3RyOkJvb2xlYW4gPSByZWcudGVzdCh2YWx1ZS5kZXRhaWwpO1xyXG4gICAgaWYodmFsdWUuZGV0YWlsKXtcclxuICAgICAgaWYoc3RyKXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgW1wiZ3JGb3JtUnJyb3IucGhvbmVOdW1FcnJvclwiXTogJycsXHJcbiAgICAgICAgICBbXCJnckZvcm1EYXRlLnBob25lTnVtXCJdOiB2YWx1ZS5kZXRhaWwsXHJcbiAgICAgICAgICBnclZlcmlmaWNhdGlvbjogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBbXCJnckZvcm1ScnJvci5waG9uZU51bUVycm9yXCJdOiAn6K+36L6T5YWl5q2j56Gu55qE6IGU57O755S16K+dJyxcclxuICAgICAgICAgIFtcImdyRm9ybURhdGUucGhvbmVOdW1cIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICAgIGdyVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImdyRm9ybVJycm9yLnBob25lTnVtRXJyb3JcIl06ICcnLFxyXG4gICAgICAgIFtcImdyRm9ybURhdGUucGhvbmVOdW1cIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICBnclZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIGdyVmVyaWZ5Q29kZSh2YWx1ZTphbnkpOnZvaWR7ICAvL+mqjOivgeeggVxyXG4gICAgaWYodmFsdWUuZGV0YWlsKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJnckZvcm1ScnJvci52ZXJpZnlDb2RlRXJyb3JcIl06ICcnLFxyXG4gICAgICAgIFtcImdyRm9ybURhdGUudmVyaWZ5Q29kZVwiXTogdmFsdWUuZGV0YWlsLFxyXG4gICAgICAgIGdyVmVyaWZpY2F0aW9uOiB0cnVlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICBnclZlcmlmeUNvZGVGbigpOnZvaWR7ICAvL+iOt+WPlumqjOivgeeggVxyXG4gICAgaWYodGhpcy5kYXRhLmdyRm9ybURhdGUucGhvbmVOdW0gIT0gJycpe1xyXG4gICAgICBodHRwcy5yZXF1ZXN0KGFwaS5nZXRDb2RlICsgXCI/dGVsZXBob25lPVwiICsgdGhpcy5kYXRhLmdyRm9ybURhdGUucGhvbmVOdW0sIG51bGwsICdHRVQnKVxyXG4gICAgICAudGhlbigoKTp2b2lkPT57XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIGdyVmVyaWZ5Q29kZVRpbWU6ICc2MCcsXHJcbiAgICAgICAgICBnckRpc2FibGVkOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgICBsZXQgc2V0VGltZTphbnkgPSBzZXRJbnRlcnZhbCgoKTp2b2lkPT57XHJcbiAgICAgICAgICBsZXQgc3RyOmFueSA9IHBhcnNlSW50KHRoaXMuZGF0YS5nclZlcmlmeUNvZGVUaW1lKSAtIDE7XHJcbiAgICAgICAgICBpZihzdHIgPiAwKXtcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICBnclZlcmlmeUNvZGVUaW1lOiBzdHJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHNldFRpbWUpO1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgIGdyVmVyaWZ5Q29kZVRpbWU6ICfojrflj5bpqozor4HnoIEnLFxyXG4gICAgICAgICAgICAgIGdyRGlzYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSwxMDAwKVxyXG4gICAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICAgIFRvYXN0KGVycik7XHJcbiAgICAgIH0pO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIFRvYXN0KCfor7flhYjloavlhpnogZTns7vnlLXor53vvIEnKTtcclxuICAgIH1cclxuICB9LFxyXG4gIGdyRW1haWwodmFsdWU6YW55KTp2b2lkeyAgLy/nlLXlrZDpgq7nrrFcclxuICAgIGxldCByZWc6YW55ID0gL14oW2EtekEtWjAtOV8tXSkrQChbYS16QS1aMC05Xy1dKSsoLlthLXpBLVowLTlfLV0pKy87XHJcbiAgICBsZXQgc3RyOkJvb2xlYW4gPSByZWcudGVzdCh2YWx1ZS5kZXRhaWwpO1xyXG4gICAgaWYodmFsdWUuZGV0YWlsKXtcclxuICAgICAgaWYoc3RyKXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgW1wiZ3JGb3JtUnJyb3IuZW1haWxFcnJvclwiXTogJycsXHJcbiAgICAgICAgICBbXCJnckZvcm1EYXRlLmVtYWlsXCJdOiB2YWx1ZS5kZXRhaWwsXHJcbiAgICAgICAgICBnclZlcmlmaWNhdGlvbjogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBbXCJnckZvcm1ScnJvci5lbWFpbEVycm9yXCJdOiAn6K+36L6T5YWl5q2j56Gu55qE55S15a2Q6YKu566xJyxcclxuICAgICAgICAgIFtcImdyRm9ybURhdGUuZW1haWxcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICAgIGdyVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImdyRm9ybVJycm9yLmVtYWlsRXJyb3JcIl06ICcnLFxyXG4gICAgICAgIFtcImdyRm9ybURhdGUuZW1haWxcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICBnclZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIGdyeGlhUXVGbih2YWx1ZTphbnkpOnZvaWR7ICAvL+aJgOWcqOWcsOWMulxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgW1wiZ3JGb3JtUnJyb3IueGlhUXVJZEVycm9yXCJdOiAnJyxcclxuICAgICAgW1wiZ3JGb3JtRGF0ZS54aWFRdUlkXCJdOiB2YWx1ZS5kZXRhaWwsXHJcbiAgICAgIGdyVmVyaWZpY2F0aW9uOiB0cnVlLFxyXG4gICAgICBbXCJnckZvcm1EYXRlLmRhbldlaUlkXCJdOiAnJ1xyXG4gICAgfSlcclxuICAgIHRoaXMuZ2V0R3JQbGF0Zm9ybUlkTGlzdCgpOyAgLy/ojrflj5blt6XkvZzljZXkvY1cclxuICB9LFxyXG4gIGdyUGxhdGZvcm1PcGVuKCk6dm9pZHsgIC8v5omA5bGe5Yib5Lia5bmz5Y+w5omT5byA5LqL5Lu2XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBjb250ZW50T3ZlcmZsb3c6ICdoaWRkZW4nXHJcbiAgICB9KVxyXG4gICAgaWYodGhpcy5kYXRhLmdyUGxhdGZvcm1JZExpc3QubGVuZ3RoID09IDApe1xyXG4gICAgICBUb2FzdCgn6K+35YWI6YCJ5oup5omA5Zyo5Zyw5Yy677yBJyk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBnclBsYXRmb3JtRm4odmFsdWU6YW55KTp2b2lkeyAgLy/miYDlsZ7liJvkuJrlubPlj7BcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIFtcImdyRm9ybURhdGUuZGFuV2VpSWRcIl06IHZhbHVlLmRldGFpbFxyXG4gICAgfSlcclxuICB9LFxyXG4gIGdyUXlBZGRyZXNzKHZhbHVlOmFueSk6dm9pZHsgIC8v5bel5L2c5Y2V5L2N6K+m57uG5Zyw5Z2AXHJcbiAgICBpZih2YWx1ZS5kZXRhaWwpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImdyRm9ybURhdGUuZGFuV2VpQWRkcmVzc1wiXTogdmFsdWUuZGV0YWlsXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICBnckN1ckxvY2F0aW9uKHZhbHVlOmFueSk6dm9pZHsgIC8v546w5bGF5L2P5Zyw6K+m57uG5Zyw5Z2AXHJcbiAgICBpZih2YWx1ZS5kZXRhaWwpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImdyRm9ybVJycm9yLmN1ckxvY2F0aW9uRXJyb3JcIl06ICcnLFxyXG4gICAgICAgIFtcImdyRm9ybURhdGUuY3VyTG9jYXRpb25cIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICBnclZlcmlmaWNhdGlvbjogdHJ1ZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZ3JJc0xpdVh1ZShldmVudDphbnkpOnZvaWR7ICAvL+aYr+WQpuS4uueVmeWtpuWbnuWbveS6uuWRmFxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgW1wiZ3JGb3JtRGF0ZS5pc0xpdVh1ZVwiXTogZXZlbnQuZGV0YWlsLFxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBncnlwZUZuKHZhbHVlOmFueSk6dm9pZHsgIC8v5oKo5bGe5LqOXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBbXCJnckZvcm1ScnJvci5yY1R5cGVJZEVycm9yXCJdOiAnJyxcclxuICAgICAgW1wiZ3JGb3JtRGF0ZS5yY1R5cGVJZFwiXTogdmFsdWUuZGV0YWlsLFxyXG4gICAgICBnclZlcmlmaWNhdGlvbjogdHJ1ZVxyXG4gICAgfSlcclxuICB9LFxyXG4gIGdyTmF2SXRlbShkYXRhOmFueSk6dm9pZHsgIC8v6KGM5Lia5Lqn5Lia77yI5bem5L6n5a+86Iiq54K55Ye75pe277yM6Kem5Y+R55qE5LqL5Lu277yJXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBnckluZGV4OiBkYXRhLmRldGFpbC5pbmRleCB8fCAwLFxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBnckluZHVzdHJ5SXRlbShkYXRhOmFueSk6dm9pZCB7ICAvL+ihjOS4muS6p+S4mu+8iOWPs+S+p+mAieaLqemhueiiq+eCueWHu+aXtu+8jOS8muinpuWPkeeahOS6i+S7tu+8iVxyXG4gICAgY29uc3QgaWQgPSBkYXRhLmRldGFpbC5pZDtcclxuICAgIGNvbnN0IHBJZCA9IGRhdGEuZGV0YWlsLnBJZDtcclxuICAgIGlmKGlkID09IHBJZCl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgZ3JGbGFnOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLmRhdGEuZ3JJbmR1c3RyeUlkLmZvckVhY2goKGl0ZW06YW55KTp2b2lkPT57XHJcbiAgICAgICAgaWYoaXRlbSA9PSBwSWQpe1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgZ3JJbmR1c3RyeUlkOiBbXSxcclxuICAgICAgICAgICAgW1wiZ3JGb3JtRGF0ZS5pbmR1c3RyeUJ1c2luZXNzTW9kZWxzXCJdOiBbXSxcclxuICAgICAgICAgICAgamdJbmR1c3RyeUJ1c2luZXNzZXM6ICcnLFxyXG4gICAgICAgICAgICBbXCJnckZvcm1ScnJvci5pbmR1c3RyeUJ1c2luZXNzTW9kZWxzRXJyb3JcIl06ICfor7fpgInmi6nkuqfkuJov6KGM5LiaJyxcclxuICAgICAgICAgICAgZ3JWZXJpZmljYXRpb246IGZhbHNlLFxyXG4gICAgICAgICAgICBnckZsYWc6IHRydWVcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICBpZighdGhpcy5kYXRhLmdyRmxhZyl7XHJcbiAgICAgICAgbGV0IGFycjphbnkgPSBbcElkXTtcclxuICAgICAgICBsZXQgaW5kdXN0cnlMaXN0OmFueSA9IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgY3lUeXBlSWQ6IHBJZCwgICAgICAgLy/kuqfkuJppZFxyXG4gICAgICAgICAgICBoeVR5cGVJZDogJycsICAgICAgICAvL+ihjOS4mmlkXHJcbiAgICAgICAgICAgIHBUZXh0OiBkYXRhLmRldGFpbC5wVGV4dCwgICAgICAgICAgIC8v5Lqn5Lia5ZCN56ewXHJcbiAgICAgICAgICAgIHRleHQ6IGRhdGEuZGV0YWlsLnRleHQsICAgICAgICAgICAgIC8v6KGM5Lia5ZCN56ewXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBnckluZHVzdHJ5SWQ6IGFycixcclxuICAgICAgICAgIFtcImdyRm9ybURhdGUuaW5kdXN0cnlCdXNpbmVzc01vZGVsc1wiXTogaW5kdXN0cnlMaXN0LFxyXG4gICAgICAgICAgZ3JJbmR1c3RyeUJ1c2luZXNzZXM6IGRhdGEuZGV0YWlsLnBUZXh0ICsgJyAvICcgKyBkYXRhLmRldGFpbC50ZXh0LFxyXG4gICAgICAgICAgW1wiZ3JGb3JtUnJyb3IuaW5kdXN0cnlCdXNpbmVzc01vZGVsc0Vycm9yXCJdOiAnJyxcclxuICAgICAgICAgIGdyVmVyaWZpY2F0aW9uOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIGlmKHRoaXMuZGF0YS5nckluZHVzdHJ5SWQubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIGdyRmxhZzogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuZGF0YS5nckluZHVzdHJ5SWQuZm9yRWFjaCgoaXRlbTphbnkpOmFueT0+e1xyXG4gICAgICAgICAgaWYoaXRlbSA9PSBpZCl7XHJcbiAgICAgICAgICAgIGxldCBhcnI6YW55ID0gdGhpcy5kYXRhLmdySW5kdXN0cnlJZC5maWx0ZXIoKGl0ZW0yOmFueSk6YW55PT57XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0yICE9IGlkXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBsZXQgaW5kdXN0cnlMaXN0OmFueSA9IHRoaXMuZGF0YS5nckZvcm1EYXRlLmluZHVzdHJ5QnVzaW5lc3NNb2RlbHMuZmlsdGVyKChpdGVtMjphbnkpOmFueT0+e1xyXG4gICAgICAgICAgICAgIHJldHVybiBpdGVtMi5oeVR5cGVJZCAhPSBpZFxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgbGV0IHN0cjpzdHJpbmcgPSBpbmR1c3RyeUxpc3QubWFwKChpdGVtMjphbnkpOnZvaWQ9PntcclxuICAgICAgICAgICAgICByZXR1cm4gaXRlbTIudGV4dFxyXG4gICAgICAgICAgICB9KS5qb2luKCfjgIEnKTtcclxuICAgICAgICAgICAgaWYoaW5kdXN0cnlMaXN0Lmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAgIHN0ciA9IGluZHVzdHJ5TGlzdFswXS5wVGV4dCArICcgLyAnICsgc3RyO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICBzdHIgPSAnJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICBnckluZHVzdHJ5SWQ6IGFycixcclxuICAgICAgICAgICAgICBbXCJnckZvcm1EYXRlLmluZHVzdHJ5QnVzaW5lc3NNb2RlbHNcIl06IGluZHVzdHJ5TGlzdCxcclxuICAgICAgICAgICAgICBnckluZHVzdHJ5QnVzaW5lc3Nlczogc3RyLFxyXG4gICAgICAgICAgICAgIFtcImdyRm9ybVJycm9yLmluZHVzdHJ5QnVzaW5lc3NNb2RlbHNFcnJvclwiXTogdGhpcy5kYXRhLmdySW5kdXN0cnlJZC5sZW5ndGggPT0gMCA/ICfor7fpgInmi6nkuqfkuJov6KGM5LiaJyA6ICcnLFxyXG4gICAgICAgICAgICAgIGdyVmVyaWZpY2F0aW9uOiB0aGlzLmRhdGEuZ3JJbmR1c3RyeUlkLmxlbmd0aCA9PSAwID8gZmFsc2UgOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGdyRmxhZzogdHJ1ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYoIXRoaXMuZGF0YS5nckZsYWcpe1xyXG4gICAgICAgICAgbGV0IGFycjphbnkgPSBbaWRdXHJcbiAgICAgICAgICBsZXQgaW5kdXN0cnlMaXN0OmFueSA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGN5VHlwZUlkOiBwSWQsICAgICAgICAgIC8v5Lqn5LiaaWRcclxuICAgICAgICAgICAgICBoeVR5cGVJZDogaWQsICAgICAgICAgICAvL+ihjOS4mmlkXHJcbiAgICAgICAgICAgICAgcFRleHQ6IGRhdGEuZGV0YWlsLnBUZXh0LCAgICAgICAgICAgLy/kuqfkuJrlkI3np7BcclxuICAgICAgICAgICAgICB0ZXh0OiBkYXRhLmRldGFpbC50ZXh0LCAgICAgICAgICAgICAvL+ihjOS4muWQjeensFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgICBsZXQgbmV3QXJyOmFueSA9IHRoaXMuZGF0YS5nckluZHVzdHJ5SWQuY29uY2F0KGFycikuZmlsdGVyKChpdGVtOmFueSk6YW55PT57XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtICE9IHBJZFxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgbGV0IG5ld0luZHVzdHJ5TGlzdDphbnkgPSB0aGlzLmRhdGEuZ3JGb3JtRGF0ZS5pbmR1c3RyeUJ1c2luZXNzTW9kZWxzLmNvbmNhdChpbmR1c3RyeUxpc3QpLmZpbHRlcigoaXRlbTphbnkpOmFueT0+e1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbS5oeVR5cGVJZCAhPSBcIlwiXHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBsZXQgc3RyOnN0cmluZyA9IG5ld0luZHVzdHJ5TGlzdC5tYXAoKGl0ZW06YW55KTp2b2lkPT57XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtLnRleHRcclxuICAgICAgICAgIH0pLmpvaW4oJ+OAgScpO1xyXG5cclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIGdySW5kdXN0cnlJZDogbmV3QXJyLFxyXG4gICAgICAgICAgICBbXCJnckZvcm1EYXRlLmluZHVzdHJ5QnVzaW5lc3NNb2RlbHNcIl06IG5ld0luZHVzdHJ5TGlzdCxcclxuICAgICAgICAgICAgZ3JJbmR1c3RyeUJ1c2luZXNzZXM6IGRhdGEuZGV0YWlsLnBUZXh0ICsgJyAvICcgKyBzdHIsXHJcbiAgICAgICAgICAgIFtcImdyRm9ybVJycm9yLmluZHVzdHJ5QnVzaW5lc3NNb2RlbHNFcnJvclwiXTogJycsXHJcbiAgICAgICAgICAgIGdyVmVyaWZpY2F0aW9uOiB0cnVlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgbGV0IGFycjphbnkgPSBbaWRdO1xyXG4gICAgICAgIGxldCBpbmR1c3RyeUxpc3Q6YW55ID0gW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBjeVR5cGVJZDogcElkLCAgICAgICAvL+S6p+S4mmlkXHJcbiAgICAgICAgICAgIGh5VHlwZUlkOiBpZCwgICAgICAgIC8v6KGM5LiaaWRcclxuICAgICAgICAgICAgcFRleHQ6IGRhdGEuZGV0YWlsLnBUZXh0LCAgICAgICAgICAgLy/kuqfkuJrlkI3np7BcclxuICAgICAgICAgICAgdGV4dDogZGF0YS5kZXRhaWwudGV4dCwgICAgICAgICAgICAgLy/ooYzkuJrlkI3np7BcclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIGdySW5kdXN0cnlJZDogYXJyLFxyXG4gICAgICAgICAgW1wiZ3JGb3JtRGF0ZS5pbmR1c3RyeUJ1c2luZXNzTW9kZWxzXCJdOiBpbmR1c3RyeUxpc3QsXHJcbiAgICAgICAgICBnckluZHVzdHJ5QnVzaW5lc3NlczogZGF0YS5kZXRhaWwucFRleHQgKyAnIC8gJyArIGRhdGEuZGV0YWlsLnRleHQsXHJcbiAgICAgICAgICBbXCJnckZvcm1ScnJvci5pbmR1c3RyeUJ1c2luZXNzTW9kZWxzRXJyb3JcIl06ICcnLFxyXG4gICAgICAgICAgZ3JWZXJpZmljYXRpb246IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBjb25zdCBpZCA9IHRoaXMuZGF0YS5nckluZHVzdHJ5SWQgPT09IGRhdGEuZGV0YWlsLmlkID8gbnVsbCA6IGRhdGEuZGV0YWlsLmlkO1xyXG4gICAgLy8gY29uc3QgcElkID0gZGF0YS5kZXRhaWwucElkO1xyXG5cclxuICAgIC8vIGxldCBpbmR1c3RyeUxpc3Q6YW55ID0gW1xyXG4gICAgLy8gICB7XHJcbiAgICAvLyAgICAgY3lUeXBlSWQ6IHBJZCA/IHBJZCA6ICcnLCAgICAgICAgICAvL+S6p+S4mmlkXHJcbiAgICAvLyAgICAgaHlUeXBlSWQ6IGlkID09IHBJZCA/ICcnIDogaWQsICAgICAvL+ihjOS4mmlkXHJcbiAgICAvLyAgIH1cclxuICAgIC8vIF1cclxuICAgIC8vIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAvLyAgIGdySW5kdXN0cnlJZDogaWQsXHJcbiAgICAvLyAgIFtcImdyRm9ybURhdGUuaW5kdXN0cnlCdXNpbmVzc01vZGVsc1wiXTogaW5kdXN0cnlMaXN0LFxyXG4gICAgLy8gICBnckluZHVzdHJ5QnVzaW5lc3NlczogZGF0YS5kZXRhaWwucFRleHQgKyAnIC8gJyArIGRhdGEuZGV0YWlsLnRleHQsXHJcbiAgICAvLyAgIFtcImdyRm9ybVJycm9yLmluZHVzdHJ5QnVzaW5lc3NNb2RlbHNFcnJvclwiXTogJycsXHJcbiAgICAvLyAgIGdyVmVyaWZpY2F0aW9uOiB0cnVlXHJcbiAgICAvLyB9KVxyXG4gIH0sXHJcbiAgZ3JQcm90b2NvbENoZWNrZWRGbih2YWx1ZTphbnkpOnZvaWR7ICAvL+S9v+eUqOWNj+iurlxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgZ3JQcm90b2NvbENoZWNrZWQ6IHZhbHVlLmRldGFpbFxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICBcclxuICBnclN1Ym1pdEZuKCk6dm9pZHsgIC8v5Liq5Lq65rOo5YaMXHJcbiAgICAvL+ivgeS7tuexu+Wei1xyXG4gICAgaWYodGhpcy5kYXRhLmdyRm9ybURhdGUuY2FyZFR5cGVJZCA9PSAnJyl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiZ3JGb3JtUnJyb3IuY2FyZFR5cGVJZFJycm9yXCJdOiAn6K+36YCJ5oup5Y2V5L2N57G75Z6LJyxcclxuICAgICAgICBnclZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIC8v6K+B5Lu25Y+356CBXHJcbiAgICBpZih0aGlzLmRhdGEuZ3JGb3JtRGF0ZS5jYXJkTnVtID09ICcnKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJnckZvcm1ScnJvci5jYXJkTnVtUnJyb3JcIl06ICfor7fpgInmi6nor4Hku7blj7fnoIEnLFxyXG4gICAgICAgIGdyVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy/or4Hku7bmiavmj4/ku7bkuIrkvKBcclxuICAgIGlmKHRoaXMuZGF0YS5nckZvcm1EYXRlLmNhcmRQaWMubGVuZ3RoID09IDApe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImdyRm9ybVJycm9yLmNhcmRQaWNFcnJvclwiXTogJ+ivt+S4iuS8oOivgeS7tuaJq+aPj+S7ticsXHJcbiAgICAgICAgZ3JWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvL+WvhueggVxyXG4gICAgaWYodGhpcy5kYXRhLmdyRm9ybURhdGUucGFzc3dvcmQgPT0gJycpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImdyRm9ybVJycm9yLnBhc3N3b3JkRXJyb3JcIl06J+ivt+i+k+WFpeWvhueggScsXHJcbiAgICAgICAgZ3JWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvL+ehruiupOWvhueggVxyXG4gICAgaWYodGhpcy5kYXRhLmdyRm9ybURhdGUudHJ1ZXdvcmQgPT0gJycpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImdyRm9ybVJycm9yLnRydWV3b3JkRXJyb3JcIl06J+ivt+WGjeasoeehruiupOWvhueggScsXHJcbiAgICAgICAgZ3JWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvL+Wnk+WQjVxyXG4gICAgaWYodGhpcy5kYXRhLmdyRm9ybURhdGUucmVhbE5hbWUgPT0gJycpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImdyRm9ybVJycm9yLnJlYWxOYW1lUnJyb3JcIl06ICfor7fovpPlhaXlp5PlkI0nLFxyXG4gICAgICAgIGdyVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy/ogZTns7vnlLXor51cclxuICAgIGlmKHRoaXMuZGF0YS5nckZvcm1EYXRlLnBob25lTnVtID09ICcnKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJnckZvcm1ScnJvci5waG9uZU51bUVycm9yXCJdOifor7fovpPlhaXogZTns7vnlLXor50nLFxyXG4gICAgICAgIGdyVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgIC8v6aqM6K+B56CBXHJcbiAgICAgaWYodGhpcy5kYXRhLmdyRm9ybURhdGUudmVyaWZ5Q29kZSA9PSAnJyl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiZ3JGb3JtUnJyb3IudmVyaWZ5Q29kZUVycm9yXCJdOifor7fovpPlhaXpqozor4HnoIEnLFxyXG4gICAgICAgIGdyVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy/nlLXlrZDpgq7nrrFcclxuICAgIGlmKHRoaXMuZGF0YS5nckZvcm1EYXRlLmVtYWlsID09ICcnKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJnckZvcm1ScnJvci5lbWFpbEVycm9yXCJdOifor7fovpPlhaXnlLXlrZDpgq7nrrEnLFxyXG4gICAgICAgIGdyVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy/miYDlnKjlnLDljLpcclxuICAgIGlmKHRoaXMuZGF0YS5nckZvcm1EYXRlLnhpYVF1SWQgPT0gJycpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImdyRm9ybVJycm9yLnhpYVF1SWRFcnJvclwiXTon6K+36YCJ5oup5omA5Zyo5Zyw5Yy6JyxcclxuICAgICAgICBnclZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIC8v546w5bGF5L2P5Zyw6K+m57uG5Zyw5Z2AXHJcbiAgICBpZih0aGlzLmRhdGEuZ3JGb3JtRGF0ZS5jdXJMb2NhdGlvbiA9PSAnJyl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiZ3JGb3JtUnJyb3IuY3VyTG9jYXRpb25FcnJvclwiXTon6K+36L6T5YWl546w5bGF5L2P5Zyw6K+m57uG5Zyw5Z2AJyxcclxuICAgICAgICBnclZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIC8v5oKo5bGe5LqOXHJcbiAgICBpZih0aGlzLmRhdGEuZ3JGb3JtRGF0ZS5yY1R5cGVJZCA9PSAnJyl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiZ3JGb3JtUnJyb3IucmNUeXBlSWRFcnJvclwiXTon6K+36YCJ5oup5oKo5bGe5LqOJyxcclxuICAgICAgICBnclZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgICAvL+S6p+S4muOAgeihjOS4mlxyXG4gICAgIGlmKHRoaXMuZGF0YS5nckZvcm1EYXRlLmluZHVzdHJ5QnVzaW5lc3NNb2RlbHMubGVuZ3RoID09IDApe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImdyRm9ybVJycm9yLmluZHVzdHJ5QnVzaW5lc3NNb2RlbHNFcnJvclwiXTon6K+36YCJ5oup5Lqn5LiaL+ihjOS4micsXHJcbiAgICAgICAgZ3JWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvL+mYheivu+WNj+iurlxyXG4gICAgaWYodGhpcy5kYXRhLmdyVmVyaWZpY2F0aW9uID09IGZhbHNlKXtcclxuICAgICAgVG9hc3QoJ+ivt+aKiuW/heWhq+S/oeaBr+Whq+WGmeWujOaVtO+8gScpO1xyXG4gICAgfWVsc2UgaWYodGhpcy5kYXRhLmdyUHJvdG9jb2xDaGVja2VkID09IGZhbHNlKXtcclxuICAgICAgVG9hc3QoJ+ivt+mYheivu+W5tuaOpeWPl+W6lOeUqOS9v+eUqOWNj+iuru+8gScpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIGh0dHBzLnJlcXVlc3QoYXBpLnVzZXJSZWcsIHRoaXMuZGF0YS5nckZvcm1EYXRlLCAnUE9TVCcpXHJcbiAgICAgIC50aGVuKCgpOnZvaWQ9PntcclxuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgIHVybDogJy4uL2xvZ2luRm9ybS9sb2dpbkZvcm0nXHJcbiAgICAgICAgfSlcclxuICAgICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgICBUb2FzdChlcnIpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvL+aIkeW3sumYheivu+W5tuaOpeWPl+W6lOeUqOS9v+eUqOWNj+iurlxyXG4gIG5vdGljZUZuKCk6dm9pZHtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGpnUHJvdG9jb2xDaGVja2VkOiAhdGhpcy5kYXRhLmpnUHJvdG9jb2xDaGVja2VkXHJcbiAgICB9KVxyXG4gICAgRGlhbG9nLmFsZXJ0KHtcclxuICAgICAgdGl0bGU6ICfms6jlhozpobvnn6UnLFxyXG4gICAgICBtZXNzYWdlQWxpZ246ICdsZWZ0JyxcclxuICAgICAgbWVzc2FnZTogJzEu5pys56uZ6YeH55So5a6e5ZCN6K6k6K+B77yM55Sz6K+35Lq66aG756Gu5L+d5aGr5YaZ5L+h5oGv55qE55yf5a6e44CB5a6M5pW044CB5pyJ5pWI44CC5L+h5oGv5aGr5YaZ5LiN55yf5a6e44CB5LiN5a6M5pW0562J5bCG5a+86Ie05rOo5YaM5peg5rOV5a6h5qC46YCa6L+H44CC5pys56uZ56Gu5L+d55So5oi35L+h5oGv55qE5a6J5YWo5oCn5ZKM5L+d5a+G5oCn5bm25Li65LmL6LSf6LSj44CCXFxuMi7pgbXlrojkuK3ljY7kurrmsJHlhbHlkozlm73ms5Xlvovms5Xku6Tlkozlhbbku5bnm7jlhbPms5Xop4TvvIzkuKXnpoHlj5HluIPnoLTlnY/lrqrms5Xlkozms5XlvovjgIHms5Xop4TnmoTkv6Hmga/jgIJcXG4zLumBteWuiOWFrOWuiemDqOWFs+S6juOAiuiuoeeul+acuuS/oeaBr+e9kee7nOWbvemZheiBlOe9keWuieWFqOS/neaKpOeuoeeQhuWKnuazleOAi+eahOinhOWumu+8jOiHquiniee7tOaKpOiuoeeul+acuuS/oeaBr+e9kee7nOeahOWuieWFqOOAglxcbjQu5Lil56aB5Zyo572R5LiK5a6j5oms5bCB5bu66L+35L+h44CB5rer56e944CB6Imy5oOF44CB5pq05Yqb44CB6LWM5Y2a44CB5qy66K+I562J5LiN5q2j5b2T6KGM5Li644CCXFxuNS7ljZXkvY3miJbkuKrkurrlj5HluIPnmoTkv6Hmga/opoHnnJ/lrp7mnInmlYjjgIHlh4bnoa7lrozmlbTvvIzlubbkuI3lvpfmnInlvJXkurror6/op6PmiJbogIXomZrlgYfnmoTpmYjov7DjgIJcXG42LueUqOaIt+azqOWGjOaIkOWKn+WQju+8jOivt+WmpeWWhOS/neeuoeaCqOeahOeUqOaIt+WQjeWSjOWvhueggeOAgicsXHJcbiAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgXHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICAvL+aIkeW3sumYheivu+W5tuaOpeWPl+W6lOeUqOS9v+eUqOWNj+iuru+8iOS4quS6uu+8iVxyXG4gIGdyTm90aWNlRm4oKTp2b2lke1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgZ3JQcm90b2NvbENoZWNrZWQ6ICF0aGlzLmRhdGEuZ3JQcm90b2NvbENoZWNrZWRcclxuICAgIH0pXHJcbiAgICBEaWFsb2cuYWxlcnQoe1xyXG4gICAgICB0aXRsZTogJ+azqOWGjOmhu+efpScsXHJcbiAgICAgIG1lc3NhZ2VBbGlnbjogJ2xlZnQnLFxyXG4gICAgICBtZXNzYWdlOiAnMS7mnKznq5nph4fnlKjlrp7lkI3orqTor4HvvIznlLPor7fkurrpobvnoa7kv53loavlhpnkv6Hmga/nmoTnnJ/lrp7jgIHlrozmlbTjgIHmnInmlYjjgILkv6Hmga/loavlhpnkuI3nnJ/lrp7jgIHkuI3lrozmlbTnrYnlsIblr7zoh7Tms6jlhozml6Dms5XlrqHmoLjpgJrov4fjgILmnKznq5nnoa7kv53nlKjmiLfkv6Hmga/nmoTlronlhajmgKflkozkv53lr4bmgKflubbkuLrkuYvotJ/otKPjgIJcXG4yLumBteWuiOS4reWNjuS6uuawkeWFseWSjOWbveazleW+i+azleS7pOWSjOWFtuS7luebuOWFs+azleinhO+8jOS4peemgeWPkeW4g+egtOWdj+WuquazleWSjOazleW+i+OAgeazleinhOeahOS/oeaBr+OAglxcbjMu6YG15a6I5YWs5a6J6YOo5YWz5LqO44CK6K6h566X5py65L+h5oGv572R57uc5Zu96ZmF6IGU572R5a6J5YWo5L+d5oqk566h55CG5Yqe5rOV44CL55qE6KeE5a6a77yM6Ieq6KeJ57u05oqk6K6h566X5py65L+h5oGv572R57uc55qE5a6J5YWo44CCXFxuNC7kuKXnpoHlnKjnvZHkuIrlrqPmiazlsIHlu7rov7fkv6HjgIHmt6vnp73jgIHoibLmg4XjgIHmmrTlipvjgIHotYzljZrjgIHmrLror4jnrYnkuI3mraPlvZPooYzkuLrjgIJcXG41LuWNleS9jeaIluS4quS6uuWPkeW4g+eahOS/oeaBr+imgeecn+WunuacieaViOOAgeWHhuehruWujOaVtO+8jOW5tuS4jeW+l+acieW8leS6uuivr+ino+aIluiAheiZmuWBh+eahOmZiOi/sOOAglxcbjYu55So5oi35rOo5YaM5oiQ5Yqf5ZCO77yM6K+35aal5ZaE5L+d566h5oKo55qE55So5oi35ZCN5ZKM5a+G56CB44CCJyxcclxuICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICBcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG5cclxuICAvL+mhtemdouWIneWni+WMllxyXG4gIG9uTG9hZCgpe1xyXG4gICAgLy/pobXpnaLmoIfpophcclxuICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7ICAgICBcclxuICAgICAgdGl0bGU6IFwi5rOo5YaMXCJcclxuICAgIH0pO1xyXG4gICAgLy/ojrflj5bljZXkvY3nsbvlnotcclxuICAgIHRoaXMuZ2V0RGFud2VpTGlzdCgpO1xyXG4gICAgLy/ojrflj5bmiYDlnKjlnLDljLpcclxuICAgIHRoaXMuZ2V0VGVuYW50TGlzdCgpO1xyXG4gICAgLy/kuqfkuJrjgIHooYzkuJrnsbvliKtcclxuICAgIHRoaXMuZ2V0SW5kdXN0cnlCdXNpbmVzc2VzKCk7XHJcbiAgICAvL+ivgeS7tuexu+Wei1xyXG4gICAgdGhpcy5nZXRjYXJkTGlzdCgpO1xyXG4gICAgLy/mgqjlsZ7kuo5cclxuICAgIHRoaXMuZ2V0VHlwZUlkTGlzdCgpO1xyXG4gIH0sXHJcblxyXG4gIC8v6aG16Z2i5riy5p+T5a6M5oiQXHJcbiAgb25SZWFkeSgpe30sXHJcblxyXG4gIC8v6aG16Z2i5pi+56S6XHJcbiAgb25TaG93KCl7fSxcclxuXHJcbiAgLy/pobXpnaLpmpDol49cclxuICBvbkhpZGUoKXt9LFxyXG5cclxuICAvL+mhtemdouWFs+mXrVxyXG4gIG9uVW5sb2FkKCl7fVxyXG59KVxyXG5leHBvcnQge307XHJcbiJdfQ==