function person (){
    let array = {};
    let userdata = prompt("enter a name,age and room number separated by comma" );
    let newuser = userdata.split(",");

    array.username = newuser[0];
    array.age = newuser[1];
    array.roomno = newuser[2];
    array.intro = function(){
        return`I am ${this.username}, aged ${this.age}, living in room ${this.roomno}`;
    }
    

    console.log(array.intro());
    return array;
}

person()