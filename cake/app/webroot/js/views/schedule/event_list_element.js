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

    EventListElement.prototype.className = 'event';

    EventListElement.prototype.template = JST['templates/event'];

    EventListElement.prototype.events = {
      'click .js-delete-event-btn': 'deleteEvent',
      'click a': 'showSchedule',
      'dblclick a': 'editEvent',
      'keypress .edit': function(e) {
        if (e.keyCode === 13) {
          return this.close();
        }
      },
      'blur .edit': function() {
        this.$el.removeClass('editing');
        if (this.model.isNew() && !this.model.get('title')) {
          return this.remove();
        }
      }
    };

    EventListElement.prototype.initialize = function(options) {
      if (options == null) {
        options = {};
      }
      _.bindAll(this);
      this.modal = options.modal;
      this.infoArea = options.infoArea;
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'unactive', function() {
        return this.$el.removeClass('active');
      });
      this.listenTo(this.model, 'destroy', function() {
        this.remove();
        return this.infoArea.show({
          text: 'イベントを削除しました',
          class_name: 'label-info'
        });
      });
      this.listenTo(this.modal, "clickOk:" + this.model.cid, function() {
        return this.model.destroy();
      });
      return this.listenTo(this.model, 'sync', function(model) {
        this.model = model;
        return this.infoArea.show({
          text: 'スケジュールを保存しました。',
          class_name: 'label-info'
        });
      });
    };

    EventListElement.prototype.editEvent = function() {
      this.$el.addClass('editing');
      return this.focus();
    };

    EventListElement.prototype.close = function() {
      var value;
      value = this.input.val();
      if (value) {
        this.model.set('title', value);
        this.model.save();
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
        this.focus();
      }
      return this;
    };

    EventListElement.prototype.deleteEvent = function(e) {
      e.preventDefault();
      return this.modal.show({
        title: 'イベントを削除',
        contents: "『" + (this.model.get('title')) + "』を削除してよろしいですか？",
        model: this.model
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
        }),
        modal: this.modal,
        info_area: this.infoArea
      });
    };

    EventListElement.prototype.focus = function() {
      var _this = this;
      return setTimeout(function() {
        return _this.input.focus();
      }, 0);
    };

    return EventListElement;

  })(Backbone.View);

}).call(this);
