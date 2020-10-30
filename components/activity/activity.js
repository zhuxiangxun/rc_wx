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
        newsInfo: function (e) {
            wx.navigateTo({
                url: '../newsInfo/newsInfo?id=' + e.currentTarget.dataset.id
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhY3Rpdml0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLFNBQVMsQ0FBQztJQUlSLFVBQVUsRUFBRTtRQUNWLFFBQVEsRUFBQyxLQUFLO1FBQ2QsTUFBTSxFQUFDLE1BQU07UUFDYixTQUFTLEVBQUMsTUFBTTtRQUNoQixRQUFRLEVBQUMsT0FBTztLQUNqQjtJQUtELElBQUksRUFBRSxFQUVMO0lBS0QsT0FBTyxFQUFFO1FBQ1AsUUFBUSxFQUFSLFVBQVMsQ0FBSztZQUNaLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ1osR0FBRyxFQUFDLDBCQUEwQixHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUU7YUFDNUQsQ0FBQyxDQUFBO1FBQ0osQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYWN0aXZpdHkudHNcclxuQ29tcG9uZW50KHtcclxuICAvKipcclxuICAgKiDnu4Tku7bnmoTlsZ7mgKfliJfooahcclxuICAgKi9cclxuICBwcm9wZXJ0aWVzOiB7XHJcbiAgICBsaXN0RGF0YTpBcnJheSxcclxuICAgIGltZ1VybDpTdHJpbmcsXHJcbiAgICBtb3JlVGl0bGU6U3RyaW5nLFxyXG4gICAgbW9yZVNob3c6Qm9vbGVhblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOe7hOS7tueahOWIneWni+aVsOaNrlxyXG4gICAqL1xyXG4gIGRhdGE6IHtcclxuICAgIFxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOe7hOS7tueahOaWueazleWIl+ihqFxyXG4gICAqL1xyXG4gIG1ldGhvZHM6IHtcclxuICAgIG5ld3NJbmZvKGU6YW55KTp2b2lke1xyXG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6Jy4uL25ld3NJbmZvL25ld3NJbmZvP2lkPScgKyBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuZXhwb3J0IHt9OyJdfQ==