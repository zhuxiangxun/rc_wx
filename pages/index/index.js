"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api = getApp().globalData;
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
        }
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
        var token = wx.getStorageSync('token');
        if (!!token) {
            api.indexFlag = 'pt';
            wx.switchTab({
                url: '../map/map'
            });
        }
        else {
            wx.navigateTo({
                url: '../loginForm/loginForm'
            });
        }
    },
    zcFn: function () {
        var token = wx.getStorageSync('token');
        if (!!token) {
        }
        else {
            wx.navigateTo({
                url: '../loginForm/loginForm'
            });
        }
    },
    xmFn: function () {
        var token = wx.getStorageSync('token');
        if (!!token) {
            api.indexFlag = 'xm';
            wx.switchTab({
                url: '../map/map'
            });
        }
        else {
            wx.navigateTo({
                url: '../loginForm/loginForm'
            });
        }
    },
    zjFn: function () {
        var token = wx.getStorageSync('token');
        if (!!token) {
            api.indexFlag = 'zj';
            wx.switchTab({
                url: '../map/map'
            });
        }
        else {
            wx.navigateTo({
                url: '../loginForm/loginForm'
            });
        }
    },
    cdFn: function () {
        var token = wx.getStorageSync('token');
        if (!!token) {
            api.indexFlag = 'cd';
            wx.switchTab({
                url: '../map/map'
            });
        }
        else {
            wx.navigateTo({
                url: '../loginForm/loginForm'
            });
        }
    },
    fwFn: function () {
        var token = wx.getStorageSync('token');
        if (!!token) {
            api.indexFlag = 'fw';
            wx.switchTab({
                url: '../map/map'
            });
        }
        else {
            wx.navigateTo({
                url: '../loginForm/loginForm'
            });
        }
    },
    mapFn: function () {
        var token = wx.getStorageSync('token');
        if (!!token) {
            wx.switchTab({
                url: '../map/map'
            });
        }
        else {
            wx.navigateTo({
                url: '../loginForm/loginForm'
            });
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBRSxDQUFDLFVBQVUsQ0FBQztBQUNoQyxJQUFJLEtBQUssR0FBSSxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUNqRCxJQUFJLFFBQVEsR0FBSSxPQUFPLENBQUMseUJBQXlCLENBQUMsQ0FBQztBQUNuRCxJQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDO0lBQ2hDLEVBQUUsQ0FBQyxVQUFVLENBQUM7UUFDWixHQUFHLEVBQUMsY0FBYztLQUNuQixDQUFDLENBQUE7QUFDSixDQUFDLEVBQUMsSUFBSSxDQUFDLENBQUM7QUFDUixJQUFJLFFBQVEsR0FBTyxPQUFPLENBQUMsNkJBQTZCLENBQUMsQ0FBQztBQUUxRCxJQUFJLENBQUM7SUFFSCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUM7WUFDSCxPQUFPLEVBQUUsQ0FBQztZQUNWLE9BQU8sRUFBRSxDQUFDO1lBQ1YsU0FBUyxFQUFFLENBQUM7WUFDWixPQUFPLEVBQUUsQ0FBQztZQUNWLGdCQUFnQixFQUFFLENBQUM7WUFDbkIsT0FBTyxFQUFFLENBQUM7WUFDVixXQUFXLEVBQUUsQ0FBQztZQUNkLFlBQVksRUFBRSxDQUFDO1lBQ2YsV0FBVyxFQUFFLENBQUM7WUFDZCxRQUFRLEVBQUUsQ0FBQztZQUNYLFVBQVUsRUFBRSxDQUFDO1lBQ2IsU0FBUyxFQUFFLENBQUM7U0FDYjtLQUNGO0lBR0QsYUFBYSxFQUFiLFVBQWMsS0FBUztRQUNyQixRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFHRCxpQkFBaUIsRUFBakI7UUFDRSxFQUFFLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUdELFNBQVMsRUFBVDtRQUNFLFNBQVMsRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUdELE9BQU8sRUFBUDtRQUFBLGlCQXlCQztRQXhCQyxFQUFFLENBQUMsd0JBQXdCLEVBQUUsQ0FBQTtRQUM3QixLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQzthQUNwQyxJQUFJLENBQUMsVUFBQyxHQUFPO1lBQ1osS0FBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxJQUFJLEVBQUM7b0JBQ0gsT0FBTyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQSxDQUFDLENBQUEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFBLENBQUMsQ0FBQSxDQUFDO29CQUN0RSxPQUFPLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFBLENBQUMsQ0FBQSxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUEsQ0FBQyxDQUFBLENBQUM7b0JBQ3RFLFNBQVMsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQSxDQUFDLENBQUEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUEsQ0FBQyxDQUFBLENBQUM7b0JBQ2hELE9BQU8sRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQSxDQUFDLENBQUEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUEsQ0FBQyxDQUFBLENBQUM7b0JBQzFDLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFBLENBQUMsQ0FBQSxHQUFHLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQSxDQUFDLENBQUEsQ0FBQztvQkFDN0YsT0FBTyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFBLENBQUMsQ0FBQSxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQSxDQUFDLENBQUEsQ0FBQztvQkFDMUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFBLENBQUMsQ0FBQSxHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQSxDQUFDLENBQUEsQ0FBQztvQkFDdEQsWUFBWSxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFBLENBQUMsQ0FBQSxHQUFHLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQSxDQUFDLENBQUEsQ0FBQztvQkFDekQsV0FBVyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFBLENBQUMsQ0FBQSxHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQSxDQUFDLENBQUEsQ0FBQztvQkFDdEQsUUFBUSxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFBLENBQUMsQ0FBQSxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQSxDQUFDLENBQUEsQ0FBQztvQkFDN0MsVUFBVSxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFBLENBQUMsQ0FBQSxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQSxDQUFDLENBQUEsQ0FBQztvQkFDbkQsU0FBUyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFBLENBQUMsQ0FBQSxHQUFHLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQSxDQUFDLENBQUEsQ0FBQztpQkFDakQ7YUFDRixDQUFDLENBQUE7WUFDRixFQUFFLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztZQUM5QixFQUFFLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUMzQixDQUFDLEVBQUMsVUFBQyxHQUFPO1lBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFHRCxJQUFJLEVBQUo7UUFDRSxJQUFJLEtBQUssR0FBVSxFQUFFLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlDLElBQUcsQ0FBQyxDQUFDLEtBQUssRUFBQztZQUNULEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0JBQ1gsR0FBRyxFQUFFLFlBQVk7YUFDbEIsQ0FBQyxDQUFBO1NBQ0g7YUFBSTtZQUNILEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ1osR0FBRyxFQUFFLHdCQUF3QjthQUM5QixDQUFDLENBQUE7U0FDSDtJQUNILENBQUM7SUFHRCxJQUFJLEVBQUo7UUFDRSxJQUFJLEtBQUssR0FBVSxFQUFFLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlDLElBQUcsQ0FBQyxDQUFDLEtBQUssRUFBQztTQUVWO2FBQUk7WUFDSCxFQUFFLENBQUMsVUFBVSxDQUFDO2dCQUNaLEdBQUcsRUFBRSx3QkFBd0I7YUFDOUIsQ0FBQyxDQUFBO1NBQ0g7SUFDSCxDQUFDO0lBR0QsSUFBSSxFQUFKO1FBQ0UsSUFBSSxLQUFLLEdBQVUsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QyxJQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUM7WUFDVCxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUNyQixFQUFFLENBQUMsU0FBUyxDQUFDO2dCQUNYLEdBQUcsRUFBRSxZQUFZO2FBQ2xCLENBQUMsQ0FBQTtTQUNIO2FBQUk7WUFDSCxFQUFFLENBQUMsVUFBVSxDQUFDO2dCQUNaLEdBQUcsRUFBRSx3QkFBd0I7YUFDOUIsQ0FBQyxDQUFBO1NBQ0g7SUFDSCxDQUFDO0lBR0QsSUFBSSxFQUFKO1FBQ0UsSUFBSSxLQUFLLEdBQVUsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QyxJQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUM7WUFDVCxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUNyQixFQUFFLENBQUMsU0FBUyxDQUFDO2dCQUNYLEdBQUcsRUFBRSxZQUFZO2FBQ2xCLENBQUMsQ0FBQTtTQUNIO2FBQUk7WUFDSCxFQUFFLENBQUMsVUFBVSxDQUFDO2dCQUNaLEdBQUcsRUFBRSx3QkFBd0I7YUFDOUIsQ0FBQyxDQUFBO1NBQ0g7SUFDSCxDQUFDO0lBR0QsSUFBSSxFQUFKO1FBQ0UsSUFBSSxLQUFLLEdBQVUsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QyxJQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUM7WUFDVCxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUNyQixFQUFFLENBQUMsU0FBUyxDQUFDO2dCQUNYLEdBQUcsRUFBRSxZQUFZO2FBQ2xCLENBQUMsQ0FBQTtTQUNIO2FBQUk7WUFDSCxFQUFFLENBQUMsVUFBVSxDQUFDO2dCQUNaLEdBQUcsRUFBRSx3QkFBd0I7YUFDOUIsQ0FBQyxDQUFBO1NBQ0g7SUFDSCxDQUFDO0lBR0QsSUFBSSxFQUFKO1FBQ0UsSUFBSSxLQUFLLEdBQVUsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QyxJQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUM7WUFDVCxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUNyQixFQUFFLENBQUMsU0FBUyxDQUFDO2dCQUNYLEdBQUcsRUFBRSxZQUFZO2FBQ2xCLENBQUMsQ0FBQTtTQUNIO2FBQUk7WUFDSCxFQUFFLENBQUMsVUFBVSxDQUFDO2dCQUNaLEdBQUcsRUFBRSx3QkFBd0I7YUFDOUIsQ0FBQyxDQUFBO1NBQ0g7SUFDSCxDQUFDO0lBR0QsS0FBSyxFQUFMO1FBQ0UsSUFBSSxLQUFLLEdBQVUsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QyxJQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUM7WUFDVCxFQUFFLENBQUMsU0FBUyxDQUFDO2dCQUNYLEdBQUcsRUFBQyxZQUFZO2FBQ2pCLENBQUMsQ0FBQztTQUNKO2FBQUk7WUFDSCxFQUFFLENBQUMsVUFBVSxDQUFDO2dCQUNaLEdBQUcsRUFBRSx3QkFBd0I7YUFDOUIsQ0FBQyxDQUFBO1NBQ0g7SUFDSCxDQUFDO0lBR0QsSUFBSSxFQUFKO1FBQ0UsSUFBSSxLQUFLLEdBQVUsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QyxJQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUM7WUFDVCxFQUFFLENBQUMsVUFBVSxDQUFDO2dCQUNaLEdBQUcsRUFBQyw0QkFBNEI7YUFDakMsQ0FBQyxDQUFBO1NBQ0g7YUFBSTtZQUNILEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ1osR0FBRyxFQUFFLHdCQUF3QjthQUM5QixDQUFDLENBQUE7U0FDSDtJQUNILENBQUM7SUFHRCxJQUFJLEVBQUo7UUFDRSxJQUFJLEtBQUssR0FBVSxFQUFFLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlDLElBQUcsQ0FBQyxDQUFDLEtBQUssRUFBQztZQUNULEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ1osR0FBRyxFQUFDLGtCQUFrQjthQUN2QixDQUFDLENBQUE7U0FDSDthQUFJO1lBQ0gsRUFBRSxDQUFDLFVBQVUsQ0FBQztnQkFDWixHQUFHLEVBQUUsd0JBQXdCO2FBQzlCLENBQUMsQ0FBQTtTQUNIO0lBQ0gsQ0FBQztJQUlELE1BQU07UUFDSixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUdELE1BQU0sZ0JBQUcsQ0FBQztJQUdWLE9BQU8sZ0JBQUcsQ0FBQztJQUdYLE1BQU0sZ0JBQUcsQ0FBQztJQUdWLFFBQVEsZ0JBQUcsQ0FBQztDQUdiLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGluZGV4LnRzXHJcbi8vIOiOt+WPluW6lOeUqOWunuS+i1xyXG5jb25zdCBhcGkgPSBnZXRBcHAoKS5nbG9iYWxEYXRhOyAgLy8g6I635Y+W5bqU55So5a6e5L6LXHJcbmxldCBodHRwcyAgPSByZXF1aXJlKCcuLi8uLi91dGlscy9teVJlcXVlc3QuanMnKTsgICAgIC8v6I635Y+WYWpheOaWueazlVxyXG5sZXQgZ2xvYmFsRm4gID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvZ2xvYmFsRm4uanMnKTsgICAvL+iOt+WPluWFrOWFseWwgeijheaWueazlVxyXG5sZXQgZXhwcmVzc0ZuID0gZ2xvYmFsRm4udGhyb3R0bGUoZnVuY3Rpb24oKXsgICAgICAgICAvL+S/oeaBr+mAn+mAku+8iOWHveaVsOmYsuaKlu+8iVxyXG4gIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgdXJsOlwiLi4vbmV3cy9uZXdzXCJcclxuICB9KVxyXG59LDEwMDApO1xyXG5sZXQgdGVtcGxhdGU6YW55ID0gcmVxdWlyZSgnLi4vLi4vdGVtcGxhdGVzL3RlbXBsYXRlLmpzJyk7ICAgLy/ojrflj5ZpbmRleEhlYWRlcuaooeadv+eahOaWueazlVxyXG5cclxuUGFnZSh7XHJcbiAgLy/pobXpnaLmlbDmja5cclxuICBkYXRhOiB7XHJcbiAgICBsaXN0OnsgIC8v57uf6K6hMTLmnaHkv6Hmga9cclxuICAgICAgY3lNb2RlbDogMCwgICAgICAgICAgICAgLy/liJvkuJrlubPlj7BcclxuICAgICAgY3hNb2RlbDogMCwgICAgICAgICAgICAgLy/liJvmlrDlubPlj7BcclxuICAgICAgY3hjeUNvdW50OiAwLCAgICAgICAgICAgLy/lj4zliJvmnLrmnoRcclxuICAgICAgZndDb3VudDogMCwgICAgICAgICAgICAgLy/lj4zliJvmnI3liqHmnLrmnoRcclxuICAgICAgdGFsZW50Q291bnRNb2RlbDogMCwgICAgLy/ph43ngrnkurrmiY1cclxuICAgICAgemNDb3VudDogMCwgICAgICAgICAgICAgLy/mlL/nrZbmnI3liqFcclxuICAgICAgZndUeXBlQ291bnQ6IDAsICAgICAgICAgLy/lj4zliJvmnI3liqHkuqflk4HigJTnu5/orqHmnI3liqHnsbvliKvnmoTmlbDph49cclxuICAgICAgcHJvZHVjdENvdW50OiAwLCAgICAgICAgLy/lj4zliJvmioDmnK/miJDmnpxcclxuICAgICAgdmVjdG9yQ291bnQ6IDAsICAgICAgICAgLy/liJvkuJrovb3kvZPotYTmupBcclxuICAgICAgcHJvQ291bnQ6IDAsICAgICAgICAgICAgLy/liJvmlrDliJvkuJrpobnnm65cclxuICAgICAgZXF1aXBDb3VudDogMCwgICAgICAgICAgLy/ku6rlmajorr7lpIfotYTmupBcclxuICAgICAgbmVlZENvdW50OiAwICAgICAgICAgICAgLy/liJvmlrDliJvkuJrpnIDmsYLlr7nmjqVcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvL+aooeadv+eCueWHu+S6i+S7tlxyXG4gIGluZGV4SGVhZGVyRm4oZXZlbnQ6YW55KTp2b2lke1xyXG4gICAgdGVtcGxhdGUuaW5kZXhIZWFkZXJGbihldmVudCk7XHJcbiAgfSxcclxuXHJcbiAgLy/kuIvmi4nliLfmlrBcclxuICBvblB1bGxEb3duUmVmcmVzaCgpOnZvaWR7XHJcbiAgICB3eC5zaG93TmF2aWdhdGlvbkJhckxvYWRpbmcoKTsgICAvL+WcqOagh+mimOagj+S4reaYvuekuuWKoOi9vVxyXG4gICAgdGhpcy5nZXREYXRhKCk7ICAgICAgICAgICAgICAgICAgLy/ojrflj5bnu5/orqHmlbDmja7mlrnms5VcclxuICB9LFxyXG5cclxuICAvL+S/oeaBr+mAn+mAku+8iOWHveaVsOmYsuaKlu+8iVxyXG4gIG5ld3NDbGljaygpOnZvaWQge1xyXG4gICAgZXhwcmVzc0ZuKCk7ICAvL+i3s+i9rOS/oeaBr+mAn+mAklxyXG4gIH0sXHJcblxyXG4gIC8v6I635Y+W57uf6K6h5pWw5o2u5pa55rOVXHJcbiAgZ2V0RGF0YSgpe1xyXG4gICAgd3guc2hvd05hdmlnYXRpb25CYXJMb2FkaW5nKCkgLy/lnKjmoIfpopjmoI/kuK3mmL7npLrliqDovb1cclxuICAgIGh0dHBzLnJlcXVlc3QoYXBpLmNvdW50LCBudWxsLCAnR0VUJylcclxuICAgIC50aGVuKChyZXM6YW55KTp2b2lkPT57XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgbGlzdDp7XHJcbiAgICAgICAgICBjeU1vZGVsOiByZXMudmFsLmN5TW9kZWwucGxhdGZvcm1Db3VudD9yZXMudmFsLmN5TW9kZWwucGxhdGZvcm1Db3VudDowLCAgICAgICAgICAgICAvL+WIm+S4muW5s+WPsFxyXG4gICAgICAgICAgY3hNb2RlbDogcmVzLnZhbC5jeE1vZGVsLnBsYXRmb3JtQ291bnQ/cmVzLnZhbC5jeE1vZGVsLnBsYXRmb3JtQ291bnQ6MCwgICAgICAgICAgICAgLy/liJvmlrDlubPlj7BcclxuICAgICAgICAgIGN4Y3lDb3VudDogcmVzLnZhbC5jeGN5Q291bnQ/cmVzLnZhbC5jeGN5Q291bnQ6MCwgICAgICAgICAgIC8v5Y+M5Yib5py65p6EXHJcbiAgICAgICAgICBmd0NvdW50OiByZXMudmFsLmZ3Q291bnQ/cmVzLnZhbC5md0NvdW50OjAsICAgICAgICAgICAgIC8v5Y+M5Yib5pyN5Yqh5py65p6EXHJcbiAgICAgICAgICB0YWxlbnRDb3VudE1vZGVsOiByZXMudmFsLnRhbGVudENvdW50TW9kZWwudGFsZW50Q291bnQ/cmVzLnZhbC50YWxlbnRDb3VudE1vZGVsLnRhbGVudENvdW50OjAsICAgIC8v6YeN54K55Lq65omNXHJcbiAgICAgICAgICB6Y0NvdW50OiByZXMudmFsLnpjQ291bnQ/cmVzLnZhbC56Y0NvdW50OjAsICAgICAgICAgICAgIC8v5pS/562W5pyN5YqhXHJcbiAgICAgICAgICBmd1R5cGVDb3VudDogcmVzLnZhbC5md1R5cGVDb3VudD9yZXMudmFsLmZ3VHlwZUNvdW50OjAsICAgICAgICAgLy/lj4zliJvmnI3liqHkuqflk4HigJTnu5/orqHmnI3liqHnsbvliKvnmoTmlbDph49cclxuICAgICAgICAgIHByb2R1Y3RDb3VudDogcmVzLnZhbC5wcm9kdWN0Q291bnQ/cmVzLnZhbC5wcm9kdWN0Q291bnQ6MCwgICAgICAgIC8v5Y+M5Yib5oqA5pyv5oiQ5p6cXHJcbiAgICAgICAgICB2ZWN0b3JDb3VudDogcmVzLnZhbC52ZWN0b3JDb3VudD9yZXMudmFsLnZlY3RvckNvdW50OjAsICAgICAgICAgLy/liJvkuJrovb3kvZPotYTmupBcclxuICAgICAgICAgIHByb0NvdW50OiByZXMudmFsLnByb0NvdW50P3Jlcy52YWwucHJvQ291bnQ6MCwgICAgICAgICAgICAvL+WIm+aWsOWIm+S4mumhueebrlxyXG4gICAgICAgICAgZXF1aXBDb3VudDogcmVzLnZhbC5lcXVpcENvdW50P3Jlcy52YWwuZXF1aXBDb3VudDowLCAgICAgICAgICAvL+S7quWZqOiuvuWkh+i1hOa6kFxyXG4gICAgICAgICAgbmVlZENvdW50OiByZXMudmFsLm5lZWRDb3VudD9yZXMudmFsLm5lZWRDb3VudDowICAgICAgICAgICAgLy/liJvmlrDliJvkuJrpnIDmsYLlr7nmjqVcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIHd4LmhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZygpOyAgLy/lrozmiJDlgZzmraLliqDovb1cclxuICAgICAgd3guc3RvcFB1bGxEb3duUmVmcmVzaCgpOyAgICAgICAvL+WBnOatouS4i+aLieWIt+aWsFxyXG4gICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIC8v5om+5bmz5Y+wXHJcbiAgcHRGbigpOnZvaWR7XHJcbiAgICBsZXQgdG9rZW46c3RyaW5nID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3Rva2VuJyk7XHJcbiAgICBpZighIXRva2VuKXtcclxuICAgICAgYXBpLmluZGV4RmxhZyA9ICdwdCc7XHJcbiAgICAgIHd4LnN3aXRjaFRhYih7XHJcbiAgICAgICAgdXJsOiAnLi4vbWFwL21hcCdcclxuICAgICAgfSlcclxuICAgIH1lbHNle1xyXG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6ICcuLi9sb2dpbkZvcm0vbG9naW5Gb3JtJ1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8v5om+5pS/562WXHJcbiAgemNGbigpOnZvaWR7XHJcbiAgICBsZXQgdG9rZW46c3RyaW5nID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3Rva2VuJyk7XHJcbiAgICBpZighIXRva2VuKXtcclxuICAgICAgXHJcbiAgICB9ZWxzZXtcclxuICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgdXJsOiAnLi4vbG9naW5Gb3JtL2xvZ2luRm9ybSdcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvL+aJvumhueebrlxyXG4gIHhtRm4oKTp2b2lke1xyXG4gICAgbGV0IHRva2VuOnN0cmluZyA9IHd4LmdldFN0b3JhZ2VTeW5jKCd0b2tlbicpO1xyXG4gICAgaWYoISF0b2tlbil7XHJcbiAgICAgIGFwaS5pbmRleEZsYWcgPSAneG0nO1xyXG4gICAgICB3eC5zd2l0Y2hUYWIoe1xyXG4gICAgICAgIHVybDogJy4uL21hcC9tYXAnXHJcbiAgICAgIH0pXHJcbiAgICB9ZWxzZXtcclxuICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgdXJsOiAnLi4vbG9naW5Gb3JtL2xvZ2luRm9ybSdcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvL+aJvui1hOmHkVxyXG4gIHpqRm4oKTp2b2lke1xyXG4gICAgbGV0IHRva2VuOnN0cmluZyA9IHd4LmdldFN0b3JhZ2VTeW5jKCd0b2tlbicpO1xyXG4gICAgaWYoISF0b2tlbil7XHJcbiAgICAgIGFwaS5pbmRleEZsYWcgPSAnemonO1xyXG4gICAgICB3eC5zd2l0Y2hUYWIoe1xyXG4gICAgICAgIHVybDogJy4uL21hcC9tYXAnXHJcbiAgICAgIH0pXHJcbiAgICB9ZWxzZXtcclxuICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgdXJsOiAnLi4vbG9naW5Gb3JtL2xvZ2luRm9ybSdcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvL+aJvuWcuuWcsFxyXG4gIGNkRm4oKTp2b2lke1xyXG4gICAgbGV0IHRva2VuOnN0cmluZyA9IHd4LmdldFN0b3JhZ2VTeW5jKCd0b2tlbicpO1xyXG4gICAgaWYoISF0b2tlbil7XHJcbiAgICAgIGFwaS5pbmRleEZsYWcgPSAnY2QnO1xyXG4gICAgICB3eC5zd2l0Y2hUYWIoe1xyXG4gICAgICAgIHVybDogJy4uL21hcC9tYXAnXHJcbiAgICAgIH0pXHJcbiAgICB9ZWxzZXtcclxuICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgdXJsOiAnLi4vbG9naW5Gb3JtL2xvZ2luRm9ybSdcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvL+aJvuacjeWKoVxyXG4gIGZ3Rm4oKTp2b2lke1xyXG4gICAgbGV0IHRva2VuOnN0cmluZyA9IHd4LmdldFN0b3JhZ2VTeW5jKCd0b2tlbicpO1xyXG4gICAgaWYoISF0b2tlbil7XHJcbiAgICAgIGFwaS5pbmRleEZsYWcgPSAnZncnO1xyXG4gICAgICB3eC5zd2l0Y2hUYWIoe1xyXG4gICAgICAgIHVybDogJy4uL21hcC9tYXAnXHJcbiAgICAgIH0pXHJcbiAgICB9ZWxzZXtcclxuICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgdXJsOiAnLi4vbG9naW5Gb3JtL2xvZ2luRm9ybSdcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvL+WcsOWbvlxyXG4gIG1hcEZuKCk6dm9pZHtcclxuICAgIGxldCB0b2tlbjpzdHJpbmcgPSB3eC5nZXRTdG9yYWdlU3luYygndG9rZW4nKTtcclxuICAgIGlmKCEhdG9rZW4pe1xyXG4gICAgICB3eC5zd2l0Y2hUYWIoeyBcclxuICAgICAgICB1cmw6Jy4uL21hcC9tYXAnXHJcbiAgICAgIH0pO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybDogJy4uL2xvZ2luRm9ybS9sb2dpbkZvcm0nXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLy/miJHopoHkuqTmmJNcclxuICBqeUZuKCk6dm9pZHtcclxuICAgIGxldCB0b2tlbjpzdHJpbmcgPSB3eC5nZXRTdG9yYWdlU3luYygndG9rZW4nKTtcclxuICAgIGlmKCEhdG9rZW4pe1xyXG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6Jy4uL3RyYW5zYWN0aW9uL3RyYW5zYWN0aW9uJ1xyXG4gICAgICB9KVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybDogJy4uL2xvZ2luRm9ybS9sb2dpbkZvcm0nXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLy/miJHopoHku6rlmajorr7lpIdcclxuICB5cUZuKCk6dm9pZHtcclxuICAgIGxldCB0b2tlbjpzdHJpbmcgPSB3eC5nZXRTdG9yYWdlU3luYygndG9rZW4nKTtcclxuICAgIGlmKCEhdG9rZW4pe1xyXG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6Jy4uL2RldmljZS9kZXZpY2UnXHJcbiAgICAgIH0pXHJcbiAgICB9ZWxzZXtcclxuICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgdXJsOiAnLi4vbG9naW5Gb3JtL2xvZ2luRm9ybSdcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG5cclxuXHJcbiAgLy/pobXpnaLliJ3lp4vljJZcclxuICBvbkxvYWQoKXtcclxuICAgIHRoaXMuZ2V0RGF0YSgpOyAgLy/ojrflj5bnu5/orqHmlbDmja7mlrnms5VcclxuICB9LFxyXG5cclxuICAvL+mhtemdouaYvuekulxyXG4gIG9uU2hvdygpe30sXHJcblxyXG4gIC8v6aG16Z2i5riy5p+T5a6M5oiQXHJcbiAgb25SZWFkeSgpe30sXHJcblxyXG4gIC8v6aG16Z2i6ZqQ6JePXHJcbiAgb25IaWRlKCl7fSxcclxuXHJcbiAgLy/pobXpnaLlhbPpl61cclxuICBvblVubG9hZCgpe30sXHJcblxyXG5cclxufSlcclxuZXhwb3J0IHt9O1xyXG4iXX0=