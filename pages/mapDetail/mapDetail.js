"use strict";
Page({
    data: {
        longitude: 120.484262,
        latitude: 36.107834,
        scale: 15,
        markers: [
            {
                id: 0,
                longitude: 120.484262,
                latitude: 36.107834,
                iconPath: '../../images/position.png',
                width: 30,
                height: 30,
                callout: {
                    content: '位置1',
                    color: 'red',
                    fontSize: '24rpx',
                    bgColor: '#FFF',
                    padding: 5,
                    borderRadius: 4,
                    borderColor: '#CCC',
                    borderWidth: 1,
                    display: 'ALWAYS'
                }
            }
        ],
        positionUrl: '../../images/position.png',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwRGV0YWlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFwRGV0YWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFJQSxJQUFJLENBQUM7SUFFSCxJQUFJLEVBQUU7UUFDSixTQUFTLEVBQUUsVUFBVTtRQUNyQixRQUFRLEVBQUUsU0FBUztRQUNuQixLQUFLLEVBQUUsRUFBRTtRQUNULE9BQU8sRUFBQztZQUNOO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLFNBQVMsRUFBRSxVQUFVO2dCQUNyQixRQUFRLEVBQUUsU0FBUztnQkFDbkIsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsTUFBTSxFQUFFLEVBQUU7Z0JBQ1YsT0FBTyxFQUFFO29CQUNQLE9BQU8sRUFBRSxLQUFLO29CQUNkLEtBQUssRUFBRSxLQUFLO29CQUNaLFFBQVEsRUFBRSxPQUFPO29CQUNqQixPQUFPLEVBQUUsTUFBTTtvQkFDZixPQUFPLEVBQUUsQ0FBQztvQkFDVixZQUFZLEVBQUUsQ0FBQztvQkFDZixXQUFXLEVBQUUsTUFBTTtvQkFDbkIsV0FBVyxFQUFFLENBQUM7b0JBQ2QsT0FBTyxFQUFFLFFBQVE7aUJBQ2xCO2FBQ0Y7U0FDRjtRQUNELFdBQVcsRUFBRSwyQkFBMkI7UUFDeEMsTUFBTSxFQUFFLENBQUM7S0FDVjtJQUdELFNBQVMsRUFBVDtRQUNFLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUMsd0JBQXdCO1NBQzdCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFHRCxVQUFVLEVBQVY7UUFDRSxJQUFJLEdBQUcsR0FBVSxxQ0FBcUMsQ0FBQztRQUN2RCxJQUFJLFFBQVEsR0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ2hDLE1BQU0sRUFBRSxPQUFPO1lBQ2YsVUFBVSxFQUFFLFNBQVM7WUFDckIsV0FBVyxFQUFFLFVBQVU7U0FDeEIsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSwrQkFBK0IsR0FBRyxHQUFHLEdBQUcsY0FBYyxHQUFHLFlBQVksR0FBRyxRQUFRO1NBQ3RGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFHRCxRQUFRLEVBQVI7SUFFQSxDQUFDO0lBR0QsTUFBTTtRQUVKLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztZQUN2QixLQUFLLEVBQUUsUUFBUTtTQUNoQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBR0QsT0FBTyxnQkFBRyxDQUFDO0lBR1gsTUFBTSxnQkFBRyxDQUFDO0lBR1YsTUFBTSxnQkFBRyxDQUFDO0lBR1YsUUFBUSxnQkFBRyxDQUFDO0NBQ2IsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbWFwRGV0YWlsLnRzXHJcbi8vIOiOt+WPluW6lOeUqOWunuS+i1xyXG4vL2NvbnN0IGFwcCA9IGdldEFwcCgpO1xyXG5cclxuUGFnZSh7XHJcbiAgLy/pobXpnaLmlbDmja5cclxuICBkYXRhOiB7XHJcbiAgICBsb25naXR1ZGU6IDEyMC40ODQyNjIsICAvL+S4reW/g+e7j+W6plxyXG4gICAgbGF0aXR1ZGU6IDM2LjEwNzgzNCwgICAgLy/kuK3lv4PnuqzluqZcclxuICAgIHNjYWxlOiAxNSwgICAgICAgICAgICAgICAgLy/nvKnmlL7nuqfliKvvvIzlj5blgLzojIPlm7TkuLozLTIwXHJcbiAgICBtYXJrZXJzOlsgICAgICAgICAgICAgICAgIC8v5qCH6K6w54K5XHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMCxcclxuICAgICAgICBsb25naXR1ZGU6IDEyMC40ODQyNjIsICAgLy/nu4/luqZcclxuICAgICAgICBsYXRpdHVkZTogMzYuMTA3ODM0LCAgIC8v57qs5bqmXHJcbiAgICAgICAgaWNvblBhdGg6ICcuLi8uLi9pbWFnZXMvcG9zaXRpb24ucG5nJywgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICB3aWR0aDogMzAsXHJcbiAgICAgICAgaGVpZ2h0OiAzMCxcclxuICAgICAgICBjYWxsb3V0OiB7XHJcbiAgICAgICAgICBjb250ZW50OiAn5L2N572uMScsXHJcbiAgICAgICAgICBjb2xvcjogJ3JlZCcsXHJcbiAgICAgICAgICBmb250U2l6ZTogJzI0cnB4JyxcclxuICAgICAgICAgIGJnQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgIHBhZGRpbmc6IDUsXHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXHJcbiAgICAgICAgICBib3JkZXJDb2xvcjogJyNDQ0MnLFxyXG4gICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICBkaXNwbGF5OiAnQUxXQVlTJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgXSxcclxuICAgIHBvc2l0aW9uVXJsOiAnLi4vLi4vaW1hZ2VzL3Bvc2l0aW9uLnBuZycsXHJcbiAgICBhY3RpdmU6IDBcclxuICB9LFxyXG5cclxuICAvL+e6v+S4iuaBsOiwiFxyXG4gIHNtYWxsVGFsaygpOnZvaWR7XHJcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgdXJsOlwiLi4vc21hbGxUYWxrL3NtYWxsVGFsa1wiXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIC8v6Lev57q/5a+86IiqXHJcbiAgbmF2aWdhdGlvbigpOnZvaWR7XHJcbiAgICBsZXQga2V5OnN0cmluZyA9ICdBV1lCWi1DM0lXTy01VElXRC1TRVBWVy1LUU1PRi1SWEJBVic7ICAvL+S9v+eUqOWcqOiFvuiur+S9jee9ruacjeWKoeeUs+ivt+eahGtleVxyXG4gICAgbGV0IGVuZFBvaW50OmFueSA9IEpTT04uc3RyaW5naWZ5KHsgIC8v57uI54K5XHJcbiAgICAgICduYW1lJzogJ+efs+iAgeS6uuiKseWbrScsXHJcbiAgICAgICdsYXRpdHVkZSc6IDM2LjA5ODEwMSxcclxuICAgICAgJ2xvbmdpdHVkZSc6IDEyMC40OTc1MzlcclxuICAgIH0pO1xyXG5cclxuICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICB1cmw6ICdwbHVnaW46Ly9yb3V0ZVBsYW4vaW5kZXg/a2V5PScgKyBrZXkgKyAnJnJlZmVyZXI95omN6LWL5LqRJyArICcmZW5kUG9pbnQ9JyArIGVuZFBvaW50XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICAvL+mZhOS7tuS4i+i9vVxyXG4gIGRvd25sb2FkKCk6dm9pZHtcclxuICAgIFxyXG4gIH0sXHJcblxyXG4gIC8v6aG16Z2i5Yid5aeL5YyWXHJcbiAgb25Mb2FkKCl7XHJcbiAgICAvL+mhtemdouagh+mimFxyXG4gICAgd3guc2V0TmF2aWdhdGlvbkJhclRpdGxlKHsgICAgIFxyXG4gICAgICB0aXRsZTogXCLlnLDlm77moIforrDor6bmg4VcIlxyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgLy/pobXpnaLmuLLmn5PlrozmiJBcclxuICBvblJlYWR5KCl7fSxcclxuXHJcbiAgLy/pobXpnaLmmL7npLpcclxuICBvblNob3coKXt9LFxyXG5cclxuICAvL+mhtemdoumakOiXj1xyXG4gIG9uSGlkZSgpe30sXHJcblxyXG4gIC8v6aG16Z2i5YWz6ZetXHJcbiAgb25VbmxvYWQoKXt9XHJcbn0pXHJcbiJdfQ==