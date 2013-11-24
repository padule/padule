class padule.Collections.SeekerSchedules extends Backbone.Collection
  model: padule.Models.SeekerSchedule
  url: "/seeker_schedules"
  localStorage: new Store "seeker_schedule"

  initialize: (models, options)->
    @schedule = options.schedule

  resetType: ->
    @invoke 'set', {'type', '-1'}, {'silent', 'true'}

  findBySeeker: (seeker_schedule)->
    result = []
    @schedule.collection.each (schedule)->
      filters = schedule.seeker_schedules.filter (each)->
          each.seeker.get('name') is seeker_schedule.seeker.get('name')
      result = result.concat filters
    result

  hasConfirmed: ->
    confirms = @filter (seeker_schedule)->
      seeker_schedule.isConfirmed() or seeker_schedule.isTemp()
    confirms?.length > 0

  changeEditable: (editable)->
    @each (seeker_schedule)->
      seeker_schedule.changeEditable editable

  changeEditableBySeeker: ->
    # 同じ人のスケジュールに未確定・確定済があればEditableを変更
    @each (each)=>
      has_confirmed = false
      seeker_schedules = @findBySeeker each
      _.each seeker_schedules, (seeker_schedule)=>
        if seeker_schedule.isConfirmed() or seeker_schedule.isTemp()
          has_confirmed = true

      # 初期表示時のみ
      _.each seeker_schedules, (seeker_schedule)=>
          seeker_schedule.changeEditable !has_confirmed and !seeker_schedule.collection.hasConfirmed()

