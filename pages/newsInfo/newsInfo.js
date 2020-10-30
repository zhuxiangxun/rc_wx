"use strict";
var api = getApp().globalData;
var https = require('../../utils/myRequest.js');
Page({
    data: {
        title: '',
        name: '',
        time: '',
        num: '',
        content: ''
    },
    onLoad: function (option) {
        var _this = this;
        var url = api.notice + '/' + option.id;
        https.request(url, null, 'GET').then(function (res) {
            _this.setData({
                title: res.val.ntitle,
                name: res.val.publishSubject,
                time: res.val.publishTime.split(' ')[0],
                num: res.val.clickCount,
                content: res.val.content
            });
        }, function (err) {
            console.log(err);
        });
        wx.setNavigationBarTitle({
            title: "详情"
        });
    },
    onReady: function () { },
    onShow: function () { },
    onHide: function () { },
    onUnload: function () { }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3c0luZm8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZXdzSW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFFLENBQUMsVUFBVSxDQUFDO0FBQ2hDLElBQUksS0FBSyxHQUFJLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0FBRWpELElBQUksQ0FBQztJQUVILElBQUksRUFBRTtRQUNKLEtBQUssRUFBQyxFQUFFO1FBQ1IsSUFBSSxFQUFFLEVBQUU7UUFDUixJQUFJLEVBQUUsRUFBRTtRQUNSLEdBQUcsRUFBRSxFQUFFO1FBQ1AsT0FBTyxFQUFFLEVBQUU7S0FDWjtJQUlELE1BQU0sRUFBTixVQUFPLE1BQVU7UUFBakIsaUJBaUJDO1FBaEJDLElBQUksR0FBRyxHQUFVLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDOUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQU87WUFDekMsS0FBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxLQUFLLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNO2dCQUNyQixJQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFjO2dCQUM1QixJQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVTtnQkFDdkIsT0FBTyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTzthQUN6QixDQUFDLENBQUE7UUFDTixDQUFDLEVBQUMsVUFBQyxHQUFPO1lBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztZQUN2QixLQUFLLEVBQUUsSUFBSTtTQUNaLENBQUMsQ0FBQztJQUNMLENBQUM7SUFHRCxPQUFPLGdCQUFHLENBQUM7SUFHWCxNQUFNLGdCQUFHLENBQUM7SUFHVixNQUFNLGdCQUFHLENBQUM7SUFHVixRQUFRLGdCQUFHLENBQUM7Q0FDYixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBuZXdzSW5mby50c1xyXG5jb25zdCBhcGkgPSBnZXRBcHAoKS5nbG9iYWxEYXRhOyAgICAgICAgICAgICAgICAgICAgICAvLyDojrflj5blupTnlKjlrp7kvotcclxubGV0IGh0dHBzICA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL215UmVxdWVzdC5qcycpOyAgICAgLy/ojrflj5ZhamF45pa55rOVXHJcblxyXG5QYWdlKHtcclxuICAvL+mhtemdouaVsOaNrlxyXG4gIGRhdGE6IHtcclxuICAgIHRpdGxlOicnLFxyXG4gICAgbmFtZTogJycsXHJcbiAgICB0aW1lOiAnJyxcclxuICAgIG51bTogJycsXHJcbiAgICBjb250ZW50OiAnJ1xyXG4gIH0sXHJcblxyXG5cclxuICAvL+mhtemdouWIneWni+WMllxyXG4gIG9uTG9hZChvcHRpb246YW55KXtcclxuICAgIGxldCB1cmw6c3RyaW5nID0gYXBpLm5vdGljZSArICcvJyArIG9wdGlvbi5pZDtcclxuICAgIGh0dHBzLnJlcXVlc3QodXJsLCBudWxsLCAnR0VUJykudGhlbigocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICB0aXRsZTogcmVzLnZhbC5udGl0bGUsXHJcbiAgICAgICAgICBuYW1lOiByZXMudmFsLnB1Ymxpc2hTdWJqZWN0LFxyXG4gICAgICAgICAgdGltZTogcmVzLnZhbC5wdWJsaXNoVGltZS5zcGxpdCgnICcpWzBdLFxyXG4gICAgICAgICAgbnVtOiByZXMudmFsLmNsaWNrQ291bnQsXHJcbiAgICAgICAgICBjb250ZW50OiByZXMudmFsLmNvbnRlbnRcclxuICAgICAgICB9KVxyXG4gICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG4gICAgLy/pobXpnaLmoIfpophcclxuICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7ICAgICBcclxuICAgICAgdGl0bGU6IFwi6K+m5oOFXCJcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIC8v6aG16Z2i5riy5p+T5a6M5oiQXHJcbiAgb25SZWFkeSgpe30sXHJcblxyXG4gIC8v6aG16Z2i5pi+56S6XHJcbiAgb25TaG93KCl7fSxcclxuXHJcbiAgLy/pobXpnaLpmpDol49cclxuICBvbkhpZGUoKXt9LFxyXG5cclxuICAvL+mhtemdouWFs+mXrVxyXG4gIG9uVW5sb2FkKCl7fVxyXG59KVxyXG4iXX0=