class padule.Views.FeedbackIndex extends Backbone.View
  el: $ '#feedbackIndex'

  events:
    'click ' : ->

  initialize: (options = {})->
    _.bindAll @