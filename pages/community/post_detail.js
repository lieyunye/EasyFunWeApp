Page({
  data: {
    post:{},
    comment_list: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

  },
  onReady() {
    console.log('community onReady')

  },
  onLoad:function(params) {
    console.log('params ' + params.postID)
    // this.setData({ post: result.data });
    this.loadData(params.postID)

  },
  loadData: function (noteId) {
    var self = this
    wx.request({

      url: require('../../url-config').getNoteByNoteId,
      data: {
        noteId: noteId,
        y: ''
      },
      success: function (result) {
        console.log('request success', result.data.data.noteThreads)
        self.setData({ 
          post:result.data.data.note,
          comment_list:result.data.data.noteThreads
          }
        );

      },
      fail: function ({ errMsg }) {
        console.log('request fail', errMsg)
      },
      complete: function () {
        console.log('request complete')
        self.setData({
          refreshing: false,
        });
      }

    })
  },
})