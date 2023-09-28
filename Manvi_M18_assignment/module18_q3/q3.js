let array = [2, 1, 2, 2, 2, 3, 4, 2];
move=2;
count=0;

function instaces(array , move){
    for (let index = 0; index < array.length-1; index++) {
        
        if(array[index]!==2){
            array[count++] = array[index];
        }  
    }

    while(count<array.length-1){
        array[count++] = 2;
    }

}

instaces(array);
console.log(array); 

