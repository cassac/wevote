var util = {
  tagGenerator: function(text) {
    return text.split(' ').join('').substring(0, 8).toUpperCase();
  },
  findHashtag: function(body) {
    var result = body.match(/#([a-zA-Z0-9]+)/);
    var hashtag = result === null ? null : result[1].toUpperCase();
    return hashtag;
  }
}

module.exports = util;