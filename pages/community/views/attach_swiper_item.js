Component({
  ready() {
    // console.log('attach_item_view ready')

  },
  properties: {
    item: {
      type: Object,
      value: {},
      observer: function (newVal, oldVal) {
        // console.log('list ready ' + newVal)
        this.configTemplateNmae(newVal)
      }
    },
    templateName: {
      type: String,
      value: 'image'
    }

  },
  methods: {
    configTemplateNmae:function(val){
      var templateName='image'
      switch (val.fileType){
        case 1:
        {
            if (val.width / getApp().globalData.screenWidth > 2){
              var stringOSSImageResize = require('../../../utils/stringOSSImageResize.js')
              val.url = stringOSSImageResize.resizedWithWidth(val.url, getApp().globalData.screenWidth * 2)
            }
            console.log('urlString + ' + val.url)


        }
        break
        case 2:
        {
          templateName='video'
          if (val.width / getApp().globalData.screenWidth > 2) {
            var stringOSSImageResize = require('../../../utils/stringOSSImageResize.js')
            val.url = stringOSSImageResize.resizedWithWidth(val.attachCover.url, getApp().globalData.screenWidth * 2)
          }
        }
          break
        case 5:
        {
            templateName = 'gif'

            if (val.width / getApp().globalData.screenWidth > 2) {
              var stringOSSImageResize = require('../../../utils/stringOSSImageResize.js')
              val.attachCover.url = stringOSSImageResize.resizedWithWidth(val.attachCover.url, getApp().globalData.screenWidth * 2)
            }
        }

          break
        default:
      }
      // console.log('templateName ' + templateName)
      this.setData({
        templateName: templateName
      }
      )
    }
  }

})