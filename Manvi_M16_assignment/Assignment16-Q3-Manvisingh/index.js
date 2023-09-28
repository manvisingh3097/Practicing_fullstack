productIDs = [10, 12, 15, 19, 24, 28, 30, 45, 50, 65, 77, 99]

user_input = 99;
start = 0;
end = productIDs.length-1;

function neww(productIDs , user_input){
    while(start<=end){
        let middle = Math.floor((start+end)/2);
    
        if(productIDs[middle]===user_input){
            return middle; 
        }
        else if (productIDs[middle]>user_input){
    
            end = middle-1;
           
        }
        else {
            start = middle+1;  
        }
        
    }
    return -1;  
}

console.log(neww(productIDs,user_input));



