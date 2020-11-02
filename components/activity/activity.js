"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Component({
    properties: {
        listData: Array,
        imgUrl: String,
        moreTitle: String,
        moreShow: Boolean
    },
    data: {},
    methods: {
        onMoreBtn: function () {
            this.triggerEvent('moreBtn');
        },
        newsInfo: function (e) {
            wx.navigateTo({
                url: '../newsInfo/newsInfo?id=' + e.currentTarget.dataset.id
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhY3Rpdml0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLFNBQVMsQ0FBQztJQUlSLFVBQVUsRUFBRTtRQUNWLFFBQVEsRUFBQyxLQUFLO1FBQ2QsTUFBTSxFQUFDLE1BQU07UUFDYixTQUFTLEVBQUMsTUFBTTtRQUNoQixRQUFRLEVBQUMsT0FBTztLQUNqQjtJQUtELElBQUksRUFBRSxFQUVMO0lBS0QsT0FBTyxFQUFFO1FBQ1AsU0FBUyxFQUFUO1lBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMvQixDQUFDO1FBQ0QsUUFBUSxFQUFSLFVBQVMsQ0FBSztZQUNaLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ1osR0FBRyxFQUFDLDBCQUEwQixHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUU7YUFDNUQsQ0FBQyxDQUFBO1FBQ0osQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYWN0aXZpdHkudHNcclxuQ29tcG9uZW50KHtcclxuICAvKipcclxuICAgKiDnu4Tku7bnmoTlsZ7mgKfliJfooahcclxuICAgKi9cclxuICBwcm9wZXJ0aWVzOiB7XHJcbiAgICBsaXN0RGF0YTpBcnJheSxcclxuICAgIGltZ1VybDpTdHJpbmcsXHJcbiAgICBtb3JlVGl0bGU6U3RyaW5nLFxyXG4gICAgbW9yZVNob3c6Qm9vbGVhblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOe7hOS7tueahOWIneWni+aVsOaNrlxyXG4gICAqL1xyXG4gIGRhdGE6IHtcclxuICAgIFxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOe7hOS7tueahOaWueazleWIl+ihqFxyXG4gICAqL1xyXG4gIG1ldGhvZHM6IHtcclxuICAgIG9uTW9yZUJ0bigpOnZvaWR7ICAvL+iwg+eUqOeItue7hOS7tuaWueazlVxyXG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCgnbW9yZUJ0bicpO1xyXG4gICAgfSxcclxuICAgIG5ld3NJbmZvKGU6YW55KTp2b2lkeyAgLy/or6bmg4VcclxuICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgdXJsOicuLi9uZXdzSW5mby9uZXdzSW5mbz9pZD0nICsgZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWRcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbn0pXHJcbmV4cG9ydCB7fTsiXX0=