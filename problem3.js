// Factorial of a Number
// without function

// let number = 5;

// let result = 1;

// for(let i = 1; i <= number; i++){
//     console.log('i =>>', i);
//     result = result * i;
    
// }
// console.log('result =>>', result);

// with function

    
function sumOfFact(number){
    let result = 1;
    for(let i = 1; i <= number; i++){
        result = result * i;
        console.log('i =>>', i);
        // console.log('result =>>',result);

    }
    return result;

}

// console.log(sumOfFact(5));
// console.log(sumOfFact(7));

let sumOfFactThree = sumOfFact(3);
console.log(sumOfFactThree);
