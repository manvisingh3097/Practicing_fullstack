function divv(num1 , num2) {
    if (num1%num2===0)
    {
        return `${num1} is divisible by ${num2}`

    }
    else
    {
        return `${num1} is not divisible by ${num2}`
    }
    
}
console.log(divv(10,5));