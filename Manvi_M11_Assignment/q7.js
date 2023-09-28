 function flip(...num){
    let res = []
    for (let each of num){
        res.push([1,0][each])
    }
    console.log(res)
 }

 flip(0, 1, 1, 1, 0, 0, 1 )