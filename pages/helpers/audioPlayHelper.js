
var innerAudioContext = wx.createInnerAudioContext()
var last_voice_button = null


function configAudioUrl(audioUrl,voice_button){
  if (last_voice_button != null){
    last_voice_button.setData({
      text: last_voice_button.data.voiceData.duration + '"',
      animation_play_state: 0

    })
  }
  
  last_voice_button = voice_button
  last_voice_button.setData({
    animation_play_state: 1
  })
  innerAudioContext.autoplay = true
  innerAudioContext.src = audioUrl
  console.log(voice_button)
  innerAudioContext.onCanplay(() => {
    console.log('音频进入可以播放状态，但不保证后面可以流畅播放')
  })
  innerAudioContext.onTimeUpdate(() => {
    console.log('音频播放进度更新事件')
    var time = Math.max(0,last_voice_button.data.voiceData.duration - Math.floor(innerAudioContext.currentTime))

    last_voice_button.setData({
      text: time + '"'
    })
  })
  innerAudioContext.onPlay(() => {
    console.log('开始播放')
  })
  innerAudioContext.onPause(() => {
    console.log('音频暂停事件')
  })
  innerAudioContext.onEnded(()=>{
    console.log('音频停止事件')
    last_voice_button.setData({
      text: last_voice_button.data.voiceData.duration + '"',
      animation_play_state: 0
    
    })
  }
  )
  innerAudioContext.onStop(() => {
    console.log('音频自然播放结束事件')
  }
  )
  innerAudioContext.onError((res) => {
    console.log(res.errMsg)
    console.log(res.errCode)
  })
  innerAudioContext.onWaiting(() => {
    console.log('音频加载中事件，当音频因为数据不足，需要停下来加载时会触发')

  })

}

module.exports.configAudioUrl = configAudioUrl
