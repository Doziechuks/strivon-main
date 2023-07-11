<?php
include_once "dbconn.php";
session_start();




if(isset($_POST['continue'])){
    // fetch data
    $username = $_POST['username'];
    $uotp = $_POST['otp'];

    //check if data is empty
    if(empty($uotp)){
        header("Location: ../adminotp.php?empty");
			exit();
    } else{
        
        // fetch admin data from database
        $sql = "SELECT * FROM admin WHERE username = '$username' ";
        $result = mysqli_query($conn,$sql);
        $result_checker = mysqli_num_rows($result);
        
        // check if the database table is empty
        if($result_checker > 0){
            // loop through each row in the table
            while($row = mysqli_fetch_assoc($result)){
                // table Data
                $admin = $row['username'];
                $pwd = $row['password'];
                $email = $row['email'];
                $otp = $row['otp'];

                // checking if password is correct
                if($uotp !== $otp){
                    header("Location: ../adminotp.php?wrongOTP");
			        exit();
                }else{
                    $_SESSION['admin'] = $admin;

                    // redirect to otp page
                    header("Location: ../admindashboard.php");
			        exit();
                }
            }
        } else{
            header("Location: ../adminotp.php?invalid");
			exit();
        }






    }
















}



