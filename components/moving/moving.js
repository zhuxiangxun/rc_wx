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
            var url = api.circle + '?ncolumnId=' + id + '&pageIndex=' + this.data.pageIndex + '&pageSize=' + this.data.pageSize;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW92aW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW92aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFFLENBQUMsVUFBVSxDQUFDO0FBQ2hDLElBQUksS0FBSyxHQUFJLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0FBRWpELFNBQVMsQ0FBQztJQUlSLFVBQVUsRUFBRSxFQUVYO0lBS0QsSUFBSSxFQUFFO1FBQ0osTUFBTSxFQUFFLEVBQUU7UUFDVixRQUFRLEVBQUMsRUFBRTtRQUNYLEtBQUssRUFBRSxDQUFDO1FBQ1IsU0FBUyxFQUFFLENBQUM7UUFDWixRQUFRLEVBQUUsRUFBRTtLQUNiO0lBS0QsT0FBTyxFQUFFO1FBRVAsT0FBTyxFQUFQLFVBQVEsRUFBUztZQUFqQixpQkFZQztZQVhDLElBQUksR0FBRyxHQUFVLEdBQUcsQ0FBQyxNQUFNLEdBQUcsYUFBYSxHQUFHLEVBQUUsR0FBRyxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQzNILEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUM7aUJBQzlCLElBQUksQ0FBQyxVQUFDLEdBQU87Z0JBQ1osS0FBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU07b0JBQ2xCLEtBQUssRUFBRSxHQUFHLENBQUMsS0FBSztvQkFDaEIsUUFBUSxFQUFFLEdBQUcsQ0FBQyxJQUFJO2lCQUNuQixDQUFDLENBQUM7WUFDTCxDQUFDLEVBQUMsVUFBQyxHQUFPO2dCQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBtb3ZpbmcudHNcclxuY29uc3QgYXBpID0gZ2V0QXBwKCkuZ2xvYmFsRGF0YTsgIC8vIOiOt+WPluW6lOeUqOWunuS+i1xyXG5sZXQgaHR0cHMgID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvbXlSZXF1ZXN0LmpzJyk7ICAgICAvL+iOt+WPlmFqYXjmlrnms5VcclxuXHJcbkNvbXBvbmVudCh7XHJcbiAgLyoqXHJcbiAgICog57uE5Lu255qE5bGe5oCn5YiX6KGoXHJcbiAgICovXHJcbiAgcHJvcGVydGllczoge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnu4Tku7bnmoTliJ3lp4vmlbDmja5cclxuICAgKi9cclxuICBkYXRhOiB7XHJcbiAgICBpbWdVcmw6ICcnLCAgICAvL+acjeWKoeWZqFxyXG4gICAgbGlzdERhdGE6W10sICAgLy/liJfooajmlbDmja5cclxuICAgIHRvdGFsOiAwLCAgICAgIC8v5oC75pWwXHJcbiAgICBwYWdlSW5kZXg6IDEsICAvL+mhteaVsFxyXG4gICAgcGFnZVNpemU6IDEwLCAgLy/mlbDph49cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnu4Tku7bnmoTmlrnms5XliJfooahcclxuICAgKi9cclxuICBtZXRob2RzOiB7XHJcbiAgICAvL+iOt+WPluaVsOaNrlxyXG4gICAgZ2V0TGlzdChpZDpudW1iZXIpOnZvaWR7XHJcbiAgICAgIGxldCB1cmw6c3RyaW5nID0gYXBpLmNpcmNsZSArICc/bmNvbHVtbklkPScgKyBpZCArICcmcGFnZUluZGV4PScgKyB0aGlzLmRhdGEucGFnZUluZGV4ICsgJyZwYWdlU2l6ZT0nICsgdGhpcy5kYXRhLnBhZ2VTaXplO1xyXG4gICAgICBodHRwcy5yZXF1ZXN0KHVybCwgbnVsbCwgJ0dFVCcpXHJcbiAgICAgIC50aGVuKChyZXM6YW55KTp2b2lkPT57XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIGltZ1VybDogYXBpLmltZ1VybCxcclxuICAgICAgICAgIHRvdGFsOiByZXMudG90YWwsXHJcbiAgICAgICAgICBsaXN0RGF0YTogcmVzLmxpc3RcclxuICAgICAgICB9KTtcclxuICAgICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn0pXHJcbmV4cG9ydCB7fTsiXX0=