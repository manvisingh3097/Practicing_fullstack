
function getAge(birthdate) {
    const now = new Date();
    let years = now.getFullYear() - birthdate.getFullYear();
    let months = now.getMonth() - birthdate.getMonth();
    let days = now.getDate() - birthdate.getDate();
  
    // If the birth month hasn't occurred yet this year, subtract a year
    if (months < 0 || (months === 0 && days < 0)) {
      years--;
      months += 12;
    }
  
    // If the birth month has occurred but the birth day hasn't, subtract a month
    if (days < 0) {
      months--;
      days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    }
  
    return new_string = `Your Age is ${years} Years, ${months} Months & ${days} Days`;
  }

function changeHeading(msg) {
    const head = document.getElementById("resultingage");
    head.textContent=msg;
}


var myForm1 = document.getElementById("myForm1");

// Add a submit event listener to the form
myForm1.addEventListener("submit", function(event) {
  // Prevent the default form submission
  event.preventDefault();

  // Get the form data using the FormData object
  var formData = new FormData(myForm1);
  
  // Access the form data using the get() method
  var day = formData.get("day");
  var month = formData.get("month");
  var year = formData.get("year");

  if (day.length==0){
    changeHeading("Please provide Date")
    return;
  }

  if (month==0){
    changeHeading("Please provide Month")
    return;
  }

  if (year==0){
    changeHeading("Please provide Year")
    return;
  }

  let day_isnum = /^\d+$/.test(day);
  if (!day_isnum){
    changeHeading("Please provide valid Date")
    return;
  }
  let month_isnum = /^\d+$/.test(month);
  if (!month_isnum){
    changeHeading("Please provide valid Month")
    return;
  }
  let year_isnum = /^\d+$/.test(year);
  if (!year_isnum){
    changeHeading("Please provide valid Year")
    return;
  }
  if (!(year.length==4)){
     changeHeading("Provide year in format YYYY")
     return;
  }
  day = parseInt(day);
  month=parseInt(month);
  year = parseInt(year);

  if (day<=0) {
    changeHeading("Date cannot be 0 or less than 0")
    return;
  }
  if (month<=0) {
    changeHeading("Month cannot be 0 or less than 0")
    return;
  }
  if (year<=0) {
    changeHeading("Year cannot be 0 or less than 0")
    return;
  }

  
  if (month>12) {
    changeHeading("Please provide Month value in the range from 1 to 12")
    return;
  }
  days_in_month = {01:31,02:28,03:31,04:30,05:31,06:30,07:31,08:31,
    09:30,10:31,11:30,12:31}

  if (day>days_in_month[month]) {
    changeHeading("Please provide valid Date with respect to Month")
    return;
  }
  if (year<1 || year>new Date().getFullYear()) {
    changeHeading("Please Provide valid year in format YYYY")
    return;
  }
  
    


  // Do something with the form data
  console.log(" Day: " + day);
  console.log(" Month: " + month);
  console.log(" Year: " + year);
  given_date = `${year}/${month}/${day}`;
  let new_string = getAge(new Date(given_date));
  

  console.log(new_string);

  changeHeading(new_string)
  // Optionally, submit the form programmatically
  // myForm.submit();
});



