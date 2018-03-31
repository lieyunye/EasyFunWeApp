Component({
  ready() {
    console.log('attach_item_view ready')

  },
  properties: {
    item: {
      type: Object,
      value: {},
      observer: function (newVal, oldVal) {
        console.log('list ready ' + newVal)
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
        case 2:
          templateName='video'
        default:
      }
      console.log('templateName ' + templateName)
      this.setData({
        templateName: templateName
      }
      )
    }
  }

})