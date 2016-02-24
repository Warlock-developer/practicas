<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="author" content="">
    <!-- <link rel="icon" href="../../favicon.ico"> -->

    <title>Practicas</title>

    <!-- Bootstrap core CSS -->
    <link href="<?php echo base_url(); ?>vendors/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <link href="<?php echo base_url(); ?>assets/css/ie10-viewport-bug-workaround.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="<?php echo base_url(); ?>assets/css/offcanvas.css" rel="stylesheet">


    <!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
    <!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->
    <script src="<?php echo base_url(); ?>assets/js/ie-emulation-modes-warning.js"></script>


    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="<?php echo base_url(); ?>vendors/jquery/jquery-1.12.1.min.js"></script> 
    <!-- <script>window.jQuery || document.write('<script src="../../assets/js/vendor/jquery.min.js"><\/script>')</script> -->
    <script src="<?php echo base_url(); ?>vendors/bootstrap/dist/js/bootstrap.min.js"></script>
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="<?php echo base_url(); ?>assets/js/ie10-viewport-bug-workaround.js"></script>
    <script src="<?php echo base_url(); ?>assets/js/offcanvas.js"></script>

    <!-- Angular
    ================================================== -->
    <script src="<?php echo base_url() ?>vendors/angular/angular.min.js"></script>
    <script src="<?php echo base_url() ?>vendors/angular/angular-datatables.js"></script>


    <!-- Datatables core JavaScript
    ================================================== -->
    <link rel="stylesheet" type="text/css" href="<?php echo base_url()?>vendors/datatables/DataTables-1.10.9/css/dataTables.bootstrap.css">
    <script type="text/javascript" language="javascript" src="<?php echo base_url()?>vendors/datatables/DataTables-1.10.9/js/jquery.dataTables.js"></script>
    <script type="text/javascript" language="javascript" src="<?php echo base_url()?>vendors/datatables/DataTables-1.10.9/js/dataTables.bootstrap.js"></script>  


    <script type="text/javascript" language="javascript" src="<?php echo base_url()?>assets/js/users.js"></script> 
    


    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>

  <body>
    <nav class="navbar navbar-fixed-top navbar-inverse">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Project name</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li class="active"><a href="home">Home</a></li>
            <li><a href="users">Users</a></li>
            <li><a href="patterns">Patterns</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div><!-- /.nav-collapse -->
      </div><!-- /.container -->
    </nav><!-- /.navbar -->

    <div class="container">

     <?php
          $this->load->view($module.'/'.$view_file);
     ?>
     <hr>

      <footer>
        <p>&copy; 2015 Company, Inc.</p>
      </footer>
      
    </div><!--/.container-->
  </body>
</html>
