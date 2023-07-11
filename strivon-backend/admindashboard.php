<?php
session_start();
include_once "./scripts/dbconn.php";
if (!isset($_SESSION['admin'])) {
    header("location: ./adminlogin.php");
}

include_once "./sidebar.php";
?>



<div class="main-content">
<div class="header--wrapper">
  <div class="header--title">
    <div class="toogle--btn">
      <!-- <button id="toggleButton" onclick="toggle()">Toggle</button> -->
      <i class="fas fa-bars nav-btn" id="toggleButton"></i>
    </div>
    <div>
      <span>Admin</span>
      <h2>Dashboard</h2>
    </div>
  </div>
  <div class="user--info">
    <div class="search--box">
      <i class="fas fa-magnifying-glass"></i>
      <input type="text" placeholder="Search" />
    </div>

    <img src="./assets/img/img.jpg" alt="img" />
  </div>
</div>
<!-- CARDS SECTION  -->
<div class="card--container">
  <h3 class="main--title">Today's Data</h3>
  <div class="card--wrapper">
    <div class="payment--card dark-purple">
      <div class="card--header">
        <div class="amount">
          <span class="title">Total</span>
          <span class="amount--value">Interested Students</span>
        </div>
        <i class="fas fa-map icon dark-orange"></i>
      </div>
      <span class="card--detail"><h2>100</h2></span>
    </div>

    <div class="payment--card dark-purple">
      <div class="card--header">
        <div class="amount">
          <span class="title">Total</span>
          <span class="amount--value">Registered Students</span>
        </div>
        <i class="fas fa-users icon dark-orange"></i>
      </div>
      <span class="card--detail"><h2>45</h2></span>
    </div>

    <div class="payment--card dark-purple">
      <div class="card--header">
        <div class="amount">
          <span class="title">Number of</span>
          <span class="amount--value">Pending<br />Payments</span>
        </div>
        <i class="fas fa-credit-card icon dark-orange"></i>
      </div>
      <span class="card--detail"><h2>7</h2></span>
    </div>
  </div>
</div>
<!-- TABLE  -->
<div class="tabular--wrapper">
  <h3 class="main--title">Students Data</h3>
  <div class="table--container">
    <table>
      <thead>
        <tr>
          <th>S/N</th>
          <th>Full Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Session</th>
          <th>Profile</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>John Doe</td>
          <td>Johndoe@gmail.com</td>
          <td>0810000000</td>
          <td>Aug-Oct 2023</td>
          <td><button>View</button></td>
        </tr>
        <tr>
          <td>1</td>
          <td>John Doe</td>
          <td>Johndoe@gmail.com</td>
          <td>0810000000</td>
          <td>Aug-Oct 2023</td>
          <td><button>View</button></td>
        </tr>
        <tr>
          <td>1</td>
          <td>John Doe</td>
          <td>Johndoe@gmail.com</td>
          <td>0810000000</td>
          <td>Aug-Oct 2023</td>
          <td><button>View</button></td>
        </tr>
        <tr>
          <td>1</td>
          <td>John Doe</td>
          <td>Johndoe@gmail.com</td>
          <td>0810000000</td>
          <td>Aug-Oct 2023</td>
          <td><button>View</button></td>
        </tr>
        <tr>
          <td>1</td>
          <td>John Doe</td>
          <td>Johndoe@gmail.com</td>
          <td>0810000000</td>
          <td>Aug-Oct 2023</td>
          <td><button>View</button></td>
        </tr>
        <tr>
          <td>1</td>
          <td>John Doe</td>
          <td>Johndoe@gmail.com</td>
          <td>0810000000</td>
          <td>Aug-Oct 2023</td>
          <td><button>View</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<?php

include_once "./footer.php";
?>