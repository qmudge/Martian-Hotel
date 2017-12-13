/*FILE NAME: flashHeading.js
AUTHOR: Quintin Mudge
DATE CREATED: 05/09/2016
OPERATING SYSTEM: Microsoft Windows
VERSION: Windows 7 Pro
DESC OF CODE: Color changing flash heading code for all pages.
*/

     //Sets colors to be displayed                      
     var spectrum = ['#f00', '#f66', '#969', '#00F'];
     var cycle = spectrum.length-1;

     // Cycle speed (milliseconds: lower value = faster)
     var speed = 300;

     // Cycle to the next color in [spectrum] at a rate of [speed] ms, then repeat at end of array.
     var i = 0;
     window.setInterval(function(){
     document.getElementById('flashtext').style.color = spectrum[i];
     if (i < cycle) i++;
     else i = 0;
     }, speed);
          