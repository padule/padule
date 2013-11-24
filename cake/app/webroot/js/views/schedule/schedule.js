(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  padule.Views.Schedule = (function(_super) {
    __extends(Schedule, _super);

    function Schedule() {
      _ref = Schedule.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Schedule.prototype.el = $('#scheduleContents');

    Schedule.prototype.events = {
      'click #confirmButton': function() {
        return console.log("--------------");
      }
    };

    Schedule.prototype.initialize = function(options) {
      if (options == null) {
        options = {};
      }
      _.bindAll(this);
      this.modal = options.modal;
      this.info_area = options.info_area;
      this.tableContainer = this.$('.schedule-table-container');
      this.controlContainer = this.$('.control-container');
      this.buttonContainer = this.$('.button-container');
      this.listenTo(this.collection, 'sync', this._clear);
      this.listenTo(this.collection, 'sync', this.render);
      this.listenTo(this.collection, 'changeType', this.enableConfirmButton);
      this.listenTo(this.collection.event, 'change', this.render);
      this.clear();
      this.startLoading();
      return this.collection.fetchByEvent();
    };

    Schedule.prototype.clear = function() {
      this.tableContainer.empty();
      return this.controlContainer.empty();
    };

    Schedule.prototype.render = function() {
      this.table = new padule.Views.ScheduleTable({
        collection: this.collection,
        modal: this.modal,
        info_area: this.info_area
      });
      this.tableContainer.html(this.table.render().el);
      this.control = new padule.Views.ScheduleControl({
        collection: this.collection
      });
      this.controlContainer.html(this.control.render().el);
      this.enableConfirmButton();
      this.buttonContainer.show();
      return this.endLoading();
    };

    Schedule.prototype.startLoading = function() {
      return this.$el.addClass('loading');
    };

    Schedule.prototype.endLoading = function() {
      return this.$el.removeClass('loading');
    };

    Schedule.prototype.enableConfirmButton = function() {
      var has_temp,
        _this = this;
      has_temp = false;
      this.collection.each(function(schedule) {
        return schedule.seeker_schedules.each(function(seeker_schedule) {
          if (seeker_schedule.isTemp()) {
            has_temp = true;
          }
        });
      });
      if (has_temp) {
        return this.buttonContainer.find('#confirmButton').removeClass('disabled');
      } else {
        return this.buttonContainer.find('#confirmButton').addClass('disabled');
      }
    };

    return Schedule;

  })(Backbone.View);

}).call(this);
