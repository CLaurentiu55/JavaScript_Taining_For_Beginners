/* X kg of sweet cost A euro. Find the cost of 1 kg and Y kg of the sweets (positive numbers X, A, Y are given). */


function sweet(X, A) {
    var X = A
    return X;
}

var case1 = 10;
var case2 = 15;
var result1 = sweet(case1, case2);
console.log(result1);


function sweet2(kg, A) {
    var kg = 0.1 * A
    return kg;
}

var case1 = 1;
var case2 = 15;
var result1 = sweet2(case1, case2);
console.log(result1);


function sweet3(Y, A) {
    var Y = 0.5 * A
    return Y;
}

var case1 = 5;
var case2 = 15;
var result1 = sweet3(case1, case2);
console.log(result1);