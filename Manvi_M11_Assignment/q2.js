function findSecondLargestNumber(arr){
    arr = arr.reverse()
    let [firstLargest , secondLargest] = arr
    console.log(secondLargest)
}

findSecondLargestNumber([2, 3, 5, 9, 11, 23])