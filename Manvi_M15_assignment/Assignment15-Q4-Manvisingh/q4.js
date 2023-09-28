class Queue{
    constructor(){
        this.items = []
        this.balance = 25000;
        
        this.tail = 0;
    }
    Purchase(amountdebit){
        this.items[this.tail] = amountdebit; //[300,1000,-200]
        this.tail++;
        this.balance = this.balance - amountdebit; 
    }

    CheckAvailableBalance(){
        return this.balance;
    }
    
    // dequeue(item) {
    // const item = this.elements[this.head];
    // delete this.elements[this.head];
    // this.head++;
    

    ViewTransactions(){
        var new_list = []
        for (let index = this.items.length-1; index >=0; index--) {
            const element = this.items[index];
            new_list.push(element);
        }
        return new_list;
    }

}

var bankstatment = new Queue()

var avlblblnc = document.getElementById("avlblblnc")
var viewstm = document.getElementById("viewstm")
var Withdrawbtn = document.getElementById("Withdrawbtn")

viewstm.addEventListener("click" , ()=>
{
    var list_recs = bankstatment.ViewTransactions();
    const ui_tag = document.getElementById("statmentlist");
    ui_tag.innerText="";
    list_recs.forEach(element => {
        const li_tag = document.createElement("li")
        li_tag.innerText = element;
        ui_tag.append(li_tag)
    });
})

avlblblnc.addEventListener("click" , ()=>
{
    var aval_bal_p=document.getElementById("aval_bal_p");
    aval_bal_p.innerText = bankstatment.CheckAvailableBalance();
}
)
Withdrawbtn.addEventListener("click" , ()=>{
    let withdrawnamt = document.getElementById("amountdebit").value; 
    bankstatment.Purchase(withdrawnamt);
} )

