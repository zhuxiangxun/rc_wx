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
                    wx.switchTab({
                        url: '../login/login'
                    });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW5Gb3JtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW5Gb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFFLENBQUMsVUFBVSxDQUFDO0FBQ2hDLElBQUksS0FBSyxHQUFJLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0FBQ2pELElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxrREFBa0QsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUVoRixJQUFJLENBQUM7SUFFSCxJQUFJLEVBQUU7UUFDSixRQUFRLEVBQUUscURBQXFEO1FBQy9ELFlBQVksRUFBRSxxREFBcUQ7UUFDbkUsUUFBUSxFQUFDO1lBQ1AsUUFBUSxFQUFFLEVBQUU7WUFDWixRQUFRLEVBQUUsRUFBRTtTQUNiO1FBQ0QsU0FBUyxFQUFDO1lBQ1IsYUFBYSxFQUFFLEVBQUU7WUFDakIsYUFBYSxFQUFFLEVBQUU7U0FDbEI7UUFDRCxZQUFZLEVBQUUsS0FBSztLQUNwQjtJQUdELGFBQWEsRUFBYixVQUFjLEtBQVM7O1FBQ3JCLElBQUksR0FBRyxHQUFPLHdCQUF3QixDQUFDO1FBQ3ZDLElBQUksR0FBRyxHQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pDLElBQUcsS0FBSyxDQUFDLE1BQU0sRUFBQztZQUNkLElBQUcsR0FBRyxFQUFDO2dCQUNMLElBQUksQ0FBQyxPQUFPO29CQUNWLEdBQUMseUJBQXlCLElBQUUsRUFBRTtvQkFDOUIsR0FBQyxtQkFBbUIsSUFBRyxLQUFLLENBQUMsTUFBTTtvQkFDbkMsZUFBWSxHQUFFLElBQUk7d0JBQ2xCLENBQUE7YUFDSDtpQkFBSTtnQkFDSCxJQUFJLENBQUMsT0FBTztvQkFDVixHQUFDLHlCQUF5QixJQUFFLHdCQUF3QjtvQkFDcEQsR0FBQyxtQkFBbUIsSUFBRyxLQUFLLENBQUMsTUFBTTtvQkFDbkMsZUFBWSxHQUFFLEtBQUs7d0JBQ25CLENBQUE7YUFDSDtTQUNGO2FBQUk7WUFDSCxJQUFJLENBQUMsT0FBTztnQkFDVixHQUFDLHlCQUF5QixJQUFFLEVBQUU7Z0JBQzlCLEdBQUMsbUJBQW1CLElBQUcsS0FBSyxDQUFDLE1BQU07Z0JBQ25DLGVBQVksR0FBRSxLQUFLO29CQUNuQixDQUFBO1NBQ0g7SUFDSCxDQUFDO0lBRUQsY0FBYyxFQUFkLFVBQWUsS0FBUzs7UUFDdEIsSUFBSSxHQUFHLEdBQU8sd0JBQXdCLENBQUM7UUFDdkMsSUFBSSxHQUFHLEdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekMsSUFBRyxLQUFLLENBQUMsTUFBTSxFQUFDO1lBQ2QsSUFBRyxHQUFHLEVBQUM7Z0JBQ0wsSUFBSSxDQUFDLE9BQU87b0JBQ1YsR0FBQyx5QkFBeUIsSUFBRyxFQUFFO29CQUMvQixHQUFDLG1CQUFtQixJQUFHLEtBQUssQ0FBQyxNQUFNO29CQUNuQyxlQUFZLEdBQUUsSUFBSTt3QkFDbEIsQ0FBQTthQUNIO2lCQUFJO2dCQUNILElBQUksQ0FBQyxPQUFPO29CQUNWLEdBQUMseUJBQXlCLElBQUUsdUJBQXVCO29CQUNuRCxHQUFDLG1CQUFtQixJQUFHLEtBQUssQ0FBQyxNQUFNO29CQUNuQyxlQUFZLEdBQUUsS0FBSzt3QkFDbkIsQ0FBQTthQUNIO1NBQ0Y7YUFBSTtZQUNILElBQUksQ0FBQyxPQUFPO2dCQUNWLEdBQUMseUJBQXlCLElBQUUsRUFBRTtnQkFDOUIsR0FBQyxtQkFBbUIsSUFBRyxLQUFLLENBQUMsTUFBTTtnQkFDbkMsZUFBWSxHQUFFLEtBQUs7b0JBQ25CLENBQUE7U0FDSDtJQUNILENBQUM7SUFHRCxPQUFPLEVBQVA7O1FBQ0UsSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLElBQUksRUFBRSxFQUFDO1lBQ25DLElBQUksQ0FBQyxPQUFPO2dCQUNWLEdBQUMseUJBQXlCLElBQUUsUUFBUTtnQkFDcEMsZUFBWSxHQUFFLEtBQUs7b0JBQ25CLENBQUE7U0FDSDtRQUVELElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxJQUFJLEVBQUUsRUFBQztZQUNuQyxJQUFJLENBQUMsT0FBTztnQkFDVixHQUFDLHlCQUF5QixJQUFFLE9BQU87Z0JBQ25DLGVBQVksR0FBRSxLQUFLO29CQUNuQixDQUFBO1NBQ0g7UUFFRCxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFDO1lBQ3hCLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQztpQkFDOUgsSUFBSSxDQUFDLFVBQUMsR0FBTztnQkFDWixJQUFHLEdBQUcsQ0FBQyxLQUFLLEVBQUM7b0JBQ1gsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN0QyxFQUFFLENBQUMsU0FBUyxDQUFDO3dCQUNYLEdBQUcsRUFBQyxnQkFBZ0I7cUJBQ3JCLENBQUMsQ0FBQztpQkFDSjtZQUNILENBQUMsRUFBQyxVQUFDLEdBQU87Z0JBQ1IsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2IsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUVILENBQUM7SUFHRCxNQUFNLGdCQUFHLENBQUM7SUFHVixPQUFPLGdCQUFHLENBQUM7SUFHWCxNQUFNLGdCQUFHLENBQUM7SUFHVixNQUFNLGdCQUFHLENBQUM7SUFHVixRQUFRLGdCQUFHLENBQUM7Q0FDYixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsb2dpbkZvcm0udHNcclxuY29uc3QgYXBpID0gZ2V0QXBwKCkuZ2xvYmFsRGF0YTsgIC8vIOiOt+WPluW6lOeUqOWunuS+i1xyXG5sZXQgaHR0cHMgID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvbXlSZXF1ZXN0LmpzJyk7ICAvL+iOt+WPlmFqYXjmlrnms5VcclxubGV0IFRvYXN0ID0gcmVxdWlyZSgnLi4vLi4vbWluaXByb2dyYW1fbnBtL0B2YW50L3dlYXBwL3RvYXN0L3RvYXN0LmpzJykuZGVmYXVsdDtcclxuXHJcblBhZ2Uoe1xyXG4gIC8v6aG16Z2i5pWw5o2uXHJcbiAgZGF0YToge1xyXG4gICAgdXNlckljb246ICdodHRwOi8vZnJvbnRmaWxlLmV5dW5oYW4uY29tL3ptcS9tb2JpbGUvaWNvbl9mdy5wbmcnLCAgICAgICAvL+eUqOaIt+WQjeWbvuagh1xyXG4gICAgcGFzc3dvcmRJY29uOiAnaHR0cDovL2Zyb250ZmlsZS5leXVuaGFuLmNvbS96bXEvbW9iaWxlL2ljb25fbG4ucG5nJywgICAvL+WvhueggeWbvuagh1xyXG4gICAgZm9ybURhdGU6eyAgLy/ooajljZVcclxuICAgICAgdXNlcm5hbWU6ICcnLFxyXG4gICAgICBwYXNzd29yZDogJydcclxuICAgIH0sXHJcbiAgICBmb3JtUnJyb3I6eyAgLy/pqozor4FcclxuICAgICAgdXNlcm5hbWVFcnJvcjogJycsIFxyXG4gICAgICBwYXNzd29yZEVycm9yOiAnJyxcclxuICAgIH0sXHJcbiAgICB2ZXJpZmljYXRpb246IGZhbHNlLCAgICAvL+mqjOivgeWIpOaWrVxyXG4gIH0sXHJcblxyXG4gIC8v55So5oi35ZCN6aqM6K+BXHJcbiAgdXNlcm5hbWVJbnB1dCh2YWx1ZTphbnkpOnZvaWR7XHJcbiAgICBsZXQgcmVnOmFueSA9IC9eWy1fYS16QS1aMC05XXsxLDI1NX0kLztcclxuICAgIGxldCBzdHI6Qm9vbGVhbiA9IHJlZy50ZXN0KHZhbHVlLmRldGFpbCk7XHJcbiAgICBpZih2YWx1ZS5kZXRhaWwpe1xyXG4gICAgICBpZihzdHIpe1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBbXCJmb3JtUnJyb3IudXNlcm5hbWVFcnJvclwiXTonJyxcclxuICAgICAgICAgIFtcImZvcm1EYXRlLnVzZXJuYW1lXCJdOiB2YWx1ZS5kZXRhaWwsXHJcbiAgICAgICAgICB2ZXJpZmljYXRpb246IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgW1wiZm9ybVJycm9yLnVzZXJuYW1lRXJyb3JcIl06J+ivt+i+k+WFpeato+ehrueUqOaIt+WQje+8iOWPr+S7peS4uuaVsOWtl+OAgeWtl+avjeOAgeS4i+WIkue6v++8iScsXHJcbiAgICAgICAgICBbXCJmb3JtRGF0ZS51c2VybmFtZVwiXTogdmFsdWUuZGV0YWlsLFxyXG4gICAgICAgICAgdmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImZvcm1ScnJvci51c2VybmFtZUVycm9yXCJdOicnLFxyXG4gICAgICAgIFtcImZvcm1EYXRlLnVzZXJuYW1lXCJdOiB2YWx1ZS5kZXRhaWwsXHJcbiAgICAgICAgdmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgLy/lr4bnoIHpqozor4FcclxuICBwYXJzc3dvcmRJbnB1dCh2YWx1ZTphbnkpOnZvaWR7XHJcbiAgICBsZXQgcmVnOmFueSA9IC9eWy1fYS16QS1aMC05XXsxLDI1NX0kLztcclxuICAgIGxldCBzdHI6Qm9vbGVhbiA9IHJlZy50ZXN0KHZhbHVlLmRldGFpbCk7XHJcbiAgICBpZih2YWx1ZS5kZXRhaWwpe1xyXG4gICAgICBpZihzdHIpe1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBbXCJmb3JtUnJyb3IucGFzc3dvcmRFcnJvclwiXTogJycsXHJcbiAgICAgICAgICBbXCJmb3JtRGF0ZS5wYXNzd29yZFwiXTogdmFsdWUuZGV0YWlsLFxyXG4gICAgICAgICAgdmVyaWZpY2F0aW9uOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIFtcImZvcm1ScnJvci5wYXNzd29yZEVycm9yXCJdOifor7fovpPlhaXmraPnoa7lr4bnoIHvvIjlj6/ku6XkuLrmlbDlrZfjgIHlrZfmr43jgIHkuIvliJLnur/vvIknLFxyXG4gICAgICAgICAgW1wiZm9ybURhdGUucGFzc3dvcmRcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICAgIHZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJmb3JtUnJyb3IucGFzc3dvcmRFcnJvclwiXTonJyxcclxuICAgICAgICBbXCJmb3JtRGF0ZS5wYXNzd29yZFwiXTogdmFsdWUuZGV0YWlsLFxyXG4gICAgICAgIHZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvL+eZu+W9leaMiemSrlxyXG4gIGxvZ2luRm4oKTp2b2lke1xyXG4gICAgaWYodGhpcy5kYXRhLmZvcm1EYXRlLnVzZXJuYW1lID09ICcnKXsgIC8v55So5oi35ZCNXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiZm9ybVJycm9yLnVzZXJuYW1lRXJyb3JcIl06J+ivt+i+k+WFpeeUqOaIt+WQjScsXHJcbiAgICAgICAgdmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGlmKHRoaXMuZGF0YS5mb3JtRGF0ZS5wYXNzd29yZCA9PSAnJyl7ICAvL+WvhueggVxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImZvcm1ScnJvci5wYXNzd29yZEVycm9yXCJdOifor7fovpPlhaXlr4bnoIEnLFxyXG4gICAgICAgIHZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBpZih0aGlzLmRhdGEudmVyaWZpY2F0aW9uKXsgIC8v6aqM6K+B6YCa6L+HXHJcbiAgICAgIGh0dHBzLnJlcXVlc3QoYXBpLmxvZ2luICsgJz9hY2NvdW50PScgKyB0aGlzLmRhdGEuZm9ybURhdGUudXNlcm5hbWUgKyAnJnBhc3N3b3JkPScgKyB0aGlzLmRhdGEuZm9ybURhdGUucGFzc3dvcmQsIG51bGwsICdQT1NUJylcclxuICAgICAgLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgICBpZihyZXMudG9rZW4pe1xyXG4gICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ3Rva2VuJywgcmVzLnRva2VuKTsgIC8v5a2Y5YKodG9rZW5cclxuICAgICAgICAgIHd4LnN3aXRjaFRhYih7IFxyXG4gICAgICAgICAgICB1cmw6Jy4uL2xvZ2luL2xvZ2luJyAgXHJcbiAgICAgICAgICB9KTsgIFxyXG4gICAgICAgIH1cclxuICAgICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgICBUb2FzdChlcnIpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gIH0sXHJcblxyXG4gIC8v6aG16Z2i5Yid5aeL5YyWXHJcbiAgb25Mb2FkKCl7fSxcclxuXHJcbiAgLy/pobXpnaLmuLLmn5PlrozmiJBcclxuICBvblJlYWR5KCl7fSxcclxuXHJcbiAgLy/pobXpnaLmmL7npLpcclxuICBvblNob3coKXt9LFxyXG5cclxuICAvL+mhtemdoumakOiXj1xyXG4gIG9uSGlkZSgpe30sXHJcblxyXG4gIC8v6aG16Z2i5YWz6ZetXHJcbiAgb25VbmxvYWQoKXt9XHJcbn0pXHJcbmV4cG9ydCB7fTtcclxuIl19