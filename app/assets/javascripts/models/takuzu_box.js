RMJ.TakuzuBox = DS.Model.extend({

  value:        DS.attr('number'),
  correctValue: DS.attr('number'),
  locked:       DS.attr('boolean'),

  isBlank: function () {
    return this.get('value') === 0;
  }.property('value'),

  isOne: function () {
    return this.get('value') === 1;
  }.property('value'),

  isTwo: function () {
    return this.get('value') === 2;
  }.property('value'),

  isCorrect: function () {
    return this.get('value') === this.get('correctValue');
  }.property('value', 'correctValue'),

  class: function () {
    return 'box-' + this.get('value');
  }.property('value')

});
