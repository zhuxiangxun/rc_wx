"use strict";
var BASE_URL = "http://lu.eyunhan.com/sit-rencai-api/";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlSZXF1ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibXlSZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFJQSxJQUFNLFFBQVEsR0FBVSx1Q0FBdUMsQ0FBQztBQUloRSxTQUFTLE9BQU8sQ0FBQyxHQUFVLEVBQUUsSUFBUyxFQUFFLE1BQVc7SUFDakQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQVcsRUFBRSxNQUFVO1FBS3pDLEVBQUUsQ0FBQyxPQUFPLENBQUM7WUFDVCxHQUFHLEVBQUUsUUFBUSxHQUFHLEdBQUc7WUFDbkIsSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFO1lBQ2hCLE1BQU0sRUFBRSxNQUFNLElBQUksS0FBSztZQUN2QixNQUFNLEVBQUU7Z0JBQ04sY0FBYyxFQUFFLGtCQUFrQjthQUNuQztZQUFDLE9BQU8sRUFBUCxVQUFRLEdBQU87Z0JBRWYsSUFBRyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxHQUFHLEVBQUM7b0JBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ25CO3FCQUFJO29CQUNILE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUN0QjtZQUNILENBQUMsRUFBQyxJQUFJLEVBQUosVUFBSyxHQUFPO2dCQUVaLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkIsQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQztBQUdELFNBQVMsY0FBYyxDQUFDLEdBQVUsRUFBRSxNQUFVLEVBQUUsSUFBUztJQUN2RCxJQUFJO1FBQ0YsSUFBTSxPQUFLLEdBQVUsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoRCxJQUFJLE9BQUssRUFBRTtZQUNULE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFXLEVBQUUsTUFBVTtnQkFDekMsRUFBRSxDQUFDLE9BQU8sQ0FBQztvQkFDVCxHQUFHLEVBQUUsUUFBUSxHQUFHLEdBQUc7b0JBQ25CLElBQUksRUFBRSxJQUFJLElBQUksRUFBRTtvQkFDaEIsTUFBTSxFQUFFLE1BQU0sSUFBSSxLQUFLO29CQUN2QixNQUFNLEVBQUU7d0JBQ04sY0FBYyxFQUFFLGtCQUFrQjt3QkFDbEMsZUFBZSxFQUFFLE9BQUs7cUJBQ3ZCO29CQUFDLE9BQU8sRUFBUCxVQUFRLEdBQU87d0JBQ2YsSUFBRyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxHQUFHLEVBQUM7NEJBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7eUJBQ25COzZCQUFJOzRCQUNILE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3lCQUN0QjtvQkFDSCxDQUFDLEVBQUMsSUFBSSxFQUFKLFVBQUssR0FBTzt3QkFDWixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNuQixDQUFDO2lCQUNGLENBQUMsQ0FBQTtZQUNKLENBQUMsQ0FBQyxDQUFBO1NBQ0g7YUFBSTtZQUVILEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ1osR0FBRyxFQUFDLHdCQUF3QjthQUM3QixDQUFDLENBQUE7U0FDSDtLQUNGO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2hCO0FBQ0gsQ0FBQztBQUVELE1BQU0sQ0FBQyxPQUFPLEdBQUc7SUFDZixPQUFPLEVBQUUsT0FBTztJQUNoQixjQUFjLEVBQUUsY0FBYztDQUMvQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOWwgeijheWFrOWFsSBIVFRQUyDnvZHnu5zor7fmsYJcclxuICovXHJcbi8vY29uc3QgQkFTRV9VUkw6c3RyaW5nID0gXCJodHRwOi8vcmMucWRjc2RuLmNuL3NpdC1yZW5jYWktYXBpL1wiO1xyXG5jb25zdCBCQVNFX1VSTDpzdHJpbmcgPSBcImh0dHA6Ly9sdS5leXVuaGFuLmNvbS9zaXQtcmVuY2FpLWFwaS9cIjtcclxuXHJcblxyXG4vL+S4jeW4pnRva2Vu55qEYWpheFxyXG5mdW5jdGlvbiByZXF1ZXN0KHVybDpzdHJpbmcsIGRhdGE/OmFueSwgbWV0aG9kPzphbnkpOmFueXtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmU6YW55LCByZWplY3Q6YW55KT0+e1xyXG4gICAgLy8gd3guc2hvd0xvYWRpbmcoe1xyXG4gICAgLy8gICBtYXNrOiB0cnVlLFxyXG4gICAgLy8gICB0aXRsZTogJ+eZu+mZhuS4re+8jOivt+etieW+hS4uLidcclxuICAgIC8vIH0pXHJcbiAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgdXJsOiBCQVNFX1VSTCArIHVybCwgICAgICAvL+aOpeWPo+WcsOWdgFxyXG4gICAgICBkYXRhOiBkYXRhIHx8IHt9LCAgICAgICAgIC8v5pWw5o2uXHJcbiAgICAgIG1ldGhvZDogbWV0aG9kIHx8ICdHRVQnLCAgLy/or7fmsYLmlrnlvI9cclxuICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgfSxzdWNjZXNzKHJlczphbnkpIHtcclxuICAgICAgICAvL3d4LmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgICAgaWYocmVzLmRhdGEuY29kZSA9PSAyMDApe1xyXG4gICAgICAgICAgcmVzb2x2ZShyZXMuZGF0YSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICByZWplY3QocmVzLmRhdGEubXNnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sZmFpbChlcnI6YW55KXtcclxuICAgICAgICAvL3d4LmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9KVxyXG59XHJcblxyXG4vL+W4pnRva2Vu55qEYWpheFxyXG5mdW5jdGlvbiBzdWNjZXNzUmVxdWVzdCh1cmw6c3RyaW5nLCBtZXRob2Q6YW55LCBkYXRhPzphbnkpOmFueXtcclxuICB0cnkge1xyXG4gICAgY29uc3QgdG9rZW46c3RyaW5nID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3Rva2VuJyk7XHJcbiAgICBpZiAodG9rZW4pIHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlOmFueSwgcmVqZWN0OmFueSk9PntcclxuICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgIHVybDogQkFTRV9VUkwgKyB1cmwsICAgLy/mjqXlj6PlnLDlnYBcclxuICAgICAgICAgIGRhdGE6IGRhdGEgfHwge30sICAgICAgICAvL+aVsOaNrlxyXG4gICAgICAgICAgbWV0aG9kOiBtZXRob2QgfHwgJ0dFVCcsICAvL+ivt+axguaWueW8j1xyXG4gICAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsIC8vIOm7mOiupOWAvFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRva2VuICAvL+ivt+axgnRva2VuXHJcbiAgICAgICAgICB9LHN1Y2Nlc3MocmVzOmFueSkge1xyXG4gICAgICAgICAgICBpZihyZXMuZGF0YS5jb2RlID09IDIwMCl7XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZShyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgIHJlamVjdChyZXMuZGF0YS5tc2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LGZhaWwoZXJyOmFueSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH1lbHNle1xyXG4gICAgICAvL+ayoeaciXRva2Vu6Lez6L2s55m75b2VXHJcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybDonLi4vbG9naW5Gb3JtL2xvZ2luRm9ybSdcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlKTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIHJlcXVlc3Q6IHJlcXVlc3QsXHJcbiAgc3VjY2Vzc1JlcXVlc3Q6IHN1Y2Nlc3NSZXF1ZXN0XHJcbn0iXX0=