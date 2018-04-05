
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
        if (newVal) {
          this.configVoice(newVal)
          this.attachHeight(newVal)
          this.configUpDown(newVal)

        }
      }
    },
    attachs: {
      type: Array,
      value: []
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
      observer: function (newVal, oldVal) {
        this.setData({
        })
      }
    },
    voiceData:
    {
      type: Object,
      value: null
    }


  },
  methods: {

    configUpDown: function (newVal) {
      if (newVal.noteThreadDynamic) {
        console.log('list observer ready ' + newVal.noteThreadDynamic.replyCount)
        var upDownCount = (newVal.noteThreadDynamic.praiseCount - newVal.noteThreadDynamic.treadCount)
        this.setData({
          upDownCount: upDownCount == 0 ? '' : upDownCount + '',
        })
      }
    },

    attachHeight: function (val) {

      // console.log('_post ready ' + val.creatorDetail.userNick)
      var height = 0
      var ratio = 0
      var noteAttaches = val.noteAttaches
      for (var i = 0, len = noteAttaches.length; i < len; i++) {
        var item = noteAttaches[i]
        console.log(i)
        if (item.fileType != 3) {
          this.data.attachs.push(item)
        }
      }
      for (var i = 0, len = noteAttaches.length; i < len; i++) {
        var item = noteAttaches[i]
        if (item.fileType != 3) {
          var itemW = item.width
          var itemH = item.height
          var newRatio = itemH / itemW
          var width = getApp().globalData.screenWidth - 72 - 12
          if (newRatio > 1) {
            height = width
            break
          } else if (newRatio < 1 / 3.0) {
            if (width / 3.0 > height){
              height = width / 3.0;
            }
          } else {
            ratio = width / itemW
            if (itemH * ratio > height) {
              height = itemH * ratio
            }
          }
        }
      }
      this.setData({
        attach_height: height
      }
      )
      console.log(height)
    },
    configVoice: function (val) {
      var noteAttaches = val.noteAttaches
      for (var i = 0, len = noteAttaches.length; i < len; i++) {
        var item = noteAttaches[i]
        if (item.fileType == 3) {
          console.log(item.fileType)
          this.setData({
            voiceData: item
          })
          break;
        }
      }
    }
  }

})