let cartItems = {

    shampoo: {
 
        quantity: 5,
 
        price: 278
 
    },
 
    butter: {
 
        quantity: 4,
 
        price: 80
 
    },
 
    oil: {
 
        quantity: 2,
 
        price: 142
 
    }
 
 }

function calculateCartTotal(cartItems) {
    let total = 0;
    for (let item in cartItems) {
        total += cartItems[item].quantity * cartItems[item].price;
    }
    return total;
}

console.log(`Total Cart value is ${calculateCartTotal(cartItems)}`);
