<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Strivon Admin Login</title>
    <link rel="stylesheet" href="./assets/css/loginstyle.css" />
    <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
  </head>
  <body>
    <div class="wrapper">

      <form action="./scripts/adminlogin.php" method="post">
        <div class="logo">
        <img src="./assets/img/str.png" alt="">
        </div>
        <h1><span>Admin </span>Login</h1>
        <div class="input-box">
          <input type="text" placeholder="Username"  name="username" required />
          <i class="bx bxs-user"></i>
        </div>
        <div class="input-box">
          <input type="password" placeholder="Password" name="password" required />
          <i class="bx bxs-lock-alt"></i>
        </div>
        <button class="login-btn" type="submit" name="login">Login</button>
      </form>
    </div>
  </body>
</html>
