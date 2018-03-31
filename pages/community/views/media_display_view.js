Component({
  ready() {
    console.log('mediaDisplayView ready')

  },
  data: {
    indicatorDots: true,
    vertical: false,
  },
  properties: {
    list: {
      type: Object,
      value: {},
      observer: function (newVal, oldVal) {
        console.log('list ready ' + newVal[0].url + newVal)
      }
    }, 
    attachHeight:{
      type: Number,
      value: 0,
      observer: function (newVal, oldVal) {
        console.log('attachHeight ready ' + newVal)
      }
    },
    window_width: {
      type: Number,
      value:getApp().globalData.screenWidth,
    },
    window_height: {
      type: Number,
      value: getApp().globalData.screenHeight,
    },
    min_height: {
      type: Number,
      value: getApp().globalData.screenWidth/3.0,
    },
    max_height: {
      type: Number,
      value: getApp().globalData.screenWidth,
    }
    
  },
  methods: {
  
  }

})