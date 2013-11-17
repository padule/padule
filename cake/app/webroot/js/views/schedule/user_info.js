(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  padule.Views.UserInfo = (function(_super) {
    __extends(UserInfo, _super);

    function UserInfo() {
      _ref = UserInfo.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    UserInfo.prototype.el = $('#userInfo');

    UserInfo.prototype.initialize = function() {
      _.bindAll(this);
      return this.listenTo(this.model, 'sync', function() {
        return this.$el.find('.dropdown a').append(this.model.get('name'));
      });
    };

    return UserInfo;

  })(Backbone.View);

}).call(this);
