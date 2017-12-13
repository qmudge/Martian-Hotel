<?php
/*FILE NAME: submit.php
AUTHOR: Quintin Mudge
DATE CREATED: 10/09/2016
OPERATING SYSTEM: Microsoft Windows
VERSION: Windows 7 Pro
DESC OF CODE: Checks that submitted data from the form has been set and echo's data.
*/

//checks whether the data which has been submitted has been set
if(isset($_POST['theTime'],$_POST['room'],$_POST['guest'],$_POST['dateArrive'],$_POST['timeArrive'],$_POST['dateDepart'],$_POST['timeDepart'],$_POST['fName'],
$_POST['lName'],$_POST['gender'],$_POST['age_Input_Id'],$_POST['mail'],$_POST['telNumber'],$_POST['homeAddress'],$_POST['numberList'])) {
     
     //Displays submitted data using echo
     echo 'Booking made on : '.$_POST['theTime']; echo ' - Room choice : '.$_POST['room']; echo ' - Number of guests : '.$_POST['guest']; 
     echo ' - Date arriving : '.$_POST['dateArrive']; echo ' - Time arriving : '.$_POST['timeArrive']; echo ' - Date of departure : '.$_POST['dateDepart']; 
     echo ' - Time departing : '.$_POST['timeDepart']; echo ' - First name : '.$_POST['fName']; echo ' - Surname : '.$_POST['lName']; 
     echo ' - Gender : '.$_POST['gender']; echo ' - Age : '.$_POST['age_Input_Id']; echo ' - Email Address : '.$_POST['mail']; 
     echo ' - Contact number : '.$_POST['telNumber']; echo ' - Residential address : '.$_POST['homeAddress']; echo ' - Favourite food  : '.$_POST['numberList']; 
}
?>