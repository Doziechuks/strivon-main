<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <!-- <meta name="viewport" content="width=device-width, initial-scale=1.0" /> -->
    <title>Strivon Admin Dashboard</title>
    <link rel="stylesheet" href="./assets/css/styles.css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    />
  </head>
  <body>
    <div class="sidebar" id="sidebar">
      <div class="logo">
        <img src="./assets/img/str.png" alt="logo" />
      </div>
      <ul class="menu">
        <li class="active">
          <a href="#">
            <i class="fas fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fas fa-user"></i>
            <span>Students Data</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fas fa-credit-card"></i>
            <span>Approve Payments</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fas fa-file-invoice"></i>
            <span>Payment Proof</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fas fa-link"></i>
            <span>Activate/Deactivate</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fas fa-envelope"></i>
            <span>Send Email</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fas fa-cog"></i>
            <span>Settings</span>
          </a>
        </li>
        <li class="logout">
          <form action="./scripts/adminlogout.php" method = "post">
            <input type="hidden" value="<?php echo $_SESSION['admin']; ?>">
            <button type="submit" name="logout" class="resendbtn"><i class="fas fa-sign-out-alt"></i>Logout</button>
          </form>
        </li>
      </ul>
    </div>

   