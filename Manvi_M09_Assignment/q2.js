let display = [
    
    {

    author : "bill gates",

    title: "the road ahead",

    readingstatus: true

},

{
    author : "Steve Jobs",

    title : "Walter Isaacson",

   readingstatus: true
},

{
    author : "Suzanne Collins",

    title : "Mockingjay: The Final Book of The Hunger Games",

    readingstatus : false
}

];

display.forEach(display =>{
    if (display.readingstatus){
        console.log(`I already read  ${display.title} by ${display.author}`);
    }
    else
    {
        console.log(`I need to read  ${display.title} by ${display.author}`);
    }
    });