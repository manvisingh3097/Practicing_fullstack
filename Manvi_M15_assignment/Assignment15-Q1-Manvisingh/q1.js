class orders{
    constructor(){
        this.items=[];      
    }
    add(element){    
        return this.items.push(element);   
    }
    clear(){
        return this.items=[];
    }

}

var cart = new orders()


const checkout = document.querySelector("#checkout")
//const finalcart = document.querySelector("#finalcart")
let finalcart = document.getElementById("finalcart");
let menulist = document.getElementById("menulist");

const list_items = ["apple","iphone","samsung"];

list_items.forEach(element => {
    //create a new li tag
    let li_item = document.createElement("li");
    //add element in li tag
    let h3_tag = document.createElement("h3");
    h3_tag.innerText = element;
    li_item.append(h3_tag);
    //append li tag in ul
    let btn = document.createElement("button");
    btn.setAttribute("class","btn");
    btn.innerText="Add";
    li_item.appendChild(btn)
    menulist.append(li_item);
});

const all_btns = document.querySelectorAll(".btn");

for (var i = 0; i < all_btns.length; i++) {
    all_btns[i].addEventListener('click', function() {
        let select = this.parentElement.childNodes[0].innerText;
        console.log("You clicked:", select );
        cart.add(select);
        //create a new li tag
        let newlist1 = document.createElement("li")
        //add element in li tag
        newlist1.innerText = select
        //append li tag in ul
        finalcart.prepend(newlist1);
        });
}




checkout.addEventListener("click",()=>{
    cart.clear();
    finalcart.innerHTML = '';
})
