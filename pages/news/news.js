"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api = getApp().globalData;
var https = require('../../utils/myRequest.js');
Page({
    data: {
        total: 0,
        pageIndex: 1,
        pageSize: 3,
        imgUrl: '',
        tabFlag: '',
        moreShow: false,
        listData: [],
        moreTitle: '暂无数据',
        movindId: '',
        noticeId: '',
        activityId: '',
    },
    onReachBottom: function () {
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
                imgUrl: api.imgUrl,
                total: res.total,
                listData: _this.data.listData.concat(res.list)
            });
            if (_this.data.listData.length < res.total) {
                _this.setData({
                    moreShow: true,
                    moreTitle: '下拉加载更多',
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
        var url = api.notice + '?ncolumnId=' + this.data.movindId + '&pageIndex=' + this.data.pageIndex + '&pageSize=' + this.data.pageSize;
        https.request(url, null, 'GET').then(function (res) {
            _this.setData({
                imgUrl: api.imgUrl,
                total: res.total,
                listData: _this.data.listData.concat(res.list)
            });
            if (_this.data.listData.length < res.total) {
                _this.setData({
                    moreShow: true,
                    moreTitle: '下拉加载更多',
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
        var url = api.activity + '?ncolumnId=' + this.data.movindId + '&pageIndex=' + this.data.pageIndex + '&pageSize=' + this.data.pageSize;
        https.request(url, null, 'GET').then(function (res) {
            _this.setData({
                imgUrl: api.imgUrl,
                total: res.total,
                listData: _this.data.listData.concat(res.list)
            });
            if (_this.data.listData.length < res.total) {
                _this.setData({
                    moreShow: true,
                    moreTitle: '下拉加载更多',
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
            pageSize: 3,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5ld3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQUUsQ0FBQyxVQUFVLENBQUM7QUFDaEMsSUFBSSxLQUFLLEdBQUksT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUM7QUFFakQsSUFBSSxDQUFDO0lBRUgsSUFBSSxFQUFFO1FBQ0osS0FBSyxFQUFFLENBQUM7UUFDUixTQUFTLEVBQUUsQ0FBQztRQUNaLFFBQVEsRUFBRSxDQUFDO1FBRVgsTUFBTSxFQUFFLEVBQUU7UUFFVixPQUFPLEVBQUUsRUFBRTtRQUNYLFFBQVEsRUFBRSxLQUFLO1FBQ2YsUUFBUSxFQUFFLEVBQUU7UUFDWixTQUFTLEVBQUUsTUFBTTtRQUVqQixRQUFRLEVBQUUsRUFBRTtRQUNaLFFBQVEsRUFBRSxFQUFFO1FBQ1osVUFBVSxFQUFFLEVBQUU7S0FDZjtJQUdELGFBQWEsRUFBYjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxRQUFRLEVBQUUsS0FBSztTQUNoQixDQUFDLENBQUE7UUFDRixJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLFNBQVMsRUFBQztZQUNoQyxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBQztnQkFDN0MsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ2Q7aUJBQUk7Z0JBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxRQUFRLEVBQUUsSUFBSTtpQkFDZixDQUFDLENBQUE7YUFDSDtTQUNGO2FBQUssSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxTQUFTLEVBQUM7WUFDdEMsSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUM7Z0JBQzdDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUNkO2lCQUFJO2dCQUNILElBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ1gsUUFBUSxFQUFFLElBQUk7b0JBQ2QsU0FBUyxFQUFFLE9BQU87aUJBQ25CLENBQUMsQ0FBQTthQUNIO1NBQ0Y7YUFBSTtZQUNILElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFDO2dCQUM3QyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDZDtpQkFBSTtnQkFDSCxJQUFJLENBQUMsT0FBTyxDQUFDO29CQUNYLFFBQVEsRUFBRSxJQUFJO29CQUNkLFNBQVMsRUFBRSxPQUFPO2lCQUNuQixDQUFDLENBQUE7YUFDSDtTQUNGO0lBRUgsQ0FBQztJQUlELEtBQUssRUFBTDtRQUFBLGlCQXNCQztRQXJCQyxJQUFJLEdBQUcsR0FBVSxHQUFHLENBQUMsUUFBUSxHQUFHLGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzdJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFPO1lBQzNDLEtBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNO2dCQUNsQixLQUFLLEVBQUUsR0FBRyxDQUFDLEtBQUs7Z0JBQ2hCLFFBQVEsRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQzthQUM5QyxDQUFDLENBQUM7WUFDSCxJQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsS0FBSyxFQUFDO2dCQUN2QyxLQUFJLENBQUMsT0FBTyxDQUFDO29CQUNYLFFBQVEsRUFBRSxJQUFJO29CQUNkLFNBQVMsRUFBRSxRQUFRO2lCQUNwQixDQUFDLENBQUM7YUFDSjtpQkFBSTtnQkFDSCxLQUFJLENBQUMsT0FBTyxDQUFDO29CQUNYLFFBQVEsRUFBRSxJQUFJO29CQUNkLFNBQVMsRUFBRSxPQUFPO2lCQUNuQixDQUFDLENBQUM7YUFDSjtRQUNILENBQUMsRUFBQyxVQUFDLEdBQU87WUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdELEtBQUssRUFBTDtRQUFBLGlCQXNCQztRQXJCQyxJQUFJLEdBQUcsR0FBVSxHQUFHLENBQUMsTUFBTSxHQUFHLGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzNJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFPO1lBQzNDLEtBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNO2dCQUNsQixLQUFLLEVBQUUsR0FBRyxDQUFDLEtBQUs7Z0JBQ2hCLFFBQVEsRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQzthQUM5QyxDQUFDLENBQUM7WUFDSCxJQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsS0FBSyxFQUFDO2dCQUN2QyxLQUFJLENBQUMsT0FBTyxDQUFDO29CQUNYLFFBQVEsRUFBRSxJQUFJO29CQUNkLFNBQVMsRUFBRSxRQUFRO2lCQUNwQixDQUFDLENBQUM7YUFDSjtpQkFBSTtnQkFDSCxLQUFJLENBQUMsT0FBTyxDQUFDO29CQUNYLFFBQVEsRUFBRSxJQUFJO29CQUNkLFNBQVMsRUFBRSxPQUFPO2lCQUNuQixDQUFDLENBQUM7YUFDSjtRQUNILENBQUMsRUFBQyxVQUFDLEdBQU87WUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdELEtBQUssRUFBTDtRQUFBLGlCQXNCQztRQXJCQyxJQUFJLEdBQUcsR0FBVSxHQUFHLENBQUMsUUFBUSxHQUFHLGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzdJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFPO1lBQzNDLEtBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNO2dCQUNsQixLQUFLLEVBQUUsR0FBRyxDQUFDLEtBQUs7Z0JBQ2hCLFFBQVEsRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQzthQUM5QyxDQUFDLENBQUM7WUFDSCxJQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsS0FBSyxFQUFDO2dCQUN2QyxLQUFJLENBQUMsT0FBTyxDQUFDO29CQUNYLFFBQVEsRUFBRSxJQUFJO29CQUNkLFNBQVMsRUFBRSxRQUFRO2lCQUNwQixDQUFDLENBQUM7YUFDSjtpQkFBSTtnQkFDSCxLQUFJLENBQUMsT0FBTyxDQUFDO29CQUNYLFFBQVEsRUFBRSxJQUFJO29CQUNkLFNBQVMsRUFBRSxPQUFPO2lCQUNuQixDQUFDLENBQUM7YUFDSjtRQUNILENBQUMsRUFBQyxVQUFDLEdBQU87WUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUlELEtBQUssRUFBTCxVQUFNLEdBQU87UUFDWCxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsT0FBTyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSTtZQUN4QixLQUFLLEVBQUUsQ0FBQztZQUNSLFNBQVMsRUFBRSxDQUFDO1lBQ1osUUFBUSxFQUFFLENBQUM7WUFDWCxRQUFRLEVBQUUsRUFBRTtZQUNaLFNBQVMsRUFBRSxNQUFNO1NBQ2xCLENBQUMsQ0FBQTtRQUVGLElBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksU0FBUyxFQUFDO1lBQzlCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNkO1FBQ0QsSUFBRyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxTQUFTLEVBQUM7WUFDOUIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2Q7UUFDRCxJQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLFNBQVMsRUFBQztZQUM5QixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDZDtJQUNILENBQUM7SUFHRCxNQUFNLEVBQU47UUFBQSxpQkEwQkM7UUF6QkMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLFVBQVUsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDO2FBQ3RELElBQUksQ0FBQyxVQUFDLEdBQU87WUFDWixJQUFJLEdBQUcsR0FBUyxHQUFHLENBQUMsR0FBRyxDQUFDO1lBQ3hCLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFRO2dCQUNuQixJQUFHLElBQUksQ0FBQyxPQUFPLElBQUksTUFBTSxFQUFDO29CQUN4QixLQUFJLENBQUMsT0FBTyxDQUFDO3dCQUNYLE9BQU8sRUFBRSxFQUFFO3dCQUNYLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBRTtxQkFDbEIsQ0FBQyxDQUFBO29CQUNGLEtBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztpQkFDZDtxQkFBSyxJQUFHLElBQUksQ0FBQyxPQUFPLElBQUksTUFBTSxFQUFDO29CQUM5QixLQUFJLENBQUMsT0FBTyxDQUFDO3dCQUNYLE9BQU8sRUFBRSxFQUFFO3dCQUNYLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBRTtxQkFDbEIsQ0FBQyxDQUFBO2lCQUNIO3FCQUFLLElBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxNQUFNLEVBQUM7b0JBQzlCLEtBQUksQ0FBQyxPQUFPLENBQUM7d0JBQ1gsT0FBTyxFQUFFLEVBQUU7d0JBQ1gsVUFBVSxFQUFFLElBQUksQ0FBQyxFQUFFO3FCQUNwQixDQUFDLENBQUE7aUJBQ0g7WUFDSCxDQUFDLENBQUMsQ0FBQTtRQUNKLENBQUMsRUFBQyxVQUFDLEdBQU87WUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdELE1BQU07UUFDSixFQUFFLENBQUMscUJBQXFCLENBQUM7WUFDdkIsS0FBSyxFQUFFLElBQUk7U0FDWixDQUFDLENBQUM7SUFDTCxDQUFDO0lBR0QsTUFBTTtRQUNKLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBR0QsT0FBTyxnQkFBRyxDQUFDO0lBR1gsTUFBTSxnQkFBRyxDQUFDO0lBR1YsUUFBUSxnQkFBRyxDQUFDO0NBQ2IsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbmV3cy50c1xyXG5jb25zdCBhcGkgPSBnZXRBcHAoKS5nbG9iYWxEYXRhOyAgICAgICAgICAgICAgICAgICAgICAvLyDojrflj5blupTnlKjlrp7kvotcclxubGV0IGh0dHBzICA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL215UmVxdWVzdC5qcycpOyAgICAgLy/ojrflj5ZhamF45pa55rOVXHJcblxyXG5QYWdlKHtcclxuICAvL+mhtemdouaVsOaNrlxyXG4gIGRhdGE6IHtcclxuICAgIHRvdGFsOiAwLCAgICAgICAgICAvL+aAu+aVsFxyXG4gICAgcGFnZUluZGV4OiAxLCAgICAgIC8v5p2h5pWwXHJcbiAgICBwYWdlU2l6ZTogMywgICAgICAgLy/pobXnoIFcclxuXHJcbiAgICBpbWdVcmw6ICcnLCAgICAgICAgLy/ojrflj5blm77niYfmnI3liqHlmahcclxuXHJcbiAgICB0YWJGbGFnOiAnJywgICAgICAgLy90YWLliIfmjaJcclxuICAgIG1vcmVTaG93OiBmYWxzZSwgICAgLy/liqDovb3mm7TlpJrnirbmgIFcclxuICAgIGxpc3REYXRhOiBbXSwgICAgICAvL+WIl+ihqFxyXG4gICAgbW9yZVRpdGxlOiAn5pqC5peg5pWw5o2uJywgICAgIC8v5Yqg6L295pu05aSaXHJcblxyXG4gICAgbW92aW5kSWQ6ICcnLCAgICAgIC8v5Yqo5oCBSURcclxuICAgIG5vdGljZUlkOiAnJywgICAgICAvL+WFrOWRiklEXHJcbiAgICBhY3Rpdml0eUlkOiAnJywgICAgLy/mtLvliqhJRFxyXG4gIH0sXHJcblxyXG4gIC8v6aG16Z2i5LiK5ouJXHJcbiAgb25SZWFjaEJvdHRvbSgpOnZvaWR7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBtb3JlU2hvdzogZmFsc2VcclxuICAgIH0pXHJcbiAgICBpZih0aGlzLmRhdGEudGFiRmxhZyA9PSBcImdvbmdnYW9cIil7ICAgLy/lhazlkYpcclxuICAgICAgaWYodGhpcy5kYXRhLmxpc3REYXRhLmxlbmd0aCA8IHRoaXMuZGF0YS50b3RhbCl7XHJcbiAgICAgICAgdGhpcy5nZXRUeigpO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgbW9yZVNob3c6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9ZWxzZSBpZih0aGlzLmRhdGEudGFiRmxhZyA9PSBcImh1b2RvbmdcIil7ICAgLy/mtLvliqhcclxuICAgICAgaWYodGhpcy5kYXRhLmxpc3REYXRhLmxlbmd0aCA8IHRoaXMuZGF0YS50b3RhbCl7XHJcbiAgICAgICAgdGhpcy5nZXRIZCgpO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgbW9yZVNob3c6IHRydWUsXHJcbiAgICAgICAgICBtb3JlVGl0bGU6ICflt7LliqDovb3lhajpg6gnLCAgICAgLy/liqDovb3mm7TlpJpcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9ZWxzZXsgICAvL+WKqOaAgVxyXG4gICAgICBpZih0aGlzLmRhdGEubGlzdERhdGEubGVuZ3RoIDwgdGhpcy5kYXRhLnRvdGFsKXtcclxuICAgICAgICB0aGlzLmdldFB0KCk7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBtb3JlU2hvdzogdHJ1ZSxcclxuICAgICAgICAgIG1vcmVUaXRsZTogJ+W3suWKoOi9veWFqOmDqCcsICAgICAvL+WKoOi9veabtOWkmlxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0gXHJcbiAgICBcclxuICB9LFxyXG5cclxuXHJcbiAgLy/ojrflj5blubPlj7DliqjmgIFcclxuICBnZXRQdCgpOnZvaWR7XHJcbiAgICBsZXQgdXJsOnN0cmluZyA9IGFwaS5hY3Rpdml0eSArICc/bmNvbHVtbklkPScgKyB0aGlzLmRhdGEubW92aW5kSWQgKyAnJnBhZ2VJbmRleD0nICsgdGhpcy5kYXRhLnBhZ2VJbmRleCArICcmcGFnZVNpemU9JyArIHRoaXMuZGF0YS5wYWdlU2l6ZTtcclxuICAgIGh0dHBzLnJlcXVlc3QodXJsLCBudWxsLCAnR0VUJykudGhlbigocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGltZ1VybDogYXBpLmltZ1VybCxcclxuICAgICAgICB0b3RhbDogcmVzLnRvdGFsLFxyXG4gICAgICAgIGxpc3REYXRhOiB0aGlzLmRhdGEubGlzdERhdGEuY29uY2F0KHJlcy5saXN0KVxyXG4gICAgICB9KTtcclxuICAgICAgaWYodGhpcy5kYXRhLmxpc3REYXRhLmxlbmd0aCA8IHJlcy50b3RhbCl7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIG1vcmVTaG93OiB0cnVlLFxyXG4gICAgICAgICAgbW9yZVRpdGxlOiAn5LiL5ouJ5Yqg6L295pu05aSaJywgICAgIC8v5Yqg6L295pu05aSaXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBtb3JlU2hvdzogdHJ1ZSxcclxuICAgICAgICAgIG1vcmVUaXRsZTogJ+W3suWKoOi9veWFqOmDqCcsICAgICAvL+WKoOi9veabtOWkmlxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgLy/ojrflj5bpgJrnn6XlhazlkYpcclxuICBnZXRUeigpOnZvaWR7XHJcbiAgICBsZXQgdXJsOnN0cmluZyA9IGFwaS5ub3RpY2UgKyAnP25jb2x1bW5JZD0nICsgdGhpcy5kYXRhLm1vdmluZElkICsgJyZwYWdlSW5kZXg9JyArIHRoaXMuZGF0YS5wYWdlSW5kZXggKyAnJnBhZ2VTaXplPScgKyB0aGlzLmRhdGEucGFnZVNpemU7XHJcbiAgICBodHRwcy5yZXF1ZXN0KHVybCwgbnVsbCwgJ0dFVCcpLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBpbWdVcmw6IGFwaS5pbWdVcmwsXHJcbiAgICAgICAgdG90YWw6IHJlcy50b3RhbCxcclxuICAgICAgICBsaXN0RGF0YTogdGhpcy5kYXRhLmxpc3REYXRhLmNvbmNhdChyZXMubGlzdClcclxuICAgICAgfSk7XHJcbiAgICAgIGlmKHRoaXMuZGF0YS5saXN0RGF0YS5sZW5ndGggPCByZXMudG90YWwpe1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBtb3JlU2hvdzogdHJ1ZSxcclxuICAgICAgICAgIG1vcmVUaXRsZTogJ+S4i+aLieWKoOi9veabtOWkmicsICAgICAvL+WKoOi9veabtOWkmlxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgbW9yZVNob3c6IHRydWUsXHJcbiAgICAgICAgICBtb3JlVGl0bGU6ICflt7LliqDovb3lhajpg6gnLCAgICAgLy/liqDovb3mm7TlpJpcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgXHJcbiAgLy/ojrflj5bmtLvliqjkv6Hmga9cclxuICBnZXRIZCgpOnZvaWR7XHJcbiAgICBsZXQgdXJsOnN0cmluZyA9IGFwaS5hY3Rpdml0eSArICc/bmNvbHVtbklkPScgKyB0aGlzLmRhdGEubW92aW5kSWQgKyAnJnBhZ2VJbmRleD0nICsgdGhpcy5kYXRhLnBhZ2VJbmRleCArICcmcGFnZVNpemU9JyArIHRoaXMuZGF0YS5wYWdlU2l6ZTtcclxuICAgIGh0dHBzLnJlcXVlc3QodXJsLCBudWxsLCAnR0VUJykudGhlbigocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGltZ1VybDogYXBpLmltZ1VybCxcclxuICAgICAgICB0b3RhbDogcmVzLnRvdGFsLFxyXG4gICAgICAgIGxpc3REYXRhOiB0aGlzLmRhdGEubGlzdERhdGEuY29uY2F0KHJlcy5saXN0KVxyXG4gICAgICB9KTtcclxuICAgICAgaWYodGhpcy5kYXRhLmxpc3REYXRhLmxlbmd0aCA8IHJlcy50b3RhbCl7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIG1vcmVTaG93OiB0cnVlLFxyXG4gICAgICAgICAgbW9yZVRpdGxlOiAn5LiL5ouJ5Yqg6L295pu05aSaJywgICAgIC8v5Yqg6L295pu05aSaXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBtb3JlU2hvdzogdHJ1ZSxcclxuICAgICAgICAgIG1vcmVUaXRsZTogJ+W3suWKoOi9veWFqOmDqCcsICAgICAvL+WKoOi9veabtOWkmlxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcblxyXG4gIC8vdGFi5qCH562+5YiH5o2i5pe26Kem5Y+RXHJcbiAgdGFiRm4ocmVzOmFueSk6dm9pZHtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHRhYkZsYWc6IHJlcy5kZXRhaWwubmFtZSwgICAgICAvL3RhYuWIh+aNoueKtuaAgVxyXG4gICAgICB0b3RhbDogMCwgICAgICAgICAgLy/mgLvmlbBcclxuICAgICAgcGFnZUluZGV4OiAxLCAgICAgIC8v5p2h5pWwXHJcbiAgICAgIHBhZ2VTaXplOiAzLCAgICAgICAvL+mhteeggVxyXG4gICAgICBsaXN0RGF0YTogW10sICAgICAgLy/liJfooahcclxuICAgICAgbW9yZVRpdGxlOiAn5pqC5peg5pWw5o2uJywgICAgIC8v5Yqg6L295pu05aSaXHJcbiAgICB9KVxyXG5cclxuICAgIGlmKHJlcy5kZXRhaWwubmFtZSA9PSAnZG9uZ3RhaScpeyAgICAvL+W5s+WPsOWKqOaAgVxyXG4gICAgICB0aGlzLmdldFB0KCk7XHJcbiAgICB9XHJcbiAgICBpZihyZXMuZGV0YWlsLm5hbWUgPT0gJ2dvbmdnYW8nKXsgICAgLy/pgJrnn6XlhazlkYpcclxuICAgICAgdGhpcy5nZXRUeigpO1xyXG4gICAgfVxyXG4gICAgaWYocmVzLmRldGFpbC5uYW1lID09ICdodW9kb25nJyl7ICAgIC8v5rS75Yqo5L+h5oGvXHJcbiAgICAgIHRoaXMuZ2V0SGQoKTtcclxuICAgIH1cclxuICB9LFxyXG4gXHJcbiAgLy/ojrflj5blrZflhbjooahcclxuICBnZXREaWMoKTp2b2lke1xyXG4gICAgaHR0cHMucmVxdWVzdChhcGkuc3VibWVudURpYyArICc/bW9pZD03MCcsIG51bGwsICdHRVQnKVxyXG4gICAgLnRoZW4oKHJlczphbnkpOnZvaWQ9PntcclxuICAgICAgbGV0IGFycjphbnlbXSA9IHJlcy52YWw7XHJcbiAgICAgIGFyci5mb3JFYWNoKChpdGVtOmFueSk6dm9pZD0+e1xyXG4gICAgICAgIGlmKGl0ZW0uZGljTmFtZSA9PSBcIuW5s+WPsOWKqOaAgVwiKXtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIHRhYkZsYWc6ICcnLCAgICAgIC8vdGFi5YiH5o2i54q25oCBXHJcbiAgICAgICAgICAgIG1vdmluZElkOiBpdGVtLmlkXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgdGhpcy5nZXRQdCgpO1xyXG4gICAgICAgIH1lbHNlIGlmKGl0ZW0uZGljTmFtZSA9PSBcIumAmuefpeWFrOWRilwiKXtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIHRhYkZsYWc6ICcnLCAgICAgIC8vdGFi5YiH5o2i54q25oCBXHJcbiAgICAgICAgICAgIG5vdGljZUlkOiBpdGVtLmlkXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1lbHNlIGlmKGl0ZW0uZGljTmFtZSA9PSBcIua0u+WKqOS/oeaBr1wiKXtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIHRhYkZsYWc6ICcnLCAgICAgIC8vdGFi5YiH5o2i54q25oCBXHJcbiAgICAgICAgICAgIGFjdGl2aXR5SWQ6IGl0ZW0uaWRcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIC8v6aG16Z2i5Yid5aeL5YyWXHJcbiAgb25Mb2FkKCl7XHJcbiAgICB3eC5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoeyAgICAgXHJcbiAgICAgIHRpdGxlOiBcIuWKqOaAgVwiXHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICAvL+mhtemdouaYvuekulxyXG4gIG9uU2hvdygpe1xyXG4gICAgdGhpcy5nZXREaWMoKTsgIC8v6I635Y+W5a2X5YW46KGoXHJcbiAgfSxcclxuXHJcbiAgLy/pobXpnaLmuLLmn5PlrozmiJBcclxuICBvblJlYWR5KCl7fSxcclxuXHJcbiAgLy/pobXpnaLpmpDol49cclxuICBvbkhpZGUoKXt9LFxyXG5cclxuICAvL+mhtemdouWFs+mXrVxyXG4gIG9uVW5sb2FkKCl7fVxyXG59KVxyXG5cclxuZXhwb3J0IHt9O1xyXG4iXX0=