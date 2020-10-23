"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api = getApp().globalData;
var https = require('../../utils/myRequest.js');
var Toast = require('../../miniprogram_npm/@vant/weapp/toast/toast.js').default;
Page({
    data: {
        userIcon: 'http://frontfile.eyunhan.com/zmq/mobile/icon_fw.png',
        passwordIcon: 'http://frontfile.eyunhan.com/zmq/mobile/icon_ln.png',
        formDate: {
            username: '',
            password: ''
        },
        formRrror: {
            usernameError: '',
            passwordError: '',
        },
        verification: false,
    },
    usernameInput: function (value) {
        var _a, _b, _c;
        var reg = /^[-_a-zA-Z0-9]{1,255}$/;
        var str = reg.test(value.detail);
        if (value.detail) {
            if (str) {
                this.setData((_a = {},
                    _a["formRrror.usernameError"] = '',
                    _a["formDate.username"] = value.detail,
                    _a.verification = true,
                    _a));
            }
            else {
                this.setData((_b = {},
                    _b["formRrror.usernameError"] = '请输入正确用户名（可以为数字、字母、下划线）',
                    _b["formDate.username"] = value.detail,
                    _b.verification = false,
                    _b));
            }
        }
        else {
            this.setData((_c = {},
                _c["formRrror.usernameError"] = '',
                _c["formDate.username"] = value.detail,
                _c.verification = false,
                _c));
        }
    },
    parsswordInput: function (value) {
        var _a, _b, _c;
        var reg = /^[-_a-zA-Z0-9]{1,255}$/;
        var str = reg.test(value.detail);
        if (value.detail) {
            if (str) {
                this.setData((_a = {},
                    _a["formRrror.passwordError"] = '',
                    _a["formDate.password"] = value.detail,
                    _a.verification = true,
                    _a));
            }
            else {
                this.setData((_b = {},
                    _b["formRrror.passwordError"] = '请输入正确密码（可以为数字、字母、下划线）',
                    _b["formDate.password"] = value.detail,
                    _b.verification = false,
                    _b));
            }
        }
        else {
            this.setData((_c = {},
                _c["formRrror.passwordError"] = '',
                _c["formDate.password"] = value.detail,
                _c.verification = false,
                _c));
        }
    },
    loginFn: function () {
        var _a, _b;
        if (this.data.formDate.username == '') {
            this.setData((_a = {},
                _a["formRrror.usernameError"] = '请输入用户名',
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
                    wx.navigateBack();
                }
            }, function (err) {
                Toast(err);
            });
        }
    },
    onLoad: function () { },
    onReady: function () { },
    onShow: function () { },
    onHide: function () { },
    onUnload: function () { }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW5Gb3JtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW5Gb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFFLENBQUMsVUFBVSxDQUFDO0FBQ2hDLElBQUksS0FBSyxHQUFJLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0FBQ2pELElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxrREFBa0QsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUVoRixJQUFJLENBQUM7SUFFSCxJQUFJLEVBQUU7UUFDSixRQUFRLEVBQUUscURBQXFEO1FBQy9ELFlBQVksRUFBRSxxREFBcUQ7UUFDbkUsUUFBUSxFQUFDO1lBQ1AsUUFBUSxFQUFFLEVBQUU7WUFDWixRQUFRLEVBQUUsRUFBRTtTQUNiO1FBQ0QsU0FBUyxFQUFDO1lBQ1IsYUFBYSxFQUFFLEVBQUU7WUFDakIsYUFBYSxFQUFFLEVBQUU7U0FDbEI7UUFDRCxZQUFZLEVBQUUsS0FBSztLQUNwQjtJQUdELGFBQWEsRUFBYixVQUFjLEtBQVM7O1FBQ3JCLElBQUksR0FBRyxHQUFPLHdCQUF3QixDQUFDO1FBQ3ZDLElBQUksR0FBRyxHQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pDLElBQUcsS0FBSyxDQUFDLE1BQU0sRUFBQztZQUNkLElBQUcsR0FBRyxFQUFDO2dCQUNMLElBQUksQ0FBQyxPQUFPO29CQUNWLEdBQUMseUJBQXlCLElBQUUsRUFBRTtvQkFDOUIsR0FBQyxtQkFBbUIsSUFBRyxLQUFLLENBQUMsTUFBTTtvQkFDbkMsZUFBWSxHQUFFLElBQUk7d0JBQ2xCLENBQUE7YUFDSDtpQkFBSTtnQkFDSCxJQUFJLENBQUMsT0FBTztvQkFDVixHQUFDLHlCQUF5QixJQUFFLHdCQUF3QjtvQkFDcEQsR0FBQyxtQkFBbUIsSUFBRyxLQUFLLENBQUMsTUFBTTtvQkFDbkMsZUFBWSxHQUFFLEtBQUs7d0JBQ25CLENBQUE7YUFDSDtTQUNGO2FBQUk7WUFDSCxJQUFJLENBQUMsT0FBTztnQkFDVixHQUFDLHlCQUF5QixJQUFFLEVBQUU7Z0JBQzlCLEdBQUMsbUJBQW1CLElBQUcsS0FBSyxDQUFDLE1BQU07Z0JBQ25DLGVBQVksR0FBRSxLQUFLO29CQUNuQixDQUFBO1NBQ0g7SUFDSCxDQUFDO0lBRUQsY0FBYyxFQUFkLFVBQWUsS0FBUzs7UUFDdEIsSUFBSSxHQUFHLEdBQU8sd0JBQXdCLENBQUM7UUFDdkMsSUFBSSxHQUFHLEdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekMsSUFBRyxLQUFLLENBQUMsTUFBTSxFQUFDO1lBQ2QsSUFBRyxHQUFHLEVBQUM7Z0JBQ0wsSUFBSSxDQUFDLE9BQU87b0JBQ1YsR0FBQyx5QkFBeUIsSUFBRyxFQUFFO29CQUMvQixHQUFDLG1CQUFtQixJQUFHLEtBQUssQ0FBQyxNQUFNO29CQUNuQyxlQUFZLEdBQUUsSUFBSTt3QkFDbEIsQ0FBQTthQUNIO2lCQUFJO2dCQUNILElBQUksQ0FBQyxPQUFPO29CQUNWLEdBQUMseUJBQXlCLElBQUUsdUJBQXVCO29CQUNuRCxHQUFDLG1CQUFtQixJQUFHLEtBQUssQ0FBQyxNQUFNO29CQUNuQyxlQUFZLEdBQUUsS0FBSzt3QkFDbkIsQ0FBQTthQUNIO1NBQ0Y7YUFBSTtZQUNILElBQUksQ0FBQyxPQUFPO2dCQUNWLEdBQUMseUJBQXlCLElBQUUsRUFBRTtnQkFDOUIsR0FBQyxtQkFBbUIsSUFBRyxLQUFLLENBQUMsTUFBTTtnQkFDbkMsZUFBWSxHQUFFLEtBQUs7b0JBQ25CLENBQUE7U0FDSDtJQUNILENBQUM7SUFHRCxPQUFPLEVBQVA7O1FBQ0UsSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLElBQUksRUFBRSxFQUFDO1lBQ25DLElBQUksQ0FBQyxPQUFPO2dCQUNWLEdBQUMseUJBQXlCLElBQUUsUUFBUTtnQkFDcEMsZUFBWSxHQUFFLEtBQUs7b0JBQ25CLENBQUE7U0FDSDtRQUVELElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxJQUFJLEVBQUUsRUFBQztZQUNuQyxJQUFJLENBQUMsT0FBTztnQkFDVixHQUFDLHlCQUF5QixJQUFFLE9BQU87Z0JBQ25DLGVBQVksR0FBRSxLQUFLO29CQUNuQixDQUFBO1NBQ0g7UUFFRCxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFDO1lBQ3hCLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQztpQkFDOUgsSUFBSSxDQUFDLFVBQUMsR0FBTztnQkFDWixJQUFHLEdBQUcsQ0FBQyxLQUFLLEVBQUM7b0JBQ1gsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN0QyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7aUJBQ25CO1lBQ0gsQ0FBQyxFQUFDLFVBQUMsR0FBTztnQkFDUixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDYixDQUFDLENBQUMsQ0FBQztTQUNKO0lBRUgsQ0FBQztJQUdELE1BQU0sZ0JBQUcsQ0FBQztJQUdWLE9BQU8sZ0JBQUcsQ0FBQztJQUdYLE1BQU0sZ0JBQUcsQ0FBQztJQUdWLE1BQU0sZ0JBQUcsQ0FBQztJQUdWLFFBQVEsZ0JBQUcsQ0FBQztDQUNiLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGxvZ2luRm9ybS50c1xyXG5jb25zdCBhcGkgPSBnZXRBcHAoKS5nbG9iYWxEYXRhOyAgLy8g6I635Y+W5bqU55So5a6e5L6LXHJcbmxldCBodHRwcyAgPSByZXF1aXJlKCcuLi8uLi91dGlscy9teVJlcXVlc3QuanMnKTsgIC8v6I635Y+WYWpheOaWueazlVxyXG5sZXQgVG9hc3QgPSByZXF1aXJlKCcuLi8uLi9taW5pcHJvZ3JhbV9ucG0vQHZhbnQvd2VhcHAvdG9hc3QvdG9hc3QuanMnKS5kZWZhdWx0O1xyXG5cclxuUGFnZSh7XHJcbiAgLy/pobXpnaLmlbDmja5cclxuICBkYXRhOiB7XHJcbiAgICB1c2VySWNvbjogJ2h0dHA6Ly9mcm9udGZpbGUuZXl1bmhhbi5jb20vem1xL21vYmlsZS9pY29uX2Z3LnBuZycsICAgICAgIC8v55So5oi35ZCN5Zu+5qCHXHJcbiAgICBwYXNzd29yZEljb246ICdodHRwOi8vZnJvbnRmaWxlLmV5dW5oYW4uY29tL3ptcS9tb2JpbGUvaWNvbl9sbi5wbmcnLCAgIC8v5a+G56CB5Zu+5qCHXHJcbiAgICBmb3JtRGF0ZTp7ICAvL+ihqOWNlVxyXG4gICAgICB1c2VybmFtZTogJycsXHJcbiAgICAgIHBhc3N3b3JkOiAnJ1xyXG4gICAgfSxcclxuICAgIGZvcm1ScnJvcjp7ICAvL+mqjOivgVxyXG4gICAgICB1c2VybmFtZUVycm9yOiAnJywgXHJcbiAgICAgIHBhc3N3b3JkRXJyb3I6ICcnLFxyXG4gICAgfSxcclxuICAgIHZlcmlmaWNhdGlvbjogZmFsc2UsICAgIC8v6aqM6K+B5Yik5patXHJcbiAgfSxcclxuXHJcbiAgLy/nlKjmiLflkI3pqozor4FcclxuICB1c2VybmFtZUlucHV0KHZhbHVlOmFueSk6dm9pZHtcclxuICAgIGxldCByZWc6YW55ID0gL15bLV9hLXpBLVowLTldezEsMjU1fSQvO1xyXG4gICAgbGV0IHN0cjpCb29sZWFuID0gcmVnLnRlc3QodmFsdWUuZGV0YWlsKTtcclxuICAgIGlmKHZhbHVlLmRldGFpbCl7XHJcbiAgICAgIGlmKHN0cil7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIFtcImZvcm1ScnJvci51c2VybmFtZUVycm9yXCJdOicnLFxyXG4gICAgICAgICAgW1wiZm9ybURhdGUudXNlcm5hbWVcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICAgIHZlcmlmaWNhdGlvbjogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBbXCJmb3JtUnJyb3IudXNlcm5hbWVFcnJvclwiXTon6K+36L6T5YWl5q2j56Gu55So5oi35ZCN77yI5Y+v5Lul5Li65pWw5a2X44CB5a2X5q+N44CB5LiL5YiS57q/77yJJyxcclxuICAgICAgICAgIFtcImZvcm1EYXRlLnVzZXJuYW1lXCJdOiB2YWx1ZS5kZXRhaWwsXHJcbiAgICAgICAgICB2ZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiZm9ybVJycm9yLnVzZXJuYW1lRXJyb3JcIl06JycsXHJcbiAgICAgICAgW1wiZm9ybURhdGUudXNlcm5hbWVcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICB2ZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICAvL+WvhueggemqjOivgVxyXG4gIHBhcnNzd29yZElucHV0KHZhbHVlOmFueSk6dm9pZHtcclxuICAgIGxldCByZWc6YW55ID0gL15bLV9hLXpBLVowLTldezEsMjU1fSQvO1xyXG4gICAgbGV0IHN0cjpCb29sZWFuID0gcmVnLnRlc3QodmFsdWUuZGV0YWlsKTtcclxuICAgIGlmKHZhbHVlLmRldGFpbCl7XHJcbiAgICAgIGlmKHN0cil7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIFtcImZvcm1ScnJvci5wYXNzd29yZEVycm9yXCJdOiAnJyxcclxuICAgICAgICAgIFtcImZvcm1EYXRlLnBhc3N3b3JkXCJdOiB2YWx1ZS5kZXRhaWwsXHJcbiAgICAgICAgICB2ZXJpZmljYXRpb246IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgW1wiZm9ybVJycm9yLnBhc3N3b3JkRXJyb3JcIl06J+ivt+i+k+WFpeato+ehruWvhuegge+8iOWPr+S7peS4uuaVsOWtl+OAgeWtl+avjeOAgeS4i+WIkue6v++8iScsXHJcbiAgICAgICAgICBbXCJmb3JtRGF0ZS5wYXNzd29yZFwiXTogdmFsdWUuZGV0YWlsLFxyXG4gICAgICAgICAgdmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImZvcm1ScnJvci5wYXNzd29yZEVycm9yXCJdOicnLFxyXG4gICAgICAgIFtcImZvcm1EYXRlLnBhc3N3b3JkXCJdOiB2YWx1ZS5kZXRhaWwsXHJcbiAgICAgICAgdmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8v55m75b2V5oyJ6ZKuXHJcbiAgbG9naW5GbigpOnZvaWR7XHJcbiAgICBpZih0aGlzLmRhdGEuZm9ybURhdGUudXNlcm5hbWUgPT0gJycpeyAgLy/nlKjmiLflkI1cclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJmb3JtUnJyb3IudXNlcm5hbWVFcnJvclwiXTon6K+36L6T5YWl55So5oi35ZCNJyxcclxuICAgICAgICB2ZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaWYodGhpcy5kYXRhLmZvcm1EYXRlLnBhc3N3b3JkID09ICcnKXsgIC8v5a+G56CBXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiZm9ybVJycm9yLnBhc3N3b3JkRXJyb3JcIl06J+ivt+i+k+WFpeWvhueggScsXHJcbiAgICAgICAgdmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGlmKHRoaXMuZGF0YS52ZXJpZmljYXRpb24peyAgLy/pqozor4HpgJrov4dcclxuICAgICAgaHR0cHMucmVxdWVzdChhcGkubG9naW4gKyAnP2FjY291bnQ9JyArIHRoaXMuZGF0YS5mb3JtRGF0ZS51c2VybmFtZSArICcmcGFzc3dvcmQ9JyArIHRoaXMuZGF0YS5mb3JtRGF0ZS5wYXNzd29yZCwgbnVsbCwgJ1BPU1QnKVxyXG4gICAgICAudGhlbigocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICAgIGlmKHJlcy50b2tlbil7XHJcbiAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygndG9rZW4nLCByZXMudG9rZW4pOyAgLy/lrZjlgqh0b2tlblxyXG4gICAgICAgICAgd3gubmF2aWdhdGVCYWNrKCk7ICAvL+WQjumAgFxyXG4gICAgICAgIH1cclxuICAgICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgICBUb2FzdChlcnIpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gIH0sXHJcblxyXG4gIC8v6aG16Z2i5Yid5aeL5YyWXHJcbiAgb25Mb2FkKCl7fSxcclxuXHJcbiAgLy/pobXpnaLmuLLmn5PlrozmiJBcclxuICBvblJlYWR5KCl7fSxcclxuXHJcbiAgLy/pobXpnaLmmL7npLpcclxuICBvblNob3coKXt9LFxyXG5cclxuICAvL+mhtemdoumakOiXj1xyXG4gIG9uSGlkZSgpe30sXHJcblxyXG4gIC8v6aG16Z2i5YWz6ZetXHJcbiAgb25VbmxvYWQoKXt9XHJcbn0pXHJcbmV4cG9ydCB7fTtcclxuIl19