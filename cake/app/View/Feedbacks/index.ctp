<!DOCTYPE html>
<html>
  <head>
    <title>Paduleフィードバック</title>
    <link href='../../img/favicon.ico' rel='shortcut icon'>
    <link href='../../css/bootstrap.min.css' rel='stylesheet'>
    <link href='../../css/padule.css' rel='stylesheet'>
    <link href='../../css/feedback.css' rel='stylesheet'>
    <meta charset='utf-8'>
    <meta content='width=device-width, minimum-scale=1, maximum-scale=1, user-scalable=no' name='viewport'>
  </head>
  <body id='feedbackIndex'>
    <div class='navbar navbar-inverse navbar-fixed-top padule-nav'>
      <div class='container-fluid'>
        <a class='navbar-brand' href='/users/mypage'>
          Paduleに戻る
        </a>
        <ul class='nav navbar-nav pull-right' id='userInfo'>
          <li class='dropdown'>
            <a class='pull-right' data-toggle='dropdown' href='#'>
              <i class='glyphicon glyphicon-user'></i>
              <span id='userName'></span>
              <b class='caret'></b>
            </a>
            <ul class='dropdown-menu'>
              <li>
                <a href='#' id='logout'>
                  <i class='glyphicon glyphicon-off'></i>
                  ログアウト
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div class='container-fluid'>
      <div class='row-fluid'></div>
    </div>
    <script>
      if (window.padule == null) window.padule = { Models: {}, Collections: {}, Views: {},Routers: {} };
    </script>
    <script src='../../js/libs/jquery-2.0.3.min.js'></script>
    <script src='../../js/libs/bootstrap.min.js'></script>
    <script src='../../js/libs/json2.js'></script>
    <script src='../../js/libs/underscore.js'></script>
    <script src='../../js/libs/backbone.js'></script>
    <script src='../../js/application.js'></script>
    <script src='../../js/padule.js'></script>
    <!-- template -->
    <script src='../../js/templates/templates.js'></script>
    <!-- model -->
    <script src='../../js/models/feedback.js'></script>
    <!-- collection -->
    <script src='../../js/collections/feedbacks.js'></script>
    <!-- view -->
    <script src='../../js/views/feedback/feedback_index.js'></script>
    <!-- router -->
    <script src='../../js/routers/schedules_router.js'></script>
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
      ga('create', 'UA-45987329-1', 'padule.me');
      ga('send', 'pageview');
    </script>
  </body>
</html>
