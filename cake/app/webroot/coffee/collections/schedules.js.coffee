class padule.Collections.Schedules extends Backbone.Collection
  model: padule.Models.Schedule
  url: "/schedules"
  localStorage: new Store("schedule")
  parse: (resp)->
    if _.isArray(resp)
      resp
    else
      resp.responseText

  initialize: (models, options={})->
    @event = options._event

  fetchByEvent: (options={})->
    defs = data:
      event_id: @event.id
    options = $.extend defs, options
    @fetch options

  poll: =>
    @fetchByEvent
      reset: true
      success: (collection)=>
        @collection = collection
