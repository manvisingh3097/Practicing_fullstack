function findMostExpensiveCar(cars){
    let max=0
    let carname = ''
    for(let key in cars){
        if(cars[key]>max){
            max = cars[key]
            carname = key
        }
    }
    console.log(carname)
}

let cars = {'hyundai': 35000, 'tesla':100000, 'MG': 80000}
findMostExpensiveCar(cars)