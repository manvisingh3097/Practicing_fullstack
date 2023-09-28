let login = prompt("enter username");
let forbidden_character  = "=?*^$№@";
let isforbidden=false;

for (let i=0 ; i<forbidden_character.length; i++ ) {
    if (login.includes(forbidden_character[i])){
    console.log(`This symbol ${forbidden_character[i]}is forbiden`);
    isforbidden=true
    break

}

}
if(!isforbidden){
    console.log("correct");
}