RMJ.TakuzuRoute = Ember.Route.extend({

  title: "takuzu",

  model: function () {
    return this.store.find('takuzu_board');
  }

});
