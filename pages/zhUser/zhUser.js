"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dialog = require('../../miniprogram_npm/@vant/weapp/dialog/dialog.js').default;
var Toast = require('../../miniprogram_npm/@vant/weapp/toast/toast.js').default;
var api = getApp().globalData;
var https = require('../../utils/myRequest.js');
Page({
    data: {
        tabActive: 'jg',
        jgLink: '',
        jgVerifyCodeTime: '获取验证码',
        jgDisabled: false,
        jgFormDate: {
            id: '',
            shxyCode: '',
            linkTel: '',
            verifyCode: '',
        },
        jgFormRrror: {
            shxyCodeError: '',
            linkTelError: '',
            verifyCodeError: '',
        },
        jgVerification: false,
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
    jgShxyCodeInput: function (res) {
        var _a, _b;
        if (res.detail.value) {
            this.setData((_a = {},
                _a["jgFormRrror.shxyCodeError"] = '',
                _a["jgFormDate.shxyCode"] = res.detail.value,
                _a.jgVerification = true,
                _a));
            this.getJgLinkTel();
        }
        else {
            this.setData((_b = {},
                _b["jgFormRrror.shxyCodeError"] = '',
                _b["jgFormDate.shxyCode"] = res.detail.value,
                _b.jgVerification = false,
                _b));
        }
    },
    getJgLinkTel: function () {
        var _this = this;
        https.request(api.getUser + "?qyName=" + this.data.jgFormDate.shxyCode, null, 'get')
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
        var _a, _b, _c;
        var _this = this;
        if (this.data.jgFormDate.shxyCode == '') {
            this.setData((_a = {},
                _a["jgFormRrror.shxyCodeError"] = '请输入单位名称',
                _a.jgVerification = false,
                _a));
        }
        if (this.data.jgFormDate.linkTel == '') {
            this.setData((_b = {},
                _b["jgFormRrror.linkTelError"] = '请填写单位名称获取',
                _b.jgVerification = false,
                _b));
        }
        if (this.data.jgFormDate.verifyCode == '') {
            this.setData((_c = {},
                _c["jgFormRrror.verifyCodeError"] = '请输入验证码',
                _c.jgVerification = false,
                _c));
        }
        if (this.data.jgVerification == false) {
            Toast('请把必填信息填写完整！');
        }
        else {
            var url = api.getAccount + '?id=' + this.data.jgFormDate.id + '&qyName=' + this.data.jgFormDate.shxyCode + '&phoneNum=' + this.data.jgFormDate.linkTel + '&verifyCode=' + this.data.jgFormDate.verifyCode;
            https.request(url, null, 'POST').then(function (res) {
                Dialog.alert({
                    title: _this.data.jgFormDate.shxyCode,
                    messageAlign: 'center',
                    message: res.val.shxyCode,
                    confirmButtonText: '去登录',
                    closeOnClickOverlay: true
                }).then(function () {
                    wx.navigateTo({
                        url: '../loginForm/loginForm'
                    });
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
    onLoad: function () {
        wx.setNavigationBarTitle({
            title: "找回账号"
        });
    },
    onReady: function () { },
    onShow: function () {
        var _a;
        this.setData((_a = {},
            _a["jgFormDate.shxyCode"] = '',
            _a["jgFormDate.linkTel"] = '',
            _a["jgFormDate.verifyCode"] = '',
            _a));
    },
    onHide: function () { },
    onUnload: function () { }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemhVc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiemhVc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLG9EQUFvRCxDQUFDLENBQUMsT0FBTyxDQUFDO0FBQ25GLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxrREFBa0QsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUNoRixJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQUUsQ0FBQyxVQUFVLENBQUM7QUFDaEMsSUFBSSxLQUFLLEdBQUksT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUM7QUFFakQsSUFBSSxDQUFDO0lBRUgsSUFBSSxFQUFFO1FBQ0osU0FBUyxFQUFFLElBQUk7UUFFZixNQUFNLEVBQUUsRUFBRTtRQUNWLGdCQUFnQixFQUFFLE9BQU87UUFDekIsVUFBVSxFQUFFLEtBQUs7UUFHakIsVUFBVSxFQUFDO1lBQ1QsRUFBRSxFQUFFLEVBQUU7WUFDTixRQUFRLEVBQUUsRUFBRTtZQUNaLE9BQU8sRUFBRSxFQUFFO1lBQ1gsVUFBVSxFQUFFLEVBQUU7U0FDZjtRQUNELFdBQVcsRUFBQztZQUNWLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGVBQWUsRUFBRSxFQUFFO1NBQ3BCO1FBQ0QsY0FBYyxFQUFFLEtBQUs7S0FDdEI7SUFFRCxpQkFBaUIsRUFBQyxVQUFDLEdBQU87UUFDeEIsSUFBSSxHQUFHLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUV6QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN6QjtRQUNELE9BQU87WUFDTCxLQUFLLEVBQUUsY0FBYztZQUNyQixJQUFJLEVBQUUsa0JBQWtCO1lBQ3hCLFFBQVEsRUFBRSxFQUFFO1NBQ2IsQ0FBQTtJQUNILENBQUM7SUFFRCxlQUFlLEVBQUM7UUFDZCxPQUFPO1lBQ0wsS0FBSyxFQUFFLGNBQWM7WUFDckIs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SUFBSSxHQUFHLEdBQU8sUUFBUSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3ZELElBQUcsR0FBRyxHQUFHLENBQUMsRUFBQzt3QkFDVCxLQUFJLENBQUMsT0FBTyxDQUFDOzRCQUNYLGdCQUFnQixFQUFFLEdBQUc7eUJBQ3RCLENBQUMsQ0FBQTtxQkFDSDt5QkFBSTt3QkFDSCxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ3ZCLEtBQUksQ0FBQyxPQUFPLENBQUM7NEJBQ1gsZ0JBQWdCLEVBQUUsT0FBTzs0QkFDekIsVUFBVSxFQUFFLEtBQUs7eUJBQ2xCLENBQUMsQ0FBQTtxQkFDSDtnQkFDSCxDQUFDLEVBQUMsSUFBSSxDQUFDLENBQUE7WUFDVCxDQUFDLEVBQUMsVUFBQyxHQUFPO2dCQUNSLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNiLENBQUMsQ0FBQyxDQUFDO1NBQ0o7YUFBSTtZQUNILEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNwQjtJQUNILENBQUM7SUFJRCxNQUFNO1FBRUosRUFBRSxDQUFDLHFCQUFxQixDQUFDO1lBQ3ZCLEtBQUssRUFBRSxNQUFNO1NBQ2QsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELE9BQU8sZ0JBQUcsQ0FBQztJQUdYLE1BQU07O1FBQ0osSUFBSSxDQUFDLE9BQU87WUFDVixHQUFDLHFCQUFxQixJQUFFLEVBQUU7WUFDMUIsR0FBQyxvQkFBb0IsSUFBRSxFQUFFO1lBQ3pCLEdBQUMsdUJBQXVCLElBQUUsRUFBRTtnQkFDNUIsQ0FBQTtJQUNKLENBQUM7SUFHRCxNQUFNLGdCQUFHLENBQUM7SUFHVixRQUFRLGdCQUFHLENBQUM7Q0FDYixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB6aFVzZXIudHNcclxubGV0IERpYWxvZyA9IHJlcXVpcmUoJy4uLy4uL21pbmlwcm9ncmFtX25wbS9AdmFudC93ZWFwcC9kaWFsb2cvZGlhbG9nLmpzJykuZGVmYXVsdDtcclxubGV0IFRvYXN0ID0gcmVxdWlyZSgnLi4vLi4vbWluaXByb2dyYW1fbnBtL0B2YW50L3dlYXBwL3RvYXN0L3RvYXN0LmpzJykuZGVmYXVsdDtcclxuY29uc3QgYXBpID0gZ2V0QXBwKCkuZ2xvYmFsRGF0YTsgIC8vIOiOt+WPluW6lOeUqOWunuS+i1xyXG5sZXQgaHR0cHMgID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvbXlSZXF1ZXN0LmpzJyk7ICAgICAvL+iOt+WPlmFqYXjmlrnms5VcclxuXHJcblBhZ2Uoe1xyXG4gIC8v6aG16Z2i5pWw5o2uXHJcbiAgZGF0YToge1xyXG4gICAgdGFiQWN0aXZlOiAnamcnLCAgICAgICAgICAgICAgICAvL+azqOWGjHRhYlxyXG5cclxuICAgIGpnTGluazogJycsICAgICAgICAgICAgICAgICAgICAgIC8v5py65p6E6IGU57O755S16K+dKuaYvuekulxyXG4gICAgamdWZXJpZnlDb2RlVGltZTogJ+iOt+WPlumqjOivgeeggScsICAvL+iOt+WPlumqjOivgeeggVxyXG4gICAgamdEaXNhYmxlZDogZmFsc2UsICAgICAgICAgICAgICAvL+mqjOivgeeggeaMiemSrueKtuaAgVxyXG5cclxuICAgIC8v5py65p6E5rOo5YaMXHJcbiAgICBqZ0Zvcm1EYXRlOnsgIC8v5py65p6E6KGo5Y2VXHJcbiAgICAgIGlkOiAnJywgICAgICAgICAgICAgICAgICAgICAgIC8v55So5oi3aWQgXHJcbiAgICAgIHNoeHlDb2RlOiAnJywgICAgICAgICAgICAgICAgIC8v57uf5LiA56S+5Lya5L+h55So5Luj56CBXHJcbiAgICAgIGxpbmtUZWw6ICcnLCAgICAgICAgICAgICAgICAgIC8v6IGU57O75Lq655S16K+dXHJcbiAgICAgIHZlcmlmeUNvZGU6ICcnLCAgICAgICAgICAgICAgIC8v6aqM6K+B56CBXHJcbiAgICB9LFxyXG4gICAgamdGb3JtUnJyb3I6eyAgLy/mnLrmnoTpqozor4FcclxuICAgICAgc2h4eUNvZGVFcnJvcjogJycsICAgICAgICAgICAgLy/nu5/kuIDnpL7kvJrkv6HnlKjku6PnoIFcclxuICAgICAgbGlua1RlbEVycm9yOiAnJywgICAgICAgICAgICAgLy/ogZTns7vkurrnlLXor51cclxuICAgICAgdmVyaWZ5Q29kZUVycm9yOiAnJywgICAgICAgICAgLy/pqozor4HnoIFcclxuICAgIH0sXHJcbiAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2UsICAgIC8v6aqM6K+B5Yik5patXHJcbiAgfSxcclxuICBcclxuICBvblNoYXJlQXBwTWVzc2FnZToocmVzOmFueSk6YW55PT4geyAgLy/lj5HpgIHnu5nmnIvlj4tcclxuICAgIGlmIChyZXMuZnJvbSA9PT0gJ2J1dHRvbicpIHtcclxuICAgICAgLy8g5p2l6Ieq6aG16Z2i5YaF6L2s5Y+R5oyJ6ZKuXHJcbiAgICAgIGNvbnNvbGUubG9nKHJlcy50YXJnZXQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdGl0bGU6ICfpnZLlspvkurrmiY3liJvmlrDliJvkuJrlubPlj7DlnLDlm74nLFxyXG4gICAgICBwYXRoOiAnL3BhZ2VzL2hvbWUvaG9tZScsXHJcbiAgICAgIGltYWdlVXJsOiAnJ1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIG9uU2hhcmVUaW1lbGluZTooKTphbnk9PiB7ICAvL+WIhuS6q1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdGl0bGU6ICfpnZLlspvkurrmiY3liJvmlrDliJvkuJrlubPlj7DlnLDlm74nLFxyXG4gICAgICBxdWVyeToge30sXHJcbiAgICAgIGltYWdlVXJsOiAnJ1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8v5py65p6E5rOo5YaMXHJcbiAgamdTaHh5Q29kZUlucHV0KHJlczphbnkpOnZvaWR7ICAvL+WNleS9jeWQjeensFxyXG4gICAgaWYocmVzLmRldGFpbC52YWx1ZSl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiamdGb3JtUnJyb3Iuc2h4eUNvZGVFcnJvclwiXTogJycsXHJcbiAgICAgICAgW1wiamdGb3JtRGF0ZS5zaHh5Q29kZVwiXTogcmVzLmRldGFpbC52YWx1ZSxcclxuICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogdHJ1ZVxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLmdldEpnTGlua1RlbCgpOyAgLy/ojrflj5bmnLrmnoTogZTns7vnlLXor51cclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLnNoeHlDb2RlRXJyb3JcIl06ICcnLFxyXG4gICAgICAgIFtcImpnRm9ybURhdGUuc2h4eUNvZGVcIl06IHJlcy5kZXRhaWwudmFsdWUsXHJcbiAgICAgICAgamdWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgZ2V0SmdMaW5rVGVsKCk6dm9pZHsgIC8v6I635Y+W5py65p6E6IGU57O755S16K+dXHJcbiAgICBodHRwcy5yZXF1ZXN0KGFwaS5nZXRVc2VyICsgXCI/cXlOYW1lPVwiICsgdGhpcy5kYXRhLmpnRm9ybURhdGUuc2h4eUNvZGUsIG51bGwsICdnZXQnKVxyXG4gICAgLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgICBsZXQgbGlua1RlbDphbnkgPSByZXMudmFsLnBob25lTnVtLnNwbGl0KCcnKTtcclxuICAgICAgICBsaW5rVGVsLnNwbGljZSgzLDQsXCIqKioqXCIpO1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBbXCJqZ0Zvcm1EYXRlLmlkXCJdOiByZXMudmFsLmlkLFxyXG4gICAgICAgICAgW1wiamdGb3JtRGF0ZS5saW5rVGVsXCJdOiByZXMudmFsLnBob25lTnVtLFxyXG4gICAgICAgICAgamdMaW5rOiBsaW5rVGVsLmpvaW4oXCJcIilcclxuICAgICAgICB9KVxyXG4gICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJqZ0Zvcm1EYXRlLmlkXCJdOiAnJyxcclxuICAgICAgICBbXCJqZ0Zvcm1EYXRlLmxpbmtUZWxcIl06ICcnLFxyXG4gICAgICAgIGpnTGluazogJydcclxuICAgICAgfSlcclxuICAgICAgVG9hc3QoZXJyKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgXHJcbiAgamdMaW5rVGVsKHJlczphbnkpOnZvaWR7ICAvL+iBlOezu+eUteivnVxyXG4gICAgbGV0IHJlZzphbnkgPSAvXigoMVswLTldezEwfSl8KCgoKFswLTldezN9LSk/WzAtOV17OH0pfCgoWzAtOV17NH0tKT9bMC05XXs3fSkpKC1bMC05XXsxLDR9KT8pKSQvO1xyXG4gICAgbGV0IHN0cjpCb29sZWFuID0gcmVnLnRlc3QocmVzLmRldGFpbC52YWx1ZSk7XHJcbiAgICBpZihyZXMuZGV0YWlsLnZhbHVlKXtcclxuICAgICAgaWYoc3RyKXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgW1wiamdGb3JtUnJyb3IubGlua1RlbEVycm9yXCJdOiAnJyxcclxuICAgICAgICAgIFtcImpnRm9ybURhdGUubGlua1RlbFwiXTogcmVzLmRldGFpbC52YWx1ZSxcclxuICAgICAgICAgIGpnVmVyaWZpY2F0aW9uOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIFtcImpnRm9ybVJycm9yLmxpbmtUZWxFcnJvclwiXTogJ+ivt+iOt+WPluato+ehrueahOiBlOezu+eUteivnScsXHJcbiAgICAgICAgICBbXCJqZ0Zvcm1EYXRlLmxpbmtUZWxcIl06IHJlcy5kZXRhaWwudmFsdWUsXHJcbiAgICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJqZ0Zvcm1ScnJvci5saW5rVGVsRXJyb3JcIl06ICcnLFxyXG4gICAgICAgIFtcImpnRm9ybURhdGUubGlua1RlbFwiXTogcmVzLmRldGFpbC52YWx1ZSxcclxuICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIGpnVmVyaWZ5Q29kZShyZXM6YW55KTp2b2lkeyAgLy/pqozor4HnoIFcclxuICAgIGlmKHJlcy5kZXRhaWwudmFsdWUpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLnZlcmlmeUNvZGVFcnJvclwiXTogJycsXHJcbiAgICAgICAgW1wiamdGb3JtRGF0ZS52ZXJpZnlDb2RlXCJdOiByZXMuZGV0YWlsLnZhbHVlLFxyXG4gICAgICAgIGpnVmVyaWZpY2F0aW9uOiB0cnVlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcblxyXG4gIGpnU3VibWl0Rm4oKTp2b2lkeyAgLy/mnLrmnoTms6jlhoxcclxuICAgIC8v6K+36L6T5YWl5Y2V5L2N5ZCN56ewXHJcbiAgICBpZih0aGlzLmRhdGEuamdGb3JtRGF0ZS5zaHh5Q29kZSA9PSAnJyl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiamdGb3JtUnJyb3Iuc2h4eUNvZGVFcnJvclwiXTon6K+36L6T5YWl5Y2V5L2N5ZCN56ewJyxcclxuICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvL+iBlOezu+eUteivnVxyXG4gICAgaWYodGhpcy5kYXRhLmpnRm9ybURhdGUubGlua1RlbCA9PSAnJyl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiamdGb3JtUnJyb3IubGlua1RlbEVycm9yXCJdOifor7floavlhpnljZXkvY3lkI3np7Dojrflj5YnLFxyXG4gICAgICAgIGpnVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy/pqozor4HnoIFcclxuICAgIGlmKHRoaXMuZGF0YS5qZ0Zvcm1EYXRlLnZlcmlmeUNvZGUgPT0gJycpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLnZlcmlmeUNvZGVFcnJvclwiXTon6K+36L6T5YWl6aqM6K+B56CBJyxcclxuICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvL+WujOaIkFxyXG4gICAgaWYodGhpcy5kYXRhLmpnVmVyaWZpY2F0aW9uID09IGZhbHNlKXtcclxuICAgICAgVG9hc3QoJ+ivt+aKiuW/heWhq+S/oeaBr+Whq+WGmeWujOaVtO+8gScpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIGxldCB1cmw6c3RyaW5nID0gYXBpLmdldEFjY291bnQgKyAnP2lkPScgKyB0aGlzLmRhdGEuamdGb3JtRGF0ZS5pZCArICcmcXlOYW1lPScgKyB0aGlzLmRhdGEuamdGb3JtRGF0ZS5zaHh5Q29kZSArICcmcGhvbmVOdW09JyArIHRoaXMuZGF0YS5qZ0Zvcm1EYXRlLmxpbmtUZWwgKyAnJnZlcmlmeUNvZGU9JyArIHRoaXMuZGF0YS5qZ0Zvcm1EYXRlLnZlcmlmeUNvZGU7XHJcbiAgICAgIGh0dHBzLnJlcXVlc3QodXJsLCBudWxsLCAnUE9TVCcpLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgICBEaWFsb2cuYWxlcnQoe1xyXG4gICAgICAgICAgdGl0bGU6IHRoaXMuZGF0YS5qZ0Zvcm1EYXRlLnNoeHlDb2RlLFxyXG4gICAgICAgICAgbWVzc2FnZUFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgIG1lc3NhZ2U6IHJlcy52YWwuc2h4eUNvZGUsXHJcbiAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ+WOu+eZu+W9lScsXHJcbiAgICAgICAgICBjbG9zZU9uQ2xpY2tPdmVybGF5OiB0cnVlXHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgdXJsOiAnLi4vbG9naW5Gb3JtL2xvZ2luRm9ybSdcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgICAgVG9hc3QoZXJyKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgamdWZXJpZnlDb2RlRm4oKTp2b2lkeyAgLy/ojrflj5bpqozor4HnoIFcclxuICAgIGlmKHRoaXMuZGF0YS5qZ0Zvcm1EYXRlLmxpbmtUZWwgIT0gJycpe1xyXG4gICAgICBodHRwcy5yZXF1ZXN0KGFwaS5nZXRDb2RlICsgXCI/dGVsZXBob25lPVwiICsgdGhpcy5kYXRhLmpnRm9ybURhdGUubGlua1RlbCwgbnVsbCwgJ0dFVCcpXHJcbiAgICAgIC50aGVuKCgpOnZvaWQ9PntcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgamdWZXJpZnlDb2RlVGltZTogJzYwJyxcclxuICAgICAgICAgIGpnRGlzYWJsZWQ6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICAgIGxldCBzZXRUaW1lOmFueSA9IHNldEludGVydmFsKCgpOnZvaWQ9PntcclxuICAgICAgICAgIGxldCBzdHI6YW55ID0gcGFyc2VJbnQodGhpcy5kYXRhLmpnVmVyaWZ5Q29kZVRpbWUpIC0gMTtcclxuICAgICAgICAgIGlmKHN0ciA+IDApe1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgIGpnVmVyaWZ5Q29kZVRpbWU6IHN0clxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoc2V0VGltZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgamdWZXJpZnlDb2RlVGltZTogJ+iOt+WPlumqjOivgeeggScsXHJcbiAgICAgICAgICAgICAgamdEaXNhYmxlZDogZmFsc2VcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LDEwMDApXHJcbiAgICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgICAgVG9hc3QoZXJyKTtcclxuICAgICAgfSk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgVG9hc3QoJ+ivt+WFiOWhq+WGmeiBlOezu+eUteivne+8gScpO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG5cclxuICAvL+mhtemdouWIneWni+WMllxyXG4gIG9uTG9hZCgpe1xyXG4gICAgLy/pobXpnaLmoIfpophcclxuICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7ICAgICBcclxuICAgICAgdGl0bGU6IFwi5om+5Zue6LSm5Y+3XCJcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgLy/pobXpnaLmuLLmn5PlrozmiJBcclxuICBvblJlYWR5KCl7fSxcclxuXHJcbiAgLy/pobXpnaLmmL7npLpcclxuICBvblNob3coKXtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIFtcImpnRm9ybURhdGUuc2h4eUNvZGVcIl06JycsICAvL+e7n+S4gOekvuS8muS/oeeUqOS7o+eggVxyXG4gICAgICBbXCJqZ0Zvcm1EYXRlLmxpbmtUZWxcIl06JycsICAvL+iBlOezu+S6uueUteivnVxyXG4gICAgICBbXCJqZ0Zvcm1EYXRlLnZlcmlmeUNvZGVcIl06JycsICAvL+mqjOivgeeggVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvL+mhtemdoumakOiXj1xyXG4gIG9uSGlkZSgpe30sXHJcblxyXG4gIC8v6aG16Z2i5YWz6ZetXHJcbiAgb25VbmxvYWQoKXt9XHJcbn0pXHJcbmV4cG9ydCB7fTtcclxuIl19