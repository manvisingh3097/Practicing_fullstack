let promocode = window.prompt("enter a promo code");

while(true){
    if (promocode=="HOLIDAYS22")
    {
        console.log("10% discount has been applied");
        break;
    }

    else
    {
        console.log("incorrect! try again");
        promocode = window.prompt("enter a promo code");
    }
}