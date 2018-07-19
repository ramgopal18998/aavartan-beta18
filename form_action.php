<?php
/***************************************************************************************************************************
  #JMD-4096#

  Form Action layout...
  1.Validation using Php of form data entered
    >if error occurs, message is displayed corresponding to the input field below it!

  2. Connect to Database...
    >if error occurs display corresponding error below the send button!

  3. After sucessful validation and connection, try to insert data in the table,
    >If (email-phone) pair is unique insert the data in table.
    >Otherwise, Display message below send button with a duplicacy of data message!

  4.At this step data has been inserted succesfully...
    >Display thank you message below the send button
    >Clear all the input fields to prevent resubmission of data if page is refreshed!

  5. Close the connection! Process Complete.
 ****************************************************************************************************************************/

//Function for trimming data in required format...
  function test_input($data) 
  {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  }

//Validation Error variables...
$name_error = $email_error = $phone_error = $message_error="";

//Input field variable assignment..
$name = $email = $phone = $message="";

$success = $message_server =""; //server message variables

//3..2..1..GO
if ($_SERVER["REQUEST_METHOD"] == "POST")
{
  $validation=0;

  //name validation
  if (empty($_POST["name"])) 
  {
    $name_error = "Name is required";
  } 
  else 
  {
    $name = test_input($_POST["name"]);
    // check if name only contains letters and whitespace
    if (!preg_match("/^[a-zA-Z ]*$/",$name)) 
    {
      $name_error = "Only letters and white space allowed"; 
    }
    else $validation++;
  }

  //email validation
  if (empty($_POST["email"])) 
  {
    $email_error = "Email is required";
  } 
  else 
  {
    $email = test_input($_POST["email"]);
    // check if e-mail address is well-formed
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) 
    {
      $email_error = "Invalid email format"; 
    }
    else $validation++;
  }

  //phone validation..
  if (empty($_POST["phone"])) 
  {
    $phone_error = "Phone is required";
  } 
  else 
  {
    $phone = test_input($_POST["phone"]);
    // check if e-mail address is well-formed
    if (!preg_match("/^(\d[\s-]?)?[\(\[\s-]{0,2}?\d{3}[\)\]\s-]{0,2}?\d{3}[\s-]?\d{4}$/i",$phone)) 
    {
      $phone_error = "Invalid phone number"; 
    }
    else $validation++;
  }

  //message validation..
  if (empty($_POST["message"])) 
  {
    $message_error = "Message is required";
  }
  else
  {
    $message = test_input($_POST["message"]);
    $validation++;
  }

  #validation Ends here..value should be 4 to procees...
  
  if($validation==4)
  {
    //Successful validation...
    //Connect to server using: Mysqli Procedural...
    
    /*
      >Database name:contactus
      >Table name:person
      >Table Elements: [Id(primary,autoincrement); Name Phone; Email; Message]

     */
    
    $server="localhost";
    $username="root";
    $password="";
    $dbname="contactus";

    //Establish Connection
    $conn = mysqli_connect($server, $username, $password, $dbname);

    //ensure connection...
    if (!$conn) //if connection fails Everybody Dies...
    {
        $message_server= "Connection failed: " . mysqli_connect_error();
        die();
    }

    //Connection Ensured.. *****Check for Duplicacy of (Email-Phone)****
    //Try inserting data into table
    
    $sql = "INSERT INTO person (NAME,EMAIL,MOBILE,MESSAGE) VALUES ('$name','$email','$phone','$message')";

    if (mysqli_query($conn, $sql))  //Data entered successfully
    {
        $message_server="";
        $success="Thank you for reaching out!!";
        echo "<script type='text/javascript'>alert('Thank you for reaching out!! Successful Submission :)')</script>";
        //clear post array and all text inputs...
        $_POST = array();
        $name = $email = $phone = $message = "";
    }

    else //Duplicate data found for (em-ph) pair..
    {
        $message_server="Email-Mobile pair already exits!!";
        echo "<script type='text/javascript'>alert('Unsuccessful Submission :( !! Please try again')</script>";
        echo "<script type='text/javascript'>alert('Probable Cause: Email or Mobile already used!')</script>";
        $success="";
        $email = $phone="";
    } 

    //Form action complete...Close connection
    mysqli_close($conn);
  }

}
  //Web-Team-****Technocracy- Aavartan'18*****//
?>
