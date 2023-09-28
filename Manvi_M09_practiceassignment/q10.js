function submitdata(){

let gendervalue = male.checked

  
  var person = {
    Firstname : basicform.Firstname.value,
    Lastname : basicform.Lastname.value,
    email : basicform.email.value,
    city : basicform.city.value,
    gender : gendervalue

  }
  console.log(`This is ${person.firstday} ${person.Lastname} ${person.gender}`)
}