let books = window.prompt("enter all books divided by commas")
let arr = books.split(", ")

console.log("Your items to buy:")
if (arr.includes("The Little Prince") || arr.includes("Pinocchio")) {
    console.log(`A special gift — set of stickers`)
}

for (const each of arr) {
    console.log(each)
}