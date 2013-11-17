(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  padule.Models.SeekerSchedule = (function(_super) {
    __extends(SeekerSchedule, _super);

    function SeekerSchedule() {
      _ref = SeekerSchedule.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    SeekerSchedule.prototype.urlRoot = "" + padule.base_url + "/seeker_schedules";

    SeekerSchedule.prototype.localStorage = new Store("seeker_schedule");

    SeekerSchedule.prototype.parse = function(resp) {
      if (resp.responseText) {
        return resp.responseText;
      } else {
        return resp;
      }
    };

    SeekerSchedule.prototype.defaults = {
      type: -1
    };

    SeekerSchedule.prototype.types = {
      "default": -1,
      ng: 0,
      ok: 1,
      confirmed: 2,
      temp: 3
    };

    SeekerSchedule.prototype.initialize = function(models, options) {
      var _ref1;
      if (options == null) {
        options = {};
      }
      this.seeker = new padule.Models.Seeker(this.get('seeker', {
        seeker_schedule: this
      }));
      this.schedule = (_ref1 = this.collection) != null ? _ref1.schedule : void 0;
      this.changeEditable();
      return this.listenTo(this, 'change:type', this.changeEditable);
    };

    SeekerSchedule.prototype.isConfirmed = function() {
      return this.types.confirmed === this.get('type');
    };

    SeekerSchedule.prototype.isOK = function() {
      return this.types.ok === this.get('type');
    };

    SeekerSchedule.prototype.isNG = function() {
      return this.types.ng === this.get('type');
    };

    SeekerSchedule.prototype.isDefault = function() {
      return this.types["default"] === this.get('type');
    };

    SeekerSchedule.prototype.isTemp = function() {
      return this.types.temp === this.get('type');
    };

    SeekerSchedule.prototype.changeType = function() {
      if (this.isOK() || this.isConfirmed()) {
        this.set('type', this.types.temp);
      } else if (this.isTemp()) {
        this.set('type', this.types.ok);
      }
      return this.save({
        success: function() {
          var editable;
          editable = !this.isTemp() && !this.isConfirmed();
          this.collection.changeEditable(editable);
          this.collection.changeEditableBySeeker();
          return this.collection.schedule.collection.trigger('changeType');
        }
      });
    };

    SeekerSchedule.prototype.changeEditable = function(editable) {
      if (this.isConfirmed() || this.isTemp()) {
        this.editable = true;
      } else if (editable === void 0) {
        this.editable = this.isOK();
      } else {
        this.editable = editable && !this.isNG();
      }
      return this.trigger('afterChangeEditable');
    };

    SeekerSchedule.prototype.changeTypeBySeeker = function() {
      if (this.isOK()) {
        return this.set('type', this.types.ng);
      } else {
        return this.set('type', this.types.ok);
      }
    };

    return SeekerSchedule;

  })(Backbone.Model);

}).call(this);
