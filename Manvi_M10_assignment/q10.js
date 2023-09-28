let func = (par1 , par2) => {
    par1.forEach(each => par2(each))
}
    
function isevenorodd(num){
    if (num%2==0){
        console.log(num + "is even")
    }else{
        console.log(num + "is odd")
    }
}
func([2, 4, 6, 5, 8, 7, 1, 9, 39, 22, 13, 40, 55],isevenorodd)