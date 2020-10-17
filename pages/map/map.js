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
        console.log(1111);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFJQSxJQUFJLENBQUM7SUFFSCxJQUFJLEVBQUU7UUFDSixTQUFTLEVBQUUsVUFBVTtRQUNyQixRQUFRLEVBQUUsU0FBUztRQUNuQixLQUFLLEVBQUUsRUFBRTtRQUNULE9BQU8sRUFBQztZQUNOO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLFNBQVMsRUFBRSxVQUFVO2dCQUNyQixRQUFRLEVBQUUsU0FBUztnQkFDbkIsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsTUFBTSxFQUFFLEVBQUU7Z0JBQ1YsT0FBTyxFQUFFO29CQUNQLE9BQU8sRUFBRSxLQUFLO29CQUNkLEtBQUssRUFBRSxLQUFLO29CQUNaLFFBQVEsRUFBRSxPQUFPO29CQUNqQixPQUFPLEVBQUUsTUFBTTtvQkFDZixPQUFPLEVBQUUsQ0FBQztvQkFDVixZQUFZLEVBQUUsQ0FBQztvQkFDZixXQUFXLEVBQUUsTUFBTTtvQkFDbkIsV0FBVyxFQUFFLENBQUM7b0JBQ2QsT0FBTyxFQUFFLFNBQVM7aUJBQ25CO2FBQ0Y7WUFDRDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxTQUFTLEVBQUUsU0FBUztnQkFDcEIsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLEtBQUssRUFBRSxFQUFFO2dCQUNULE1BQU0sRUFBRSxFQUFFO2FBQ1g7U0FDRjtRQUdELE1BQU0sRUFBRSxDQUFDO1FBQ1QsT0FBTyxFQUFFO1lBQ1AsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7WUFDekIsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7WUFDekIsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7U0FDMUI7UUFDRCxNQUFNLEVBQUUsQ0FBQztRQUdULElBQUksRUFBRSxJQUFJO0tBQ1g7SUFFRCxRQUFRLEVBQVIsVUFBUyxLQUFTO1FBRWhCLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQU1ELFNBQVMsRUFBVDtRQUNFLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUMsd0JBQXdCO1NBQzdCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFJRCxNQUFNLEVBQU47UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFHRCxNQUFNLEVBQU47UUFBQSxpQkFjQztRQVpDLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztZQUN2QixLQUFLLEVBQUUsSUFBSTtTQUNaLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxXQUFXLENBQUM7WUFDYixPQUFPLEVBQUMsVUFBQyxHQUFPO2dCQUNkLEtBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ1gsU0FBUyxFQUFFLEdBQUcsQ0FBQyxTQUFTO29CQUN4QixRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVE7aUJBQ3ZCLENBQUMsQ0FBQTtZQUNKLENBQUM7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBR0QsT0FBTyxnQkFBRyxDQUFDO0lBR1gsTUFBTSxnQkFBRyxDQUFDO0lBR1YsTUFBTSxnQkFBRyxDQUFDO0lBR1YsUUFBUSxnQkFBRyxDQUFDO0NBQ2IsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbWFwLnRzXHJcbi8vIOiOt+WPluW6lOeUqOWunuS+i1xyXG4vL2NvbnN0IGFwcCA9IGdldEFwcCgpO1xyXG5cclxuUGFnZSh7XHJcbiAgLy/pobXpnaLmlbDmja5cclxuICBkYXRhOiB7XHJcbiAgICBsb25naXR1ZGU6IDEyMC4zODIyMTUsICAvL+S4reW/g+e7j+W6plxyXG4gICAgbGF0aXR1ZGU6IDM2LjA4MDQxOSwgICAgLy/kuK3lv4PnuqzluqZcclxuICAgIHNjYWxlOiAxMiwgICAgICAgICAgICAgICAgLy/nvKnmlL7nuqfliKvvvIzlj5blgLzojIPlm7TkuLozLTIwXHJcbiAgICBtYXJrZXJzOlsgICAgICAgICAgICAgICAgIC8v5qCH6K6w54K5XHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMCxcclxuICAgICAgICBsb25naXR1ZGU6IDEyMC40ODQyNjIsICAgLy/nu4/luqZcclxuICAgICAgICBsYXRpdHVkZTogMzYuMTA3ODM0LCAgIC8v57qs5bqmXHJcbiAgICAgICAgaWNvblBhdGg6ICcuLi8uLi9pbWFnZXMvcG9zaXRpb24ucG5nJywgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICB3aWR0aDogMzAsXHJcbiAgICAgICAgaGVpZ2h0OiAzMCxcclxuICAgICAgICBjYWxsb3V0OiB7XHJcbiAgICAgICAgICBjb250ZW50OiAn5L2N572uMScsXHJcbiAgICAgICAgICBjb2xvcjogJ3JlZCcsXHJcbiAgICAgICAgICBmb250U2l6ZTogJzI0cnB4JyxcclxuICAgICAgICAgIGJnQ29sb3I6ICcjRkZGJyxcclxuICAgICAgICAgIHBhZGRpbmc6IDUsXHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXHJcbiAgICAgICAgICBib3JkZXJDb2xvcjogJyNDQ0MnLFxyXG4gICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICBkaXNwbGF5OiAnQllDTElDSydcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBsb25naXR1ZGU6IDEyMC40NzYwNywgICAvL+e7j+W6plxyXG4gICAgICAgIGxhdGl0dWRlOiAzNi4xMDUwMzQgLCAgIC8v57qs5bqmXHJcbiAgICAgICAgaWNvblBhdGg6ICcuLi8uLi9pbWFnZXMvcG9zaXRpb24ucG5nJywgICAgICAgICAgICAgLy/moIforrBcclxuICAgICAgICB3aWR0aDogMzAsXHJcbiAgICAgICAgaGVpZ2h0OiAzMCxcclxuICAgICAgfVxyXG4gICAgXSxcclxuXHJcblxyXG4gICAgYWN0aXZlOiAwLFxyXG4gICAgb3B0aW9uMTogW1xyXG4gICAgICB7IHRleHQ6ICfpnZLlspvluIInLCB2YWx1ZTogMCB9LFxyXG4gICAgICB7IHRleHQ6ICfluILljZfljLonLCB2YWx1ZTogMSB9LFxyXG4gICAgICB7IHRleHQ6ICfluILljJfljLonLCB2YWx1ZTogMiB9LFxyXG4gICAgXSxcclxuICAgIHZhbHVlMTogMCxcclxuXHJcblxyXG4gICAgc2hvdzogdHJ1ZSxcclxuICB9LFxyXG5cclxuICBvbkNoYW5nZShldmVudDphbnkpOnZvaWQge1xyXG4gICAgLy8gZXZlbnQuZGV0YWlsIOeahOWAvOS4uuW9k+WJjemAieS4remhueeahOe0ouW8lVxyXG4gICAgdGhpcy5zZXREYXRhKHsgYWN0aXZlOiBldmVudC5kZXRhaWwgfSk7XHJcbiAgfSxcclxuXHJcblxyXG5cclxuXHJcbiAgLy/lnLDlm77or6bmg4VcclxuICBtYXBEZXRhaWwoKTp2b2lkIHtcclxuICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICB1cmw6XCIuLi9tYXBEZXRhaWwvbWFwRGV0YWlsXCJcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcblxyXG4gIC8v54K55Ye75qCH6K6w54K55rCU5rOh56qX5Y+j6Kem5Y+RXHJcbiAgbWFya0ZuKCk6dm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZygxMTExKTtcclxuICB9LFxyXG5cclxuICAvL+mhtemdouWIneWni+WMllxyXG4gIG9uTG9hZCgpe1xyXG4gICAgLy/pobXpnaLmoIfpophcclxuICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7ICAgICBcclxuICAgICAgdGl0bGU6IFwi5Zyw5Zu+XCJcclxuICAgIH0pO1xyXG4gICAgLy/lvZPliY3kvY3nva5cclxuICAgIHd4LmdldExvY2F0aW9uKHtcclxuICAgICAgc3VjY2VzczoocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBsb25naXR1ZGU6IHJlcy5sb25naXR1ZGUsICAvL+S4reW/g+e7j+W6plxyXG4gICAgICAgICAgbGF0aXR1ZGU6IHJlcy5sYXRpdHVkZSAgICAvL+S4reW/g+e6rOW6plxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIC8v6aG16Z2i5riy5p+T5a6M5oiQXHJcbiAgb25SZWFkeSgpe30sXHJcblxyXG4gIC8v6aG16Z2i5pi+56S6XHJcbiAgb25TaG93KCl7fSxcclxuXHJcbiAgLy/pobXpnaLpmpDol49cclxuICBvbkhpZGUoKXt9LFxyXG5cclxuICAvL+mhtemdouWFs+mXrVxyXG4gIG9uVW5sb2FkKCl7fVxyXG59KVxyXG4iXX0=