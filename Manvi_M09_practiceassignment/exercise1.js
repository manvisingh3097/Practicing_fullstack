// let  employee =
// {
//     firstname : "manvi " ,
//     lastname : "singh " ,
//     country : "india",
    
// }
// console.log(employee)
// employee.age = 24;
// employee.maritalstatus = "single";
// console.log(`this is ${employee.firstname} ${employee.lastname} from ${employee.country} and i'm just ${employee.age} and single`)

// function acceptvalues(){

//     let  name = prompt("enter your name");

//     let  age = prompt("enter your age");

//     let  city = prompt("enter your city");

//     createpersonobject(name , age , city)
// }

// function createpersonobject(name , age , city){

//     let person = {
//         name : "manvi singh",
//         age : 25,
//         city : "mumbai",
//         getintro : function(){
//             return`my name is ${this.name} aged ${this.age} from ${this.city}`
//         }

//     }
//     console.log(person.name)
//     console.log(person.getintro()) 
        
//     }
// acceptvalues();




// var personname = prompt("enter a name")
// var personage = parseInt(prompt("enter age"))
// var personcity = prompt("enter a city")

// let  character =
// {
//     name : personname ,
//     age : personage,
//     city : personcity
// }
// console.log(character)

// function submitdata(){
//     var person = {
//         name : simpleform.name.value,
//         age: simpleform.age.value,
//         city: simpleform.city.value
//     }
//     console.log(person)
// }



var num = [1,2,3,4]

console.log(num[2])

let todos =[
    {
        name:"have breakfast",
        iscompleted : true

    },
    {
        name:"have lunch",
        iscompleted : true
    },
    {
        name:"have dinner",
        iscompleted : true
    }
]
for (let i=0 ; i<todos.length ; i++){
    console.log(todos[i].name+ "---->" + todos[i]["iscompleted"])
}






















// character.designation="iron man"
// console.log(character)



// let employee13 = Object.assign(employee11 , employee12)
// console.log(employee13)

//     greet : function(){
//         return this.firstname  + this.lastname
//     }
    
// }
// let employee1 = Object.create(employee);
// employee1.country = "india"

// console.log(Object.entries(employee))
