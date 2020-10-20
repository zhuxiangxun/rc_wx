"use strict";
Page({
    data: {
        loginBtn: '',
    },
    showPopup: function () {
    },
    loginFn: function () {
        if (this.data.loginBtn == '退出登录') {
            console.log('退出登录');
        }
        else {
            wx.navigateTo({
                url: '../loginForm/loginForm'
            });
        }
    },
    onLoad: function () {
        wx.setNavigationBarTitle({
            title: "我的"
        });
        try {
            var token = wx.getStorageSync('token');
            if (token) {
                this.setData({
                    loginBtn: '退出登录'
                });
            }
            else {
                this.setData({
                    loginBtn: '登录'
                });
            }
        }
        catch (e) {
            console.log(e);
        }
    },
    onReady: function () { },
    onShow: function () { },
    onHide: function () { },
    onUnload: function () { }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBSUEsSUFBSSxDQUFDO0lBRUgsSUFBSSxFQUFFO1FBTUosUUFBUSxFQUFFLEVBQUU7S0FDYjtJQUdELFNBQVMsRUFBVDtJQUVBLENBQUM7SUFxQkQsT0FBTyxFQUFQO1FBQ0UsSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxNQUFNLEVBQUM7WUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNyQjthQUFJO1lBQ0gsRUFBRSxDQUFDLFVBQVUsQ0FBQztnQkFDWixHQUFHLEVBQUUsd0JBQXdCO2FBQzlCLENBQUMsQ0FBQTtTQUNIO0lBQ0gsQ0FBQztJQUdELE1BQU0sRUFBTjtRQUNFLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztZQUN2QixLQUFLLEVBQUUsSUFBSTtTQUNaLENBQUMsQ0FBQztRQUVILElBQUk7WUFDRixJQUFJLEtBQUssR0FBVSxFQUFFLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzlDLElBQUksS0FBSyxFQUFFO2dCQUNULElBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ1gsUUFBUSxFQUFFLE1BQU07aUJBQ2pCLENBQUMsQ0FBQTthQUNIO2lCQUFJO2dCQUNILElBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ1gsUUFBUSxFQUFFLElBQUk7aUJBQ2YsQ0FBQyxDQUFBO2FBQ0g7U0FDRjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtTQUNmO0lBQ0gsQ0FBQztJQUdELE9BQU8sZ0JBQUcsQ0FBQztJQUdYLE1BQU0sZ0JBQUcsQ0FBQztJQUdWLE1BQU0sZ0JBQUcsQ0FBQztJQUdWLFFBQVEsZ0JBQUcsQ0FBQztDQUNiLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGxvZ2luLnRzXHJcbi8vIOiOt+WPluW6lOeUqOWunuS+i1xyXG4vL2NvbnN0IGFwcCA9IGdldEFwcCgpO1xyXG5cclxuUGFnZSh7XHJcbiAgLy/pobXpnaLmlbDmja5cclxuICBkYXRhOiB7XHJcbiAgICAvLyBmb290ZXJBY3RpdmU6IDIsXHJcbiAgICAvLyBpY29uOiB7XHJcbiAgICAvLyAgIG5vcm1hbDogJ2h0dHBzOi8vaW1nLnl6Y2RuLmNuL3ZhbnQvdXNlci1pbmFjdGl2ZS5wbmcnLFxyXG4gICAgLy8gICBhY3RpdmU6ICdodHRwczovL2ltZy55emNkbi5jbi92YW50L3VzZXItYWN0aXZlLnBuZycsXHJcbiAgICAvLyB9XHJcbiAgICBsb2dpbkJ0bjogJycsICAgICAgICAgICAvL+eZu+W9lSAvIOmAgOWHuuaMiemSrlxyXG4gIH0sXHJcblxyXG4gIC8v5Liq5Lq65L+h5oGvXHJcbiAgc2hvd1BvcHVwKCk6dm9pZCB7XHJcbiAgICBcclxuICB9LFxyXG5cclxuICAvL+W6lemDqOiPnOWNlVxyXG4gIC8vIG9uRm9vdGVyQ2hhbmdlKGV2ZW50OmFueSk6dm9pZCB7XHJcbiAgLy8gICB0aGlzLnNldERhdGEoeyBhY3RpdmU6IGV2ZW50LmRldGFpbCB9KTtcclxuICAvLyAgIGlmKGV2ZW50LmRldGFpbCA9PSAxKXtcclxuICAvLyAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgLy8gICAgICAgdXJsOicuLi9tYXAvbWFwJ1xyXG4gIC8vICAgICB9KVxyXG4gIC8vICAgfWVsc2UgaWYoZXZlbnQuZGV0YWlsID09IDIpe1xyXG4gIC8vICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAvLyAgICAgICB1cmw6Jy4uL2xvZ2luL2xvZ2luJ1xyXG4gIC8vICAgICB9KVxyXG4gIC8vICAgfWVsc2V7XHJcbiAgLy8gICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gIC8vICAgICAgIHVybDonLi4vaW5kZXgvaW5kZXgnXHJcbiAgLy8gICAgIH0pXHJcbiAgLy8gICB9XHJcbiAgLy8gfSxcclxuXHJcbiAgLy/nmbvlvZXot7PovazmiJbogIXpgIDlh7rnmbvlvZVcclxuICBsb2dpbkZuKCk6dm9pZHtcclxuICAgIGlmKHRoaXMuZGF0YS5sb2dpbkJ0biA9PSAn6YCA5Ye655m75b2VJyl7XHJcbiAgICAgIGNvbnNvbGUubG9nKCfpgIDlh7rnmbvlvZUnKTtcclxuICAgIH1lbHNle1xyXG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6ICcuLi9sb2dpbkZvcm0vbG9naW5Gb3JtJ1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8v6aG16Z2i5Yid5aeL5YyWXHJcbiAgb25Mb2FkKCl7XHJcbiAgICB3eC5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoeyAgICAgXHJcbiAgICAgIHRpdGxlOiBcIuaIkeeahFwiXHJcbiAgICB9KTtcclxuICAgIC8v5Yik5pat5piv5ZCm55m75b2VXHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgdG9rZW46c3RyaW5nID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3Rva2VuJyk7XHJcbiAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBsb2dpbkJ0bjogJ+mAgOWHuueZu+W9lSdcclxuICAgICAgICB9KVxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgbG9naW5CdG46ICfnmbvlvZUnXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8v6aG16Z2i5riy5p+T5a6M5oiQXHJcbiAgb25SZWFkeSgpe30sXHJcblxyXG4gIC8v6aG16Z2i5pi+56S6XHJcbiAgb25TaG93KCl7fSxcclxuXHJcbiAgLy/pobXpnaLpmpDol49cclxuICBvbkhpZGUoKXt9LFxyXG5cclxuICAvL+mhtemdouWFs+mXrVxyXG4gIG9uVW5sb2FkKCl7fVxyXG59KVxyXG4iXX0=