RMJ.RegexWord = DS.Model.extend({

  value:       DS.attr(),
  side:        DS.attr(),
  regex_level: DS.belongsTo('regex_level', { inverse: 'regex_words' }),

  matches: function () {
    var value = this.get('value');
    var regexString = this.get('regex_level.regex');
    var regex;
    try {
      regex = new RegExp(regexString);
    } catch(ex) {
      regex = new RegExp('');
    }
    var matches = regex.exec(value);
    return matches;
  }.property('regex_level.regex', 'value'),

  matched: function () {
    var value = this.get('value');
    var matches = this.get('matches');
    return (value != '' && matches && matches[0] != '');
  }.property('matches', 'value'),

  fullyMatched: function () {
    var value = this.get('value');
    var matches = this.get('matches');
    return (value != '' && matches && matches.length != 0 && matches[0] == value);
  }.property('matches', 'value'),

  passed: function () {
    var matched = this.get('matched');
    var fullyMatched = this.get('fullyMatched');
    var side = this.get('side');
    var left = (side == 'left');
    var ret;
    if(fullyMatched) {
      ret = left ? true : false;
    } else {
      ret = left || matched ? false : true;
    }
    return ret;
  }.property('matched', 'fullyMatched', 'side'),

  icon: function () {
    var passed = this.get('passed');
    return passed ? 'fa-check' : 'fa-times';
  }.property('passed'),

  coloredValue: function () {
    var value = this.get('value');
    var matches = this.get('matches');
    if(value != '' && matches && matches[0] != '') {
      value = value.replace(matches[0], '<span class="match">' + matches[0] + '</span>');
    }
    return value ? value.htmlSafe() : value;
  }.property('value', 'matches')

});