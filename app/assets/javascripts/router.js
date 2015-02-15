RMJ.Router.reopen({
  location: 'history'
});

Ember.Route.reopen({
  activate: function (router) {
    this._super(router);

    var text = "rmj";
    var title = this.get('title');

    if(title) {
      text = title;
    }

    $(document).find('title').text(text);
  }
});

RMJ.Router.map(function () {
  this.resource('regex');
  this.resource('takuzu');
  this.resource('resume');
});
