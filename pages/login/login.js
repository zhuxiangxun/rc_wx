"use strict";
Page({
    data: {
        footerActive: 2,
        icon: {
            normal: 'https://img.yzcdn.cn/vant/user-inactive.png',
            active: 'https://img.yzcdn.cn/vant/user-active.png',
        }
    },
    showPopup: function () {
        console.log(111);
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
        else {
            wx.navigateTo({
                url: '../index/index'
            });
        }
    },
    onLoad: function () {
        wx.setNavigationBarTitle({
            title: "我的"
        });
    },
    onReady: function () { },
    onShow: function () { },
    onHide: function () { },
    onUnload: function () { }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBSUEsSUFBSSxDQUFDO0lBRUgsSUFBSSxFQUFFO1FBQ0osWUFBWSxFQUFFLENBQUM7UUFDZixJQUFJLEVBQUU7WUFDSixNQUFNLEVBQUUsNkNBQTZDO1lBQ3JELE1BQU0sRUFBRSwyQ0FBMkM7U0FDcEQ7S0FDRjtJQUdELFNBQVMsRUFBVDtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDbEIsQ0FBQztJQUdELGNBQWMsRUFBZCxVQUFlLEtBQVM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUN2QyxJQUFHLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFDO1lBQ25CLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ1osR0FBRyxFQUFDLFlBQVk7YUFDakIsQ0FBQyxDQUFBO1NBQ0g7YUFBSyxJQUFHLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFDO1lBQ3pCLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ1osR0FBRyxFQUFDLGdCQUFnQjthQUNyQixDQUFDLENBQUE7U0FDSDthQUFJO1lBQ0gsRUFBRSxDQUFDLFVBQVUsQ0FBQztnQkFDWixHQUFHLEVBQUMsZ0JBQWdCO2FBQ3JCLENBQUMsQ0FBQTtTQUNIO0lBQ0gsQ0FBQztJQUdELE1BQU07UUFDSixFQUFFLENBQUMscUJBQXFCLENBQUM7WUFDdkIsS0FBSyxFQUFFLElBQUk7U0FDWixDQUFDLENBQUE7SUFDSixDQUFDO0lBR0QsT0FBTyxnQkFBRyxDQUFDO0lBR1gsTUFBTSxnQkFBRyxDQUFDO0lBR1YsTUFBTSxnQkFBRyxDQUFDO0lBR1YsUUFBUSxnQkFBRyxDQUFDO0NBQ2IsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbG9naW4udHNcclxuLy8g6I635Y+W5bqU55So5a6e5L6LXHJcbi8vY29uc3QgYXBwID0gZ2V0QXBwKCk7XHJcblxyXG5QYWdlKHtcclxuICAvL+mhtemdouaVsOaNrlxyXG4gIGRhdGE6IHtcclxuICAgIGZvb3RlckFjdGl2ZTogMixcclxuICAgIGljb246IHtcclxuICAgICAgbm9ybWFsOiAnaHR0cHM6Ly9pbWcueXpjZG4uY24vdmFudC91c2VyLWluYWN0aXZlLnBuZycsXHJcbiAgICAgIGFjdGl2ZTogJ2h0dHBzOi8vaW1nLnl6Y2RuLmNuL3ZhbnQvdXNlci1hY3RpdmUucG5nJyxcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvL+S4quS6uuS/oeaBr1xyXG4gIHNob3dQb3B1cCgpOnZvaWQge1xyXG4gICAgY29uc29sZS5sb2coMTExKVxyXG4gIH0sXHJcblxyXG4gIC8v5bqV6YOo6I+c5Y2VXHJcbiAgb25Gb290ZXJDaGFuZ2UoZXZlbnQ6YW55KTp2b2lkIHtcclxuICAgIHRoaXMuc2V0RGF0YSh7IGFjdGl2ZTogZXZlbnQuZGV0YWlsIH0pO1xyXG4gICAgaWYoZXZlbnQuZGV0YWlsID09IDEpe1xyXG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6Jy4uL21hcC9tYXAnXHJcbiAgICAgIH0pXHJcbiAgICB9ZWxzZSBpZihldmVudC5kZXRhaWwgPT0gMil7XHJcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybDonLi4vbG9naW4vbG9naW4nXHJcbiAgICAgIH0pXHJcbiAgICB9ZWxzZXtcclxuICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgdXJsOicuLi9pbmRleC9pbmRleCdcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvL+mhtemdouWIneWni+WMllxyXG4gIG9uTG9hZCgpe1xyXG4gICAgd3guc2V0TmF2aWdhdGlvbkJhclRpdGxlKHsgICAgIFxyXG4gICAgICB0aXRsZTogXCLmiJHnmoRcIlxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvL+mhtemdoua4suafk+WujOaIkFxyXG4gIG9uUmVhZHkoKXt9LFxyXG5cclxuICAvL+mhtemdouaYvuekulxyXG4gIG9uU2hvdygpe30sXHJcblxyXG4gIC8v6aG16Z2i6ZqQ6JePXHJcbiAgb25IaWRlKCl7fSxcclxuXHJcbiAgLy/pobXpnaLlhbPpl61cclxuICBvblVubG9hZCgpe31cclxufSlcclxuIl19