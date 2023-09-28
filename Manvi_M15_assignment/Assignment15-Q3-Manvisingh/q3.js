//w =  [{name:h1,from:bom,to:lko,ticket_id:1},{name:manvi,from:lko,to:hyd,ticket_id:2 }]

class queue{
    constructor(){
        this.order=[];
        this.details = []
    }

    add(element , ticket_id){
        this.order.push(ticket_id);
        this.details.push(element);
    }
    search(ticket_id){
        let searchelement 

        this.details.forEach(element => {
            if (ticket_id==element.ticket_id){
                searchelement=element;
            }
        });

        return searchelement;
    }
}

var t = new queue()

var myForm1 = document.getElementById("Busticketapp");

const searchbtn = document.getElementById("Searchbtn")

myForm1.addEventListener("submit" , function(event){


    event.preventDefault();

    var formData = new FormData(myForm1);
    var firstnamevar = formData.get("firstname");
    var fromvar = formData.get("from");
    var tovar = formData.get("to");
    var ticket_id_var=Math.floor(Math.random()*10000);
    var element = {
        name:firstnamevar,from:fromvar,to:tovar,ticket_id:ticket_id_var
    }
    t.add(element,ticket_id_var);
    console.log(t.order);
    var newtag = document.getElementById("p_id");
    newtag.innerText = t.order;



})

searchbtn.addEventListener("click",()=>{
    var inp_id = document.getElementById("searchbox");
    var val = inp_id.value;
    console.log(t.search(val))
    var select = t.search(val);
    var iddetails = document.getElementById("p_details");
    var text = "";
    for (const key in select) {
        if (select.hasOwnProperty(key)) {
            console.log(key)
            const element = select[key];
            console.log(element)
            text = text + key + " : " + element +"\n";
                }
    }
    iddetails.innerText = text;
    
})



// var e = {
//     name:"h1",from:"bom",to:"lko",ticket_id:1
// } 
// var w2 = {
//     name:"h3",from:"bom1",to:"lko",ticket_id:24
// }

// t.add(e,34)
// t.add(w2,24)
// console.log(t.details)
// const v = t.search(24)
// console.log(v)
