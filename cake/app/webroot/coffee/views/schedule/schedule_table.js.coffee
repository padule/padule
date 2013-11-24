class padule.Views.ScheduleTable extends Backbone.View
  tagName: 'table'
  className: 'table table-hover table-condensed schedule-table'

  initialize: ->
    _.bindAll @
    @thead = new padule.Views.ScheduleThead
      collection: @collection
    @tbody = new padule.Views.ScheduleTbody
      collection: @collection
    @tfoot = new padule.Views.ScheduleTfoot
      collection: @collection

  render: ->
    @$el.append @thead.render().el
    @$el.append @tbody.render().el
    @$el.append @tfoot.render().el
    @