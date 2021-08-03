/* Solve a quadratic equation A·x·x + B·x + C = 0 with given coefficients A, B, C 
(A and the discriminant of the equation are positive). 
Output the smaller equation root and then the larger one. 
Roots of the quadratic equation may be found by formula

x1, 2 = (−B ± (D)1/2)/(2·A),

where D = B2 − 4·A·C is a discriminant. */



function discriminant(A, B, C) {
    var D = B * 2 - 4 * A * C;
    return D; 
}

var firstTermen = 5;
var secondTermen = 2;
var thirdTermen = 1;
var result1 = discriminant(firstTermen, secondTermen,thirdTermen);
console.log(result1);






function discriminant2(D) {
    var D = 0 - Math.sqrt(D);
    return D; 
}

var discriminant = 16;
var result1 = discriminant2(discriminant);
console.log(result1);






function result(A, B, D) {
    var X1 = (B + D) / (2 * A);
    return X1; 
}

var firstTermen = 5;
var secondTermen = -2;
var discriminant3 = -4;
var result1 = result(firstTermen, secondTermen, discriminant3);
console.log(result1);






function result2(A, B, D) {
    var X2 = (B - D) / (2 * A);
    return X2; 
}

var firstTermen = 5;
var secondTermen = -2;
var discriminant3 = -4;
var result1 = result2(firstTermen, secondTermen, discriminant3);
console.log(result1);

