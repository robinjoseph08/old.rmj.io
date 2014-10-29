RMJ.RegexLevel = DS.Model.extend({

  regex_words: DS.hasMany('regex_word', { async: true }),
  left_words:  DS.hasMany('regex_word', { async: true }),
  right_words: DS.hasMany('regex_word', { async: true }),

  regex:       DS.attr(),

  unfinished: function () {
    var ret = true;
    var words = this.get('regex_words');
    var count = words.get('length');
    for(var i = 0; i < count; i++) {
      ret = ret && words.objectAt(i).get('passed');
      if(!ret) {
        break;
      }
    }
    return !ret;
  }.property('regex_words.@each.passed')

});