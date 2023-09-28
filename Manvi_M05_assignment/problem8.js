let string = window.prompt("Enter the sentence");

let fix = "In the park, you can see a ";
let end = " and a ";

let filter_string = string.slice(fix.length,string.indexOf(end));
let last_animal = string.slice(string.indexOf(end)+end.length,-1);
let list_animals = filter_string.split(" ")
console.log(list_animals[0].slice(0,-1).toUpperCase())
console.log(list_animals[1].slice(0,-1).toUpperCase())
console.log(list_animals[2].toUpperCase())
console.log(last_animal.toUpperCase())



