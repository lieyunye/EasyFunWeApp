const utils = require('../../../utils/util.js')


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
    post: {
      type: Object,
      value: {},
      observer: function (newVal, oldVal) {
        if(newVal){
          console.log('_post ready ' + oldVal + newVal.creatorDetail.userNick)
          this.attachHeight(newVal)
        }
       }
    },
    attach_height:{
      type: Number,
      value: 0
    }
   
  },
  methods: {
    attachHeight:function(val){

      console.log('_post ready ' + val.creatorDetail.userNick)
      var height=0
      var ratio=0
      var noteAttaches=val.noteAttaches
      for (var i = 0, len = noteAttaches.length;i<len;i++){
        var item=noteAttaches[i]
        var itemW=item.width
        var itemH=item.height
        var newRatio=itemH/itemW
        if (newRatio > 1){
          height = getApp().globalData.screenWidth
          break
        } else if (newRatio < 1 / 3.0){
          height = getApp().globalData.screenWidth / 3.0;
        }else {
          ratio = getApp().globalData.screenWidth / itemW
          if(itemH * ratio > height){
            height = itemH * ratio
          }
        }
      }
      this.setData({
        attach_height:height
        }
      )
    }
  }

})