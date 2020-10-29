"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api = getApp().globalData;
var https = require('../../utils/myRequest.js');
Component({
    properties: {},
    data: {
        imgUrl: '',
        listData: [],
        total: 0,
        pageIndex: 1,
        pageSize: 10,
    },
    methods: {
        getList: function (id) {
            var _this = this;
            var url = api.activity + '?ncolumnId=' + id + '&pageIndex=' + this.data.pageIndex + '&pageSize=' + this.data.pageSize;
            https.request(url, null, 'GET')
                .then(function (res) {
                _this.setData({
                    imgUrl: api.imgUrl,
                    total: res.total,
                    listData: res.list
                });
            }, function (err) {
                console.log(err);
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhY3Rpdml0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBRSxDQUFDLFVBQVUsQ0FBQztBQUNoQyxJQUFJLEtBQUssR0FBSSxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUNqRCxTQUFTLENBQUM7SUFJUixVQUFVLEVBQUUsRUFFWDtJQUtELElBQUksRUFBRTtRQUNKLE1BQU0sRUFBRSxFQUFFO1FBQ1YsUUFBUSxFQUFDLEVBQUU7UUFDWCxLQUFLLEVBQUUsQ0FBQztRQUNSLFNBQVMsRUFBRSxDQUFDO1FBQ1osUUFBUSxFQUFFLEVBQUU7S0FDYjtJQUtELE9BQU8sRUFBRTtRQUVOLE9BQU8sRUFBUCxVQUFRLEVBQVM7WUFBakIsaUJBWUE7WUFYQyxJQUFJLEdBQUcsR0FBVSxHQUFHLENBQUMsUUFBUSxHQUFHLGFBQWEsR0FBRyxFQUFFLEdBQUcsYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUM3SCxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDO2lCQUM5QixJQUFJLENBQUMsVUFBQyxHQUFPO2dCQUNaLEtBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ1gsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNO29CQUNsQixLQUFLLEVBQUUsR0FBRyxDQUFDLEtBQUs7b0JBQ2hCLFFBQVEsRUFBRSxHQUFHLENBQUMsSUFBSTtpQkFDbkIsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxFQUFDLFVBQUMsR0FBTztnQkFDUixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbW92aW5nLnRzXHJcbmNvbnN0IGFwaSA9IGdldEFwcCgpLmdsb2JhbERhdGE7ICAvLyDojrflj5blupTnlKjlrp7kvotcclxubGV0IGh0dHBzICA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL215UmVxdWVzdC5qcycpOyAgICAgLy/ojrflj5ZhamF45pa55rOVXHJcbkNvbXBvbmVudCh7XHJcbiAgLyoqXHJcbiAgICog57uE5Lu255qE5bGe5oCn5YiX6KGoXHJcbiAgICovXHJcbiAgcHJvcGVydGllczoge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnu4Tku7bnmoTliJ3lp4vmlbDmja5cclxuICAgKi9cclxuICBkYXRhOiB7XHJcbiAgICBpbWdVcmw6ICcnLCAgICAvL+acjeWKoeWZqFxyXG4gICAgbGlzdERhdGE6W10sICAgLy/liJfooajmlbDmja5cclxuICAgIHRvdGFsOiAwLCAgICAgIC8v5oC75pWwXHJcbiAgICBwYWdlSW5kZXg6IDEsICAvL+mhteaVsFxyXG4gICAgcGFnZVNpemU6IDEwLCAgLy/mlbDph49cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnu4Tku7bnmoTmlrnms5XliJfooahcclxuICAgKi9cclxuICBtZXRob2RzOiB7XHJcbiAgICAgLy/ojrflj5bmlbDmja5cclxuICAgICBnZXRMaXN0KGlkOm51bWJlcik6dm9pZHtcclxuICAgICAgbGV0IHVybDpzdHJpbmcgPSBhcGkuYWN0aXZpdHkgKyAnP25jb2x1bW5JZD0nICsgaWQgKyAnJnBhZ2VJbmRleD0nICsgdGhpcy5kYXRhLnBhZ2VJbmRleCArICcmcGFnZVNpemU9JyArIHRoaXMuZGF0YS5wYWdlU2l6ZTtcclxuICAgICAgaHR0cHMucmVxdWVzdCh1cmwsIG51bGwsICdHRVQnKVxyXG4gICAgICAudGhlbigocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBpbWdVcmw6IGFwaS5pbWdVcmwsXHJcbiAgICAgICAgICB0b3RhbDogcmVzLnRvdGFsLFxyXG4gICAgICAgICAgbGlzdERhdGE6IHJlcy5saXN0XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG5leHBvcnQge307Il19