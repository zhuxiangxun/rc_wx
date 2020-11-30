"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Toast = require('../../miniprogram_npm/@vant/weapp/toast/toast.js').default;
var api = getApp().globalData;
var https = require('../../utils/myRequest.js');
Page({
    data: {
        tabActive: 'jg',
        cardList: [],
        jgLink: '',
        jgVerifyCodeTime: '获取验证码',
        jgDisabled: false,
        jgProtocolChecked: false,
        grLink: '',
        grVerifyCodeTime: '获取验证码',
        grDisabled: false,
        grProtocolChecked: false,
        jgRepeatPassword: '',
        jgPasswordError: '',
        jgFormDate: {
            id: '',
            shxyCode: '',
            password: '',
            trueword: '',
            linkTel: '',
            verifyCode: '',
        },
        jgFormRrror: {
            shxyCodeError: '',
            passwordError: '',
            truewordError: '',
            linkTelError: '',
            verifyCodeError: '',
        },
        jgVerification: false,
        grFormDate: {
            id: '',
            cardTypeId: '',
            cardNum: '',
            phoneNum: '',
            verifyCode: '',
            password: '',
            trueword: '',
        },
        grFormRrror: {
            cardTypeIdRrror: '',
            cardNumRrror: '',
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
    onTabChange: function () {
        this.selectComponent('#grCardType').toggle(false);
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
    jgLinkFn: function () {
        if (!!this.data.jgFormDate.shxyCode) {
            this.getJgLinkTel();
        }
        else {
        }
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
                this.getJgLinkTel();
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
    getJgLinkTel: function () {
        var _this = this;
        https.request(api.getUser + "?account=" + this.data.jgFormDate.shxyCode, null, 'get')
            .then(function (res) {
            var _a;
            var linkTel = res.val.phoneNum.split('');
            linkTel.splice(3, 4, "****");
            _this.setData((_a = {},
                _a["jgFormDate.id"] = res.val.id,
                _a["jgFormDate.linkTel"] = res.val.phoneNum,
                _a.jgLink = linkTel.join(""),
                _a));
        }, function (err) {
            var _a;
            _this.setData((_a = {},
                _a["jgFormDate.id"] = '',
                _a["jgFormDate.linkTel"] = '',
                _a.jgLink = '',
                _a));
            Toast(err);
        });
    },
    jgPasswordInput: function (res) {
        var _a, _b, _c;
        var reg = /(?=.*([a-zA-Z].*))(?=.*[0-9].*)[a-zA-Z0-9-*/+.~!@#$%^&*()]{6,20}$/;
        var str = reg.test(res.detail);
        if (res.detail) {
            if (str) {
                this.setData((_a = {},
                    _a["jgFormRrror.passwordError"] = '',
                    _a["jgFormDate.password"] = res.detail,
                    _a.jgVerification = true,
                    _a));
            }
            else {
                this.setData((_b = {},
                    _b["jgFormRrror.passwordError"] = '',
                    _b["jgFormDate.password"] = res.detail,
                    _b.jgVerification = false,
                    _b));
            }
        }
        else {
            this.setData((_c = {},
                _c["jgFormRrror.passwordError"] = '',
                _c["jgFormDate.password"] = res.detail,
                _c.jgVerification = false,
                _c));
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
        var _a, _b, _c;
        if (res.detail) {
            if (res.detail != this.data.jgFormDate.password) {
                this.setData((_a = {},
                    _a["jgFormRrror.truewordError"] = '',
                    _a["jgFormDate.trueword"] = res.detail,
                    _a.jgVerification = false,
                    _a));
            }
            else {
                this.setData((_b = {},
                    _b["jgFormRrror.truewordError"] = '',
                    _b["jgFormDate.trueword"] = res.detail,
                    _b.jgVerification = true,
                    _b));
            }
        }
        else {
            this.setData((_c = {},
                _c["jgFormRrror.truewordError"] = '',
                _c["jgFormDate.trueword"] = res.detail,
                _c.jgVerification = false,
                _c));
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
                    _b["jgFormRrror.linkTelError"] = '请获取正确的联系电话',
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
    jgSubmitFn: function () {
        var _a, _b, _c, _d, _e;
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
        if (this.data.jgFormDate.linkTel == '') {
            this.setData((_d = {},
                _d["jgFormRrror.linkTelError"] = '请填写统一社会信用代码获取',
                _d.jgVerification = false,
                _d));
        }
        if (this.data.jgFormDate.verifyCode == '') {
            this.setData((_e = {},
                _e["jgFormRrror.verifyCodeError"] = '请输入验证码',
                _e.jgVerification = false,
                _e));
        }
        if (this.data.jgVerification == false) {
            Toast('请把必填信息填写完整！');
        }
        else {
            var url = api.updatePass + '?id=' + this.data.jgFormDate.id + '&shxyCode=' + this.data.jgFormDate.shxyCode + '&phoneNum=' + this.data.jgFormDate.linkTel + '&verifyCode=' + this.data.jgFormDate.verifyCode + '&password=' + this.data.jgFormDate.password;
            https.request(url, null, 'POST').then(function () {
                Toast({
                    type: 'success',
                    message: '修改成功！',
                    onClose: function () {
                        wx.navigateTo({
                            url: '../loginForm/loginForm'
                        });
                    },
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
    getGrLinkTel: function () {
        var _this = this;
        https.request(api.getUser + "?account=" + this.data.grFormDate.cardNum, null, 'get')
            .then(function (res) {
            var _a;
            var linkTel = res.val.phoneNum.split('');
            linkTel.splice(3, 4, "****");
            _this.setData((_a = {},
                _a["grFormDate.id"] = res.val.id,
                _a["grFormDate.phoneNum"] = res.val.phoneNum,
                _a.grLink = linkTel.join(""),
                _a));
        }, function (err) {
            var _a;
            _this.setData((_a = {},
                _a["grFormDate.id"] = '',
                _a["grFormDate.phoneNum"] = '',
                _a.grLink = '',
                _a));
            Toast(err);
        });
    },
    grCardTypeFn: function (value) {
        var _a;
        this.setData((_a = {},
            _a["grFormRrror.cardTypeIdRrror"] = '',
            _a["grFormDate.cardTypeId"] = value.detail,
            _a.grVerification = true,
            _a));
    },
    grLinkFn: function () {
        if (!!this.data.grFormDate.cardNum) {
            this.getGrLinkTel();
        }
        else {
        }
    },
    grShxyCodeInput: function (res) {
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
            this.getGrLinkTel();
        }
    },
    grPasswordInput: function (res) {
        var _a, _b, _c;
        var reg = /(?=.*([a-zA-Z].*))(?=.*[0-9].*)[a-zA-Z0-9-*/+.~!@#$%^&*()]{6,20}$/;
        var str = reg.test(res.detail);
        if (res.detail) {
            if (str) {
                this.setData((_a = {},
                    _a["grFormRrror.passwordError"] = '',
                    _a["grFormDate.password"] = res.detail,
                    _a.grVerification = true,
                    _a));
            }
            else {
                this.setData((_b = {},
                    _b["grFormRrror.passwordError"] = '',
                    _b["grFormDate.password"] = res.detail,
                    _b.grVerification = false,
                    _b));
            }
        }
        else {
            this.setData((_c = {},
                _c["grFormRrror.passwordError"] = '',
                _c["grFormDate.password"] = res.detail,
                _c.grVerification = false,
                _c));
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
        var _a, _b, _c;
        if (res.detail) {
            if (res.detail != this.data.grFormDate.password) {
                this.setData((_a = {},
                    _a["grFormRrror.truewordError"] = '',
                    _a["grFormDate.trueword"] = res.detail,
                    _a.grVerification = false,
                    _a));
            }
            else {
                this.setData((_b = {},
                    _b["grFormRrror.truewordError"] = '',
                    _b["grFormDate.trueword"] = res.detail,
                    _b.grVerification = true,
                    _b));
            }
        }
        else {
            this.setData((_c = {},
                _c["grFormRrror.truewordError"] = '',
                _c["grFormDate.trueword"] = res.detail,
                _c.grVerification = false,
                _c));
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
    grSubmitFn: function () {
        var _a, _b, _c, _d, _e, _f;
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
        if (this.data.grFormDate.phoneNum == '') {
            this.setData((_e = {},
                _e["grFormRrror.phoneNumError"] = '请输入联系电话',
                _e.grVerification = false,
                _e));
        }
        if (this.data.grFormDate.verifyCode == '') {
            this.setData((_f = {},
                _f["grFormRrror.verifyCodeError"] = '请输入验证码',
                _f.grVerification = false,
                _f));
        }
        if (this.data.grVerification == false) {
            Toast('请把必填信息填写完整！');
        }
        else {
            var url = api.updatePass + '?id=' + this.data.grFormDate.id + '&cardTypeId=' + this.data.grFormDate.cardTypeId + '&cardNum=' + this.data.grFormDate.cardNum + '&phoneNum=' + this.data.grFormDate.phoneNum + '&verifyCode=' + this.data.grFormDate.verifyCode + '&password=' + this.data.grFormDate.password;
            https.request(url, null, 'POST').then(function () {
                Toast({
                    type: 'success',
                    message: '修改成功！',
                    onClose: function () {
                        wx.navigateTo({
                            url: '../loginForm/loginForm'
                        });
                    },
                });
            }, function (err) {
                Toast(err);
            });
        }
    },
    onLoad: function () {
        wx.setNavigationBarTitle({
            title: "找回密码"
        });
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
            _a["jgFormDate.linkTel"] = '',
            _a["jgFormDate.verifyCode"] = '',
            _a.jgLink = '',
            _a["grFormDate.cardTypeId"] = '',
            _a["grFormDate.cardNum"] = '',
            _a["grFormDate.phoneNum"] = '',
            _a["grFormDate.verifyCode"] = '',
            _a["grFormDate.password"] = '',
            _a["grFormDate.trueword"] = '',
            _a.grLink = '',
            _a));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemdQYXNzd29yZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInpnUGFzc3dvcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsa0RBQWtELENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDaEYsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFFLENBQUMsVUFBVSxDQUFDO0FBQ2hDLElBQUksS0FBSyxHQUFJLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0FBRWpELElBQUksQ0FBQztJQUVILElBQUksRUFBRTtRQUNKLFNBQVMsRUFBRSxJQUFJO1FBRWYsUUFBUSxFQUFFLEVBQUU7UUFFWixNQUFNLEVBQUUsRUFBRTtRQUNWLGdCQUFnQixFQUFFLE9BQU87UUFDekIsVUFBVSxFQUFFLEtBQUs7UUFDakIsaUJBQWlCLEVBQUUsS0FBSztRQUV4QixNQUFNLEVBQUUsRUFBRTtRQUNWLGdCQUFnQixFQUFFLE9BQU87UUFDekIsVUFBVSxFQUFFLEtBQUs7UUFDakIsaUJBQWlCLEVBQUUsS0FBSztRQUd4QixnQkFBZ0IsRUFBRSxFQUFFO1FBQ3BCLGVBQWUsRUFBRSxFQUFFO1FBQ25CLFVBQVUsRUFBQztZQUNULEVBQUUsRUFBRSxFQUFFO1lBQ04sUUFBUSxFQUFFLEVBQUU7WUFDWixRQUFRLEVBQUUsRUFBRTtZQUNaLFFBQVEsRUFBRSxFQUFFO1lBQ1osT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsRUFBRTtTQUNmO1FBQ0QsV0FBVyxFQUFDO1lBQ1YsYUFBYSxFQUFFLEVBQUU7WUFDakIsYUFBYSxFQUFFLEVBQUU7WUFDakIsYUFBYSxFQUFFLEVBQUU7WUFDakIsWUFBWSxFQUFFLEVBQUU7WUFDaEIsZUFBZSxFQUFFLEVBQUU7U0FDcEI7UUFDRCxjQUFjLEVBQUUsS0FBSztRQUlyQixVQUFVLEVBQUM7WUFDVCxFQUFFLEVBQUUsRUFBRTtZQUNOLFVBQVUsRUFBRSxFQUFFO1lBQ2QsT0FBTyxFQUFFLEVBQUU7WUFDWCxRQUFRLEVBQUUsRUFBRTtZQUNaLFVBQVUsRUFBRSxFQUFFO1lBQ2QsUUFBUSxFQUFFLEVBQUU7WUFDWixRQUFRLEVBQUUsRUFBRTtTQUNiO1FBQ0QsV0FBVyxFQUFDO1lBQ1YsZUFBZSxFQUFFLEVBQUU7WUFDbkIsWUFBWSxFQUFFLEVBQUU7WUFDaEIsYUFBYSxFQUFFLEVBQUU7WUFDakIsZUFBZSxFQUFFLEVBQUU7WUFDbkIsYUFBYSxFQUFFLEVBQUU7WUFDakIsYUFBYSxFQUFFLEVBQUU7U0FDbEI7UUFDRCxjQUFjLEVBQUUsS0FBSztLQUN0QjtJQUVELGlCQUFpQixFQUFDLFVBQUMsR0FBTztRQUN4QixJQUFJLEdBQUcsQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBRXpCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3pCO1FBQ0QsT0FBTztZQUNMLEtBQUssRUFBRSxjQUFjO1lBQ3JCLElBQUksRUFBRSxrQkFBa0I7WUFDeEIsUUFBUSxFQUFFLEVBQUU7U0FDYixDQUFBO0lBQ0gsQ0FBQztJQUVELGVBQWUsRUFBQztRQUNkLE9BQU87WUFDTCxLQUFLLEVBQUUsY0FBYztZQUNyQixLQUFLLEVBQUUsRUFBRTtZQUNULFFBQVEsRUFBRSxFQUFFO1NBQ2IsQ0FBQTtJQUNILENBQUM7SUFFRCxXQUFXLEVBQVg7UUFDRSxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsV0FBVyxFQUFYO1FBQUEsaUJBc0JDO1FBckJDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQzthQUNyRCxJQUFJLENBQUMsVUFBQyxHQUFPO1lBQ1osSUFBSSxJQUFJLEdBQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFROztnQkFDbEMsSUFBRyxJQUFJLENBQUMsT0FBTyxJQUFJLFlBQVksRUFBQztvQkFDOUIsS0FBSSxDQUFDLE9BQU87d0JBQ1YsR0FBQyw2QkFBNkIsSUFBRyxFQUFFO3dCQUNuQyxHQUFDLHVCQUF1QixJQUFHLElBQUksQ0FBQyxFQUFFO3dCQUNsQyxpQkFBYyxHQUFFLElBQUk7NEJBQ3BCLENBQUE7aUJBQ0g7Z0JBQ0QsT0FBTztvQkFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU87b0JBQ2xCLEtBQUssRUFBRSxJQUFJLENBQUMsRUFBRTtpQkFDZixDQUFBO1lBQ0gsQ0FBQyxDQUFDLENBQUE7WUFDRixLQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLFFBQVEsRUFBRSxJQUFJO2FBQ2YsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxFQUFDLFVBQUMsR0FBTztZQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBR0QsUUFBUSxFQUFSO1FBQ0UsSUFBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFDO1lBQ2pDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjthQUFJO1NBRUo7SUFDSCxDQUFDO0lBRUQsZUFBZSxFQUFmLFVBQWdCLEdBQU87O1FBQ3JCLElBQUcsR0FBRyxDQUFDLE1BQU0sRUFBQztZQUNaLElBQUksQ0FBQyxPQUFPO2dCQUNWLEdBQUMsMkJBQTJCLElBQUcsRUFBRTtnQkFDakMsR0FBQyxxQkFBcUIsSUFBRyxHQUFHLENBQUMsTUFBTTtnQkFDbkMsaUJBQWMsR0FBRSxJQUFJO29CQUNwQixDQUFBO1NBQ0g7SUFDSCxDQUFDO0lBQ0QsY0FBYyxFQUFkLFVBQWUsR0FBTzs7UUFDcEIsSUFBSSxHQUFHLEdBQU8sYUFBYSxDQUFDO1FBQzVCLElBQUksR0FBRyxHQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QyxJQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFDO1lBQ2xCLElBQUcsR0FBRyxFQUFDO2dCQUNMLElBQUksQ0FBQyxPQUFPO29CQUNWLEdBQUMsMkJBQTJCLElBQUcsRUFBRTtvQkFDakMsR0FBQyxxQkFBcUIsSUFBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUs7b0JBQ3pDLGlCQUFjLEdBQUUsSUFBSTt3QkFDcEIsQ0FBQTtnQkFDRixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDckI7aUJBQUk7Z0JBQ0gsSUFBSSxDQUFDLE9BQU87b0JBQ1YsR0FBQywyQkFBMkIsSUFBRyxlQUFlO29CQUM5QyxHQUFDLHFCQUFxQixJQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSztvQkFDekMsaUJBQWMsR0FBRSxLQUFLO3dCQUNyQixDQUFBO2FBQ0g7U0FDRjthQUFJO1lBQ0gsSUFBSSxDQUFDLE9BQU87Z0JBQ1YsR0FBQywyQkFBMkIsSUFBRyxFQUFFO2dCQUNqQyxHQUFDLHFCQUFxQixJQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSztnQkFDekMsaUJBQWMsR0FBRSxLQUFLO29CQUNyQixDQUFBO1NBQ0g7SUFDSCxDQUFDO0lBRUQsWUFBWSxFQUFaO1FBQUEsaUJBa0JDO1FBakJDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUM7YUFDcEYsSUFBSSxDQUFDLFVBQUMsR0FBTzs7WUFDVixJQUFJLE9BQU8sR0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDN0MsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzNCLEtBQUksQ0FBQyxPQUFPO2dCQUNWLEdBQUMsZUFBZSxJQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDN0IsR0FBQyxvQkFBb0IsSUFBRyxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVE7Z0JBQ3hDLFNBQU0sR0FBRSxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztvQkFDeEIsQ0FBQTtRQUNOLENBQUMsRUFBQyxVQUFDLEdBQU87O1lBQ1IsS0FBSSxDQUFDLE9BQU87Z0JBQ1YsR0FBQyxlQUFlLElBQUcsRUFBRTtnQkFDckIsR0FBQyxvQkFBb0IsSUFBRyxFQUFFO2dCQUMxQixTQUFNLEdBQUUsRUFBRTtvQkFDVixDQUFBO1lBQ0YsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsZUFBZSxFQUFmLFVBQWdCLEdBQU87O1FBQ3JCLElBQUksR0FBRyxHQUFPLG1FQUFtRSxDQUFDO1FBQ2xGLElBQUksR0FBRyxHQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZDLElBQUcsR0FBRyxDQUFDLE1BQU0sRUFBQztZQUNaLElBQUcsR0FBRyxFQUFDO2dCQUNMLElBQUksQ0FBQyxPQUFPO29CQUNWLEdBQUMsMkJBQTJCLElBQUcsRUFBRTtvQkFDakMsR0FBQyxxQkFBcUIsSUFBRyxHQUFHLENBQUMsTUFBTTtvQkFDbkMsaUJBQWMsR0FBRSxJQUFJO3dCQUNwQixDQUFBO2FBQ0g7aUJBQUk7Z0JBQ0gsSUFBSSxDQUFDLE9BQU87b0JBQ1YsR0FBQywyQkFBMkIsSUFBRyxFQUFFO29CQUNqQyxHQUFDLHFCQUFxQixJQUFHLEdBQUcsQ0FBQyxNQUFNO29CQUNuQyxpQkFBYyxHQUFFLEtBQUs7d0JBQ3JCLENBQUE7YUFDSDtTQUNGO2FBQUk7WUFDSCxJQUFJLENBQUMsT0FBTztnQkFDVixHQUFDLDJCQUEyQixJQUFHLEVBQUU7Z0JBQ2pDLEdBQUMscUJBQXFCLElBQUcsR0FBRyxDQUFDLE1BQU07Z0JBQ25DLGlCQUFjLEdBQUUsS0FBSztvQkFDckIsQ0FBQTtTQUNIO0lBQ0gsQ0FBQztJQUVELGNBQWMsRUFBZCxVQUFlLEdBQU87O1FBQ3BCLElBQUksR0FBRyxHQUFPLG1FQUFtRSxDQUFDO1FBQ2xGLElBQUksR0FBRyxHQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QyxJQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFDO1lBQ2xCLElBQUcsR0FBRyxFQUFDO2dCQUNMLElBQUksQ0FBQyxPQUFPO29CQUNWLEdBQUMsMkJBQTJCLElBQUcsRUFBRTtvQkFDakMsR0FBQyxxQkFBcUIsSUFBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUs7b0JBQ3pDLGlCQUFjLEdBQUUsSUFBSTt3QkFDcEIsQ0FBQTthQUNIO2lCQUFJO2dCQUNILElBQUksQ0FBQyxPQUFPO29CQUNWLEdBQUMsMkJBQTJCLElBQUcsb0JBQW9CO29CQUNuRCxHQUFDLHFCQUFxQixJQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSztvQkFDekMsaUJBQWMsR0FBRSxLQUFLO3dCQUNyQixDQUFBO2FBQ0g7U0FDRjthQUFJO1lBQ0gsSUFBSSxDQUFDLE9BQU87Z0JBQ1YsR0FBQywyQkFBMkIsSUFBRyxFQUFFO2dCQUNqQyxHQUFDLHFCQUFxQixJQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSztnQkFDekMsaUJBQWMsR0FBRSxLQUFLO29CQUNyQixDQUFBO1NBQ0g7SUFDSCxDQUFDO0lBSUQscUJBQXFCLEVBQXJCLFVBQXNCLEdBQU87O1FBQzNCLElBQUcsR0FBRyxDQUFDLE1BQU0sRUFBQztZQUNaLElBQUcsR0FBRyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUM7Z0JBQzdDLElBQUksQ0FBQyxPQUFPO29CQUNWLEdBQUMsMkJBQTJCLElBQUcsRUFBRTtvQkFDakMsR0FBQyxxQkFBcUIsSUFBRyxHQUFHLENBQUMsTUFBTTtvQkFDbkMsaUJBQWMsR0FBRSxLQUFLO3dCQUNyQixDQUFBO2FBQ0g7aUJBQUk7Z0JBQ0gsSUFBSSxDQUFDLE9BQU87b0JBQ1YsR0FBQywyQkFBMkIsSUFBRyxFQUFFO29CQUNqQyxHQUFDLHFCQUFxQixJQUFHLEdBQUcsQ0FBQyxNQUFNO29CQUNuQyxpQkFBYyxHQUFFLElBQUk7d0JBQ3BCLENBQUE7YUFDSDtTQUNGO2FBQUk7WUFDSCxJQUFJLENBQUMsT0FBTztnQkFDVixHQUFDLDJCQUEyQixJQUFHLEVBQUU7Z0JBQ2pDLEdBQUMscUJBQXFCLElBQUcsR0FBRyxDQUFDLE1BQU07Z0JBQ25DLGlCQUFjLEdBQUUsS0FBSztvQkFDckIsQ0FBQTtTQUNIO0lBQ0gsQ0FBQztJQUNELG9CQUFvQixFQUFwQixVQUFxQixHQUFPOztRQUMxQixJQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFDO1lBQ2xCLElBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFDO2dCQUNuRCxJQUFJLENBQUMsT0FBTztvQkFDVixHQUFDLDJCQUEyQixJQUFHLFlBQVk7b0JBQzNDLEdBQUMscUJBQXFCLElBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLO29CQUN6QyxpQkFBYyxHQUFFLEtBQUs7d0JBQ3JCLENBQUE7YUFDSDtpQkFBSTtnQkFDSCxJQUFJLENBQUMsT0FBTztvQkFDVixHQUFDLDJCQUEyQixJQUFHLEVBQUU7b0JBQ2pDLEdBQUMscUJBQXFCLElBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLO29CQUN6QyxpQkFBYyxHQUFFLElBQUk7d0JBQ3BCLENBQUE7YUFDSDtTQUNGO2FBQUk7WUFDSCxJQUFJLENBQUMsT0FBTztnQkFDVixHQUFDLDJCQUEyQixJQUFHLEVBQUU7Z0JBQ2pDLEdBQUMscUJBQXFCLElBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLO2dCQUN6QyxpQkFBYyxHQUFFLEtBQUs7b0JBQ3JCLENBQUE7U0FDSDtJQUNILENBQUM7SUFFRCxTQUFTLEVBQVQsVUFBVSxHQUFPOztRQUNmLElBQUksR0FBRyxHQUFPLGtGQUFrRixDQUFDO1FBQ2pHLElBQUksR0FBRyxHQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QyxJQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFDO1lBQ2xCLElBQUcsR0FBRyxFQUFDO2dCQUNMLElBQUksQ0FBQyxPQUFPO29CQUNWLEdBQUMsMEJBQTBCLElBQUcsRUFBRTtvQkFDaEMsR0FBQyxvQkFBb0IsSUFBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUs7b0JBQ3hDLGlCQUFjLEdBQUUsSUFBSTt3QkFDcEIsQ0FBQTthQUNIO2lCQUFJO2dCQUNILElBQUksQ0FBQyxPQUFPO29CQUNWLEdBQUMsMEJBQTBCLElBQUcsWUFBWTtvQkFDMUMsR0FBQyxvQkFBb0IsSUFBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUs7b0JBQ3hDLGlCQUFjLEdBQUUsS0FBSzt3QkFDckIsQ0FBQTthQUNIO1NBQ0Y7YUFBSTtZQUNILElBQUksQ0FBQyxPQUFPO2dCQUNWLEdBQUMsMEJBQTBCLElBQUcsRUFBRTtnQkFDaEMsR0FBQyxvQkFBb0IsSUFBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUs7Z0JBQ3hDLGlCQUFjLEdBQUUsS0FBSztvQkFDckIsQ0FBQTtTQUNIO0lBQ0gsQ0FBQztJQUNELFlBQVksRUFBWixVQUFhLEdBQU87O1FBQ2xCLElBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUM7WUFDbEIsSUFBSSxDQUFDLE9BQU87Z0JBQ1YsR0FBQyw2QkFBNkIsSUFBRyxFQUFFO2dCQUNuQyxHQUFDLHVCQUF1QixJQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSztnQkFDM0MsaUJBQWMsR0FBRSxJQUFJO29CQUNwQixDQUFBO1NBQ0g7SUFDSCxDQUFDO0lBR0QsVUFBVSxFQUFWOztRQUVFLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxJQUFJLEVBQUUsRUFBQztZQUNyQyxJQUFJLENBQUMsT0FBTztnQkFDVixHQUFDLDJCQUEyQixJQUFFLGFBQWE7Z0JBQzNDLGlCQUFjLEdBQUUsS0FBSztvQkFDckIsQ0FBQTtTQUNIO1FBRUQsSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLElBQUksRUFBRSxFQUFDO1lBQ3JDLElBQUksQ0FBQyxPQUFPO2dCQUNWLEdBQUMsMkJBQTJCLElBQUUsT0FBTztnQkFDckMsaUJBQWMsR0FBRSxLQUFLO29CQUNyQixDQUFBO1NBQ0g7UUFFRCxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsSUFBSSxFQUFFLEVBQUM7WUFDckMsSUFBSSxDQUFDLE9BQU87Z0JBQ1YsR0FBQywyQkFBMkIsSUFBRSxTQUFTO2dCQUN2QyxpQkFBYyxHQUFFLEtBQUs7b0JBQ3JCLENBQUE7U0FDSDtRQUdELElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxJQUFJLEVBQUUsRUFBQztZQUNwQyxJQUFJLENBQUMsT0FBTztnQkFDVixHQUFDLDBCQUEwQixJQUFFLGVBQWU7Z0JBQzVDLGlCQUFjLEdBQUUsS0FBSztvQkFDckIsQ0FBQTtTQUNIO1FBRUQsSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLElBQUksRUFBRSxFQUFDO1lBQ3ZDLElBQUksQ0FBQyxPQUFPO2dCQUNWLEdBQUMsNkJBQTZCLElBQUUsUUFBUTtnQkFDeEMsaUJBQWMsR0FBRSxLQUFLO29CQUNyQixDQUFBO1NBQ0g7UUFHRCxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxJQUFJLEtBQUssRUFBQztZQUNuQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDdEI7YUFBSTtZQUNILElBQUksR0FBRyxHQUFVLEdBQUcsQ0FBQyxVQUFVLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsR0FBRyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsY0FBYyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO1lBQ2xRLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ3BDLEtBQUssQ0FBQztvQkFDSixJQUFJLEVBQUUsU0FBUztvQkFDZixPQUFPLEVBQUUsT0FBTztvQkFDaEIsT0FBTyxFQUFFO3dCQUNQLEVBQUUsQ0FBQyxVQUFVLENBQUM7NEJBQ1osR0FBRyxFQUFFLHdCQUF3Qjt5QkFDOUIsQ0FBQyxDQUFBO29CQUNKLENBQUM7aUJBQ0YsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxFQUFDLFVBQUMsR0FBTztnQkFDUixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDYixDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVELGNBQWMsRUFBZDtRQUFBLGlCQTRCQztRQTNCQyxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sSUFBSSxFQUFFLEVBQUM7WUFDcEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQztpQkFDckYsSUFBSSxDQUFDO2dCQUNKLEtBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ1gsZ0JBQWdCLEVBQUUsSUFBSTtvQkFDdEIsVUFBVSxFQUFFLElBQUk7aUJBQ2pCLENBQUMsQ0FBQTtnQkFDRixJQUFJLE9BQU8sR0FBTyxXQUFXLENBQUM7b0JBQzVCLElBQUksR0FBRyxHQUFPLFFBQVEsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN2RCxJQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUM7d0JBQ1QsS0FBSSxDQUFDLE9BQU8sQ0FBQzs0QkFDWCxnQkFBZ0IsRUFBRSxHQUFHO3lCQUN0QixDQUFDLENBQUE7cUJBQ0g7eUJBQUk7d0JBQ0gsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUN2QixLQUFJLENBQUMsT0FBTyxDQUFDOzRCQUNYLGdCQUFnQixFQUFFLE9BQU87NEJBQ3pCLFVBQVUsRUFBRSxLQUFLO3lCQUNsQixDQUFDLENBQUE7cUJBQ0g7Z0JBQ0gsQ0FBQyxFQUFDLElBQUksQ0FBQyxDQUFBO1lBQ1QsQ0FBQyxFQUFDLFVBQUMsR0FBTztnQkFDUixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDYixDQUFDLENBQUMsQ0FBQztTQUNKO2FBQUk7WUFDSCxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDcEI7SUFDSCxDQUFDO0lBSUQsWUFBWSxFQUFaO1FBQUEsaUJBa0JDO1FBakJDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUM7YUFDbkYsSUFBSSxDQUFDLFVBQUMsR0FBTzs7WUFDVixJQUFJLE9BQU8sR0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDN0MsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzNCLEtBQUksQ0FBQyxPQUFPO2dCQUNWLEdBQUMsZUFBZSxJQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDN0IsR0FBQyxxQkFBcUIsSUFBRyxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVE7Z0JBQ3pDLFNBQU0sR0FBRSxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztvQkFDeEIsQ0FBQTtRQUNOLENBQUMsRUFBQyxVQUFDLEdBQU87O1lBQ1IsS0FBSSxDQUFDLE9BQU87Z0JBQ1YsR0FBQyxlQUFlLElBQUcsRUFBRTtnQkFDckIsR0FBQyxxQkFBcUIsSUFBRyxFQUFFO2dCQUMzQixTQUFNLEdBQUUsRUFBRTtvQkFDVixDQUFBO1lBQ0YsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsWUFBWSxFQUFaLFVBQWEsS0FBUzs7UUFDcEIsSUFBSSxDQUFDLE9BQU87WUFDVixHQUFDLDZCQUE2QixJQUFHLEVBQUU7WUFDbkMsR0FBQyx1QkFBdUIsSUFBRyxLQUFLLENBQUMsTUFBTTtZQUN2QyxpQkFBYyxHQUFFLElBQUk7Z0JBQ3BCLENBQUE7SUFDSixDQUFDO0lBRUQsUUFBUSxFQUFSO1FBQ0UsSUFBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFDO1lBQ2hDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjthQUFJO1NBRUo7SUFDSCxDQUFDO0lBRUQsZUFBZSxFQUFmLFVBQWdCLEdBQU87O1FBQ3JCLElBQUcsR0FBRyxDQUFDLE1BQU0sRUFBQztZQUNaLElBQUksQ0FBQyxPQUFPO2dCQUNWLEdBQUMsMEJBQTBCLElBQUcsRUFBRTtnQkFDaEMsR0FBQyxvQkFBb0IsSUFBRyxHQUFHLENBQUMsTUFBTTtnQkFDbEMsaUJBQWMsR0FBRSxJQUFJO29CQUNwQixDQUFBO1NBQ0g7SUFDSCxDQUFDO0lBR0QsU0FBUyxFQUFULFVBQVUsR0FBTzs7UUFDZixJQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFDO1lBQ2xCLElBQUksQ0FBQyxPQUFPO2dCQUNWLEdBQUMsMEJBQTBCLElBQUcsRUFBRTtnQkFDaEMsR0FBQyxvQkFBb0IsSUFBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUs7Z0JBQ3hDLGlCQUFjLEdBQUUsSUFBSTtvQkFDcEIsQ0FBQTtZQUNGLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjtJQUNILENBQUM7SUFFRCxlQUFlLEVBQWYsVUFBZ0IsR0FBTzs7UUFDckIsSUFBSSxHQUFHLEdBQU8sbUVBQW1FLENBQUM7UUFDbEYsSUFBSSxHQUFHLEdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkMsSUFBRyxHQUFHLENBQUMsTUFBTSxFQUFDO1lBQ1osSUFBRyxHQUFHLEVBQUM7Z0JBQ0wsSUFBSSxDQUFDLE9BQU87b0JBQ1YsR0FBQywyQkFBMkIsSUFBRyxFQUFFO29CQUNqQyxHQUFDLHFCQUFxQixJQUFHLEdBQUcsQ0FBQyxNQUFNO29CQUNuQyxpQkFBYyxHQUFFLElBQUk7d0JBQ3BCLENBQUE7YUFDSDtpQkFBSTtnQkFDSCxJQUFJLENBQUMsT0FBTztvQkFDVixHQUFDLDJCQUEyQixJQUFHLEVBQUU7b0JBQ2pDLEdBQUMscUJBQXFCLElBQUcsR0FBRyxDQUFDLE1BQU07b0JBQ25DLGlCQUFjLEdBQUUsS0FBSzt3QkFDckIsQ0FBQTthQUNIO1NBQ0Y7YUFBSTtZQUNILElBQUksQ0FBQyxPQUFPO2dCQUNWLEdBQUMsMkJBQTJCLElBQUcsRUFBRTtnQkFDakMsR0FBQyxxQkFBcUIsSUFBRyxHQUFHLENBQUMsTUFBTTtnQkFDbkMsaUJBQWMsR0FBRSxLQUFLO29CQUNyQixDQUFBO1NBQ0g7SUFDSCxDQUFDO0lBQ0QsY0FBYyxFQUFkLFVBQWUsR0FBTzs7UUFDcEIsSUFBSSxHQUFHLEdBQU8sbUVBQW1FLENBQUM7UUFDbEYsSUFBSSxHQUFHLEdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdDLElBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUM7WUFDbEIsSUFBRyxHQUFHLEVBQUM7Z0JBQ0wsSUFBSSxDQUFDLE9BQU87b0JBQ1YsR0FBQywyQkFBMkIsSUFBRyxFQUFFO29CQUNqQyxHQUFDLHFCQUFxQixJQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSztvQkFDekMsaUJBQWMsR0FBRSxJQUFJO3dCQUNwQixDQUFBO2FBQ0g7aUJBQUk7Z0JBQ0gsSUFBSSxDQUFDLE9BQU87b0JBQ1YsR0FBQywyQkFBMkIsSUFBRyxvQkFBb0I7b0JBQ25ELEdBQUMscUJBQXFCLElBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLO29CQUN6QyxpQkFBYyxHQUFFLEtBQUs7d0JBQ3JCLENBQUE7YUFDSDtTQUNGO2FBQUk7WUFDSCxJQUFJLENBQUMsT0FBTztnQkFDVixHQUFDLDJCQUEyQixJQUFHLEVBQUU7Z0JBQ2pDLEdBQUMscUJBQXFCLElBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLO2dCQUN6QyxpQkFBYyxHQUFFLEtBQUs7b0JBQ3JCLENBQUE7U0FDSDtJQUNILENBQUM7SUFFRCxxQkFBcUIsRUFBckIsVUFBc0IsR0FBTzs7UUFDM0IsSUFBRyxHQUFHLENBQUMsTUFBTSxFQUFDO1lBQ1osSUFBRyxHQUFHLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBQztnQkFDN0MsSUFBSSxDQUFDLE9BQU87b0JBQ1YsR0FBQywyQkFBMkIsSUFBRyxFQUFFO29CQUNqQyxHQUFDLHFCQUFxQixJQUFHLEdBQUcsQ0FBQyxNQUFNO29CQUNuQyxpQkFBYyxHQUFFLEtBQUs7d0JBQ3JCLENBQUE7YUFDSDtpQkFBSTtnQkFDSCxJQUFJLENBQUMsT0FBTztvQkFDVixHQUFDLDJCQUEyQixJQUFHLEVBQUU7b0JBQ2pDLEdBQUMscUJBQXFCLElBQUcsR0FBRyxDQUFDLE1BQU07b0JBQ25DLGlCQUFjLEdBQUUsSUFBSTt3QkFDcEIsQ0FBQTthQUNIO1NBQ0Y7YUFBSTtZQUNILElBQUksQ0FBQyxPQUFPO2dCQUNWLEdBQUMsMkJBQTJCLElBQUcsRUFBRTtnQkFDakMsR0FBQyxxQkFBcUIsSUFBRyxHQUFHLENBQUMsTUFBTTtnQkFDbkMsaUJBQWMsR0FBRSxLQUFLO29CQUNyQixDQUFBO1NBQ0g7SUFDSCxDQUFDO0lBQ0Qsb0JBQW9CLEVBQXBCLFVBQXFCLEdBQU87O1FBQzFCLElBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUM7WUFDbEIsSUFBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUM7Z0JBQ25ELElBQUksQ0FBQyxPQUFPO29CQUNWLEdBQUMsMkJBQTJCLElBQUcsWUFBWTtvQkFDM0MsR0FBQyxxQkFBcUIsSUFBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUs7b0JBQ3pDLGlCQUFjLEdBQUUsS0FBSzt3QkFDckIsQ0FBQTthQUNIO2lCQUFJO2dCQUNILElBQUksQ0FBQyxPQUFPO29CQUNWLEdBQUMsMkJBQTJCLElBQUcsRUFBRTtvQkFDakMsR0FBQyxxQkFBcUIsSUFBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUs7b0JBQ3pDLGlCQUFjLEdBQUUsSUFBSTt3QkFDcEIsQ0FBQTthQUNIO1NBQ0Y7YUFBSTtZQUNILElBQUksQ0FBQyxPQUFPO2dCQUNWLEdBQUMsMkJBQTJCLElBQUcsRUFBRTtnQkFDakMsR0FBQyxxQkFBcUIsSUFBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUs7Z0JBQ3pDLGlCQUFjLEdBQUUsS0FBSztvQkFDckIsQ0FBQTtTQUNIO0lBQ0gsQ0FBQztJQUVELFVBQVUsRUFBVixVQUFXLEdBQU87O1FBQ2hCLElBQUksR0FBRyxHQUFPLGtGQUFrRixDQUFDO1FBQ2pHLElBQUksR0FBRyxHQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QyxJQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFDO1lBQ2xCLElBQUcsR0FBRyxFQUFDO2dCQUNMLElBQUksQ0FBQyxPQUFPO29CQUNWLEdBQUMsMkJBQTJCLElBQUcsRUFBRTtvQkFDakMsR0FBQyxxQkFBcUIsSUFBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUs7b0JBQ3pDLGlCQUFjLEdBQUUsSUFBSTt3QkFDcEIsQ0FBQTthQUNIO2lCQUFJO2dCQUNILElBQUksQ0FBQyxPQUFPO29CQUNWLEdBQUMsMkJBQTJCLElBQUcsWUFBWTtvQkFDM0MsR0FBQyxxQkFBcUIsSUFBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUs7b0JBQ3pDLGlCQUFjLEdBQUUsS0FBSzt3QkFDckIsQ0FBQTthQUNIO1NBQ0Y7YUFBSTtZQUNILElBQUksQ0FBQyxPQUFPO2dCQUNWLEdBQUMsMkJBQTJCLElBQUcsRUFBRTtnQkFDakMsR0FBQyxxQkFBcUIsSUFBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUs7Z0JBQ3pDLGlCQUFjLEdBQUUsS0FBSztvQkFDckIsQ0FBQTtTQUNIO0lBQ0gsQ0FBQztJQUNELFlBQVksRUFBWixVQUFhLEdBQU87O1FBQ2xCLElBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUM7WUFDbEIsSUFBSSxDQUFDLE9BQU87Z0JBQ1YsR0FBQyw2QkFBNkIsSUFBRyxFQUFFO2dCQUNuQyxHQUFDLHVCQUF1QixJQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSztnQkFDM0MsaUJBQWMsR0FBRSxJQUFJO29CQUNwQixDQUFBO1NBQ0g7SUFDSCxDQUFDO0lBQ0QsY0FBYyxFQUFkO1FBQUEsaUJBNEJDO1FBM0JDLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxJQUFJLEVBQUUsRUFBQztZQUNyQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDO2lCQUN0RixJQUFJLENBQUM7Z0JBQ0osS0FBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxnQkFBZ0IsRUFBRSxJQUFJO29CQUN0QixVQUFVLEVBQUUsSUFBSTtpQkFDakIsQ0FBQyxDQUFBO2dCQUNGLElBQUksT0FBTyxHQUFPLFdBQVcsQ0FBQztvQkFDNUIsSUFBSSxHQUFHLEdBQU8sUUFBUSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3ZELElBQUcsR0FBRyxHQUFHLENBQUMsRUFBQzt3QkFDVCxLQUFJLENBQUMsT0FBTyxDQUFDOzRCQUNYLGdCQUFnQixFQUFFLEdBQUc7eUJBQ3RCLENBQUMsQ0FBQTtxQkFDSDt5QkFBSTt3QkFDSCxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ3ZCLEtBQUksQ0FBQyxPQUFPLENBQUM7NEJBQ1gsZ0JBQWdCLEVBQUUsT0FBTzs0QkFDekIsVUFBVSxFQUFFLEtBQUs7eUJBQ2xCLENBQUMsQ0FBQTtxQkFDSDtnQkFDSCxDQUFDLEVBQUMsSUFBSSxDQUFDLENBQUE7WUFDVCxDQUFDLEVBQUMsVUFBQyxHQUFPO2dCQUNSLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNiLENBQUMsQ0FBQyxDQUFDO1NBQ0o7YUFBSTtZQUNILEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNwQjtJQUNILENBQUM7SUFHRCxVQUFVLEVBQVY7O1FBRUUsSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLElBQUksRUFBRSxFQUFDO1lBQ3ZDLElBQUksQ0FBQyxPQUFPO2dCQUNWLEdBQUMsNkJBQTZCLElBQUcsU0FBUztnQkFDMUMsaUJBQWMsR0FBRSxLQUFLO29CQUNyQixDQUFBO1NBQ0g7UUFFRCxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sSUFBSSxFQUFFLEVBQUM7WUFDcEMsSUFBSSxDQUFDLE9BQU87Z0JBQ1YsR0FBQywwQkFBMEIsSUFBRyxTQUFTO2dCQUN2QyxpQkFBYyxHQUFFLEtBQUs7b0JBQ3JCLENBQUE7U0FDSDtRQUVELElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxJQUFJLEVBQUUsRUFBQztZQUNyQyxJQUFJLENBQUMsT0FBTztnQkFDVixHQUFDLDJCQUEyQixJQUFFLE9BQU87Z0JBQ3JDLGlCQUFjLEdBQUUsS0FBSztvQkFDckIsQ0FBQTtTQUNIO1FBRUQsSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLElBQUksRUFBRSxFQUFDO1lBQ3JDLElBQUksQ0FBQyxPQUFPO2dCQUNWLEdBQUMsMkJBQTJCLElBQUUsU0FBUztnQkFDdkMsaUJBQWMsR0FBRSxLQUFLO29CQUNyQixDQUFBO1NBQ0g7UUFHRCxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsSUFBSSxFQUFFLEVBQUM7WUFDckMsSUFBSSxDQUFDLE9BQU87Z0JBQ1YsR0FBQywyQkFBMkIsSUFBRSxTQUFTO2dCQUN2QyxpQkFBYyxHQUFFLEtBQUs7b0JBQ3JCLENBQUE7U0FDSDtRQUVELElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxJQUFJLEVBQUUsRUFBQztZQUN2QyxJQUFJLENBQUMsT0FBTztnQkFDVixHQUFDLDZCQUE2QixJQUFFLFFBQVE7Z0JBQ3hDLGlCQUFjLEdBQUUsS0FBSztvQkFDckIsQ0FBQTtTQUNIO1FBRUQsSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxLQUFLLEVBQUM7WUFDbkMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ3RCO2FBQUk7WUFDSCxJQUFJLEdBQUcsR0FBVSxHQUFHLENBQUMsVUFBVSxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEdBQUcsY0FBYyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxHQUFHLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsY0FBYyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO1lBQ3BULEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ3BDLEtBQUssQ0FBQztvQkFDSixJQUFJLEVBQUUsU0FBUztvQkFDZixPQUFPLEVBQUUsT0FBTztvQkFDaEIsT0FBTyxFQUFFO3dCQUNQLEVBQUUsQ0FBQyxVQUFVLENBQUM7NEJBQ1osR0FBRyxFQUFFLHdCQUF3Qjt5QkFDOUIsQ0FBQyxDQUFBO29CQUNKLENBQUM7aUJBQ0YsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxFQUFDLFVBQUMsR0FBTztnQkFDUixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDYixDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUlELE1BQU07UUFFSixFQUFFLENBQUMscUJBQXFCLENBQUM7WUFDdkIsS0FBSyxFQUFFLE1BQU07U0FDZCxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELE9BQU8sZ0JBQUcsQ0FBQztJQUdYLE1BQU07SUFFTixDQUFDO0lBR0QsTUFBTSxnQkFBRyxDQUFDO0lBR1YsUUFBUTs7UUFDTixJQUFJLENBQUMsT0FBTztZQUNWLEdBQUMscUJBQXFCLElBQUUsRUFBRTtZQUMxQixHQUFDLHFCQUFxQixJQUFFLEVBQUU7WUFDMUIsR0FBQyxxQkFBcUIsSUFBRSxFQUFFO1lBQzFCLEdBQUMsb0JBQW9CLElBQUUsRUFBRTtZQUN6QixHQUFDLHVCQUF1QixJQUFFLEVBQUU7WUFDNUIsU0FBTSxHQUFFLEVBQUU7WUFFVixHQUFDLHVCQUF1QixJQUFFLEVBQUU7WUFDNUIsR0FBQyxvQkFBb0IsSUFBRSxFQUFFO1lBQ3pCLEdBQUMscUJBQXFCLElBQUUsRUFBRTtZQUMxQixHQUFDLHVCQUF1QixJQUFFLEVBQUU7WUFDNUIsR0FBQyxxQkFBcUIsSUFBRSxFQUFFO1lBQzFCLEdBQUMscUJBQXFCLElBQUUsRUFBRTtZQUMxQixTQUFNLEdBQUUsRUFBRTtnQkFDVixDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIHJlZ2lzdGVyZWQudHNcclxubGV0IFRvYXN0ID0gcmVxdWlyZSgnLi4vLi4vbWluaXByb2dyYW1fbnBtL0B2YW50L3dlYXBwL3RvYXN0L3RvYXN0LmpzJykuZGVmYXVsdDtcclxuY29uc3QgYXBpID0gZ2V0QXBwKCkuZ2xvYmFsRGF0YTsgIC8vIOiOt+WPluW6lOeUqOWunuS+i1xyXG5sZXQgaHR0cHMgID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvbXlSZXF1ZXN0LmpzJyk7ICAgICAvL+iOt+WPlmFqYXjmlrnms5VcclxuXHJcblBhZ2Uoe1xyXG4gIC8v6aG16Z2i5pWw5o2uXHJcbiAgZGF0YToge1xyXG4gICAgdGFiQWN0aXZlOiAnamcnLCAgICAgICAgICAgICAgICAvL+azqOWGjHRhYlxyXG5cclxuICAgIGNhcmRMaXN0OiBbXSwgICAgICAgICAgICAgICAgICAgLy/or4Hku7bnsbvlnotcclxuICBcclxuICAgIGpnTGluazogJycsICAgICAgICAgICAgICAgICAgICAgIC8v5py65p6E6IGU57O755S16K+dKuaYvuekulxyXG4gICAgamdWZXJpZnlDb2RlVGltZTogJ+iOt+WPlumqjOivgeeggScsICAvL+iOt+WPlumqjOivgeeggVxyXG4gICAgamdEaXNhYmxlZDogZmFsc2UsICAgICAgICAgICAgICAvL+mqjOivgeeggeaMiemSrueKtuaAgVxyXG4gICAgamdQcm90b2NvbENoZWNrZWQ6IGZhbHNlLCAgICAgICAvL+WNj+iurlxyXG5cclxuICAgIGdyTGluazogJycsICAgICAgICAgICAgICAgICAgICAgLy/kuKrkurrogZTns7vnlLXor50q5pi+56S6XHJcbiAgICBnclZlcmlmeUNvZGVUaW1lOiAn6I635Y+W6aqM6K+B56CBJywgIC8v6I635Y+W6aqM6K+B56CBXHJcbiAgICBnckRpc2FibGVkOiBmYWxzZSwgICAgICAgICAgICAgIC8v6aqM6K+B56CB5oyJ6ZKu54q25oCBXHJcbiAgICBnclByb3RvY29sQ2hlY2tlZDogZmFsc2UsICAgICAgIC8v5Y2P6K6uXHJcblxyXG4gICAgLy/mnLrmnoTms6jlhoxcclxuICAgIGpnUmVwZWF0UGFzc3dvcmQ6ICcnLCAgICAgICAgICAgLy/mnLrmnoTnoa7orqTlr4bnoIFcclxuICAgIGpnUGFzc3dvcmRFcnJvcjogJycsICAgICAgICAgICAgLy/mnLrmnoTnoa7orqTlr4bnoIFcclxuICAgIGpnRm9ybURhdGU6eyAgLy/mnLrmnoTooajljZVcclxuICAgICAgaWQ6ICcnLCAgICAgICAgICAgICAgICAgICAgICAgLy/nlKjmiLdpZCBcclxuICAgICAgc2h4eUNvZGU6ICcnLCAgICAgICAgICAgICAgICAgLy/nu5/kuIDnpL7kvJrkv6HnlKjku6PnoIFcclxuICAgICAgcGFzc3dvcmQ6ICcnLCAgICAgICAgICAgICAgICAgLy/lr4bnoIFcclxuICAgICAgdHJ1ZXdvcmQ6ICcnLCAgICAgICAgICAgICAgICAgLy/noa7orqTlr4bnoIFcclxuICAgICAgbGlua1RlbDogJycsICAgICAgICAgICAgICAgICAgLy/ogZTns7vkurrnlLXor51cclxuICAgICAgdmVyaWZ5Q29kZTogJycsICAgICAgICAgICAgICAgLy/pqozor4HnoIFcclxuICAgIH0sXHJcbiAgICBqZ0Zvcm1ScnJvcjp7ICAvL+acuuaehOmqjOivgVxyXG4gICAgICBzaHh5Q29kZUVycm9yOiAnJywgICAgICAgICAgICAvL+e7n+S4gOekvuS8muS/oeeUqOS7o+eggVxyXG4gICAgICBwYXNzd29yZEVycm9yOiAnJywgICAgICAgICAgICAvL+WvhueggVxyXG4gICAgICB0cnVld29yZEVycm9yOiAnJywgICAgICAgICAgICAvL+ehruiupOWvhueggVxyXG4gICAgICBsaW5rVGVsRXJyb3I6ICcnLCAgICAgICAgICAgICAvL+iBlOezu+S6uueUteivnVxyXG4gICAgICB2ZXJpZnlDb2RlRXJyb3I6ICcnLCAgICAgICAgICAvL+mqjOivgeeggVxyXG4gICAgfSxcclxuICAgIGpnVmVyaWZpY2F0aW9uOiBmYWxzZSwgICAgLy/pqozor4HliKTmlq1cclxuXHJcblxyXG4gICAgLy/kuKrkurrpqozor4FcclxuICAgIGdyRm9ybURhdGU6eyAgLy/mnLrmnoTooajljZVcclxuICAgICAgaWQ6ICcnLCAgICAgICAgICAgICAgICAgICAgICAgIC8v55So5oi3aWRcclxuICAgICAgY2FyZFR5cGVJZDogJycsICAgICAgICAgICAgICAgIC8v6K+B5Lu257G75Z6LXHJcbiAgICAgIGNhcmROdW06ICcnLCAgICAgICAgICAgICAgICAgICAvL+ivgeS7tuWPt+eggVxyXG4gICAgICBwaG9uZU51bTogJycsICAgICAgICAgICAgICAgICAgLy/ogZTns7vnlLXor51cclxuICAgICAgdmVyaWZ5Q29kZTogJycsICAgICAgICAgICAgICAgIC8v6aqM6K+B56CBXHJcbiAgICAgIHBhc3N3b3JkOiAnJywgICAgICAgICAgICAgICAgICAvL+WvhueggVxyXG4gICAgICB0cnVld29yZDogJycsICAgICAgICAgICAgICAgICAgLy/noa7orqTlr4bnoIFcclxuICAgIH0sXHJcbiAgICBnckZvcm1ScnJvcjp7ICAvL+acuuaehOmqjOivgVxyXG4gICAgICBjYXJkVHlwZUlkUnJyb3I6ICcnLCAgICAgICAgICAgLy/or4Hku7bnsbvlnotcclxuICAgICAgY2FyZE51bVJycm9yOiAnJywgICAgICAgICAgICAgIC8v6K+B5Lu25Y+356CBXHJcbiAgICAgIHBob25lTnVtRXJyb3I6ICcnLCAgICAgICAgICAgICAvL+iBlOezu+eUteivnVxyXG4gICAgICB2ZXJpZnlDb2RlRXJyb3I6ICcnLCAgICAgICAgICAgLy/pqozor4HnoIFcclxuICAgICAgcGFzc3dvcmRFcnJvcjogJycsICAgICAgICAgICAgIC8v5a+G56CBXHJcbiAgICAgIHRydWV3b3JkRXJyb3I6ICcnLCAgICAgICAgICAgICAvL+ehruiupOWvhueggVxyXG4gICAgfSxcclxuICAgIGdyVmVyaWZpY2F0aW9uOiBmYWxzZSwgICAgLy/pqozor4HliKTmlq1cclxuICB9LFxyXG4gIFxyXG4gIG9uU2hhcmVBcHBNZXNzYWdlOihyZXM6YW55KTphbnk9PiB7ICAvL+WPkemAgee7meaci+WPi1xyXG4gICAgaWYgKHJlcy5mcm9tID09PSAnYnV0dG9uJykge1xyXG4gICAgICAvLyDmnaXoh6rpobXpnaLlhoXovazlj5HmjInpkq5cclxuICAgICAgY29uc29sZS5sb2cocmVzLnRhcmdldCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0aXRsZTogJ+mdkuWym+S6uuaJjeWIm+aWsOWIm+S4muW5s+WPsOWcsOWbvicsXHJcbiAgICAgIHBhdGg6ICcvcGFnZXMvaG9tZS9ob21lJyxcclxuICAgICAgaW1hZ2VVcmw6ICcnXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgb25TaGFyZVRpbWVsaW5lOigpOmFueT0+IHsgIC8v5YiG5LqrXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0aXRsZTogJ+mdkuWym+S6uuaJjeWIm+aWsOWIm+S4muW5s+WPsOWcsOWbvicsXHJcbiAgICAgIHF1ZXJ5OiB7fSxcclxuICAgICAgaW1hZ2VVcmw6ICcnXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgb25UYWJDaGFuZ2UoKTp2b2lkeyAgLy90YWLliIfmjaLop6blj5FcclxuICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KCcjZ3JDYXJkVHlwZScpLnRvZ2dsZShmYWxzZSk7ICAgICAgICAvL+S4quS6uuivgeS7tuexu+Wei1xyXG4gIH0sXHJcblxyXG4gIGdldGNhcmRMaXN0KCk6dm9pZHsgIC8v6I635Y+W6K+B5Lu257G75Z6LXHJcbiAgICBodHRwcy5yZXF1ZXN0KGFwaS5zdWJtZW51RGljICsgJz9tb2lkPTMnLCBudWxsLCAnR0VUJylcclxuICAgIC50aGVuKChyZXM6YW55KTp2b2lkPT57XHJcbiAgICAgIGxldCBsaXN0OmFueSA9IHJlcy52YWwubWFwKChpdGVtOmFueSk6YW55PT57XHJcbiAgICAgICAgaWYoaXRlbS5kaWNOYW1lID09ICflsYXmsJHouqvku73or4HvvIjmiLflj6PnsL/vvIknKXtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIFtcImdyRm9ybVJycm9yLmNhcmRUeXBlSWRScnJvclwiXTogJycsXHJcbiAgICAgICAgICAgIFtcImdyRm9ybURhdGUuY2FyZFR5cGVJZFwiXTogaXRlbS5pZCxcclxuICAgICAgICAgICAgZ3JWZXJpZmljYXRpb246IHRydWVcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICB0ZXh0OiBpdGVtLmRpY05hbWUsXHJcbiAgICAgICAgICB2YWx1ZTogaXRlbS5pZFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBjYXJkTGlzdDogbGlzdFxyXG4gICAgICB9KVxyXG4gICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIC8v5py65p6E5rOo5YaMXHJcbiAgamdMaW5rRm4oKTp2b2lke1xyXG4gICAgaWYoISF0aGlzLmRhdGEuamdGb3JtRGF0ZS5zaHh5Q29kZSl7XHJcbiAgICAgIHRoaXMuZ2V0SmdMaW5rVGVsKCk7ICAvL+iOt+WPluacuuaehOiBlOezu+eUteivnVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIC8vVG9hc3QoJ+ivt+Whq+WGmee7n+S4gOekvuS8muS/oeeUqOS7o+eggeiOt+WPlu+8gScpO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGpnU2h4eUNvZGVJbnB1dChyZXM6YW55KTp2b2lkeyAgLy/ljZXkvY3lkI3np7BcclxuICAgIGlmKHJlcy5kZXRhaWwpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLnNoeHlDb2RlRXJyb3JcIl06ICcnLFxyXG4gICAgICAgIFtcImpnRm9ybURhdGUuc2h4eUNvZGVcIl06IHJlcy5kZXRhaWwsXHJcbiAgICAgICAgamdWZXJpZmljYXRpb246IHRydWVcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIGpnU2h4eUNvZGVCbHVyKHJlczphbnkpOnZvaWR7ICAvL+e7n+S4gOekvuS8muS/oeeUqOS7o+eggVxyXG4gICAgbGV0IHJlZzphbnkgPSAvWzEtOV1cXGR7MTV9LztcclxuICAgIGxldCBzdHI6Qm9vbGVhbiA9IHJlZy50ZXN0KHJlcy5kZXRhaWwudmFsdWUpO1xyXG4gICAgaWYocmVzLmRldGFpbC52YWx1ZSl7XHJcbiAgICAgIGlmKHN0cil7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIFtcImpnRm9ybVJycm9yLnNoeHlDb2RlRXJyb3JcIl06ICcnLFxyXG4gICAgICAgICAgW1wiamdGb3JtRGF0ZS5zaHh5Q29kZVwiXTogcmVzLmRldGFpbC52YWx1ZSxcclxuICAgICAgICAgIGpnVmVyaWZpY2F0aW9uOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmdldEpnTGlua1RlbCgpOyAgLy/ojrflj5bmnLrmnoTogZTns7vnlLXor51cclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIFtcImpnRm9ybVJycm9yLnNoeHlDb2RlRXJyb3JcIl06ICfor7fovpPlhaXmraPnoa7nu5/kuIDnpL7kvJrkv6HnlKjku6PnoIEnLFxyXG4gICAgICAgICAgW1wiamdGb3JtRGF0ZS5zaHh5Q29kZVwiXTogcmVzLmRldGFpbC52YWx1ZSxcclxuICAgICAgICAgIGpnVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLnNoeHlDb2RlRXJyb3JcIl06ICcnLFxyXG4gICAgICAgIFtcImpnRm9ybURhdGUuc2h4eUNvZGVcIl06IHJlcy5kZXRhaWwudmFsdWUsXHJcbiAgICAgICAgamdWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgZ2V0SmdMaW5rVGVsKCk6dm9pZHsgIC8v6I635Y+W5py65p6E6IGU57O755S16K+dXHJcbiAgICBodHRwcy5yZXF1ZXN0KGFwaS5nZXRVc2VyICsgXCI/YWNjb3VudD1cIiArIHRoaXMuZGF0YS5qZ0Zvcm1EYXRlLnNoeHlDb2RlLCBudWxsLCAnZ2V0JylcclxuICAgIC50aGVuKChyZXM6YW55KTp2b2lkPT57XHJcbiAgICAgICAgbGV0IGxpbmtUZWw6YW55ID0gcmVzLnZhbC5waG9uZU51bS5zcGxpdCgnJyk7XHJcbiAgICAgICAgbGlua1RlbC5zcGxpY2UoMyw0LFwiKioqKlwiKTtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgW1wiamdGb3JtRGF0ZS5pZFwiXTogcmVzLnZhbC5pZCxcclxuICAgICAgICAgIFtcImpnRm9ybURhdGUubGlua1RlbFwiXTogcmVzLnZhbC5waG9uZU51bSxcclxuICAgICAgICAgIGpnTGluazogbGlua1RlbC5qb2luKFwiXCIpXHJcbiAgICAgICAgfSlcclxuICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiamdGb3JtRGF0ZS5pZFwiXTogJycsXHJcbiAgICAgICAgW1wiamdGb3JtRGF0ZS5saW5rVGVsXCJdOiAnJyxcclxuICAgICAgICBqZ0xpbms6ICcnXHJcbiAgICAgIH0pXHJcbiAgICAgIFRvYXN0KGVycik7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBqZ1Bhc3N3b3JkSW5wdXQocmVzOmFueSk6dm9pZHtcclxuICAgIGxldCByZWc6YW55ID0gLyg/PS4qKFthLXpBLVpdLiopKSg/PS4qWzAtOV0uKilbYS16QS1aMC05LSovKy5+IUAjJCVeJiooKV17NiwyMH0kLztcclxuICAgIGxldCBzdHI6Qm9vbGVhbiA9IHJlZy50ZXN0KHJlcy5kZXRhaWwpO1xyXG4gICAgaWYocmVzLmRldGFpbCl7XHJcbiAgICAgIGlmKHN0cil7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIFtcImpnRm9ybVJycm9yLnBhc3N3b3JkRXJyb3JcIl06ICcnLFxyXG4gICAgICAgICAgW1wiamdGb3JtRGF0ZS5wYXNzd29yZFwiXTogcmVzLmRldGFpbCxcclxuICAgICAgICAgIGpnVmVyaWZpY2F0aW9uOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIFtcImpnRm9ybVJycm9yLnBhc3N3b3JkRXJyb3JcIl06ICcnLFxyXG4gICAgICAgICAgW1wiamdGb3JtRGF0ZS5wYXNzd29yZFwiXTogcmVzLmRldGFpbCxcclxuICAgICAgICAgIGpnVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLnBhc3N3b3JkRXJyb3JcIl06ICcnLFxyXG4gICAgICAgIFtcImpnRm9ybURhdGUucGFzc3dvcmRcIl06IHJlcy5kZXRhaWwsXHJcbiAgICAgICAgamdWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICBcclxuICBqZ1Bhc3N3b3JkQmx1cihyZXM6YW55KTp2b2lkeyAgLy/lr4bnoIFcclxuICAgIGxldCByZWc6YW55ID0gLyg/PS4qKFthLXpBLVpdLiopKSg/PS4qWzAtOV0uKilbYS16QS1aMC05LSovKy5+IUAjJCVeJiooKV17NiwyMH0kLztcclxuICAgIGxldCBzdHI6Qm9vbGVhbiA9IHJlZy50ZXN0KHJlcy5kZXRhaWwudmFsdWUpO1xyXG4gICAgaWYocmVzLmRldGFpbC52YWx1ZSl7XHJcbiAgICAgIGlmKHN0cil7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIFtcImpnRm9ybVJycm9yLnBhc3N3b3JkRXJyb3JcIl06ICcnLFxyXG4gICAgICAgICAgW1wiamdGb3JtRGF0ZS5wYXNzd29yZFwiXTogcmVzLmRldGFpbC52YWx1ZSxcclxuICAgICAgICAgIGpnVmVyaWZpY2F0aW9uOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIFtcImpnRm9ybVJycm9yLnBhc3N3b3JkRXJyb3JcIl06ICfmlbDlrZfjgIHoi7HmlofjgIHlrZfnrKbkuKTnp43lj4rku6XkuIo2LTIw5L2NJyxcclxuICAgICAgICAgIFtcImpnRm9ybURhdGUucGFzc3dvcmRcIl06IHJlcy5kZXRhaWwudmFsdWUsXHJcbiAgICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJqZ0Zvcm1ScnJvci5wYXNzd29yZEVycm9yXCJdOiAnJyxcclxuICAgICAgICBbXCJqZ0Zvcm1EYXRlLnBhc3N3b3JkXCJdOiByZXMuZGV0YWlsLnZhbHVlLFxyXG4gICAgICAgIGpnVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIFxyXG5cclxuICBqZ1JlcGVhdFBhc3N3b3JkSW5wdXQocmVzOmFueSk6dm9pZHsgIC8v56Gu6K6k5a+G56CBXHJcbiAgICBpZihyZXMuZGV0YWlsKXtcclxuICAgICAgaWYocmVzLmRldGFpbCAhPSB0aGlzLmRhdGEuamdGb3JtRGF0ZS5wYXNzd29yZCl7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIFtcImpnRm9ybVJycm9yLnRydWV3b3JkRXJyb3JcIl06ICcnLFxyXG4gICAgICAgICAgW1wiamdGb3JtRGF0ZS50cnVld29yZFwiXTogcmVzLmRldGFpbCxcclxuICAgICAgICAgIGpnVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBbXCJqZ0Zvcm1ScnJvci50cnVld29yZEVycm9yXCJdOiAnJyxcclxuICAgICAgICAgIFtcImpnRm9ybURhdGUudHJ1ZXdvcmRcIl06IHJlcy5kZXRhaWwsXHJcbiAgICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLnRydWV3b3JkRXJyb3JcIl06ICcnLFxyXG4gICAgICAgIFtcImpnRm9ybURhdGUudHJ1ZXdvcmRcIl06IHJlcy5kZXRhaWwsXHJcbiAgICAgICAgamdWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICBqZ1JlcGVhdFBhc3N3b3JkQmx1cihyZXM6YW55KTp2b2lkeyAgLy/noa7orqTlr4bnoIFcclxuICAgIGlmKHJlcy5kZXRhaWwudmFsdWUpe1xyXG4gICAgICBpZihyZXMuZGV0YWlsLnZhbHVlICE9IHRoaXMuZGF0YS5qZ0Zvcm1EYXRlLnBhc3N3b3JkKXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgW1wiamdGb3JtUnJyb3IudHJ1ZXdvcmRFcnJvclwiXTogJ+S4pOasoei+k+WFpeeahOWvhueggeS4jeS4gOiHtCcsXHJcbiAgICAgICAgICBbXCJqZ0Zvcm1EYXRlLnRydWV3b3JkXCJdOiByZXMuZGV0YWlsLnZhbHVlLFxyXG4gICAgICAgICAgamdWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIFtcImpnRm9ybVJycm9yLnRydWV3b3JkRXJyb3JcIl06ICcnLFxyXG4gICAgICAgICAgW1wiamdGb3JtRGF0ZS50cnVld29yZFwiXTogcmVzLmRldGFpbC52YWx1ZSxcclxuICAgICAgICAgIGpnVmVyaWZpY2F0aW9uOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiamdGb3JtUnJyb3IudHJ1ZXdvcmRFcnJvclwiXTogJycsXHJcbiAgICAgICAgW1wiamdGb3JtRGF0ZS50cnVld29yZFwiXTogcmVzLmRldGFpbC52YWx1ZSxcclxuICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBqZ0xpbmtUZWwocmVzOmFueSk6dm9pZHsgIC8v6IGU57O755S16K+dXHJcbiAgICBsZXQgcmVnOmFueSA9IC9eKCgxWzAtOV17MTB9KXwoKCgoWzAtOV17M30tKT9bMC05XXs4fSl8KChbMC05XXs0fS0pP1swLTldezd9KSkoLVswLTldezEsNH0pPykpJC87XHJcbiAgICBsZXQgc3RyOkJvb2xlYW4gPSByZWcudGVzdChyZXMuZGV0YWlsLnZhbHVlKTtcclxuICAgIGlmKHJlcy5kZXRhaWwudmFsdWUpe1xyXG4gICAgICBpZihzdHIpe1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBbXCJqZ0Zvcm1ScnJvci5saW5rVGVsRXJyb3JcIl06ICcnLFxyXG4gICAgICAgICAgW1wiamdGb3JtRGF0ZS5saW5rVGVsXCJdOiByZXMuZGV0YWlsLnZhbHVlLFxyXG4gICAgICAgICAgamdWZXJpZmljYXRpb246IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgW1wiamdGb3JtUnJyb3IubGlua1RlbEVycm9yXCJdOiAn6K+36I635Y+W5q2j56Gu55qE6IGU57O755S16K+dJyxcclxuICAgICAgICAgIFtcImpnRm9ybURhdGUubGlua1RlbFwiXTogcmVzLmRldGFpbC52YWx1ZSxcclxuICAgICAgICAgIGpnVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLmxpbmtUZWxFcnJvclwiXTogJycsXHJcbiAgICAgICAgW1wiamdGb3JtRGF0ZS5saW5rVGVsXCJdOiByZXMuZGV0YWlsLnZhbHVlLFxyXG4gICAgICAgIGpnVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgamdWZXJpZnlDb2RlKHJlczphbnkpOnZvaWR7ICAvL+mqjOivgeeggVxyXG4gICAgaWYocmVzLmRldGFpbC52YWx1ZSl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiamdGb3JtUnJyb3IudmVyaWZ5Q29kZUVycm9yXCJdOiAnJyxcclxuICAgICAgICBbXCJqZ0Zvcm1EYXRlLnZlcmlmeUNvZGVcIl06IHJlcy5kZXRhaWwudmFsdWUsXHJcbiAgICAgICAgamdWZXJpZmljYXRpb246IHRydWVcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG5cclxuXHJcbiAgamdTdWJtaXRGbigpOnZvaWR7ICAvL+acuuaehOazqOWGjFxyXG4gICAgLy/or7fovpPlhaXnu5/kuIDnpL7kvJrkv6HnlKjku6PnoIFcclxuICAgIGlmKHRoaXMuZGF0YS5qZ0Zvcm1EYXRlLnNoeHlDb2RlID09ICcnKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJqZ0Zvcm1ScnJvci5zaHh5Q29kZUVycm9yXCJdOifor7fovpPlhaXnu5/kuIDnpL7kvJrkv6HnlKjku6PnoIEnLFxyXG4gICAgICAgIGpnVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy/lr4bnoIFcclxuICAgIGlmKHRoaXMuZGF0YS5qZ0Zvcm1EYXRlLnBhc3N3b3JkID09ICcnKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJqZ0Zvcm1ScnJvci5wYXNzd29yZEVycm9yXCJdOifor7fovpPlhaXlr4bnoIEnLFxyXG4gICAgICAgIGpnVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy/noa7orqTlr4bnoIFcclxuICAgIGlmKHRoaXMuZGF0YS5qZ0Zvcm1EYXRlLnRydWV3b3JkID09ICcnKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJqZ0Zvcm1ScnJvci50cnVld29yZEVycm9yXCJdOifor7flho3mrKHnoa7orqTlr4bnoIEnLFxyXG4gICAgICAgIGpnVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8v6IGU57O755S16K+dXHJcbiAgICBpZih0aGlzLmRhdGEuamdGb3JtRGF0ZS5saW5rVGVsID09ICcnKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJqZ0Zvcm1ScnJvci5saW5rVGVsRXJyb3JcIl06J+ivt+Whq+WGmee7n+S4gOekvuS8muS/oeeUqOS7o+eggeiOt+WPlicsXHJcbiAgICAgICAgamdWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvL+mqjOivgeeggVxyXG4gICAgaWYodGhpcy5kYXRhLmpnRm9ybURhdGUudmVyaWZ5Q29kZSA9PSAnJyl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiamdGb3JtUnJyb3IudmVyaWZ5Q29kZUVycm9yXCJdOifor7fovpPlhaXpqozor4HnoIEnLFxyXG4gICAgICAgIGpnVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8v5a6M5oiQXHJcbiAgICBpZih0aGlzLmRhdGEuamdWZXJpZmljYXRpb24gPT0gZmFsc2Upe1xyXG4gICAgICBUb2FzdCgn6K+35oqK5b+F5aGr5L+h5oGv5aGr5YaZ5a6M5pW077yBJyk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgbGV0IHVybDpzdHJpbmcgPSBhcGkudXBkYXRlUGFzcyArICc/aWQ9JyArIHRoaXMuZGF0YS5qZ0Zvcm1EYXRlLmlkICsgJyZzaHh5Q29kZT0nICsgdGhpcy5kYXRhLmpnRm9ybURhdGUuc2h4eUNvZGUgKyAnJnBob25lTnVtPScgKyB0aGlzLmRhdGEuamdGb3JtRGF0ZS5saW5rVGVsICsgJyZ2ZXJpZnlDb2RlPScgKyB0aGlzLmRhdGEuamdGb3JtRGF0ZS52ZXJpZnlDb2RlICsgJyZwYXNzd29yZD0nICsgdGhpcy5kYXRhLmpnRm9ybURhdGUucGFzc3dvcmQ7XHJcbiAgICAgIGh0dHBzLnJlcXVlc3QodXJsLCBudWxsLCAnUE9TVCcpLnRoZW4oKCk6dm9pZD0+e1xyXG4gICAgICAgIFRvYXN0KHtcclxuICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcclxuICAgICAgICAgIG1lc3NhZ2U6ICfkv67mlLnmiJDlip/vvIEnLFxyXG4gICAgICAgICAgb25DbG9zZTogKCkgPT4ge1xyXG4gICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICB1cmw6ICcuLi9sb2dpbkZvcm0vbG9naW5Gb3JtJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgICBUb2FzdChlcnIpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBqZ1ZlcmlmeUNvZGVGbigpOnZvaWR7ICAvL+iOt+WPlumqjOivgeeggVxyXG4gICAgaWYodGhpcy5kYXRhLmpnRm9ybURhdGUubGlua1RlbCAhPSAnJyl7XHJcbiAgICAgIGh0dHBzLnJlcXVlc3QoYXBpLmdldENvZGUgKyBcIj90ZWxlcGhvbmU9XCIgKyB0aGlzLmRhdGEuamdGb3JtRGF0ZS5saW5rVGVsLCBudWxsLCAnR0VUJylcclxuICAgICAgLnRoZW4oKCk6dm9pZD0+e1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBqZ1ZlcmlmeUNvZGVUaW1lOiAnNjAnLFxyXG4gICAgICAgICAgamdEaXNhYmxlZDogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbGV0IHNldFRpbWU6YW55ID0gc2V0SW50ZXJ2YWwoKCk6dm9pZD0+e1xyXG4gICAgICAgICAgbGV0IHN0cjphbnkgPSBwYXJzZUludCh0aGlzLmRhdGEuamdWZXJpZnlDb2RlVGltZSkgLSAxO1xyXG4gICAgICAgICAgaWYoc3RyID4gMCl7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgamdWZXJpZnlDb2RlVGltZTogc3RyXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChzZXRUaW1lKTtcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICBqZ1ZlcmlmeUNvZGVUaW1lOiAn6I635Y+W6aqM6K+B56CBJyxcclxuICAgICAgICAgICAgICBqZ0Rpc2FibGVkOiBmYWxzZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sMTAwMClcclxuICAgICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgICBUb2FzdChlcnIpO1xyXG4gICAgICB9KTtcclxuICAgIH1lbHNle1xyXG4gICAgICBUb2FzdCgn6K+35YWI5aGr5YaZ6IGU57O755S16K+d77yBJyk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcblxyXG4gIC8v5Liq5Lq65rOo5YaMXHJcbiAgZ2V0R3JMaW5rVGVsKCk6dm9pZHsgIC8v6I635Y+W5py65p6E6IGU57O755S16K+dXHJcbiAgICBodHRwcy5yZXF1ZXN0KGFwaS5nZXRVc2VyICsgXCI/YWNjb3VudD1cIiArIHRoaXMuZGF0YS5nckZvcm1EYXRlLmNhcmROdW0sIG51bGwsICdnZXQnKVxyXG4gICAgLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgICBsZXQgbGlua1RlbDphbnkgPSByZXMudmFsLnBob25lTnVtLnNwbGl0KCcnKTtcclxuICAgICAgICBsaW5rVGVsLnNwbGljZSgzLDQsXCIqKioqXCIpO1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBbXCJnckZvcm1EYXRlLmlkXCJdOiByZXMudmFsLmlkLFxyXG4gICAgICAgICAgW1wiZ3JGb3JtRGF0ZS5waG9uZU51bVwiXTogcmVzLnZhbC5waG9uZU51bSxcclxuICAgICAgICAgIGdyTGluazogbGlua1RlbC5qb2luKFwiXCIpXHJcbiAgICAgICAgfSlcclxuICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiZ3JGb3JtRGF0ZS5pZFwiXTogJycsXHJcbiAgICAgICAgW1wiZ3JGb3JtRGF0ZS5waG9uZU51bVwiXTogJycsXHJcbiAgICAgICAgZ3JMaW5rOiAnJ1xyXG4gICAgICB9KVxyXG4gICAgICBUb2FzdChlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgZ3JDYXJkVHlwZUZuKHZhbHVlOmFueSk6dm9pZHsgIC8v6K+B5Lu257G75Z6LXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBbXCJnckZvcm1ScnJvci5jYXJkVHlwZUlkUnJyb3JcIl06ICcnLFxyXG4gICAgICBbXCJnckZvcm1EYXRlLmNhcmRUeXBlSWRcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgZ3JWZXJpZmljYXRpb246IHRydWVcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgZ3JMaW5rRm4oKTp2b2lke1xyXG4gICAgaWYoISF0aGlzLmRhdGEuZ3JGb3JtRGF0ZS5jYXJkTnVtKXtcclxuICAgICAgdGhpcy5nZXRHckxpbmtUZWwoKTsgIC8v6I635Y+W5py65p6E6IGU57O755S16K+dXHJcbiAgICB9ZWxzZXtcclxuICAgICAgLy9Ub2FzdCgn6K+35aGr5YaZ6K+B5Lu25Y+356CB6I635Y+W77yBJyk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgZ3JTaHh5Q29kZUlucHV0KHJlczphbnkpOnZvaWR7ICAvL+ivgeS7tuWPt+eggVxyXG4gICAgaWYocmVzLmRldGFpbCl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiZ3JGb3JtUnJyb3IuY2FyZE51bVJycm9yXCJdOiAnJyxcclxuICAgICAgICBbXCJnckZvcm1EYXRlLmNhcmROdW1cIl06IHJlcy5kZXRhaWwsXHJcbiAgICAgICAgZ3JWZXJpZmljYXRpb246IHRydWVcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG5cclxuXHJcbiAgZ3JDYXJkTnVtKHJlczphbnkpOnZvaWR7ICAvL+ivgeS7tuWPt+eggVxyXG4gICAgaWYocmVzLmRldGFpbC52YWx1ZSl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiZ3JGb3JtUnJyb3IuY2FyZE51bVJycm9yXCJdOiAnJyxcclxuICAgICAgICBbXCJnckZvcm1EYXRlLmNhcmROdW1cIl06IHJlcy5kZXRhaWwudmFsdWUsXHJcbiAgICAgICAgZ3JWZXJpZmljYXRpb246IHRydWVcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5nZXRHckxpbmtUZWwoKTsgIC8v6I635Y+W5Liq5Lq66IGU57O755S16K+dXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgZ3JQYXNzd29yZElucHV0KHJlczphbnkpOnZvaWR7ICAvL+WvhueggVxyXG4gICAgbGV0IHJlZzphbnkgPSAvKD89LiooW2EtekEtWl0uKikpKD89LipbMC05XS4qKVthLXpBLVowLTktKi8rLn4hQCMkJV4mKigpXXs2LDIwfSQvO1xyXG4gICAgbGV0IHN0cjpCb29sZWFuID0gcmVnLnRlc3QocmVzLmRldGFpbCk7XHJcbiAgICBpZihyZXMuZGV0YWlsKXtcclxuICAgICAgaWYoc3RyKXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgW1wiZ3JGb3JtUnJyb3IucGFzc3dvcmRFcnJvclwiXTogJycsXHJcbiAgICAgICAgICBbXCJnckZvcm1EYXRlLnBhc3N3b3JkXCJdOiByZXMuZGV0YWlsLFxyXG4gICAgICAgICAgZ3JWZXJpZmljYXRpb246IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgW1wiZ3JGb3JtUnJyb3IucGFzc3dvcmRFcnJvclwiXTogJycsXHJcbiAgICAgICAgICBbXCJnckZvcm1EYXRlLnBhc3N3b3JkXCJdOiByZXMuZGV0YWlsLFxyXG4gICAgICAgICAgZ3JWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiZ3JGb3JtUnJyb3IucGFzc3dvcmRFcnJvclwiXTogJycsXHJcbiAgICAgICAgW1wiZ3JGb3JtRGF0ZS5wYXNzd29yZFwiXTogcmVzLmRldGFpbCxcclxuICAgICAgICBnclZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIGdyUGFzc3dvcmRCbHVyKHJlczphbnkpOnZvaWR7ICAvL+WvhueggVxyXG4gICAgbGV0IHJlZzphbnkgPSAvKD89LiooW2EtekEtWl0uKikpKD89LipbMC05XS4qKVthLXpBLVowLTktKi8rLn4hQCMkJV4mKigpXXs2LDIwfSQvO1xyXG4gICAgbGV0IHN0cjpCb29sZWFuID0gcmVnLnRlc3QocmVzLmRldGFpbC52YWx1ZSk7XHJcbiAgICBpZihyZXMuZGV0YWlsLnZhbHVlKXtcclxuICAgICAgaWYoc3RyKXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgW1wiZ3JGb3JtUnJyb3IucGFzc3dvcmRFcnJvclwiXTogJycsXHJcbiAgICAgICAgICBbXCJnckZvcm1EYXRlLnBhc3N3b3JkXCJdOiByZXMuZGV0YWlsLnZhbHVlLFxyXG4gICAgICAgICAgZ3JWZXJpZmljYXRpb246IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgW1wiZ3JGb3JtUnJyb3IucGFzc3dvcmRFcnJvclwiXTogJ+aVsOWtl+OAgeiLseaWh+OAgeWtl+espuS4pOenjeWPiuS7peS4ijYtMjDkvY0nLFxyXG4gICAgICAgICAgW1wiZ3JGb3JtRGF0ZS5wYXNzd29yZFwiXTogcmVzLmRldGFpbC52YWx1ZSxcclxuICAgICAgICAgIGdyVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImdyRm9ybVJycm9yLnBhc3N3b3JkRXJyb3JcIl06ICcnLFxyXG4gICAgICAgIFtcImdyRm9ybURhdGUucGFzc3dvcmRcIl06IHJlcy5kZXRhaWwudmFsdWUsXHJcbiAgICAgICAgZ3JWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgZ3JSZXBlYXRQYXNzd29yZElucHV0KHJlczphbnkpOnZvaWR7ICAvL+ehruiupOWvhueggVxyXG4gICAgaWYocmVzLmRldGFpbCl7XHJcbiAgICAgIGlmKHJlcy5kZXRhaWwgIT0gdGhpcy5kYXRhLmdyRm9ybURhdGUucGFzc3dvcmQpe1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBbXCJnckZvcm1ScnJvci50cnVld29yZEVycm9yXCJdOiAnJyxcclxuICAgICAgICAgIFtcImdyRm9ybURhdGUudHJ1ZXdvcmRcIl06IHJlcy5kZXRhaWwsXHJcbiAgICAgICAgICBnclZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgW1wiZ3JGb3JtUnJyb3IudHJ1ZXdvcmRFcnJvclwiXTogJycsXHJcbiAgICAgICAgICBbXCJnckZvcm1EYXRlLnRydWV3b3JkXCJdOiByZXMuZGV0YWlsLFxyXG4gICAgICAgICAgZ3JWZXJpZmljYXRpb246IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJnckZvcm1ScnJvci50cnVld29yZEVycm9yXCJdOiAnJyxcclxuICAgICAgICBbXCJnckZvcm1EYXRlLnRydWV3b3JkXCJdOiByZXMuZGV0YWlsLFxyXG4gICAgICAgIGdyVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZ3JSZXBlYXRQYXNzd29yZEJsdXIocmVzOmFueSk6dm9pZHsgIC8v56Gu6K6k5a+G56CBXHJcbiAgICBpZihyZXMuZGV0YWlsLnZhbHVlKXtcclxuICAgICAgaWYocmVzLmRldGFpbC52YWx1ZSAhPSB0aGlzLmRhdGEuZ3JGb3JtRGF0ZS5wYXNzd29yZCl7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIFtcImdyRm9ybVJycm9yLnRydWV3b3JkRXJyb3JcIl06ICfkuKTmrKHovpPlhaXnmoTlr4bnoIHkuI3kuIDoh7QnLFxyXG4gICAgICAgICAgW1wiZ3JGb3JtRGF0ZS50cnVld29yZFwiXTogcmVzLmRldGFpbC52YWx1ZSxcclxuICAgICAgICAgIGdyVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBbXCJnckZvcm1ScnJvci50cnVld29yZEVycm9yXCJdOiAnJyxcclxuICAgICAgICAgIFtcImdyRm9ybURhdGUudHJ1ZXdvcmRcIl06IHJlcy5kZXRhaWwudmFsdWUsXHJcbiAgICAgICAgICBnclZlcmlmaWNhdGlvbjogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImdyRm9ybVJycm9yLnRydWV3b3JkRXJyb3JcIl06ICcnLFxyXG4gICAgICAgIFtcImdyRm9ybURhdGUudHJ1ZXdvcmRcIl06IHJlcy5kZXRhaWwudmFsdWUsXHJcbiAgICAgICAgZ3JWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgZ3JQaG9uZU51bShyZXM6YW55KTp2b2lkeyAgLy/ogZTns7vnlLXor51cclxuICAgIGxldCByZWc6YW55ID0gL14oKDFbMC05XXsxMH0pfCgoKChbMC05XXszfS0pP1swLTldezh9KXwoKFswLTldezR9LSk/WzAtOV17N30pKSgtWzAtOV17MSw0fSk/KSkkLztcclxuICAgIGxldCBzdHI6Qm9vbGVhbiA9IHJlZy50ZXN0KHJlcy5kZXRhaWwudmFsdWUpO1xyXG4gICAgaWYocmVzLmRldGFpbC52YWx1ZSl7XHJcbiAgICAgIGlmKHN0cil7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIFtcImdyRm9ybVJycm9yLnBob25lTnVtRXJyb3JcIl06ICcnLFxyXG4gICAgICAgICAgW1wiZ3JGb3JtRGF0ZS5waG9uZU51bVwiXTogcmVzLmRldGFpbC52YWx1ZSxcclxuICAgICAgICAgIGdyVmVyaWZpY2F0aW9uOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIFtcImdyRm9ybVJycm9yLnBob25lTnVtRXJyb3JcIl06ICfor7fovpPlhaXmraPnoa7nmoTogZTns7vnlLXor50nLFxyXG4gICAgICAgICAgW1wiZ3JGb3JtRGF0ZS5waG9uZU51bVwiXTogcmVzLmRldGFpbC52YWx1ZSxcclxuICAgICAgICAgIGdyVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImdyRm9ybVJycm9yLnBob25lTnVtRXJyb3JcIl06ICcnLFxyXG4gICAgICAgIFtcImdyRm9ybURhdGUucGhvbmVOdW1cIl06IHJlcy5kZXRhaWwudmFsdWUsXHJcbiAgICAgICAgZ3JWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICBnclZlcmlmeUNvZGUocmVzOmFueSk6dm9pZHsgIC8v6aqM6K+B56CBXHJcbiAgICBpZihyZXMuZGV0YWlsLnZhbHVlKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJnckZvcm1ScnJvci52ZXJpZnlDb2RlRXJyb3JcIl06ICcnLFxyXG4gICAgICAgIFtcImdyRm9ybURhdGUudmVyaWZ5Q29kZVwiXTogcmVzLmRldGFpbC52YWx1ZSxcclxuICAgICAgICBnclZlcmlmaWNhdGlvbjogdHJ1ZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZ3JWZXJpZnlDb2RlRm4oKTp2b2lkeyAgLy/ojrflj5bpqozor4HnoIFcclxuICAgIGlmKHRoaXMuZGF0YS5nckZvcm1EYXRlLnBob25lTnVtICE9ICcnKXtcclxuICAgICAgaHR0cHMucmVxdWVzdChhcGkuZ2V0Q29kZSArIFwiP3RlbGVwaG9uZT1cIiArIHRoaXMuZGF0YS5nckZvcm1EYXRlLnBob25lTnVtLCBudWxsLCAnR0VUJylcclxuICAgICAgLnRoZW4oKCk6dm9pZD0+e1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBnclZlcmlmeUNvZGVUaW1lOiAnNjAnLFxyXG4gICAgICAgICAgZ3JEaXNhYmxlZDogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbGV0IHNldFRpbWU6YW55ID0gc2V0SW50ZXJ2YWwoKCk6dm9pZD0+e1xyXG4gICAgICAgICAgbGV0IHN0cjphbnkgPSBwYXJzZUludCh0aGlzLmRhdGEuZ3JWZXJpZnlDb2RlVGltZSkgLSAxO1xyXG4gICAgICAgICAgaWYoc3RyID4gMCl7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgZ3JWZXJpZnlDb2RlVGltZTogc3RyXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChzZXRUaW1lKTtcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICBnclZlcmlmeUNvZGVUaW1lOiAn6I635Y+W6aqM6K+B56CBJyxcclxuICAgICAgICAgICAgICBnckRpc2FibGVkOiBmYWxzZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sMTAwMClcclxuICAgICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgICBUb2FzdChlcnIpO1xyXG4gICAgICB9KTtcclxuICAgIH1lbHNle1xyXG4gICAgICBUb2FzdCgn6K+35YWI5aGr5YaZ6IGU57O755S16K+d77yBJyk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgXHJcbiAgZ3JTdWJtaXRGbigpOnZvaWR7ICAvL+S4quS6uuazqOWGjFxyXG4gICAgLy/or4Hku7bnsbvlnotcclxuICAgIGlmKHRoaXMuZGF0YS5nckZvcm1EYXRlLmNhcmRUeXBlSWQgPT0gJycpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImdyRm9ybVJycm9yLmNhcmRUeXBlSWRScnJvclwiXTogJ+ivt+mAieaLqeWNleS9jeexu+WeiycsXHJcbiAgICAgICAgZ3JWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvL+ivgeS7tuWPt+eggVxyXG4gICAgaWYodGhpcy5kYXRhLmdyRm9ybURhdGUuY2FyZE51bSA9PSAnJyl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiZ3JGb3JtUnJyb3IuY2FyZE51bVJycm9yXCJdOiAn6K+36YCJ5oup6K+B5Lu25Y+356CBJyxcclxuICAgICAgICBnclZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIC8v5a+G56CBXHJcbiAgICBpZih0aGlzLmRhdGEuZ3JGb3JtRGF0ZS5wYXNzd29yZCA9PSAnJyl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiZ3JGb3JtUnJyb3IucGFzc3dvcmRFcnJvclwiXTon6K+36L6T5YWl5a+G56CBJyxcclxuICAgICAgICBnclZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIC8v56Gu6K6k5a+G56CBXHJcbiAgICBpZih0aGlzLmRhdGEuZ3JGb3JtRGF0ZS50cnVld29yZCA9PSAnJyl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiZ3JGb3JtUnJyb3IudHJ1ZXdvcmRFcnJvclwiXTon6K+35YaN5qyh56Gu6K6k5a+G56CBJyxcclxuICAgICAgICBnclZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvL+iBlOezu+eUteivnVxyXG4gICAgaWYodGhpcy5kYXRhLmdyRm9ybURhdGUucGhvbmVOdW0gPT0gJycpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImdyRm9ybVJycm9yLnBob25lTnVtRXJyb3JcIl06J+ivt+i+k+WFpeiBlOezu+eUteivnScsXHJcbiAgICAgICAgZ3JWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAgLy/pqozor4HnoIFcclxuICAgIGlmKHRoaXMuZGF0YS5nckZvcm1EYXRlLnZlcmlmeUNvZGUgPT0gJycpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImdyRm9ybVJycm9yLnZlcmlmeUNvZGVFcnJvclwiXTon6K+36L6T5YWl6aqM6K+B56CBJyxcclxuICAgICAgICBnclZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIC8v5Liq5Lq65a6M5oiQXHJcbiAgICBpZih0aGlzLmRhdGEuZ3JWZXJpZmljYXRpb24gPT0gZmFsc2Upe1xyXG4gICAgICBUb2FzdCgn6K+35oqK5b+F5aGr5L+h5oGv5aGr5YaZ5a6M5pW077yBJyk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgbGV0IHVybDpzdHJpbmcgPSBhcGkudXBkYXRlUGFzcyArICc/aWQ9JyArIHRoaXMuZGF0YS5nckZvcm1EYXRlLmlkICsgJyZjYXJkVHlwZUlkPScgKyB0aGlzLmRhdGEuZ3JGb3JtRGF0ZS5jYXJkVHlwZUlkICsgJyZjYXJkTnVtPScgKyB0aGlzLmRhdGEuZ3JGb3JtRGF0ZS5jYXJkTnVtICsgJyZwaG9uZU51bT0nICsgdGhpcy5kYXRhLmdyRm9ybURhdGUucGhvbmVOdW0gKyAnJnZlcmlmeUNvZGU9JyArIHRoaXMuZGF0YS5nckZvcm1EYXRlLnZlcmlmeUNvZGUgKyAnJnBhc3N3b3JkPScgKyB0aGlzLmRhdGEuZ3JGb3JtRGF0ZS5wYXNzd29yZDtcclxuICAgICAgaHR0cHMucmVxdWVzdCh1cmwsIG51bGwsICdQT1NUJykudGhlbigoKTp2b2lkPT57XHJcbiAgICAgICAgVG9hc3Qoe1xyXG4gICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgbWVzc2FnZTogJ+S/ruaUueaIkOWKn++8gScsXHJcbiAgICAgICAgICBvbkNsb3NlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgIHVybDogJy4uL2xvZ2luRm9ybS9sb2dpbkZvcm0nXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICAgIFRvYXN0KGVycik7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG5cclxuICAvL+mhtemdouWIneWni+WMllxyXG4gIG9uTG9hZCgpe1xyXG4gICAgLy/pobXpnaLmoIfpophcclxuICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7ICAgICBcclxuICAgICAgdGl0bGU6IFwi5om+5Zue5a+G56CBXCJcclxuICAgIH0pO1xyXG4gICAgLy/or4Hku7bnsbvlnotcclxuICAgIHRoaXMuZ2V0Y2FyZExpc3QoKTtcclxuICB9LFxyXG4gIC8v6aG16Z2i5riy5p+T5a6M5oiQXHJcbiAgb25SZWFkeSgpe30sXHJcblxyXG4gIC8v6aG16Z2i5pi+56S6XHJcbiAgb25TaG93KCl7XHJcbiAgICBcclxuICB9LFxyXG5cclxuICAvL+mhtemdoumakOiXj1xyXG4gIG9uSGlkZSgpe30sXHJcblxyXG4gIC8v6aG16Z2i5YWz6ZetXHJcbiAgb25VbmxvYWQoKXtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIFtcImpnRm9ybURhdGUuc2h4eUNvZGVcIl06JycsICAvL+e7n+S4gOekvuS8muS/oeeUqOS7o+eggVxyXG4gICAgICBbXCJqZ0Zvcm1EYXRlLnBhc3N3b3JkXCJdOicnLCAgLy/lr4bnoIFcclxuICAgICAgW1wiamdGb3JtRGF0ZS50cnVld29yZFwiXTonJywgIC8v56Gu6K6k5a+G56CBXHJcbiAgICAgIFtcImpnRm9ybURhdGUubGlua1RlbFwiXTonJywgIC8v6IGU57O75Lq655S16K+dXHJcbiAgICAgIFtcImpnRm9ybURhdGUudmVyaWZ5Q29kZVwiXTonJywgIC8v6aqM6K+B56CBXHJcbiAgICAgIGpnTGluazogJycsXHJcblxyXG4gICAgICBbXCJnckZvcm1EYXRlLmNhcmRUeXBlSWRcIl06JycsICAvL+ivgeS7tuexu+Wei1xyXG4gICAgICBbXCJnckZvcm1EYXRlLmNhcmROdW1cIl06JycsICAvL+ivgeS7tuWPt+eggVxyXG4gICAgICBbXCJnckZvcm1EYXRlLnBob25lTnVtXCJdOicnLCAgLy/ogZTns7vnlLXor51cclxuICAgICAgW1wiZ3JGb3JtRGF0ZS52ZXJpZnlDb2RlXCJdOicnLCAgLy/pqozor4HnoIFcclxuICAgICAgW1wiZ3JGb3JtRGF0ZS5wYXNzd29yZFwiXTonJywgIC8v5a+G56CBXHJcbiAgICAgIFtcImdyRm9ybURhdGUudHJ1ZXdvcmRcIl06JycsICAvL+ehruiupOWvhueggVxyXG4gICAgICBnckxpbms6ICcnLFxyXG4gICAgfSlcclxuICB9XHJcbn0pXHJcbmV4cG9ydCB7fTtcclxuIl19