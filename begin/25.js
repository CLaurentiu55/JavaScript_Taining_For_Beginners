/*Given an independent variable x, find the value of a function y = 3x6 − 6x2 − 7.*/


function exercise(x) {
    var y = 3 * Math.pow(x, 6) - 6 * Math.pow(x, 2) - 7;
    return y; 
}

var case1 = 2;
var result1 = exercise(case1);
console.log(result1);