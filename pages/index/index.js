"use strict";
var app = getApp();
Page({
    data: {
        active: 0,
        icon: {
            normal: 'https://img.yzcdn.cn/vant/user-inactive.png',
            active: 'https://img.yzcdn.cn/vant/user-active.png',
        },
    },
    onChange: function (event) {
        this.setData({ active: event.detail });
    },
    onLoad: function () { },
    onReady: function () { },
    onShow: function () { },
    onHide: function () { },
    onUnload: function () { }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFFLENBQUM7QUFFckIsSUFBSSxDQUFDO0lBRUgsSUFBSSxFQUFFO1FBQ0osTUFBTSxFQUFFLENBQUM7UUFDVCxJQUFJLEVBQUU7WUFDSixNQUFNLEVBQUUsNkNBQTZDO1lBQ3JELE1BQU0sRUFBRSwyQ0FBMkM7U0FDcEQ7S0FDRjtJQUNELFFBQVEsRUFBUixVQUFTLEtBQVM7UUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBR0QsTUFBTSxnQkFBRyxDQUFDO0lBR1YsT0FBTyxnQkFBRyxDQUFDO0lBR1gsTUFBTSxnQkFBRyxDQUFDO0lBR1YsTUFBTSxnQkFBRyxDQUFDO0lBR1YsUUFBUSxnQkFBRyxDQUFDO0NBQ2IsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW5kZXgudHNcbi8vIOiOt+WPluW6lOeUqOWunuS+i1xuY29uc3QgYXBwID0gZ2V0QXBwKCk7XG5cblBhZ2Uoe1xuICAvL+mhtemdouaVsOaNrlxuICBkYXRhOiB7XG4gICAgYWN0aXZlOiAwLFxuICAgIGljb246IHtcbiAgICAgIG5vcm1hbDogJ2h0dHBzOi8vaW1nLnl6Y2RuLmNuL3ZhbnQvdXNlci1pbmFjdGl2ZS5wbmcnLFxuICAgICAgYWN0aXZlOiAnaHR0cHM6Ly9pbWcueXpjZG4uY24vdmFudC91c2VyLWFjdGl2ZS5wbmcnLFxuICAgIH0sXG4gIH0sXG4gIG9uQ2hhbmdlKGV2ZW50OmFueSk6dm9pZCB7XG4gICAgdGhpcy5zZXREYXRhKHsgYWN0aXZlOiBldmVudC5kZXRhaWwgfSk7XG4gIH0sXG5cbiAgLy/pobXpnaLliJ3lp4vljJZcbiAgb25Mb2FkKCl7fSxcblxuICAvL+mhtemdoua4suafk+WujOaIkFxuICBvblJlYWR5KCl7fSxcblxuICAvL+mhtemdouaYvuekulxuICBvblNob3coKXt9LFxuXG4gIC8v6aG16Z2i6ZqQ6JePXG4gIG9uSGlkZSgpe30sXG5cbiAgLy/pobXpnaLlhbPpl61cbiAgb25VbmxvYWQoKXt9XG59KVxuIl19