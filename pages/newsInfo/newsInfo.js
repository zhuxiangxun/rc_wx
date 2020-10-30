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
                time: res.val.publishTime,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3c0luZm8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZXdzSW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFFLENBQUMsVUFBVSxDQUFDO0FBQ2hDLElBQUksS0FBSyxHQUFJLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0FBRWpELElBQUksQ0FBQztJQUVILElBQUksRUFBRTtRQUNKLEtBQUssRUFBQyxFQUFFO1FBQ1IsSUFBSSxFQUFFLEVBQUU7UUFDUixJQUFJLEVBQUUsRUFBRTtRQUNSLEdBQUcsRUFBRSxFQUFFO1FBQ1AsT0FBTyxFQUFFLEVBQUU7S0FDWjtJQUlELE1BQU0sRUFBTixVQUFPLE1BQVU7UUFBakIsaUJBaUJDO1FBaEJDLElBQUksR0FBRyxHQUFVLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDOUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQU87WUFDekMsS0FBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxLQUFLLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNO2dCQUNyQixJQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFjO2dCQUM1QixJQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXO2dCQUN6QixHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVO2dCQUN2QixPQUFPLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPO2FBQ3pCLENBQUMsQ0FBQTtRQUNOLENBQUMsRUFBQyxVQUFDLEdBQU87WUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1lBQ3ZCLEtBQUssRUFBRSxJQUFJO1NBQ1osQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdELE9BQU8sZ0JBQUcsQ0FBQztJQUdYLE1BQU0sZ0JBQUcsQ0FBQztJQUdWLE1BQU0sZ0JBQUcsQ0FBQztJQUdWLFFBQVEsZ0JBQUcsQ0FBQztDQUNiLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIG5ld3NJbmZvLnRzXHJcbmNvbnN0IGFwaSA9IGdldEFwcCgpLmdsb2JhbERhdGE7ICAgICAgICAgICAgICAgICAgICAgIC8vIOiOt+WPluW6lOeUqOWunuS+i1xyXG5sZXQgaHR0cHMgID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvbXlSZXF1ZXN0LmpzJyk7ICAgICAvL+iOt+WPlmFqYXjmlrnms5VcclxuXHJcblBhZ2Uoe1xyXG4gIC8v6aG16Z2i5pWw5o2uXHJcbiAgZGF0YToge1xyXG4gICAgdGl0bGU6JycsXHJcbiAgICBuYW1lOiAnJyxcclxuICAgIHRpbWU6ICcnLFxyXG4gICAgbnVtOiAnJyxcclxuICAgIGNvbnRlbnQ6ICcnXHJcbiAgfSxcclxuXHJcblxyXG4gIC8v6aG16Z2i5Yid5aeL5YyWXHJcbiAgb25Mb2FkKG9wdGlvbjphbnkpe1xyXG4gICAgbGV0IHVybDpzdHJpbmcgPSBhcGkubm90aWNlICsgJy8nICsgb3B0aW9uLmlkO1xyXG4gICAgaHR0cHMucmVxdWVzdCh1cmwsIG51bGwsICdHRVQnKS50aGVuKChyZXM6YW55KTp2b2lkPT57XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIHRpdGxlOiByZXMudmFsLm50aXRsZSxcclxuICAgICAgICAgIG5hbWU6IHJlcy52YWwucHVibGlzaFN1YmplY3QsXHJcbiAgICAgICAgICB0aW1lOiByZXMudmFsLnB1Ymxpc2hUaW1lLFxyXG4gICAgICAgICAgbnVtOiByZXMudmFsLmNsaWNrQ291bnQsXHJcbiAgICAgICAgICBjb250ZW50OiByZXMudmFsLmNvbnRlbnRcclxuICAgICAgICB9KVxyXG4gICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG4gICAgLy/pobXpnaLmoIfpophcclxuICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7ICAgICBcclxuICAgICAgdGl0bGU6IFwi6K+m5oOFXCJcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIC8v6aG16Z2i5riy5p+T5a6M5oiQXHJcbiAgb25SZWFkeSgpe30sXHJcblxyXG4gIC8v6aG16Z2i5pi+56S6XHJcbiAgb25TaG93KCl7fSxcclxuXHJcbiAgLy/pobXpnaLpmpDol49cclxuICBvbkhpZGUoKXt9LFxyXG5cclxuICAvL+mhtemdouWFs+mXrVxyXG4gIG9uVW5sb2FkKCl7fVxyXG59KVxyXG4iXX0=