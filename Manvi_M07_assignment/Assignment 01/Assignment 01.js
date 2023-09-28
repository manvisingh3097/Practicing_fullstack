let country = []
let inp = ""
while (true) {
    inp=window.prompt("enter country name")
    if (inp==0){
        break;
    }
    country.push(inp);
}
console.log(`Wow! There are coins from ${country.length} countries in this collection:`);

for (const each of country.sort()) {
    console.log(each)
}