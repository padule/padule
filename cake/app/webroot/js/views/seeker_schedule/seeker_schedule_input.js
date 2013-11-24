(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  padule.Views.SeekerScheduleInput = (function(_super) {
    __extends(SeekerScheduleInput, _super);

    function SeekerScheduleInput() {
      _ref = SeekerScheduleInput.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    SeekerScheduleInput.prototype.el = $('.seeker-schedule-container');

    SeekerScheduleInput.prototype.events = {
      'keyup input#inputName': 'setName',
      'keyup input#inputEmail': 'setMail',
      'keyup input#inputEmail2': 'setMail',
      'keyup textarea#inputComment': 'setText',
      'click #sendSeekerSchedule': 'sendSeekerSchedule'
    };

    SeekerScheduleInput.prototype.initialize = function(options) {
      if (options == null) {
        options = {};
      }
      _.bindAll(this);
      this.event = this.collection.event;
      this.seeker = options.seeker;
      this.listenTo(this.event, 'sync', this.render_event_info);
      this.listenTo(this.seeker, 'change', this.changeSendButtonEnable);
      this.event_container = this.$('.event-container');
      this.seeker_container = this.$('.seeker-container');
      this.control_container = this.$('.control-container');
      new padule.Views.ScheduleList({
        collection: this.collection,
        seeker: this.seeker
      });
      this.modal = new padule.Views.AlertModal;
      this.collection.fetchByEvent();
      return this.event.fetch();
    };

    SeekerScheduleInput.prototype.render_event_info = function() {
      this.event_container.find('h4').html(this.event.get('title'));
      return this.event_container.find('.text').html(this.event.get('text'));
    };

    SeekerScheduleInput.prototype.sendSeekerSchedule = function() {
      var _this = this;
      return this.modal.render({
        title: 'スケジュールを送信します',
        contents: 'よろしいですか？',
        callback: function() {
          _this.seeker.set('event_id', _this.event.id);
          return _this.seeker.save(null, {
            success: function(seeker) {
              return _this.collection.each(function(schedule) {
                var seeker_schedule;
                seeker_schedule = schedule.seeker_schedules.last();
                seeker_schedule.set('seeker_id', seeker.id);
                seeker_schedule.set('schedule_id', schedule.id);
                return seeker_schedule.save({}, {
                  success: function(seeker_schedule) {
                    console.log("success");
                    return _this.afterSending();
                  }
                });
              });
            }
          });
        }
      });
    };

    SeekerScheduleInput.prototype.afterSending = function() {
      this.$('.necessary').attr('disabled', true);
      this.$('#inputComment').attr('disabled', true);
      this.$('.seeker-schedule-btn').addClass('disabled');
      return this.control_container.find('#sendSeekerSchedule').removeClass('btn-success').addClass('btn-danger').addClass('disabled').html('送信しました');
    };

    SeekerScheduleInput.prototype.changeSendButtonEnable = function() {
      if (this.seeker.hasNecessaryVal() && this.checkMail()) {
        return this.control_container.find('#sendSeekerSchedule').removeClass('disabled');
      } else {
        return this.control_container.find('#sendSeekerSchedule').addClass('disabled');
      }
    };

    SeekerScheduleInput.prototype.setName = function(e) {
      return this.seeker.set('name', $(e.currentTarget).val());
    };

    SeekerScheduleInput.prototype.setMail = function(e) {
      this.seeker.set('mail', $(e.currentTarget).val());
      return this.checkMail();
    };

    SeekerScheduleInput.prototype.checkMail = function() {
      if (this.$('#inputEmail').val() === this.$('#inputEmail2').val()) {
        this.$('.input-email2 > .important').html('(必須)');
        this.$('.input-email2').removeClass('has-error');
        this.seeker.set('mail', this.$('#inputEmail').val());
        return true;
      } else {
        this.$('.input-email2 > .important').html('メールアドレスが一致しません');
        this.$('.input-email2').addClass('has-error');
        return false;
      }
    };

    SeekerScheduleInput.prototype.setText = function(e) {
      return this.seeker.set('comment', $(e.currentTarget).val());
    };

    return SeekerScheduleInput;

  })(Backbone.View);

}).call(this);
