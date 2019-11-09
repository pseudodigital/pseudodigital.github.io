function start()
{ // This is the first function to be executed.
  var output = document.getElementById("display");
  var currentDate = new Date();

  output.innerHTML = "" + getTimeAndDateAsString(currentDate);
setTimeout(function(){
   window.location.reload(1);
}, 5000);
} // end function start





// This function handles leading zeros for
// the minutes portion of the time.
function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

// This function returns the 
// time and date as a string.
function getTimeAndDateAsString(dateTimeInput)
{   
  var listOfMonths = new Array("January","February","March","April","May","June","July", "August","September","October","November","December");
  var amOrPm = "AM";
  var hours = dateTimeInput.getHours();
  if (hours >= 12)
  {
    amOrPm = "PM";
    hours -= 12;
  }
  var minutes = pad(dateTimeInput.getMinutes(), 2);
  var month = listOfMonths[dateTimeInput.getMonth()];
  var date = dateTimeInput.getDate();
  var year = dateTimeInput.getFullYear();
  
  return hours + ":"
    + minutes + " "
    + amOrPm + " "
    + month + " " 
    + date + " " 
    + year
    ;
}
  

window.addEventListener( "load", start, false ); 
