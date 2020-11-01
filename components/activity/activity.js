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
        onMoreBtn: function () {
            console.log(111);
            this.triggerEvent('moreBtn');
        },
        newsInfo: function (e) {
            wx.navigateTo({
                url: '../newsInfo/newsInfo?id=' + e.currentTarget.dataset.id
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhY3Rpdml0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLFNBQVMsQ0FBQztJQUlSLFVBQVUsRUFBRTtRQUNWLFFBQVEsRUFBQyxLQUFLO1FBQ2QsTUFBTSxFQUFDLE1BQU07UUFDYixTQUFTLEVBQUMsTUFBTTtRQUNoQixRQUFRLEVBQUMsT0FBTztLQUNqQjtJQUtELElBQUksRUFBRSxFQUVMO0lBS0QsT0FBTyxFQUFFO1FBQ1AsU0FBUyxFQUFUO1lBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNoQixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9CLENBQUM7UUFDRCxRQUFRLEVBQVIsVUFBUyxDQUFLO1lBQ1osRUFBRSxDQUFDLFVBQVUsQ0FBQztnQkFDWixHQUFHLEVBQUMsMEJBQTBCLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBRTthQUM1RCxDQUFDLENBQUE7UUFDSixDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhY3Rpdml0eS50c1xyXG5Db21wb25lbnQoe1xyXG4gIC8qKlxyXG4gICAqIOe7hOS7tueahOWxnuaAp+WIl+ihqFxyXG4gICAqL1xyXG4gIHByb3BlcnRpZXM6IHtcclxuICAgIGxpc3REYXRhOkFycmF5LFxyXG4gICAgaW1nVXJsOlN0cmluZyxcclxuICAgIG1vcmVUaXRsZTpTdHJpbmcsXHJcbiAgICBtb3JlU2hvdzpCb29sZWFuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog57uE5Lu255qE5Yid5aeL5pWw5o2uXHJcbiAgICovXHJcbiAgZGF0YToge1xyXG4gICAgXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog57uE5Lu255qE5pa55rOV5YiX6KGoXHJcbiAgICovXHJcbiAgbWV0aG9kczoge1xyXG4gICAgb25Nb3JlQnRuKCk6dm9pZHsgIC8v6LCD55So54i257uE5Lu25pa55rOVXHJcbiAgICAgIGNvbnNvbGUubG9nKDExMSlcclxuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ21vcmVCdG4nKTtcclxuICAgIH0sXHJcbiAgICBuZXdzSW5mbyhlOmFueSk6dm9pZHsgIC8v6K+m5oOFXHJcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybDonLi4vbmV3c0luZm8vbmV3c0luZm8/aWQ9JyArIGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG5leHBvcnQge307Il19