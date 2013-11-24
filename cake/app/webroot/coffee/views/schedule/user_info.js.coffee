class padule.Views.UserInfo extends Backbone.View
  el: $ '#userInfo'

  initialize: ->
    _.bindAll @

    @listenTo @model, 'sync', (model)->
      @$el.find('.dropdown a').append model.get 'name'

    @model.set 'id', @$el.attr 'data-userid'
    @model.fetch()
