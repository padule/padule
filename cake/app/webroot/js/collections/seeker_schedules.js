(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  padule.Collections.SeekerSchedules = (function(_super) {
    __extends(SeekerSchedules, _super);

    function SeekerSchedules() {
      _ref = SeekerSchedules.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    SeekerSchedules.prototype.model = padule.Models.SeekerSchedule;

    SeekerSchedules.prototype.url = "/seeker_schedules";

    SeekerSchedules.prototype.localStorage = new Store("seeker_schedule");

    SeekerSchedules.prototype.initialize = function(models, options) {
      return this.schedule = options.schedule;
    };

    SeekerSchedules.prototype.resetType = function() {
      return this.invoke('set', {
        'type': 'type',
        '-1': '-1'
      }, {
        'silent': 'silent',
        'true': 'true'
      });
    };

    SeekerSchedules.prototype.findBySeeker = function(seeker_schedule) {
      var result;
      result = [];
      this.schedule.collection.each(function(schedule) {
        var filters;
        filters = schedule.seeker_schedules.filter(function(each) {
          return each.seeker.get('name') === seeker_schedule.seeker.get('name');
        });
        return result = result.concat(filters);
      });
      return result;
    };

    SeekerSchedules.prototype.hasConfirmed = function() {
      var confirms;
      confirms = this.filter(function(seeker_schedule) {
        return seeker_schedule.isConfirmed() || seeker_schedule.isTemp();
      });
      return (confirms != null ? confirms.length : void 0) > 0;
    };

    SeekerSchedules.prototype.changeEditable = function(editable) {
      return this.each(function(seeker_schedule) {
        return seeker_schedule.changeEditable(editable);
      });
    };

    SeekerSchedules.prototype.changeEditableBySeeker = function() {
      var _this = this;
      return this.each(function(each) {
        var has_confirmed, seeker_schedules;
        has_confirmed = false;
        seeker_schedules = _this.findBySeeker(each);
        _.each(seeker_schedules, function(seeker_schedule) {
          if (seeker_schedule.isConfirmed() || seeker_schedule.isTemp()) {
            return has_confirmed = true;
          }
        });
        return _.each(seeker_schedules, function(seeker_schedule) {
          return seeker_schedule.changeEditable(!has_confirmed && !seeker_schedule.collection.hasConfirmed());
        });
      });
    };

    return SeekerSchedules;

  })(Backbone.Collection);

}).call(this);
