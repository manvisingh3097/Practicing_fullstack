var objects = [{
    name : "john" , 
    city : "delhi"
},
{
    name : "tony",
    city : "mumbai"
},
{
    name : "Steve",
    city : "bangalore"
}]
objects.forEach(object =>{
    object.onelineintro=() =>{
        return(`this is ${object.name} from ${object.city}`)};
})
console.log(objects[0].onelineintro());
console.log(objects[1].onelineintro());
console.log(objects[2].onelineintro());