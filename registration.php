<?php include('server.php') ?>
<!DOCTYPE html>
<html>
<head>
  <title>MOJORDANZ</title>
  <link rel="stylesheet" type="text/css" href="phpStyle.css">
</head>
<body>
  <div class="header">
  	<h2>Register</h2>
  </div>
	
  <form method="post" action="registration.php">
  	<?php include('errors.php'); ?>
  	<div class="input-group">
  	  <label>Username</label>
  	  <input type="text" name="username" value="<?php echo $username; ?>">
  	</div>
  	<div class="input-group">
  	  <label>Email</label>
  	  <input type="email" name="email" value="<?php echo $email; ?>">
  	</div>
  	<div class="input-group">
  	  <label>Password</label>
  	  <input type="password" name="password_1">
  	</div>
  	<div class="input-group">
  	  <label>Confirm password</label>
  	  <input type="password" name="password_2">
  	</div>
  	<div class="input-group">
  	  <button type="submit" class="btn" name="reg_user">Register</button>
  	</div>
  	<p>
  		Already a member? <a href="login.php">Sign in</a>
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
