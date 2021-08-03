/*Given an independent variable x, find the value of a function y = 4(x−3)6 − 7(x−3)3 + 2.*/


function exercise(x) {
    var y = 4 * Math.pow(x - 3, 6) - 7 * Math.pow(x-3, 3) + 2;
    return y; 
}

var case1 = 3;
var result1 = exercise(case1);
console.log(result1);