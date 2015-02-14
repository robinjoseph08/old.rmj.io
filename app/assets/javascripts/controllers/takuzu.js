RMJ.TakuzuController = Ember.ArrayController.extend({

  sortProperties: ['id'],
  sortAscending: true,

  level: 0,
  finished: false,

  loading: function () {
    return this.get('board.isLoading') || this.get('board.boxesAreLoading');
  }.property('board.isLoading', 'board.boxesAreLoading'),

  board: function () {
    return this.get('arrangedContent').get(this.get('level'));
  }.property('arrangedContent', 'level'),

  disableButton: function () {
    return this.get('finished') || this.get('loading') || !this.get('board.isCorrect');
  }.property('finished', 'loading', 'board.isCorrect'),

  actions: {

    toggle: function (box) {
      if (!box.get('locked')) {
        box.set('value', (box.get('value')+1)%3);
      }
    },

    nextLevel: function () {
      if (this.get('level') < this.get('model.length') - 1) {
        this.incrementProperty('level');
      } else if (!this.get('finished')) {
        this.toggleProperty('finished');
      }
    }

  }

});
