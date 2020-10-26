"use strict";
App({
    globalData: {
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
        cxPlatformUser: '/web/cxPlatform/user',
        cyPlatUser: '/web/cyPlat/user',
        findPro: '/web/project/findPro',
        cyPlatform: '/web/cyVector/cyPlatform',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxHQUFHLENBQU07SUFFUCxVQUFVLEVBQUU7UUFDVixTQUFTLEVBQUUscUNBQXFDO1FBQ2hELE1BQU0sRUFBRSxnRUFBZ0U7UUFFeEUsR0FBRyxFQUFFLG9DQUFvQztRQUN6QyxLQUFLLEVBQUUsWUFBWTtRQUNuQixPQUFPLEVBQUUsY0FBYztRQUN2QixLQUFLLEVBQUUsZ0JBQWdCO1FBQ3ZCLFVBQVUsRUFBRSxpQkFBaUI7UUFDN0IsTUFBTSxFQUFFLGlCQUFpQjtRQUN6QixHQUFHLEVBQUUsaUJBQWlCO1FBQ3RCLE9BQU8sRUFBRSwwQkFBMEI7UUFDbkMsU0FBUyxFQUFFLHVCQUF1QjtRQUNsQyxjQUFjLEVBQUUsc0JBQXNCO1FBQ3RDLFVBQVUsRUFBRSxrQkFBa0I7UUFDOUIsT0FBTyxFQUFFLHNCQUFzQjtRQUMvQixVQUFVLEVBQUUsMEJBQTBCO0tBR3ZDO0lBRUQsUUFBUTtRQUFSLGlCQWtDQztRQTFCQyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBS1IsQ0FBQyxDQUFBO1FBRUYsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLE9BQU8sRUFBRSxVQUFBLEdBQUc7Z0JBQ1YsSUFBSSxHQUFHLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLEVBQUU7b0JBRXJDLEVBQUUsQ0FBQyxXQUFXLENBQUM7d0JBQ2IsT0FBTyxFQUFFLFVBQUEsR0FBRzs0QkFFVixLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFBOzRCQUl2QyxJQUFJLEtBQUksQ0FBQyxxQkFBcUIsRUFBRTtnQ0FDOUIsS0FBSSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxDQUFDOzZCQUNqQzt3QkFDSCxDQUFDO3FCQUNGLENBQUMsQ0FBQTtpQkFDSDtZQUNILENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBwLnRzXG5BcHA8YW55Pih7XG4gIC8v5YWo5bGA5Y+Y6YePXG4gIGdsb2JhbERhdGE6IHtcbiAgICBtYXBBcGlLZXk6ICdBV1lCWi1DM0lXTy01VElXRC1TRVBWVy1LUU1PRi1SWEJBVicsICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/kvb/nlKjlnKjohb7orq/kvY3nva7mnI3liqHnlLPor7fnmoRrZXlcbiAgICBpbWdVcmw6ICdodHRwOi8vZmlsZXMuZXl1bmhhbi5jb20vZXdlYl91cGxvYWQvZG93bmxvYWQvZ2V0UGljP2ZpbGVQYXRoPScsICAgLy/lm77niYfmnI3liqHlmahcbiAgICAvL3VybDogJ2h0dHA6Ly9sdS5leXVuaGFuLmNvbS9zaXQtcmVuY2FpLWFwaScsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/mnI3liqHlmajvvIjmtYvor5XvvIlcbiAgICB1cmw6ICdodHRwOi8vcmMucWRjc2RuLmNuL3NpdC1yZW5jYWktYXBpJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/mnI3liqHlmajvvIjmraPlvI/vvIlcbiAgICBsb2dpbjogJy93ZWIvbG9naW4nLCAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v55m75b2V5o6l5Y+jXG4gICAgY3VyVXNlcjogJy93ZWIvY3VyVXNlcicsICAgICAgICAgICAgICAgICAgICAgICAvL+iOt+WPluW9k+WJjeeZu+W9leeUqOaIt+S/oeaBr1xuICAgIGNvdW50OiAnL3dlYnNpdGUvY291bnQnLCAgICAgICAgICAgICAgICAgICAgICAgLy/nu5/orqExMuadoeS/oeaBr1xuICAgIHN1Ym1lbnVEaWM6ICcvZGljL3N1Ym1lbnVEaWMnLCAgICAgICAgICAgICAgICAgLy/pq5jnuqfmkJzntKLlrZflhbjooahcbiAgICBjaXJjbGU6ICcvd2Vic2l0ZS9jaXJjbGUnLCAgICAgICAgICAgICAgICAgICAgIC8v5bmz5Y+w5Yqo5oCBXG4gICAgYWxsOiAnL3dlYi9jeVBsYXQvYWxsJywgICAgICAgICAgICAgICAgICAgICAgICAvL+WFqOmDqOaVsOaNru+8iOWFreaJvuWcsOWbvummlumhte+8iVxuICAgIHRlbmFudHM6ICcvd2ViL3BsYXRmb3JtTWFwL3RlbmFudHMnLCAgICAgICAgICAgLy/ojrflj5bljLpcbiAgICBhbGxEZXRhaWw6ICcvd2ViL2N5UGxhdC9hbGxEZXRhaWwnLCAgICAgICAgICAgIC8v5YWt5om+5Lit6YCa6L+HaWTmn6XnnIvor6bmg4VcbiAgICBjeFBsYXRmb3JtVXNlcjogJy93ZWIvY3hQbGF0Zm9ybS91c2VyJywgICAgICAgIC8v5YWt5om+5Yib5paw5bmz5Y+w57uf6K6hXG4gICAgY3lQbGF0VXNlcjogJy93ZWIvY3lQbGF0L3VzZXInLCAgICAgICAgICAgICAgICAvL+WFreaJvuWIm+S4muW5s+WPsOe7n+iuoVxuICAgIGZpbmRQcm86ICcvd2ViL3Byb2plY3QvZmluZFBybycsICAgICAgICAgICAgICAgLy/lha3mib7pobnnm65cbiAgICBjeVBsYXRmb3JtOiAnL3dlYi9jeVZlY3Rvci9jeVBsYXRmb3JtJywgICAgICAgIC8v5YWt5om+5Zy65ZywXG4gICAgXG4gICAgXG4gIH0sXG5cbiAgb25MYXVuY2goKSB7XG4gICAgLy8g5bGV56S65pys5Zyw5a2Y5YKo6IO95YqbXG4gICAgLy9jb25zdCBsb2dzID0gd3guZ2V0U3RvcmFnZVN5bmMoJ2xvZ3MnKSB8fCBbXVxuICAgIC8vbG9ncy51bnNoaWZ0KERhdGUubm93KCkpXG4gICAgLy93eC5zZXRTdG9yYWdlU3luYygnbG9ncycsIGxvZ3MpXG5cblxuICAgIC8vIOeZu+W9lVxuICAgIHd4LmxvZ2luKHtcbiAgICAgIC8vc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhyZXMuY29kZSlcbiAgICAgICAgLy8g5Y+R6YCBIHJlcy5jb2RlIOWIsOWQjuWPsOaNouWPliBvcGVuSWQsIHNlc3Npb25LZXksIHVuaW9uSWRcbiAgICAgIC8vfSxcbiAgICB9KVxuICAgIC8vIOiOt+WPlueUqOaIt+S/oeaBr1xuICAgIHd4LmdldFNldHRpbmcoe1xuICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgaWYgKHJlcy5hdXRoU2V0dGluZ1snc2NvcGUudXNlckluZm8nXSkge1xuICAgICAgICAgIC8vIOW3sue7j+aOiOadg++8jOWPr+S7peebtOaOpeiwg+eUqCBnZXRVc2VySW5mbyDojrflj5blpLTlg4/mmLXnp7DvvIzkuI3kvJrlvLnmoYZcbiAgICAgICAgICB3eC5nZXRVc2VySW5mbyh7XG4gICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgICAgICAvLyDlj6/ku6XlsIYgcmVzIOWPkemAgee7meWQjuWPsOino+eggeWHuiB1bmlvbklkXG4gICAgICAgICAgICAgIHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xuXG4gICAgICAgICAgICAgIC8vIOeUseS6jiBnZXRVc2VySW5mbyDmmK/nvZHnu5zor7fmsYLvvIzlj6/og73kvJrlnKggUGFnZS5vbkxvYWQg5LmL5ZCO5omN6L+U5ZueXG4gICAgICAgICAgICAgIC8vIOaJgOS7peatpOWkhOWKoOWFpSBjYWxsYmFjayDku6XpmLLmraLov5nnp43mg4XlhrVcbiAgICAgICAgICAgICAgaWYgKHRoaXMudXNlckluZm9SZWFkeUNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VySW5mb1JlYWR5Q2FsbGJhY2socmVzKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0pXG4gIH0sXG59KSJdfQ==