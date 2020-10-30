"use strict";
Page({
    data: {
        url: '',
    },
    onLoad: function (option) {
        var token = wx.getStorageSync('token');
        if (option.name == '创新') {
            console.log(option.name);
            this.setData({
                url: 'http://wangxu.eyunhan.com/cfy/index.html#/xcXcxPlatformDemo?token=' + token + '&id=' + option.id
            });
        }
        wx.setNavigationBarTitle({
            title: "地图标记详情"
        });
    },
    onReady: function () { },
    onShow: function () { },
    onHide: function () { },
    onUnload: function () { }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwRGV0YWlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFwRGV0YWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFJQSxJQUFJLENBQUM7SUFFSCxJQUFJLEVBQUU7UUFDTCxHQUFHLEVBQUUsRUFBRTtLQUNQO0lBT0QsTUFBTSxFQUFOLFVBQU8sTUFBVTtRQUNmLElBQUksS0FBSyxHQUFVLEVBQUUsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUMsSUFBRyxNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksRUFBQztZQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLEdBQUcsRUFBRSxvRUFBb0UsR0FBRyxLQUFLLEdBQUcsTUFBTSxHQUFHLE1BQU0sQ0FBQyxFQUFFO2FBQ3ZHLENBQUMsQ0FBQTtTQUNIO1FBR0QsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1lBQ3ZCLEtBQUssRUFBRSxRQUFRO1NBQ2hCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFHRCxPQUFPLGdCQUFHLENBQUM7SUFHWCxNQUFNLGdCQUFHLENBQUM7SUFHVixNQUFNLGdCQUFHLENBQUM7SUFHVixRQUFRLGdCQUFHLENBQUM7Q0FDYixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBtYXBEZXRhaWwudHNcclxuLy8g6I635Y+W5bqU55So5a6e5L6LXHJcbi8vY29uc3QgYXBwID0gZ2V0QXBwKCk7XHJcblxyXG5QYWdlKHtcclxuICAvL+mhtemdouaVsOaNrlxyXG4gIGRhdGE6IHtcclxuICAgdXJsOiAnJyxcclxuICB9LFxyXG5cclxuIFxyXG5cclxuXHJcblxyXG4gIC8v6aG16Z2i5Yid5aeL5YyWXHJcbiAgb25Mb2FkKG9wdGlvbjphbnkpe1xyXG4gICAgbGV0IHRva2VuOnN0cmluZyA9IHd4LmdldFN0b3JhZ2VTeW5jKCd0b2tlbicpO1xyXG4gICAgaWYob3B0aW9uLm5hbWUgPT0gJ+WIm+aWsCcpe1xyXG4gICAgICBjb25zb2xlLmxvZyhvcHRpb24ubmFtZSlcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICB1cmw6ICdodHRwOi8vd2FuZ3h1LmV5dW5oYW4uY29tL2NmeS9pbmRleC5odG1sIy94Y1hjeFBsYXRmb3JtRGVtbz90b2tlbj0nICsgdG9rZW4gKyAnJmlkPScgKyBvcHRpb24uaWRcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvL+mhtemdouagh+mimFxyXG4gICAgd3guc2V0TmF2aWdhdGlvbkJhclRpdGxlKHsgICAgIFxyXG4gICAgICB0aXRsZTogXCLlnLDlm77moIforrDor6bmg4VcIlxyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgLy/pobXpnaLmuLLmn5PlrozmiJBcclxuICBvblJlYWR5KCl7fSxcclxuXHJcbiAgLy/pobXpnaLmmL7npLpcclxuICBvblNob3coKXt9LFxyXG5cclxuICAvL+mhtemdoumakOiXj1xyXG4gIG9uSGlkZSgpe30sXHJcblxyXG4gIC8v6aG16Z2i5YWz6ZetXHJcbiAgb25VbmxvYWQoKXt9XHJcbn0pXHJcbiJdfQ==