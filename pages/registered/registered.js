"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dialog = require('../../miniprogram_npm/@vant/weapp/dialog/dialog.js').default;
var api = getApp().globalData;
var https = require('../../utils/myRequest.js');
Page({
    data: {
        tabActive: 'jg',
        qydanweiList: [],
        jgFileList: [],
        jgRepeatPassword: '',
        jgPasswordError: '',
        unitType: [
            { text: '选择类型', value: 0 },
            { text: '新款商品', value: 1 },
            { text: '活动商品', value: 2 },
        ],
        jgFormDate: {
            shxyCode: '',
            shxypics: [],
            password: '',
            trueword: '',
            qyName: '',
            qyNatureId: '',
        },
        jgFormRrror: {
            shxyCodeError: '',
            shxypicsError: '',
            passwordError: '',
            truewordError: '',
            qyNameError: '',
            qyNatureIdError: '',
        },
        jgVerification: false,
        grFormDate: {},
        grFormRrror: {},
        grVerification: false,
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
    onTabChange: function () {
    },
    jgShxyCodeInput: function (value) {
        var _a, _b, _c;
        var reg = /^[^_IOZSVa-z\W]{2}\d{6}[^_IOZSVa-z\W]{10}$/g;
        var str = reg.test(value.detail);
        if (value.detail) {
            if (str) {
                this.setData((_a = {},
                    _a["jgFormRrror.shxyCodeError"] = '',
                    _a["jgFormDate.shxyCode"] = value.detail,
                    _a.jgVerification = true,
                    _a));
            }
            else {
                this.setData((_b = {},
                    _b["jgFormRrror.shxyCodeError"] = '请输入正确统一社会信用代码',
                    _b["jgFormDate.shxyCode"] = value.detail,
                    _b.jgVerification = false,
                    _b));
            }
        }
        else {
            this.setData((_c = {},
                _c["jgFormRrror.shxyCodeError"] = '',
                _c["jgFormDate.shxyCode"] = value.detail,
                _c.jgVerification = false,
                _c));
        }
    },
    jgAfterRead: function (event) {
        var _that = this;
        var file = event.detail.file;
        var token = wx.getStorageSync('token');
        wx.uploadFile({
            url: api.fileUrl + '?token=' + token,
            filePath: file.path,
            name: 'files',
            formData: {
                filePath: file.path,
                fileName: ''
            },
            success: function (res) {
                var _a;
                var file = JSON.parse(res.data);
                var fileList = file.val.map(function (item) {
                    return {
                        name: item.fileName,
                        url: api.imgUrl + '?token=' + token + '&filePath=' + item.filePath,
                    };
                });
                _that.setData((_a = {
                        jgFileList: fileList
                    },
                    _a["jgFormDate.shxypics"] = file.val,
                    _a["jgFormRrror.shxypicsError"] = '',
                    _a.jgVerification = true,
                    _a));
            },
        });
    },
    jgDelete: function () {
        var _a;
        this.setData((_a = {
                jgFileList: []
            },
            _a["jgFormDate.shxypics"] = [],
            _a["jgFormRrror.shxypicsError"] = '请上传统一社会信用代码扫描件',
            _a.jgVerification = false,
            _a));
    },
    jgPasswordInput: function (value) {
        var _a, _b, _c;
        var reg = /(?=.*([a-zA-Z].*))(?=.*[0-9].*)[a-zA-Z0-9-*/+.~!@#$%^&*()]{6,20}$/;
        var str = reg.test(value.detail);
        if (value.detail) {
            if (str) {
                this.setData((_a = {},
                    _a["jgFormRrror.passwordError"] = '',
                    _a["jgFormDate.password"] = value.detail,
                    _a.jgVerification = true,
                    _a));
            }
            else {
                this.setData((_b = {},
                    _b["jgFormRrror.passwordError"] = '数字、英文、字符两种及以上6-20位',
                    _b["jgFormDate.password"] = value.detail,
                    _b.jgVerification = false,
                    _b));
            }
        }
        else {
            this.setData((_c = {},
                _c["jgFormRrror.passwordError"] = '',
                _c["jgFormDate.password"] = value.detail,
                _c.jgVerification = false,
                _c));
        }
    },
    jgRepeatPasswordInput: function (value) {
        var _a, _b, _c;
        if (value.detail) {
            if (value.detail != this.data.jgFormDate.password) {
                this.setData((_a = {},
                    _a["jgFormRrror.truewordError"] = '两次输入的密码不一致',
                    _a["jgFormDate.trueword"] = value.detail,
                    _a.jgVerification = true,
                    _a));
            }
            else {
                this.setData((_b = {},
                    _b["jgFormRrror.truewordError"] = '',
                    _b["jgFormDate.trueword"] = value.detail,
                    _b.jgVerification = false,
                    _b));
            }
        }
        else {
            this.setData((_c = {},
                _c["jgFormRrror.truewordError"] = '',
                _c["jgFormDate.trueword"] = value.detail,
                _c.jgVerification = false,
                _c));
        }
    },
    jgQyNameInput: function (value) {
        var _a;
        if (value.detail) {
            this.setData((_a = {},
                _a["jgFormRrror.qyNameError"] = '',
                _a["jgFormDate.qyName"] = value.detail,
                _a.jgVerification = true,
                _a));
        }
    },
    jgDanweiFn: function (value) {
        var _a;
        this.setData((_a = {},
            _a["jgFormRrror.qyNatureIdError"] = '',
            _a["jgFormDate.qyNatureId"] = value.detail,
            _a.jgVerification = true,
            _a));
    },
    jgSubmitFn: function () {
        var _a, _b, _c, _d, _e, _f;
        if (this.data.jgFormDate.shxyCode == '') {
            this.setData((_a = {},
                _a["jgFormRrror.shxyCodeError"] = '请输入统一社会信用代码',
                _a.jgVerification = false,
                _a));
        }
        if (this.data.jgFormDate.shxypics.length == 0) {
            this.setData((_b = {},
                _b["jgFormRrror.shxypicsError"] = '请上传统一社会信用代码扫描件',
                _b.jgVerification = false,
                _b));
        }
        if (this.data.jgFormDate.password == '') {
            this.setData((_c = {},
                _c["jgFormRrror.passwordError"] = '请输入密码',
                _c.jgVerification = false,
                _c));
        }
        if (this.data.jgFormDate.trueword == '') {
            this.setData((_d = {},
                _d["jgFormRrror.truewordError"] = '请再次确认密码',
                _d.jgVerification = false,
                _d));
        }
        if (this.data.jgFormDate.qyName == '') {
            this.setData((_e = {},
                _e["jgFormRrror.qyNameError"] = '请输入单位名称',
                _e.jgVerification = false,
                _e));
        }
        if (this.data.jgFormDate.qyNatureId == '') {
            this.setData((_f = {},
                _f["jgFormRrror.qyNatureIdError"] = '请选择单位类型',
                _f.jgVerification = false,
                _f));
        }
    },
    noticeFn: function () {
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
    },
    onReady: function () { },
    onShow: function () { },
    onHide: function () { },
    onUnload: function () { }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXJlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlZ2lzdGVyZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsb0RBQW9ELENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDbkYsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFFLENBQUMsVUFBVSxDQUFDO0FBQ2hDLElBQUksS0FBSyxHQUFJLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0FBRWpELElBQUksQ0FBQztJQUVILElBQUksRUFBRTtRQUNKLFNBQVMsRUFBRSxJQUFJO1FBRWYsWUFBWSxFQUFFLEVBQUU7UUFHaEIsVUFBVSxFQUFFLEVBQUU7UUFDZCxnQkFBZ0IsRUFBRSxFQUFFO1FBQ3BCLGVBQWUsRUFBRSxFQUFFO1FBQ25CLFFBQVEsRUFBRTtZQUNSLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1lBQzFCLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1lBQzFCLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1NBQzNCO1FBQ0QsVUFBVSxFQUFDO1lBQ1QsUUFBUSxFQUFFLEVBQUU7WUFDWixRQUFRLEVBQUUsRUFBRTtZQUNaLFFBQVEsRUFBRSxFQUFFO1lBQ1osUUFBUSxFQUFFLEVBQUU7WUFDWixNQUFNLEVBQUUsRUFBRTtZQUNWLFVBQVUsRUFBRSxFQUFFO1NBQ2Y7UUFDRCxXQUFXLEVBQUM7WUFDVixhQUFhLEVBQUUsRUFBRTtZQUNqQixhQUFhLEVBQUUsRUFBRTtZQUNqQixhQUFhLEVBQUUsRUFBRTtZQUNqQixhQUFhLEVBQUUsRUFBRTtZQUNqQixXQUFXLEVBQUUsRUFBRTtZQUNmLGVBQWUsRUFBRSxFQUFFO1NBQ3BCO1FBQ0QsY0FBYyxFQUFFLEtBQUs7UUFJckIsVUFBVSxFQUFDLEVBRVY7UUFDRCxXQUFX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QixDQUFBO1NBQ0g7SUFDSCxDQUFDO0lBY0QsUUFBUSxFQUFSO1FBQ0UsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUNYLEtBQUssRUFBRSxNQUFNO1lBQ2IsWUFBWSxFQUFFLE1BQU07WUFDcEIsT0FBTyxFQUFFLHFSQUFxUjtTQUMvUixDQUFDLENBQUMsSUFBSSxDQUFDO1FBRVIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBSUQsTUFBTTtRQUVKLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztZQUN2QixLQUFLLEVBQUUsSUFBSTtTQUNaLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBR0QsT0FBTyxnQkFBRyxDQUFDO0lBR1gsTUFBTSxnQkFBRyxDQUFDO0lBR1YsTUFBTSxnQkFBRyxDQUFDO0lBR1YsUUFBUSxnQkFBRyxDQUFDO0NBQ2IsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVnaXN0ZXJlZC50c1xyXG5sZXQgRGlhbG9nID0gcmVxdWlyZSgnLi4vLi4vbWluaXByb2dyYW1fbnBtL0B2YW50L3dlYXBwL2RpYWxvZy9kaWFsb2cuanMnKS5kZWZhdWx0O1xyXG5jb25zdCBhcGkgPSBnZXRBcHAoKS5nbG9iYWxEYXRhOyAgLy8g6I635Y+W5bqU55So5a6e5L6LXHJcbmxldCBodHRwcyAgPSByZXF1aXJlKCcuLi8uLi91dGlscy9teVJlcXVlc3QuanMnKTsgICAgIC8v6I635Y+WYWpheOaWueazlVxyXG5cclxuUGFnZSh7XHJcbiAgLy/pobXpnaLmlbDmja5cclxuICBkYXRhOiB7XHJcbiAgICB0YWJBY3RpdmU6ICdqZycsICAgICAgICAgLy/ms6jlhox0YWJcclxuXHJcbiAgICBxeWRhbndlaUxpc3Q6IFtdLCAgICAgICAgLy/ljZXkvY3nsbvlnotcclxuXHJcbiAgICAvL+acuuaehOazqOWGjFxyXG4gICAgamdGaWxlTGlzdDogW10sICAgICAgICAgIC8v5py65p6E5LiK5Lyg6ZmE5Lu2XHJcbiAgICBqZ1JlcGVhdFBhc3N3b3JkOiAnJywgICAgLy/mnLrmnoTnoa7orqTlr4bnoIFcclxuICAgIGpnUGFzc3dvcmRFcnJvcjogJycsICAgICAvL+acuuaehOehruiupOWvhueggVxyXG4gICAgdW5pdFR5cGU6IFsgICAgICAgICAgICAgIC8v5Y2V5L2N57G75Z6LXHJcbiAgICAgIHsgdGV4dDogJ+mAieaLqeexu+WeiycsIHZhbHVlOiAwIH0sXHJcbiAgICAgIHsgdGV4dDogJ+aWsOasvuWVhuWTgScsIHZhbHVlOiAxIH0sXHJcbiAgICAgIHsgdGV4dDogJ+a0u+WKqOWVhuWTgScsIHZhbHVlOiAyIH0sXHJcbiAgICBdLFxyXG4gICAgamdGb3JtRGF0ZTp7ICAvL+acuuaehOihqOWNlVxyXG4gICAgICBzaHh5Q29kZTogJycsICAgICAgICAgICAvL+e7n+S4gOekvuS8muS/oeeUqOS7o+eggVxyXG4gICAgICBzaHh5cGljczogW10sICAgICAgICAgICAvL+e7n+S4gOekvuS8muS/oeeUqOS7o+eggeaJq+aPj+S7tuS4iuS8oFxyXG4gICAgICBwYXNzd29yZDogJycsICAgICAgICAgICAvL+WvhueggVxyXG4gICAgICB0cnVld29yZDogJycsICAgICAgICAgICAvL+ehruiupOWvhueggVxyXG4gICAgICBxeU5hbWU6ICcnLCAgICAgICAgICAgICAvL+WNleS9jeWQjeensFxyXG4gICAgICBxeU5hdHVyZUlkOiAnJywgICAgICAgICAvL+WNleS9jeexu+Wei1xyXG4gICAgfSxcclxuICAgIGpnRm9ybVJycm9yOnsgIC8v5py65p6E6aqM6K+BXHJcbiAgICAgIHNoeHlDb2RlRXJyb3I6ICcnLCAgICAgIC8v57uf5LiA56S+5Lya5L+h55So5Luj56CBXHJcbiAgICAgIHNoeHlwaWNzRXJyb3I6ICcnLCAgICAgIC8v57uf5LiA56S+5Lya5L+h55So5Luj56CB5omr5o+P5Lu25LiK5LygXHJcbiAgICAgIHBhc3N3b3JkRXJyb3I6ICcnLCAgICAgIC8v5a+G56CBXHJcbiAgICAgIHRydWV3b3JkRXJyb3I6ICcnLCAgICAgIC8v56Gu6K6k5a+G56CBXHJcbiAgICAgIHF5TmFtZUVycm9yOiAnJywgICAgICAgIC8v5Y2V5L2N5ZCN56ewXHJcbiAgICAgIHF5TmF0dXJlSWRFcnJvcjogJycsICAgIC8v5Y2V5L2N57G75Z6LXHJcbiAgICB9LFxyXG4gICAgamdWZXJpZmljYXRpb246IGZhbHNlLCAgICAvL+mqjOivgeWIpOaWrVxyXG5cclxuXHJcbiAgICAvL+S4quS6uumqjOivgVxyXG4gICAgZ3JGb3JtRGF0ZTp7ICAvL+acuuaehOihqOWNlVxyXG4gICAgICBcclxuICAgIH0sXHJcbiAgICBnckZvcm1ScnJvcjp7ICAvL+acuuaehOmqjOivgVxyXG4gICAgICBcclxuICAgIH0sXHJcbiAgICBnclZlcmlmaWNhdGlvbjogZmFsc2UsICAgIC8v6aqM6K+B5Yik5patXHJcbiAgfSxcclxuXHJcbiAgZ2V0RGFud2VpTGlzdCgpOnZvaWR7ICAvL+iOt+WPluWNleS9jeexu+Wei1xyXG4gICAgaHR0cHMucmVxdWVzdChhcGkuc3VibWVudURpYyArICc/bW9pZD0xNCcsIG51bGwsICdHRVQnKVxyXG4gICAgLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgbGV0IGxpc3Q6YW55ID0gcmVzLnZhbC5tYXAoKGl0ZW06YW55KTphbnk9PntcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgdGV4dDogaXRlbS5kaWNOYW1lLFxyXG4gICAgICAgICAgdmFsdWU6IGl0ZW0uaWRcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgcXlkYW53ZWlMaXN0OiBsaXN0XHJcbiAgICAgIH0pXHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcblxyXG4gIG9uVGFiQ2hhbmdlKCk6dm9pZHsgIC8vdGFi5YiH5o2i6Kem5Y+RXHJcblxyXG4gIH0sXHJcblxyXG5cclxuICAvL+acuuaehOazqOWGjFxyXG4gIGpnU2h4eUNvZGVJbnB1dCh2YWx1ZTphbnkpOnZvaWR7ICAvL+e7n+S4gOekvuS8muS/oeeUqOS7o+eggVxyXG4gICAgbGV0IHJlZzphbnkgPSAvXlteX0lPWlNWYS16XFxXXXsyfVxcZHs2fVteX0lPWlNWYS16XFxXXXsxMH0kL2c7XHJcbiAgICBsZXQgc3RyOkJvb2xlYW4gPSByZWcudGVzdCh2YWx1ZS5kZXRhaWwpO1xyXG4gICAgaWYodmFsdWUuZGV0YWlsKXtcclxuICAgICAgaWYoc3RyKXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgW1wiamdGb3JtUnJyb3Iuc2h4eUNvZGVFcnJvclwiXTogJycsXHJcbiAgICAgICAgICBbXCJqZ0Zvcm1EYXRlLnNoeHlDb2RlXCJdOiB2YWx1ZS5kZXRhaWwsXHJcbiAgICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBbXCJqZ0Zvcm1ScnJvci5zaHh5Q29kZUVycm9yXCJdOiAn6K+36L6T5YWl5q2j56Gu57uf5LiA56S+5Lya5L+h55So5Luj56CBJyxcclxuICAgICAgICAgIFtcImpnRm9ybURhdGUuc2h4eUNvZGVcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICAgIGpnVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLnNoeHlDb2RlRXJyb3JcIl06ICcnLFxyXG4gICAgICAgIFtcImpnRm9ybURhdGUuc2h4eUNvZGVcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIGpnQWZ0ZXJSZWFkKGV2ZW50OmFueSk6dm9pZCB7ICAgICAgICAgICAgIC8v57uf5LiA56S+5Lya5L+h55So5Luj56CB5omr5o+P5Lu25LiK5LygXHJcbiAgICBsZXQgX3RoYXQ6YW55ID0gdGhpcztcclxuICAgIGNvbnN0IHsgZmlsZSB9OmFueSA9IGV2ZW50LmRldGFpbDtcclxuICAgIGxldCB0b2tlbjpzdHJpbmcgPSB3eC5nZXRTdG9yYWdlU3luYygndG9rZW4nKTtcclxuICAgIHd4LnVwbG9hZEZpbGUoe1xyXG4gICAgICB1cmw6IGFwaS5maWxlVXJsICsgJz90b2tlbj0nICsgdG9rZW4sXHJcbiAgICAgIGZpbGVQYXRoOiBmaWxlLnBhdGgsXHJcbiAgICAgIG5hbWU6ICdmaWxlcycsXHJcbiAgICAgIGZvcm1EYXRhOiB7IFxyXG4gICAgICAgIGZpbGVQYXRoOiBmaWxlLnBhdGgsXHJcbiAgICAgICAgZmlsZU5hbWU6ICcnXHJcbiAgICAgIH0sc3VjY2VzcyhyZXM6YW55KSB7XHJcbiAgICAgICAgbGV0IGZpbGU6YW55ID0gSlNPTi5wYXJzZShyZXMuZGF0YSk7XHJcbiAgICAgICAgbGV0IGZpbGVMaXN0OmFueSA9IGZpbGUudmFsLm1hcCgoaXRlbTphbnkpOmFueT0+e1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmFtZTogaXRlbS5maWxlTmFtZSxcclxuICAgICAgICAgICAgdXJsOiBhcGkuaW1nVXJsICsgJz90b2tlbj0nICsgdG9rZW4gKyAnJmZpbGVQYXRoPScgKyBpdGVtLmZpbGVQYXRoLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgX3RoYXQuc2V0RGF0YSh7XHJcbiAgICAgICAgICBqZ0ZpbGVMaXN0OiBmaWxlTGlzdCwgICAgICAgICAgICAgICAgICAgICAgLy/mmL7npLpcclxuICAgICAgICAgIFtcImpnRm9ybURhdGUuc2h4eXBpY3NcIl06IGZpbGUudmFsLCAgICAgICAgIC8v5o+Q5LqkXHJcbiAgICAgICAgICBbXCJqZ0Zvcm1ScnJvci5zaHh5cGljc0Vycm9yXCJdOiAnJyxcclxuICAgICAgICAgIGpnVmVyaWZpY2F0aW9uOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgamdEZWxldGUoKTp2b2lkeyAgLy/nu5/kuIDnpL7kvJrkv6HnlKjku6PnoIHmiavmj4/ku7bkuIrkvKDliKDpmaRcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGpnRmlsZUxpc3Q6IFtdLCAgICAgICAgICAgICAgICAgICAvL+a4heepuuS4iuS8oOaYvuekuuWIl+ihqFxyXG4gICAgICBbXCJqZ0Zvcm1EYXRlLnNoeHlwaWNzXCJdOiBbXSwgICAgICAvL+a4heepuuS4iuS8oOWIl+ihqFxyXG4gICAgICBbXCJqZ0Zvcm1ScnJvci5zaHh5cGljc0Vycm9yXCJdOiAn6K+35LiK5Lyg57uf5LiA56S+5Lya5L+h55So5Luj56CB5omr5o+P5Lu2JyxcclxuICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgIH0pXHJcbiAgfSxcclxuICBqZ1Bhc3N3b3JkSW5wdXQodmFsdWU6YW55KTp2b2lkeyAgLy/lr4bnoIFcclxuICAgIGxldCByZWc6YW55ID0gLyg/PS4qKFthLXpBLVpdLiopKSg/PS4qWzAtOV0uKilbYS16QS1aMC05LSovKy5+IUAjJCVeJiooKV17NiwyMH0kLztcclxuICAgIGxldCBzdHI6Qm9vbGVhbiA9IHJlZy50ZXN0KHZhbHVlLmRldGFpbCk7XHJcbiAgICBpZih2YWx1ZS5kZXRhaWwpe1xyXG4gICAgICBpZihzdHIpe1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBbXCJqZ0Zvcm1ScnJvci5wYXNzd29yZEVycm9yXCJdOiAnJyxcclxuICAgICAgICAgIFtcImpnRm9ybURhdGUucGFzc3dvcmRcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICAgIGpnVmVyaWZpY2F0aW9uOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIFtcImpnRm9ybVJycm9yLnBhc3N3b3JkRXJyb3JcIl06ICfmlbDlrZfjgIHoi7HmlofjgIHlrZfnrKbkuKTnp43lj4rku6XkuIo2LTIw5L2NJyxcclxuICAgICAgICAgIFtcImpnRm9ybURhdGUucGFzc3dvcmRcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICAgIGpnVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLnBhc3N3b3JkRXJyb3JcIl06ICcnLFxyXG4gICAgICAgIFtcImpnRm9ybURhdGUucGFzc3dvcmRcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIGpnUmVwZWF0UGFzc3dvcmRJbnB1dCh2YWx1ZTphbnkpOnZvaWR7ICAvL+ehruiupOWvhueggVxyXG4gICAgaWYodmFsdWUuZGV0YWlsKXtcclxuICAgICAgaWYodmFsdWUuZGV0YWlsICE9IHRoaXMuZGF0YS5qZ0Zvcm1EYXRlLnBhc3N3b3JkKXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgW1wiamdGb3JtUnJyb3IudHJ1ZXdvcmRFcnJvclwiXTogJ+S4pOasoei+k+WFpeeahOWvhueggeS4jeS4gOiHtCcsXHJcbiAgICAgICAgICBbXCJqZ0Zvcm1EYXRlLnRydWV3b3JkXCJdOiB2YWx1ZS5kZXRhaWwsXHJcbiAgICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBbXCJqZ0Zvcm1ScnJvci50cnVld29yZEVycm9yXCJdOiAnJyxcclxuICAgICAgICAgIFtcImpnRm9ybURhdGUudHJ1ZXdvcmRcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICAgIGpnVmVyaWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLnRydWV3b3JkRXJyb3JcIl06ICcnLFxyXG4gICAgICAgIFtcImpnRm9ybURhdGUudHJ1ZXdvcmRcIl06IHZhbHVlLmRldGFpbCxcclxuICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIGpnUXlOYW1lSW5wdXQodmFsdWU6YW55KTp2b2lkeyAgLy/ljZXkvY3lkI3np7BcclxuICAgIGlmKHZhbHVlLmRldGFpbCl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW1wiamdGb3JtUnJyb3IucXlOYW1lRXJyb3JcIl06ICcnLFxyXG4gICAgICAgIFtcImpnRm9ybURhdGUucXlOYW1lXCJdOiB2YWx1ZS5kZXRhaWwsXHJcbiAgICAgICAgamdWZXJpZmljYXRpb246IHRydWVcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIGpnRGFud2VpRm4odmFsdWU6YW55KTp2b2lkeyAgLy/ljZXkvY3nsbvlnotcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIFtcImpnRm9ybVJycm9yLnF5TmF0dXJlSWRFcnJvclwiXTogJycsXHJcbiAgICAgIFtcImpnRm9ybURhdGUucXlOYXR1cmVJZFwiXTogdmFsdWUuZGV0YWlsLFxyXG4gICAgICBqZ1ZlcmlmaWNhdGlvbjogdHJ1ZVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICBqZ1N1Ym1pdEZuKCk6dm9pZHsgIC8v5py65p6E5rOo5YaMXHJcbiAgICAvL+ivt+i+k+WFpee7n+S4gOekvuS8muS/oeeUqOS7o+eggVxyXG4gICAgaWYodGhpcy5kYXRhLmpnRm9ybURhdGUuc2h4eUNvZGUgPT0gJycpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLnNoeHlDb2RlRXJyb3JcIl06J+ivt+i+k+WFpee7n+S4gOekvuS8muS/oeeUqOS7o+eggScsXHJcbiAgICAgICAgamdWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvL+e7n+S4gOekvuS8muS/oeeUqOS7o+eggeaJq+aPj+S7tuS4iuS8oFxyXG4gICAgaWYodGhpcy5kYXRhLmpnRm9ybURhdGUuc2h4eXBpY3MubGVuZ3RoID09IDApe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLnNoeHlwaWNzRXJyb3JcIl06J+ivt+S4iuS8oOe7n+S4gOekvuS8muS/oeeUqOS7o+eggeaJq+aPj+S7ticsXHJcbiAgICAgICAgamdWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvL+WvhueggVxyXG4gICAgaWYodGhpcy5kYXRhLmpnRm9ybURhdGUucGFzc3dvcmQgPT0gJycpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLnBhc3N3b3JkRXJyb3JcIl06J+ivt+i+k+WFpeWvhueggScsXHJcbiAgICAgICAgamdWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvL+ehruiupOWvhueggVxyXG4gICAgaWYodGhpcy5kYXRhLmpnRm9ybURhdGUudHJ1ZXdvcmQgPT0gJycpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtcImpnRm9ybVJycm9yLnRydWV3b3JkRXJyb3JcIl06J+ivt+WGjeasoeehruiupOWvhueggScsXHJcbiAgICAgICAgamdWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvL+WNleS9jeWQjeensFxyXG4gICAgaWYodGhpcy5kYXRhLmpnRm9ybURhdGUucXlOYW1lID09ICcnKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJqZ0Zvcm1ScnJvci5xeU5hbWVFcnJvclwiXTon6K+36L6T5YWl5Y2V5L2N5ZCN56ewJyxcclxuICAgICAgICBqZ1ZlcmlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIC8v5Y2V5L2N57G75Z6LXHJcbiAgICBpZih0aGlzLmRhdGEuamdGb3JtRGF0ZS5xeU5hdHVyZUlkID09ICcnKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbXCJqZ0Zvcm1ScnJvci5xeU5hdHVyZUlkRXJyb3JcIl06J+ivt+mAieaLqeWNleS9jeexu+WeiycsXHJcbiAgICAgICAgamdWZXJpZmljYXRpb246IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcblxyXG5cclxuXHJcblxyXG4gIC8v5Liq5Lq65rOo5YaMXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgLy/miJHlt7LpmIXor7vlubbmjqXlj5flupTnlKjkvb/nlKjljY/orq5cclxuICBub3RpY2VGbigpOnZvaWR7XHJcbiAgICBEaWFsb2cuYWxlcnQoe1xyXG4gICAgICB0aXRsZTogJ+azqOWGjOmhu+efpScsXHJcbiAgICAgIG1lc3NhZ2VBbGlnbjogJ2xlZnQnLFxyXG4gICAgICBtZXNzYWdlOiAnMS7mnKznq5nph4fnlKjlrp7lkI3orqTor4HvvIznlLPor7fkurrpobvnoa7kv53loavlhpnkv6Hmga/nmoTnnJ/lrp7jgIHlrozmlbTjgIHmnInmlYjjgILkv6Hmga/loavlhpnkuI3nnJ/lrp7jgIHkuI3lrozmlbTnrYnlsIblr7zoh7Tms6jlhozml6Dms5XlrqHmoLjpgJrov4fjgILmnKznq5nnoa7kv53nlKjmiLfkv6Hmga/nmoTlronlhajmgKflkozkv53lr4bmgKflubbkuLrkuYvotJ/otKPjgIJcXG4yLumBteWuiOS4reWNjuS6uuawkeWFseWSjOWbveazleW+i+azleS7pOWSjOWFtuS7luebuOWFs+azleinhO+8jOS4peemgeWPkeW4g+egtOWdj+WuquazleWSjOazleW+i+OAgeazleinhOeahOS/oeaBr+OAglxcbjMu6YG15a6I5YWs5a6J6YOo5YWz5LqO44CK6K6h566X5py65L+h5oGv572R57uc5Zu96ZmF6IGU572R5a6J5YWo5L+d5oqk566h55CG5Yqe5rOV44CL55qE6KeE5a6a77yM6Ieq6KeJ57u05oqk6K6h566X5py65L+h5oGv572R57uc55qE5a6J5YWo44CCXFxuNC7kuKXnpoHlnKjnvZHkuIrlrqPmiazlsIHlu7rov7fkv6HjgIHmt6vnp73jgIHoibLmg4XjgIHmmrTlipvjgIHotYzljZrjgIHmrLror4jnrYnkuI3mraPlvZPooYzkuLrjgIJcXG41LuWNleS9jeaIluS4quS6uuWPkeW4g+eahOS/oeaBr+imgeecn+WunuacieaViOOAgeWHhuehruWujOaVtO+8jOW5tuS4jeW+l+acieW8leS6uuivr+ino+aIluiAheiZmuWBh+eahOmZiOi/sOOAglxcbjYu55So5oi35rOo5YaM5oiQ5Yqf5ZCO77yM6K+35aal5ZaE5L+d566h5oKo55qE55So5oi35ZCN5ZKM5a+G56CB44CCJyxcclxuICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAvLyBvbiBjbG9zZVxyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcblxyXG4gIC8v6aG16Z2i5Yid5aeL5YyWXHJcbiAgb25Mb2FkKCl7XHJcbiAgICAvL+mhtemdouagh+mimFxyXG4gICAgd3guc2V0TmF2aWdhdGlvbkJhclRpdGxlKHsgICAgIFxyXG4gICAgICB0aXRsZTogXCLms6jlhoxcIlxyXG4gICAgfSk7XHJcbiAgICAvL+iOt+WPluWNleS9jeexu+Wei1xyXG4gICAgdGhpcy5nZXREYW53ZWlMaXN0KCk7XHJcbiAgfSxcclxuXHJcbiAgLy/pobXpnaLmuLLmn5PlrozmiJBcclxuICBvblJlYWR5KCl7fSxcclxuXHJcbiAgLy/pobXpnaLmmL7npLpcclxuICBvblNob3coKXt9LFxyXG5cclxuICAvL+mhtemdoumakOiXj1xyXG4gIG9uSGlkZSgpe30sXHJcblxyXG4gIC8v6aG16Z2i5YWz6ZetXHJcbiAgb25VbmxvYWQoKXt9XHJcbn0pXHJcbmV4cG9ydCB7fTtcclxuIl19