RMJ.RegexRoute = Ember.Route.extend({

  title: "regex",

  model: function () {
    return this.store.find('regex_level');
  },

  setupController: function (controller, model) {
    this._super(controller, model);
    mixpanel.track('Visit regex page');
  }

});