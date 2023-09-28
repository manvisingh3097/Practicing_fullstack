var change = document.querySelector("#colorchange")
const btn = document.querySelector("#colorbtn")
const showwbtn = document.querySelector("#showbutton")
const menuu = document.getElementById("menuid")
const shw = document.getElementById("showbutton")

showwbtn.addEventListener("click" , ()=>{

   var button_name = shw.textContent;

   menuu.classList.toggle("hide");
   if (button_name ==="hide menu"){
    showwbtn.textContent="show menu";
   }
   else{
    showwbtn.textContent="hide menu";
   }
   
   
   //menuu.style.backgroundColor="green";
})

btn.addEventListener("mouseover" , ()=>{
    btn.classList.replace("d1","d2");
})

btn.addEventListener("mouseout" , ()=>{
    btn.classList.replace("d2","d1");
})


function changeHeading(msg) {
    const head = document.getElementById("h2txt");
    head.textContent=msg;
}t


btn.addEventListener('click' , ()=>{

    
    var div1 = getComputedStyle(change);
    console.log(div1.width);
    //here we have to check the width and if ==230 then print header..
    if (parseInt(div1.width)==230) {
        change.style.backgroundColor="red"
        changeHeading("Stop now!")
    }
     if (parseInt(div1.width)>=250) {
        change.style.width = "10px";
        change.style.height ="10px";
        change.style.backgroundColor="blue";
        changeHeading("");
    }
    else{

    

        change.style.width = parseInt(div1.width)+20+"px";
        change.style.height = parseInt(div1.height)+20+"px";
        console.log(parseInt(div1.width));
    }
}
)