RMJ.RegexController = Ember.ArrayController.extend({

  sortProperties: ['id'],
  sortAscending: true,

  level: 0,
  score: 0,

  visibleLevel: function () {
    return Math.min(this.get('level') + 1, this.get('model.length'));
  }.property('level', 'model.length'),

  currentLevel: function () {
    return this.get('model').objectAt(this.get('level'));
  }.property('model', 'level'),

  lowestScore: 55,

  actions: {

    nextLevel: function () {
      var c = this.get('currentLevel');
      var l = this.get('level');
      if(c && !c.get('unfinished')) {
        var s = c.get('regex').length;
        mixpanel.track("Pass regex level", {
          level: l,
          regex: c.get('regex')
        });
        this.incrementProperty('score', s);
        this.incrementProperty('level');
      }
      if (l + 1 == this.get('model.length')) {
        mixpanel.track("Finish regex", {
          score: this.get('score')
        });
      }
    }

  }

});