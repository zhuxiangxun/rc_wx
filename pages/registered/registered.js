"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Page({
    data: {
        tabActive: 'jg',
        jgFileList: [],
        unitType: [
            { text: '选择类型', value: 0 },
            { text: '新款商品', value: 1 },
            { text: '活动商品', value: 2 },
        ],
        formDate: {
            value: '',
            radio: '1',
        },
        formRrror: {},
        verification: false,
    },
    onTabChange: function () {
    },
    jgAfterRead: function (event) {
        var file = event.detail.file;
        wx.uploadFile({
            url: 'https://example.weixin.qq.com/upload',
            filePath: file.path,
            name: 'file',
            formData: { user: 'test' },
            success: function () {
            },
        });
    },
    onLoad: function () {
        wx.setNavigationBarTitle({
            title: "注册"
        });
    },
    onReady: function () { },
    onShow: function () { },
    onHide: function () { },
    onUnload: function () { }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXJlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlZ2lzdGVyZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxJQUFJLENBQUM7SUFFSCxJQUFJLEVBQUU7UUFDSixTQUFTLEVBQUUsSUFBSTtRQUNmLFVBQVUsRUFBRSxFQUFFO1FBQ2QsUUFBUSxFQUFFO1lBQ1IsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7WUFDMUIsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7WUFDMUIsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7U0FDM0I7UUFDRCxRQUFRLEVBQUM7WUFDUCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxHQUFHO1NBQ1g7UUFDRCxTQUFTLEVBQUMsRUFFVDtRQUNELFlBQVksRUFBRSxLQUFLO0tBQ3BCO0lBR0QsV0FBVyxFQUFYO0lBRUEsQ0FBQztJQUVELFdBQVcsRUFBWCxVQUFZLEtBQVM7UUFDWCxJQUFBLElBQUksR0FBUyxLQUFLLENBQUMsTUFBTSxLQUFyQixDQUFzQjtRQUVsQyxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLHNDQUFzQztZQUMzQyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDbkIsSUFBSSxFQUFFLE1BQU07WUFDWixRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO1lBQzFCLE9BQU87WUFHUCxDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUlELE1BQU07UUFFSixFQUFFLENBQUMscUJBQXFCLENBQUM7WUFDdkIsS0FBSyxFQUFFLElBQUk7U0FDWixDQUFDLENBQUM7SUFDTCxDQUFDO0lBR0QsT0FBTyxnQkFBRyxDQUFDO0lBR1gsTUFBTSxnQkFBRyxDQUFDO0lBR1YsTUFBTSxnQkFBRyxDQUFDO0lBR1YsUUFBUSxnQkFBRyxDQUFDO0NBQ2IsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVnaXN0ZXJlZC50c1xyXG5cclxuUGFnZSh7XHJcbiAgLy/pobXpnaLmlbDmja5cclxuICBkYXRhOiB7XHJcbiAgICB0YWJBY3RpdmU6ICdqZycsICAgICAgICAgLy/ms6jlhox0YWJcclxuICAgIGpnRmlsZUxpc3Q6IFtdLCAgICAgICAgICAvL+acuuaehOS4iuS8oOmZhOS7tlxyXG4gICAgdW5pdFR5cGU6IFsgICAgICAgICAgICAgICAvL+WNleS9jeexu+Wei1xyXG4gICAgICB7IHRleHQ6ICfpgInmi6nnsbvlnosnLCB2YWx1ZTogMCB9LFxyXG4gICAgICB7IHRleHQ6ICfmlrDmrL7llYblk4EnLCB2YWx1ZTogMSB9LFxyXG4gICAgICB7IHRleHQ6ICfmtLvliqjllYblk4EnLCB2YWx1ZTogMiB9LFxyXG4gICAgXSxcclxuICAgIGZvcm1EYXRlOnsgIC8v6KGo5Y2VXHJcbiAgICAgIHZhbHVlOiAnJyxcclxuICAgICAgcmFkaW86ICcxJyxcclxuICAgIH0sXHJcbiAgICBmb3JtUnJyb3I6eyAgLy/pqozor4FcclxuICAgICAgXHJcbiAgICB9LFxyXG4gICAgdmVyaWZpY2F0aW9uOiBmYWxzZSwgICAgLy/pqozor4HliKTmlq1cclxuICB9LFxyXG5cclxuXHJcbiAgb25UYWJDaGFuZ2UoKTp2b2lkeyAgLy90YWLliIfmjaLop6blj5FcclxuXHJcbiAgfSxcclxuXHJcbiAgamdBZnRlclJlYWQoZXZlbnQ6YW55KTp2b2lkIHtcclxuICAgIGNvbnN0IHsgZmlsZSB9OmFueSA9IGV2ZW50LmRldGFpbDtcclxuICAgIC8vIOW9k+iuvue9riBtdXRpcGxlIOS4uiB0cnVlIOaXtiwgZmlsZSDkuLrmlbDnu4TmoLzlvI/vvIzlkKbliJnkuLrlr7nosaHmoLzlvI9cclxuICAgIHd4LnVwbG9hZEZpbGUoe1xyXG4gICAgICB1cmw6ICdodHRwczovL2V4YW1wbGUud2VpeGluLnFxLmNvbS91cGxvYWQnLCAvLyDku4XkuLrnpLrkvovvvIzpnZ7nnJ/lrp7nmoTmjqXlj6PlnLDlnYBcclxuICAgICAgZmlsZVBhdGg6IGZpbGUucGF0aCxcclxuICAgICAgbmFtZTogJ2ZpbGUnLFxyXG4gICAgICBmb3JtRGF0YTogeyB1c2VyOiAndGVzdCcgfSxcclxuICAgICAgc3VjY2VzcygpIHtcclxuICAgICAgICAvLyDkuIrkvKDlrozmiJDpnIDopoHmm7TmlrAgZmlsZUxpc3RcclxuICAgICAgICBcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG5cclxuICAvL+mhtemdouWIneWni+WMllxyXG4gIG9uTG9hZCgpe1xyXG4gICAgLy/pobXpnaLmoIfpophcclxuICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7ICAgICBcclxuICAgICAgdGl0bGU6IFwi5rOo5YaMXCJcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIC8v6aG16Z2i5riy5p+T5a6M5oiQXHJcbiAgb25SZWFkeSgpe30sXHJcblxyXG4gIC8v6aG16Z2i5pi+56S6XHJcbiAgb25TaG93KCl7fSxcclxuXHJcbiAgLy/pobXpnaLpmpDol49cclxuICBvbkhpZGUoKXt9LFxyXG5cclxuICAvL+mhtemdouWFs+mXrVxyXG4gIG9uVW5sb2FkKCl7fVxyXG59KVxyXG5leHBvcnQge307XHJcbiJdfQ==