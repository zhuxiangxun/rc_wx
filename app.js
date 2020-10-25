"use strict";
App({
    globalData: {
        mapApiKey: 'AWYBZ-C3IWO-5TIWD-SEPVW-KQMOF-RXBAV',
        imgUrl: 'http://files.eyunhan.com/eweb_upload/download/getPic?filePath=',
        url: 'http://lu.eyunhan.com/sit-rencai-api',
        login: '/web/login',
        curUser: '/web/curUser',
        count: '/website/count',
        dic: '/dic/submenuDic',
        circle: '/website/circle',
        all: '/web/cyPlat/all',
        tenants: '/web/platformMap/tenants',
        allDetail: '/web/cyPlat/allDetail',
        cxPlatformUser: '/web/cxPlatform/user',
        cyPlatUser: '/web/cyPlat/user',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxHQUFHLENBQU07SUFFUCxVQUFVLEVBQUU7UUFDVixTQUFTLEVBQUUscUNBQXFDO1FBQ2hELE1BQU0sRUFBRSxnRUFBZ0U7UUFDeEUsR0FBRyxFQUFFLHNDQUFzQztRQUMzQyxLQUFLLEVBQUUsWUFBWTtRQUNuQixPQUFPLEVBQUUsY0FBYztRQUN2QixLQUFLLEVBQUUsZ0JBQWdCO1FBQ3ZCLEdBQUcsRUFBRSxpQkFBaUI7UUFDdEIsTUFBTSxFQUFFLGlCQUFpQjtRQUN6QixHQUFHLEVBQUUsaUJBQWlCO1FBQ3RCLE9BQU8sRUFBRSwwQkFBMEI7UUFDbkMsU0FBUyxFQUFFLHVCQUF1QjtRQUNsQyxjQUFjLEVBQUUsc0JBQXNCO1FBQ3RDLFVBQVUsRUFBRSxrQkFBa0I7S0FHL0I7SUFFRCxRQUFRO1FBQVIsaUJBa0NDO1FBMUJDLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFLUixDQUFDLENBQUE7UUFFRixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osT0FBTyxFQUFFLFVBQUEsR0FBRztnQkFDVixJQUFJLEdBQUcsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtvQkFFckMsRUFBRSxDQUFDLFdBQVcsQ0FBQzt3QkFDYixPQUFPLEVBQUUsVUFBQSxHQUFHOzRCQUVWLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUE7NEJBSXZDLElBQUksS0FBSSxDQUFDLHFCQUFxQixFQUFFO2dDQUM5QixLQUFJLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLENBQUM7NkJBQ2pDO3dCQUNILENBQUM7cUJBQ0YsQ0FBQyxDQUFBO2lCQUNIO1lBQ0gsQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcHAudHNcbkFwcDxhbnk+KHtcbiAgLy/lhajlsYDlj5jph49cbiAgZ2xvYmFsRGF0YToge1xuICAgIG1hcEFwaUtleTogJ0FXWUJaLUMzSVdPLTVUSVdELVNFUFZXLUtRTU9GLVJYQkFWJywgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+S9v+eUqOWcqOiFvuiur+S9jee9ruacjeWKoeeUs+ivt+eahGtleVxuICAgIGltZ1VybDogJ2h0dHA6Ly9maWxlcy5leXVuaGFuLmNvbS9ld2ViX3VwbG9hZC9kb3dubG9hZC9nZXRQaWM/ZmlsZVBhdGg9JywgICAvL+WbvueJh+acjeWKoeWZqFxuICAgIHVybDogJ2h0dHA6Ly9sdS5leXVuaGFuLmNvbS9zaXQtcmVuY2FpLWFwaScsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+acjeWKoeWZqFxuICAgIGxvZ2luOiAnL3dlYi9sb2dpbicsICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/nmbvlvZXmjqXlj6NcbiAgICBjdXJVc2VyOiAnL3dlYi9jdXJVc2VyJywgICAgICAgICAgICAgICAgICAgICAgIC8v6I635Y+W5b2T5YmN55m75b2V55So5oi35L+h5oGvXG4gICAgY291bnQ6ICcvd2Vic2l0ZS9jb3VudCcsICAgICAgICAgICAgICAgICAgICAgICAvL+e7n+iuoTEy5p2h5L+h5oGvXG4gICAgZGljOiAnL2RpYy9zdWJtZW51RGljJywgICAgICAgICAgICAgICAgICAgICAgICAvL+Wtl+WFuOihqFxuICAgIGNpcmNsZTogJy93ZWJzaXRlL2NpcmNsZScsICAgICAgICAgICAgICAgICAgICAgLy/lubPlj7DliqjmgIFcbiAgICBhbGw6ICcvd2ViL2N5UGxhdC9hbGwnLCAgICAgICAgICAgICAgICAgICAgICAgIC8v5YWo6YOo5pWw5o2u77yI5YWt5om+5Zyw5Zu+6aaW6aG177yJXG4gICAgdGVuYW50czogJy93ZWIvcGxhdGZvcm1NYXAvdGVuYW50cycsICAgICAgICAgICAvL+iOt+WPluWMulxuICAgIGFsbERldGFpbDogJy93ZWIvY3lQbGF0L2FsbERldGFpbCcsICAgICAgICAgICAgLy/lha3mib7kuK3pgJrov4dpZOafpeeci+ivpuaDhVxuICAgIGN4UGxhdGZvcm1Vc2VyOiAnL3dlYi9jeFBsYXRmb3JtL3VzZXInLCAgICAgICAgLy/lha3mib7liJvmlrDlubPlj7Dnu5/orqFcbiAgICBjeVBsYXRVc2VyOiAnL3dlYi9jeVBsYXQvdXNlcicsICAgICAgICAgICAgICAgIC8v5YWt5om+5Yib5Lia5bmz5Y+w57uf6K6hXG4gICAgXG4gICAgXG4gIH0sXG5cbiAgb25MYXVuY2goKSB7XG4gICAgLy8g5bGV56S65pys5Zyw5a2Y5YKo6IO95YqbXG4gICAgLy9jb25zdCBsb2dzID0gd3guZ2V0U3RvcmFnZVN5bmMoJ2xvZ3MnKSB8fCBbXVxuICAgIC8vbG9ncy51bnNoaWZ0KERhdGUubm93KCkpXG4gICAgLy93eC5zZXRTdG9yYWdlU3luYygnbG9ncycsIGxvZ3MpXG5cblxuICAgIC8vIOeZu+W9lVxuICAgIHd4LmxvZ2luKHtcbiAgICAgIC8vc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhyZXMuY29kZSlcbiAgICAgICAgLy8g5Y+R6YCBIHJlcy5jb2RlIOWIsOWQjuWPsOaNouWPliBvcGVuSWQsIHNlc3Npb25LZXksIHVuaW9uSWRcbiAgICAgIC8vfSxcbiAgICB9KVxuICAgIC8vIOiOt+WPlueUqOaIt+S/oeaBr1xuICAgIHd4LmdldFNldHRpbmcoe1xuICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgaWYgKHJlcy5hdXRoU2V0dGluZ1snc2NvcGUudXNlckluZm8nXSkge1xuICAgICAgICAgIC8vIOW3sue7j+aOiOadg++8jOWPr+S7peebtOaOpeiwg+eUqCBnZXRVc2VySW5mbyDojrflj5blpLTlg4/mmLXnp7DvvIzkuI3kvJrlvLnmoYZcbiAgICAgICAgICB3eC5nZXRVc2VySW5mbyh7XG4gICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgICAgICAvLyDlj6/ku6XlsIYgcmVzIOWPkemAgee7meWQjuWPsOino+eggeWHuiB1bmlvbklkXG4gICAgICAgICAgICAgIHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xuXG4gICAgICAgICAgICAgIC8vIOeUseS6jiBnZXRVc2VySW5mbyDmmK/nvZHnu5zor7fmsYLvvIzlj6/og73kvJrlnKggUGFnZS5vbkxvYWQg5LmL5ZCO5omN6L+U5ZueXG4gICAgICAgICAgICAgIC8vIOaJgOS7peatpOWkhOWKoOWFpSBjYWxsYmFjayDku6XpmLLmraLov5nnp43mg4XlhrVcbiAgICAgICAgICAgICAgaWYgKHRoaXMudXNlckluZm9SZWFkeUNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VySW5mb1JlYWR5Q2FsbGJhY2socmVzKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0pXG4gIH0sXG59KSJdfQ==