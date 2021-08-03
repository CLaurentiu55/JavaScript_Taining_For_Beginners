/* X kg of chocolates cost A euro and Y kg of sugar candies cost B euro (positive numbers X, A, Y, B are given). 
Find the cost of 1 kg of the chocolates and the cost of 1 kg of the sugar candies. 
Also determine how many times the chocolates are more expensive than the sugar candies. */


function chocolates(X, A) {
    var X = A
    return X;
}

var case1 = 10;
var case2 = 50;
var result1 = chocolates(case1, case2);
console.log(result1);



function sugarCandies(Y, B) {
    var Y = B
    return Y;
}

var case1 = 10;
var case2 = 30;
var result1 = sugarCandies(case1, case2);
console.log(result1);



function chocolates2(kg1, A) {
    var kg1 = 0.1 * A
    return kg1;
}

var case1 = 1;
var case2 = 50;
var result1 = chocolates2(case1, case2);
console.log(result1);



function sugarCandies2(kg2, B) {
    var kg2 = 0.1 * B
    return kg2;
}

var case1 = 1;
var case2 = 30;
var result1 = sugarCandies2(case1, case2);
console.log(result1);



function comparasion(kg1, kg2) {
    var C = kg1 > kg2
    return C;
}

var case1 = 5;
var case2 = 3;
var result1 = comparasion(case1, case2);
console.log(result1);