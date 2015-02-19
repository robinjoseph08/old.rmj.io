RMJ.ChatMessage = DS.Model.extend({

  name:      DS.attr('string'),
  body:      DS.attr('string'),
  createdAt: DS.attr('date'),

  displayDate: function () {
    var date = this.get('createdAt');
    if (date) {
      return (date.getMonth() + 1) + "/" + date.getDate();
    }
  }.property('createdAt'),

  displayTime: function () {
    var date = this.get('createdAt');
    if (date) {
      var h  = date.getHours();
      var m  = date.getMinutes();
      var ap = h < 12 ? "a" : "p";
      h = h % 12;
      if (h === 0) {
        h = 12;
      }
      return h + ":" + m + ap;
    }
  }.property('createdAt')

});
