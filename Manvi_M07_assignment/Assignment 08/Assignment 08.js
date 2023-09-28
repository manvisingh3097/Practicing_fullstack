let inp = window.prompt("enter list of , seperated names")
let names = inp.split(", ")

let range = []
let num = 0


for (let index = 0; index < names.length; index++) {
    range.push(index+1) 
}

for (const i of names) {
    let idx = Math.floor((Math.random()*range.length))
    num = range[idx]
    console.log(`${i} - ${num}`)
    range.splice(idx,1)
    
}


