"use strict";
var BASE_URL = getApp().globalData.url;
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
function successRequest(url, method, data) {
    try {
        var token_1 = wx.getStorageSync('token');
        if (token_1) {
            return new Promise(function (resolve, reject) {
                wx.request({
                    url: BASE_URL + url,
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
module.exports = {
    request: request,
    successRequest: successRequest
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlSZXF1ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibXlSZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFHQSxJQUFNLFFBQVEsR0FBVSxNQUFNLEVBQUUsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO0FBR2hELFNBQVMsT0FBTyxDQUFDLEdBQVUsRUFBRSxJQUFTLEVBQUUsTUFBVztJQUNqRCxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBVyxFQUFFLE1BQVU7UUFLekMsRUFBRSxDQUFDLE9BQU8sQ0FBQztZQUNULEdBQUcsRUFBRSxRQUFRLEdBQUcsR0FBRztZQUNuQixJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUU7WUFDaEIsTUFBTSxFQUFFLE1BQU0sSUFBSSxLQUFLO1lBQ3ZCLE1BQU0sRUFBRTtnQkFDTixjQUFjLEVBQUUsa0JBQWtCO2FBQ25DO1lBQUMsT0FBTyxFQUFQLFVBQVEsR0FBTztnQkFFZixJQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEdBQUcsRUFBQztvQkFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDbkI7cUJBQUk7b0JBQ0gsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ3RCO1lBQ0gsQ0FBQyxFQUFDLElBQUksRUFBSixVQUFLLEdBQU87Z0JBRVosT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuQixDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDO0FBR0QsU0FBUyxjQUFjLENBQUMsR0FBVSxFQUFFLE1BQVUsRUFBRSxJQUFTO0lBQ3ZELElBQUk7UUFDRixJQUFNLE9BQUssR0FBVSxFQUFFLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hELElBQUksT0FBSyxFQUFFO1lBQ1QsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQVcsRUFBRSxNQUFVO2dCQUN6QyxFQUFFLENBQUMsT0FBTyxDQUFDO29CQUNULEdBQUcsRUFBRSxRQUFRLEdBQUcsR0FBRztvQkFDbkIsSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFO29CQUNoQixNQUFNLEVBQUUsTUFBTSxJQUFJLEtBQUs7b0JBQ3ZCLE1BQU0sRUFBRTt3QkFDTixjQUFjLEVBQUUsa0JBQWtCO3dCQUNsQyxlQUFlLEVBQUUsT0FBSztxQkFDdkI7b0JBQUMsT0FBTyxFQUFQLFVBQVEsR0FBTzt3QkFDZixJQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEdBQUcsRUFBQzs0QkFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzt5QkFDbkI7NkJBQUk7NEJBQ0gsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7NEJBQ3JCLElBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksZUFBZSxFQUFDO2dDQUNqQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7Z0NBQ2xCLEVBQUUsQ0FBQyxVQUFVLENBQUM7b0NBQ1osR0FBRyxFQUFDLHdCQUF3QjtpQ0FDN0IsQ0FBQyxDQUFBOzZCQUNIO3lCQUNGO29CQUNILENBQUMsRUFBQyxJQUFJLEVBQUosVUFBSyxHQUFPO3dCQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ25CLENBQUM7aUJBQ0YsQ0FBQyxDQUFBO1lBQ0osQ0FBQyxDQUFDLENBQUE7U0FDSDthQUFJO1lBRUgsRUFBRSxDQUFDLFVBQVUsQ0FBQztnQkFDWixHQUFHLEVBQUMsd0JBQXdCO2FBQzdCLENBQUMsQ0FBQTtTQUNIO0tBQ0Y7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDaEI7QUFDSCxDQUFDO0FBSUQsTUFBTSxDQUFDLE9BQU8sR0FBRztJQUNmLE9BQU8sRUFBRSxPQUFPO0lBQ2hCLGNBQWMsRUFBRSxjQUFjO0NBQy9CLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5bCB6KOF5YWs5YWxIEhUVFBTIOe9kee7nOivt+axglxyXG4gKi9cclxuY29uc3QgQkFTRV9VUkw6c3RyaW5nID0gZ2V0QXBwKCkuZ2xvYmFsRGF0YS51cmw7ICAvLyDojrflj5blupTnlKjlrp7kvotcclxuXHJcbi8v5LiN5bimdG9rZW7nmoRhamF4XHJcbmZ1bmN0aW9uIHJlcXVlc3QodXJsOnN0cmluZywgZGF0YT86YW55LCBtZXRob2Q/OmFueSk6YW55e1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZTphbnksIHJlamVjdDphbnkpPT57XHJcbiAgICAvLyB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAvLyAgIG1hc2s6IHRydWUsXHJcbiAgICAvLyAgIHRpdGxlOiAn55m76ZmG5Lit77yM6K+3562J5b6FLi4uJ1xyXG4gICAgLy8gfSlcclxuICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICB1cmw6IEJBU0VfVVJMICsgdXJsLCAgICAgIC8v5o6l5Y+j5Zyw5Z2AXHJcbiAgICAgIGRhdGE6IGRhdGEgfHwge30sICAgICAgICAgLy/mlbDmja5cclxuICAgICAgbWV0aG9kOiBtZXRob2QgfHwgJ0dFVCcsICAvL+ivt+axguaWueW8j1xyXG4gICAgICBoZWFkZXI6IHtcclxuICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICB9LHN1Y2Nlc3MocmVzOmFueSkge1xyXG4gICAgICAgIC8vd3guaGlkZUxvYWRpbmcoKTtcclxuICAgICAgICBpZihyZXMuZGF0YS5jb2RlID09IDIwMCl7XHJcbiAgICAgICAgICByZXNvbHZlKHJlcy5kYXRhKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIHJlamVjdChyZXMuZGF0YS5tc2cpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxmYWlsKGVycjphbnkpe1xyXG4gICAgICAgIC8vd3guaGlkZUxvYWRpbmcoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0pXHJcbn1cclxuXHJcbi8v5bimdG9rZW7nmoRhamF4XHJcbmZ1bmN0aW9uIHN1Y2Nlc3NSZXF1ZXN0KHVybDpzdHJpbmcsIG1ldGhvZDphbnksIGRhdGE/OmFueSk6YW55e1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB0b2tlbjpzdHJpbmcgPSB3eC5nZXRTdG9yYWdlU3luYygndG9rZW4nKTtcclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmU6YW55LCByZWplY3Q6YW55KT0+e1xyXG4gICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgdXJsOiBCQVNFX1VSTCArIHVybCwgICAvL+aOpeWPo+WcsOWdgFxyXG4gICAgICAgICAgZGF0YTogZGF0YSB8fCB7fSwgICAgICAgIC8v5pWw5o2uXHJcbiAgICAgICAgICBtZXRob2Q6IG1ldGhvZCB8fCAnR0VUJywgIC8v6K+35rGC5pa55byPXHJcbiAgICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJywgLy8g6buY6K6k5YC8XHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogdG9rZW4gIC8v6K+35rGCdG9rZW5cclxuICAgICAgICAgIH0sc3VjY2VzcyhyZXM6YW55KSB7XHJcbiAgICAgICAgICAgIGlmKHJlcy5kYXRhLmNvZGUgPT0gMjAwKXtcclxuICAgICAgICAgICAgICByZXNvbHZlKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgcmVqZWN0KHJlcy5kYXRhLm1zZyk7XHJcbiAgICAgICAgICAgICAgaWYocmVzLmRhdGEubXNnID09ICfnmbvpmYbkv6Hmga/lt7LlpLHmlYjvvIzor7fph43mlrDnmbvpmYYnKXtcclxuICAgICAgICAgICAgICAgIHd4LmNsZWFyU3RvcmFnZSgpOyAgLy/muIXpmaTnvJPlrZhcclxuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgICB1cmw6Jy4uL2xvZ2luRm9ybS9sb2dpbkZvcm0nXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxmYWlsKGVycjphbnkpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9ZWxzZXtcclxuICAgICAgLy/msqHmnIl0b2tlbui3s+i9rOeZu+W9lVxyXG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6Jy4uL2xvZ2luRm9ybS9sb2dpbkZvcm0nXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5sb2coZSk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLy/lr7zlh7rmlrnms5VcclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgcmVxdWVzdDogcmVxdWVzdCxcclxuICBzdWNjZXNzUmVxdWVzdDogc3VjY2Vzc1JlcXVlc3RcclxufSJdfQ==