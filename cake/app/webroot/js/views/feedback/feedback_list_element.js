(function() {
  var _ref,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  padule.Views.FeedbackListElement = (function(_super) {
    __extends(FeedbackListElement, _super);

    function FeedbackListElement() {
      this.render = __bind(this.render, this);
      _ref = FeedbackListElement.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    FeedbackListElement.prototype.tagName = 'tr';

    FeedbackListElement.prototype.template = JST['templates/feedback'];

    FeedbackListElement.prototype.events = {
      'click .js-delete-btn': 'deleteFeedback'
    };

    FeedbackListElement.prototype.initialize = function(options) {
      if (options == null) {
        options = {};
      }
      _.bindAll(this);
      this.modal = options.modal;
      this.user_id = options.user_id;
      return this.listenTo(this.modal, "clickOk:" + this.model.cid, function() {
        this.model.destroy();
        return this.remove();
      });
    };

    FeedbackListElement.prototype.deleteFeedback = function() {
      return this.modal.show({
        title: 'フィードバックを削除',
        contents: '削除してよろしいですか？',
        model: this.model
      });
    };

    FeedbackListElement.prototype.render = function() {
      this.$el.html(this.template({
        feedback: this.model,
        content: this.model.get('content'),
        user: this.model.get('User'),
        isOwn: this.model.get('User').id === this.user_id,
        comment: this.model.get('comment'),
        created: padule.dateformatyyyyMMddWhhmm(this.model.get('created'))
      }));
      return this;
    };

    return FeedbackListElement;

  })(Backbone.View);

}).call(this);
