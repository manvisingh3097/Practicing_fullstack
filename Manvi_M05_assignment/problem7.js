let pname = window.prompt("Enter product name");
let num_items = window.prompt("Number of Items");

let price = window.prompt("price of the product");
let discount = window.prompt("discount on total cart");
let subtotal = num_items * price
let final = subtotal-(subtotal*(discount/100))

console.log(`You have successfully purchased ${num_items} products titled \“${pname}\”.
Amount before the discount is Rs. ${subtotal}.
Amount after the ${discount}% discount is Rs. ${final}.`)