const goods = [

    ["Apples", "fruit"],
 
    ["Milk 3.2%", "dairy products"],
 
    ["Potato", "vegetables"],
 
    ["Brinjal", "vegetables"],
 
    ["Mango", "fruit"],
 
    ["Cheese", "dairy products"]
 
 ]
// go through each item, an item is a combination of goods and category, maintain a list of 

let cat = [];

for (const each of goods) {
    if (cat.includes(each[1])){
        continue
    }
    else{
        cat.push(each[1])
    }
}
//cat = ["fruiits","d","v"]
for (const i of cat) {
    console.log(i.toUpperCase()) //i = fruit
    for (const e of goods) { //e = ["Apples", "fruit"],
        if (e[1]==i){
            console.log(e[0]) //apple,mango
        }
    }
}


