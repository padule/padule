class padule.Models.Seeker extends Backbone.Model
  urlRoot: "#{padule.base_url}/seekers"
  localStorage: new Store "seeker"
  parse: (resp)->
    if resp.responseText
      resp.responseText
    else
      resp

  initialize: (options ={})->
    @seeker_schedule = options.seeker_schedule

  hasNecessaryVal: ->
    @get('name') isnt '' and @get('name') isnt undefined and @get('mail') isnt '' and @get('mail') isnt undefined