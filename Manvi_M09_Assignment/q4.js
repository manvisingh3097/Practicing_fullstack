let arrayofobjects = [
    {
        firstName :"John",

        lastName :"Apple",

        age : "27",

        joinedDate : "December 15, 2017" 
    },

    {
        firstName :"Ana",

        lastName :"Rosy",

        age : "25",

        joinedDate : "January 15, 2019" 
    },

    {
        firstName :"Zion",

    lastName :"Albert",

    age : "30",

    joinedDate : "February 15, 2011" 
}

];

let arrayofobjects1 =  arrayofobjects.sort(); 

 for(let i=0 ; i<arrayofobjects1.length ; i++){
    console.log(`This is ${arrayofobjects1[i].firstName} ${arrayofobjects1[i].lastName}, aged ${arrayofobjects1[i].age} joined the company on ${arrayofobjects1[i].joinedDate}`);
 }