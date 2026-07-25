// some of a range of numbers(1-N)

// 7= 1 + 2 + 3 + 4 + 5 + 6 + 7 =28


// without function
// let number = 7;

// let sum = 0;
// for(i = 1; i <= number; i++){
//      sum = sum + i;
//     console.log('i >>', i );
// }

// console.log('sum =>>', sum);


// with function

function sumRange(number){
    let sum = 0;
    for(let i = 1; i <= number; i++){
        sum = sum + i;
        console.log('i =>>', i);
    }
    return sum;
}

console.log(sumRange(7));
console.log(sumRange(9));
console.log(sumRange(3));