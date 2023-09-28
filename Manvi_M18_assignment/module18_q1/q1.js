Competitions = [

    ["“HTML”", "c#"],
    
    ["“C#”", "“Python”"],
    
    ["“Python”","”HTML”"],
    
    ]
results = [0,0,1]

function tournament(Competitions , results){
    let winner_team
    points = {};
    for (let index = 0; index < Competitions.length; index++) {
        const match = Competitions[index];
        // 
        if(results[index]==0){
            // check if match ka first index is already in points, if its there add 3 points to existing else add this as a new entry
            if (points[match[1]] == undefined){
                points[match[1]] = 3;
            }
            else{
                points[match[1]] = points[match[1]]+3
            }
        }
        else{
            if (points[match[0]] == undefined){
                points[match[0]] = 3;
            }
            else{
                points[match[0]] = points[match[0]]+3;
            }
        }
    }
    console.log(points)

    for (let index = 0; index < Object.values(points).length; index++) {
        var max_points = 0
        const element = Object.values(points)[index];
        if (element>max_points){
            winner_team = Object.keys(points)[index];
        }
    }

    return winner_team
}

console.log(tournament(Competitions,results))
