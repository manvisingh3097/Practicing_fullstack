function fullname (obcectperson){
    return obcectperson.firstName + " " + obcectperson.lastName;
}

let obcectperson = {
    firstName : "Steve",
    lastName :"Rogers",
    age: "58"
}
    
    console.log(fullname(obcectperson));