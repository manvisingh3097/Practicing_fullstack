let str1 = window.prompt("enter a word");

// split will conver word to array of letters "manvi" ==>["m","a","n","v","i"]
// reverse will reverse array ["m","a","n","v","i"] ==> ["i","v","n","a","m"]
// join method will join back the array of letters to word ["i","v","n","a","m"]==> "ivnam"

let rev_str = str1.split("").reverse().join("");
rev_str = rev_str.toLowerCase();

console.log(rev_str[0].toUpperCase()+rev_str.slice(1));
