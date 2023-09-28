function findhighestorder(itemsarr , pricearr){
    let res = {}
    res.orders = []
    let highestordervalue = 0
    let highestorder = 0
    for (let i=0 ; i < pricearr.length; i++ ){
        if (pricearr[i]>highestordervalue){
            highestorder=pricearr[i]
            highestorder={
                [itemsarr[i]]: pricearr[i]
            }
        }

    }
    res.orders.push(highestorder)
    console.log(res)
}

findhighestorder(["item1", "item2", "item3"],[200, 400, 260])