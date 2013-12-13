class padule.Views.FeedbackListElement extends Backbone.View
  tagName: 'tr'

  template: JST['templates/feedback']

  events:
    'click .js-delete-btn' : 'deleteFeedback'

  initialize: (options = {})->
    _.bindAll @

    @modal = options.modal
    @user_id = options.user_id

    @listenTo @modal, "clickOk:#{@model.cid}", ->
      @model.destroy()
      @remove()

  deleteFeedback: ->
    @modal.show
      title: 'フィードバックを削除'
      contents: '削除してよろしいですか？'
      model: @model

  render: =>
    @$el.html @template
      feedback: @model
      content: @model.get 'content'
      user: @model.get 'User'
      isOwn: @model.get('User').id is @user_id
      comment: @model.get 'comment'
      created: padule.dateformatyyyyMMddWhhmm @model.get('created')

    @