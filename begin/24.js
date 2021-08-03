/*Variables A, B, C are given. Change values of the variables by moving the given value of A into the variable C, 
the given value of C into the variable B, and the given value of B into the variable A. Output the new values of A, B, C.*/


let z = 2;
let x = 5;
let y = 10;

function exchangeValues(z, x, y) {
    var values = [z, x, y];
    return values;
}

var result1 = exchangeValues(z, x, y);


console.log(`${result1[2]}, ${result1[1]} and ${result1[0]}`); 