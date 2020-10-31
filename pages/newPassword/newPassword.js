"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api = getApp().globalData;
var https = require('../../utils/myRequest.js');
var Toast = require('../../miniprogram_npm/@vant/weapp/toast/toast.js').default;
Page({
    data: {
        formDate: {
            oldPasswold: '',
            newPasswold: '',
            repeatPasswold: '',
        },
        formRrror: {
            oldError: '',
            newError: '',
            repeatError: '',
        },
        verification: false,
    },
    oldInput: function (event) {
        var _a;
        if (event.detail) {
            this.setData((_a = {},
                _a["formRrror.oldError"] = '',
                _a["formDate.oldPasswold"] = event.detail,
                _a.verification = false,
                _a));
        }
    },
    newInput: function (event) {
        var _a, _b, _c;
        var reg = /^[-_a-zA-Z0-9]{1,255}$/;
        var str = reg.test(event.detail);
        if (event.detail) {
            if (str) {
                this.setData((_a = {},
                    _a["formRrror.newError"] = '',
                    _a["formDate.newPasswold"] = event.detail,
                    _a.verification = false,
                    _a));
            }
            else {
                this.setData((_b = {},
                    _b["formRrror.newError"] = '请输入正确密码（可以为数字、字母、下划线）',
                    _b["formDate.newPasswold"] = event.detail,
                    _b.verification = true,
                    _b));
            }
        }
        else {
            this.setData((_c = {},
                _c["formRrror.newError"] = '',
                _c["formDate.newPasswold"] = event.detail,
                _c.verification = false,
                _c));
        }
    },
    repeatInput: function (event) {
        var _a;
        if (event.detail) {
            this.setData((_a = {},
                _a["formRrror.repeatError"] = '',
                _a["formDate.repeatPasswold"] = event.detail,
                _a.verification = false,
                _a));
        }
    },
    loginFn: function () {
        var _a, _b, _c, _d;
        if (this.data.formDate.oldPasswold == '') {
            this.setData((_a = {},
                _a["formRrror.oldError"] = '请输入原密码',
                _a.verification = true,
                _a));
        }
        else if (this.data.formDate.newPasswold == '') {
            this.setData((_b = {},
                _b["formRrror.newError"] = '请输入新密码',
                _b.verification = true,
                _b));
        }
        else if (this.data.formDate.repeatPasswold == '') {
            this.setData((_c = {},
                _c["formRrror.repeatError"] = '请确认新密码',
                _c.verification = true,
                _c));
        }
        else if (this.data.formDate.newPasswold != this.data.formDate.repeatPasswold) {
            this.setData((_d = {},
                _d["formRrror.repeatError"] = '两次输入密码不一致',
                _d.verification = true,
                _d));
        }
        else {
            https.successRequest(api.editPass + '?id=' + api.userId + '&password=' + this.data.formDate.newPasswold + '&oldPassword=' + this.data.formDate.oldPasswold, null, 'POST')
                .then(function (res) {
                if (res.code == 200) {
                    Toast('密码修改成功！');
                    wx.navigateTo({
                        url: '../loginForm/loginForm'
                    });
                }
            }, function (err) {
                Toast(err);
            });
        }
    },
    onLoad: function () {
        wx.setNavigationBarTitle({
            title: "修改密码"
        });
    },
    onReady: function () { },
    onShow: function () { },
    onHide: function () {
        var _a;
        this.setData((_a = {},
            _a["formDate.oldPasswold"] = '',
            _a["formDate.newPasswold"] = '',
            _a["formDate.repeatPasswold"] = '',
            _a));
    },
    onUnload: function () { }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3UGFzc3dvcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZXdQYXNzd29yZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBRSxDQUFDLFVBQVUsQ0FBQztBQUNoQyxJQUFJLEtBQUssR0FBSSxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUNqRCxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsa0RBQWtELENBQUMsQ0FBQyxPQUFPLENBQUM7QUFFaEYsSUFBSSxDQUFDO0lBRUgsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFDO1lBQ1AsV0FBVyxFQUFFLEVBQUU7WUFDZixXQUFXLEVBQUUsRUFBRTtZQUNmLGNBQWMsRUFBRSxFQUFFO1NBQ25CO1FBQ0QsU0FBUyxFQUFDO1lBQ1IsUUFBUSxFQUFFLEVBQUU7WUFDWixRQUFRLEVBQUUsRUFBRTtZQUNaLFdBQVcsRUFBRSxFQUFFO1NBQ2hCO1FBQ0QsWUFBWSxFQUFFLEtBQUs7S0FDcEI7SUFFRCxRQUFRLEVBQVIsVUFBUyxLQUFTOztRQUNoQixJQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUM7WUFDZCxJQUFJLENBQUMsT0FBTztnQkFDVixHQUFDLG9CQUFvQixJQUFHLEVBQUU7Z0JBQzFCLEdBQUMsc0JBQXNCLElBQUcsS0FBSyxDQUFDLE1BQU07Z0JBQ3RDLGVBQVksR0FBRSxLQUFLO29CQUNuQixDQUFBO1NBQ0g7SUFDSCxDQUFDO0lBR0QsUUFBUSxFQUFSLFVBQVMsS0FBUzs7UUFDaEIsSUFBSSxHQUFHLEdBQU8sd0JBQXdCLENBQUM7UUFDdkMsSUFBSSxHQUFHLEdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekMsSUFBRyxLQUFLLENBQUMsTUFBTSxFQUFDO1lBQ2QsSUFBRyxHQUFHLEVBQUM7Z0JBQ0wsSUFBSSxDQUFDLE9BQU87b0JBQ1YsR0FBQyxvQkFBb0IsSUFBRyxFQUFFO29CQUMx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T0FBTztZQUNWLEdBQUMsc0JBQXNCLElBQUcsRUFBRTtZQUM1QixHQUFDLHNCQUFzQixJQUFHLEVBQUU7WUFDNUIsR0FBQyx5QkFBeUIsSUFBRyxFQUFFO2dCQUMvQixDQUFBO0lBQ0osQ0FBQztJQUdELFFBQVEsZ0JBQUcsQ0FBQztDQUNiLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIG5ld1Bhc3N3b3JkLnRzXHJcbmNvbnN0IGFwaSA9IGdldEFwcCgpLmdsb2JhbERhdGE7ICAvLyDojrflj5blupTnlKjlrp7kvotcclxubGV0IGh0dHBzICA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL215UmVxdWVzdC5qcycpOyAgLy/ojrflj5ZhamF45pa55rOVXHJcbmxldCBUb2FzdCA9IHJlcXVpcmUoJy4uLy4uL21pbmlwcm9ncmFtX25wbS9AdmFudC93ZWFwcC90b2FzdC90b2FzdC5qcycpLmRlZmF1bHQ7XHJcblxyXG5QYWdlKHtcclxuICAvL+mhtemdouaVsOaNrlxyXG4gIGRhdGE6IHtcclxuICAgIGZvcm1EYXRlOnsgIC8v6KGo5Y2VXHJcbiAgICAgIG9sZFBhc3N3b2xkOiAnJywgICAgIC8v5Y6f5a+G56CBXHJcbiAgICAgIG5ld1Bhc3N3b2xkOiAnJywgICAgIC8v5paw5a+G56CBXHJcbiAgICAgIHJlcGVhdFBhc3N3b2xkOiAnJywgIC8v56Gu6K6k5a+G56CBXHJcbiAgICB9LFxyXG4gICAgZm9ybVJycm9yOnsgIC8v6aqM6K+BXHJcbiAgICAgIG9sZEVycm9yOiAnJywgXHJcbiAgICAgIG5ld0Vycm9yOiAnJyxcclxuICAgICAgcmVwZWF0RXJyb3I6ICcnLFxyXG4gICAgfSxcclxuICAgIHZlcmlmaWNhdGlvbjogZmFsc2UsICAgIC8v6aqM6K+B5Yik5patXHJcbiAgfSxcclxuXHJcbiAgb2xkSW5wdXQoZXZlbnQ6YW55KTp2b2lkIHsgICAvL+WOn+WvhueggVxyXG4gICAgaWYoZXZlbnQuZGV0YWlsKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJmb3JtUnJyb3Iub2xkRXJyb3JcIl06ICcnLFxyXG4gICAgICAgIFtcImZvcm1EYXRlLm9sZFBhc3N3b2xkXCJdOiBldmVudC5kZXRhaWwsXHJcbiAgICAgICAgdmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG5cclxuICBuZXdJbnB1dChldmVudDphbnkpOnZvaWQgeyAgIC8v5paw5a+G56CBXHJcbiAgICBsZXQgcmVnOmFueSA9IC9eWy1fYS16QS1aMC05XXsxLDI1NX0kLztcclxuICAgIGxldCBzdHI6Qm9vbGVhbiA9IHJlZy50ZXN0KGV2ZW50LmRldGFpbCk7XHJcbiAgICBpZihldmVudC5kZXRhaWwpe1xyXG4gICAgICBpZihzdHIpe1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBbXCJmb3JtUnJyb3IubmV3RXJyb3JcIl06ICcnLFxyXG4gICAgICAgICAgW1wiZm9ybURhdGUubmV3UGFzc3dvbGRcIl06IGV2ZW50LmRldGFpbCxcclxuICAgICAgICAgIHZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgW1wiZm9ybVJycm9yLm5ld0Vycm9yXCJdOifor7fovpPlhaXmraPnoa7lr4bnoIHvvIjlj6/ku6XkuLrmlbDlrZfjgIHlrZfmr43jgIHkuIvliJLnur/vvIknLFxyXG4gICAgICAgICAgW1wiZm9ybURhdGUubmV3UGFzc3dvbGRcIl06IGV2ZW50LmRldGFpbCxcclxuICAgICAgICAgIHZlcmlmaWNhdGlvbjogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImZvcm1ScnJvci5uZXdFcnJvclwiXTonJyxcclxuICAgICAgICBbXCJmb3JtRGF0ZS5uZXdQYXNzd29sZFwiXTogZXZlbnQuZGV0YWlsLFxyXG4gICAgICAgIHZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG5cclxuICByZXBlYXRJbnB1dChldmVudDphbnkpOnZvaWQgeyAgIC8v56Gu6K6k5paw5a+G56CBXHJcbiAgICBpZihldmVudC5kZXRhaWwpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImZvcm1ScnJvci5yZXBlYXRFcnJvclwiXTogJycsXHJcbiAgICAgICAgW1wiZm9ybURhdGUucmVwZWF0UGFzc3dvbGRcIl06IGV2ZW50LmRldGFpbCxcclxuICAgICAgICB2ZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcblxyXG4gIGxvZ2luRm4oKTp2b2lkeyAgLy/kv53lrZhcclxuICAgIGlmKHRoaXMuZGF0YS5mb3JtRGF0ZS5vbGRQYXNzd29sZCA9PSAnJyl7ICAvL+WOn+WvhueggVxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImZvcm1ScnJvci5vbGRFcnJvclwiXTon6K+36L6T5YWl5Y6f5a+G56CBJyxcclxuICAgICAgICB2ZXJpZmljYXRpb246IHRydWVcclxuICAgICAgfSlcclxuICAgIH1lbHNlIGlmKHRoaXMuZGF0YS5mb3JtRGF0ZS5uZXdQYXNzd29sZCA9PSAnJyl7ICAvL+aWsOWvhueggVxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImZvcm1ScnJvci5uZXdFcnJvclwiXTon6K+36L6T5YWl5paw5a+G56CBJyxcclxuICAgICAgICB2ZXJpZmljYXRpb246IHRydWVcclxuICAgICAgfSlcclxuICAgIH1lbHNlIGlmKHRoaXMuZGF0YS5mb3JtRGF0ZS5yZXBlYXRQYXNzd29sZCA9PSAnJyl7ICAvL+ehruiupOS/oeWvhueggVxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImZvcm1ScnJvci5yZXBlYXRFcnJvclwiXTon6K+356Gu6K6k5paw5a+G56CBJyxcclxuICAgICAgICB2ZXJpZmljYXRpb246IHRydWVcclxuICAgICAgfSlcclxuICAgIH1lbHNlIGlmKHRoaXMuZGF0YS5mb3JtRGF0ZS5uZXdQYXNzd29sZCAhPSB0aGlzLmRhdGEuZm9ybURhdGUucmVwZWF0UGFzc3dvbGQpeyAgLy/noa7orqTkv6Hlr4bnoIFcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJmb3JtUnJyb3IucmVwZWF0RXJyb3JcIl06J+S4pOasoei+k+WFpeWvhueggeS4jeS4gOiHtCcsXHJcbiAgICAgICAgdmVyaWZpY2F0aW9uOiB0cnVlXHJcbiAgICAgIH0pXHJcbiAgICB9ZWxzZXtcclxuICAgICAgaHR0cHMuc3VjY2Vzc1JlcXVlc3QoYXBpLmVkaXRQYXNzICsgJz9pZD0nICsgYXBpLnVzZXJJZCArICcmcGFzc3dvcmQ9JyArIHRoaXMuZGF0YS5mb3JtRGF0ZS5uZXdQYXNzd29sZCArICcmb2xkUGFzc3dvcmQ9JyArIHRoaXMuZGF0YS5mb3JtRGF0ZS5vbGRQYXNzd29sZCwgbnVsbCwgJ1BPU1QnKVxyXG4gICAgICAudGhlbigocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICAgIGlmKHJlcy5jb2RlID09IDIwMCl7XHJcbiAgICAgICAgICBUb2FzdCgn5a+G56CB5L+u5pS55oiQ5Yqf77yBJyk7XHJcbiAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgdXJsOiAnLi4vbG9naW5Gb3JtL2xvZ2luRm9ybSdcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICAgIFRvYXN0KGVycik7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG5cclxuICAvL+mhtemdouWIneWni+WMllxyXG4gIG9uTG9hZCgpe1xyXG4gICAgLy/pobXpnaLmoIfpophcclxuICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7ICAgICBcclxuICAgICAgdGl0bGU6IFwi5L+u5pS55a+G56CBXCJcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIC8v6aG16Z2i5riy5p+T5a6M5oiQXHJcbiAgb25SZWFkeSgpe30sXHJcblxyXG4gIC8v6aG16Z2i5pi+56S6XHJcbiAgb25TaG93KCl7fSxcclxuXHJcbiAgLy/pobXpnaLpmpDol49cclxuICBvbkhpZGUoKXtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIFtcImZvcm1EYXRlLm9sZFBhc3N3b2xkXCJdOiAnJyxcclxuICAgICAgW1wiZm9ybURhdGUubmV3UGFzc3dvbGRcIl06ICcnLFxyXG4gICAgICBbXCJmb3JtRGF0ZS5yZXBlYXRQYXNzd29sZFwiXTogJydcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgLy/pobXpnaLlhbPpl61cclxuICBvblVubG9hZCgpe31cclxufSlcclxuZXhwb3J0IHt9O1xyXG4iXX0=