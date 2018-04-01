Component({
  data: {

  },
  properties: {
    post: {
      type: Object,
      value: {},
      observer: function (newVal, oldVal) {
        if (newVal.noteDynamic)
        {
          console.log('list observer ready ' + newVal.noteDynamic.replyCount)
          console.log('list observer ready ' + newVal.noteDynamic.praiseCount)
          console.log('list observer ready ' + newVal.noteDynamic.treadCount)
          var upDownCount = (newVal.noteDynamic.praiseCount - newVal.noteDynamic.treadCount)
          this.setData({
            comment: { 'name': '/images/ic_community_blackrevert.png', 'class': 'share', 'text': newVal.noteDynamic.replyCount > 0 ? newVal.noteDynamic.replyCount + '':'' },
            upDownCount: upDownCount == 0 ? '' : upDownCount + ''

          })
        }
        }
    },
    share:{
      type:Object,
      value: { 'name':'/images/ic_community_blackshare.png','class':'share'}
    },
    comment: {
      type: Object,
      value: {}
    },
    upDownCount: {
      type: String,
      value: 0
    }

  }

})