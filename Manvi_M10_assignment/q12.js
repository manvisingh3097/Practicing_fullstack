const friendsArray = [

    { id: 1, name: "Abhay", amount: 2000 },

    { id: 2, name: "Bunty", amount: 3000 },

    { id: 3, name: "Chinki", amount: 5900 },

    { id: 4, name: "Dimple", amount: 1000 },

    { id: 5, name: "Erica", amount: 2370 }

];

let sum = friendsArray.reduce((acc , each) => {return acc+each.amount},0)
console.log(sum)

friendsArray.sort((Object1 , Object2)=> Object1.amount - Object2.amount)
console.log(friendsArray)

friendsArray.sort((Object2 , Object1)=> Object2.amount - Object1.amount)
console.log(friendsArray)

console.log(friendsArray[0])

console.log(friendsArray[friendsArray.length-1])