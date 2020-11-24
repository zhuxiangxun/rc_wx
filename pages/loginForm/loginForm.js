"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api = getApp().globalData;
var https = require('../../utils/myRequest.js');
var Toast = require('../../miniprogram_npm/@vant/weapp/toast/toast.js').default;
var Dialog = require('../../miniprogram_npm/@vant/weapp/dialog/dialog.js').default;
Page({
    data: {
        userIcon: 'http://www.eyunhan.cn/images/login_01.png',
        passwordIcon: 'http://www.eyunhan.cn/images/login_02.png',
        formDate: {
            username: '',
            password: ''
        },
        formRrror: {
            usernameError: '',
            passwordError: '',
        },
        verification: false,
        active: 'yh',
        zgFormDate: {
            username: '',
            password: ''
        },
        zgFormRrror: {
            usernameError: '',
            passwordError: '',
        },
        zgVerification: false,
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
    tabChange: function (res) {
        var _a;
        api.loginStatus = res.detail.name;
        this.setData((_a = {},
            _a["formDate.username"] = '',
            _a["formDate.password"] = '',
            _a["formRrror.usernameError"] = '',
            _a["formRrror.passwordError"] = '',
            _a.active = res.detail.name,
            _a));
    },
    usernameBlur: function (value) {
        var _a, _b;
        if (value.detail.value) {
            this.setData((_a = {},
                _a["formRrror.usernameError"] = '',
                _a["formDate.username"] = value.detail.value,
                _a.verification = true,
                _a));
        }
        else {
            this.setData((_b = {},
                _b["formRrror.usernameError"] = '',
                _b["formDate.username"] = value.detail.value,
                _b.verification = false,
                _b));
        }
    },
    usernameInput: function (value) {
        var _a, _b;
        if (value.detail) {
            this.setData((_a = {},
                _a["formRrror.usernameError"] = '',
                _a["formDate.username"] = value.detail,
                _a.verification = true,
                _a));
        }
        else {
            this.setData((_b = {},
                _b["formRrror.usernameError"] = '',
                _b["formDate.username"] = value.detail,
                _b.verification = false,
                _b));
        }
    },
    parsswordInput: function (value) {
        var _a, _b;
        if (value.detail) {
            this.setData((_a = {},
                _a["formRrror.passwordError"] = '',
                _a["formDate.password"] = value.detail,
                _a.verification = true,
                _a));
        }
        else {
            this.setData((_b = {},
                _b["formRrror.passwordError"] = '',
                _b["formDate.password"] = value.detail,
                _b.verification = false,
                _b));
        }
    },
    zgUsernameBlur: function (value) {
        var _a, _b;
        if (value.detail.value) {
            this.setData((_a = {},
                _a["zgFormRrror.usernameError"] = '',
                _a["zgFormDate.username"] = value.detail.value,
                _a.zgVerification = true,
                _a));
        }
        else {
            this.setData((_b = {},
                _b["zgFormRrror.usernameError"] = '',
                _b["zgFormDate.username"] = value.detail.value,
                _b.zgVerification = false,
                _b));
        }
    },
    zgUsernameInput: function (value) {
        var _a, _b;
        if (value.detail) {
            this.setData((_a = {},
                _a["zgFormRrror.usernameError"] = '',
                _a["zgFormDate.username"] = value.detail,
                _a.zgVerification = true,
                _a));
        }
        else {
            this.setData((_b = {},
                _b["zgFormRrror.usernameError"] = '',
                _b["zgFormDate.username"] = value.detail,
                _b.zgVerification = false,
                _b));
        }
    },
    zgParsswordInput: function (value) {
        var _a, _b;
        if (value.detail) {
            this.setData((_a = {},
                _a["zgFormRrror.passwordError"] = '',
                _a["zgFormDate.password"] = value.detail,
                _a.zgVerification = true,
                _a));
        }
        else {
            this.setData((_b = {},
                _b["zgFormRrror.passwordError"] = '',
                _b["zgFormDate.password"] = value.detail,
                _b.zgVerification = false,
                _b));
        }
    },
    loginFn: function () {
        var _a, _b;
        if (this.data.formDate.username == '') {
            this.setData((_a = {},
                _a["formRrror.usernameError"] = '请输入证件号码/社会统一信用代码',
                _a.verification = false,
                _a));
        }
        if (this.data.formDate.password == '') {
            this.setData((_b = {},
                _b["formRrror.passwordError"] = '请输入密码',
                _b.verification = false,
                _b));
        }
        if (this.data.verification) {
            https.request(api.login + '?account=' + this.data.formDate.username + '&password=' + this.data.formDate.password, null, 'POST')
                .then(function (res) {
                if (res.token) {
                    wx.setStorageSync('token', res.token);
                    wx.switchTab({
                        url: '../home/home'
                    });
                }
            }, function (err) {
                Toast(err);
            });
        }
    },
    zgLoginFn: function () {
        var _a, _b;
        if (this.data.zgFormDate.username == '') {
            this.setData((_a = {},
                _a["zgFormRrror.usernameError"] = '请输入用户名',
                _a.zgVerification = false,
                _a));
        }
        if (this.data.zgFormDate.password == '') {
            this.setData((_b = {},
                _b["zgFormRrror.passwordError"] = '请输入密码',
                _b.zgVerification = false,
                _b));
        }
        if (this.data.zgVerification) {
            https.zgRequest(api.danweiLogin, {
                username: this.data.zgFormDate.username,
                password: this.data.zgFormDate.password
            }, 'POST')
                .then(function (res) {
                if (res.token) {
                    wx.setStorageSync('token', res.token);
                    wx.switchTab({
                        url: '../home/home'
                    });
                }
            }, function (err) {
                Toast(err);
            });
        }
    },
    zgPasswordFn: function () {
        wx.navigateTo({
            url: '../zgPassword/zgPassword'
        });
    },
    zhUserFn: function () {
        wx.navigateTo({
            url: '../zhUser/zhUser'
        });
    },
    registeredFn: function () {
        wx.navigateTo({
            url: '../registered/registered'
        });
    },
    registered: function () {
        Dialog.alert({
            title: '注册提示',
            messageAlign: 'center',
            message: '请用PC端打开网址进行注册http://www.talentelink.com',
        }).then(function () {
        });
    },
    onLoad: function () {
        api.loginStatus = 'yh';
    },
    onReady: function () { },
    onShow: function () { },
    onHide: function () { },
    onUnload: function () { }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW5Gb3JtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW5Gb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFFLENBQUMsVUFBVSxDQUFDO0FBQ2hDLElBQUksS0FBSyxHQUFJLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0FBQ2pELElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxrREFBa0QsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUNoRixJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsb0RBQW9ELENBQUMsQ0FBQyxPQUFPLENBQUM7QUFFbkYsSUFBSSxDQUFDO0lBRUgsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLDJDQUEyQztRQUNyRCxZQUFZLEVBQUUsMkNBQTJDO1FBQ3pELFFBQVEsRUFBQztZQUNQLFFBQVEsRUFBRSxFQUFFO1lBQ1osUUFBUSxFQUFFLEVBQUU7U0FDYjtRQUNELFNBQVMsRUFBQztZQUNSLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLGFBQWEsRUFBRSxFQUFFO1NBQ2xCO1FBQ0QsWUFBWSxFQUFFLEtBQUs7UUFDbkIsTUFBTSxFQUFFLElBQUk7UUFDWixVQUFVLEVBQUM7WUFDVCxRQUFRLEVBQUUsRUFBRTtZQUNaLFFBQVEsRUFBRSxFQUFFO1NBQ2I7UUFDRCxXQUFXLEVBQUM7WUFDVixhQUFhLEVBQUUsRUFBRTtZQUNqQixhQUFhLEVBQUUsRUFBRTtTQUNsQjtRQUNELGNBQWMsRUFBRSxLQUFLO0tBQ3RCO0lBRUQsaUJBQWlCLEVBQUMsVUFBQyxHQUFPO1FBQ3hCLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7WUFFekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDekI7UUFDRCxPQUFPO1lBQ0wsS0FBSyxFQUFFLGNBQWM7WUFDckIsSUFBSSxFQUFFLGtCQUFrQjtZQUN4QixRQUFRLEVBQUUsRUFBRTtT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QUM7SUFHRCxPQUFPLGdCQUFHLENBQUM7SUFHWCxNQUFNLGdCQUFHLENBQUM7SUFHVixNQUFNLGdCQUFHLENBQUM7SUFHVixRQUFRLGdCQUFHLENBQUM7Q0FDYixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsb2dpbkZvcm0udHNcclxuY29uc3QgYXBpID0gZ2V0QXBwKCkuZ2xvYmFsRGF0YTsgIC8vIOiOt+WPluW6lOeUqOWunuS+i1xyXG5sZXQgaHR0cHMgID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvbXlSZXF1ZXN0LmpzJyk7ICAvL+iOt+WPlmFqYXjmlrnms5VcclxubGV0IFRvYXN0ID0gcmVxdWlyZSgnLi4vLi4vbWluaXByb2dyYW1fbnBtL0B2YW50L3dlYXBwL3RvYXN0L3RvYXN0LmpzJykuZGVmYXVsdDtcclxubGV0IERpYWxvZyA9IHJlcXVpcmUoJy4uLy4uL21pbmlwcm9ncmFtX25wbS9AdmFudC93ZWFwcC9kaWFsb2cvZGlhbG9nLmpzJykuZGVmYXVsdDtcclxuXHJcblBhZ2Uoe1xyXG4gIC8v6aG16Z2i5pWw5o2uXHJcbiAgZGF0YToge1xyXG4gICAgdXNlckljb246ICdodHRwOi8vd3d3LmV5dW5oYW4uY24vaW1hZ2VzL2xvZ2luXzAxLnBuZycsICAgICAgIC8v55So5oi35ZCN5Zu+5qCHXHJcbiAgICBwYXNzd29yZEljb246ICdodHRwOi8vd3d3LmV5dW5oYW4uY24vaW1hZ2VzL2xvZ2luXzAyLnBuZycsICAgLy/lr4bnoIHlm77moIdcclxuICAgIGZvcm1EYXRlOnsgIC8v6KGo5Y2VXHJcbiAgICAgIHVzZXJuYW1lOiAnJyxcclxuICAgICAgcGFzc3dvcmQ6ICcnXHJcbiAgICB9LFxyXG4gICAgZm9ybVJycm9yOnsgIC8v6aqM6K+BXHJcbiAgICAgIHVzZXJuYW1lRXJyb3I6ICcnLCBcclxuICAgICAgcGFzc3dvcmRFcnJvcjogJycsXHJcbiAgICB9LFxyXG4gICAgdmVyaWZpY2F0aW9uOiBmYWxzZSwgICAgLy/pqozor4HliKTmlq1cclxuICAgIGFjdGl2ZTogJ3loJyxcclxuICAgIHpnRm9ybURhdGU6eyAgLy/kuLvnrqHooajljZVcclxuICAgICAgdXNlcm5hbWU6ICcnLFxyXG4gICAgICBwYXNzd29yZDogJydcclxuICAgIH0sXHJcbiAgICB6Z0Zvcm1ScnJvcjp7ICAvL+S4u+euoemqjOivgVxyXG4gICAgICB1c2VybmFtZUVycm9yOiAnJywgXHJcbiAgICAgIHBhc3N3b3JkRXJyb3I6ICcnLFxyXG4gICAgfSxcclxuICAgIHpnVmVyaWZpY2F0aW9uOiBmYWxzZSwgICAgLy/pqozor4HliKTmlq1cclxuICB9LFxyXG5cclxuICBvblNoYXJlQXBwTWVzc2FnZToocmVzOmFueSk6YW55PT4geyAgLy/lj5HpgIHnu5nmnIvlj4tcclxuICAgIGlmIChyZXMuZnJvbSA9PT0gJ2J1dHRvbicpIHtcclxuICAgICAgLy8g5p2l6Ieq6aG16Z2i5YaF6L2s5Y+R5oyJ6ZKuXHJcbiAgICAgIGNvbnNvbGUubG9nKHJlcy50YXJnZXQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdGl0bGU6ICfpnZLlspvkurrmiY3liJvmlrDliJvkuJrlubPlj7DlnLDlm74nLFxyXG4gICAgICBwYXRoOiAnL3BhZ2VzL2hvbWUvaG9tZScsXHJcbiAgICAgIGltYWdlVXJsOiAnJ1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIG9uU2hhcmVUaW1lbGluZTooKTphbnk9PiB7ICAvL+WIhuS6q1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdGl0bGU6ICfpnZLlspvkurrmiY3liJvmlrDliJvkuJrlubPlj7DlnLDlm74nLFxyXG4gICAgICBxdWVyeToge30sXHJcbiAgICAgIGltYWdlVXJsOiAnJ1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8vdGFi5YiH5o2i6Kem5Y+RXHJcbiAgdGFiQ2hhbmdlKHJlczphbnkpOnZvaWR7XHJcbiAgICBhcGkubG9naW5TdGF0dXMgPSByZXMuZGV0YWlsLm5hbWU7ICAvL+eZu+W9leWIpOaWrVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgW1wiZm9ybURhdGUudXNlcm5hbWVcIl06ICcnLFxyXG4gICAgICBbXCJmb3JtRGF0ZS5wYXNzd29yZFwiXTogJycsXHJcbiAgICAgIFtcImZvcm1ScnJvci51c2VybmFtZUVycm9yXCJdOiAnJyxcclxuICAgICAgW1wiZm9ybVJycm9yLnBhc3N3b3JkRXJyb3JcIl06ICcnLFxyXG4gICAgICBhY3RpdmU6IHJlcy5kZXRhaWwubmFtZVxyXG4gICAgfSlcclxuICB9LFxyXG4gIFxyXG4gIC8v55So5oi35ZCN6aqM6K+BXHJcbiAgdXNlcm5hbWVCbHVyKHZhbHVlOmFueSk6dm9pZHtcclxuICAgIC8vbGV0IHJlZzphbnkgPSAvXlstX2EtekEtWjAtOV17MSwyNTV9JC87XHJcbiAgICAvL2xldCBzdHI6Qm9vbGVhbiA9IHJlZy50ZXN0KHZhbHVlLmRldGFpbCk7XHJcbiAgICBpZih2YWx1ZS5kZXRhaWwudmFsdWUpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImZvcm1ScnJvci51c2VybmFtZUVycm9yXCJdOicnLFxyXG4gICAgICAgIFtcImZvcm1EYXRlLnVzZXJuYW1lXCJdOiB2YWx1ZS5kZXRhaWwudmFsdWUsXHJcbiAgICAgICAgdmVyaWZpY2F0aW9uOiB0cnVlXHJcbiAgICAgIH0pXHJcbiAgICAgIC8vIGlmKHN0cil7XHJcbiAgICAgICBcclxuICAgICAgLy8gfWVsc2V7XHJcbiAgICAgIC8vICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgLy8gICAgIFtcImZvcm1ScnJvci51c2VybmFtZUVycm9yXCJdOifor7fovpPlhaXmraPnoa7nlKjmiLflkI3vvIjlj6/ku6XkuLrmlbDlrZfjgIHlrZfmr43jgIHkuIvliJLnur/vvIknLFxyXG4gICAgICAvLyAgICAgW1wiZm9ybURhdGUudXNlcm5hbWVcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgLy8gICAgIHZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgLy8gICB9KVxyXG4gICAgICAvLyB9XHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJmb3JtUnJyb3IudXNlcm5hbWVFcnJvclwiXTonJyxcclxuICAgICAgICBbXCJmb3JtRGF0ZS51c2VybmFtZVwiXTogdmFsdWUuZGV0YWlsLnZhbHVlLFxyXG4gICAgICAgIHZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIHVzZXJuYW1lSW5wdXQodmFsdWU6YW55KTp2b2lke1xyXG4gICAgLy9sZXQgcmVnOmFueSA9IC9eWy1fYS16QS1aMC05XXsxLDI1NX0kLztcclxuICAgIC8vbGV0IHN0cjpCb29sZWFuID0gcmVnLnRlc3QodmFsdWUuZGV0YWlsKTtcclxuICAgIGlmKHZhbHVlLmRldGFpbCl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiZm9ybVJycm9yLnVzZXJuYW1lRXJyb3JcIl06JycsXHJcbiAgICAgICAgW1wiZm9ybURhdGUudXNlcm5hbWVcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICB2ZXJpZmljYXRpb246IHRydWVcclxuICAgICAgfSlcclxuICAgICAgLy8gaWYoc3RyKXtcclxuICAgICAgIFxyXG4gICAgICAvLyB9ZWxzZXtcclxuICAgICAgLy8gICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAvLyAgICAgW1wiZm9ybVJycm9yLnVzZXJuYW1lRXJyb3JcIl06J+ivt+i+k+WFpeato+ehrueUqOaIt+WQje+8iOWPr+S7peS4uuaVsOWtl+OAgeWtl+avjeOAgeS4i+WIkue6v++8iScsXHJcbiAgICAgIC8vICAgICBbXCJmb3JtRGF0ZS51c2VybmFtZVwiXTogdmFsdWUuZGV0YWlsLFxyXG4gICAgICAvLyAgICAgdmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICAvLyAgIH0pXHJcbiAgICAgIC8vIH1cclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImZvcm1ScnJvci51c2VybmFtZUVycm9yXCJdOicnLFxyXG4gICAgICAgIFtcImZvcm1EYXRlLnVzZXJuYW1lXCJdOiB2YWx1ZS5kZXRhaWwsXHJcbiAgICAgICAgdmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgLy/lr4bnoIHpqozor4FcclxuICBwYXJzc3dvcmRJbnB1dCh2YWx1ZTphbnkpOnZvaWR7XHJcbiAgICAvL2xldCByZWc6YW55ID0gL15bLV9hLXpBLVowLTldezEsMjU1fSQvO1xyXG4gICAgLy9sZXQgc3RyOkJvb2xlYW4gPSByZWcudGVzdCh2YWx1ZS5kZXRhaWwpO1xyXG4gICAgaWYodmFsdWUuZGV0YWlsKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJmb3JtUnJyb3IucGFzc3dvcmRFcnJvclwiXTogJycsXHJcbiAgICAgICAgW1wiZm9ybURhdGUucGFzc3dvcmRcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICB2ZXJpZmljYXRpb246IHRydWVcclxuICAgICAgfSlcclxuICAgICAgLy8gaWYoc3RyKXtcclxuICAgICAgICBcclxuICAgICAgLy8gfWVsc2V7XHJcbiAgICAgIC8vICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgLy8gICAgIFtcImZvcm1ScnJvci5wYXNzd29yZEVycm9yXCJdOifor7fovpPlhaXmraPnoa7lr4bnoIHvvIjlj6/ku6XkuLrmlbDlrZfjgIHlrZfmr43jgIHkuIvliJLnur/vvIknLFxyXG4gICAgICAvLyAgICAgW1wiZm9ybURhdGUucGFzc3dvcmRcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgLy8gICAgIHZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgLy8gICB9KVxyXG4gICAgICAvLyB9XHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJmb3JtUnJyb3IucGFzc3dvcmRFcnJvclwiXTonJyxcclxuICAgICAgICBbXCJmb3JtRGF0ZS5wYXNzd29yZFwiXTogdmFsdWUuZGV0YWlsLFxyXG4gICAgICAgIHZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIC8v5Li7566h55So5oi35ZCN6aqM6K+BXHJcbiAgemdVc2VybmFtZUJsdXIodmFsdWU6YW55KTp2b2lke1xyXG4gICAgLy9sZXQgcmVnOmFueSA9IC9eWy1fYS16QS1aMC05XXsxLDI1NX0kLztcclxuICAgIC8vbGV0IHN0cjpCb29sZWFuID0gcmVnLnRlc3QodmFsdWUuZGV0YWlsKTtcclxuICAgIGlmKHZhbHVlLmRldGFpbC52YWx1ZSl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiemdGb3JtUnJyb3IudXNlcm5hbWVFcnJvclwiXTonJyxcclxuICAgICAgICBbXCJ6Z0Zvcm1EYXRlLnVzZXJuYW1lXCJdOiB2YWx1ZS5kZXRhaWwudmFsdWUsXHJcbiAgICAgICAgemdWZXJpZmljYXRpb246IHRydWVcclxuICAgICAgfSlcclxuICAgICAgLy8gaWYoc3RyKXtcclxuICAgICAgICBcclxuICAgICAgLy8gfWVsc2V7XHJcbiAgICAgIC8vICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgLy8gICAgIFtcInpnRm9ybVJycm9yLnVzZXJuYW1lRXJyb3JcIl06J+ivt+i+k+WFpeato+ehrueUqOaIt+WQje+8iOWPr+S7peS4uuaVsOWtl+OAgeWtl+avjeOAgeS4i+WIkue6v++8iScsXHJcbiAgICAgIC8vICAgICBbXCJ6Z0Zvcm1EYXRlLnVzZXJuYW1lXCJdOiB2YWx1ZS5kZXRhaWwsXHJcbiAgICAgIC8vICAgICB6Z1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgLy8gICB9KVxyXG4gICAgICAvLyB9XHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJ6Z0Zvcm1ScnJvci51c2VybmFtZUVycm9yXCJdOicnLFxyXG4gICAgICAgIFtcInpnRm9ybURhdGUudXNlcm5hbWVcIl06IHZhbHVlLmRldGFpbC52YWx1ZSxcclxuICAgICAgICB6Z1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIHpnVXNlcm5hbWVJbnB1dCh2YWx1ZTphbnkpOnZvaWR7XHJcbiAgICAvL2xldCByZWc6YW55ID0gL15bLV9hLXpBLVowLTldezEsMjU1fSQvO1xyXG4gICAgLy9sZXQgc3RyOkJvb2xlYW4gPSByZWcudGVzdCh2YWx1ZS5kZXRhaWwpO1xyXG4gICAgaWYodmFsdWUuZGV0YWlsKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJ6Z0Zvcm1ScnJvci51c2VybmFtZUVycm9yXCJdOicnLFxyXG4gICAgICAgIFtcInpnRm9ybURhdGUudXNlcm5hbWVcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICB6Z1ZlcmlmaWNhdGlvbjogdHJ1ZVxyXG4gICAgICB9KVxyXG4gICAgICAvLyBpZihzdHIpe1xyXG4gICAgICAgIFxyXG4gICAgICAvLyB9ZWxzZXtcclxuICAgICAgLy8gICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAvLyAgICAgW1wiemdGb3JtUnJyb3IudXNlcm5hbWVFcnJvclwiXTon6K+36L6T5YWl5q2j56Gu55So5oi35ZCN77yI5Y+v5Lul5Li65pWw5a2X44CB5a2X5q+N44CB5LiL5YiS57q/77yJJyxcclxuICAgICAgLy8gICAgIFtcInpnRm9ybURhdGUudXNlcm5hbWVcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgLy8gICAgIHpnVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICAvLyAgIH0pXHJcbiAgICAgIC8vIH1cclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcInpnRm9ybVJycm9yLnVzZXJuYW1lRXJyb3JcIl06JycsXHJcbiAgICAgICAgW1wiemdGb3JtRGF0ZS51c2VybmFtZVwiXTogdmFsdWUuZGV0YWlsLFxyXG4gICAgICAgIHpnVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgLy/kuLvnrqHlr4bnoIHpqozor4FcclxuICB6Z1BhcnNzd29yZElucHV0KHZhbHVlOmFueSk6dm9pZHtcclxuICAgIC8vbGV0IHJlZzphbnkgPSAvXlstX2EtekEtWjAtOV17MSwyNTV9JC87XHJcbiAgICAvL2xldCBzdHI6Qm9vbGVhbiA9IHJlZy50ZXN0KHZhbHVlLmRldGFpbCk7XHJcbiAgICBpZih2YWx1ZS5kZXRhaWwpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcInpnRm9ybVJycm9yLnBhc3N3b3JkRXJyb3JcIl06ICcnLFxyXG4gICAgICAgIFtcInpnRm9ybURhdGUucGFzc3dvcmRcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICB6Z1ZlcmlmaWNhdGlvbjogdHJ1ZVxyXG4gICAgICB9KVxyXG4gICAgICAvLyBpZihzdHIpe1xyXG4gICAgICAgIFxyXG4gICAgICAvLyB9ZWxzZXtcclxuICAgICAgLy8gICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAvLyAgICAgW1wiemdGb3JtUnJyb3IucGFzc3dvcmRFcnJvclwiXTon6K+36L6T5YWl5q2j56Gu5a+G56CB77yI5Y+v5Lul5Li65pWw5a2X44CB5a2X5q+N44CB5LiL5YiS57q/77yJJyxcclxuICAgICAgLy8gICAgIFtcInpnRm9ybURhdGUucGFzc3dvcmRcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgLy8gICAgIHpnVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICAvLyAgIH0pXHJcbiAgICAgIC8vIH1cclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcInpnRm9ybVJycm9yLnBhc3N3b3JkRXJyb3JcIl06JycsXHJcbiAgICAgICAgW1wiemdGb3JtRGF0ZS5wYXNzd29yZFwiXTogdmFsdWUuZGV0YWlsLFxyXG4gICAgICAgIHpnVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8v55m75b2V5oyJ6ZKuXHJcbiAgbG9naW5GbigpOnZvaWR7XHJcbiAgICBpZih0aGlzLmRhdGEuZm9ybURhdGUudXNlcm5hbWUgPT0gJycpeyAgLy/nlKjmiLflkI1cclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJmb3JtUnJyb3IudXNlcm5hbWVFcnJvclwiXTogJ+ivt+i+k+WFpeivgeS7tuWPt+eggS/npL7kvJrnu5/kuIDkv6HnlKjku6PnoIEnLFxyXG4gICAgICAgIHZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBpZih0aGlzLmRhdGEuZm9ybURhdGUucGFzc3dvcmQgPT0gJycpeyAgLy/lr4bnoIFcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJmb3JtUnJyb3IucGFzc3dvcmRFcnJvclwiXTon6K+36L6T5YWl5a+G56CBJyxcclxuICAgICAgICB2ZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaWYodGhpcy5kYXRhLnZlcmlmaWNhdGlvbil7ICAvL+mqjOivgemAmui/h1xyXG4gICAgICAvL+S4quS6uuacuuaehOeZu+W9lVxyXG4gICAgICBodHRwcy5yZXF1ZXN0KGFwaS5sb2dpbiArICc/YWNjb3VudD0nICsgdGhpcy5kYXRhLmZvcm1EYXRlLnVzZXJuYW1lICsgJyZwYXNzd29yZD0nICsgdGhpcy5kYXRhLmZvcm1EYXRlLnBhc3N3b3JkLCBudWxsLCAnUE9TVCcpXHJcbiAgICAgIC50aGVuKChyZXM6YW55KTp2b2lkPT57XHJcbiAgICAgICAgaWYocmVzLnRva2VuKXtcclxuICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCd0b2tlbicsIHJlcy50b2tlbik7ICAvL+WtmOWCqHRva2VuXHJcbiAgICAgICAgICAvL3d4Lm5hdmlnYXRlQmFjaygpOyAgLy/lkI7pgIBcclxuICAgICAgICAgIHd4LnN3aXRjaFRhYih7IFxyXG4gICAgICAgICAgICB1cmw6Jy4uL2hvbWUvaG9tZSdcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgICBUb2FzdChlcnIpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvL+S4u+euoeeZu+W9leaMiemSrlxyXG4gIHpnTG9naW5GbigpOnZvaWR7XHJcbiAgICBpZih0aGlzLmRhdGEuemdGb3JtRGF0ZS51c2VybmFtZSA9PSAnJyl7ICAvL+eUqOaIt+WQjVxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcInpnRm9ybVJycm9yLnVzZXJuYW1lRXJyb3JcIl06ICfor7fovpPlhaXnlKjmiLflkI0nLFxyXG4gICAgICAgIHpnVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGlmKHRoaXMuZGF0YS56Z0Zvcm1EYXRlLnBhc3N3b3JkID09ICcnKXsgIC8v5a+G56CBXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiemdGb3JtUnJyb3IucGFzc3dvcmRFcnJvclwiXTon6K+36L6T5YWl5a+G56CBJyxcclxuICAgICAgICB6Z1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBpZih0aGlzLmRhdGEuemdWZXJpZmljYXRpb24peyAgLy/pqozor4HpgJrov4dcclxuICAgICAgLy/kuLvnrqHljZXkvY3nmbvlvZVcclxuICAgICAgaHR0cHMuemdSZXF1ZXN0KGFwaS5kYW53ZWlMb2dpbiwge1xyXG4gICAgICAgIHVzZXJuYW1lOiB0aGlzLmRhdGEuemdGb3JtRGF0ZS51c2VybmFtZSxcclxuICAgICAgICBwYXNzd29yZDogdGhpcy5kYXRhLnpnRm9ybURhdGUucGFzc3dvcmRcclxuICAgICAgfSwgJ1BPU1QnKVxyXG4gICAgICAudGhlbigocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICAgIGlmKHJlcy50b2tlbil7XHJcbiAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygndG9rZW4nLCByZXMudG9rZW4pOyAgLy/lrZjlgqh0b2tlblxyXG4gICAgICAgICAgd3guc3dpdGNoVGFiKHsgXHJcbiAgICAgICAgICAgIHVybDonLi4vaG9tZS9ob21lJ1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICAgIFRvYXN0KGVycik7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHpnUGFzc3dvcmRGbigpOnZvaWR7ICAvL+S4u+euoeWNleS9jeaJvuWbnuWvhueggVxyXG4gICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgIHVybDogJy4uL3pnUGFzc3dvcmQvemdQYXNzd29yZCdcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgemhVc2VyRm4oKTp2b2lkeyAgLy/mib7lm57otKblj7dcclxuICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICB1cmw6ICcuLi96aFVzZXIvemhVc2VyJ1xyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvL+azqOWGjFxyXG4gIHJlZ2lzdGVyZWRGbigpOnZvaWR7XHJcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgdXJsOiAnLi4vcmVnaXN0ZXJlZC9yZWdpc3RlcmVkJ1xyXG4gICAgfSlcclxuICB9LFxyXG4gIFxyXG5cclxuICAvL+azqOWGjOW8ueahhlxyXG4gIHJlZ2lzdGVyZWQoKTp2b2lke1xyXG4gICAgRGlhbG9nLmFsZXJ0KHtcclxuICAgICAgdGl0bGU6ICfms6jlhozmj5DnpLonLFxyXG4gICAgICBtZXNzYWdlQWxpZ246ICdjZW50ZXInLFxyXG4gICAgICBtZXNzYWdlOiAn6K+355SoUEPnq6/miZPlvIDnvZHlnYDov5vooYzms6jlhoxodHRwOi8vd3d3LnRhbGVudGVsaW5rLmNvbScsXHJcbiAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgXHJcbiAgICB9KTtcclxuICB9LFxyXG4gIFxyXG5cclxuXHJcblxyXG4gIC8v6aG16Z2i5Yid5aeL5YyWXHJcbiAgb25Mb2FkKCl7XHJcbiAgICBhcGkubG9naW5TdGF0dXMgPSAneWgnOyAgLy/nmbvlvZXliKTmlq1cclxuICB9LFxyXG5cclxuICAvL+mhtemdoua4suafk+WujOaIkFxyXG4gIG9uUmVhZHkoKXt9LFxyXG5cclxuICAvL+mhtemdouaYvuekulxyXG4gIG9uU2hvdygpe30sXHJcblxyXG4gIC8v6aG16Z2i6ZqQ6JePXHJcbiAgb25IaWRlKCl7fSxcclxuXHJcbiAgLy/pobXpnaLlhbPpl61cclxuICBvblVubG9hZCgpe31cclxufSlcclxuZXhwb3J0IHt9O1xyXG4iXX0=