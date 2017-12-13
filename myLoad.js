
/*FILE NAME: myLoad.js
AUTHOR: Quintin Mudge
DATE CREATED: 09/09/2016
OPERATING SYSTEM: Win32
VERSION: Windows 7 Pro
DESC OF CODE: Form validation code
 */
                                         
     //create function myLoad() for executing load event
     function myLoad(){                    
     guest = document.getElementById("guest");
     dateArrive = document.getElementById("dateArrive");
     timeArrive = document.getElementById("timeArrive");
     dateDepart = document.getElementById("dateDepart");
     timeDepart = document.getElementById("timeDepart");
     firstName = document.getElementById("fName");
     lastName = document.getElementById("lName");
     email = document.getElementById("mail");
     telNumber = document.getElementById("telNumber");
     homeAddress = document.getElementById("homeAddress");
     
                         
     //adding an event listener to the input type to validate the input-data 
     guest.addEventListener("input", 
     validation, false);
     dateArrive.addEventListener("input",
     validation, false);
     timeArrive.addEventListener("input",
     validation, false);
     dateDepart.addEventListener("input",
     validation, false);
     timeDepart.addEventListener("input",
     validation, false);
     firstName.addEventListener("input",
     validation, false);
     lastName.addEventListener("input",
     validation, false);
     email.addEventListener("input",
     validation, false);
     telNumber.addEventListener("input",
     validation, false);
     homeAddress.addEventListener("input",
     validation, false);
     
     //calling function validation()
     validation();
     
     //adding an event listener to the sendIt() function for valid elements
     document.getElementById("send").
     addEventListener("click", sendIt, false);
}
     //create function validation
     function validation(){                   
                                             
     //use if else statement to check for empty input-data
     if(guest.value == ''){
     
     //if input-data is empty throw an error message
     guest.setCustomValidity('Enter a number');
     guest.style.background = "gray";
     }else{
     //else set error message to empty string
     guest.setCustomValidity('');
     guest.style.background = "#00FFFF";
}
     
     // if else statement to check for empty input-data
     if(dateArrive.value == ''){
     
     //if input-data is empty throw an error message
     dateArrive.setCustomValidity('Enter a date');
     dateArrive.style.background = "gray";
     }else{
     //else set error message to empty string
     dateArrive.setCustomValidity('');
     dateArrive.style.background = "#00FFFF";
}
     
     // if else statement to check for empty input-data
     if(timeArrive.value == ''){
     
     //if input-data is empty throw an error message
     timeArrive.setCustomValidity('Enter a time');
     timeArrive.style.background = "gray";
     }else{
     //else set error message to empty string
     timeArrive.setCustomValidity('');
     timeArrive.style.background = "#00FFFF";
}
     
     // if else statement to check for empty input-data-->
     if(dateDepart.value == '' || dateDepart.value <= dateArrive.value){
     
     //if input-data is empty throw an error message 
     dateDepart.setCustomValidity('Enter a valid date');
     dateDepart.style.background = "gray";
     }else{
     //else set error message to empty string
     dateDepart.setCustomValidity('');
     dateDepart.style.background = "#00FFFF";
}
     
     //use if else statement to check for empty input-data
     if(timeDepart.value == ''){
     
     //if input-data is empty throw an error message 
     timeDepart.setCustomValidity('Enter a time');
     timeDepart.style.background = "gray";
     }else{
     //else set error message to empty string
     timeDepart.setCustomValidity('');
     timeDepart.style.background = "#00FFFF";
}
     
     //use if else statement to check for empty input-data
     if(firstName.value == ''){
     
     //if input-data is empty throw an error message
     firstName.setCustomValidity('Insert your first name.');
     firstName.style.background = "gray";
     }else{
     //else set error message to empty string
     firstName.setCustomValidity('');
     firstName.style.background = "#00FFFF";
} 
     
     // if else statement to check for empty input-data
     if(lastName.value == ''){
     
     //if input-data is empty throw an error message
     lastName.setCustomValidity('Insert your surname');
     lastName.style.background = "gray";
     }else{
     //else set error message to empty string
     lastName.setCustomValidity('');
     lastName.style.background = "#00FFFF";
}
     
     //use if else statement to check for empty input-data
     if(email.value == '') {
     
     //if input-data is empty throw an error message
     email.setCustomValidity('Fill in your email address');
     email.style.background = "gray";
     }else{
     //else set error message to empty string
     email.setCustomValidity('');
     email.style.background = "#00FFFF";
}
     
     //use if else statement to check for empty input-data
     if(telNumber.value == ''){
     
     //if input-data is empty throw an error message
     telNumber.setCustomValidity('Insert phone number.');
     telNumber.style.background = "gray";
     }else{
     //else set error message to empty string
     telNumber.setCustomValidity('');
     telNumber.style.background = "#00FFFF";
}
     
     //use if else statement to check for empty input-data
     if(homeAddress.value == ''){
     
     //if input-data is empty throw an error message
     homeAddress.setCustomValidity('Fill in your home address.');
     homeAddress.style.background = "gray";
     }else{
     //else set error message to empty string
     homeAddress.setCustomValidity('');
     homeAddress.style.background = "#00FFFF";
     }
}
     //create function sendIt()
     function sendIt(){
     
     //assign a variable(valid) to the form name and checkValidity
     var valid = document.form1.checkValidity();
     
     
     //Event handler to confirm submitting form
     
     if(valid){
     document.location.href = "#focus";
     }                                      
}
     window.addEventListener("load", myLoad, false);