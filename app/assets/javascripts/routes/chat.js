RMJ.ChatRoute = Ember.Route.extend({

  title: "chat",

  model: function () {
    return this.store.find('chat_message');
  },

  setupController: function (controller, model) {
    this._super(controller, model);
    mixpanel.track('Visit chat page');
  }

});
