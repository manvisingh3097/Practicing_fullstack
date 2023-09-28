function insertionSort(arr) {

    for (let i = 1; i < arr.length; i++) {//1
        let currentvalue = arr[i];
        let j
        for (j = i-1 ; j>=0 && arr[j]>currentvalue ; j--) {//0
            arr[j+1] = arr[j]; 
            
        }
        
        arr[j+1] = currentvalue;
    }
    return arr;
}


  
var array = [67, 60, 58, 75, 53, 71, 63, 52, 53, 59, 57, 59, 63, 76, 53];
  
console.log(insertionSort(array));
  