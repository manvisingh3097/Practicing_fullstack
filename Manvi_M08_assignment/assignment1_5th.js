function largestnumber(arr=[3, 44, 1, 2, 10, 6, 77]) {

    let firstthighest = 0;
    let secondlargestnumber=0;
    let thirdlargestnumber = 0;
    

    for (let i = 0; i < arr.length; i++) {
        if(arr[i]>firstthighest){
        thirdlargestnumber=secondlargestnumber;
        secondlargestnumber=firstthighest;
        firstthighest=arr[i];
    }
    else if(arr[i]>secondlargestnumber) {
        thirdlargestnumber=secondlargestnumber;
        secondlargestnumber=arr[i];

    }
    else if (arr[i]>thirdlargestnumber){
        thirdlargestnumber=arr[i];
    }
}
console.log(firstthighest,secondlargestnumber,thirdlargestnumber)
}
largestnumber()