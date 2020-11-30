"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dialog = require('../../miniprogram_npm/@vant/weapp/dialog/dialog.js').default;
var Toast = require('../../miniprogram_npm/@vant/weapp/toast/toast.js').default;
var api = getApp().globalData;
var https = require('../../utils/myRequest.js');
Page({
    data: {
        jgOverlay: true,
        grOverlay: true,
        jgPlatformDisabled: false,
        jgFlag: false,
        grFlag: false,
        contentOverflow: 'scroll',
        tabActive: 'jg',
        qydanweiList: [],
        tenantList: [],
        platformIdList: [],
        cardList: [],
        grPlatformIdList: [],
        grEnterListList: [],
        jgVerifyCodeTime: '获取验证码',
        jgDisabled: false,
        jgProtocolChecked: false,
        grVerifyCodeTime: '获取验证码',
        grDisabled: false,
        grProtocolChecked: false,
        jgRepeatPassword: '',
        jgPasswordError: '',
        jgFormDate: {
            shxyCode: '',
            password: '',
            trueword: '',
            qyName: '',
            tenantId: '',
            linkTel: '',
            verifyCode: '',
            isCxPlatform: '2',
            isCyPlatform: '2',
            platformId: ''
        },
        jgFormRrror: {
            shxyCodeError: '',
            passwordError: '',
            truewordError: '',
            qyNameError: '',
            tenantIdError: '',
            linkTelError: '',
            verifyCodeError: '',
            emailError: ''
        },
        jgVerification: false,
        grFormDate: {
            cardTypeId: '',
            cardNum: '',
            realName: '',
            xiaQuId: '',
            danWeiId: '',
            phoneNum: '',
            verifyCode: '',
            isLiuXue: '2',
            password: '',
            trueword: '',
        },
        grFormRrror: {
            cardTypeIdRrror: '',
            cardNumRrror: '',
            realNameError: '',
            xiaQuIdError: '',
            danWeiIdError: '',
            phoneNumError: '',
            verifyCodeError: '',
            passwordError: '',
            truewordError: '',
        },
        grVerification: false,
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
                var _a;
                if (item.dicName == '居民身份证（户口簿）') {
                    _this.setData((_a = {},
                        _a["grFormRrror.cardTypeIdRrror"] = '',
                        _a["grFormDate.cardTypeId"] = item.id,
                        _a.grVerification = true,
                        _a));
                }
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
    getEnterListList: function () {
        var _this = this;
        https.request(api.enterList + '?xiaQuId=' + this.data.grFormDate.xiaQuId, null, 'GET')
            .then(function (res) {
            var list = res.list.map(function (item) {
                return {
                    text: item.qyName,
                    value: item.id
                };
            });
            _this.setData({
                grEnterListList: list
            });
        }, function (err) {
            console.log(err);
        });
    },
    onTabChange: function () {
        this.setData({
            contentOverflow: 'scroll'
        });
        this.selectComponent('#jgTenant').toggle(false);
        this.selectComponent('#jgPlatform').toggle(false);
        this.selectComponent('#grCardType').toggle(false);
        this.selectComponent('#grxiaQu').toggle(false);
        this.selectComponent('#grPlatform').toggle(false);
    },
    cxRightIcon: function () {
        Dialog.alert({
            title: '是否创新平台主体单位',
            messageAlign: 'left',
            message: '创新平台：实验室（研究中心）、重点实验室、企业技术中心、科技创新基地、国际科技合作基地、工程技术研究中心、技术创新中心、院士工作站、有关国家级人才工作站、专家工作站、博士后科研工作站、博士后创新实践基地、技能大师工作室（工作站）、高新技术企业、智库等新型研发机构、研究院。',
        }).then(function () {
        });
    },
    cyRightIcon: function () {
        Dialog.alert({
            title: '是否创业平台主体单位',
            messageAlign: 'left',
            message: '创业平台：孵化器、孵化基地、众创空间、星创天地、产业园区等。',
        }).then(function () {
        });
    },
    jgShxyCodeInput: function (res) {
        var _a;
        if (res.detail) {
            this.setData((_a = {},
                _a["jgFormRrror.shxyCodeError"] = '',
                _a["jgFormDate.shxyCode"] = res.detail,
                _a.jgVerification = true,
                _a));
        }
    },
    jgShxyCodeBlur: function (res) {
        var _a, _b, _c;
        var reg = /[1-9]\d{15}/;
        var str = reg.test(res.detail.value);
        if (res.detail.value) {
            if (str) {
                this.setData((_a = {},
                    _a["jgFormRrror.shxyCodeError"] = '',
                    _a["jgFormDate.shxyCode"] = res.detail.value,
                    _a.jgVerification = true,
                    _a));
            }
            else {
                this.setData((_b = {},
                    _b["jgFormRrror.shxyCodeError"] = '请输入正确统一社会信用代码',
                    _b["jgFormDate.shxyCode"] = res.detail.value,
                    _b.jgVerification = false,
                    _b));
            }
        }
        else {
            this.setData((_c = {},
                _c["jgFormRrror.shxyCodeError"] = '',
                _c["jgFormDate.shxyCode"] = res.detail.value,
                _c.jgVerification = false,
                _c));
        }
    },
    jgPasswordInput: function (res) {
        var _a;
        if (res.detail) {
            this.setData((_a = {},
                _a["jgFormRrror.passwordError"] = '',
                _a["jgFormDate.password"] = res.detail,
                _a.jgVerification = true,
                _a));
        }
    },
    jgPasswordBlur: function (res) {
        var _a, _b, _c;
        var reg = /(?=.*([a-zA-Z].*))(?=.*[0-9].*)[a-zA-Z0-9-*/+.~!@#$%^&*()]{6,20}$/;
        var str = reg.test(res.detail.value);
        if (res.detail.value) {
            if (str) {
                this.setData((_a = {},
                    _a["jgFormRrror.passwordError"] = '',
                    _a["jgFormDate.password"] = res.detail.value,
                    _a.jgVerification = true,
                    _a));
            }
            else {
                this.setData((_b = {},
                    _b["jgFormRrror.passwordError"] = '数字、英文、字符两种及以上6-20位',
                    _b["jgFormDate.password"] = res.detail.value,
                    _b.jgVerification = false,
                    _b));
            }
        }
        else {
            this.setData((_c = {},
                _c["jgFormRrror.passwordError"] = '',
                _c["jgFormDate.password"] = res.detail.value,
                _c.jgVerification = false,
                _c));
        }
    },
    jgRepeatPasswordInput: function (res) {
        var _a;
        if (res.detail) {
            this.setData((_a = {},
                _a["jgFormRrror.truewordError"] = '',
                _a["jgFormDate.trueword"] = res.detail,
                _a.jgVerification = true,
                _a));
        }
    },
    jgRepeatPasswordBlur: function (res) {
        var _a, _b, _c;
        if (res.detail.value) {
            if (res.detail.value != this.data.jgFormDate.password) {
                this.setData((_a = {},
                    _a["jgFormRrror.truewordError"] = '两次输入的密码不一致',
                    _a["jgFormDate.trueword"] = res.detail.value,
                    _a.jgVerification = false,
                    _a));
            }
            else {
                this.setData((_b = {},
                    _b["jgFormRrror.truewordError"] = '',
                    _b["jgFormDate.trueword"] = res.detail.value,
                    _b.jgVerification = true,
                    _b));
            }
        }
        else {
            this.setData((_c = {},
                _c["jgFormRrror.truewordError"] = '',
                _c["jgFormDate.trueword"] = res.detail.value,
                _c.jgVerification = false,
                _c));
        }
    },
    jgQyNameInput: function (res) {
        var _a;
        if (res.detail) {
            this.setData((_a = {},
                _a["jgFormRrror.qyNameError"] = '',
                _a["jgFormDate.qyName"] = res.detail,
                _a.jgVerification = true,
                _a));
        }
    },
    jgQyNameBlur: function (res) {
        var _a;
        if (res.detail.value) {
            this.setData((_a = {},
                _a["jgFormRrror.qyNameError"] = '',
                _a["jgFormDate.qyName"] = res.detail.value,
                _a.jgVerification = true,
                _a));
        }
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
    jgLinkTelInput: function (res) {
        var _a;
        if (res.detail) {
            this.setData((_a = {},
                _a["jgFormRrror.linkTelError"] = '',
                _a["jgFormDate.linkTel"] = res.detail,
                _a.jgVerification = true,
                _a));
        }
    },
    jgLinkTel: function (res) {
        var _a, _b, _c;
        var reg = /^((1[0-9]{10})|(((([0-9]{3}-)?[0-9]{8})|(([0-9]{4}-)?[0-9]{7}))(-[0-9]{1,4})?))$/;
        var str = reg.test(res.detail.value);
        if (res.detail.value) {
            if (str) {
                this.setData((_a = {},
                    _a["jgFormRrror.linkTelError"] = '',
                    _a["jgFormDate.linkTel"] = res.detail.value,
                    _a.jgVerification = true,
                    _a));
            }
            else {
                this.setData((_b = {},
                    _b["jgFormRrror.linkTelError"] = '请输入正确的联系电话',
                    _b["jgFormDate.linkTel"] = res.detail.value,
                    _b.jgVerification = false,
                    _b));
            }
        }
        else {
            this.setData((_c = {},
                _c["jgFormRrror.linkTelError"] = '',
                _c["jgFormDate.linkTel"] = res.detail.value,
                _c.jgVerification = false,
                _c));
        }
    },
    jgVerifyCodeInput: function (res) {
        var _a;
        if (res.detail) {
            this.setData((_a = {},
                _a["jgFormRrror.verifyCodeError"] = '',
                _a["jgFormDate.verifyCode"] = res.detail,
                _a.jgVerification = true,
                _a));
        }
    },
    jgVerifyCode: function (res) {
        var _a;
        if (res.detail.value) {
            this.setData((_a = {},
                _a["jgFormRrror.verifyCodeError"] = '',
                _a["jgFormDate.verifyCode"] = res.detail.value,
                _a.jgVerification = true,
                _a));
        }
    },
    jgPlatformOpen: function () {
        if (this.data.platformIdList.length == 0) {
            Toast('请先选择所在地区！');
            this.setData({
                contentOverflow: 'scroll',
                jgOverlay: false
            });
        }
        else {
            this.setData({
                contentOverflow: 'hidden',
                jgOverlay: true
            });
        }
    },
    jgPlatformOpened: function () {
        if (this.data.platformIdList.length == 0) {
            this.selectComponent('#jgPlatform').toggle(false);
        }
    },
    jgPlatformFn: function (value) {
        var _a;
        this.setData((_a = {},
            _a["jgFormDate.platformId"] = value.detail,
            _a));
    },
    jgSubmitFn: function () {
        var _a, _b, _c, _d, _e, _f, _g;
        if (this.data.jgFormDate.shxyCode == '') {
            this.setData((_a = {},
                _a["jgFormRrror.shxyCodeError"] = '请输入统一社会信用代码',
                _a.jgVerification = false,
                _a));
        }
        if (this.data.jgFormDate.password == '') {
            this.setData((_b = {},
                _b["jgFormRrror.passwordError"] = '请输入密码',
                _b.jgVerification = false,
                _b));
        }
        if (this.data.jgFormDate.trueword == '') {
            this.setData((_c = {},
                _c["jgFormRrror.truewordError"] = '请再次确认密码',
                _c.jgVerification = false,
                _c));
        }
        if (this.data.jgFormDate.qyName == '') {
            this.setData((_d = {},
                _d["jgFormRrror.qyNameError"] = '请输入单位名称',
                _d.jgVerification = false,
                _d));
        }
        if (this.data.jgFormDate.tenantId == '') {
            this.setData((_e = {},
                _e["jgFormRrror.tenantIdError"] = '请选择所在地区',
                _e.jgVerification = false,
                _e));
        }
        if (this.data.jgFormDate.linkTel == '') {
            this.setData((_f = {},
                _f["jgFormRrror.linkTelError"] = '请输入联系电话',
                _f.jgVerification = false,
                _f));
        }
        if (this.data.jgFormDate.verifyCode == '') {
            this.setData((_g = {},
                _g["jgFormRrror.verifyCodeError"] = '请输入验证码',
                _g.jgVerification = false,
                _g));
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
        var _a, _b;
        if (event.detail == '1') {
            this.setData((_a = {},
                _a["jgFormDate.platformId"] = '',
                _a.jgPlatformDisabled = true,
                _a));
        }
        else {
            this.setData({
                jgPlatformDisabled: false
            });
        }
        this.setData((_b = {},
            _b["jgFormDate.isCyPlatform"] = event.detail,
            _b));
    },
    grCardTypeFn: function (value) {
        var _a;
        this.setData((_a = {},
            _a["grFormRrror.cardTypeIdRrror"] = '',
            _a["grFormDate.cardTypeId"] = value.detail,
            _a.grVerification = true,
            _a));
    },
    grCardNumInput: function (res) {
        var _a;
        if (res.detail) {
            this.setData((_a = {},
                _a["grFormRrror.cardNumRrror"] = '',
                _a["grFormDate.cardNum"] = res.detail,
                _a.grVerification = true,
                _a));
        }
    },
    grCardNum: function (res) {
        var _a;
        if (res.detail.value) {
            this.setData((_a = {},
                _a["grFormRrror.cardNumRrror"] = '',
                _a["grFormDate.cardNum"] = res.detail.value,
                _a.grVerification = true,
                _a));
        }
    },
    grPasswordInput: function (res) {
        var _a;
        if (res.detail) {
            this.setData((_a = {},
                _a["grFormRrror.passwordError"] = '',
                _a["grFormDate.password"] = res.detail,
                _a.grVerification = true,
                _a));
        }
    },
    grPasswordBlur: function (res) {
        var _a, _b, _c;
        var reg = /(?=.*([a-zA-Z].*))(?=.*[0-9].*)[a-zA-Z0-9-*/+.~!@#$%^&*()]{6,20}$/;
        var str = reg.test(res.detail.value);
        if (res.detail.value) {
            if (str) {
                this.setData((_a = {},
                    _a["grFormRrror.passwordError"] = '',
                    _a["grFormDate.password"] = res.detail.value,
                    _a.grVerification = true,
                    _a));
            }
            else {
                this.setData((_b = {},
                    _b["grFormRrror.passwordError"] = '数字、英文、字符两种及以上6-20位',
                    _b["grFormDate.password"] = res.detail.value,
                    _b.grVerification = false,
                    _b));
            }
        }
        else {
            this.setData((_c = {},
                _c["grFormRrror.passwordError"] = '',
                _c["grFormDate.password"] = res.detail.value,
                _c.grVerification = false,
                _c));
        }
    },
    grRepeatPasswordInput: function (res) {
        var _a;
        if (res.detail) {
            this.setData((_a = {},
                _a["grFormRrror.truewordError"] = '',
                _a["grFormDate.trueword"] = res.detail,
                _a.grVerification = true,
                _a));
        }
    },
    grRepeatPasswordBlur: function (res) {
        var _a, _b, _c;
        if (res.detail.value) {
            if (res.detail.value != this.data.grFormDate.password) {
                this.setData((_a = {},
                    _a["grFormRrror.truewordError"] = '两次输入的密码不一致',
                    _a["grFormDate.trueword"] = res.detail.value,
                    _a.grVerification = false,
                    _a));
            }
            else {
                this.setData((_b = {},
                    _b["grFormRrror.truewordError"] = '',
                    _b["grFormDate.trueword"] = res.detail.value,
                    _b.grVerification = true,
                    _b));
            }
        }
        else {
            this.setData((_c = {},
                _c["grFormRrror.truewordError"] = '',
                _c["grFormDate.trueword"] = res.detail.value,
                _c.grVerification = false,
                _c));
        }
    },
    grRealNameInput: function (res) {
        var _a;
        if (res.detail) {
            this.setData((_a = {},
                _a["grFormRrror.realNameRrror"] = '',
                _a["grFormDate.realName"] = res.detail,
                _a.grVerification = true,
                _a));
        }
    },
    grRealName: function (res) {
        var _a;
        if (res.detail.value) {
            this.setData((_a = {},
                _a["grFormRrror.realNameRrror"] = '',
                _a["grFormDate.realName"] = res.detail.value,
                _a.grVerification = true,
                _a));
        }
    },
    grPhoneNumInput: function (res) {
        var _a;
        if (res.detail) {
            this.setData((_a = {},
                _a["grFormRrror.phoneNumError"] = '',
                _a["grFormDate.phoneNum"] = res.detail,
                _a.grVerification = true,
                _a));
        }
    },
    grPhoneNum: function (res) {
        var _a, _b, _c;
        var reg = /^((1[0-9]{10})|(((([0-9]{3}-)?[0-9]{8})|(([0-9]{4}-)?[0-9]{7}))(-[0-9]{1,4})?))$/;
        var str = reg.test(res.detail.value);
        if (res.detail.value) {
            if (str) {
                this.setData((_a = {},
                    _a["grFormRrror.phoneNumError"] = '',
                    _a["grFormDate.phoneNum"] = res.detail.value,
                    _a.grVerification = true,
                    _a));
            }
            else {
                this.setData((_b = {},
                    _b["grFormRrror.phoneNumError"] = '请输入正确的联系电话',
                    _b["grFormDate.phoneNum"] = res.detail.value,
                    _b.grVerification = false,
                    _b));
            }
        }
        else {
            this.setData((_c = {},
                _c["grFormRrror.phoneNumError"] = '',
                _c["grFormDate.phoneNum"] = res.detail.value,
                _c.grVerification = false,
                _c));
        }
    },
    grVerifyCodeInput: function (res) {
        var _a;
        if (res.detail) {
            this.setData((_a = {},
                _a["grFormRrror.verifyCodeError"] = '',
                _a["grFormDate.verifyCode"] = res.detail,
                _a.grVerification = true,
                _a));
        }
    },
    grVerifyCode: function (res) {
        var _a;
        if (res.detail.value) {
            this.setData((_a = {},
                _a["grFormRrror.verifyCodeError"] = '',
                _a["grFormDate.verifyCode"] = res.detail.value,
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
    grxiaQuFn: function (value) {
        var _a;
        this.setData((_a = {},
            _a["grFormRrror.xiaQuIdError"] = '',
            _a["grFormDate.xiaQuId"] = value.detail,
            _a.grVerification = true,
            _a["grFormDate.danWeiId"] = '',
            _a));
        this.getEnterListList();
    },
    grPlatformOpen: function () {
        if (this.data.grEnterListList.length == 0) {
            Toast('请先选择所在地区！');
            this.setData({
                contentOverflow: 'scroll',
                grOverlay: false
            });
        }
        else {
            this.setData({
                contentOverflow: 'hidden',
                grOverlay: true
            });
        }
    },
    grPlatformOpened: function () {
        if (this.data.grEnterListList.length == 0) {
            this.selectComponent('#grPlatform').toggle(false);
        }
    },
    grPlatformFn: function (value) {
        var _a;
        this.setData((_a = {},
            _a["grFormDate.danWeiId"] = value.detail,
            _a));
    },
    grIsLiuXue: function (event) {
        var _a;
        this.setData((_a = {},
            _a["grFormDate.isLiuXue"] = event.detail,
            _a));
    },
    grProtocolCheckedFn: function (value) {
        this.setData({
            grProtocolChecked: value.detail
        });
    },
    grSubmitFn: function () {
        var _a, _b, _c, _d, _e, _f, _g, _h;
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
        if (this.data.grFormDate.password == '') {
            this.setData((_c = {},
                _c["grFormRrror.passwordError"] = '请输入密码',
                _c.grVerification = false,
                _c));
        }
        if (this.data.grFormDate.trueword == '') {
            this.setData((_d = {},
                _d["grFormRrror.truewordError"] = '请再次确认密码',
                _d.grVerification = false,
                _d));
        }
        if (this.data.grFormDate.realName == '') {
            this.setData((_e = {},
                _e["grFormRrror.realNameRrror"] = '请输入姓名',
                _e.grVerification = false,
                _e));
        }
        if (this.data.grFormDate.phoneNum == '') {
            this.setData((_f = {},
                _f["grFormRrror.phoneNumError"] = '请输入联系电话',
                _f.grVerification = false,
                _f));
        }
        if (this.data.grFormDate.verifyCode == '') {
            this.setData((_g = {},
                _g["grFormRrror.verifyCodeError"] = '请输入验证码',
                _g.grVerification = false,
                _g));
        }
        if (this.data.grFormDate.xiaQuId == '') {
            this.setData((_h = {},
                _h["grFormRrror.xiaQuIdError"] = '请选择所在地区',
                _h.grVerification = false,
                _h));
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
        this.getcardList();
    },
    onReady: function () { },
    onShow: function () {
    },
    onHide: function () { },
    onUnload: function () {
        var _a;
        this.setData((_a = {},
            _a["jgFormDate.shxyCode"] = '',
            _a["jgFormDate.password"] = '',
            _a["jgFormDate.trueword"] = '',
            _a["jgFormDate.qyName"] = '',
            _a["jgFormDate.tenantId"] = '',
            _a["jgFormDate.linkTel"] = '',
            _a["jgFormDate.verifyCode"] = '',
            _a["jgFormDate.isCxPlatform"] = '2',
            _a["jgFormDate.isCyPlatform"] = '2',
            _a["jgFormDate.platformId"] = '',
            _a["grFormDate.cardTypeId"] = '',
            _a["grFormDate.cardNum"] = '',
            _a["grFormDate.realName"] = '',
            _a["grFormDate.xiaQuId"] = '',
            _a["grFormDate.danWeiId"] = '',
            _a["grFormDate.phoneNum"] = '',
            _a["grFormDate.verifyCode"] = '',
            _a["grFormDate.isLiuXue"] = '2',
            _a["grFormDate.password"] = '',
            _a["grFormDate.trueword"] = '',
            _a));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXJlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlZ2lzdGVyZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsb0RBQW9ELENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDbkYsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLGtEQUFrRCxDQUFDLENBQUMsT0FBTyxDQUFDO0FBQ2hGLElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBRSxDQUFDLFVBQVUsQ0FBQztBQUNoQyxJQUFJLEtBQUssR0FBSSxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUVqRCxJQUFJLENBQUM7SUFFSCxJQUFJLEVBQUU7UUFDSixTQUFTLEVBQUUsSUFBSTtRQUNmLFNBQVMsRUFBRSxJQUFJO1FBQ2Ysa0JBQWtCLEVBQUUsS0FBSztRQUV6QixNQUFNLEVBQUUsS0FBSztRQUNiLE1BQU0sRUFBRSxLQUFLO1FBRWIsZUFBZSxFQUFFLFFBQVE7UUFDekIsU0FBUyxFQUFFLElBQUk7UUFFZixZQUFZLEVBQUUsRUFBRTtRQUNoQixVQUFVLEVBQUUsRUFBRTtRQUNkLGNBQWMsRUFBRSxFQUFFO1FBQ2xCLFFBQVEsRUFBRSxFQUFFO1FBQ1osZ0JBQWdCLEVBQUUsRUFBRTtRQUNwQixlQUFlLEVBQUUsRUFBRTtRQUVuQixnQkFBZ0IsRUFBRSxPQUFPO1FBQ3pCLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLGlCQUFpQixFQUFFLEtBQUs7UUFFeEIsZ0JBQWdCLEVBQUUsT0FBTztRQUN6QixVQUFVLEVBQUUsS0FBSztRQUNqQixpQkFBaUIsRUFBRSxLQUFLO1FBR3hCLGdCQUFnQixFQUFFLEVBQUU7UUFDcEIsZUFBZSxFQUFFLEVBQUU7UUFDbkIsVUFBVSxFQUFDO1lBQ1QsUUFBUSxFQUFFLEVBQUU7WUFDWixRQUFRLEVBQUUsRUFBRTtZQUNaLFFBQVEsRUFBRSxFQUFFO1lBQ1osTUFBTSxFQUFFLEVBQUU7WUFDVixRQUFRLEVB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QUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsT0FBTyxnQkFBRyxDQUFDO0lBR1gsTUFBTTtJQUVOLENBQUM7SUFHRCxNQUFNLGdCQUFHLENBQUM7SUFHVixRQUFROztRQUNOLElBQUksQ0FBQyxPQUFPO1lBQ1YsR0FBQyxxQkFBcUIsSUFBRSxFQUFFO1lBQzFCLEdBQUMscUJBQXFCLElBQUUsRUFBRTtZQUMxQixHQUFDLHFCQUFxQixJQUFFLEVBQUU7WUFDMUIsR0FBQyxtQkFBbUIsSUFBRSxFQUFFO1lBQ3hCLEdBQUMscUJBQXFCLElBQUUsRUFBRTtZQUMxQixHQUFDLG9CQUFvQixJQUFFLEVBQUU7WUFDekIsR0FBQyx1QkFBdUIsSUFBRSxFQUFFO1lBQzVCLEdBQUMseUJBQXlCLElBQUUsR0FBRztZQUMvQixHQUFDLHlCQUF5QixJQUFFLEdBQUc7WUFDL0IsR0FBQyx1QkFBdUIsSUFBRSxFQUFFO1lBRTVCLEdBQUMsdUJBQXVCLElBQUUsRUFBRTtZQUM1QixHQUFDLG9CQUFvQixJQUFFLEVBQUU7WUFDekIsR0FBQyxxQkFBcUIsSUFBRSxFQUFFO1lBQzFCLEdBQUMsb0JBQW9CLElBQUUsRUFBRTtZQUN6QixHQUFDLHFCQUFxQixJQUFFLEVBQUU7WUFDMUIsR0FBQyxxQkFBcUIsSUFBRSxFQUFFO1lBQzFCLEdBQUMsdUJBQXVCLElBQUUsRUFBRTtZQUM1QixHQUFDLHFCQUFxQixJQUFFLEdBQUc7WUFDM0IsR0FBQyxxQkFBcUIsSUFBRSxFQUFFO1lBQzFCLEdBQUMscUJBQXFCLElBQUUsRUFBRTtnQkFDMUIsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZWdpc3RlcmVkLnRzXHJcbmxldCBEaWFsb2cgPSByZXF1aXJlKCcuLi8uLi9taW5pcHJvZ3JhbV9ucG0vQHZhbnQvd2VhcHAvZGlhbG9nL2RpYWxvZy5qcycpLmRlZmF1bHQ7XHJcbmxldCBUb2FzdCA9IHJlcXVpcmUoJy4uLy4uL21pbmlwcm9ncmFtX25wbS9AdmFudC93ZWFwcC90b2FzdC90b2FzdC5qcycpLmRlZmF1bHQ7XHJcbmNvbnN0IGFwaSA9IGdldEFwcCgpLmdsb2JhbERhdGE7ICAvLyDojrflj5blupTnlKjlrp7kvotcclxubGV0IGh0dHBzICA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL215UmVxdWVzdC5qcycpOyAgICAgLy/ojrflj5ZhamF45pa55rOVXHJcblxyXG5QYWdlKHtcclxuICAvL+mhtemdouaVsOaNrlxyXG4gIGRhdGE6IHtcclxuICAgIGpnT3ZlcmxheTogdHJ1ZSwgICAgICAgICAgICAgICAgIC8v5py65p6E5omA5bGe5Yib5Lia5bmz5Y+w5piv5ZCm5pi+56S66YGu572pXHJcbiAgICBnck92ZXJsYXk6IHRydWUsICAgICAgICAgICAgICAgICAvL+S4quS6uuW3peS9nOWNleS9jeaYr+WQpuaYvuekuumBrue9qVxyXG4gICAgamdQbGF0Zm9ybURpc2FibGVkOiBmYWxzZSwgICAgICAgLy/miYDlsZ7liJvkuJrlubPlj7BcclxuXHJcbiAgICBqZ0ZsYWc6IGZhbHNlLCAgICAgICAgICAgICAgICAgIC8v5py65p6E6KGM5Lia6YeN5aSN5Yik5patXHJcbiAgICBnckZsYWc6IGZhbHNlLCAgICAgICAgICAgICAgICAgIC8v5Liq5Lq66KGM5Lia6YeN5aSN5Yik5patXHJcblxyXG4gICAgY29udGVudE92ZXJmbG93OiAnc2Nyb2xsJywgICAgICAvL+WGheWuuemrmOW6plxyXG4gICAgdGFiQWN0aXZlOiAnamcnLCAgICAgICAgICAgICAgICAvL+azqOWGjHRhYlxyXG5cclxuICAgIHF5ZGFud2VpTGlzdDogW10sICAgICAgICAgICAgICAgLy/ljZXkvY3nsbvlnotcclxuICAgIHRlbmFudExpc3Q6IFtdLCAgICAgICAgICAgICAgICAgLy/miYDlnKjlnLDljLpcclxuICAgIHBsYXRmb3JtSWRMaXN0OiBbXSwgICAgICAgICAgICAgLy/miYDlsZ7liJvkuJrlubPlj7BcclxuICAgIGNhcmRMaXN0OiBbXSwgICAgICAgICAgICAgICAgICAgLy/or4Hku7bnsbvlnotcclxuICAgIGdyUGxhdGZvcm1JZExpc3Q6IFtdLCAgICAgICAgICAgLy/liJvkuJrlubPlj7BcclxuICAgIGdyRW50ZXJMaXN0TGlzdDogW10sICAgICAgICAgICAgLy/lt6XkvZzljZXkvY1cclxuICBcclxuICAgIGpnVmVyaWZ5Q29kZVRpbWU6ICfojrflj5bpqozor4HnoIEnLCAgLy/ojrflj5bpqozor4HnoIFcclxuICAgIGpnRGlzYWJsZWQ6IGZhbHNlLCAgICAgICAgICAgICAgLy/pqozor4HnoIHmjInpkq7nirbmgIFcclxuICAgIGpnUHJvdG9jb2xDaGVja2VkOiBmYWxzZSwgICAgICAgLy/ljY/orq5cclxuXHJcbiAgICBnclZlcmlmeUNvZGVUaW1lOiAn6I635Y+W6aqM6K+B56CBJywgIC8v6I635Y+W6aqM6K+B56CBXHJcbiAgICBnckRpc2FibGVkOiBmYWxzZSwgICAgICAgICAgICAgIC8v6aqM6K+B56CB5oyJ6ZKu54q25oCBXHJcbiAgICBnclByb3RvY29sQ2hlY2tlZDogZmFsc2UsICAgICAgIC8v5Y2P6K6uXHJcblxyXG4gICAgLy/mnLrmnoTms6jlhoxcclxuICAgIGpnUmVwZWF0UGFzc3dvcmQ6ICcnLCAgICAvL+acuuaehOehruiupOWvhueggVxyXG4gICAgamdQYXNzd29yZEVycm9yOiAnJywgICAgIC8v5py65p6E56Gu6K6k5a+G56CBXHJcbiAgICBqZ0Zvcm1EYXRlOnsgIC8v5py65p6E6KGo5Y2VXHJcbiAgICAgIHNoeHlDb2RlOiAnJywgICAgICAgICAgICAgICAgIC8v57uf5LiA56S+5Lya5L+h55So5Luj56CBXHJcbiAgICAgIHBhc3N3b3JkOiAnJywgICAgICAgICAgICAgICAgIC8v5a+G56CBXHJcbiAgICAgIHRydWV3b3JkOiAnJywgICAgICAgICAgICAgICAgIC8v56Gu6K6k5a+G56CBXHJcbiAgICAgIHF5TmFtZTogJycsICAgICAgICAgICAgICAgICAgIC8v5Y2V5L2N5ZCN56ewXHJcbiAgICAgIHRlbmFudElkOiAnJywgICAgICAgICAgICAgICAgIC8v5omA5Zyo5Zyw5Yy6XHJcbiAgICAgIGxpbmtUZWw6ICcnLCAgICAgICAgICAgICAgICAgIC8v6IGU57O75Lq655S16K+dXHJcbiAgICAgIHZlcmlmeUNvZGU6ICcnLCAgICAgICAgICAgICAgIC8v6aqM6K+B56CBXHJcbiAgICAgIGlzQ3hQbGF0Zm9ybTogJzInLCAgICAgICAgICAgIC8v5piv5ZCm5Yib5paw5bmz5Y+w5Li75L2T5Y2V5L2NXHJcbiAgICAgIGlzQ3lQbGF0Zm9ybTogJzInLCAgICAgICAgICAgIC8v5piv5ZCm5Yib5Lia5bmz5Y+w5Li75L2T5Y2V5L2NXHJcbiAgICAgIHBsYXRmb3JtSWQ6ICcnICAgICAgICAgICAgICAgIC8v5omA5bGe5Yib5Lia5bmz5Y+wXHJcbiAgICB9LFxyXG4gICAgamdGb3JtUnJyb3I6eyAgLy/mnLrmnoTpqozor4FcclxuICAgICAgc2h4eUNvZGVFcnJvcjogJycsICAgICAgICAgICAgLy/nu5/kuIDnpL7kvJrkv6HnlKjku6PnoIFcclxuICAgICAgcGFzc3dvcmRFcnJvcjogJycsICAgICAgICAgICAgLy/lr4bnoIFcclxuICAgICAgdHJ1ZXdvcmRFcnJvcjogJycsICAgICAgICAgICAgLy/noa7orqTlr4bnoIFcclxuICAgICAgcXlOYW1lRXJyb3I6ICcnLCAgICAgICAgICAgICAgLy/ljZXkvY3lkI3np7BcclxuICAgICAgdGVuYW50SWRFcnJvcjogJycsICAgICAgICAgICAgLy/miYDlnKjlnLDljLpcclxuICAgICAgbGlua1RlbEVycm9yOiAnJywgICAgICAgICAgICAgLy/ogZTns7vkurrnlLXor51cclxuICAgICAgdmVyaWZ5Q29kZUVycm9yOiAnJywgICAgICAgICAgLy/pqozor4HnoIFcclxuICAgICAgZW1haWxFcnJvcjogJycgICAgICAgICAgICAgICAgLy/nlLXlrZDpgq7nrrFcclxuICAgIH0sXHJcbiAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2UsICAgIC8v6aqM6K+B5Yik5patXHJcblxyXG5cclxuICAgIC8v5Liq5Lq66aqM6K+BXHJcbiAgICBnckZvcm1EYXRlOnsgIC8v5py65p6E6KGo5Y2VXHJcbiAgICAgIGNhcmRUeXBlSWQ6ICcnLCAgICAgICAgICAgICAgICAvL+ivgeS7tuexu+Wei1xyXG4gICAgICBjYXJkTnVtOiAnJywgICAgICAgICAgICAgICAgICAgLy/or4Hku7blj7fnoIFcclxuICAgICAgcmVhbE5hbWU6ICcnLCAgICAgICAgICAgICAgICAgIC8v5aeT5ZCNXHJcbiAgICAgIHhpYVF1SWQ6ICcnLCAgICAgICAgICAgICAgICAgICAvL+aJgOWxnuWcsOWMulxyXG4gICAgICBkYW5XZWlJZDogJycsICAgICAgICAgICAgICAgICAgLy8g5bel5L2c5Y2V5L2NXHJcbiAgICAgIHBob25lTnVtOiAnJywgICAgICAgICAgICAgICAgICAvL+iBlOezu+eUteivnVxyXG4gICAgICB2ZXJpZnlDb2RlOiAnJywgICAgICAgICAgICAgICAgLy/pqozor4HnoIFcclxuICAgICAgaXNMaXVYdWU6ICcyJywgICAgICAgICAgICAgICAgIC8v5piv5ZCm5Li655WZ5a2m5Zue5Zu95Lq65ZGYXHJcbiAgICAgIHBhc3N3b3JkOiAnJywgICAgICAgICAgICAgICAgICAvL+WvhueggVxyXG4gICAgICB0cnVld29yZDogJycsICAgICAgICAgICAgICAgICAgLy/noa7orqTlr4bnoIFcclxuICAgIH0sXHJcbiAgICBnckZvcm1ScnJvcjp7ICAvL+acuuaehOmqjOivgVxyXG4gICAgICBjYXJkVHlwZUlkUnJyb3I6ICcnLCAgICAgICAgICAgLy/or4Hku7bnsbvlnotcclxuICAgICAgY2FyZE51bVJycm9yOiAnJywgICAgICAgICAgICAgIC8v6K+B5Lu25Y+356CBXHJcbiAgICAgIHJlYWxOYW1lRXJyb3I6ICcnLCAgICAgICAgICAgICAvL+Wnk+WQjVxyXG4gICAgICB4aWFRdUlkRXJyb3I6ICcnLCAgICAgICAgICAgICAgLy/miYDlsZ7lnLDljLpcclxuICAgICAgZGFuV2VpSWRFcnJvcjogJycsICAgICAgICAgICAgIC8vIOW3peS9nOWNleS9jVxyXG4gICAgICBwaG9uZU51bUVycm9yOiAnJywgICAgICAgICAgICAgLy/ogZTns7vnlLXor51cclxuICAgICAgdmVyaWZ5Q29kZUVycm9yOiAnJywgICAgICAgICAgIC8v6aqM6K+B56CBXHJcbiAgICAgIHBhc3N3b3JkRXJyb3I6ICcnLCAgICAgICAgICAgICAvL+WvhueggVxyXG4gICAgICB0cnVld29yZEVycm9yOiAnJywgICAgICAgICAgICAgLy/noa7orqTlr4bnoIFcclxuICAgIH0sXHJcbiAgICBnclZlcmlmaWNhdGlvbjogZmFsc2UsICAgIC8v6aqM6K+B5Yik5patXHJcbiAgfSxcclxuICBcclxuICBvblNoYXJlQXBwTWVzc2FnZToocmVzOmFueSk6YW55PT4geyAgLy/lj5HpgIHnu5nmnIvlj4tcclxuICAgIGlmIChyZXMuZnJvbSA9PT0gJ2J1dHRvbicpIHtcclxuICAgICAgLy8g5p2l6Ieq6aG16Z2i5YaF6L2s5Y+R5oyJ6ZKuXHJcbiAgICAgIGNvbnNvbGUubG9nKHJlcy50YXJnZXQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdGl0bGU6ICfpnZLlspvkurrmiY3liJvmlrDliJvkuJrlubPlj7DlnLDlm74nLFxyXG4gICAgICBwYXRoOiAnL3BhZ2VzL2hvbWUvaG9tZScsXHJcbiAgICAgIGltYWdlVXJsOiAnJ1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIG9uU2hhcmVUaW1lbGluZTooKTphbnk9PiB7ICAvL+WIhuS6q1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdGl0bGU6ICfpnZLlspvkurrmiY3liJvmlrDliJvkuJrlubPlj7DlnLDlm74nLFxyXG4gICAgICBxdWVyeToge30sXHJcbiAgICAgIGltYWdlVXJsOiAnJ1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGRyb3Bkb3duT3BlbigpOnZvaWR7ICAvL+aJk+W8gOS4i+aLieiPnOWNleinpuWPkVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgY29udGVudE92ZXJmbG93OiAnaGlkZGVuJ1xyXG4gICAgfSlcclxuICB9LFxyXG4gIGRyb3Bkb3duQ2xvc2UoKTp2b2lkeyAgLy/lhbPpl63kuIvmi4noj5zljZXop6blj5FcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGNvbnRlbnRPdmVyZmxvdzogJ3Njcm9sbCdcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcblxyXG4gIGdldERhbndlaUxpc3QoKTp2b2lkeyAgLy/ojrflj5bljZXkvY3nsbvlnotcclxuICAgIGh0dHBzLnJlcXVlc3QoYXBpLnN1Ym1lbnVEaWMgKyAnP21vaWQ9MTQnLCBudWxsLCAnR0VUJylcclxuICAgIC50aGVuKChyZXM6YW55KTp2b2lkPT57XHJcbiAgICAgIGxldCBsaXN0OmFueSA9IHJlcy52YWwubWFwKChpdGVtOmFueSk6YW55PT57XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHRleHQ6IGl0ZW0uZGljTmFtZSxcclxuICAgICAgICAgIHZhbHVlOiBpdGVtLmlkXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHF5ZGFud2VpTGlzdDogbGlzdFxyXG4gICAgICB9KVxyXG4gICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIGdldFRlbmFudExpc3QoKTp2b2lkeyAgLy/ojrflj5bmiYDlnKjlnLDljLpcclxuICAgIGh0dHBzLnJlcXVlc3QoYXBpLnRlbmFudExpc3QsIG51bGwsICdHRVQnKVxyXG4gICAgLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgbGV0IGxpc3Q6YW55ID0gcmVzLmxpc3QubWFwKChpdGVtOmFueSk6YW55PT57XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHRleHQ6IGl0ZW0uY25hbWUsXHJcbiAgICAgICAgICB2YWx1ZTogaXRlbS5pZFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICB0ZW5hbnRMaXN0OiBsaXN0XHJcbiAgICAgIH0pXHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgXHJcbiAgZ2V0UGxhdGZvcm1JZExpc3QoKTp2b2lkeyAgLy/ojrflj5bmiYDlsZ7liJvkuJrlubPlj7BcclxuICAgIGh0dHBzLnJlcXVlc3QoYXBpLmN5UGxhdGZvcm1BcGkgKyAnP3hpYVF1SWQ9JyArIHRoaXMuZGF0YS5qZ0Zvcm1EYXRlLnRlbmFudElkLCBudWxsLCAnR0VUJylcclxuICAgIC50aGVuKChyZXM6YW55KTp2b2lkPT57XHJcbiAgICAgIGxldCBsaXN0OmFueSA9IHJlcy5saXN0Lm1hcCgoaXRlbTphbnkpOmFueT0+e1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICB0ZXh0OiBpdGVtLmN5TmFtZSxcclxuICAgICAgICAgIHZhbHVlOiBpdGVtLmlkXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHBsYXRmb3JtSWRMaXN0OiBsaXN0XHJcbiAgICAgIH0pXHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBqZ1Byb3RvY29sQ2hlY2tlZEZuKHZhbHVlOmFueSk6dm9pZHsgIC8v5L2/55So5Y2P6K6uXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBqZ1Byb3RvY29sQ2hlY2tlZDogdmFsdWUuZGV0YWlsXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgZ2V0Y2FyZExpc3QoKTp2b2lkeyAgLy/ojrflj5bor4Hku7bnsbvlnotcclxuICAgIGh0dHBzLnJlcXVlc3QoYXBpLnN1Ym1lbnVEaWMgKyAnP21vaWQ9MycsIG51bGwsICdHRVQnKVxyXG4gICAgLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgbGV0IGxpc3Q6YW55ID0gcmVzLnZhbC5tYXAoKGl0ZW06YW55KTphbnk9PntcclxuICAgICAgICBpZihpdGVtLmRpY05hbWUgPT0gJ+Wxheawkei6q+S7veivge+8iOaIt+WPo+ewv++8iScpe1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgW1wiZ3JGb3JtUnJyb3IuY2FyZFR5cGVJZFJycm9yXCJdOiAnJyxcclxuICAgICAgICAgICAgW1wiZ3JGb3JtRGF0ZS5jYXJkVHlwZUlkXCJdOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICBnclZlcmlmaWNhdGlvbjogdHJ1ZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHRleHQ6IGl0ZW0uZGljTmFtZSxcclxuICAgICAgICAgIHZhbHVlOiBpdGVtLmlkXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGNhcmRMaXN0OiBsaXN0XHJcbiAgICAgIH0pXHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBnZXRHclBsYXRmb3JtSWRMaXN0KCk6dm9pZHsgIC8v6I635Y+W5Yib5Lia5bmz5Y+wXHJcbiAgICBodHRwcy5yZXF1ZXN0KGFwaS5jeVBsYXRmb3JtQXBpICsgJz94aWFRdUlkPScgKyB0aGlzLmRhdGEuZ3JGb3JtRGF0ZS54aWFRdUlkLCBudWxsLCAnR0VUJylcclxuICAgIC50aGVuKChyZXM6YW55KTp2b2lkPT57XHJcbiAgICAgIGxldCBsaXN0OmFueSA9IHJlcy5saXN0Lm1hcCgoaXRlbTphbnkpOmFueT0+e1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICB0ZXh0OiBpdGVtLmN5TmFtZSxcclxuICAgICAgICAgIHZhbHVlOiBpdGVtLmlkXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGdyUGxhdGZvcm1JZExpc3Q6IGxpc3RcclxuICAgICAgfSlcclxuICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIGdldEVudGVyTGlzdExpc3QoKTp2b2lkeyAgLy/ojrflj5blt6XkvZzljZXkvY1cclxuICAgIGh0dHBzLnJlcXVlc3QoYXBpLmVudGVyTGlzdCArICc/eGlhUXVJZD0nICsgdGhpcy5kYXRhLmdyRm9ybURhdGUueGlhUXVJZCwgbnVsbCwgJ0dFVCcpXHJcbiAgICAudGhlbigocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICBsZXQgbGlzdDphbnkgPSByZXMubGlzdC5tYXAoKGl0ZW06YW55KTphbnk9PntcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgdGV4dDogaXRlbS5xeU5hbWUsXHJcbiAgICAgICAgICB2YWx1ZTogaXRlbS5pZFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBnckVudGVyTGlzdExpc3Q6IGxpc3RcclxuICAgICAgfSlcclxuICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuXHJcblxyXG4gIG9uVGFiQ2hhbmdlKCk6dm9pZHsgIC8vdGFi5YiH5o2i6Kem5Y+RXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBjb250ZW50T3ZlcmZsb3c6ICdzY3JvbGwnXHJcbiAgICB9KVxyXG4gICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyNqZ1RlbmFudCcpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAgIC8v5py65p6E5omA5Zyo5Zyw5Yy6XHJcbiAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI2pnUGxhdGZvcm0nKS50b2dnbGUoZmFsc2UpOyAgICAgICAgLy/mnLrmnoTmiYDlsZ7liJvkuJrlubPlj7BcclxuICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjZ3JDYXJkVHlwZScpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAvL+S4quS6uuivgeS7tuexu+Wei1xyXG4gICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyNncnhpYVF1JykudG9nZ2xlKGZhbHNlKTsgICAgICAgICAgIC8v5Liq5Lq65omA5Zyo5Yy65Z+fXHJcbiAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI2dyUGxhdGZvcm0nKS50b2dnbGUoZmFsc2UpOyAgICAgICAgLy/kuKrkurrlt6XkvZzljZXkvY1cclxuICB9LFxyXG5cclxuICBjeFJpZ2h0SWNvbigpOnZvaWR7ICAvL+aYr+WQpuWIm+aWsOW5s+WPsOS4u+S9k+WNleS9jVxyXG4gICAgRGlhbG9nLmFsZXJ0KHtcclxuICAgICAgdGl0bGU6ICfmmK/lkKbliJvmlrDlubPlj7DkuLvkvZPljZXkvY0nLFxyXG4gICAgICBtZXNzYWdlQWxpZ246ICdsZWZ0JyxcclxuICAgICAgbWVzc2FnZTogJ+WIm+aWsOW5s+WPsO+8muWunumqjOWupO+8iOeglOeptuS4reW/g++8ieOAgemHjeeCueWunumqjOWupOOAgeS8geS4muaKgOacr+S4reW/g+OAgeenkeaKgOWIm+aWsOWfuuWcsOOAgeWbvemZheenkeaKgOWQiOS9nOWfuuWcsOOAgeW3peeoi+aKgOacr+eglOeptuS4reW/g+OAgeaKgOacr+WIm+aWsOS4reW/g+OAgemZouWjq+W3peS9nOermeOAgeacieWFs+WbveWutue6p+S6uuaJjeW3peS9nOermeOAgeS4k+WutuW3peS9nOermeOAgeWNmuWjq+WQjuenkeeglOW3peS9nOermeOAgeWNmuWjq+WQjuWIm+aWsOWunui3teWfuuWcsOOAgeaKgOiDveWkp+W4iOW3peS9nOWupO+8iOW3peS9nOerme+8ieOAgemrmOaWsOaKgOacr+S8geS4muOAgeaZuuW6k+etieaWsOWei+eglOWPkeacuuaehOOAgeeglOeptumZouOAgicsXHJcbiAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgXHJcbiAgICB9KTtcclxuICB9LFxyXG4gIGN5UmlnaHRJY29uKCk6dm9pZHsgIC8v5piv5ZCm5Yib5Lia5bmz5Y+w5Li75L2T5Y2V5L2NXHJcbiAgICBEaWFsb2cuYWxlcnQoe1xyXG4gICAgICB0aXRsZTogJ+aYr+WQpuWIm+S4muW5s+WPsOS4u+S9k+WNleS9jScsXHJcbiAgICAgIG1lc3NhZ2VBbGlnbjogJ2xlZnQnLFxyXG4gICAgICBtZXNzYWdlOiAn5Yib5Lia5bmz5Y+w77ya5a215YyW5Zmo44CB5a215YyW5Z+65Zyw44CB5LyX5Yib56m66Ze044CB5pif5Yib5aSp5Zyw44CB5Lqn5Lia5Zut5Yy6562J44CCJyxcclxuICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICBcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG5cclxuICAvL+acuuaehOazqOWGjFxyXG4gIGpnU2h4eUNvZGVJbnB1dChyZXM6YW55KTp2b2lkeyAgLy/nu5/kuIDnpL7kvJrkv6HnlKjku6PnoIFcclxuICAgIGlmKHJlcy5kZXRhaWwpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLnNoeHlDb2RlRXJyb3JcIl06ICcnLFxyXG4gICAgICAgIFtcImpnRm9ybURhdGUuc2h4eUNvZGVcIl06IHJlcy5kZXRhaWwsXHJcbiAgICAgICAgamdWZXJpZmljYXRpb246IHRydWVcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIGpnU2h4eUNvZGVCbHVyKHJlczphbnkpOnZvaWR7ICAvL+e7n+S4gOekvuS8muS/oeeUqOS7o+eggVxyXG4gICAgbGV0IHJlZzphbnkgPSAvWzEtOV1cXGR7MTV9LztcclxuICAgIGxldCBzdHI6Qm9vbGVhbiA9IHJlZy50ZXN0KHJlcy5kZXRhaWwudmFsdWUpO1xyXG4gICAgaWYocmVzLmRldGFpbC52YWx1ZSl7XHJcbiAgICAgIGlmKHN0cil7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIFtcImpnRm9ybVJycm9yLnNoeHlDb2RlRXJyb3JcIl06ICcnLFxyXG4gICAgICAgICAgW1wiamdGb3JtRGF0ZS5zaHh5Q29kZVwiXTogcmVzLmRldGFpbC52YWx1ZSxcclxuICAgICAgICAgIGpnVmVyaWZpY2F0aW9uOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIFtcImpnRm9ybVJycm9yLnNoeHlDb2RlRXJyb3JcIl06ICfor7fovpPlhaXmraPnoa7nu5/kuIDnpL7kvJrkv6HnlKjku6PnoIEnLFxyXG4gICAgICAgICAgW1wiamdGb3JtRGF0ZS5zaHh5Q29kZVwiXTogcmVzLmRldGFpbC52YWx1ZSxcclxuICAgICAgICAgIGpnVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLnNoeHlDb2RlRXJyb3JcIl06ICcnLFxyXG4gICAgICAgIFtcImpnRm9ybURhdGUuc2h4eUNvZGVcIl06IHJlcy5kZXRhaWwudmFsdWUsXHJcbiAgICAgICAgamdWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICBqZ1Bhc3N3b3JkSW5wdXQocmVzOmFueSk6dm9pZHsgIC8v5a+G56CBXHJcbiAgICBpZihyZXMuZGV0YWlsKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJqZ0Zvcm1ScnJvci5wYXNzd29yZEVycm9yXCJdOiAnJyxcclxuICAgICAgICBbXCJqZ0Zvcm1EYXRlLnBhc3N3b3JkXCJdOiByZXMuZGV0YWlsLFxyXG4gICAgICAgIGpnVmVyaWZpY2F0aW9uOiB0cnVlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICBqZ1Bhc3N3b3JkQmx1cihyZXM6YW55KTp2b2lkeyAgLy/lr4bnoIFcclxuICAgIGxldCByZWc6YW55ID0gLyg/PS4qKFthLXpBLVpdLiopKSg/PS4qWzAtOV0uKilbYS16QS1aMC05LSovKy5+IUAjJCVeJiooKV17NiwyMH0kLztcclxuICAgIGxldCBzdHI6Qm9vbGVhbiA9IHJlZy50ZXN0KHJlcy5kZXRhaWwudmFsdWUpO1xyXG4gICAgaWYocmVzLmRldGFpbC52YWx1ZSl7XHJcbiAgICAgIGlmKHN0cil7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIFtcImpnRm9ybVJycm9yLnBhc3N3b3JkRXJyb3JcIl06ICcnLFxyXG4gICAgICAgICAgW1wiamdGb3JtRGF0ZS5wYXNzd29yZFwiXTogcmVzLmRldGFpbC52YWx1ZSxcclxuICAgICAgICAgIGpnVmVyaWZpY2F0aW9uOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIFtcImpnRm9ybVJycm9yLnBhc3N3b3JkRXJyb3JcIl06ICfmlbDlrZfjgIHoi7HmlofjgIHlrZfnrKbkuKTnp43lj4rku6XkuIo2LTIw5L2NJyxcclxuICAgICAgICAgIFtcImpnRm9ybURhdGUucGFzc3dvcmRcIl06IHJlcy5kZXRhaWwudmFsdWUsXHJcbiAgICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJqZ0Zvcm1ScnJvci5wYXNzd29yZEVycm9yXCJdOiAnJyxcclxuICAgICAgICBbXCJqZ0Zvcm1EYXRlLnBhc3N3b3JkXCJdOiByZXMuZGV0YWlsLnZhbHVlLFxyXG4gICAgICAgIGpnVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgamdSZXBlYXRQYXNzd29yZElucHV0KHJlczphbnkpOnZvaWR7ICAvL+ehruiupOWvhueggVxyXG4gICAgaWYocmVzLmRldGFpbCl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiamdGb3JtUnJyb3IudHJ1ZXdvcmRFcnJvclwiXTogJycsXHJcbiAgICAgICAgW1wiamdGb3JtRGF0ZS50cnVld29yZFwiXTogcmVzLmRldGFpbCxcclxuICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogdHJ1ZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgamdSZXBlYXRQYXNzd29yZEJsdXIocmVzOmFueSk6dm9pZHsgIC8v56Gu6K6k5a+G56CBXHJcbiAgICBpZihyZXMuZGV0YWlsLnZhbHVlKXtcclxuICAgICAgaWYocmVzLmRldGFpbC52YWx1ZSAhPSB0aGlzLmRhdGEuamdGb3JtRGF0ZS5wYXNzd29yZCl7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIFtcImpnRm9ybVJycm9yLnRydWV3b3JkRXJyb3JcIl06ICfkuKTmrKHovpPlhaXnmoTlr4bnoIHkuI3kuIDoh7QnLFxyXG4gICAgICAgICAgW1wiamdGb3JtRGF0ZS50cnVld29yZFwiXTogcmVzLmRldGFpbC52YWx1ZSxcclxuICAgICAgICAgIGpnVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBbXCJqZ0Zvcm1ScnJvci50cnVld29yZEVycm9yXCJdOiAnJyxcclxuICAgICAgICAgIFtcImpnRm9ybURhdGUudHJ1ZXdvcmRcIl06IHJlcy5kZXRhaWwudmFsdWUsXHJcbiAgICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLnRydWV3b3JkRXJyb3JcIl06ICcnLFxyXG4gICAgICAgIFtcImpnRm9ybURhdGUudHJ1ZXdvcmRcIl06IHJlcy5kZXRhaWwudmFsdWUsXHJcbiAgICAgICAgamdWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICBqZ1F5TmFtZUlucHV0KHJlczphbnkpOnZvaWR7ICAvL+WNleS9jeWQjeensFxyXG4gICAgaWYocmVzLmRldGFpbCl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiamdGb3JtUnJyb3IucXlOYW1lRXJyb3JcIl06ICcnLFxyXG4gICAgICAgIFtcImpnRm9ybURhdGUucXlOYW1lXCJdOiByZXMuZGV0YWlsLFxyXG4gICAgICAgIGpnVmVyaWZpY2F0aW9uOiB0cnVlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICBqZ1F5TmFtZUJsdXIocmVzOmFueSk6dm9pZHsgIC8v5Y2V5L2N5ZCN56ewXHJcbiAgICBpZihyZXMuZGV0YWlsLnZhbHVlKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJqZ0Zvcm1ScnJvci5xeU5hbWVFcnJvclwiXTogJycsXHJcbiAgICAgICAgW1wiamdGb3JtRGF0ZS5xeU5hbWVcIl06IHJlcy5kZXRhaWwudmFsdWUsXHJcbiAgICAgICAgamdWZXJpZmljYXRpb246IHRydWVcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBqZ1RlbmFudEZuKHZhbHVlOmFueSk6dm9pZHsgIC8v5omA5Zyo5Zyw5Yy6XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBbXCJqZ0Zvcm1ScnJvci50ZW5hbnRJZEVycm9yXCJdOiAnJyxcclxuICAgICAgW1wiamdGb3JtRGF0ZS50ZW5hbnRJZFwiXTogdmFsdWUuZGV0YWlsLFxyXG4gICAgICBqZ1ZlcmlmaWNhdGlvbjogdHJ1ZSxcclxuICAgICAgW1wiamdGb3JtRGF0ZS5wbGF0Zm9ybUlkIFwiXTogJydcclxuICAgIH0pXHJcbiAgICB0aGlzLmdldFBsYXRmb3JtSWRMaXN0KCk7ICAvL+iOt+WPluaJgOWxnuWIm+S4muW5s+WPsFxyXG4gIH0sXHJcbiAgamdMaW5rVGVsSW5wdXQocmVzOmFueSk6dm9pZHsgIC8v6IGU57O755S16K+dXHJcbiAgICBpZihyZXMuZGV0YWlsKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJqZ0Zvcm1ScnJvci5saW5rVGVsRXJyb3JcIl06ICcnLFxyXG4gICAgICAgIFtcImpnRm9ybURhdGUubGlua1RlbFwiXTogcmVzLmRldGFpbCxcclxuICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogdHJ1ZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgamdMaW5rVGVsKHJlczphbnkpOnZvaWR7ICAvL+iBlOezu+eUteivnVxyXG4gICAgbGV0IHJlZzphbnkgPSAvXigoMVswLTldezEwfSl8KCgoKFswLTldezN9LSk/WzAtOV17OH0pfCgoWzAtOV17NH0tKT9bMC05XXs3fSkpKC1bMC05XXsxLDR9KT8pKSQvO1xyXG4gICAgbGV0IHN0cjpCb29sZWFuID0gcmVnLnRlc3QocmVzLmRldGFpbC52YWx1ZSk7XHJcbiAgICBpZihyZXMuZGV0YWlsLnZhbHVlKXtcclxuICAgICAgaWYoc3RyKXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgW1wiamdGb3JtUnJyb3IubGlua1RlbEVycm9yXCJdOiAnJyxcclxuICAgICAgICAgIFtcImpnRm9ybURhdGUubGlua1RlbFwiXTogcmVzLmRldGFpbC52YWx1ZSxcclxuICAgICAgICAgIGpnVmVyaWZpY2F0aW9uOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIFtcImpnRm9ybVJycm9yLmxpbmtUZWxFcnJvclwiXTogJ+ivt+i+k+WFpeato+ehrueahOiBlOezu+eUteivnScsXHJcbiAgICAgICAgICBbXCJqZ0Zvcm1EYXRlLmxpbmtUZWxcIl06IHJlcy5kZXRhaWwudmFsdWUsXHJcbiAgICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJqZ0Zvcm1ScnJvci5saW5rVGVsRXJyb3JcIl06ICcnLFxyXG4gICAgICAgIFtcImpnRm9ybURhdGUubGlua1RlbFwiXTogcmVzLmRldGFpbC52YWx1ZSxcclxuICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIGpnVmVyaWZ5Q29kZUlucHV0KHJlczphbnkpOnZvaWR7ICAvL+mqjOivgeeggVxyXG4gICAgaWYocmVzLmRldGFpbCl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiamdGb3JtUnJyb3IudmVyaWZ5Q29kZUVycm9yXCJdOiAnJyxcclxuICAgICAgICBbXCJqZ0Zvcm1EYXRlLnZlcmlmeUNvZGVcIl06IHJlcy5kZXRhaWwsXHJcbiAgICAgICAgamdWZXJpZmljYXRpb246IHRydWVcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIGpnVmVyaWZ5Q29kZShyZXM6YW55KTp2b2lkeyAgLy/pqozor4HnoIFcclxuICAgIGlmKHJlcy5kZXRhaWwudmFsdWUpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLnZlcmlmeUNvZGVFcnJvclwiXTogJycsXHJcbiAgICAgICAgW1wiamdGb3JtRGF0ZS52ZXJpZnlDb2RlXCJdOiByZXMuZGV0YWlsLnZhbHVlLFxyXG4gICAgICAgIGpnVmVyaWZpY2F0aW9uOiB0cnVlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICBqZ1BsYXRmb3JtT3BlbigpOnZvaWR7ICAvL+aJgOWxnuWIm+S4muW5s+WPsOaJk+W8gOS6i+S7tlxyXG4gICAgaWYodGhpcy5kYXRhLnBsYXRmb3JtSWRMaXN0Lmxlbmd0aCA9PSAwKXtcclxuICAgICAgVG9hc3QoJ+ivt+WFiOmAieaLqeaJgOWcqOWcsOWMuu+8gScpO1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGNvbnRlbnRPdmVyZmxvdzogJ3Njcm9sbCcsXHJcbiAgICAgICAgamdPdmVybGF5OiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgY29udGVudE92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgICAgICBqZ092ZXJsYXk6IHRydWVcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIGpnUGxhdGZvcm1PcGVuZWQoKTp2b2lkeyAgLy/miYDlsZ7liJvkuJrlubPlj7DmiZPlvIDoj5zljZXmoI/kuJTliqjnlLvnu5PmnZ/lkI7op6blj5FcclxuICAgIGlmKHRoaXMuZGF0YS5wbGF0Zm9ybUlkTGlzdC5sZW5ndGggPT0gMCl7XHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjamdQbGF0Zm9ybScpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAvL+acuuaehOaJgOWxnuWIm+S4muW5s+WPsFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgamdQbGF0Zm9ybUZuKHZhbHVlOmFueSk6dm9pZHsgIC8v5omA5bGe5Yib5Lia5bmz5Y+wXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBbXCJqZ0Zvcm1EYXRlLnBsYXRmb3JtSWRcIl06IHZhbHVlLmRldGFpbFxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICBcclxuICBqZ1N1Ym1pdEZuKCk6dm9pZHsgIC8v5py65p6E5rOo5YaMXHJcbiAgICAvL+ivt+i+k+WFpee7n+S4gOekvuS8muS/oeeUqOS7o+eggVxyXG4gICAgaWYodGhpcy5kYXRhLmpnRm9ybURhdGUuc2h4eUNvZGUgPT0gJycpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLnNoeHlDb2RlRXJyb3JcIl06J+ivt+i+k+WFpee7n+S4gOekvuS8muS/oeeUqOS7o+eggScsXHJcbiAgICAgICAgamdWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvL+WvhueggVxyXG4gICAgaWYodGhpcy5kYXRhLmpnRm9ybURhdGUucGFzc3dvcmQgPT0gJycpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLnBhc3N3b3JkRXJyb3JcIl06J+ivt+i+k+WFpeWvhueggScsXHJcbiAgICAgICAgamdWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvL+ehruiupOWvhueggVxyXG4gICAgaWYodGhpcy5kYXRhLmpnRm9ybURhdGUudHJ1ZXdvcmQgPT0gJycpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLnRydWV3b3JkRXJyb3JcIl06J+ivt+WGjeasoeehruiupOWvhueggScsXHJcbiAgICAgICAgamdWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvL+WNleS9jeWQjeensFxyXG4gICAgaWYodGhpcy5kYXRhLmpnRm9ybURhdGUucXlOYW1lID09ICcnKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJqZ0Zvcm1ScnJvci5xeU5hbWVFcnJvclwiXTon6K+36L6T5YWl5Y2V5L2N5ZCN56ewJyxcclxuICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIC8v5omA5Zyo5Zyw5Yy6XHJcbiAgICBpZih0aGlzLmRhdGEuamdGb3JtRGF0ZS50ZW5hbnRJZCA9PSAnJyl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiamdGb3JtUnJyb3IudGVuYW50SWRFcnJvclwiXTon6K+36YCJ5oup5omA5Zyo5Zyw5Yy6JyxcclxuICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIC8v6IGU57O755S16K+dXHJcbiAgICBpZih0aGlzLmRhdGEuamdGb3JtRGF0ZS5saW5rVGVsID09ICcnKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJqZ0Zvcm1ScnJvci5saW5rVGVsRXJyb3JcIl06J+ivt+i+k+WFpeiBlOezu+eUteivnScsXHJcbiAgICAgICAgamdWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvL+mqjOivgeeggVxyXG4gICAgaWYodGhpcy5kYXRhLmpnRm9ybURhdGUudmVyaWZ5Q29kZSA9PSAnJyl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiamdGb3JtUnJyb3IudmVyaWZ5Q29kZUVycm9yXCJdOifor7fovpPlhaXpqozor4HnoIEnLFxyXG4gICAgICAgIGpnVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy/pmIXor7vljY/orq5cclxuICAgIGlmKHRoaXMuZGF0YS5qZ1ZlcmlmaWNhdGlvbiA9PSBmYWxzZSl7XHJcbiAgICAgIFRvYXN0KCfor7fmiorlv4Xloavkv6Hmga/loavlhpnlrozmlbTvvIEnKTtcclxuICAgIH1lbHNlIGlmKHRoaXMuZGF0YS5qZ1Byb3RvY29sQ2hlY2tlZCA9PSBmYWxzZSl7XHJcbiAgICAgIFRvYXN0KCfor7fpmIXor7vlubbmjqXlj5flupTnlKjkvb/nlKjljY/orq7vvIEnKTtcclxuICAgIH1lbHNle1xyXG4gICAgICBodHRwcy5yZXF1ZXN0KGFwaS5lbnRlclJlZywgdGhpcy5kYXRhLmpnRm9ybURhdGUsICdQT1NUJylcclxuICAgICAgLnRoZW4oKCk6dm9pZD0+e1xyXG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgdXJsOiAnLi4vbG9naW5Gb3JtL2xvZ2luRm9ybSdcclxuICAgICAgICB9KVxyXG4gICAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICAgIFRvYXN0KGVycik7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGpnVmVyaWZ5Q29kZUZuKCk6dm9pZHsgIC8v6I635Y+W6aqM6K+B56CBXHJcbiAgICBpZih0aGlzLmRhdGEuamdGb3JtRGF0ZS5saW5rVGVsICE9ICcnKXtcclxuICAgICAgaHR0cHMucmVxdWVzdChhcGkuZ2V0Q29kZSArIFwiP3RlbGVwaG9uZT1cIiArIHRoaXMuZGF0YS5qZ0Zvcm1EYXRlLmxpbmtUZWwsIG51bGwsICdHRVQnKVxyXG4gICAgICAudGhlbigoKTp2b2lkPT57XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIGpnVmVyaWZ5Q29kZVRpbWU6ICc2MCcsXHJcbiAgICAgICAgICBqZ0Rpc2FibGVkOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgICBsZXQgc2V0VGltZTphbnkgPSBzZXRJbnRlcnZhbCgoKTp2b2lkPT57XHJcbiAgICAgICAgICBsZXQgc3RyOmFueSA9IHBhcnNlSW50KHRoaXMuZGF0YS5qZ1ZlcmlmeUNvZGVUaW1lKSAtIDE7XHJcbiAgICAgICAgICBpZihzdHIgPiAwKXtcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICBqZ1ZlcmlmeUNvZGVUaW1lOiBzdHJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHNldFRpbWUpO1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgIGpnVmVyaWZ5Q29kZVRpbWU6ICfojrflj5bpqozor4HnoIEnLFxyXG4gICAgICAgICAgICAgIGpnRGlzYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSwxMDAwKVxyXG4gICAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICAgIFRvYXN0KGVycik7XHJcbiAgICAgIH0pO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIFRvYXN0KCfor7flhYjloavlhpnogZTns7vnlLXor53vvIEnKTtcclxuICAgIH1cclxuICB9LFxyXG4gIGpnQ3hQbGF0Zm9ybShldmVudDphbnkpOnZvaWR7ICAvL+aYr+WQpuWIm+aWsOW5s+WPsOS4u+S9k+WNleS9jVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgW1wiamdGb3JtRGF0ZS5pc0N4UGxhdGZvcm1cIl06IGV2ZW50LmRldGFpbCxcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgamdDeVBsYXRmb3JtKGV2ZW50OmFueSk6dm9pZHsgIC8v5piv5ZCm5Yib5Lia5bmz5Y+w5Li75L2T5Y2V5L2NXHJcbiAgICBpZihldmVudC5kZXRhaWwgPT0gJzEnKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJqZ0Zvcm1EYXRlLnBsYXRmb3JtSWRcIl06ICcnLFxyXG4gICAgICAgIGpnUGxhdGZvcm1EaXNhYmxlZDogdHJ1ZVxyXG4gICAgICB9KVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgamdQbGF0Zm9ybURpc2FibGVkOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgW1wiamdGb3JtRGF0ZS5pc0N5UGxhdGZvcm1cIl06IGV2ZW50LmRldGFpbCxcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgXHJcblxyXG5cclxuICAvL+S4quS6uuazqOWGjFxyXG4gIGdyQ2FyZFR5cGVGbih2YWx1ZTphbnkpOnZvaWR7ICAvL+ivgeS7tuexu+Wei1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgW1wiZ3JGb3JtUnJyb3IuY2FyZFR5cGVJZFJycm9yXCJdOiAnJyxcclxuICAgICAgW1wiZ3JGb3JtRGF0ZS5jYXJkVHlwZUlkXCJdOiB2YWx1ZS5kZXRhaWwsXHJcbiAgICAgIGdyVmVyaWZpY2F0aW9uOiB0cnVlXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgZ3JDYXJkTnVtSW5wdXQocmVzOmFueSk6dm9pZHsgIC8v6K+B5Lu25Y+356CBXHJcbiAgICBpZihyZXMuZGV0YWlsKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJnckZvcm1ScnJvci5jYXJkTnVtUnJyb3JcIl06ICcnLFxyXG4gICAgICAgIFtcImdyRm9ybURhdGUuY2FyZE51bVwiXTogcmVzLmRldGFpbCxcclxuICAgICAgICBnclZlcmlmaWNhdGlvbjogdHJ1ZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZ3JDYXJkTnVtKHJlczphbnkpOnZvaWR7ICAvL+ivgeS7tuWPt+eggVxyXG4gICAgaWYocmVzLmRldGFpbC52YWx1ZSl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiZ3JGb3JtUnJyb3IuY2FyZE51bVJycm9yXCJdOiAnJyxcclxuICAgICAgICBbXCJnckZvcm1EYXRlLmNhcmROdW1cIl06IHJlcy5kZXRhaWwudmFsdWUsXHJcbiAgICAgICAgZ3JWZXJpZmljYXRpb246IHRydWVcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIGdyUGFzc3dvcmRJbnB1dChyZXM6YW55KTp2b2lkeyAgLy/lr4bnoIFcclxuICAgIGlmKHJlcy5kZXRhaWwpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImdyRm9ybVJycm9yLnBhc3N3b3JkRXJyb3JcIl06ICcnLFxyXG4gICAgICAgIFtcImdyRm9ybURhdGUucGFzc3dvcmRcIl06IHJlcy5kZXRhaWwsXHJcbiAgICAgICAgZ3JWZXJpZmljYXRpb246IHRydWVcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIGdyUGFzc3dvcmRCbHVyKHJlczphbnkpOnZvaWR7ICAvL+WvhueggVxyXG4gICAgbGV0IHJlZzphbnkgPSAvKD89LiooW2EtekEtWl0uKikpKD89LipbMC05XS4qKVthLXpBLVowLTktKi8rLn4hQCMkJV4mKigpXXs2LDIwfSQvO1xyXG4gICAgbGV0IHN0cjpCb29sZWFuID0gcmVnLnRlc3QocmVzLmRldGFpbC52YWx1ZSk7XHJcbiAgICBpZihyZXMuZGV0YWlsLnZhbHVlKXtcclxuICAgICAgaWYoc3RyKXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgW1wiZ3JGb3JtUnJyb3IucGFzc3dvcmRFcnJvclwiXTogJycsXHJcbiAgICAgICAgICBbXCJnckZvcm1EYXRlLnBhc3N3b3JkXCJdOiByZXMuZGV0YWlsLnZhbHVlLFxyXG4gICAgICAgICAgZ3JWZXJpZmljYXRpb246IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgW1wiZ3JGb3JtUnJyb3IucGFzc3dvcmRFcnJvclwiXTogJ+aVsOWtl+OAgeiLseaWh+OAgeWtl+espuS4pOenjeWPiuS7peS4ijYtMjDkvY0nLFxyXG4gICAgICAgICAgW1wiZ3JGb3JtRGF0ZS5wYXNzd29yZFwiXTogcmVzLmRldGFpbC52YWx1ZSxcclxuICAgICAgICAgIGdyVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImdyRm9ybVJycm9yLnBhc3N3b3JkRXJyb3JcIl06ICcnLFxyXG4gICAgICAgIFtcImdyRm9ybURhdGUucGFzc3dvcmRcIl06IHJlcy5kZXRhaWwudmFsdWUsXHJcbiAgICAgICAgZ3JWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICBnclJlcGVhdFBhc3N3b3JkSW5wdXQocmVzOmFueSk6dm9pZHsgIC8v56Gu6K6k5a+G56CBXHJcbiAgICBpZihyZXMuZGV0YWlsKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJnckZvcm1ScnJvci50cnVld29yZEVycm9yXCJdOiAnJyxcclxuICAgICAgICBbXCJnckZvcm1EYXRlLnRydWV3b3JkXCJdOiByZXMuZGV0YWlsLFxyXG4gICAgICAgIGdyVmVyaWZpY2F0aW9uOiB0cnVlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICBnclJlcGVhdFBhc3N3b3JkQmx1cihyZXM6YW55KTp2b2lkeyAgLy/noa7orqTlr4bnoIFcclxuICAgIGlmKHJlcy5kZXRhaWwudmFsdWUpe1xyXG4gICAgICBpZihyZXMuZGV0YWlsLnZhbHVlICE9IHRoaXMuZGF0YS5nckZvcm1EYXRlLnBhc3N3b3JkKXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgW1wiZ3JGb3JtUnJyb3IudHJ1ZXdvcmRFcnJvclwiXTogJ+S4pOasoei+k+WFpeeahOWvhueggeS4jeS4gOiHtCcsXHJcbiAgICAgICAgICBbXCJnckZvcm1EYXRlLnRydWV3b3JkXCJdOiByZXMuZGV0YWlsLnZhbHVlLFxyXG4gICAgICAgICAgZ3JWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIFtcImdyRm9ybVJycm9yLnRydWV3b3JkRXJyb3JcIl06ICcnLFxyXG4gICAgICAgICAgW1wiZ3JGb3JtRGF0ZS50cnVld29yZFwiXTogcmVzLmRldGFpbC52YWx1ZSxcclxuICAgICAgICAgIGdyVmVyaWZpY2F0aW9uOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiZ3JGb3JtUnJyb3IudHJ1ZXdvcmRFcnJvclwiXTogJycsXHJcbiAgICAgICAgW1wiZ3JGb3JtRGF0ZS50cnVld29yZFwiXTogcmVzLmRldGFpbC52YWx1ZSxcclxuICAgICAgICBnclZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIGdyUmVhbE5hbWVJbnB1dChyZXM6YW55KTp2b2lkeyAgLy/lp5PlkI1cclxuICAgIGlmKHJlcy5kZXRhaWwpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImdyRm9ybVJycm9yLnJlYWxOYW1lUnJyb3JcIl06ICcnLFxyXG4gICAgICAgIFtcImdyRm9ybURhdGUucmVhbE5hbWVcIl06IHJlcy5kZXRhaWwsXHJcbiAgICAgICAgZ3JWZXJpZmljYXRpb246IHRydWVcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIGdyUmVhbE5hbWUocmVzOmFueSk6dm9pZHsgIC8v5aeT5ZCNXHJcbiAgICBpZihyZXMuZGV0YWlsLnZhbHVlKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJnckZvcm1ScnJvci5yZWFsTmFtZVJycm9yXCJdOiAnJyxcclxuICAgICAgICBbXCJnckZvcm1EYXRlLnJlYWxOYW1lXCJdOiByZXMuZGV0YWlsLnZhbHVlLFxyXG4gICAgICAgIGdyVmVyaWZpY2F0aW9uOiB0cnVlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICBnclBob25lTnVtSW5wdXQocmVzOmFueSk6dm9pZHsgIC8v6IGU57O755S16K+dXHJcbiAgICBpZihyZXMuZGV0YWlsKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJnckZvcm1ScnJvci5waG9uZU51bUVycm9yXCJdOiAnJyxcclxuICAgICAgICBbXCJnckZvcm1EYXRlLnBob25lTnVtXCJdOiByZXMuZGV0YWlsLFxyXG4gICAgICAgIGdyVmVyaWZpY2F0aW9uOiB0cnVlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICBnclBob25lTnVtKHJlczphbnkpOnZvaWR7ICAvL+iBlOezu+eUteivnVxyXG4gICAgbGV0IHJlZzphbnkgPSAvXigoMVswLTldezEwfSl8KCgoKFswLTldezN9LSk/WzAtOV17OH0pfCgoWzAtOV17NH0tKT9bMC05XXs3fSkpKC1bMC05XXsxLDR9KT8pKSQvO1xyXG4gICAgbGV0IHN0cjpCb29sZWFuID0gcmVnLnRlc3QocmVzLmRldGFpbC52YWx1ZSk7XHJcbiAgICBpZihyZXMuZGV0YWlsLnZhbHVlKXtcclxuICAgICAgaWYoc3RyKXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgW1wiZ3JGb3JtUnJyb3IucGhvbmVOdW1FcnJvclwiXTogJycsXHJcbiAgICAgICAgICBbXCJnckZvcm1EYXRlLnBob25lTnVtXCJdOiByZXMuZGV0YWlsLnZhbHVlLFxyXG4gICAgICAgICAgZ3JWZXJpZmljYXRpb246IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgW1wiZ3JGb3JtUnJyb3IucGhvbmVOdW1FcnJvclwiXTogJ+ivt+i+k+WFpeato+ehrueahOiBlOezu+eUteivnScsXHJcbiAgICAgICAgICBbXCJnckZvcm1EYXRlLnBob25lTnVtXCJdOiByZXMuZGV0YWlsLnZhbHVlLFxyXG4gICAgICAgICAgZ3JWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiZ3JGb3JtUnJyb3IucGhvbmVOdW1FcnJvclwiXTogJycsXHJcbiAgICAgICAgW1wiZ3JGb3JtRGF0ZS5waG9uZU51bVwiXTogcmVzLmRldGFpbC52YWx1ZSxcclxuICAgICAgICBnclZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIGdyVmVyaWZ5Q29kZUlucHV0KHJlczphbnkpOnZvaWR7ICAvL+mqjOivgeeggVxyXG4gICAgaWYocmVzLmRldGFpbCl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiZ3JGb3JtUnJyb3IudmVyaWZ5Q29kZUVycm9yXCJdOiAnJyxcclxuICAgICAgICBbXCJnckZvcm1EYXRlLnZlcmlmeUNvZGVcIl06IHJlcy5kZXRhaWwsXHJcbiAgICAgICAgZ3JWZXJpZmljYXRpb246IHRydWVcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIGdyVmVyaWZ5Q29kZShyZXM6YW55KTp2b2lkeyAgLy/pqozor4HnoIFcclxuICAgIGlmKHJlcy5kZXRhaWwudmFsdWUpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImdyRm9ybVJycm9yLnZlcmlmeUNvZGVFcnJvclwiXTogJycsXHJcbiAgICAgICAgW1wiZ3JGb3JtRGF0ZS52ZXJpZnlDb2RlXCJdOiByZXMuZGV0YWlsLnZhbHVlLFxyXG4gICAgICAgIGdyVmVyaWZpY2F0aW9uOiB0cnVlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICBnclZlcmlmeUNvZGVGbigpOnZvaWR7ICAvL+iOt+WPlumqjOivgeeggVxyXG4gICAgaWYodGhpcy5kYXRhLmdyRm9ybURhdGUucGhvbmVOdW0gIT0gJycpe1xyXG4gICAgICBodHRwcy5yZXF1ZXN0KGFwaS5nZXRDb2RlICsgXCI/dGVsZXBob25lPVwiICsgdGhpcy5kYXRhLmdyRm9ybURhdGUucGhvbmVOdW0sIG51bGwsICdHRVQnKVxyXG4gICAgICAudGhlbigoKTp2b2lkPT57XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIGdyVmVyaWZ5Q29kZVRpbWU6ICc2MCcsXHJcbiAgICAgICAgICBnckRpc2FibGVkOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgICBsZXQgc2V0VGltZTphbnkgPSBzZXRJbnRlcnZhbCgoKTp2b2lkPT57XHJcbiAgICAgICAgICBsZXQgc3RyOmFueSA9IHBhcnNlSW50KHRoaXMuZGF0YS5nclZlcmlmeUNvZGVUaW1lKSAtIDE7XHJcbiAgICAgICAgICBpZihzdHIgPiAwKXtcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICBnclZlcmlmeUNvZGVUaW1lOiBzdHJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHNldFRpbWUpO1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgIGdyVmVyaWZ5Q29kZVRpbWU6ICfojrflj5bpqozor4HnoIEnLFxyXG4gICAgICAgICAgICAgIGdyRGlzYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSwxMDAwKVxyXG4gICAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICAgIFRvYXN0KGVycik7XHJcbiAgICAgIH0pO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIFRvYXN0KCfor7flhYjloavlhpnogZTns7vnlLXor53vvIEnKTtcclxuICAgIH1cclxuICB9LFxyXG4gIGdyeGlhUXVGbih2YWx1ZTphbnkpOnZvaWR7ICAvL+aJgOWcqOWcsOWMulxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgW1wiZ3JGb3JtUnJyb3IueGlhUXVJZEVycm9yXCJdOiAnJyxcclxuICAgICAgW1wiZ3JGb3JtRGF0ZS54aWFRdUlkXCJdOiB2YWx1ZS5kZXRhaWwsXHJcbiAgICAgIGdyVmVyaWZpY2F0aW9uOiB0cnVlLFxyXG4gICAgICBbXCJnckZvcm1EYXRlLmRhbldlaUlkXCJdOiAnJ1xyXG4gICAgfSlcclxuICAgIHRoaXMuZ2V0RW50ZXJMaXN0TGlzdCgpOyAgLy/ojrflj5blt6XkvZzljZXkvY1cclxuICB9LFxyXG4gIGdyUGxhdGZvcm1PcGVuKCk6dm9pZHsgIC8v5omA5bGe5Yib5Lia5bmz5Y+w5omT5byA5LqL5Lu2XHJcbiAgICBpZih0aGlzLmRhdGEuZ3JFbnRlckxpc3RMaXN0Lmxlbmd0aCA9PSAwKXtcclxuICAgICAgVG9hc3QoJ+ivt+WFiOmAieaLqeaJgOWcqOWcsOWMuu+8gScpO1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGNvbnRlbnRPdmVyZmxvdzogJ3Njcm9sbCcsXHJcbiAgICAgICAgZ3JPdmVybGF5OiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgY29udGVudE92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgICAgICBnck92ZXJsYXk6IHRydWVcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIGdyUGxhdGZvcm1PcGVuZWQoKTp2b2lkeyAgLy/lt6XkvZzljZXkvY3miZPlvIDoj5zljZXmoI/kuJTliqjnlLvnu5PmnZ/lkI7op6blj5FcclxuICAgIGlmKHRoaXMuZGF0YS5nckVudGVyTGlzdExpc3QubGVuZ3RoID09IDApe1xyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI2dyUGxhdGZvcm0nKS50b2dnbGUoZmFsc2UpOyAgICAgICAgLy/lt6XkvZzljZXkvY1cclxuICAgIH1cclxuICB9LFxyXG4gIGdyUGxhdGZvcm1Gbih2YWx1ZTphbnkpOnZvaWR7ICAvL+aJgOWxnuWIm+S4muW5s+WPsFxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgW1wiZ3JGb3JtRGF0ZS5kYW5XZWlJZFwiXTogdmFsdWUuZGV0YWlsXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgZ3JJc0xpdVh1ZShldmVudDphbnkpOnZvaWR7ICAvL+aYr+WQpuS4uueVmeWtpuWbnuWbveS6uuWRmFxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgW1wiZ3JGb3JtRGF0ZS5pc0xpdVh1ZVwiXTogZXZlbnQuZGV0YWlsLFxyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgZ3JQcm90b2NvbENoZWNrZWRGbih2YWx1ZTphbnkpOnZvaWR7ICAvL+S9v+eUqOWNj+iurlxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgZ3JQcm90b2NvbENoZWNrZWQ6IHZhbHVlLmRldGFpbFxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICBcclxuICBnclN1Ym1pdEZuKCk6dm9pZHsgIC8v5Liq5Lq65rOo5YaMXHJcbiAgICAvL+ivgeS7tuexu+Wei1xyXG4gICAgaWYodGhpcy5kYXRhLmdyRm9ybURhdGUuY2FyZFR5cGVJZCA9PSAnJyl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiZ3JGb3JtUnJyb3IuY2FyZFR5cGVJZFJycm9yXCJdOiAn6K+36YCJ5oup5Y2V5L2N57G75Z6LJyxcclxuICAgICAgICBnclZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIC8v6K+B5Lu25Y+356CBXHJcbiAgICBpZih0aGlzLmRhdGEuZ3JGb3JtRGF0ZS5jYXJkTnVtID09ICcnKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJnckZvcm1ScnJvci5jYXJkTnVtUnJyb3JcIl06ICfor7fpgInmi6nor4Hku7blj7fnoIEnLFxyXG4gICAgICAgIGdyVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy/lr4bnoIFcclxuICAgIGlmKHRoaXMuZGF0YS5nckZvcm1EYXRlLnBhc3N3b3JkID09ICcnKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJnckZvcm1ScnJvci5wYXNzd29yZEVycm9yXCJdOifor7fovpPlhaXlr4bnoIEnLFxyXG4gICAgICAgIGdyVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy/noa7orqTlr4bnoIFcclxuICAgIGlmKHRoaXMuZGF0YS5nckZvcm1EYXRlLnRydWV3b3JkID09ICcnKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJnckZvcm1ScnJvci50cnVld29yZEVycm9yXCJdOifor7flho3mrKHnoa7orqTlr4bnoIEnLFxyXG4gICAgICAgIGdyVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy/lp5PlkI1cclxuICAgIGlmKHRoaXMuZGF0YS5nckZvcm1EYXRlLnJlYWxOYW1lID09ICcnKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJnckZvcm1ScnJvci5yZWFsTmFtZVJycm9yXCJdOiAn6K+36L6T5YWl5aeT5ZCNJyxcclxuICAgICAgICBnclZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIC8v6IGU57O755S16K+dXHJcbiAgICBpZih0aGlzLmRhdGEuZ3JGb3JtRGF0ZS5waG9uZU51bSA9PSAnJyl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiZ3JGb3JtUnJyb3IucGhvbmVOdW1FcnJvclwiXTon6K+36L6T5YWl6IGU57O755S16K+dJyxcclxuICAgICAgICBnclZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgICAvL+mqjOivgeeggVxyXG4gICAgIGlmKHRoaXMuZGF0YS5nckZvcm1EYXRlLnZlcmlmeUNvZGUgPT0gJycpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImdyRm9ybVJycm9yLnZlcmlmeUNvZGVFcnJvclwiXTon6K+36L6T5YWl6aqM6K+B56CBJyxcclxuICAgICAgICBnclZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIC8v5omA5Zyo5Zyw5Yy6XHJcbiAgICBpZih0aGlzLmRhdGEuZ3JGb3JtRGF0ZS54aWFRdUlkID09ICcnKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJnckZvcm1ScnJvci54aWFRdUlkRXJyb3JcIl06J+ivt+mAieaLqeaJgOWcqOWcsOWMuicsXHJcbiAgICAgICAgZ3JWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvL+mYheivu+WNj+iurlxyXG4gICAgaWYodGhpcy5kYXRhLmdyVmVyaWZpY2F0aW9uID09IGZhbHNlKXtcclxuICAgICAgVG9hc3QoJ+ivt+aKiuW/heWhq+S/oeaBr+Whq+WGmeWujOaVtO+8gScpO1xyXG4gICAgfWVsc2UgaWYodGhpcy5kYXRhLmdyUHJvdG9jb2xDaGVja2VkID09IGZhbHNlKXtcclxuICAgICAgVG9hc3QoJ+ivt+mYheivu+W5tuaOpeWPl+W6lOeUqOS9v+eUqOWNj+iuru+8gScpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIGh0dHBzLnJlcXVlc3QoYXBpLnVzZXJSZWcsIHRoaXMuZGF0YS5nckZvcm1EYXRlLCAnUE9TVCcpXHJcbiAgICAgIC50aGVuKCgpOnZvaWQ9PntcclxuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgIHVybDogJy4uL2xvZ2luRm9ybS9sb2dpbkZvcm0nXHJcbiAgICAgICAgfSlcclxuICAgICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgICBUb2FzdChlcnIpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvL+aIkeW3sumYheivu+W5tuaOpeWPl+W6lOeUqOS9v+eUqOWNj+iurlxyXG4gIG5vdGljZUZuKCk6dm9pZHtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGpnUHJvdG9jb2xDaGVja2VkOiAhdGhpcy5kYXRhLmpnUHJvdG9jb2xDaGVja2VkXHJcbiAgICB9KVxyXG4gICAgRGlhbG9nLmFsZXJ0KHtcclxuICAgICAgdGl0bGU6ICfms6jlhozpobvnn6UnLFxyXG4gICAgICBtZXNzYWdlQWxpZ246ICdsZWZ0JyxcclxuICAgICAgbWVzc2FnZTogJzEu5pys56uZ6YeH55So5a6e5ZCN6K6k6K+B77yM55Sz6K+35Lq66aG756Gu5L+d5aGr5YaZ5L+h5oGv55qE55yf5a6e44CB5a6M5pW044CB5pyJ5pWI44CC5L+h5oGv5aGr5YaZ5LiN55yf5a6e44CB5LiN5a6M5pW0562J5bCG5a+86Ie05rOo5YaM5peg5rOV5a6h5qC46YCa6L+H44CC5pys56uZ56Gu5L+d55So5oi35L+h5oGv55qE5a6J5YWo5oCn5ZKM5L+d5a+G5oCn5bm25Li65LmL6LSf6LSj44CCXFxuMi7pgbXlrojkuK3ljY7kurrmsJHlhbHlkozlm73ms5Xlvovms5Xku6Tlkozlhbbku5bnm7jlhbPms5Xop4TvvIzkuKXnpoHlj5HluIPnoLTlnY/lrqrms5Xlkozms5XlvovjgIHms5Xop4TnmoTkv6Hmga/jgIJcXG4zLumBteWuiOWFrOWuiemDqOWFs+S6juOAiuiuoeeul+acuuS/oeaBr+e9kee7nOWbvemZheiBlOe9keWuieWFqOS/neaKpOeuoeeQhuWKnuazleOAi+eahOinhOWumu+8jOiHquiniee7tOaKpOiuoeeul+acuuS/oeaBr+e9kee7nOeahOWuieWFqOOAglxcbjQu5Lil56aB5Zyo572R5LiK5a6j5oms5bCB5bu66L+35L+h44CB5rer56e944CB6Imy5oOF44CB5pq05Yqb44CB6LWM5Y2a44CB5qy66K+I562J5LiN5q2j5b2T6KGM5Li644CCXFxuNS7ljZXkvY3miJbkuKrkurrlj5HluIPnmoTkv6Hmga/opoHnnJ/lrp7mnInmlYjjgIHlh4bnoa7lrozmlbTvvIzlubbkuI3lvpfmnInlvJXkurror6/op6PmiJbogIXomZrlgYfnmoTpmYjov7DjgIJcXG42LueUqOaIt+azqOWGjOaIkOWKn+WQju+8jOivt+WmpeWWhOS/neeuoeaCqOeahOeUqOaIt+WQjeWSjOWvhueggeOAgicsXHJcbiAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgXHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICAvL+aIkeW3sumYheivu+W5tuaOpeWPl+W6lOeUqOS9v+eUqOWNj+iuru+8iOS4quS6uu+8iVxyXG4gIGdyTm90aWNlRm4oKTp2b2lke1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgZ3JQcm90b2NvbENoZWNrZWQ6ICF0aGlzLmRhdGEuZ3JQcm90b2NvbENoZWNrZWRcclxuICAgIH0pXHJcbiAgICBEaWFsb2cuYWxlcnQoe1xyXG4gICAgICB0aXRsZTogJ+azqOWGjOmhu+efpScsXHJcbiAgICAgIG1lc3NhZ2VBbGlnbjogJ2xlZnQnLFxyXG4gICAgICBtZXNzYWdlOiAnMS7mnKznq5nph4fnlKjlrp7lkI3orqTor4HvvIznlLPor7fkurrpobvnoa7kv53loavlhpnkv6Hmga/nmoTnnJ/lrp7jgIHlrozmlbTjgIHmnInmlYjjgILkv6Hmga/loavlhpnkuI3nnJ/lrp7jgIHkuI3lrozmlbTnrYnlsIblr7zoh7Tms6jlhozml6Dms5XlrqHmoLjpgJrov4fjgILmnKznq5nnoa7kv53nlKjmiLfkv6Hmga/nmoTlronlhajmgKflkozkv53lr4bmgKflubbkuLrkuYvotJ/otKPjgIJcXG4yLumBteWuiOS4reWNjuS6uuawkeWFseWSjOWbveazleW+i+azleS7pOWSjOWFtuS7luebuOWFs+azleinhO+8jOS4peemgeWPkeW4g+egtOWdj+WuquazleWSjOazleW+i+OAgeazleinhOeahOS/oeaBr+OAglxcbjMu6YG15a6I5YWs5a6J6YOo5YWz5LqO44CK6K6h566X5py65L+h5oGv572R57uc5Zu96ZmF6IGU572R5a6J5YWo5L+d5oqk566h55CG5Yqe5rOV44CL55qE6KeE5a6a77yM6Ieq6KeJ57u05oqk6K6h566X5py65L+h5oGv572R57uc55qE5a6J5YWo44CCXFxuNC7kuKXnpoHlnKjnvZHkuIrlrqPmiazlsIHlu7rov7fkv6HjgIHmt6vnp73jgIHoibLmg4XjgIHmmrTlipvjgIHotYzljZrjgIHmrLror4jnrYnkuI3mraPlvZPooYzkuLrjgIJcXG41LuWNleS9jeaIluS4quS6uuWPkeW4g+eahOS/oeaBr+imgeecn+WunuacieaViOOAgeWHhuehruWujOaVtO+8jOW5tuS4jeW+l+acieW8leS6uuivr+ino+aIluiAheiZmuWBh+eahOmZiOi/sOOAglxcbjYu55So5oi35rOo5YaM5oiQ5Yqf5ZCO77yM6K+35aal5ZaE5L+d566h5oKo55qE55So5oi35ZCN5ZKM5a+G56CB44CCJyxcclxuICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICBcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG5cclxuICAvL+mhtemdouWIneWni+WMllxyXG4gIG9uTG9hZCgpe1xyXG4gICAgLy/pobXpnaLmoIfpophcclxuICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7ICAgICBcclxuICAgICAgdGl0bGU6IFwi5rOo5YaMXCJcclxuICAgIH0pO1xyXG4gICAgLy/ojrflj5bljZXkvY3nsbvlnotcclxuICAgIHRoaXMuZ2V0RGFud2VpTGlzdCgpO1xyXG4gICAgLy/ojrflj5bmiYDlnKjlnLDljLpcclxuICAgIHRoaXMuZ2V0VGVuYW50TGlzdCgpO1xyXG4gICAgLy/or4Hku7bnsbvlnotcclxuICAgIHRoaXMuZ2V0Y2FyZExpc3QoKTtcclxuICB9LFxyXG4gIC8v6aG16Z2i5riy5p+T5a6M5oiQXHJcbiAgb25SZWFkeSgpe30sXHJcblxyXG4gIC8v6aG16Z2i5pi+56S6XHJcbiAgb25TaG93KCl7XHJcbiAgICBcclxuICB9LFxyXG5cclxuICAvL+mhtemdoumakOiXj1xyXG4gIG9uSGlkZSgpe30sXHJcblxyXG4gIC8v6aG16Z2i5YWz6ZetXHJcbiAgb25VbmxvYWQoKXtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIFtcImpnRm9ybURhdGUuc2h4eUNvZGVcIl06JycsICAvL+e7n+S4gOekvuS8muS/oeeUqOS7o+eggVxyXG4gICAgICBbXCJqZ0Zvcm1EYXRlLnBhc3N3b3JkXCJdOicnLCAgLy/lr4bnoIFcclxuICAgICAgW1wiamdGb3JtRGF0ZS50cnVld29yZFwiXTonJywgIC8v56Gu6K6k5a+G56CBXHJcbiAgICAgIFtcImpnRm9ybURhdGUucXlOYW1lXCJdOicnLCAgLy/ljZXkvY3lkI3np7BcclxuICAgICAgW1wiamdGb3JtRGF0ZS50ZW5hbnRJZFwiXTonJywgIC8v5omA5Zyo5Zyw5Yy6XHJcbiAgICAgIFtcImpnRm9ybURhdGUubGlua1RlbFwiXTonJywgIC8v6IGU57O75Lq655S16K+dXHJcbiAgICAgIFtcImpnRm9ybURhdGUudmVyaWZ5Q29kZVwiXTonJywgIC8v6aqM6K+B56CBXHJcbiAgICAgIFtcImpnRm9ybURhdGUuaXNDeFBsYXRmb3JtXCJdOicyJywgIC8v5piv5ZCm5Yib5paw5bmz5Y+w5Li75L2T5Y2V5L2NXHJcbiAgICAgIFtcImpnRm9ybURhdGUuaXNDeVBsYXRmb3JtXCJdOicyJywgIC8v5piv5ZCm5Yib5Lia5bmz5Y+w5Li75L2T5Y2V5L2NXHJcbiAgICAgIFtcImpnRm9ybURhdGUucGxhdGZvcm1JZFwiXTonJywgIC8v5omA5bGe5Yib5Lia5bmz5Y+wXHJcblxyXG4gICAgICBbXCJnckZvcm1EYXRlLmNhcmRUeXBlSWRcIl06JycsICAvL+ivgeS7tuexu+Wei1xyXG4gICAgICBbXCJnckZvcm1EYXRlLmNhcmROdW1cIl06JycsICAvL+ivgeS7tuWPt+eggVxyXG4gICAgICBbXCJnckZvcm1EYXRlLnJlYWxOYW1lXCJdOicnLCAgLy/lp5PlkI1cclxuICAgICAgW1wiZ3JGb3JtRGF0ZS54aWFRdUlkXCJdOicnLCAgLy/miYDlsZ7lnLDljLpcclxuICAgICAgW1wiZ3JGb3JtRGF0ZS5kYW5XZWlJZFwiXTonJywgIC8v5bel5L2c5Y2V5L2NXHJcbiAgICAgIFtcImdyRm9ybURhdGUucGhvbmVOdW1cIl06JycsICAvL+iBlOezu+eUteivnVxyXG4gICAgICBbXCJnckZvcm1EYXRlLnZlcmlmeUNvZGVcIl06JycsICAvL+mqjOivgeeggVxyXG4gICAgICBbXCJnckZvcm1EYXRlLmlzTGl1WHVlXCJdOicyJywgIC8v5piv5ZCm5Li655WZ5a2m5Zue5Zu95Lq65ZGYXHJcbiAgICAgIFtcImdyRm9ybURhdGUucGFzc3dvcmRcIl06JycsICAvL+WvhueggVxyXG4gICAgICBbXCJnckZvcm1EYXRlLnRydWV3b3JkXCJdOicnLCAgLy/noa7orqTlr4bnoIFcclxuICAgIH0pXHJcbiAgfVxyXG59KVxyXG5leHBvcnQge307XHJcbiJdfQ==