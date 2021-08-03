/* Solve a linear equation A·x + B = 0 with given coefficients A and B 
(A is not equal to 0). */


function linearEcuation(A, B) {
    var X = A / B;
    return X; 
}

var firstTermen = 10;
var secondTermen = 5;
var result1 = linearEcuation(firstTermen, secondTermen, unknownTermen);
console.log(result1);