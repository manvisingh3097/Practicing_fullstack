const listofproducts = parseInt (prompt("enter the no. of products"))

products = [];

for (let i = 0 ; i<listofproducts ; i++){
  const productname = prompt(`enter the name of the product ${ i + 1}:`);
  const productquantity = parseInt( prompt(`enter the no. of the quantity ${productname}: `));

products.push({
  name : productname,
  quantity : productquantity
});
}
for (let product of products) {
  console.log(`${product.name} : ${product.quantity}`);
}
