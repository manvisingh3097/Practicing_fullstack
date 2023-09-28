function find2NumberSum(arr , target){
    let res = {}
    for(let x of arr){
        let y = target - x
        if ( y in res) {
            return[y,x]
        } else{
            res[x]= true
        }
    }
}
console.log(find2NumberSum([7, -5, 2, 0, 1, 14, 4], -5 ))