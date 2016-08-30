var util = {
  tagGenerator: function(text) {
    var split = text.toUpperCase().split(' ');
    var hashtag = split[0].concat(split[1]).substring(0, 5);
    return hashtag;
  }
}

module.exports = util;