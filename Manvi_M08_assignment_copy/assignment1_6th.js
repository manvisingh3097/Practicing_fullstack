function power(x, y) {
    let result = 1;
    for (let i = 0; i < y; i++) {
        result *= x;
    }
    console.log(result)
}
power(2,2)
