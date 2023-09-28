let taste = window.prompt("which taste of cake you want");
let num = parseInt(window.prompt("number of customers"));
if (num>0 && taste.length>0)
{
    let cake = "";
    if(taste=="chocolate" ) {
        cake= "Chocolate Dream";

    }   
    else if (taste=="Berries" || taste== "fruits" ) {
        cake= "Tropic Pleasure";

    }   

    else if (taste=="nuts" ) {
        cake= "Cupcake Set";
    }
    else if (taste=="Cheesecake" ) {
        cake= "Cupcake Set";
    }
    else if (taste=="Cheesecake" ) {
        cake= "Creamy Cheesecake";
    }
    else {
        cake= "cupcake set";
    }

    let size = "";

    if (num>=1 && num<=2)
    {
        size="Small"
    }
    else if(num>=3 && num<=5)
    {
        size = "Medium"
    }
    else {
    size="Large"
    }
    console.log(`${size} , ${cake}`)

}