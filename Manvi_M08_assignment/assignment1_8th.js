
function identifyerror(arry){

    for(let i=1; i < arry.length;i++){

        if( i !== arry[i-1]){
            let miss = i
            return(miss)
        }
    }
}


let arry =[1,2,3,4,5,7,8,9,10];

let output = identifyerror(arry);
console.log(`[${output},${output}]`)