const guests = [

    ["001", "Johnson", "Table 2"],
 
    ["002", "Nisha", "Table 10"],
 
    ["003", "Vasav", "Table 1"],
 
    ["004", "Uddin", "Table 7"]
 
 ]
let inp = "" 
while (true){
    inp = window.prompt()
    if (inp == "0"){
        break
    }
    else{
        for (const each of guests) {
            if ((inp ==each[0])||(inp==each[1]))
            {
                console.log(`Welcome to the ${each[2]}`)
                guests.splice(guests.indexOf[each ] , 1)
            }   

        }
    }
}

