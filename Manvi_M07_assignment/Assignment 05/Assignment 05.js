const participants = [

    "John M.", "David H.", "Rajesh A.",
 
    "Sunita S.", "Mohammed A.", "Ram J.",
 
    "Anita R.", "Suresh R.", "Sara M.",
 
    "Nick C.", "Lakshmi N."]

team1= [];
team2= [];
for (let index = 0; index < participants.length; index++) {
    const element = participants[index];
    if (Math.random() >0.5)
    {
        team1.push(element)
}
   else{
        team2.push(element)
   }

}

//team2 =  ['John M.', 'David H.', 'Rajesh A.', 'Sunita S.']
console.log(team1)
console.log(team2)


diff = Math.abs(team1.length-team2.length)

console.log("diff",diff)
let pop = ""
if (diff<=1){
    console.log(`Team1:${team1.join(",")}`)
    console.log(`Team2:${team2.join(",")}`)
}    
else {
    if (team1.length>team2.length){
        console.log("else..if")
        let move = team1.length-6
        for (let index = 0; index < move; index++) {
            pop = team1.pop()
            team2.push(pop)
        } 
    }
    else{
        console.log("else...else")
        let move = team2.length-6
        for (let index = 0; index < move; index++) {
            pop = team2.pop()
            team1.push(pop)
        } 
    }
    //if length of team1 > length of team2 take diff-1 elements from team1 and put in team 2
}

console.log(team1)
console.log(team2)
