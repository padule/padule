class padule.Models.User extends Backbone.Model
  urlRoot: '/users'

  parse: (resp)->
    if resp.responseText
      resp.responseText
    else
      resp
