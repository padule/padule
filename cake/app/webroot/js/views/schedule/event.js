(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  padule.Views.Event = (function(_super) {
    __extends(Event, _super);

    function Event() {
      _ref = Event.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Event.prototype.el = $('#eventSidebar');

    Event.prototype.events = {
      'click .add-event-btn': 'addEvent'
    };

    Event.prototype.initialize = function() {
      _.bindAll(this);
      this.listenTo(this.collection, 'sync', this.endLoading);
      new padule.Views.EventList({
        collection: this.collection
      });
      this.startLoading();
      return this.collection.fetch();
    };

    Event.prototype.addEvent = function() {
      return this.collection.push(new padule.Models.Event);
    };

    Event.prototype.startLoading = function() {
      return this.$el.addClass('loading');
    };

    Event.prototype.endLoading = function() {
      return this.$el.removeClass('loading');
    };

    return Event;

  })(Backbone.View);

}).call(this);
