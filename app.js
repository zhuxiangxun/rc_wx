"use strict";
App({
    globalData: {
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
        login: '/web/login',
        editPass: '/web/editPass',
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
        try {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxHQUFHLENBQU07SUFFUCxVQUFVLEVBQUU7UUFDVixNQUFNLEVBQUUsRUFBRTtRQUVWLFNBQVMsRUFBRSxFQUFFO1FBQ2IsTUFBTSxFQUFFLEVBQUU7UUFDVixRQUFRLEVBQUUsRUFBRTtRQUNaLFNBQVMsRUFBRSxFQUFFO1FBQ2IsUUFBUSxFQUFFLEVBQUU7UUFFWixTQUFTLEVBQUUscUNBQXFDO1FBQ2hELE1BQU0sRUFBRSxxREFBcUQ7UUFDN0QsT0FBTyxFQUFFLHVEQUF1RDtRQUNoRSxHQUFHLEVBQUUsd0NBQXdDO1FBRTdDLEtBQUssRUFBRSxZQUFZO1FBQ25CLFFBQVEsRUFBRSxlQUFlO1FBRXpCLE9BQU8sRUFBRSxjQUFjO1FBQ3ZCLEtBQUssRUFBRSxnQkFBZ0I7UUFDdkIsVUFBVSxFQUFFLGlCQUFpQjtRQUM3QixNQUFNLEVBQUUsaUJBQWlCO1FBQ3pCLE1BQU0sRUFBRSxpQkFBaUI7UUFDekIsUUFBUSxFQUFFLG1CQUFtQjtRQUU3QixHQUFHLEVBQUUsaUJBQWlCO1FBQ3RCLE9BQU8sRUFBRSwwQkFBMEI7UUFDbkMsU0FBUyxFQUFFLHVCQUF1QjtRQUVsQyxXQUFXLEVBQUUseUJBQXlCO1FBQ3RDLGNBQWMsRUFBRSxnQ0FBZ0M7UUFDaEQsVUFBVSxFQUFFLDRCQUE0QjtRQUN4QyxPQUFPLEVBQUUsc0JBQXNCO1FBQy9CLFVBQVUsRUFBRSwwQkFBMEI7UUFDdEMsTUFBTSxFQUFFLHNCQUFzQjtRQUM5QixPQUFPLEVBQUUscUJBQXFCO1FBQzlCLE9BQU8sRUFBRSx1QkFBdUI7UUFDaEMsS0FBSyxFQUFFLGlCQUFpQjtRQUN4QixNQUFNLEVBQUUscUJBQXFCO0tBRTlCO0lBRUQsUUFBUTtRQUFSLGlCQXVDQztRQWxDQyxJQUFJO1NBRUg7UUFBQyxPQUFNLENBQUMsRUFBRTtTQUVWO1FBR0QsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUtSLENBQUMsQ0FBQTtRQUVGLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixPQUFPLEVBQUUsVUFBQSxHQUFHO2dCQUNWLElBQUksR0FBRyxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO29CQUVyQyxFQUFFLENBQUMsV0FBVyxDQUFDO3dCQUNiLE9BQU8sRUFBRSxVQUFBLEdBQUc7NEJBRVYsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQTs0QkFLdkMsSUFBSSxLQUFJLENBQUMscUJBQXFCLEVBQUU7Z0NBQzlCLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsQ0FBQzs2QkFDakM7d0JBQ0gsQ0FBQztxQkFDRixDQUFDLENBQUE7aUJBQ0g7WUFDSCxDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFwcC50c1xuQXBwPGFueT4oe1xuICAvL+WFqOWxgOWPmOmHj1xuICBnbG9iYWxEYXRhOiB7XG4gICAgdXNlcklkOiAnJywgICAgICAgICAgICAgICAgICAvL+eZu+W9leeUqOaIt0lEXG5cbiAgICBpbmRleEZsYWc6ICcnLCAgICAgICAgICAgICAgIC8v6aaW6aG1NuaJvuWIpOaWrVxuICAgIGFyZWFJZDogJycsICAgICAgICAgICAgICAgICAgLy/kvY3nva7ljLpJRFxuICAgIGFyZWFOYW1lOiAnJywgICAgICAgICAgICAgICAgLy/kvY3nva7ljLrlkI3np7BcbiAgICBsb25naXR1ZGU6ICcnLCAgICAgICAgICAgICAgIC8v5Lit5b+D57uP5bqmKOe7iOeCuSlcbiAgICBsYXRpdHVkZTogJycsICAgICAgICAgICAgICAgIC8v5Lit5b+D57qs5bqmKOe7iOeCuSlcbiAgICBcbiAgICBtYXBBcGlLZXk6ICcyTDZCWi02QldXUy1SUzZPSS02VFBaVC1aUlM0Vi0yMkJJRicsICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5L2/55So5Zyo6IW+6K6v5L2N572u5pyN5Yqh55Sz6K+355qEa2V5XG4gICAgaW1nVXJsOiAnaHR0cHM6Ly9yY2FwcC5xZGNzZG4uY24vZXdlYl91cGxvYWQvZG93bmxvYWQvZ2V0UGljJywgICAgICAgICAgICAgICAvL+WbvueJh+WxleekuuacjeWKoeWZqFxuICAgIGZpbGVVcmw6ICdodHRwczovL3JjYXBwLnFkY3Nkbi5jbi9ld2ViX3VwbG9hZC91cGxvYWQvdXBsb2FkRmlsZScsICAgICAgLy/mlofku7bkuIrkvKDmnI3liqHlmahcbiAgICB1cmw6ICdodHRwczovL3JjYXBwLnFkY3Nkbi5jbi9zaXQtcmVuY2FpLWFwaScsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5pyN5Yqh5Zmo77yI5Y+R5biD77yJXG5cbiAgICBsb2dpbjogJy93ZWIvbG9naW4nLCAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v55m75b2V5o6l5Y+jXG4gICAgZWRpdFBhc3M6ICcvd2ViL2VkaXRQYXNzJywgICAgICAgICAgICAgICAgICAgICAvL+S/ruaUueWvhueggVxuICAgIFxuICAgIGN1clVzZXI6ICcvd2ViL2N1clVzZXInLCAgICAgICAgICAgICAgICAgICAgICAgLy/ojrflj5blvZPliY3nmbvlvZXnlKjmiLfkv6Hmga9cbiAgICBjb3VudDogJy93ZWJzaXRlL2NvdW50JywgICAgICAgICAgICAgICAgICAgICAgIC8v57uf6K6hMTLmnaHkv6Hmga9cbiAgICBzdWJtZW51RGljOiAnL2RpYy9zdWJtZW51RGljJywgICAgICAgICAgICAgICAgIC8v6auY57qn5pCc57Si5a2X5YW46KGoXG4gICAgY2lyY2xlOiAnL3dlYnNpdGUvY2lyY2xlJywgICAgICAgICAgICAgICAgICAgICAvL+W5s+WPsOWKqOaAgVxuICAgIG5vdGljZTogJy93ZWJzaXRlL25vdGljZScsICAgICAgICAgICAgICAgICAgICAgLy/pgJrnn6XlhazlkYpcbiAgICBhY3Rpdml0eTogJy93ZWJzaXRlL2FjdGl2aXR5JywgICAgICAgICAgICAgICAgIC8v5rS75Yqo5L+h5oGvXG4gICAgXG4gICAgYWxsOiAnL3dlYi9jeVBsYXQvYWxsJywgICAgICAgICAgICAgICAgICAgICAgICAvL+WFqOmDqOaVsOaNru+8iOWFreaJvuWcsOWbvummlumhte+8iVxuICAgIHRlbmFudHM6ICcvd2ViL3BsYXRmb3JtTWFwL3RlbmFudHMnLCAgICAgICAgICAgLy/ojrflj5bljLpcbiAgICBhbGxEZXRhaWw6ICcvd2ViL2N5UGxhdC9hbGxEZXRhaWwnLCAgICAgICAgICAgIC8v5YWt5om+5Lit6YCa6L+HaWTmn6XnnIvor6bmg4VcbiAgICBcbiAgICBhbGxQbGF0Zm9ybTogJy93ZWIvY3lQbGF0L2FsbFBsYXRmb3JtJywgICAgICAgICAgICAgICAgICAvL+WFreaJvuaJgOacieW5s+WPsOe7n+iuoVxuICAgIGN4UGxhdGZvcm1Vc2VyOiAnL3dlYi9jeFBsYXRmb3JtL2ZpbmRDeFBsYXRmb3JtJywgICAgICAgIC8v5YWt5om+5Yib5paw5bmz5Y+w57uf6K6hXG4gICAgY3lQbGF0VXNlcjogJy93ZWIvY3lQbGF0L2ZpbmRDeVBsYXRmb3JtJywgICAgICAgICAgICAgICAgLy/lha3mib7liJvkuJrlubPlj7Dnu5/orqFcbiAgICBmaW5kUHJvOiAnL3dlYi9wcm9qZWN0L2ZpbmRQcm8nLCAgICAgICAgICAgICAgICAgICAgICAgICAvL+WFreaJvumhueebrlxuICAgIGN5UGxhdGZvcm06ICcvd2ViL2N5VmVjdG9yL2ZpbmRWZWN0b3InLCAgICAgICAgICAgICAgICAgIC8v5YWt5om+5Zy65ZywXG4gICAgZmluZEZ3OiAnL3dlYi9lbnRlci9mdy9maW5kRncnLCAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lha3mib7mnI3liqFcbiAgICBhbGxGdW5kOiAnL3dlYi9jeVBsYXQvYWxsRnVuZCcsICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WFreaJvui1hOmHkeWFqOmDqFxuICAgIGppbnJvbmc6ICcvd2ViL2VudGVyL2Z3L2ppbnJvbmcnLCAgICAgICAgICAgICAgICAgICAgICAgIC8v5YWt5om+6LWE6YeR6YeR6J6N5pyN5YqhXG4gICAgdG91emk6ICcvd2ViL25lZWQvdG91emknLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lha3mib7otYTph5Hmib7mipXotYRcbiAgICByb25nemk6ICcvd2ViL3Byb2plY3Qvcm9uZ3ppJywgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WFreaJvui1hOmHkeaJvuiejei1hFxuICAgIFxuICB9LFxuXG4gIG9uTGF1bmNoKCkge1xuICAgIC8vIOWxleekuuacrOWcsOWtmOWCqOiDveWKm1xuICAgIC8vY29uc3QgbG9ncyA9IHd4LmdldFN0b3JhZ2VTeW5jKCdsb2dzJykgfHwgW11cbiAgICAvL2xvZ3MudW5zaGlmdChEYXRlLm5vdygpKVxuICAgIC8vd3guc2V0U3RvcmFnZVN5bmMoJ2xvZ3MnLCBsb2dzKVxuICAgIHRyeSB7XG4gICAgIC8vIHd4LmNsZWFyU3RvcmFnZVN5bmMoKTsgIC8v5riF56m65a2Y5YKoXG4gICAgfSBjYXRjaChlKSB7XG4gICAgICAvLyBEbyBzb21ldGhpbmcgd2hlbiBjYXRjaCBlcnJvclxuICAgIH1cblxuICAgIC8vIOeZu+W9lVxuICAgIHd4LmxvZ2luKHtcbiAgICAgIC8vc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhyZXMuY29kZSlcbiAgICAgICAgLy8g5Y+R6YCBIHJlcy5jb2RlIOWIsOWQjuWPsOaNouWPliBvcGVuSWQsIHNlc3Npb25LZXksIHVuaW9uSWRcbiAgICAgIC8vfSxcbiAgICB9KVxuICAgIC8vIOiOt+WPlueUqOaIt+S/oeaBr1xuICAgIHd4LmdldFNldHRpbmcoe1xuICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgaWYgKHJlcy5hdXRoU2V0dGluZ1snc2NvcGUudXNlckluZm8nXSkge1xuICAgICAgICAgIC8vIOW3sue7j+aOiOadg++8jOWPr+S7peebtOaOpeiwg+eUqCBnZXRVc2VySW5mbyDojrflj5blpLTlg4/mmLXnp7DvvIzkuI3kvJrlvLnmoYZcbiAgICAgICAgICB3eC5nZXRVc2VySW5mbyh7XG4gICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgICAgICAvLyDlj6/ku6XlsIYgcmVzIOWPkemAgee7meWQjuWPsOino+eggeWHuiB1bmlvbklkXG4gICAgICAgICAgICAgIHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xuICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAvLyDnlLHkuo4gZ2V0VXNlckluZm8g5piv572R57uc6K+35rGC77yM5Y+v6IO95Lya5ZyoIFBhZ2Uub25Mb2FkIOS5i+WQjuaJjei/lOWbnlxuICAgICAgICAgICAgICAvLyDmiYDku6XmraTlpITliqDlhaUgY2FsbGJhY2sg5Lul6Ziy5q2i6L+Z56eN5oOF5Ya1XG4gICAgICAgICAgICAgIGlmICh0aGlzLnVzZXJJbmZvUmVhZHlDYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHRoaXMudXNlckluZm9SZWFkeUNhbGxiYWNrKHJlcyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9KVxuICB9LFxufSkiXX0=