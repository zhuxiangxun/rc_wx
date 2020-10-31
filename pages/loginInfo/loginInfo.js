"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api = getApp().globalData;
var https = require('../../utils/myRequest.js');
var Toast = require('../../miniprogram_npm/@vant/weapp/toast/toast.js').default;
Page({
    data: {
        danWeiName: '',
        phoneNum: '',
        realName: '',
        username: '',
        xiaQuName: '',
    },
    onLoad: function () {
        var _this = this;
        https.successRequest(api.curUser, null, 'get')
            .then(function (res) {
            if (res) {
                _this.setData({
                    danWeiName: res.val.danWeiName,
                    phoneNum: res.val.phoneNum,
                    realName: res.val.realName,
                    username: res.val.username,
                    xiaQuName: res.val.xiaQuName,
                });
            }
        }, function (err) {
            Toast(err);
        });
    },
    onReady: function () { },
    onShow: function () { },
    onHide: function () { },
    onUnload: function () { }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW5JbmZvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW5JbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFFLENBQUMsVUFBVSxDQUFDO0FBQ2hDLElBQUksS0FBSyxHQUFJLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0FBQ2pELElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxrREFBa0QsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUVoRixJQUFJLENBQUM7SUFFSCxJQUFJLEVBQUU7UUFDSixVQUFVLEVBQUUsRUFBRTtRQUNkLFFBQVEsRUFBRSxFQUFFO1FBQ1osUUFBUSxFQUFFLEVBQUU7UUFDWixRQUFRLEVBQUUsRUFBRTtRQUNaLFNBQVMsRUFBRSxFQUFFO0tBQ2Q7SUFJRCxNQUFNLEVBQU47UUFBQSxpQkFlQztRQWRDLEtBQUssQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDO2FBQzdDLElBQUksQ0FBQyxVQUFDLEdBQU87WUFDWixJQUFHLEdBQUcsRUFBQztnQkFDTCxLQUFJLENBQUMsT0FBTyxDQUFDO29CQUNYLFVBQVUsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVU7b0JBQzlCLFFBQVEsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVE7b0JBQzFCLFFBQVEsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVE7b0JBQzFCLFFBQVEsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVE7b0JBQzFCLFNBQVMsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLFNBQVM7aUJBQzdCLENBQUMsQ0FBQTthQUNIO1FBQ0gsQ0FBQyxFQUFDLFVBQUMsR0FBTztZQUNSLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNiLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdELE9BQU8sZ0JBQUcsQ0FBQztJQUdYLE1BQU0sZ0JBQUcsQ0FBQztJQUdWLE1BQU0sZ0JBQUcsQ0FBQztJQUdWLFFBQVEsZ0JBQUcsQ0FBQztDQUNiLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGxvZ2luSW5mby50c1xyXG5jb25zdCBhcGkgPSBnZXRBcHAoKS5nbG9iYWxEYXRhOyAgLy8g6I635Y+W5bqU55So5a6e5L6LXHJcbmxldCBodHRwcyAgPSByZXF1aXJlKCcuLi8uLi91dGlscy9teVJlcXVlc3QuanMnKTsgIC8v6I635Y+WYWpheOaWueazlVxyXG5sZXQgVG9hc3QgPSByZXF1aXJlKCcuLi8uLi9taW5pcHJvZ3JhbV9ucG0vQHZhbnQvd2VhcHAvdG9hc3QvdG9hc3QuanMnKS5kZWZhdWx0O1xyXG5cclxuUGFnZSh7XHJcbiAgLy/pobXpnaLmlbDmja5cclxuICBkYXRhOiB7XHJcbiAgICBkYW5XZWlOYW1lOiAnJywgICAvL+WNleS9jeWQjVxyXG4gICAgcGhvbmVOdW06ICcnLCAgICAgLy/nlLXor51cclxuICAgIHJlYWxOYW1lOiAnJywgICAgIC8v5pi156ewXHJcbiAgICB1c2VybmFtZTogJycsICAgICAvL+eUqOaIt+WQjVxyXG4gICAgeGlhUXVOYW1lOiAnJywgICAgLy/ovpbljLpcclxuICB9LFxyXG5cclxuXHJcbiAgLy/pobXpnaLliJ3lp4vljJZcclxuICBvbkxvYWQoKXtcclxuICAgIGh0dHBzLnN1Y2Nlc3NSZXF1ZXN0KGFwaS5jdXJVc2VyLCBudWxsLCAnZ2V0JylcclxuICAgIC50aGVuKChyZXM6YW55KTp2b2lkPT57XHJcbiAgICAgIGlmKHJlcyl7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIGRhbldlaU5hbWU6IHJlcy52YWwuZGFuV2VpTmFtZSwgICAvL+WNleS9jeWQjVxyXG4gICAgICAgICAgcGhvbmVOdW06IHJlcy52YWwucGhvbmVOdW0sICAgICAgIC8v55S16K+dXHJcbiAgICAgICAgICByZWFsTmFtZTogcmVzLnZhbC5yZWFsTmFtZSwgICAgICAgLy/mmLXnp7BcclxuICAgICAgICAgIHVzZXJuYW1lOiByZXMudmFsLnVzZXJuYW1lLCAgICAgICAvL+eUqOaIt+WQjVxyXG4gICAgICAgICAgeGlhUXVOYW1lOiByZXMudmFsLnhpYVF1TmFtZSwgICAgIC8v6L6W5Yy6XHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSwoZXJyOmFueSk9PntcclxuICAgICAgVG9hc3QoZXJyKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIC8v6aG16Z2i5riy5p+T5a6M5oiQXHJcbiAgb25SZWFkeSgpe30sXHJcblxyXG4gIC8v6aG16Z2i5pi+56S6XHJcbiAgb25TaG93KCl7fSxcclxuXHJcbiAgLy/pobXpnaLpmpDol49cclxuICBvbkhpZGUoKXt9LFxyXG5cclxuICAvL+mhtemdouWFs+mXrVxyXG4gIG9uVW5sb2FkKCl7fVxyXG59KVxyXG5leHBvcnQge307XHJcbiJdfQ==