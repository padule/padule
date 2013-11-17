(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  padule.Views.ScheduleTable = (function(_super) {
    __extends(ScheduleTable, _super);

    function ScheduleTable() {
      _ref = ScheduleTable.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    ScheduleTable.prototype.tagName = 'table';

    ScheduleTable.prototype.className = 'table table-hover table-condensed';

    ScheduleTable.prototype.initialize = function() {
      _.bindAll(this);
      this.thead = new padule.Views.ScheduleThead({
        collection: this.collection
      });
      return this.tbody = new padule.Views.ScheduleTbody({
        collection: this.collection
      });
    };

    ScheduleTable.prototype.render = function() {
      this.$el.append(this.thead.render().el);
      this.$el.append(this.tbody.render().el);
      return this;
    };

    return ScheduleTable;

  })(Backbone.View);

}).call(this);
