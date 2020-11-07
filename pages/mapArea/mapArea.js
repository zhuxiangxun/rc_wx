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
        api.longitude = e.target.dataset.longitude;
        api.latitude = e.target.dataset.latitude;
        wx.switchTab({
            url: '../map/map'
        });
    },
    getArea: function () {
        var _this = this;
        https.request(api.tenants, null, 'GET')
            .then(function (res) {
            if (res) {
                var list = res.list.map(function (item) {
                    return {
                        id: item.id,
                        title: item.cname
                    };
                });
                var newList_1 = [];
                list.forEach(function (item) {
                    if (item.title == '李沧区') {
                        newList_1.push({
                            id: item.id,
                            title: item.title,
                            longitude: '120.439601',
                            latitude: '36.151586',
                        });
                    }
                    if (item.title == '市北区') {
                        newList_1.push({
                            id: item.id,
                            title: item.title,
                            longitude: '120.380385',
                            latitude: '36.093512',
                        });
                    }
                    if (item.title == '西海岸新区') {
                        newList_1.push({
                            id: item.id,
                            title: item.title,
                            longitude: '120.20446',
                            latitude: '35.966251',
                        });
                    }
                    if (item.title == '市南区') {
                        newList_1.push({
                            id: item.id,
                            title: item.title,
                            longitude: '120.419487',
                            latitude: '36.080924',
                        });
                    }
                    if (item.title == '崂山区') {
                        newList_1.push({
                            id: item.id,
                            title: item.title,
                            longitude: '120.475533',
                            latitude: '36.113575',
                        });
                    }
                    if (item.title == '城阳区') {
                        newList_1.push({
                            id: item.id,
                            title: item.title,
                            longitude: '120.403094',
                            latitude: '36.312985',
                        });
                    }
                    if (item.title == '即墨区') {
                        newList_1.push({
                            id: item.id,
                            title: item.title,
                            longitude: '120.453974',
                            latitude: '36.395534',
                        });
                    }
                    if (item.title == '胶州市') {
                        newList_1.push({
                            id: item.id,
                            title: item.title,
                            longitude: '120.039172',
                            latitude: '36.270863',
                        });
                    }
                    if (item.title == '平度市') {
                        newList_1.push({
                            id: item.id,
                            title: item.title,
                            longitude: '119.993754',
                            latitude: '36.782908',
                        });
                    }
                    if (item.title == '莱西市') {
                        newList_1.push({
                            id: item.id,
                            title: item.title,
                            longitude: '120.526126',
                            latitude: '36.894743',
                        });
                    }
                    if (item.title == '高新区') {
                        newList_1.push({
                            id: item.id,
                            title: item.title,
                            longitude: '120.284476',
                            latitude: '36.272367',
                        });
                    }
                    if (item.title == '青岛蓝谷') {
                        newList_1.push({
                            id: item.id,
                            title: item.title,
                            longitude: '120.683445',
                            latitude: '36.353411',
                        });
                    }
                    if (item.title == '青岛市') {
                        newList_1.unshift({
                            id: item.id,
                            title: item.title,
                            longitude: '120.389458',
                            latitude: '36.07316',
                        });
                    }
                });
                _this.setData({
                    areaList: newList_1
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwQXJlYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hcEFyZWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQUUsQ0FBQyxVQUFVLENBQUM7QUFDaEMsSUFBSSxLQUFLLEdBQUksT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUM7QUFFakQsSUFBSSxDQUFDO0lBRUgsSUFBSSxFQUFFO1FBQ0osU0FBUyxFQUFFLElBQUk7UUFDZixRQUFRLEVBQUUsRUFBRTtLQUNiO0lBRUQsTUFBTSxFQUFOLFVBQU8sQ0FBSztRQUNWLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1FBQ2pDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQ3RDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBQzNDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBQ3pDLEVBQUUsQ0FBQyxTQUFTLENBQUM7WUFDWCxHQUFHLEVBQUMsWUFBWTtTQUNqQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBR0QsT0FBTyxFQUFQO1FBQUEsaUJBNkhDO1FBNUhDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDO2FBQ3RDLElBQUksQ0FBQyxVQUFDLEdBQU87WUFDWixJQUFHLEdBQUcsRUFBQztnQkFDTCxJQUFJLElBQUksR0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQVE7b0JBQ25DLE9BQU87d0JBQ0wsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFO3dCQUNYLEtBQUssRUFBRSxJQUFJLENBQUMsS0FB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QyxPQUFPLENBQUM7b0JBQ1gsUUFBUSxFQUFFLFNBQU87aUJBQ2xCLENBQUMsQ0FBQTthQUNIO1FBQ0gsQ0FBQyxFQUFDLFVBQUMsR0FBTztZQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBSUQsTUFBTTtRQUVKLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztZQUN2QixLQUFLLEVBQUUsTUFBTTtTQUNkLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBR0QsTUFBTSxnQkFBRyxDQUFDO0lBR1YsT0FBTyxnQkFBRyxDQUFDO0lBR1gsTUFBTSxnQkFBRyxDQUFDO0lBR1YsUUFBUSxnQkFBRyxDQUFDO0NBQ2IsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbWFwQXJlYS50c1xyXG5jb25zdCBhcGkgPSBnZXRBcHAoKS5nbG9iYWxEYXRhOyAgLy8g6I635Y+W5bqU55So5a6e5L6LXHJcbmxldCBodHRwcyAgPSByZXF1aXJlKCcuLi8uLi91dGlscy9teVJlcXVlc3QuanMnKTsgIC8v6I635Y+WYWpheOaWueazlVxyXG5cclxuUGFnZSh7XHJcbiAgLy/pobXpnaLmlbDmja5cclxuICBkYXRhOiB7XHJcbiAgICBhcmVhQ2xhc3M6IG51bGwsICAgICAvL+mAieS4reeKtuaAgVxyXG4gICAgYXJlYUxpc3Q6IFtdICAgICAgICAgLy/ljLpcclxuICB9LFxyXG5cclxuICBhcmVhRm4oZTphbnkpOnZvaWR7ICAvL+eCueWHu+WMuuaXtuinpuWPkVxyXG4gICAgYXBpLmFyZWFJZCA9IGUudGFyZ2V0LmRhdGFzZXQuaWQ7ICAgICAgICAgICAgICAgLy/ljLpJRFxyXG4gICAgYXBpLmFyZWFOYW1lID0gZS50YXJnZXQuZGF0YXNldC50aXRsZTsgICAgICAgICAgLy/ljLrlkI1cclxuICAgIGFwaS5sb25naXR1ZGUgPSBlLnRhcmdldC5kYXRhc2V0LmxvbmdpdHVkZTsgICAgIC8v5Lit5b+D57uP5bqmXHJcbiAgICBhcGkubGF0aXR1ZGUgPSBlLnRhcmdldC5kYXRhc2V0LmxhdGl0dWRlOyAgICAgICAvL+S4reW/g+e6rOW6plxyXG4gICAgd3guc3dpdGNoVGFiKHsgXHJcbiAgICAgIHVybDonLi4vbWFwL21hcCdcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIC8v6I635Y+W5biC5Yy6XHJcbiAgZ2V0QXJlYSgpOnZvaWR7XHJcbiAgICBodHRwcy5yZXF1ZXN0KGFwaS50ZW5hbnRzLCBudWxsLCAnR0VUJylcclxuICAgIC50aGVuKChyZXM6YW55KTp2b2lkPT57XHJcbiAgICAgIGlmKHJlcyl7XHJcbiAgICAgICAgbGV0IGxpc3Q6YW55ID0gcmVzLmxpc3QubWFwKChpdGVtOmFueSk6YW55PT57XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgdGl0bGU6IGl0ZW0uY25hbWVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGxldCBuZXdMaXN0OmFueSA9IFtdO1xyXG4gICAgICAgIGxpc3QuZm9yRWFjaCgoaXRlbTphbnkpOnZvaWQ9PntcclxuICAgICAgICAgIGlmKGl0ZW0udGl0bGUgPT0gJ+adjuayp+WMuicpe1xyXG4gICAgICAgICAgICBuZXdMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiBpdGVtLnRpdGxlLFxyXG4gICAgICAgICAgICAgIGxvbmdpdHVkZTogJzEyMC40Mzk2MDEnLCAgICAgIC8v5Lit5b+D57uP5bqmXHJcbiAgICAgICAgICAgICAgbGF0aXR1ZGU6ICczNi4xNTE1ODYnLCAgICAgICAgLy/kuK3lv4PnuqzluqZcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmKGl0ZW0udGl0bGUgPT0gJ+W4guWMl+WMuicpe1xyXG4gICAgICAgICAgICBuZXdMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiBpdGVtLnRpdGxlLFxyXG4gICAgICAgICAgICAgIGxvbmdpdHVkZTogJzEyMC4zODAzODUnLCAgICAgICAgICAvL+S4reW/g+e7j+W6plxyXG4gICAgICAgICAgICAgIGxhdGl0dWRlOiAnMzYuMDkzNTEyJywgICAgICAgICAgICAvL+S4reW/g+e6rOW6plxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYoaXRlbS50aXRsZSA9PSAn6KW/5rW35bK45paw5Yy6Jyl7XHJcbiAgICAgICAgICAgIG5ld0xpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXHJcbiAgICAgICAgICAgICAgbG9uZ2l0dWRlOiAnMTIwLjIwNDQ2JywgICAgICAgICAgLy/kuK3lv4Pnu4/luqZcclxuICAgICAgICAgICAgICBsYXRpdHVkZTogJzM1Ljk2NjI1MScsICAgICAgICAgICAvL+S4reW/g+e6rOW6plxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYoaXRlbS50aXRsZSA9PSAn5biC5Y2X5Yy6Jyl7XHJcbiAgICAgICAgICAgIG5ld0xpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXHJcbiAgICAgICAgICAgICAgbG9uZ2l0dWRlOiAnMTIwLjQxOTQ4NycsICAgICAgICAgLy/kuK3lv4Pnu4/luqZcclxuICAgICAgICAgICAgICBsYXRpdHVkZTogJzM2LjA4MDkyNCcsICAgICAgICAgICAvL+S4reW/g+e6rOW6plxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYoaXRlbS50aXRsZSA9PSAn5bSC5bGx5Yy6Jyl7XHJcbiAgICAgICAgICAgIG5ld0xpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXHJcbiAgICAgICAgICAgICAgbG9uZ2l0dWRlOiAnMTIwLjQ3NTUzMycsICAgICAgICAgLy/kuK3lv4Pnu4/luqZcclxuICAgICAgICAgICAgICBsYXRpdHVkZTogJzM2LjExMzU3NScsICAgICAgICAgICAvL+S4reW/g+e6rOW6plxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYoaXRlbS50aXRsZSA9PSAn5Z+O6Ziz5Yy6Jyl7XHJcbiAgICAgICAgICAgIG5ld0xpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXHJcbiAgICAgICAgICAgICAgbG9uZ2l0dWRlOiAnMTIwLjQwMzA5NCcsICAgICAgICAgLy/kuK3lv4Pnu4/luqZcclxuICAgICAgICAgICAgICBsYXRpdHVkZTogJzM2LjMxMjk4NScsICAgICAgICAgICAvL+S4reW/g+e6rOW6plxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYoaXRlbS50aXRsZSA9PSAn5Y2z5aKo5Yy6Jyl7XHJcbiAgICAgICAgICAgIG5ld0xpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXHJcbiAgICAgICAgICAgICAgbG9uZ2l0dWRlOiAnMTIwLjQ1Mzk3NCcsICAgICAgICAgLy/kuK3lv4Pnu4/luqZcclxuICAgICAgICAgICAgICBsYXRpdHVkZTogJzM2LjM5NTUzNCcsICAgICAgICAgICAvL+S4reW/g+e6rOW6plxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYoaXRlbS50aXRsZSA9PSAn6IO25bee5biCJyl7XHJcbiAgICAgICAgICAgIG5ld0xpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXHJcbiAgICAgICAgICAgICAgbG9uZ2l0dWRlOiAnMTIwLjAzOTE3MicsICAgICAgICAgIC8v5Lit5b+D57uP5bqmXHJcbiAgICAgICAgICAgICAgbGF0aXR1ZGU6ICczNi4yNzA4NjMnLCAgICAgICAgICAgIC8v5Lit5b+D57qs5bqmXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZihpdGVtLnRpdGxlID09ICflubPluqbluIInKXtcclxuICAgICAgICAgICAgbmV3TGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgICB0aXRsZTogaXRlbS50aXRsZSxcclxuICAgICAgICAgICAgICBsb25naXR1ZGU6ICcxMTkuOTkzNzU0JywgICAgICAgICAgLy/kuK3lv4Pnu4/luqZcclxuICAgICAgICAgICAgICBsYXRpdHVkZTogJzM2Ljc4MjkwOCcsICAgICAgICAgICAvL+S4reW/g+e6rOW6plxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYoaXRlbS50aXRsZSA9PSAn6I6x6KW/5biCJyl7XHJcbiAgICAgICAgICAgIG5ld0xpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXHJcbiAgICAgICAgICAgICAgbG9uZ2l0dWRlOiAnMTIwLjUyNjEyNicsICAgICAgICAgIC8v5Lit5b+D57uP5bqmXHJcbiAgICAgICAgICAgICAgbGF0aXR1ZGU6ICczNi44OTQ3NDMnLCAgICAgICAgICAgLy/kuK3lv4PnuqzluqZcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmKGl0ZW0udGl0bGUgPT0gJ+mrmOaWsOWMuicpe1xyXG4gICAgICAgICAgICBuZXdMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiBpdGVtLnRpdGxlLFxyXG4gICAgICAgICAgICAgIGxvbmdpdHVkZTogJzEyMC4yODQ0NzYnLCAgICAgICAgICAvL+S4reW/g+e7j+W6plxyXG4gICAgICAgICAgICAgIGxhdGl0dWRlOiAnMzYuMjcyMzY3JywgICAgICAgICAgIC8v5Lit5b+D57qs5bqmXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZihpdGVtLnRpdGxlID09ICfpnZLlspvok53osLcnKXtcclxuICAgICAgICAgICAgbmV3TGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgICB0aXRsZTogaXRlbS50aXRsZSxcclxuICAgICAgICAgICAgICBsb25naXR1ZGU6ICcxMjAuNjgzNDQ1JywgICAgICAgICAgLy/kuK3lv4Pnu4/luqZcclxuICAgICAgICAgICAgICBsYXRpdHVkZTogJzM2LjM1MzQxMScsICAgICAgICAgICAgLy/kuK3lv4PnuqzluqZcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmKGl0ZW0udGl0bGUgPT0gJ+mdkuWym+W4gicpe1xyXG4gICAgICAgICAgICBuZXdMaXN0LnVuc2hpZnQoe1xyXG4gICAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiBpdGVtLnRpdGxlLFxyXG4gICAgICAgICAgICAgIGxvbmdpdHVkZTogJzEyMC4zODk0NTgnLCAgICAgICAgICAvL+S4reW/g+e7j+W6plxyXG4gICAgICAgICAgICAgIGxhdGl0dWRlOiAnMzYuMDczMTYnLCAgICAgICAgICAgICAvL+S4reW/g+e6rOW6plxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBhcmVhTGlzdDogbmV3TGlzdFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0sKGVycjphbnkpPT57XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcblxyXG4gIC8v6aG16Z2i5Yid5aeL5YyWXHJcbiAgb25Mb2FkKCl7XHJcbiAgICAvL+mhtemdouagh+mimFxyXG4gICAgd3guc2V0TmF2aWdhdGlvbkJhclRpdGxlKHsgICAgIFxyXG4gICAgICB0aXRsZTogXCLpgInmi6nluILljLpcIlxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmdldEFyZWEoKTsgIC8v6I635Y+W5biC5Yy6XHJcbiAgfSxcclxuXHJcbiAgLy/pobXpnaLmmL7npLpcclxuICBvblNob3coKXt9LFxyXG5cclxuICAvL+mhtemdoua4suafk+WujOaIkFxyXG4gIG9uUmVhZHkoKXt9LFxyXG5cclxuICAvL+mhtemdoumakOiXj1xyXG4gIG9uSGlkZSgpe30sXHJcblxyXG4gIC8v6aG16Z2i5YWz6ZetXHJcbiAgb25VbmxvYWQoKXt9XHJcbn0pXHJcbmV4cG9ydCB7fTtcclxuIl19