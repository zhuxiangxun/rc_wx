"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api = getApp().globalData;
var https = require('../../utils/myRequest.js');
Page({
    data: {
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
                    moreShow: true
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5ld3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQUUsQ0FBQyxVQUFVLENBQUM7QUFDaEMsSUFBSSxLQUFLLEdBQUksT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUM7QUFFakQsSUFBSSxDQUFDO0lBRUgsSUFBSSxFQUFFO1FBQ0osS0FBSyxFQUFFLENBQUM7UUFDUixTQUFTLEVBQUUsQ0FBQztRQUNaLFFBQVEsRUFBRSxFQUFFO1FBRVosTUFBTSxFQUFFLEVBQUU7UUFFVixPQUFPLEVBQUUsRUFBRTtRQUNYLFFBQVEsRUFBRSxLQUFLO1FBQ2YsUUFBUSxFQUFFLEVBQUU7UUFDWixTQUFTLEVBQUUsTUFBTTtRQUVqQixRQUFRLEVBQUUsRUFBRTtRQUNaLFFBQVEsRUFBRSxFQUFFO1FBQ1osVUFBVSxFQUFFLEVBQUU7S0FDZjtJQUdELFNBQVMsRUFBVDtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxRQUFRLEVBQUUsS0FBSztTQUNoQixDQUFDLENBQUE7UUFDRixJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLFNBQVMsRUFBQztZQUNoQyxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBQztnQkFDN0MsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ2Q7aUJBQUk7Z0JBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxRQUFRLEVBQUUsSUFBSTtpQkFDZixDQUFDLENBQUE7YUFDSDtTQUNGO2FBQUssSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxTQUFTLEVBQUM7WUFDdEMsSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUM7Z0JB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LENBQUMsRUFBRTtxQkFDbEIsQ0FBQyxDQUFBO29CQUNGLEtBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztpQkFDZDtxQkFBSyxJQUFHLElBQUksQ0FBQyxPQUFPLElBQUksTUFBTSxFQUFDO29CQUM5QixLQUFJLENBQUMsT0FBTyxDQUFDO3dCQUNYLE9BQU8sRUFBRSxFQUFFO3dCQUNYLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBRTtxQkFDbEIsQ0FBQyxDQUFBO2lCQUNIO3FCQUFLLElBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxNQUFNLEVBQUM7b0JBQzlCLEtBQUksQ0FBQyxPQUFPLENBQUM7d0JBQ1gsT0FBTyxFQUFFLEVBQUU7d0JBQ1gsVUFBVSxFQUFFLElBQUksQ0FBQyxFQUFFO3FCQUNwQixDQUFDLENBQUE7aUJBQ0g7WUFDSCxDQUFDLENBQUMsQ0FBQTtRQUNKLENBQUMsRUFBQyxVQUFDLEdBQU87WUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdELE1BQU07UUFDSixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZCxFQUFFLENBQUMscUJBQXFCLENBQUM7WUFDdkIsS0FBSyxFQUFFLElBQUk7U0FDWixDQUFDLENBQUM7SUFDTCxDQUFDO0lBR0QsTUFBTTtJQUVOLENBQUM7SUFHRCxPQUFPLGdCQUFHLENBQUM7SUFHWCxNQUFNLGdCQUFHLENBQUM7SUFHVixRQUFRLGdCQUFHLENBQUM7Q0FDYixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBuZXdzLnRzXHJcbmNvbnN0IGFwaSA9IGdldEFwcCgpLmdsb2JhbERhdGE7ICAgICAgICAgICAgICAgICAgICAgIC8vIOiOt+WPluW6lOeUqOWunuS+i1xyXG5sZXQgaHR0cHMgID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvbXlSZXF1ZXN0LmpzJyk7ICAgICAvL+iOt+WPlmFqYXjmlrnms5VcclxuXHJcblBhZ2Uoe1xyXG4gIC8v6aG16Z2i5pWw5o2uXHJcbiAgZGF0YToge1xyXG4gICAgdG90YWw6IDAsICAgICAgICAgIC8v5oC75pWwXHJcbiAgICBwYWdlSW5kZXg6IDEsICAgICAgLy/mnaHmlbBcclxuICAgIHBhZ2VTaXplOiAxMCwgICAgICAgLy/pobXnoIFcclxuXHJcbiAgICBpbWdVcmw6ICcnLCAgICAgICAgLy/ojrflj5blm77niYfmnI3liqHlmahcclxuXHJcbiAgICB0YWJGbGFnOiAnJywgICAgICAgLy90YWLliIfmjaJcclxuICAgIG1vcmVTaG93OiBmYWxzZSwgICAgLy/liqDovb3mm7TlpJrnirbmgIFcclxuICAgIGxpc3REYXRhOiBbXSwgICAgICAvL+WIl+ihqFxyXG4gICAgbW9yZVRpdGxlOiAn5pqC5peg5pWw5o2uJywgICAgIC8v5Yqg6L295pu05aSaXHJcblxyXG4gICAgbW92aW5kSWQ6ICcnLCAgICAgIC8v5Yqo5oCBSURcclxuICAgIG5vdGljZUlkOiAnJywgICAgICAvL+WFrOWRiklEXHJcbiAgICBhY3Rpdml0eUlkOiAnJywgICAgLy/mtLvliqhJRFxyXG4gIH0sXHJcblxyXG4gIC8v54K55Ye75Yqg6L295pu05aSaXHJcbiAgb25Nb3JlQnRuKCk6dm9pZHtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIG1vcmVTaG93OiBmYWxzZVxyXG4gICAgfSlcclxuICAgIGlmKHRoaXMuZGF0YS50YWJGbGFnID09IFwiZ29uZ2dhb1wiKXsgICAvL+WFrOWRilxyXG4gICAgICBpZih0aGlzLmRhdGEubGlzdERhdGEubGVuZ3RoIDwgdGhpcy5kYXRhLnRvdGFsKXtcclxuICAgICAgICB0aGlzLmdldFR6KCk7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBtb3JlU2hvdzogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1lbHNlIGlmKHRoaXMuZGF0YS50YWJGbGFnID09IFwiaHVvZG9uZ1wiKXsgICAvL+a0u+WKqFxyXG4gICAgICBpZih0aGlzLmRhdGEubGlzdERhdGEubGVuZ3RoIDwgdGhpcy5kYXRhLnRvdGFsKXtcclxuICAgICAgICB0aGlzLmdldEhkKCk7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBtb3JlU2hvdzogdHJ1ZSxcclxuICAgICAgICAgIG1vcmVUaXRsZTogJ+W3suWKoOi9veWFqOmDqCcsICAgICAvL+WKoOi9veabtOWkmlxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1lbHNleyAgIC8v5Yqo5oCBXHJcbiAgICAgIGlmKHRoaXMuZGF0YS5saXN0RGF0YS5sZW5ndGggPCB0aGlzLmRhdGEudG90YWwpe1xyXG4gICAgICAgIHRoaXMuZ2V0UHQoKTtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIG1vcmVTaG93OiB0cnVlLFxyXG4gICAgICAgICAgbW9yZVRpdGxlOiAn5bey5Yqg6L295YWo6YOoJywgICAgIC8v5Yqg6L295pu05aSaXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSBcclxuICAgIFxyXG4gIH0sXHJcblxyXG5cclxuICAvL+iOt+WPluW5s+WPsOWKqOaAgVxyXG4gIGdldFB0KCk6dm9pZHtcclxuICAgIGxldCB1cmw6c3RyaW5nID0gYXBpLmFjdGl2aXR5ICsgJz9uY29sdW1uSWQ9JyArIHRoaXMuZGF0YS5tb3ZpbmRJZCArICcmcGFnZUluZGV4PScgKyB0aGlzLmRhdGEucGFnZUluZGV4ICsgJyZwYWdlU2l6ZT0nICsgdGhpcy5kYXRhLnBhZ2VTaXplO1xyXG4gICAgaHR0cHMucmVxdWVzdCh1cmwsIG51bGwsICdHRVQnKS50aGVuKChyZXM6YW55KTp2b2lkPT57XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgaW1nVXJsOiBhcGkuaW1nVXJsICsgJz9maWxlUGF0aD0nLFxyXG4gICAgICAgIHRvdGFsOiByZXMudG90YWwsXHJcbiAgICAgICAgbGlzdERhdGE6IHRoaXMuZGF0YS5saXN0RGF0YS5jb25jYXQocmVzLmxpc3QpXHJcbiAgICAgIH0pO1xyXG4gICAgICBpZih0aGlzLmRhdGEubGlzdERhdGEubGVuZ3RoIDwgcmVzLnRvdGFsKXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgbW9yZVNob3c6IHRydWUsXHJcbiAgICAgICAgICBtb3JlVGl0bGU6ICfngrnlh7vliqDovb3mm7TlpJonLCAgICAgLy/liqDovb3mm7TlpJpcclxuICAgICAgICB9KTtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIG1vcmVTaG93OiB0cnVlLFxyXG4gICAgICAgICAgbW9yZVRpdGxlOiAn5bey5Yqg6L295YWo6YOoJywgICAgIC8v5Yqg6L295pu05aSaXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICAvL+iOt+WPlumAmuefpeWFrOWRilxyXG4gIGdldFR6KCk6dm9pZHtcclxuICAgIGxldCB1cmw6c3RyaW5nID0gYXBpLm5vdGljZSArICc/bmNvbHVtbklkPScgKyB0aGlzLmRhdGEubm90aWNlSWQgKyAnJnBhZ2VJbmRleD0nICsgdGhpcy5kYXRhLnBhZ2VJbmRleCArICcmcGFnZVNpemU9JyArIHRoaXMuZGF0YS5wYWdlU2l6ZTtcclxuICAgIGh0dHBzLnJlcXVlc3QodXJsLCBudWxsLCAnR0VUJykudGhlbigocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGltZ1VybDogYXBpLmltZ1VybCArICc/ZmlsZVBhdGg9JyxcclxuICAgICAgICB0b3RhbDogcmVzLnRvdGFsLFxyXG4gICAgICAgIGxpc3REYXRhOiB0aGlzLmRhdGEubGlzdERhdGEuY29uY2F0KHJlcy5saXN0KVxyXG4gICAgICB9KTtcclxuICAgICAgaWYodGhpcy5kYXRhLmxpc3REYXRhLmxlbmd0aCA8IHJlcy50b3RhbCl7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIG1vcmVTaG93OiB0cnVlLFxyXG4gICAgICAgICAgbW9yZVRpdGxlOiAn54K55Ye75Yqg6L295pu05aSaJywgICAgIC8v5Yqg6L295pu05aSaXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBtb3JlU2hvdzogdHJ1ZSxcclxuICAgICAgICAgIG1vcmVUaXRsZTogJ+W3suWKoOi9veWFqOmDqCcsICAgICAvL+WKoOi9veabtOWkmlxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBcclxuICAvL+iOt+WPlua0u+WKqOS/oeaBr1xyXG4gIGdldEhkKCk6dm9pZHtcclxuICAgIGxldCB1cmw6c3RyaW5nID0gYXBpLmFjdGl2aXR5ICsgJz9uY29sdW1uSWQ9JyArIHRoaXMuZGF0YS5hY3Rpdml0eUlkICsgJyZwYWdlSW5kZXg9JyArIHRoaXMuZGF0YS5wYWdlSW5kZXggKyAnJnBhZ2VTaXplPScgKyB0aGlzLmRhdGEucGFnZVNpemU7XHJcbiAgICBodHRwcy5yZXF1ZXN0KHVybCwgbnVsbCwgJ0dFVCcpLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBpbWdVcmw6IGFwaS5pbWdVcmwgKyAnP2ZpbGVQYXRoPScsXHJcbiAgICAgICAgdG90YWw6IHJlcy50b3RhbCxcclxuICAgICAgICBsaXN0RGF0YTogdGhpcy5kYXRhLmxpc3REYXRhLmNvbmNhdChyZXMubGlzdClcclxuICAgICAgfSk7XHJcbiAgICAgIGlmKHRoaXMuZGF0YS5saXN0RGF0YS5sZW5ndGggPCByZXMudG90YWwpe1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBtb3JlU2hvdzogdHJ1ZSxcclxuICAgICAgICAgIG1vcmVUaXRsZTogJ+eCueWHu+WKoOi9veabtOWkmicsICAgICAvL+WKoOi9veabtOWkmlxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgbW9yZVNob3c6IHRydWUsXHJcbiAgICAgICAgICBtb3JlVGl0bGU6ICflt7LliqDovb3lhajpg6gnLCAgICAgLy/liqDovb3mm7TlpJpcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG5cclxuICAvL3RhYuagh+etvuWIh+aNouaXtuinpuWPkVxyXG4gIHRhYkZuKHJlczphbnkpOnZvaWR7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICB0YWJGbGFnOiByZXMuZGV0YWlsLm5hbWUsICAgICAgLy90YWLliIfmjaLnirbmgIFcclxuICAgICAgdG90YWw6IDAsICAgICAgICAgIC8v5oC75pWwXHJcbiAgICAgIHBhZ2VJbmRleDogMSwgICAgICAvL+adoeaVsFxyXG4gICAgICBwYWdlU2l6ZTogMTAsICAgICAgIC8v6aG156CBXHJcbiAgICAgIGxpc3REYXRhOiBbXSwgICAgICAvL+WIl+ihqFxyXG4gICAgICBtb3JlVGl0bGU6ICfmmoLml6DmlbDmja4nLCAgICAgLy/liqDovb3mm7TlpJpcclxuICAgIH0pXHJcblxyXG4gICAgaWYocmVzLmRldGFpbC5uYW1lID09ICdkb25ndGFpJyl7ICAgIC8v5bmz5Y+w5Yqo5oCBXHJcbiAgICAgIHRoaXMuZ2V0UHQoKTtcclxuICAgIH1cclxuICAgIGlmKHJlcy5kZXRhaWwubmFtZSA9PSAnZ29uZ2dhbycpeyAgICAvL+mAmuefpeWFrOWRilxyXG4gICAgICB0aGlzLmdldFR6KCk7XHJcbiAgICB9XHJcbiAgICBpZihyZXMuZGV0YWlsLm5hbWUgPT0gJ2h1b2RvbmcnKXsgICAgLy/mtLvliqjkv6Hmga9cclxuICAgICAgdGhpcy5nZXRIZCgpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiBcclxuICAvL+iOt+WPluWtl+WFuOihqFxyXG4gIGdldERpYygpOnZvaWR7XHJcbiAgICBodHRwcy5yZXF1ZXN0KGFwaS5zdWJtZW51RGljICsgJz9tb2lkPTcwJywgbnVsbCwgJ0dFVCcpXHJcbiAgICAudGhlbigocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICBsZXQgYXJyOmFueVtdID0gcmVzLnZhbDtcclxuICAgICAgYXJyLmZvckVhY2goKGl0ZW06YW55KTp2b2lkPT57XHJcbiAgICAgICAgaWYoaXRlbS5kaWNOYW1lID09IFwi5bmz5Y+w5Yqo5oCBXCIpe1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgdGFiRmxhZzogJycsICAgICAgLy90YWLliIfmjaLnirbmgIFcclxuICAgICAgICAgICAgbW92aW5kSWQ6IGl0ZW0uaWRcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICB0aGlzLmdldFB0KCk7XHJcbiAgICAgICAgfWVsc2UgaWYoaXRlbS5kaWNOYW1lID09IFwi6YCa55+l5YWs5ZGKXCIpe1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgdGFiRmxhZzogJycsICAgICAgLy90YWLliIfmjaLnirbmgIFcclxuICAgICAgICAgICAgbm90aWNlSWQ6IGl0ZW0uaWRcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfWVsc2UgaWYoaXRlbS5kaWNOYW1lID09IFwi5rS75Yqo5L+h5oGvXCIpe1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgdGFiRmxhZzogJycsICAgICAgLy90YWLliIfmjaLnirbmgIFcclxuICAgICAgICAgICAgYWN0aXZpdHlJZDogaXRlbS5pZFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgLy/pobXpnaLliJ3lp4vljJZcclxuICBvbkxvYWQoKXtcclxuICAgIHRoaXMuZ2V0RGljKCk7ICAvL+iOt+WPluWtl+WFuOihqFxyXG4gICAgd3guc2V0TmF2aWdhdGlvbkJhclRpdGxlKHsgICAgIFxyXG4gICAgICB0aXRsZTogXCLliqjmgIFcIlxyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgLy/pobXpnaLmmL7npLpcclxuICBvblNob3coKXtcclxuICAgIFxyXG4gIH0sXHJcblxyXG4gIC8v6aG16Z2i5riy5p+T5a6M5oiQXHJcbiAgb25SZWFkeSgpe30sXHJcblxyXG4gIC8v6aG16Z2i6ZqQ6JePXHJcbiAgb25IaWRlKCl7fSxcclxuXHJcbiAgLy/pobXpnaLlhbPpl61cclxuICBvblVubG9hZCgpe31cclxufSlcclxuXHJcbmV4cG9ydCB7fTtcclxuIl19