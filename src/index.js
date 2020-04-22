'use strict'

const fibonacci = (number = 350) => {
    let arr = [0,1];
    let sum = 0;
    while (sum < number){
        sum = arr[arr.length - 2] + arr[arr.length - 1];
        arr.push(sum);
    }
    return arr;
}

const isFibonnaci = (num) => fibonacci().includes(num);

module.exports = {
    fibonacci,
    isFibonnaci
}
