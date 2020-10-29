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
            var url = api.notice + '?ncolumnId=' + id + '&pageIndex=' + this.data.pageIndex + '&pageSize=' + this.data.pageSize;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibm90aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFFLENBQUMsVUFBVSxDQUFDO0FBQ2hDLElBQUksS0FBSyxHQUFJLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0FBR2pELFNBQVMsQ0FBQztJQUlSLFVBQVUsRUFBRSxFQUVYO0lBS0QsSUFBSSxFQUFFO1FBQ0osTUFBTSxFQUFFLEVBQUU7UUFDVixRQUFRLEVBQUMsRUFBRTtRQUNYLEtBQUssRUFBRSxDQUFDO1FBQ1IsU0FBUyxFQUFFLENBQUM7UUFDWixRQUFRLEVBQUUsRUFBRTtLQUNiO0lBS0QsT0FBTyxFQUFFO1FBRVAsT0FBTyxFQUFQLFVBQVEsRUFBUztZQUFqQixpQkFZQztZQVhDLElBQUksR0FBRyxHQUFVLEdBQUcsQ0FBQyxNQUFNLEdBQUcsYUFBYSxHQUFHLEVBQUUsR0FBRyxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQzNILEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUM7aUJBQzlCLElBQUksQ0FBQyxVQUFDLEdBQU87Z0JBQ1osS0FBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU07b0JBQ2xCLEtBQUssRUFBRSxHQUFHLENBQUMsS0FBSztvQkFDaEIsUUFBUSxFQUFFLEdBQUcsQ0FBQyxJQUFJO2lCQUNuQixDQUFDLENBQUM7WUFDTCxDQUFDLEVBQUMsVUFBQyxHQUFPO2dCQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBtb3ZpbmcudHNcclxuY29uc3QgYXBpID0gZ2V0QXBwKCkuZ2xvYmFsRGF0YTsgIC8vIOiOt+WPluW6lOeUqOWunuS+i1xyXG5sZXQgaHR0cHMgID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvbXlSZXF1ZXN0LmpzJyk7ICAgICAvL+iOt+WPlmFqYXjmlrnms5VcclxuXHJcblxyXG5Db21wb25lbnQoe1xyXG4gIC8qKlxyXG4gICAqIOe7hOS7tueahOWxnuaAp+WIl+ihqFxyXG4gICAqL1xyXG4gIHByb3BlcnRpZXM6IHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog57uE5Lu255qE5Yid5aeL5pWw5o2uXHJcbiAgICovXHJcbiAgZGF0YToge1xyXG4gICAgaW1nVXJsOiAnJywgICAgLy/mnI3liqHlmahcclxuICAgIGxpc3REYXRhOltdLCAgIC8v5YiX6KGo5pWw5o2uXHJcbiAgICB0b3RhbDogMCwgICAgICAvL+aAu+aVsFxyXG4gICAgcGFnZUluZGV4OiAxLCAgLy/pobXmlbBcclxuICAgIHBhZ2VTaXplOiAxMCwgIC8v5pWw6YePXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog57uE5Lu255qE5pa55rOV5YiX6KGoXHJcbiAgICovXHJcbiAgbWV0aG9kczoge1xyXG4gICAgLy/ojrflj5bmlbDmja5cclxuICAgIGdldExpc3QoaWQ6bnVtYmVyKTp2b2lke1xyXG4gICAgICBsZXQgdXJsOnN0cmluZyA9IGFwaS5ub3RpY2UgKyAnP25jb2x1bW5JZD0nICsgaWQgKyAnJnBhZ2VJbmRleD0nICsgdGhpcy5kYXRhLnBhZ2VJbmRleCArICcmcGFnZVNpemU9JyArIHRoaXMuZGF0YS5wYWdlU2l6ZTtcclxuICAgICAgaHR0cHMucmVxdWVzdCh1cmwsIG51bGwsICdHRVQnKVxyXG4gICAgICAudGhlbigocmVzOmFueSk6dm9pZD0+e1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBpbWdVcmw6IGFwaS5pbWdVcmwsXHJcbiAgICAgICAgICB0b3RhbDogcmVzLnRvdGFsLFxyXG4gICAgICAgICAgbGlzdERhdGE6IHJlcy5saXN0XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sKGVycjphbnkpPT57XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG5leHBvcnQge307XHJcbiJdfQ==