let arrayofobjects = [
    {
        name:"steve jobs",
        company: "apple"
    },
    {
        name :"Mark Zuckerberg",
        company: "Meta"
    },
    {
        name:"Parag Agrawal",
        company: "twitter"
    },
    {
        name:"sundar pichai",
        company: "google"
    },
    {
        name:"satya nadella",
        company: "microsoft"
    }
]
for (let i=0 ; i<arrayofobjects.length ; i++){
    console.log(arrayofobjects[i].name + " is the CEO Of " + arrayofobjects[i].company )
}