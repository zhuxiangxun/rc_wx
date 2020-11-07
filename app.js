"use strict";
App({
    globalData: {
        loginStatus: '',
        userId: '',
        indexFlag: '',
        areaId: '',
        areaName: '',
        longitude: '',
        latitude: '',
        mapApiKey: '2L6BZ-6BWWS-RS6OI-6TPZT-ZRS4V-22BIF',
        imgUrl: 'https://rcapp.qdcsdn.cn/eweb_upload/download/getPic',
        fileUrl: 'https://rcapp.qdcsdn.cn/eweb_upload/upload/uploadFile',
        url: 'https://rcapp.qdcsdn.cn/sit-rencai-api',
        zgUrl: 'https://rcapp.qdcsdn.cn/sit-auth-api',
        login: '/web/login',
        curUser: '/web/curUser',
        danweiLogin: '/login',
        loginuser: '/userInfo/loginuser',
        editPass: '/web/editPass',
        tenantList: '/web/tenantList',
        getCode: '/web/getCode',
        cyPlatformApi: '/web/cyPlatform',
        enterReg: '/web/enterReg',
        userReg: '/web/userReg',
        count: '/website/count',
        submenuDic: '/dic/submenuDic',
        circle: '/website/circle',
        notice: '/website/notice',
        activity: '/website/activity',
        all: '/web/cyPlat/all',
        tenants: '/web/platformMap/tenants',
        allDetail: '/web/cyPlat/allDetail',
        allPlatform: '/web/cyPlat/allPlatform',
        cxPlatformUser: '/web/cxPlatform/findCxPlatform',
        cyPlatUser: '/web/cyPlat/findCyPlatform',
        findPro: '/web/project/findPro',
        cyPlatform: '/web/cyVector/findVector',
        findFw: '/web/enter/fw/findFw',
        allFund: '/web/cyPlat/allFund',
        jinrong: '/web/enter/fw/jinrong',
        touzi: '/web/need/touzi',
        rongzi: '/web/project/rongzi',
    },
    onLaunch: function () {
        var _this = this;
        try {
            wx.clearStorageSync();
        }
        catch (e) {
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxHQUFHLENBQU07SUFFUCxVQUFVLEVBQUU7UUFDVixXQUFXLEVBQUUsRUFBRTtRQUNmLE1BQU0sRUFBRSxFQUFFO1FBRVYsU0FBUyxFQUFFLEVBQUU7UUFDYixNQUFNLEVBQUUsRUFBRTtRQUNWLFFBQVEsRUFBRSxFQUFFO1FBQ1osU0FBUyxFQUFFLEVBQUU7UUFDYixRQUFRLEVBQUUsRUFBRTtRQUVaLFNBQVMsRUFBRSxxQ0FBcUM7UUFDaEQsTUFBTSxFQUFFLHFEQUFxRDtRQUM3RCxPQUFPLEVBQUUsdURBQXVEO1FBQ2hFLEdBQUcsRUFBRSx3Q0FBd0M7UUFDN0MsS0FBSyxFQUFFLHNDQUFzQztRQUU3QyxLQUFLLEVBQUUsWUFBWTtRQUNuQixPQUFPLEVBQUUsY0FBYztRQUN2QixXQUFXLEVBQUUsUUFBUTtRQUNyQixTQUFTLEVBQUUscUJBQXFCO1FBRWhDLFFBQVEsRUFBRSxlQUFlO1FBQ3pCLFVBQVUsRUFBRSxpQkFBaUI7UUFDN0IsT0FBTyxFQUFFLGNBQWM7UUFDdkIsYUFBYSxFQUFFLGlCQUFpQjtRQUNoQyxRQUFRLEVBQUUsZUFBZTtRQUN6QixPQUFPLEVBQUUsY0FBYztRQUV2QixLQUFLLEVBQUUsZ0JBQWdCO1FBQ3ZCLFVBQVUsRUFBRSxpQkFBaUI7UUFDN0IsTUFBTSxFQUFFLGlCQUFpQjtRQUN6QixNQUFNLEVBQUUsaUJBQWlCO1FBQ3pCLFFBQVEsRUFBRSxtQkFBbUI7UUFFN0IsR0FBRyxFQUFFLGlCQUFpQjtRQUN0QixPQUFPLEVBQUUsMEJBQTBCO1FBQ25DLFNBQVMsRUFBRSx1QkFBdUI7UUFFbEMsV0FBVyxFQUFFLHlCQUF5QjtRQUN0QyxjQUFjLEVBQUUsZ0NBQWdDO1FBQ2hELFVBQVUsRUFBRSw0QkFBNEI7UUFDeEMsT0FBTyxFQUFFLHNCQUFzQjtRQUMvQixVQUFVLEVBQUUsMEJBQTBCO1FBQ3RDLE1BQU0sRUFBRSxzQkFBc0I7UUFDOUIsT0FBTyxFQUFFLHFCQUFxQjtRQUM5QixPQUFPLEVBQUUsdUJBQXVCO1FBQ2hDLEtBQUssRUFBRSxpQkFBaUI7UUFDeEIsTUFBTSxFQUFFLHFCQUFxQjtLQUU5QjtJQUVELFFBQVE7UUFBUixpQkF1Q0M7UUFsQ0MsSUFBSTtZQUNGLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ3ZCO1FBQUMsT0FBTSxDQUFDLEVBQUU7U0FFVjtRQUdELEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFLUixDQUFDLENBQUE7UUFFRixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osT0FBTyxFQUFFLFVBQUEsR0FBRztnQkFDVixJQUFJLEdBQUcsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtvQkFFckMsRUFBRSxDQUFDLFdBQVcsQ0FBQzt3QkFDYixPQUFPLEVBQUUsVUFBQSxHQUFHOzRCQUVWLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUE7NEJBS3ZDLElBQUksS0FBSSxDQUFDLHFCQUFxQixFQUFFO2dDQUM5QixLQUFJLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLENBQUM7NkJBQ2pDO3dCQUNILENBQUM7cUJBQ0YsQ0FBQyxDQUFBO2lCQUNIO1lBQ0gsQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcHAudHNcbkFwcDxhbnk+KHtcbiAgLy/lhajlsYDlj5jph49cbiAgZ2xvYmFsRGF0YToge1xuICAgIGxvZ2luU3RhdHVzOiAnJywgICAgICAgICAgICAgLy/nlKjmiLfnmbvlvZXvvIjkuKrkurrjgIHnu5/nrbnvvInliKTmlq1cbiAgICB1c2VySWQ6ICcnLCAgICAgICAgICAgICAgICAgIC8v55m75b2V55So5oi3SURcblxuICAgIGluZGV4RmxhZzogJycsICAgICAgICAgICAgICAgLy/pppbpobU25om+5Yik5patXG4gICAgYXJlYUlkOiAnJywgICAgICAgICAgICAgICAgICAvL+S9jee9ruWMuklEXG4gICAgYXJlYU5hbWU6ICcnLCAgICAgICAgICAgICAgICAvL+S9jee9ruWMuuWQjeensFxuICAgIGxvbmdpdHVkZTogJycsICAgICAgICAgICAgICAgLy/kuK3lv4Pnu4/luqYo57uI54K5KVxuICAgIGxhdGl0dWRlOiAnJywgICAgICAgICAgICAgICAgLy/kuK3lv4PnuqzluqYo57uI54K5KVxuICAgIFxuICAgIG1hcEFwaUtleTogJzJMNkJaLTZCV1dTLVJTNk9JLTZUUFpULVpSUzRWLTIyQklGJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/kvb/nlKjlnKjohb7orq/kvY3nva7mnI3liqHnlLPor7fnmoRrZXlcbiAgICBpbWdVcmw6ICdodHRwczovL3JjYXBwLnFkY3Nkbi5jbi9ld2ViX3VwbG9hZC9kb3dubG9hZC9nZXRQaWMnLCAgICAgICAgICAgICAgIC8v5Zu+54mH5bGV56S65pyN5Yqh5ZmoXG4gICAgZmlsZVVybDogJ2h0dHBzOi8vcmNhcHAucWRjc2RuLmNuL2V3ZWJfdXBsb2FkL3VwbG9hZC91cGxvYWRGaWxlJywgICAgICAgICAgICAvL+aWh+S7tuS4iuS8oOacjeWKoeWZqFxuICAgIHVybDogJ2h0dHBzOi8vcmNhcHAucWRjc2RuLmNuL3NpdC1yZW5jYWktYXBpJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/mnI3liqHlmajvvIjlj5HluIPvvIlcbiAgICB6Z1VybDogJ2h0dHBzOi8vcmNhcHAucWRjc2RuLmNuL3NpdC1hdXRoLWFwaScsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5pyN5Yqh5Zmo77yI5Li7566h5Y2V5L2N77yJXG5cbiAgICBsb2dpbjogJy93ZWIvbG9naW4nLCAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5py65p6E44CB5Liq5Lq655m75b2V5o6l5Y+jXG4gICAgY3VyVXNlcjogJy93ZWIvY3VyVXNlcicsICAgICAgICAgICAgICAgICAgICAgICAvL+iOt+WPluW9k+WJjeeZu+W9leeUqOaIt+S/oeaBr1xuICAgIGRhbndlaUxvZ2luOiAnL2xvZ2luJywgICAgICAgICAgICAgICAgICAgICAgICAgLy/kuLvnrqHljZXkvY3nmbvlvZXmjqXlj6NcbiAgICBsb2dpbnVzZXI6ICcvdXNlckluZm8vbG9naW51c2VyJywgICAgICAgICAgICAgIC8v6I635Y+W5Li7566h5Y2V5L2N55So5oi35L+h5oGvXG4gICAgXG4gICAgZWRpdFBhc3M6ICcvd2ViL2VkaXRQYXNzJywgICAgICAgICAgICAgICAgICAgICAvL+S/ruaUueWvhueggVxuICAgIHRlbmFudExpc3Q6ICcvd2ViL3RlbmFudExpc3QnLCAgICAgICAgICAgICAgICAgLy/ms6jlhozmiYDlnKjlnLDljLpcbiAgICBnZXRDb2RlOiAnL3dlYi9nZXRDb2RlJywgICAgICAgICAgICAgICAgICAgICAgIC8v5Y+R6YCB6aqM6K+B56CBXG4gICAgY3lQbGF0Zm9ybUFwaTogJy93ZWIvY3lQbGF0Zm9ybScsICAgICAgICAgICAgICAvL+aJgOWxnuWIm+S4muW5s+WPsFxuICAgIGVudGVyUmVnOiAnL3dlYi9lbnRlclJlZycsICAgICAgICAgICAgICAgICAgICAgIC8v5rOo5YaM5LyB5LiaXG4gICAgdXNlclJlZzogJy93ZWIvdXNlclJlZycsICAgICAgICAgICAgICAgICAgICAgICAgLy/nlKjmiLfms6jlhoxcbiAgICBcbiAgICBjb3VudDogJy93ZWJzaXRlL2NvdW50JywgICAgICAgICAgICAgICAgICAgICAgIC8v57uf6K6hMTLmnaHkv6Hmga9cbiAgICBzdWJtZW51RGljOiAnL2RpYy9zdWJtZW51RGljJywgICAgICAgICAgICAgICAgIC8v6auY57qn5pCc57Si5a2X5YW46KGoXG4gICAgY2lyY2xlOiAnL3dlYnNpdGUvY2lyY2xlJywgICAgICAgICAgICAgICAgICAgICAvL+W5s+WPsOWKqOaAgVxuICAgIG5vdGljZTogJy93ZWJzaXRlL25vdGljZScsICAgICAgICAgICAgICAgICAgICAgLy/pgJrnn6XlhazlkYpcbiAgICBhY3Rpdml0eTogJy93ZWJzaXRlL2FjdGl2aXR5JywgICAgICAgICAgICAgICAgIC8v5rS75Yqo5L+h5oGvXG4gICAgXG4gICAgYWxsOiAnL3dlYi9jeVBsYXQvYWxsJywgICAgICAgICAgICAgICAgICAgICAgICAvL+WFqOmDqOaVsOaNru+8iOWFreaJvuWcsOWbvummlumhte+8iVxuICAgIHRlbmFudHM6ICcvd2ViL3BsYXRmb3JtTWFwL3RlbmFudHMnLCAgICAgICAgICAgLy/ojrflj5bljLpcbiAgICBhbGxEZXRhaWw6ICcvd2ViL2N5UGxhdC9hbGxEZXRhaWwnLCAgICAgICAgICAgIC8v5YWt5om+5Lit6YCa6L+HaWTmn6XnnIvor6bmg4VcbiAgICBcbiAgICBhbGxQbGF0Zm9ybTogJy93ZWIvY3lQbGF0L2FsbFBsYXRmb3JtJywgICAgICAgICAgICAgICAgICAvL+WFreaJvuaJgOacieW5s+WPsOe7n+iuoVxuICAgIGN4UGxhdGZvcm1Vc2VyOiAnL3dlYi9jeFBsYXRmb3JtL2ZpbmRDeFBsYXRmb3JtJywgICAgICAgIC8v5YWt5om+5Yib5paw5bmz5Y+w57uf6K6hXG4gICAgY3lQbGF0VXNlcjogJy93ZWIvY3lQbGF0L2ZpbmRDeVBsYXRmb3JtJywgICAgICAgICAgICAgICAgLy/lha3mib7liJvkuJrlubPlj7Dnu5/orqFcbiAgICBmaW5kUHJvOiAnL3dlYi9wcm9qZWN0L2ZpbmRQcm8nLCAgICAgICAgICAgICAgICAgICAgICAgICAvL+WFreaJvumhueebrlxuICAgIGN5UGxhdGZvcm06ICcvd2ViL2N5VmVjdG9yL2ZpbmRWZWN0b3InLCAgICAgICAgICAgICAgICAgIC8v5YWt5om+5Zy65ZywXG4gICAgZmluZEZ3OiAnL3dlYi9lbnRlci9mdy9maW5kRncnLCAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lha3mib7mnI3liqFcbiAgICBhbGxGdW5kOiAnL3dlYi9jeVBsYXQvYWxsRnVuZCcsICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WFreaJvui1hOmHkeWFqOmDqFxuICAgIGppbnJvbmc6ICcvd2ViL2VudGVyL2Z3L2ppbnJvbmcnLCAgICAgICAgICAgICAgICAgICAgICAgIC8v5YWt5om+6LWE6YeR6YeR6J6N5pyN5YqhXG4gICAgdG91emk6ICcvd2ViL25lZWQvdG91emknLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lha3mib7otYTph5Hmib7mipXotYRcbiAgICByb25nemk6ICcvd2ViL3Byb2plY3Qvcm9uZ3ppJywgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WFreaJvui1hOmHkeaJvuiejei1hFxuICAgIFxuICB9LFxuXG4gIG9uTGF1bmNoKCkge1xuICAgIC8vIOWxleekuuacrOWcsOWtmOWCqOiDveWKm1xuICAgIC8vY29uc3QgbG9ncyA9IHd4LmdldFN0b3JhZ2VTeW5jKCdsb2dzJykgfHwgW11cbiAgICAvL2xvZ3MudW5zaGlmdChEYXRlLm5vdygpKVxuICAgIC8vd3guc2V0U3RvcmFnZVN5bmMoJ2xvZ3MnLCBsb2dzKVxuICAgIHRyeSB7XG4gICAgICB3eC5jbGVhclN0b3JhZ2VTeW5jKCk7ICAvL+a4heepuuWtmOWCqFxuICAgIH0gY2F0Y2goZSkge1xuICAgICAgLy8gRG8gc29tZXRoaW5nIHdoZW4gY2F0Y2ggZXJyb3JcbiAgICB9XG5cbiAgICAvLyDnmbvlvZVcbiAgICB3eC5sb2dpbih7XG4gICAgICAvL3N1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgIC8vY29uc29sZS5sb2cocmVzLmNvZGUpXG4gICAgICAgIC8vIOWPkemAgSByZXMuY29kZSDliLDlkI7lj7DmjaLlj5Ygb3BlbklkLCBzZXNzaW9uS2V5LCB1bmlvbklkXG4gICAgICAvL30sXG4gICAgfSlcbiAgICAvLyDojrflj5bnlKjmiLfkv6Hmga9cbiAgICB3eC5nZXRTZXR0aW5nKHtcbiAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgIGlmIChyZXMuYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJJbmZvJ10pIHtcbiAgICAgICAgICAvLyDlt7Lnu4/mjojmnYPvvIzlj6/ku6Xnm7TmjqXosIPnlKggZ2V0VXNlckluZm8g6I635Y+W5aS05YOP5pi156ew77yM5LiN5Lya5by55qGGXG4gICAgICAgICAgd3guZ2V0VXNlckluZm8oe1xuICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgICAgICAgLy8g5Y+v5Lul5bCGIHJlcyDlj5HpgIHnu5nlkI7lj7Dop6PnoIHlh7ogdW5pb25JZFxuICAgICAgICAgICAgICB0aGlzLmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cbiAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgLy8g55Sx5LqOIGdldFVzZXJJbmZvIOaYr+e9kee7nOivt+axgu+8jOWPr+iDveS8muWcqCBQYWdlLm9uTG9hZCDkuYvlkI7miY3ov5Tlm55cbiAgICAgICAgICAgICAgLy8g5omA5Lul5q2k5aSE5Yqg5YWlIGNhbGxiYWNrIOS7pemYsuatoui/meenjeaDheWGtVxuICAgICAgICAgICAgICBpZiAodGhpcy51c2VySW5mb1JlYWR5Q2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJJbmZvUmVhZHlDYWxsYmFjayhyZXMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSlcbiAgfSxcbn0pIl19