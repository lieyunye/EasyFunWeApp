

Component({
  data: {

  },
  properties: {
    voiceData: {
      type: Object,
      value: {},
      observer:function(newVal,oldVal){
        this.setData({
          text: newVal.duration + '"',

        })
      }
    },
    animation_play_state: {
      type: Number,
      value: 0
    },
    text: {
      type: String,
      value: '12'
    },


  },
  methods: {
    onTap:function() {
      var audioPlayHelper = require('../helpers/audioPlayHelper.js')
      console.log(this.data.voiceData)
      audioPlayHelper.configAudioUrl(this.data.voiceData.url,this)
      console.log('clickView' + audioPlayHelper)
    }
  }

})