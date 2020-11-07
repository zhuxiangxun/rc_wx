"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dialog = require('../../miniprogram_npm/@vant/weapp/dialog/dialog.js').default;
var Toast = require('../../miniprogram_npm/@vant/weapp/toast/toast.js').default;
var api = getApp().globalData;
var https = require('../../utils/myRequest.js');
Page({
    data: {
        contentOverflow: '',
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
            _a.grVerification = true,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXJlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlZ2lzdGVyZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsb0RBQW9ELENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDbkYsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLGtEQUFrRCxDQUFDLENBQUMsT0FBTyxDQUFDO0FBQ2hGLElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBRSxDQUFDLFVBQVUsQ0FBQztBQUNoQyxJQUFJLEtBQUssR0FBSSxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUVqRCxJQUFJLENBQUM7SUFFSCxJQUFJLEVBQUU7UUFDSixlQUFlLEVBQUUsRUFBRTtRQUNuQixTQUFTLEVBQUUsSUFBSTtRQUVmLFlBQVksRUFBRSxFQUFFO1FBQ2hCLFVBQVUsRUFBRSxFQUFFO1FBQ2Qsc0JBQXNCLEVBQUUsRUFBRTtRQUMxQixjQUFjLEVBQUUsRUFBRTtRQUNsQixRQUFRLEVBQUUsRUFBRTtRQUNaLGdCQUFnQixFQUFFLEVBQUU7UUFDcEIsVUFBVSxFQUFFLEVBQUU7UUFFZCxPQUFPLEVBQUUsQ0FBQztRQUNWLFlBQVksRUFBRSxJQUFJO1FBQ2xCLG9CQUFvQixFQUFFLEVBQUU7UUFDeEIsZ0JBQWdCLEVBQUUsT0FBTztRQUN6QixVQUFVLEVBQUUsS0FBSztRQUNqQixpQkFBaUIsRUFBRSxLQUFLO1FBR3hCLE9BQU8sRUFBRSxDQUFDO1FBQ1YsWUFBWSxFQUFFLElBQUk7UUFDbEIsb0JBQW9CLEVBQUUsRUFBRTtRQUN4QixnQkFBZ0IsRUFBRSxPQUFPO1FBQ3pCLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLGlCQUFpQixFQUFFLEtBQUs7UUFHeEIsVUFBVSxFQUFFLEVBQUU7UUFDZCxnQkFBZ0IsRUFBRSxFQUFFO1FBQ3BCLGVBQWUsRUFBRSxFQUFFO1FBQ25CLFFBQVEsRUFBRTtZQUNSLEVBQUUsSUFBSSxFQUFFLE1BQU0s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LENBQUM7WUFDWCxLQUFLLEVBQUUsTUFBTTtZQUNiLFlBQVksRUFBRSxNQUFNO1lBQ3BCLE9BQU8sRUFBRSxxUkFBcVI7U0FDL1IsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUVSLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUlELE1BQU07UUFFSixFQUFFLENBQUMscUJBQXFCLENBQUM7WUFDdkIsS0FBSyxFQUFFLElBQUk7U0FDWixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFFckIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRXJCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBRTdCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVuQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUdELE9BQU8sZ0JBQUcsQ0FBQztJQUdYLE1BQU0sZ0JBQUcsQ0FBQztJQUdWLE1BQU0sZ0JBQUcsQ0FBQztJQUdWLFFBQVEsZ0JBQUcsQ0FBQztDQUNiLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIHJlZ2lzdGVyZWQudHNcclxubGV0IERpYWxvZyA9IHJlcXVpcmUoJy4uLy4uL21pbmlwcm9ncmFtX25wbS9AdmFudC93ZWFwcC9kaWFsb2cvZGlhbG9nLmpzJykuZGVmYXVsdDtcclxubGV0IFRvYXN0ID0gcmVxdWlyZSgnLi4vLi4vbWluaXByb2dyYW1fbnBtL0B2YW50L3dlYXBwL3RvYXN0L3RvYXN0LmpzJykuZGVmYXVsdDtcclxuY29uc3QgYXBpID0gZ2V0QXBwKCkuZ2xvYmFsRGF0YTsgIC8vIOiOt+WPluW6lOeUqOWunuS+i1xyXG5sZXQgaHR0cHMgID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvbXlSZXF1ZXN0LmpzJyk7ICAgICAvL+iOt+WPlmFqYXjmlrnms5VcclxuXHJcblBhZ2Uoe1xyXG4gIC8v6aG16Z2i5pWw5o2uXHJcbiAgZGF0YToge1xyXG4gICAgY29udGVudE92ZXJmbG93OiAnJywgICAgICAgICAgICAvL+WGheWuuemrmOW6plxyXG4gICAgdGFiQWN0aXZlOiAnamcnLCAgICAgICAgICAgICAgICAvL+azqOWGjHRhYlxyXG5cclxuICAgIHF5ZGFud2VpTGlzdDogW10sICAgICAgICAgICAgICAgLy/ljZXkvY3nsbvlnotcclxuICAgIHRlbmFudExpc3Q6IFtdLCAgICAgICAgICAgICAgICAgLy/miYDlnKjlnLDljLpcclxuICAgIGluZHVzdHJ5QnVzaW5lc3Nlc0xpc3Q6IFtdLCAgICAgLy/kuqfkuJrjgIHooYzkuJrnsbvliKvliJfooahcclxuICAgIHBsYXRmb3JtSWRMaXN0OiBbXSwgICAgICAgICAgICAgLy/miYDlsZ7liJvkuJrlubPlj7BcclxuICAgIGNhcmRMaXN0OiBbXSwgICAgICAgICAgICAgICAgICAgLy/or4Hku7bnsbvlnotcclxuICAgIGdyUGxhdGZvcm1JZExpc3Q6IFtdLCAgICAgICAgICAgLy/kuKrkurrlt6XkvZzljZXkvY1cclxuICAgIHR5cGVJZExpc3Q6IFtdLCAgICAgICAgICAgICAgICAgLy/mgqjlsZ7kuo5cclxuICBcclxuICAgIGpnSW5kZXg6IDAsICAgICAgICAgICAgICAgICAgICAgLy/lvZPliY3ntKLlvJXvvIjmnLrmnoTvvIlcclxuICAgIGpnSW5kdXN0cnlJZDogbnVsbCwgICAgICAgICAgICAgLy/pgInkuK3nmoRpZO+8iOacuuaehO+8iVxyXG4gICAgamdJbmR1c3RyeUJ1c2luZXNzZXM6ICcnLCAgICAgICAvL+S6p+S4muOAgeihjOS4muaYvuekulxyXG4gICAgamdWZXJpZnlDb2RlVGltZTogJ+iOt+WPlumqjOivgeeggScsICAvL+iOt+WPlumqjOivgeeggVxyXG4gICAgamdEaXNhYmxlZDogZmFsc2UsICAgICAgICAgICAgICAvL+mqjOivgeeggeaMiemSrueKtuaAgVxyXG4gICAgamdQcm90b2NvbENoZWNrZWQ6IGZhbHNlLCAgICAgICAvL+WNj+iurlxyXG5cclxuXHJcbiAgICBnckluZGV4OiAwLCAgICAgICAgICAgICAgICAgICAgIC8v5b2T5YmN57Si5byV77yI5py65p6E77yJXHJcbiAgICBnckluZHVzdHJ5SWQ6IG51bGwsICAgICAgICAgICAgIC8v6YCJ5Lit55qEaWTvvIjmnLrmnoTvvIlcclxuICAgIGdySW5kdXN0cnlCdXNpbmVzc2VzOiAnJywgICAgICAgLy/kuqfkuJrjgIHooYzkuJrmmL7npLpcclxuICAgIGdyVmVyaWZ5Q29kZVRpbWU6ICfojrflj5bpqozor4HnoIEnLCAgLy/ojrflj5bpqozor4HnoIFcclxuICAgIGdyRGlzYWJsZWQ6IGZhbHNlLCAgICAgICAgICAgICAgLy/pqozor4HnoIHmjInpkq7nirbmgIFcclxuICAgIGdyUHJvdG9jb2xDaGVja2VkOiBmYWxzZSwgICAgICAgLy/ljY/orq5cclxuXHJcbiAgICAvL+acuuaehOazqOWGjFxyXG4gICAgamdGaWxlTGlzdDogW10sICAgICAgICAgIC8v5py65p6E5LiK5Lyg6ZmE5Lu2XHJcbiAgICBqZ1JlcGVhdFBhc3N3b3JkOiAnJywgICAgLy/mnLrmnoTnoa7orqTlr4bnoIFcclxuICAgIGpnUGFzc3dvcmRFcnJvcjogJycsICAgICAvL+acuuaehOehruiupOWvhueggVxyXG4gICAgdW5pdFR5cGU6IFsgICAgICAgICAgICAgIC8v5Y2V5L2N57G75Z6LXHJcbiAgICAgIHsgdGV4dDogJ+mAieaLqeexu+WeiycsIHZhbHVlOiAwIH0sXHJcbiAgICAgIHsgdGV4dDogJ+aWsOasvuWVhuWTgScsIHZhbHVlOiAxIH0sXHJcbiAgICAgIHsgdGV4dDogJ+a0u+WKqOWVhuWTgScsIHZhbHVlOiAyIH0sXHJcbiAgICBdLFxyXG4gICAgamdGb3JtRGF0ZTp7ICAvL+acuuaehOihqOWNlVxyXG4gICAgICBzaHh5Q29kZTogJycsICAgICAgICAgICAgICAgICAvL+e7n+S4gOekvuS8muS/oeeUqOS7o+eggVxyXG4gICAgICBzaHh5cGljczogW10sICAgICAgICAgICAgICAgICAvL+e7n+S4gOekvuS8muS/oeeUqOS7o+eggeaJq+aPj+S7tuS4iuS8oFxyXG4gICAgICBwYXNzd29yZDogJycsICAgICAgICAgICAgICAgICAvL+WvhueggVxyXG4gICAgICB0cnVld29yZDogJycsICAgICAgICAgICAgICAgICAvL+ehruiupOWvhueggVxyXG4gICAgICBxeU5hbWU6ICcnLCAgICAgICAgICAgICAgICAgICAvL+WNleS9jeWQjeensFxyXG4gICAgICBxeU5hdHVyZUlkOiAnJywgICAgICAgICAgICAgICAvL+WNleS9jeexu+Wei1xyXG4gICAgICB0ZW5hbnRJZDogJycsICAgICAgICAgICAgICAgICAvL+aJgOWcqOWcsOWMulxyXG4gICAgICBpbmR1c3RyeUJ1c2luZXNzZXM6IFtdLCAgICAgICAvL+S6p+S4muOAgeihjOS4mlxyXG4gICAgICBxeUFkZHJlc3M6ICcnLCAgICAgICAgICAgICAgICAvL+WNleS9jeivpue7huWcsOWdgFxyXG4gICAgICBsZWdhbE5hbWU6ICcnLCAgICAgICAgICAgICAgICAvL+azleS6uuWnk+WQjVxyXG4gICAgICBsZWdhbElkOiAnJywgICAgICAgICAgICAgICAgICAvL+azleS6uui6q+S7veivgeWPt1xyXG4gICAgICBsaW5rUGVyc29uOiAnJywgICAgICAgICAgICAgICAvL+iBlOezu+S6ulxyXG4gICAgICBsaW5rVGVsOiAnJywgICAgICAgICAgICAgICAgICAvL+iBlOezu+S6uueUteivnVxyXG4gICAgICB2ZXJpZnlDb2RlOiAnJywgICAgICAgICAgICAgICAvL+mqjOivgeeggVxyXG4gICAgICBlbWFpbDogJycsICAgICAgICAgICAgICAgICAgICAvL+eUteWtkOmCrueusVxyXG4gICAgICBpc0N4UGxhdGZvcm06ICcyJywgICAgICAgICAgICAvL+aYr+WQpuWIm+aWsOW5s+WPsOS4u+S9k+WNleS9jVxyXG4gICAgICBpc0N5UGxhdGZvcm06ICcyJywgICAgICAgICAgICAvL+aYr+WQpuWIm+S4muW5s+WPsOS4u+S9k+WNleS9jVxyXG4gICAgICBwbGF0Zm9ybUlkOiAnJyAgICAgICAgICAgICAgICAvL+aJgOWxnuWIm+S4muW5s+WPsFxyXG4gICAgfSxcclxuICAgIGpnRm9ybVJycm9yOnsgIC8v5py65p6E6aqM6K+BXHJcbiAgICAgIHNoeHlDb2RlRXJyb3I6ICcnLCAgICAgICAgICAgIC8v57uf5LiA56S+5Lya5L+h55So5Luj56CBXHJcbiAgICAgIHNoeHlwaWNzRXJyb3I6ICcnLCAgICAgICAgICAgIC8v57uf5LiA56S+5Lya5L+h55So5Luj56CB5omr5o+P5Lu25LiK5LygXHJcbiAgICAgIHBhc3N3b3JkRXJyb3I6ICcnLCAgICAgICAgICAgIC8v5a+G56CBXHJcbiAgICAgIHRydWV3b3JkRXJyb3I6ICcnLCAgICAgICAgICAgIC8v56Gu6K6k5a+G56CBXHJcbiAgICAgIHF5TmFtZUVycm9yOiAnJywgICAgICAgICAgICAgIC8v5Y2V5L2N5ZCN56ewXHJcbiAgICAgIHF5TmF0dXJlSWRFcnJvcjogJycsICAgICAgICAgIC8v5Y2V5L2N57G75Z6LXHJcbiAgICAgIHRlbmFudElkRXJyb3I6ICcnLCAgICAgICAgICAgIC8v5omA5Zyo5Zyw5Yy6XHJcbiAgICAgIGluZHVzdHJ5QnVzaW5lc3Nlc0Vycm9yOiAnJywgIC8v5Lqn5Lia44CB6KGM5LiaXHJcbiAgICAgIHF5QWRkcmVzc0Vycm9yOiAnJywgICAgICAgICAgIC8v5Y2V5L2N6K+m57uG5Zyw5Z2AXHJcbiAgICAgIGxlZ2FsSWRFcnJvcjogJycsICAgICAgICAgICAgIC8v5rOV5Lq66Lqr5Lu96K+B5Y+3XHJcbiAgICAgIGxpbmtQZXJzb25FcnJvcjogJycsICAgICAgICAgIC8v6IGU57O75Lq6XHJcbiAgICAgIGxpbmtUZWxFcnJvcjogJycsICAgICAgICAgICAgIC8v6IGU57O75Lq655S16K+dXHJcbiAgICAgIHZlcmlmeUNvZGVFcnJvcjogJycsICAgICAgICAgIC8v6aqM6K+B56CBXHJcbiAgICAgIGVtYWlsRXJyb3I6ICcnICAgICAgICAgICAgICAgIC8v55S15a2Q6YKu566xXHJcbiAgICB9LFxyXG4gICAgamdWZXJpZmljYXRpb246IGZhbHNlLCAgICAvL+mqjOivgeWIpOaWrVxyXG5cclxuXHJcbiAgICAvL+S4quS6uumqjOivgVxyXG4gICAgZ3JGaWxlTGlzdDogW10sICAgICAgICAgICAgICAgICAgLy/mnLrmnoTkuIrkvKDpmYTku7ZcclxuICAgIGdyRm9ybURhdGU6eyAgLy/mnLrmnoTooajljZVcclxuICAgICAgY2FyZFR5cGVJZDogJycsICAgICAgICAgICAgICAgIC8v6K+B5Lu257G75Z6LXHJcbiAgICAgIGNhcmROdW06ICcnLCAgICAgICAgICAgICAgICAgICAvL+ivgeS7tuWPt+eggVxyXG4gICAgICBjYXJkUGljOiBbXSwgICAgICAgICAgICAgICAgICAgLy/or4Hku7bmiavmj4/ku7bkuIrkvKBcclxuICAgICAgcGFzc3dvcmQ6ICcnLCAgICAgICAgICAgICAgICAgIC8v5a+G56CBXHJcbiAgICAgIHRydWV3b3JkOiAnJywgICAgICAgICAgICAgICAgICAvL+ehruiupOWvhueggVxyXG4gICAgICByZWFsTmFtZTogJycsICAgICAgICAgICAgICAgICAgLy/lp5PlkI1cclxuICAgICAgcGhvbmVOdW06ICcnLCAgICAgICAgICAgICAgICAgIC8v6IGU57O755S16K+dXHJcbiAgICAgIHZlcmlmeUNvZGU6ICcnLCAgICAgICAgICAgICAgICAvL+mqjOivgeeggVxyXG4gICAgICBlbWFpbDogJycsICAgICAgICAgICAgICAgICAgICAgLy/nlLXlrZDpgq7nrrFcclxuICAgICAgeGlhUXVJZDogJycsICAgICAgICAgICAgICAgICAgIC8v5omA5bGe5Zyw5Yy6XHJcbiAgICAgIGRhbldlaUlkOiAnJywgICAgICAgICAgICAgICAgICAvLyDmiYDlsZ7ljZXkvY1cclxuICAgICAgZGFuV2VpQWRkcmVzczogJycsICAgICAgICAgICAgIC8v5bel5L2c5Y2V5L2N6K+m57uG5Zyw5Z2AXHJcbiAgICAgIGN1ckxvY2F0aW9uOiAnJywgICAgICAgICAgICAgICAvL+eOsOWxheS9j+WcsOivpue7huWcsOWdgFxyXG4gICAgICBpc0xpdVh1ZTogJzInLCAgICAgICAgICAgICAgICAgLy/mmK/lkKbkuLrnlZnlrablm57lm73kurrlkZhcclxuICAgICAgcmNUeXBlSWQ6ICcnLCAgICAgICAgICAgICAgICAgIC8v5oKo5bGe5LqOXHJcbiAgICAgIGluZHVzdHJ5QnVzaW5lc3NNb2RlbHM6IFtdLCAgICAvL+S6p+S4muOAgeihjOS4mlxyXG4gICAgfSxcclxuICAgIGdyRm9ybVJycm9yOnsgIC8v5py65p6E6aqM6K+BXHJcbiAgICAgIGNhcmRUeXBlSWRScnJvcjogJycsICAgICAgICAgICAvL+ivgeS7tuexu+Wei1xyXG4gICAgICBjYXJkTnVtUnJyb3I6ICcnLCAgICAgICAgICAgICAgLy/or4Hku7blj7fnoIFcclxuICAgICAgY2FyZFBpY0Vycm9yOiAnJywgICAgICAgICAgICAgIC8v6K+B5Lu25omr5o+P5Lu25LiK5LygXHJcbiAgICAgIHBhc3N3b3JkRXJyb3I6ICcnLCAgICAgICAgICAgICAvL+WvhueggVxyXG4gICAgICB0cnVld29yZEVycm9yOiAnJywgICAgICAgICAgICAgLy/noa7orqTlr4bnoIFcclxuICAgICAgcmVhbE5hbWVFcnJvcjogJycsICAgICAgICAgICAgIC8v5aeT5ZCNXHJcbiAgICAgIHBob25lTnVtRXJyb3I6ICcnLCAgICAgICAgICAgICAvL+iBlOezu+eUteivnVxyXG4gICAgICB2ZXJpZnlDb2RlRXJyb3I6ICcnLCAgICAgICAgICAgLy/pqozor4HnoIFcclxuICAgICAgZW1haWxFcnJvcjogJycsICAgICAgICAgICAgICAgIC8v55S15a2Q6YKu566xXHJcbiAgICAgIHhpYVF1SWRFcnJvcjogJycsICAgICAgICAgICAgICAvL+aJgOWxnuWcsOWMulxyXG4gICAgICBkYW5XZWlJZEVycm9yOiAnJywgICAgICAgICAgICAgLy8g5omA5bGe5Y2V5L2NXHJcbiAgICAgIGN1ckxvY2F0aW9uRXJyb3I6ICcnLCAgICAgICAgICAvL+eOsOWxheS9j+WcsOivpue7huWcsOWdgFxyXG4gICAgICByY1R5cGVJZEVycm9yOiAnJywgICAgICAgICAgICAgLy/mgqjlsZ7kuo5cclxuICAgICAgaW5kdXN0cnlCdXNpbmVzc01vZGVsc0Vycm9yOiBbXSwgICAgLy/kuqfkuJrjgIHooYzkuJpcclxuICAgIH0sXHJcbiAgICBnclZlcmlmaWNhdGlvbjogZmFsc2UsICAgIC8v6aqM6K+B5Yik5patXHJcbiAgfSxcclxuXHJcbiAgZHJvcGRvd25PcGVuKCk6dm9pZHsgIC8v5omT5byA5LiL5ouJ6I+c5Y2V6Kem5Y+RXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBjb250ZW50T3ZlcmZsb3c6ICdoaWRkZW4nXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgZHJvcGRvd25DbG9zZSgpOnZvaWR7ICAvL+WFs+mXreS4i+aLieiPnOWNleinpuWPkVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgY29udGVudE92ZXJmbG93OiAnc2Nyb2xsJ1xyXG4gICAgfSlcclxuICB9LFxyXG5cclxuXHJcbiAgZ2V0RGFud2VpTGlzdCgpOnZvaWR7ICAvL+iOt+WPluWNleS9jeexu+Wei1xyXG4gICAgaHR0cHMucmVxdWVzdChhcGkuc3VibWVudURpYyArICc/bW9pZD0xNCcsIG51bGwsICdHRVQnKVxyXG4gICAgLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgbGV0IGxpc3Q6YW55ID0gcmVzLnZhbC5tYXAoKGl0ZW06YW55KTphbnk9PntcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgdGV4dDogaXRlbS5kaWNOYW1lLFxyXG4gICAgICAgICAgdmFsdWU6IGl0ZW0uaWRcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgcXlkYW53ZWlMaXN0OiBsaXN0XHJcbiAgICAgIH0pXHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgZ2V0VGVuYW50TGlzdCgpOnZvaWR7ICAvL+iOt+WPluaJgOWcqOWcsOWMulxyXG4gICAgaHR0cHMucmVxdWVzdChhcGkudGVuYW50TGlzdCwgbnVsbCwgJ0dFVCcpXHJcbiAgICAudGhlbigocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICBsZXQgbGlzdDphbnkgPSByZXMubGlzdC5tYXAoKGl0ZW06YW55KTphbnk9PntcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgdGV4dDogaXRlbS5jbmFtZSxcclxuICAgICAgICAgIHZhbHVlOiBpdGVtLmlkXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHRlbmFudExpc3Q6IGxpc3RcclxuICAgICAgfSlcclxuICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBnZXRJbmR1c3RyeUJ1c2luZXNzZXMoKTp2b2lkeyAgLy/kuqfkuJrjgIHooYzkuJrnsbvliKtcclxuICAgIGh0dHBzLnJlcXVlc3QoYXBpLnN1Ym1lbnVEaWMgKyAnP21vaWQ9NycsIG51bGwsICdHRVQnKVxyXG4gICAgLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgaWYocmVzKXtcclxuICAgICAgICBsZXQgYXJyOmFueSA9IHJlcy52YWwubWFwKChpdGVtOmFueSk6YW55PT57XHJcbiAgICAgICAgICBsZXQgY2hpbGRyZW46YW55ID0gaXRlbS5jaGlsZHJlbi5tYXAoKGl0ZW0yOmFueSk6YW55PT57XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgcFRleHQ6IGl0ZW0uZGljTmFtZSxcclxuICAgICAgICAgICAgICB0ZXh0OiBpdGVtMi5kaWNOYW1lLFxyXG4gICAgICAgICAgICAgIGlkOiBpdGVtMi5pZCxcclxuICAgICAgICAgICAgICBwSWQ6IGl0ZW0yLnBJZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdGV4dDogaXRlbS5kaWNOYW1lLFxyXG4gICAgICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW5cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBpbmR1c3RyeUJ1c2luZXNzZXNMaXN0OiBhcnJcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBnZXRQbGF0Zm9ybUlkTGlzdCgpOnZvaWR7ICAvL+iOt+WPluaJgOWxnuWIm+S4muW5s+WPsFxyXG4gICAgaHR0cHMucmVxdWVzdChhcGkuY3lQbGF0Zm9ybUFwaSArICc/eGlhUXVJZD0nICsgdGhpcy5kYXRhLmpnRm9ybURhdGUudGVuYW50SWQsIG51bGwsICdHRVQnKVxyXG4gICAgLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgbGV0IGxpc3Q6YW55ID0gcmVzLmxpc3QubWFwKChpdGVtOmFueSk6YW55PT57XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHRleHQ6IGl0ZW0uY3lOYW1lLFxyXG4gICAgICAgICAgdmFsdWU6IGl0ZW0uaWRcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgcGxhdGZvcm1JZExpc3Q6IGxpc3RcclxuICAgICAgfSlcclxuICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIGpnUHJvdG9jb2xDaGVja2VkRm4odmFsdWU6YW55KTp2b2lkeyAgLy/kvb/nlKjljY/orq5cclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGpnUHJvdG9jb2xDaGVja2VkOiB2YWx1ZS5kZXRhaWxcclxuICAgIH0pXHJcbiAgfSxcclxuICBnZXRjYXJkTGlzdCgpOnZvaWR7ICAvL+iOt+WPluivgeS7tuexu+Wei1xyXG4gICAgaHR0cHMucmVxdWVzdChhcGkuc3VibWVudURpYyArICc/bW9pZD0zJywgbnVsbCwgJ0dFVCcpXHJcbiAgICAudGhlbigocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICBsZXQgbGlzdDphbnkgPSByZXMudmFsLm1hcCgoaXRlbTphbnkpOmFueT0+e1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICB0ZXh0OiBpdGVtLmRpY05hbWUsXHJcbiAgICAgICAgICB2YWx1ZTogaXRlbS5pZFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBjYXJkTGlzdDogbGlzdFxyXG4gICAgICB9KVxyXG4gICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgZ2V0R3JQbGF0Zm9ybUlkTGlzdCgpOnZvaWR7ICAvL+iOt+WPluW3peS9nOWNleS9jVxyXG4gICAgaHR0cHMucmVxdWVzdChhcGkuY3lQbGF0Zm9ybUFwaSArICc/eGlhUXVJZD0nICsgdGhpcy5kYXRhLmdyRm9ybURhdGUueGlhUXVJZCwgbnVsbCwgJ0dFVCcpXHJcbiAgICAudGhlbigocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICBsZXQgbGlzdDphbnkgPSByZXMubGlzdC5tYXAoKGl0ZW06YW55KTphbnk9PntcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgdGV4dDogaXRlbS5jeU5hbWUsXHJcbiAgICAgICAgICB2YWx1ZTogaXRlbS5pZFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBnclBsYXRmb3JtSWRMaXN0OiBsaXN0XHJcbiAgICAgIH0pXHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBnZXRUeXBlSWRMaXN0KCk6dm9pZHsgIC8v5oKo5bGe5LqOXHJcbiAgICBodHRwcy5yZXF1ZXN0KGFwaS5zdWJtZW51RGljICsgJz9tb2lkPTgnLCBudWxsLCAnR0VUJylcclxuICAgIC50aGVuKChyZXM6YW55KTp2b2lkPT57XHJcbiAgICAgIGxldCBsaXN0OmFueSA9IHJlcy52YWwubWFwKChpdGVtOmFueSk6YW55PT57XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHRleHQ6IGl0ZW0uZGljTmFtZSxcclxuICAgICAgICAgIHZhbHVlOiBpdGVtLmlkXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHR5cGVJZExpc3Q6IGxpc3RcclxuICAgICAgfSlcclxuICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuXHJcbiAgb25UYWJDaGFuZ2UoKTp2b2lkeyAgLy90YWLliIfmjaLop6blj5FcclxuXHJcbiAgfSxcclxuXHJcblxyXG4gIC8v5py65p6E5rOo5YaMXHJcbiAgamdTaHh5Q29kZUlucHV0KHZhbHVlOmFueSk6dm9pZHsgIC8v57uf5LiA56S+5Lya5L+h55So5Luj56CBXHJcbiAgICBsZXQgcmVnOmFueSA9IC9bMS05XVxcZHsxNX0vO1xyXG4gICAgbGV0IHN0cjpCb29sZWFuID0gcmVnLnRlc3QodmFsdWUuZGV0YWlsKTtcclxuICAgIGlmKHZhbHVlLmRldGFpbCl7XHJcbiAgICAgIGlmKHN0cil7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIFtcImpnRm9ybVJycm9yLnNoeHlDb2RlRXJyb3JcIl06ICcnLFxyXG4gICAgICAgICAgW1wiamdGb3JtRGF0ZS5zaHh5Q29kZVwiXTogdmFsdWUuZGV0YWlsLFxyXG4gICAgICAgICAgamdWZXJpZmljYXRpb246IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgW1wiamdGb3JtUnJyb3Iuc2h4eUNvZGVFcnJvclwiXTogJ+ivt+i+k+WFpeato+ehrue7n+S4gOekvuS8muS/oeeUqOS7o+eggScsXHJcbiAgICAgICAgICBbXCJqZ0Zvcm1EYXRlLnNoeHlDb2RlXCJdOiB2YWx1ZS5kZXRhaWwsXHJcbiAgICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJqZ0Zvcm1ScnJvci5zaHh5Q29kZUVycm9yXCJdOiAnJyxcclxuICAgICAgICBbXCJqZ0Zvcm1EYXRlLnNoeHlDb2RlXCJdOiB2YWx1ZS5kZXRhaWwsXHJcbiAgICAgICAgamdWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICBqZ0FmdGVyUmVhZChldmVudDphbnkpOnZvaWQgeyAgICAgICAgICAgICAvL+e7n+S4gOekvuS8muS/oeeUqOS7o+eggeaJq+aPj+S7tuS4iuS8oFxyXG4gICAgbGV0IF90aGF0OmFueSA9IHRoaXM7XHJcbiAgICBjb25zdCB7IGZpbGUgfTphbnkgPSBldmVudC5kZXRhaWw7XHJcbiAgICB3eC51cGxvYWRGaWxlKHtcclxuICAgICAgdXJsOiBhcGkuZmlsZVVybCxcclxuICAgICAgZmlsZVBhdGg6IGZpbGUucGF0aCxcclxuICAgICAgbmFtZTogJ2ZpbGVzJyxcclxuICAgICAgZm9ybURhdGE6IHsgXHJcbiAgICAgICAgZmlsZVBhdGg6IGZpbGUucGF0aCxcclxuICAgICAgICBmaWxlTmFtZTogJydcclxuICAgICAgfSxzdWNjZXNzKHJlczphbnkpIHtcclxuICAgICAgICBsZXQgZmlsZTphbnkgPSBKU09OLnBhcnNlKHJlcy5kYXRhKTtcclxuICAgICAgICBsZXQgZmlsZUxpc3Q6YW55ID0gZmlsZS52YWwubWFwKChpdGVtOmFueSk6YW55PT57XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBuYW1lOiBpdGVtLmZpbGVOYW1lLFxyXG4gICAgICAgICAgICB1cmw6IGFwaS5pbWdVcmwgKyAnP2ZpbGVQYXRoPScgKyBpdGVtLmZpbGVQYXRoLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgX3RoYXQuc2V0RGF0YSh7XHJcbiAgICAgICAgICBqZ0ZpbGVMaXN0OiBmaWxlTGlzdCwgICAgICAgICAgICAgICAgICAgICAgLy/mmL7npLpcclxuICAgICAgICAgIFtcImpnRm9ybURhdGUuc2h4eXBpY3NcIl06IGZpbGUudmFsLCAgICAgICAgIC8v5o+Q5LqkXHJcbiAgICAgICAgICBbXCJqZ0Zvcm1ScnJvci5zaHh5cGljc0Vycm9yXCJdOiAnJyxcclxuICAgICAgICAgIGpnVmVyaWZpY2F0aW9uOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgamdEZWxldGUoKTp2b2lkeyAgLy/nu5/kuIDnpL7kvJrkv6HnlKjku6PnoIHmiavmj4/ku7bkuIrkvKDliKDpmaRcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGpnRmlsZUxpc3Q6IFtdLCAgICAgICAgICAgICAgICAgICAvL+a4heepuuS4iuS8oOaYvuekuuWIl+ihqFxyXG4gICAgICBbXCJqZ0Zvcm1EYXRlLnNoeHlwaWNzXCJdOiBbXSwgICAgICAvL+a4heepuuS4iuS8oOWIl+ihqFxyXG4gICAgICBbXCJqZ0Zvcm1ScnJvci5zaHh5cGljc0Vycm9yXCJdOiAn6K+35LiK5Lyg57uf5LiA56S+5Lya5L+h55So5Luj56CB5omr5o+P5Lu2JyxcclxuICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgIH0pXHJcbiAgfSxcclxuICBqZ1Bhc3N3b3JkSW5wdXQodmFsdWU6YW55KTp2b2lkeyAgLy/lr4bnoIFcclxuICAgIGxldCByZWc6YW55ID0gLyg/PS4qKFthLXpBLVpdLiopKSg/PS4qWzAtOV0uKilbYS16QS1aMC05LSovKy5+IUAjJCVeJiooKV17NiwyMH0kLztcclxuICAgIGxldCBzdHI6Qm9vbGVhbiA9IHJlZy50ZXN0KHZhbHVlLmRldGFpbCk7XHJcbiAgICBpZih2YWx1ZS5kZXRhaWwpe1xyXG4gICAgICBpZihzdHIpe1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBbXCJqZ0Zvcm1ScnJvci5wYXNzd29yZEVycm9yXCJdOiAnJyxcclxuICAgICAgICAgIFtcImpnRm9ybURhdGUucGFzc3dvcmRcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICAgIGpnVmVyaWZpY2F0aW9uOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIFtcImpnRm9ybVJycm9yLnBhc3N3b3JkRXJyb3JcIl06ICfmlbDlrZfjgIHoi7HmlofjgIHlrZfnrKbkuKTnp43lj4rku6XkuIo2LTIw5L2NJyxcclxuICAgICAgICAgIFtcImpnRm9ybURhdGUucGFzc3dvcmRcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICAgIGpnVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLnBhc3N3b3JkRXJyb3JcIl06ICcnLFxyXG4gICAgICAgIFtcImpnRm9ybURhdGUucGFzc3dvcmRcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIGpnUmVwZWF0UGFzc3dvcmRJbnB1dCh2YWx1ZTphbnkpOnZvaWR7ICAvL+ehruiupOWvhueggVxyXG4gICAgaWYodmFsdWUuZGV0YWlsKXtcclxuICAgICAgaWYodmFsdWUuZGV0YWlsICE9IHRoaXMuZGF0YS5qZ0Zvcm1EYXRlLnBhc3N3b3JkKXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgW1wiamdGb3JtUnJyb3IudHJ1ZXdvcmRFcnJvclwiXTogJ+S4pOasoei+k+WFpeeahOWvhueggeS4jeS4gOiHtCcsXHJcbiAgICAgICAgICBbXCJqZ0Zvcm1EYXRlLnRydWV3b3JkXCJdOiB2YWx1ZS5kZXRhaWwsXHJcbiAgICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBbXCJqZ0Zvcm1ScnJvci50cnVld29yZEVycm9yXCJdOiAnJyxcclxuICAgICAgICAgIFtcImpnRm9ybURhdGUudHJ1ZXdvcmRcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICAgIGpnVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLnRydWV3b3JkRXJyb3JcIl06ICcnLFxyXG4gICAgICAgIFtcImpnRm9ybURhdGUudHJ1ZXdvcmRcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIGpnUXlOYW1lSW5wdXQodmFsdWU6YW55KTp2b2lkeyAgLy/ljZXkvY3lkI3np7BcclxuICAgIGlmKHZhbHVlLmRldGFpbCl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiamdGb3JtUnJyb3IucXlOYW1lRXJyb3JcIl06ICcnLFxyXG4gICAgICAgIFtcImpnRm9ybURhdGUucXlOYW1lXCJdOiB2YWx1ZS5kZXRhaWwsXHJcbiAgICAgICAgamdWZXJpZmljYXRpb246IHRydWVcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIGpnRGFud2VpRm4odmFsdWU6YW55KTp2b2lkeyAgLy/ljZXkvY3nsbvlnotcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIFtcImpnRm9ybVJycm9yLnF5TmF0dXJlSWRFcnJvclwiXTogJycsXHJcbiAgICAgIFtcImpnRm9ybURhdGUucXlOYXR1cmVJZFwiXTogdmFsdWUuZGV0YWlsLFxyXG4gICAgICBqZ1ZlcmlmaWNhdGlvbjogdHJ1ZVxyXG4gICAgfSlcclxuICB9LFxyXG4gIGpnVGVuYW50Rm4odmFsdWU6YW55KTp2b2lkeyAgLy/miYDlnKjlnLDljLpcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIFtcImpnRm9ybVJycm9yLnRlbmFudElkRXJyb3JcIl06ICcnLFxyXG4gICAgICBbXCJqZ0Zvcm1EYXRlLnRlbmFudElkXCJdOiB2YWx1ZS5kZXRhaWwsXHJcbiAgICAgIGpnVmVyaWZpY2F0aW9uOiB0cnVlLFxyXG4gICAgICBbXCJqZ0Zvcm1EYXRlLnBsYXRmb3JtSWQgXCJdOiAnJ1xyXG4gICAgfSlcclxuICAgIHRoaXMuZ2V0UGxhdGZvcm1JZExpc3QoKTsgIC8v6I635Y+W5omA5bGe5Yib5Lia5bmz5Y+wXHJcbiAgfSxcclxuICBqZ05hdkl0ZW0oZGF0YTphbnkpOnZvaWR7ICAvL+ihjOS4muS6p+S4mu+8iOW3puS+p+WvvOiIqueCueWHu+aXtu+8jOinpuWPkeeahOS6i+S7tu+8iVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgamdJbmRleDogZGF0YS5kZXRhaWwuaW5kZXggfHwgMCxcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgamdJbmR1c3RyeUl0ZW0oZGF0YTphbnkpOnZvaWQgeyAgLy/ooYzkuJrkuqfkuJrvvIjlj7PkvqfpgInmi6npobnooqvngrnlh7vml7bvvIzkvJrop6blj5HnmoTkuovku7bvvIlcclxuICAgIGxldCBpbmR1c3RyeUxpc3Q6YW55ID0gW1xyXG4gICAgICB7XHJcbiAgICAgICAgY3lUeXBlSWQ6IGRhdGEuZGV0YWlsLnBJZCxcclxuICAgICAgICBoeVR5cGVJZDogZGF0YS5kZXRhaWwuaWRcclxuICAgICAgfVxyXG4gICAgXVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgamdJbmR1c3RyeUlkOiBkYXRhLmRldGFpbC5pZCxcclxuICAgICAgW1wiamdGb3JtRGF0ZS5pbmR1c3RyeUJ1c2luZXNzZXNcIl06IGluZHVzdHJ5TGlzdCxcclxuICAgICAgamdJbmR1c3RyeUJ1c2luZXNzZXM6IGRhdGEuZGV0YWlsLnBUZXh0ICsgJyAvICcgKyBkYXRhLmRldGFpbC50ZXh0LFxyXG4gICAgICBbXCJqZ0Zvcm1ScnJvci5pbmR1c3RyeUJ1c2luZXNzZXNFcnJvclwiXTogJycsXHJcbiAgICAgIGpnVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgfSlcclxuICB9LFxyXG4gIGpnUXlBZGRyZXNzKHZhbHVlOmFueSk6dm9pZHsgIC8v5Y2V5L2N6K+m57uG5Zyw5Z2AXHJcbiAgICBpZih2YWx1ZS5kZXRhaWwpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLnF5QWRkcmVzc0Vycm9yXCJdOiAnJyxcclxuICAgICAgICBbXCJqZ0Zvcm1EYXRlLnF5QWRkcmVzc1wiXTogdmFsdWUuZGV0YWlsLFxyXG4gICAgICAgIGpnVmVyaWZpY2F0aW9uOiB0cnVlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICBqZ0xlZ2FsTmFtZSh2YWx1ZTphbnkpOnZvaWR7ICAvL+azleS6uuWnk+WQjVxyXG4gICAgaWYodmFsdWUuZGV0YWlsKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJqZ0Zvcm1EYXRlLmxlZ2FsTmFtZVwiXTogdmFsdWUuZGV0YWlsXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICBqZ0xlZ2FsSWQodmFsdWU6YW55KTp2b2lkeyAgLy/ms5Xkurrouqvku73or4Hlj7dcclxuICAgIC8v6Lqr5Lu96K+B5Y+356CB5Li6MTXkvY3miJbogIUxOOS9je+8jDE15L2N5pe25YWo5Li65pWw5a2X77yMMTjkvY3liY0xN+S9jeS4uuaVsOWtl++8jOacgOWQjuS4gOS9jeaYr+agoemqjOS9je+8jOWPr+iDveS4uuaVsOWtl+aIluWtl+esplhcclxuICAgIGxldCByZWc6YW55ID0gLyheXFxkezE1fSQpfCheXFxkezE4fSQpfCheXFxkezE3fShcXGR8WHx4KSQpLztcclxuICAgIGxldCBzdHI6Qm9vbGVhbiA9IHJlZy50ZXN0KHZhbHVlLmRldGFpbCk7XHJcbiAgICBpZihzdHIpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLmxlZ2FsSWRFcnJvclwiXTogJycsXHJcbiAgICAgICAgW1wiamdGb3JtRGF0ZS5sZWdhbElkXCJdOiB2YWx1ZS5kZXRhaWwsXHJcbiAgICAgICAgamdWZXJpZmljYXRpb246IHRydWVcclxuICAgICAgfSlcclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLmxlZ2FsSWRFcnJvclwiXTogJ+ivt+i+k+WFpeato+ehrueahOazleS6uui6q+S7veivgeWPtycsXHJcbiAgICAgICAgW1wiamdGb3JtRGF0ZS5sZWdhbElkXCJdOiB2YWx1ZS5kZXRhaWwsXHJcbiAgICAgICAgamdWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICBqZ0xpbmtQZXJzb24odmFsdWU6YW55KTp2b2lkeyAgLy/ljZXkvY3ogZTns7vkurpcclxuICAgIGlmKHZhbHVlLmRldGFpbCl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiamdGb3JtUnJyb3IubGlua1BlcnNvbkVycm9yXCJdOiAnJyxcclxuICAgICAgICBbXCJqZ0Zvcm1EYXRlLmxpbmtQZXJzb25cIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogdHJ1ZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgamdMaW5rVGVsKHZhbHVlOmFueSk6dm9pZHsgIC8v6IGU57O755S16K+dXHJcbiAgICBsZXQgcmVnOmFueSA9IC9eKCgxWzAtOV17MTB9KXwoKCgoWzAtOV17M30tKT9bMC05XXs4fSl8KChbMC05XXs0fS0pP1swLTldezd9KSkoLVswLTldezEsNH0pPykpJC87XHJcbiAgICBsZXQgc3RyOkJvb2xlYW4gPSByZWcudGVzdCh2YWx1ZS5kZXRhaWwpO1xyXG4gICAgaWYodmFsdWUuZGV0YWlsKXtcclxuICAgICAgaWYoc3RyKXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgW1wiamdGb3JtUnJyb3IubGlua1RlbEVycm9yXCJdOiAnJyxcclxuICAgICAgICAgIFtcImpnRm9ybURhdGUubGlua1RlbFwiXTogdmFsdWUuZGV0YWlsLFxyXG4gICAgICAgICAgamdWZXJpZmljYXRpb246IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgW1wiamdGb3JtUnJyb3IubGlua1RlbEVycm9yXCJdOiAn6K+36L6T5YWl5q2j56Gu55qE6IGU57O755S16K+dJyxcclxuICAgICAgICAgIFtcImpnRm9ybURhdGUubGlua1RlbFwiXTogdmFsdWUuZGV0YWlsLFxyXG4gICAgICAgICAgamdWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiamdGb3JtUnJyb3IubGlua1RlbEVycm9yXCJdOiAnJyxcclxuICAgICAgICBbXCJqZ0Zvcm1EYXRlLmxpbmtUZWxcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIGpnVmVyaWZ5Q29kZSh2YWx1ZTphbnkpOnZvaWR7ICAvL+mqjOivgeeggVxyXG4gICAgaWYodmFsdWUuZGV0YWlsKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJqZ0Zvcm1ScnJvci52ZXJpZnlDb2RlRXJyb3JcIl06ICcnLFxyXG4gICAgICAgIFtcImpnRm9ybURhdGUudmVyaWZ5Q29kZVwiXTogdmFsdWUuZGV0YWlsLFxyXG4gICAgICAgIGpnVmVyaWZpY2F0aW9uOiB0cnVlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICBqZ0VtYWlsKHZhbHVlOmFueSk6dm9pZHsgIC8v55S15a2Q6YKu566xXHJcbiAgICBsZXQgcmVnOmFueSA9IC9eKFthLXpBLVowLTlfLV0pK0AoW2EtekEtWjAtOV8tXSkrKC5bYS16QS1aMC05Xy1dKSsvO1xyXG4gICAgbGV0IHN0cjpCb29sZWFuID0gcmVnLnRlc3QodmFsdWUuZGV0YWlsKTtcclxuICAgIGlmKHZhbHVlLmRldGFpbCl7XHJcbiAgICAgIGlmKHN0cil7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIFtcImpnRm9ybVJycm9yLmVtYWlsRXJyb3JcIl06ICcnLFxyXG4gICAgICAgICAgW1wiamdGb3JtRGF0ZS5lbWFpbFwiXTogdmFsdWUuZGV0YWlsLFxyXG4gICAgICAgICAgamdWZXJpZmljYXRpb246IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgW1wiamdGb3JtUnJyb3IuZW1haWxFcnJvclwiXTogJ+ivt+i+k+WFpeato+ehrueahOeUteWtkOmCrueusScsXHJcbiAgICAgICAgICBbXCJqZ0Zvcm1EYXRlLmVtYWlsXCJdOiB2YWx1ZS5kZXRhaWwsXHJcbiAgICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJqZ0Zvcm1ScnJvci5lbWFpbEVycm9yXCJdOiAnJyxcclxuICAgICAgICBbXCJqZ0Zvcm1EYXRlLmVtYWlsXCJdOiB2YWx1ZS5kZXRhaWwsXHJcbiAgICAgICAgamdWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICBqZ1BsYXRmb3JtT3BlbigpOnZvaWR7ICAvL+aJgOWxnuWIm+S4muW5s+WPsOaJk+W8gOS6i+S7tlxyXG4gICAgaWYodGhpcy5kYXRhLnBsYXRmb3JtSWRMaXN0Lmxlbmd0aCA9PSAwKXtcclxuICAgICAgVG9hc3QoJ+ivt+WFiOmAieaLqeaJgOWcqOWcsOWMuu+8gScpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgamdQbGF0Zm9ybUZuKHZhbHVlOmFueSk6dm9pZHsgIC8v5omA5bGe5Yib5Lia5bmz5Y+wXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBbXCJqZ0Zvcm1EYXRlLnBsYXRmb3JtSWRcIl06IHZhbHVlLmRldGFpbFxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuXHJcblxyXG5cclxuICBqZ1N1Ym1pdEZuKCk6dm9pZHsgIC8v5py65p6E5rOo5YaMXHJcbiAgICAvL+ivt+i+k+WFpee7n+S4gOekvuS8muS/oeeUqOS7o+eggVxyXG4gICAgaWYodGhpcy5kYXRhLmpnRm9ybURhdGUuc2h4eUNvZGUgPT0gJycpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLnNoeHlDb2RlRXJyb3JcIl06J+ivt+i+k+WFpee7n+S4gOekvuS8muS/oeeUqOS7o+eggScsXHJcbiAgICAgICAgamdWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvL+e7n+S4gOekvuS8muS/oeeUqOS7o+eggeaJq+aPj+S7tuS4iuS8oFxyXG4gICAgaWYodGhpcy5kYXRhLmpnRm9ybURhdGUuc2h4eXBpY3MubGVuZ3RoID09IDApe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLnNoeHlwaWNzRXJyb3JcIl06J+ivt+S4iuS8oOe7n+S4gOekvuS8muS/oeeUqOS7o+eggeaJq+aPj+S7ticsXHJcbiAgICAgICAgamdWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvL+WvhueggVxyXG4gICAgaWYodGhpcy5kYXRhLmpnRm9ybURhdGUucGFzc3dvcmQgPT0gJycpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLnBhc3N3b3JkRXJyb3JcIl06J+ivt+i+k+WFpeWvhueggScsXHJcbiAgICAgICAgamdWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvL+ehruiupOWvhueggVxyXG4gICAgaWYodGhpcy5kYXRhLmpnRm9ybURhdGUudHJ1ZXdvcmQgPT0gJycpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLnRydWV3b3JkRXJyb3JcIl06J+ivt+WGjeasoeehruiupOWvhueggScsXHJcbiAgICAgICAgamdWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvL+WNleS9jeWQjeensFxyXG4gICAgaWYodGhpcy5kYXRhLmpnRm9ybURhdGUucXlOYW1lID09ICcnKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJqZ0Zvcm1ScnJvci5xeU5hbWVFcnJvclwiXTon6K+36L6T5YWl5Y2V5L2N5ZCN56ewJyxcclxuICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIC8v5Y2V5L2N57G75Z6LXHJcbiAgICBpZih0aGlzLmRhdGEuamdGb3JtRGF0ZS5xeU5hdHVyZUlkID09ICcnKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJqZ0Zvcm1ScnJvci5xeU5hdHVyZUlkRXJyb3JcIl06J+ivt+mAieaLqeWNleS9jeexu+WeiycsXHJcbiAgICAgICAgamdWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvL+aJgOWcqOWcsOWMulxyXG4gICAgaWYodGhpcy5kYXRhLmpnRm9ybURhdGUudGVuYW50SWQgPT0gJycpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLnRlbmFudElkRXJyb3JcIl06J+ivt+mAieaLqeaJgOWcqOWcsOWMuicsXHJcbiAgICAgICAgamdWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvL+S6p+S4muOAgeihjOS4mlxyXG4gICAgaWYodGhpcy5kYXRhLmpnRm9ybURhdGUudGVuYW50SWQubGVuZ3RoID09IDApe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLmluZHVzdHJ5QnVzaW5lc3Nlc0Vycm9yXCJdOifor7fpgInmi6nkuqfkuJov6KGM5LiaJyxcclxuICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIC8v5Y2V5L2N6K+m57uG5Zyw5Z2AXHJcbiAgICBpZih0aGlzLmRhdGEuamdGb3JtRGF0ZS5xeUFkZHJlc3MgPT0gJycpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLnF5QWRkcmVzc0Vycm9yXCJdOifor7fovpPlhaXljZXkvY3or6bnu4blnLDlnYAnLFxyXG4gICAgICAgIGpnVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy/ljZXkvY3ogZTns7vkurpcclxuICAgIGlmKHRoaXMuZGF0YS5qZ0Zvcm1EYXRlLmxpbmtQZXJzb24gPT0gJycpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLnF5QWRkcmVzc0Vycm9yXCJdOifor7fovpPlhaXljZXkvY3ogZTns7vkuronLFxyXG4gICAgICAgIGpnVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy/ogZTns7vnlLXor51cclxuICAgIGlmKHRoaXMuZGF0YS5qZ0Zvcm1EYXRlLmxpbmtQZXJzb24gPT0gJycpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLmxpbmtUZWxFcnJvclwiXTon6K+36L6T5YWl6IGU57O755S16K+dJyxcclxuICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIC8v6aqM6K+B56CBXHJcbiAgICBpZih0aGlzLmRhdGEuamdGb3JtRGF0ZS52ZXJpZnlDb2RlID09ICcnKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJqZ0Zvcm1ScnJvci52ZXJpZnlDb2RlRXJyb3JcIl06J+ivt+i+k+WFpemqjOivgeeggScsXHJcbiAgICAgICAgamdWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvL+eUteWtkOmCrueusVxyXG4gICAgaWYodGhpcy5kYXRhLmpnRm9ybURhdGUuZW1haWwgPT0gJycpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLmVtYWlsRXJyb3JcIl06J+ivt+i+k+WFpeeUteWtkOmCrueusScsXHJcbiAgICAgICAgamdWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvL+mYheivu+WNj+iurlxyXG4gICAgaWYodGhpcy5kYXRhLmpnVmVyaWZpY2F0aW9uID09IGZhbHNlKXtcclxuICAgICAgVG9hc3QoJ+ivt+aKiuW/heWhq+S/oeaBr+Whq+WGmeWujOaVtO+8gScpO1xyXG4gICAgfWVsc2UgaWYodGhpcy5kYXRhLmpnUHJvdG9jb2xDaGVja2VkID09IGZhbHNlKXtcclxuICAgICAgVG9hc3QoJ+ivt+mYheivu+W5tuaOpeWPl+W6lOeUqOS9v+eUqOWNj+iuru+8gScpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIGh0dHBzLnJlcXVlc3QoYXBpLmVudGVyUmVnLCB0aGlzLmRhdGEuamdGb3JtRGF0ZSwgJ1BPU1QnKVxyXG4gICAgICAudGhlbigoKTp2b2lkPT57XHJcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICB1cmw6ICcuLi9sb2dpbkZvcm0vbG9naW5Gb3JtJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgICAgVG9hc3QoZXJyKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgamdWZXJpZnlDb2RlRm4oKTp2b2lkeyAgLy/ojrflj5bpqozor4HnoIFcclxuICAgIGlmKHRoaXMuZGF0YS5qZ0Zvcm1EYXRlLmxpbmtUZWwgIT0gJycpe1xyXG4gICAgICBodHRwcy5yZXF1ZXN0KGFwaS5nZXRDb2RlICsgXCI/dGVsZXBob25lPVwiICsgdGhpcy5kYXRhLmpnRm9ybURhdGUubGlua1RlbCwgbnVsbCwgJ0dFVCcpXHJcbiAgICAgIC50aGVuKCgpOnZvaWQ9PntcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgamdWZXJpZnlDb2RlVGltZTogJzYwJyxcclxuICAgICAgICAgIGpnRGlzYWJsZWQ6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICAgIGxldCBzZXRUaW1lOmFueSA9IHNldEludGVydmFsKCgpOnZvaWQ9PntcclxuICAgICAgICAgIGxldCBzdHI6YW55ID0gcGFyc2VJbnQodGhpcy5kYXRhLmpnVmVyaWZ5Q29kZVRpbWUpIC0gMTtcclxuICAgICAgICAgIGlmKHN0ciA+IDApe1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgIGpnVmVyaWZ5Q29kZVRpbWU6IHN0clxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoc2V0VGltZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgamdWZXJpZnlDb2RlVGltZTogJ+iOt+WPlumqjOivgeeggScsXHJcbiAgICAgICAgICAgICAgamdEaXNhYmxlZDogZmFsc2VcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LDEwMDApXHJcbiAgICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgICAgVG9hc3QoZXJyKTtcclxuICAgICAgfSk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgVG9hc3QoJ+ivt+WFiOWhq+WGmeiBlOezu+eUteivne+8gScpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgamdDeFBsYXRmb3JtKGV2ZW50OmFueSk6dm9pZHsgIC8v5piv5ZCm5Yib5paw5bmz5Y+w5Li75L2T5Y2V5L2NXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBbXCJqZ0Zvcm1EYXRlLmlzQ3hQbGF0Zm9ybVwiXTogZXZlbnQuZGV0YWlsLFxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBqZ0N5UGxhdGZvcm0oZXZlbnQ6YW55KTp2b2lkeyAgLy/mmK/lkKbliJvkuJrlubPlj7DkuLvkvZPljZXkvY1cclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIFtcImpnRm9ybURhdGUuaXNDeVBsYXRmb3JtXCJdOiBldmVudC5kZXRhaWwsXHJcbiAgICB9KTtcclxuICB9LFxyXG4gIFxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgLy/kuKrkurrms6jlhoxcclxuICBnckNhcmRUeXBlRm4odmFsdWU6YW55KTp2b2lkeyAgLy/or4Hku7bnsbvlnotcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIFtcImdyRm9ybVJycm9yLmNhcmRUeXBlSWRScnJvclwiXTogJycsXHJcbiAgICAgIFtcImdyRm9ybURhdGUuY2FyZFR5cGVJZFwiXTogdmFsdWUuZGV0YWlsLFxyXG4gICAgICBnclZlcmlmaWNhdGlvbjogdHJ1ZVxyXG4gICAgfSlcclxuICB9LFxyXG4gIGdyQ2FyZE51bSh2YWx1ZTphbnkpOnZvaWR7ICAvL+ivgeS7tuWPt+eggVxyXG4gICAgaWYodmFsdWUuZGV0YWlsKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJnckZvcm1ScnJvci5jYXJkTnVtUnJyb3JcIl06ICcnLFxyXG4gICAgICAgIFtcImdyRm9ybURhdGUuY2FyZE51bVwiXTogdmFsdWUuZGV0YWlsLFxyXG4gICAgICAgIGdyVmVyaWZpY2F0aW9uOiB0cnVlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICBnckFmdGVyUmVhZChldmVudDphbnkpOnZvaWQgeyAgICAgICAgICAgICAvL+ivgeS7tuaJq+aPj+S7tuS4iuS8oFxyXG4gICAgbGV0IF90aGF0OmFueSA9IHRoaXM7XHJcbiAgICBjb25zdCB7IGZpbGUgfTphbnkgPSBldmVudC5kZXRhaWw7XHJcbiAgICB3eC51cGxvYWRGaWxlKHtcclxuICAgICAgdXJsOiBhcGkuZmlsZVVybCxcclxuICAgICAgZmlsZVBhdGg6IGZpbGUucGF0aCxcclxuICAgICAgbmFtZTogJ2ZpbGVzJyxcclxuICAgICAgZm9ybURhdGE6IHsgXHJcbiAgICAgICAgZmlsZVBhdGg6IGZpbGUucGF0aCxcclxuICAgICAgICBmaWxlTmFtZTogJydcclxuICAgICAgfSxzdWNjZXNzKHJlczphbnkpIHtcclxuICAgICAgICBsZXQgZmlsZTphbnkgPSBKU09OLnBhcnNlKHJlcy5kYXRhKTtcclxuICAgICAgICBsZXQgZmlsZUxpc3Q6YW55ID0gZmlsZS52YWwubWFwKChpdGVtOmFueSk6YW55PT57XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBuYW1lOiBpdGVtLmZpbGVOYW1lLFxyXG4gICAgICAgICAgICB1cmw6IGFwaS5pbWdVcmwgKyAnP2ZpbGVQYXRoPScgKyBpdGVtLmZpbGVQYXRoLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgX3RoYXQuc2V0RGF0YSh7XHJcbiAgICAgICAgICBnckZpbGVMaXN0OiBmaWxlTGlzdCwgICAgICAgICAgICAgICAgICAgICAgLy/mmL7npLpcclxuICAgICAgICAgIFtcImdyRm9ybURhdGUuY2FyZFBpY1wiXTogZmlsZS52YWwsICAgICAgICAgLy/mj5DkuqRcclxuICAgICAgICAgIFtcImdyRm9ybVJycm9yLmNhcmRQaWNFcnJvclwiXTogJycsXHJcbiAgICAgICAgICBnclZlcmlmaWNhdGlvbjogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9LFxyXG4gIGdyRGVsZXRlKCk6dm9pZHsgIC8v6K+B5Lu25omr5o+P5Lu25LiK5Lyg5Yig6ZmkXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBnckZpbGVMaXN0OiBbXSwgICAgICAgICAgICAgICAgICAgLy/muIXnqbrkuIrkvKDmmL7npLrliJfooahcclxuICAgICAgW1wiZ3JGb3JtRGF0ZS5jYXJkUGljXCJdOiBbXSwgICAgICAvL+a4heepuuS4iuS8oOWIl+ihqFxyXG4gICAgICBbXCJnckZvcm1ScnJvci5jYXJkUGljRXJyb3JcIl06ICfor7fkuIrkvKDor4Hku7bmiavmj4/ku7YnLFxyXG4gICAgICAgIGdyVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgfSlcclxuICB9LFxyXG4gIGdyUGFzc3dvcmRJbnB1dCh2YWx1ZTphbnkpOnZvaWR7ICAvL+WvhueggVxyXG4gICAgbGV0IHJlZzphbnkgPSAvKD89LiooW2EtekEtWl0uKikpKD89LipbMC05XS4qKVthLXpBLVowLTktKi8rLn4hQCMkJV4mKigpXXs2LDIwfSQvO1xyXG4gICAgbGV0IHN0cjpCb29sZWFuID0gcmVnLnRlc3QodmFsdWUuZGV0YWlsKTtcclxuICAgIGlmKHZhbHVlLmRldGFpbCl7XHJcbiAgICAgIGlmKHN0cil7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIFtcImdyRm9ybVJycm9yLnBhc3N3b3JkRXJyb3JcIl06ICcnLFxyXG4gICAgICAgICAgW1wiZ3JGb3JtRGF0ZS5wYXNzd29yZFwiXTogdmFsdWUuZGV0YWlsLFxyXG4gICAgICAgICAgZ3JWZXJpZmljYXRpb246IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgW1wiZ3JGb3JtUnJyb3IucGFzc3dvcmRFcnJvclwiXTogJ+aVsOWtl+OAgeiLseaWh+OAgeWtl+espuS4pOenjeWPiuS7peS4ijYtMjDkvY0nLFxyXG4gICAgICAgICAgW1wiZ3JGb3JtRGF0ZS5wYXNzd29yZFwiXTogdmFsdWUuZGV0YWlsLFxyXG4gICAgICAgICAgZ3JWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiZ3JGb3JtUnJyb3IucGFzc3dvcmRFcnJvclwiXTogJycsXHJcbiAgICAgICAgW1wiZ3JGb3JtRGF0ZS5wYXNzd29yZFwiXTogdmFsdWUuZGV0YWlsLFxyXG4gICAgICAgIGdyVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZ3JSZXBlYXRQYXNzd29yZElucHV0KHZhbHVlOmFueSk6dm9pZHsgIC8v56Gu6K6k5a+G56CBXHJcbiAgICBpZih2YWx1ZS5kZXRhaWwpe1xyXG4gICAgICBpZih2YWx1ZS5kZXRhaWwgIT0gdGhpcy5kYXRhLmdyRm9ybURhdGUucGFzc3dvcmQpe1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBbXCJnckZvcm1ScnJvci50cnVld29yZEVycm9yXCJdOiAn5Lik5qyh6L6T5YWl55qE5a+G56CB5LiN5LiA6Ie0JyxcclxuICAgICAgICAgIFtcImdyRm9ybURhdGUudHJ1ZXdvcmRcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICAgIGdyVmVyaWZpY2F0aW9uOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIFtcImdyRm9ybVJycm9yLnRydWV3b3JkRXJyb3JcIl06ICcnLFxyXG4gICAgICAgICAgW1wiZ3JGb3JtRGF0ZS50cnVld29yZFwiXTogdmFsdWUuZGV0YWlsLFxyXG4gICAgICAgICAgZ3JWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiZ3JGb3JtUnJyb3IudHJ1ZXdvcmRFcnJvclwiXTogJycsXHJcbiAgICAgICAgW1wiZ3JGb3JtRGF0ZS50cnVld29yZFwiXTogdmFsdWUuZGV0YWlsLFxyXG4gICAgICAgIGdyVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZ3JSZWFsTmFtZSh2YWx1ZTphbnkpOnZvaWR7ICAvL+Wnk+WQjVxyXG4gICAgaWYodmFsdWUuZGV0YWlsKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJnckZvcm1ScnJvci5yZWFsTmFtZVJycm9yXCJdOiAnJyxcclxuICAgICAgICBbXCJnckZvcm1EYXRlLnJlYWxOYW1lXCJdOiB2YWx1ZS5kZXRhaWwsXHJcbiAgICAgICAgZ3JWZXJpZmljYXRpb246IHRydWVcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIGdyUGhvbmVOdW0odmFsdWU6YW55KTp2b2lkeyAgLy/ogZTns7vnlLXor51cclxuICAgIGxldCByZWc6YW55ID0gL14oKDFbMC05XXsxMH0pfCgoKChbMC05XXszfS0pP1swLTldezh9KXwoKFswLTldezR9LSk/WzAtOV17N30pKSgtWzAtOV17MSw0fSk/KSkkLztcclxuICAgIGxldCBzdHI6Qm9vbGVhbiA9IHJlZy50ZXN0KHZhbHVlLmRldGFpbCk7XHJcbiAgICBpZih2YWx1ZS5kZXRhaWwpe1xyXG4gICAgICBpZihzdHIpe1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBbXCJnckZvcm1ScnJvci5waG9uZU51bUVycm9yXCJdOiAnJyxcclxuICAgICAgICAgIFtcImdyRm9ybURhdGUucGhvbmVOdW1cIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICAgIGdyVmVyaWZpY2F0aW9uOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIFtcImdyRm9ybVJycm9yLnBob25lTnVtRXJyb3JcIl06ICfor7fovpPlhaXmraPnoa7nmoTogZTns7vnlLXor50nLFxyXG4gICAgICAgICAgW1wiZ3JGb3JtRGF0ZS5waG9uZU51bVwiXTogdmFsdWUuZGV0YWlsLFxyXG4gICAgICAgICAgZ3JWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiZ3JGb3JtUnJyb3IucGhvbmVOdW1FcnJvclwiXTogJycsXHJcbiAgICAgICAgW1wiZ3JGb3JtRGF0ZS5waG9uZU51bVwiXTogdmFsdWUuZGV0YWlsLFxyXG4gICAgICAgIGdyVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZ3JWZXJpZnlDb2RlKHZhbHVlOmFueSk6dm9pZHsgIC8v6aqM6K+B56CBXHJcbiAgICBpZih2YWx1ZS5kZXRhaWwpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImdyRm9ybVJycm9yLnZlcmlmeUNvZGVFcnJvclwiXTogJycsXHJcbiAgICAgICAgW1wiZ3JGb3JtRGF0ZS52ZXJpZnlDb2RlXCJdOiB2YWx1ZS5kZXRhaWwsXHJcbiAgICAgICAgZ3JWZXJpZmljYXRpb246IHRydWVcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIGdyVmVyaWZ5Q29kZUZuKCk6dm9pZHsgIC8v6I635Y+W6aqM6K+B56CBXHJcbiAgICBpZih0aGlzLmRhdGEuZ3JGb3JtRGF0ZS5waG9uZU51bSAhPSAnJyl7XHJcbiAgICAgIGh0dHBzLnJlcXVlc3QoYXBpLmdldENvZGUgKyBcIj90ZWxlcGhvbmU9XCIgKyB0aGlzLmRhdGEuZ3JGb3JtRGF0ZS5waG9uZU51bSwgbnVsbCwgJ0dFVCcpXHJcbiAgICAgIC50aGVuKCgpOnZvaWQ9PntcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgZ3JWZXJpZnlDb2RlVGltZTogJzYwJyxcclxuICAgICAgICAgIGdyRGlzYWJsZWQ6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICAgIGxldCBzZXRUaW1lOmFueSA9IHNldEludGVydmFsKCgpOnZvaWQ9PntcclxuICAgICAgICAgIGxldCBzdHI6YW55ID0gcGFyc2VJbnQodGhpcy5kYXRhLmdyVmVyaWZ5Q29kZVRpbWUpIC0gMTtcclxuICAgICAgICAgIGlmKHN0ciA+IDApe1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgIGdyVmVyaWZ5Q29kZVRpbWU6IHN0clxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoc2V0VGltZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgZ3JWZXJpZnlDb2RlVGltZTogJ+iOt+WPlumqjOivgeeggScsXHJcbiAgICAgICAgICAgICAgZ3JEaXNhYmxlZDogZmFsc2VcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LDEwMDApXHJcbiAgICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgICAgVG9hc3QoZXJyKTtcclxuICAgICAgfSk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgVG9hc3QoJ+ivt+WFiOWhq+WGmeiBlOezu+eUteivne+8gScpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgZ3JFbWFpbCh2YWx1ZTphbnkpOnZvaWR7ICAvL+eUteWtkOmCrueusVxyXG4gICAgbGV0IHJlZzphbnkgPSAvXihbYS16QS1aMC05Xy1dKStAKFthLXpBLVowLTlfLV0pKyguW2EtekEtWjAtOV8tXSkrLztcclxuICAgIGxldCBzdHI6Qm9vbGVhbiA9IHJlZy50ZXN0KHZhbHVlLmRldGFpbCk7XHJcbiAgICBpZih2YWx1ZS5kZXRhaWwpe1xyXG4gICAgICBpZihzdHIpe1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBbXCJnckZvcm1ScnJvci5lbWFpbEVycm9yXCJdOiAnJyxcclxuICAgICAgICAgIFtcImdyRm9ybURhdGUuZW1haWxcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICAgIGdyVmVyaWZpY2F0aW9uOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIFtcImdyRm9ybVJycm9yLmVtYWlsRXJyb3JcIl06ICfor7fovpPlhaXmraPnoa7nmoTnlLXlrZDpgq7nrrEnLFxyXG4gICAgICAgICAgW1wiZ3JGb3JtRGF0ZS5lbWFpbFwiXTogdmFsdWUuZGV0YWlsLFxyXG4gICAgICAgICAgZ3JWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiZ3JGb3JtUnJyb3IuZW1haWxFcnJvclwiXTogJycsXHJcbiAgICAgICAgW1wiZ3JGb3JtRGF0ZS5lbWFpbFwiXTogdmFsdWUuZGV0YWlsLFxyXG4gICAgICAgIGdyVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZ3J4aWFRdUZuKHZhbHVlOmFueSk6dm9pZHsgIC8v5omA5Zyo5Zyw5Yy6XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBbXCJnckZvcm1ScnJvci54aWFRdUlkRXJyb3JcIl06ICcnLFxyXG4gICAgICBbXCJnckZvcm1EYXRlLnhpYVF1SWRcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgZ3JWZXJpZmljYXRpb246IHRydWUsXHJcbiAgICAgIFtcImdyRm9ybURhdGUuZGFuV2VpSWRcIl06ICcnXHJcbiAgICB9KVxyXG4gICAgdGhpcy5nZXRHclBsYXRmb3JtSWRMaXN0KCk7ICAvL+iOt+WPluW3peS9nOWNleS9jVxyXG4gIH0sXHJcbiAgZ3JQbGF0Zm9ybU9wZW4oKTp2b2lkeyAgLy/miYDlsZ7liJvkuJrlubPlj7DmiZPlvIDkuovku7ZcclxuICAgIGlmKHRoaXMuZGF0YS5nclBsYXRmb3JtSWRMaXN0Lmxlbmd0aCA9PSAwKXtcclxuICAgICAgVG9hc3QoJ+ivt+WFiOmAieaLqeaJgOWcqOWcsOWMuu+8gScpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgZ3JQbGF0Zm9ybUZuKHZhbHVlOmFueSk6dm9pZHsgIC8v5omA5bGe5Yib5Lia5bmz5Y+wXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBbXCJnckZvcm1EYXRlLmRhbldlaUlkXCJdOiB2YWx1ZS5kZXRhaWxcclxuICAgIH0pXHJcbiAgfSxcclxuICBnclF5QWRkcmVzcyh2YWx1ZTphbnkpOnZvaWR7ICAvL+W3peS9nOWNleS9jeivpue7huWcsOWdgFxyXG4gICAgaWYodmFsdWUuZGV0YWlsKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJnckZvcm1EYXRlLmRhbldlaUFkZHJlc3NcIl06IHZhbHVlLmRldGFpbFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZ3JDdXJMb2NhdGlvbih2YWx1ZTphbnkpOnZvaWR7ICAvL+eOsOWxheS9j+WcsOivpue7huWcsOWdgFxyXG4gICAgaWYodmFsdWUuZGV0YWlsKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJnckZvcm1ScnJvci5jdXJMb2NhdGlvbkVycm9yXCJdOiAnJyxcclxuICAgICAgICBbXCJnckZvcm1EYXRlLmN1ckxvY2F0aW9uXCJdOiB2YWx1ZS5kZXRhaWwsXHJcbiAgICAgICAgZ3JWZXJpZmljYXRpb246IHRydWVcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIGdySXNMaXVYdWUoZXZlbnQ6YW55KTp2b2lkeyAgLy/mmK/lkKbkuLrnlZnlrablm57lm73kurrlkZhcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIFtcImdyRm9ybURhdGUuaXNMaXVYdWVcIl06IGV2ZW50LmRldGFpbCxcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgZ3J5cGVGbih2YWx1ZTphbnkpOnZvaWR7ICAvL+aCqOWxnuS6jlxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgW1wiZ3JGb3JtUnJyb3IucmNUeXBlSWRFcnJvclwiXTogJycsXHJcbiAgICAgIFtcImdyRm9ybURhdGUucmNUeXBlSWRcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgZ3JWZXJpZmljYXRpb246IHRydWVcclxuICAgIH0pXHJcbiAgfSxcclxuICBnck5hdkl0ZW0oZGF0YTphbnkpOnZvaWR7ICAvL+ihjOS4muS6p+S4mu+8iOW3puS+p+WvvOiIqueCueWHu+aXtu+8jOinpuWPkeeahOS6i+S7tu+8iVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgZ3JJbmRleDogZGF0YS5kZXRhaWwuaW5kZXggfHwgMCxcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgZ3JJbmR1c3RyeUl0ZW0oZGF0YTphbnkpOnZvaWQgeyAgLy/ooYzkuJrkuqfkuJrvvIjlj7PkvqfpgInmi6npobnooqvngrnlh7vml7bvvIzkvJrop6blj5HnmoTkuovku7bvvIlcclxuICAgIGxldCBpbmR1c3RyeUxpc3Q6YW55ID0gW1xyXG4gICAgICB7XHJcbiAgICAgICAgY3lUeXBlSWQ6IGRhdGEuZGV0YWlsLnBJZCxcclxuICAgICAgICBoeVR5cGVJZDogZGF0YS5kZXRhaWwuaWRcclxuICAgICAgfVxyXG4gICAgXVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgZ3JJbmR1c3RyeUlkOiBkYXRhLmRldGFpbC5pZCxcclxuICAgICAgW1wiZ3JGb3JtRGF0ZS5pbmR1c3RyeUJ1c2luZXNzTW9kZWxzXCJdOiBpbmR1c3RyeUxpc3QsXHJcbiAgICAgIGdySW5kdXN0cnlCdXNpbmVzc2VzOiBkYXRhLmRldGFpbC5wVGV4dCArICcgLyAnICsgZGF0YS5kZXRhaWwudGV4dCxcclxuICAgICAgW1wiZ3JGb3JtUnJyb3IuaW5kdXN0cnlCdXNpbmVzc01vZGVsc0Vycm9yXCJdOiAnJyxcclxuICAgICAgZ3JWZXJpZmljYXRpb246IHRydWVcclxuICAgIH0pXHJcbiAgfSxcclxuICBnclByb3RvY29sQ2hlY2tlZEZuKHZhbHVlOmFueSk6dm9pZHsgIC8v5L2/55So5Y2P6K6uXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBnclByb3RvY29sQ2hlY2tlZDogdmFsdWUuZGV0YWlsXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIFxyXG4gIGdyU3VibWl0Rm4oKTp2b2lkeyAgLy/kuKrkurrms6jlhoxcclxuICAgIC8v6K+B5Lu257G75Z6LXHJcbiAgICBpZih0aGlzLmRhdGEuZ3JGb3JtRGF0ZS5jYXJkVHlwZUlkID09ICcnKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJnckZvcm1ScnJvci5jYXJkVHlwZUlkUnJyb3JcIl06ICfor7fpgInmi6nljZXkvY3nsbvlnosnLFxyXG4gICAgICAgIGdyVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy/or4Hku7blj7fnoIFcclxuICAgIGlmKHRoaXMuZGF0YS5nckZvcm1EYXRlLmNhcmROdW0gPT0gJycpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImdyRm9ybVJycm9yLmNhcmROdW1ScnJvclwiXTogJ+ivt+mAieaLqeivgeS7tuWPt+eggScsXHJcbiAgICAgICAgZ3JWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvL+ivgeS7tuaJq+aPj+S7tuS4iuS8oFxyXG4gICAgaWYodGhpcy5kYXRhLmdyRm9ybURhdGUuY2FyZFBpYy5sZW5ndGggPT0gMCl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiZ3JGb3JtUnJyb3IuY2FyZFBpY0Vycm9yXCJdOiAn6K+35LiK5Lyg6K+B5Lu25omr5o+P5Lu2JyxcclxuICAgICAgICBnclZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIC8v5a+G56CBXHJcbiAgICBpZih0aGlzLmRhdGEuZ3JGb3JtRGF0ZS5wYXNzd29yZCA9PSAnJyl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiZ3JGb3JtUnJyb3IucGFzc3dvcmRFcnJvclwiXTon6K+36L6T5YWl5a+G56CBJyxcclxuICAgICAgICBnclZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIC8v56Gu6K6k5a+G56CBXHJcbiAgICBpZih0aGlzLmRhdGEuZ3JGb3JtRGF0ZS50cnVld29yZCA9PSAnJyl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiZ3JGb3JtUnJyb3IudHJ1ZXdvcmRFcnJvclwiXTon6K+35YaN5qyh56Gu6K6k5a+G56CBJyxcclxuICAgICAgICBnclZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIC8v5aeT5ZCNXHJcbiAgICBpZih0aGlzLmRhdGEuZ3JGb3JtRGF0ZS5yZWFsTmFtZSA9PSAnJyl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiZ3JGb3JtUnJyb3IucmVhbE5hbWVScnJvclwiXTogJ+ivt+i+k+WFpeWnk+WQjScsXHJcbiAgICAgICAgZ3JWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvL+iBlOezu+eUteivnVxyXG4gICAgaWYodGhpcy5kYXRhLmdyRm9ybURhdGUucGhvbmVOdW0gPT0gJycpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImdyRm9ybVJycm9yLnBob25lTnVtRXJyb3JcIl06J+ivt+i+k+WFpeiBlOezu+eUteivnScsXHJcbiAgICAgICAgZ3JWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAgLy/pqozor4HnoIFcclxuICAgICBpZih0aGlzLmRhdGEuZ3JGb3JtRGF0ZS52ZXJpZnlDb2RlID09ICcnKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJnckZvcm1ScnJvci52ZXJpZnlDb2RlRXJyb3JcIl06J+ivt+i+k+WFpemqjOivgeeggScsXHJcbiAgICAgICAgZ3JWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvL+eUteWtkOmCrueusVxyXG4gICAgaWYodGhpcy5kYXRhLmdyRm9ybURhdGUuZW1haWwgPT0gJycpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImdyRm9ybVJycm9yLmVtYWlsRXJyb3JcIl06J+ivt+i+k+WFpeeUteWtkOmCrueusScsXHJcbiAgICAgICAgZ3JWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvL+aJgOWcqOWcsOWMulxyXG4gICAgaWYodGhpcy5kYXRhLmdyRm9ybURhdGUueGlhUXVJZCA9PSAnJyl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiZ3JGb3JtUnJyb3IueGlhUXVJZEVycm9yXCJdOifor7fpgInmi6nmiYDlnKjlnLDljLonLFxyXG4gICAgICAgIGdyVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy/njrDlsYXkvY/lnLDor6bnu4blnLDlnYBcclxuICAgIGlmKHRoaXMuZGF0YS5nckZvcm1EYXRlLmN1ckxvY2F0aW9uID09ICcnKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJnckZvcm1ScnJvci5jdXJMb2NhdGlvbkVycm9yXCJdOifor7fovpPlhaXnjrDlsYXkvY/lnLDor6bnu4blnLDlnYAnLFxyXG4gICAgICAgIGdyVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy/mgqjlsZ7kuo5cclxuICAgIGlmKHRoaXMuZGF0YS5nckZvcm1EYXRlLnJjVHlwZUlkID09ICcnKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJnckZvcm1ScnJvci5yY1R5cGVJZEVycm9yXCJdOifor7fpgInmi6nmgqjlsZ7kuo4nLFxyXG4gICAgICAgIGdyVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgIC8v5Lqn5Lia44CB6KGM5LiaXHJcbiAgICAgaWYodGhpcy5kYXRhLmdyRm9ybURhdGUuaW5kdXN0cnlCdXNpbmVzc01vZGVscy5sZW5ndGggPT0gMCl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiZ3JGb3JtUnJyb3IuaW5kdXN0cnlCdXNpbmVzc01vZGVsc0Vycm9yXCJdOifor7fpgInmi6nkuqfkuJov6KGM5LiaJyxcclxuICAgICAgICBnclZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIC8v6ZiF6K+75Y2P6K6uXHJcbiAgICBpZih0aGlzLmRhdGEuZ3JWZXJpZmljYXRpb24gPT0gZmFsc2Upe1xyXG4gICAgICBUb2FzdCgn6K+35oqK5b+F5aGr5L+h5oGv5aGr5YaZ5a6M5pW077yBJyk7XHJcbiAgICB9ZWxzZSBpZih0aGlzLmRhdGEuZ3JQcm90b2NvbENoZWNrZWQgPT0gZmFsc2Upe1xyXG4gICAgICBUb2FzdCgn6K+36ZiF6K+75bm25o6l5Y+X5bqU55So5L2/55So5Y2P6K6u77yBJyk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgaHR0cHMucmVxdWVzdChhcGkudXNlclJlZywgdGhpcy5kYXRhLmdyRm9ybURhdGUsICdQT1NUJylcclxuICAgICAgLnRoZW4oKCk6dm9pZD0+e1xyXG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgdXJsOiAnLi4vbG9naW5Gb3JtL2xvZ2luRm9ybSdcclxuICAgICAgICB9KVxyXG4gICAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICAgIFRvYXN0KGVycik7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8v5oiR5bey6ZiF6K+75bm25o6l5Y+X5bqU55So5L2/55So5Y2P6K6uXHJcbiAgbm90aWNlRm4oKTp2b2lke1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgamdQcm90b2NvbENoZWNrZWQ6ICF0aGlzLmRhdGEuamdQcm90b2NvbENoZWNrZWRcclxuICAgIH0pXHJcbiAgICBEaWFsb2cuYWxlcnQoe1xyXG4gICAgICB0aXRsZTogJ+azqOWGjOmhu+efpScsXHJcbiAgICAgIG1lc3NhZ2VBbGlnbjogJ2xlZnQnLFxyXG4gICAgICBtZXNzYWdlOiAnMS7mnKznq5nph4fnlKjlrp7lkI3orqTor4HvvIznlLPor7fkurrpobvnoa7kv53loavlhpnkv6Hmga/nmoTnnJ/lrp7jgIHlrozmlbTjgIHmnInmlYjjgILkv6Hmga/loavlhpnkuI3nnJ/lrp7jgIHkuI3lrozmlbTnrYnlsIblr7zoh7Tms6jlhozml6Dms5XlrqHmoLjpgJrov4fjgILmnKznq5nnoa7kv53nlKjmiLfkv6Hmga/nmoTlronlhajmgKflkozkv53lr4bmgKflubbkuLrkuYvotJ/otKPjgIJcXG4yLumBteWuiOS4reWNjuS6uuawkeWFseWSjOWbveazleW+i+azleS7pOWSjOWFtuS7luebuOWFs+azleinhO+8jOS4peemgeWPkeW4g+egtOWdj+WuquazleWSjOazleW+i+OAgeazleinhOeahOS/oeaBr+OAglxcbjMu6YG15a6I5YWs5a6J6YOo5YWz5LqO44CK6K6h566X5py65L+h5oGv572R57uc5Zu96ZmF6IGU572R5a6J5YWo5L+d5oqk566h55CG5Yqe5rOV44CL55qE6KeE5a6a77yM6Ieq6KeJ57u05oqk6K6h566X5py65L+h5oGv572R57uc55qE5a6J5YWo44CCXFxuNC7kuKXnpoHlnKjnvZHkuIrlrqPmiazlsIHlu7rov7fkv6HjgIHmt6vnp73jgIHoibLmg4XjgIHmmrTlipvjgIHotYzljZrjgIHmrLror4jnrYnkuI3mraPlvZPooYzkuLrjgIJcXG41LuWNleS9jeaIluS4quS6uuWPkeW4g+eahOS/oeaBr+imgeecn+WunuacieaViOOAgeWHhuehruWujOaVtO+8jOW5tuS4jeW+l+acieW8leS6uuivr+ino+aIluiAheiZmuWBh+eahOmZiOi/sOOAglxcbjYu55So5oi35rOo5YaM5oiQ5Yqf5ZCO77yM6K+35aal5ZaE5L+d566h5oKo55qE55So5oi35ZCN5ZKM5a+G56CB44CCJyxcclxuICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICBcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIC8v5oiR5bey6ZiF6K+75bm25o6l5Y+X5bqU55So5L2/55So5Y2P6K6u77yI5Liq5Lq677yJXHJcbiAgZ3JOb3RpY2VGbigpOnZvaWR7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBnclByb3RvY29sQ2hlY2tlZDogIXRoaXMuZGF0YS5nclByb3RvY29sQ2hlY2tlZFxyXG4gICAgfSlcclxuICAgIERpYWxvZy5hbGVydCh7XHJcbiAgICAgIHRpdGxlOiAn5rOo5YaM6aG755+lJyxcclxuICAgICAgbWVzc2FnZUFsaWduOiAnbGVmdCcsXHJcbiAgICAgIG1lc3NhZ2U6ICcxLuacrOermemHh+eUqOWunuWQjeiupOivge+8jOeUs+ivt+S6uumhu+ehruS/neWhq+WGmeS/oeaBr+eahOecn+WunuOAgeWujOaVtOOAgeacieaViOOAguS/oeaBr+Whq+WGmeS4jeecn+WunuOAgeS4jeWujOaVtOetieWwhuWvvOiHtOazqOWGjOaXoOazleWuoeaguOmAmui/h+OAguacrOermeehruS/neeUqOaIt+S/oeaBr+eahOWuieWFqOaAp+WSjOS/neWvhuaAp+W5tuS4uuS5i+i0n+i0o+OAglxcbjIu6YG15a6I5Lit5Y2O5Lq65rCR5YWx5ZKM5Zu95rOV5b6L5rOV5Luk5ZKM5YW25LuW55u45YWz5rOV6KeE77yM5Lil56aB5Y+R5biD56C05Z2P5a6q5rOV5ZKM5rOV5b6L44CB5rOV6KeE55qE5L+h5oGv44CCXFxuMy7pgbXlrojlhazlronpg6jlhbPkuo7jgIrorqHnrpfmnLrkv6Hmga/nvZHnu5zlm73pmYXogZTnvZHlronlhajkv53miqTnrqHnkIblip7ms5XjgIvnmoTop4TlrprvvIzoh6rop4nnu7TmiqTorqHnrpfmnLrkv6Hmga/nvZHnu5znmoTlronlhajjgIJcXG40LuS4peemgeWcqOe9keS4iuWuo+aJrOWwgeW7uui/t+S/oeOAgea3q+enveOAgeiJsuaDheOAgeaatOWKm+OAgei1jOWNmuOAgeasuuiviOetieS4jeato+W9k+ihjOS4uuOAglxcbjUu5Y2V5L2N5oiW5Liq5Lq65Y+R5biD55qE5L+h5oGv6KaB55yf5a6e5pyJ5pWI44CB5YeG56Gu5a6M5pW077yM5bm25LiN5b6X5pyJ5byV5Lq66K+v6Kej5oiW6ICF6Jma5YGH55qE6ZmI6L+w44CCXFxuNi7nlKjmiLfms6jlhozmiJDlip/lkI7vvIzor7flpqXlloTkv53nrqHmgqjnmoTnlKjmiLflkI3lkozlr4bnoIHjgIInLFxyXG4gICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgIFxyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcblxyXG4gIC8v6aG16Z2i5Yid5aeL5YyWXHJcbiAgb25Mb2FkKCl7XHJcbiAgICAvL+mhtemdouagh+mimFxyXG4gICAgd3guc2V0TmF2aWdhdGlvbkJhclRpdGxlKHsgICAgIFxyXG4gICAgICB0aXRsZTogXCLms6jlhoxcIlxyXG4gICAgfSk7XHJcbiAgICAvL+iOt+WPluWNleS9jeexu+Wei1xyXG4gICAgdGhpcy5nZXREYW53ZWlMaXN0KCk7XHJcbiAgICAvL+iOt+WPluaJgOWcqOWcsOWMulxyXG4gICAgdGhpcy5nZXRUZW5hbnRMaXN0KCk7XHJcbiAgICAvL+S6p+S4muOAgeihjOS4muexu+WIq1xyXG4gICAgdGhpcy5nZXRJbmR1c3RyeUJ1c2luZXNzZXMoKTtcclxuICAgIC8v6K+B5Lu257G75Z6LXHJcbiAgICB0aGlzLmdldGNhcmRMaXN0KCk7XHJcbiAgICAvL+aCqOWxnuS6jlxyXG4gICAgdGhpcy5nZXRUeXBlSWRMaXN0KCk7XHJcbiAgfSxcclxuXHJcbiAgLy/pobXpnaLmuLLmn5PlrozmiJBcclxuICBvblJlYWR5KCl7fSxcclxuXHJcbiAgLy/pobXpnaLmmL7npLpcclxuICBvblNob3coKXt9LFxyXG5cclxuICAvL+mhtemdoumakOiXj1xyXG4gIG9uSGlkZSgpe30sXHJcblxyXG4gIC8v6aG16Z2i5YWz6ZetXHJcbiAgb25VbmxvYWQoKXt9XHJcbn0pXHJcbmV4cG9ydCB7fTtcclxuIl19