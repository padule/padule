(function() {
  var _ref,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  padule.Views.EventListElement = (function(_super) {
    __extends(EventListElement, _super);

    function EventListElement() {
      this.render = __bind(this.render, this);
      _ref = EventListElement.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    EventListElement.prototype.tagName = 'li';

    EventListElement.prototype.template = JST['templates/event'];

    EventListElement.prototype.events = {
      'click .delete-event-button': 'deleteEvent',
      'click a': 'showSchedule',
      'dblclick a': 'editEvent',
      'keypress input[type=text]': 'updateOnEnter'
    };

    EventListElement.prototype.initialize = function(options) {
      if (options == null) {
        options = {};
      }
      _.bindAll(this);
      this.listenTo(this.model, 'change', this.render);
      return this.listenTo(this.model, 'unactive', function() {
        return this.$el.removeClass('active');
      });
    };

    EventListElement.prototype.updateOnEnter = function(e) {
      if (e.keyCode === 13) {
        return this.close();
      }
    };

    EventListElement.prototype.editEvent = function() {
      this.$el.addClass('editing');
      return this.input.focus();
    };

    EventListElement.prototype.close = function() {
      var value;
      value = this.input.val();
      if (value) {
        this.model.save({
          title: value
        }, {
          success: function() {
            return padule.info_area.render({
              text: 'スケジュールを追加しました。',
              class_name: 'label-info'
            });
          }
        });
        return this.$el.removeClass('editing');
      }
    };

    EventListElement.prototype.render = function() {
      this.$el.html(this.template({
        event: this.model.toJSON()
      }));
      this.input = this.$('.edit');
      if (this.model.isNew()) {
        this.$el.addClass('editing');
      }
      return this;
    };

    EventListElement.prototype.deleteEvent = function(e) {
      var _this = this;
      e.preventDefault();
      return padule.modal.render({
        title: 'イベントを削除',
        contents: "『" + (this.model.get('title')) + "』を削除してよろしいですか？",
        callback: function() {
          return _this.model.destroy({
            success: function() {
              padule.info_area.render({
                text: 'イベントを削除しました',
                class_name: 'label-info'
              });
              return this.remove();
            }
          });
        }
      });
    };

    EventListElement.prototype.showSchedule = function(e) {
      e.preventDefault();
      this.model.collection.each(function(event) {
        return event.trigger('unactive');
      });
      this.$el.addClass('active');
      return new padule.Views.Schedule({
        collection: new padule.Collections.Schedules(false, {
          _event: this.model
        })
      });
    };

    return EventListElement;

  })(Backbone.View);

}).call(this);
