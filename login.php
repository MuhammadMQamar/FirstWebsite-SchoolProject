<?php include('server.php') ?>
<!DOCTYPE html>
<html>
<head>
  <title>MOJORDANZ</title>
  <link rel="stylesheet" type="text/css" href="phpStyle.css">
</head>
<body>
 <div class="container">
    <div class="nav-wrapper">
      <div class="left-side">
        <div class="nav-link-wrapper">
          <a href="index.html">Home</a>
        </div>

        <div class="nav-link-wrapper">
          <a href="about.html">About</a>
        </div>

<div class="nav-link-wrapper">
          <a href="info.html">Info</a>
	
        </div>
<div class="nav-link-wrapper">
          <a href="feedback.html">Feedback</a>
	
        </div>

<div class="nav-link-wrapper active-nav-link">
          <a href="login.php">Login</a>
	
        </div>




      </div>

      <div class="right-side">
        <div class="brand">
          MOJORDANZ
        </div>
      </div>
    </div>
  <div class="header">
  	<h2>Login</h2>
  </div>
	 
  <form method="post" action="login.php">
  	<?php include('errors.php'); ?>
  	<div class="input-group">
  		<label>Username</label>
  		<input type="text" name="username" >
  	</div>
  	<div class="input-group">
  		<label>Password</label>
  		<input type="password" name="password">
  	</div>
  	<div class="input-group">
  		<button type="submit" class="btn" name="login_user">Login</button>
  	</div>
  	<p>
  		Not yet a member? <a href="registration.php">Sign up</a>
  	</p>
  </form>

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

<footer>
		<p>MoJordanz, Copyright &copy 2020</p>
		<p>Ayaz Ingar N01243103	<br>Muhammad Qamar N01344609<br>Noha Philips N01351336<br>Myeonggyu Kim N01225439<br>Julian Opoku-Serebour N01248687</p>
	</footer>

</body>
</html>
