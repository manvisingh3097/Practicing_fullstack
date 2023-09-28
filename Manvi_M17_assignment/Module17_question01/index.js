var arr = [1500, 1200, 786, 450, 2000, 2300, 546, 780, 800, 900, 2000];

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length-i-1; j++) {
       if (arr[j]>arr[j+1]) {
        var temp = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = temp;

       }
       
        
    }
    
}
console.log(arr);