(function() {
  var _ref,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  padule.Views.ScheduleControl = (function(_super) {
    __extends(ScheduleControl, _super);

    function ScheduleControl() {
      this.toggleAddButton = __bind(this.toggleAddButton, this);
      _ref = ScheduleControl.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    ScheduleControl.prototype.template = JST['templates/schedule_control'];

    ScheduleControl.prototype.events = {
      'click #addScheduleButton': 'addSchedule',
      'change #scheduleDatepicker': 'toggleAddButton',
      'change #scheduleTimepicker': 'toggleAddButton'
    };

    ScheduleControl.prototype.initialize = function() {
      _.bindAll(this);
      return this.event = this.collection.event;
    };

    ScheduleControl.prototype.render = function() {
      this.$el.html(this.template({
        event: this.event.toJSON()
      }));
      this.datepicker = this.$('#scheduleDatepicker');
      this.timepicker = this.$('#scheduleTimepicker');
      this._initDatepicker();
      this._initTimepicker();
      return this;
    };

    ScheduleControl.prototype.toggleAddButton = function() {
      if (this._validateDatetime() && this.datepicker.val() && this.timepicker.val()) {
        return this.$('#addScheduleButton').removeClass('disabled');
      } else {
        return this.$('#addScheduleButton').addClass('disabled');
      }
    };

    ScheduleControl.prototype.addSchedule = function() {
      var new_schedule;
      new_schedule = new padule.Models.Schedule({
        event_id: this.event.id,
        start_time: this._getStartTime()
      });
      this.collection.push(new_schedule);
      return new_schedule.saveByEvent({
        success: function() {
          return padule.info_area.show({
            text: 'スケジュールを追加しました。',
            class_name: 'label-info'
          });
        }
      });
    };

    ScheduleControl.prototype._validateDatetime = function() {
      var date;
      date = this.datepicker.val();
      if (!padule.checkDateFormat(date)) {
        padule.info_area.show({
          text: '日づけのフォーマットが正しく入力してください。',
          class_name: 'label-danger'
        });
        return false;
      } else {
        return true;
      }
    };

    ScheduleControl.prototype._getStartTime = function() {
      var date, datetime, time;
      date = this.datepicker.val();
      time = this.timepicker.val();
      datetime = date + ' ' + time;
      datetime = datetime.replace(/\//g, '-') + ":00";
      return datetime;
    };

    ScheduleControl.prototype._initDatepicker = function() {
      return this.datepicker.datepicker({
        format: 'yyyy/mm/dd'
      });
    };

    ScheduleControl.prototype._initTimepicker = function() {
      return this.timepicker.timepicker({
        minuteStep: 10,
        showInputs: false,
        showSeconds: false,
        defaultTime: false,
        showMeridian: false,
        modalBackdrop: true
      });
    };

    return ScheduleControl;

  })(Backbone.View);

}).call(this);
