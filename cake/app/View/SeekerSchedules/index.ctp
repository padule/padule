<!DOCTYPE html>
<html>
  <head>
    <title>Padule</title>
    <link href='favicon.ico' ref='shortcut icon'>
    <link href='../../css/bootstrap.min.css' rel='stylesheet'>
    <link href='../../css/datepicker.css' rel='stylesheet'>
    <link href='../../css/padule.css' rel='stylesheet'>
    <link href='../../css/schedule.css' rel='stylesheet'>
  </head>
  <body>
    <div class='navbar navbar-inverse navbar-fixed-top padule-nav'>
      <div class='container-fluid'>
        <a class='navbar-brand' href='../'>
          Padule
        </a>
      </div>
    </div>
    <div class='seeker-schedule-container container-fluid' data-eventid='<?php echo $eventId;?>'>
    <div class='event-container'>
      <h4 class='event-title'></h4>
      <p class='event-text'></p>
    </div>
    <div class='seeker-container'>
      <div class='form-group'>
        <label for='inputName'>
          氏名
        </label>
        <label class='important'>
          (必須)
        </label>
        <input class='necessary input-sm form-control' id='inputName' placeholder='氏名' type='text'>
      </div>
      <div class='form-group'>
        <label for='inputEmail'>
          メールアドレス
        </label>
        <label class='important'>
          (必須)
        </label>
        <input class='necessary input-sm form-control' id='inputEmail' placeholder='メールアドレス' type='email'>
      </div>
      <div class='form-group input-email2'>
        <label for='inputEmail'>
          メールアドレス（確認）
        </label>
        <label class='important'>
          (必須)
        </label>
        <input class='necessary input-sm form-control' id='inputEmail2' placeholder='メールアドレス' type='email'>
      </div>
    </div>
    <div class='edit-container'>
      <p>
        ■ 参加可能な日時を選択してください。
      </p>
      <div id='seeker-schedule-edit'>
        <ul class='list-group'></ul>
      </div>
    </div>
    <div class='seeker-container'>
      <div class='form-group'>
        <label>
          コメント
        </label>
        <textarea class='form-control' id='inputComment' placeholder='日程に関して、何か伝えたいことがあれば記述してください。' rows='3'></textarea>
      </div>
    </div>
    <div class='control-container'>
      <p class='attention important'>
        ※ 一度送信した内容は修正できません。
      </p>
      <button class='disabled btn btn-success btn-lg' id='sendSeekerSchedule'>
        内容を送信する
      </button>
    </div>
    </div>
    <div class='modal fade' id='alertModal'>
      <div class='modal-dialog'>
        <div class='modal-content'>
          <div class='modal-header'>
            <button aria-hidden='modal-body' class='close' data-dismiss='modal' type='button'>
              &times;
            </button>
            <i class='glyphicon glyphicon-question-sign'></i>
            <span class='modal-title'></span>
          </div>
          <div class='modal-body'></div>
          <div class='modal-footer'>
            <button class='btn btn-success' id='alertOK' type='button'>
              はい
            </button>
            <button class='btn btn-default' data-dismiss='modal' type='button'>
              いいえ
            </button>
          </div>
        </div>
      </div>
    </div>
    <script>
      if (window.padule == null) window.padule = { Models: {}, Collections: {}, Views: {},Routers: {} };
    </script>
    <script src='../../js/libs/jquery-2.0.3.min.js'></script>
    <script src='../../js/libs/bootstrap.min.js'></script>
    <script src='../../js/libs/json2.js'></script>
    <script src='../../js/libs/dateformat.js'></script>
    <script src='../../js/libs/underscore.js'></script>
    <script src='../../js/libs/backbone.js'></script>
    <script src='../../js/libs/backbone.localStorage.js'></script>
    <script src='../../js/application.js'></script>
    <script src='../../js/padule.js'></script>
    <script src='../../js/libs/jquery.mockjax.js'></script>
    <!-- template -->
    <script src='../../js/templates/templates.js'></script>
    <!-- model -->
    <script src='../../js/models/event.js'></script>
    <script src='../../js/models/schedule.js'></script>
    <script src='../../js/models/seeker.js'></script>
    <script src='../../js/models/seeker_schedule.js'></script>
    <script src='../../js/models/user.js'></script>
    <!-- collection -->
    <script src='../../js/collections/events.js'></script>
    <script src='../../js/collections/schedules.js'></script>
    <script src='../../js/collections/seeker_schedules.js'></script>
    <!-- view -->
    <script src='../../js/views/schedule/alert_modal.js'></script>
    <script src='../../js/views/seeker_schedule/schedule_list.js'></script>
    <script src='../../js/views/seeker_schedule/schedule_list_element.js'></script>
    <script src='../../js/views/seeker_schedule/seeker_schedule_input.js'></script>
    <script src='../../js/routers/schedules_router.js'></script>
  </body>
</html>
