function submitData() {
    event.preventDefault(); // to prevent the form from reloading the page
    const form = document.getElementById("userForm");
    const fName = form.elements.Firstname.value;
    const lName = form.elements.Lastname.value;
    const email = form.elements.email.value;
    const city = form.elements.city.value;
    const gender = form.elements.gender.value;
  
    const user = {
      fName: fName,
      lName: lName,
      email: email,
      city: city,
      gender: gender,
    };
  
    console.log(
      `This is ${user.fName} ${user.lName}, ${user.gender} from ${user.city} and my email id is ${user.email}`
    );
  }
  