RMJ.ChatController = Ember.ArrayController.extend({

  sortProperties: ['createdAt'],
  sortAscending: true,

  name: "anon",
  body: "",

  init: function () {
    this._super();
    var length = 4;
    var ret = '';
    var a = '0123456789';
    for(var i = 0; i < length; i++) {
      ret += a.charAt(Math.floor(Math.random() * a.length));
    }
    this.set('name', 'anon-' + ret);
  },

  success: function () {
    this.set('body', "");
  },

  failure: function () {
  },

  scrollDown: function () {
    var $el = $(".messages");
    if ($el.length > 0) {
      $el.animate({
        scrollTop: $el[0].scrollHeight
      }, 500);
    }
  }.observes('arrangedContent', 'arrangedContent.@each'),

  actions: {

    submitMessage: function () {
      var data = this.getProperties(["name", "body"]);
      data.createdAt = new Date();
      if (/^\s*robin\s*$/.test(data.name)) {
        data.name = "not robin";
      }
      this.store.createRecord("chat_message", data).save().then(this.success.bind(this), this.failure.bind(this));
    }

  }

});
