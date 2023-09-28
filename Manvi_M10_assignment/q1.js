


let mainfunc =  function (num1){
    console.log(typeof (num1))
    num1()
}

let secondfunc = function(){
    console.log("hello")
}
mainfunc(secondfunc)