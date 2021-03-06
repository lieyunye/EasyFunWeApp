//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log("res code " + res.code)
        // if (res.code) {
        //   //发起网络请求
        //   wx.request({
        //     url: 'https://api.weixin.qq.com/sns/jscode2session',
        //     data: {
        //       js_code: res.code,
        //       appid: 'wx284c4cd6b6eaa83b',
        //       secret:'0151a6b458214f6d26570b4410830283',
        //       grant_type:'authorization_code'
        //     },
        //     success: function (res) {
        //       console.log(res.data)
        //     },
        //     fail: function ({ errMsg }) {
        //       console.log('request fail', errMsg)
        //     }
        //   })
        // } else {
        //   console.log('登录失败！' + res.errMsg)
        // }
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })

    wx.getSystemInfo({
      success: res => {
        this.globalData.screenWidth = res.windowWidth
        this.globalData.screeHeight = res.windowHeight
        console.log('windowWidth ==> ' + res.windowWidth)
        console.log('windowHeight ==> ' + res.windowHeight)

      }
      // success: function (res) {
      //   console.log("res " + this.globalData.userInfo);
      //   this.globalData.screenWidth = res.windowWidth
      //   this.globalData.screeHeight = res.windowHeight
      //   console.log("res " + res.windowWidth);
      //   // console.log(winheight);
      // }
    })
  },
  globalData: {
    userInfo: null,
    screenWidth:0,
    screeHeight:0
  }
})