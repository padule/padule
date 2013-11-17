<!DOCTYPE html>
<!-- saved from url=(0059)https://dl.dropbox.com/u/3601859/AdjustInterview/brand.html -->
<html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta charset="utf-8">
<title>Padule - 日程調整をパズル感覚で</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="">
<meta name="author" content="">

<!-- Le styles -->
<link href="/css/bootstrap.min.css" rel="stylesheet">
<link href="/css/bootstrap-responsive.css" rel="stylesheet">
<style>

    /* GLOBAL STYLES
    -------------------------------------------------- */
    /* Padding below the footer and lighter body text */

body {
    padding-bottom: 40px;
    color: #5a5a5a;
}

    /* CUSTOMIZE THE NAVBAR
   -------------------------------------------------- */

    /* Special class on .container surrounding .navbar, used for positioning it into place. */
.navbar-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    margin-top: 20px;
    margin-bottom: -90px; /* Negative margin to pull up carousel. 90px is roughly margins and height of navbar. */
}

.navbar-wrapper .navbar {

}

    /* Remove border and change up box shadow for more contrast */
.navbar .navbar-inner {
    border: 0;
    -webkit-box-shadow: 0 2px 10px rgba(0, 0, 0, .25);
    -moz-box-shadow: 0 2px 10px rgba(0, 0, 0, .25);
    box-shadow: 0 2px 10px rgba(0, 0, 0, .25);
}

    /* Downsize the brand/project name a bit */
.navbar .brand {
    padding: 14px 20px 16px; /* Increase vertical padding to match navbar links */
    font-size: 16px;
    font-weight: bold;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, .5);
}

    /* Navbar links: increase padding for taller navbar */
.navbar .nav > li > a {
    padding: 15px 20px;
}

    /* Offset the responsive button for proper vertical alignment */
.navbar .btn-navbar {
    margin-top: 10px;
}

    /* CUSTOMIZE THE CAROUSEL
   -------------------------------------------------- */

    /* Carousel base class */
.carousel {
    margin-bottom: 60px;
}

.carousel .container {
    position: relative;
    z-index: 9;
}

.carousel-control {
    height: 80px;
    margin-top: 0;
    font-size: 120px;
    text-shadow: 0 1px 1px rgba(0, 0, 0, .4);
    background-color: transparent;
    border: 0;
    z-index: 10;
}

.carousel .item {
    height: 450px;
}

.carousel img {
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100%;
    height: 450px;
}

.carousel-caption {
    background-color: transparent;
    position: static;
    max-width: 550px;
    padding: 0 20px;
    margin-top: 200px;
}

.carousel-caption h1,
.carousel-caption .lead {
    margin: 0;
    line-height: 1.25;
    color: #fff;
    text-shadow: 0 1px 1px rgba(0, 0, 0, .4);
}

.carousel-caption .btn {
    margin-top: 10px;
}

    /* MARKETING CONTENT
   -------------------------------------------------- */

    /* Center align the text within the three columns below the carousel */
.marketing .span4 {
    text-align: center;
}

.marketing h2 {
    font-weight: normal;
}

.marketing .span4 p {
    margin-left: 10px;
    margin-right: 10px;
}

    /* Featurettes
   ------------------------- */

.featurette-divider {
    margin: 80px 0; /* Space out the Bootstrap <hr> more */
}

.featurette {
    padding-top: 120px; /* Vertically center images part 1: add padding above and below text. */
    overflow: hidden; /* Vertically center images part 2: clear their floats. */
}

.featurette-image {
    margin-top: -120px; /* Vertically center images part 3: negative margin up the image the same amount of the padding to center it. */
}

    /* Give some space on the sides of the floated elements so text doesn't run right into it. */
.featurette-image.pull-left {
    margin-right: 40px;
}

.featurette-image.pull-right {
    margin-left: 40px;
}

    /* Thin out the marketing headings */
.featurette-heading {
    font-size: 50px;
    font-weight: 300;
    line-height: 1;
    letter-spacing: -1px;
}

    /* RESPONSIVE CSS
   -------------------------------------------------- */

@media (max-width: 950px) {

    .container.navbar-wrapper {
        margin-bottom: 0;
        width: auto;
    }

    .navbar-inner {
        border-radius: 0;
        margin: -20px 0;
    }

    .carousel .item {
        height: 475px;
    }

    .carousel img {
        width: auto;
        height: 475px;
    }

    .featurette {
        height: auto;
        padding: 0;
    }

    .featurette-image.pull-left,
    .featurette-image.pull-right {
        display: block;
        float: none;
        max-width: 40%;
        margin: 0 auto 20px;
    }
}

@media (max-width: 767px) {

    .navbar-inner {
        margin: -20px;
    }

    .carousel {
        margin-left: -20px;
        margin-right: -20px;
    }

    .carousel .container {

    }

    .carousel .item {
        height: 300px;
    }

    .carousel img {
        height: 300px;
    }

    .carousel-caption {
        width: 65%;
        padding: 0 70px;
        margin-top: 100px;
    }

    .carousel-caption h1 {
        font-size: 30px;
    }

    .carousel-caption .lead,
    .carousel-caption .btn {
        font-size: 18px;
    }

    .marketing .span4 + .span4 {
        margin-top: 40px;
    }

    .featurette-heading {
        font-size: 30px;
    }

    .featurette .lead {
        font-size: 18px;
        line-height: 1.5;
    }

}
.form-signin {
max-width: 300px;
padding: 19px 29px 29px;
margin: 0 auto 20px;
background-color: #fff;
border: 1px solid #e5e5e5;
-webkit-border-radius: 5px;
   -moz-border-radius: 5px;
        border-radius: 5px;
-webkit-box-shadow: 0 1px 2px rgba(0,0,0,.05);
   -moz-box-shadow: 0 1px 2px rgba(0,0,0,.05);
        box-shadow: 0 1px 2px rgba(0,0,0,.05);
}
.form-signin .form-signin-heading,
.form-signin .checkbox {
margin-bottom: 10px;
}
.form-signin input[type="text"],
.form-signin input[type="password"] {
font-size: 16px;
height: auto;
margin-bottom: 15px;
padding: 7px 9px;
      }
</style>

<!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
<!--[if lt IE 9]>
<script src="../assets/js/html5shiv.js"></script>
<![endif]-->

<!-- Fav and touch icons -->
<link rel="apple-touch-icon-precomposed" sizes="144x144" href="https://dl.dropbox.com/u/3601859/assets/ico/apple-touch-icon-144-precomposed.png">
<link rel="apple-touch-icon-precomposed" sizes="114x114" href="https://dl.dropbox.com/u/3601859/assets/ico/apple-touch-icon-114-precomposed.png">
<link rel="apple-touch-icon-precomposed" sizes="72x72" href="https://dl.dropbox.com/u/3601859/assets/ico/apple-touch-icon-72-precomposed.png">
<link rel="apple-touch-icon-precomposed" href="https://dl.dropbox.com/u/3601859/assets/ico/apple-touch-icon-57-precomposed.png">
<link rel="shortcut icon" href="https://dl.dropbox.com/u/3601859/assets/ico/favicon.png">
</head>

<body>
<div class="navbar navbar-inverse">
    <div class="navbar-inner">
        <div class="container-fluid">
            <div class="nav-collapse collapse">
                <ul class="nav">
                    <li>
                        <a id="brand" href="/">
                            Padule
                        </a>
                    </li>
                </ul>
            </div>
            <!--/.nav-collapse -->
        </div>
    </div>
</div>
    <!-- /.carousel -->
<div class="container">
        <?php echo $this->Form->create(array('class' => 'form-signin')) ?>
            <h3>PADULE ログイン</h3>
            <p>メールアドレスとパスワードを入力してください。</p>
        <?php echo $this->Form->input('User.username',array('class' => 'input-block-level','placeholder' => 'メールアドレスを入力してください。','label' => '')) ?>
        <?php echo $this->Form->input('User.password',array('class' => 'input-block-level','placeholder' => 'パスワードを入力してください。','label' => '')) ?>
        <button class="btn btn-large btn-primary" type="submit">ログインする</button>

      </form>
    </div> <!-- /container -->

<!-- Marketing messaging and featurettes
================================================== -->
<!-- Wrap the rest of the page in another container to center all the content. -->

<div class="container marketing">
    <footer>

        <p>© 2013 Padule Inc. ·  · started by <a href="http://tokyo.startupweekend.org/">Startup Weekend Tokyo</a></p>
    </footer>

</div>
<!-- /.container -->
<!-- Le javascript
================================================== -->



</body>
    <?php echo $this->element('sql_dump'); ?>
</html>