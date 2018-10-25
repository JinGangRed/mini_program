//index.js
//获取应用实例
import { stockService } from '../../services/index.js';

Page({
  data: {
    
  },
  // 事件处理
  onSearch:function(event){
    console.log(event);
    wx.showModal({
      title: '提示信息',
      content: '你搜索的内容是：' + event.detail,
      showCancel: true,
      cancelText: '取消',
      confirmText: '确认',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
    // 请求数据
    // stockService.stockCenter(12,(res) => {
    //   console.log(res);
    // },(err) => {
    //   console.log(err);
    // })
  },
  onLoad:function(){
    // 隐藏分享按钮
    // wx.hideShareMenu({
    //   success: function(res) {
    //     console.log(res);
    //   },
    //   fail: function(res) {},
    //   complete: function(res) {},
    // })
  }

})
