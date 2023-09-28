const string = window.prompt("Enter the sentence");
const word = window.prompt("enter the word");

let first_occ = string.indexOf(word);

let last_occ = string.lastIndexOf(word);

console.log(`The position of first and last letter for first occurrence of the word \“${word}\” is ${first_occ} and ${first_occ+word.length-1}, and the position of letters for its last occurrence is ${last_occ} and ${last_occ+word.length-1}.`);



