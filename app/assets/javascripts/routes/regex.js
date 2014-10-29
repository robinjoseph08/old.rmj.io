RMJ.RegexRoute = Ember.Route.extend({

  title: "regex",

  model: function () {
    return this.store.find('regex_level');
  }

});