let inp = parseInt(window.prompt("enter a number N : "))

let nums = []

const min = -100
const max = 100

for (let index = 0; index < inp; index++) {
    
    nums.push(Math.floor(Math.random() * (max - min)) + min)
}
console.log(nums.join(", "))
let gre = []
for (let index = 0; index < nums.length-1; index++) {
    if (nums[index]>nums[index+1]){
        
        gre.push(nums[index])
    }
}

console.log(gre.join(", "))
