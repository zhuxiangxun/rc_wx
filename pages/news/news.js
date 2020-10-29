"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api = getApp().globalData;
var https = require('../../utils/myRequest.js');
Page({
    data: {
        tabFlag: 'dongtai',
        movindId: '',
        noticeId: '',
        activityId: '',
    },
    onReachBottom: function () {
    },
    tabFn: function (res) {
        if (res.detail.name == 'gonggao') {
            this.setData({
                tabFlag: 'gonggao'
            });
            this.selectComponent("#notice").getList(this.data.noticeId);
        }
        if (res.detail.name == 'huodong') {
            this.setData({
                tabFlag: 'huodong'
            });
            console.log(111);
            this.selectComponent("#activity").getList(this.data.activityId);
        }
        if (res.detail.name == 'dongtai') {
            this.setData({
                tabFlag: 'dongtai'
            });
            this.selectComponent("#moving").getList(this.data.movindId);
        }
    },
    getDic: function () {
        var _this = this;
        https.request(api.submenuDic + '?moid=70', null, 'GET')
            .then(function (res) {
            var arr = res.val;
            arr.forEach(function (item) {
                if (item.dicName == "平台动态") {
                    _this.selectComponent("#moving").getList(item.id);
                    _this.setData({
                        movindId: item.id
                    });
                }
                else if (item.dicName == "通知公告") {
                    _this.setData({
                        noticeId: item.id
                    });
                }
                else if (item.dicName == "活动信息") {
                    _this.setData({
                        activityId: item.id
                    });
                }
            });
        }, function (err) {
            console.log(err);
        });
    },
    onLoad: function () {
        wx.setNavigationBarTitle({
            title: "动态"
        });
    },
    onShow: function () {
        this.getDic();
    },
    onReady: function () { },
    onHide: function () { },
    onUnload: function () { }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5ld3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQUUsQ0FBQyxVQUFVLENBQUM7QUFDaEMsSUFBSSxLQUFLLEdBQUksT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUM7QUFFakQsSUFBSSxDQUFDO0lBRUgsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFFLFNBQVM7UUFDbEIsUUFBUSxFQUFFLEVBQUU7UUFDWixRQUFRLEVBQUUsRUFBRTtRQUNaLFVBQVUsRUFBRSxFQUFFO0tBQ2Y7SUFHRCxhQUFhLEVBQWI7SUFRQSxDQUFDO0lBSUQsS0FBSyxFQUFMLFVBQU0sR0FBTztRQUNYLElBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksU0FBUyxFQUFDO1lBQzlCLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsT0FBTyxFQUFFLFNBQVM7YUFDbkIsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUM3RDtRQUNELElBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksU0FBUyxFQUFDO1lBQzlCLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsT0FBTyxFQUFFLFNBQVM7YUFDbkIsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNoQixJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ2pFO1FBQ0QsSUFBRyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxTQUFTLEVBQUM7WUFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxPQUFPLEVBQUUsU0FBUzthQUNuQixDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzdEO0lBQ0gsQ0FBQztJQUdELE1BQU0sRUFBTjtRQUFBLGlCQXVCQztRQXRCQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsVUFBVSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUM7YUFDdEQsSUFBSSxDQUFDLFVBQUMsR0FBTztZQUNaLElBQUksR0FBRyxHQUFTLEdBQUcsQ0FBQyxHQUFHLENBQUM7WUFDeEIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQVE7Z0JBQ25CLElBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxNQUFNLEVBQUM7b0JBQ3hCLEtBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDakQsS0FBSSxDQUFDLE9BQU8sQ0FBQzt3QkFDWCxRQUFRLEVBQUUsSUFBSSxDQUFDLEVBQUU7cUJBQ2xCLENBQUMsQ0FBQTtpQkFDSDtxQkFBSyxJQUFHLElBQUksQ0FBQyxPQUFPLElBQUksTUFBTSxFQUFDO29CQUM5QixLQUFJLENBQUMsT0FBTyxDQUFDO3dCQUNYLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBRTtxQkFDbEIsQ0FBQyxDQUFBO2lCQUNIO3FCQUFLLElBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxNQUFNLEVBQUM7b0JBQzlCLEtBQUksQ0FBQyxPQUFPLENBQUM7d0JBQ1gsVUFBVSxFQUFFLElBQUksQ0FBQyxFQUFFO3FCQUNwQixDQUFDLENBQUE7aUJBQ0g7WUFDSCxDQUFDLENBQUMsQ0FBQTtRQUNKLENBQUMsRUFBQyxVQUFDLEdBQU87WUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdELE1BQU07UUFDSixFQUFFLENBQUMscUJBQXFCLENBQUM7WUFDdkIsS0FBSyxFQUFFLElBQUk7U0FDWixDQUFDLENBQUM7SUFDTCxDQUFDO0lBR0QsTUFBTTtRQUNKLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBR0QsT0FBTyxnQkFBRyxDQUFDO0lBR1gsTUFBTSxnQkFBRyxDQUFDO0lBR1YsUUFBUSxnQkFBRyxDQUFDO0NBQ2IsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbmV3cy50c1xyXG5jb25zdCBhcGkgPSBnZXRBcHAoKS5nbG9iYWxEYXRhOyAgLy8g6I635Y+W5bqU55So5a6e5L6LXHJcbmxldCBodHRwcyAgPSByZXF1aXJlKCcuLi8uLi91dGlscy9teVJlcXVlc3QuanMnKTsgICAgIC8v6I635Y+WYWpheOaWueazlVxyXG5cclxuUGFnZSh7XHJcbiAgLy/pobXpnaLmlbDmja5cclxuICBkYXRhOiB7XHJcbiAgICB0YWJGbGFnOiAnZG9uZ3RhaScsICAgICAgIC8vdGFi5YiH5o2i54q25oCBXHJcbiAgICBtb3ZpbmRJZDogJycsICAgICAgLy/liqjmgIFJRFxyXG4gICAgbm90aWNlSWQ6ICcnLCAgICAgIC8v5YWs5ZGKSURcclxuICAgIGFjdGl2aXR5SWQ6ICcnLCAgICAvL+a0u+WKqElEXHJcbiAgfSxcclxuXHJcbiAgLy/pobXpnaLkuIrmi4lcclxuICBvblJlYWNoQm90dG9tKCk6dm9pZHtcclxuICAgIC8vIGlmKHRoaXMuZGF0YS50YWJGbGFnID09ICdkb25ndGFpJyl7XHJcbiAgICAvLyAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KFwiI21vdmluZ1wiKS5nZXRMaXN0KHRoaXMuZGF0YS5tb3ZpbmRJZCk7ICAvL+W5s+WPsOWKqOaAgVxyXG4gICAgLy8gfWVsc2UgaWYodGhpcy5kYXRhLnRhYkZsYWcgPT0gJ2dvbmdnYW8nKXtcclxuICAgIC8vICAgdGhpcy5zZWxlY3RDb21wb25lbnQoXCIjbm90aWNlXCIpLmdldExpc3QodGhpcy5kYXRhLm5vdGljZUlkKTsgIC8v6YCa55+l5YWs5ZGKXHJcbiAgICAvLyB9ZWxzZXtcclxuICAgIC8vICAgdGhpcy5zZWxlY3RDb21wb25lbnQoXCIjYWN0aXZpdHlcIikuZ2V0TGlzdCh0aGlzLmRhdGEuYWN0aXZpdHlJZCk7ICAvL+a0u+WKqOS/oeaBr1xyXG4gICAgLy8gfVxyXG4gIH0sXHJcblxyXG5cclxuICAvL3RhYuagh+etvuWIh+aNouaXtuinpuWPkVxyXG4gIHRhYkZuKHJlczphbnkpOnZvaWR7XHJcbiAgICBpZihyZXMuZGV0YWlsLm5hbWUgPT0gJ2dvbmdnYW8nKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICB0YWJGbGFnOiAnZ29uZ2dhbydcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KFwiI25vdGljZVwiKS5nZXRMaXN0KHRoaXMuZGF0YS5ub3RpY2VJZCk7ICAvL+mAmuefpeWFrOWRilxyXG4gICAgfVxyXG4gICAgaWYocmVzLmRldGFpbC5uYW1lID09ICdodW9kb25nJyl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgdGFiRmxhZzogJ2h1b2RvbmcnXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZygxMTEpXHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50KFwiI2FjdGl2aXR5XCIpLmdldExpc3QodGhpcy5kYXRhLmFjdGl2aXR5SWQpOyAgLy/mtLvliqjkv6Hmga9cclxuICAgIH1cclxuICAgIGlmKHJlcy5kZXRhaWwubmFtZSA9PSAnZG9uZ3RhaScpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHRhYkZsYWc6ICdkb25ndGFpJ1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQoXCIjbW92aW5nXCIpLmdldExpc3QodGhpcy5kYXRhLm1vdmluZElkKTsgIC8v5bmz5Y+w5Yqo5oCBXHJcbiAgICB9XHJcbiAgfSxcclxuIFxyXG4gIC8v6I635Y+W5a2X5YW46KGoXHJcbiAgZ2V0RGljKCk6dm9pZHtcclxuICAgIGh0dHBzLnJlcXVlc3QoYXBpLnN1Ym1lbnVEaWMgKyAnP21vaWQ9NzAnLCBudWxsLCAnR0VUJylcclxuICAgIC50aGVuKChyZXM6YW55KTp2b2lkPT57XHJcbiAgICAgIGxldCBhcnI6YW55W10gPSByZXMudmFsO1xyXG4gICAgICBhcnIuZm9yRWFjaCgoaXRlbTphbnkpOnZvaWQ9PntcclxuICAgICAgICBpZihpdGVtLmRpY05hbWUgPT0gXCLlubPlj7DliqjmgIFcIil7XHJcbiAgICAgICAgICB0aGlzLnNlbGVjdENvbXBvbmVudChcIiNtb3ZpbmdcIikuZ2V0TGlzdChpdGVtLmlkKTsgICAvL+W5s+WPsOWKqOaAgVxyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgbW92aW5kSWQ6IGl0ZW0uaWRcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfWVsc2UgaWYoaXRlbS5kaWNOYW1lID09IFwi6YCa55+l5YWs5ZGKXCIpe1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgbm90aWNlSWQ6IGl0ZW0uaWRcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfWVsc2UgaWYoaXRlbS5kaWNOYW1lID09IFwi5rS75Yqo5L+h5oGvXCIpe1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgYWN0aXZpdHlJZDogaXRlbS5pZFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgLy/pobXpnaLliJ3lp4vljJZcclxuICBvbkxvYWQoKXtcclxuICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7ICAgICBcclxuICAgICAgdGl0bGU6IFwi5Yqo5oCBXCJcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIC8v6aG16Z2i5pi+56S6XHJcbiAgb25TaG93KCl7XHJcbiAgICB0aGlzLmdldERpYygpOyAgLy/ojrflj5blrZflhbjooahcclxuICB9LFxyXG5cclxuICAvL+mhtemdoua4suafk+WujOaIkFxyXG4gIG9uUmVhZHkoKXt9LFxyXG5cclxuICAvL+mhtemdoumakOiXj1xyXG4gIG9uSGlkZSgpe30sXHJcblxyXG4gIC8v6aG16Z2i5YWz6ZetXHJcbiAgb25VbmxvYWQoKXt9XHJcbn0pXHJcblxyXG5leHBvcnQge307XHJcbiJdfQ==