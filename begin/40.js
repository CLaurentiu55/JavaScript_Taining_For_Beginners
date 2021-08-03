/* Solve a system of linear equations

A1·x + B1·y = C1,
A2·x + B2·y = C2

with given coefficients A1, B1, C1, A2, B2, C2 provided that the system 
has the only solution. Use the following formulas:

x = (C1·B2 − C2·B1)/D,        y = (A1·C2 − A2·C1)/D,
where D = A1·B2 − A2·B1. */



function unknownItem(A1, B1, A2, B2) {
    var D = A1 * B2 - A2 * B1;
    return D; 
}

var firstTermen = 5;
var secondTermen = 2;
var thirdTermen = 1;
var fourthTermen = 4;
var result1 = unknownItem(firstTermen, secondTermen, thirdTermen, fourthTermen);
console.log(result1);






function startSolving(C1, B1, C2, B2, D) {    
    var x = (C1 * B2 - C2 * B1) / D;
    return x; 
}

var fifthTermen = 7;
var secondTermen = 2;
var sixthTermen = 10;
var fourthTermen = 4;   
var seventhTermen = 18
var result1 = startSolving(fifthTermen, secondTermen, sixthTermen, fourthTermen, seventhTermen);
console.log(result1);






function finishSolving(A1, C1, A2, C2, D) {
    var y = (A1 * C2 - A2 * C1) / D;
    return y; 
}
var firstTermen = 5;
var secondTermen = 2;
var thirdTermen = 1;
var fourthTermen = 4;   
var seventhTermen = 18;
var result1 = finishSolving(firstTermen, secondTermen, thirdTermen, fourthTermen, seventhTermen);
console.log(result1);