"use strict";
var api = getApp().globalData;
Page({
    data: {
        url: '',
        isTc: '',
    },
    onShareAppMessage: function (res) {
        if (res.from === 'button') {
            console.log(res.target);
        }
        return {
            title: '青岛人才创新创业平台地图',
            path: '/pages/home/home',
            imageUrl: ''
        };
    },
    onShareTimeline: function () {
        return {
            title: '青岛人才创新创业平台地图',
            query: {},
            imageUrl: ''
        };
    },
    onLoad: function (option) {
        if (api.loginStatus == 'yh') {
            this.setData({
                isTc: '0'
            });
        }
        else {
            this.setData({
                isTc: '1'
            });
        }
        var token = wx.getStorageSync('token');
        if (option.name == '创新') {
            this.setData({
                url: 'https://rcapp.qdcsdn.cn/#/xcXcxPlatformDemo?token=' + token + '&id=' + option.id + '&isTc=' + this.data.isTc
            });
        }
        if (option.name == '创业') {
            this.setData({
                url: 'https://rcapp.qdcsdn.cn/#/xcXcyPlatformDemo?token=' + token + '&id=' + option.id + '&isTc=' + this.data.isTc
            });
        }
        if (option.name == '项目') {
            this.setData({
                url: 'https://rcapp.qdcsdn.cn/#/xcXproject?token=' + token + '&id=' + option.id + '&isTc=' + this.data.isTc
            });
        }
        if (option.name == '场地') {
            this.setData({
                url: 'https://rcapp.qdcsdn.cn/#/xcXztSpace?token=' + token + '&id=' + option.id + '&isTc=' + this.data.isTc
            });
        }
        if (option.name == '服务') {
            this.setData({
                url: 'https://rcapp.qdcsdn.cn/#/xcXserverJg?token=' + token + '&id=' + option.id + '&isTc=' + this.data.isTc
            });
        }
        if (option.name == '金融') {
            this.setData({
                url: 'https://rcapp.qdcsdn.cn/#/xcXserverJg?token=' + token + '&id=' + option.id + '&isTc=' + this.data.isTc
            });
        }
        if (option.name == '资金') {
            this.setData({
                url: 'https://rcapp.qdcsdn.cn/#/xcXtzDemand?token=' + token + '&id=' + option.id + '&isTc=' + this.data.isTc
            });
        }
        if (option.name == '需求') {
            this.setData({
                url: 'https://rcapp.qdcsdn.cn/#/xcXtzDemand?token=' + token + '&id=' + option.id + '&isTc=' + this.data.isTc
            });
        }
        if (option.name == '融资') {
            this.setData({
                url: 'https://rcapp.qdcsdn.cn/#/xcXrzDemand?token=' + token + '&id=' + option.id + '&isTc=' + this.data.isTc
            });
        }
        if (option.name == '投资') {
            this.setData({
                url: 'https://rcapp.qdcsdn.cn/#/xcXcxPlatformDemo?token=' + token + '&id=' + option.id + '&isTc=' + this.data.isTc
            });
        }
        wx.setNavigationBarTitle({
            title: "地图标记详情"
        });
    },
    onReady: function () { },
    onShow: function () { },
    onHide: function () { },
    onUnload: function () { }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwRGV0YWlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFwRGV0YWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQUUsQ0FBQyxVQUFVLENBQUM7QUFFaEMsSUFBSSxDQUFDO0lBRUgsSUFBSSxFQUFFO1FBQ0wsR0FBRyxFQUFFLEVBQUU7UUFDUCxJQUFJLEVBQUUsRUFBRTtLQUNSO0lBRUQsaUJBQWlCLEVBQUMsVUFBQyxHQUFPO1FBQ3hCLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7WUFFekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDekI7UUFDRCxPQUFPO1lBQ0wsS0FBSyxFQUFFLGNBQWM7WUFDckIsSUFBSSxFQUFFLGtCQUFrQjtZQUN4QixRQUFRLEVBQUUsRUFBRTtTQUNiLENBQUE7SUFDSCxDQUFDO0lBRUQsZUFBZSxFQUFDO1FBQ2QsT0FBTztZQUNMLEtBQUssRUFBRSxjQUFjO1lBQ3JCLEtBQUssRUFBRSxFQUFFO1lBQ1QsUUFBUSxFQUFFLEVBQUU7U0FDYixDQUFBO0lBQ0gsQ0FBQztJQUlELE1BQU0sRUFBTixVQUFPLE1BQVU7UUFDZixJQUFHLEdBQUcsQ0FBQyxXQUFXLElBQUksSUFBSSxFQUFDO1lBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsSUFBSSxFQUFFLEdBQUc7YUFDVixDQUFDLENBQUE7U0FDSDthQUFJO1lBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxJQUFJLEVBQUUsR0FBRzthQUNWLENBQUMsQ0FBQTtTQUNIO1FBQ0QsSUFBSSxLQUFLLEdBQVUsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QyxJQUFHLE1BQU0sQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFDO1lBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsR0FBRyxFQUFFLG9EQUFvRCxHQUFH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QTtTQUNIO1FBR0QsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1lBQ3ZCLEtBQUssRUFBRSxRQUFRO1NBQ2hCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFHRCxPQUFPLGdCQUFHLENBQUM7SUFHWCxNQUFNLGdCQUFHLENBQUM7SUFHVixNQUFNLGdCQUFHLENBQUM7SUFHVixRQUFRLGdCQUFHLENBQUM7Q0FDYixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBtYXBEZXRhaWwudHNcclxuY29uc3QgYXBpID0gZ2V0QXBwKCkuZ2xvYmFsRGF0YTsgIC8vIOiOt+WPluW6lOeUqOWunuS+i1xyXG5cclxuUGFnZSh7XHJcbiAgLy/pobXpnaLmlbDmja5cclxuICBkYXRhOiB7XHJcbiAgIHVybDogJycsXHJcbiAgIGlzVGM6ICcnLCAgICAgICAgIC8v57uf5625MeOAgeacuuaehDBcclxuICB9LFxyXG4gIFxyXG4gIG9uU2hhcmVBcHBNZXNzYWdlOihyZXM6YW55KTphbnk9PiB7ICAvL+WPkemAgee7meaci+WPi1xyXG4gICAgaWYgKHJlcy5mcm9tID09PSAnYnV0dG9uJykge1xyXG4gICAgICAvLyDmnaXoh6rpobXpnaLlhoXovazlj5HmjInpkq5cclxuICAgICAgY29uc29sZS5sb2cocmVzLnRhcmdldCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0aXRsZTogJ+mdkuWym+S6uuaJjeWIm+aWsOWIm+S4muW5s+WPsOWcsOWbvicsXHJcbiAgICAgIHBhdGg6ICcvcGFnZXMvaG9tZS9ob21lJyxcclxuICAgICAgaW1hZ2VVcmw6ICcnXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgb25TaGFyZVRpbWVsaW5lOigpOmFueT0+IHsgIC8v5YiG5LqrXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0aXRsZTogJ+mdkuWym+S6uuaJjeWIm+aWsOWIm+S4muW5s+WPsOWcsOWbvicsXHJcbiAgICAgIHF1ZXJ5OiB7fSxcclxuICAgICAgaW1hZ2VVcmw6ICcnXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcblxyXG4gIC8v6aG16Z2i5Yid5aeL5YyWXHJcbiAgb25Mb2FkKG9wdGlvbjphbnkpe1xyXG4gICAgaWYoYXBpLmxvZ2luU3RhdHVzID09ICd5aCcpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGlzVGM6ICcwJ1xyXG4gICAgICB9KVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgaXNUYzogJzEnXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBsZXQgdG9rZW46c3RyaW5nID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3Rva2VuJyk7XHJcbiAgICBpZihvcHRpb24ubmFtZSA9PSAn5Yib5pawJyl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9yY2FwcC5xZGNzZG4uY24vIy94Y1hjeFBsYXRmb3JtRGVtbz90b2tlbj0nICsgdG9rZW4gKyAnJmlkPScgKyBvcHRpb24uaWQgKyAnJmlzVGM9JyArIHRoaXMuZGF0YS5pc1RjXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBpZihvcHRpb24ubmFtZSA9PSAn5Yib5LiaJyl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9yY2FwcC5xZGNzZG4uY24vIy94Y1hjeVBsYXRmb3JtRGVtbz90b2tlbj0nICsgdG9rZW4gKyAnJmlkPScgKyBvcHRpb24uaWQgKyAnJmlzVGM9JyArIHRoaXMuZGF0YS5pc1RjXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBpZihvcHRpb24ubmFtZSA9PSAn6aG555uuJyl7ICAvL+aJvuiejei1hFxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHVybDogJ2h0dHBzOi8vcmNhcHAucWRjc2RuLmNuLyMveGNYcHJvamVjdD90b2tlbj0nICsgdG9rZW4gKyAnJmlkPScgKyBvcHRpb24uaWQgKyAnJmlzVGM9JyArIHRoaXMuZGF0YS5pc1RjXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBpZihvcHRpb24ubmFtZSA9PSAn5Zy65ZywJyl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9yY2FwcC5xZGNzZG4uY24vIy94Y1h6dFNwYWNlP3Rva2VuPScgKyB0b2tlbiArICcmaWQ9JyArIG9wdGlvbi5pZCArICcmaXNUYz0nICsgdGhpcy5kYXRhLmlzVGNcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIGlmKG9wdGlvbi5uYW1lID09ICfmnI3liqEnKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICB1cmw6ICdodHRwczovL3JjYXBwLnFkY3Nkbi5jbi8jL3hjWHNlcnZlckpnP3Rva2VuPScgKyB0b2tlbiArICcmaWQ9JyArIG9wdGlvbi5pZCArICcmaXNUYz0nICsgdGhpcy5kYXRhLmlzVGNcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIGlmKG9wdGlvbi5uYW1lID09ICfph5Hono0nKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICB1cmw6ICdodHRwczovL3JjYXBwLnFkY3Nkbi5jbi8jL3hjWHNlcnZlckpnP3Rva2VuPScgKyB0b2tlbiArICcmaWQ9JyArIG9wdGlvbi5pZCArICcmaXNUYz0nICsgdGhpcy5kYXRhLmlzVGNcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIGlmKG9wdGlvbi5uYW1lID09ICfotYTph5EnKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICB1cmw6ICdodHRwczovL3JjYXBwLnFkY3Nkbi5jbi8jL3hjWHR6RGVtYW5kP3Rva2VuPScgKyB0b2tlbiArICcmaWQ9JyArIG9wdGlvbi5pZCArICcmaXNUYz0nICsgdGhpcy5kYXRhLmlzVGNcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIGlmKG9wdGlvbi5uYW1lID09ICfpnIDmsYInKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICB1cmw6ICdodHRwczovL3JjYXBwLnFkY3Nkbi5jbi8jL3hjWHR6RGVtYW5kP3Rva2VuPScgKyB0b2tlbiArICcmaWQ9JyArIG9wdGlvbi5pZCArICcmaXNUYz0nICsgdGhpcy5kYXRhLmlzVGNcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIGlmKG9wdGlvbi5uYW1lID09ICfono3otYQnKXsgIC8v5om+6J6N6LWEXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9yY2FwcC5xZGNzZG4uY24vIy94Y1hyekRlbWFuZD90b2tlbj0nICsgdG9rZW4gKyAnJmlkPScgKyBvcHRpb24uaWQgKyAnJmlzVGM9JyArIHRoaXMuZGF0YS5pc1RjXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBpZihvcHRpb24ubmFtZSA9PSAn5oqV6LWEJyl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9yY2FwcC5xZGNzZG4uY24vIy94Y1hjeFBsYXRmb3JtRGVtbz90b2tlbj0nICsgdG9rZW4gKyAnJmlkPScgKyBvcHRpb24uaWQgKyAnJmlzVGM9JyArIHRoaXMuZGF0YS5pc1RjXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy/pobXpnaLmoIfpophcclxuICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7ICAgICBcclxuICAgICAgdGl0bGU6IFwi5Zyw5Zu+5qCH6K6w6K+m5oOFXCJcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIC8v6aG16Z2i5riy5p+T5a6M5oiQXHJcbiAgb25SZWFkeSgpe30sXHJcblxyXG4gIC8v6aG16Z2i5pi+56S6XHJcbiAgb25TaG93KCl7fSxcclxuXHJcbiAgLy/pobXpnaLpmpDol49cclxuICBvbkhpZGUoKXt9LFxyXG5cclxuICAvL+mhtemdouWFs+mXrVxyXG4gIG9uVW5sb2FkKCl7fVxyXG59KVxyXG4iXX0=