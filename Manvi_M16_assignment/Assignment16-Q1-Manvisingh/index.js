


var clacbtn = document.getElementById("calcbtn");

clacbtn.addEventListener("click",()=>{

    //You need to read the total bill amount from the user
    var total_bill = document.getElementById("value_g").value;

    var result_para = document.getElementById("res_para");
    let discount 
    //If the total bill amount is more than Rs. 5000, apply a 20% discount
    if (total_bill >5000){
        discount = 20;
    }
    // If the total bill amount is more than Rs. 3000, apply a 15% discount
    else if (total_bill>3000){
        discount = 15;
    }
    //If the total bill amount is more than Rs. 2000, apply a 10% discount
    else if (total_bill>2000){
        discount = 10;
    }
    else{
        discount = 0;
    }
    //Calculate the discount amount according to the criteria mentioned above
    console.log(total_bill)
    console.log(discount)
    var final = total_bill - ((total_bill*discount)/100)
    //Display the final amount after subtracting the discount amount from the bill amount
    result_para.innerText=final;
    console.log(final);
})

