function findduplicate(array) {
    let duplicate = {
        num : 0,
        position : 0,
        index : 0
    };
    let seen = {};
    for (let i = 0 ; i < array.length ; i++) {
        if (array[i] in seen) {
            duplicate.num = array[i];
            duplicate.position = i + 1;
            duplicate.index = seen[array[i]];
            break;
        } else {
            seen[array[i]] = i + 1;
        }
    }
    if (duplicate.num === 0) {
        return "no duplicate found in the array.";
    }
    return `the duplicate number is ${duplicate.num} and its position in the list is ${duplicate.position} with the index ${duplicate.index}.`;
}
console.log(findduplicate([2,3,3,4]));
