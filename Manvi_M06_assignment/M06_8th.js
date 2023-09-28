let main = prompt("enter a main character's name");

while (main!=0){

    if (main== "Peter Parker") {
        console.log("Spider-Man") ;   
    }
    else if (main=="Fiona"){
        console.log("Shrek");
    }
    else if (main=="jack sparrow"){
        console.log("The Pirates of the Caribbean");
    }
    else if (main=="Master Shifu"){
        console.log("Kung Fu Panda");
    }
    else 
    { 
        console.log("I don\’t know him/her yet");
    }
    main = prompt("enter a main character's name");
}


