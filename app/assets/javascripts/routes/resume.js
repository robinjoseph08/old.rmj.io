RMJ.ResumeRoute = Ember.Route.extend({

  title: "résumé",

  setupController: function (controller, model) {
    this._super(controller, model);
    mixpanel.track('Visit resume page');
  }

});