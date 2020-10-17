"use strict";
Page({
    data: {
        footerActive: 0,
        icon: {
            normal: 'https://img.yzcdn.cn/vant/user-inactive.png',
            active: 'https://img.yzcdn.cn/vant/user-active.png',
        },
    },
    newsClick: function () {
        wx.navigateTo({
            url: "../news/news"
        });
    },
    onFooterChange: function (event) {
        this.setData({ active: event.detail });
        if (event.detail == 1) {
            wx.navigateTo({
                url: '../map/map'
            });
        }
        else if (event.detail == 2) {
            wx.navigateTo({
                url: '../login/login'
            });
        }
    },
    transactionClick: function () {
        wx.navigateTo({
            url: '../transaction/transaction'
        });
    },
    deviceClick: function () {
        wx.navigateTo({
            url: '../device/device'
        });
    },
    onLoad: function () { },
    onReady: function () { },
    onShow: function () { },
    onHide: function () { },
    onUnload: function () { },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBSUEsSUFBSSxDQUFDO0lBRUgsSUFBSSxFQUFFO1FBQ0osWUFBWSxFQUFFLENBQUM7UUFDZixJQUFJLEVBQUU7WUFDSixNQUFNLEVBQUUsNkNBQTZDO1lBQ3JELE1BQU0sRUFBRSwyQ0FBMkM7U0FDcEQ7S0FDRjtJQUNELFNBQVMsRUFBVDtRQUNFLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUMsY0FBYztTQUNuQixDQUFDLENBQUE7SUFDSixDQUFDO0lBS0QsY0FBYyxFQUFkLFVBQWUsS0FBUztRQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZDLElBQUcsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUM7WUFDbkIsRUFBRSxDQUFDLFVBQVUsQ0FBQztnQkFDWixHQUFHLEVBQUMsWUFBWTthQUNqQixDQUFDLENBQUE7U0FDSDthQUFLLElBQUcsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUM7WUFDekIsRUFBRSxDQUFDLFVBQVUsQ0FBQztnQkFDWixHQUFHLEVBQUMsZ0JBQWdCO2FBQ3JCLENBQUMsQ0FBQTtTQUNIO0lBQ0gsQ0FBQztJQUdELGdCQUFnQixFQUFoQjtRQUNFLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUMsNEJBQTRCO1NBQ2pDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxXQUFXLEVBQVg7UUFDRSxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFDLGtCQUFrQjtTQUN2QixDQUFDLENBQUE7SUFDSixDQUFDO0lBR0QsTUFBTSxnQkFBRyxDQUFDO0lBR1YsT0FBTyxnQkFBRyxDQUFDO0lBR1gsTUFBTSxnQkFBRyxDQUFDO0lBR1YsTUFBTSxnQkFBRyxDQUFDO0lBR1YsUUFBUSxnQkFBRyxDQUFDO0NBQ2IsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW5kZXgudHNcclxuLy8g6I635Y+W5bqU55So5a6e5L6LXHJcbi8vY29uc3QgYXBwID0gZ2V0QXBwKCk7XHJcblxyXG5QYWdlKHtcclxuICAvL+mhtemdouaVsOaNrlxyXG4gIGRhdGE6IHtcclxuICAgIGZvb3RlckFjdGl2ZTogMCxcclxuICAgIGljb246IHtcclxuICAgICAgbm9ybWFsOiAnaHR0cHM6Ly9pbWcueXpjZG4uY24vdmFudC91c2VyLWluYWN0aXZlLnBuZycsXHJcbiAgICAgIGFjdGl2ZTogJ2h0dHBzOi8vaW1nLnl6Y2RuLmNuL3ZhbnQvdXNlci1hY3RpdmUucG5nJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBuZXdzQ2xpY2soKTp2b2lkIHtcclxuICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICB1cmw6XCIuLi9uZXdzL25ld3NcIlxyXG4gICAgfSlcclxuICB9LFxyXG4gIC8v5L+h5oGv5ZKo6K+i6Lez6L2sXHJcbiBcclxuXHJcbiAgLy/lupXpg6joj5zljZVcclxuICBvbkZvb3RlckNoYW5nZShldmVudDphbnkpOnZvaWQge1xyXG4gICAgdGhpcy5zZXREYXRhKHsgYWN0aXZlOiBldmVudC5kZXRhaWwgfSk7XHJcbiAgICBpZihldmVudC5kZXRhaWwgPT0gMSl7XHJcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybDonLi4vbWFwL21hcCdcclxuICAgICAgfSlcclxuICAgIH1lbHNlIGlmKGV2ZW50LmRldGFpbCA9PSAyKXtcclxuICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgdXJsOicuLi9sb2dpbi9sb2dpbidcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvL+aIkeimgeS6pOaYk1xyXG4gIHRyYW5zYWN0aW9uQ2xpY2soKTp2b2lke1xyXG4gICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgIHVybDonLi4vdHJhbnNhY3Rpb24vdHJhbnNhY3Rpb24nXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgLy/miJHopoHku6rlmajorr7lpIdcclxuICBkZXZpY2VDbGljaygpOnZvaWR7XHJcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgdXJsOicuLi9kZXZpY2UvZGV2aWNlJ1xyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvL+mhtemdouWIneWni+WMllxyXG4gIG9uTG9hZCgpe30sXHJcblxyXG4gIC8v6aG16Z2i5riy5p+T5a6M5oiQXHJcbiAgb25SZWFkeSgpe30sXHJcblxyXG4gIC8v6aG16Z2i5pi+56S6XHJcbiAgb25TaG93KCl7fSxcclxuXHJcbiAgLy/pobXpnaLpmpDol49cclxuICBvbkhpZGUoKXt9LFxyXG5cclxuICAvL+mhtemdouWFs+mXrVxyXG4gIG9uVW5sb2FkKCl7fSxcclxufSlcclxuIl19