class padule.Views.Schedule extends Backbone.View
  el: $ '#scheduleContents'

  events:
    'click #confirmButton' : ->
      @modal.show
        title: 'スケジュールを確定'
        contents: "スケジュールを確定してよろしいですか？"
        model: @collection



  initialize: (options = {})->
    _.bindAll @

    @modal = options.modal
    @info_area = options.info_area

    @tableContainer = @$ '.schedule-table-container'
    @controlContainer = @$ '.control-container'
    @buttonContainer = @$ '.button-container'

    @listenTo @collection, 'sync', @_clear
    @listenTo @collection, 'sync', @render
    @listenTo @collection, 'changeType', @enableConfirmButton
    @listenTo @collection.event, 'change', @render
    @listenTo @modal, "clickOk:#{@collection.id}", ->
      @collection.each (schedule)->
        schedule.seeker_schedules.each (seeker_schedule)->
          seeker_schedule.confirm()
      @info_area.show
        text: 'スケジュールを確定しました'
        class_name: 'label-info'

    @clear()
    @startLoading()
    @collection.fetchByEvent()

  clear: ->
    @tableContainer.empty()
    @controlContainer.empty()

  render: ->
    @table = new padule.Views.ScheduleTable
      collection: @collection
      modal: @modal
      info_area: @info_area
    @tableContainer.html @table.render().el

    @control = new padule.Views.ScheduleControl
      collection: @collection
    @controlContainer.html @control.render().el

    @enableConfirmButton()
    @buttonContainer.show()

    @endLoading()

  startLoading: ->
    @$el.addClass 'loading'

  endLoading: ->
    @$el.removeClass 'loading'

  enableConfirmButton: ->
    has_temp = false
    @collection.each (schedule)=>
      schedule.seeker_schedules.each (seeker_schedule)=>
        if seeker_schedule.isTemp()
          has_temp = true
          return

    if has_temp
      @buttonContainer.find('#confirmButton').removeClass 'disabled'
    else
      @buttonContainer.find('#confirmButton').addClass 'disabled'