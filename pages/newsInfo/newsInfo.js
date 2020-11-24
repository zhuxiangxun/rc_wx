"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3c0luZm8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZXdzSW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBRSxDQUFDLFVBQVUsQ0FBQztBQUNoQyxJQUFJLEtBQUssR0FBSSxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUVqRCxJQUFJLENBQUM7SUFFSCxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUMsRUFBRTtRQUNSLElBQUksRUFBRSxFQUFFO1FBQ1IsSUFBSSxFQUFFLEVBQUU7UUFDUixHQUFHLEVBQUUsRUFBRTtRQUNQLE9BQU8sRUFBRSxFQUFFO0tBQ1o7SUFFRCxpQkFBaUIsRUFBQyxVQUFDLEdBQU87UUFDeEIsSUFBSSxHQUFHLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUV6QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN6QjtRQUNELE9BQU87WUFDTCxLQUFLLEVBQUUsY0FBYztZQUNyQixJQUFJLEVBQUUsa0JBQWtCO1lBQ3hCLFFBQVEsRUFBRSxFQUFFO1NBQ2IsQ0FBQTtJQUNILENBQUM7SUFFRCxlQUFlLEVBQUM7UUFDZCxPQUFPO1lBQ0wsS0FBSyxFQUFFLGNBQWM7WUFDckIsS0FBSyxFQUFFLEVBQUU7WUFDVCxRQUFRLEVBQUUsRUFBRTtTQUNiLENBQUE7SUFDSCxDQUFDO0lBR0QsTUFBTSxFQUFOLFVBQU8sTUFBVTtRQUFqQixpQkFpQkM7UUFoQkMsSUFBSSxHQUFHLEdBQVUsR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUM5QyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBTztZQUN6QyxLQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLEtBQUssRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU07Z0JBQ3JCLElBQUksRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLGNBQWM7Z0JBQzVCLElBQUksRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVO2dCQUN2QixPQUFPLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPO2FBQ3pCLENBQUMsQ0FBQTtRQUNOLENBQUMsRUFBQyxVQUFDLEdBQU87WUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1lBQ3ZCLEtBQUssRUFBRSxJQUFJO1NBQ1osQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdELE9BQU8sZ0JBQUcsQ0FBQztJQUdYLE1BQU0sZ0JBQUcsQ0FBQztJQUdWLE1BQU0sZ0JBQUcsQ0FBQztJQUdWLFFBQVEsZ0JBQUcsQ0FBQztDQUNiLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIG5ld3NJbmZvLnRzXHJcbmNvbnN0IGFwaSA9IGdldEFwcCgpLmdsb2JhbERhdGE7ICAgICAgICAgICAgICAgICAgICAgIC8vIOiOt+WPluW6lOeUqOWunuS+i1xyXG5sZXQgaHR0cHMgID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvbXlSZXF1ZXN0LmpzJyk7ICAgICAvL+iOt+WPlmFqYXjmlrnms5VcclxuXHJcblBhZ2Uoe1xyXG4gIC8v6aG16Z2i5pWw5o2uXHJcbiAgZGF0YToge1xyXG4gICAgdGl0bGU6JycsXHJcbiAgICBuYW1lOiAnJyxcclxuICAgIHRpbWU6ICcnLFxyXG4gICAgbnVtOiAnJyxcclxuICAgIGNvbnRlbnQ6ICcnXHJcbiAgfSxcclxuXHJcbiAgb25TaGFyZUFwcE1lc3NhZ2U6KHJlczphbnkpOmFueT0+IHsgIC8v5Y+R6YCB57uZ5pyL5Y+LXHJcbiAgICBpZiAocmVzLmZyb20gPT09ICdidXR0b24nKSB7XHJcbiAgICAgIC8vIOadpeiHqumhtemdouWGhei9rOWPkeaMiemSrlxyXG4gICAgICBjb25zb2xlLmxvZyhyZXMudGFyZ2V0KTtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRpdGxlOiAn6Z2S5bKb5Lq65omN5Yib5paw5Yib5Lia5bmz5Y+w5Zyw5Zu+JyxcclxuICAgICAgcGF0aDogJy9wYWdlcy9ob21lL2hvbWUnLFxyXG4gICAgICBpbWFnZVVybDogJydcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBvblNoYXJlVGltZWxpbmU6KCk6YW55PT4geyAgLy/liIbkuqtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRpdGxlOiAn6Z2S5bKb5Lq65omN5Yib5paw5Yib5Lia5bmz5Y+w5Zyw5Zu+JyxcclxuICAgICAgcXVlcnk6IHt9LFxyXG4gICAgICBpbWFnZVVybDogJydcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvL+mhtemdouWIneWni+WMllxyXG4gIG9uTG9hZChvcHRpb246YW55KXtcclxuICAgIGxldCB1cmw6c3RyaW5nID0gYXBpLm5vdGljZSArICcvJyArIG9wdGlvbi5pZDtcclxuICAgIGh0dHBzLnJlcXVlc3QodXJsLCBudWxsLCAnR0VUJykudGhlbigocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICB0aXRsZTogcmVzLnZhbC5udGl0bGUsXHJcbiAgICAgICAgICBuYW1lOiByZXMudmFsLnB1Ymxpc2hTdWJqZWN0LFxyXG4gICAgICAgICAgdGltZTogcmVzLnZhbC5wdWJsaXNoVGltZS5zcGxpdCgnICcpWzBdLFxyXG4gICAgICAgICAgbnVtOiByZXMudmFsLmNsaWNrQ291bnQsXHJcbiAgICAgICAgICBjb250ZW50OiByZXMudmFsLmNvbnRlbnRcclxuICAgICAgICB9KVxyXG4gICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG4gICAgLy/pobXpnaLmoIfpophcclxuICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7ICAgICBcclxuICAgICAgdGl0bGU6IFwi6K+m5oOFXCJcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIC8v6aG16Z2i5riy5p+T5a6M5oiQXHJcbiAgb25SZWFkeSgpe30sXHJcblxyXG4gIC8v6aG16Z2i5pi+56S6XHJcbiAgb25TaG93KCl7fSxcclxuXHJcbiAgLy/pobXpnaLpmpDol49cclxuICBvbkhpZGUoKXt9LFxyXG5cclxuICAvL+mhtemdouWFs+mXrVxyXG4gIG9uVW5sb2FkKCl7fVxyXG59KVxyXG5cclxuZXhwb3J0IHt9O1xyXG4iXX0=