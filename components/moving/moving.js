"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api = getApp().globalData;
var https = require('../../utils/myRequest.js');
Component({
    properties: {},
    data: {
        moreName: '',
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
                console.log(_this.data.listData.length);
                if (_this.data.listData.length < res.total) {
                    _this.setData({
                        moreName: '下拉加载更多',
                        imgUrl: api.imgUrl,
                        total: res.total,
                        listData: _this.data.listData.concat(res.list)
                    });
                }
                else {
                    _this.setData({
                        moreName: '已加载全部'
                    });
                }
            }, function (err) {
                console.log(err);
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW92aW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW92aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFFLENBQUMsVUFBVSxDQUFDO0FBQ2hDLElBQUksS0FBSyxHQUFJLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0FBRWpELFNBQVMsQ0FBQztJQUlSLFVBQVUsRUFBRSxFQUVYO0lBS0QsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLEVBQUU7UUFDWixNQUFNLEVBQUUsRUFBRTtRQUNWLFFBQVEsRUFBQyxFQUFFO1FBQ1gsS0FBSyxFQUFFLENBQUM7UUFDUixTQUFTLEVBQUUsQ0FBQztRQUNaLFFBQVEsRUFBRSxFQUFFO0tBQ2I7SUFLRCxPQUFPLEVBQUU7UUFFUCxPQUFPLEVBQVAsVUFBUSxFQUFTO1lBQWpCLGlCQXFCQztZQXBCQyxJQUFJLEdBQUcsR0FBVSxHQUFHLENBQUMsTUFBTSxHQUFHLGFBQWEsR0FBRyxFQUFFLEdBQUcsYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUMzSCxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDO2lCQUM5QixJQUFJLENBQUMsVUFBQyxHQUFPO2dCQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUE7Z0JBQ3RDLElBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxLQUFLLEVBQUM7b0JBQ3ZDLEtBQUksQ0FBQyxPQUFPLENBQUM7d0JBQ1gsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLE1BQU0sRUFBRSxHQUFHLENBQUMsTUFBTTt3QkFDbEIsS0FBSyxFQUFFLEdBQUcsQ0FBQyxLQUFLO3dCQUNoQixRQUFRLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7cUJBQzlDLENBQUMsQ0FBQztpQkFDSjtxQkFBSTtvQkFDSCxLQUFJLENBQUMsT0FBTyxDQUFDO3dCQUNYLFFBQVEsRUFBRSxPQUFPO3FCQUNsQixDQUFDLENBQUM7aUJBQ0o7WUFFSCxDQUFDLEVBQUMsVUFBQyxHQUFPO2dCQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBtb3ZpbmcudHNcclxuY29uc3QgYXBpID0gZ2V0QXBwKCkuZ2xvYmFsRGF0YTsgIC8vIOiOt+WPluW6lOeUqOWunuS+i1xyXG5sZXQgaHR0cHMgID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvbXlSZXF1ZXN0LmpzJyk7ICAgICAvL+iOt+WPlmFqYXjmlrnms5VcclxuXHJcbkNvbXBvbmVudCh7XHJcbiAgLyoqXHJcbiAgICog57uE5Lu255qE5bGe5oCn5YiX6KGoXHJcbiAgICovXHJcbiAgcHJvcGVydGllczoge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnu4Tku7bnmoTliJ3lp4vmlbDmja5cclxuICAgKi9cclxuICBkYXRhOiB7XHJcbiAgICBtb3JlTmFtZTogJycsICAvL+WKoOi9veabtOWkmuWtl+autVxyXG4gICAgaW1nVXJsOiAnJywgICAgLy/mnI3liqHlmahcclxuICAgIGxpc3REYXRhOltdLCAgIC8v5YiX6KGo5pWw5o2uXHJcbiAgICB0b3RhbDogMCwgICAgICAvL+aAu+aVsFxyXG4gICAgcGFnZUluZGV4OiAxLCAgLy/pobXmlbBcclxuICAgIHBhZ2VTaXplOiAxMCwgIC8v5pWw6YePXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog57uE5Lu255qE5pa55rOV5YiX6KGoXHJcbiAgICovXHJcbiAgbWV0aG9kczoge1xyXG4gICAgLy/ojrflj5bmlbDmja5cclxuICAgIGdldExpc3QoaWQ6bnVtYmVyKTp2b2lke1xyXG4gICAgICBsZXQgdXJsOnN0cmluZyA9IGFwaS5jaXJjbGUgKyAnP25jb2x1bW5JZD0nICsgaWQgKyAnJnBhZ2VJbmRleD0nICsgdGhpcy5kYXRhLnBhZ2VJbmRleCArICcmcGFnZVNpemU9JyArIHRoaXMuZGF0YS5wYWdlU2l6ZTtcclxuICAgICAgaHR0cHMucmVxdWVzdCh1cmwsIG51bGwsICdHRVQnKVxyXG4gICAgICAudGhlbigocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YS5saXN0RGF0YS5sZW5ndGgpXHJcbiAgICAgICAgaWYodGhpcy5kYXRhLmxpc3REYXRhLmxlbmd0aCA8IHJlcy50b3RhbCl7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBtb3JlTmFtZTogJ+S4i+aLieWKoOi9veabtOWkmicsXHJcbiAgICAgICAgICAgIGltZ1VybDogYXBpLmltZ1VybCxcclxuICAgICAgICAgICAgdG90YWw6IHJlcy50b3RhbCxcclxuICAgICAgICAgICAgbGlzdERhdGE6IHRoaXMuZGF0YS5saXN0RGF0YS5jb25jYXQocmVzLmxpc3QpXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIG1vcmVOYW1lOiAn5bey5Yqg6L295YWo6YOoJ1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICB9LChlcnI6YW55KT0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufSlcclxuZXhwb3J0IHt9OyJdfQ==