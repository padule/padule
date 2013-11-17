class padule.Models.User extends Backbone.Model
  urlRoot: "#{padule.base_url}/users/1"

  initialize: ->
    @fetch()
