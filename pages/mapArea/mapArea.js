"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api = getApp().globalData;
var https = require('../../utils/myRequest.js');
Page({
    data: {
        areaClass: null,
        areaList: []
    },
    areaFn: function (e) {
        api.areaId = e.target.dataset.id;
        api.areaName = e.target.dataset.title;
        wx.switchTab({
            url: '../map/map'
        });
    },
    getArea: function () {
        var _this = this;
        https.successRequest(api.tenants, null, 'GET')
            .then(function (res) {
            if (res) {
                var arr = res.list.map(function (item) {
                    return {
                        id: item.model.id,
                        title: item.model.cname
                    };
                });
                _this.setData({
                    areaList: arr
                });
            }
        }, function (err) {
            console.log(err);
        });
    },
    onLoad: function () {
        wx.setNavigationBarTitle({
            title: "选择市区"
        });
        this.getArea();
    },
    onShow: function () { },
    onReady: function () { },
    onHide: function () { },
    onUnload: function () { }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwQXJlYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hcEFyZWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQUUsQ0FBQyxVQUFVLENBQUM7QUFDaEMsSUFBSSxLQUFLLEdBQUksT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUM7QUFFakQsSUFBSSxDQUFDO0lBRUgsSUFBSSxFQUFFO1FBQ0osU0FBUyxFQUFFLElBQUk7UUFDZixRQUFRLEVBQUUsRUFBRTtLQUNiO0lBRUQsTUFBTSxFQUFOLFVBQU8sQ0FBSztRQUNWLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1FBQ2pDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQ3RDLEVBQUUsQ0FBQyxTQUFTLENBQUM7WUFDWCxHQUFHLEVBQUMsWUFBWTtTQUNqQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBR0QsT0FBTyxFQUFQO1FBQUEsaUJBaUJDO1FBaEJDLEtBQUssQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDO2FBQzdDLElBQUksQ0FBQyxVQUFDLEdBQU87WUFDWixJQUFHLEdBQUcsRUFBQztnQkFDTCxJQUFJLEdBQUcsR0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQVE7b0JBQ2xDLE9BQU87d0JBQ0wsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTt3QkFDakIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSztxQkFDeEIsQ0FBQTtnQkFDSCxDQUFDLENBQUMsQ0FBQTtnQkFDRixLQUFJLENBQUMsT0FBTyxDQUFDO29CQUNYLFFBQVEsRUFBRSxHQUFHO2lCQUNkLENBQUMsQ0FBQTthQUNIO1FBQ0gsQ0FBQyxFQUFDLFVBQUMsR0FBTztZQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBSUQsTUFBTTtRQUVKLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztZQUN2QixLQUFLLEVBQUUsTUFBTTtTQUNkLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBR0QsTUFBTSxnQkFBRyxDQUFDO0lBR1YsT0FBTyxnQkFBRyxDQUFDO0lBR1gsTUFBTSxnQkFBRyxDQUFDO0lBR1YsUUFBUSxnQkFBRyxDQUFDO0NBQ2IsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbWFwQXJlYS50c1xyXG5jb25zdCBhcGkgPSBnZXRBcHAoKS5nbG9iYWxEYXRhOyAgLy8g6I635Y+W5bqU55So5a6e5L6LXHJcbmxldCBodHRwcyAgPSByZXF1aXJlKCcuLi8uLi91dGlscy9teVJlcXVlc3QuanMnKTsgIC8v6I635Y+WYWpheOaWueazlVxyXG5cclxuUGFnZSh7XHJcbiAgLy/pobXpnaLmlbDmja5cclxuICBkYXRhOiB7XHJcbiAgICBhcmVhQ2xhc3M6IG51bGwsICAgICAvL+mAieS4reeKtuaAgVxyXG4gICAgYXJlYUxpc3Q6IFtdICAgICAgICAgLy/ljLpcclxuICB9LFxyXG5cclxuICBhcmVhRm4oZTphbnkpOnZvaWR7ICAvL+eCueWHu+WMuuaXtuinpuWPkVxyXG4gICAgYXBpLmFyZWFJZCA9IGUudGFyZ2V0LmRhdGFzZXQuaWQ7XHJcbiAgICBhcGkuYXJlYU5hbWUgPSBlLnRhcmdldC5kYXRhc2V0LnRpdGxlO1xyXG4gICAgd3guc3dpdGNoVGFiKHsgXHJcbiAgICAgIHVybDonLi4vbWFwL21hcCdcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIC8v6I635Y+W5biC5Yy6XHJcbiAgZ2V0QXJlYSgpOnZvaWR7XHJcbiAgICBodHRwcy5zdWNjZXNzUmVxdWVzdChhcGkudGVuYW50cywgbnVsbCwgJ0dFVCcpXHJcbiAgICAudGhlbigocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICBpZihyZXMpe1xyXG4gICAgICAgIGxldCBhcnI6YW55ID0gcmVzLmxpc3QubWFwKChpdGVtOmFueSk6YW55PT57XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogaXRlbS5tb2RlbC5pZCxcclxuICAgICAgICAgICAgdGl0bGU6IGl0ZW0ubW9kZWwuY25hbWVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBhcmVhTGlzdDogYXJyXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSwoZXJyOmFueSk9PntcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuXHJcbiAgLy/pobXpnaLliJ3lp4vljJZcclxuICBvbkxvYWQoKXtcclxuICAgIC8v6aG16Z2i5qCH6aKYXHJcbiAgICB3eC5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoeyAgICAgXHJcbiAgICAgIHRpdGxlOiBcIumAieaLqeW4guWMulwiXHJcbiAgICB9KTtcclxuICAgIHRoaXMuZ2V0QXJlYSgpOyAgLy/ojrflj5bluILljLpcclxuICB9LFxyXG5cclxuICAvL+mhtemdouaYvuekulxyXG4gIG9uU2hvdygpe30sXHJcblxyXG4gIC8v6aG16Z2i5riy5p+T5a6M5oiQXHJcbiAgb25SZWFkeSgpe30sXHJcblxyXG4gIC8v6aG16Z2i6ZqQ6JePXHJcbiAgb25IaWRlKCl7fSxcclxuXHJcbiAgLy/pobXpnaLlhbPpl61cclxuICBvblVubG9hZCgpe31cclxufSlcclxuZXhwb3J0IHt9O1xyXG4iXX0=