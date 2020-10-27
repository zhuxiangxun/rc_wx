"use strict";
App({
    globalData: {
        areaId: '',
        areaName: '',
        mapApiKey: 'AWYBZ-C3IWO-5TIWD-SEPVW-KQMOF-RXBAV',
        imgUrl: 'http://files.eyunhan.com/eweb_upload/download/getPic?filePath=',
        url: 'http://rc.qdcsdn.cn/sit-rencai-api',
        login: '/web/login',
        curUser: '/web/curUser',
        count: '/website/count',
        submenuDic: '/dic/submenuDic',
        circle: '/website/circle',
        all: '/web/cyPlat/all',
        tenants: '/web/platformMap/tenants',
        allDetail: '/web/cyPlat/allDetail',
        allPlatform: '/web/cyPlat/allPlatform',
        cxPlatformUser: '/web/cxPlatform/user',
        cyPlatUser: '/web/cyPlat/user',
        findPro: '/web/project/findPro',
        cyPlatform: '/web/cyVector/cyPlatform',
        findFw: '/web/enter/fw/findFw',
        allFund: '/web/cyPlat/allFund',
        jinrong: '/web/enter/fw/jinrong',
        touzi: '/web/need/touzi',
        rongzi: '/web/project/rongzi',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxHQUFHLENBQU07SUFFUCxVQUFVLEVBQUU7UUFDVixNQUFNLEVBQUUsRUFBRTtRQUNWLFFBQVEsRUFBRSxFQUFFO1FBQ1osU0FBUyxFQUFFLHFDQUFxQztRQUNoRCxNQUFNLEVBQUUsZ0VBQWdFO1FBRXhFLEdBQUcsRUFBRSxvQ0FBb0M7UUFDekMsS0FBSyxFQUFFLFlBQVk7UUFDbkIsT0FBTyxFQUFFLGNBQWM7UUFDdkIsS0FBSyxFQUFFLGdCQUFnQjtRQUN2QixVQUFVLEVBQUUsaUJBQWlCO1FBQzdCLE1BQU0sRUFBRSxpQkFBaUI7UUFDekIsR0FBRyxFQUFFLGlCQUFpQjtRQUN0QixPQUFPLEVBQUUsMEJBQTBCO1FBQ25DLFNBQVMsRUFBRSx1QkFBdUI7UUFFbEMsV0FBVyxFQUFFLHlCQUF5QjtRQUN0QyxjQUFjLEVBQUUsc0JBQXNCO1FBQ3RDLFVBQVUsRUFBRSxrQkFBa0I7UUFDOUIsT0FBTyxFQUFFLHNCQUFzQjtRQUMvQixVQUFVLEVBQUUsMEJBQTBCO1FBQ3RDLE1BQU0sRUFBRSxzQkFBc0I7UUFDOUIsT0FBTyxFQUFFLHFCQUFxQjtRQUM5QixPQUFPLEVBQUUsdUJBQXVCO1FBQ2hDLEtBQUssRUFBRSxpQkFBaUI7UUFDeEIsTUFBTSxFQUFFLHFCQUFxQjtLQUc5QjtJQUVELFFBQVE7UUFBUixpQkFrQ0M7UUExQkMsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUtSLENBQUMsQ0FBQTtRQUVGLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixPQUFPLEVBQUUsVUFBQSxHQUFHO2dCQUNWLElBQUksR0FBRyxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO29CQUVyQyxFQUFFLENBQUMsV0FBVyxDQUFDO3dCQUNiLE9BQU8sRUFBRSxVQUFBLEdBQUc7NEJBRVYsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQTs0QkFJdkMsSUFBSSxLQUFJLENBQUMscUJBQXFCLEVBQUU7Z0NBQzlCLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsQ0FBQzs2QkFDakM7d0JBQ0gsQ0FBQztxQkFDRixDQUFDLENBQUE7aUJBQ0g7WUFDSCxDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFwcC50c1xuQXBwPGFueT4oe1xuICAvL+WFqOWxgOWPmOmHj1xuICBnbG9iYWxEYXRhOiB7XG4gICAgYXJlYUlkOiAnJywgICAgICAgICAgICAgICAgICAvL+S9jee9ruWMuklEXG4gICAgYXJlYU5hbWU6ICcnLCAgICAgICAgICAgICAgICAvL+S9jee9ruWMuuWQjeensFxuICAgIG1hcEFwaUtleTogJ0FXWUJaLUMzSVdPLTVUSVdELVNFUFZXLUtRTU9GLVJYQkFWJywgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+S9v+eUqOWcqOiFvuiur+S9jee9ruacjeWKoeeUs+ivt+eahGtleVxuICAgIGltZ1VybDogJ2h0dHA6Ly9maWxlcy5leXVuaGFuLmNvbS9ld2ViX3VwbG9hZC9kb3dubG9hZC9nZXRQaWM/ZmlsZVBhdGg9JywgICAvL+WbvueJh+acjeWKoeWZqFxuICAgIC8vdXJsOiAnaHR0cDovL2x1LmV5dW5oYW4uY29tL3NpdC1yZW5jYWktYXBpJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+acjeWKoeWZqO+8iOa1i+ivle+8iVxuICAgIHVybDogJ2h0dHA6Ly9yYy5xZGNzZG4uY24vc2l0LXJlbmNhaS1hcGknLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+acjeWKoeWZqO+8iOato+W8j++8iVxuICAgIGxvZ2luOiAnL3dlYi9sb2dpbicsICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/nmbvlvZXmjqXlj6NcbiAgICBjdXJVc2VyOiAnL3dlYi9jdXJVc2VyJywgICAgICAgICAgICAgICAgICAgICAgIC8v6I635Y+W5b2T5YmN55m75b2V55So5oi35L+h5oGvXG4gICAgY291bnQ6ICcvd2Vic2l0ZS9jb3VudCcsICAgICAgICAgICAgICAgICAgICAgICAvL+e7n+iuoTEy5p2h5L+h5oGvXG4gICAgc3VibWVudURpYzogJy9kaWMvc3VibWVudURpYycsICAgICAgICAgICAgICAgICAvL+mrmOe6p+aQnOe0ouWtl+WFuOihqFxuICAgIGNpcmNsZTogJy93ZWJzaXRlL2NpcmNsZScsICAgICAgICAgICAgICAgICAgICAgLy/lubPlj7DliqjmgIFcbiAgICBhbGw6ICcvd2ViL2N5UGxhdC9hbGwnLCAgICAgICAgICAgICAgICAgICAgICAgIC8v5YWo6YOo5pWw5o2u77yI5YWt5om+5Zyw5Zu+6aaW6aG177yJXG4gICAgdGVuYW50czogJy93ZWIvcGxhdGZvcm1NYXAvdGVuYW50cycsICAgICAgICAgICAvL+iOt+WPluWMulxuICAgIGFsbERldGFpbDogJy93ZWIvY3lQbGF0L2FsbERldGFpbCcsICAgICAgICAgICAgLy/lha3mib7kuK3pgJrov4dpZOafpeeci+ivpuaDhVxuICAgIFxuICAgIGFsbFBsYXRmb3JtOiAnL3dlYi9jeVBsYXQvYWxsUGxhdGZvcm0nLCAgICAgICAgLy/lha3mib7miYDmnInlubPlj7Dnu5/orqFcbiAgICBjeFBsYXRmb3JtVXNlcjogJy93ZWIvY3hQbGF0Zm9ybS91c2VyJywgICAgICAgIC8v5YWt5om+5Yib5paw5bmz5Y+w57uf6K6hXG4gICAgY3lQbGF0VXNlcjogJy93ZWIvY3lQbGF0L3VzZXInLCAgICAgICAgICAgICAgICAvL+WFreaJvuWIm+S4muW5s+WPsOe7n+iuoVxuICAgIGZpbmRQcm86ICcvd2ViL3Byb2plY3QvZmluZFBybycsICAgICAgICAgICAgICAgLy/lha3mib7pobnnm65cbiAgICBjeVBsYXRmb3JtOiAnL3dlYi9jeVZlY3Rvci9jeVBsYXRmb3JtJywgICAgICAgIC8v5YWt5om+5Zy65ZywXG4gICAgZmluZEZ3OiAnL3dlYi9lbnRlci9mdy9maW5kRncnLCAgICAgICAgICAgICAgICAvL+WFreaJvuacjeWKoVxuICAgIGFsbEZ1bmQ6ICcvd2ViL2N5UGxhdC9hbGxGdW5kJywgICAgICAgICAgICAgICAgLy/lha3mib7otYTph5Hlhajpg6hcbiAgICBqaW5yb25nOiAnL3dlYi9lbnRlci9mdy9qaW5yb25nJywgICAgICAgICAgICAgIC8v5YWt5om+6LWE6YeR6YeR6J6N5pyN5YqhXG4gICAgdG91emk6ICcvd2ViL25lZWQvdG91emknLCAgICAgICAgICAgICAgICAgICAgICAvL+WFreaJvui1hOmHkeaJvuaKlei1hFxuICAgIHJvbmd6aTogJy93ZWIvcHJvamVjdC9yb25nemknLCAgICAgICAgICAgICAgICAgLy/lha3mib7otYTph5Hmib7ono3otYRcbiAgICBcbiAgICBcbiAgfSxcblxuICBvbkxhdW5jaCgpIHtcbiAgICAvLyDlsZXnpLrmnKzlnLDlrZjlgqjog73liptcbiAgICAvL2NvbnN0IGxvZ3MgPSB3eC5nZXRTdG9yYWdlU3luYygnbG9ncycpIHx8IFtdXG4gICAgLy9sb2dzLnVuc2hpZnQoRGF0ZS5ub3coKSlcbiAgICAvL3d4LnNldFN0b3JhZ2VTeW5jKCdsb2dzJywgbG9ncylcblxuXG4gICAgLy8g55m75b2VXG4gICAgd3gubG9naW4oe1xuICAgICAgLy9zdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAvL2NvbnNvbGUubG9nKHJlcy5jb2RlKVxuICAgICAgICAvLyDlj5HpgIEgcmVzLmNvZGUg5Yiw5ZCO5Y+w5o2i5Y+WIG9wZW5JZCwgc2Vzc2lvbktleSwgdW5pb25JZFxuICAgICAgLy99LFxuICAgIH0pXG4gICAgLy8g6I635Y+W55So5oi35L+h5oGvXG4gICAgd3guZ2V0U2V0dGluZyh7XG4gICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICBpZiAocmVzLmF1dGhTZXR0aW5nWydzY29wZS51c2VySW5mbyddKSB7XG4gICAgICAgICAgLy8g5bey57uP5o6I5p2D77yM5Y+v5Lul55u05o6l6LCD55SoIGdldFVzZXJJbmZvIOiOt+WPluWktOWDj+aYteensO+8jOS4jeS8muW8ueahhlxuICAgICAgICAgIHd4LmdldFVzZXJJbmZvKHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgICAgIC8vIOWPr+S7peWwhiByZXMg5Y+R6YCB57uZ5ZCO5Y+w6Kej56CB5Ye6IHVuaW9uSWRcbiAgICAgICAgICAgICAgdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXG5cbiAgICAgICAgICAgICAgLy8g55Sx5LqOIGdldFVzZXJJbmZvIOaYr+e9kee7nOivt+axgu+8jOWPr+iDveS8muWcqCBQYWdlLm9uTG9hZCDkuYvlkI7miY3ov5Tlm55cbiAgICAgICAgICAgICAgLy8g5omA5Lul5q2k5aSE5Yqg5YWlIGNhbGxiYWNrIOS7pemYsuatoui/meenjeaDheWGtVxuICAgICAgICAgICAgICBpZiAodGhpcy51c2VySW5mb1JlYWR5Q2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJJbmZvUmVhZHlDYWxsYmFjayhyZXMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSlcbiAgfSxcbn0pIl19