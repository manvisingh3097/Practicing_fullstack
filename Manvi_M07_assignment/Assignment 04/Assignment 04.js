let age = parseInt(window.prompt("enter your age "))
let Movies = ["The Batman" , "Don't Look Up" , "Against the Ice" , "Sing 2" , "Love Hard"]
console.log("Why wouldn’t you watch these movies:")
if (age>=18){
    console.log(Movies.join(","));
}
else{
    Movies[0]="coco";
    Movies[2]="free guy";
    console.log(Movies.join(","))
    
}