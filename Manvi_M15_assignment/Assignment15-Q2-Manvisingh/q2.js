class stack{
    constructor(){
        this.items=[]; // 1,2,3,4
    }
    add(element){
        return this.items.push(element);
    }
    //4,3,2,1

    // printStack function
    showcast(ui_tag){

        while (ui_tag.hasChildNodes())
            ui_tag.removeChild(ui_tag.firstChild)

        // const showw = this.items;
        for (var i = 0; i < this.items.length; i++){
            
            const li_tag = document.createElement("li");
            li_tag.innerText=this.items[i];
            ui_tag.append(li_tag);
            console.log( this.items[i]);
        }
        return ui_tag;
    }

}
// creating an instance of stack and assigning it to variable moviecasts
const moviecasts = new stack();

const textfield = document.getElementById("membersnames")

var addbutton = document.getElementById("addbtn")

var showcastbtn = document.getElementById("showcastbtn")
const ui_tag = document.getElementById("ultag")

addbtn.addEventListener("click" , ()=>{
    
    const elements  = textfield.value;
    moviecasts.add(elements);
    console.log(moviecasts.items);

});

showcastbtn.addEventListener("click" , ()=>{
    moviecasts.showcast(ui_tag);
    
    
});

