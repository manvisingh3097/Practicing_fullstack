
total = 0
while (true){
    let input = parseInt(window.prompt("enter a value"));
     total+=parseInt(input);
     if (input==0){
        break;
    }
}
if (total>20000) {
    let discountedtotal = total-(30/100)*total
    console.log(`The total sum to pay (with the activated discount) is ${discountedtotal}`);
}
else{
    console.log(`The total sum to pay (without discount) is ${total}`);
}