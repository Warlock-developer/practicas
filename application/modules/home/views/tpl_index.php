<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Welcome to CodeIgniter</title>
    <style type="text/css">
    body {
        margin: 40px;
    }
    .body {
        margin: 0 15px 0 15px;
    }
    .container{
        margin: 10px;
        border: 1px solid #000;
    }
    </style>
</head>
<body>
<h1>Esto es un módulo!</h1>
<div class="container" style="background-color: #a5bfda;">
    <div class="body">
    <?php echo modules::run('Home/hola'); ?>
    </div>    
</div>
<div class="container" style="background-color: #d9dff0;">
    <div class="body">
        <?php echo modules::run('Home/hola'); ?>
    </div>
</div>
</body>
</html>