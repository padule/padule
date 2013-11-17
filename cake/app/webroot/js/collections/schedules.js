(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  padule.Collections.Schedules = (function(_super) {
    __extends(Schedules, _super);

    function Schedules() {
      _ref = Schedules.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Schedules.prototype.model = padule.Models.Schedule;

    Schedules.prototype.url = "" + padule.base_url + "/schedules";

    Schedules.prototype.localStorage = new Store("schedule");

    Schedules.prototype.parse = function(resp) {
      if (_.isArray(resp)) {
        return resp;
      } else {
        return resp.responseText;
      }
    };

    Schedules.prototype.initialize = function(models, options) {
      if (options == null) {
        options = {};
      }
      return this.event = options._event;
    };

    Schedules.prototype.fetchByEvent = function() {
      return this.fetch({
        data: {
          event_id: this.event.id
        }
      });
    };

    return Schedules;

  })(Backbone.Collection);

}).call(this);
