"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dialog = require('../../miniprogram_npm/@vant/weapp/dialog/dialog.js').default;
var Toast = require('../../miniprogram_npm/@vant/weapp/toast/toast.js').default;
var api = getApp().globalData;
var https = require('../../utils/myRequest.js');
Page({
    data: {
        tabActive: 'jg',
        qydanweiList: [],
        tenantList: [],
        industryBusinessesList: [],
        platformIdList: [],
        cardList: [],
        grPlatformIdList: [],
        typeIdList: [],
        jgIndex: 0,
        jgIndustryId: null,
        jgIndustryBusinesses: '',
        jgVerifyCodeTime: '获取验证码',
        jgDisabled: false,
        jgProtocolChecked: false,
        grIndex: 0,
        grIndustryId: null,
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
    },
    jgShxyCodeInput: function (value) {
        var _a, _b, _c;
        var reg = /^[^_IOZSVa-z\W]{2}\d{6}[^_IOZSVa-z\W]{10}$/g;
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
        var token = wx.getStorageSync('token');
        wx.uploadFile({
            url: api.fileUrl + '?token=' + token,
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
                        url: api.imgUrl + '?token=' + token + '&filePath=' + item.filePath,
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
        var _a;
        var industryList = [
            {
                cyTypeId: data.detail.pId,
                hyTypeId: data.detail.id
            }
        ];
        this.setData((_a = {
                jgIndustryId: data.detail.id
            },
            _a["jgFormDate.industryBusinesses"] = industryList,
            _a.jgIndustryBusinesses = data.detail.pText + ' / ' + data.detail.text,
            _a["jgFormRrror.industryBusinessesError"] = '',
            _a.jgVerification = false,
            _a));
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
        if (this.data.jgFormDate.tenantId.length == 0) {
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
    jgCardNum: function (value) {
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
        var token = wx.getStorageSync('token');
        wx.uploadFile({
            url: api.fileUrl + '?token=' + token,
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
                        url: api.imgUrl + '?token=' + token + '&filePath=' + item.filePath,
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
            _a.jgVerification = false,
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
                _a["jgFormRrror.verifyCodeError"] = '',
                _a["jgFormDate.verifyCode"] = value.detail,
                _a.jgVerification = true,
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
        var _a;
        var industryList = [
            {
                cyTypeId: data.detail.pId,
                hyTypeId: data.detail.id
            }
        ];
        this.setData((_a = {
                grIndustryId: data.detail.id
            },
            _a["grFormDate.industryBusinessModels"] = industryList,
            _a.grIndustryBusinesses = data.detail.pText + ' / ' + data.detail.text,
            _a["grFormRrror.industryBusinessModelsError"] = '',
            _a.grVerification = false,
            _a));
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
                _d.jgVerification = false,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXJlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlZ2lzdGVyZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsb0RBQW9ELENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDbkYsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLGtEQUFrRCxDQUFDLENBQUMsT0FBTyxDQUFDO0FBQ2hGLElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBRSxDQUFDLFVBQVUsQ0FBQztBQUNoQyxJQUFJLEtBQUssR0FBSSxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUVqRCxJQUFJLENBQUM7SUFFSCxJQUFJLEVBQUU7UUFDSixTQUFTLEVBQUUsSUFBSTtRQUVmLFlBQVksRUFBRSxFQUFFO1FBQ2hCLFVBQVUsRUFBRSxFQUFFO1FBQ2Qsc0JBQXNCLEVBQUUsRUFBRTtRQUMxQixjQUFjLEVBQUUsRUFBRTtRQUNsQixRQUFRLEVBQUUsRUFBRTtRQUNaLGdCQUFnQixFQUFFLEVBQUU7UUFDcEIsVUFBVSxFQUFFLEVBQUU7UUFFZCxPQUFPLEVBQUUsQ0FBQztRQUNWLFlBQVksRUFBRSxJQUFJO1FBQ2xCLG9CQUFvQixFQUFFLEVBQUU7UUFDeEIsZ0JBQWdCLEVBQUUsT0FBTztRQUN6QixVQUFVLEVBQUUsS0FBSztRQUNqQixpQkFBaUIsRUFBRSxLQUFLO1FBR3hCLE9BQU8sRUFBRSxDQUFDO1FBQ1YsWUFBWSxFQUFFLElBQUk7UUFDbEIsb0JBQW9CLEVBQUUsRUFBRTtRQUN4QixnQkFBZ0IsRUFBRSxPQUFPO1FBQ3pCLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLGlCQUFpQixFQUFFLEtBQUs7UUFHeEIsVUFBVSxFQUFFLEVBQUU7UUFDZCxnQkFBZ0IsRUFBRSxFQUFFO1FBQ3BCLGVBQWUsRUFBRSxFQUFFO1FBQ25CLFFBQVEsRUFBRTtZQUNSLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxF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SyxDQUFDO1lBQ1gsS0FBSyxFQUFFLE1BQU07WUFDYixZQUFZLEVBQUUsTUFBTTtZQUNwQixPQUFPLEVBQUUscVJBQXFSO1NBQy9SLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFFUixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFJRCxNQUFNO1FBRUosRUFBRSxDQUFDLHFCQUFxQixDQUFDO1lBQ3ZCLEtBQUssRUFBRSxJQUFJO1NBQ1osQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRXJCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUVyQixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUU3QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFbkIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFHRCxPQUFPLGdCQUFHLENBQUM7SUFHWCxNQUFNLGdCQUFHLENBQUM7SUFHVixNQUFNLGdCQUFHLENBQUM7SUFHVixRQUFRLGdCQUFHLENBQUM7Q0FDYixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZWdpc3RlcmVkLnRzXHJcbmxldCBEaWFsb2cgPSByZXF1aXJlKCcuLi8uLi9taW5pcHJvZ3JhbV9ucG0vQHZhbnQvd2VhcHAvZGlhbG9nL2RpYWxvZy5qcycpLmRlZmF1bHQ7XHJcbmxldCBUb2FzdCA9IHJlcXVpcmUoJy4uLy4uL21pbmlwcm9ncmFtX25wbS9AdmFudC93ZWFwcC90b2FzdC90b2FzdC5qcycpLmRlZmF1bHQ7XHJcbmNvbnN0IGFwaSA9IGdldEFwcCgpLmdsb2JhbERhdGE7ICAvLyDojrflj5blupTnlKjlrp7kvotcclxubGV0IGh0dHBzICA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL215UmVxdWVzdC5qcycpOyAgICAgLy/ojrflj5ZhamF45pa55rOVXHJcblxyXG5QYWdlKHtcclxuICAvL+mhtemdouaVsOaNrlxyXG4gIGRhdGE6IHtcclxuICAgIHRhYkFjdGl2ZTogJ2pnJywgICAgICAgICAgICAgICAgLy/ms6jlhox0YWJcclxuXHJcbiAgICBxeWRhbndlaUxpc3Q6IFtdLCAgICAgICAgICAgICAgIC8v5Y2V5L2N57G75Z6LXHJcbiAgICB0ZW5hbnRMaXN0OiBbXSwgICAgICAgICAgICAgICAgIC8v5omA5Zyo5Zyw5Yy6XHJcbiAgICBpbmR1c3RyeUJ1c2luZXNzZXNMaXN0OiBbXSwgICAgIC8v5Lqn5Lia44CB6KGM5Lia57G75Yir5YiX6KGoXHJcbiAgICBwbGF0Zm9ybUlkTGlzdDogW10sICAgICAgICAgICAgIC8v5omA5bGe5Yib5Lia5bmz5Y+wXHJcbiAgICBjYXJkTGlzdDogW10sICAgICAgICAgICAgICAgICAgIC8v6K+B5Lu257G75Z6LXHJcbiAgICBnclBsYXRmb3JtSWRMaXN0OiBbXSwgICAgICAgICAgIC8v5Liq5Lq65bel5L2c5Y2V5L2NXHJcbiAgICB0eXBlSWRMaXN0OiBbXSwgICAgICAgICAgICAgICAgIC8v5oKo5bGe5LqOXHJcbiAgXHJcbiAgICBqZ0luZGV4OiAwLCAgICAgICAgICAgICAgICAgICAgIC8v5b2T5YmN57Si5byV77yI5py65p6E77yJXHJcbiAgICBqZ0luZHVzdHJ5SWQ6IG51bGwsICAgICAgICAgICAgIC8v6YCJ5Lit55qEaWTvvIjmnLrmnoTvvIlcclxuICAgIGpnSW5kdXN0cnlCdXNpbmVzc2VzOiAnJywgICAgICAgLy/kuqfkuJrjgIHooYzkuJrmmL7npLpcclxuICAgIGpnVmVyaWZ5Q29kZVRpbWU6ICfojrflj5bpqozor4HnoIEnLCAgLy/ojrflj5bpqozor4HnoIFcclxuICAgIGpnRGlzYWJsZWQ6IGZhbHNlLCAgICAgICAgICAgICAgLy/pqozor4HnoIHmjInpkq7nirbmgIFcclxuICAgIGpnUHJvdG9jb2xDaGVja2VkOiBmYWxzZSwgICAgICAgLy/ljY/orq5cclxuXHJcblxyXG4gICAgZ3JJbmRleDogMCwgICAgICAgICAgICAgICAgICAgICAvL+W9k+WJjee0ouW8le+8iOacuuaehO+8iVxyXG4gICAgZ3JJbmR1c3RyeUlkOiBudWxsLCAgICAgICAgICAgICAvL+mAieS4reeahGlk77yI5py65p6E77yJXHJcbiAgICBnckluZHVzdHJ5QnVzaW5lc3NlczogJycsICAgICAgIC8v5Lqn5Lia44CB6KGM5Lia5pi+56S6XHJcbiAgICBnclZlcmlmeUNvZGVUaW1lOiAn6I635Y+W6aqM6K+B56CBJywgIC8v6I635Y+W6aqM6K+B56CBXHJcbiAgICBnckRpc2FibGVkOiBmYWxzZSwgICAgICAgICAgICAgIC8v6aqM6K+B56CB5oyJ6ZKu54q25oCBXHJcbiAgICBnclByb3RvY29sQ2hlY2tlZDogZmFsc2UsICAgICAgIC8v5Y2P6K6uXHJcblxyXG4gICAgLy/mnLrmnoTms6jlhoxcclxuICAgIGpnRmlsZUxpc3Q6IFtdLCAgICAgICAgICAvL+acuuaehOS4iuS8oOmZhOS7tlxyXG4gICAgamdSZXBlYXRQYXNzd29yZDogJycsICAgIC8v5py65p6E56Gu6K6k5a+G56CBXHJcbiAgICBqZ1Bhc3N3b3JkRXJyb3I6ICcnLCAgICAgLy/mnLrmnoTnoa7orqTlr4bnoIFcclxuICAgIHVuaXRUeXBlOiBbICAgICAgICAgICAgICAvL+WNleS9jeexu+Wei1xyXG4gICAgICB7IHRleHQ6ICfpgInmi6nnsbvlnosnLCB2YWx1ZTogMCB9LFxyXG4gICAgICB7IHRleHQ6ICfmlrDmrL7llYblk4EnLCB2YWx1ZTogMSB9LFxyXG4gICAgICB7IHRleHQ6ICfmtLvliqjllYblk4EnLCB2YWx1ZTogMiB9LFxyXG4gICAgXSxcclxuICAgIGpnRm9ybURhdGU6eyAgLy/mnLrmnoTooajljZVcclxuICAgICAgc2h4eUNvZGU6ICcnLCAgICAgICAgICAgICAgICAgLy/nu5/kuIDnpL7kvJrkv6HnlKjku6PnoIFcclxuICAgICAgc2h4eXBpY3M6IFtdLCAgICAgICAgICAgICAgICAgLy/nu5/kuIDnpL7kvJrkv6HnlKjku6PnoIHmiavmj4/ku7bkuIrkvKBcclxuICAgICAgcGFzc3dvcmQ6ICcnLCAgICAgICAgICAgICAgICAgLy/lr4bnoIFcclxuICAgICAgdHJ1ZXdvcmQ6ICcnLCAgICAgICAgICAgICAgICAgLy/noa7orqTlr4bnoIFcclxuICAgICAgcXlOYW1lOiAnJywgICAgICAgICAgICAgICAgICAgLy/ljZXkvY3lkI3np7BcclxuICAgICAgcXlOYXR1cmVJZDogJycsICAgICAgICAgICAgICAgLy/ljZXkvY3nsbvlnotcclxuICAgICAgdGVuYW50SWQ6ICcnLCAgICAgICAgICAgICAgICAgLy/miYDlnKjlnLDljLpcclxuICAgICAgaW5kdXN0cnlCdXNpbmVzc2VzOiBbXSwgICAgICAgLy/kuqfkuJrjgIHooYzkuJpcclxuICAgICAgcXlBZGRyZXNzOiAnJywgICAgICAgICAgICAgICAgLy/ljZXkvY3or6bnu4blnLDlnYBcclxuICAgICAgbGVnYWxOYW1lOiAnJywgICAgICAgICAgICAgICAgLy/ms5Xkurrlp5PlkI1cclxuICAgICAgbGVnYWxJZDogJycsICAgICAgICAgICAgICAgICAgLy/ms5Xkurrouqvku73or4Hlj7dcclxuICAgICAgbGlua1BlcnNvbjogJycsICAgICAgICAgICAgICAgLy/ogZTns7vkurpcclxuICAgICAgbGlua1RlbDogJycsICAgICAgICAgICAgICAgICAgLy/ogZTns7vkurrnlLXor51cclxuICAgICAgdmVyaWZ5Q29kZTogJycsICAgICAgICAgICAgICAgLy/pqozor4HnoIFcclxuICAgICAgZW1haWw6ICcnLCAgICAgICAgICAgICAgICAgICAgLy/nlLXlrZDpgq7nrrFcclxuICAgICAgaXNDeFBsYXRmb3JtOiAnMicsICAgICAgICAgICAgLy/mmK/lkKbliJvmlrDlubPlj7DkuLvkvZPljZXkvY1cclxuICAgICAgaXNDeVBsYXRmb3JtOiAnMicsICAgICAgICAgICAgLy/mmK/lkKbliJvkuJrlubPlj7DkuLvkvZPljZXkvY1cclxuICAgICAgcGxhdGZvcm1JZDogJycgICAgICAgICAgICAgICAgLy/miYDlsZ7liJvkuJrlubPlj7BcclxuICAgIH0sXHJcbiAgICBqZ0Zvcm1ScnJvcjp7ICAvL+acuuaehOmqjOivgVxyXG4gICAgICBzaHh5Q29kZUVycm9yOiAnJywgICAgICAgICAgICAvL+e7n+S4gOekvuS8muS/oeeUqOS7o+eggVxyXG4gICAgICBzaHh5cGljc0Vycm9yOiAnJywgICAgICAgICAgICAvL+e7n+S4gOekvuS8muS/oeeUqOS7o+eggeaJq+aPj+S7tuS4iuS8oFxyXG4gICAgICBwYXNzd29yZEVycm9yOiAnJywgICAgICAgICAgICAvL+WvhueggVxyXG4gICAgICB0cnVld29yZEVycm9yOiAnJywgICAgICAgICAgICAvL+ehruiupOWvhueggVxyXG4gICAgICBxeU5hbWVFcnJvcjogJycsICAgICAgICAgICAgICAvL+WNleS9jeWQjeensFxyXG4gICAgICBxeU5hdHVyZUlkRXJyb3I6ICcnLCAgICAgICAgICAvL+WNleS9jeexu+Wei1xyXG4gICAgICB0ZW5hbnRJZEVycm9yOiAnJywgICAgICAgICAgICAvL+aJgOWcqOWcsOWMulxyXG4gICAgICBpbmR1c3RyeUJ1c2luZXNzZXNFcnJvcjogJycsICAvL+S6p+S4muOAgeihjOS4mlxyXG4gICAgICBxeUFkZHJlc3NFcnJvcjogJycsICAgICAgICAgICAvL+WNleS9jeivpue7huWcsOWdgFxyXG4gICAgICBsZWdhbElkRXJyb3I6ICcnLCAgICAgICAgICAgICAvL+azleS6uui6q+S7veivgeWPt1xyXG4gICAgICBsaW5rUGVyc29uRXJyb3I6ICcnLCAgICAgICAgICAvL+iBlOezu+S6ulxyXG4gICAgICBsaW5rVGVsRXJyb3I6ICcnLCAgICAgICAgICAgICAvL+iBlOezu+S6uueUteivnVxyXG4gICAgICB2ZXJpZnlDb2RlRXJyb3I6ICcnLCAgICAgICAgICAvL+mqjOivgeeggVxyXG4gICAgICBlbWFpbEVycm9yOiAnJyAgICAgICAgICAgICAgICAvL+eUteWtkOmCrueusVxyXG4gICAgfSxcclxuICAgIGpnVmVyaWZpY2F0aW9uOiBmYWxzZSwgICAgLy/pqozor4HliKTmlq1cclxuXHJcblxyXG4gICAgLy/kuKrkurrpqozor4FcclxuICAgIGdyRmlsZUxpc3Q6IFtdLCAgICAgICAgICAgICAgICAgIC8v5py65p6E5LiK5Lyg6ZmE5Lu2XHJcbiAgICBnckZvcm1EYXRlOnsgIC8v5py65p6E6KGo5Y2VXHJcbiAgICAgIGNhcmRUeXBlSWQ6ICcnLCAgICAgICAgICAgICAgICAvL+ivgeS7tuexu+Wei1xyXG4gICAgICBjYXJkTnVtOiAnJywgICAgICAgICAgICAgICAgICAgLy/or4Hku7blj7fnoIFcclxuICAgICAgY2FyZFBpYzogW10sICAgICAgICAgICAgICAgICAgIC8v6K+B5Lu25omr5o+P5Lu25LiK5LygXHJcbiAgICAgIHBhc3N3b3JkOiAnJywgICAgICAgICAgICAgICAgICAvL+WvhueggVxyXG4gICAgICB0cnVld29yZDogJycsICAgICAgICAgICAgICAgICAgLy/noa7orqTlr4bnoIFcclxuICAgICAgcmVhbE5hbWU6ICcnLCAgICAgICAgICAgICAgICAgIC8v5aeT5ZCNXHJcbiAgICAgIHBob25lTnVtOiAnJywgICAgICAgICAgICAgICAgICAvL+iBlOezu+eUteivnVxyXG4gICAgICB2ZXJpZnlDb2RlOiAnJywgICAgICAgICAgICAgICAgLy/pqozor4HnoIFcclxuICAgICAgZW1haWw6ICcnLCAgICAgICAgICAgICAgICAgICAgIC8v55S15a2Q6YKu566xXHJcbiAgICAgIHhpYVF1SWQ6ICcnLCAgICAgICAgICAgICAgICAgICAvL+aJgOWxnuWcsOWMulxyXG4gICAgICBkYW5XZWlJZDogJycsICAgICAgICAgICAgICAgICAgLy8g5omA5bGe5Y2V5L2NXHJcbiAgICAgIGRhbldlaUFkZHJlc3M6ICcnLCAgICAgICAgICAgICAvL+W3peS9nOWNleS9jeivpue7huWcsOWdgFxyXG4gICAgICBjdXJMb2NhdGlvbjogJycsICAgICAgICAgICAgICAgLy/njrDlsYXkvY/lnLDor6bnu4blnLDlnYBcclxuICAgICAgaXNMaXVYdWU6ICcyJywgICAgICAgICAgICAgICAgIC8v5piv5ZCm5Li655WZ5a2m5Zue5Zu95Lq65ZGYXHJcbiAgICAgIHJjVHlwZUlkOiAnJywgICAgICAgICAgICAgICAgICAvL+aCqOWxnuS6jlxyXG4gICAgICBpbmR1c3RyeUJ1c2luZXNzTW9kZWxzOiBbXSwgICAgLy/kuqfkuJrjgIHooYzkuJpcclxuICAgIH0sXHJcbiAgICBnckZvcm1ScnJvcjp7ICAvL+acuuaehOmqjOivgVxyXG4gICAgICBjYXJkVHlwZUlkUnJyb3I6ICcnLCAgICAgICAgICAgLy/or4Hku7bnsbvlnotcclxuICAgICAgY2FyZE51bVJycm9yOiAnJywgICAgICAgICAgICAgIC8v6K+B5Lu25Y+356CBXHJcbiAgICAgIGNhcmRQaWNFcnJvcjogJycsICAgICAgICAgICAgICAvL+ivgeS7tuaJq+aPj+S7tuS4iuS8oFxyXG4gICAgICBwYXNzd29yZEVycm9yOiAnJywgICAgICAgICAgICAgLy/lr4bnoIFcclxuICAgICAgdHJ1ZXdvcmRFcnJvcjogJycsICAgICAgICAgICAgIC8v56Gu6K6k5a+G56CBXHJcbiAgICAgIHJlYWxOYW1lRXJyb3I6ICcnLCAgICAgICAgICAgICAvL+Wnk+WQjVxyXG4gICAgICBwaG9uZU51bUVycm9yOiAnJywgICAgICAgICAgICAgLy/ogZTns7vnlLXor51cclxuICAgICAgdmVyaWZ5Q29kZUVycm9yOiAnJywgICAgICAgICAgIC8v6aqM6K+B56CBXHJcbiAgICAgIGVtYWlsRXJyb3I6ICcnLCAgICAgICAgICAgICAgICAvL+eUteWtkOmCrueusVxyXG4gICAgICB4aWFRdUlkRXJyb3I6ICcnLCAgICAgICAgICAgICAgLy/miYDlsZ7lnLDljLpcclxuICAgICAgZGFuV2VpSWRFcnJvcjogJycsICAgICAgICAgICAgIC8vIOaJgOWxnuWNleS9jVxyXG4gICAgICBjdXJMb2NhdGlvbkVycm9yOiAnJywgICAgICAgICAgLy/njrDlsYXkvY/lnLDor6bnu4blnLDlnYBcclxuICAgICAgcmNUeXBlSWRFcnJvcjogJycsICAgICAgICAgICAgIC8v5oKo5bGe5LqOXHJcbiAgICAgIGluZHVzdHJ5QnVzaW5lc3NNb2RlbHNFcnJvcjogW10sICAgIC8v5Lqn5Lia44CB6KGM5LiaXHJcbiAgICB9LFxyXG4gICAgZ3JWZXJpZmljYXRpb246IGZhbHNlLCAgICAvL+mqjOivgeWIpOaWrVxyXG4gIH0sXHJcblxyXG4gIGdldERhbndlaUxpc3QoKTp2b2lkeyAgLy/ojrflj5bljZXkvY3nsbvlnotcclxuICAgIGh0dHBzLnJlcXVlc3QoYXBpLnN1Ym1lbnVEaWMgKyAnP21vaWQ9MTQnLCBudWxsLCAnR0VUJylcclxuICAgIC50aGVuKChyZXM6YW55KTp2b2lkPT57XHJcbiAgICAgIGxldCBsaXN0OmFueSA9IHJlcy52YWwubWFwKChpdGVtOmFueSk6YW55PT57XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHRleHQ6IGl0ZW0uZGljTmFtZSxcclxuICAgICAgICAgIHZhbHVlOiBpdGVtLmlkXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHF5ZGFud2VpTGlzdDogbGlzdFxyXG4gICAgICB9KVxyXG4gICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIGdldFRlbmFudExpc3QoKTp2b2lkeyAgLy/ojrflj5bmiYDlnKjlnLDljLpcclxuICAgIGh0dHBzLnJlcXVlc3QoYXBpLnRlbmFudExpc3QsIG51bGwsICdHRVQnKVxyXG4gICAgLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgbGV0IGxpc3Q6YW55ID0gcmVzLmxpc3QubWFwKChpdGVtOmFueSk6YW55PT57XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHRleHQ6IGl0ZW0uY25hbWUsXHJcbiAgICAgICAgICB2YWx1ZTogaXRlbS5pZFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICB0ZW5hbnRMaXN0OiBsaXN0XHJcbiAgICAgIH0pXHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgZ2V0SW5kdXN0cnlCdXNpbmVzc2VzKCk6dm9pZHsgIC8v5Lqn5Lia44CB6KGM5Lia57G75YirXHJcbiAgICBodHRwcy5yZXF1ZXN0KGFwaS5zdWJtZW51RGljICsgJz9tb2lkPTcnLCBudWxsLCAnR0VUJylcclxuICAgIC50aGVuKChyZXM6YW55KTp2b2lkPT57XHJcbiAgICAgIGlmKHJlcyl7XHJcbiAgICAgICAgbGV0IGFycjphbnkgPSByZXMudmFsLm1hcCgoaXRlbTphbnkpOmFueT0+e1xyXG4gICAgICAgICAgbGV0IGNoaWxkcmVuOmFueSA9IGl0ZW0uY2hpbGRyZW4ubWFwKChpdGVtMjphbnkpOmFueT0+e1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIHBUZXh0OiBpdGVtLmRpY05hbWUsXHJcbiAgICAgICAgICAgICAgdGV4dDogaXRlbTIuZGljTmFtZSxcclxuICAgICAgICAgICAgICBpZDogaXRlbTIuaWQsXHJcbiAgICAgICAgICAgICAgcElkOiBpdGVtMi5wSWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHRleHQ6IGl0ZW0uZGljTmFtZSxcclxuICAgICAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgaW5kdXN0cnlCdXNpbmVzc2VzTGlzdDogYXJyXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgZ2V0UGxhdGZvcm1JZExpc3QoKTp2b2lkeyAgLy/ojrflj5bmiYDlsZ7liJvkuJrlubPlj7BcclxuICAgIGh0dHBzLnJlcXVlc3QoYXBpLmN5UGxhdGZvcm1BcGkgKyAnP3hpYVF1SWQ9JyArIHRoaXMuZGF0YS5qZ0Zvcm1EYXRlLnRlbmFudElkLCBudWxsLCAnR0VUJylcclxuICAgIC50aGVuKChyZXM6YW55KTp2b2lkPT57XHJcbiAgICAgIGxldCBsaXN0OmFueSA9IHJlcy5saXN0Lm1hcCgoaXRlbTphbnkpOmFueT0+e1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICB0ZXh0OiBpdGVtLmN5TmFtZSxcclxuICAgICAgICAgIHZhbHVlOiBpdGVtLmlkXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHBsYXRmb3JtSWRMaXN0OiBsaXN0XHJcbiAgICAgIH0pXHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBqZ1Byb3RvY29sQ2hlY2tlZEZuKHZhbHVlOmFueSk6dm9pZHsgIC8v5L2/55So5Y2P6K6uXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBqZ1Byb3RvY29sQ2hlY2tlZDogdmFsdWUuZGV0YWlsXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgZ2V0Y2FyZExpc3QoKTp2b2lkeyAgLy/ojrflj5bor4Hku7bnsbvlnotcclxuICAgIGh0dHBzLnJlcXVlc3QoYXBpLnN1Ym1lbnVEaWMgKyAnP21vaWQ9MycsIG51bGwsICdHRVQnKVxyXG4gICAgLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgbGV0IGxpc3Q6YW55ID0gcmVzLnZhbC5tYXAoKGl0ZW06YW55KTphbnk9PntcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgdGV4dDogaXRlbS5kaWNOYW1lLFxyXG4gICAgICAgICAgdmFsdWU6IGl0ZW0uaWRcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgY2FyZExpc3Q6IGxpc3RcclxuICAgICAgfSlcclxuICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIGdldEdyUGxhdGZvcm1JZExpc3QoKTp2b2lkeyAgLy/ojrflj5blt6XkvZzljZXkvY1cclxuICAgIGh0dHBzLnJlcXVlc3QoYXBpLmN5UGxhdGZvcm1BcGkgKyAnP3hpYVF1SWQ9JyArIHRoaXMuZGF0YS5nckZvcm1EYXRlLnhpYVF1SWQsIG51bGwsICdHRVQnKVxyXG4gICAgLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgbGV0IGxpc3Q6YW55ID0gcmVzLmxpc3QubWFwKChpdGVtOmFueSk6YW55PT57XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHRleHQ6IGl0ZW0uY3lOYW1lLFxyXG4gICAgICAgICAgdmFsdWU6IGl0ZW0uaWRcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgZ3JQbGF0Zm9ybUlkTGlzdDogbGlzdFxyXG4gICAgICB9KVxyXG4gICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgZ2V0VHlwZUlkTGlzdCgpOnZvaWR7ICAvL+aCqOWxnuS6jlxyXG4gICAgaHR0cHMucmVxdWVzdChhcGkuc3VibWVudURpYyArICc/bW9pZD04JywgbnVsbCwgJ0dFVCcpXHJcbiAgICAudGhlbigocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICBsZXQgbGlzdDphbnkgPSByZXMudmFsLm1hcCgoaXRlbTphbnkpOmFueT0+e1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICB0ZXh0OiBpdGVtLmRpY05hbWUsXHJcbiAgICAgICAgICB2YWx1ZTogaXRlbS5pZFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICB0eXBlSWRMaXN0OiBsaXN0XHJcbiAgICAgIH0pXHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcblxyXG4gIG9uVGFiQ2hhbmdlKCk6dm9pZHsgIC8vdGFi5YiH5o2i6Kem5Y+RXHJcblxyXG4gIH0sXHJcblxyXG5cclxuICAvL+acuuaehOazqOWGjFxyXG4gIGpnU2h4eUNvZGVJbnB1dCh2YWx1ZTphbnkpOnZvaWR7ICAvL+e7n+S4gOekvuS8muS/oeeUqOS7o+eggVxyXG4gICAgbGV0IHJlZzphbnkgPSAvXlteX0lPWlNWYS16XFxXXXsyfVxcZHs2fVteX0lPWlNWYS16XFxXXXsxMH0kL2c7XHJcbiAgICBsZXQgc3RyOkJvb2xlYW4gPSByZWcudGVzdCh2YWx1ZS5kZXRhaWwpO1xyXG4gICAgaWYodmFsdWUuZGV0YWlsKXtcclxuICAgICAgaWYoc3RyKXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgW1wiamdGb3JtUnJyb3Iuc2h4eUNvZGVFcnJvclwiXTogJycsXHJcbiAgICAgICAgICBbXCJqZ0Zvcm1EYXRlLnNoeHlDb2RlXCJdOiB2YWx1ZS5kZXRhaWwsXHJcbiAgICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBbXCJqZ0Zvcm1ScnJvci5zaHh5Q29kZUVycm9yXCJdOiAn6K+36L6T5YWl5q2j56Gu57uf5LiA56S+5Lya5L+h55So5Luj56CBJyxcclxuICAgICAgICAgIFtcImpnRm9ybURhdGUuc2h4eUNvZGVcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICAgIGpnVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLnNoeHlDb2RlRXJyb3JcIl06ICcnLFxyXG4gICAgICAgIFtcImpnRm9ybURhdGUuc2h4eUNvZGVcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIGpnQWZ0ZXJSZWFkKGV2ZW50OmFueSk6dm9pZCB7ICAgICAgICAgICAgIC8v57uf5LiA56S+5Lya5L+h55So5Luj56CB5omr5o+P5Lu25LiK5LygXHJcbiAgICBsZXQgX3RoYXQ6YW55ID0gdGhpcztcclxuICAgIGNvbnN0IHsgZmlsZSB9OmFueSA9IGV2ZW50LmRldGFpbDtcclxuICAgIGxldCB0b2tlbjpzdHJpbmcgPSB3eC5nZXRTdG9yYWdlU3luYygndG9rZW4nKTtcclxuICAgIHd4LnVwbG9hZEZpbGUoe1xyXG4gICAgICB1cmw6IGFwaS5maWxlVXJsICsgJz90b2tlbj0nICsgdG9rZW4sXHJcbiAgICAgIGZpbGVQYXRoOiBmaWxlLnBhdGgsXHJcbiAgICAgIG5hbWU6ICdmaWxlcycsXHJcbiAgICAgIGZvcm1EYXRhOiB7IFxyXG4gICAgICAgIGZpbGVQYXRoOiBmaWxlLnBhdGgsXHJcbiAgICAgICAgZmlsZU5hbWU6ICcnXHJcbiAgICAgIH0sc3VjY2VzcyhyZXM6YW55KSB7XHJcbiAgICAgICAgbGV0IGZpbGU6YW55ID0gSlNPTi5wYXJzZShyZXMuZGF0YSk7XHJcbiAgICAgICAgbGV0IGZpbGVMaXN0OmFueSA9IGZpbGUudmFsLm1hcCgoaXRlbTphbnkpOmFueT0+e1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmFtZTogaXRlbS5maWxlTmFtZSxcclxuICAgICAgICAgICAgdXJsOiBhcGkuaW1nVXJsICsgJz90b2tlbj0nICsgdG9rZW4gKyAnJmZpbGVQYXRoPScgKyBpdGVtLmZpbGVQYXRoLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgX3RoYXQuc2V0RGF0YSh7XHJcbiAgICAgICAgICBqZ0ZpbGVMaXN0OiBmaWxlTGlzdCwgICAgICAgICAgICAgICAgICAgICAgLy/mmL7npLpcclxuICAgICAgICAgIFtcImpnRm9ybURhdGUuc2h4eXBpY3NcIl06IGZpbGUudmFsLCAgICAgICAgIC8v5o+Q5LqkXHJcbiAgICAgICAgICBbXCJqZ0Zvcm1ScnJvci5zaHh5cGljc0Vycm9yXCJdOiAnJyxcclxuICAgICAgICAgIGpnVmVyaWZpY2F0aW9uOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgamdEZWxldGUoKTp2b2lkeyAgLy/nu5/kuIDnpL7kvJrkv6HnlKjku6PnoIHmiavmj4/ku7bkuIrkvKDliKDpmaRcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGpnRmlsZUxpc3Q6IFtdLCAgICAgICAgICAgICAgICAgICAvL+a4heepuuS4iuS8oOaYvuekuuWIl+ihqFxyXG4gICAgICBbXCJqZ0Zvcm1EYXRlLnNoeHlwaWNzXCJdOiBbXSwgICAgICAvL+a4heepuuS4iuS8oOWIl+ihqFxyXG4gICAgICBbXCJqZ0Zvcm1ScnJvci5zaHh5cGljc0Vycm9yXCJdOiAn6K+35LiK5Lyg57uf5LiA56S+5Lya5L+h55So5Luj56CB5omr5o+P5Lu2JyxcclxuICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgIH0pXHJcbiAgfSxcclxuICBqZ1Bhc3N3b3JkSW5wdXQodmFsdWU6YW55KTp2b2lkeyAgLy/lr4bnoIFcclxuICAgIGxldCByZWc6YW55ID0gLyg/PS4qKFthLXpBLVpdLiopKSg/PS4qWzAtOV0uKilbYS16QS1aMC05LSovKy5+IUAjJCVeJiooKV17NiwyMH0kLztcclxuICAgIGxldCBzdHI6Qm9vbGVhbiA9IHJlZy50ZXN0KHZhbHVlLmRldGFpbCk7XHJcbiAgICBpZih2YWx1ZS5kZXRhaWwpe1xyXG4gICAgICBpZihzdHIpe1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBbXCJqZ0Zvcm1ScnJvci5wYXNzd29yZEVycm9yXCJdOiAnJyxcclxuICAgICAgICAgIFtcImpnRm9ybURhdGUucGFzc3dvcmRcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICAgIGpnVmVyaWZpY2F0aW9uOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIFtcImpnRm9ybVJycm9yLnBhc3N3b3JkRXJyb3JcIl06ICfmlbDlrZfjgIHoi7HmlofjgIHlrZfnrKbkuKTnp43lj4rku6XkuIo2LTIw5L2NJyxcclxuICAgICAgICAgIFtcImpnRm9ybURhdGUucGFzc3dvcmRcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICAgIGpnVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLnBhc3N3b3JkRXJyb3JcIl06ICcnLFxyXG4gICAgICAgIFtcImpnRm9ybURhdGUucGFzc3dvcmRcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIGpnUmVwZWF0UGFzc3dvcmRJbnB1dCh2YWx1ZTphbnkpOnZvaWR7ICAvL+ehruiupOWvhueggVxyXG4gICAgaWYodmFsdWUuZGV0YWlsKXtcclxuICAgICAgaWYodmFsdWUuZGV0YWlsICE9IHRoaXMuZGF0YS5qZ0Zvcm1EYXRlLnBhc3N3b3JkKXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgW1wiamdGb3JtUnJyb3IudHJ1ZXdvcmRFcnJvclwiXTogJ+S4pOasoei+k+WFpeeahOWvhueggeS4jeS4gOiHtCcsXHJcbiAgICAgICAgICBbXCJqZ0Zvcm1EYXRlLnRydWV3b3JkXCJdOiB2YWx1ZS5kZXRhaWwsXHJcbiAgICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBbXCJqZ0Zvcm1ScnJvci50cnVld29yZEVycm9yXCJdOiAnJyxcclxuICAgICAgICAgIFtcImpnRm9ybURhdGUudHJ1ZXdvcmRcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICAgIGpnVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLnRydWV3b3JkRXJyb3JcIl06ICcnLFxyXG4gICAgICAgIFtcImpnRm9ybURhdGUudHJ1ZXdvcmRcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIGpnUXlOYW1lSW5wdXQodmFsdWU6YW55KTp2b2lkeyAgLy/ljZXkvY3lkI3np7BcclxuICAgIGlmKHZhbHVlLmRldGFpbCl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiamdGb3JtUnJyb3IucXlOYW1lRXJyb3JcIl06ICcnLFxyXG4gICAgICAgIFtcImpnRm9ybURhdGUucXlOYW1lXCJdOiB2YWx1ZS5kZXRhaWwsXHJcbiAgICAgICAgamdWZXJpZmljYXRpb246IHRydWVcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIGpnRGFud2VpRm4odmFsdWU6YW55KTp2b2lkeyAgLy/ljZXkvY3nsbvlnotcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIFtcImpnRm9ybVJycm9yLnF5TmF0dXJlSWRFcnJvclwiXTogJycsXHJcbiAgICAgIFtcImpnRm9ybURhdGUucXlOYXR1cmVJZFwiXTogdmFsdWUuZGV0YWlsLFxyXG4gICAgICBqZ1ZlcmlmaWNhdGlvbjogdHJ1ZVxyXG4gICAgfSlcclxuICB9LFxyXG4gIGpnVGVuYW50Rm4odmFsdWU6YW55KTp2b2lkeyAgLy/miYDlnKjlnLDljLpcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIFtcImpnRm9ybVJycm9yLnRlbmFudElkRXJyb3JcIl06ICcnLFxyXG4gICAgICBbXCJqZ0Zvcm1EYXRlLnRlbmFudElkXCJdOiB2YWx1ZS5kZXRhaWwsXHJcbiAgICAgIGpnVmVyaWZpY2F0aW9uOiB0cnVlLFxyXG4gICAgICBbXCJqZ0Zvcm1EYXRlLnBsYXRmb3JtSWQgXCJdOiAnJ1xyXG4gICAgfSlcclxuICAgIHRoaXMuZ2V0UGxhdGZvcm1JZExpc3QoKTsgIC8v6I635Y+W5omA5bGe5Yib5Lia5bmz5Y+wXHJcbiAgfSxcclxuICBqZ05hdkl0ZW0oZGF0YTphbnkpOnZvaWR7ICAvL+ihjOS4muS6p+S4mu+8iOW3puS+p+WvvOiIqueCueWHu+aXtu+8jOinpuWPkeeahOS6i+S7tu+8iVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgamdJbmRleDogZGF0YS5kZXRhaWwuaW5kZXggfHwgMCxcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgamdJbmR1c3RyeUl0ZW0oZGF0YTphbnkpOnZvaWQgeyAgLy/ooYzkuJrkuqfkuJrvvIjlj7PkvqfpgInmi6npobnooqvngrnlh7vml7bvvIzkvJrop6blj5HnmoTkuovku7bvvIlcclxuICAgIGxldCBpbmR1c3RyeUxpc3Q6YW55ID0gW1xyXG4gICAgICB7XHJcbiAgICAgICAgY3lUeXBlSWQ6IGRhdGEuZGV0YWlsLnBJZCxcclxuICAgICAgICBoeVR5cGVJZDogZGF0YS5kZXRhaWwuaWRcclxuICAgICAgfVxyXG4gICAgXVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgamdJbmR1c3RyeUlkOiBkYXRhLmRldGFpbC5pZCxcclxuICAgICAgW1wiamdGb3JtRGF0ZS5pbmR1c3RyeUJ1c2luZXNzZXNcIl06IGluZHVzdHJ5TGlzdCxcclxuICAgICAgamdJbmR1c3RyeUJ1c2luZXNzZXM6IGRhdGEuZGV0YWlsLnBUZXh0ICsgJyAvICcgKyBkYXRhLmRldGFpbC50ZXh0LFxyXG4gICAgICBbXCJqZ0Zvcm1ScnJvci5pbmR1c3RyeUJ1c2luZXNzZXNFcnJvclwiXTogJycsXHJcbiAgICAgIGpnVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgfSlcclxuICB9LFxyXG4gIGpnUXlBZGRyZXNzKHZhbHVlOmFueSk6dm9pZHsgIC8v5Y2V5L2N6K+m57uG5Zyw5Z2AXHJcbiAgICBpZih2YWx1ZS5kZXRhaWwpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLnF5QWRkcmVzc0Vycm9yXCJdOiAnJyxcclxuICAgICAgICBbXCJqZ0Zvcm1EYXRlLnF5QWRkcmVzc1wiXTogdmFsdWUuZGV0YWlsLFxyXG4gICAgICAgIGpnVmVyaWZpY2F0aW9uOiB0cnVlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICBqZ0xlZ2FsTmFtZSh2YWx1ZTphbnkpOnZvaWR7ICAvL+azleS6uuWnk+WQjVxyXG4gICAgaWYodmFsdWUuZGV0YWlsKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJqZ0Zvcm1EYXRlLmxlZ2FsTmFtZVwiXTogdmFsdWUuZGV0YWlsXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICBqZ0xlZ2FsSWQodmFsdWU6YW55KTp2b2lkeyAgLy/ms5Xkurrouqvku73or4Hlj7dcclxuICAgIC8v6Lqr5Lu96K+B5Y+356CB5Li6MTXkvY3miJbogIUxOOS9je+8jDE15L2N5pe25YWo5Li65pWw5a2X77yMMTjkvY3liY0xN+S9jeS4uuaVsOWtl++8jOacgOWQjuS4gOS9jeaYr+agoemqjOS9je+8jOWPr+iDveS4uuaVsOWtl+aIluWtl+esplhcclxuICAgIGxldCByZWc6YW55ID0gLyheXFxkezE1fSQpfCheXFxkezE4fSQpfCheXFxkezE3fShcXGR8WHx4KSQpLztcclxuICAgIGxldCBzdHI6Qm9vbGVhbiA9IHJlZy50ZXN0KHZhbHVlLmRldGFpbCk7XHJcbiAgICBpZihzdHIpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLmxlZ2FsSWRFcnJvclwiXTogJycsXHJcbiAgICAgICAgW1wiamdGb3JtRGF0ZS5sZWdhbElkXCJdOiB2YWx1ZS5kZXRhaWwsXHJcbiAgICAgICAgamdWZXJpZmljYXRpb246IHRydWVcclxuICAgICAgfSlcclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLmxlZ2FsSWRFcnJvclwiXTogJ+ivt+i+k+WFpeato+ehrueahOazleS6uui6q+S7veivgeWPtycsXHJcbiAgICAgICAgW1wiamdGb3JtRGF0ZS5sZWdhbElkXCJdOiB2YWx1ZS5kZXRhaWwsXHJcbiAgICAgICAgamdWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICBqZ0xpbmtQZXJzb24odmFsdWU6YW55KTp2b2lkeyAgLy/ljZXkvY3ogZTns7vkurpcclxuICAgIGlmKHZhbHVlLmRldGFpbCl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiamdGb3JtUnJyb3IubGlua1BlcnNvbkVycm9yXCJdOiAnJyxcclxuICAgICAgICBbXCJqZ0Zvcm1EYXRlLmxpbmtQZXJzb25cIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogdHJ1ZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgamdMaW5rVGVsKHZhbHVlOmFueSk6dm9pZHsgIC8v6IGU57O755S16K+dXHJcbiAgICBsZXQgcmVnOmFueSA9IC9eKCgxWzAtOV17MTB9KXwoKCgoWzAtOV17M30tKT9bMC05XXs4fSl8KChbMC05XXs0fS0pP1swLTldezd9KSkoLVswLTldezEsNH0pPykpJC87XHJcbiAgICBsZXQgc3RyOkJvb2xlYW4gPSByZWcudGVzdCh2YWx1ZS5kZXRhaWwpO1xyXG4gICAgaWYodmFsdWUuZGV0YWlsKXtcclxuICAgICAgaWYoc3RyKXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgW1wiamdGb3JtUnJyb3IubGlua1RlbEVycm9yXCJdOiAnJyxcclxuICAgICAgICAgIFtcImpnRm9ybURhdGUubGlua1RlbFwiXTogdmFsdWUuZGV0YWlsLFxyXG4gICAgICAgICAgamdWZXJpZmljYXRpb246IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgW1wiamdGb3JtUnJyb3IubGlua1RlbEVycm9yXCJdOiAn6K+36L6T5YWl5q2j56Gu55qE6IGU57O755S16K+dJyxcclxuICAgICAgICAgIFtcImpnRm9ybURhdGUubGlua1RlbFwiXTogdmFsdWUuZGV0YWlsLFxyXG4gICAgICAgICAgamdWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiamdGb3JtUnJyb3IubGlua1RlbEVycm9yXCJdOiAnJyxcclxuICAgICAgICBbXCJqZ0Zvcm1EYXRlLmxpbmtUZWxcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIGpnVmVyaWZ5Q29kZSh2YWx1ZTphbnkpOnZvaWR7ICAvL+mqjOivgeeggVxyXG4gICAgaWYodmFsdWUuZGV0YWlsKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJqZ0Zvcm1ScnJvci52ZXJpZnlDb2RlRXJyb3JcIl06ICcnLFxyXG4gICAgICAgIFtcImpnRm9ybURhdGUudmVyaWZ5Q29kZVwiXTogdmFsdWUuZGV0YWlsLFxyXG4gICAgICAgIGpnVmVyaWZpY2F0aW9uOiB0cnVlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICBqZ0VtYWlsKHZhbHVlOmFueSk6dm9pZHsgIC8v55S15a2Q6YKu566xXHJcbiAgICBsZXQgcmVnOmFueSA9IC9eKFthLXpBLVowLTlfLV0pK0AoW2EtekEtWjAtOV8tXSkrKC5bYS16QS1aMC05Xy1dKSsvO1xyXG4gICAgbGV0IHN0cjpCb29sZWFuID0gcmVnLnRlc3QodmFsdWUuZGV0YWlsKTtcclxuICAgIGlmKHZhbHVlLmRldGFpbCl7XHJcbiAgICAgIGlmKHN0cil7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIFtcImpnRm9ybVJycm9yLmVtYWlsRXJyb3JcIl06ICcnLFxyXG4gICAgICAgICAgW1wiamdGb3JtRGF0ZS5lbWFpbFwiXTogdmFsdWUuZGV0YWlsLFxyXG4gICAgICAgICAgamdWZXJpZmljYXRpb246IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgW1wiamdGb3JtUnJyb3IuZW1haWxFcnJvclwiXTogJ+ivt+i+k+WFpeato+ehrueahOeUteWtkOmCrueusScsXHJcbiAgICAgICAgICBbXCJqZ0Zvcm1EYXRlLmVtYWlsXCJdOiB2YWx1ZS5kZXRhaWwsXHJcbiAgICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJqZ0Zvcm1ScnJvci5lbWFpbEVycm9yXCJdOiAnJyxcclxuICAgICAgICBbXCJqZ0Zvcm1EYXRlLmVtYWlsXCJdOiB2YWx1ZS5kZXRhaWwsXHJcbiAgICAgICAgamdWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICBqZ1BsYXRmb3JtT3BlbigpOnZvaWR7ICAvL+aJgOWxnuWIm+S4muW5s+WPsOaJk+W8gOS6i+S7tlxyXG4gICAgaWYodGhpcy5kYXRhLnBsYXRmb3JtSWRMaXN0Lmxlbmd0aCA9PSAwKXtcclxuICAgICAgVG9hc3QoJ+ivt+WFiOmAieaLqeaJgOWcqOWcsOWMuu+8gScpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgamdQbGF0Zm9ybUZuKHZhbHVlOmFueSk6dm9pZHsgIC8v5omA5bGe5Yib5Lia5bmz5Y+wXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBbXCJqZ0Zvcm1EYXRlLnBsYXRmb3JtSWRcIl06IHZhbHVlLmRldGFpbFxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuXHJcblxyXG5cclxuICBqZ1N1Ym1pdEZuKCk6dm9pZHsgIC8v5py65p6E5rOo5YaMXHJcbiAgICAvL+ivt+i+k+WFpee7n+S4gOekvuS8muS/oeeUqOS7o+eggVxyXG4gICAgaWYodGhpcy5kYXRhLmpnRm9ybURhdGUuc2h4eUNvZGUgPT0gJycpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLnNoeHlDb2RlRXJyb3JcIl06J+ivt+i+k+WFpee7n+S4gOekvuS8muS/oeeUqOS7o+eggScsXHJcbiAgICAgICAgamdWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvL+e7n+S4gOekvuS8muS/oeeUqOS7o+eggeaJq+aPj+S7tuS4iuS8oFxyXG4gICAgaWYodGhpcy5kYXRhLmpnRm9ybURhdGUuc2h4eXBpY3MubGVuZ3RoID09IDApe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLnNoeHlwaWNzRXJyb3JcIl06J+ivt+S4iuS8oOe7n+S4gOekvuS8muS/oeeUqOS7o+eggeaJq+aPj+S7ticsXHJcbiAgICAgICAgamdWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvL+WvhueggVxyXG4gICAgaWYodGhpcy5kYXRhLmpnRm9ybURhdGUucGFzc3dvcmQgPT0gJycpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLnBhc3N3b3JkRXJyb3JcIl06J+ivt+i+k+WFpeWvhueggScsXHJcbiAgICAgICAgamdWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvL+ehruiupOWvhueggVxyXG4gICAgaWYodGhpcy5kYXRhLmpnRm9ybURhdGUudHJ1ZXdvcmQgPT0gJycpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLnRydWV3b3JkRXJyb3JcIl06J+ivt+WGjeasoeehruiupOWvhueggScsXHJcbiAgICAgICAgamdWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvL+WNleS9jeWQjeensFxyXG4gICAgaWYodGhpcy5kYXRhLmpnRm9ybURhdGUucXlOYW1lID09ICcnKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJqZ0Zvcm1ScnJvci5xeU5hbWVFcnJvclwiXTon6K+36L6T5YWl5Y2V5L2N5ZCN56ewJyxcclxuICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIC8v5Y2V5L2N57G75Z6LXHJcbiAgICBpZih0aGlzLmRhdGEuamdGb3JtRGF0ZS5xeU5hdHVyZUlkID09ICcnKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJqZ0Zvcm1ScnJvci5xeU5hdHVyZUlkRXJyb3JcIl06J+ivt+mAieaLqeWNleS9jeexu+WeiycsXHJcbiAgICAgICAgamdWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvL+aJgOWcqOWcsOWMulxyXG4gICAgaWYodGhpcy5kYXRhLmpnRm9ybURhdGUudGVuYW50SWQgPT0gJycpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLnRlbmFudElkRXJyb3JcIl06J+ivt+mAieaLqeaJgOWcqOWcsOWMuicsXHJcbiAgICAgICAgamdWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvL+S6p+S4muOAgeihjOS4mlxyXG4gICAgaWYodGhpcy5kYXRhLmpnRm9ybURhdGUudGVuYW50SWQubGVuZ3RoID09IDApe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLmluZHVzdHJ5QnVzaW5lc3Nlc0Vycm9yXCJdOifor7fpgInmi6nkuqfkuJov6KGM5LiaJyxcclxuICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIC8v5Y2V5L2N6K+m57uG5Zyw5Z2AXHJcbiAgICBpZih0aGlzLmRhdGEuamdGb3JtRGF0ZS5xeUFkZHJlc3MgPT0gJycpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLnF5QWRkcmVzc0Vycm9yXCJdOifor7fovpPlhaXljZXkvY3or6bnu4blnLDlnYAnLFxyXG4gICAgICAgIGpnVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy/ljZXkvY3ogZTns7vkurpcclxuICAgIGlmKHRoaXMuZGF0YS5qZ0Zvcm1EYXRlLmxpbmtQZXJzb24gPT0gJycpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLnF5QWRkcmVzc0Vycm9yXCJdOifor7fovpPlhaXljZXkvY3ogZTns7vkuronLFxyXG4gICAgICAgIGpnVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy/ogZTns7vnlLXor51cclxuICAgIGlmKHRoaXMuZGF0YS5qZ0Zvcm1EYXRlLmxpbmtQZXJzb24gPT0gJycpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLmxpbmtUZWxFcnJvclwiXTon6K+36L6T5YWl6IGU57O755S16K+dJyxcclxuICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIC8v6aqM6K+B56CBXHJcbiAgICBpZih0aGlzLmRhdGEuamdGb3JtRGF0ZS52ZXJpZnlDb2RlID09ICcnKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJqZ0Zvcm1ScnJvci52ZXJpZnlDb2RlRXJyb3JcIl06J+ivt+i+k+WFpemqjOivgeeggScsXHJcbiAgICAgICAgamdWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvL+eUteWtkOmCrueusVxyXG4gICAgaWYodGhpcy5kYXRhLmpnRm9ybURhdGUuZW1haWwgPT0gJycpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLmVtYWlsRXJyb3JcIl06J+ivt+i+k+WFpeeUteWtkOmCrueusScsXHJcbiAgICAgICAgamdWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvL+mYheivu+WNj+iurlxyXG4gICAgaWYodGhpcy5kYXRhLmpnVmVyaWZpY2F0aW9uID09IGZhbHNlKXtcclxuICAgICAgVG9hc3QoJ+ivt+aKiuW/heWhq+S/oeaBr+Whq+WGmeWujOaVtO+8gScpO1xyXG4gICAgfWVsc2UgaWYodGhpcy5kYXRhLmpnUHJvdG9jb2xDaGVja2VkID09IGZhbHNlKXtcclxuICAgICAgVG9hc3QoJ+ivt+mYheivu+W5tuaOpeWPl+W6lOeUqOS9v+eUqOWNj+iuru+8gScpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIGh0dHBzLnJlcXVlc3QoYXBpLmVudGVyUmVnLCB0aGlzLmRhdGEuamdGb3JtRGF0ZSwgJ1BPU1QnKVxyXG4gICAgICAudGhlbigoKTp2b2lkPT57XHJcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICB1cmw6ICcuLi9sb2dpbkZvcm0vbG9naW5Gb3JtJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgICAgVG9hc3QoZXJyKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgamdWZXJpZnlDb2RlRm4oKTp2b2lkeyAgLy/ojrflj5bpqozor4HnoIFcclxuICAgIGlmKHRoaXMuZGF0YS5qZ0Zvcm1EYXRlLmxpbmtUZWwgIT0gJycpe1xyXG4gICAgICBodHRwcy5yZXF1ZXN0KGFwaS5nZXRDb2RlICsgXCI/dGVsZXBob25lPVwiICsgdGhpcy5kYXRhLmpnRm9ybURhdGUubGlua1RlbCwgbnVsbCwgJ0dFVCcpXHJcbiAgICAgIC50aGVuKCgpOnZvaWQ9PntcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgamdWZXJpZnlDb2RlVGltZTogJzYwJyxcclxuICAgICAgICAgIGpnRGlzYWJsZWQ6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICAgIGxldCBzZXRUaW1lOmFueSA9IHNldEludGVydmFsKCgpOnZvaWQ9PntcclxuICAgICAgICAgIGxldCBzdHI6YW55ID0gcGFyc2VJbnQodGhpcy5kYXRhLmpnVmVyaWZ5Q29kZVRpbWUpIC0gMTtcclxuICAgICAgICAgIGlmKHN0ciA+IDApe1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgIGpnVmVyaWZ5Q29kZVRpbWU6IHN0clxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoc2V0VGltZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgamdWZXJpZnlDb2RlVGltZTogJ+iOt+WPlumqjOivgeeggScsXHJcbiAgICAgICAgICAgICAgamdEaXNhYmxlZDogZmFsc2VcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LDEwMDApXHJcbiAgICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgICAgVG9hc3QoZXJyKTtcclxuICAgICAgfSk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgVG9hc3QoJ+ivt+WFiOWhq+WGmeiBlOezu+eUteivne+8gScpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgamdDeFBsYXRmb3JtKGV2ZW50OmFueSk6dm9pZHsgIC8v5piv5ZCm5Yib5paw5bmz5Y+w5Li75L2T5Y2V5L2NXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBbXCJqZ0Zvcm1EYXRlLmlzQ3hQbGF0Zm9ybVwiXTogZXZlbnQuZGV0YWlsLFxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBqZ0N5UGxhdGZvcm0oZXZlbnQ6YW55KTp2b2lkeyAgLy/mmK/lkKbliJvkuJrlubPlj7DkuLvkvZPljZXkvY1cclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIFtcImpnRm9ybURhdGUuaXNDeVBsYXRmb3JtXCJdOiBldmVudC5kZXRhaWwsXHJcbiAgICB9KTtcclxuICB9LFxyXG4gIFxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgLy/kuKrkurrms6jlhoxcclxuICBnckNhcmRUeXBlRm4odmFsdWU6YW55KTp2b2lkeyAgLy/ljZXkvY3nsbvlnotcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIFtcImdyRm9ybVJycm9yLmNhcmRUeXBlSWRScnJvclwiXTogJycsXHJcbiAgICAgIFtcImdyRm9ybURhdGUuY2FyZFR5cGVJZFwiXTogdmFsdWUuZGV0YWlsLFxyXG4gICAgICBnclZlcmlmaWNhdGlvbjogdHJ1ZVxyXG4gICAgfSlcclxuICB9LFxyXG4gIGpnQ2FyZE51bSh2YWx1ZTphbnkpOnZvaWR7ICAvL+ivgeS7tuWPt+eggVxyXG4gICAgaWYodmFsdWUuZGV0YWlsKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJnckZvcm1ScnJvci5jYXJkTnVtUnJyb3JcIl06ICcnLFxyXG4gICAgICAgIFtcImdyRm9ybURhdGUuY2FyZE51bVwiXTogdmFsdWUuZGV0YWlsLFxyXG4gICAgICAgIGdyVmVyaWZpY2F0aW9uOiB0cnVlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICBnckFmdGVyUmVhZChldmVudDphbnkpOnZvaWQgeyAgICAgICAgICAgICAvL+ivgeS7tuaJq+aPj+S7tuS4iuS8oFxyXG4gICAgbGV0IF90aGF0OmFueSA9IHRoaXM7XHJcbiAgICBjb25zdCB7IGZpbGUgfTphbnkgPSBldmVudC5kZXRhaWw7XHJcbiAgICBsZXQgdG9rZW46c3RyaW5nID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3Rva2VuJyk7XHJcbiAgICB3eC51cGxvYWRGaWxlKHtcclxuICAgICAgdXJsOiBhcGkuZmlsZVVybCArICc/dG9rZW49JyArIHRva2VuLFxyXG4gICAgICBmaWxlUGF0aDogZmlsZS5wYXRoLFxyXG4gICAgICBuYW1lOiAnZmlsZXMnLFxyXG4gICAgICBmb3JtRGF0YTogeyBcclxuICAgICAgICBmaWxlUGF0aDogZmlsZS5wYXRoLFxyXG4gICAgICAgIGZpbGVOYW1lOiAnJ1xyXG4gICAgICB9LHN1Y2Nlc3MocmVzOmFueSkge1xyXG4gICAgICAgIGxldCBmaWxlOmFueSA9IEpTT04ucGFyc2UocmVzLmRhdGEpO1xyXG4gICAgICAgIGxldCBmaWxlTGlzdDphbnkgPSBmaWxlLnZhbC5tYXAoKGl0ZW06YW55KTphbnk9PntcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG5hbWU6IGl0ZW0uZmlsZU5hbWUsXHJcbiAgICAgICAgICAgIHVybDogYXBpLmltZ1VybCArICc/dG9rZW49JyArIHRva2VuICsgJyZmaWxlUGF0aD0nICsgaXRlbS5maWxlUGF0aCxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIF90aGF0LnNldERhdGEoe1xyXG4gICAgICAgICAgZ3JGaWxlTGlzdDogZmlsZUxpc3QsICAgICAgICAgICAgICAgICAgICAgIC8v5pi+56S6XHJcbiAgICAgICAgICBbXCJnckZvcm1EYXRlLmNhcmRQaWNcIl06IGZpbGUudmFsLCAgICAgICAgIC8v5o+Q5LqkXHJcbiAgICAgICAgICBbXCJnckZvcm1ScnJvci5jYXJkUGljRXJyb3JcIl06ICcnLFxyXG4gICAgICAgICAgZ3JWZXJpZmljYXRpb246IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBnckRlbGV0ZSgpOnZvaWR7ICAvL+ivgeS7tuaJq+aPj+S7tuS4iuS8oOWIoOmZpFxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgZ3JGaWxlTGlzdDogW10sICAgICAgICAgICAgICAgICAgIC8v5riF56m65LiK5Lyg5pi+56S65YiX6KGoXHJcbiAgICAgIFtcImdyRm9ybURhdGUuY2FyZFBpY1wiXTogW10sICAgICAgLy/muIXnqbrkuIrkvKDliJfooahcclxuICAgICAgW1wiZ3JGb3JtUnJyb3IuY2FyZFBpY0Vycm9yXCJdOiAn6K+35LiK5Lyg6K+B5Lu25omr5o+P5Lu2JyxcclxuICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgIH0pXHJcbiAgfSxcclxuICBnclBhc3N3b3JkSW5wdXQodmFsdWU6YW55KTp2b2lkeyAgLy/lr4bnoIFcclxuICAgIGxldCByZWc6YW55ID0gLyg/PS4qKFthLXpBLVpdLiopKSg/PS4qWzAtOV0uKilbYS16QS1aMC05LSovKy5+IUAjJCVeJiooKV17NiwyMH0kLztcclxuICAgIGxldCBzdHI6Qm9vbGVhbiA9IHJlZy50ZXN0KHZhbHVlLmRldGFpbCk7XHJcbiAgICBpZih2YWx1ZS5kZXRhaWwpe1xyXG4gICAgICBpZihzdHIpe1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBbXCJnckZvcm1ScnJvci5wYXNzd29yZEVycm9yXCJdOiAnJyxcclxuICAgICAgICAgIFtcImdyRm9ybURhdGUucGFzc3dvcmRcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICAgIGdyVmVyaWZpY2F0aW9uOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIFtcImdyRm9ybVJycm9yLnBhc3N3b3JkRXJyb3JcIl06ICfmlbDlrZfjgIHoi7HmlofjgIHlrZfnrKbkuKTnp43lj4rku6XkuIo2LTIw5L2NJyxcclxuICAgICAgICAgIFtcImdyRm9ybURhdGUucGFzc3dvcmRcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICAgIGdyVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImdyRm9ybVJycm9yLnBhc3N3b3JkRXJyb3JcIl06ICcnLFxyXG4gICAgICAgIFtcImdyRm9ybURhdGUucGFzc3dvcmRcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICBnclZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIGdyUmVwZWF0UGFzc3dvcmRJbnB1dCh2YWx1ZTphbnkpOnZvaWR7ICAvL+ehruiupOWvhueggVxyXG4gICAgaWYodmFsdWUuZGV0YWlsKXtcclxuICAgICAgaWYodmFsdWUuZGV0YWlsICE9IHRoaXMuZGF0YS5nckZvcm1EYXRlLnBhc3N3b3JkKXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgW1wiZ3JGb3JtUnJyb3IudHJ1ZXdvcmRFcnJvclwiXTogJ+S4pOasoei+k+WFpeeahOWvhueggeS4jeS4gOiHtCcsXHJcbiAgICAgICAgICBbXCJnckZvcm1EYXRlLnRydWV3b3JkXCJdOiB2YWx1ZS5kZXRhaWwsXHJcbiAgICAgICAgICBnclZlcmlmaWNhdGlvbjogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBbXCJnckZvcm1ScnJvci50cnVld29yZEVycm9yXCJdOiAnJyxcclxuICAgICAgICAgIFtcImdyRm9ybURhdGUudHJ1ZXdvcmRcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICAgIGdyVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImdyRm9ybVJycm9yLnRydWV3b3JkRXJyb3JcIl06ICcnLFxyXG4gICAgICAgIFtcImdyRm9ybURhdGUudHJ1ZXdvcmRcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICBnclZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIGdyUmVhbE5hbWUodmFsdWU6YW55KTp2b2lkeyAgLy/lp5PlkI1cclxuICAgIGlmKHZhbHVlLmRldGFpbCl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiZ3JGb3JtUnJyb3IucmVhbE5hbWVScnJvclwiXTogJycsXHJcbiAgICAgICAgW1wiZ3JGb3JtRGF0ZS5yZWFsTmFtZVwiXTogdmFsdWUuZGV0YWlsLFxyXG4gICAgICAgIGdyVmVyaWZpY2F0aW9uOiB0cnVlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICBnclBob25lTnVtKHZhbHVlOmFueSk6dm9pZHsgIC8v6IGU57O755S16K+dXHJcbiAgICBsZXQgcmVnOmFueSA9IC9eKCgxWzAtOV17MTB9KXwoKCgoWzAtOV17M30tKT9bMC05XXs4fSl8KChbMC05XXs0fS0pP1swLTldezd9KSkoLVswLTldezEsNH0pPykpJC87XHJcbiAgICBsZXQgc3RyOkJvb2xlYW4gPSByZWcudGVzdCh2YWx1ZS5kZXRhaWwpO1xyXG4gICAgaWYodmFsdWUuZGV0YWlsKXtcclxuICAgICAgaWYoc3RyKXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgW1wiZ3JGb3JtUnJyb3IucGhvbmVOdW1FcnJvclwiXTogJycsXHJcbiAgICAgICAgICBbXCJnckZvcm1EYXRlLnBob25lTnVtXCJdOiB2YWx1ZS5kZXRhaWwsXHJcbiAgICAgICAgICBnclZlcmlmaWNhdGlvbjogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBbXCJnckZvcm1ScnJvci5waG9uZU51bUVycm9yXCJdOiAn6K+36L6T5YWl5q2j56Gu55qE6IGU57O755S16K+dJyxcclxuICAgICAgICAgIFtcImdyRm9ybURhdGUucGhvbmVOdW1cIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICAgIGdyVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImdyRm9ybVJycm9yLnBob25lTnVtRXJyb3JcIl06ICcnLFxyXG4gICAgICAgIFtcImdyRm9ybURhdGUucGhvbmVOdW1cIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICBnclZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIGdyVmVyaWZ5Q29kZSh2YWx1ZTphbnkpOnZvaWR7ICAvL+mqjOivgeeggVxyXG4gICAgaWYodmFsdWUuZGV0YWlsKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJqZ0Zvcm1ScnJvci52ZXJpZnlDb2RlRXJyb3JcIl06ICcnLFxyXG4gICAgICAgIFtcImpnRm9ybURhdGUudmVyaWZ5Q29kZVwiXTogdmFsdWUuZGV0YWlsLFxyXG4gICAgICAgIGpnVmVyaWZpY2F0aW9uOiB0cnVlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICBnclZlcmlmeUNvZGVGbigpOnZvaWR7ICAvL+iOt+WPlumqjOivgeeggVxyXG4gICAgaWYodGhpcy5kYXRhLmdyRm9ybURhdGUucGhvbmVOdW0gIT0gJycpe1xyXG4gICAgICBodHRwcy5yZXF1ZXN0KGFwaS5nZXRDb2RlICsgXCI/dGVsZXBob25lPVwiICsgdGhpcy5kYXRhLmdyRm9ybURhdGUucGhvbmVOdW0sIG51bGwsICdHRVQnKVxyXG4gICAgICAudGhlbigoKTp2b2lkPT57XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIGdyVmVyaWZ5Q29kZVRpbWU6ICc2MCcsXHJcbiAgICAgICAgICBnckRpc2FibGVkOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgICBsZXQgc2V0VGltZTphbnkgPSBzZXRJbnRlcnZhbCgoKTp2b2lkPT57XHJcbiAgICAgICAgICBsZXQgc3RyOmFueSA9IHBhcnNlSW50KHRoaXMuZGF0YS5nclZlcmlmeUNvZGVUaW1lKSAtIDE7XHJcbiAgICAgICAgICBpZihzdHIgPiAwKXtcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICBnclZlcmlmeUNvZGVUaW1lOiBzdHJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHNldFRpbWUpO1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgIGdyVmVyaWZ5Q29kZVRpbWU6ICfojrflj5bpqozor4HnoIEnLFxyXG4gICAgICAgICAgICAgIGdyRGlzYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSwxMDAwKVxyXG4gICAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICAgIFRvYXN0KGVycik7XHJcbiAgICAgIH0pO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIFRvYXN0KCfor7flhYjloavlhpnogZTns7vnlLXor53vvIEnKTtcclxuICAgIH1cclxuICB9LFxyXG4gIGdyRW1haWwodmFsdWU6YW55KTp2b2lkeyAgLy/nlLXlrZDpgq7nrrFcclxuICAgIGxldCByZWc6YW55ID0gL14oW2EtekEtWjAtOV8tXSkrQChbYS16QS1aMC05Xy1dKSsoLlthLXpBLVowLTlfLV0pKy87XHJcbiAgICBsZXQgc3RyOkJvb2xlYW4gPSByZWcudGVzdCh2YWx1ZS5kZXRhaWwpO1xyXG4gICAgaWYodmFsdWUuZGV0YWlsKXtcclxuICAgICAgaWYoc3RyKXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgW1wiZ3JGb3JtUnJyb3IuZW1haWxFcnJvclwiXTogJycsXHJcbiAgICAgICAgICBbXCJnckZvcm1EYXRlLmVtYWlsXCJdOiB2YWx1ZS5kZXRhaWwsXHJcbiAgICAgICAgICBnclZlcmlmaWNhdGlvbjogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBbXCJnckZvcm1ScnJvci5lbWFpbEVycm9yXCJdOiAn6K+36L6T5YWl5q2j56Gu55qE55S15a2Q6YKu566xJyxcclxuICAgICAgICAgIFtcImdyRm9ybURhdGUuZW1haWxcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICAgIGdyVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImdyRm9ybVJycm9yLmVtYWlsRXJyb3JcIl06ICcnLFxyXG4gICAgICAgIFtcImdyRm9ybURhdGUuZW1haWxcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICBnclZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIGdyeGlhUXVGbih2YWx1ZTphbnkpOnZvaWR7ICAvL+aJgOWcqOWcsOWMulxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgW1wiZ3JGb3JtUnJyb3IueGlhUXVJZEVycm9yXCJdOiAnJyxcclxuICAgICAgW1wiZ3JGb3JtRGF0ZS54aWFRdUlkXCJdOiB2YWx1ZS5kZXRhaWwsXHJcbiAgICAgIGdyVmVyaWZpY2F0aW9uOiB0cnVlLFxyXG4gICAgICBbXCJnckZvcm1EYXRlLmRhbldlaUlkXCJdOiAnJ1xyXG4gICAgfSlcclxuICAgIHRoaXMuZ2V0R3JQbGF0Zm9ybUlkTGlzdCgpOyAgLy/ojrflj5blt6XkvZzljZXkvY1cclxuICB9LFxyXG4gIGdyUGxhdGZvcm1PcGVuKCk6dm9pZHsgIC8v5omA5bGe5Yib5Lia5bmz5Y+w5omT5byA5LqL5Lu2XHJcbiAgICBpZih0aGlzLmRhdGEuZ3JQbGF0Zm9ybUlkTGlzdC5sZW5ndGggPT0gMCl7XHJcbiAgICAgIFRvYXN0KCfor7flhYjpgInmi6nmiYDlnKjlnLDljLrvvIEnKTtcclxuICAgIH1cclxuICB9LFxyXG4gIGdyUGxhdGZvcm1Gbih2YWx1ZTphbnkpOnZvaWR7ICAvL+aJgOWxnuWIm+S4muW5s+WPsFxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgW1wiZ3JGb3JtRGF0ZS5kYW5XZWlJZFwiXTogdmFsdWUuZGV0YWlsXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgZ3JReUFkZHJlc3ModmFsdWU6YW55KTp2b2lkeyAgLy/lt6XkvZzljZXkvY3or6bnu4blnLDlnYBcclxuICAgIGlmKHZhbHVlLmRldGFpbCl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiZ3JGb3JtRGF0ZS5kYW5XZWlBZGRyZXNzXCJdOiB2YWx1ZS5kZXRhaWxcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIGdyQ3VyTG9jYXRpb24odmFsdWU6YW55KTp2b2lkeyAgLy/njrDlsYXkvY/lnLDor6bnu4blnLDlnYBcclxuICAgIGlmKHZhbHVlLmRldGFpbCl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiZ3JGb3JtUnJyb3IuY3VyTG9jYXRpb25FcnJvclwiXTogJycsXHJcbiAgICAgICAgW1wiZ3JGb3JtRGF0ZS5jdXJMb2NhdGlvblwiXTogdmFsdWUuZGV0YWlsLFxyXG4gICAgICAgIGdyVmVyaWZpY2F0aW9uOiB0cnVlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICBncklzTGl1WHVlKGV2ZW50OmFueSk6dm9pZHsgIC8v5piv5ZCm5Li655WZ5a2m5Zue5Zu95Lq65ZGYXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBbXCJnckZvcm1EYXRlLmlzTGl1WHVlXCJdOiBldmVudC5kZXRhaWwsXHJcbiAgICB9KTtcclxuICB9LFxyXG4gIGdyeXBlRm4odmFsdWU6YW55KTp2b2lkeyAgLy/mgqjlsZ7kuo5cclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIFtcImdyRm9ybVJycm9yLnJjVHlwZUlkRXJyb3JcIl06ICcnLFxyXG4gICAgICBbXCJnckZvcm1EYXRlLnJjVHlwZUlkXCJdOiB2YWx1ZS5kZXRhaWwsXHJcbiAgICAgIGdyVmVyaWZpY2F0aW9uOiB0cnVlXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgZ3JOYXZJdGVtKGRhdGE6YW55KTp2b2lkeyAgLy/ooYzkuJrkuqfkuJrvvIjlt6bkvqflr7zoiKrngrnlh7vml7bvvIzop6blj5HnmoTkuovku7bvvIlcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGdySW5kZXg6IGRhdGEuZGV0YWlsLmluZGV4IHx8IDAsXHJcbiAgICB9KTtcclxuICB9LFxyXG4gIGdySW5kdXN0cnlJdGVtKGRhdGE6YW55KTp2b2lkIHsgIC8v6KGM5Lia5Lqn5Lia77yI5Y+z5L6n6YCJ5oup6aG56KKr54K55Ye75pe277yM5Lya6Kem5Y+R55qE5LqL5Lu277yJXHJcbiAgICBsZXQgaW5kdXN0cnlMaXN0OmFueSA9IFtcclxuICAgICAge1xyXG4gICAgICAgIGN5VHlwZUlkOiBkYXRhLmRldGFpbC5wSWQsXHJcbiAgICAgICAgaHlUeXBlSWQ6IGRhdGEuZGV0YWlsLmlkXHJcbiAgICAgIH1cclxuICAgIF1cclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGdySW5kdXN0cnlJZDogZGF0YS5kZXRhaWwuaWQsXHJcbiAgICAgIFtcImdyRm9ybURhdGUuaW5kdXN0cnlCdXNpbmVzc01vZGVsc1wiXTogaW5kdXN0cnlMaXN0LFxyXG4gICAgICBnckluZHVzdHJ5QnVzaW5lc3NlczogZGF0YS5kZXRhaWwucFRleHQgKyAnIC8gJyArIGRhdGEuZGV0YWlsLnRleHQsXHJcbiAgICAgIFtcImdyRm9ybVJycm9yLmluZHVzdHJ5QnVzaW5lc3NNb2RlbHNFcnJvclwiXTogJycsXHJcbiAgICAgIGdyVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgfSlcclxuICB9LFxyXG4gIGdyUHJvdG9jb2xDaGVja2VkRm4odmFsdWU6YW55KTp2b2lkeyAgLy/kvb/nlKjljY/orq5cclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGdyUHJvdG9jb2xDaGVja2VkOiB2YWx1ZS5kZXRhaWxcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgXHJcbiAgZ3JTdWJtaXRGbigpOnZvaWR7ICAvL+S4quS6uuazqOWGjFxyXG4gICAgLy/ljZXkvY3nsbvlnotcclxuICAgIGlmKHRoaXMuZGF0YS5nckZvcm1EYXRlLmNhcmRUeXBlSWQgPT0gJycpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImdyRm9ybVJycm9yLmNhcmRUeXBlSWRScnJvclwiXTogJ+ivt+mAieaLqeWNleS9jeexu+WeiycsXHJcbiAgICAgICAgZ3JWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvL+ivgeS7tuWPt+eggVxyXG4gICAgaWYodGhpcy5kYXRhLmdyRm9ybURhdGUuY2FyZE51bSA9PSAnJyl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiZ3JGb3JtUnJyb3IuY2FyZE51bVJycm9yXCJdOiAn6K+36YCJ5oup6K+B5Lu25Y+356CBJyxcclxuICAgICAgICBnclZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIC8v6K+B5Lu25omr5o+P5Lu25LiK5LygXHJcbiAgICBpZih0aGlzLmRhdGEuZ3JGb3JtRGF0ZS5jYXJkUGljLmxlbmd0aCA9PSAwKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJnckZvcm1ScnJvci5jYXJkUGljRXJyb3JcIl06ICfor7fkuIrkvKDor4Hku7bmiavmj4/ku7YnLFxyXG4gICAgICAgIGdyVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy/lr4bnoIFcclxuICAgIGlmKHRoaXMuZGF0YS5nckZvcm1EYXRlLnBhc3N3b3JkID09ICcnKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJnckZvcm1ScnJvci5wYXNzd29yZEVycm9yXCJdOifor7fovpPlhaXlr4bnoIEnLFxyXG4gICAgICAgIGpnVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy/noa7orqTlr4bnoIFcclxuICAgIGlmKHRoaXMuZGF0YS5nckZvcm1EYXRlLnRydWV3b3JkID09ICcnKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJnckZvcm1ScnJvci50cnVld29yZEVycm9yXCJdOifor7flho3mrKHnoa7orqTlr4bnoIEnLFxyXG4gICAgICAgIGdyVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy/lp5PlkI1cclxuICAgIGlmKHRoaXMuZGF0YS5nckZvcm1EYXRlLnJlYWxOYW1lID09ICcnKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJnckZvcm1ScnJvci5yZWFsTmFtZVJycm9yXCJdOiAn6K+36L6T5YWl5aeT5ZCNJyxcclxuICAgICAgICBnclZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIC8v6IGU57O755S16K+dXHJcbiAgICBpZih0aGlzLmRhdGEuZ3JGb3JtRGF0ZS5waG9uZU51bSA9PSAnJyl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiZ3JGb3JtUnJyb3IucGhvbmVOdW1FcnJvclwiXTon6K+36L6T5YWl6IGU57O755S16K+dJyxcclxuICAgICAgICBnclZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgICAvL+mqjOivgeeggVxyXG4gICAgIGlmKHRoaXMuZGF0YS5nckZvcm1EYXRlLnZlcmlmeUNvZGUgPT0gJycpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImdyRm9ybVJycm9yLnZlcmlmeUNvZGVFcnJvclwiXTon6K+36L6T5YWl6aqM6K+B56CBJyxcclxuICAgICAgICBnclZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIC8v55S15a2Q6YKu566xXHJcbiAgICBpZih0aGlzLmRhdGEuZ3JGb3JtRGF0ZS5lbWFpbCA9PSAnJyl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiZ3JGb3JtUnJyb3IuZW1haWxFcnJvclwiXTon6K+36L6T5YWl55S15a2Q6YKu566xJyxcclxuICAgICAgICBnclZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIC8v5omA5Zyo5Zyw5Yy6XHJcbiAgICBpZih0aGlzLmRhdGEuZ3JGb3JtRGF0ZS54aWFRdUlkID09ICcnKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJnckZvcm1ScnJvci54aWFRdUlkRXJyb3JcIl06J+ivt+mAieaLqeaJgOWcqOWcsOWMuicsXHJcbiAgICAgICAgZ3JWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvL+eOsOWxheS9j+WcsOivpue7huWcsOWdgFxyXG4gICAgaWYodGhpcy5kYXRhLmdyRm9ybURhdGUuY3VyTG9jYXRpb24gPT0gJycpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImdyRm9ybVJycm9yLmN1ckxvY2F0aW9uRXJyb3JcIl06J+ivt+i+k+WFpeeOsOWxheS9j+WcsOivpue7huWcsOWdgCcsXHJcbiAgICAgICAgZ3JWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvL+aCqOWxnuS6jlxyXG4gICAgaWYodGhpcy5kYXRhLmdyRm9ybURhdGUucmNUeXBlSWQgPT0gJycpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImdyRm9ybVJycm9yLnJjVHlwZUlkRXJyb3JcIl06J+ivt+mAieaLqeaCqOWxnuS6jicsXHJcbiAgICAgICAgZ3JWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAgLy/kuqfkuJrjgIHooYzkuJpcclxuICAgICBpZih0aGlzLmRhdGEuZ3JGb3JtRGF0ZS5pbmR1c3RyeUJ1c2luZXNzTW9kZWxzLmxlbmd0aCA9PSAwKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJnckZvcm1ScnJvci5pbmR1c3RyeUJ1c2luZXNzTW9kZWxzRXJyb3JcIl06J+ivt+mAieaLqeS6p+S4mi/ooYzkuJonLFxyXG4gICAgICAgIGdyVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy/pmIXor7vljY/orq5cclxuICAgIGlmKHRoaXMuZGF0YS5nclZlcmlmaWNhdGlvbiA9PSBmYWxzZSl7XHJcbiAgICAgIFRvYXN0KCfor7fmiorlv4Xloavkv6Hmga/loavlhpnlrozmlbTvvIEnKTtcclxuICAgIH1lbHNlIGlmKHRoaXMuZGF0YS5nclByb3RvY29sQ2hlY2tlZCA9PSBmYWxzZSl7XHJcbiAgICAgIFRvYXN0KCfor7fpmIXor7vlubbmjqXlj5flupTnlKjkvb/nlKjljY/orq7vvIEnKTtcclxuICAgIH1lbHNle1xyXG4gICAgICBodHRwcy5yZXF1ZXN0KGFwaS51c2VyUmVnLCB0aGlzLmRhdGEuZ3JGb3JtRGF0ZSwgJ1BPU1QnKVxyXG4gICAgICAudGhlbigoKTp2b2lkPT57XHJcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICB1cmw6ICcuLi9sb2dpbkZvcm0vbG9naW5Gb3JtJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgICAgVG9hc3QoZXJyKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLy/miJHlt7LpmIXor7vlubbmjqXlj5flupTnlKjkvb/nlKjljY/orq5cclxuICBub3RpY2VGbigpOnZvaWR7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBqZ1Byb3RvY29sQ2hlY2tlZDogIXRoaXMuZGF0YS5qZ1Byb3RvY29sQ2hlY2tlZFxyXG4gICAgfSlcclxuICAgIERpYWxvZy5hbGVydCh7XHJcbiAgICAgIHRpdGxlOiAn5rOo5YaM6aG755+lJyxcclxuICAgICAgbWVzc2FnZUFsaWduOiAnbGVmdCcsXHJcbiAgICAgIG1lc3NhZ2U6ICcxLuacrOermemHh+eUqOWunuWQjeiupOivge+8jOeUs+ivt+S6uumhu+ehruS/neWhq+WGmeS/oeaBr+eahOecn+WunuOAgeWujOaVtOOAgeacieaViOOAguS/oeaBr+Whq+WGmeS4jeecn+WunuOAgeS4jeWujOaVtOetieWwhuWvvOiHtOazqOWGjOaXoOazleWuoeaguOmAmui/h+OAguacrOermeehruS/neeUqOaIt+S/oeaBr+eahOWuieWFqOaAp+WSjOS/neWvhuaAp+W5tuS4uuS5i+i0n+i0o+OAglxcbjIu6YG15a6I5Lit5Y2O5Lq65rCR5YWx5ZKM5Zu95rOV5b6L5rOV5Luk5ZKM5YW25LuW55u45YWz5rOV6KeE77yM5Lil56aB5Y+R5biD56C05Z2P5a6q5rOV5ZKM5rOV5b6L44CB5rOV6KeE55qE5L+h5oGv44CCXFxuMy7pgbXlrojlhazlronpg6jlhbPkuo7jgIrorqHnrpfmnLrkv6Hmga/nvZHnu5zlm73pmYXogZTnvZHlronlhajkv53miqTnrqHnkIblip7ms5XjgIvnmoTop4TlrprvvIzoh6rop4nnu7TmiqTorqHnrpfmnLrkv6Hmga/nvZHnu5znmoTlronlhajjgIJcXG40LuS4peemgeWcqOe9keS4iuWuo+aJrOWwgeW7uui/t+S/oeOAgea3q+enveOAgeiJsuaDheOAgeaatOWKm+OAgei1jOWNmuOAgeasuuiviOetieS4jeato+W9k+ihjOS4uuOAglxcbjUu5Y2V5L2N5oiW5Liq5Lq65Y+R5biD55qE5L+h5oGv6KaB55yf5a6e5pyJ5pWI44CB5YeG56Gu5a6M5pW077yM5bm25LiN5b6X5pyJ5byV5Lq66K+v6Kej5oiW6ICF6Jma5YGH55qE6ZmI6L+w44CCXFxuNi7nlKjmiLfms6jlhozmiJDlip/lkI7vvIzor7flpqXlloTkv53nrqHmgqjnmoTnlKjmiLflkI3lkozlr4bnoIHjgIInLFxyXG4gICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgIFxyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgLy/miJHlt7LpmIXor7vlubbmjqXlj5flupTnlKjkvb/nlKjljY/orq7vvIjkuKrkurrvvIlcclxuICBnck5vdGljZUZuKCk6dm9pZHtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGdyUHJvdG9jb2xDaGVja2VkOiAhdGhpcy5kYXRhLmdyUHJvdG9jb2xDaGVja2VkXHJcbiAgICB9KVxyXG4gICAgRGlhbG9nLmFsZXJ0KHtcclxuICAgICAgdGl0bGU6ICfms6jlhozpobvnn6UnLFxyXG4gICAgICBtZXNzYWdlQWxpZ246ICdsZWZ0JyxcclxuICAgICAgbWVzc2FnZTogJzEu5pys56uZ6YeH55So5a6e5ZCN6K6k6K+B77yM55Sz6K+35Lq66aG756Gu5L+d5aGr5YaZ5L+h5oGv55qE55yf5a6e44CB5a6M5pW044CB5pyJ5pWI44CC5L+h5oGv5aGr5YaZ5LiN55yf5a6e44CB5LiN5a6M5pW0562J5bCG5a+86Ie05rOo5YaM5peg5rOV5a6h5qC46YCa6L+H44CC5pys56uZ56Gu5L+d55So5oi35L+h5oGv55qE5a6J5YWo5oCn5ZKM5L+d5a+G5oCn5bm25Li65LmL6LSf6LSj44CCXFxuMi7pgbXlrojkuK3ljY7kurrmsJHlhbHlkozlm73ms5Xlvovms5Xku6Tlkozlhbbku5bnm7jlhbPms5Xop4TvvIzkuKXnpoHlj5HluIPnoLTlnY/lrqrms5Xlkozms5XlvovjgIHms5Xop4TnmoTkv6Hmga/jgIJcXG4zLumBteWuiOWFrOWuiemDqOWFs+S6juOAiuiuoeeul+acuuS/oeaBr+e9kee7nOWbvemZheiBlOe9keWuieWFqOS/neaKpOeuoeeQhuWKnuazleOAi+eahOinhOWumu+8jOiHquiniee7tOaKpOiuoeeul+acuuS/oeaBr+e9kee7nOeahOWuieWFqOOAglxcbjQu5Lil56aB5Zyo572R5LiK5a6j5oms5bCB5bu66L+35L+h44CB5rer56e944CB6Imy5oOF44CB5pq05Yqb44CB6LWM5Y2a44CB5qy66K+I562J5LiN5q2j5b2T6KGM5Li644CCXFxuNS7ljZXkvY3miJbkuKrkurrlj5HluIPnmoTkv6Hmga/opoHnnJ/lrp7mnInmlYjjgIHlh4bnoa7lrozmlbTvvIzlubbkuI3lvpfmnInlvJXkurror6/op6PmiJbogIXomZrlgYfnmoTpmYjov7DjgIJcXG42LueUqOaIt+azqOWGjOaIkOWKn+WQju+8jOivt+WmpeWWhOS/neeuoeaCqOeahOeUqOaIt+WQjeWSjOWvhueggeOAgicsXHJcbiAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgXHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuXHJcbiAgLy/pobXpnaLliJ3lp4vljJZcclxuICBvbkxvYWQoKXtcclxuICAgIC8v6aG16Z2i5qCH6aKYXHJcbiAgICB3eC5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoeyAgICAgXHJcbiAgICAgIHRpdGxlOiBcIuazqOWGjFwiXHJcbiAgICB9KTtcclxuICAgIC8v6I635Y+W5Y2V5L2N57G75Z6LXHJcbiAgICB0aGlzLmdldERhbndlaUxpc3QoKTtcclxuICAgIC8v6I635Y+W5omA5Zyo5Zyw5Yy6XHJcbiAgICB0aGlzLmdldFRlbmFudExpc3QoKTtcclxuICAgIC8v5Lqn5Lia44CB6KGM5Lia57G75YirXHJcbiAgICB0aGlzLmdldEluZHVzdHJ5QnVzaW5lc3NlcygpO1xyXG4gICAgLy/or4Hku7bnsbvlnotcclxuICAgIHRoaXMuZ2V0Y2FyZExpc3QoKTtcclxuICAgIC8v5oKo5bGe5LqOXHJcbiAgICB0aGlzLmdldFR5cGVJZExpc3QoKTtcclxuICB9LFxyXG5cclxuICAvL+mhtemdoua4suafk+WujOaIkFxyXG4gIG9uUmVhZHkoKXt9LFxyXG5cclxuICAvL+mhtemdouaYvuekulxyXG4gIG9uU2hvdygpe30sXHJcblxyXG4gIC8v6aG16Z2i6ZqQ6JePXHJcbiAgb25IaWRlKCl7fSxcclxuXHJcbiAgLy/pobXpnaLlhbPpl61cclxuICBvblVubG9hZCgpe31cclxufSlcclxuZXhwb3J0IHt9O1xyXG4iXX0=