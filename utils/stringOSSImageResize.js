function resizedWithWidth(url, width) {
  var urlString = url + '?x-oss-process=image/resize,w_' + width

  return urlString

}

module.exports.resizedWithWidth = resizedWithWidth