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
function successRequest(url, data, method) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlSZXF1ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibXlSZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFHQSxJQUFNLFFBQVEsR0FBVSxNQUFNLEVBQUUsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO0FBR2hELFNBQVMsT0FBTyxDQUFDLEdBQVUsRUFBRSxJQUFTLEVBQUUsTUFBVztJQUNqRCxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBVyxFQUFFLE1BQVU7UUFLekMsRUFBRSxDQUFDLE9BQU8sQ0FBQztZQUNULEdBQUcsRUFBRSxRQUFRLEdBQUcsR0FBRztZQUNuQixJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUU7WUFDaEIsTUFBTSxFQUFFLE1BQU0sSUFBSSxLQUFLO1lBQ3ZCLE1BQU0sRUFBRTtnQkFDTixjQUFjLEVBQUUsa0JBQWtCO2FBQ25DO1lBQUMsT0FBTyxFQUFQLFVBQVEsR0FBTztnQkFFZixJQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEdBQUcsRUFBQztvQkFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDbkI7cUJBQUk7b0JBQ0gsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ3RCO1lBQ0gsQ0FBQyxFQUFDLElBQUksRUFBSixVQUFLLEdBQU87Z0JBRVosT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuQixDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDO0FBR0QsU0FBUyxjQUFjLENBQUMsR0FBVSxFQUFFLElBQVMsRUFBRSxNQUFXO0lBQ3hELElBQUk7UUFDRixJQUFNLE9BQUssR0FBVSxFQUFFLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hELElBQUksT0FBSyxFQUFFO1lBQ1QsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQVcsRUFBRSxNQUFVO2dCQUN6QyxFQUFFLENBQUMsT0FBTyxDQUFDO29CQUNULEdBQUcsRUFBRSxRQUFRLEdBQUcsR0FBRztvQkFDbkIsSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFO29CQUNoQixNQUFNLEVBQUUsTUFBTSxJQUFJLEtBQUs7b0JBQ3ZCLE1BQU0sRUFBRTt3QkFDTixjQUFjLEVBQUUsa0JBQWtCO3dCQUNsQyxlQUFlLEVBQUUsT0FBSztxQkFDdkI7b0JBQUMsT0FBTyxFQUFQLFVBQVEsR0FBTzt3QkFDZixJQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEdBQUcsRUFBQzs0QkFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzt5QkFDbkI7NkJBQUk7NEJBQ0gsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7NEJBQ3JCLElBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksZUFBZSxFQUFDO2dDQUNqQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7Z0NBQ2xCLEVBQUUsQ0FBQyxVQUFVLENBQUM7b0NBQ1osR0FBRyxFQUFDLHdCQUF3QjtpQ0FDN0IsQ0FBQyxDQUFBOzZCQUNIO3lCQUNGO29CQUNILENBQUMsRUFBQyxJQUFJLEVBQUosVUFBSyxHQUFPO3dCQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ25CLENBQUM7aUJBQ0YsQ0FBQyxDQUFBO1lBQ0osQ0FBQyxDQUFDLENBQUE7U0FDSDthQUFJO1lBRUgsRUFBRSxDQUFDLFVBQVUsQ0FBQztnQkFDWixHQUFHLEVBQUMsd0JBQXdCO2FBQzdCLENBQUMsQ0FBQTtTQUNIO0tBQ0Y7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDaEI7QUFDSCxDQUFDO0FBSUQsTUFBTSxDQUFDLE9BQU8sR0FBRztJQUNmLE9BQU8sRUFBRSxPQUFPO0lBQ2hCLGNBQWMsRUFBRSxjQUFjO0NBQy9CLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5bCB6KOF5YWs5YWxIEhUVFBTIOe9kee7nOivt+axglxyXG4gKi9cclxuY29uc3QgQkFTRV9VUkw6c3RyaW5nID0gZ2V0QXBwKCkuZ2xvYmFsRGF0YS51cmw7ICAvLyDojrflj5blupTnlKjlrp7kvotcclxuXHJcbi8v5LiN5bimdG9rZW7nmoRhamF4XHJcbmZ1bmN0aW9uIHJlcXVlc3QodXJsOnN0cmluZywgZGF0YT86YW55LCBtZXRob2Q/OmFueSk6YW55e1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZTphbnksIHJlamVjdDphbnkpPT57XHJcbiAgICAvLyB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAvLyAgIG1hc2s6IHRydWUsXHJcbiAgICAvLyAgIHRpdGxlOiAn55m76ZmG5Lit77yM6K+3562J5b6FLi4uJ1xyXG4gICAgLy8gfSlcclxuICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICB1cmw6IEJBU0VfVVJMICsgdXJsLCAgICAgIC8v5o6l5Y+j5Zyw5Z2AXHJcbiAgICAgIGRhdGE6IGRhdGEgfHwge30sICAgICAgICAgLy/mlbDmja5cclxuICAgICAgbWV0aG9kOiBtZXRob2QgfHwgJ0dFVCcsICAvL+ivt+axguaWueW8j1xyXG4gICAgICBoZWFkZXI6IHtcclxuICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICB9LHN1Y2Nlc3MocmVzOmFueSkge1xyXG4gICAgICAgIC8vd3guaGlkZUxvYWRpbmcoKTtcclxuICAgICAgICBpZihyZXMuZGF0YS5jb2RlID09IDIwMCl7XHJcbiAgICAgICAgICByZXNvbHZlKHJlcy5kYXRhKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIHJlamVjdChyZXMuZGF0YS5tc2cpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxmYWlsKGVycjphbnkpe1xyXG4gICAgICAgIC8vd3guaGlkZUxvYWRpbmcoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0pXHJcbn1cclxuXHJcbi8v5bimdG9rZW7nmoRhamF4XHJcbmZ1bmN0aW9uIHN1Y2Nlc3NSZXF1ZXN0KHVybDpzdHJpbmcsIGRhdGE/OmFueSwgbWV0aG9kPzphbnkpOmFueXtcclxuICB0cnkge1xyXG4gICAgY29uc3QgdG9rZW46c3RyaW5nID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3Rva2VuJyk7XHJcbiAgICBpZiAodG9rZW4pIHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlOmFueSwgcmVqZWN0OmFueSk9PntcclxuICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgIHVybDogQkFTRV9VUkwgKyB1cmwsICAgLy/mjqXlj6PlnLDlnYBcclxuICAgICAgICAgIGRhdGE6IGRhdGEgfHwge30sICAgICAgICAvL+aVsOaNrlxyXG4gICAgICAgICAgbWV0aG9kOiBtZXRob2QgfHwgJ0dFVCcsICAvL+ivt+axguaWueW8j1xyXG4gICAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsIC8vIOm7mOiupOWAvFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRva2VuICAvL+ivt+axgnRva2VuXHJcbiAgICAgICAgICB9LHN1Y2Nlc3MocmVzOmFueSkge1xyXG4gICAgICAgICAgICBpZihyZXMuZGF0YS5jb2RlID09IDIwMCl7XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZShyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgIHJlamVjdChyZXMuZGF0YS5tc2cpO1xyXG4gICAgICAgICAgICAgIGlmKHJlcy5kYXRhLm1zZyA9PSAn55m76ZmG5L+h5oGv5bey5aSx5pWI77yM6K+36YeN5paw55m76ZmGJyl7XHJcbiAgICAgICAgICAgICAgICB3eC5jbGVhclN0b3JhZ2UoKTsgIC8v5riF6Zmk57yT5a2YXHJcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgICAgdXJsOicuLi9sb2dpbkZvcm0vbG9naW5Gb3JtJ1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sZmFpbChlcnI6YW55KXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIC8v5rKh5pyJdG9rZW7ot7PovaznmbvlvZVcclxuICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgdXJsOicuLi9sb2dpbkZvcm0vbG9naW5Gb3JtJ1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi8v5a+85Ye65pa55rOVXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIHJlcXVlc3Q6IHJlcXVlc3QsXHJcbiAgc3VjY2Vzc1JlcXVlc3Q6IHN1Y2Nlc3NSZXF1ZXN0XHJcbn0iXX0=