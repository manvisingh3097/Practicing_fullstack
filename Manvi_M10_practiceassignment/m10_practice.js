// // function name(x,y){
// //     return x+y;
    
// // }
// // let res = name(1,2)
// // console.log(typeof(res))

// // let neww = function multiply(x,y){
// //     return x * y;
// // }
// // console.log(neww(2,3));

// // let name = {
// //     first : "manvi",
    
// //     second : "singh"
// // };
// // (function(){

// // console.log(name.first + " " + name.second);
// // })(name);

// // let sum =  ()=>{
// //     return (`hello`);

// // }
// // console.log(sum()) 
    
// // let sum = (a, b)=> {
// //   return a + b
// // }
// // console.log(2+3);

// // const myfunc =(a,b) =>{
// //     return a+b;
// // }
// // console.log(10,+20)

// let sum = 0;

// const numbers = [5, 4, 7, 2, 9];

// numbers.forEach(calculateSum);

// function calculateSum(item) {

//  sum += item;

// }

// console.log(sum)

// const arr = [5, 4, 7, 2, 9];

// const newArr = arr.map(addCashback);

// //newArr = [15, 14, 17, 12, 19]

// function addCashback(item) {

//  item = item + 10;
//  return item;

// }

// console.log(newArr)

// const numbers = [5, 4, 7, 2, 9];

// function isNumberEven(eachNum) {

//   if (eachNum%2 == 0) {

//   return eachNum;

// }

// }

// console.log(numbers.find(isNumberEven))

// const numbers = [5, 4, 7, 2, 9];

// function isNumberEven(eachNum) {

//   if (eachNum%2 == 0) {

//   return eachNum;

// }

// }

// console.log(numbers.find(isNumberEven))


// const numbers = [ 2,3,5,4,8,6,9];
// function greater (number){

//     if (number>3){
//         return number
//     }}

// console.log(numbers.find( greater))

// const number = [9.2, 3, 0.8, 77.2, 53.87]

// number.reduce(function(){
//     return 
// console.log(number);
// let arrr =[]
// function multiply(...evenn){
    
//     arrr= evenn.push
//     console.log(evenn.sort())
    
    
// }
// multiply(4,8,2)

const user = {"id":1, "name":"Jon Doe"}

const clonedUser = {...user}
console.log(clonedUser)