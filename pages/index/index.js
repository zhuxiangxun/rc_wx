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
    },
    onLoad: function () { },
    onReady: function () { },
    onShow: function () { },
    onHide: function () { },
    onUnload: function () { },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBSUEsSUFBSSxDQUFDO0lBRUgsSUFBSSxFQUFFO1FBQ0osWUFBWSxFQUFFLENBQUM7UUFDZixJQUFJLEVBQUU7WUFDSixNQUFNLEVBQUUsNkNBQTZDO1lBQ3JELE1BQU0sRUFBRSwyQ0FBMkM7U0FDcEQ7S0FDRjtJQUNELFNBQVMsRUFBVDtRQUNFLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUMsY0FBYztTQUNuQixDQUFDLENBQUE7SUFDSixDQUFDO0lBS0QsY0FBYyxFQUFkLFVBQWUsS0FBUztRQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFHRCxNQUFNLGdCQUFHLENBQUM7SUFHVixPQUFPLGdCQUFHLENBQUM7SUFHWCxNQUFNLGdCQUFHLENBQUM7SUFHVixNQUFNLGdCQUFHLENBQUM7SUFHVixRQUFRLGdCQUFHLENBQUM7Q0FDYixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbmRleC50c1xyXG4vLyDojrflj5blupTnlKjlrp7kvotcclxuLy9jb25zdCBhcHAgPSBnZXRBcHAoKTtcclxuXHJcblBhZ2Uoe1xyXG4gIC8v6aG16Z2i5pWw5o2uXHJcbiAgZGF0YToge1xyXG4gICAgZm9vdGVyQWN0aXZlOiAwLFxyXG4gICAgaWNvbjoge1xyXG4gICAgICBub3JtYWw6ICdodHRwczovL2ltZy55emNkbi5jbi92YW50L3VzZXItaW5hY3RpdmUucG5nJyxcclxuICAgICAgYWN0aXZlOiAnaHR0cHM6Ly9pbWcueXpjZG4uY24vdmFudC91c2VyLWFjdGl2ZS5wbmcnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIG5ld3NDbGljaygpOnZvaWQge1xyXG4gICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgIHVybDpcIi4uL25ld3MvbmV3c1wiXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgLy/kv6Hmga/lkqjor6Lot7PovaxcclxuIFxyXG5cclxuICAvL+W6lemDqOiPnOWNleaXtumXtFxyXG4gIG9uRm9vdGVyQ2hhbmdlKGV2ZW50OmFueSk6dm9pZCB7XHJcbiAgICB0aGlzLnNldERhdGEoeyBhY3RpdmU6IGV2ZW50LmRldGFpbCB9KTtcclxuICB9LFxyXG5cclxuICAvL+mhtemdouWIneWni+WMllxyXG4gIG9uTG9hZCgpe30sXHJcblxyXG4gIC8v6aG16Z2i5riy5p+T5a6M5oiQXHJcbiAgb25SZWFkeSgpe30sXHJcblxyXG4gIC8v6aG16Z2i5pi+56S6XHJcbiAgb25TaG93KCl7fSxcclxuXHJcbiAgLy/pobXpnaLpmpDol49cclxuICBvbkhpZGUoKXt9LFxyXG5cclxuICAvL+mhtemdouWFs+mXrVxyXG4gIG9uVW5sb2FkKCl7fSxcclxufSlcclxuIl19