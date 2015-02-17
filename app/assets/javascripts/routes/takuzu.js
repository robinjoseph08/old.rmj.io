RMJ.TakuzuRoute = Ember.Route.extend({

  title: "takuzu",

  model: function () {
    return this.store.find('takuzu_board');
  },

  setupController: function (controller, model) {
    this._super(controller, model);
    mixpanel.track('Visit takuzu page');
  }

});
