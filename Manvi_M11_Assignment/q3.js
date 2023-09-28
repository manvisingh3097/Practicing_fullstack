function joinarr(arr1 , arr2){
    let res = [...arr1 , ...arr2]
    console.log(res)
}

let array1 = [{name: "David", id: 1},{name: "Jon", id: 2}]

let array2 = [{name: "Ram", id: 4},{name: "Mohan", id: 3}]

joinarr(array1 , array2)