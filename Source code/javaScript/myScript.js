
/*FILE NAME: myScript.js
AUTHOR: Quintin Mudge
DATE CREATED: 10/09/2016
OPERATING SYSTEM: Win32
VERSION: Windows 7 Pro
DESC OF CODE: Submit a form without refreshing the page using ajax and creates a function to send a message to the iframe.
*/

//Set a selector for the form
$('form.myForm').on('submit', function() {
     var that = $(this),
     url = that.attr('action'),
     type = that.attr('method'),
     data = {};
 
//Loops through each element with name attribute  
    that.find('[name]').each(function(index, value) {
        var that = $(this),
        name = that.attr('name'),
        value = that.val();
        
        data[name]=value;
    });

//specifies the url request    
    $.ajax({
         url: url,
         type: type,
         data: data,
         
//Response back for output on submit.php page
         success: function(response) {
              $('.result').html(data);
              document.getElementById("submitSuccess").innerHTML = "Submission completed"; //Makes the form disappear once submitted              
              console.log(response);
         }
    });
    
    return false;
});

     //Create function sendMsg ()  
     function sendMsg(show,hide) {
          
              //Add variable iframe to get data content
              var iframe = document.getElementById("iframe");

              //Selects the hidden text that must be shown
              document.getElementById(show).className = "show";
              
              //Selects which data to refelect in iframe                                                   
              iframe.contentWindow.postMessage(document
              .getElementById("room").value,
              "http://localhost:4183/");
                    
              iframe.contentWindow.postMessage(document
              .getElementById("dateArrive").value,
              "http://localhost:4183/");
                    
              iframe.contentWindow.postMessage(document
              .getElementById("timeArrive").value,
              "http://localhost:4183/");
                    
              iframe.contentWindow.postMessage(document
              .getElementById("dateDepart").value,
              "http://localhost:4183/");
                    
              iframe.contentWindow.postMessage(document
              .getElementById("timeDepart").value,
              "http://localhost:4183/");
                    
              iframe.contentWindow.postMessage(document
              .getElementById("fName").value,
              "http://localhost:4183/");
                    
              iframe.contentWindow.postMessage(document
              .getElementById("lName").value,
              "http://localhost:4183/");
                    
}
     