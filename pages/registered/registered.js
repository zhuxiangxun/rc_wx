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
    },
    onHide: function () { },
    onUnload: function () { }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXJlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlZ2lzdGVyZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsb0RBQW9ELENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDbkYsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLGtEQUFrRCxDQUFDLENBQUMsT0FBTyxDQUFDO0FBQ2hGLElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBRSxDQUFDLFVBQVUsQ0FBQztBQUNoQyxJQUFJLEtBQUssR0FBSSxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUVqRCxJQUFJLENBQUM7SUFFSCxJQUFJLEVBQUU7UUFDSixTQUFTLEVBQUUsSUFBSTtRQUNmLFNBQVMsRUFBRSxJQUFJO1FBQ2Ysa0JBQWtCLEVBQUUsS0FBSztRQUV6QixNQUFNLEVBQUUsS0FBSztRQUNiLE1BQU0sRUFBRSxLQUFLO1FBRWIsZUFBZSxFQUFFLFFBQVE7UUFDekIsU0FBUyxFQUFFLElBQUk7UUFFZixZQUFZLEVBQUUsRUFBRTtRQUNoQixVQUFVLEVBQUUsRUFBRTtRQUNkLGNBQWMsRUFBRSxFQUFFO1FBQ2xCLFFBQVEsRUFBRSxFQUFFO1FBQ1osZ0JBQWdCLEVBQUUsRUFBRTtRQUNwQixlQUFlLEVBQUUsRUFBRTtRQUVuQixnQkFBZ0IsRUFBRSxPQUFPO1FBQ3pCLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLGlCQUFpQixFQUFFLEtBQUs7UUFFeEIsZ0JBQWdCLEVBQUUsT0FBTztRQUN6QixVQUFVLEVBQUUsS0FBSztRQUNqQixpQkFBaUIsRUFBRSxLQUFLO1FBR3hCLGdCQUFnQixFQUFFLEVBQUU7UUFDcEIsZUFBZSxFQUFFLEVBQUU7UUFDbkIsVUFBVSxFQUFDO1lBQ1QsUUFBUSxFQUFFLEVBQUU7WUFDWixRQUFRLEVBQUUsRUFBRTtZQUNaLFFBQVEsRUFBRSxFQUFFO1lBQ1osTUFBTSxFQUFFLEVBQUU7WUFDVixRQUFRLEVB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LEVBQUU7WUFDNUIsR0FBQyxxQkFBcUIsSUFBRSxHQUFHO1lBQzNCLEdBQUMscUJBQXFCLElBQUUsRUFBRTtZQUMxQixHQUFDLHFCQUFxQixJQUFFLEVBQUU7Z0JBQzFCLENBQUE7SUFDSixDQUFDO0lBR0QsTUFBTSxnQkFBRyxDQUFDO0lBR1YsUUFBUSxnQkFBRyxDQUFDO0NBQ2IsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVnaXN0ZXJlZC50c1xyXG5sZXQgRGlhbG9nID0gcmVxdWlyZSgnLi4vLi4vbWluaXByb2dyYW1fbnBtL0B2YW50L3dlYXBwL2RpYWxvZy9kaWFsb2cuanMnKS5kZWZhdWx0O1xyXG5sZXQgVG9hc3QgPSByZXF1aXJlKCcuLi8uLi9taW5pcHJvZ3JhbV9ucG0vQHZhbnQvd2VhcHAvdG9hc3QvdG9hc3QuanMnKS5kZWZhdWx0O1xyXG5jb25zdCBhcGkgPSBnZXRBcHAoKS5nbG9iYWxEYXRhOyAgLy8g6I635Y+W5bqU55So5a6e5L6LXHJcbmxldCBodHRwcyAgPSByZXF1aXJlKCcuLi8uLi91dGlscy9teVJlcXVlc3QuanMnKTsgICAgIC8v6I635Y+WYWpheOaWueazlVxyXG5cclxuUGFnZSh7XHJcbiAgLy/pobXpnaLmlbDmja5cclxuICBkYXRhOiB7XHJcbiAgICBqZ092ZXJsYXk6IHRydWUsICAgICAgICAgICAgICAgICAvL+acuuaehOaJgOWxnuWIm+S4muW5s+WPsOaYr+WQpuaYvuekuumBrue9qVxyXG4gICAgZ3JPdmVybGF5OiB0cnVlLCAgICAgICAgICAgICAgICAgLy/kuKrkurrlt6XkvZzljZXkvY3mmK/lkKbmmL7npLrpga7nvalcclxuICAgIGpnUGxhdGZvcm1EaXNhYmxlZDogZmFsc2UsICAgICAgIC8v5omA5bGe5Yib5Lia5bmz5Y+wXHJcblxyXG4gICAgamdGbGFnOiBmYWxzZSwgICAgICAgICAgICAgICAgICAvL+acuuaehOihjOS4mumHjeWkjeWIpOaWrVxyXG4gICAgZ3JGbGFnOiBmYWxzZSwgICAgICAgICAgICAgICAgICAvL+S4quS6uuihjOS4mumHjeWkjeWIpOaWrVxyXG5cclxuICAgIGNvbnRlbnRPdmVyZmxvdzogJ3Njcm9sbCcsICAgICAgLy/lhoXlrrnpq5jluqZcclxuICAgIHRhYkFjdGl2ZTogJ2pnJywgICAgICAgICAgICAgICAgLy/ms6jlhox0YWJcclxuXHJcbiAgICBxeWRhbndlaUxpc3Q6IFtdLCAgICAgICAgICAgICAgIC8v5Y2V5L2N57G75Z6LXHJcbiAgICB0ZW5hbnRMaXN0OiBbXSwgICAgICAgICAgICAgICAgIC8v5omA5Zyo5Zyw5Yy6XHJcbiAgICBwbGF0Zm9ybUlkTGlzdDogW10sICAgICAgICAgICAgIC8v5omA5bGe5Yib5Lia5bmz5Y+wXHJcbiAgICBjYXJkTGlzdDogW10sICAgICAgICAgICAgICAgICAgIC8v6K+B5Lu257G75Z6LXHJcbiAgICBnclBsYXRmb3JtSWRMaXN0OiBbXSwgICAgICAgICAgIC8v5Yib5Lia5bmz5Y+wXHJcbiAgICBnckVudGVyTGlzdExpc3Q6IFtdLCAgICAgICAgICAgIC8v5bel5L2c5Y2V5L2NXHJcbiAgXHJcbiAgICBqZ1ZlcmlmeUNvZGVUaW1lOiAn6I635Y+W6aqM6K+B56CBJywgIC8v6I635Y+W6aqM6K+B56CBXHJcbiAgICBqZ0Rpc2FibGVkOiBmYWxzZSwgICAgICAgICAgICAgIC8v6aqM6K+B56CB5oyJ6ZKu54q25oCBXHJcbiAgICBqZ1Byb3RvY29sQ2hlY2tlZDogZmFsc2UsICAgICAgIC8v5Y2P6K6uXHJcblxyXG4gICAgZ3JWZXJpZnlDb2RlVGltZTogJ+iOt+WPlumqjOivgeeggScsICAvL+iOt+WPlumqjOivgeeggVxyXG4gICAgZ3JEaXNhYmxlZDogZmFsc2UsICAgICAgICAgICAgICAvL+mqjOivgeeggeaMiemSrueKtuaAgVxyXG4gICAgZ3JQcm90b2NvbENoZWNrZWQ6IGZhbHNlLCAgICAgICAvL+WNj+iurlxyXG5cclxuICAgIC8v5py65p6E5rOo5YaMXHJcbiAgICBqZ1JlcGVhdFBhc3N3b3JkOiAnJywgICAgLy/mnLrmnoTnoa7orqTlr4bnoIFcclxuICAgIGpnUGFzc3dvcmRFcnJvcjogJycsICAgICAvL+acuuaehOehruiupOWvhueggVxyXG4gICAgamdGb3JtRGF0ZTp7ICAvL+acuuaehOihqOWNlVxyXG4gICAgICBzaHh5Q29kZTogJycsICAgICAgICAgICAgICAgICAvL+e7n+S4gOekvuS8muS/oeeUqOS7o+eggVxyXG4gICAgICBwYXNzd29yZDogJycsICAgICAgICAgICAgICAgICAvL+WvhueggVxyXG4gICAgICB0cnVld29yZDogJycsICAgICAgICAgICAgICAgICAvL+ehruiupOWvhueggVxyXG4gICAgICBxeU5hbWU6ICcnLCAgICAgICAgICAgICAgICAgICAvL+WNleS9jeWQjeensFxyXG4gICAgICB0ZW5hbnRJZDogJycsICAgICAgICAgICAgICAgICAvL+aJgOWcqOWcsOWMulxyXG4gICAgICBsaW5rVGVsOiAnJywgICAgICAgICAgICAgICAgICAvL+iBlOezu+S6uueUteivnVxyXG4gICAgICB2ZXJpZnlDb2RlOiAnJywgICAgICAgICAgICAgICAvL+mqjOivgeeggVxyXG4gICAgICBpc0N4UGxhdGZvcm06ICcyJywgICAgICAgICAgICAvL+aYr+WQpuWIm+aWsOW5s+WPsOS4u+S9k+WNleS9jVxyXG4gICAgICBpc0N5UGxhdGZvcm06ICcyJywgICAgICAgICAgICAvL+aYr+WQpuWIm+S4muW5s+WPsOS4u+S9k+WNleS9jVxyXG4gICAgICBwbGF0Zm9ybUlkOiAnJyAgICAgICAgICAgICAgICAvL+aJgOWxnuWIm+S4muW5s+WPsFxyXG4gICAgfSxcclxuICAgIGpnRm9ybVJycm9yOnsgIC8v5py65p6E6aqM6K+BXHJcbiAgICAgIHNoeHlDb2RlRXJyb3I6ICcnLCAgICAgICAgICAgIC8v57uf5LiA56S+5Lya5L+h55So5Luj56CBXHJcbiAgICAgIHBhc3N3b3JkRXJyb3I6ICcnLCAgICAgICAgICAgIC8v5a+G56CBXHJcbiAgICAgIHRydWV3b3JkRXJyb3I6ICcnLCAgICAgICAgICAgIC8v56Gu6K6k5a+G56CBXHJcbiAgICAgIHF5TmFtZUVycm9yOiAnJywgICAgICAgICAgICAgIC8v5Y2V5L2N5ZCN56ewXHJcbiAgICAgIHRlbmFudElkRXJyb3I6ICcnLCAgICAgICAgICAgIC8v5omA5Zyo5Zyw5Yy6XHJcbiAgICAgIGxpbmtUZWxFcnJvcjogJycsICAgICAgICAgICAgIC8v6IGU57O75Lq655S16K+dXHJcbiAgICAgIHZlcmlmeUNvZGVFcnJvcjogJycsICAgICAgICAgIC8v6aqM6K+B56CBXHJcbiAgICAgIGVtYWlsRXJyb3I6ICcnICAgICAgICAgICAgICAgIC8v55S15a2Q6YKu566xXHJcbiAgICB9LFxyXG4gICAgamdWZXJpZmljYXRpb246IGZhbHNlLCAgICAvL+mqjOivgeWIpOaWrVxyXG5cclxuXHJcbiAgICAvL+S4quS6uumqjOivgVxyXG4gICAgZ3JGb3JtRGF0ZTp7ICAvL+acuuaehOihqOWNlVxyXG4gICAgICBjYXJkVHlwZUlkOiAnJywgICAgICAgICAgICAgICAgLy/or4Hku7bnsbvlnotcclxuICAgICAgY2FyZE51bTogJycsICAgICAgICAgICAgICAgICAgIC8v6K+B5Lu25Y+356CBXHJcbiAgICAgIHJlYWxOYW1lOiAnJywgICAgICAgICAgICAgICAgICAvL+Wnk+WQjVxyXG4gICAgICB4aWFRdUlkOiAnJywgICAgICAgICAgICAgICAgICAgLy/miYDlsZ7lnLDljLpcclxuICAgICAgZGFuV2VpSWQ6ICcnLCAgICAgICAgICAgICAgICAgIC8vIOW3peS9nOWNleS9jVxyXG4gICAgICBwaG9uZU51bTogJycsICAgICAgICAgICAgICAgICAgLy/ogZTns7vnlLXor51cclxuICAgICAgdmVyaWZ5Q29kZTogJycsICAgICAgICAgICAgICAgIC8v6aqM6K+B56CBXHJcbiAgICAgIGlzTGl1WHVlOiAnMicsICAgICAgICAgICAgICAgICAvL+aYr+WQpuS4uueVmeWtpuWbnuWbveS6uuWRmFxyXG4gICAgICBwYXNzd29yZDogJycsICAgICAgICAgICAgICAgICAgLy/lr4bnoIFcclxuICAgICAgdHJ1ZXdvcmQ6ICcnLCAgICAgICAgICAgICAgICAgIC8v56Gu6K6k5a+G56CBXHJcbiAgICB9LFxyXG4gICAgZ3JGb3JtUnJyb3I6eyAgLy/mnLrmnoTpqozor4FcclxuICAgICAgY2FyZFR5cGVJZFJycm9yOiAnJywgICAgICAgICAgIC8v6K+B5Lu257G75Z6LXHJcbiAgICAgIGNhcmROdW1ScnJvcjogJycsICAgICAgICAgICAgICAvL+ivgeS7tuWPt+eggVxyXG4gICAgICByZWFsTmFtZUVycm9yOiAnJywgICAgICAgICAgICAgLy/lp5PlkI1cclxuICAgICAgeGlhUXVJZEVycm9yOiAnJywgICAgICAgICAgICAgIC8v5omA5bGe5Zyw5Yy6XHJcbiAgICAgIGRhbldlaUlkRXJyb3I6ICcnLCAgICAgICAgICAgICAvLyDlt6XkvZzljZXkvY1cclxuICAgICAgcGhvbmVOdW1FcnJvcjogJycsICAgICAgICAgICAgIC8v6IGU57O755S16K+dXHJcbiAgICAgIHZlcmlmeUNvZGVFcnJvcjogJycsICAgICAgICAgICAvL+mqjOivgeeggVxyXG4gICAgICBwYXNzd29yZEVycm9yOiAnJywgICAgICAgICAgICAgLy/lr4bnoIFcclxuICAgICAgdHJ1ZXdvcmRFcnJvcjogJycsICAgICAgICAgICAgIC8v56Gu6K6k5a+G56CBXHJcbiAgICB9LFxyXG4gICAgZ3JWZXJpZmljYXRpb246IGZhbHNlLCAgICAvL+mqjOivgeWIpOaWrVxyXG4gIH0sXHJcbiAgXHJcbiAgb25TaGFyZUFwcE1lc3NhZ2U6KHJlczphbnkpOmFueT0+IHsgIC8v5Y+R6YCB57uZ5pyL5Y+LXHJcbiAgICBpZiAocmVzLmZyb20gPT09ICdidXR0b24nKSB7XHJcbiAgICAgIC8vIOadpeiHqumhtemdouWGhei9rOWPkeaMiemSrlxyXG4gICAgICBjb25zb2xlLmxvZyhyZXMudGFyZ2V0KTtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRpdGxlOiAn6Z2S5bKb5Lq65omN5Yib5paw5Yib5Lia5bmz5Y+w5Zyw5Zu+JyxcclxuICAgICAgcGF0aDogJy9wYWdlcy9ob21lL2hvbWUnLFxyXG4gICAgICBpbWFnZVVybDogJydcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBvblNoYXJlVGltZWxpbmU6KCk6YW55PT4geyAgLy/liIbkuqtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRpdGxlOiAn6Z2S5bKb5Lq65omN5Yib5paw5Yib5Lia5bmz5Y+w5Zyw5Zu+JyxcclxuICAgICAgcXVlcnk6IHt9LFxyXG4gICAgICBpbWFnZVVybDogJydcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBkcm9wZG93bk9wZW4oKTp2b2lkeyAgLy/miZPlvIDkuIvmi4noj5zljZXop6blj5FcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGNvbnRlbnRPdmVyZmxvdzogJ2hpZGRlbidcclxuICAgIH0pXHJcbiAgfSxcclxuICBkcm9wZG93bkNsb3NlKCk6dm9pZHsgIC8v5YWz6Zet5LiL5ouJ6I+c5Y2V6Kem5Y+RXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBjb250ZW50T3ZlcmZsb3c6ICdzY3JvbGwnXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG5cclxuICBnZXREYW53ZWlMaXN0KCk6dm9pZHsgIC8v6I635Y+W5Y2V5L2N57G75Z6LXHJcbiAgICBodHRwcy5yZXF1ZXN0KGFwaS5zdWJtZW51RGljICsgJz9tb2lkPTE0JywgbnVsbCwgJ0dFVCcpXHJcbiAgICAudGhlbigocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICBsZXQgbGlzdDphbnkgPSByZXMudmFsLm1hcCgoaXRlbTphbnkpOmFueT0+e1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICB0ZXh0OiBpdGVtLmRpY05hbWUsXHJcbiAgICAgICAgICB2YWx1ZTogaXRlbS5pZFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBxeWRhbndlaUxpc3Q6IGxpc3RcclxuICAgICAgfSlcclxuICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBnZXRUZW5hbnRMaXN0KCk6dm9pZHsgIC8v6I635Y+W5omA5Zyo5Zyw5Yy6XHJcbiAgICBodHRwcy5yZXF1ZXN0KGFwaS50ZW5hbnRMaXN0LCBudWxsLCAnR0VUJylcclxuICAgIC50aGVuKChyZXM6YW55KTp2b2lkPT57XHJcbiAgICAgIGxldCBsaXN0OmFueSA9IHJlcy5saXN0Lm1hcCgoaXRlbTphbnkpOmFueT0+e1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICB0ZXh0OiBpdGVtLmNuYW1lLFxyXG4gICAgICAgICAgdmFsdWU6IGl0ZW0uaWRcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgdGVuYW50TGlzdDogbGlzdFxyXG4gICAgICB9KVxyXG4gICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIFxyXG4gIGdldFBsYXRmb3JtSWRMaXN0KCk6dm9pZHsgIC8v6I635Y+W5omA5bGe5Yib5Lia5bmz5Y+wXHJcbiAgICBodHRwcy5yZXF1ZXN0KGFwaS5jeVBsYXRmb3JtQXBpICsgJz94aWFRdUlkPScgKyB0aGlzLmRhdGEuamdGb3JtRGF0ZS50ZW5hbnRJZCwgbnVsbCwgJ0dFVCcpXHJcbiAgICAudGhlbigocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICBsZXQgbGlzdDphbnkgPSByZXMubGlzdC5tYXAoKGl0ZW06YW55KTphbnk9PntcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgdGV4dDogaXRlbS5jeU5hbWUsXHJcbiAgICAgICAgICB2YWx1ZTogaXRlbS5pZFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBwbGF0Zm9ybUlkTGlzdDogbGlzdFxyXG4gICAgICB9KVxyXG4gICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgamdQcm90b2NvbENoZWNrZWRGbih2YWx1ZTphbnkpOnZvaWR7ICAvL+S9v+eUqOWNj+iurlxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgamdQcm90b2NvbENoZWNrZWQ6IHZhbHVlLmRldGFpbFxyXG4gICAgfSlcclxuICB9LFxyXG4gIGdldGNhcmRMaXN0KCk6dm9pZHsgIC8v6I635Y+W6K+B5Lu257G75Z6LXHJcbiAgICBodHRwcy5yZXF1ZXN0KGFwaS5zdWJtZW51RGljICsgJz9tb2lkPTMnLCBudWxsLCAnR0VUJylcclxuICAgIC50aGVuKChyZXM6YW55KTp2b2lkPT57XHJcbiAgICAgIGxldCBsaXN0OmFueSA9IHJlcy52YWwubWFwKChpdGVtOmFueSk6YW55PT57XHJcbiAgICAgICAgaWYoaXRlbS5kaWNOYW1lID09ICflsYXmsJHouqvku73or4HvvIjmiLflj6PnsL/vvIknKXtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIFtcImdyRm9ybVJycm9yLmNhcmRUeXBlSWRScnJvclwiXTogJycsXHJcbiAgICAgICAgICAgIFtcImdyRm9ybURhdGUuY2FyZFR5cGVJZFwiXTogaXRlbS5pZCxcclxuICAgICAgICAgICAgZ3JWZXJpZmljYXRpb246IHRydWVcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICB0ZXh0OiBpdGVtLmRpY05hbWUsXHJcbiAgICAgICAgICB2YWx1ZTogaXRlbS5pZFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBjYXJkTGlzdDogbGlzdFxyXG4gICAgICB9KVxyXG4gICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgZ2V0R3JQbGF0Zm9ybUlkTGlzdCgpOnZvaWR7ICAvL+iOt+WPluWIm+S4muW5s+WPsFxyXG4gICAgaHR0cHMucmVxdWVzdChhcGkuY3lQbGF0Zm9ybUFwaSArICc/eGlhUXVJZD0nICsgdGhpcy5kYXRhLmdyRm9ybURhdGUueGlhUXVJZCwgbnVsbCwgJ0dFVCcpXHJcbiAgICAudGhlbigocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICBsZXQgbGlzdDphbnkgPSByZXMubGlzdC5tYXAoKGl0ZW06YW55KTphbnk9PntcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgdGV4dDogaXRlbS5jeU5hbWUsXHJcbiAgICAgICAgICB2YWx1ZTogaXRlbS5pZFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBnclBsYXRmb3JtSWRMaXN0OiBsaXN0XHJcbiAgICAgIH0pXHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBnZXRFbnRlckxpc3RMaXN0KCk6dm9pZHsgIC8v6I635Y+W5bel5L2c5Y2V5L2NXHJcbiAgICBodHRwcy5yZXF1ZXN0KGFwaS5lbnRlckxpc3QgKyAnP3hpYVF1SWQ9JyArIHRoaXMuZGF0YS5nckZvcm1EYXRlLnhpYVF1SWQsIG51bGwsICdHRVQnKVxyXG4gICAgLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgbGV0IGxpc3Q6YW55ID0gcmVzLmxpc3QubWFwKChpdGVtOmFueSk6YW55PT57XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHRleHQ6IGl0ZW0ucXlOYW1lLFxyXG4gICAgICAgICAgdmFsdWU6IGl0ZW0uaWRcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgZ3JFbnRlckxpc3RMaXN0OiBsaXN0XHJcbiAgICAgIH0pXHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcblxyXG5cclxuICBvblRhYkNoYW5nZSgpOnZvaWR7ICAvL3RhYuWIh+aNouinpuWPkVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgY29udGVudE92ZXJmbG93OiAnc2Nyb2xsJ1xyXG4gICAgfSlcclxuICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjamdUZW5hbnQnKS50b2dnbGUoZmFsc2UpOyAgICAgICAgICAvL+acuuaehOaJgOWcqOWcsOWMulxyXG4gICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyNqZ1BsYXRmb3JtJykudG9nZ2xlKGZhbHNlKTsgICAgICAgIC8v5py65p6E5omA5bGe5Yib5Lia5bmz5Y+wXHJcbiAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI2dyQ2FyZFR5cGUnKS50b2dnbGUoZmFsc2UpOyAgICAgICAgLy/kuKrkurror4Hku7bnsbvlnotcclxuICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjZ3J4aWFRdScpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAgICAvL+S4quS6uuaJgOWcqOWMuuWfn1xyXG4gICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyNnclBsYXRmb3JtJykudG9nZ2xlKGZhbHNlKTsgICAgICAgIC8v5Liq5Lq65bel5L2c5Y2V5L2NXHJcbiAgfSxcclxuXHJcbiAgY3hSaWdodEljb24oKTp2b2lkeyAgLy/mmK/lkKbliJvmlrDlubPlj7DkuLvkvZPljZXkvY1cclxuICAgIERpYWxvZy5hbGVydCh7XHJcbiAgICAgIHRpdGxlOiAn5piv5ZCm5Yib5paw5bmz5Y+w5Li75L2T5Y2V5L2NJyxcclxuICAgICAgbWVzc2FnZUFsaWduOiAnbGVmdCcsXHJcbiAgICAgIG1lc3NhZ2U6ICfliJvmlrDlubPlj7DvvJrlrp7pqozlrqTvvIjnoJTnqbbkuK3lv4PvvInjgIHph43ngrnlrp7pqozlrqTjgIHkvIHkuJrmioDmnK/kuK3lv4PjgIHnp5HmioDliJvmlrDln7rlnLDjgIHlm73pmYXnp5HmioDlkIjkvZzln7rlnLDjgIHlt6XnqIvmioDmnK/noJTnqbbkuK3lv4PjgIHmioDmnK/liJvmlrDkuK3lv4PjgIHpmaLlo6vlt6XkvZznq5njgIHmnInlhbPlm73lrrbnuqfkurrmiY3lt6XkvZznq5njgIHkuJPlrrblt6XkvZznq5njgIHljZrlo6vlkI7np5HnoJTlt6XkvZznq5njgIHljZrlo6vlkI7liJvmlrDlrp7ot7Xln7rlnLDjgIHmioDog73lpKfluIjlt6XkvZzlrqTvvIjlt6XkvZznq5nvvInjgIHpq5jmlrDmioDmnK/kvIHkuJrjgIHmmbrlupPnrYnmlrDlnovnoJTlj5HmnLrmnoTjgIHnoJTnqbbpmaLjgIInLFxyXG4gICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgIFxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBjeVJpZ2h0SWNvbigpOnZvaWR7ICAvL+aYr+WQpuWIm+S4muW5s+WPsOS4u+S9k+WNleS9jVxyXG4gICAgRGlhbG9nLmFsZXJ0KHtcclxuICAgICAgdGl0bGU6ICfmmK/lkKbliJvkuJrlubPlj7DkuLvkvZPljZXkvY0nLFxyXG4gICAgICBtZXNzYWdlQWxpZ246ICdsZWZ0JyxcclxuICAgICAgbWVzc2FnZTogJ+WIm+S4muW5s+WPsO+8muWtteWMluWZqOOAgeWtteWMluWfuuWcsOOAgeS8l+WIm+epuumXtOOAgeaYn+WIm+WkqeWcsOOAgeS6p+S4muWbreWMuuetieOAgicsXHJcbiAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgXHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuXHJcbiAgLy/mnLrmnoTms6jlhoxcclxuICBqZ1NoeHlDb2RlSW5wdXQocmVzOmFueSk6dm9pZHsgIC8v57uf5LiA56S+5Lya5L+h55So5Luj56CBXHJcbiAgICBsZXQgcmVnOmFueSA9IC9bMS05XVxcZHsxNX0vO1xyXG4gICAgbGV0IHN0cjpCb29sZWFuID0gcmVnLnRlc3QocmVzLmRldGFpbC52YWx1ZSk7XHJcbiAgICBpZihyZXMuZGV0YWlsLnZhbHVlKXtcclxuICAgICAgaWYoc3RyKXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgW1wiamdGb3JtUnJyb3Iuc2h4eUNvZGVFcnJvclwiXTogJycsXHJcbiAgICAgICAgICBbXCJqZ0Zvcm1EYXRlLnNoeHlDb2RlXCJdOiByZXMuZGV0YWlsLnZhbHVlLFxyXG4gICAgICAgICAgamdWZXJpZmljYXRpb246IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgW1wiamdGb3JtUnJyb3Iuc2h4eUNvZGVFcnJvclwiXTogJ+ivt+i+k+WFpeato+ehrue7n+S4gOekvuS8muS/oeeUqOS7o+eggScsXHJcbiAgICAgICAgICBbXCJqZ0Zvcm1EYXRlLnNoeHlDb2RlXCJdOiByZXMuZGV0YWlsLnZhbHVlLFxyXG4gICAgICAgICAgamdWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiamdGb3JtUnJyb3Iuc2h4eUNvZGVFcnJvclwiXTogJycsXHJcbiAgICAgICAgW1wiamdGb3JtRGF0ZS5zaHh5Q29kZVwiXTogcmVzLmRldGFpbC52YWx1ZSxcclxuICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIFxyXG4gIGpnUGFzc3dvcmRJbnB1dChyZXM6YW55KTp2b2lkeyAgLy/lr4bnoIFcclxuICAgIGxldCByZWc6YW55ID0gLyg/PS4qKFthLXpBLVpdLiopKSg/PS4qWzAtOV0uKilbYS16QS1aMC05LSovKy5+IUAjJCVeJiooKV17NiwyMH0kLztcclxuICAgIGxldCBzdHI6Qm9vbGVhbiA9IHJlZy50ZXN0KHJlcy5kZXRhaWwudmFsdWUpO1xyXG4gICAgaWYocmVzLmRldGFpbC52YWx1ZSl7XHJcbiAgICAgIGlmKHN0cil7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIFtcImpnRm9ybVJycm9yLnBhc3N3b3JkRXJyb3JcIl06ICcnLFxyXG4gICAgICAgICAgW1wiamdGb3JtRGF0ZS5wYXNzd29yZFwiXTogcmVzLmRldGFpbC52YWx1ZSxcclxuICAgICAgICAgIGpnVmVyaWZpY2F0aW9uOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIFtcImpnRm9ybVJycm9yLnBhc3N3b3JkRXJyb3JcIl06ICfmlbDlrZfjgIHoi7HmlofjgIHlrZfnrKbkuKTnp43lj4rku6XkuIo2LTIw5L2NJyxcclxuICAgICAgICAgIFtcImpnRm9ybURhdGUucGFzc3dvcmRcIl06IHJlcy5kZXRhaWwudmFsdWUsXHJcbiAgICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJqZ0Zvcm1ScnJvci5wYXNzd29yZEVycm9yXCJdOiAnJyxcclxuICAgICAgICBbXCJqZ0Zvcm1EYXRlLnBhc3N3b3JkXCJdOiByZXMuZGV0YWlsLnZhbHVlLFxyXG4gICAgICAgIGpnVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgamdSZXBlYXRQYXNzd29yZElucHV0KHJlczphbnkpOnZvaWR7ICAvL+ehruiupOWvhueggVxyXG4gICAgaWYocmVzLmRldGFpbC52YWx1ZSl7XHJcbiAgICAgIGlmKHJlcy5kZXRhaWwudmFsdWUgIT0gdGhpcy5kYXRhLmpnRm9ybURhdGUucGFzc3dvcmQpe1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBbXCJqZ0Zvcm1ScnJvci50cnVld29yZEVycm9yXCJdOiAn5Lik5qyh6L6T5YWl55qE5a+G56CB5LiN5LiA6Ie0JyxcclxuICAgICAgICAgIFtcImpnRm9ybURhdGUudHJ1ZXdvcmRcIl06IHJlcy5kZXRhaWwudmFsdWUsXHJcbiAgICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgW1wiamdGb3JtUnJyb3IudHJ1ZXdvcmRFcnJvclwiXTogJycsXHJcbiAgICAgICAgICBbXCJqZ0Zvcm1EYXRlLnRydWV3b3JkXCJdOiByZXMuZGV0YWlsLnZhbHVlLFxyXG4gICAgICAgICAgamdWZXJpZmljYXRpb246IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJqZ0Zvcm1ScnJvci50cnVld29yZEVycm9yXCJdOiAnJyxcclxuICAgICAgICBbXCJqZ0Zvcm1EYXRlLnRydWV3b3JkXCJdOiByZXMuZGV0YWlsLnZhbHVlLFxyXG4gICAgICAgIGpnVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgamdReU5hbWVJbnB1dChyZXM6YW55KTp2b2lkeyAgLy/ljZXkvY3lkI3np7BcclxuICAgIGlmKHJlcy5kZXRhaWwudmFsdWUpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLnF5TmFtZUVycm9yXCJdOiAnJyxcclxuICAgICAgICBbXCJqZ0Zvcm1EYXRlLnF5TmFtZVwiXTogcmVzLmRldGFpbC52YWx1ZSxcclxuICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogdHJ1ZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGpnVGVuYW50Rm4odmFsdWU6YW55KTp2b2lkeyAgLy/miYDlnKjlnLDljLpcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIFtcImpnRm9ybVJycm9yLnRlbmFudElkRXJyb3JcIl06ICcnLFxyXG4gICAgICBbXCJqZ0Zvcm1EYXRlLnRlbmFudElkXCJdOiB2YWx1ZS5kZXRhaWwsXHJcbiAgICAgIGpnVmVyaWZpY2F0aW9uOiB0cnVlLFxyXG4gICAgICBbXCJqZ0Zvcm1EYXRlLnBsYXRmb3JtSWQgXCJdOiAnJ1xyXG4gICAgfSlcclxuICAgIHRoaXMuZ2V0UGxhdGZvcm1JZExpc3QoKTsgIC8v6I635Y+W5omA5bGe5Yib5Lia5bmz5Y+wXHJcbiAgfSxcclxuICBqZ0xpbmtUZWwocmVzOmFueSk6dm9pZHsgIC8v6IGU57O755S16K+dXHJcbiAgICBsZXQgcmVnOmFueSA9IC9eKCgxWzAtOV17MTB9KXwoKCgoWzAtOV17M30tKT9bMC05XXs4fSl8KChbMC05XXs0fS0pP1swLTldezd9KSkoLVswLTldezEsNH0pPykpJC87XHJcbiAgICBsZXQgc3RyOkJvb2xlYW4gPSByZWcudGVzdChyZXMuZGV0YWlsLnZhbHVlKTtcclxuICAgIGlmKHJlcy5kZXRhaWwudmFsdWUpe1xyXG4gICAgICBpZihzdHIpe1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBbXCJqZ0Zvcm1ScnJvci5saW5rVGVsRXJyb3JcIl06ICcnLFxyXG4gICAgICAgICAgW1wiamdGb3JtRGF0ZS5saW5rVGVsXCJdOiByZXMuZGV0YWlsLnZhbHVlLFxyXG4gICAgICAgICAgamdWZXJpZmljYXRpb246IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgW1wiamdGb3JtUnJyb3IubGlua1RlbEVycm9yXCJdOiAn6K+36L6T5YWl5q2j56Gu55qE6IGU57O755S16K+dJyxcclxuICAgICAgICAgIFtcImpnRm9ybURhdGUubGlua1RlbFwiXTogcmVzLmRldGFpbC52YWx1ZSxcclxuICAgICAgICAgIGpnVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLmxpbmtUZWxFcnJvclwiXTogJycsXHJcbiAgICAgICAgW1wiamdGb3JtRGF0ZS5saW5rVGVsXCJdOiByZXMuZGV0YWlsLnZhbHVlLFxyXG4gICAgICAgIGpnVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgamdWZXJpZnlDb2RlKHJlczphbnkpOnZvaWR7ICAvL+mqjOivgeeggVxyXG4gICAgaWYocmVzLmRldGFpbC52YWx1ZSl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiamdGb3JtUnJyb3IudmVyaWZ5Q29kZUVycm9yXCJdOiAnJyxcclxuICAgICAgICBbXCJqZ0Zvcm1EYXRlLnZlcmlmeUNvZGVcIl06IHJlcy5kZXRhaWwudmFsdWUsXHJcbiAgICAgICAgamdWZXJpZmljYXRpb246IHRydWVcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIGpnUGxhdGZvcm1PcGVuKCk6dm9pZHsgIC8v5omA5bGe5Yib5Lia5bmz5Y+w5omT5byA5LqL5Lu2XHJcbiAgICBpZih0aGlzLmRhdGEucGxhdGZvcm1JZExpc3QubGVuZ3RoID09IDApe1xyXG4gICAgICBUb2FzdCgn6K+35YWI6YCJ5oup5omA5Zyo5Zyw5Yy677yBJyk7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgY29udGVudE92ZXJmbG93OiAnc2Nyb2xsJyxcclxuICAgICAgICBqZ092ZXJsYXk6IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBjb250ZW50T3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgICAgIGpnT3ZlcmxheTogdHJ1ZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgamdQbGF0Zm9ybU9wZW5lZCgpOnZvaWR7ICAvL+aJgOWxnuWIm+S4muW5s+WPsOaJk+W8gOiPnOWNleagj+S4lOWKqOeUu+e7k+adn+WQjuinpuWPkVxyXG4gICAgaWYodGhpcy5kYXRhLnBsYXRmb3JtSWRMaXN0Lmxlbmd0aCA9PSAwKXtcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyNqZ1BsYXRmb3JtJykudG9nZ2xlKGZhbHNlKTsgICAgICAgIC8v5py65p6E5omA5bGe5Yib5Lia5bmz5Y+wXHJcbiAgICB9XHJcbiAgfSxcclxuICBqZ1BsYXRmb3JtRm4odmFsdWU6YW55KTp2b2lkeyAgLy/miYDlsZ7liJvkuJrlubPlj7BcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIFtcImpnRm9ybURhdGUucGxhdGZvcm1JZFwiXTogdmFsdWUuZGV0YWlsXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIFxyXG4gIGpnU3VibWl0Rm4oKTp2b2lkeyAgLy/mnLrmnoTms6jlhoxcclxuICAgIC8v6K+36L6T5YWl57uf5LiA56S+5Lya5L+h55So5Luj56CBXHJcbiAgICBpZih0aGlzLmRhdGEuamdGb3JtRGF0ZS5zaHh5Q29kZSA9PSAnJyl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiamdGb3JtUnJyb3Iuc2h4eUNvZGVFcnJvclwiXTon6K+36L6T5YWl57uf5LiA56S+5Lya5L+h55So5Luj56CBJyxcclxuICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIC8v5a+G56CBXHJcbiAgICBpZih0aGlzLmRhdGEuamdGb3JtRGF0ZS5wYXNzd29yZCA9PSAnJyl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiamdGb3JtUnJyb3IucGFzc3dvcmRFcnJvclwiXTon6K+36L6T5YWl5a+G56CBJyxcclxuICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIC8v56Gu6K6k5a+G56CBXHJcbiAgICBpZih0aGlzLmRhdGEuamdGb3JtRGF0ZS50cnVld29yZCA9PSAnJyl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiamdGb3JtUnJyb3IudHJ1ZXdvcmRFcnJvclwiXTon6K+35YaN5qyh56Gu6K6k5a+G56CBJyxcclxuICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIC8v5Y2V5L2N5ZCN56ewXHJcbiAgICBpZih0aGlzLmRhdGEuamdGb3JtRGF0ZS5xeU5hbWUgPT0gJycpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLnF5TmFtZUVycm9yXCJdOifor7fovpPlhaXljZXkvY3lkI3np7AnLFxyXG4gICAgICAgIGpnVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy/miYDlnKjlnLDljLpcclxuICAgIGlmKHRoaXMuZGF0YS5qZ0Zvcm1EYXRlLnRlbmFudElkID09ICcnKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJqZ0Zvcm1ScnJvci50ZW5hbnRJZEVycm9yXCJdOifor7fpgInmi6nmiYDlnKjlnLDljLonLFxyXG4gICAgICAgIGpnVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy/ogZTns7vnlLXor51cclxuICAgIGlmKHRoaXMuZGF0YS5qZ0Zvcm1EYXRlLmxpbmtUZWwgPT0gJycpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLmxpbmtUZWxFcnJvclwiXTon6K+36L6T5YWl6IGU57O755S16K+dJyxcclxuICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIC8v6aqM6K+B56CBXHJcbiAgICBpZih0aGlzLmRhdGEuamdGb3JtRGF0ZS52ZXJpZnlDb2RlID09ICcnKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJqZ0Zvcm1ScnJvci52ZXJpZnlDb2RlRXJyb3JcIl06J+ivt+i+k+WFpemqjOivgeeggScsXHJcbiAgICAgICAgamdWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvL+mYheivu+WNj+iurlxyXG4gICAgaWYodGhpcy5kYXRhLmpnVmVyaWZpY2F0aW9uID09IGZhbHNlKXtcclxuICAgICAgVG9hc3QoJ+ivt+aKiuW/heWhq+S/oeaBr+Whq+WGmeWujOaVtO+8gScpO1xyXG4gICAgfWVsc2UgaWYodGhpcy5kYXRhLmpnUHJvdG9jb2xDaGVja2VkID09IGZhbHNlKXtcclxuICAgICAgVG9hc3QoJ+ivt+mYheivu+W5tuaOpeWPl+W6lOeUqOS9v+eUqOWNj+iuru+8gScpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIGh0dHBzLnJlcXVlc3QoYXBpLmVudGVyUmVnLCB0aGlzLmRhdGEuamdGb3JtRGF0ZSwgJ1BPU1QnKVxyXG4gICAgICAudGhlbigoKTp2b2lkPT57XHJcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICB1cmw6ICcuLi9sb2dpbkZvcm0vbG9naW5Gb3JtJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgICAgVG9hc3QoZXJyKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgamdWZXJpZnlDb2RlRm4oKTp2b2lkeyAgLy/ojrflj5bpqozor4HnoIFcclxuICAgIGlmKHRoaXMuZGF0YS5qZ0Zvcm1EYXRlLmxpbmtUZWwgIT0gJycpe1xyXG4gICAgICBodHRwcy5yZXF1ZXN0KGFwaS5nZXRDb2RlICsgXCI/dGVsZXBob25lPVwiICsgdGhpcy5kYXRhLmpnRm9ybURhdGUubGlua1RlbCwgbnVsbCwgJ0dFVCcpXHJcbiAgICAgIC50aGVuKCgpOnZvaWQ9PntcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgamdWZXJpZnlDb2RlVGltZTogJzYwJyxcclxuICAgICAgICAgIGpnRGlzYWJsZWQ6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICAgIGxldCBzZXRUaW1lOmFueSA9IHNldEludGVydmFsKCgpOnZvaWQ9PntcclxuICAgICAgICAgIGxldCBzdHI6YW55ID0gcGFyc2VJbnQodGhpcy5kYXRhLmpnVmVyaWZ5Q29kZVRpbWUpIC0gMTtcclxuICAgICAgICAgIGlmKHN0ciA+IDApe1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgIGpnVmVyaWZ5Q29kZVRpbWU6IHN0clxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoc2V0VGltZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgamdWZXJpZnlDb2RlVGltZTogJ+iOt+WPlumqjOivgeeggScsXHJcbiAgICAgICAgICAgICAgamdEaXNhYmxlZDogZmFsc2VcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LDEwMDApXHJcbiAgICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgICAgVG9hc3QoZXJyKTtcclxuICAgICAgfSk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgVG9hc3QoJ+ivt+WFiOWhq+WGmeiBlOezu+eUteivne+8gScpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgamdDeFBsYXRmb3JtKGV2ZW50OmFueSk6dm9pZHsgIC8v5piv5ZCm5Yib5paw5bmz5Y+w5Li75L2T5Y2V5L2NXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBbXCJqZ0Zvcm1EYXRlLmlzQ3hQbGF0Zm9ybVwiXTogZXZlbnQuZGV0YWlsLFxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBqZ0N5UGxhdGZvcm0oZXZlbnQ6YW55KTp2b2lkeyAgLy/mmK/lkKbliJvkuJrlubPlj7DkuLvkvZPljZXkvY1cclxuICAgIGlmKGV2ZW50LmRldGFpbCA9PSAnMScpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybURhdGUucGxhdGZvcm1JZFwiXTogJycsXHJcbiAgICAgICAgamdQbGF0Zm9ybURpc2FibGVkOiB0cnVlXHJcbiAgICAgIH0pXHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBqZ1BsYXRmb3JtRGlzYWJsZWQ6IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBbXCJqZ0Zvcm1EYXRlLmlzQ3lQbGF0Zm9ybVwiXTogZXZlbnQuZGV0YWlsLFxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBcclxuXHJcblxyXG4gIC8v5Liq5Lq65rOo5YaMXHJcbiAgZ3JDYXJkVHlwZUZuKHZhbHVlOmFueSk6dm9pZHsgIC8v6K+B5Lu257G75Z6LXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBbXCJnckZvcm1ScnJvci5jYXJkVHlwZUlkUnJyb3JcIl06ICcnLFxyXG4gICAgICBbXCJnckZvcm1EYXRlLmNhcmRUeXBlSWRcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgZ3JWZXJpZmljYXRpb246IHRydWVcclxuICAgIH0pXHJcbiAgfSxcclxuICBnckNhcmROdW0ocmVzOmFueSk6dm9pZHsgIC8v6K+B5Lu25Y+356CBXHJcbiAgICBpZihyZXMuZGV0YWlsLnZhbHVlKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJnckZvcm1ScnJvci5jYXJkTnVtUnJyb3JcIl06ICcnLFxyXG4gICAgICAgIFtcImdyRm9ybURhdGUuY2FyZE51bVwiXTogcmVzLmRldGFpbC52YWx1ZSxcclxuICAgICAgICBnclZlcmlmaWNhdGlvbjogdHJ1ZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZ3JQYXNzd29yZElucHV0KHJlczphbnkpOnZvaWR7ICAvL+WvhueggVxyXG4gICAgbGV0IHJlZzphbnkgPSAvKD89LiooW2EtekEtWl0uKikpKD89LipbMC05XS4qKVthLXpBLVowLTktKi8rLn4hQCMkJV4mKigpXXs2LDIwfSQvO1xyXG4gICAgbGV0IHN0cjpCb29sZWFuID0gcmVnLnRlc3QocmVzLmRldGFpbC52YWx1ZSk7XHJcbiAgICBpZihyZXMuZGV0YWlsLnZhbHVlKXtcclxuICAgICAgaWYoc3RyKXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgW1wiZ3JGb3JtUnJyb3IucGFzc3dvcmRFcnJvclwiXTogJycsXHJcbiAgICAgICAgICBbXCJnckZvcm1EYXRlLnBhc3N3b3JkXCJdOiByZXMuZGV0YWlsLnZhbHVlLFxyXG4gICAgICAgICAgZ3JWZXJpZmljYXRpb246IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgW1wiZ3JGb3JtUnJyb3IucGFzc3dvcmRFcnJvclwiXTogJ+aVsOWtl+OAgeiLseaWh+OAgeWtl+espuS4pOenjeWPiuS7peS4ijYtMjDkvY0nLFxyXG4gICAgICAgICAgW1wiZ3JGb3JtRGF0ZS5wYXNzd29yZFwiXTogcmVzLmRldGFpbC52YWx1ZSxcclxuICAgICAgICAgIGdyVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImdyRm9ybVJycm9yLnBhc3N3b3JkRXJyb3JcIl06ICcnLFxyXG4gICAgICAgIFtcImdyRm9ybURhdGUucGFzc3dvcmRcIl06IHJlcy5kZXRhaWwudmFsdWUsXHJcbiAgICAgICAgZ3JWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICBnclJlcGVhdFBhc3N3b3JkSW5wdXQocmVzOmFueSk6dm9pZHsgIC8v56Gu6K6k5a+G56CBXHJcbiAgICBpZihyZXMuZGV0YWlsLnZhbHVlKXtcclxuICAgICAgaWYocmVzLmRldGFpbC52YWx1ZSAhPSB0aGlzLmRhdGEuZ3JGb3JtRGF0ZS5wYXNzd29yZCl7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIFtcImdyRm9ybVJycm9yLnRydWV3b3JkRXJyb3JcIl06ICfkuKTmrKHovpPlhaXnmoTlr4bnoIHkuI3kuIDoh7QnLFxyXG4gICAgICAgICAgW1wiZ3JGb3JtRGF0ZS50cnVld29yZFwiXTogcmVzLmRldGFpbC52YWx1ZSxcclxuICAgICAgICAgIGdyVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBbXCJnckZvcm1ScnJvci50cnVld29yZEVycm9yXCJdOiAnJyxcclxuICAgICAgICAgIFtcImdyRm9ybURhdGUudHJ1ZXdvcmRcIl06IHJlcy5kZXRhaWwudmFsdWUsXHJcbiAgICAgICAgICBnclZlcmlmaWNhdGlvbjogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImdyRm9ybVJycm9yLnRydWV3b3JkRXJyb3JcIl06ICcnLFxyXG4gICAgICAgIFtcImdyRm9ybURhdGUudHJ1ZXdvcmRcIl06IHJlcy5kZXRhaWwudmFsdWUsXHJcbiAgICAgICAgZ3JWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICBnclJlYWxOYW1lKHJlczphbnkpOnZvaWR7ICAvL+Wnk+WQjVxyXG4gICAgaWYocmVzLmRldGFpbC52YWx1ZSl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiZ3JGb3JtUnJyb3IucmVhbE5hbWVScnJvclwiXTogJycsXHJcbiAgICAgICAgW1wiZ3JGb3JtRGF0ZS5yZWFsTmFtZVwiXTogcmVzLmRldGFpbC52YWx1ZSxcclxuICAgICAgICBnclZlcmlmaWNhdGlvbjogdHJ1ZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZ3JQaG9uZU51bShyZXM6YW55KTp2b2lkeyAgLy/ogZTns7vnlLXor51cclxuICAgIGxldCByZWc6YW55ID0gL14oKDFbMC05XXsxMH0pfCgoKChbMC05XXszfS0pP1swLTldezh9KXwoKFswLTldezR9LSk/WzAtOV17N30pKSgtWzAtOV17MSw0fSk/KSkkLztcclxuICAgIGxldCBzdHI6Qm9vbGVhbiA9IHJlZy50ZXN0KHJlcy5kZXRhaWwudmFsdWUpO1xyXG4gICAgaWYocmVzLmRldGFpbC52YWx1ZSl7XHJcbiAgICAgIGlmKHN0cil7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIFtcImdyRm9ybVJycm9yLnBob25lTnVtRXJyb3JcIl06ICcnLFxyXG4gICAgICAgICAgW1wiZ3JGb3JtRGF0ZS5waG9uZU51bVwiXTogcmVzLmRldGFpbC52YWx1ZSxcclxuICAgICAgICAgIGdyVmVyaWZpY2F0aW9uOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIFtcImdyRm9ybVJycm9yLnBob25lTnVtRXJyb3JcIl06ICfor7fovpPlhaXmraPnoa7nmoTogZTns7vnlLXor50nLFxyXG4gICAgICAgICAgW1wiZ3JGb3JtRGF0ZS5waG9uZU51bVwiXTogcmVzLmRldGFpbC52YWx1ZSxcclxuICAgICAgICAgIGdyVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImdyRm9ybVJycm9yLnBob25lTnVtRXJyb3JcIl06ICcnLFxyXG4gICAgICAgIFtcImdyRm9ybURhdGUucGhvbmVOdW1cIl06IHJlcy5kZXRhaWwudmFsdWUsXHJcbiAgICAgICAgZ3JWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICBnclZlcmlmeUNvZGUocmVzOmFueSk6dm9pZHsgIC8v6aqM6K+B56CBXHJcbiAgICBpZihyZXMuZGV0YWlsLnZhbHVlKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJnckZvcm1ScnJvci52ZXJpZnlDb2RlRXJyb3JcIl06ICcnLFxyXG4gICAgICAgIFtcImdyRm9ybURhdGUudmVyaWZ5Q29kZVwiXTogcmVzLmRldGFpbC52YWx1ZSxcclxuICAgICAgICBnclZlcmlmaWNhdGlvbjogdHJ1ZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZ3JWZXJpZnlDb2RlRm4oKTp2b2lkeyAgLy/ojrflj5bpqozor4HnoIFcclxuICAgIGlmKHRoaXMuZGF0YS5nckZvcm1EYXRlLnBob25lTnVtICE9ICcnKXtcclxuICAgICAgaHR0cHMucmVxdWVzdChhcGkuZ2V0Q29kZSArIFwiP3RlbGVwaG9uZT1cIiArIHRoaXMuZGF0YS5nckZvcm1EYXRlLnBob25lTnVtLCBudWxsLCAnR0VUJylcclxuICAgICAgLnRoZW4oKCk6dm9pZD0+e1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBnclZlcmlmeUNvZGVUaW1lOiAnNjAnLFxyXG4gICAgICAgICAgZ3JEaXNhYmxlZDogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbGV0IHNldFRpbWU6YW55ID0gc2V0SW50ZXJ2YWwoKCk6dm9pZD0+e1xyXG4gICAgICAgICAgbGV0IHN0cjphbnkgPSBwYXJzZUludCh0aGlzLmRhdGEuZ3JWZXJpZnlDb2RlVGltZSkgLSAxO1xyXG4gICAgICAgICAgaWYoc3RyID4gMCl7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgZ3JWZXJpZnlDb2RlVGltZTogc3RyXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChzZXRUaW1lKTtcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICBnclZlcmlmeUNvZGVUaW1lOiAn6I635Y+W6aqM6K+B56CBJyxcclxuICAgICAgICAgICAgICBnckRpc2FibGVkOiBmYWxzZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sMTAwMClcclxuICAgICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgICBUb2FzdChlcnIpO1xyXG4gICAgICB9KTtcclxuICAgIH1lbHNle1xyXG4gICAgICBUb2FzdCgn6K+35YWI5aGr5YaZ6IGU57O755S16K+d77yBJyk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBncnhpYVF1Rm4odmFsdWU6YW55KTp2b2lkeyAgLy/miYDlnKjlnLDljLpcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIFtcImdyRm9ybVJycm9yLnhpYVF1SWRFcnJvclwiXTogJycsXHJcbiAgICAgIFtcImdyRm9ybURhdGUueGlhUXVJZFwiXTogdmFsdWUuZGV0YWlsLFxyXG4gICAgICBnclZlcmlmaWNhdGlvbjogdHJ1ZSxcclxuICAgICAgW1wiZ3JGb3JtRGF0ZS5kYW5XZWlJZFwiXTogJydcclxuICAgIH0pXHJcbiAgICB0aGlzLmdldEVudGVyTGlzdExpc3QoKTsgIC8v6I635Y+W5bel5L2c5Y2V5L2NXHJcbiAgfSxcclxuICBnclBsYXRmb3JtT3BlbigpOnZvaWR7ICAvL+aJgOWxnuWIm+S4muW5s+WPsOaJk+W8gOS6i+S7tlxyXG4gICAgaWYodGhpcy5kYXRhLmdyRW50ZXJMaXN0TGlzdC5sZW5ndGggPT0gMCl7XHJcbiAgICAgIFRvYXN0KCfor7flhYjpgInmi6nmiYDlnKjlnLDljLrvvIEnKTtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBjb250ZW50T3ZlcmZsb3c6ICdzY3JvbGwnLFxyXG4gICAgICAgIGdyT3ZlcmxheTogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGNvbnRlbnRPdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgICAgZ3JPdmVybGF5OiB0cnVlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICBnclBsYXRmb3JtT3BlbmVkKCk6dm9pZHsgIC8v5bel5L2c5Y2V5L2N5omT5byA6I+c5Y2V5qCP5LiU5Yqo55S757uT5p2f5ZCO6Kem5Y+RXHJcbiAgICBpZih0aGlzLmRhdGEuZ3JFbnRlckxpc3RMaXN0Lmxlbmd0aCA9PSAwKXtcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyNnclBsYXRmb3JtJykudG9nZ2xlKGZhbHNlKTsgICAgICAgIC8v5bel5L2c5Y2V5L2NXHJcbiAgICB9XHJcbiAgfSxcclxuICBnclBsYXRmb3JtRm4odmFsdWU6YW55KTp2b2lkeyAgLy/miYDlsZ7liJvkuJrlubPlj7BcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIFtcImdyRm9ybURhdGUuZGFuV2VpSWRcIl06IHZhbHVlLmRldGFpbFxyXG4gICAgfSlcclxuICB9LFxyXG4gIGdySXNMaXVYdWUoZXZlbnQ6YW55KTp2b2lkeyAgLy/mmK/lkKbkuLrnlZnlrablm57lm73kurrlkZhcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIFtcImdyRm9ybURhdGUuaXNMaXVYdWVcIl06IGV2ZW50LmRldGFpbCxcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIGdyUHJvdG9jb2xDaGVja2VkRm4odmFsdWU6YW55KTp2b2lkeyAgLy/kvb/nlKjljY/orq5cclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGdyUHJvdG9jb2xDaGVja2VkOiB2YWx1ZS5kZXRhaWxcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgXHJcbiAgZ3JTdWJtaXRGbigpOnZvaWR7ICAvL+S4quS6uuazqOWGjFxyXG4gICAgLy/or4Hku7bnsbvlnotcclxuICAgIGlmKHRoaXMuZGF0YS5nckZvcm1EYXRlLmNhcmRUeXBlSWQgPT0gJycpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImdyRm9ybVJycm9yLmNhcmRUeXBlSWRScnJvclwiXTogJ+ivt+mAieaLqeWNleS9jeexu+WeiycsXHJcbiAgICAgICAgZ3JWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvL+ivgeS7tuWPt+eggVxyXG4gICAgaWYodGhpcy5kYXRhLmdyRm9ybURhdGUuY2FyZE51bSA9PSAnJyl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiZ3JGb3JtUnJyb3IuY2FyZE51bVJycm9yXCJdOiAn6K+36YCJ5oup6K+B5Lu25Y+356CBJyxcclxuICAgICAgICBnclZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIC8v5a+G56CBXHJcbiAgICBpZih0aGlzLmRhdGEuZ3JGb3JtRGF0ZS5wYXNzd29yZCA9PSAnJyl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiZ3JGb3JtUnJyb3IucGFzc3dvcmRFcnJvclwiXTon6K+36L6T5YWl5a+G56CBJyxcclxuICAgICAgICBnclZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIC8v56Gu6K6k5a+G56CBXHJcbiAgICBpZih0aGlzLmRhdGEuZ3JGb3JtRGF0ZS50cnVld29yZCA9PSAnJyl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiZ3JGb3JtUnJyb3IudHJ1ZXdvcmRFcnJvclwiXTon6K+35YaN5qyh56Gu6K6k5a+G56CBJyxcclxuICAgICAgICBnclZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIC8v5aeT5ZCNXHJcbiAgICBpZih0aGlzLmRhdGEuZ3JGb3JtRGF0ZS5yZWFsTmFtZSA9PSAnJyl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiZ3JGb3JtUnJyb3IucmVhbE5hbWVScnJvclwiXTogJ+ivt+i+k+WFpeWnk+WQjScsXHJcbiAgICAgICAgZ3JWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvL+iBlOezu+eUteivnVxyXG4gICAgaWYodGhpcy5kYXRhLmdyRm9ybURhdGUucGhvbmVOdW0gPT0gJycpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImdyRm9ybVJycm9yLnBob25lTnVtRXJyb3JcIl06J+ivt+i+k+WFpeiBlOezu+eUteivnScsXHJcbiAgICAgICAgZ3JWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAgLy/pqozor4HnoIFcclxuICAgICBpZih0aGlzLmRhdGEuZ3JGb3JtRGF0ZS52ZXJpZnlDb2RlID09ICcnKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJnckZvcm1ScnJvci52ZXJpZnlDb2RlRXJyb3JcIl06J+ivt+i+k+WFpemqjOivgeeggScsXHJcbiAgICAgICAgZ3JWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvL+aJgOWcqOWcsOWMulxyXG4gICAgaWYodGhpcy5kYXRhLmdyRm9ybURhdGUueGlhUXVJZCA9PSAnJyl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiZ3JGb3JtUnJyb3IueGlhUXVJZEVycm9yXCJdOifor7fpgInmi6nmiYDlnKjlnLDljLonLFxyXG4gICAgICAgIGdyVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy/pmIXor7vljY/orq5cclxuICAgIGlmKHRoaXMuZGF0YS5nclZlcmlmaWNhdGlvbiA9PSBmYWxzZSl7XHJcbiAgICAgIFRvYXN0KCfor7fmiorlv4Xloavkv6Hmga/loavlhpnlrozmlbTvvIEnKTtcclxuICAgIH1lbHNlIGlmKHRoaXMuZGF0YS5nclByb3RvY29sQ2hlY2tlZCA9PSBmYWxzZSl7XHJcbiAgICAgIFRvYXN0KCfor7fpmIXor7vlubbmjqXlj5flupTnlKjkvb/nlKjljY/orq7vvIEnKTtcclxuICAgIH1lbHNle1xyXG4gICAgICBodHRwcy5yZXF1ZXN0KGFwaS51c2VyUmVnLCB0aGlzLmRhdGEuZ3JGb3JtRGF0ZSwgJ1BPU1QnKVxyXG4gICAgICAudGhlbigoKTp2b2lkPT57XHJcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICB1cmw6ICcuLi9sb2dpbkZvcm0vbG9naW5Gb3JtJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgICAgVG9hc3QoZXJyKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLy/miJHlt7LpmIXor7vlubbmjqXlj5flupTnlKjkvb/nlKjljY/orq5cclxuICBub3RpY2VGbigpOnZvaWR7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBqZ1Byb3RvY29sQ2hlY2tlZDogIXRoaXMuZGF0YS5qZ1Byb3RvY29sQ2hlY2tlZFxyXG4gICAgfSlcclxuICAgIERpYWxvZy5hbGVydCh7XHJcbiAgICAgIHRpdGxlOiAn5rOo5YaM6aG755+lJyxcclxuICAgICAgbWVzc2FnZUFsaWduOiAnbGVmdCcsXHJcbiAgICAgIG1lc3NhZ2U6ICcxLuacrOermemHh+eUqOWunuWQjeiupOivge+8jOeUs+ivt+S6uumhu+ehruS/neWhq+WGmeS/oeaBr+eahOecn+WunuOAgeWujOaVtOOAgeacieaViOOAguS/oeaBr+Whq+WGmeS4jeecn+WunuOAgeS4jeWujOaVtOetieWwhuWvvOiHtOazqOWGjOaXoOazleWuoeaguOmAmui/h+OAguacrOermeehruS/neeUqOaIt+S/oeaBr+eahOWuieWFqOaAp+WSjOS/neWvhuaAp+W5tuS4uuS5i+i0n+i0o+OAglxcbjIu6YG15a6I5Lit5Y2O5Lq65rCR5YWx5ZKM5Zu95rOV5b6L5rOV5Luk5ZKM5YW25LuW55u45YWz5rOV6KeE77yM5Lil56aB5Y+R5biD56C05Z2P5a6q5rOV5ZKM5rOV5b6L44CB5rOV6KeE55qE5L+h5oGv44CCXFxuMy7pgbXlrojlhazlronpg6jlhbPkuo7jgIrorqHnrpfmnLrkv6Hmga/nvZHnu5zlm73pmYXogZTnvZHlronlhajkv53miqTnrqHnkIblip7ms5XjgIvnmoTop4TlrprvvIzoh6rop4nnu7TmiqTorqHnrpfmnLrkv6Hmga/nvZHnu5znmoTlronlhajjgIJcXG40LuS4peemgeWcqOe9keS4iuWuo+aJrOWwgeW7uui/t+S/oeOAgea3q+enveOAgeiJsuaDheOAgeaatOWKm+OAgei1jOWNmuOAgeasuuiviOetieS4jeato+W9k+ihjOS4uuOAglxcbjUu5Y2V5L2N5oiW5Liq5Lq65Y+R5biD55qE5L+h5oGv6KaB55yf5a6e5pyJ5pWI44CB5YeG56Gu5a6M5pW077yM5bm25LiN5b6X5pyJ5byV5Lq66K+v6Kej5oiW6ICF6Jma5YGH55qE6ZmI6L+w44CCXFxuNi7nlKjmiLfms6jlhozmiJDlip/lkI7vvIzor7flpqXlloTkv53nrqHmgqjnmoTnlKjmiLflkI3lkozlr4bnoIHjgIInLFxyXG4gICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgIFxyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgLy/miJHlt7LpmIXor7vlubbmjqXlj5flupTnlKjkvb/nlKjljY/orq7vvIjkuKrkurrvvIlcclxuICBnck5vdGljZUZuKCk6dm9pZHtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGdyUHJvdG9jb2xDaGVja2VkOiAhdGhpcy5kYXRhLmdyUHJvdG9jb2xDaGVja2VkXHJcbiAgICB9KVxyXG4gICAgRGlhbG9nLmFsZXJ0KHtcclxuICAgICAgdGl0bGU6ICfms6jlhozpobvnn6UnLFxyXG4gICAgICBtZXNzYWdlQWxpZ246ICdsZWZ0JyxcclxuICAgICAgbWVzc2FnZTogJzEu5pys56uZ6YeH55So5a6e5ZCN6K6k6K+B77yM55Sz6K+35Lq66aG756Gu5L+d5aGr5YaZ5L+h5oGv55qE55yf5a6e44CB5a6M5pW044CB5pyJ5pWI44CC5L+h5oGv5aGr5YaZ5LiN55yf5a6e44CB5LiN5a6M5pW0562J5bCG5a+86Ie05rOo5YaM5peg5rOV5a6h5qC46YCa6L+H44CC5pys56uZ56Gu5L+d55So5oi35L+h5oGv55qE5a6J5YWo5oCn5ZKM5L+d5a+G5oCn5bm25Li65LmL6LSf6LSj44CCXFxuMi7pgbXlrojkuK3ljY7kurrmsJHlhbHlkozlm73ms5Xlvovms5Xku6Tlkozlhbbku5bnm7jlhbPms5Xop4TvvIzkuKXnpoHlj5HluIPnoLTlnY/lrqrms5Xlkozms5XlvovjgIHms5Xop4TnmoTkv6Hmga/jgIJcXG4zLumBteWuiOWFrOWuiemDqOWFs+S6juOAiuiuoeeul+acuuS/oeaBr+e9kee7nOWbvemZheiBlOe9keWuieWFqOS/neaKpOeuoeeQhuWKnuazleOAi+eahOinhOWumu+8jOiHquiniee7tOaKpOiuoeeul+acuuS/oeaBr+e9kee7nOeahOWuieWFqOOAglxcbjQu5Lil56aB5Zyo572R5LiK5a6j5oms5bCB5bu66L+35L+h44CB5rer56e944CB6Imy5oOF44CB5pq05Yqb44CB6LWM5Y2a44CB5qy66K+I562J5LiN5q2j5b2T6KGM5Li644CCXFxuNS7ljZXkvY3miJbkuKrkurrlj5HluIPnmoTkv6Hmga/opoHnnJ/lrp7mnInmlYjjgIHlh4bnoa7lrozmlbTvvIzlubbkuI3lvpfmnInlvJXkurror6/op6PmiJbogIXomZrlgYfnmoTpmYjov7DjgIJcXG42LueUqOaIt+azqOWGjOaIkOWKn+WQju+8jOivt+WmpeWWhOS/neeuoeaCqOeahOeUqOaIt+WQjeWSjOWvhueggeOAgicsXHJcbiAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgXHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuXHJcbiAgLy/pobXpnaLliJ3lp4vljJZcclxuICBvbkxvYWQoKXtcclxuICAgIC8v6aG16Z2i5qCH6aKYXHJcbiAgICB3eC5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoeyAgICAgXHJcbiAgICAgIHRpdGxlOiBcIuazqOWGjFwiXHJcbiAgICB9KTtcclxuICAgIC8v6I635Y+W5Y2V5L2N57G75Z6LXHJcbiAgICB0aGlzLmdldERhbndlaUxpc3QoKTtcclxuICAgIC8v6I635Y+W5omA5Zyo5Zyw5Yy6XHJcbiAgICB0aGlzLmdldFRlbmFudExpc3QoKTtcclxuICAgIC8v6K+B5Lu257G75Z6LXHJcbiAgICB0aGlzLmdldGNhcmRMaXN0KCk7XHJcbiAgfSxcclxuICAvL+mhtemdoua4suafk+WujOaIkFxyXG4gIG9uUmVhZHkoKXt9LFxyXG5cclxuICAvL+mhtemdouaYvuekulxyXG4gIG9uU2hvdygpe1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgW1wiamdGb3JtRGF0ZS5zaHh5Q29kZVwiXTonJywgIC8v57uf5LiA56S+5Lya5L+h55So5Luj56CBXHJcbiAgICAgIFtcImpnRm9ybURhdGUucGFzc3dvcmRcIl06JycsICAvL+WvhueggVxyXG4gICAgICBbXCJqZ0Zvcm1EYXRlLnRydWV3b3JkXCJdOicnLCAgLy/noa7orqTlr4bnoIFcclxuICAgICAgW1wiamdGb3JtRGF0ZS5xeU5hbWVcIl06JycsICAvL+WNleS9jeWQjeensFxyXG4gICAgICBbXCJqZ0Zvcm1EYXRlLnRlbmFudElkXCJdOicnLCAgLy/miYDlnKjlnLDljLpcclxuICAgICAgW1wiamdGb3JtRGF0ZS5saW5rVGVsXCJdOicnLCAgLy/ogZTns7vkurrnlLXor51cclxuICAgICAgW1wiamdGb3JtRGF0ZS52ZXJpZnlDb2RlXCJdOicnLCAgLy/pqozor4HnoIFcclxuICAgICAgW1wiamdGb3JtRGF0ZS5pc0N4UGxhdGZvcm1cIl06JzInLCAgLy/mmK/lkKbliJvmlrDlubPlj7DkuLvkvZPljZXkvY1cclxuICAgICAgW1wiamdGb3JtRGF0ZS5pc0N5UGxhdGZvcm1cIl06JzInLCAgLy/mmK/lkKbliJvkuJrlubPlj7DkuLvkvZPljZXkvY1cclxuICAgICAgW1wiamdGb3JtRGF0ZS5wbGF0Zm9ybUlkXCJdOicnLCAgLy/miYDlsZ7liJvkuJrlubPlj7BcclxuXHJcbiAgICAgIFtcImdyRm9ybURhdGUuY2FyZFR5cGVJZFwiXTonJywgIC8v6K+B5Lu257G75Z6LXHJcbiAgICAgIFtcImdyRm9ybURhdGUuY2FyZE51bVwiXTonJywgIC8v6K+B5Lu25Y+356CBXHJcbiAgICAgIFtcImdyRm9ybURhdGUucmVhbE5hbWVcIl06JycsICAvL+Wnk+WQjVxyXG4gICAgICBbXCJnckZvcm1EYXRlLnhpYVF1SWRcIl06JycsICAvL+aJgOWxnuWcsOWMulxyXG4gICAgICBbXCJnckZvcm1EYXRlLmRhbldlaUlkXCJdOicnLCAgLy/lt6XkvZzljZXkvY1cclxuICAgICAgW1wiZ3JGb3JtRGF0ZS5waG9uZU51bVwiXTonJywgIC8v6IGU57O755S16K+dXHJcbiAgICAgIFtcImdyRm9ybURhdGUudmVyaWZ5Q29kZVwiXTonJywgIC8v6aqM6K+B56CBXHJcbiAgICAgIFtcImdyRm9ybURhdGUuaXNMaXVYdWVcIl06JzInLCAgLy/mmK/lkKbkuLrnlZnlrablm57lm73kurrlkZhcclxuICAgICAgW1wiZ3JGb3JtRGF0ZS5wYXNzd29yZFwiXTonJywgIC8v5a+G56CBXHJcbiAgICAgIFtcImdyRm9ybURhdGUudHJ1ZXdvcmRcIl06JycsICAvL+ehruiupOWvhueggVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvL+mhtemdoumakOiXj1xyXG4gIG9uSGlkZSgpe30sXHJcblxyXG4gIC8v6aG16Z2i5YWz6ZetXHJcbiAgb25VbmxvYWQoKXt9XHJcbn0pXHJcbmV4cG9ydCB7fTtcclxuIl19