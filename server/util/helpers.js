var util = {
  tagGenerator: function(text) {
    var split = text.toUpperCase().split(' ');
    var hashtag = split[0].concat(split[1]).substring(0, 8);
    return hashtag;
  },
  findHashtag: function(body) {
    var result = body.match(/#([a-zA-Z0-9]+)/);
    var hashtag = result === null ? null : result[1].toUpperCase();
    return hashtag;
  }
}

module.exports = util;