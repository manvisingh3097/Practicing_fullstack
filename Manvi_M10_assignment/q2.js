let addnum = function (par1 , par2 ){
    let sum = par1+par2()
    return sum
    
}
let funct = ()=>{
    return 10
}

console.log(addnum(10,funct))