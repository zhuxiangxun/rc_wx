"use strict";
Page({
    data: {
        url: '',
    },
    onLoad: function (option) {
        var token = wx.getStorageSync('token');
        if (option.name == '创新') {
            this.setData({
                url: 'https://rcapp.qdcsdn.cn/#/xcXcxPlatformDemo?token=' + token + '&id=' + option.id
            });
        }
        if (option.name == '创业') {
            this.setData({
                url: 'https://rcapp.qdcsdn.cn/#/xcXcyPlatformDemo?token=' + token + '&id=' + option.id
            });
        }
        if (option.name == '项目') {
            this.setData({
                url: 'https://rcapp.qdcsdn.cn/#/xcXproject?token=' + token + '&id=' + option.id
            });
        }
        if (option.name == '场地') {
            this.setData({
                url: 'https://rcapp.qdcsdn.cn/#/xcXztSpace?token=' + token + '&id=' + option.id
            });
        }
        if (option.name == '服务') {
            this.setData({
                url: 'https://rcapp.qdcsdn.cn/#/xcXserverJg?token=' + token + '&id=' + option.id
            });
        }
        if (option.name == '金融') {
            this.setData({
                url: 'https://rcapp.qdcsdn.cn/#/xcXserverJg?token=' + token + '&id=' + option.id
            });
        }
        if (option.name == '资金') {
            this.setData({
                url: 'https://rcapp.qdcsdn.cn/#/xcXtzDemand?token=' + token + '&id=' + option.id
            });
        }
        if (option.name == '需求') {
            this.setData({
                url: 'https://rcapp.qdcsdn.cn/#/xcXtzDemand?token=' + token + '&id=' + option.id
            });
        }
        if (option.name == '融资') {
            this.setData({
                url: 'https://rcapp.qdcsdn.cn/#/xcXrzDemand?token=' + token + '&id=' + option.id
            });
        }
        if (option.name == '投资') {
            this.setData({
                url: 'https://rcapp.qdcsdn.cn/#/xcXcxPlatformDemo?token=' + token + '&id=' + option.id
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwRGV0YWlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFwRGV0YWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFJQSxJQUFJLENBQUM7SUFFSCxJQUFJLEVBQUU7UUFDTCxHQUFHLEVBQUUsRUFBRTtLQUNQO0lBT0QsTUFBTSxFQUFOLFVBQU8sTUFBVTtRQUNmLElBQUksS0FBSyxHQUFVLEVBQUUsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUMsSUFBRyxNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksRUFBQztZQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLEdBQUcsRUFBRSxvREFBb0QsR0FBRyxLQUFLLEdBQUcsTUFBTSxHQUFHLE1BQU0sQ0FBQyxFQUFFO2FBQ3ZGLENBQUMsQ0FBQTtTQUNIO1FBQ0QsSUFBRyxNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksRUFBQztZQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLEdBQUcsRUFBRSxvREFBb0QsR0FBRyxLQUFLLEdBQUcsTUFBTSxHQUFHLE1BQU0sQ0FBQyxFQUFFO2FBQ3ZGLENBQUMsQ0FBQTtTQUNIO1FBQ0QsSUFBRyxNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksRUFBQztZQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLEdBQUcsRUFBRSw2Q0FBNkMsR0FBRyxLQUFLLEdBQUcsTUFBTSxHQUFHLE1BQU0sQ0FBQyxFQUFFO2FBQ2hGLENBQUMsQ0FBQTtTQUNIO1FBQ0QsSUFBRyxNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksRUFBQztZQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLEdBQUcsRUFBRSw2Q0FBNkMsR0FBRyxLQUFLLEdBQUcsTUFBTSxHQUFHLE1BQU0sQ0FBQyxFQUFFO2FBQ2hGLENBQUMsQ0FBQTtTQUNIO1FBQ0QsSUFBRyxNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksRUFBQztZQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLEdBQUcsRUFBRSw4Q0FBOEMsR0FBRyxLQUFLLEdBQUcsTUFBTSxHQUFHLE1BQU0sQ0FBQyxFQUFFO2FBQ2pGLENBQUMsQ0FBQTtTQUNIO1FBQ0QsSUFBRyxNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksRUFBQztZQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLEdBQUcsRUFBRSw4Q0FBOEMsR0FBRyxLQUFLLEdBQUcsTUFBTSxHQUFHLE1BQU0sQ0FBQyxFQUFFO2FBQ2pGLENBQUMsQ0FBQTtTQUNIO1FBQ0QsSUFBRyxNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksRUFBQztZQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLEdBQUcsRUFBRSw4Q0FBOEMsR0FBRyxLQUFLLEdBQUcsTUFBTSxHQUFHLE1BQU0sQ0FBQyxFQUFFO2FBQ2pGLENBQUMsQ0FBQTtTQUNIO1FBQ0QsSUFBRyxNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksRUFBQztZQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLEdBQUcsRUFBRSw4Q0FBOEMsR0FBRyxLQUFLLEdBQUcsTUFBTSxHQUFHLE1BQU0sQ0FBQyxFQUFFO2FBQ2pGLENBQUMsQ0FBQTtTQUNIO1FBQ0QsSUFBRyxNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksRUFBQztZQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLEdBQUcsRUFBRSw4Q0FBOEMsR0FBRyxLQUFLLEdBQUcsTUFBTSxHQUFHLE1BQU0sQ0FBQyxFQUFFO2FBQ2pGLENBQUMsQ0FBQTtTQUNIO1FBQ0QsSUFBRyxNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksRUFBQztZQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLEdBQUcsRUFBRSxvREFBb0QsR0FBRyxLQUFLLEdBQUcsTUFBTSxHQUFHLE1BQU0sQ0FBQyxFQUFFO2FBQ3ZGLENBQUMsQ0FBQTtTQUNIO1FBR0QsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1lBQ3ZCLEtBQUssRUFBRSxRQUFRO1NBQ2hCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFHRCxPQUFPLGdCQUFHLENBQUM7SUFHWCxNQUFNLGdCQUFHLENBQUM7SUFHVixNQUFNLGdCQUFHLENBQUM7SUFHVixRQUFRLGdCQUFHLENBQUM7Q0FDYixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBtYXBEZXRhaWwudHNcclxuLy8g6I635Y+W5bqU55So5a6e5L6LXHJcbi8vY29uc3QgYXBwID0gZ2V0QXBwKCk7XHJcblxyXG5QYWdlKHtcclxuICAvL+mhtemdouaVsOaNrlxyXG4gIGRhdGE6IHtcclxuICAgdXJsOiAnJyxcclxuICB9LFxyXG5cclxuIFxyXG5cclxuXHJcblxyXG4gIC8v6aG16Z2i5Yid5aeL5YyWXHJcbiAgb25Mb2FkKG9wdGlvbjphbnkpe1xyXG4gICAgbGV0IHRva2VuOnN0cmluZyA9IHd4LmdldFN0b3JhZ2VTeW5jKCd0b2tlbicpO1xyXG4gICAgaWYob3B0aW9uLm5hbWUgPT0gJ+WIm+aWsCcpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHVybDogJ2h0dHBzOi8vcmNhcHAucWRjc2RuLmNuLyMveGNYY3hQbGF0Zm9ybURlbW8/dG9rZW49JyArIHRva2VuICsgJyZpZD0nICsgb3B0aW9uLmlkXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBpZihvcHRpb24ubmFtZSA9PSAn5Yib5LiaJyl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9yY2FwcC5xZGNzZG4uY24vIy94Y1hjeVBsYXRmb3JtRGVtbz90b2tlbj0nICsgdG9rZW4gKyAnJmlkPScgKyBvcHRpb24uaWRcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIGlmKG9wdGlvbi5uYW1lID09ICfpobnnm64nKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICB1cmw6ICdodHRwczovL3JjYXBwLnFkY3Nkbi5jbi8jL3hjWHByb2plY3Q/dG9rZW49JyArIHRva2VuICsgJyZpZD0nICsgb3B0aW9uLmlkXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBpZihvcHRpb24ubmFtZSA9PSAn5Zy65ZywJyl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9yY2FwcC5xZGNzZG4uY24vIy94Y1h6dFNwYWNlP3Rva2VuPScgKyB0b2tlbiArICcmaWQ9JyArIG9wdGlvbi5pZFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgaWYob3B0aW9uLm5hbWUgPT0gJ+acjeWKoScpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHVybDogJ2h0dHBzOi8vcmNhcHAucWRjc2RuLmNuLyMveGNYc2VydmVySmc/dG9rZW49JyArIHRva2VuICsgJyZpZD0nICsgb3B0aW9uLmlkXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBpZihvcHRpb24ubmFtZSA9PSAn6YeR6J6NJyl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9yY2FwcC5xZGNzZG4uY24vIy94Y1hzZXJ2ZXJKZz90b2tlbj0nICsgdG9rZW4gKyAnJmlkPScgKyBvcHRpb24uaWRcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIGlmKG9wdGlvbi5uYW1lID09ICfotYTph5EnKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICB1cmw6ICdodHRwczovL3JjYXBwLnFkY3Nkbi5jbi8jL3hjWHR6RGVtYW5kP3Rva2VuPScgKyB0b2tlbiArICcmaWQ9JyArIG9wdGlvbi5pZFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgaWYob3B0aW9uLm5hbWUgPT0gJ+mcgOaxgicpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHVybDogJ2h0dHBzOi8vcmNhcHAucWRjc2RuLmNuLyMveGNYdHpEZW1hbmQ/dG9rZW49JyArIHRva2VuICsgJyZpZD0nICsgb3B0aW9uLmlkXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBpZihvcHRpb24ubmFtZSA9PSAn6J6N6LWEJyl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9yY2FwcC5xZGNzZG4uY24vIy94Y1hyekRlbWFuZD90b2tlbj0nICsgdG9rZW4gKyAnJmlkPScgKyBvcHRpb24uaWRcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIGlmKG9wdGlvbi5uYW1lID09ICfmipXotYQnKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICB1cmw6ICdodHRwczovL3JjYXBwLnFkY3Nkbi5jbi8jL3hjWGN4UGxhdGZvcm1EZW1vP3Rva2VuPScgKyB0b2tlbiArICcmaWQ9JyArIG9wdGlvbi5pZFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8v6aG16Z2i5qCH6aKYXHJcbiAgICB3eC5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoeyAgICAgXHJcbiAgICAgIHRpdGxlOiBcIuWcsOWbvuagh+iusOivpuaDhVwiXHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICAvL+mhtemdoua4suafk+WujOaIkFxyXG4gIG9uUmVhZHkoKXt9LFxyXG5cclxuICAvL+mhtemdouaYvuekulxyXG4gIG9uU2hvdygpe30sXHJcblxyXG4gIC8v6aG16Z2i6ZqQ6JePXHJcbiAgb25IaWRlKCl7fSxcclxuXHJcbiAgLy/pobXpnaLlhbPpl61cclxuICBvblVubG9hZCgpe31cclxufSlcclxuIl19