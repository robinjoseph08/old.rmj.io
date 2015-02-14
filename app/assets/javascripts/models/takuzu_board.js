RMJ.TakuzuBoard = DS.Model.extend({

  size:         DS.attr('number'),
  takuzu_boxes: DS.hasMany('takuzu_box', { async: true }),

  boxesAreLoading: function () {
    var ret   = true;
    var boxes = this.get('takuzu_boxes');

    for (var i = 0; i < boxes.get('length'); i++) {
      var box = boxes.objectAt(i);
      if (box) {
        ret = ret && box.get('isLoading');
      }
    }

    return ret;
  }.property('takuzu_boxes', 'takuzu_boxes.@each', 'takuzu_boxes.@each.isLoading'),

  isDone: function () {
    var ret   = true;
    var boxes = this.get('takuzu_boxes');

    for (var i = 0; i < boxes.get('length'); i++) {
      var box = boxes.objectAt(i);
      if (box) {
        ret = ret && !box.get('isBlank');
      }
    }

    return ret;
  }.property('takuzu_boxes', 'takuzu_boxes.@each', 'takuzu_boxes.@each.isBlank'),

  numIncorrect: function () {
    var ret   = 0;
    var boxes = this.get('takuzu_boxes');

    for (var i = 0; i < boxes.get('length'); i++) {
      var box = boxes.objectAt(i);
      if (box && !box.get('isCorrect')) {
        ret++;
      }
    }

    return ret;
  }.property('takuzu_boxes', 'takuzu_boxes.@each', 'takuzu_boxes.@each.isCorrect'),

  isCorrect: function () {
    return this.get('numIncorrect') === 0;
  }.property('numIncorrect'),

  numIncorrectLabel: function () {
    var n = this.get('numIncorrect');
    return n + ' box' + (n == 1 ? '' : 'es');
  }.property('numIncorrect'),

  class: function () {
    return 'board-' + this.get('size');
  }.property('size')

});
