"use strict";
Page({
    data: {
        longitude: 120.382215,
        latitude: 36.080419,
        scale: 12,
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
                    display: 'BYCLICK'
                }
            },
            {
                id: 1,
                longitude: 120.47607,
                latitude: 36.105034,
                iconPath: '../../images/position.png',
                width: 30,
                height: 30,
            }
        ],
        active: 0,
        option1: [
            { text: '青岛市', value: 0 },
            { text: '市南区', value: 1 },
            { text: '市北区', value: 2 },
        ],
        value1: 0,
        show: true,
    },
    onChange: function (event) {
        this.setData({ active: event.detail });
    },
    mapDetail: function () {
        wx.navigateTo({
            url: "../mapDetail/mapDetail"
        });
    },
    markFn: function () {
    },
    onLoad: function () {
        var _this = this;
        wx.setNavigationBarTitle({
            title: "地图"
        });
        wx.getLocation({
            success: function (res) {
                _this.setData({
                    longitude: res.longitude,
                    latitude: res.latitude
                });
            }
        });
    },
    onReady: function () { },
    onShow: function () { },
    onHide: function () { },
    onUnload: function () { }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFJQSxJQUFJLENBQUM7SUFFSCxJQUFJLEVBQUU7UUFDSixTQUFTLEVBQUUsVUFBVTtRQUNyQixRQUFRLEVBQUUsU0FBUztRQUNuQixLQUFLLEVBQUUsRUFBRTtRQUNULE9BQU8sRUFBQztZQUNOO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLFNBQVMsRUFBRSxVQUFVO2dCQUNyQixRQUFRLEVBQUUsU0FBUztnQkFDbkIsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsTUFBTSxFQUFFLEVBQUU7Z0JBQ1YsT0FBTyxFQUFFO29CQUNQLE9BQU8sRUFBRSxLQUFLO29CQUNkLEtBQUssRUFBRSxLQUFLO29CQUNaLFFBQVEsRUFBRSxPQUFPO29CQUNqQixPQUFPLEVBQUUsTUFBTTtvQkFDZixPQUFPLEVBQUUsQ0FBQztvQkFDVixZQUFZLEVBQUUsQ0FBQztvQkFDZixXQUFXLEVBQUUsTUFBTTtvQkFDbkIsV0FBVyxFQUFFLENBQUM7b0JBQ2QsT0FBTyxFQUFFLFNBQVM7aUJBQ25CO2FBQ0Y7WUFDRDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxTQUFTLEVBQUUsU0FBUztnQkFDcEIsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLEtBQUssRUFBRSxFQUFFO2dCQUNULE1BQU0sRUFBRSxFQUFFO2FBQ1g7U0FDRjtRQUdELE1BQU0sRUFBRSxDQUFDO1FBQ1QsT0FBTyxFQUFFO1lBQ1AsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7WUFDekIsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7WUFDekIsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7U0FDMUI7UUFDRCxNQUFNLEVBQUUsQ0FBQztRQUdULElBQUksRUFBRSxJQUFJO0tBQ1g7SUFFRCxRQUFRLEVBQVIsVUFBUyxLQUFTO1FBRWhCLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQU1ELFNBQVMsRUFBVDtRQUNFLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUMsd0JBQXdCO1NBQzdCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFJRCxNQUFNLEVBQU47SUFFQSxDQUFDO0lBR0QsTUFBTSxFQUFOO1FBQUEsaUJBY0M7UUFaQyxFQUFFLENBQUMscUJBQXFCLENBQUM7WUFDdkIsS0FBSyxFQUFFLElBQUk7U0FDWixDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsV0FBVyxDQUFDO1lBQ2IsT0FBTyxFQUFDLFVBQUMsR0FBTztnQkFDZCxLQUFJLENBQUMsT0FBTyxDQUFDO29CQUNYLFNBQVMsRUFBRSxHQUFHLENBQUMsU0FBUztvQkFDeEIsUUFBUSxFQUFFLEdBQUcsQ0FBQyxRQUFRO2lCQUN2QixDQUFDLENBQUE7WUFDSixDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdELE9BQU8sZ0JBQUcsQ0FBQztJQUdYLE1BQU0sZ0JBQUcsQ0FBQztJQUdWLE1BQU0sZ0JBQUcsQ0FBQztJQUdWLFFBQVEsZ0JBQUcsQ0FBQztDQUNiLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIG1hcC50c1xyXG4vLyDojrflj5blupTnlKjlrp7kvotcclxuLy9jb25zdCBhcHAgPSBnZXRBcHAoKTtcclxuXHJcblBhZ2Uoe1xyXG4gIC8v6aG16Z2i5pWw5o2uXHJcbiAgZGF0YToge1xyXG4gICAgbG9uZ2l0dWRlOiAxMjAuMzgyMjE1LCAgLy/kuK3lv4Pnu4/luqZcclxuICAgIGxhdGl0dWRlOiAzNi4wODA0MTksICAgIC8v5Lit5b+D57qs5bqmXHJcbiAgICBzY2FsZTogMTIsICAgICAgICAgICAgICAgIC8v57yp5pS+57qn5Yir77yM5Y+W5YC86IyD5Zu05Li6My0yMFxyXG4gICAgbWFya2VyczpbICAgICAgICAgICAgICAgICAvL+agh+iusOeCuVxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDAsXHJcbiAgICAgICAgbG9uZ2l0dWRlOiAxMjAuNDg0MjYyLCAgIC8v57uP5bqmXHJcbiAgICAgICAgbGF0aXR1ZGU6IDM2LjEwNzgzNCwgICAvL+e6rOW6plxyXG4gICAgICAgIGljb25QYXRoOiAnLi4vLi4vaW1hZ2VzL3Bvc2l0aW9uLnBuZycsICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgd2lkdGg6IDMwLFxyXG4gICAgICAgIGhlaWdodDogMzAsXHJcbiAgICAgICAgY2FsbG91dDoge1xyXG4gICAgICAgICAgY29udGVudDogJ+S9jee9rjEnLFxyXG4gICAgICAgICAgY29sb3I6ICdyZWQnLFxyXG4gICAgICAgICAgZm9udFNpemU6ICcyNHJweCcsXHJcbiAgICAgICAgICBiZ0NvbG9yOiAnI0ZGRicsXHJcbiAgICAgICAgICBwYWRkaW5nOiA1LFxyXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgICAgICAgYm9yZGVyQ29sb3I6ICcjQ0NDJyxcclxuICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgZGlzcGxheTogJ0JZQ0xJQ0snXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbG9uZ2l0dWRlOiAxMjAuNDc2MDcsICAgLy/nu4/luqZcclxuICAgICAgICBsYXRpdHVkZTogMzYuMTA1MDM0ICwgICAvL+e6rOW6plxyXG4gICAgICAgIGljb25QYXRoOiAnLi4vLi4vaW1hZ2VzL3Bvc2l0aW9uLnBuZycsICAgICAgICAgICAgIC8v5qCH6K6wXHJcbiAgICAgICAgd2lkdGg6IDMwLFxyXG4gICAgICAgIGhlaWdodDogMzAsXHJcbiAgICAgIH1cclxuICAgIF0sXHJcblxyXG5cclxuICAgIGFjdGl2ZTogMCxcclxuICAgIG9wdGlvbjE6IFtcclxuICAgICAgeyB0ZXh0OiAn6Z2S5bKb5biCJywgdmFsdWU6IDAgfSxcclxuICAgICAgeyB0ZXh0OiAn5biC5Y2X5Yy6JywgdmFsdWU6IDEgfSxcclxuICAgICAgeyB0ZXh0OiAn5biC5YyX5Yy6JywgdmFsdWU6IDIgfSxcclxuICAgIF0sXHJcbiAgICB2YWx1ZTE6IDAsXHJcblxyXG5cclxuICAgIHNob3c6IHRydWUsXHJcbiAgfSxcclxuXHJcbiAgb25DaGFuZ2UoZXZlbnQ6YW55KTp2b2lkIHtcclxuICAgIC8vIGV2ZW50LmRldGFpbCDnmoTlgLzkuLrlvZPliY3pgInkuK3pobnnmoTntKLlvJVcclxuICAgIHRoaXMuc2V0RGF0YSh7IGFjdGl2ZTogZXZlbnQuZGV0YWlsIH0pO1xyXG4gIH0sXHJcblxyXG5cclxuXHJcblxyXG4gIC8v5Zyw5Zu+6K+m5oOFXHJcbiAgbWFwRGV0YWlsKCk6dm9pZCB7XHJcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgdXJsOlwiLi4vbWFwRGV0YWlsL21hcERldGFpbFwiXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG5cclxuICAvL+eCueWHu+agh+iusOeCueawlOazoeeql+WPo+inpuWPkVxyXG4gIG1hcmtGbigpOnZvaWQge1xyXG4gICAgLy9jb25zb2xlLmxvZygxMTExKTtcclxuICB9LFxyXG5cclxuICAvL+mhtemdouWIneWni+WMllxyXG4gIG9uTG9hZCgpe1xyXG4gICAgLy/pobXpnaLmoIfpophcclxuICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7ICAgICBcclxuICAgICAgdGl0bGU6IFwi5Zyw5Zu+XCJcclxuICAgIH0pO1xyXG4gICAgLy/lvZPliY3kvY3nva5cclxuICAgIHd4LmdldExvY2F0aW9uKHtcclxuICAgICAgc3VjY2VzczoocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBsb25naXR1ZGU6IHJlcy5sb25naXR1ZGUsICAvL+S4reW/g+e7j+W6plxyXG4gICAgICAgICAgbGF0aXR1ZGU6IHJlcy5sYXRpdHVkZSAgICAvL+S4reW/g+e6rOW6plxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIC8v6aG16Z2i5riy5p+T5a6M5oiQXHJcbiAgb25SZWFkeSgpe30sXHJcblxyXG4gIC8v6aG16Z2i5pi+56S6XHJcbiAgb25TaG93KCl7fSxcclxuXHJcbiAgLy/pobXpnaLpmpDol49cclxuICBvbkhpZGUoKXt9LFxyXG5cclxuICAvL+mhtemdouWFs+mXrVxyXG4gIG9uVW5sb2FkKCl7fVxyXG59KVxyXG4iXX0=