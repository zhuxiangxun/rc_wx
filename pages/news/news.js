"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api = getApp().globalData;
var https = require('../../utils/myRequest.js');
Page({
    data: {},
    onLoad: function () {
        wx.setNavigationBarTitle({
            title: "动态"
        });
    },
    getDic: function () {
        var _this = this;
        https.request(api.dic + '?moid=70', null, 'GET')
            .then(function (res) {
            var arr = res.val;
            arr.forEach(function (item) {
                if (item.dicName == "平台动态") {
                    _this.selectComponent("#moving").getList(item.id);
                }
            });
        }, function (err) {
            console.log(err);
        });
    },
    onShow: function () {
        this.getDic();
    },
    onReady: function () { },
    onHide: function () { },
    onUnload: function () { }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5ld3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQUUsQ0FBQyxVQUFVLENBQUM7QUFDaEMsSUFBSSxLQUFLLEdBQUksT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUM7QUFFakQsSUFBSSxDQUFDO0lBRUgsSUFBSSxFQUFFLEVBQUU7SUFHUixNQUFNO1FBQ0osRUFBRSxDQUFDLHFCQUFxQixDQUFDO1lBQ3ZCLEtBQUssRUFBRSxJQUFJO1NBQ1osQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdELE1BQU0sRUFBTjtRQUFBLGlCQVlDO1FBWEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLFVBQVUsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDO2FBQy9DLElBQUksQ0FBQyxVQUFDLEdBQU87WUFDWixJQUFJLEdBQUcsR0FBUyxHQUFHLENBQUMsR0FBRyxDQUFDO1lBQ3hCLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFRO2dCQUNuQixJQUFHLElBQUksQ0FBQyxPQUFPLElBQUksTUFBTSxFQUFDO29CQUN4QixLQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQ2xEO1lBQ0gsQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDLEVBQUMsVUFBQyxHQUFPO1lBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFHRCxNQUFNO1FBQ0osSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFHRCxPQUFPLGdCQUFHLENBQUM7SUFHWCxNQUFNLGdCQUFHLENBQUM7SUFHVixRQUFRLGdCQUFHLENBQUM7Q0FDYixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBuZXdzLnRzXHJcbmNvbnN0IGFwaSA9IGdldEFwcCgpLmdsb2JhbERhdGE7ICAvLyDojrflj5blupTnlKjlrp7kvotcclxubGV0IGh0dHBzICA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL215UmVxdWVzdC5qcycpOyAgICAgLy/ojrflj5ZhamF45pa55rOVXHJcblxyXG5QYWdlKHtcclxuICAvL+mhtemdouaVsOaNrlxyXG4gIGRhdGE6IHt9LFxyXG5cclxuICAvL+mhtemdouWIneWni+WMllxyXG4gIG9uTG9hZCgpe1xyXG4gICAgd3guc2V0TmF2aWdhdGlvbkJhclRpdGxlKHsgICAgIFxyXG4gICAgICB0aXRsZTogXCLliqjmgIFcIlxyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgLy/ojrflj5blrZflhbjooahcclxuICBnZXREaWMoKTp2b2lke1xyXG4gICAgaHR0cHMucmVxdWVzdChhcGkuZGljICsgJz9tb2lkPTcwJywgbnVsbCwgJ0dFVCcpXHJcbiAgICAudGhlbigocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICBsZXQgYXJyOmFueVtdID0gcmVzLnZhbDtcclxuICAgICAgYXJyLmZvckVhY2goKGl0ZW06YW55KTp2b2lkPT57XHJcbiAgICAgICAgaWYoaXRlbS5kaWNOYW1lID09IFwi5bmz5Y+w5Yqo5oCBXCIpe1xyXG4gICAgICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoXCIjbW92aW5nXCIpLmdldExpc3QoaXRlbS5pZCk7ICAvL+W5s+WPsOWKqOaAgVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICAvL+mhtemdouaYvuekulxyXG4gIG9uU2hvdygpe1xyXG4gICAgdGhpcy5nZXREaWMoKTsgIC8v6I635Y+W5a2X5YW46KGoXHJcbiAgfSxcclxuXHJcbiAgLy/pobXpnaLmuLLmn5PlrozmiJBcclxuICBvblJlYWR5KCl7fSxcclxuXHJcbiAgLy/pobXpnaLpmpDol49cclxuICBvbkhpZGUoKXt9LFxyXG5cclxuICAvL+mhtemdouWFs+mXrVxyXG4gIG9uVW5sb2FkKCl7fVxyXG59KVxyXG5cclxuZXhwb3J0IHt9O1xyXG4iXX0=