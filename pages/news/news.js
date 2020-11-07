"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api = getApp().globalData;
var https = require('../../utils/myRequest.js');
Page({
    data: {
        videoUrl: 'https://cim.qdcsdn.cn/rc_wx/news.mp4',
        total: 0,
        pageIndex: 1,
        pageSize: 10,
        imgUrl: '',
        tabFlag: '',
        moreShow: false,
        listData: [],
        moreTitle: '暂无数据',
        movindId: '',
        noticeId: '',
        activityId: '',
    },
    onMoreBtn: function () {
        this.setData({
            moreShow: false
        });
        if (this.data.tabFlag == "gonggao") {
            if (this.data.listData.length < this.data.total) {
                this.getTz();
            }
            else {
                this.setData({
                    moreShow: true,
                });
            }
        }
        else if (this.data.tabFlag == "huodong") {
            if (this.data.listData.length < this.data.total) {
                this.getHd();
            }
            else {
                this.setData({
                    moreShow: true,
                    moreTitle: '已加载全部',
                });
            }
        }
        else {
            if (this.data.listData.length < this.data.total) {
                this.getPt();
            }
            else {
                this.setData({
                    moreShow: true,
                    moreTitle: '已加载全部',
                });
            }
        }
    },
    getPt: function () {
        var _this = this;
        var url = api.activity + '?ncolumnId=' + this.data.movindId + '&pageIndex=' + this.data.pageIndex + '&pageSize=' + this.data.pageSize;
        https.request(url, null, 'GET').then(function (res) {
            _this.setData({
                imgUrl: api.imgUrl + '?filePath=',
                total: res.total,
                listData: _this.data.listData.concat(res.list)
            });
            if (_this.data.listData.length < res.total) {
                _this.setData({
                    moreShow: true,
                    moreTitle: '点击加载更多',
                    pageIndex: _this.data.pageIndex += 1
                });
            }
            else {
                _this.setData({
                    moreShow: true,
                    moreTitle: '已加载全部',
                });
            }
        }, function (err) {
            console.log(err);
        });
    },
    getTz: function () {
        var _this = this;
        var url = api.notice + '?ncolumnId=' + this.data.noticeId + '&pageIndex=' + this.data.pageIndex + '&pageSize=' + this.data.pageSize;
        https.request(url, null, 'GET').then(function (res) {
            _this.setData({
                imgUrl: api.imgUrl + '?filePath=',
                total: res.total,
                listData: _this.data.listData.concat(res.list)
            });
            if (_this.data.listData.length < res.total) {
                _this.setData({
                    moreShow: true,
                    moreTitle: '点击加载更多',
                    pageIndex: _this.data.pageIndex += 1
                });
            }
            else {
                _this.setData({
                    moreShow: true,
                    moreTitle: '已加载全部',
                });
            }
        }, function (err) {
            console.log(err);
        });
    },
    getHd: function () {
        var _this = this;
        var url = api.activity + '?ncolumnId=' + this.data.activityId + '&pageIndex=' + this.data.pageIndex + '&pageSize=' + this.data.pageSize;
        https.request(url, null, 'GET').then(function (res) {
            _this.setData({
                imgUrl: api.imgUrl + '?filePath=',
                total: res.total,
                listData: _this.data.listData.concat(res.list)
            });
            if (_this.data.listData.length < res.total) {
                _this.setData({
                    moreShow: true,
                    moreTitle: '点击加载更多',
                    pageIndex: _this.data.pageIndex += 1
                });
            }
            else {
                _this.setData({
                    moreShow: true,
                    moreTitle: '已加载全部',
                });
            }
        }, function (err) {
            console.log(err);
        });
    },
    tabFn: function (res) {
        this.setData({
            tabFlag: res.detail.name,
            total: 0,
            pageIndex: 1,
            pageSize: 10,
            listData: [],
            moreTitle: '暂无数据',
        });
        if (res.detail.name == 'dongtai') {
            this.getPt();
        }
        if (res.detail.name == 'gonggao') {
            this.getTz();
        }
        if (res.detail.name == 'huodong') {
            this.getHd();
        }
    },
    getDic: function () {
        var _this = this;
        https.request(api.submenuDic + '?moid=70', null, 'GET')
            .then(function (res) {
            var arr = res.val;
            arr.forEach(function (item) {
                if (item.dicName == "平台动态") {
                    _this.setData({
                        tabFlag: '',
                        movindId: item.id
                    });
                    _this.getPt();
                }
                else if (item.dicName == "通知公告") {
                    _this.setData({
                        tabFlag: '',
                        noticeId: item.id
                    });
                }
                else if (item.dicName == "活动信息") {
                    _this.setData({
                        tabFlag: '',
                        activityId: item.id
                    });
                }
            });
        }, function (err) {
            console.log(err);
        });
    },
    onLoad: function () {
        this.getDic();
        wx.setNavigationBarTitle({
            title: "动态"
        });
    },
    onShow: function () {
    },
    onReady: function () { },
    onHide: function () { },
    onUnload: function () { }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5ld3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQUUsQ0FBQyxVQUFVLENBQUM7QUFDaEMsSUFBSSxLQUFLLEdBQUksT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUM7QUFFakQsSUFBSSxDQUFDO0lBRUgsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLHNDQUFzQztRQUVoRCxLQUFLLEVBQUUsQ0FBQztRQUNSLFNBQVMsRUFBRSxDQUFDO1FBQ1osUUFBUSxFQUFFLEVBQUU7UUFFWixNQUFNLEVBQUUsRUFBRTtRQUVWLE9BQU8sRUFBRSxFQUFFO1FBQ1gsUUFBUSxFQUFFLEtBQUs7UUFDZixRQUFRLEVBQUUsRUFBRTtRQUNaLFNBQVMsRUFBRSxNQUFNO1FBRWpCLFFBQVEsRUFBRSxFQUFFO1FBQ1osUUFBUSxFQUFFLEVBQUU7UUFDWixVQUFVLEVBQUUsRUFBRTtLQUNmO0lBR0QsU0FBUyxFQUFUO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLFFBQVEsRUFBRSxLQUFLO1NBQ2hCLENBQUMsQ0FBQTtRQUNGLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksU0FBUyxFQUFDO1lBQ2hDLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFDO2dCQUM3QyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDZDtpQkFBSTtnQkFDSCxJQUFJLENBQUMsT0FBTyxDQUFDO29CQUNYLFFBQVEsRUFBRSxJQUFJO2lCQUNmLENBQUMsQ0FBQTthQUNIO1NBQ0Y7YUFBSyxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLFNBQVMsRUFBQztZQUN0QyxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMs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ID0gZ2V0QXBwKCkuZ2xvYmFsRGF0YTsgICAgICAgICAgICAgICAgICAgICAgLy8g6I635Y+W5bqU55So5a6e5L6LXHJcbmxldCBodHRwcyAgPSByZXF1aXJlKCcuLi8uLi91dGlscy9teVJlcXVlc3QuanMnKTsgICAgIC8v6I635Y+WYWpheOaWueazlVxyXG5cclxuUGFnZSh7XHJcbiAgLy/pobXpnaLmlbDmja5cclxuICBkYXRhOiB7XHJcbiAgICB2aWRlb1VybDogJ2h0dHBzOi8vY2ltLnFkY3Nkbi5jbi9yY193eC9uZXdzLm1wNCcsXHJcbiAgICBcclxuICAgIHRvdGFsOiAwLCAgICAgICAgICAvL+aAu+aVsFxyXG4gICAgcGFnZUluZGV4OiAxLCAgICAgIC8v5p2h5pWwXHJcbiAgICBwYWdlU2l6ZTogMTAsICAgICAgIC8v6aG156CBXHJcblxyXG4gICAgaW1nVXJsOiAnJywgICAgICAgIC8v6I635Y+W5Zu+54mH5pyN5Yqh5ZmoXHJcblxyXG4gICAgdGFiRmxhZzogJycsICAgICAgIC8vdGFi5YiH5o2iXHJcbiAgICBtb3JlU2hvdzogZmFsc2UsICAgIC8v5Yqg6L295pu05aSa54q25oCBXHJcbiAgICBsaXN0RGF0YTogW10sICAgICAgLy/liJfooahcclxuICAgIG1vcmVUaXRsZTogJ+aaguaXoOaVsOaNricsICAgICAvL+WKoOi9veabtOWkmlxyXG5cclxuICAgIG1vdmluZElkOiAnJywgICAgICAvL+WKqOaAgUlEXHJcbiAgICBub3RpY2VJZDogJycsICAgICAgLy/lhazlkYpJRFxyXG4gICAgYWN0aXZpdHlJZDogJycsICAgIC8v5rS75YqoSURcclxuICB9LFxyXG5cclxuICAvL+eCueWHu+WKoOi9veabtOWkmlxyXG4gIG9uTW9yZUJ0bigpOnZvaWR7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBtb3JlU2hvdzogZmFsc2VcclxuICAgIH0pXHJcbiAgICBpZih0aGlzLmRhdGEudGFiRmxhZyA9PSBcImdvbmdnYW9cIil7ICAgLy/lhazlkYpcclxuICAgICAgaWYodGhpcy5kYXRhLmxpc3REYXRhLmxlbmd0aCA8IHRoaXMuZGF0YS50b3RhbCl7XHJcbiAgICAgICAgdGhpcy5nZXRUeigpO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgbW9yZVNob3c6IHRydWUsXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfWVsc2UgaWYodGhpcy5kYXRhLnRhYkZsYWcgPT0gXCJodW9kb25nXCIpeyAgIC8v5rS75YqoXHJcbiAgICAgIGlmKHRoaXMuZGF0YS5saXN0RGF0YS5sZW5ndGggPCB0aGlzLmRhdGEudG90YWwpe1xyXG4gICAgICAgIHRoaXMuZ2V0SGQoKTtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIG1vcmVTaG93OiB0cnVlLFxyXG4gICAgICAgICAgbW9yZVRpdGxlOiAn5bey5Yqg6L295YWo6YOoJywgICAgIC8v5Yqg6L295pu05aSaXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfWVsc2V7ICAgLy/liqjmgIFcclxuICAgICAgaWYodGhpcy5kYXRhLmxpc3REYXRhLmxlbmd0aCA8IHRoaXMuZGF0YS50b3RhbCl7XHJcbiAgICAgICAgdGhpcy5nZXRQdCgpO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgbW9yZVNob3c6IHRydWUsXHJcbiAgICAgICAgICBtb3JlVGl0bGU6ICflt7LliqDovb3lhajpg6gnLCAgICAgLy/liqDovb3mm7TlpJpcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9IFxyXG4gICAgXHJcbiAgfSxcclxuXHJcblxyXG4gIC8v6I635Y+W5bmz5Y+w5Yqo5oCBXHJcbiAgZ2V0UHQoKTp2b2lke1xyXG4gICAgbGV0IHVybDpzdHJpbmcgPSBhcGkuYWN0aXZpdHkgKyAnP25jb2x1bW5JZD0nICsgdGhpcy5kYXRhLm1vdmluZElkICsgJyZwYWdlSW5kZXg9JyArIHRoaXMuZGF0YS5wYWdlSW5kZXggKyAnJnBhZ2VTaXplPScgKyB0aGlzLmRhdGEucGFnZVNpemU7XHJcbiAgICBodHRwcy5yZXF1ZXN0KHVybCwgbnVsbCwgJ0dFVCcpLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBpbWdVcmw6IGFwaS5pbWdVcmwgKyAnP2ZpbGVQYXRoPScsXHJcbiAgICAgICAgdG90YWw6IHJlcy50b3RhbCxcclxuICAgICAgICBsaXN0RGF0YTogdGhpcy5kYXRhLmxpc3REYXRhLmNvbmNhdChyZXMubGlzdClcclxuICAgICAgfSk7XHJcbiAgICAgIGlmKHRoaXMuZGF0YS5saXN0RGF0YS5sZW5ndGggPCByZXMudG90YWwpe1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBtb3JlU2hvdzogdHJ1ZSxcclxuICAgICAgICAgIG1vcmVUaXRsZTogJ+eCueWHu+WKoOi9veabtOWkmicsICAgICAvL+WKoOi9veabtOWkmlxyXG4gICAgICAgICAgcGFnZUluZGV4OiB0aGlzLmRhdGEucGFnZUluZGV4ICs9IDFcclxuICAgICAgICB9KTtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIG1vcmVTaG93OiB0cnVlLFxyXG4gICAgICAgICAgbW9yZVRpdGxlOiAn5bey5Yqg6L295YWo6YOoJywgICAgIC8v5Yqg6L295pu05aSaXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICAvL+iOt+WPlumAmuefpeWFrOWRilxyXG4gIGdldFR6KCk6dm9pZHtcclxuICAgIGxldCB1cmw6c3RyaW5nID0gYXBpLm5vdGljZSArICc/bmNvbHVtbklkPScgKyB0aGlzLmRhdGEubm90aWNlSWQgKyAnJnBhZ2VJbmRleD0nICsgdGhpcy5kYXRhLnBhZ2VJbmRleCArICcmcGFnZVNpemU9JyArIHRoaXMuZGF0YS5wYWdlU2l6ZTtcclxuICAgIGh0dHBzLnJlcXVlc3QodXJsLCBudWxsLCAnR0VUJykudGhlbigocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGltZ1VybDogYXBpLmltZ1VybCArICc/ZmlsZVBhdGg9JyxcclxuICAgICAgICB0b3RhbDogcmVzLnRvdGFsLFxyXG4gICAgICAgIGxpc3REYXRhOiB0aGlzLmRhdGEubGlzdERhdGEuY29uY2F0KHJlcy5saXN0KVxyXG4gICAgICB9KTtcclxuICAgICAgaWYodGhpcy5kYXRhLmxpc3REYXRhLmxlbmd0aCA8IHJlcy50b3RhbCl7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIG1vcmVTaG93OiB0cnVlLFxyXG4gICAgICAgICAgbW9yZVRpdGxlOiAn54K55Ye75Yqg6L295pu05aSaJywgICAgIC8v5Yqg6L295pu05aSaXHJcbiAgICAgICAgICBwYWdlSW5kZXg6IHRoaXMuZGF0YS5wYWdlSW5kZXggKz0gMVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgbW9yZVNob3c6IHRydWUsXHJcbiAgICAgICAgICBtb3JlVGl0bGU6ICflt7LliqDovb3lhajpg6gnLCAgICAgLy/liqDovb3mm7TlpJpcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgXHJcbiAgLy/ojrflj5bmtLvliqjkv6Hmga9cclxuICBnZXRIZCgpOnZvaWR7XHJcbiAgICBsZXQgdXJsOnN0cmluZyA9IGFwaS5hY3Rpdml0eSArICc/bmNvbHVtbklkPScgKyB0aGlzLmRhdGEuYWN0aXZpdHlJZCArICcmcGFnZUluZGV4PScgKyB0aGlzLmRhdGEucGFnZUluZGV4ICsgJyZwYWdlU2l6ZT0nICsgdGhpcy5kYXRhLnBhZ2VTaXplO1xyXG4gICAgaHR0cHMucmVxdWVzdCh1cmwsIG51bGwsICdHRVQnKS50aGVuKChyZXM6YW55KTp2b2lkPT57XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgaW1nVXJsOiBhcGkuaW1nVXJsICsgJz9maWxlUGF0aD0nLFxyXG4gICAgICAgIHRvdGFsOiByZXMudG90YWwsXHJcbiAgICAgICAgbGlzdERhdGE6IHRoaXMuZGF0YS5saXN0RGF0YS5jb25jYXQocmVzLmxpc3QpXHJcbiAgICAgIH0pO1xyXG4gICAgICBpZih0aGlzLmRhdGEubGlzdERhdGEubGVuZ3RoIDwgcmVzLnRvdGFsKXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgbW9yZVNob3c6IHRydWUsXHJcbiAgICAgICAgICBtb3JlVGl0bGU6ICfngrnlh7vliqDovb3mm7TlpJonLCAgICAgLy/liqDovb3mm7TlpJpcclxuICAgICAgICAgIHBhZ2VJbmRleDogdGhpcy5kYXRhLnBhZ2VJbmRleCArPSAxXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBtb3JlU2hvdzogdHJ1ZSxcclxuICAgICAgICAgIG1vcmVUaXRsZTogJ+W3suWKoOi9veWFqOmDqCcsICAgICAvL+WKoOi9veabtOWkmlxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcblxyXG4gIC8vdGFi5qCH562+5YiH5o2i5pe26Kem5Y+RXHJcbiAgdGFiRm4ocmVzOmFueSk6dm9pZHtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHRhYkZsYWc6IHJlcy5kZXRhaWwubmFtZSwgICAgICAvL3RhYuWIh+aNoueKtuaAgVxyXG4gICAgICB0b3RhbDogMCwgICAgICAgICAgLy/mgLvmlbBcclxuICAgICAgcGFnZUluZGV4OiAxLCAgICAgIC8v5p2h5pWwXHJcbiAgICAgIHBhZ2VTaXplOiAxMCwgICAgICAvL+mhteeggVxyXG4gICAgICBsaXN0RGF0YTogW10sICAgICAgLy/liJfooahcclxuICAgICAgbW9yZVRpdGxlOiAn5pqC5peg5pWw5o2uJywgICAgIC8v5Yqg6L295pu05aSaXHJcbiAgICB9KVxyXG5cclxuICAgIGlmKHJlcy5kZXRhaWwubmFtZSA9PSAnZG9uZ3RhaScpeyAgICAvL+W5s+WPsOWKqOaAgVxyXG4gICAgICB0aGlzLmdldFB0KCk7XHJcbiAgICB9XHJcbiAgICBpZihyZXMuZGV0YWlsLm5hbWUgPT0gJ2dvbmdnYW8nKXsgICAgLy/pgJrnn6XlhazlkYpcclxuICAgICAgdGhpcy5nZXRUeigpO1xyXG4gICAgfVxyXG4gICAgaWYocmVzLmRldGFpbC5uYW1lID09ICdodW9kb25nJyl7ICAgIC8v5rS75Yqo5L+h5oGvXHJcbiAgICAgIHRoaXMuZ2V0SGQoKTtcclxuICAgIH1cclxuICB9LFxyXG4gXHJcbiAgLy/ojrflj5blrZflhbjooahcclxuICBnZXREaWMoKTp2b2lke1xyXG4gICAgaHR0cHMucmVxdWVzdChhcGkuc3VibWVudURpYyArICc/bW9pZD03MCcsIG51bGwsICdHRVQnKVxyXG4gICAgLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgbGV0IGFycjphbnlbXSA9IHJlcy52YWw7XHJcbiAgICAgIGFyci5mb3JFYWNoKChpdGVtOmFueSk6dm9pZD0+e1xyXG4gICAgICAgIGlmKGl0ZW0uZGljTmFtZSA9PSBcIuW5s+WPsOWKqOaAgVwiKXtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIHRhYkZsYWc6ICcnLCAgICAgIC8vdGFi5YiH5o2i54q25oCBXHJcbiAgICAgICAgICAgIG1vdmluZElkOiBpdGVtLmlkXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgdGhpcy5nZXRQdCgpO1xyXG4gICAgICAgIH1lbHNlIGlmKGl0ZW0uZGljTmFtZSA9PSBcIumAmuefpeWFrOWRilwiKXtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIHRhYkZsYWc6ICcnLCAgICAgIC8vdGFi5YiH5o2i54q25oCBXHJcbiAgICAgICAgICAgIG5vdGljZUlkOiBpdGVtLmlkXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1lbHNlIGlmKGl0ZW0uZGljTmFtZSA9PSBcIua0u+WKqOS/oeaBr1wiKXtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIHRhYkZsYWc6ICcnLCAgICAgIC8vdGFi5YiH5o2i54q25oCBXHJcbiAgICAgICAgICAgIGFjdGl2aXR5SWQ6IGl0ZW0uaWRcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIC8v6aG16Z2i5Yid5aeL5YyWXHJcbiAgb25Mb2FkKCl7XHJcbiAgICB0aGlzLmdldERpYygpOyAgLy/ojrflj5blrZflhbjooahcclxuICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7ICAgICBcclxuICAgICAgdGl0bGU6IFwi5Yqo5oCBXCJcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIC8v6aG16Z2i5pi+56S6XHJcbiAgb25TaG93KCl7XHJcbiAgICBcclxuICB9LFxyXG5cclxuICAvL+mhtemdoua4suafk+WujOaIkFxyXG4gIG9uUmVhZHkoKXt9LFxyXG5cclxuICAvL+mhtemdoumakOiXj1xyXG4gIG9uSGlkZSgpe30sXHJcblxyXG4gIC8v6aG16Z2i5YWz6ZetXHJcbiAgb25VbmxvYWQoKXt9XHJcbn0pXHJcblxyXG5leHBvcnQge307XHJcbiJdfQ==