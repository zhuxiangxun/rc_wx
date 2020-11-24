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
                wx.navigateTo({
                    url: '../loginForm/loginForm'
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
        var _a;
        this.setData((_a = {},
            _a["jgFormDate.shxyCode"] = '',
            _a["jgFormDate.password"] = '',
            _a["jgFormDate.trueword"] = '',
            _a["jgFormDate.linkTel"] = '',
            _a["jgFormDate.verifyCode"] = '',
            _a["grFormDate.cardTypeId"] = '',
            _a["grFormDate.cardNum"] = '',
            _a["grFormDate.phoneNum"] = '',
            _a["grFormDate.verifyCode"] = '',
            _a["grFormDate.password"] = '',
            _a["grFormDate.trueword"] = '',
            _a));
    },
    onHide: function () { },
    onUnload: function () { }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemdQYXNzd29yZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInpnUGFzc3dvcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsa0RBQWtELENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDaEYsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFFLENBQUMsVUFBVSxDQUFDO0FBQ2hDLElBQUksS0FBSyxHQUFJLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0FBRWpELElBQUksQ0FBQztJQUVILElBQUksRUFBRTtRQUNKLFNBQVMsRUFBRSxJQUFJO1FBRWYsUUFBUSxFQUFFLEVBQUU7UUFFWixNQUFNLEVBQUUsRUFBRTtRQUNWLGdCQUFnQixFQUFFLE9BQU87UUFDekIsVUFBVSxFQUFFLEtBQUs7UUFDakIsaUJBQWlCLEVBQUUsS0FBSztRQUV4QixNQUFNLEVBQUUsRUFBRTtRQUNWLGdCQUFnQixFQUFFLE9BQU87UUFDekIsVUFBVSxFQUFFLEtBQUs7UUFDakIsaUJBQWlCLEVBQUUsS0FBSztRQUd4QixnQkFBZ0IsRUFBRSxFQUFFO1FBQ3BCLGVBQWUsRUFBRSxFQUFFO1FBQ25CLFVBQVUsRUFBQztZQUNULEVBQUUsRUFBRSxFQUFFO1lBQ04sUUFBUSxFQUFFLEVBQUU7WUFDWixRQUFRLEVBQUUsRUFBRTtZQUNaLFFBQVEsRUFBRSxFQUFFO1lBQ1osT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsRUFBRTtTQUNmO1FBQ0QsV0FBVyxFQUFDO1lBQ1YsYUFBYSxFQUFFLEVBQUU7WUFDakIsYUFBYSxFQUFFLEVBQUU7WUFDakIsYUFBYSxFQUFFLEVBQUU7WUFDakIsWUFBWSxFQUFFLEVBQUU7WUFDaEIsZUFBZSxFQUFFLEVBQUU7U0FDcEI7UUFDRCxjQUFjLEVBQUUsS0FBSztRQUlyQixVQUFVLEVBQUM7WUFDVCxFQUFFLEVBQUUsRUFBRTtZQUNOLFVBQVUsRUFBRSxFQUFFO1lBQ2QsT0FBTyxFQUFF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R1gsTUFBTTs7UUFDSixJQUFJLENBQUMsT0FBTztZQUNWLEdBQUMscUJBQXFCLElBQUUsRUFBRTtZQUMxQixHQUFDLHFCQUFxQixJQUFFLEVBQUU7WUFDMUIsR0FBQyxxQkFBcUIsSUFBRSxFQUFFO1lBQzFCLEdBQUMsb0JBQW9CLElBQUUsRUFBRTtZQUN6QixHQUFDLHVCQUF1QixJQUFFLEVBQUU7WUFFNUIsR0FBQyx1QkFBdUIsSUFBRSxFQUFFO1lBQzVCLEdBQUMsb0JBQW9CLElBQUUsRUFBRTtZQUN6QixHQUFDLHFCQUFxQixJQUFFLEVBQUU7WUFDMUIsR0FBQyx1QkFBdUIsSUFBRSxFQUFFO1lBQzVCLEdBQUMscUJBQXFCLElBQUUsRUFBRTtZQUMxQixHQUFDLHFCQUFxQixJQUFFLEVBQUU7Z0JBQzFCLENBQUE7SUFDSixDQUFDO0lBR0QsTUFBTSxnQkFBRyxDQUFDO0lBR1YsUUFBUSxnQkFBRyxDQUFDO0NBQ2IsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVnaXN0ZXJlZC50c1xyXG5sZXQgVG9hc3QgPSByZXF1aXJlKCcuLi8uLi9taW5pcHJvZ3JhbV9ucG0vQHZhbnQvd2VhcHAvdG9hc3QvdG9hc3QuanMnKS5kZWZhdWx0O1xyXG5jb25zdCBhcGkgPSBnZXRBcHAoKS5nbG9iYWxEYXRhOyAgLy8g6I635Y+W5bqU55So5a6e5L6LXHJcbmxldCBodHRwcyAgPSByZXF1aXJlKCcuLi8uLi91dGlscy9teVJlcXVlc3QuanMnKTsgICAgIC8v6I635Y+WYWpheOaWueazlVxyXG5cclxuUGFnZSh7XHJcbiAgLy/pobXpnaLmlbDmja5cclxuICBkYXRhOiB7XHJcbiAgICB0YWJBY3RpdmU6ICdqZycsICAgICAgICAgICAgICAgIC8v5rOo5YaMdGFiXHJcblxyXG4gICAgY2FyZExpc3Q6IFtdLCAgICAgICAgICAgICAgICAgICAvL+ivgeS7tuexu+Wei1xyXG4gIFxyXG4gICAgamdMaW5rOiAnJywgICAgICAgICAgICAgICAgICAgICAgLy/mnLrmnoTogZTns7vnlLXor50q5pi+56S6XHJcbiAgICBqZ1ZlcmlmeUNvZGVUaW1lOiAn6I635Y+W6aqM6K+B56CBJywgIC8v6I635Y+W6aqM6K+B56CBXHJcbiAgICBqZ0Rpc2FibGVkOiBmYWxzZSwgICAgICAgICAgICAgIC8v6aqM6K+B56CB5oyJ6ZKu54q25oCBXHJcbiAgICBqZ1Byb3RvY29sQ2hlY2tlZDogZmFsc2UsICAgICAgIC8v5Y2P6K6uXHJcblxyXG4gICAgZ3JMaW5rOiAnJywgICAgICAgICAgICAgICAgICAgICAvL+S4quS6uuiBlOezu+eUteivnSrmmL7npLpcclxuICAgIGdyVmVyaWZ5Q29kZVRpbWU6ICfojrflj5bpqozor4HnoIEnLCAgLy/ojrflj5bpqozor4HnoIFcclxuICAgIGdyRGlzYWJsZWQ6IGZhbHNlLCAgICAgICAgICAgICAgLy/pqozor4HnoIHmjInpkq7nirbmgIFcclxuICAgIGdyUHJvdG9jb2xDaGVja2VkOiBmYWxzZSwgICAgICAgLy/ljY/orq5cclxuXHJcbiAgICAvL+acuuaehOazqOWGjFxyXG4gICAgamdSZXBlYXRQYXNzd29yZDogJycsICAgICAgICAgICAvL+acuuaehOehruiupOWvhueggVxyXG4gICAgamdQYXNzd29yZEVycm9yOiAnJywgICAgICAgICAgICAvL+acuuaehOehruiupOWvhueggVxyXG4gICAgamdGb3JtRGF0ZTp7ICAvL+acuuaehOihqOWNlVxyXG4gICAgICBpZDogJycsICAgICAgICAgICAgICAgICAgICAgICAvL+eUqOaIt2lkIFxyXG4gICAgICBzaHh5Q29kZTogJycsICAgICAgICAgICAgICAgICAvL+e7n+S4gOekvuS8muS/oeeUqOS7o+eggVxyXG4gICAgICBwYXNzd29yZDogJycsICAgICAgICAgICAgICAgICAvL+WvhueggVxyXG4gICAgICB0cnVld29yZDogJycsICAgICAgICAgICAgICAgICAvL+ehruiupOWvhueggVxyXG4gICAgICBsaW5rVGVsOiAnJywgICAgICAgICAgICAgICAgICAvL+iBlOezu+S6uueUteivnVxyXG4gICAgICB2ZXJpZnlDb2RlOiAnJywgICAgICAgICAgICAgICAvL+mqjOivgeeggVxyXG4gICAgfSxcclxuICAgIGpnRm9ybVJycm9yOnsgIC8v5py65p6E6aqM6K+BXHJcbiAgICAgIHNoeHlDb2RlRXJyb3I6ICcnLCAgICAgICAgICAgIC8v57uf5LiA56S+5Lya5L+h55So5Luj56CBXHJcbiAgICAgIHBhc3N3b3JkRXJyb3I6ICcnLCAgICAgICAgICAgIC8v5a+G56CBXHJcbiAgICAgIHRydWV3b3JkRXJyb3I6ICcnLCAgICAgICAgICAgIC8v56Gu6K6k5a+G56CBXHJcbiAgICAgIGxpbmtUZWxFcnJvcjogJycsICAgICAgICAgICAgIC8v6IGU57O75Lq655S16K+dXHJcbiAgICAgIHZlcmlmeUNvZGVFcnJvcjogJycsICAgICAgICAgIC8v6aqM6K+B56CBXHJcbiAgICB9LFxyXG4gICAgamdWZXJpZmljYXRpb246IGZhbHNlLCAgICAvL+mqjOivgeWIpOaWrVxyXG5cclxuXHJcbiAgICAvL+S4quS6uumqjOivgVxyXG4gICAgZ3JGb3JtRGF0ZTp7ICAvL+acuuaehOihqOWNlVxyXG4gICAgICBpZDogJycsICAgICAgICAgICAgICAgICAgICAgICAgLy/nlKjmiLdpZFxyXG4gICAgICBjYXJkVHlwZUlkOiAnJywgICAgICAgICAgICAgICAgLy/or4Hku7bnsbvlnotcclxuICAgICAgY2FyZE51bTogJycsICAgICAgICAgICAgICAgICAgIC8v6K+B5Lu25Y+356CBXHJcbiAgICAgIHBob25lTnVtOiAnJywgICAgICAgICAgICAgICAgICAvL+iBlOezu+eUteivnVxyXG4gICAgICB2ZXJpZnlDb2RlOiAnJywgICAgICAgICAgICAgICAgLy/pqozor4HnoIFcclxuICAgICAgcGFzc3dvcmQ6ICcnLCAgICAgICAgICAgICAgICAgIC8v5a+G56CBXHJcbiAgICAgIHRydWV3b3JkOiAnJywgICAgICAgICAgICAgICAgICAvL+ehruiupOWvhueggVxyXG4gICAgfSxcclxuICAgIGdyRm9ybVJycm9yOnsgIC8v5py65p6E6aqM6K+BXHJcbiAgICAgIGNhcmRUeXBlSWRScnJvcjogJycsICAgICAgICAgICAvL+ivgeS7tuexu+Wei1xyXG4gICAgICBjYXJkTnVtUnJyb3I6ICcnLCAgICAgICAgICAgICAgLy/or4Hku7blj7fnoIFcclxuICAgICAgcGhvbmVOdW1FcnJvcjogJycsICAgICAgICAgICAgIC8v6IGU57O755S16K+dXHJcbiAgICAgIHZlcmlmeUNvZGVFcnJvcjogJycsICAgICAgICAgICAvL+mqjOivgeeggVxyXG4gICAgICBwYXNzd29yZEVycm9yOiAnJywgICAgICAgICAgICAgLy/lr4bnoIFcclxuICAgICAgdHJ1ZXdvcmRFcnJvcjogJycsICAgICAgICAgICAgIC8v56Gu6K6k5a+G56CBXHJcbiAgICB9LFxyXG4gICAgZ3JWZXJpZmljYXRpb246IGZhbHNlLCAgICAvL+mqjOivgeWIpOaWrVxyXG4gIH0sXHJcbiAgXHJcbiAgb25TaGFyZUFwcE1lc3NhZ2U6KHJlczphbnkpOmFueT0+IHsgIC8v5Y+R6YCB57uZ5pyL5Y+LXHJcbiAgICBpZiAocmVzLmZyb20gPT09ICdidXR0b24nKSB7XHJcbiAgICAgIC8vIOadpeiHqumhtemdouWGhei9rOWPkeaMiemSrlxyXG4gICAgICBjb25zb2xlLmxvZyhyZXMudGFyZ2V0KTtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRpdGxlOiAn6Z2S5bKb5Lq65omN5Yib5paw5Yib5Lia5bmz5Y+w5Zyw5Zu+JyxcclxuICAgICAgcGF0aDogJy9wYWdlcy9ob21lL2hvbWUnLFxyXG4gICAgICBpbWFnZVVybDogJydcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBvblNoYXJlVGltZWxpbmU6KCk6YW55PT4geyAgLy/liIbkuqtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRpdGxlOiAn6Z2S5bKb5Lq65omN5Yib5paw5Yib5Lia5bmz5Y+w5Zyw5Zu+JyxcclxuICAgICAgcXVlcnk6IHt9LFxyXG4gICAgICBpbWFnZVVybDogJydcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBvblRhYkNoYW5nZSgpOnZvaWR7ICAvL3RhYuWIh+aNouinpuWPkVxyXG4gICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyNnckNhcmRUeXBlJykudG9nZ2xlKGZhbHNlKTsgICAgICAgIC8v5Liq5Lq66K+B5Lu257G75Z6LXHJcbiAgfSxcclxuXHJcbiAgZ2V0Y2FyZExpc3QoKTp2b2lkeyAgLy/ojrflj5bor4Hku7bnsbvlnotcclxuICAgIGh0dHBzLnJlcXVlc3QoYXBpLnN1Ym1lbnVEaWMgKyAnP21vaWQ9MycsIG51bGwsICdHRVQnKVxyXG4gICAgLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgbGV0IGxpc3Q6YW55ID0gcmVzLnZhbC5tYXAoKGl0ZW06YW55KTphbnk9PntcclxuICAgICAgICBpZihpdGVtLmRpY05hbWUgPT0gJ+Wxheawkei6q+S7veivge+8iOaIt+WPo+ewv++8iScpe1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgW1wiZ3JGb3JtUnJyb3IuY2FyZFR5cGVJZFJycm9yXCJdOiAnJyxcclxuICAgICAgICAgICAgW1wiZ3JGb3JtRGF0ZS5jYXJkVHlwZUlkXCJdOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICBnclZlcmlmaWNhdGlvbjogdHJ1ZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHRleHQ6IGl0ZW0uZGljTmFtZSxcclxuICAgICAgICAgIHZhbHVlOiBpdGVtLmlkXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGNhcmRMaXN0OiBsaXN0XHJcbiAgICAgIH0pXHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgLy/mnLrmnoTms6jlhoxcclxuICBqZ1NoeHlDb2RlSW5wdXQocmVzOmFueSk6dm9pZHsgIC8v57uf5LiA56S+5Lya5L+h55So5Luj56CBXHJcbiAgICBsZXQgcmVnOmFueSA9IC9bMS05XVxcZHsxNX0vO1xyXG4gICAgbGV0IHN0cjpCb29sZWFuID0gcmVnLnRlc3QocmVzLmRldGFpbC52YWx1ZSk7XHJcbiAgICBpZihyZXMuZGV0YWlsLnZhbHVlKXtcclxuICAgICAgaWYoc3RyKXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgW1wiamdGb3JtUnJyb3Iuc2h4eUNvZGVFcnJvclwiXTogJycsXHJcbiAgICAgICAgICBbXCJqZ0Zvcm1EYXRlLnNoeHlDb2RlXCJdOiByZXMuZGV0YWlsLnZhbHVlLFxyXG4gICAgICAgICAgamdWZXJpZmljYXRpb246IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuZ2V0SmdMaW5rVGVsKCk7ICAvL+iOt+WPluacuuaehOiBlOezu+eUteivnVxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgW1wiamdGb3JtUnJyb3Iuc2h4eUNvZGVFcnJvclwiXTogJ+ivt+i+k+WFpeato+ehrue7n+S4gOekvuS8muS/oeeUqOS7o+eggScsXHJcbiAgICAgICAgICBbXCJqZ0Zvcm1EYXRlLnNoeHlDb2RlXCJdOiByZXMuZGV0YWlsLnZhbHVlLFxyXG4gICAgICAgICAgamdWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiamdGb3JtUnJyb3Iuc2h4eUNvZGVFcnJvclwiXTogJycsXHJcbiAgICAgICAgW1wiamdGb3JtRGF0ZS5zaHh5Q29kZVwiXTogcmVzLmRldGFpbC52YWx1ZSxcclxuICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBnZXRKZ0xpbmtUZWwoKTp2b2lkeyAgLy/ojrflj5bmnLrmnoTogZTns7vnlLXor51cclxuICAgIGh0dHBzLnJlcXVlc3QoYXBpLmdldFVzZXIgKyBcIj9hY2NvdW50PVwiICsgdGhpcy5kYXRhLmpnRm9ybURhdGUuc2h4eUNvZGUsIG51bGwsICdnZXQnKVxyXG4gICAgLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgICBsZXQgbGlua1RlbDphbnkgPSByZXMudmFsLnBob25lTnVtLnNwbGl0KCcnKTtcclxuICAgICAgICBsaW5rVGVsLnNwbGljZSgzLDQsXCIqKioqXCIpO1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBbXCJqZ0Zvcm1EYXRlLmlkXCJdOiByZXMudmFsLmlkLFxyXG4gICAgICAgICAgW1wiamdGb3JtRGF0ZS5saW5rVGVsXCJdOiByZXMudmFsLnBob25lTnVtLFxyXG4gICAgICAgICAgamdMaW5rOiBsaW5rVGVsLmpvaW4oXCJcIilcclxuICAgICAgICB9KVxyXG4gICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJqZ0Zvcm1EYXRlLmlkXCJdOiAnJyxcclxuICAgICAgICBbXCJqZ0Zvcm1EYXRlLmxpbmtUZWxcIl06ICcnLFxyXG4gICAgICAgIGpnTGluazogJydcclxuICAgICAgfSlcclxuICAgICAgVG9hc3QoZXJyKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgXHJcbiAgamdQYXNzd29yZElucHV0KHJlczphbnkpOnZvaWR7ICAvL+WvhueggVxyXG4gICAgbGV0IHJlZzphbnkgPSAvKD89LiooW2EtekEtWl0uKikpKD89LipbMC05XS4qKVthLXpBLVowLTktKi8rLn4hQCMkJV4mKigpXXs2LDIwfSQvO1xyXG4gICAgbGV0IHN0cjpCb29sZWFuID0gcmVnLnRlc3QocmVzLmRldGFpbC52YWx1ZSk7XHJcbiAgICBpZihyZXMuZGV0YWlsLnZhbHVlKXtcclxuICAgICAgaWYoc3RyKXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgW1wiamdGb3JtUnJyb3IucGFzc3dvcmRFcnJvclwiXTogJycsXHJcbiAgICAgICAgICBbXCJqZ0Zvcm1EYXRlLnBhc3N3b3JkXCJdOiByZXMuZGV0YWlsLnZhbHVlLFxyXG4gICAgICAgICAgamdWZXJpZmljYXRpb246IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgW1wiamdGb3JtUnJyb3IucGFzc3dvcmRFcnJvclwiXTogJ+aVsOWtl+OAgeiLseaWh+OAgeWtl+espuS4pOenjeWPiuS7peS4ijYtMjDkvY0nLFxyXG4gICAgICAgICAgW1wiamdGb3JtRGF0ZS5wYXNzd29yZFwiXTogcmVzLmRldGFpbC52YWx1ZSxcclxuICAgICAgICAgIGpnVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLnBhc3N3b3JkRXJyb3JcIl06ICcnLFxyXG4gICAgICAgIFtcImpnRm9ybURhdGUucGFzc3dvcmRcIl06IHJlcy5kZXRhaWwudmFsdWUsXHJcbiAgICAgICAgamdWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICBqZ1JlcGVhdFBhc3N3b3JkSW5wdXQocmVzOmFueSk6dm9pZHsgIC8v56Gu6K6k5a+G56CBXHJcbiAgICBpZihyZXMuZGV0YWlsLnZhbHVlKXtcclxuICAgICAgaWYocmVzLmRldGFpbC52YWx1ZSAhPSB0aGlzLmRhdGEuamdGb3JtRGF0ZS5wYXNzd29yZCl7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIFtcImpnRm9ybVJycm9yLnRydWV3b3JkRXJyb3JcIl06ICfkuKTmrKHovpPlhaXnmoTlr4bnoIHkuI3kuIDoh7QnLFxyXG4gICAgICAgICAgW1wiamdGb3JtRGF0ZS50cnVld29yZFwiXTogcmVzLmRldGFpbC52YWx1ZSxcclxuICAgICAgICAgIGpnVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBbXCJqZ0Zvcm1ScnJvci50cnVld29yZEVycm9yXCJdOiAnJyxcclxuICAgICAgICAgIFtcImpnRm9ybURhdGUudHJ1ZXdvcmRcIl06IHJlcy5kZXRhaWwudmFsdWUsXHJcbiAgICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLnRydWV3b3JkRXJyb3JcIl06ICcnLFxyXG4gICAgICAgIFtcImpnRm9ybURhdGUudHJ1ZXdvcmRcIl06IHJlcy5kZXRhaWwudmFsdWUsXHJcbiAgICAgICAgamdWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgamdMaW5rVGVsKHJlczphbnkpOnZvaWR7ICAvL+iBlOezu+eUteivnVxyXG4gICAgbGV0IHJlZzphbnkgPSAvXigoMVswLTldezEwfSl8KCgoKFswLTldezN9LSk/WzAtOV17OH0pfCgoWzAtOV17NH0tKT9bMC05XXs3fSkpKC1bMC05XXsxLDR9KT8pKSQvO1xyXG4gICAgbGV0IHN0cjpCb29sZWFuID0gcmVnLnRlc3QocmVzLmRldGFpbC52YWx1ZSk7XHJcbiAgICBpZihyZXMuZGV0YWlsLnZhbHVlKXtcclxuICAgICAgaWYoc3RyKXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgW1wiamdGb3JtUnJyb3IubGlua1RlbEVycm9yXCJdOiAnJyxcclxuICAgICAgICAgIFtcImpnRm9ybURhdGUubGlua1RlbFwiXTogcmVzLmRldGFpbC52YWx1ZSxcclxuICAgICAgICAgIGpnVmVyaWZpY2F0aW9uOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIFtcImpnRm9ybVJycm9yLmxpbmtUZWxFcnJvclwiXTogJ+ivt+iOt+WPluato+ehrueahOiBlOezu+eUteivnScsXHJcbiAgICAgICAgICBbXCJqZ0Zvcm1EYXRlLmxpbmtUZWxcIl06IHJlcy5kZXRhaWwudmFsdWUsXHJcbiAgICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJqZ0Zvcm1ScnJvci5saW5rVGVsRXJyb3JcIl06ICcnLFxyXG4gICAgICAgIFtcImpnRm9ybURhdGUubGlua1RlbFwiXTogcmVzLmRldGFpbC52YWx1ZSxcclxuICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIGpnVmVyaWZ5Q29kZShyZXM6YW55KTp2b2lkeyAgLy/pqozor4HnoIFcclxuICAgIGlmKHJlcy5kZXRhaWwudmFsdWUpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLnZlcmlmeUNvZGVFcnJvclwiXTogJycsXHJcbiAgICAgICAgW1wiamdGb3JtRGF0ZS52ZXJpZnlDb2RlXCJdOiByZXMuZGV0YWlsLnZhbHVlLFxyXG4gICAgICAgIGpnVmVyaWZpY2F0aW9uOiB0cnVlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcblxyXG4gIGpnU3VibWl0Rm4oKTp2b2lkeyAgLy/mnLrmnoTms6jlhoxcclxuICAgIC8v6K+36L6T5YWl57uf5LiA56S+5Lya5L+h55So5Luj56CBXHJcbiAgICBpZih0aGlzLmRhdGEuamdGb3JtRGF0ZS5zaHh5Q29kZSA9PSAnJyl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiamdGb3JtUnJyb3Iuc2h4eUNvZGVFcnJvclwiXTon6K+36L6T5YWl57uf5LiA56S+5Lya5L+h55So5Luj56CBJyxcclxuICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIC8v5a+G56CBXHJcbiAgICBpZih0aGlzLmRhdGEuamdGb3JtRGF0ZS5wYXNzd29yZCA9PSAnJyl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiamdGb3JtUnJyb3IucGFzc3dvcmRFcnJvclwiXTon6K+36L6T5YWl5a+G56CBJyxcclxuICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIC8v56Gu6K6k5a+G56CBXHJcbiAgICBpZih0aGlzLmRhdGEuamdGb3JtRGF0ZS50cnVld29yZCA9PSAnJyl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiamdGb3JtUnJyb3IudHJ1ZXdvcmRFcnJvclwiXTon6K+35YaN5qyh56Gu6K6k5a+G56CBJyxcclxuICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvL+iBlOezu+eUteivnVxyXG4gICAgaWYodGhpcy5kYXRhLmpnRm9ybURhdGUubGlua1RlbCA9PSAnJyl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiamdGb3JtUnJyb3IubGlua1RlbEVycm9yXCJdOifor7floavlhpnnu5/kuIDnpL7kvJrkv6HnlKjku6PnoIHojrflj5YnLFxyXG4gICAgICAgIGpnVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy/pqozor4HnoIFcclxuICAgIGlmKHRoaXMuZGF0YS5qZ0Zvcm1EYXRlLnZlcmlmeUNvZGUgPT0gJycpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLnZlcmlmeUNvZGVFcnJvclwiXTon6K+36L6T5YWl6aqM6K+B56CBJyxcclxuICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvL+WujOaIkFxyXG4gICAgaWYodGhpcy5kYXRhLmpnVmVyaWZpY2F0aW9uID09IGZhbHNlKXtcclxuICAgICAgVG9hc3QoJ+ivt+aKiuW/heWhq+S/oeaBr+Whq+WGmeWujOaVtO+8gScpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIGxldCB1cmw6c3RyaW5nID0gYXBpLnVwZGF0ZVBhc3MgKyAnP2lkPScgKyB0aGlzLmRhdGEuamdGb3JtRGF0ZS5pZCArICcmc2h4eUNvZGU9JyArIHRoaXMuZGF0YS5qZ0Zvcm1EYXRlLnNoeHlDb2RlICsgJyZwaG9uZU51bT0nICsgdGhpcy5kYXRhLmpnRm9ybURhdGUubGlua1RlbCArICcmdmVyaWZ5Q29kZT0nICsgdGhpcy5kYXRhLmpnRm9ybURhdGUudmVyaWZ5Q29kZSArICcmcGFzc3dvcmQ9JyArIHRoaXMuZGF0YS5qZ0Zvcm1EYXRlLnBhc3N3b3JkO1xyXG4gICAgICBodHRwcy5yZXF1ZXN0KHVybCwgbnVsbCwgJ1BPU1QnKS50aGVuKCgpOnZvaWQ9PntcclxuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgIHVybDogJy4uL2xvZ2luRm9ybS9sb2dpbkZvcm0nXHJcbiAgICAgICAgfSlcclxuICAgICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgICBUb2FzdChlcnIpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBqZ1ZlcmlmeUNvZGVGbigpOnZvaWR7ICAvL+iOt+WPlumqjOivgeeggVxyXG4gICAgaWYodGhpcy5kYXRhLmpnRm9ybURhdGUubGlua1RlbCAhPSAnJyl7XHJcbiAgICAgIGh0dHBzLnJlcXVlc3QoYXBpLmdldENvZGUgKyBcIj90ZWxlcGhvbmU9XCIgKyB0aGlzLmRhdGEuamdGb3JtRGF0ZS5saW5rVGVsLCBudWxsLCAnR0VUJylcclxuICAgICAgLnRoZW4oKCk6dm9pZD0+e1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBqZ1ZlcmlmeUNvZGVUaW1lOiAnNjAnLFxyXG4gICAgICAgICAgamdEaXNhYmxlZDogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbGV0IHNldFRpbWU6YW55ID0gc2V0SW50ZXJ2YWwoKCk6dm9pZD0+e1xyXG4gICAgICAgICAgbGV0IHN0cjphbnkgPSBwYXJzZUludCh0aGlzLmRhdGEuamdWZXJpZnlDb2RlVGltZSkgLSAxO1xyXG4gICAgICAgICAgaWYoc3RyID4gMCl7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgamdWZXJpZnlDb2RlVGltZTogc3RyXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChzZXRUaW1lKTtcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICBqZ1ZlcmlmeUNvZGVUaW1lOiAn6I635Y+W6aqM6K+B56CBJyxcclxuICAgICAgICAgICAgICBqZ0Rpc2FibGVkOiBmYWxzZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sMTAwMClcclxuICAgICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgICBUb2FzdChlcnIpO1xyXG4gICAgICB9KTtcclxuICAgIH1lbHNle1xyXG4gICAgICBUb2FzdCgn6K+35YWI5aGr5YaZ6IGU57O755S16K+d77yBJyk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcblxyXG4gIC8v5Liq5Lq65rOo5YaMXHJcbiAgZ2V0R3JMaW5rVGVsKCk6dm9pZHsgIC8v6I635Y+W5py65p6E6IGU57O755S16K+dXHJcbiAgICBodHRwcy5yZXF1ZXN0KGFwaS5nZXRVc2VyICsgXCI/YWNjb3VudD1cIiArIHRoaXMuZGF0YS5nckZvcm1EYXRlLmNhcmROdW0sIG51bGwsICdnZXQnKVxyXG4gICAgLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgICBsZXQgbGlua1RlbDphbnkgPSByZXMudmFsLnBob25lTnVtLnNwbGl0KCcnKTtcclxuICAgICAgICBsaW5rVGVsLnNwbGljZSgzLDQsXCIqKioqXCIpO1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBbXCJnckZvcm1EYXRlLmlkXCJdOiByZXMudmFsLmlkLFxyXG4gICAgICAgICAgW1wiZ3JGb3JtRGF0ZS5waG9uZU51bVwiXTogcmVzLnZhbC5waG9uZU51bSxcclxuICAgICAgICAgIGdyTGluazogbGlua1RlbC5qb2luKFwiXCIpXHJcbiAgICAgICAgfSlcclxuICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiZ3JGb3JtRGF0ZS5pZFwiXTogJycsXHJcbiAgICAgICAgW1wiZ3JGb3JtRGF0ZS5waG9uZU51bVwiXTogJycsXHJcbiAgICAgICAgZ3JMaW5rOiAnJ1xyXG4gICAgICB9KVxyXG4gICAgICBUb2FzdChlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgZ3JDYXJkVHlwZUZuKHZhbHVlOmFueSk6dm9pZHsgIC8v6K+B5Lu257G75Z6LXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBbXCJnckZvcm1ScnJvci5jYXJkVHlwZUlkUnJyb3JcIl06ICcnLFxyXG4gICAgICBbXCJnckZvcm1EYXRlLmNhcmRUeXBlSWRcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgZ3JWZXJpZmljYXRpb246IHRydWVcclxuICAgIH0pXHJcbiAgfSxcclxuICBnckNhcmROdW0ocmVzOmFueSk6dm9pZHsgIC8v6K+B5Lu25Y+356CBXHJcbiAgICBpZihyZXMuZGV0YWlsLnZhbHVlKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJnckZvcm1ScnJvci5jYXJkTnVtUnJyb3JcIl06ICcnLFxyXG4gICAgICAgIFtcImdyRm9ybURhdGUuY2FyZE51bVwiXTogcmVzLmRldGFpbC52YWx1ZSxcclxuICAgICAgICBnclZlcmlmaWNhdGlvbjogdHJ1ZVxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLmdldEdyTGlua1RlbCgpOyAgLy/ojrflj5bkuKrkurrogZTns7vnlLXor51cclxuICAgIH1cclxuICB9LFxyXG4gIGdyUGFzc3dvcmRJbnB1dChyZXM6YW55KTp2b2lkeyAgLy/lr4bnoIFcclxuICAgIGxldCByZWc6YW55ID0gLyg/PS4qKFthLXpBLVpdLiopKSg/PS4qWzAtOV0uKilbYS16QS1aMC05LSovKy5+IUAjJCVeJiooKV17NiwyMH0kLztcclxuICAgIGxldCBzdHI6Qm9vbGVhbiA9IHJlZy50ZXN0KHJlcy5kZXRhaWwudmFsdWUpO1xyXG4gICAgaWYocmVzLmRldGFpbC52YWx1ZSl7XHJcbiAgICAgIGlmKHN0cil7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIFtcImdyRm9ybVJycm9yLnBhc3N3b3JkRXJyb3JcIl06ICcnLFxyXG4gICAgICAgICAgW1wiZ3JGb3JtRGF0ZS5wYXNzd29yZFwiXTogcmVzLmRldGFpbC52YWx1ZSxcclxuICAgICAgICAgIGdyVmVyaWZpY2F0aW9uOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIFtcImdyRm9ybVJycm9yLnBhc3N3b3JkRXJyb3JcIl06ICfmlbDlrZfjgIHoi7HmlofjgIHlrZfnrKbkuKTnp43lj4rku6XkuIo2LTIw5L2NJyxcclxuICAgICAgICAgIFtcImdyRm9ybURhdGUucGFzc3dvcmRcIl06IHJlcy5kZXRhaWwudmFsdWUsXHJcbiAgICAgICAgICBnclZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJnckZvcm1ScnJvci5wYXNzd29yZEVycm9yXCJdOiAnJyxcclxuICAgICAgICBbXCJnckZvcm1EYXRlLnBhc3N3b3JkXCJdOiByZXMuZGV0YWlsLnZhbHVlLFxyXG4gICAgICAgIGdyVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZ3JSZXBlYXRQYXNzd29yZElucHV0KHJlczphbnkpOnZvaWR7ICAvL+ehruiupOWvhueggVxyXG4gICAgaWYocmVzLmRldGFpbC52YWx1ZSl7XHJcbiAgICAgIGlmKHJlcy5kZXRhaWwudmFsdWUgIT0gdGhpcy5kYXRhLmdyRm9ybURhdGUucGFzc3dvcmQpe1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBbXCJnckZvcm1ScnJvci50cnVld29yZEVycm9yXCJdOiAn5Lik5qyh6L6T5YWl55qE5a+G56CB5LiN5LiA6Ie0JyxcclxuICAgICAgICAgIFtcImdyRm9ybURhdGUudHJ1ZXdvcmRcIl06IHJlcy5kZXRhaWwudmFsdWUsXHJcbiAgICAgICAgICBnclZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgW1wiZ3JGb3JtUnJyb3IudHJ1ZXdvcmRFcnJvclwiXTogJycsXHJcbiAgICAgICAgICBbXCJnckZvcm1EYXRlLnRydWV3b3JkXCJdOiByZXMuZGV0YWlsLnZhbHVlLFxyXG4gICAgICAgICAgZ3JWZXJpZmljYXRpb246IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJnckZvcm1ScnJvci50cnVld29yZEVycm9yXCJdOiAnJyxcclxuICAgICAgICBbXCJnckZvcm1EYXRlLnRydWV3b3JkXCJdOiByZXMuZGV0YWlsLnZhbHVlLFxyXG4gICAgICAgIGdyVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGdyUGhvbmVOdW0ocmVzOmFueSk6dm9pZHsgIC8v6IGU57O755S16K+dXHJcbiAgICBsZXQgcmVnOmFueSA9IC9eKCgxWzAtOV17MTB9KXwoKCgoWzAtOV17M30tKT9bMC05XXs4fSl8KChbMC05XXs0fS0pP1swLTldezd9KSkoLVswLTldezEsNH0pPykpJC87XHJcbiAgICBsZXQgc3RyOkJvb2xlYW4gPSByZWcudGVzdChyZXMuZGV0YWlsLnZhbHVlKTtcclxuICAgIGlmKHJlcy5kZXRhaWwudmFsdWUpe1xyXG4gICAgICBpZihzdHIpe1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBbXCJnckZvcm1ScnJvci5waG9uZU51bUVycm9yXCJdOiAnJyxcclxuICAgICAgICAgIFtcImdyRm9ybURhdGUucGhvbmVOdW1cIl06IHJlcy5kZXRhaWwudmFsdWUsXHJcbiAgICAgICAgICBnclZlcmlmaWNhdGlvbjogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBbXCJnckZvcm1ScnJvci5waG9uZU51bUVycm9yXCJdOiAn6K+36L6T5YWl5q2j56Gu55qE6IGU57O755S16K+dJyxcclxuICAgICAgICAgIFtcImdyRm9ybURhdGUucGhvbmVOdW1cIl06IHJlcy5kZXRhaWwudmFsdWUsXHJcbiAgICAgICAgICBnclZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJnckZvcm1ScnJvci5waG9uZU51bUVycm9yXCJdOiAnJyxcclxuICAgICAgICBbXCJnckZvcm1EYXRlLnBob25lTnVtXCJdOiByZXMuZGV0YWlsLnZhbHVlLFxyXG4gICAgICAgIGdyVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZ3JWZXJpZnlDb2RlKHJlczphbnkpOnZvaWR7ICAvL+mqjOivgeeggVxyXG4gICAgaWYocmVzLmRldGFpbC52YWx1ZSl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiZ3JGb3JtUnJyb3IudmVyaWZ5Q29kZUVycm9yXCJdOiAnJyxcclxuICAgICAgICBbXCJnckZvcm1EYXRlLnZlcmlmeUNvZGVcIl06IHJlcy5kZXRhaWwudmFsdWUsXHJcbiAgICAgICAgZ3JWZXJpZmljYXRpb246IHRydWVcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIGdyVmVyaWZ5Q29kZUZuKCk6dm9pZHsgIC8v6I635Y+W6aqM6K+B56CBXHJcbiAgICBpZih0aGlzLmRhdGEuZ3JGb3JtRGF0ZS5waG9uZU51bSAhPSAnJyl7XHJcbiAgICAgIGh0dHBzLnJlcXVlc3QoYXBpLmdldENvZGUgKyBcIj90ZWxlcGhvbmU9XCIgKyB0aGlzLmRhdGEuZ3JGb3JtRGF0ZS5waG9uZU51bSwgbnVsbCwgJ0dFVCcpXHJcbiAgICAgIC50aGVuKCgpOnZvaWQ9PntcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgZ3JWZXJpZnlDb2RlVGltZTogJzYwJyxcclxuICAgICAgICAgIGdyRGlzYWJsZWQ6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICAgIGxldCBzZXRUaW1lOmFueSA9IHNldEludGVydmFsKCgpOnZvaWQ9PntcclxuICAgICAgICAgIGxldCBzdHI6YW55ID0gcGFyc2VJbnQodGhpcy5kYXRhLmdyVmVyaWZ5Q29kZVRpbWUpIC0gMTtcclxuICAgICAgICAgIGlmKHN0ciA+IDApe1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgIGdyVmVyaWZ5Q29kZVRpbWU6IHN0clxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoc2V0VGltZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgZ3JWZXJpZnlDb2RlVGltZTogJ+iOt+WPlumqjOivgeeggScsXHJcbiAgICAgICAgICAgICAgZ3JEaXNhYmxlZDogZmFsc2VcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LDEwMDApXHJcbiAgICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgICAgVG9hc3QoZXJyKTtcclxuICAgICAgfSk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgVG9hc3QoJ+ivt+WFiOWhq+WGmeiBlOezu+eUteivne+8gScpO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIFxyXG4gIGdyU3VibWl0Rm4oKTp2b2lkeyAgLy/kuKrkurrms6jlhoxcclxuICAgIC8v6K+B5Lu257G75Z6LXHJcbiAgICBpZih0aGlzLmRhdGEuZ3JGb3JtRGF0ZS5jYXJkVHlwZUlkID09ICcnKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJnckZvcm1ScnJvci5jYXJkVHlwZUlkUnJyb3JcIl06ICfor7fpgInmi6nljZXkvY3nsbvlnosnLFxyXG4gICAgICAgIGdyVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy/or4Hku7blj7fnoIFcclxuICAgIGlmKHRoaXMuZGF0YS5nckZvcm1EYXRlLmNhcmROdW0gPT0gJycpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImdyRm9ybVJycm9yLmNhcmROdW1ScnJvclwiXTogJ+ivt+mAieaLqeivgeS7tuWPt+eggScsXHJcbiAgICAgICAgZ3JWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvL+WvhueggVxyXG4gICAgaWYodGhpcy5kYXRhLmdyRm9ybURhdGUucGFzc3dvcmQgPT0gJycpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImdyRm9ybVJycm9yLnBhc3N3b3JkRXJyb3JcIl06J+ivt+i+k+WFpeWvhueggScsXHJcbiAgICAgICAgZ3JWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvL+ehruiupOWvhueggVxyXG4gICAgaWYodGhpcy5kYXRhLmdyRm9ybURhdGUudHJ1ZXdvcmQgPT0gJycpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImdyRm9ybVJycm9yLnRydWV3b3JkRXJyb3JcIl06J+ivt+WGjeasoeehruiupOWvhueggScsXHJcbiAgICAgICAgZ3JWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy/ogZTns7vnlLXor51cclxuICAgIGlmKHRoaXMuZGF0YS5nckZvcm1EYXRlLnBob25lTnVtID09ICcnKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJnckZvcm1ScnJvci5waG9uZU51bUVycm9yXCJdOifor7fovpPlhaXogZTns7vnlLXor50nLFxyXG4gICAgICAgIGdyVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgIC8v6aqM6K+B56CBXHJcbiAgICBpZih0aGlzLmRhdGEuZ3JGb3JtRGF0ZS52ZXJpZnlDb2RlID09ICcnKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJnckZvcm1ScnJvci52ZXJpZnlDb2RlRXJyb3JcIl06J+ivt+i+k+WFpemqjOivgeeggScsXHJcbiAgICAgICAgZ3JWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvL+S4quS6uuWujOaIkFxyXG4gICAgaWYodGhpcy5kYXRhLmdyVmVyaWZpY2F0aW9uID09IGZhbHNlKXtcclxuICAgICAgVG9hc3QoJ+ivt+aKiuW/heWhq+S/oeaBr+Whq+WGmeWujOaVtO+8gScpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIGxldCB1cmw6c3RyaW5nID0gYXBpLnVwZGF0ZVBhc3MgKyAnP2lkPScgKyB0aGlzLmRhdGEuZ3JGb3JtRGF0ZS5pZCArICcmY2FyZFR5cGVJZD0nICsgdGhpcy5kYXRhLmdyRm9ybURhdGUuY2FyZFR5cGVJZCArICcmY2FyZE51bT0nICsgdGhpcy5kYXRhLmdyRm9ybURhdGUuY2FyZE51bSArICcmcGhvbmVOdW09JyArIHRoaXMuZGF0YS5nckZvcm1EYXRlLnBob25lTnVtICsgJyZ2ZXJpZnlDb2RlPScgKyB0aGlzLmRhdGEuZ3JGb3JtRGF0ZS52ZXJpZnlDb2RlICsgJyZwYXNzd29yZD0nICsgdGhpcy5kYXRhLmdyRm9ybURhdGUucGFzc3dvcmQ7XHJcbiAgICAgIGh0dHBzLnJlcXVlc3QodXJsLCBudWxsLCAnUE9TVCcpLnRoZW4oKCk6dm9pZD0+e1xyXG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgdXJsOiAnLi4vbG9naW5Gb3JtL2xvZ2luRm9ybSdcclxuICAgICAgICB9KVxyXG4gICAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICAgIFRvYXN0KGVycik7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG5cclxuICAvL+mhtemdouWIneWni+WMllxyXG4gIG9uTG9hZCgpe1xyXG4gICAgLy/pobXpnaLmoIfpophcclxuICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7ICAgICBcclxuICAgICAgdGl0bGU6IFwi5om+5Zue5a+G56CBXCJcclxuICAgIH0pO1xyXG4gICAgLy/or4Hku7bnsbvlnotcclxuICAgIHRoaXMuZ2V0Y2FyZExpc3QoKTtcclxuICB9LFxyXG4gIC8v6aG16Z2i5riy5p+T5a6M5oiQXHJcbiAgb25SZWFkeSgpe30sXHJcblxyXG4gIC8v6aG16Z2i5pi+56S6XHJcbiAgb25TaG93KCl7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBbXCJqZ0Zvcm1EYXRlLnNoeHlDb2RlXCJdOicnLCAgLy/nu5/kuIDnpL7kvJrkv6HnlKjku6PnoIFcclxuICAgICAgW1wiamdGb3JtRGF0ZS5wYXNzd29yZFwiXTonJywgIC8v5a+G56CBXHJcbiAgICAgIFtcImpnRm9ybURhdGUudHJ1ZXdvcmRcIl06JycsICAvL+ehruiupOWvhueggVxyXG4gICAgICBbXCJqZ0Zvcm1EYXRlLmxpbmtUZWxcIl06JycsICAvL+iBlOezu+S6uueUteivnVxyXG4gICAgICBbXCJqZ0Zvcm1EYXRlLnZlcmlmeUNvZGVcIl06JycsICAvL+mqjOivgeeggVxyXG5cclxuICAgICAgW1wiZ3JGb3JtRGF0ZS5jYXJkVHlwZUlkXCJdOicnLCAgLy/or4Hku7bnsbvlnotcclxuICAgICAgW1wiZ3JGb3JtRGF0ZS5jYXJkTnVtXCJdOicnLCAgLy/or4Hku7blj7fnoIFcclxuICAgICAgW1wiZ3JGb3JtRGF0ZS5waG9uZU51bVwiXTonJywgIC8v6IGU57O755S16K+dXHJcbiAgICAgIFtcImdyRm9ybURhdGUudmVyaWZ5Q29kZVwiXTonJywgIC8v6aqM6K+B56CBXHJcbiAgICAgIFtcImdyRm9ybURhdGUucGFzc3dvcmRcIl06JycsICAvL+WvhueggVxyXG4gICAgICBbXCJnckZvcm1EYXRlLnRydWV3b3JkXCJdOicnLCAgLy/noa7orqTlr4bnoIFcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgLy/pobXpnaLpmpDol49cclxuICBvbkhpZGUoKXt9LFxyXG5cclxuICAvL+mhtemdouWFs+mXrVxyXG4gIG9uVW5sb2FkKCl7fVxyXG59KVxyXG5leHBvcnQge307XHJcbiJdfQ==