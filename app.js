"use strict";
App({
    globalData: {
        indexFlag: '',
        areaId: '',
        areaName: '',
        longitude: '',
        latitude: '',
        mapApiKey: '2L6BZ-6BWWS-RS6OI-6TPZT-ZRS4V-22BIF',
        imgUrl: 'http://files.eyunhan.com/eweb_upload/download/getPic?filePath=',
        url: 'https://rcapp.qdcsdn.cn/sit-rencai-api',
        login: '/web/login',
        curUser: '/web/curUser',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxHQUFHLENBQU07SUFFUCxVQUFVLEVBQUU7UUFDVixTQUFTLEVBQUUsRUFBRTtRQUViLE1BQU0sRUFBRSxFQUFFO1FBQ1YsUUFBUSxFQUFFLEVBQUU7UUFDWixTQUFTLEVBQUUsRUFBRTtRQUNiLFFBQVEsRUFBRSxFQUFFO1FBRVosU0FBUyxFQUFFLHFDQUFxQztRQUNoRCxNQUFNLEVBQUUsZ0VBQWdFO1FBQ3hFLEdBQUcsRUFBRSx3Q0FBd0M7UUFFN0MsS0FBSyxFQUFFLFlBQVk7UUFDbkIsT0FBTyxFQUFFLGNBQWM7UUFDdkIsS0FBSyxFQUFFLGdCQUFnQjtRQUN2QixVQUFVLEVBQUUsaUJBQWlCO1FBQzdCLE1BQU0sRUFBRSxpQkFBaUI7UUFDekIsTUFBTSxFQUFFLGlCQUFpQjtRQUN6QixRQUFRLEVBQUUsbUJBQW1CO1FBRTdCLEdBQUcsRUFBRSxpQkFBaUI7UUFDdEIsT0FBTyxFQUFFLDBCQUEwQjtRQUNuQyxTQUFTLEVBQUUsdUJBQXVCO1FBRWxDLFdBQVcsRUFBRSx5QkFBeUI7UUFDdEMsY0FBYyxFQUFFLGdDQUFnQztRQUNoRCxVQUFVLEVBQUUsNEJBQTRCO1FBQ3hDLE9BQU8sRUFBRSxzQkFBc0I7UUFDL0IsVUFBVSxFQUFFLDBCQUEwQjtRQUN0QyxNQUFNLEVBQUUsc0JBQXNCO1FBQzlCLE9BQU8sRUFBRSxxQkFBcUI7UUFDOUIsT0FBTyxFQUFFLHVCQUF1QjtRQUNoQyxLQUFLLEVBQUUsaUJBQWlCO1FBQ3hCLE1BQU0sRUFBRSxxQkFBcUI7S0FFOUI7SUFFRCxRQUFRO1FBQVIsaUJBa0NDO1FBMUJDLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFLUixDQUFDLENBQUE7UUFFRixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osT0FBTyxFQUFFLFVBQUEsR0FBRztnQkFDVixJQUFJLEdBQUcsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtvQkFFckMsRUFBRSxDQUFDLFdBQVcsQ0FBQzt3QkFDYixPQUFPLEVBQUUsVUFBQSxHQUFHOzRCQUVWLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUE7NEJBSXZDLElBQUksS0FBSSxDQUFDLHFCQUFxQixFQUFFO2dDQUM5QixLQUFJLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLENBQUM7NkJBQ2pDO3dCQUNILENBQUM7cUJBQ0YsQ0FBQyxDQUFBO2lCQUNIO1lBQ0gsQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcHAudHNcbkFwcDxhbnk+KHtcbiAgLy/lhajlsYDlj5jph49cbiAgZ2xvYmFsRGF0YToge1xuICAgIGluZGV4RmxhZzogJycsICAgICAgICAgICAgICAgLy/pppbpobU25om+5Yik5patXG5cbiAgICBhcmVhSWQ6ICcnLCAgICAgICAgICAgICAgICAgIC8v5L2N572u5Yy6SURcbiAgICBhcmVhTmFtZTogJycsICAgICAgICAgICAgICAgIC8v5L2N572u5Yy65ZCN56ewXG4gICAgbG9uZ2l0dWRlOiAnJywgICAgICAgICAgICAgICAvL+S4reW/g+e7j+W6pijnu4jngrkpXG4gICAgbGF0aXR1ZGU6ICcnLCAgICAgICAgICAgICAgICAvL+S4reW/g+e6rOW6pijnu4jngrkpXG4gICAgXG4gICAgbWFwQXBpS2V5OiAnMkw2QlotNkJXV1MtUlM2T0ktNlRQWlQtWlJTNFYtMjJCSUYnLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+S9v+eUqOWcqOiFvuiur+S9jee9ruacjeWKoeeUs+ivt+eahGtleVxuICAgIGltZ1VybDogJ2h0dHA6Ly9maWxlcy5leXVuaGFuLmNvbS9ld2ViX3VwbG9hZC9kb3dubG9hZC9nZXRQaWM/ZmlsZVBhdGg9JywgICAgLy/lm77niYfmnI3liqHlmahcbiAgICB1cmw6ICdodHRwczovL3JjYXBwLnFkY3Nkbi5jbi9zaXQtcmVuY2FpLWFwaScsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+acjeWKoeWZqO+8iOa1i+ivle+8iVxuXG4gICAgbG9naW46ICcvd2ViL2xvZ2luJywgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+eZu+W9leaOpeWPo1xuICAgIGN1clVzZXI6ICcvd2ViL2N1clVzZXInLCAgICAgICAgICAgICAgICAgICAgICAgLy/ojrflj5blvZPliY3nmbvlvZXnlKjmiLfkv6Hmga9cbiAgICBjb3VudDogJy93ZWJzaXRlL2NvdW50JywgICAgICAgICAgICAgICAgICAgICAgIC8v57uf6K6hMTLmnaHkv6Hmga9cbiAgICBzdWJtZW51RGljOiAnL2RpYy9zdWJtZW51RGljJywgICAgICAgICAgICAgICAgIC8v6auY57qn5pCc57Si5a2X5YW46KGoXG4gICAgY2lyY2xlOiAnL3dlYnNpdGUvY2lyY2xlJywgICAgICAgICAgICAgICAgICAgICAvL+W5s+WPsOWKqOaAgVxuICAgIG5vdGljZTogJy93ZWJzaXRlL25vdGljZScsICAgICAgICAgICAgICAgICAgICAgLy/pgJrnn6XlhazlkYpcbiAgICBhY3Rpdml0eTogJy93ZWJzaXRlL2FjdGl2aXR5JywgICAgICAgICAgICAgICAgIC8v5rS75Yqo5L+h5oGvXG4gICAgXG4gICAgYWxsOiAnL3dlYi9jeVBsYXQvYWxsJywgICAgICAgICAgICAgICAgICAgICAgICAvL+WFqOmDqOaVsOaNru+8iOWFreaJvuWcsOWbvummlumhte+8iVxuICAgIHRlbmFudHM6ICcvd2ViL3BsYXRmb3JtTWFwL3RlbmFudHMnLCAgICAgICAgICAgLy/ojrflj5bljLpcbiAgICBhbGxEZXRhaWw6ICcvd2ViL2N5UGxhdC9hbGxEZXRhaWwnLCAgICAgICAgICAgIC8v5YWt5om+5Lit6YCa6L+HaWTmn6XnnIvor6bmg4VcbiAgICBcbiAgICBhbGxQbGF0Zm9ybTogJy93ZWIvY3lQbGF0L2FsbFBsYXRmb3JtJywgICAgICAgICAgICAgICAgICAvL+WFreaJvuaJgOacieW5s+WPsOe7n+iuoVxuICAgIGN4UGxhdGZvcm1Vc2VyOiAnL3dlYi9jeFBsYXRmb3JtL2ZpbmRDeFBsYXRmb3JtJywgICAgICAgIC8v5YWt5om+5Yib5paw5bmz5Y+w57uf6K6hXG4gICAgY3lQbGF0VXNlcjogJy93ZWIvY3lQbGF0L2ZpbmRDeVBsYXRmb3JtJywgICAgICAgICAgICAgICAgLy/lha3mib7liJvkuJrlubPlj7Dnu5/orqFcbiAgICBmaW5kUHJvOiAnL3dlYi9wcm9qZWN0L2ZpbmRQcm8nLCAgICAgICAgICAgICAgICAgICAgICAgICAvL+WFreaJvumhueebrlxuICAgIGN5UGxhdGZvcm06ICcvd2ViL2N5VmVjdG9yL2ZpbmRWZWN0b3InLCAgICAgICAgICAgICAgICAgIC8v5YWt5om+5Zy65ZywXG4gICAgZmluZEZ3OiAnL3dlYi9lbnRlci9mdy9maW5kRncnLCAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lha3mib7mnI3liqFcbiAgICBhbGxGdW5kOiAnL3dlYi9jeVBsYXQvYWxsRnVuZCcsICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WFreaJvui1hOmHkeWFqOmDqFxuICAgIGppbnJvbmc6ICcvd2ViL2VudGVyL2Z3L2ppbnJvbmcnLCAgICAgICAgICAgICAgICAgICAgICAgIC8v5YWt5om+6LWE6YeR6YeR6J6N5pyN5YqhXG4gICAgdG91emk6ICcvd2ViL25lZWQvdG91emknLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lha3mib7otYTph5Hmib7mipXotYRcbiAgICByb25nemk6ICcvd2ViL3Byb2plY3Qvcm9uZ3ppJywgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WFreaJvui1hOmHkeaJvuiejei1hFxuICAgIFxuICB9LFxuXG4gIG9uTGF1bmNoKCkge1xuICAgIC8vIOWxleekuuacrOWcsOWtmOWCqOiDveWKm1xuICAgIC8vY29uc3QgbG9ncyA9IHd4LmdldFN0b3JhZ2VTeW5jKCdsb2dzJykgfHwgW11cbiAgICAvL2xvZ3MudW5zaGlmdChEYXRlLm5vdygpKVxuICAgIC8vd3guc2V0U3RvcmFnZVN5bmMoJ2xvZ3MnLCBsb2dzKVxuXG5cbiAgICAvLyDnmbvlvZVcbiAgICB3eC5sb2dpbih7XG4gICAgICAvL3N1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgIC8vY29uc29sZS5sb2cocmVzLmNvZGUpXG4gICAgICAgIC8vIOWPkemAgSByZXMuY29kZSDliLDlkI7lj7DmjaLlj5Ygb3BlbklkLCBzZXNzaW9uS2V5LCB1bmlvbklkXG4gICAgICAvL30sXG4gICAgfSlcbiAgICAvLyDojrflj5bnlKjmiLfkv6Hmga9cbiAgICB3eC5nZXRTZXR0aW5nKHtcbiAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgIGlmIChyZXMuYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJJbmZvJ10pIHtcbiAgICAgICAgICAvLyDlt7Lnu4/mjojmnYPvvIzlj6/ku6Xnm7TmjqXosIPnlKggZ2V0VXNlckluZm8g6I635Y+W5aS05YOP5pi156ew77yM5LiN5Lya5by55qGGXG4gICAgICAgICAgd3guZ2V0VXNlckluZm8oe1xuICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgICAgICAgLy8g5Y+v5Lul5bCGIHJlcyDlj5HpgIHnu5nlkI7lj7Dop6PnoIHlh7ogdW5pb25JZFxuICAgICAgICAgICAgICB0aGlzLmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cblxuICAgICAgICAgICAgICAvLyDnlLHkuo4gZ2V0VXNlckluZm8g5piv572R57uc6K+35rGC77yM5Y+v6IO95Lya5ZyoIFBhZ2Uub25Mb2FkIOS5i+WQjuaJjei/lOWbnlxuICAgICAgICAgICAgICAvLyDmiYDku6XmraTlpITliqDlhaUgY2FsbGJhY2sg5Lul6Ziy5q2i6L+Z56eN5oOF5Ya1XG4gICAgICAgICAgICAgIGlmICh0aGlzLnVzZXJJbmZvUmVhZHlDYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHRoaXMudXNlckluZm9SZWFkeUNhbGxiYWNrKHJlcyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9KVxuICB9LFxufSkiXX0=