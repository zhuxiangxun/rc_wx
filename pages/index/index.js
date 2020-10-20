"use strict";
Page({
    data: {},
    newsClick: function () {
        wx.navigateTo({
            url: "../news/news"
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBSUEsSUFBSSxDQUFDO0lBRUgsSUFBSSxFQUFFLEVBTUw7SUFDRCxTQUFTLEVBQVQ7UUFDRSxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFDLGNBQWM7U0FDbkIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQW1CRCxnQkFBZ0IsRUFBaEI7UUFDRSxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFDLDRCQUE0QjtTQUNqQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsV0FBVyxFQUFYO1FBQ0UsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBQyxrQkFBa0I7U0FDdkIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUdELE1BQU0sZ0JBQUcsQ0FBQztJQUdWLE9BQU8sZ0JBQUcsQ0FBQztJQUdYLE1BQU0sZ0JBQUcsQ0FBQztJQUdWLE1BQU0sZ0JBQUcsQ0FBQztJQUdWLFFBQVEsZ0JBQUcsQ0FBQztDQUNiLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGluZGV4LnRzXHJcbi8vIOiOt+WPluW6lOeUqOWunuS+i1xyXG4vL2NvbnN0IGFwcCA9IGdldEFwcCgpO1xyXG5cclxuUGFnZSh7XHJcbiAgLy/pobXpnaLmlbDmja5cclxuICBkYXRhOiB7XHJcbiAgICAvLyBmb290ZXJBY3RpdmU6IDAsXHJcbiAgICAvLyBpY29uOiB7XHJcbiAgICAvLyAgIG5vcm1hbDogJ2h0dHBzOi8vaW1nLnl6Y2RuLmNuL3ZhbnQvdXNlci1pbmFjdGl2ZS5wbmcnLFxyXG4gICAgLy8gICBhY3RpdmU6ICdodHRwczovL2ltZy55emNkbi5jbi92YW50L3VzZXItYWN0aXZlLnBuZycsXHJcbiAgICAvLyB9LFxyXG4gIH0sXHJcbiAgbmV3c0NsaWNrKCk6dm9pZCB7XHJcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgdXJsOlwiLi4vbmV3cy9uZXdzXCJcclxuICAgIH0pXHJcbiAgfSxcclxuICAvL+S/oeaBr+WSqOivoui3s+i9rFxyXG4gXHJcblxyXG4gIC8v5bqV6YOo6I+c5Y2VXHJcbiAgLy8gb25Gb290ZXJDaGFuZ2UoZXZlbnQ6YW55KTp2b2lkIHtcclxuICAvLyAgIHRoaXMuc2V0RGF0YSh7IGFjdGl2ZTogZXZlbnQuZGV0YWlsIH0pO1xyXG4gIC8vICAgaWYoZXZlbnQuZGV0YWlsID09IDEpe1xyXG4gIC8vICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAvLyAgICAgICB1cmw6Jy4uL21hcC9tYXAnXHJcbiAgLy8gICAgIH0pXHJcbiAgLy8gICB9ZWxzZSBpZihldmVudC5kZXRhaWwgPT0gMil7XHJcbiAgLy8gICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gIC8vICAgICAgIHVybDonLi4vbG9naW4vbG9naW4nXHJcbiAgLy8gICAgIH0pXHJcbiAgLy8gICB9XHJcbiAgLy8gfSxcclxuXHJcbiAgLy/miJHopoHkuqTmmJNcclxuICB0cmFuc2FjdGlvbkNsaWNrKCk6dm9pZHtcclxuICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICB1cmw6Jy4uL3RyYW5zYWN0aW9uL3RyYW5zYWN0aW9uJ1xyXG4gICAgfSlcclxuICB9LFxyXG4gIC8v5oiR6KaB5Luq5Zmo6K6+5aSHXHJcbiAgZGV2aWNlQ2xpY2soKTp2b2lke1xyXG4gICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgIHVybDonLi4vZGV2aWNlL2RldmljZSdcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgLy/pobXpnaLliJ3lp4vljJZcclxuICBvbkxvYWQoKXt9LFxyXG5cclxuICAvL+mhtemdoua4suafk+WujOaIkFxyXG4gIG9uUmVhZHkoKXt9LFxyXG5cclxuICAvL+mhtemdouaYvuekulxyXG4gIG9uU2hvdygpe30sXHJcblxyXG4gIC8v6aG16Z2i6ZqQ6JePXHJcbiAgb25IaWRlKCl7fSxcclxuXHJcbiAgLy/pobXpnaLlhbPpl61cclxuICBvblVubG9hZCgpe30sXHJcbn0pXHJcbiJdfQ==