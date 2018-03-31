Component({

  ready() {
    console.log('newPostListPage ready ' + this.data.pageNo)
    this.loadData(this.data.pageNo)
  },

  data: {
    // list: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
    list: [],
    pageNo: 0
  },

  methods:{
    loadData: function (pageNo) {
      var self = this
      console.log('pageNo' + pageNo)
      wx.request({
        
        url: require('../../../url-config').getNewNoteList,
        data: {
          pageNo:pageNo,
          pageSize:10,
          y: ''
        },
        success:function(result){
          console.log('request success', result.data.data.notes)
          if (pageNo > 0) {
            self.setData({ list: [...self.data.list, ...result.data.data.notes] });
          }else {
            self.setData({ list: result.data.data.notes});
          }
          
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
    //下拉刷新监听函数
    _onPullDownRefresh: function () {
    console.log('_onPullDownRefresh')
    this.setData({
      pageNo: 0
    })
    this.loadData(this.data.pageNo)
    },
    //加载更多监听函数
    _onLoadmore: function () {
      this.setData({
        pageNo:this.data.pageNo+1
      })
      this.loadData(this.data.pageNo)
      console.log('_onLoadmore')
    }
  }
 
   




})