"use strict";
Page({
    data: {
        footerActive: 0,
        icon: {
            normal: 'https://img.yzcdn.cn/vant/user-inactive.png',
            active: 'https://img.yzcdn.cn/vant/user-active.png',
        },
    },
    newsClick: function () {
        wx.navigateTo({
            url: "../news/news"
        });
    },
    onFooterChange: function (event) {
        this.setData({ active: event.detail });
    },
    transactionClick: function () {
        wx.navigateTo({
            url: '../transaction/transaction'
        });
    },
    deviceClick: function () {
        wx.navigateTo({
            url: '../device/device'
        });
    },
    onLoad: function () { },
    onReady: function () { },
    onShow: function () { },
    onHide: function () { },
    onUnload: function () { },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBSUEsSUFBSSxDQUFDO0lBRUgsSUFBSSxFQUFFO1FBQ0osWUFBWSxFQUFFLENBQUM7UUFDZixJQUFJLEVBQUU7WUFDSixNQUFNLEVBQUUsNkNBQTZDO1lBQ3JELE1BQU0sRUFBRSwyQ0FBMkM7U0FDcEQ7S0FDRjtJQUNELFNBQVMsRUFBVDtRQUNFLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUMsY0FBYztTQUNuQixDQUFDLENBQUE7SUFDSixDQUFDO0lBS0QsY0FBYyxFQUFkLFVBQWUsS0FBUztRQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFHRCxnQkFBZ0IsRUFBaEI7UUFDRSxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFDLDRCQUE0QjtTQUNqQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsV0FBVyxFQUFYO1FBQ0UsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBQyxrQkFBa0I7U0FDdkIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUdELE1BQU0sZ0JBQUcsQ0FBQztJQUdWLE9BQU8sZ0JBQUcsQ0FBQztJQUdYLE1BQU0sZ0JBQUcsQ0FBQztJQUdWLE1BQU0sZ0JBQUcsQ0FBQztJQUdWLFFBQVEsZ0JBQUcsQ0FBQztDQUNiLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGluZGV4LnRzXHJcbi8vIOiOt+WPluW6lOeUqOWunuS+i1xyXG4vL2NvbnN0IGFwcCA9IGdldEFwcCgpO1xyXG5cclxuUGFnZSh7XHJcbiAgLy/pobXpnaLmlbDmja5cclxuICBkYXRhOiB7XHJcbiAgICBmb290ZXJBY3RpdmU6IDAsXHJcbiAgICBpY29uOiB7XHJcbiAgICAgIG5vcm1hbDogJ2h0dHBzOi8vaW1nLnl6Y2RuLmNuL3ZhbnQvdXNlci1pbmFjdGl2ZS5wbmcnLFxyXG4gICAgICBhY3RpdmU6ICdodHRwczovL2ltZy55emNkbi5jbi92YW50L3VzZXItYWN0aXZlLnBuZycsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbmV3c0NsaWNrKCk6dm9pZCB7XHJcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgdXJsOlwiLi4vbmV3cy9uZXdzXCJcclxuICAgIH0pXHJcbiAgfSxcclxuICAvL+S/oeaBr+WSqOivoui3s+i9rFxyXG4gXHJcblxyXG4gIC8v5bqV6YOo6I+c5Y2V5pe26Ze0XHJcbiAgb25Gb290ZXJDaGFuZ2UoZXZlbnQ6YW55KTp2b2lkIHtcclxuICAgIHRoaXMuc2V0RGF0YSh7IGFjdGl2ZTogZXZlbnQuZGV0YWlsIH0pO1xyXG4gIH0sXHJcblxyXG4gIC8v5oiR6KaB5Lqk5piTXHJcbiAgdHJhbnNhY3Rpb25DbGljaygpOnZvaWR7XHJcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgdXJsOicuLi90cmFuc2FjdGlvbi90cmFuc2FjdGlvbidcclxuICAgIH0pXHJcbiAgfSxcclxuICAvL+aIkeimgeS7quWZqOiuvuWkh1xyXG4gIGRldmljZUNsaWNrKCk6dm9pZHtcclxuICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICB1cmw6Jy4uL2RldmljZS9kZXZpY2UnXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIC8v6aG16Z2i5Yid5aeL5YyWXHJcbiAgb25Mb2FkKCl7fSxcclxuXHJcbiAgLy/pobXpnaLmuLLmn5PlrozmiJBcclxuICBvblJlYWR5KCl7fSxcclxuXHJcbiAgLy/pobXpnaLmmL7npLpcclxuICBvblNob3coKXt9LFxyXG5cclxuICAvL+mhtemdoumakOiXj1xyXG4gIG9uSGlkZSgpe30sXHJcblxyXG4gIC8v6aG16Z2i5YWz6ZetXHJcbiAgb25VbmxvYWQoKXt9LFxyXG59KVxyXG4iXX0=