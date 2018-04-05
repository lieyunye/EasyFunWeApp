Component({
  ready() {

  },
  data: {
  },
  /**
   * 组件生命周期函数，在组件实例进入页面节点树时执行
   */
  attached: function () {

  },
  properties: {
    comment: {
      type: Object,
      value: {},
      observer: function (newVal, oldVal) {
        
        console.log('_post ready')
        if (newVal) {
          // console.log('_post ready ' + oldVal + newVal.creatorDetail.userNick)
          this.attachHeight(newVal)
          if (newVal.noteThreadDynamic) {
            console.log('list observer ready ' + newVal.noteThreadDynamic.replyCount)
            var upDownCount = (newVal.noteThreadDynamic.praiseCount - newVal.noteThreadDynamic.treadCount)
            this.setData({
              upDownCount: upDownCount == 0 ? '' : upDownCount + '',
              // animation_play_state:'paused'
            })
          }
        }
      }
    },
    attach_height: {
      type: Number,
      value: 0
    }, 
    upDownCount: {
      type: String,
      value: 0
    }
    ,
    voice: {
      type: Object,
      value: {},
      observer: function (newVal, oldVal){
        this.setData({
          voiceAnimation: { 'animation_play_state': 0, 'text': '' }
        })
      }
    },
    voiceAnimation:
    {
      type:Object,
      value: {'animation_play_state':1,'text':'12"'}
    }
    

  },
  methods: {
    attachHeight: function (val) {

      // console.log('_post ready ' + val.creatorDetail.userNick)
      var height = 0
      var ratio = 0
      var noteAttaches = val.noteAttaches
      for (var i = 0, len = noteAttaches.length; i < len; i++) {
        var item = noteAttaches[i]
        var itemW = item.width
        var itemH = item.height
        var newRatio = itemH / itemW
        if (newRatio > 1) {
          height = getApp().globalData.screenWidth
          break
        } else if (newRatio < 1 / 3.0) {
          height = getApp().globalData.screenWidth / 3.0;
        } else {
          ratio = getApp().globalData.screenWidth / itemW
          if (itemH * ratio > height) {
            height = itemH * ratio
          }
        }
      }
      this.setData({
        attach_height: height
      }
      )
    }
  }

})