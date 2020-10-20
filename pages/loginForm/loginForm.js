"use strict";
var api = getApp();
var https = require('../../utils/myRequest.js');
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
            var data = https.request('login' + '?account=' + this.data.formDate.username + '&password=' + this.data.formDate.password, null, 'POST');
            console.log(data);
        }
    },
    onLoad: function () { },
    onReady: function () { },
    onShow: function () { },
    onHide: function () { },
    onUnload: function () { }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW5Gb3JtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW5Gb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQUUsQ0FBQztBQUNyQixJQUFJLEtBQUssR0FBSSxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUVqRCxJQUFJLENBQUM7SUFFSCxJQUFJLEVBQUU7UUFDSixRQUFRLEVBQUUscURBQXFEO1FBQy9ELFlBQVksRUFBRSxxREFBcUQ7UUFDbkUsUUFBUSxFQUFDO1lBQ1AsUUFBUSxFQUFFLEVBQUU7WUFDWixRQUFRLEVBQUUsRUFBRTtTQUNiO1FBQ0QsU0FBUyxFQUFDO1lBQ1IsYUFBYSxFQUFFLEVBQUU7WUFDakIsYUFBYSxFQUFFLEVBQUU7U0FDbEI7UUFDRCxZQUFZLEVBQUUsS0FBSztLQUNwQjtJQUdELGFBQWEsRUFBYixVQUFjLEtBQVM7O1FBQ3JCLElBQUksR0FBRyxHQUFPLHdCQUF3QixDQUFDO1FBQ3ZDLElBQUksR0FBRyxHQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pDLElBQUcsS0FBSyxDQUFDLE1BQU0sRUFBQztZQUNkLElBQUcsR0FBRyxFQUFDO2dCQUNMLElBQUksQ0FBQyxPQUFPO29CQUNWLEdBQUMseUJBQXlCLElBQUUsRUFBRTtvQkFDOUIsR0FBQyxtQkFBbUIsSUFBRyxLQUFLLENBQUMsTUFBTTtvQkFDbkMsZUFBWSxHQUFFLElBQUk7d0JBQ2xCLENBQUE7YUFDSDtpQkFBSTtnQkFDSCxJQUFJLENBQUMsT0FBTztvQkFDVixHQUFDLHlCQUF5QixJQUFFLHdCQUF3QjtvQkFDcEQsR0FBQyxtQkFBbUIsSUFBRyxLQUFLLENBQUMsTUFBTTtvQkFDbkMsZUFBWSxHQUFFLEtBQUs7d0JBQ25CLENBQUE7YUFDSDtTQUNGO2FBQUk7WUFDSCxJQUFJLENBQUMsT0FBTztnQkFDVixHQUFDLHlCQUF5QixJQUFFLEVBQUU7Z0JBQzlCLEdBQUMsbUJBQW1CLElBQUcsS0FBSyxDQUFDLE1BQU07Z0JBQ25DLGVBQVksR0FBRSxLQUFLO29CQUNuQixDQUFBO1NBQ0g7SUFDSCxDQUFDO0lBRUQsY0FBYyxFQUFkLFVBQWUsS0FBUzs7UUFDdEIsSUFBSSxHQUFHLEdBQU8sd0JBQXdCLENBQUM7UUFDdkMsSUFBSSxHQUFHLEdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekMsSUFBRyxLQUFLLENBQUMsTUFBTSxFQUFDO1lBQ2QsSUFBRyxHQUFHLEVBQUM7Z0JBQ0wsSUFBSSxDQUFDLE9BQU87b0JBQ1YsR0FBQyx5QkFBeUIsSUFBRyxFQUFFO29CQUMvQixHQUFDLG1CQUFtQixJQUFHLEtBQUssQ0FBQyxNQUFNO29CQUNuQyxlQUFZLEdBQUUsSUFBSTt3QkFDbEIsQ0FBQTthQUNIO2lCQUFJO2dCQUNILElBQUksQ0FBQyxPQUFPO29CQUNWLEdBQUMseUJBQXlCLElBQUUsdUJBQXVCO29CQUNuRCxHQUFDLG1CQUFtQixJQUFHLEtBQUssQ0FBQyxNQUFNO29CQUNuQyxlQUFZLEdBQUUsS0FBSzt3QkFDbkIsQ0FBQTthQUNIO1NBQ0Y7YUFBSTtZQUNILElBQUksQ0FBQyxPQUFPO2dCQUNWLEdBQUMseUJBQXlCLElBQUUsRUFBRTtnQkFDOUIsR0FBQyxtQkFBbUIsSUFBRyxLQUFLLENBQUMsTUFBTTtnQkFDbkMsZUFBWSxHQUFFLEtBQUs7b0JBQ25CLENBQUE7U0FDSDtJQUNILENBQUM7SUFHRCxPQUFPLEVBQVA7O1FBQ0UsSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLElBQUksRUFBRSxFQUFDO1lBQ25DLElBQUksQ0FBQyxPQUFPO2dCQUNWLEdBQUMseUJBQXlCLElBQUUsUUFBUTtnQkFDcEMsZUFBWSxHQUFFLEtBQUs7b0JBQ25CLENBQUE7U0FDSDtRQUVELElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxJQUFJLEVBQUUsRUFBQztZQUNuQyxJQUFJLENBQUMsT0FBTztnQkFDVixHQUFDLHlCQUF5QixJQUFFLE9BQU87Z0JBQ25DLGVBQVksR0FBRSxLQUFLO29CQUNuQixDQUFBO1NBQ0g7UUFFRCxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFDO1lBQ3hCLElBQUksSUFBSSxHQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDN0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUVuQjtJQUVILENBQUM7SUFHRCxNQUFNLGdCQUFHLENBQUM7SUFHVixPQUFPLGdCQUFHLENBQUM7SUFHWCxNQUFNLGdCQUFHLENBQUM7SUFHVixNQUFNLGdCQUFHLENBQUM7SUFHVixRQUFRLGdCQUFHLENBQUM7Q0FDYixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsb2dpbkZvcm0udHNcclxuY29uc3QgYXBpID0gZ2V0QXBwKCk7ICAvLyDojrflj5blupTnlKjlrp7kvotcclxubGV0IGh0dHBzICA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL215UmVxdWVzdC5qcycpOyAgLy/ojrflj5ZhamF45pa55rOVXHJcblxyXG5QYWdlKHtcclxuICAvL+mhtemdouaVsOaNrlxyXG4gIGRhdGE6IHtcclxuICAgIHVzZXJJY29uOiAnaHR0cDovL2Zyb250ZmlsZS5leXVuaGFuLmNvbS96bXEvbW9iaWxlL2ljb25fZncucG5nJywgICAgICAgLy/nlKjmiLflkI3lm77moIdcclxuICAgIHBhc3N3b3JkSWNvbjogJ2h0dHA6Ly9mcm9udGZpbGUuZXl1bmhhbi5jb20vem1xL21vYmlsZS9pY29uX2xuLnBuZycsICAgLy/lr4bnoIHlm77moIdcclxuICAgIGZvcm1EYXRlOnsgIC8v6KGo5Y2VXHJcbiAgICAgIHVzZXJuYW1lOiAnJyxcclxuICAgICAgcGFzc3dvcmQ6ICcnXHJcbiAgICB9LFxyXG4gICAgZm9ybVJycm9yOnsgIC8v6aqM6K+BXHJcbiAgICAgIHVzZXJuYW1lRXJyb3I6ICcnLCBcclxuICAgICAgcGFzc3dvcmRFcnJvcjogJycsXHJcbiAgICB9LFxyXG4gICAgdmVyaWZpY2F0aW9uOiBmYWxzZSwgICAgLy/pqozor4HliKTmlq1cclxuICB9LFxyXG5cclxuICAvL+eUqOaIt+WQjemqjOivgVxyXG4gIHVzZXJuYW1lSW5wdXQodmFsdWU6YW55KTp2b2lke1xyXG4gICAgbGV0IHJlZzphbnkgPSAvXlstX2EtekEtWjAtOV17MSwyNTV9JC87XHJcbiAgICBsZXQgc3RyOkJvb2xlYW4gPSByZWcudGVzdCh2YWx1ZS5kZXRhaWwpO1xyXG4gICAgaWYodmFsdWUuZGV0YWlsKXtcclxuICAgICAgaWYoc3RyKXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgW1wiZm9ybVJycm9yLnVzZXJuYW1lRXJyb3JcIl06JycsXHJcbiAgICAgICAgICBbXCJmb3JtRGF0ZS51c2VybmFtZVwiXTogdmFsdWUuZGV0YWlsLFxyXG4gICAgICAgICAgdmVyaWZpY2F0aW9uOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIFtcImZvcm1ScnJvci51c2VybmFtZUVycm9yXCJdOifor7fovpPlhaXmraPnoa7nlKjmiLflkI3vvIjlj6/ku6XkuLrmlbDlrZfjgIHlrZfmr43jgIHkuIvliJLnur/vvIknLFxyXG4gICAgICAgICAgW1wiZm9ybURhdGUudXNlcm5hbWVcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICAgIHZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJmb3JtUnJyb3IudXNlcm5hbWVFcnJvclwiXTonJyxcclxuICAgICAgICBbXCJmb3JtRGF0ZS51c2VybmFtZVwiXTogdmFsdWUuZGV0YWlsLFxyXG4gICAgICAgIHZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIC8v5a+G56CB6aqM6K+BXHJcbiAgcGFyc3N3b3JkSW5wdXQodmFsdWU6YW55KTp2b2lke1xyXG4gICAgbGV0IHJlZzphbnkgPSAvXlstX2EtekEtWjAtOV17MSwyNTV9JC87XHJcbiAgICBsZXQgc3RyOkJvb2xlYW4gPSByZWcudGVzdCh2YWx1ZS5kZXRhaWwpO1xyXG4gICAgaWYodmFsdWUuZGV0YWlsKXtcclxuICAgICAgaWYoc3RyKXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgW1wiZm9ybVJycm9yLnBhc3N3b3JkRXJyb3JcIl06ICcnLFxyXG4gICAgICAgICAgW1wiZm9ybURhdGUucGFzc3dvcmRcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICAgIHZlcmlmaWNhdGlvbjogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBbXCJmb3JtUnJyb3IucGFzc3dvcmRFcnJvclwiXTon6K+36L6T5YWl5q2j56Gu5a+G56CB77yI5Y+v5Lul5Li65pWw5a2X44CB5a2X5q+N44CB5LiL5YiS57q/77yJJyxcclxuICAgICAgICAgIFtcImZvcm1EYXRlLnBhc3N3b3JkXCJdOiB2YWx1ZS5kZXRhaWwsXHJcbiAgICAgICAgICB2ZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiZm9ybVJycm9yLnBhc3N3b3JkRXJyb3JcIl06JycsXHJcbiAgICAgICAgW1wiZm9ybURhdGUucGFzc3dvcmRcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICB2ZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLy/nmbvlvZXmjInpkq5cclxuICBsb2dpbkZuKCk6dm9pZHtcclxuICAgIGlmKHRoaXMuZGF0YS5mb3JtRGF0ZS51c2VybmFtZSA9PSAnJyl7ICAvL+eUqOaIt+WQjVxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImZvcm1ScnJvci51c2VybmFtZUVycm9yXCJdOifor7fovpPlhaXnlKjmiLflkI0nLFxyXG4gICAgICAgIHZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBpZih0aGlzLmRhdGEuZm9ybURhdGUucGFzc3dvcmQgPT0gJycpeyAgLy/lr4bnoIFcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJmb3JtUnJyb3IucGFzc3dvcmRFcnJvclwiXTon6K+36L6T5YWl5a+G56CBJyxcclxuICAgICAgICB2ZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaWYodGhpcy5kYXRhLnZlcmlmaWNhdGlvbil7ICAvL+mqjOivgemAmui/h1xyXG4gICAgICBsZXQgZGF0YTphbnkgPSBodHRwcy5yZXF1ZXN0KCdsb2dpbicgKyAnP2FjY291bnQ9JyArIHRoaXMuZGF0YS5mb3JtRGF0ZS51c2VybmFtZSArICcmcGFzc3dvcmQ9JyArIHRoaXMuZGF0YS5mb3JtRGF0ZS5wYXNzd29yZCwgbnVsbCwgJ1BPU1QnKTtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgfSxcclxuXHJcbiAgLy/pobXpnaLliJ3lp4vljJZcclxuICBvbkxvYWQoKXt9LFxyXG5cclxuICAvL+mhtemdoua4suafk+WujOaIkFxyXG4gIG9uUmVhZHkoKXt9LFxyXG5cclxuICAvL+mhtemdouaYvuekulxyXG4gIG9uU2hvdygpe30sXHJcblxyXG4gIC8v6aG16Z2i6ZqQ6JePXHJcbiAgb25IaWRlKCl7fSxcclxuXHJcbiAgLy/pobXpnaLlhbPpl61cclxuICBvblVubG9hZCgpe31cclxufSlcclxuIl19