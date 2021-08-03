/*Variables A, B, C are given. Change values of the variables by moving the given value of A into the variable B, 
the given value of B into the variable C, and the given value of C into the variable A. Output the new values of A, B, C.*/

let m = 7;
let n = 15;
let p = 20;

function exchangeValues(m, n, p) {
    var values = [m, n, p];
    return values;
}

var result1 = exchangeValues(m, n, p);


console.log(`${result1[1]}, ${result1[2]} and ${result1[0]}`); 