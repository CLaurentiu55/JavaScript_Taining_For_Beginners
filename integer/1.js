/* A distance L is given in centimeters. 
Find the amount of full meters of this distance(1 m = 1000 cm). 
Use the operator of integer division. */


function distance(L) {
    var L = L / 1000;
    return L;
}

var length = 236;
var result1 = distance(length);
console.log(result1);