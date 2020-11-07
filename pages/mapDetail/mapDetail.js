"use strict";
var api = getApp().globalData;
Page({
    data: {
        url: '',
        isTc: '',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwRGV0YWlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFwRGV0YWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQUUsQ0FBQyxVQUFVLENBQUM7QUFFaEMsSUFBSSxDQUFDO0lBRUgsSUFBSSxFQUFFO1FBQ0wsR0FBRyxFQUFFLEVBQUU7UUFDUCxJQUFJLEVBQUUsRUFBRTtLQUNSO0lBRUQsTUFBTSxFQUFOLFVBQU8sTUFBVTtRQUNmLElBQUcsR0FBRyxDQUFDLFdBQVcsSUFBSSxJQUFJLEVBQUM7WUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxJQUFJLEVBQUUsR0FBRzthQUNWLENBQUMsQ0FBQTtTQUNIO2FBQUk7WUFDSCxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLElBQUksRUFBRSxHQUFHO2FBQ1YsQ0FBQyxDQUFBO1NBQ0g7UUFDRCxJQUFJLEtBQUssR0FBVSxFQUFFLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlDLElBQUcsTUFBTSxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUM7WUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxHQUFHLEVBQUUsb0RBQW9ELEdBQUcsS0FBSyxHQUFHLE1BQU0sR0FBRyxNQUFNLENBQUMsRUFBRSxHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7YUFDbkgsQ0FBQyxDQUFBO1NBQ0g7UUFDRCxJQUFHLE1BQU0sQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFDO1lBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsR0FBRyxFQUFFLG9EQUFvRCxHQUFHLEtBQUssR0FBRyxNQUFNLEdBQUcsTUFBTSxDQUFDLEVBQUUsR0FBRyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO2FBQ25ILENBQUMsQ0FBQTtTQUNIO1FBQ0QsSUFBRyxNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksRUFBQztZQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLEdBQUcsRUFBRSw2Q0FBNkMsR0FBRyxLQUFLLEdBQUcsTUFBTSxHQUFHLE1BQU0sQ0FBQyxFQUFFLEdBQUcsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTthQUM1RyxDQUFDLENBQUE7U0FDSDtRQUNELElBQUcsTUFBTSxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUM7WUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxHQUFHLEVBQUUsNkNBQTZDLEdBQUcsS0FBSyxHQUFHLE1BQU0sR0FBRyxNQUFNLENBQUMsRUFBRSxHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7YUFDNUcsQ0FBQyxDQUFBO1NBQ0g7UUFDRCxJQUFHLE1BQU0sQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFDO1lBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsR0FBRyxFQUFFLDhDQUE4QyxHQUFHLEtBQUssR0FBRyxNQUFNLEdBQUcsTUFBTSxDQUFDLEVBQUUsR0FBRyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO2FBQzdHLENBQUMsQ0FBQTtTQUNIO1FBQ0QsSUFBRyxNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksRUFBQztZQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLEdBQUcsRUFBRSw4Q0FBOEMsR0FBRyxLQUFLLEdBQUcsTUFBTSxHQUFHLE1BQU0sQ0FBQyxFQUFFLEdBQUcsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTthQUM3RyxDQUFDLENBQUE7U0FDSDtRQUNELElBQUcsTUFBTSxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUM7WUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxHQUFHLEVBQUUsOENBQThDLEdBQUcsS0FBSyxHQUFHLE1BQU0sR0FBRyxNQUFNLENBQUMsRUFBRSxHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7YUFDN0csQ0FBQyxDQUFBO1NBQ0g7UUFDRCxJQUFHLE1BQU0sQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFDO1lBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsR0FBRyxFQUFFLDhDQUE4QyxHQUFHLEtBQUssR0FBRyxNQUFNLEdBQUcsTUFBTSxDQUFDLEVBQUUsR0FBRyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO2FBQzdHLENBQUMsQ0FBQTtTQUNIO1FBQ0QsSUFBRyxNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksRUFBQztZQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLEdBQUcsRUFBRSw4Q0FBOEMsR0FBRyxLQUFLLEdBQUcsTUFBTSxHQUFHLE1BQU0sQ0FBQyxFQUFFLEdBQUcsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTthQUM3RyxDQUFDLENBQUE7U0FDSDtRQUNELElBQUcsTUFBTSxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUM7WUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxHQUFHLEVBQUUsb0RBQW9ELEdBQUcsS0FBSyxHQUFHLE1BQU0sR0FBRyxNQUFNLENBQUMsRUFBRSxHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7YUFDbkgsQ0FBQyxDQUFBO1NBQ0g7UUFHRCxFQUFFLENBQUMscUJBQXFCLENBQUM7WUFDdkIsS0FBSyxFQUFFLFFBQVE7U0FDaEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdELE9BQU8sZ0JBQUcsQ0FBQztJQUdYLE1BQU0sZ0JBQUcsQ0FBQztJQUdWLE1BQU0sZ0JBQUcsQ0FBQztJQUdWLFFBQVEsZ0JBQUcsQ0FBQztDQUNiLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIG1hcERldGFpbC50c1xyXG5jb25zdCBhcGkgPSBnZXRBcHAoKS5nbG9iYWxEYXRhOyAgLy8g6I635Y+W5bqU55So5a6e5L6LXHJcblxyXG5QYWdlKHtcclxuICAvL+mhtemdouaVsOaNrlxyXG4gIGRhdGE6IHtcclxuICAgdXJsOiAnJyxcclxuICAgaXNUYzogJycsICAgICAgICAgLy/nu5/nrbkx44CB5py65p6EMFxyXG4gIH0sXHJcbiAgLy/pobXpnaLliJ3lp4vljJZcclxuICBvbkxvYWQob3B0aW9uOmFueSl7XHJcbiAgICBpZihhcGkubG9naW5TdGF0dXMgPT0gJ3loJyl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgaXNUYzogJzAnXHJcbiAgICAgIH0pXHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBpc1RjOiAnMSdcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIGxldCB0b2tlbjpzdHJpbmcgPSB3eC5nZXRTdG9yYWdlU3luYygndG9rZW4nKTtcclxuICAgIGlmKG9wdGlvbi5uYW1lID09ICfliJvmlrAnKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICB1cmw6ICdodHRwczovL3JjYXBwLnFkY3Nkbi5jbi8jL3hjWGN4UGxhdGZvcm1EZW1vP3Rva2VuPScgKyB0b2tlbiArICcmaWQ9JyArIG9wdGlvbi5pZCArICcmaXNUYz0nICsgdGhpcy5kYXRhLmlzVGNcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIGlmKG9wdGlvbi5uYW1lID09ICfliJvkuJonKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICB1cmw6ICdodHRwczovL3JjYXBwLnFkY3Nkbi5jbi8jL3hjWGN5UGxhdGZvcm1EZW1vP3Rva2VuPScgKyB0b2tlbiArICcmaWQ9JyArIG9wdGlvbi5pZCArICcmaXNUYz0nICsgdGhpcy5kYXRhLmlzVGNcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIGlmKG9wdGlvbi5uYW1lID09ICfpobnnm64nKXsgIC8v5om+6J6N6LWEXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9yY2FwcC5xZGNzZG4uY24vIy94Y1hwcm9qZWN0P3Rva2VuPScgKyB0b2tlbiArICcmaWQ9JyArIG9wdGlvbi5pZCArICcmaXNUYz0nICsgdGhpcy5kYXRhLmlzVGNcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIGlmKG9wdGlvbi5uYW1lID09ICflnLrlnLAnKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICB1cmw6ICdodHRwczovL3JjYXBwLnFkY3Nkbi5jbi8jL3hjWHp0U3BhY2U/dG9rZW49JyArIHRva2VuICsgJyZpZD0nICsgb3B0aW9uLmlkICsgJyZpc1RjPScgKyB0aGlzLmRhdGEuaXNUY1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgaWYob3B0aW9uLm5hbWUgPT0gJ+acjeWKoScpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHVybDogJ2h0dHBzOi8vcmNhcHAucWRjc2RuLmNuLyMveGNYc2VydmVySmc/dG9rZW49JyArIHRva2VuICsgJyZpZD0nICsgb3B0aW9uLmlkICsgJyZpc1RjPScgKyB0aGlzLmRhdGEuaXNUY1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgaWYob3B0aW9uLm5hbWUgPT0gJ+mHkeiejScpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHVybDogJ2h0dHBzOi8vcmNhcHAucWRjc2RuLmNuLyMveGNYc2VydmVySmc/dG9rZW49JyArIHRva2VuICsgJyZpZD0nICsgb3B0aW9uLmlkICsgJyZpc1RjPScgKyB0aGlzLmRhdGEuaXNUY1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgaWYob3B0aW9uLm5hbWUgPT0gJ+i1hOmHkScpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHVybDogJ2h0dHBzOi8vcmNhcHAucWRjc2RuLmNuLyMveGNYdHpEZW1hbmQ/dG9rZW49JyArIHRva2VuICsgJyZpZD0nICsgb3B0aW9uLmlkICsgJyZpc1RjPScgKyB0aGlzLmRhdGEuaXNUY1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgaWYob3B0aW9uLm5hbWUgPT0gJ+mcgOaxgicpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHVybDogJ2h0dHBzOi8vcmNhcHAucWRjc2RuLmNuLyMveGNYdHpEZW1hbmQ/dG9rZW49JyArIHRva2VuICsgJyZpZD0nICsgb3B0aW9uLmlkICsgJyZpc1RjPScgKyB0aGlzLmRhdGEuaXNUY1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgaWYob3B0aW9uLm5hbWUgPT0gJ+iejei1hCcpeyAgLy/mib7ono3otYRcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICB1cmw6ICdodHRwczovL3JjYXBwLnFkY3Nkbi5jbi8jL3hjWHJ6RGVtYW5kP3Rva2VuPScgKyB0b2tlbiArICcmaWQ9JyArIG9wdGlvbi5pZCArICcmaXNUYz0nICsgdGhpcy5kYXRhLmlzVGNcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIGlmKG9wdGlvbi5uYW1lID09ICfmipXotYQnKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICB1cmw6ICdodHRwczovL3JjYXBwLnFkY3Nkbi5jbi8jL3hjWGN4UGxhdGZvcm1EZW1vP3Rva2VuPScgKyB0b2tlbiArICcmaWQ9JyArIG9wdGlvbi5pZCArICcmaXNUYz0nICsgdGhpcy5kYXRhLmlzVGNcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvL+mhtemdouagh+mimFxyXG4gICAgd3guc2V0TmF2aWdhdGlvbkJhclRpdGxlKHsgICAgIFxyXG4gICAgICB0aXRsZTogXCLlnLDlm77moIforrDor6bmg4VcIlxyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgLy/pobXpnaLmuLLmn5PlrozmiJBcclxuICBvblJlYWR5KCl7fSxcclxuXHJcbiAgLy/pobXpnaLmmL7npLpcclxuICBvblNob3coKXt9LFxyXG5cclxuICAvL+mhtemdoumakOiXj1xyXG4gIG9uSGlkZSgpe30sXHJcblxyXG4gIC8v6aG16Z2i5YWz6ZetXHJcbiAgb25VbmxvYWQoKXt9XHJcbn0pXHJcbiJdfQ==