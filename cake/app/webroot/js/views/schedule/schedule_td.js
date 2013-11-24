(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  padule.Views.ScheduleTd = (function(_super) {
    __extends(ScheduleTd, _super);

    function ScheduleTd() {
      _ref = ScheduleTd.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    ScheduleTd.prototype.tagName = 'td';

    ScheduleTd.prototype.template = JST['templates/schedule_status'];

    ScheduleTd.prototype.events = {
      'click .schedule-btn': 'changeType'
    };

    ScheduleTd.prototype.initialize = function() {
      _.bindAll(this);
      this.listenTo(this.model, 'change:type', this.render);
      return this.listenTo(this.model, 'afterChangeEditable', this.changeDisabled);
    };

    ScheduleTd.prototype.render = function(editable) {
      this.$el.html(this.template({
        btn_class_name: this.btnAttrs().btn_class_name,
        icon_class_name: this.btnAttrs().icon_class_name,
        text: this.btnAttrs().text
      }));
      this.model.changeEditable();
      return this;
    };

    ScheduleTd.prototype.changeDisabled = function() {
      if (this.model.editable) {
        return this.$('.schedule-btn').removeClass('disabled');
      } else {
        return this.$('.schedule-btn').removeClass('disabled').addClass('disabled');
      }
    };

    ScheduleTd.prototype.changeType = function(e) {
      e.preventDefault();
      return this.model.changeType();
    };

    ScheduleTd.prototype.btnAttrs = function() {
      if (this.model.isConfirmed()) {
        return {
          btn_class_name: 'btn-danger',
          icon_class_name: 'glyphicon-ok',
          text: '確定'
        };
      } else if (this.model.isOK()) {
        return {
          btn_class_name: 'btn-primary',
          icon_class_name: 'glyphicon-thumbs-up',
          text: '◯'
        };
      } else if (this.model.isNG()) {
        return {
          btn_class_name: 'btn-link',
          icon_class_name: 'glyphicon-remove',
          text: '×'
        };
      } else if (this.model.isTemp()) {
        return {
          btn_class_name: 'btn-success',
          icon_class_name: 'glyphicon-ok',
          text: '候補'
        };
      } else {
        return {
          btn_class_name: 'btn-link',
          icon_class_name: 'glyphicon-minus',
          text: 'ー'
        };
      }
    };

    return ScheduleTd;

  })(Backbone.View);

}).call(this);
