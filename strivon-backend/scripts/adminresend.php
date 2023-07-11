<?php
include_once "dbconn.php";
session_start();

if(isset($_POST['resend'])){
    // fetch data
    $username = $_POST['username'];

    //check if data is empty
    if(empty($username)){
        header("Location: ../adminlogin.php?empty");
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

                $_SESSION['admin'] = $admin;

                // Generate OTP
                $newotp = rand(1000, 9999);

                // Update OTP
                $sqlotp = "UPDATE admin SET otp = '$newotp' WHERE username = '$username'";
                mysqli_query($conn,$sqlotp);

                // Send OTP to Admin Email
                // $to = $email;
                // $subject = 'Admin Login verification Code';
                // $from = 'support@strivon.academy';
                // $headers  = 'MIME-Version: 1.0' . "\r\n";
                // $headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";
                // $headers .= 'From: '.$from."\r\n".
                // 'Reply-To: '.$from."\r\n" .
                // 'X-Mailer: PHP/' . phpversion();

                // $message.= '<html>
                //                 <body style="padding: 5% 0; font-family: sans-serif; color: #1b1b32">
                //                 <div
                //                     class="container"
                //                     style="width: 95%; background: #eaf2fe; margin: auto"
                //                 >
                //                     <div
                //                     class="header"
                //                     style="
                //                         padding: 25px 5%;
                //                         background: #eaf2fe;
                //                         display: flex;
                //                         margin: auto;
                //                     "
                //                     >
                //                     <a href="https://www.strivon.academy">
                //                         <img src="https://www.strivon.academy/assets/img/logo.png"        style="height: 60px; width: auto" />
                //                     </a>
                //                     </div>
                //                     <div class="show" style="padding: 5px 5%; background: #1b1b32">
                //                     <h2 style="font-weight: 700; text-align: center; color: #fff">
                //                         Login Verification Code
                //                     </h2>
                //                     </div>
                            
                //                     <div style="padding: 30px 5%">
                //                     <p style="font-size: 14px; padding: 0; margin: 0">Hello Admin,</p>
                //                     <br />
                //                     <p style="font-size: 14px; padding: 0; margin: 0">
                //                         Here is your login verification Code:
                //                     </p>
                //                     <br /><br />
                //                     <div style="background: #fce8bc; padding: 10px 25px; font-size: 12px">
                //                         <h2
                //                         style="
                //                             font-weight: 700;
                //                             text-align: center;
                //                             color: #1b1b32;
                //                             letter-spacing: 10px;
                //                         "
                //                         >
                //                         0000
                //                         </h2>
                //                     </div>
                //                     <br /><br />
                //                     <p style="font-size: 14px; padding: 0; margin: 0">
                //                         Please use the following code to login into your account.
                //                     </p>
                //                     <br />
                            
                //                     <p style="font-size: 14px; padding: 0; margin: 0">
                //                         <span style="font-weight: 700">Note: </span>Do not share this code
                //                         with anyone.
                //                     </p>
                //                     <br />
                            
                //                     <br />
                //                     </div>
                //                     <div style="padding: 20px 5%; background: #fce8bc; text-align: center">
                //                     <a href="#" style="color: #000; text-decoration: none"
                //                         ><small style="font-size: 12px"
                //                         >www.strivon.academy <br />© 2023</small
                //                         ></a
                //                     >
                //                     </div>
                //                 </div>
                //                 </body>
                //             </html>';

                // mail($to, $subject, $message, $headers);
                

                // redirect to otp page
                header("Location: ../adminotp.php");
                exit();
                
            }
        } else{
            header("Location: ../adminlogin.php?incorrectUsername");
			exit();
        }






    }
















}