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
    tabChange: function (res) {
        var _a;
        api.loginStatus = res.detail.name;
        this.setData((_a = {},
            _a["formDate.username"] = '',
            _a["formDate.password"] = '',
            _a["formRrror.usernameError"] = '',
            _a["formRrror.passwordError"] = '',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW5Gb3JtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW5Gb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFFLENBQUMsVUFBVSxDQUFDO0FBQ2hDLElBQUksS0FBSyxHQUFJLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0FBQ2pELElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxrREFBa0QsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUNoRixJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsb0RBQW9ELENBQUMsQ0FBQyxPQUFPLENBQUM7QUFFbkYsSUFBSSxDQUFDO0lBRUgsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLDJDQUEyQztRQUNyRCxZQUFZLEVBQUUsMkNBQTJDO1FBQ3pELFFBQVEsRUFBQztZQUNQLFFBQVEsRUFBRSxFQUFFO1lBQ1osUUFBUSxFQUFFLEVBQUU7U0FDYjtRQUNELFNBQVMsRUFBQztZQUNSLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLGFBQWEsRUFBRSxFQUFFO1NBQ2xCO1FBQ0QsWUFBWSxFQUFFLEtBQUs7UUFDbkIsTUFBTSxFQUFFLElBQUk7UUFDWixVQUFVLEVBQUM7WUFDVCxRQUFRLEVBQUUsRUFBRTtZQUNaLFFBQVEsRUFBRSxFQUFFO1NBQ2I7UUFDRCxXQUFXLEVBQUM7WUFDVixhQUFhLEVBQUUsRUFBRTtZQUNqQixhQUFhLEVBQUUsRUFBRTtTQUNsQjtRQUNELGNBQWMsRUFBRSxLQUFLO0tBQ3RCO0lBR0QsU0FBUyxFQUFULFVBQVUsR0FBTzs7UUFDZixHQUFHLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxPQUFPO1lBQ1YsR0FBQyxtQkFBbUIsSUFBRyxFQUFFO1lBQ3pCLEdBQUMsbUJBQW1CLElBQUcsRUFBRTtZQUN6QixHQUFDLHlCQUF5QixJQUFHLEVBQUU7WUFDL0IsR0FBQyx5QkFB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QUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNiLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBR0QsWUFBWSxFQUFaO1FBQ0UsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSwwQkFBMEI7U0FDaEMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUlELFVBQVUsRUFBVjtRQUNFLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDWCxLQUFLLEVBQUUsTUFBTTtZQUNiLFlBQVksRUFBRSxRQUFRO1lBQ3RCLE9BQU8sRUFBRSx5Q0FBeUM7U0FDbkQsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUVSLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQU1ELE1BQU07UUFDSixHQUFHLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztJQUN6QixDQUFDO0lBR0QsT0FBTyxnQkFBRyxDQUFDO0lBR1gsTUFBTSxnQkFBRyxDQUFDO0lBR1YsTUFBTSxnQkFBRyxDQUFDO0lBR1YsUUFBUSxnQkFBRyxDQUFDO0NBQ2IsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbG9naW5Gb3JtLnRzXHJcbmNvbnN0IGFwaSA9IGdldEFwcCgpLmdsb2JhbERhdGE7ICAvLyDojrflj5blupTnlKjlrp7kvotcclxubGV0IGh0dHBzICA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL215UmVxdWVzdC5qcycpOyAgLy/ojrflj5ZhamF45pa55rOVXHJcbmxldCBUb2FzdCA9IHJlcXVpcmUoJy4uLy4uL21pbmlwcm9ncmFtX25wbS9AdmFudC93ZWFwcC90b2FzdC90b2FzdC5qcycpLmRlZmF1bHQ7XHJcbmxldCBEaWFsb2cgPSByZXF1aXJlKCcuLi8uLi9taW5pcHJvZ3JhbV9ucG0vQHZhbnQvd2VhcHAvZGlhbG9nL2RpYWxvZy5qcycpLmRlZmF1bHQ7XHJcblxyXG5QYWdlKHtcclxuICAvL+mhtemdouaVsOaNrlxyXG4gIGRhdGE6IHtcclxuICAgIHVzZXJJY29uOiAnaHR0cDovL3d3dy5leXVuaGFuLmNuL2ltYWdlcy9sb2dpbl8wMS5wbmcnLCAgICAgICAvL+eUqOaIt+WQjeWbvuagh1xyXG4gICAgcGFzc3dvcmRJY29uOiAnaHR0cDovL3d3dy5leXVuaGFuLmNuL2ltYWdlcy9sb2dpbl8wMi5wbmcnLCAgIC8v5a+G56CB5Zu+5qCHXHJcbiAgICBmb3JtRGF0ZTp7ICAvL+ihqOWNlVxyXG4gICAgICB1c2VybmFtZTogJycsXHJcbiAgICAgIHBhc3N3b3JkOiAnJ1xyXG4gICAgfSxcclxuICAgIGZvcm1ScnJvcjp7ICAvL+mqjOivgVxyXG4gICAgICB1c2VybmFtZUVycm9yOiAnJywgXHJcbiAgICAgIHBhc3N3b3JkRXJyb3I6ICcnLFxyXG4gICAgfSxcclxuICAgIHZlcmlmaWNhdGlvbjogZmFsc2UsICAgIC8v6aqM6K+B5Yik5patXHJcbiAgICBhY3RpdmU6ICd5aCcsXHJcbiAgICB6Z0Zvcm1EYXRlOnsgIC8v5Li7566h6KGo5Y2VXHJcbiAgICAgIHVzZXJuYW1lOiAnJyxcclxuICAgICAgcGFzc3dvcmQ6ICcnXHJcbiAgICB9LFxyXG4gICAgemdGb3JtUnJyb3I6eyAgLy/kuLvnrqHpqozor4FcclxuICAgICAgdXNlcm5hbWVFcnJvcjogJycsIFxyXG4gICAgICBwYXNzd29yZEVycm9yOiAnJyxcclxuICAgIH0sXHJcbiAgICB6Z1ZlcmlmaWNhdGlvbjogZmFsc2UsICAgIC8v6aqM6K+B5Yik5patXHJcbiAgfSxcclxuXHJcbiAgLy90YWLliIfmjaLop6blj5FcclxuICB0YWJDaGFuZ2UocmVzOmFueSk6dm9pZHtcclxuICAgIGFwaS5sb2dpblN0YXR1cyA9IHJlcy5kZXRhaWwubmFtZTsgIC8v55m75b2V5Yik5patXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBbXCJmb3JtRGF0ZS51c2VybmFtZVwiXTogJycsXHJcbiAgICAgIFtcImZvcm1EYXRlLnBhc3N3b3JkXCJdOiAnJyxcclxuICAgICAgW1wiZm9ybVJycm9yLnVzZXJuYW1lRXJyb3JcIl06ICcnLFxyXG4gICAgICBbXCJmb3JtUnJyb3IucGFzc3dvcmRFcnJvclwiXTogJydcclxuICAgIH0pXHJcbiAgfSxcclxuICBcclxuICAvL+eUqOaIt+WQjemqjOivgVxyXG4gIHVzZXJuYW1lQmx1cih2YWx1ZTphbnkpOnZvaWR7XHJcbiAgICAvL2xldCByZWc6YW55ID0gL15bLV9hLXpBLVowLTldezEsMjU1fSQvO1xyXG4gICAgLy9sZXQgc3RyOkJvb2xlYW4gPSByZWcudGVzdCh2YWx1ZS5kZXRhaWwpO1xyXG4gICAgaWYodmFsdWUuZGV0YWlsLnZhbHVlKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJmb3JtUnJyb3IudXNlcm5hbWVFcnJvclwiXTonJyxcclxuICAgICAgICBbXCJmb3JtRGF0ZS51c2VybmFtZVwiXTogdmFsdWUuZGV0YWlsLnZhbHVlLFxyXG4gICAgICAgIHZlcmlmaWNhdGlvbjogdHJ1ZVxyXG4gICAgICB9KVxyXG4gICAgICAvLyBpZihzdHIpe1xyXG4gICAgICAgXHJcbiAgICAgIC8vIH1lbHNle1xyXG4gICAgICAvLyAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIC8vICAgICBbXCJmb3JtUnJyb3IudXNlcm5hbWVFcnJvclwiXTon6K+36L6T5YWl5q2j56Gu55So5oi35ZCN77yI5Y+v5Lul5Li65pWw5a2X44CB5a2X5q+N44CB5LiL5YiS57q/77yJJyxcclxuICAgICAgLy8gICAgIFtcImZvcm1EYXRlLnVzZXJuYW1lXCJdOiB2YWx1ZS5kZXRhaWwsXHJcbiAgICAgIC8vICAgICB2ZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIC8vICAgfSlcclxuICAgICAgLy8gfVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiZm9ybVJycm9yLnVzZXJuYW1lRXJyb3JcIl06JycsXHJcbiAgICAgICAgW1wiZm9ybURhdGUudXNlcm5hbWVcIl06IHZhbHVlLmRldGFpbC52YWx1ZSxcclxuICAgICAgICB2ZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICB1c2VybmFtZUlucHV0KHZhbHVlOmFueSk6dm9pZHtcclxuICAgIC8vbGV0IHJlZzphbnkgPSAvXlstX2EtekEtWjAtOV17MSwyNTV9JC87XHJcbiAgICAvL2xldCBzdHI6Qm9vbGVhbiA9IHJlZy50ZXN0KHZhbHVlLmRldGFpbCk7XHJcbiAgICBpZih2YWx1ZS5kZXRhaWwpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImZvcm1ScnJvci51c2VybmFtZUVycm9yXCJdOicnLFxyXG4gICAgICAgIFtcImZvcm1EYXRlLnVzZXJuYW1lXCJdOiB2YWx1ZS5kZXRhaWwsXHJcbiAgICAgICAgdmVyaWZpY2F0aW9uOiB0cnVlXHJcbiAgICAgIH0pXHJcbiAgICAgIC8vIGlmKHN0cil7XHJcbiAgICAgICBcclxuICAgICAgLy8gfWVsc2V7XHJcbiAgICAgIC8vICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgLy8gICAgIFtcImZvcm1ScnJvci51c2VybmFtZUVycm9yXCJdOifor7fovpPlhaXmraPnoa7nlKjmiLflkI3vvIjlj6/ku6XkuLrmlbDlrZfjgIHlrZfmr43jgIHkuIvliJLnur/vvIknLFxyXG4gICAgICAvLyAgICAgW1wiZm9ybURhdGUudXNlcm5hbWVcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgLy8gICAgIHZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgLy8gICB9KVxyXG4gICAgICAvLyB9XHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJmb3JtUnJyb3IudXNlcm5hbWVFcnJvclwiXTonJyxcclxuICAgICAgICBbXCJmb3JtRGF0ZS51c2VybmFtZVwiXTogdmFsdWUuZGV0YWlsLFxyXG4gICAgICAgIHZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIC8v5a+G56CB6aqM6K+BXHJcbiAgcGFyc3N3b3JkSW5wdXQodmFsdWU6YW55KTp2b2lke1xyXG4gICAgLy9sZXQgcmVnOmFueSA9IC9eWy1fYS16QS1aMC05XXsxLDI1NX0kLztcclxuICAgIC8vbGV0IHN0cjpCb29sZWFuID0gcmVnLnRlc3QodmFsdWUuZGV0YWlsKTtcclxuICAgIGlmKHZhbHVlLmRldGFpbCl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiZm9ybVJycm9yLnBhc3N3b3JkRXJyb3JcIl06ICcnLFxyXG4gICAgICAgIFtcImZvcm1EYXRlLnBhc3N3b3JkXCJdOiB2YWx1ZS5kZXRhaWwsXHJcbiAgICAgICAgdmVyaWZpY2F0aW9uOiB0cnVlXHJcbiAgICAgIH0pXHJcbiAgICAgIC8vIGlmKHN0cil7XHJcbiAgICAgICAgXHJcbiAgICAgIC8vIH1lbHNle1xyXG4gICAgICAvLyAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIC8vICAgICBbXCJmb3JtUnJyb3IucGFzc3dvcmRFcnJvclwiXTon6K+36L6T5YWl5q2j56Gu5a+G56CB77yI5Y+v5Lul5Li65pWw5a2X44CB5a2X5q+N44CB5LiL5YiS57q/77yJJyxcclxuICAgICAgLy8gICAgIFtcImZvcm1EYXRlLnBhc3N3b3JkXCJdOiB2YWx1ZS5kZXRhaWwsXHJcbiAgICAgIC8vICAgICB2ZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIC8vICAgfSlcclxuICAgICAgLy8gfVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiZm9ybVJycm9yLnBhc3N3b3JkRXJyb3JcIl06JycsXHJcbiAgICAgICAgW1wiZm9ybURhdGUucGFzc3dvcmRcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICB2ZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICAvL+S4u+euoeeUqOaIt+WQjemqjOivgVxyXG4gIHpnVXNlcm5hbWVCbHVyKHZhbHVlOmFueSk6dm9pZHtcclxuICAgIC8vbGV0IHJlZzphbnkgPSAvXlstX2EtekEtWjAtOV17MSwyNTV9JC87XHJcbiAgICAvL2xldCBzdHI6Qm9vbGVhbiA9IHJlZy50ZXN0KHZhbHVlLmRldGFpbCk7XHJcbiAgICBpZih2YWx1ZS5kZXRhaWwudmFsdWUpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcInpnRm9ybVJycm9yLnVzZXJuYW1lRXJyb3JcIl06JycsXHJcbiAgICAgICAgW1wiemdGb3JtRGF0ZS51c2VybmFtZVwiXTogdmFsdWUuZGV0YWlsLnZhbHVlLFxyXG4gICAgICAgIHpnVmVyaWZpY2F0aW9uOiB0cnVlXHJcbiAgICAgIH0pXHJcbiAgICAgIC8vIGlmKHN0cil7XHJcbiAgICAgICAgXHJcbiAgICAgIC8vIH1lbHNle1xyXG4gICAgICAvLyAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIC8vICAgICBbXCJ6Z0Zvcm1ScnJvci51c2VybmFtZUVycm9yXCJdOifor7fovpPlhaXmraPnoa7nlKjmiLflkI3vvIjlj6/ku6XkuLrmlbDlrZfjgIHlrZfmr43jgIHkuIvliJLnur/vvIknLFxyXG4gICAgICAvLyAgICAgW1wiemdGb3JtRGF0ZS51c2VybmFtZVwiXTogdmFsdWUuZGV0YWlsLFxyXG4gICAgICAvLyAgICAgemdWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIC8vICAgfSlcclxuICAgICAgLy8gfVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiemdGb3JtUnJyb3IudXNlcm5hbWVFcnJvclwiXTonJyxcclxuICAgICAgICBbXCJ6Z0Zvcm1EYXRlLnVzZXJuYW1lXCJdOiB2YWx1ZS5kZXRhaWwudmFsdWUsXHJcbiAgICAgICAgemdWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICB6Z1VzZXJuYW1lSW5wdXQodmFsdWU6YW55KTp2b2lke1xyXG4gICAgLy9sZXQgcmVnOmFueSA9IC9eWy1fYS16QS1aMC05XXsxLDI1NX0kLztcclxuICAgIC8vbGV0IHN0cjpCb29sZWFuID0gcmVnLnRlc3QodmFsdWUuZGV0YWlsKTtcclxuICAgIGlmKHZhbHVlLmRldGFpbCl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiemdGb3JtUnJyb3IudXNlcm5hbWVFcnJvclwiXTonJyxcclxuICAgICAgICBbXCJ6Z0Zvcm1EYXRlLnVzZXJuYW1lXCJdOiB2YWx1ZS5kZXRhaWwsXHJcbiAgICAgICAgemdWZXJpZmljYXRpb246IHRydWVcclxuICAgICAgfSlcclxuICAgICAgLy8gaWYoc3RyKXtcclxuICAgICAgICBcclxuICAgICAgLy8gfWVsc2V7XHJcbiAgICAgIC8vICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgLy8gICAgIFtcInpnRm9ybVJycm9yLnVzZXJuYW1lRXJyb3JcIl06J+ivt+i+k+WFpeato+ehrueUqOaIt+WQje+8iOWPr+S7peS4uuaVsOWtl+OAgeWtl+avjeOAgeS4i+WIkue6v++8iScsXHJcbiAgICAgIC8vICAgICBbXCJ6Z0Zvcm1EYXRlLnVzZXJuYW1lXCJdOiB2YWx1ZS5kZXRhaWwsXHJcbiAgICAgIC8vICAgICB6Z1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgLy8gICB9KVxyXG4gICAgICAvLyB9XHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJ6Z0Zvcm1ScnJvci51c2VybmFtZUVycm9yXCJdOicnLFxyXG4gICAgICAgIFtcInpnRm9ybURhdGUudXNlcm5hbWVcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICB6Z1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIC8v5Li7566h5a+G56CB6aqM6K+BXHJcbiAgemdQYXJzc3dvcmRJbnB1dCh2YWx1ZTphbnkpOnZvaWR7XHJcbiAgICAvL2xldCByZWc6YW55ID0gL15bLV9hLXpBLVowLTldezEsMjU1fSQvO1xyXG4gICAgLy9sZXQgc3RyOkJvb2xlYW4gPSByZWcudGVzdCh2YWx1ZS5kZXRhaWwpO1xyXG4gICAgaWYodmFsdWUuZGV0YWlsKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJ6Z0Zvcm1ScnJvci5wYXNzd29yZEVycm9yXCJdOiAnJyxcclxuICAgICAgICBbXCJ6Z0Zvcm1EYXRlLnBhc3N3b3JkXCJdOiB2YWx1ZS5kZXRhaWwsXHJcbiAgICAgICAgemdWZXJpZmljYXRpb246IHRydWVcclxuICAgICAgfSlcclxuICAgICAgLy8gaWYoc3RyKXtcclxuICAgICAgICBcclxuICAgICAgLy8gfWVsc2V7XHJcbiAgICAgIC8vICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgLy8gICAgIFtcInpnRm9ybVJycm9yLnBhc3N3b3JkRXJyb3JcIl06J+ivt+i+k+WFpeato+ehruWvhuegge+8iOWPr+S7peS4uuaVsOWtl+OAgeWtl+avjeOAgeS4i+WIkue6v++8iScsXHJcbiAgICAgIC8vICAgICBbXCJ6Z0Zvcm1EYXRlLnBhc3N3b3JkXCJdOiB2YWx1ZS5kZXRhaWwsXHJcbiAgICAgIC8vICAgICB6Z1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgLy8gICB9KVxyXG4gICAgICAvLyB9XHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJ6Z0Zvcm1ScnJvci5wYXNzd29yZEVycm9yXCJdOicnLFxyXG4gICAgICAgIFtcInpnRm9ybURhdGUucGFzc3dvcmRcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICB6Z1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvL+eZu+W9leaMiemSrlxyXG4gIGxvZ2luRm4oKTp2b2lke1xyXG4gICAgaWYodGhpcy5kYXRhLmZvcm1EYXRlLnVzZXJuYW1lID09ICcnKXsgIC8v55So5oi35ZCNXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiZm9ybVJycm9yLnVzZXJuYW1lRXJyb3JcIl06ICfor7fovpPlhaXor4Hku7blj7fnoIEv56S+5Lya57uf5LiA5L+h55So5Luj56CBJyxcclxuICAgICAgICB2ZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaWYodGhpcy5kYXRhLmZvcm1EYXRlLnBhc3N3b3JkID09ICcnKXsgIC8v5a+G56CBXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiZm9ybVJycm9yLnBhc3N3b3JkRXJyb3JcIl06J+ivt+i+k+WFpeWvhueggScsXHJcbiAgICAgICAgdmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGlmKHRoaXMuZGF0YS52ZXJpZmljYXRpb24peyAgLy/pqozor4HpgJrov4dcclxuICAgICAgLy/kuKrkurrmnLrmnoTnmbvlvZVcclxuICAgICAgaHR0cHMucmVxdWVzdChhcGkubG9naW4gKyAnP2FjY291bnQ9JyArIHRoaXMuZGF0YS5mb3JtRGF0ZS51c2VybmFtZSArICcmcGFzc3dvcmQ9JyArIHRoaXMuZGF0YS5mb3JtRGF0ZS5wYXNzd29yZCwgbnVsbCwgJ1BPU1QnKVxyXG4gICAgICAudGhlbigocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICAgIGlmKHJlcy50b2tlbil7XHJcbiAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygndG9rZW4nLCByZXMudG9rZW4pOyAgLy/lrZjlgqh0b2tlblxyXG4gICAgICAgICAgLy93eC5uYXZpZ2F0ZUJhY2soKTsgIC8v5ZCO6YCAXHJcbiAgICAgICAgICB3eC5zd2l0Y2hUYWIoeyBcclxuICAgICAgICAgICAgdXJsOicuLi9ob21lL2hvbWUnXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgICAgVG9hc3QoZXJyKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLy/kuLvnrqHnmbvlvZXmjInpkq5cclxuICB6Z0xvZ2luRm4oKTp2b2lke1xyXG4gICAgaWYodGhpcy5kYXRhLnpnRm9ybURhdGUudXNlcm5hbWUgPT0gJycpeyAgLy/nlKjmiLflkI1cclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJ6Z0Zvcm1ScnJvci51c2VybmFtZUVycm9yXCJdOiAn6K+36L6T5YWl55So5oi35ZCNJyxcclxuICAgICAgICB6Z1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBpZih0aGlzLmRhdGEuemdGb3JtRGF0ZS5wYXNzd29yZCA9PSAnJyl7ICAvL+WvhueggVxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcInpnRm9ybVJycm9yLnBhc3N3b3JkRXJyb3JcIl06J+ivt+i+k+WFpeWvhueggScsXHJcbiAgICAgICAgemdWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaWYodGhpcy5kYXRhLnpnVmVyaWZpY2F0aW9uKXsgIC8v6aqM6K+B6YCa6L+HXHJcbiAgICAgIC8v5Li7566h5Y2V5L2N55m75b2VXHJcbiAgICAgIGh0dHBzLnpnUmVxdWVzdChhcGkuZGFud2VpTG9naW4sIHtcclxuICAgICAgICB1c2VybmFtZTogdGhpcy5kYXRhLnpnRm9ybURhdGUudXNlcm5hbWUsXHJcbiAgICAgICAgcGFzc3dvcmQ6IHRoaXMuZGF0YS56Z0Zvcm1EYXRlLnBhc3N3b3JkXHJcbiAgICAgIH0sICdQT1NUJylcclxuICAgICAgLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgICBpZihyZXMudG9rZW4pe1xyXG4gICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ3Rva2VuJywgcmVzLnRva2VuKTsgIC8v5a2Y5YKodG9rZW5cclxuICAgICAgICAgIHd4LnN3aXRjaFRhYih7IFxyXG4gICAgICAgICAgICB1cmw6Jy4uL2hvbWUvaG9tZSdcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgICBUb2FzdChlcnIpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvL+azqOWGjFxyXG4gIHJlZ2lzdGVyZWRGbigpOnZvaWR7XHJcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgdXJsOiAnLi4vcmVnaXN0ZXJlZC9yZWdpc3RlcmVkJ1xyXG4gICAgfSlcclxuICB9LFxyXG4gIFxyXG5cclxuICAvL+azqOWGjOW8ueahhlxyXG4gIHJlZ2lzdGVyZWQoKTp2b2lke1xyXG4gICAgRGlhbG9nLmFsZXJ0KHtcclxuICAgICAgdGl0bGU6ICfms6jlhozmj5DnpLonLFxyXG4gICAgICBtZXNzYWdlQWxpZ246ICdjZW50ZXInLFxyXG4gICAgICBtZXNzYWdlOiAn6K+355SoUEPnq6/miZPlvIDnvZHlnYDov5vooYzms6jlhoxodHRwOi8vd3d3LnRhbGVudGVsaW5rLmNvbScsXHJcbiAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgXHJcbiAgICB9KTtcclxuICB9LFxyXG4gIFxyXG5cclxuXHJcblxyXG4gIC8v6aG16Z2i5Yid5aeL5YyWXHJcbiAgb25Mb2FkKCl7XHJcbiAgICBhcGkubG9naW5TdGF0dXMgPSAneWgnOyAgLy/nmbvlvZXliKTmlq1cclxuICB9LFxyXG5cclxuICAvL+mhtemdoua4suafk+WujOaIkFxyXG4gIG9uUmVhZHkoKXt9LFxyXG5cclxuICAvL+mhtemdouaYvuekulxyXG4gIG9uU2hvdygpe30sXHJcblxyXG4gIC8v6aG16Z2i6ZqQ6JePXHJcbiAgb25IaWRlKCl7fSxcclxuXHJcbiAgLy/pobXpnaLlhbPpl61cclxuICBvblVubG9hZCgpe31cclxufSlcclxuZXhwb3J0IHt9O1xyXG4iXX0=