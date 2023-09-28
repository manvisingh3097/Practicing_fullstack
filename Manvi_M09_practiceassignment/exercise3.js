let objectperson =
 {
    firstName: "Bruce",
    lastName :"Banner",
    age: "55",
    character: "Hulk",
    fullname : function(){
        return this.firstName + " " + this.lastName;

    }
}
console.log(objectperson.fullname());

