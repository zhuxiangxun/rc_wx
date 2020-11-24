"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api = getApp().globalData;
var Dialog = require('../../miniprogram_npm/@vant/weapp/dialog/dialog.js').default;
var https = require('../../utils/myRequest.js');
var globalFn = require('../../utils/globalFn.js');
var expressFn = globalFn.throttle(function () {
    wx.navigateTo({
        url: "../news/news"
    });
}, 1000);
var template = require('../../templates/template.js');
Page({
    data: {
        scrollTop: '0',
        list: {
            cyModel: 0,
            cxModel: 0,
            cxcyCount: 0,
            fwCount: 0,
            talentCountModel: 0,
            zcCount: 0,
            fwTypeCount: 0,
            productCount: 0,
            vectorCount: 0,
            proCount: 0,
            equipCount: 0,
            needCount: 0
        },
    },
    onShareAppMessage: function (res) {
        if (res.from === 'button') {
            console.log(res.target);
        }
        return {
            title: '青岛人才创新创业平台地图',
            path: '/pages/home/home',
            imageUrl: ''
        };
    },
    onShareTimeline: function () {
        return {
            title: '青岛人才创新创业平台地图',
            query: {},
            imageUrl: ''
        };
    },
    onReachBottom: function () {
        expressFn();
    },
    indexHeaderFn: function (event) {
        template.indexHeaderFn(event);
    },
    onPullDownRefresh: function () {
        wx.showNavigationBarLoading();
        this.getData();
    },
    newsClick: function () {
        expressFn();
    },
    getData: function () {
        var _this = this;
        wx.showNavigationBarLoading();
        https.request(api.count, null, 'GET')
            .then(function (res) {
            _this.setData({
                list: {
                    cyModel: res.val.cyModel.platformCount ? res.val.cyModel.platformCount : 0,
                    cxModel: res.val.cxModel.platformCount ? res.val.cxModel.platformCount : 0,
                    cxcyCount: res.val.cxcyCount ? res.val.cxcyCount : 0,
                    fwCount: res.val.fwCount ? res.val.fwCount : 0,
                    talentCountModel: res.val.talentCountModel.talentCount ? res.val.talentCountModel.talentCount : 0,
                    zcCount: res.val.zcCount ? res.val.zcCount : 0,
                    fwTypeCount: res.val.fwTypeCount ? res.val.fwTypeCount : 0,
                    productCount: res.val.productCount ? res.val.productCount : 0,
                    vectorCount: res.val.vectorCount ? res.val.vectorCount : 0,
                    proCount: res.val.proCount ? res.val.proCount : 0,
                    equipCount: res.val.equipCount ? res.val.equipCount : 0,
                    needCount: res.val.needCount ? res.val.needCount : 0
                }
            });
            wx.hideNavigationBarLoading();
            wx.stopPullDownRefresh();
        }, function (err) {
            console.log(err);
        });
    },
    ptFn: function () {
        api.indexFlag = 'pt';
        wx.switchTab({
            url: '../map/map'
        });
    },
    zcFn: function () {
        wx.navigateToMiniProgram({
            appId: 'wxf4083a5f8365a30a',
            path: '',
            success: function () {
            }
        });
    },
    linkFn: function () {
        Dialog.alert({
            message: '“平台地图”正与全市人才相关部门办事服务实现互联互通，目前，请先使用“青岛人才”进行登录办理，后期将逐步完善各项功能板块，敬请期待！',
        }).then(function () {
            wx.navigateToMiniProgram({
                appId: 'wx2e070e33c6154515',
                path: '',
                success: function () {
                }
            });
        });
    },
    xmFn: function () {
        api.indexFlag = 'xm';
        wx.switchTab({
            url: '../map/map'
        });
    },
    zjFn: function () {
        api.indexFlag = 'zj';
        wx.switchTab({
            url: '../map/map'
        });
    },
    cdFn: function () {
        api.indexFlag = 'cd';
        wx.switchTab({
            url: '../map/map'
        });
    },
    fwFn: function () {
        api.indexFlag = 'fw';
        wx.switchTab({
            url: '../map/map'
        });
    },
    mapFn: function () {
        wx.switchTab({
            url: '../map/map'
        });
    },
    homeFn: function () {
        wx.navigateTo({
            url: '../homeLink/homeLink'
        });
    },
    jyFn: function () {
        var token = wx.getStorageSync('token');
        if (!!token) {
            wx.navigateTo({
                url: '../transaction/transaction'
            });
        }
        else {
            wx.navigateTo({
                url: '../loginForm/loginForm'
            });
        }
    },
    yqFn: function () {
        var token = wx.getStorageSync('token');
        if (!!token) {
            wx.navigateTo({
                url: '../device/device'
            });
        }
        else {
            wx.navigateTo({
                url: '../loginForm/loginForm'
            });
        }
    },
    onLoad: function () {
        this.getData();
    },
    onShow: function () { },
    onReady: function () { },
    onHide: function () { },
    onUnload: function () { },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQUUsQ0FBQyxVQUFVLENBQUM7QUFDaEMsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLG9EQUFvRCxDQUFDLENBQUMsT0FBTyxDQUFDO0FBQ25GLElBQUksS0FBSyxHQUFJLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0FBQ2pELElBQUksUUFBUSxHQUFJLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0FBQ25ELElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUM7SUFDaEMsRUFBRSxDQUFDLFVBQVUsQ0FBQztRQUNaLEdBQUcsRUFBQyxjQUFjO0tBQ25CLENBQUMsQ0FBQTtBQUNKLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQztBQUNSLElBQUksUUFBUSxHQUFPLE9BQU8sQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0FBRTFELElBQUksQ0FBQztJQUVILElBQUksRUFBRTtRQUNKLFNBQVMsRUFBRSxHQUFHO1FBQ2QsSUFBSSxFQUFDO1lBQ0gsT0FBTyxFQUFFLENBQUM7WUFDVixPQUFPLEVBQUUsQ0FBQztZQUNWLFNBQVMsRUFBRSxDQUFDO1lBQ1osT0FBTyxFQUFFLENBQUM7WUFDVixnQkFBZ0IsRUFBRSxDQUFDO1lBQ25CLE9BQU8sRUFBRSxDQUFDO1lBQ1YsV0FBVyxFQUFFLENBQUM7WUFDZCxZQUFZLEVBQUUsQ0FBQztZQUNmLFdBQVcsRUFBRSxDQUFDO1lBQ2QsUUFBUSxFQUFFLENBQUM7WUFDWCxVQUFVLEVBQUUsQ0FBQztZQUNiLFNBQVMsRUFBRSxDQUFDO1NBQ2I7S0FDRjtJQUVELGlCQUFpQixFQUFDLFVBQUMsR0FBTztRQUN4QixJQUFJLEdBQUcsQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBRXpCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3pCO1FBQ0QsT0FBTztZQUNMLEtBQUssRUFBRSxjQUFjO1lBQ3JCLElBQUksRUFBRSxrQkFBa0I7WUFDeEIsUUFBUSxFQUFFLEVBQUU7U0FDYixDQUFBO0lBQ0gsQ0FBQztJQUVELGVBQWUsRUFBQztRQUNkLE9BQU87WUFDTCxLQUFLLEVBQUUsY0FBYztZQUNyQixLQUFLLEVBQUUsRUFBRTtZQUNULFFBQVEsRUFBRSxFQUFFO1NBQ2IsQ0FBQTtJQUNILENBQUM7SUFNRCxhQUFhLEVBQWI7UUFDRSxTQUFTLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFHRCxhQUFhLEVBQWIsVUFBYyxLQUFTO1FBQ3JCLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUdELGlCQUFpQixFQUFqQjtRQUNFLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBR0QsU0FBUyxFQUFUO1FBQ0UsU0FBUyxFQUFFLENBQUM7SUFDZCxDQUFDO0lBR0QsT0FBTyxFQUFQO1FBQUEsaUJBeUJDO1FBeEJDLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSxDQUFBO1FBQzdCLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDO2FBQ3BDLElBQUksQ0FBQyxVQUFDLEdBQU87WUFDWixLQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLElBQUksRUFBQztvQkFDSCxPQUFPLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFBLENBQUMsQ0FBQSxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUEsQ0FBQyxDQUFBLENBQUM7b0JBQ3RFLE9BQU8sRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUEsQ0FBQyxDQUFBLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQSxDQUFDLENBQUEsQ0FBQztvQkFDdEUsU0FBUyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFBLENBQUMsQ0FBQSxHQUFHLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQSxDQUFDLENBQUEsQ0FBQztvQkFDaEQsT0FBTyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFBLENBQUMsQ0FBQSxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQSxDQUFDLENBQUEsQ0FBQztvQkFDMUMsZ0JBQWdCLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUEsQ0FBQyxDQUFBLEdBQUcsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFBLENBQUMsQ0FBQSxDQUFDO29CQUM3RixPQUFPLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUEsQ0FBQyxDQUFBLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFBLENBQUMsQ0FBQSxDQUFDO29CQUMxQyxXQUFXLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUEsQ0FBQyxDQUFBLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFBLENBQUMsQ0FBQSxDQUFDO29CQUN0RCxZQUFZLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUEsQ0FBQyxDQUFBLEdBQUcsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFBLENBQUMsQ0FBQSxDQUFDO29CQUN6RCxXQUFXLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUEsQ0FBQyxDQUFBLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFBLENBQUMsQ0FBQSxDQUFDO29CQUN0RCxRQUFRLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUEsQ0FBQyxDQUFBLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFBLENBQUMsQ0FBQSxDQUFDO29CQUM3QyxVQUFVLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUEsQ0FBQyxDQUFBLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFBLENBQUMsQ0FBQSxDQUFDO29CQUNuRCxTQUFTLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUEsQ0FBQyxDQUFBLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFBLENBQUMsQ0FBQSxDQUFDO2lCQUNqRDthQUNGLENBQUMsQ0FBQTtZQUNGLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1lBQzlCLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzNCLENBQUMsRUFBQyxVQUFDLEdBQU87WUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdELElBQUksRUFBSjtRQUNFLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLEVBQUUsQ0FBQyxTQUFTLENBQUM7WUFDWCxHQUFHLEVBQUUsWUFBWTtTQUNsQixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsSUFBSSxFQUFKO1FBQ0UsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1lBQ3ZCLEtBQUssRUFBRSxvQkFBb0I7WUFDM0IsSUFBSSxFQUFFLEVBQUU7WUFDUixPQUFPO1lBS1AsQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFHRCxNQUFNLEVBQU47UUFDRSxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ1gsT0FBTyxFQUFFLG9FQUFvRTtTQUM5RSxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ04sRUFBRSxDQUFDLHFCQUFxQixDQUFDO2dCQUN2QixLQUFLLEVBQUUsb0JBQW9CO2dCQUMzQixJQUFJLEVBQUUsRUFBRTtnQkFDUixPQUFPO2dCQUtQLENBQUM7YUFDRixDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFHRCxJQUFJLEVBQUo7UUFDRSxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUNuQixFQUFFLENBQUMsU0FBUyxDQUFDO1lBQ1gsR0FBRyxFQUFFLFlBQVk7U0FDbEIsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUdELElBQUksRUFBSjtRQUNFLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLEVBQUUsQ0FBQyxTQUFTLENBQUM7WUFDWCxHQUFHLEVBQUUsWUFBWTtTQUNsQixDQUFDLENBQUE7SUFDSixDQUFDO0lBR0QsSUFBSSxFQUFKO1FBQ0UsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDckIsRUFBRSxDQUFDLFNBQVMsQ0FBQztZQUNYLEdBQUcsRUFBRSxZQUFZO1NBQ2xCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFHRCxJQUFJLEVBQUo7UUFDRSxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUNyQixFQUFFLENBQUMsU0FBUyxDQUFDO1lBQ1gsR0FBRyxFQUFFLFlBQVk7U0FDbEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUdELEtBQUssRUFBTDtRQUNFLEVBQUUsQ0FBQyxTQUFTLENBQUM7WUFDWCxHQUFHLEVBQUMsWUFBWTtTQUNqQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBR0QsTUFBTSxFQUFOO1FBQ0UsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBQyxzQkFBc0I7U0FDM0IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdELElBQUksRUFBSjtRQUNFLElBQUksS0FBSyxHQUFVLEVBQUUsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUMsSUFBRyxDQUFDLENBQUMsS0FBSyxFQUFDO1lBQ1QsRUFBRSxDQUFDLFVBQVUsQ0FBQztnQkFDWixHQUFHLEVBQUMsNEJBQTRCO2FBQ2pDLENBQUMsQ0FBQTtTQUNIO2FBQUk7WUFDSCxFQUFFLENBQUMsVUFBVSxDQUFDO2dCQUNaLEdBQUcsRUFBRSx3QkFBd0I7YUFDOUIsQ0FBQyxDQUFBO1NBQ0g7SUFDSCxDQUFDO0lBR0QsSUFBSSxFQUFKO1FBQ0UsSUFBSSxLQUFLLEdBQVUsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QyxJQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUM7WUFDVCxFQUFFLENBQUMsVUFBVSxDQUFDO2dCQUNaLEdBQUcsRUFBQyxrQkFBa0I7YUFDdkIsQ0FBQyxDQUFBO1NBQ0g7YUFBSTtZQUNILEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ1osR0FBRyxFQUFFLHdCQUF3QjthQUM5QixDQUFDLENBQUE7U0FDSDtJQUNILENBQUM7SUFJRCxNQUFNO1FBQ0osSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFHRCxNQUFNLGdCQUFHLENBQUM7SUFHVixPQUFPLGdCQUFHLENBQUM7SUFHWCxNQUFNLGdCQUFHLENBQUM7SUFHVixRQUFRLGdCQUFHLENBQUM7Q0FHYixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBob21lLnRzXHJcbi8vIOiOt+WPluW6lOeUqOWunuS+i1xyXG5jb25zdCBhcGkgPSBnZXRBcHAoKS5nbG9iYWxEYXRhOyAgLy8g6I635Y+W5bqU55So5a6e5L6LXHJcbmxldCBEaWFsb2cgPSByZXF1aXJlKCcuLi8uLi9taW5pcHJvZ3JhbV9ucG0vQHZhbnQvd2VhcHAvZGlhbG9nL2RpYWxvZy5qcycpLmRlZmF1bHQ7XHJcbmxldCBodHRwcyAgPSByZXF1aXJlKCcuLi8uLi91dGlscy9teVJlcXVlc3QuanMnKTsgICAgIC8v6I635Y+WYWpheOaWueazlVxyXG5sZXQgZ2xvYmFsRm4gID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvZ2xvYmFsRm4uanMnKTsgICAvL+iOt+WPluWFrOWFseWwgeijheaWueazlVxyXG5sZXQgZXhwcmVzc0ZuID0gZ2xvYmFsRm4udGhyb3R0bGUoZnVuY3Rpb24oKXsgICAgICAgICAvL+S/oeaBr+mAn+mAku+8iOWHveaVsOmYsuaKlu+8iVxyXG4gIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgdXJsOlwiLi4vbmV3cy9uZXdzXCJcclxuICB9KVxyXG59LDEwMDApO1xyXG5sZXQgdGVtcGxhdGU6YW55ID0gcmVxdWlyZSgnLi4vLi4vdGVtcGxhdGVzL3RlbXBsYXRlLmpzJyk7ICAgLy/ojrflj5ZpbmRleEhlYWRlcuaooeadv+eahOaWueazlVxyXG5cclxuUGFnZSh7XHJcbiAgLy/pobXpnaLmlbDmja5cclxuICBkYXRhOiB7XHJcbiAgICBzY3JvbGxUb3A6ICcwJyxcclxuICAgIGxpc3Q6eyAgLy/nu5/orqExMuadoeS/oeaBr1xyXG4gICAgICBjeU1vZGVsOiAwLCAgICAgICAgICAgICAvL+WIm+S4muW5s+WPsFxyXG4gICAgICBjeE1vZGVsOiAwLCAgICAgICAgICAgICAvL+WIm+aWsOW5s+WPsFxyXG4gICAgICBjeGN5Q291bnQ6IDAsICAgICAgICAgICAvL+WPjOWIm+acuuaehFxyXG4gICAgICBmd0NvdW50OiAwLCAgICAgICAgICAgICAvL+WPjOWIm+acjeWKoeacuuaehFxyXG4gICAgICB0YWxlbnRDb3VudE1vZGVsOiAwLCAgICAvL+mHjeeCueS6uuaJjVxyXG4gICAgICB6Y0NvdW50OiAwLCAgICAgICAgICAgICAvL+aUv+etluacjeWKoVxyXG4gICAgICBmd1R5cGVDb3VudDogMCwgICAgICAgICAvL+WPjOWIm+acjeWKoeS6p+WTgeKAlOe7n+iuoeacjeWKoeexu+WIq+eahOaVsOmHj1xyXG4gICAgICBwcm9kdWN0Q291bnQ6IDAsICAgICAgICAvL+WPjOWIm+aKgOacr+aIkOaenFxyXG4gICAgICB2ZWN0b3JDb3VudDogMCwgICAgICAgICAvL+WIm+S4mui9veS9k+i1hOa6kFxyXG4gICAgICBwcm9Db3VudDogMCwgICAgICAgICAgICAvL+WIm+aWsOWIm+S4mumhueebrlxyXG4gICAgICBlcXVpcENvdW50OiAwLCAgICAgICAgICAvL+S7quWZqOiuvuWkh+i1hOa6kFxyXG4gICAgICBuZWVkQ291bnQ6IDAgICAgICAgICAgICAvL+WIm+aWsOWIm+S4mumcgOaxguWvueaOpVxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBvblNoYXJlQXBwTWVzc2FnZToocmVzOmFueSk6YW55PT4geyAgLy/lj5HpgIHnu5nmnIvlj4tcclxuICAgIGlmIChyZXMuZnJvbSA9PT0gJ2J1dHRvbicpIHtcclxuICAgICAgLy8g5p2l6Ieq6aG16Z2i5YaF6L2s5Y+R5oyJ6ZKuXHJcbiAgICAgIGNvbnNvbGUubG9nKHJlcy50YXJnZXQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdGl0bGU6ICfpnZLlspvkurrmiY3liJvmlrDliJvkuJrlubPlj7DlnLDlm74nLFxyXG4gICAgICBwYXRoOiAnL3BhZ2VzL2hvbWUvaG9tZScsXHJcbiAgICAgIGltYWdlVXJsOiAnJ1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIG9uU2hhcmVUaW1lbGluZTooKTphbnk9PiB7ICAvL+WIhuS6q1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdGl0bGU6ICfpnZLlspvkurrmiY3liJvmlrDliJvkuJrlubPlj7DlnLDlm74nLFxyXG4gICAgICBxdWVyeToge30sXHJcbiAgICAgIGltYWdlVXJsOiAnJ1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8vIHNjcm9sbFRvTG93ZXIoKTp2b2lkIHsgIC8v5rua5Yqo5Yiw5bqV6YOoL+WPs+i+ueaXtuinpuWPkVxyXG4gIC8vICAgZXhwcmVzc0ZuKCk7ICAvL+i3s+i9rOS/oeaBr+mAn+mAklxyXG4gIC8vIH0sXHJcblxyXG4gIG9uUmVhY2hCb3R0b20oKTp2b2lkeyAgLy/nm5HlkKzkuIrmi4nop6blupXkuovku7ZcclxuICAgIGV4cHJlc3NGbigpOyAgLy/ot7Povazkv6Hmga/pgJ/pgJJcclxuICB9LFxyXG5cclxuICAvL+aooeadv+eCueWHu+S6i+S7tlxyXG4gIGluZGV4SGVhZGVyRm4oZXZlbnQ6YW55KTp2b2lke1xyXG4gICAgdGVtcGxhdGUuaW5kZXhIZWFkZXJGbihldmVudCk7XHJcbiAgfSxcclxuXHJcbiAgLy/kuIvmi4nliLfmlrBcclxuICBvblB1bGxEb3duUmVmcmVzaCgpOnZvaWR7XHJcbiAgICB3eC5zaG93TmF2aWdhdGlvbkJhckxvYWRpbmcoKTsgICAvL+WcqOagh+mimOagj+S4reaYvuekuuWKoOi9vVxyXG4gICAgdGhpcy5nZXREYXRhKCk7ICAgICAgICAgICAgICAgICAgLy/ojrflj5bnu5/orqHmlbDmja7mlrnms5VcclxuICB9LFxyXG5cclxuICAvL+S/oeaBr+mAn+mAku+8iOWHveaVsOmYsuaKlu+8iVxyXG4gIG5ld3NDbGljaygpOnZvaWQge1xyXG4gICAgZXhwcmVzc0ZuKCk7ICAvL+i3s+i9rOS/oeaBr+mAn+mAklxyXG4gIH0sXHJcblxyXG4gIC8v6I635Y+W57uf6K6h5pWw5o2u5pa55rOVXHJcbiAgZ2V0RGF0YSgpe1xyXG4gICAgd3guc2hvd05hdmlnYXRpb25CYXJMb2FkaW5nKCkgLy/lnKjmoIfpopjmoI/kuK3mmL7npLrliqDovb1cclxuICAgIGh0dHBzLnJlcXVlc3QoYXBpLmNvdW50LCBudWxsLCAnR0VUJylcclxuICAgIC50aGVuKChyZXM6YW55KTp2b2lkPT57XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgbGlzdDp7XHJcbiAgICAgICAgICBjeU1vZGVsOiByZXMudmFsLmN5TW9kZWwucGxhdGZvcm1Db3VudD9yZXMudmFsLmN5TW9kZWwucGxhdGZvcm1Db3VudDowLCAgICAgICAgICAgICAvL+WIm+S4muW5s+WPsFxyXG4gICAgICAgICAgY3hNb2RlbDogcmVzLnZhbC5jeE1vZGVsLnBsYXRmb3JtQ291bnQ/cmVzLnZhbC5jeE1vZGVsLnBsYXRmb3JtQ291bnQ6MCwgICAgICAgICAgICAgLy/liJvmlrDlubPlj7BcclxuICAgICAgICAgIGN4Y3lDb3VudDogcmVzLnZhbC5jeGN5Q291bnQ/cmVzLnZhbC5jeGN5Q291bnQ6MCwgICAgICAgICAgIC8v5Y+M5Yib5py65p6EXHJcbiAgICAgICAgICBmd0NvdW50OiByZXMudmFsLmZ3Q291bnQ/cmVzLnZhbC5md0NvdW50OjAsICAgICAgICAgICAgIC8v5Y+M5Yib5pyN5Yqh5py65p6EXHJcbiAgICAgICAgICB0YWxlbnRDb3VudE1vZGVsOiByZXMudmFsLnRhbGVudENvdW50TW9kZWwudGFsZW50Q291bnQ/cmVzLnZhbC50YWxlbnRDb3VudE1vZGVsLnRhbGVudENvdW50OjAsICAgIC8v6YeN54K55Lq65omNXHJcbiAgICAgICAgICB6Y0NvdW50OiByZXMudmFsLnpjQ291bnQ/cmVzLnZhbC56Y0NvdW50OjAsICAgICAgICAgICAgIC8v5pS/562W5pyN5YqhXHJcbiAgICAgICAgICBmd1R5cGVDb3VudDogcmVzLnZhbC5md1R5cGVDb3VudD9yZXMudmFsLmZ3VHlwZUNvdW50OjAsICAgICAgICAgLy/lj4zliJvmnI3liqHkuqflk4HigJTnu5/orqHmnI3liqHnsbvliKvnmoTmlbDph49cclxuICAgICAgICAgIHByb2R1Y3RDb3VudDogcmVzLnZhbC5wcm9kdWN0Q291bnQ/cmVzLnZhbC5wcm9kdWN0Q291bnQ6MCwgICAgICAgIC8v5Y+M5Yib5oqA5pyv5oiQ5p6cXHJcbiAgICAgICAgICB2ZWN0b3JDb3VudDogcmVzLnZhbC52ZWN0b3JDb3VudD9yZXMudmFsLnZlY3RvckNvdW50OjAsICAgICAgICAgLy/liJvkuJrovb3kvZPotYTmupBcclxuICAgICAgICAgIHByb0NvdW50OiByZXMudmFsLnByb0NvdW50P3Jlcy52YWwucHJvQ291bnQ6MCwgICAgICAgICAgICAvL+WIm+aWsOWIm+S4mumhueebrlxyXG4gICAgICAgICAgZXF1aXBDb3VudDogcmVzLnZhbC5lcXVpcENvdW50P3Jlcy52YWwuZXF1aXBDb3VudDowLCAgICAgICAgICAvL+S7quWZqOiuvuWkh+i1hOa6kFxyXG4gICAgICAgICAgbmVlZENvdW50OiByZXMudmFsLm5lZWRDb3VudD9yZXMudmFsLm5lZWRDb3VudDowICAgICAgICAgICAgLy/liJvmlrDliJvkuJrpnIDmsYLlr7nmjqVcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIHd4LmhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZygpOyAgLy/lrozmiJDlgZzmraLliqDovb1cclxuICAgICAgd3guc3RvcFB1bGxEb3duUmVmcmVzaCgpOyAgICAgICAvL+WBnOatouS4i+aLieWIt+aWsFxyXG4gICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIC8v5om+5bmz5Y+wXHJcbiAgcHRGbigpOnZvaWR7XHJcbiAgICBhcGkuaW5kZXhGbGFnID0gJ3B0JztcclxuICAgIHd4LnN3aXRjaFRhYih7XHJcbiAgICAgIHVybDogJy4uL21hcC9tYXAnXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIHpjRm4oKTp2b2lke1xyXG4gICAgd3gubmF2aWdhdGVUb01pbmlQcm9ncmFtKHtcclxuICAgICAgYXBwSWQ6ICd3eGY0MDgzYTVmODM2NWEzMGEnLFxyXG4gICAgICBwYXRoOiAnJyxcclxuICAgICAgc3VjY2VzcygpIHtcclxuICAgICAgICAvLyDmiZPlvIDmiJDlip9cclxuICAgICAgICAvLyB3eC5zd2l0Y2hUYWIoe1xyXG4gICAgICAgIC8vICAgdXJsOiAnL3BhZ2VzL2hvbWUvaG9tZSdcclxuICAgICAgICAvLyB9KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIC8v5Lq65omN572R5aSW6ZO+XHJcbiAgbGlua0ZuKCk6dm9pZHtcclxuICAgIERpYWxvZy5hbGVydCh7XHJcbiAgICAgIG1lc3NhZ2U6ICfigJzlubPlj7DlnLDlm77igJ3mraPkuI7lhajluILkurrmiY3nm7jlhbPpg6jpl6jlip7kuovmnI3liqHlrp7njrDkupLogZTkupLpgJrvvIznm67liY3vvIzor7flhYjkvb/nlKjigJzpnZLlspvkurrmiY3igJ3ov5vooYznmbvlvZXlip7nkIbvvIzlkI7mnJ/lsIbpgJDmraXlrozlloTlkITpobnlip/og73mnb/lnZfvvIzmlazor7fmnJ/lvoXvvIEnLFxyXG4gICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgIHd4Lm5hdmlnYXRlVG9NaW5pUHJvZ3JhbSh7XHJcbiAgICAgICAgYXBwSWQ6ICd3eDJlMDcwZTMzYzYxNTQ1MTUnLFxyXG4gICAgICAgIHBhdGg6ICcnLFxyXG4gICAgICAgIHN1Y2Nlc3MoKSB7XHJcbiAgICAgICAgICAvLyDmiZPlvIDmiJDlip9cclxuICAgICAgICAgIC8vIHd4LnN3aXRjaFRhYih7XHJcbiAgICAgICAgICAvLyAgIHVybDogJy9wYWdlcy9pbmRleC9pbmRleCdcclxuICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgLy/mib7pobnnm65cclxuICB4bUZuKCk6dm9pZHtcclxuICAgIGFwaS5pbmRleEZsYWcgPSAneG0nO1xyXG4gICAgICB3eC5zd2l0Y2hUYWIoe1xyXG4gICAgICAgIHVybDogJy4uL21hcC9tYXAnXHJcbiAgICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgLy/mib7otYTph5FcclxuICB6akZuKCk6dm9pZHtcclxuICAgIGFwaS5pbmRleEZsYWcgPSAnemonO1xyXG4gICAgd3guc3dpdGNoVGFiKHtcclxuICAgICAgdXJsOiAnLi4vbWFwL21hcCdcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgLy/mib7lnLrlnLBcclxuICBjZEZuKCk6dm9pZHtcclxuICAgIGFwaS5pbmRleEZsYWcgPSAnY2QnO1xyXG4gICAgd3guc3dpdGNoVGFiKHtcclxuICAgICAgdXJsOiAnLi4vbWFwL21hcCdcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgLy/mib7mnI3liqFcclxuICBmd0ZuKCk6dm9pZHtcclxuICAgIGFwaS5pbmRleEZsYWcgPSAnZncnO1xyXG4gICAgd3guc3dpdGNoVGFiKHtcclxuICAgICAgdXJsOiAnLi4vbWFwL21hcCdcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgLy/lnLDlm75cclxuICBtYXBGbigpOnZvaWR7XHJcbiAgICB3eC5zd2l0Y2hUYWIoeyBcclxuICAgICAgdXJsOicuLi9tYXAvbWFwJ1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgLy/lm77niYflpJbpk75cclxuICBob21lRm4oKTp2b2lke1xyXG4gICAgd3gubmF2aWdhdGVUbyh7IFxyXG4gICAgICB1cmw6Jy4uL2hvbWVMaW5rL2hvbWVMaW5rJ1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgLy/miJHopoHkuqTmmJNcclxuICBqeUZuKCk6dm9pZHtcclxuICAgIGxldCB0b2tlbjpzdHJpbmcgPSB3eC5nZXRTdG9yYWdlU3luYygndG9rZW4nKTtcclxuICAgIGlmKCEhdG9rZW4pe1xyXG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6Jy4uL3RyYW5zYWN0aW9uL3RyYW5zYWN0aW9uJ1xyXG4gICAgICB9KVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybDogJy4uL2xvZ2luRm9ybS9sb2dpbkZvcm0nXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLy/miJHopoHku6rlmajorr7lpIdcclxuICB5cUZuKCk6dm9pZHtcclxuICAgIGxldCB0b2tlbjpzdHJpbmcgPSB3eC5nZXRTdG9yYWdlU3luYygndG9rZW4nKTtcclxuICAgIGlmKCEhdG9rZW4pe1xyXG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6Jy4uL2RldmljZS9kZXZpY2UnXHJcbiAgICAgIH0pXHJcbiAgICB9ZWxzZXtcclxuICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgdXJsOiAnLi4vbG9naW5Gb3JtL2xvZ2luRm9ybSdcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG5cclxuXHJcbiAgLy/pobXpnaLliJ3lp4vljJZcclxuICBvbkxvYWQoKXtcclxuICAgIHRoaXMuZ2V0RGF0YSgpOyAgLy/ojrflj5bnu5/orqHmlbDmja7mlrnms5VcclxuICB9LFxyXG5cclxuICAvL+mhtemdouaYvuekulxyXG4gIG9uU2hvdygpe30sXHJcblxyXG4gIC8v6aG16Z2i5riy5p+T5a6M5oiQXHJcbiAgb25SZWFkeSgpe30sXHJcblxyXG4gIC8v6aG16Z2i6ZqQ6JePXHJcbiAgb25IaWRlKCl7fSxcclxuXHJcbiAgLy/pobXpnaLlhbPpl61cclxuICBvblVubG9hZCgpe30sXHJcblxyXG5cclxufSlcclxuZXhwb3J0IHt9O1xyXG4iXX0=