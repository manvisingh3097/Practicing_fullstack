let profit = parseInt(window.prompt("enter today\'s profit"));
let sum= 0;

while(!(profit<=0))
{
    
    sum = sum +profit;
    
    profit = parseInt(window.prompt("enter today\'s profit"));
    
}
console.log(`The total profit is: ${sum} INR`);

