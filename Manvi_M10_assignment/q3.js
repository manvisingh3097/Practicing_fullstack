let manufacturers = ['audi', 'BMw', 'ForD', 'mG', 'tata', 'MAHINDRA']

function stablizeallcase(man){
    let lowercasearr = []
    let uppercasearr = []

    for(let each of man){
        lowercasearr.push(each.toLowerCase())
        uppercasearr.push(each.toUpperCase())
    }
      return {
        alllowercase : lowercasearr,
        alluppercase : uppercasearr
      }}

console.log(stablizeallcase(manufacturers))