let string1 = window.prompt("enter str1");
let string2 = window.prompt("enter str2");

let idx = string1.indexOf(string2);
// first turn to upper case and then slice, slice and then upper case doesnt work
console.log(string1.toUpperCase().slice(idx));
