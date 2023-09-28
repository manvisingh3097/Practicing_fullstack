const loginform = document.querySelector("#form")


const validate = (formValues) => {

    let errors = {};

    const emailre = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    const passre = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/

    if (formValues.name.length==0){
        errors.name = "name field cannont be empty";
    }
    else if (formValues.name.length < 3||formValues.name.length>20) {
        errors.name = "name can not be less that 3 or greater than 20"
    }

    if (formValues.email.length==0) {
        errors.email = "Email cannot be empty.";
    }
    else if (!(emailre.exec(formValues.email))) {
        errors.email = "Please enter valid email";
    }

    if (formValues.pass.length==0){
        errors.pass = "Password cannot be empty.";
    }
    else if (formValues.pass.length<=6 || formValues.pass.length>=10 ){
        errors.pass = "Password must be between 6-10 characters long";
    }

    if (formValues.confirmpass != formValues.pass){
        errors.confirmpass = "Passwords don't match";
    }
   return errors


}

const nameError = document.querySelector('#nameerror');
const emailerror = document.querySelector('#emailerror');
const Passworderror = document.querySelector('#passwordError');
const confirmPassworderror = document.querySelector('#ConfirmpasswordError');


loginform.addEventListener("submit" , (event)=>{
    event.preventDefault(); 
    const values = Array.from(event.target);
    const name = values[0].value;
    const email = values[1].value;
    const pass = values[2].value;
    const confirmpass = values[3].value;

    let formValues = {name,email,pass,confirmpass};

    const errors = validate(formValues);
    console.log(errors);
    if (Object.keys(errors).length >0) {
        nameError.innerHTML=errors.name|| "";
        emailerror.innerHTML=errors.email|| "";
        Passworderror.innerHTML=errors.pass|| "";
        confirmPassworderror.innerHTML=errors.confirmpass|| "";
    }
    else{
        window.location = "signup.html" ;
    }

    }
)

