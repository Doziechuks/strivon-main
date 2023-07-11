<?php
session_start();
include_once "./scripts/dbconn.php";
if (!isset($_SESSION['admin'])) {
    header("location: ./adminlogin.php");
}


?>

<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Strivon OTP</title>
    <link rel="stylesheet" href="./assets/css/loginstyle.css" />
    <link
      href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
      rel="stylesheet"
    />
  </head>
  <body>
    <div class="wrapper">
      <form action="./scripts/adminotp.php" method="post">
        <div class="logo">
        <img src="./assets/img/str.png" alt="">
        </div>
        <h1><span>ENTER </span>CODE</h1>
        <div class="register-link">
          <p>We sent OTP code to your email address</p>
        </div>
        <div class="input-box">
          <input type="hidden" name = "username" value = "<?php echo $_SESSION['admin'] ?>">
          <input type="text" placeholder="Enter OTP" name="otp" required />
          <i class="bx bxs-lock-alt"></i>
        </div>
        <!-- <div class="input-box">
          <input type="password" placeholder="Password" required />
        </div> -->
        
        <button class="login-btn" type="submit" name="continue">Continue</button>

        
      </form>
      <div class="register-link">
          <p>Didn't receive Code?  </p>

            <form method="post"  action= "./scripts/adminresend.php">
              <input type="hidden" name = "username" value="<?php echo $_SESSION['admin'] ?>">
              <button type="submit" name="resend" class="resendbtn">Resend</button>
            </form>
        </div>
    </div>
  </body>
</html>
