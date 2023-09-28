key_ids =  [110, 107, 105, 100, 103, 102, 108, 104, 106, 109, 101]

user_room = 102

// create a function which takes input an array of key_ids and an user_room
function find_key(key_ids , user_room) {

    //write a for loop to iterate through each in dex in the array
    for (let index = 0; index < key_ids.length; index++) {
        const element = key_ids[index];
        // if the user_room matches any of the element in the key id's return its index
        if (element === user_room){
            return index
        }
    }
    // if the user_room is not found in the array return -1
    return -1
}

//call the runction and print the result
console.log(find_key(key_ids,user_room))
