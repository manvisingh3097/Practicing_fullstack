let employees = [{

    firstName: 'Steve',

    lastName: 'Rogers',

    age: 27,

    joinedDate: 'December 15, 2017'

}, {

    firstName: 'Tony',

    lastName: 'Stark',

    age: 25,

    joinedDate: 'January 15, 2019'

}, {

    firstName: 'Bruce',

    lastName: 'Banner',

    age: 30,

    joinedDate: 'February 15, 2011'

}];
const newemployee1 = {
    firstName: 'black',

    lastName: 'widow',

    age: 27,

    joinedDate: 'December 25, 2007'
}

const newemployee2 = {
    firstName : "Winter",

    lastName : "Soldier",

    age : 27,

    joinedDate : "October 15, 2007"
}

employees.push(newemployee1);
employees.unshift(newemployee2); 
console.log("Output1:")
console.log(`this is ${employees[0].firstName} ${employees[0].lastName}, aged ${employees[0].age} joined the company on ${employees[0].joinedDate}`)
console.log(`this is ${employees[1].firstName} ${employees[1].lastName}, aged ${employees[1].age} joined the company on ${employees[1].joinedDate}`)
console.log(`this is ${employees[2].firstName} ${employees[2].lastName}, aged ${employees[2].age} joined the company on ${employees[2].joinedDate}`)
console.log(`this is ${employees[3].firstName} ${employees[3].lastName}, aged ${employees[3].age} joined the company on ${employees[3].joinedDate}`)
console.log(`this is ${employees[4].firstName} ${employees[4].lastName}, aged ${employees[4].age} joined the company on ${employees[4].joinedDate}`)
console.log(``)

// , aged 27 joined the company on October 15, 2007
console.log("Output2:")

employees.forEach(output => {
    output.joinedDate = "December 13, 2021"
})

console.log(`this is ${employees[0].firstName} ${employees[0].lastName}, aged ${employees[0].age} joined the company on ${employees[0].joinedDate}`)
console.log(`this is ${employees[1].firstName} ${employees[1].lastName}, aged ${employees[1].age} joined the company on ${employees[1].joinedDate}`)
console.log(`this is ${employees[2].firstName} ${employees[2].lastName}, aged ${employees[2].age} joined the company on ${employees[2].joinedDate}`)
console.log(`this is ${employees[3].firstName} ${employees[3].lastName}, aged ${employees[3].age} joined the company on ${employees[3].joinedDate}`)
console.log(`this is ${employees[4].firstName} ${employees[4].lastName}, aged ${employees[4].age} joined the company on ${employees[4].joinedDate}`)
