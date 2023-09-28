// window.addEventListener("keydown" , (event)=>{
   
//     if (event.key==="b") {
//         alert("bomb")
//     }
//     else{
//         console.log(event.key)
//     }

// })


// const form = document.querySelector("#form")

// form.addEventListener("submit" , (event) => {
//     event.preventDefault();
//     const values = Array.from(event.target);
//     const year = values[1].value;
//     var cur_year = new Date().getFullYear();
//     if ((cur_year-year)>=18) {
//         alert("eligible to vote")
//     }
//     else{
//         alert("not eligible to vote")
//     }


// })

// const form = document.querySelector("#form")


// form.addEventListener("submit",(event)=>{
//     event.preventDefault(); 
//     const values = Array.from(event.target);
//     const to_ = values[0].value;
//     const body = values[1].value;
//     const from = values[2].value;
    


//     alert(`Hello, ${to_}! I am emailing you because ${body}.  I am hoping you would revert back positively.

//     Regards,
//     ${from}`)
// })

//
//The %age of tip should not exceed 10%.
//If the total bill amount is less than 500, don’t split the bill.
//Number of people can never be less than 2. 
//


const form = document.querySelector("#form")
const h1 = document.getElementById("h1")
const h2 = document.getElementById("h2")
const h3 = document.getElementById("h3")

form.addEventListener("submit",(event)=>{
    event.preventDefault(); 
    const values = Array.from(event.target);
    const bill = values[0].value;
    const perc = values[1].value;
    const num_ppl = values[2].value;


    
    if (perc >10){
        alert("percentage cannot be more than 10");
        return
    }
    if (num_ppl<2){
        alert("number of people cannnot be less than 2");
        return
    }

    var total = parseInt(bill) + (parseInt(bill) *(parseFloat(perc)/100));
    var split = total/num_ppl;
    var tip = (bill *(perc/100))/num_ppl;
    h1.innerText = total
    h2.innerText = split
    h3.innerText = tip


   
})



