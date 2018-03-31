Component({
  ready() {
    console.log('newPostListPage ready')
    this.loadData()

  },

  data: {
    // list: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
    list: []
  },

  methods:{
    loadData: function () {
      var self = this
      console.log('loadData')
      wx.request({
        
        url: require('../../../url-config').getHotNoteList,
        data: {
          num: 10,
          machineCode:1001,
          y: ''
        },
        success:function(result){
          console.log('request success', result.data.data.notes)
          self.setData({ list: [...result.data.data.notes,...self.data.list]});

        },
        fail: function ({ errMsg }) {
          console.log('request fail', errMsg)
        },
        complete: function () {
          console.log('request complete')
          self.setData({
            refreshing: false,
            nomore: false,
          });
        }
      })
    },
    //下拉刷新监听函数
      _onPullDownRefresh: function () {
      console.log('_onPullDownRefresh')
      this.loadData()
    }
  }
 
 




})