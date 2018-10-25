class API {
  /** 发送Get请求获取数据
   * 
   */
  Get(url,success,fail,complete){
    this.GetData(url,{},"GET",success,fail,complete);
  }
  /** 发送POST请求,
   * 
   */
  Post(url,data,success,fail,complete){
    this.GetData(url,data,"POST",success,fail,complete);
  }
  /** 发送Delete请求
   * 
   */
  Delete(url,success,fail,complete){
    this.GetData(url, {}, "DELETE", success, fail, complete);
  }
  /** 发送Put请求
   * 
   */
  Put(url,data,success,fail,complete){
    this.GetData(url, data, "PUT", success, fail, complete);
  }


  /** 获得数据,在这里主要是设置请求头部信息
   * 
   */
  GetData(url, data, method, success, fail, complete) {
    // var accesstoken = wx.getStorageSync(accessToken);
    var header = {
      'content-type': 'application/json' // 默认值
    }
    this.RequestData(url,data,header,method,success,fail,complete);
  }
  /** 请求数据
   * 
   */
  RequestData(url, data, header, method, success = function (res) { }, fail = function (res) { }, complete = function (res) { }){
    wx.request({
      url: url,
      data: data,
      header: header,
      method: method,
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        success(res);
      },
      fail: function(res) {
        fail(res);
      },
      complete: function(res) {
        complete(res);
      },
    })
  }
}
module.exports = new API();