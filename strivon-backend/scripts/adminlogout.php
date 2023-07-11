<?php
include "dbconn.php";
session_start();

if (isset($_POST['logout'])) {
    session_destroy();
    unset($_SESSION['admin']);
    header("location: ../adminlogin.php");
}