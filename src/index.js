'use strict'

const fibonacciUntil = (number) => {
    let arr = [0,1];
    let sum = 0;
    while (sum < number){
        sum = arr[arr.length - 2] + arr[arr.length - 1];
        arr.push(sum);
    }
    return arr;
}


const fibonacci = () => {
    return fibonacciUntil(350);    
}

const isFibonnaci = (num) => {
    let arrFibonacci = fibonacci();
    return arrFibonacci.includes(num);
}

module.exports = {
    fibonacci,
    isFibonnaci
}
