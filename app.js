"use strict";
App({
    globalData: {
        imgUrl: 'http://files.eyunhan.com/eweb_upload/download/getPic?filePath=',
        url: 'http://lu.eyunhan.com/sit-rencai-api',
        login: '/web/login',
        curUser: '/web/curUser',
        count: '/website/count',
        dic: '/dic/submenuDic',
        circle: '/website/circle',
        all: '/web/cyPlat/all',
        tenants: '/web/platformMap/tenants',
    },
    onLaunch: function () {
        var _this = this;
        wx.login({});
        wx.getSetting({
            success: function (res) {
                if (res.authSetting['scope.userInfo']) {
                    wx.getUserInfo({
                        success: function (res) {
                            _this.globalData.userInfo = res.userInfo;
                            if (_this.userInfoReadyCallback) {
                                _this.userInfoReadyCallback(res);
                            }
                        },
                    });
                }
            },
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxHQUFHLENBQU07SUFFUCxVQUFVLEVBQUU7UUFDVixNQUFNLEVBQUUsZ0VBQWdFO1FBQ3hFLEdBQUcsRUFBRSxzQ0FBc0M7UUFDM0MsS0FBSyxFQUFFLFlBQVk7UUFDbkIsT0FBTyxFQUFFLGNBQWM7UUFDdkIsS0FBSyxFQUFFLGdCQUFnQjtRQUN2QixHQUFHLEVBQUUsaUJBQWlCO1FBQ3RCLE1BQU0sRUFBRSxpQkFBaUI7UUFDekIsR0FBRyxFQUFFLGlCQUFpQjtRQUN0QixPQUFPLEVBQUUsMEJBQTBCO0tBQ3BDO0lBQ0QsUUFBUTtRQUFSLGlCQWlDQztRQTFCQyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBS1IsQ0FBQyxDQUFBO1FBRUYsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLE9BQU8sRUFBRSxVQUFBLEdBQUc7Z0JBQ1YsSUFBSSxHQUFHLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLEVBQUU7b0JBRXJDLEVBQUUsQ0FBQyxXQUFXLENBQUM7d0JBQ2IsT0FBTyxFQUFFLFVBQUEsR0FBRzs0QkFFVixLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFBOzRCQUl2QyxJQUFJLEtBQUksQ0FBQyxxQkFBcUIsRUFBRTtnQ0FDOUIsS0FBSSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxDQUFDOzZCQUNqQzt3QkFDSCxDQUFDO3FCQUNGLENBQUMsQ0FBQTtpQkFDSDtZQUNILENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBwLnRzXG5BcHA8YW55Pih7XG4gIC8v5YWo5bGA5Y+Y6YePXG4gIGdsb2JhbERhdGE6IHtcbiAgICBpbWdVcmw6ICdodHRwOi8vZmlsZXMuZXl1bmhhbi5jb20vZXdlYl91cGxvYWQvZG93bmxvYWQvZ2V0UGljP2ZpbGVQYXRoPScsICAgICAgICAgICAgICAgLy/lm77niYfmnI3liqHlmahcbiAgICB1cmw6ICdodHRwOi8vbHUuZXl1bmhhbi5jb20vc2l0LXJlbmNhaS1hcGknLCAgICAgIC8v5pyN5Yqh5ZmoXG4gICAgbG9naW46ICcvd2ViL2xvZ2luJywgICAgICAgIC8v55m75b2V5o6l5Y+jXG4gICAgY3VyVXNlcjogJy93ZWIvY3VyVXNlcicsICAgIC8v6I635Y+W5b2T5YmN55m75b2V55So5oi35L+h5oGvXG4gICAgY291bnQ6ICcvd2Vic2l0ZS9jb3VudCcsICAgIC8v57uf6K6hMTLmnaHkv6Hmga9cbiAgICBkaWM6ICcvZGljL3N1Ym1lbnVEaWMnLCAgICAgLy/lrZflhbjooahcbiAgICBjaXJjbGU6ICcvd2Vic2l0ZS9jaXJjbGUnLCAgLy/lubPlj7DliqjmgIFcbiAgICBhbGw6ICcvd2ViL2N5UGxhdC9hbGwnLCAgICAgLy/lhajpg6jmlbDmja7vvIjlha3mib7lnLDlm77pppbpobXvvIlcbiAgICB0ZW5hbnRzOiAnL3dlYi9wbGF0Zm9ybU1hcC90ZW5hbnRzJywgICAgIC8v6I635Y+W5Yy6XG4gIH0sXG4gIG9uTGF1bmNoKCkge1xuICAgIC8vIOWxleekuuacrOWcsOWtmOWCqOiDveWKm1xuICAgIC8vY29uc3QgbG9ncyA9IHd4LmdldFN0b3JhZ2VTeW5jKCdsb2dzJykgfHwgW11cbiAgICAvL2xvZ3MudW5zaGlmdChEYXRlLm5vdygpKVxuICAgIC8vd3guc2V0U3RvcmFnZVN5bmMoJ2xvZ3MnLCBsb2dzKVxuXG4gICAgLy8g55m75b2VXG4gICAgd3gubG9naW4oe1xuICAgICAgLy8gc3VjY2VzczogcmVzID0+IHtcbiAgICAgIC8vICAgY29uc29sZS5sb2cocmVzLmNvZGUpXG4gICAgICAvLyAgIC8vIOWPkemAgSByZXMuY29kZSDliLDlkI7lj7DmjaLlj5Ygb3BlbklkLCBzZXNzaW9uS2V5LCB1bmlvbklkXG4gICAgICAvLyB9LFxuICAgIH0pXG4gICAgLy8g6I635Y+W55So5oi35L+h5oGvXG4gICAgd3guZ2V0U2V0dGluZyh7XG4gICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICBpZiAocmVzLmF1dGhTZXR0aW5nWydzY29wZS51c2VySW5mbyddKSB7XG4gICAgICAgICAgLy8g5bey57uP5o6I5p2D77yM5Y+v5Lul55u05o6l6LCD55SoIGdldFVzZXJJbmZvIOiOt+WPluWktOWDj+aYteensO+8jOS4jeS8muW8ueahhlxuICAgICAgICAgIHd4LmdldFVzZXJJbmZvKHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgICAgIC8vIOWPr+S7peWwhiByZXMg5Y+R6YCB57uZ5ZCO5Y+w6Kej56CB5Ye6IHVuaW9uSWRcbiAgICAgICAgICAgICAgdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXG5cbiAgICAgICAgICAgICAgLy8g55Sx5LqOIGdldFVzZXJJbmZvIOaYr+e9kee7nOivt+axgu+8jOWPr+iDveS8muWcqCBQYWdlLm9uTG9hZCDkuYvlkI7miY3ov5Tlm55cbiAgICAgICAgICAgICAgLy8g5omA5Lul5q2k5aSE5Yqg5YWlIGNhbGxiYWNrIOS7pemYsuatoui/meenjeaDheWGtVxuICAgICAgICAgICAgICBpZiAodGhpcy51c2VySW5mb1JlYWR5Q2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJJbmZvUmVhZHlDYWxsYmFjayhyZXMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSlcbiAgfSxcbn0pIl19