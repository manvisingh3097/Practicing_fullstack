 
let marks = [23, 56, 78, 89, 43]
let num = 34

function findReverse(marks , num){
    let reversed = parseInt(num.toString().split("").reverse().join())
    console.log(marks.includes(reversed))
}

findReverse(marks , num)