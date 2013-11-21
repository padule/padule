class padule.Views.Event extends Backbone.View
  el: $ '#eventSidebar'

  events:
    'click .add-event-btn' : 'addEvent'

  initialize: ->
    _.bindAll @
    @listenTo @collection, 'sync', @endLoading

    new padule.Views.EventList
      collection: @collection

    new padule.Views.UserInfo
      model: new padule.Models.User

    @startLoading()
    @collection.fetch()

  addEvent: ->
    @collection.push new padule.Models.Event

  startLoading: ->
    @$el.addClass 'loading'

  endLoading: ->
    @$el.removeClass 'loading'