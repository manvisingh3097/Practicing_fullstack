function printMark(obj){
    let [first , second] = obj.marks
    console.log(first)
    console.log(second)

}

let students = {name: 'David', id: 1, marks:[89, 76, 45, 83, 93]}

printMark(students)