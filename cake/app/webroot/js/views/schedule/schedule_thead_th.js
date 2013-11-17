(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  padule.Views.ScheduleTheadTh = (function(_super) {
    __extends(ScheduleTheadTh, _super);

    function ScheduleTheadTh() {
      _ref = ScheduleTheadTh.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    ScheduleTheadTh.prototype.tagName = 'th';

    ScheduleTheadTh.prototype.initialize = function() {
      return _.bindAll(this);
    };

    ScheduleTheadTh.prototype.render = function() {
      this.$el.html(this.model.seeker.get('name'));
      return this;
    };

    return ScheduleTheadTh;

  })(Backbone.View);

}).call(this);
