"use strict";
var BASE_URL = "http://rc.qdcsdn.cn/sit-rencai-api/web/";
function request(url, data, method) {
    try {
        wx.showLoading({
            mask: true,
            title: '登陆中，请等待...'
        });
        return new Promise(function (resolve, reject) {
            wx.request({
                url: BASE_URL + url,
                data: data || {},
                method: method || 'GET',
                header: {
                    'content-type': 'application/json',
                },
                success: function (res) {
                    wx.hideLoading();
                    if (res.data.code == 200) {
                        resolve(res.data);
                    }
                    else {
                        reject(res.msg);
                    }
                }, fail: function (err) {
                    wx.hideLoading();
                    console.log(err);
                }
            });
        });
    }
    catch (e) {
        console.log(e);
    }
}
function successRequest(url, method, data) {
    try {
        var token = wx.getStorageSync('token');
        if (token) {
            wx.request({
                url: BASE_URL + url,
                data: data || {},
                method: method || 'GET',
                header: {
                    'content-type': 'application/json',
                },
                success: function (res) {
                    return res;
                },
                fail: function (err) {
                    return err;
                }
            });
        }
        else {
            wx.navigateTo({
                url: '../loginForm/loginForm'
            });
        }
    }
    catch (e) {
        console.log(e);
    }
}
module.exports = {
    request: request,
    successRequest: successRequest
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlSZXF1ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibXlSZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFHQSxJQUFNLFFBQVEsR0FBVSx5Q0FBeUMsQ0FBQztBQUdsRSxTQUFTLE9BQU8sQ0FBQyxHQUFVLEVBQUUsSUFBUyxFQUFFLE1BQVc7SUFDakQsSUFBSTtRQUNGLEVBQUUsQ0FBQyxXQUFXLENBQUM7WUFDYixJQUFJLEVBQUUsSUFBSTtZQUNWLEtBQUssRUFBRSxZQUFZO1NBQ3BCLENBQUMsQ0FBQTtRQUNGLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFXLEVBQUUsTUFBVTtZQUN6QyxFQUFFLENBQUMsT0FBTyxDQUFDO2dCQUNULEdBQUcsRUFBRSxRQUFRLEdBQUcsR0FBRztnQkFDbkIsSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFO2dCQUNoQixNQUFNLEVBQUUsTUFBTSxJQUFJLEtBQUs7Z0JBQ3ZCLE1BQU0sRUFBRTtvQkFDTixjQUFjLEVBQUUsa0JBQWtCO2lCQUNuQztnQkFBQyxPQUFPLEVBQVAsVUFBUSxHQUFPO29CQUNmLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDakIsSUFBRyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxHQUFHLEVBQUM7d0JBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQ25CO3lCQUFJO3dCQUNILE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQ2pCO2dCQUNILENBQUMsRUFBQyxJQUFJLEVBQUosVUFBSyxHQUFPO29CQUNaLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDbkIsQ0FBQzthQUNGLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFBO0tBQ0g7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDaEI7QUFDSCxDQUFDO0FBR0QsU0FBUyxjQUFjLENBQUMsR0FBVSxFQUFFLE1BQVUsRUFBRSxJQUFTO0lBQ3ZELElBQUk7UUFDRixJQUFNLEtBQUssR0FBVSxFQUFFLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hELElBQUksS0FBSyxFQUFFO1lBQ1QsRUFBRSxDQUFDLE9BQU8sQ0FBQztnQkFDVCxHQUFHLEVBQUUsUUFBUSxHQUFHLEdBQUc7Z0JBQ25CLElBQUksRUFBRSxJQUFJLElBQUksRUFBRTtnQkFDaEIsTUFBTSxFQUFFLE1BQU0sSUFBSSxLQUFLO2dCQUN2QixNQUFNLEVBQUU7b0JBQ04sY0FBYyxFQUFFLGtCQUFrQjtpQkFFbkM7Z0JBQ0QsT0FBTyxFQUFQLFVBQVEsR0FBTztvQkFDYixPQUFPLEdBQUcsQ0FBQztnQkFDYixDQUFDO2dCQUNELElBQUksRUFBSixVQUFLLEdBQU87b0JBQ1YsT0FBTyxHQUFHLENBQUM7Z0JBQ2IsQ0FBQzthQUNGLENBQUMsQ0FBQTtTQUNIO2FBQUk7WUFFSCxFQUFFLENBQUMsVUFBVSxDQUFDO2dCQUNaLEdBQUcsRUFBQyx3QkFBd0I7YUFDN0IsQ0FBQyxDQUFBO1NBQ0g7S0FDRjtJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNoQjtBQUNILENBQUM7QUFFRCxNQUFNLENBQUMsT0FBTyxHQUFHO0lBQ2YsT0FBTyxFQUFFLE9BQU87SUFDaEIsY0FBYyxFQUFFLGNBQWM7Q0FDL0IsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDlsIHoo4XlhazlhbEgSFRUUFMg572R57uc6K+35rGCXHJcbiAqL1xyXG5jb25zdCBCQVNFX1VSTDpzdHJpbmcgPSBcImh0dHA6Ly9yYy5xZGNzZG4uY24vc2l0LXJlbmNhaS1hcGkvd2ViL1wiO1xyXG5cclxuLy/kuI3luKZ0b2tlbueahGFqYXhcclxuZnVuY3Rpb24gcmVxdWVzdCh1cmw6c3RyaW5nLCBkYXRhPzphbnksIG1ldGhvZD86YW55KXtcclxuICB0cnkge1xyXG4gICAgd3guc2hvd0xvYWRpbmcoe1xyXG4gICAgICBtYXNrOiB0cnVlLFxyXG4gICAgICB0aXRsZTogJ+eZu+mZhuS4re+8jOivt+etieW+hS4uLidcclxuICAgIH0pXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmU6YW55LCByZWplY3Q6YW55KT0+e1xyXG4gICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICB1cmw6IEJBU0VfVVJMICsgdXJsLCAgICAgIC8v5o6l5Y+j5Zyw5Z2AXHJcbiAgICAgICAgZGF0YTogZGF0YSB8fCB7fSwgICAgICAgICAvL+aVsOaNrlxyXG4gICAgICAgIG1ldGhvZDogbWV0aG9kIHx8ICdHRVQnLCAgLy/or7fmsYLmlrnlvI9cclxuICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfSxzdWNjZXNzKHJlczphbnkpIHtcclxuICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgICAgICBpZihyZXMuZGF0YS5jb2RlID09IDIwMCl7XHJcbiAgICAgICAgICAgIHJlc29sdmUocmVzLmRhdGEpO1xyXG4gICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJlamVjdChyZXMubXNnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LGZhaWwoZXJyOmFueSl7XHJcbiAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gIH1cclxufVxyXG5cclxuLy/luKZ0b2tlbueahGFqYXhcclxuZnVuY3Rpb24gc3VjY2Vzc1JlcXVlc3QodXJsOnN0cmluZywgbWV0aG9kOmFueSwgZGF0YT86YW55KXtcclxuICB0cnkge1xyXG4gICAgY29uc3QgdG9rZW46c3RyaW5nID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3Rva2VuJyk7XHJcbiAgICBpZiAodG9rZW4pIHtcclxuICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiBCQVNFX1VSTCArIHVybCwgICAvL+aOpeWPo+WcsOWdgFxyXG4gICAgICAgIGRhdGE6IGRhdGEgfHwge30sICAgICAgICAvL+aVsOaNrlxyXG4gICAgICAgIG1ldGhvZDogbWV0aG9kIHx8ICdHRVQnLCAgLy/or7fmsYLmlrnlvI9cclxuICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsIC8vIOm7mOiupOWAvFxyXG4gICAgICAgICAgLy8ndG9rZW4nOiB0b2tlbiAgLy/or7fmsYJ0b2tlblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzcyhyZXM6YW55KSB7XHJcbiAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFpbChlcnI6YW55KXtcclxuICAgICAgICAgIHJldHVybiBlcnI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIC8v5rKh5pyJdG9rZW7ot7PovaznmbvlvZVcclxuICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgdXJsOicuLi9sb2dpbkZvcm0vbG9naW5Gb3JtJ1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgcmVxdWVzdDogcmVxdWVzdCxcclxuICBzdWNjZXNzUmVxdWVzdDogc3VjY2Vzc1JlcXVlc3RcclxufSJdfQ==