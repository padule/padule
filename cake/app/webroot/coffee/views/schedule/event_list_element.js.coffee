class padule.Views.EventListElement extends Backbone.View
  tagName: 'li'
  className: 'event'
  template: JST['templates/event']

  events:
    'click .js-delete-event-btn' : 'deleteEvent'
    'click a' : 'showSchedule'
    'dblclick a' : 'editEvent'
    'keypress .edit': (e)->
      if e.keyCode is 13 then @close()
    'blur .edit': ->
      @$el.removeClass 'editing'
      if @model.isNew() and !@model.get('title') then @remove()

  initialize: (options = {})->
    _.bindAll @

    @modal = options.modal
    @infoArea = options.infoArea

    @listenTo @model, 'change', @render

    @listenTo @model, 'unactive', ->
      @$el.removeClass 'active'

    @listenTo @model, 'destroy', ->
      @remove()
      @infoArea.show
        text: 'イベントを削除しました'
        class_name: 'label-info'

    @listenTo @modal, "clickOk:#{@model.cid}", ->
      @model.destroy()

    @listenTo @model, 'sync', ->
      @infoArea.show
        text: 'スケジュールを保存しました。'
        class_name: 'label-info'

  editEvent: ->
    @$el.addClass 'editing'
    @focus()

  close: ->
    value = @input.val()
    if value
      @model.save {title: value}
      @$el.removeClass 'editing'

  render: =>
    @$el.html @template
      event: @model.toJSON()
    @input = @$('.edit')
    if @model.isNew()
      @$el.addClass 'editing'
      @focus()
    @

  deleteEvent: (e)->
    e.preventDefault()
    @modal.show
      title: 'イベントを削除'
      contents: "『#{@model.get 'title'}』を削除してよろしいですか？"
      model: @model

  showSchedule: (e)->
    e.preventDefault()
    @model.collection.each (event)->
      event.trigger 'unactive'
    @$el.addClass 'active'

    new padule.Views.Schedule
      collection: new padule.Collections.Schedules false, _event: @model

  focus: ->
    setTimeout =>
      @input.focus()
    , 0