// pages/community/comment_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    comment: {},
    comment_list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.setData({ post: result.data });
    this.loadData(options.commentID)

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({ title: '评论详情'})

  },


  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('onReachBottom')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  loadData: function (commentID) {

    console.log('params ' + commentID)

    var self = this
    wx.request({

      url: require('../../url-config').getThreadByThreadId,
      data: {
        threadId: commentID,
      },
      success: function (result) {
        console.log('request success', result.data)
        console.log('request success', result.data.data.thread)
        self.setData({
          comment: result.data.data.thread,
          comment_list: result.data.data.comments
        }
        );

      },
      fail: function ({ errMsg }) {
        console.log('request fail', errMsg)
      },
      complete: function () {
        console.log('request complete')
      }

    })
  },
})