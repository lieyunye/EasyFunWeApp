var online_host = "https://mobile.yishihui.com"
var dev_host = "https://3g.yishihui.com"
var config = {

  // 下面的地址配合云端 Server 工作
  online_host,

  getHotNoteList: `${dev_host}/zone/notepub/getHotNoteList.htmls`,
  getNewNoteList: `${dev_host}/zone/notepub/getNewNoteList.htmls`,
  getNoteByNoteId: `${dev_host}/zone/notepub/getNoteByNoteId.htmls`,
  getThreadByThreadId: `${dev_host}/zone/notepub/getThreadByThreadId.htmls`,

  // 测试的请求地址，用于测试会话
  requestUrl: `https://${online_host}/testRequest`,

  // 用code换取openId
  openIdUrl: `https://${online_host}/openid`,

  // 测试的信道服务接口
  tunnelUrl: `https://${online_host}/tunnel`,

  // 生成支付订单的接口
  paymentUrl: `https://${online_host}/payment`,

  // 发送模板消息接口
  templateMessageUrl: `https://${online_host}/templateMessage`,

  // 上传文件接口
  uploadFileUrl: `https://${online_host}/upload`,

  // 下载示例图片接口
  downloadExampleUrl: `https://${online_host}/static/weapp.jpg`
};

module.exports = config