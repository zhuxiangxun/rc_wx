"use strict";
Page({
    data: {
        positionUrl: '../../images/address.png',
        active: 0
    },
    smallTalk: function () {
        wx.navigateTo({
            url: "../smallTalk/smallTalk"
        });
    },
    navigation: function () {
        var key = 'AWYBZ-C3IWO-5TIWD-SEPVW-KQMOF-RXBAV';
        var endPoint = JSON.stringify({
            'name': '石老人花园',
            'latitude': 36.098101,
            'longitude': 120.497539
        });
        wx.navigateTo({
            url: 'plugin://routePlan/index?key=' + key + '&referer=才赋云' + '&endPoint=' + endPoint
        });
    },
    download: function () {
    },
    onLoad: function () {
        wx.setNavigationBarTitle({
            title: "地图标记详情"
        });
    },
    onReady: function () { },
    onShow: function () { },
    onHide: function () { },
    onUnload: function () { }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwQ3hEZXRhaWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYXBDeERldGFpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBSUEsSUFBSSxDQUFDO0lBRUgsSUFBSSxFQUFFO1FBQ0osV0FBVyxFQUFFLDBCQUEwQjtRQUN2QyxNQUFNLEVBQUUsQ0FBQztLQUNWO0lBR0QsU0FBUyxFQUFUO1FBQ0UsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBQyx3QkFBd0I7U0FDN0IsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUdELFVBQVUsRUFBVjtRQUNFLElBQUksR0FBRyxHQUFVLHFDQUFxQyxDQUFDO1FBQ3ZELElBQUksUUFBUSxHQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDaEMsTUFBTSxFQUFFLE9BQU87WUFDZixVQUFVLEVBQUUsU0FBUztZQUNyQixXQUFXLEVBQUUsVUFBVTtTQUN4QixDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLCtCQUErQixHQUFHLEdBQUcsR0FBRyxjQUFjLEdBQUcsWUFBWSxHQUFHLFFBQVE7U0FDdEYsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdELFFBQVEsRUFBUjtJQUVBLENBQUM7SUFHRCxNQUFNO1FBRUosRUFBRSxDQUFDLHFCQUFxQixDQUFDO1lBQ3ZCLEtBQUssRUFBRSxRQUFRO1NBQ2hCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFHRCxPQUFPLGdCQUFHLENBQUM7SUFHWCxNQUFNLGdCQUFHLENBQUM7SUFHVixNQUFNLGdCQUFHLENBQUM7SUFHVixRQUFRLGdCQUFHLENBQUM7Q0FDYixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBtYXBDeERldGFpbC50c1xyXG4vLyDojrflj5blupTnlKjlrp7kvotcclxuLy9jb25zdCBhcHAgPSBnZXRBcHAoKTtcclxuXHJcblBhZ2Uoe1xyXG4gIC8v6aG16Z2i5pWw5o2uXHJcbiAgZGF0YToge1xyXG4gICAgcG9zaXRpb25Vcmw6ICcuLi8uLi9pbWFnZXMvYWRkcmVzcy5wbmcnLCAgICAvL+WbvueJh1xyXG4gICAgYWN0aXZlOiAwXHJcbiAgfSxcclxuXHJcbiAgLy/nur/kuIrmgbDosIhcclxuICBzbWFsbFRhbGsoKTp2b2lke1xyXG4gICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgIHVybDpcIi4uL3NtYWxsVGFsay9zbWFsbFRhbGtcIlxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvL+i3r+e6v+WvvOiIqlxyXG4gIG5hdmlnYXRpb24oKTp2b2lke1xyXG4gICAgbGV0IGtleTpzdHJpbmcgPSAnQVdZQlotQzNJV08tNVRJV0QtU0VQVlctS1FNT0YtUlhCQVYnOyAgLy/kvb/nlKjlnKjohb7orq/kvY3nva7mnI3liqHnlLPor7fnmoRrZXlcclxuICAgIGxldCBlbmRQb2ludDphbnkgPSBKU09OLnN0cmluZ2lmeSh7ICAvL+e7iOeCuVxyXG4gICAgICAnbmFtZSc6ICfnn7PogIHkurroirHlm60nLFxyXG4gICAgICAnbGF0aXR1ZGUnOiAzNi4wOTgxMDEsXHJcbiAgICAgICdsb25naXR1ZGUnOiAxMjAuNDk3NTM5XHJcbiAgICB9KTtcclxuXHJcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgdXJsOiAncGx1Z2luOi8vcm91dGVQbGFuL2luZGV4P2tleT0nICsga2V5ICsgJyZyZWZlcmVyPeaJjei1i+S6kScgKyAnJmVuZFBvaW50PScgKyBlbmRQb2ludFxyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgLy/pmYTku7bkuIvovb1cclxuICBkb3dubG9hZCgpOnZvaWR7XHJcbiAgICBcclxuICB9LFxyXG5cclxuICAvL+mhtemdouWIneWni+WMllxyXG4gIG9uTG9hZCgpe1xyXG4gICAgLy/pobXpnaLmoIfpophcclxuICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7ICAgICBcclxuICAgICAgdGl0bGU6IFwi5Zyw5Zu+5qCH6K6w6K+m5oOFXCJcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIC8v6aG16Z2i5riy5p+T5a6M5oiQXHJcbiAgb25SZWFkeSgpe30sXHJcblxyXG4gIC8v6aG16Z2i5pi+56S6XHJcbiAgb25TaG93KCl7fSxcclxuXHJcbiAgLy/pobXpnaLpmpDol49cclxuICBvbkhpZGUoKXt9LFxyXG5cclxuICAvL+mhtemdouWFs+mXrVxyXG4gIG9uVW5sb2FkKCl7fVxyXG59KVxyXG4iXX0=