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
        content: '',
        files: []
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
    fileFn: function () {
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
                content: res.val.content,
                files: res.val.files
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3c0luZm8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZXdzSW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBRSxDQUFDLFVBQVUsQ0FBQztBQUNoQyxJQUFJLEtBQUssR0FBSSxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUVqRCxJQUFJLENBQUM7SUFFSCxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUMsRUFBRTtRQUNSLElBQUksRUFBRSxFQUFFO1FBQ1IsSUFBSSxFQUFFLEVBQUU7UUFDUixHQUFHLEVBQUUsRUFBRTtRQUNQLE9BQU8sRUFBRSxFQUFFO1FBQ1gsS0FBSyxFQUFDLEVBQUU7S0FDVDtJQUVELGlCQUFpQixFQUFDLFVBQUMsR0FBTztRQUN4QixJQUFJLEdBQUcsQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBRXpCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3pCO1FBQ0QsT0FBTztZQUNMLEtBQUssRUFBRSxjQUFjO1lBQ3JCLElBQUksRUFBRSxrQkFBa0I7WUFDeEIsUUFBUSxFQUFFLEVBQUU7U0FDYixDQUFBO0lBQ0gsQ0FBQztJQUVELGVBQWUsRUFBQztRQUNkLE9BQU87WUFDTCxLQUFLLEVBQUUsY0FBYztZQUNyQixLQUFLLEVBQUUsRUFBRTtZQUNULFFBQVEsRUFBRSxFQUFFO1NBQ2IsQ0FBQTtJQUNILENBQUM7SUFFRCxNQUFNLEVBQU47SUFPQSxDQUFDO0lBSUQsTUFBTSxFQUFOLFVBQU8sTUFBVTtRQUFqQixpQkFrQkM7UUFqQkMsSUFBSSxHQUFHLEdBQVUsR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUM5QyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBTztZQUN6QyxLQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLEtBQUssRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU07Z0JBQ3JCLElBQUksRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLGNBQWM7Z0JBQzVCLElBQUksRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVO2dCQUN2QixPQUFPLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPO2dCQUN4QixLQUFLLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLO2FBQ3JCLENBQUMsQ0FBQTtRQUNOLENBQUMsRUFBQyxVQUFDLEdBQU87WUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1lBQ3ZCLEtBQUssRUFBRSxJQUFJO1NBQ1osQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdELE9BQU8sZ0JBQUcsQ0FBQztJQUdYLE1BQU0sZ0JBQUcsQ0FBQztJQUdWLE1BQU0sZ0JBQUcsQ0FBQztJQUdWLFFBQVEsZ0JBQUcsQ0FBQztDQUNiLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIG5ld3NJbmZvLnRzXHJcbmNvbnN0IGFwaSA9IGdldEFwcCgpLmdsb2JhbERhdGE7ICAgICAgICAgICAgICAgICAgICAgIC8vIOiOt+WPluW6lOeUqOWunuS+i1xyXG5sZXQgaHR0cHMgID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvbXlSZXF1ZXN0LmpzJyk7ICAgICAvL+iOt+WPlmFqYXjmlrnms5VcclxuXHJcblBhZ2Uoe1xyXG4gIC8v6aG16Z2i5pWw5o2uXHJcbiAgZGF0YToge1xyXG4gICAgdGl0bGU6JycsXHJcbiAgICBuYW1lOiAnJyxcclxuICAgIHRpbWU6ICcnLFxyXG4gICAgbnVtOiAnJyxcclxuICAgIGNvbnRlbnQ6ICcnLFxyXG4gICAgZmlsZXM6W11cclxuICB9LFxyXG5cclxuICBvblNoYXJlQXBwTWVzc2FnZToocmVzOmFueSk6YW55PT4geyAgLy/lj5HpgIHnu5nmnIvlj4tcclxuICAgIGlmIChyZXMuZnJvbSA9PT0gJ2J1dHRvbicpIHtcclxuICAgICAgLy8g5p2l6Ieq6aG16Z2i5YaF6L2s5Y+R5oyJ6ZKuXHJcbiAgICAgIGNvbnNvbGUubG9nKHJlcy50YXJnZXQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdGl0bGU6ICfpnZLlspvkurrmiY3liJvmlrDliJvkuJrlubPlj7DlnLDlm74nLFxyXG4gICAgICBwYXRoOiAnL3BhZ2VzL2hvbWUvaG9tZScsXHJcbiAgICAgIGltYWdlVXJsOiAnJ1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIG9uU2hhcmVUaW1lbGluZTooKTphbnk9PiB7ICAvL+WIhuS6q1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdGl0bGU6ICfpnZLlspvkurrmiY3liJvmlrDliJvkuJrlubPlj7DlnLDlm74nLFxyXG4gICAgICBxdWVyeToge30sXHJcbiAgICAgIGltYWdlVXJsOiAnJ1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGZpbGVGbigpOnZvaWR7ICAvL+mZhOS7tuS4i+i9vVxyXG4gICAgLy8gdGhpcy5kYXRhLmZpbGVzLmZvckVhY2goKGl0ZW06YW55KTp2b2lkPT57XHJcbiAgICAvLyAgIHd4LmRvd25sb2FkRmlsZSh7XHJcbiAgICAvLyAgICAgdXJsOiBhcGkuZmlsZVVybCArIGl0ZW0uZmlsZVBhdGgsIC8v5LuF5Li656S65L6L77yM5bm26Z2e55yf5a6e55qE6LWE5rqQXHJcbiAgICAvLyAgICAgc3VjY2VzcyAoKSB7fVxyXG4gICAgLy8gICB9KVxyXG4gICAgLy8gfSlcclxuICB9LFxyXG5cclxuXHJcbiAgLy/pobXpnaLliJ3lp4vljJZcclxuICBvbkxvYWQob3B0aW9uOmFueSl7XHJcbiAgICBsZXQgdXJsOnN0cmluZyA9IGFwaS5ub3RpY2UgKyAnLycgKyBvcHRpb24uaWQ7XHJcbiAgICBodHRwcy5yZXF1ZXN0KHVybCwgbnVsbCwgJ0dFVCcpLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgdGl0bGU6IHJlcy52YWwubnRpdGxlLFxyXG4gICAgICAgICAgbmFtZTogcmVzLnZhbC5wdWJsaXNoU3ViamVjdCxcclxuICAgICAgICAgIHRpbWU6IHJlcy52YWwucHVibGlzaFRpbWUuc3BsaXQoJyAnKVswXSxcclxuICAgICAgICAgIG51bTogcmVzLnZhbC5jbGlja0NvdW50LFxyXG4gICAgICAgICAgY29udGVudDogcmVzLnZhbC5jb250ZW50LFxyXG4gICAgICAgICAgZmlsZXM6IHJlcy52YWwuZmlsZXNcclxuICAgICAgICB9KVxyXG4gICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG4gICAgLy/pobXpnaLmoIfpophcclxuICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7ICAgICBcclxuICAgICAgdGl0bGU6IFwi6K+m5oOFXCJcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIC8v6aG16Z2i5riy5p+T5a6M5oiQXHJcbiAgb25SZWFkeSgpe30sXHJcblxyXG4gIC8v6aG16Z2i5pi+56S6XHJcbiAgb25TaG93KCl7fSxcclxuXHJcbiAgLy/pobXpnaLpmpDol49cclxuICBvbkhpZGUoKXt9LFxyXG5cclxuICAvL+mhtemdouWFs+mXrVxyXG4gIG9uVW5sb2FkKCl7fVxyXG59KVxyXG5cclxuZXhwb3J0IHt9O1xyXG4iXX0=