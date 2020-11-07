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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3c0luZm8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZXdzSW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBRSxDQUFDLFVBQVUsQ0FBQztBQUNoQyxJQUFJLEtBQUssR0FBSSxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUVqRCxJQUFJLENBQUM7SUFFSCxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUMsRUFBRTtRQUNSLElBQUksRUFBRSxFQUFFO1FBQ1IsSUFBSSxFQUFFLEVBQUU7UUFDUixHQUFHLEVBQUUsRUFBRTtRQUNQLE9BQU8sRUFBRSxFQUFFO0tBQ1o7SUFJRCxNQUFNLEVBQU4sVUFBTyxNQUFVO1FBQWpCLGlCQWlCQztRQWhCQyxJQUFJLEdBQUcsR0FBVSxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQzlDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFPO1lBQ3pDLEtBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsS0FBSyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTTtnQkFDckIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsY0FBYztnQkFDNUIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVU7Z0JBQ3ZCLE9BQU8sRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU87YUFDekIsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxFQUFDLFVBQUMsR0FBTztZQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMscUJBQXFCLENBQUM7WUFDdkIsS0FBSyxFQUFFLElBQUk7U0FDWixDQUFDLENBQUM7SUFDTCxDQUFDO0lBR0QsT0FBTyxnQkFBRyxDQUFDO0lBR1gsTUFBTSxnQkFBRyxDQUFDO0lBR1YsTUFBTSxnQkFBRyxDQUFDO0lBR1YsUUFBUSxnQkFBRyxDQUFDO0NBQ2IsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbmV3c0luZm8udHNcclxuY29uc3QgYXBpID0gZ2V0QXBwKCkuZ2xvYmFsRGF0YTsgICAgICAgICAgICAgICAgICAgICAgLy8g6I635Y+W5bqU55So5a6e5L6LXHJcbmxldCBodHRwcyAgPSByZXF1aXJlKCcuLi8uLi91dGlscy9teVJlcXVlc3QuanMnKTsgICAgIC8v6I635Y+WYWpheOaWueazlVxyXG5cclxuUGFnZSh7XHJcbiAgLy/pobXpnaLmlbDmja5cclxuICBkYXRhOiB7XHJcbiAgICB0aXRsZTonJyxcclxuICAgIG5hbWU6ICcnLFxyXG4gICAgdGltZTogJycsXHJcbiAgICBudW06ICcnLFxyXG4gICAgY29udGVudDogJydcclxuICB9LFxyXG5cclxuXHJcbiAgLy/pobXpnaLliJ3lp4vljJZcclxuICBvbkxvYWQob3B0aW9uOmFueSl7XHJcbiAgICBsZXQgdXJsOnN0cmluZyA9IGFwaS5ub3RpY2UgKyAnLycgKyBvcHRpb24uaWQ7XHJcbiAgICBodHRwcy5yZXF1ZXN0KHVybCwgbnVsbCwgJ0dFVCcpLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgdGl0bGU6IHJlcy52YWwubnRpdGxlLFxyXG4gICAgICAgICAgbmFtZTogcmVzLnZhbC5wdWJsaXNoU3ViamVjdCxcclxuICAgICAgICAgIHRpbWU6IHJlcy52YWwucHVibGlzaFRpbWUuc3BsaXQoJyAnKVswXSxcclxuICAgICAgICAgIG51bTogcmVzLnZhbC5jbGlja0NvdW50LFxyXG4gICAgICAgICAgY29udGVudDogcmVzLnZhbC5jb250ZW50XHJcbiAgICAgICAgfSlcclxuICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxuICAgIC8v6aG16Z2i5qCH6aKYXHJcbiAgICB3eC5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoeyAgICAgXHJcbiAgICAgIHRpdGxlOiBcIuivpuaDhVwiXHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICAvL+mhtemdoua4suafk+WujOaIkFxyXG4gIG9uUmVhZHkoKXt9LFxyXG5cclxuICAvL+mhtemdouaYvuekulxyXG4gIG9uU2hvdygpe30sXHJcblxyXG4gIC8v6aG16Z2i6ZqQ6JePXHJcbiAgb25IaWRlKCl7fSxcclxuXHJcbiAgLy/pobXpnaLlhbPpl61cclxuICBvblVubG9hZCgpe31cclxufSlcclxuXHJcbmV4cG9ydCB7fTtcclxuIl19