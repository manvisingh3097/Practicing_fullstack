medicineID = [88, 90, 92, 96, 101, 106, 110, 116, 117, 120];

function findMedicine(medicineID , key ){
//key =106

    start = 0; //0
    end = medicineID.length-1; //9
   

    while(start<end){ //true/false

        middle = Math.floor((start+end)/2); //4 / 7/ 5

        if(medicineID[middle]==key){  // 
            return true;

        }
        else if(medicineID[middle]>key){// 
            end = middle-1;//6/4
            
        }
        else{
            start = middle+1; //5
        }
    }
    
    return false;
    

}

console.log(findMedicine(medicineID ,101));
