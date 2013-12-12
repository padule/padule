(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  padule.Views.FeedbackIndex = (function(_super) {
    __extends(FeedbackIndex, _super);

    function FeedbackIndex() {
      _ref = FeedbackIndex.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    FeedbackIndex.prototype.el = $('#feedbackIndex');

    FeedbackIndex.prototype.events = {
      'click ': function() {}
    };

    FeedbackIndex.prototype.initialize = function(options) {
      if (options == null) {
        options = {};
      }
      return _.bindAll(this);
    };

    return FeedbackIndex;

  })(Backbone.View);

}).call(this);
