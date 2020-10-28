"use strict";
App({
    globalData: {
        areaId: '',
        areaName: '',
        longitude: '',
        latitude: '',
        mapApiKey: 'AWYBZ-C3IWO-5TIWD-SEPVW-KQMOF-RXBAV',
        imgUrl: 'http://files.eyunhan.com/eweb_upload/download/getPic?filePath=',
        url: 'http://lu.eyunhan.com/sit-rencai-api',
        login: '/web/login',
        curUser: '/web/curUser',
        count: '/website/count',
        submenuDic: '/dic/submenuDic',
        circle: '/website/circle',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxHQUFHLENBQU07SUFFUCxVQUFVLEVBQUU7UUFDVixNQUFNLEVBQUUsRUFBRTtRQUNWLFFBQVEsRUFBRSxFQUFFO1FBQ1osU0FBUyxFQUFFLEVBQUU7UUFDYixRQUFRLEVBQUUsRUFBRTtRQUVaLFNBQVMsRUFBRSxxQ0FBcUM7UUFDaEQsTUFBTSxFQUFFLGdFQUFnRTtRQUN4RSxHQUFHLEVBQUUsc0NBQXNDO1FBRTNDLEtBQUssRUFBRSxZQUFZO1FBQ25CLE9BQU8sRUFBRSxjQUFjO1FBQ3ZCLEtBQUssRUFBRSxnQkFBZ0I7UUFDdkIsVUFBVSxFQUFFLGlCQUFpQjtRQUM3QixNQUFNLEVBQUUsaUJBQWlCO1FBQ3pCLEdBQUcsRUFBRSxpQkFBaUI7UUFDdEIsT0FBTyxFQUFFLDBCQUEwQjtRQUNuQyxTQUFTLEVBQUUsdUJBQXVCO1FBRWxDLFdBQVcsRUFBRSx5QkFBeUI7UUFDdEMsY0FBYyxFQUFFLGdDQUFnQztRQUNoRCxVQUFVLEVBQUUsNEJBQTRCO1FBQ3hDLE9BQU8sRUFBRSxzQkFBc0I7UUFDL0IsVUFBVSxFQUFFLDBCQUEwQjtRQUN0QyxNQUFNLEVBQUUsc0JBQXNCO1FBQzlCLE9BQU8sRUFBRSxxQkFBcUI7UUFDOUIsT0FBTyxFQUFFLHVCQUF1QjtRQUNoQyxLQUFLLEVBQUUsaUJBQWlCO1FBQ3hCLE1BQU0sRUFBRSxxQkFBcUI7S0FFOUI7SUFFRCxRQUFRO1FBQVIsaUJBa0NDO1FBMUJDLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFLUixDQUFDLENBQUE7UUFFRixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osT0FBTyxFQUFFLFVBQUEsR0FBRztnQkFDVixJQUFJLEdBQUcsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtvQkFFckMsRUFBRSxDQUFDLFdBQVcsQ0FBQzt3QkFDYixPQUFPLEVBQUUsVUFBQSxHQUFHOzRCQUVWLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUE7NEJBSXZDLElBQUksS0FBSSxDQUFDLHFCQUFxQixFQUFFO2dDQUM5QixLQUFJLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLENBQUM7NkJBQ2pDO3dCQUNILENBQUM7cUJBQ0YsQ0FBQyxDQUFBO2lCQUNIO1lBQ0gsQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcHAudHNcbkFwcDxhbnk+KHtcbiAgLy/lhajlsYDlj5jph49cbiAgZ2xvYmFsRGF0YToge1xuICAgIGFyZWFJZDogJycsICAgICAgICAgICAgICAgICAgLy/kvY3nva7ljLpJRFxuICAgIGFyZWFOYW1lOiAnJywgICAgICAgICAgICAgICAgLy/kvY3nva7ljLrlkI3np7BcbiAgICBsb25naXR1ZGU6ICcnLCAgICAgICAgICAgICAgIC8v5Lit5b+D57uP5bqmKOe7iOeCuSlcbiAgICBsYXRpdHVkZTogJycsICAgICAgICAgICAgICAgIC8v5Lit5b+D57qs5bqmKOe7iOeCuSlcbiAgICBcbiAgICBtYXBBcGlLZXk6ICdBV1lCWi1DM0lXTy01VElXRC1TRVBWVy1LUU1PRi1SWEJBVicsICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/kvb/nlKjlnKjohb7orq/kvY3nva7mnI3liqHnlLPor7fnmoRrZXlcbiAgICBpbWdVcmw6ICdodHRwOi8vZmlsZXMuZXl1bmhhbi5jb20vZXdlYl91cGxvYWQvZG93bmxvYWQvZ2V0UGljP2ZpbGVQYXRoPScsICAgLy/lm77niYfmnI3liqHlmahcbiAgICB1cmw6ICdodHRwOi8vbHUuZXl1bmhhbi5jb20vc2l0LXJlbmNhaS1hcGknLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5pyN5Yqh5Zmo77yI5rWL6K+V77yJXG4gICAgLy91cmw6ICdodHRwOi8vcmMucWRjc2RuLmNuL3NpdC1yZW5jYWktYXBpJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/mnI3liqHlmajvvIjmraPlvI/vvIlcbiAgICBsb2dpbjogJy93ZWIvbG9naW4nLCAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v55m75b2V5o6l5Y+jXG4gICAgY3VyVXNlcjogJy93ZWIvY3VyVXNlcicsICAgICAgICAgICAgICAgICAgICAgICAvL+iOt+WPluW9k+WJjeeZu+W9leeUqOaIt+S/oeaBr1xuICAgIGNvdW50OiAnL3dlYnNpdGUvY291bnQnLCAgICAgICAgICAgICAgICAgICAgICAgLy/nu5/orqExMuadoeS/oeaBr1xuICAgIHN1Ym1lbnVEaWM6ICcvZGljL3N1Ym1lbnVEaWMnLCAgICAgICAgICAgICAgICAgLy/pq5jnuqfmkJzntKLlrZflhbjooahcbiAgICBjaXJjbGU6ICcvd2Vic2l0ZS9jaXJjbGUnLCAgICAgICAgICAgICAgICAgICAgIC8v5bmz5Y+w5Yqo5oCBXG4gICAgYWxsOiAnL3dlYi9jeVBsYXQvYWxsJywgICAgICAgICAgICAgICAgICAgICAgICAvL+WFqOmDqOaVsOaNru+8iOWFreaJvuWcsOWbvummlumhte+8iVxuICAgIHRlbmFudHM6ICcvd2ViL3BsYXRmb3JtTWFwL3RlbmFudHMnLCAgICAgICAgICAgLy/ojrflj5bljLpcbiAgICBhbGxEZXRhaWw6ICcvd2ViL2N5UGxhdC9hbGxEZXRhaWwnLCAgICAgICAgICAgIC8v5YWt5om+5Lit6YCa6L+HaWTmn6XnnIvor6bmg4VcbiAgICBcbiAgICBhbGxQbGF0Zm9ybTogJy93ZWIvY3lQbGF0L2FsbFBsYXRmb3JtJywgICAgICAgICAgICAgICAgICAvL+WFreaJvuaJgOacieW5s+WPsOe7n+iuoVxuICAgIGN4UGxhdGZvcm1Vc2VyOiAnL3dlYi9jeFBsYXRmb3JtL2ZpbmRDeFBsYXRmb3JtJywgICAgICAgIC8v5YWt5om+5Yib5paw5bmz5Y+w57uf6K6hXG4gICAgY3lQbGF0VXNlcjogJy93ZWIvY3lQbGF0L2ZpbmRDeVBsYXRmb3JtJywgICAgICAgICAgICAgICAgLy/lha3mib7liJvkuJrlubPlj7Dnu5/orqFcbiAgICBmaW5kUHJvOiAnL3dlYi9wcm9qZWN0L2ZpbmRQcm8nLCAgICAgICAgICAgICAgICAgICAgICAgICAvL+WFreaJvumhueebrlxuICAgIGN5UGxhdGZvcm06ICcvd2ViL2N5VmVjdG9yL2ZpbmRWZWN0b3InLCAgICAgICAgICAgICAgICAgIC8v5YWt5om+5Zy65ZywXG4gICAgZmluZEZ3OiAnL3dlYi9lbnRlci9mdy9maW5kRncnLCAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lha3mib7mnI3liqFcbiAgICBhbGxGdW5kOiAnL3dlYi9jeVBsYXQvYWxsRnVuZCcsICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WFreaJvui1hOmHkeWFqOmDqFxuICAgIGppbnJvbmc6ICcvd2ViL2VudGVyL2Z3L2ppbnJvbmcnLCAgICAgICAgICAgICAgICAgICAgICAgIC8v5YWt5om+6LWE6YeR6YeR6J6N5pyN5YqhXG4gICAgdG91emk6ICcvd2ViL25lZWQvdG91emknLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lha3mib7otYTph5Hmib7mipXotYRcbiAgICByb25nemk6ICcvd2ViL3Byb2plY3Qvcm9uZ3ppJywgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WFreaJvui1hOmHkeaJvuiejei1hFxuICAgIFxuICB9LFxuXG4gIG9uTGF1bmNoKCkge1xuICAgIC8vIOWxleekuuacrOWcsOWtmOWCqOiDveWKm1xuICAgIC8vY29uc3QgbG9ncyA9IHd4LmdldFN0b3JhZ2VTeW5jKCdsb2dzJykgfHwgW11cbiAgICAvL2xvZ3MudW5zaGlmdChEYXRlLm5vdygpKVxuICAgIC8vd3guc2V0U3RvcmFnZVN5bmMoJ2xvZ3MnLCBsb2dzKVxuXG5cbiAgICAvLyDnmbvlvZVcbiAgICB3eC5sb2dpbih7XG4gICAgICAvL3N1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgIC8vY29uc29sZS5sb2cocmVzLmNvZGUpXG4gICAgICAgIC8vIOWPkemAgSByZXMuY29kZSDliLDlkI7lj7DmjaLlj5Ygb3BlbklkLCBzZXNzaW9uS2V5LCB1bmlvbklkXG4gICAgICAvL30sXG4gICAgfSlcbiAgICAvLyDojrflj5bnlKjmiLfkv6Hmga9cbiAgICB3eC5nZXRTZXR0aW5nKHtcbiAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgIGlmIChyZXMuYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJJbmZvJ10pIHtcbiAgICAgICAgICAvLyDlt7Lnu4/mjojmnYPvvIzlj6/ku6Xnm7TmjqXosIPnlKggZ2V0VXNlckluZm8g6I635Y+W5aS05YOP5pi156ew77yM5LiN5Lya5by55qGGXG4gICAgICAgICAgd3guZ2V0VXNlckluZm8oe1xuICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgICAgICAgLy8g5Y+v5Lul5bCGIHJlcyDlj5HpgIHnu5nlkI7lj7Dop6PnoIHlh7ogdW5pb25JZFxuICAgICAgICAgICAgICB0aGlzLmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cblxuICAgICAgICAgICAgICAvLyDnlLHkuo4gZ2V0VXNlckluZm8g5piv572R57uc6K+35rGC77yM5Y+v6IO95Lya5ZyoIFBhZ2Uub25Mb2FkIOS5i+WQjuaJjei/lOWbnlxuICAgICAgICAgICAgICAvLyDmiYDku6XmraTlpITliqDlhaUgY2FsbGJhY2sg5Lul6Ziy5q2i6L+Z56eN5oOF5Ya1XG4gICAgICAgICAgICAgIGlmICh0aGlzLnVzZXJJbmZvUmVhZHlDYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHRoaXMudXNlckluZm9SZWFkeUNhbGxiYWNrKHJlcyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9KVxuICB9LFxufSkiXX0=