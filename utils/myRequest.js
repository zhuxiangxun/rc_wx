"use strict";
var BASE_URL = getApp().globalData.url;
var BASE_URL_DW = getApp().globalData.zgUrl;
function zgRequest(url, data, method) {
    return new Promise(function (resolve, reject) {
        wx.request({
            url: BASE_URL_DW + url,
            data: data || {},
            method: method || 'GET',
            header: {
                'content-type': 'application/json',
            },
            success: function (res) {
                if (res.data.code == 200) {
                    resolve(res.data);
                }
                else {
                    reject(res.data.msg);
                }
            }, fail: function (err) {
                console.log(err);
            }
        });
    });
}
function zgSuccessRequest(url, data, method) {
    try {
        var token_1 = wx.getStorageSync('token');
        if (token_1) {
            return new Promise(function (resolve, reject) {
                wx.request({
                    url: BASE_URL_DW + url,
                    data: data || {},
                    method: method || 'GET',
                    header: {
                        'content-type': 'application/json',
                        'Authorization': token_1
                    },
                    success: function (res) {
                        if (res.data.code == 200) {
                            resolve(res.data);
                        }
                        else {
                            reject(res.data.msg);
                            if (res.data.msg == '登陆信息已失效，请重新登陆') {
                                wx.clearStorage();
                                wx.navigateTo({
                                    url: '../loginForm/loginForm'
                                });
                            }
                        }
                    }, fail: function (err) {
                        console.log(err);
                    }
                });
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
function request(url, data, method) {
    return new Promise(function (resolve, reject) {
        wx.request({
            url: BASE_URL + url,
            data: data || {},
            method: method || 'GET',
            header: {
                'content-type': 'application/json',
            },
            success: function (res) {
                if (res.data.code == 200) {
                    resolve(res.data);
                }
                else {
                    reject(res.data.msg);
                }
            }, fail: function (err) {
                console.log(err);
            }
        });
    });
}
function successRequest(url, data, method) {
    try {
        var token_2 = wx.getStorageSync('token');
        if (token_2) {
            return new Promise(function (resolve, reject) {
                wx.request({
                    url: BASE_URL + url,
                    data: data || {},
                    method: method || 'GET',
                    header: {
                        'content-type': 'application/json',
                        'Authorization': token_2
                    },
                    success: function (res) {
                        if (res.data.code == 200) {
                            resolve(res.data);
                        }
                        else {
                            reject(res.data.msg);
                            if (res.data.msg == '登陆信息已失效，请重新登陆') {
                                wx.clearStorage();
                                wx.navigateTo({
                                    url: '../loginForm/loginForm'
                                });
                            }
                        }
                    }, fail: function (err) {
                        console.log(err);
                    }
                });
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
    zgRequest: zgRequest,
    zgSuccessRequest: zgSuccessRequest,
    request: request,
    successRequest: successRequest
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlSZXF1ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibXlSZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFHQSxJQUFNLFFBQVEsR0FBVSxNQUFNLEVBQUUsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO0FBQ2hELElBQU0sV0FBVyxHQUFVLE1BQU0sRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7QUFHckQsU0FBUyxTQUFTLENBQUMsR0FBVSxFQUFFLElBQVMsRUFBRSxNQUFXO0lBQ25ELE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFXLEVBQUUsTUFBVTtRQUt6QyxFQUFFLENBQUMsT0FBTyxDQUFDO1lBQ1QsR0FBRyxFQUFFLFdBQVcsR0FBRyxHQUFHO1lBQ3RCLElBQUksRUFBRSxJQUFJLElBQUksRUFBRTtZQUNoQixNQUFNLEVBQUUsTUFBTSxJQUFJLEtBQUs7WUFDdkIsTUFBTSxFQUFFO2dCQUNOLGNBQWMsRUFBRSxrQkFBa0I7YUFDbkM7WUFBQyxPQUFPLEVBQVAsVUFBUSxHQUFPO2dCQUVmLElBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksR0FBRyxFQUFDO29CQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNuQjtxQkFBSTtvQkFDSCxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDdEI7WUFDSCxDQUFDLEVBQUMsSUFBSSxFQUFKLFVBQUssR0FBTztnQkFFWixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUM7QUFFRCxTQUFTLGdCQUFnQixDQUFDLEdBQVUsRUFBRSxJQUFTLEVBQUUsTUFBVztJQUMxRCxJQUFJO1FBQ0YsSUFBTSxPQUFLLEdBQVUsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FB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QWtCO3dCQUNsQyxlQUFlLEVBQUUsT0FBSztxQkFDdkI7b0JBQUMsT0FBTyxFQUFQLFVBQVEsR0FBTzt3QkFDZixJQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEdBQUcsRUFBQzs0QkFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzt5QkFDbkI7NkJBQUk7NEJBQ0gsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7NEJBQ3JCLElBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksZUFBZSxFQUFDO2dDQUNqQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7Z0NBQ2xCLEVBQUUsQ0FBQyxVQUFVLENBQUM7b0NBQ1osR0FBRyxFQUFDLHdCQUF3QjtpQ0FDN0IsQ0FBQyxDQUFBOzZCQUNIO3lCQUNGO29CQUNILENBQUMsRUFBQyxJQUFJLEVBQUosVUFBSyxHQUFPO3dCQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ25CLENBQUM7aUJBQ0YsQ0FBQyxDQUFBO1lBQ0osQ0FBQyxDQUFDLENBQUE7U0FDSDthQUFJO1lBRUgsRUFBRSxDQUFDLFVBQVUsQ0FBQztnQkFDWixHQUFHLEVBQUMsd0JBQXdCO2FBQzdCLENBQUMsQ0FBQTtTQUNIO0tBQ0Y7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDaEI7QUFDSCxDQUFDO0FBSUQsTUFBTSxDQUFDLE9BQU8sR0FBRztJQUNmLFNBQVMsRUFBRSxTQUFTO0lBQ3BCLGdCQUFnQixFQUFFLGdCQUFnQjtJQUNsQyxPQUFPLEVBQUUsT0FBTztJQUNoQixjQUFjLEVBQUUsY0FBYztDQUMvQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOWwgeijheWFrOWFsSBIVFRQUyDnvZHnu5zor7fmsYJcclxuICovXHJcbmNvbnN0IEJBU0VfVVJMOnN0cmluZyA9IGdldEFwcCgpLmdsb2JhbERhdGEudXJsOyAgICAgICAvLyDojrflj5blupTnlKjlrp7kvotcclxuY29uc3QgQkFTRV9VUkxfRFc6c3RyaW5nID0gZ2V0QXBwKCkuZ2xvYmFsRGF0YS56Z1VybDsgIC8vIOiOt+WPluW6lOeUqOWunuS+iyjkuLvnrqHljZXkvY0pXHJcblxyXG4vL+S4jeW4pnRva2Vu55qEYWpheOS4u+euoeWNleS9jeeZu+W9lVxyXG5mdW5jdGlvbiB6Z1JlcXVlc3QodXJsOnN0cmluZywgZGF0YT86YW55LCBtZXRob2Q/OmFueSk6YW55e1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZTphbnksIHJlamVjdDphbnkpPT57XHJcbiAgICAvLyB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAvLyAgIG1hc2s6IHRydWUsXHJcbiAgICAvLyAgIHRpdGxlOiAn55m76ZmG5Lit77yM6K+3562J5b6FLi4uJ1xyXG4gICAgLy8gfSlcclxuICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICB1cmw6IEJBU0VfVVJMX0RXICsgdXJsLCAgIC8v5o6l5Y+j5Zyw5Z2AXHJcbiAgICAgIGRhdGE6IGRhdGEgfHwge30sICAgICAgICAgLy/mlbDmja5cclxuICAgICAgbWV0aG9kOiBtZXRob2QgfHwgJ0dFVCcsICAvL+ivt+axguaWueW8j1xyXG4gICAgICBoZWFkZXI6IHtcclxuICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICB9LHN1Y2Nlc3MocmVzOmFueSkge1xyXG4gICAgICAgIC8vd3guaGlkZUxvYWRpbmcoKTtcclxuICAgICAgICBpZihyZXMuZGF0YS5jb2RlID09IDIwMCl7XHJcbiAgICAgICAgICByZXNvbHZlKHJlcy5kYXRhKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIHJlamVjdChyZXMuZGF0YS5tc2cpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxmYWlsKGVycjphbnkpe1xyXG4gICAgICAgIC8vd3guaGlkZUxvYWRpbmcoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0pXHJcbn1cclxuLy/luKZ0b2tlbueahGFqYXjkuLvnrqHljZXkvY3nmbvlvZVcclxuZnVuY3Rpb24gemdTdWNjZXNzUmVxdWVzdCh1cmw6c3RyaW5nLCBkYXRhPzphbnksIG1ldGhvZD86YW55KTphbnl7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHRva2VuOnN0cmluZyA9IHd4LmdldFN0b3JhZ2VTeW5jKCd0b2tlbicpO1xyXG4gICAgaWYgKHRva2VuKSB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZTphbnksIHJlamVjdDphbnkpPT57XHJcbiAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICB1cmw6IEJBU0VfVVJMX0RXICsgdXJsLCAgIC8v5o6l5Y+j5Zyw5Z2AXHJcbiAgICAgICAgICBkYXRhOiBkYXRhIHx8IHt9LCAgICAgICAgLy/mlbDmja5cclxuICAgICAgICAgIG1ldGhvZDogbWV0aG9kIHx8ICdHRVQnLCAgLy/or7fmsYLmlrnlvI9cclxuICAgICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLCAvLyDpu5jorqTlgLxcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiB0b2tlbiAgLy/or7fmsYJ0b2tlblxyXG4gICAgICAgICAgfSxzdWNjZXNzKHJlczphbnkpIHtcclxuICAgICAgICAgICAgaWYocmVzLmRhdGEuY29kZSA9PSAyMDApe1xyXG4gICAgICAgICAgICAgIHJlc29sdmUocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICByZWplY3QocmVzLmRhdGEubXNnKTtcclxuICAgICAgICAgICAgICBpZihyZXMuZGF0YS5tc2cgPT0gJ+eZu+mZhuS/oeaBr+W3suWkseaViO+8jOivt+mHjeaWsOeZu+mZhicpe1xyXG4gICAgICAgICAgICAgICAgd3guY2xlYXJTdG9yYWdlKCk7ICAvL+a4hemZpOe8k+WtmFxyXG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICAgIHVybDonLi4vbG9naW5Gb3JtL2xvZ2luRm9ybSdcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LGZhaWwoZXJyOmFueSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH1lbHNle1xyXG4gICAgICAvL+ayoeaciXRva2Vu6Lez6L2s55m75b2VXHJcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybDonLi4vbG9naW5Gb3JtL2xvZ2luRm9ybSdcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4vL+S4jeW4pnRva2Vu55qEYWpheFxyXG5mdW5jdGlvbiByZXF1ZXN0KHVybDpzdHJpbmcsIGRhdGE/OmFueSwgbWV0aG9kPzphbnkpOmFueXtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmU6YW55LCByZWplY3Q6YW55KT0+e1xyXG4gICAgLy8gd3guc2hvd0xvYWRpbmcoe1xyXG4gICAgLy8gICBtYXNrOiB0cnVlLFxyXG4gICAgLy8gICB0aXRsZTogJ+eZu+mZhuS4re+8jOivt+etieW+hS4uLidcclxuICAgIC8vIH0pXHJcbiAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgdXJsOiBCQVNFX1VSTCArIHVybCwgICAgICAvL+aOpeWPo+WcsOWdgFxyXG4gICAgICBkYXRhOiBkYXRhIHx8IHt9LCAgICAgICAgIC8v5pWw5o2uXHJcbiAgICAgIG1ldGhvZDogbWV0aG9kIHx8ICdHRVQnLCAgLy/or7fmsYLmlrnlvI9cclxuICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgfSxzdWNjZXNzKHJlczphbnkpIHtcclxuICAgICAgICAvL3d4LmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgICAgaWYocmVzLmRhdGEuY29kZSA9PSAyMDApe1xyXG4gICAgICAgICAgcmVzb2x2ZShyZXMuZGF0YSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICByZWplY3QocmVzLmRhdGEubXNnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sZmFpbChlcnI6YW55KXtcclxuICAgICAgICAvL3d4LmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9KVxyXG59XHJcblxyXG4vL+W4pnRva2Vu55qEYWpheFxyXG5mdW5jdGlvbiBzdWNjZXNzUmVxdWVzdCh1cmw6c3RyaW5nLCBkYXRhPzphbnksIG1ldGhvZD86YW55KTphbnl7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHRva2VuOnN0cmluZyA9IHd4LmdldFN0b3JhZ2VTeW5jKCd0b2tlbicpO1xyXG4gICAgaWYgKHRva2VuKSB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZTphbnksIHJlamVjdDphbnkpPT57XHJcbiAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICB1cmw6IEJBU0VfVVJMICsgdXJsLCAgIC8v5o6l5Y+j5Zyw5Z2AXHJcbiAgICAgICAgICBkYXRhOiBkYXRhIHx8IHt9LCAgICAgICAgLy/mlbDmja5cclxuICAgICAgICAgIG1ldGhvZDogbWV0aG9kIHx8ICdHRVQnLCAgLy/or7fmsYLmlrnlvI9cclxuICAgICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLCAvLyDpu5jorqTlgLxcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiB0b2tlbiAgLy/or7fmsYJ0b2tlblxyXG4gICAgICAgICAgfSxzdWNjZXNzKHJlczphbnkpIHtcclxuICAgICAgICAgICAgaWYocmVzLmRhdGEuY29kZSA9PSAyMDApe1xyXG4gICAgICAgICAgICAgIHJlc29sdmUocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICByZWplY3QocmVzLmRhdGEubXNnKTtcclxuICAgICAgICAgICAgICBpZihyZXMuZGF0YS5tc2cgPT0gJ+eZu+mZhuS/oeaBr+W3suWkseaViO+8jOivt+mHjeaWsOeZu+mZhicpe1xyXG4gICAgICAgICAgICAgICAgd3guY2xlYXJTdG9yYWdlKCk7ICAvL+a4hemZpOe8k+WtmFxyXG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICAgIHVybDonLi4vbG9naW5Gb3JtL2xvZ2luRm9ybSdcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LGZhaWwoZXJyOmFueSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH1lbHNle1xyXG4gICAgICAvL+ayoeaciXRva2Vu6Lez6L2s55m75b2VXHJcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybDonLi4vbG9naW5Gb3JtL2xvZ2luRm9ybSdcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4vL+WvvOWHuuaWueazlVxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICB6Z1JlcXVlc3Q6IHpnUmVxdWVzdCxcclxuICB6Z1N1Y2Nlc3NSZXF1ZXN0OiB6Z1N1Y2Nlc3NSZXF1ZXN0LFxyXG4gIHJlcXVlc3Q6IHJlcXVlc3QsXHJcbiAgc3VjY2Vzc1JlcXVlc3Q6IHN1Y2Nlc3NSZXF1ZXN0XHJcbn0iXX0=