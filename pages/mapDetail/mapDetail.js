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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwRGV0YWlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFwRGV0YWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFJQSxJQUFJLENBQUM7SUFFSCxJQUFJLEVBQUU7UUFDTCxHQUFHLEVBQUUsRUFBRTtLQUNQO0lBRUQsTUFBTSxFQUFOLFVBQU8sTUFBVTtRQUNmLElBQUksS0FBSyxHQUFVLEVBQUUsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFOUMsSUFBRyxNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksRUFBQztZQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLEdBQUcsRUFBRSxvREFBb0QsR0FBRyxLQUFLLEdBQUcsTUFBTSxHQUFHLE1BQU0sQ0FBQyxFQUFFO2FBQ3ZGLENBQUMsQ0FBQTtTQUNIO1FBQ0QsSUFBRyxNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksRUFBQztZQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLEdBQUcsRUFBRSxvREFBb0QsR0FBRyxLQUFLLEdBQUcsTUFBTSxHQUFHLE1BQU0sQ0FBQyxFQUFFO2FBQ3ZGLENBQUMsQ0FBQTtTQUNIO1FBQ0QsSUFBRyxNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksRUFBQztZQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLEdBQUcsRUFBRSw2Q0FBNkMsR0FBRyxLQUFLLEdBQUcsTUFBTSxHQUFHLE1BQU0sQ0FBQyxFQUFFO2FBQ2hGLENBQUMsQ0FBQTtTQUNIO1FBQ0QsSUFBRyxNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksRUFBQztZQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLEdBQUcsRUFBRSw2Q0FBNkMsR0FBRyxLQUFLLEdBQUcsTUFBTSxHQUFHLE1BQU0sQ0FBQyxFQUFFO2FBQ2hGLENBQUMsQ0FBQTtTQUNIO1FBQ0QsSUFBRyxNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksRUFBQztZQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLEdBQUcsRUFBRSw4Q0FBOEMsR0FBRyxLQUFLLEdBQUcsTUFBTSxHQUFHLE1BQU0sQ0FBQyxFQUFFO2FBQ2pGLENBQUMsQ0FBQTtTQUNIO1FBQ0QsSUFBRyxNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksRUFBQztZQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLEdBQUcsRUFBRSw4Q0FBOEMsR0FBRyxLQUFLLEdBQUcsTUFBTSxHQUFHLE1BQU0sQ0FBQyxFQUFFO2FBQ2pGLENBQUMsQ0FBQTtTQUNIO1FBQ0QsSUFBRyxNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksRUFBQztZQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLEdBQUcsRUFBRSw4Q0FBOEMsR0FBRyxLQUFLLEdBQUcsTUFBTSxHQUFHLE1BQU0sQ0FBQyxFQUFFO2FBQ2pGLENBQUMsQ0FBQTtTQUNIO1FBQ0QsSUFBRyxNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksRUFBQztZQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLEdBQUcsRUFBRSw4Q0FBOEMsR0FBRyxLQUFLLEdBQUcsTUFBTSxHQUFHLE1BQU0sQ0FBQyxFQUFFO2FBQ2pGLENBQUMsQ0FBQTtTQUNIO1FBQ0QsSUFBRyxNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksRUFBQztZQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLEdBQUcsRUFBRSw4Q0FBOEMsR0FBRyxLQUFLLEdBQUcsTUFBTSxHQUFHLE1BQU0sQ0FBQyxFQUFFO2FBQ2pGLENBQUMsQ0FBQTtTQUNIO1FBQ0QsSUFBRyxNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksRUFBQztZQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLEdBQUcsRUFBRSxvREFBb0QsR0FBRyxLQUFLLEdBQUcsTUFBTSxHQUFHLE1BQU0sQ0FBQyxFQUFFO2FBQ3ZGLENBQUMsQ0FBQTtTQUNIO1FBR0QsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1lBQ3ZCLEtBQUssRUFBRSxRQUFRO1NBQ2hCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFHRCxPQUFPLGdCQUFHLENBQUM7SUFHWCxNQUFNLGdCQUFHLENBQUM7SUFHVixNQUFNLGdCQUFHLENBQUM7SUFHVixRQUFRLGdCQUFHLENBQUM7Q0FDYixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBtYXBEZXRhaWwudHNcclxuLy8g6I635Y+W5bqU55So5a6e5L6LXHJcbi8vY29uc3QgYXBwID0gZ2V0QXBwKCk7XHJcblxyXG5QYWdlKHtcclxuICAvL+mhtemdouaVsOaNrlxyXG4gIGRhdGE6IHtcclxuICAgdXJsOiAnJyxcclxuICB9LFxyXG4gIC8v6aG16Z2i5Yid5aeL5YyWXHJcbiAgb25Mb2FkKG9wdGlvbjphbnkpe1xyXG4gICAgbGV0IHRva2VuOnN0cmluZyA9IHd4LmdldFN0b3JhZ2VTeW5jKCd0b2tlbicpO1xyXG5cclxuICAgIGlmKG9wdGlvbi5uYW1lID09ICfliJvmlrAnKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICB1cmw6ICdodHRwczovL3JjYXBwLnFkY3Nkbi5jbi8jL3hjWGN4UGxhdGZvcm1EZW1vP3Rva2VuPScgKyB0b2tlbiArICcmaWQ9JyArIG9wdGlvbi5pZFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgaWYob3B0aW9uLm5hbWUgPT0gJ+WIm+S4micpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHVybDogJ2h0dHBzOi8vcmNhcHAucWRjc2RuLmNuLyMveGNYY3lQbGF0Zm9ybURlbW8/dG9rZW49JyArIHRva2VuICsgJyZpZD0nICsgb3B0aW9uLmlkXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBpZihvcHRpb24ubmFtZSA9PSAn6aG555uuJyl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9yY2FwcC5xZGNzZG4uY24vIy94Y1hwcm9qZWN0P3Rva2VuPScgKyB0b2tlbiArICcmaWQ9JyArIG9wdGlvbi5pZFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgaWYob3B0aW9uLm5hbWUgPT0gJ+WcuuWcsCcpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHVybDogJ2h0dHBzOi8vcmNhcHAucWRjc2RuLmNuLyMveGNYenRTcGFjZT90b2tlbj0nICsgdG9rZW4gKyAnJmlkPScgKyBvcHRpb24uaWRcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIGlmKG9wdGlvbi5uYW1lID09ICfmnI3liqEnKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICB1cmw6ICdodHRwczovL3JjYXBwLnFkY3Nkbi5jbi8jL3hjWHNlcnZlckpnP3Rva2VuPScgKyB0b2tlbiArICcmaWQ9JyArIG9wdGlvbi5pZFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgaWYob3B0aW9uLm5hbWUgPT0gJ+mHkeiejScpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHVybDogJ2h0dHBzOi8vcmNhcHAucWRjc2RuLmNuLyMveGNYc2VydmVySmc/dG9rZW49JyArIHRva2VuICsgJyZpZD0nICsgb3B0aW9uLmlkXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBpZihvcHRpb24ubmFtZSA9PSAn6LWE6YeRJyl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9yY2FwcC5xZGNzZG4uY24vIy94Y1h0ekRlbWFuZD90b2tlbj0nICsgdG9rZW4gKyAnJmlkPScgKyBvcHRpb24uaWRcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIGlmKG9wdGlvbi5uYW1lID09ICfpnIDmsYInKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICB1cmw6ICdodHRwczovL3JjYXBwLnFkY3Nkbi5jbi8jL3hjWHR6RGVtYW5kP3Rva2VuPScgKyB0b2tlbiArICcmaWQ9JyArIG9wdGlvbi5pZFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgaWYob3B0aW9uLm5hbWUgPT0gJ+iejei1hCcpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHVybDogJ2h0dHBzOi8vcmNhcHAucWRjc2RuLmNuLyMveGNYcnpEZW1hbmQ/dG9rZW49JyArIHRva2VuICsgJyZpZD0nICsgb3B0aW9uLmlkXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBpZihvcHRpb24ubmFtZSA9PSAn5oqV6LWEJyl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9yY2FwcC5xZGNzZG4uY24vIy94Y1hjeFBsYXRmb3JtRGVtbz90b2tlbj0nICsgdG9rZW4gKyAnJmlkPScgKyBvcHRpb24uaWRcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvL+mhtemdouagh+mimFxyXG4gICAgd3guc2V0TmF2aWdhdGlvbkJhclRpdGxlKHsgICAgIFxyXG4gICAgICB0aXRsZTogXCLlnLDlm77moIforrDor6bmg4VcIlxyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgLy/pobXpnaLmuLLmn5PlrozmiJBcclxuICBvblJlYWR5KCl7fSxcclxuXHJcbiAgLy/pobXpnaLmmL7npLpcclxuICBvblNob3coKXt9LFxyXG5cclxuICAvL+mhtemdoumakOiXj1xyXG4gIG9uSGlkZSgpe30sXHJcblxyXG4gIC8v6aG16Z2i5YWz6ZetXHJcbiAgb25VbmxvYWQoKXt9XHJcbn0pXHJcbiJdfQ==